

import React from "react";

function Contact() {
  return (
    <div
      style={{
        background: "#f5f5fa",
        minHeight: "100vh",
        padding: "80px 10%",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0f172a",
          fontSize: "38px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        Contact Me
      </h1>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            marginBottom: "20px",
            color: "#374151",
          }}
        >
          📧 Email:
          <a
            href="mailto:fathimahibapc@gmail.com"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            fathimahibapc@gmail.com
          </a>
        </p>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "20px",
            color: "#374151",
          }}
        >
          💻 GitHub:
          <a
            href="https://github.com/Fathima-Hiba-PC"
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            View GitHub Profile
          </a>
        </p>

        <p
          style={{
            fontSize: "16px",
            color: "#374151",
          }}
        >
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/fathima-hiba-pc-699037256/"
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "8px",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            View LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;