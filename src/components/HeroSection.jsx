const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="../assets/videos/herovideo.mp4" type="video/mp4" />
        {/* Add additional video sources for compatibility */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        {/* Your hero section content goes here */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">Learn more about our services...</p>
      </div>
    </div>
  );
};

export default HeroSection;
