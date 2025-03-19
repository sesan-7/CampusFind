import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    console.log("Footer has been mounted!");

    // Updating the year dynamically every January 1st
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60 * 24);

    return () => {
      console.log("Footer is being unmounted!");
      clearInterval(interval);
    };
  }, [currentYear]);

  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>

        {/* Column 2: Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Column 3: Contact */}
        {/* <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 Street, City, Country</p>
        </div> */}

        {/* Column 4: Newsletter */}
        {/* <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates</p>
          <input type="email" placeholder="Enter your email" />
          <button type="button">Subscribe</button>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} CampusFind. All rights reserved.</p>
      </div>
    </footer>
  );
}
