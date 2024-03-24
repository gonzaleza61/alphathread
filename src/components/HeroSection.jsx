import { useRef, useEffect } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented
          // Perform fallback or show a play button
        });
    }
  }, []);

  return (
    <div className="relative h-screen">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://alphathread.vercel.app/videos/herovideo.mp4"
          type="video/mp4"
        />
        {/* Add additional video sources for compatibility */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        {/* Your hero section content goes here */}
        <h1 className="text-4xl font-bold mb-4">AlphaThreaded</h1>
        <p className="text-lg">Blah Blah Blah Blah...</p>
      </div>
    </div>
  );
};

export default HeroSection;
