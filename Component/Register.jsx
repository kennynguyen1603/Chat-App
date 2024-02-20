import React, { useState } from "react";
import "../src/Styles/Register.less";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../src/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
  const [error, setError] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    const email = e.target[0].value;
    const password = e.target[1].value;
    const username = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, username);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
          console.error("Upload error:", error);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: username,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handleRegister}>
          <div className="formTitle">
            <span>Register</span>
          </div>
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email" />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>
          <div className="formInput">
            <label htmlFor="username">Name </label>
            <input type="text" id="username" placeholder="user name" />
          </div>
          <div className="formInput">
            <label htmlFor="file">Profile Picture</label>
            <input type="file" id="file" name="file" />
          </div>
          <div className="formButton">
            <button type="submit">Register</button>
          </div>
          {error ? <p>Something went wrong</p> : ""}
        </form>
        <p>
          Do you have an account? <a href="">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
