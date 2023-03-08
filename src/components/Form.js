import React from "react";
import "../components/Form.css";

function Form() {
  return (
    <>
      <div className="form-container">
        <div className="upload-box">
          <div className="upload-box-top">
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <h2 className="upload-box-top-title">
              To create a new scanned document, drag and drop images or PDF
              files here, or click on:
            </h2>
          </div>
          <div className="upload-box-bottom">
            <button className="upload-button">
              <ion-icon name="document-attach-outline"></ion-icon> Upload
            </button>
            <button className="upload-button">
              <ion-icon name="camera-outline"></ion-icon> Scan
            </button>
          </div>
        </div>
        <form>
          <label>Nume/Surname:</label>
          <input type="text" name="lname" />
          <label>Prenume/Given name:</label>
          <input type="text" name="fname" />
          <label>Gen/Gender:</label>
          <input type="text" name="gender" />
          <label>Cetatenie/Nationality:</label>
          <input type="text" name="nationality" />
          <label>Data nasterii/Date of birth:</label>
          <input type="date" name="birthdate" />
          <label>CNP/PIN:</label>
          <input type="text" name="cnp" />
          <label>Nr.document/Document no.:</label>
          <input type="text" name="docnr" />
          <label>Data expirarii/Date of expiry:</label>
          <input type="date" name="expirydate" />
          <input className="form-button" type="submit" value="Save" />
        </form>
      </div>
    </>
  );
}

export default Form;
