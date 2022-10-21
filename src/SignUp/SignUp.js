import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirm.value;
    if (password !== confirmPass) {
      setError("Your Password didn't match");
      return;
    } else {
      setError(null);
    }
    console.log(email, password, confirmPass);
  };
  return (
    <div>
      <div className="form-container">
        <h2 className="form-titles">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="email" type="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              placeholder="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm password">Confirm Password</label>
            <input
              placeholder="password"
              name="confirm"
              type="password"
              required
            />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          New to ema-john? <Link to="/login">Already have an account?</Link>{" "}
        </p>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default SignUp;
