import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="form-container">
        <h2 className="form-titles">Sign Up</h2>
        <form>
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
      </div>
    </div>
  );
};

export default SignUp;
