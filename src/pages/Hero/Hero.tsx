const Hero = () => {
  return (
    <div
      data-testid="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8"
    >
      <div className="flex">
        <div className="max-w-4xl ">
          <div className="flex">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                hey,
              </h1>
              <div className="text-4xl md:text-6xl font-light">
                my name is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Adarsh
                </span>
              </div>
              <div className="text-4xl md:text-6xl font-light">
                you can call me{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  Alex
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-6">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get in touch
            </button>
            <button className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              View work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
