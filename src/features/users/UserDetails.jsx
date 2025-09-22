import React from "react";
import { UserCard } from "./components";
import { useUserData } from "./hooks";

export default function AuthPage() {
  const user = useUserData(); 
  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <UserCard user={user}/>
    </div>
  )
}