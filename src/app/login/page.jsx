"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    Mail,
    Lock,
} from "lucide-react";

import {
    loginWithEmail,
    loginWithGoogle,
} from "@/services/auth.service";

export default function LoginPage() {
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [formData, setFormData] =
        useState({
            email: "",
            password: "",
        });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]:
                e.target.value,
        }));
    };

    const handleSubmit = async (
        e
    ) => {
        e.preventDefault();


        setError("");

        try {
            setLoading(true);

            const result =
                await loginWithEmail(
                    formData.email,
                    formData.password
                );

            if (!result.success) {
                throw new Error(
                    result.error
                );
            }

            router.push(
                "/dashboard"
            );
        } catch (error) {
            console.error(error);

            setError(
                error.message ||
                "Login Failed"
            );
        } finally {
            setLoading(false);
        }

    };

    const handleGoogleLogin =
        async () => {
            try {
                setLoading(true);

                const result =
                    await loginWithGoogle();

                if (!result.success) {
                    throw new Error(
                        result.error
                    );
                }

                router.push(
                    "/dashboard"
                );
            } catch (error) {
                console.error(error);

                setError(
                    error.message ||
                    "Google Login Failed"
                );
            } finally {
                setLoading(false);
            }
        };

    return (<section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12"> <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">


        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
                Welcome Back
            </h1>

            <p className="mt-2 text-gray-500">
                Login to SocietyHub
            </p>
        </div>

        {error && (
            <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {error}
            </div>
        )}

        <form
            onSubmit={
                handleSubmit
            }
            className="space-y-5"
        >
            {/* Email */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Email
                </label>

                <div className="flex items-center rounded-xl border px-3">
                    <Mail
                        size={18}
                        className="text-gray-400"
                    />

                    <input
                        type="email"
                        name="email"
                        required
                        value={
                            formData.email
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Enter your email"
                        className="w-full bg-transparent p-3 outline-none"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Password
                </label>

                <div className="flex items-center rounded-xl border px-3">
                    <Lock
                        size={18}
                        className="text-gray-400"
                    />

                    <input
                        type="password"
                        name="password"
                        required
                        value={
                            formData.password
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Enter password"
                        className="w-full bg-transparent p-3 outline-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
            >
                {loading
                    ? "Logging In..."
                    : "Login"}
            </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="px-3 text-sm text-gray-400">
                OR
            </span>

            <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Google Login */}
        <button
            onClick={
                handleGoogleLogin
            }
            disabled={loading}
            className="w-full rounded-xl border py-3 font-medium transition hover:bg-gray-50"
        >
            Continue With Google
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
                href="/signup"
                className="font-medium text-orange-500"
            >
                Sign Up
            </Link>
        </div>
    </div>
    </section>
    );
}
