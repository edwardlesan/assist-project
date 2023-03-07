import React, { useState, useEffect } from "react";
import "../components/Navbar.css";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

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
        <div className="navbar-btns">
          <button
            onClick={() => setOpen2(true)}
            className="navbar-button navbar-btn-secundary open-modal-btn"
          >
            Log in
          </button>
          <button
            onClick={() => setOpen(true)}
            className="navbar-button open-modal-btn"
          >
            Sign Up
          </button>
        </div>
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
              <form className="modal-form" onSubmit={handleSubmit}>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </label>
                <p>{formErrors.name}</p>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </label>
                {formErrors.email}
                <label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </label>
                <p>{formErrors.password}</p>
                <input className="modal-btn" type="submit" value="Sign up" />
              </form>
            </div>
          </div>
        </div>
      )}

      {open2 && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-header">
              <h4 className="modal-title">Log in</h4>
              <ion-icon
                onClick={() => setOpen2(false)}
                name="close-outline"
              ></ion-icon>
            </div>
            <div className="modal-body">
              <form className="modal-form" onSubmit={handleSubmit}>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </label>
                {formErrors.email}
                <label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </label>
                {formErrors.password}
                <input className="modal-btn" type="submit" value="Log in" />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
