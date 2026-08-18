import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
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
        const user = {
          id: "1",
          email: "emre@gmail.com",
          password: "1234",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };