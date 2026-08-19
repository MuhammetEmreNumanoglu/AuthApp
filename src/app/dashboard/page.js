import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../lib/nextauth";
export default async function DashboardPage() {
  const session = await getServerSession(options);
  console.log(session);
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
