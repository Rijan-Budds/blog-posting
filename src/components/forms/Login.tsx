"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Login successful");
      router.refresh();
    } else {
      setMessage(data.error);
    }
  }

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      height: "100vh"
    }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          padding: 20, 
          border: "1px solid #ccc", 
          borderRadius: 10,
          minWidth: 300
        }}
      >
        <h2>Admin Login</h2>

        <div>
          <label>Email</label><br />
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Password</label><br />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button style={{ marginTop: 15 }} type="submit">
          Login
        </button>

        <p>{message}</p>
      </form>
    </div>
  );
}
