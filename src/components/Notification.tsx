// src/components/Notification.tsx
import React, { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  duration?: number;
}

export default function Notification({
  message,
  duration = 3000,
}: NotificationProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // whenever message or duration changes, show notification
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [message, duration]);

  return (
    <div className={`notification ${visible ? "enter" : "exit"}`}>
      {message}
    </div>
  );
}
