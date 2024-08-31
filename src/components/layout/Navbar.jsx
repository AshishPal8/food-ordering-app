"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  const { status } = session;
  console.log(session);
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  return (
    <header className="flex justify-between items-center">
      <nav className="flex items-center justify-center gap-8 text-gray-500 font-semibold">
        <Link href="/" className="text-primary text-2xl font-semibold">
          <Image src={"/logo.png"} alt="Bytesnap" width={120} height={10} />
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={"#HomeMenu"}>Menu</Link>
        <Link href={"#About"}>About</Link>
        <Link href={"#Contact"}>Contact</Link>
      </nav>
      <nav>
        {status === "authenticated" && (
          <div className="flex items-center justify-center gap-4 text-gray-500 font-semibold">
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="px-5 py-2 bg-primary rounded-full text-white font-semibold"
            >
              Logout
            </button>
          </div>
        )}
        {status === "unauthenticated" && (
          <>
            <Link
              href={"/login"}
              className="px-5 py-2 rounded-full text-gray-500 font-semibold"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className="px-5 py-2 bg-primary rounded-full text-white font-semibold"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
