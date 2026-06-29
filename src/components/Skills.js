// // function Skills() {
// //   return (
// //     <section id="skills">
// //       <h2>Technical Skills</h2>

// //       <div className="skills-grid">
// //         <div>React.js</div>
// //         <div>JavaScript</div>
// //         <div>Python</div>
// //         <div>Django</div>
// //         <div>MySQL</div>
// //         <div>HTML</div>
// //         <div>CSS</div>
// //       </div>
// //     </section>
// //   );
// // }


// // export default Skills;


// import React from "react";

// function Skills() {
//   const skillsData = [
//     {
//       title: "Frontend",
//       skills: [
//         "HTML5",
//         "CSS3",
//         "JavaScript",
//         "React.js",
//         "Bootstrap",
//         "Responsive Design",
//       ],
//     },
//     {
//       title: "Backend",
//       skills: ["Python", "Django", "Java", "REST APIs"],
//     },
//     {
//       title: "Database",
//       skills: ["MySQL", "Firebase", "MongoDB"],
//     },
//     {
//       title: "Tools",
//       skills: ["Git", "GitHub", "VS Code", "Figma"],
//     },
//   ];

//   const styles = {
//     section: {
//       minHeight: "100vh",
//       background: "#f5f5fa",
//       padding: "80px 10%",
//       fontFamily: "Arial, sans-serif",
//     },

//     title: {
//       textAlign: "center",
//       fontSize: "3rem",
//       color: "#0f172a",
//       marginBottom: "20px",
//     },

//     subtitle: {
//       textAlign: "center",
//       fontSize: "1.2rem",
//       color: "#666",
//       marginBottom: "60px",
//     },

//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "30px",
//     },

//     card: {
//       background: "#fff",
//       borderRadius: "20px",
//       padding: "35px",
//       boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
//       textAlign: "center",
//       transition: "0.3s",
//     },

//     heading: {
//       color: "#7c4dff",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//     },

//     list: {
//       listStyle: "none",
//       padding: 0,
//       margin: 0,
//     },

//     item: {
//       margin: "12px 0",
//       fontSize: "1.1rem",
//       color: "#333",
//     },
//   };

//   return (
//     <section style={styles.section}>
//       <h1 style={styles.title}>Technical Skills & Technologies</h1>

//       <p style={styles.subtitle}>
//         A collection of technologies, frameworks, and tools that I use to
//         develop modern web applications.
//       </p>

//       <div style={styles.grid}>
//         {skillsData.map((category, index) => (
//           <div key={index} style={styles.card}>
//             <h3 style={styles.heading}>{category.title}</h3>

//             <ul style={styles.list}>
//               {category.skills.map((skill, i) => (
//                 <li key={i} style={styles.item}>
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;


// import React from "react";

// function Skills() {
//   const skillsData = [
//     {
//       title: "Frontend",
//       skills: [
//         "HTML5",
//         "CSS3",
//         "JavaScript",
//         "React.js",
//         "Bootstrap",
//         "Responsive Design",
//       ],
//     },
//     {
//       title: "Backend",
//       skills: ["Python", "Django", "Java", "REST APIs"],
//     },
//     {
//       title: "Database",
//       skills: ["MySQL", "Firebase", "MongoDB"],
//     },
//     {
//       title: "Tools",
//       skills: ["Git", "GitHub", "VS Code", "Figma"],
//     },
//   ];

//   const styles = {
//     section: {
//       minHeight: "100vh",
//       background: "#f5f5fa",
//       padding: "70px 10%",
//       fontFamily: "'Segoe UI', sans-serif",
//     },

//     title: {
//       textAlign: "center",
//       // fontSize: "2.3rem",
//       color: "#0f172a",
//       marginBottom: "15px",
//       fontWeight: "700",
//       fontSize: "38px"
//     },

//     subtitle: {
//       textAlign: "center",
//       fontSize: "1rem",
//       color: "#666",
//       marginBottom: "50px",
//     },

//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//       gap: "25px",
//     },

//     card: {
//       background: "#fff",
//       borderRadius: "18px",
//       padding: "25px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//       textAlign: "center",
//     },

//     heading: {
//       color: "#7c4dff",
//       marginBottom: "18px",
//       fontSize: "20px",
//       fontWeight: "600",
//     },

//     list: {
//       listStyle: "none",
//       padding: 0,
//       margin: 0,
//     },

//     item: {
//       margin: "10px 0",
//       fontSize: "15px",
//       color: "#444",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <section style={styles.section}>
//       <h1 style={styles.title}>Technical Skills & Technologies</h1>

//       <p style={styles.subtitle}>
//         A collection of technologies, frameworks, and tools that I use to
//         develop modern web applications.
//       </p>

//       <div style={styles.grid}>
//         {skillsData.map((category, index) => (
//           <div key={index} style={styles.card}>
//             <h3 style={styles.heading}>{category.title}</h3>

//             <ul style={styles.list}>
//               {category.skills.map((skill, i) => (
//                 <li key={i} style={styles.item}>
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;

import React from "react";

function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "Java", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MySQL", "Firebase", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  const styles = {
    section: {
      minHeight: "100vh",
      background: "#f5f5fa",
      padding: "70px 10%",
      fontFamily: "'Segoe UI', sans-serif",
    },

    title: {
      textAlign: "center",
      color: "#0f172a",
      marginBottom: "15px",
      fontWeight: "700",
      fontSize: "38px",
    },

    subtitle: {
      textAlign: "center",
      fontSize: "16px",
      color: "#666",
      marginBottom: "50px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "25px",
    },

    card: {
      background: "#fff",
      borderRadius: "18px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "2px solid transparent",
    },

    heading: {
      color: "#7c4dff",
      marginBottom: "18px",
      fontSize: "20px",
      fontWeight: "600",
    },

    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    item: {
      margin: "10px 0",
      fontSize: "15px",
      color: "#444",
      fontWeight: "500",
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Technical Skills & Technologies</h1>

      <p style={styles.subtitle}>
        A collection of technologies, frameworks, and tools that I use to
        develop modern web applications.
      </p>

      <div style={styles.grid}>
        {skillsData.map((category, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(124,77,255,0.25)";
              e.currentTarget.style.border =
                "2px solid #7c4dff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.08)";
              e.currentTarget.style.border =
                "2px solid transparent";
            }}
          >
            <h3 style={styles.heading}>{category.title}</h3>

            <ul style={styles.list}>
              {category.skills.map((skill, i) => (
                <li key={i} style={styles.item}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;