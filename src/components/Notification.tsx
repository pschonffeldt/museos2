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
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <div className={`notification ${visible ? "enter" : "exit"}`}>
      {message}
    </div>
  );
}
