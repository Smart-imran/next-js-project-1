import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [

    CredentialsProvider({

      credentials: {
        email: { label: "Email", type: "text", required: true, placeholder: "Enter Email" },
        password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" }
      },

      async authorize(credentials) {

        const { email, password } = credentials;


        if (!credentials) {
          return null;
        }

        if (email) {

          const currentUser = users.find((user) => user.email === email)
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;

      }
    })
  ],

});


const users = [

  {
    id: 1,
    name: "imran",
    email: "m@gmail.com",
    password: "password",
  },


  {
    id: 2,
    name: "imran2",
    email: "k@gmail.com",
    password: "password",
  },

  {
    id: 3,
    name: "imran3",
    email: "w@gmail.com",
    password: "password",
  }

];


export { handler as GET, handler as POST };