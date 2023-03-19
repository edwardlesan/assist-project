import React from "react";
import "./Profile.css";
import ProfileImg from "./img/profile_img.svg";

function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-box">
          <div className="left-box">
            <h1 className="profile-title">My Profile</h1>
            <img src={ProfileImg} alt="Profile Image"></img>
          </div>
          <div className="right-box">
            <form className="profile-form">
              <input type="text" name="nume" placeholder="Nume/Name"></input>
              <input
                type="text"
                name="prenume"
                placeholder="Prenume/Surname"
              ></input>
              <input type="text" name="age" placeholder="Varsta/Age"></input>
              <input
                className="profile-button"
                type="submit"
                value="Salveaza/Save"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
