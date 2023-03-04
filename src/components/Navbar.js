import React, { useState } from "react";
import "../components/Navbar.css";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a className="navbar-link" href="index.html">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="/">
              Profile
            </a>
          </li>
        </ul>
        <button
          onClick={() => setOpen(true)}
          className="navbar-button open-modal-btn"
        >
          Sign Up
        </button>
      </nav>
      {open && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-header">
              <h4 className="modal-title">Sign up</h4>
              <ion-icon
                onClick={() => setOpen(false)}
                name="close-outline"
              ></ion-icon>
            </div>
            <div className="modal-body">
              <form className="modal-form">
                <label>
                  <input type="text" name="name" placeholder="Name" />
                </label>
                <label>
                  <input type="text" name="e-mail" placeholder="E-mail" />
                </label>
                <label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
                <input className="modal-btn" type="submit" value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
