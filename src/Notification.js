import React, { useEffect } from "react";

export default function ({ open, setOpen, title, message }) {
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, [3000]);
  }, [open]);
  return (
    <div
      className={`flex flex-col shadow-xl h-fit w-fit p-5 rounded-xl absolute top-0 transition-all duration-300 ${
        open ? "translate-x-0 right-4" : "translate-x-full right-0"
      }`}
      onClick={() => setOpen(false)}
    >
      <div className="text-green-500">{title}</div>
      <div className="text-gray-500">{message}</div>
    </div>
  );
}
