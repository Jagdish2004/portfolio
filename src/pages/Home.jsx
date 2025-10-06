import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Wizard from "../models/Wizard";
import FireFliesBackground from "../components/FireFliesBackground";
import Sound from "../components/Sound";
import OrbitingIcons from "../components/OrbitingIcons";
import bg from "../assets/background/home-background.png";
import { react as reactIcon, nodejs, springboot, java, javascript, cpp, mongodb, postgresql } from "../assets/icons";

const Home = () => {
  const BtnList = [
    { label: "React", link: "#", icon: reactIcon, newTab: false },
    { label: "Node.js", link: "#", icon: nodejs, newTab: false },
    { label: "Spring Boot", link: "#", icon: springboot, newTab: false },
    { label: "Java", link: "#", icon: java, newTab: false },
    { label: "JavaScript", link: "#", icon: javascript, newTab: false },
    { label: "C++", link: "#", icon: cpp, newTab: false },
    { label: "MongoDB", link: "#", icon: mongodb, newTab: false },
    { label: "PostgreSQL", link: "#", icon: postgresql, newTab: false },
  ];

  return (
    <section className='w-full min-h-screen relative overflow-hidden flex items-center justify-center'>
      <img src={bg} alt="background" className="bg-dim absolute inset-0 w-full h-full object-cover -z-20" />
      <FireFliesBackground />
      <Sound />

      <div className='w-full max-w-5xl px-4 sm:px-6 md:px-8 flex items-center justify-center'>
        <div className='relative flex items-center justify-center'>
          {/* Canvas container sized here; Canvas fills 100% of this circle */}
          <div className='relative shadow-2xl w-72 h-72 sm:w-96 sm:h-96 md:w-[620px] md:h-[620px]'>
            <Canvas className='w-full h-full'
              camera={{ position: [0, 0, 3.5], fov: 40 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.75} />
                <directionalLight position={[1, 2, 2]} intensity={1.4} />
                <Wizard scale={[0.025, 0.025, 0.025]} />
              </Suspense>
            </Canvas>
            {/* Canvas-specific vignette removed; using full-section overlay instead */}
            {/* Orbiting ring overlaying the canvas, no extra canvas used */}
            {/* Debug: Add a test div to see if the container is working */}
            
            
            {/* Mobile */}
            <div className='pointer-events-none absolute inset-0 flex sm:hidden items-center justify-center'>
              <div className='pointer-events-auto'>
                <OrbitingIcons items={BtnList} radius={115} />
              </div>
            </div>
            {/* Small screens and up */}
            <div className='pointer-events-none absolute inset-0 hidden sm:flex md:hidden items-center justify-center'>
              <div className='pointer-events-auto'>
                <OrbitingIcons items={BtnList} radius={145} />
              </div>
            </div>
            {/* Medium screens and up */}
            <div className='pointer-events-none absolute inset-0 hidden md:flex items-center justify-center'>
              <div className='pointer-events-auto'>
                <OrbitingIcons items={BtnList} radius={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full-page vignette overlay across Home */}
      <div className='home-vignette-overlay' />
    </section>
  );
};

export default Home;
