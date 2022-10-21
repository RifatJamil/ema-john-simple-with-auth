import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-titles">Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input placeholder="email" type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input placeholder="password" type="password" required />
        </div>
        <input
          className="btn-submit"
          type="submit"
          name="password"
          value="Login"
        />
      </form>
      <p>
        New to ema-john? <Link to="/signup">Create a New Account</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
