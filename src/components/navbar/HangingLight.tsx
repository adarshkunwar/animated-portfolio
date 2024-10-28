import "./animation.css";

const HangingLight = () => {
  return (
    <div className="h-64 w-full flex justify-center items-start bg-slate-900">
      {/* Cord */}
      <div className="relative">
        <div className="w-1 h-32 bg-black animate-sway">
          {/* Light Bulb */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            {/* Bulb Base */}
            <div className="w-4 h-4 bg-gray-600 rounded-t-sm"></div>
            {/* Bulb Glass */}
            <div className="w-8 h-10 bg-yellow-100 rounded-full relative overflow-hidden">
              {/* Light Glow */}
              <div className="absolute inset-0 bg-yellow-300 opacity-75 animate-pulse"></div>
              {/* Reflection */}
              <div className="absolute top-1 left-1 w-2 h-3 bg-white rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HangingLight;
