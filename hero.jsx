import { useState, useEffect } from "react";

const taglines = [
  "Expanding Horizons, Bringing Clarity to Innovation.",
  "Custom Software, Built for Real-World Impact.",
  "Automate Work. Empower Growth. Stay Ahead.",
];

const videos = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
];

const Hero = () => {
  const [index, setIndex] = useState(0); // single index for both video + tagline

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 7000); // match with video cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center text-center px-4">
      <video
        key={videos[index]}
        src={videos[index]}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-opacity duration-500 ease-in-out">
          {taglines[index]}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Clean, scalable tools for small businesses, instructors, and growing teams.
        </p>
        <a
          href="#about"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-600 transition-all"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
