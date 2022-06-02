import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function SignupButton() {
  return (
    <Link to="sign-up">
      <button className="signup">Sign Up</button>
    </Link>
  );
}
