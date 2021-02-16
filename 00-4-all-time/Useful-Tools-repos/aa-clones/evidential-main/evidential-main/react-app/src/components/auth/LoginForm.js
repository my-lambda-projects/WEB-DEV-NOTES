import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { loginOrRecheckPassword } from "../../services/auth";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import FAI from '../includes/FAI';

const LoginForm = ({ authenticated, setAuthenticated, setCurrentUser }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const checkFilled = () => {
      if (
        email.length &&
        password.length
      ) {
        setFilled(true);
      } else {
        setFilled(false);
      }
    }
    checkFilled();
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const user = await loginOrRecheckPassword(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      setCurrentUser(user);
    } else {
      setErrors(user.errors);
    }
  };

  const handleDemoLogin = (e) => {
    setEmail("demo@demo.demo");
    setPassword("hj8n%9Gw");
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="ev-content-wrapper ev-user-info-change">
      <h1>Log In</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="ev-form-errors">
            {errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          {/* TODO Fade button in/out */}
          { filled &&
              <button className="icon submit" type="submit"><FAI icon={faSignInAlt} /></button>
          }
          <button type="button" onClick={handleDemoLogin}>
            User Demo User Credentials
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
