import "./globals.css";
import { AuthProvider } from "../auth/AuthContext";
import NavBar from "@/components/NavBar";
import { AppProvider } from "@/context/AppContext";
import PushNotification from "@/context/PushNotification";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AppProvider>
            <NavBar />
            <div className="container-fluid">{children}</div>
            <PushNotification />
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
