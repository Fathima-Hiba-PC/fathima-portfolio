


import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile3.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  
  const navigate = useNavigate();
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f5f5fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 10%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
          }}
        >
          <h3
            style={{
              color: "#7c4dff",
              fontSize: "18px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Hello, I'm
          </h3>

          {/* <h1
            style={{
              fontSize: "52px",
              color: "#111827",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Fathima Hiba PC
          </h1> */}
          <h1 style={{
  fontSize: "52px",
  fontWeight: "700",
  color: "#111827"
}}>
  Fathima Hiba PC
</h1>

          <h2
            style={{
              color: "#7c4dff",
              fontSize: "29px",
              fontWeight: "600",
              marginBottom: "25px",
            }}
          >
            Full Stack Developer
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "16px",
              lineHeight: "1.9",
              maxWidth: "550px",
            }}
          >
            B.Tech Information Technology graduate passionate about
            Python Development, React.js, Web Development and modern
            software technologies. Skilled in developing responsive
            and user-friendly web applications.
          </p>

          {/* Buttons */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <button
  onClick={() => navigate("/projects")}
  onMouseEnter={(e) => {
    e.target.style.background = "#6d28d9";
    e.target.style.transform = "translateY(-3px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "#7c4dff";
    e.target.style.transform = "translateY(0)";
  }}
  style={{
    background: "#7c4dff",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "0.3s",
  }}
>
  My Projects
</button>

            <button
  onClick={() => window.open("/fathima Hiba pc-Resume.pdf", "_blank")}
  onMouseEnter={(e) => {
    e.target.style.background = "#6d28d9";
    e.target.style.transform = "translateY(-3px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "#7c4dff";
    e.target.style.transform = "translateY(0)";
  }}
  style={{
    background: "#7c4dff",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "0.3s",
  }}
>
  Download CV
</button>
          </div>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "30px",
            }}
          >
            <a
  href="https://github.com/Fathima-Hiba-PC"
  target="_blank"
  rel="noreferrer"
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#7c4dff";
    e.currentTarget.style.transform = "scale(1.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#111827";
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    color: "#111827",
    fontSize: "28px",
    transition: "0.3s",
  }}
>
  <FaGithub />
</a>

            <a
  href="https://www.linkedin.com/in/fathima-hiba-pc-699037256/"
  target="_blank"
  rel="noreferrer"
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#7c4dff";
    e.currentTarget.style.transform = "scale(1.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#111827";
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    color: "#111827",
    fontSize: "28px",
    transition: "0.3s",
  }}
>
  <FaLinkedin />
</a>

            <a
  href="mailto:fathimahibapc@gmail.com"
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#7c4dff";
    e.currentTarget.style.transform = "scale(1.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#111827";
    e.currentTarget.style.transform = "scale(1)";
  }}
  style={{
    color: "#111827",
    fontSize: "28px",
    transition: "0.3s",
  }}
>
  <FaEnvelope />
</a>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          style={{
            flex: "1",
            textAlign: "center",
            minWidth: "300px",
          }}
        >
          <img
            src={profile}
            alt="Profile"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #7c4dff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;