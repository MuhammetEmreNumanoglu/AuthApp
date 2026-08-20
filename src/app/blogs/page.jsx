"use client";
import React from "react";
import { useSession } from "next-auth/react";
export default function BlogsPage() {
  const { data: session, status } = useSession();
  console.log(status,session)
  return <div>Blogs Page</div>;
}
