import React from "react";
import "../components/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-about">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              We are a young team that created this website in order to help and
              ease the exhausting process of filling/completing forms and
              documents by hand.
            </p>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contact</h3>
            <p className="footer-text contact-text">
              <ion-icon name="call-outline"></ion-icon> +0 123 456 679
            </p>
            <p className="footer-text contact-text">
              <ion-icon name="mail-outline"></ion-icon> help@docscanner.com
            </p>
          </div>
        </div>
        <div className="footer-right">
          <a className="footer-link" href="/">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a className="footer-link" href="/">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a className="footer-link" href="/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="footer-link" href="/">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
