import React from "react";
import AtomBackground from "../components/Atombackground";

const MainPage = () => {
  return (
    <div className="relative   justify-center bg-black text-white overflow-hidden w-full h-full">
      <div className="bg-purple-radial h-screen flex items-center justify-center">
        <div>
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-gradient from-purple-500 to-transparent via-purple-700 z-0">
            {/* AtomBackground component */}
            <div className="relative z-10">
              <AtomBackground />
            </div>
          </div>
          <div>
            {/* Cards above the atom structure at the center */}
            <div className="relative z-50 flex justify-center">
              <div className="flex flex-row space-x-11">
                <div className="p-6 h-80 w-56 bg-black bg-opacity-30 rounded-3xl shadow-lg max-w-xs hover:bg-opacity-70 transition duration-300">
                  <h2 className="text-2xl font-bold mb-4">AI chatbot</h2>
                  <p>
                    Transform customer interactions with our intelligent
                    chatbots.
                  </p>
                  <p>
                    {" "}
                    Designed to provide seamless, real-time support and
                    engagement, our AI chatbots enhance user experiences and
                    drive satisfaction.
                  </p>
                </div>
                <div className="p-6 h-80 w-56 bg-black bg-opacity-30 rounded-3xl shadow-lg max-w-xs hover:bg-opacity-70 transition duration-300">
                  <h2 className="text-2xl font-bold mb-4">ML solutions</h2>
                  <p>
                    Harness the power of data with our custom ML solutions. We
                    develop sophisticated models that turn complex data into
                    actionable insights, empowering you to make informed,
                    strategic decisions.
                  </p>
                </div>
                <div className="p-6 h-80 w-56 bg-black bg-opacity-30 rounded-3xl shadow-lg max-w-xs hover:bg-opacity-70 transition duration-300">
                  <h2 className="text-2xl font-bold mb-4">Three js</h2>
                  <p>
                    Enhance your digital footprint with our vibrant 3D online
                    services. Utilizing Three.js, we create extraordinary and
                    captivating interactions that captivate your followers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
