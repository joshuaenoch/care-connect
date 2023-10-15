import React from "react";
import "../index.css";

function SignInSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Form");
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

      <form id="signUpForm" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignInSignUp;
