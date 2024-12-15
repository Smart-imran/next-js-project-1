import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import AuthProvider from "./service/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Super Powerful Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <AuthProvider>

          <NavBar></NavBar>

          <div>
            {children}
          </div>
          <footer className=" bg-slate-300 text-red-500 text-center">
            This is footer
          </footer>

        </AuthProvider>

      </body>
    </html>
  );
}
