// Login.js
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import Timer from "../timer/Timer";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const { displayName, email } = data.user;
        setEmail(email);
        setName(displayName);
        localStorage.setItem("email", email);
        localStorage.setItem("name", displayName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setName(localStorage.getItem("name"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4">Hello from Pomodoro Timer app!</h1>
      {email ? (
        <Timer name={name} />
      ) : (
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in With Google
        </button>
      )}
    </div>
  );
}

export default Login;
