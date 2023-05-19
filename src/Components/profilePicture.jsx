import React from "react";
import profilePicture from "../Assets/profile_picture.jpg";
import "./style.css";
export default function Picture() {
  return (
    <img src={profilePicture} className="profile-picture" alt="profile"></img>
  );
}
