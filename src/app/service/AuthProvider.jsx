
'use client'; // Ensure this for client components

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;
