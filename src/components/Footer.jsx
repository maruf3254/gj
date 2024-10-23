import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Name and Description */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Gold Jute</h3>
            <p className="text-gray-400 mb-4">
              Providing the best jute services with exceptional quality and
              sustainable practices. Our commitment is to the environment and
              our valued customers.
            </p>
            <Link
              to="/about"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              Learn more about us
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Address: 123 Jute Street, Dhaka, Bangladesh
              </li>
              <li className="text-gray-400">Phone: +880-1234-567890</li>
              <li className="text-gray-400">Email: info@goldjute.com</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest news and updates
              on jute products.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i> Twitter
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram"></i> Instagram
            </Link>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {currentYear} Gold Jute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
