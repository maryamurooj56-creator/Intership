import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="page">
      <section className="greeting" aria-labelledby="greeting-title">
        <span className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Your first React project
        </span>
        <h1 id="greeting-title">
          Hello,
          <br />
          <span>World!</span>
        </h1>
        <p>A little beginning for something wonderful.</p>
        <div className="divider" aria-hidden="true" />
        <span className="footer-note">Made with React</span>
      </section>
      <div className="decoration decoration-one" aria-hidden="true" />
      <div className="decoration decoration-two" aria-hidden="true" />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
