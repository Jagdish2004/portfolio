import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <section className='w-full h-screen relative'>
      <div className="absolute bottom-16 left-2 z-10 px-4 py-2 bg-white/80 dark:bg-gray-800/80 
                    rounded-lg shadow-lg backdrop-blur-sm">
        <p className="text-xs text-gray-700 dark:text-gray-300 font-mono">
          [tap + long tap + left swipe] <br />
          ↓ Try with Sound
        </p>
        
      </div>

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={[0, -6.5, -43.4]}
            rotation={[0.1, 4.7077, 0]}
            scale={[0.9, 0.9, 0.9]}
          />
          <Plane
            isRotating={isRotating}
            position={[0, -1.5, 0]}
            rotation={[0, 20.1, 0]}
            scale={[1.5, 1.5, 1.5]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
