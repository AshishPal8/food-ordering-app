"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });
    setLoginInProgress(false);
  }

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-6xl font-semibold">Login</h1>
        <p className="my-3">
          More than{" "}
          <span className="text-primary font-semibold">15,000 Recipes</span>{" "}
          around the world
        </p>
      </div>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
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
          Dont have an Account{"  "}
          <Link
            className="underline text-red-600 font-semibold"
            href={"/register"}
          >
            Register here &raquo;
          </Link>
        </div>
      </form>
    </div>
  );
}
