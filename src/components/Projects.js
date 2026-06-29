

// // // function Projects() {
// // //   const projects = [
// // //     {
// // //       title: "Sign Language Translator",
// // //       description: "AI-based translation system"
// // //     },
// // //     {
// // //       title: "AI Dietician",
// // //       description: "Personalized diet recommendation"
// // //     }
// // //   ];

// // //   const styles = {
// // //     container: {
// // //       maxWidth: "900px",
// // //       margin: "40px auto",
// // //       padding: "20px",
// // //       fontFamily: "Arial, sans-serif"
// // //     },
// // //     heading: {
// // //       textAlign: "center",
// // //       marginBottom: "30px"
// // //     },
// // //     card: {
// // //       backgroundColor: "#fff",
// // //       padding: "20px",
// // //       marginBottom: "20px",
// // //       borderRadius: "10px",
// // //       boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
// // //     },
// // //     title: {
// // //       color: "#333",
// // //       marginBottom: "10px"
// // //     },
// // //     description: {
// // //       color: "#666",
// // //       lineHeight: "1.6"
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2 style={styles.heading}>My Projects</h2>

// // //       {projects.map((project, index) => (
// // //         <div key={index} style={styles.card}>
// // //           <h3 style={styles.title}>{project.title}</h3>
// // //           <p style={styles.description}>{project.description}</p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default Projects;


// // import React from "react";

// // function Projects() {
// //   const projects = [
// //     {
// //       title: "Bidirectional Sign Language Translator",
// //       description:
// //         "AI-powered system that converts Indian Sign Language gestures into text and speech while supporting text-to-sign translation using Machine Learning and Computer Vision.",
// //     },
// //     {
// //       title: "AI Dietician & Mental Health Tracker",
// //       description:
// //         "Web application that provides personalized diet recommendations, calorie tracking, and mental health monitoring using Machine Learning techniques.",
// //     },
// //     {
// //       title: "Fake Medicine Detection System",
// //       description:
// //         "Smart verification system for identifying counterfeit medicines using QR code technology and machine learning-based validation.",
// //     },
// //   ];

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         background: "#071633",
// //         padding: "80px 0",
// //       }}
// //     >
// //       <div
// //         style={{
// //           width: "80%",
// //           margin: "auto",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             textAlign: "center",
// //             color: "white",
// //             fontSize: "48px",
// //             marginBottom: "50px",
// //             fontWeight: "700",
// //           }}
// //         >
// //           Projects
// //         </h1>

// //         {projects.map((project, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               background: "#ffffff",
// //               borderRadius: "20px",
// //               padding: "30px",
// //               marginBottom: "25px",
// //               boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
// //               transition: "0.3s",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 color: "#0f172a",
// //                 marginBottom: "15px",
// //                 fontSize: "30px",
// //               }}
// //             >
// //               {project.title}
// //             </h2>

// //             <p
// //               style={{
// //                 color: "#555",
// //                 fontSize: "18px",
// //                 lineHeight: "1.7",
// //               }}
// //             >
// //               {project.description}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Projects;



// import React from "react";

// function Projects() {
//   const projects = [
//     {
//       title: "GEMINO - AI Chatbot",
//       description:
//         "Developed an AI-powered chatbot using React.js and Firebase with interactive conversations and real-time responses.",
//     },
//     {
//       title: "Counterfeit Medicine Detection System",
//       description:
//         "Blockchain-based medicine verification system using QR code technology to identify counterfeit medicines.",
//     },
//     {
//       title: "Bidirectional Sign Language Translator",
//       description:
//         "AI-powered translation system that converts sign language into text and speech using Machine Learning.",
//     },
//   ];

//   return (
//     <div
//       style={{
//         backgroundColor: "#f5f5fa",
//         minHeight: "100vh",
//         padding: "80px 10%",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           color: "#0f172a",
//           fontSize: "60px",
//           marginBottom: "60px",
//         }}
//       >
//         Projects
//       </h1>

//       {projects.map((project, index) => (
//         <div
//           key={index}
//           style={{
//             background: "#ffffff",
//             borderRadius: "20px",
//             padding: "35px",
//             marginBottom: "25px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//           }}
//         >
//           <h2
//             style={{
//               color: "#111827",
//               marginBottom: "12px",
//               fontSize: "32px",
//             }}
//           >
//             {project.title}
//           </h2>

//           <p
//             style={{
//               color: "#444",
//               fontSize: "18px",
//               lineHeight: "1.8",
//             }}
//           >
//             {project.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;


import React from "react";

function Projects() {
  const projects = [
    {
      title: "GEMINO - AI Chatbot",
      description:
        "Developed an AI-powered chatbot using React.js and Firebase with interactive conversations and real-time responses.",
    },
    {
      title: "Counterfeit Medicine Detection System",
      description:
        "Blockchain-based medicine verification system using QR code technology to identify counterfeit medicines.",
    },
    {
      title: "Bidirectional Sign Language Translator",
      description:
        "AI-powered translation system that converts sign language into text and speech using Machine Learning and Computer Vision.",
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