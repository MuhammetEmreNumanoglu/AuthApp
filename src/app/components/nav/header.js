"use client";
import React from "react";
import Link from "next/link";
import { useSession ,signOut} from "next-auth/react";
export default function NavbarComponent() {
  const { data: session } = useSession();
  const logOut=()=>{
    signOut({
        callbackUrl:"/"
    })
  }
  return (
    <nav className="bg-gray-900 border-slate-400 text-white px-6 py-3">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl">
          AuthApp
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>

          {!session ? (
            <li>
              <Link href="/api/auth/signin">Register</Link>
            </li>
          ) : (
            <li>
              <button onClick={logOut} className="btn btn-danger bg-red-500 p-2 rounded">
                Log Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
