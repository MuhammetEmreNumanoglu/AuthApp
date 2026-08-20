import React from "react";
import BlogsPage from "../blogs/page";
import { getServerSession } from "next-auth";
import { options } from "../lib/nextauth";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      {!session ? (
        <p>It is not authanticated </p>
      ) : (
        <div>
<BlogsPage></BlogsPage>
        </div>
      )}
    </div>
  );
}
