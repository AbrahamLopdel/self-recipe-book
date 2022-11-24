import { firebase } from "./../firebase/firebaseConfig";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notes";
import { PrivateAuthRouter } from "./PrivateAuthRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div className="auth__main">
        <h1 className=" animate__animated animate__bounce animate__infinite">
          Cargando...
        </h1>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/"
            component={PrivateAuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
