import { getServerSession } from "next-auth";
import { options } from "../lib/nextauth";
import { redirect } from "next/dist/server/api-utils";

export default async function RegisterLayout(props) {
    const session = await getServerSession(options)
    if(session){
        redirect("/dashboard")
    }
  return <div>{props.children}</div>;
}
