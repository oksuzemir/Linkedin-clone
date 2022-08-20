import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error));
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
          <h4>Log In</h4>
          <p>Keep up-to-date with your professional world</p>
        </div>
        <form>
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
            Not a member?
            <a href="/register" className="login__register">
              <sub>&nbsp;</sub>
              Register Now
            </a>
          </p>
          <button onClick={loginToApp} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
