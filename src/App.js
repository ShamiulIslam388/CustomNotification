import React, { useState } from "react";
import "./styles.css";
import Notification from "./Notification";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Notification
        open={open}
        setOpen={setOpen}
        title="Success"
        message="Your changes has been saved"
      />
      <button
        onClick={() => setOpen(true)}
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        Show Toast
      </button>
    </div>
  );
}
