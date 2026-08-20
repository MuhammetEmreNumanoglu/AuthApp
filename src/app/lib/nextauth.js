import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
export const options ={
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
    GitHubProvider({
      clientId:process.env.GITHUB_ID,
      clientSecret:process.env.GITHUB_SECRET
    })
  ],
}