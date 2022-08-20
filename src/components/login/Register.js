import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: picture,
        });
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: picture,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        loading="lazy"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png"
        alt="LinkedIn Logo"
        width="110"
      />
      <div className="login__section">
        <div className="login__section-paragraph">
          <h4>Register</h4>
          <p>Keep up-to-date with your professional world</p>
        </div>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            type="text"
            placeholder="Profile Picture (Optional)"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <p>
            Are you a member?
            <a href="/login" className="login__register">
              <sub>&nbsp;</sub>
              Sign In Now
            </a>
          </p>
          <button onClick={register} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
