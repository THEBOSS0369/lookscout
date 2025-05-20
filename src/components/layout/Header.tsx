"use client";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  border-blue-500 bg-blue-600/90 backdrop-blur-md shadow-md animate-slideDown">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src="/hero/lookscout.png"
              className="h-full w-full"
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors link-hover animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors link-hover animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              Our Products
            </a>
            <div
              className="relative group animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="flex items-center text-white hover:text-blue-200 transition-colors link-hover">
                Resources
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown menu would go here */}
            </div>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors link-hover animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              Contacts
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-white hover:text-blue-200 transition-colors px-4 py-2 button-hover animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              Log in
            </button>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors button-hover animate-fadeIn"
              style={{ animationDelay: "0.7s" }}
            >
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-blue-600/90 rounded-lg animate-slideIn">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors link-hover"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors link-hover"
              >
                Our Products
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors link-hover"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors link-hover"
              >
                Contacts
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-blue-400">
                <button className="text-white hover:text-blue-200 transition-colors text-left button-hover">
                  Log in
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors text-left button-hover">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDown {
            animation: slideDown 0.8s ease-out forwards;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-out forwards;
          }
          .link-hover {
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .link-hover:hover {
            transform: scale(1.05);
          }
          .button-hover {
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          .button-hover:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </header>
  );
}
