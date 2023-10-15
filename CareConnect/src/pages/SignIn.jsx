import React from 'react';
import { Link, /*Redirect*/ } from 'react-router-dom';
import { useAuth } from '../components/Auth.jsx';


function SignIn() {
  {/*const { user, setUser } = useAuth();

  const handleSignIn = () => {
    setUser({ user: 'exampleUser' });
  };

  if (user) {
    return <Redirect to="/account" />;
  }*/}

  return (
    <div className="container">
      <form className="form" id="signInForm">
        <h2 style={{ textAlign: "center", margin: "80px 0px 30px 0px" }}>Sign In</h2>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          type="button"
          style={{ backgroundColor: "darkblue", color: "white", margin: "30px 0px 30px 0px" }}
          /*onClick={handleSignIn}*/
        >
          Sign In
        </button>
      </form>
      <p>Don't have an account? <Link to="/signup" style={{ color: "blue" }}>Sign Up</Link></p>
    </div>
  );
}

export default SignIn;
