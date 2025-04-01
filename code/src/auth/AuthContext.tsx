"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, User } from "firebase/auth";
import Cookies from "js-cookie";
import "./config"; // Ensure Firebase is initialized

type AuthContextProps = {
  user: User | null;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        Cookies.set("auth-token", token, { expires: 1 });
        setUser(user);
      } else {
        Cookies.remove("auth-token");
        setUser(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext)!;
