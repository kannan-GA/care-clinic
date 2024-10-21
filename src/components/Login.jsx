// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Login({ setAuth }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    const { username, password } = credentials;

    // Mock authentication check (replace with real auth logic)
    if (username === "admin" && password === "admin123") {
      setAuth(true);
      toast.success("Login successful!");
      navigate("/admin");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-4">Admin Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
