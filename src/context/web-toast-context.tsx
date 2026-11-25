"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface ToastItem {
  id: number;
  message: string;
  isError: boolean;
  visible: boolean;
}

interface ToastContextValue {
  showToast: (message: string, isError?: boolean) => void;
}

const WebToastContext = createContext<ToastContextValue | null>(null);

export function WebToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, isError = false) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, isError, visible: false }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: true } : t))
      );
    }, 20);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, visible: false } : t))
      );
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, 4200);
  }, []);

  return (
    <WebToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => {
          const bgColor = toast.isError
            ? "bg-red-600"
            : "bg-[#0b2c52] border-l-4 border-[#facc15]";
          const visibilityClass = toast.visible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0";
          return (
            <div
              key={toast.id}
              className={`${bgColor} text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm transform transition-all duration-300 pointer-events-auto ${visibilityClass}`}
            >
              <span className="text-sm font-medium">{toast.message}</span>
            </div>
          );
        })}
      </div>
    </WebToastContext.Provider>
  );
}

export function useWebToast() {
  const ctx = useContext(WebToastContext);
  if (!ctx) {
    throw new Error("useWebToast must be used within a WebToastProvider");
  }
  return ctx;
}
