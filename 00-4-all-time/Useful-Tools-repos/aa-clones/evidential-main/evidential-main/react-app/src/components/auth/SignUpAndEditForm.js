import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { signUpOrEdit, loginOrRecheckPassword } from '../../services/auth';
import { faSignInAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import FAI from '../includes/FAI';


const SignUpAndEditForm = ({authenticated, setAuthenticated, edit, currentUser, setCurrentUser}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationPassword, setVerificationPassword] = useState("")
  const [verified, setVerified] = useState(edit ? false : true)
  const [errors, setErrors] = useState([]);
  const [filled, setFilled] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);

  const passwordMatch = () => password === confirmPassword;


  useEffect(() => {
    const checkFilled = () => {
      if (
        // For SIGN UP all fields need entry for submission
        ( firstName.length &&
          lastName.length &&
          email.length &&
          password.length &&
          confirmPassword.length
        )
        ||
        // For EDIT at lease one field needs entry for submission
        ( verified &&
          (firstName.length +
          lastName.length +
          email.length +
          password.length +
          confirmPassword.length)
        )
      ) {
        setFilled(true);
      } else {
        setFilled(false);
      }
    }
    checkFilled();
  }, [firstName, lastName, email, password, confirmPassword, verified])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setEditSuccess(false);
    if (password === confirmPassword) {
      const user = await signUpOrEdit(firstName, lastName, email, password, confirmPassword, edit);
      if (!user.errors && !edit) {
        setAuthenticated(true);
        setCurrentUser(user);
      } else if (!user.errors && edit) {
        // currentUser = user; //Local property
        setCurrentUser(user); //Send up to App
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setEditSuccess(true);
      } else {
        setErrors(user.errors)
      }
    }
  };

  const handleVerify = async (e) => {
    if (!currentUser) return;
    e.preventDefault();
    setErrors([])
    const res = await loginOrRecheckPassword(currentUser.email, verificationPassword, edit);
    if ("validated" in res && res.validated === true) {
      setVerified(true)
    } else {
      setErrors(res.errors)
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const updateVerificationPassword = (e) => {
    setVerificationPassword(e.target.value);
  };


  if (authenticated && !edit) {
    return <Redirect to="/" />;
  }


  return (
    <div className="ev-content-wrapper ev-user-info-change">
      <h1>
      { (edit && `Edit ${currentUser.siteIdentifier}`)
        ||
        "Sign Up"
      }
      </h1>
      { (!!errors.length) &&
        <div className="ev-form-errors">
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
      }
      { edit && !verified &&
      <section className="verify">
        <p>
          Please submit a password verification in order to open up editing of your user information.
        </p>
        <form onSubmit={handleVerify}>
            <label htmlFor="verify_password">Verify Current Password</label>
            <input
              id="verify_password"
              type="password"
              name="verify_password"
              onChange={updateVerificationPassword}
              value={verificationPassword}
              required={edit}
            ></input>
          <button type="submit">Verify Identity</button>
        </form>
      </section>
      }
      { verified &&
        <main className="change-form">
          <h2>Verified! {editSuccess && <span className="ev-success">and successful submission!</span>}</h2>
          <p>
          { (edit && "Leave blank any items not being updated.")
            ||
            "All fields must be filled in."
          }
          </p>
          <p>As this is a site focused on academic integrity, please use real first and last names.</p>
          <p>{edit && "If updating Password, then"} Password and Confirm password must match and should have a minimum of 8 characters, with at least 1 lower case, 1 upper case, 1 number, and 1 special character of: {"#?!@$%^&*-"}</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                onChange={updateFirstName}
                value={firstName}
                maxLength={40}
                required={edit ? false : true}
              />
            </div>
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                onChange={updateLastName}
                value={lastName}
                required={edit ? false : true}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={updateEmail}
                value={email}
                required={edit ? false : true}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
                required={edit ? false : true}
              />
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                name="confirm_password"
                onChange={updateConfirmPassword}
                value={confirmPassword}
                required={password ? true : false}
                className={!passwordMatch() ? "error-border" : ""}
              />
              { !passwordMatch() &&
                <div className="unmatched-confirm">Confirm must match password</div>
              }
            </div>
            { filled &&
              <button className="icon submit" type="submit">{edit ? <FAI icon={faSave} /> : <FAI icon={faSignInAlt} />}</button>
            }
          </form>
        </main>
      }
    </div>
  );
};

export default SignUpAndEditForm;
