import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="/" className="flex items-center">
              <span className="text-blue-400">My</span>
              <span>App</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-400 transition duration-300">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-blue-400 transition duration-300"
            >
              Pricing
            </a>
            <a
              href="/services"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </a>
            <a
              href="/blog"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-2 space-y-4">
            <a
              href="/"
              className="block hover:text-blue-400 py-2 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="block hover:text-blue-400 py-2 transition duration-300"
            >
              About
            </a>
            <a
              href="/services"
              className="block hover:text-blue-400 py-2 transition duration-300"
            >
              Services
            </a>
            <a
              href="/blog"
              className="block hover:text-blue-400 py-2 transition duration-300"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="block hover:text-blue-400 py-2 transition duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
