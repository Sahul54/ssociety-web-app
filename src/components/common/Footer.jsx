import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-xl bg-orange-500 p-2 text-white">
                {/* <Building2 size={20} /> */}
              </div>

              <h3 className="text-xl font-bold">
                SocietyHub
              </h3>
            </div>

            <p className="max-w-md text-gray-600">
              Discover trusted local services from verified
              neighbors and help talented people earn from
              their skills.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">
              Company
            </h4>

            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-600 hover:text-orange-500"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block text-gray-600 hover:text-orange-500"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="block text-gray-600 hover:text-orange-500"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block text-gray-600 hover:text-orange-500"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold">
              Follow Us
            </h4>

            <div className="flex gap-4 text-xl">
  <a href="#">
    <FaInstagram />
  </a>

  <a href="#">
    <FaFacebook />
  </a>

  <a href="#">
    <FaLinkedin />
  </a>
</div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © 2026 SocietyHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}