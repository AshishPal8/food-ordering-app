"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/register", { email, password });
      console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-6xl font-semibold">Register</h1>
        <p className="my-3">
          More than{" "}
          <span className="text-primary font-semibold">15,000 Recipes</span>{" "}
          around the world
        </p>
      </div>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="text-center my-3 text-gray-500">or login with</div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-2"
        >
          <Image src={"/google.png"} alt="G" width={24} height={24} />
          Login with Google
        </button>
        <div className="my-4 text-gray-500 border-t-2 py-2 text-center">
          Existing Account{"  "}
          <Link
            className="underline text-red-600 font-semibold"
            href={"/login"}
          >
            Login here &raquo;
          </Link>
        </div>
      </form>
    </div>
  );
}
