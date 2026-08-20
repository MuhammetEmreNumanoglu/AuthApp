"use client";
import React from "react";
import { useSession } from "next-auth/react";
export default function BlogsPage() {
  const { data: session, status } = useSession();
  return (
    <div>
      <p>Welcome {session?.user?.email}</p>
      <p>Your account is {status}</p>
    </div>
  );
}
