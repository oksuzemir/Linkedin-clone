import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./styles/App.scss";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase/firebase";

const Header = React.lazy(() => import("./components/header/Header"));
const RedirectLoad = React.lazy(() => import("./components/RedirectLoad"));
const FixedOptions = React.lazy(() =>
  import("./components/fixedbar/FixedOptions")
);
const Home = React.lazy(() => import("./components/home/Home"));
const LoginFooter = React.lazy(() => import("./components/login/LoginFooter"));
const Register = React.lazy(() => import("./components/login/Register"));
const Login = React.lazy(() => import("./components/login/Login"));

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(false);
  const [preLoad, setPreLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreLoad(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 830) {
      setWidth(true);
    }
    const handleResize = () => {
      if (window.innerWidth > 830) {
        setWidth(false);
      } else {
        setWidth(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth?.displayName) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else if (!userAuth) {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router basename="/">
      <div className="app">
        {preLoad ? (
          <Suspense fallback={null}>
            <RedirectLoad />
          </Suspense>
        ) : (
          <Switch>
            <Route exact path="/login">
              <Suspense fallback={null}>
                <Login />
              </Suspense>
              <Suspense fallback={null}>
                <LoginFooter />
              </Suspense>
              <Redirect from="/login" to={!user ? "/login" : "/home"} />
            </Route>
            <Route exact path="/home">
              <Suspense fallback={null}>
                <Header />
              </Suspense>
              <Suspense fallback={null}>
                <Home />
              </Suspense>
              {width && (
                <Suspense fallback={null}>
                  <FixedOptions />
                </Suspense>
              )}
              <Redirect from="/home" to={!user ? "/login" : "/home"} />
            </Route>
            <Route exact path="/register">
              <Suspense fallback={null}>
                <Register />
              </Suspense>
              <Suspense fallback={null}>
                <LoginFooter />
              </Suspense>
              <Redirect from="/register" to={!user ? "/register" : "/home"} />
            </Route>
            <Route>
              <Redirect exact from="/" to={user ? "/home" : "/login"} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
