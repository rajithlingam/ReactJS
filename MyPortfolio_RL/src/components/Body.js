import React, { useState } from "react";

const Body = () => {
  const [activeSection, setActiveSection] = useState("");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-4 max-w-xl  text-lg sm:text-xl">
            <h2 className="text-3xl font-semibold text-white drop-shadow">
              👋 About Me
            </h2>
            <p>
              I'm{" "}
              <strong className="text-white drop-shadow">RAJITHLINGAM</strong>,
              a{" "}
              <span className="font-extrabold text-2xl text-white">
                Full Stack Developer
              </span>{" "}
              with expertise in building feature-rich, scalable, and
              high-performance web applications. Proficient in{" "}
              <span className="text-white">
                React.js,Tailwind CSS, and Parcel,
              </span>{" "}
              with a strong understanding of{" "}
              <span className="text-white">
                front-end testing practices and API integrations.
              </span>{" "}
              Adept at problem-solving, implementing modern development
              workflows, and ensuring{" "}
              <span className="text-white">smooth user experiences</span>{" "}
              through{" "}
              <span className="text-white">
                responsive and maintainable designs.
              </span>
            </p>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-4 max-w-xl  text-lg sm:text-xl">
            <h2 className="text-3xl font-semibold text-white">💼 Experience</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Built scalable UIs with React + Redux Toolkit.</li>
              <li>Integrated Firebase Auth and Firestore.</li>
              <li>Collaborated via Git & tested with Jest.</li>
            </ul>
          </div>
        );

      case "project":
        return (
          <div className="space-y-6 max-w-xl text-lg sm:text-xl">
            <h2 className="text-3xl font-semibold text-white">🚀 Projects</h2>
            <div>
              <h3 className="font-bold">NetflixGPT</h3>
              <p className="text-violet-50">
                Movie recommender using OpenAI API, React, Redux, Firebase.
              </p>
            </div>
            <div>
              <h3 className="font-bold">FoodMall</h3>
              <p className="text-violet-50">
                Food ordering UI with filters, dynamic routing, and hooks.
              </p>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-4 max-w-xl text-lg sm:text-xl">
            <h2 className="text-3xl font-semibold text-white">🧠 Skills</h2>
            <p className="text-violet-50">
              <strong className="text-black">Frontend:</strong> HTML, CSS,
              JavaScript, React, TailwindCSS
            </p>
            <p className="text-violet-50">
              <strong className="text-black">Tools:</strong> Firebase, Git,
              Parcel
            </p>
            <p className="text-violet-50">
              <strong className="text-black">Testing:</strong> Jest, React
              Testing Library
            </p>
          </div>
        );

      default:
        return (
          <div className="text-gray-700 text-xl text-center max-w-md">
            <p>Tap any Button on the Screen to explore my profile!</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen font-sans bg-gradient-to-br from-fuchsia-500 to-blue-500">
      {/* Left Panel */}
      <div className="md:w-6/12 w-full px-6 py-10 flex flex-col items-center justify-center text-white">
        <img
          src="https://avatars.githubusercontent.com/u/141789575?v=4"
          alt="Rajithlingam"
          className="h-40 w-40 sm:h-52 sm:w-52 rounded-full shadow-lg border-4 border-white mb-6"
        />
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold drop-shadow">
            Hello! I'm
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-black drop-shadow">
            RAJITHLINGAM
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-white drop-shadow">
            Full Stack Developer
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            ["about", "About Me"],
            ["experience", "Experience"],
            ["project", "Project"],
            ["skills", "Skills"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className="px-5 py-2 bg-gradient-to-b from-white text-black rounded-full font-semibold shadow hover:bg-gray-100 transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-6/12 w-full px-6 py-10 flex items-center justify-center ">
        {renderSection()}
      </div>
    </div>
  );
};

export default Body;
