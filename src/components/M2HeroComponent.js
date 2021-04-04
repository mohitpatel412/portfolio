import React, { useEffect, useState } from "react";

function M2Hero() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-800">
      <div>
        <div className="text-white font-dosis text-center md:text-left">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            I am,
            <br />
            Mohit Patel
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            }  transform transition duration-2000 ease-in-out font-bold text-2xl text-white`}
          >
            I am a Web Developer 💻.
          </h1>

          <button className=" animate-float bg-black px-10 py-3 text-xl uppercase mt-10 rounded-lg shadow-2xl">
            <a href="mailto:mohitpatel040102@gmail.com" className="text-white">
              Hire Me!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default M2Hero;
