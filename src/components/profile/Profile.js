import React, { useState } from "react";
import "./Profile.scss";
import { FaTrashAlt } from "react-icons/fa";
import { profileData } from "../../profile-data";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);

  const removeProfile = (id) => {
    const newProfileList = userProfile.filter((profile) => profile.id !== id);
    setUserProfile(newProfileList);
  };
  return (
    <section className="profile-section --flex-center --100vh --bg-primary">
      <div className="container">
        <h2 className="--text-light">User Profile App</h2>

        {userProfile.map((profile) => (
          <div className="profile --card --flex-between --p key={profile.id}">
            <img src={profile.img} alt="profile" />
            <div className="desc">
              <h4 className="--text-light">Name: {profile.name}</h4>
              <p className="--text-light">Job: {profile.job}</p>
            </div>

            <FaTrashAlt
              size={18}
              className="icon"
              onClick={() => removeProfile(profile.id)}
            />
          </div>
        ))}

        <button
          className="--btn --btn-danger"
          onClick={() => setUserProfile([])}
        >
          Clear All
        </button>
      </div>
    </section>
  );
};

export default Profile;
