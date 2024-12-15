import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", required: true, placeholder: "Enter Email" },
        password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" }
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Both email and password are required.");
        }

        const currentUser = users.find(user => user.email === email && user.password === password);
        if (currentUser) {
          return currentUser;
        }

        throw new Error("Invalid credentials.");
      }
    }),


    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    })


  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.type = user.type;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.type = token.type;
      return session;
    },
  },
});

const users = [
  { id: 1, name: "imran", email: "m@gmail.com", type: "Admin", password: "password" },
  { id: 2, name: "imran2", email: "k@gmail.com", type: "Moderator", password: "password" },
  { id: 3, name: "imran3", email: "w@gmail.com", type: "Member", password: "password" }
];

export { handler as GET, handler as POST };
