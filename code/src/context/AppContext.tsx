"use client";
import { createContext, useContext, useMemo, useState } from "react";

type AppContextProps = {
  notification: {
    message: string;
    type: "success" | "error";
  } | null;
  setNotification: (notification: AppContextProps["notification"]) => void;
};

const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState<AppContextProps["notification"]>(null);

  const noticationContext = useMemo(() => ({
    notification,
    setNotification,
  }), [notification, setNotification]);

  return <AppContext.Provider value={noticationContext}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext)!;
