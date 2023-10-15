import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [hasPreferredCaregiver, setHasPreferredCaregiver] = useState(null);
  const [requestCaregiver, setRequestCaregiver] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Sign Up Form");
  };

  return (
    <div className="container">
      <form id="signUpForm" onSubmit={handleSubmit}>
        <h2>Welcome to SeniorConnect!</h2>
        <p>Please provide some details to create your profile.</p>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Choose a username"
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Choose a strong password"
          required
        />

        <h4>Which games do you enjoy?</h4>
        <label>
          <input type="checkbox" name="game_memory" /> Memory Games
        </label>
        <label>
          <input type="checkbox" name="game_puzzle" /> Puzzles
        </label>

        <h4>About Caregivers</h4>
        <p>Do you have a preferred caregiver?</p>
        <label>
          <input
            type="radio"
            name="preferred_caregiver"
            value="yes"
            onChange={() => setHasPreferredCaregiver(true)}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="preferred_caregiver"
            value="no"
            onChange={() => setHasPreferredCaregiver(false)}
          />{" "}
          No
        </label>

        {hasPreferredCaregiver && (
          <>
            <label htmlFor="caregiver_name"> What's their name?</label>
            <input
              type="text"
              id="caregiver_name"
              name="caregiver_name"
              placeholder="Caregiver's Name"
            />
          </>
        )}

        {hasPreferredCaregiver === false && (
          <>
            <p>Would you like us to assign a caregiver to you?</p>
            <label>
              <input
                type="checkbox"
                name="request_assigned_caregiver"
                checked={requestCaregiver}
                onChange={(e) => setRequestCaregiver(e.target.checked)}
              />{" "}
              Yes, please.
            </label>
          </>
        )}

        <h4>Which activities interest you?</h4>
        <label>
          <input type="checkbox" name="activity_hangouts" /> Participating in
          Senior Hangouts
        </label>
        <label>
          <input type="checkbox" name="activity_jogging" /> Following Jogging
          Guides
        </label>
        <label>
          <input type="checkbox" name="activity_meditation" /> Learning
          Meditation through Tutorials
        </label>

        <h4>Your Health Journal</h4>
        <p>
          Provide some information about your health, medications, or any
          special requirements you have. This will be kept confidential.
        </p>
        <textarea
          name="health_journal"
          placeholder="E.g., Daily medications, allergies, etc."
          rows="4"
        ></textarea>

        <button type="submit">Create My Profile</button>
      </form>

      <p>
        Already registered? <Link to="/SignIn">Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
