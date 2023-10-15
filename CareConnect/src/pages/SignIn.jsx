import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Sign In Form");
  };

  return (
    <div className="container">
      <form id="signInForm" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default SignIn;

