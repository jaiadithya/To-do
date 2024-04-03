import { Inter } from "next/font/google";
import "./globals.css";
import { connectMongoDB } from "@/lib/mongodb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do List ",
  description: "A task management module",
};

export default function RootLayout({ children }) {
  connectMongoDB()
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
