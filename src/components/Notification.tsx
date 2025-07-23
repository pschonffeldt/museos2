// src/components/Notification.tsx
import { useEffect, useState } from "react";

interface NotificationProps {
  /** Text to display inside the capsule */
  message: string;
  /** How long (ms) the capsule stays visible before fading out */
  duration?: number;
}

/**
 * Small toast-like notification that fades in/out.
 * - Shows immediately whenever `message` (or `duration`) changes.
 * - Auto-hides after `duration` ms.
 * - Adds an extra CSS class based on the message so you can style states differently.
 */
export default function Notification({
  message,
  duration = 3000,
}: NotificationProps) {
  // Local visibility flag to drive CSS transitions
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Whenever the message or duration changes, re-show the notification
    setVisible(true);

    // Hide after `duration` ms
    const timeout = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timeout);
  }, [message, duration]);

  // Map specific messages to modifier classes (purely for styling)
  const extraClass =
    message === "Buscando..."
      ? "notification-searching"
      : message === "No hay resultados relacionados"
      ? "notification-notfound"
      : "";

  return (
    <div className={`notification ${extraClass} ${visible ? "enter" : "exit"}`}>
      {message}
    </div>
  );
}
