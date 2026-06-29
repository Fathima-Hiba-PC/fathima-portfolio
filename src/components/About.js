

import React from "react";
import profile from "../assets/profile3.jpeg";

function About() {
  const downloadResume = () => {
    window.open("/fathima Hiba pc-Resume.pdf", "_blank");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f5f5fa",
        padding: "80px 10%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: "1",
            textAlign: "center",
          }}
        >
          <img
            src={profile}
            alt="Fathima Hiba"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #7c4dff",
              boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
            }}
          />

          <div
            style={{
              marginTop: "25px",
              textAlign: "left",
              color: "#444",
              lineHeight: "2",
            }}
          >
            <p><strong>Name:</strong> Fathima Hiba PC</p>
            <p><strong>Education:</strong> B.Tech Information Technology</p>
            <p><strong>College:</strong> MEA Engineering College</p>
            <p>
  <strong>Email:</strong>{" "}
  <a
    href="mailto:fathimahibapc@gmail.com"
    style={{
      color: "#7c4dff",
      textDecoration: "none",
      fontWeight: "500",
    }}
  >
    fathimahibapc@gmail.com
  </a>
</p>
          </div>
        </div>

        {/* Right Side */}
        <div style={{ flex: "2" }}>
          <h1
            style={{
              fontSize: "42px",
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            About Me
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            I am Fathima Hiba PC, a recent B.Tech graduate in
            Information Technology from MEA Engineering College.
            I am passionate about software development and enjoy
            building responsive, user-friendly web applications.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            My technical skills include Python, JavaScript,
            React.js, HTML, CSS, Bootstrap, MySQL, Git and GitHub.
          </p>

          <button
            onClick={downloadResume}
            style={{
              padding: "12px 30px",
              border: "none",
              background: "#7c4dff",
              color: "#fff",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;