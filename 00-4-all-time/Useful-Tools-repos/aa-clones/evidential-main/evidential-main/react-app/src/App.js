import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpAndEditForm from "./components/auth/SignUpAndEditForm";
import NavBar from "./components/structure/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import {
  User,
  TextDetail,
  Home
} from "./Pages";
import { authenticate } from "./services/auth";
import Footer from "./components/structure/Footer";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (user && !user.errors) {
        setAuthenticated(true);
        setCurrentUser(user);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact={true}>
          <Home authenticated={authenticated} currentUser={currentUser} />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpAndEditForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setCurrentUser={setCurrentUser}
            edit={false}
          />
        </Route>
        <Route path={["/text/view/:textId(\\d+)",
                      "/text/analyze/:textId(\\d+)"]}
                      exact={true}>
          <TextDetail authenticated={authenticated} currentUser={currentUser} />
        </Route>
        <ProtectedRoute path="/edit-your-info" exact={true} authenticated={authenticated}>
          <SignUpAndEditForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            edit={true}
          />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId(\\d+)" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <Route path="/page-not-found">
          <div className="ev-content-wrapper">
            <h1>We are sorry, the requested page was not found.</h1>
          </div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
