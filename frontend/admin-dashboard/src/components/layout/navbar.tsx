"use client"
import Link from "next/link";
import { useState } from "react";
 
 
export function Navbar(){

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <div className="bg-grey-900">
        <header className="fixed inset-x-0 top-0 z-50 ">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-white">
                  Admin Dashboard
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                href="/signup"
                className="text-sm font-semibold text-white hover:text-blue-400"
              >
                Signup
              </Link>

              <Link
                href="/login"
                className="text-sm font-semibold text-white hover:text-blue-400"
              >
                Login
              </Link>

              <Link
                href="/settings"
                className="text-sm font-semibold text-white hover:text-blue-400"
              >
                Settings
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-gray-900 lg:hidden">
              <div className="flex items-center justify-between p-6">
                <h2 className="text-xl font-bold text-white">
                  Admin Dashboard
                </h2>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-white"
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-2 px-6 py-6">
                <Link
                  href="/signup"
                  className="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Signup
                </Link>

                <Link
                  href="/login"
                  className="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  href="/settings"
                  className="block rounded-lg px-3 py-2 text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>
    );  
}