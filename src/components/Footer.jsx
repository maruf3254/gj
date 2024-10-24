import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [contactInfo, setContactInfo] = useState({
    address: "",
    phone: "",
    email: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    // Fetch the contact information from the API
    const fetchContactInfo = async () => {
      try {
        const response = await fetch("https://goldjute.vercel.app/api/contact");
        const data = await response.json();
        setContactInfo({
          address: data.Address,
          phone: data.phone,
          email: data.email,
          facebook: data.facebooklink,
          twitter: data.twitterlink,
          instagram: data.instalink,
        });
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching contact info:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchContactInfo();
  }, []);

  if (loading) {
    // Show a loading message or spinner while data is being fetched
    return (
      <div className="text-center text-gray-300 py-12">
        <p>Loading contact information...</p>
      </div>
    );
  }

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
              <li className="text-gray-400">Address: {contactInfo.address}</li>
              <li className="text-gray-400">Phone: {contactInfo.phone}</li>
              <li className="text-gray-400">Email: {contactInfo.email}</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Sustainability
            </h3>
            <p className="text-gray-400 mb-4">
              Committed to eco-friendly practices, Gold Jute uses 100% natural,
              biodegradable materials, supporting local farmers and reducing
              waste.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
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
