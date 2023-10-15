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
        <h2 style={{textAlign: "center", margin: "80px 0px 30px 0px"}}>Sign In</h2>
        <input style={{ display: "flex", justifyContent: "center" }} type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </form>
      <button type="submit" style={{ backgroundColor: "darkblue", color: "white", margin: "30px 0px 30px 0px"}}>Sign In</button>
      <p>Don't have an account? <Link to="/signup" style={{color: "blue"}}>Sign Up</Link></p>
    </div>
  );
}

export default SignIn;

