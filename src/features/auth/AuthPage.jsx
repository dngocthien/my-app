import React from "react";
import {SignupForm} from "./components"; 

export default function AuthPage() {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Sign Up</h2>
      <SignupForm />
    </div>
  )
}