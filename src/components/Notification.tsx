// src/components/Notification.tsx
import React, { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  duration?: number;
}

export default function Notification({
  message,
  duration = 100000,
}: NotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timeoutId = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeoutId);
  }, [duration]);

  return (
    <div className={`notification ${visible ? "enter" : "exit"}`}>
      <p className="notification-text">{message}</p>
    </div>
  );
}
