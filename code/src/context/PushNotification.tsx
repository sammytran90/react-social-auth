"use client";
import { useEffect } from "react";
import { useApp } from "./AppContext";

export default function PushNotification() {

  const { notification, setNotification } = useApp();

  useEffect(() => {
    if (notification) {
      console.log(notification);
      setTimeout(() => {
        setNotification(null);
      }, 1500);
    }
  }, [notification]);



  return notification ? (
    <div className="fixed bottom-0 right-0 m-4">
      <div className={`p-4 rounded-lg shadow-lg transition-opacity duration-500 ${notification ? "opacity-100" : "opacity-0"} ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
        <p className="text-white">{notification.message}</p>
      </div>
    </div>
  ) : null;
}
