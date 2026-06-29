


// import React from "react";

// function About() {
//   return (
//     <section style={styles.about}>
//       <div style={styles.container}>

//         {/* Left Side */}
//         <div style={styles.left}>
//           <img
//             src="profile3.jpeg"
//             alt="Profile"
//             style={styles.image}
//           />

//           <div style={styles.info}>
//             <p><strong>Name:</strong> Fathima Hiba PC</p>
//             <p><strong>Education:</strong> B.Tech Information Technology</p>
//             <p><strong>College:</strong> MEA Engineering College</p>
//             <p><strong>Email:</strong> fathimahibapc@gmail.com</p>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div style={styles.right}>
//           {/* <p style={styles.tag}>ABOUT ME</p> */}

//           <h1 style={styles.heading}>
//             About <span style={{ color: "#3b82f6" }}>Me</span>
//           </h1>

//           <p style={styles.text}>
//             I am <b>Fathima Hiba PC</b>, a recent B.Tech graduate in
//             Information Technology from MEA Engineering College. I am
//             passionate about software development and enjoy building
//             responsive, user-friendly web applications.
//           </p>

//           <p style={styles.text}>
//             My technical skills include Python, JavaScript, React.js,
//             HTML, CSS, Bootstrap, MySQL, Git, and GitHub. I have a
//             strong interest in Frontend and Full Stack Development.
//           </p>

//           <p style={styles.text}>
//             During my academic journey, I developed projects including a
//             Bidirectional Sign Language Translator using Artificial
//             Intelligence and Machine Learning technologies. These
//             experiences strengthened my problem-solving and software
//             development skills.
//           </p>

//           <button style={styles.button}>
//             Download Resume
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// const styles = {
//   about: {
//     minHeight: "100vh",
//     background: "#f8f9fc",
//     padding: "80px 10%",
//   },

//   container: {
//     display: "flex",
//     gap: "60px",
//     alignItems: "center",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },

//   left: {
//     flex: "1",
//     textAlign: "center",
//   },

//   image: {
//     width: "250px",
//     height: "250px",
//     borderRadius: "50%",
//     objectFit: "cover",
//     boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
//   },

//   info: {
//     marginTop: "25px",
//     textAlign: "left",
//     color: "#444",
//     lineHeight: "2",
//   },

//   right: {
//     flex: "2",
//   },

//   tag: {
//     color: "#3b82f6",
//     letterSpacing: "2px",
//     fontWeight: "600",
//   },

//   // heading: {
//   //   fontSize: "50px",
//   //   color: "#111827",
//   //   marginBottom: "20px",
//   // },

//   heading: {
//   fontSize: "38px",
//   color: "#111827",
//   marginBottom: "20px",
//   fontWeight: "700",
// },

//   // text: {
//   //   fontSize: "18px",
//   //   lineHeight: "1.8",
//   //   color: "#555",
//   //   marginBottom: "20px",
//   // },

//   text: {
//   fontSize: "16px",
//   lineHeight: "1.8",
//   color: "#555",
//   marginBottom: "18px",
// },

//   button: {
//     padding: "12px 30px",
//     border: "2px solid #3b82f6",
//     background: "transparent",
//     color: "#3b82f6",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };

// export default About;


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