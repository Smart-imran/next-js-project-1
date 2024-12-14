import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      // Sign-in form display name
      name: "Credentials",

      // Fields for the credentials form
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Your Password",
        },
      },

      // Authorization logic
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Both email and password are required.");
        }

        // Dummy validation (replace with database check in production)
        const user = { id: 1, email: "test@example.com", password: "test123" };

        if (email === user.email && password === user.password) {
          return user;
        } else {
          throw new Error("Invalid email or password.");
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
