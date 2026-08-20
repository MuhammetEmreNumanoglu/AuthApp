import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../lib/nextauth";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const session = await getServerSession(options);
  if(!session)
  {
    redirect("/")
  }
  return (
    <div>
      {!session ? (
        <p>It is not authanticated </p>
      ) : (
        <p>{session.user?.email}</p>
      )}
    </div>
  );
}
