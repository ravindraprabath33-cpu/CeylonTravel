import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#123d32] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#a4f3ca]/30 animate-slideUp text-xs md:text-sm font-medium">
      <span className="material-symbols-outlined text-[#a4f3ca] text-[20px]">
        info
      </span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
