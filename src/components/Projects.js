


import React from "react";

function Projects() {
  const projects = [
    {
    title: "Bidirectional Sign Language Translator App",
    description:
      "AI-powered application that converts sign language into text/speech and translates text into sign language for better communication.",
  },
     {
    title: "AI Dietician & Mental Health Tracker",
    description:
      "Smart web application that provides personalized diet recommendations and tracks mental health using AI and Machine Learning.",
  },
    {
    title: "BabyLoop E-Commerce Website",
    description:
      "Responsive e-commerce platform for baby products with product browsing, shopping cart, and user-friendly interface.",
  },
  ];

  return (
    <div
      style={{
        background: "#f5f5fa",
        minHeight: "100vh",
        padding: "70px 10%",
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
        Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "25px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#111827",
              fontSize: "22px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;