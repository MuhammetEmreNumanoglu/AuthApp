import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import DBConnect from "./db";
import User from "./models/user";
import { passwordCheck } from "../components/utils";
export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },

        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },

      async authorize(credentials, req) {
        await DBConnect();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          return null;
        }
        const validPass = await passwordCheck(
          credentials.password,
          user.password,
        );

        if(!validPass)
        {
          return null
        }
        return user;
      },
    }),
  ],
};
