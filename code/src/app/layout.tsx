import "./globals.css";
import { AuthProvider } from "../auth/AuthContext";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavBar />
          <div className="container-fluid">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
