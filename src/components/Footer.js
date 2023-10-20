import React from 'react';
import './Footer.css'; // You can create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Designing Experiences, Not Just Products.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <address>
            123 Main Street, City<br />
            Country, ZIP Code<br />
            Phone: (123) 456-7890<br />
            Email: info@beyondlabel.com
          </address>
        </div>

        <div className="footer-section">
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Beyond Label. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
