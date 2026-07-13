"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    User,
    Mail,
    Lock,
    Briefcase,
} from "lucide-react";

import {
    signupWithEmail,
    loginWithGoogle,
} from "@/services/auth.service";

export default function SignupPage() {
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: "",
            role: "user",
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
                await signupWithEmail({
                    name: formData.name,
                    email: formData.email,
                    password:
                        formData.password,
                    role: formData.role,
                });

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
                "Signup Failed"
            );
        } finally {
            setLoading(false);
        }


    };

    const handleGoogleSignup =
        async () => {
            try {
                setLoading(true);


                const result =
                    await loginWithGoogle(
                        formData.role
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
                    "Google Signup Failed"
                );
            } finally {
                setLoading(false);
            }
        };


    return (<section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12"> <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">


        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">
                Create Account
            </h1>

            <p className="mt-2 text-gray-500">
                Join SocietyHub today
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
            {/* Name */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Full Name
                </label>

                <div className="flex items-center rounded-xl border px-3">
                    <User
                        size={18}
                        className="text-gray-400"
                    />

                    <input
                        type="text"
                        name="name"
                        required
                        value={
                            formData.name
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Enter your name"
                        className="w-full bg-transparent p-3 outline-none"
                    />
                </div>
            </div>

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
                        minLength={6}
                        value={
                            formData.password
                        }
                        onChange={
                            handleChange
                        }
                        placeholder="Create password"
                        className="w-full bg-transparent p-3 outline-none"
                    />
                </div>
            </div>

            {/* Role */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    I Want To
                </label>

                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                role: "user",
                            })
                        }
                        className={`rounded-xl border p-3 text-sm font-medium ${formData.role ===
                                "user"
                                ? "border-orange-500 bg-orange-50 text-orange-600"
                                : ""
                            }`}
                    >
                        Find Services
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                role:
                                    "provider",
                            })
                        }
                        className={`rounded-xl border p-3 text-sm font-medium ${formData.role ===
                                "provider"
                                ? "border-orange-500 bg-orange-50 text-orange-600"
                                : ""
                            }`}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Briefcase size={16} />
                            Provide Services
                        </div>
                    </button>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
            >
                {loading
                    ? "Creating Account..."
                    : "Create Account"}
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

        {/* Google Signup */}
        <button
            onClick={
                handleGoogleSignup
            }
            disabled={loading}
            className="w-full rounded-xl border py-3 font-medium transition hover:bg-gray-50"
        >
            Continue With Google
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
                href="/login"
                className="font-medium text-orange-500"
            >
                Login
            </Link>
        </div>
    </div>
    </section>
    );
}
