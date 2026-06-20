import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Wizard from "../models/Wizard";
import FireFliesBackground from "../components/FireFliesBackground";
import Sound from "../components/Sound";
import OrbitingIcons from "../components/OrbitingIcons";
import bg from "../assets/background/home-background.png";
import { golang, java, cpp, linux, springboot, postgresql, javascript, docker } from "../assets/icons";

const Home = () => {
  const BtnList = [
    { label: "Golang", link: "#", icon: golang, newTab: false },
    { label: "Java", link: "#", icon: java, newTab: false },
    { label: "C++", link: "#", icon: cpp, newTab: false },
    { label: "Linux", link: "#", icon: linux, newTab: false },
    { label: "Spring Boot", link: "#", icon: springboot, newTab: false },
    { label: "PostgreSQL", link: "#", icon: postgresql, newTab: false },
    { label: "JavaScript", link: "#", icon: javascript, newTab: false },
    { label: "Docker", link: "#", icon: docker, newTab: false },
  ];

  return (
    <section className='w-full min-h-screen relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20'>
      <img src={bg} alt="background" className="bg-dim absolute inset-0 w-full h-full object-cover -z-20" />
      <FireFliesBackground />
      <Sound />

      <div className='w-full max-w-5xl px-4 sm:px-6 md:px-8 flex items-center justify-center'>
        <div className='relative flex items-center justify-center'>
          <div className='relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[620px] md:h-[620px]'>
            <Canvas className='w-full h-full'
              camera={{ position: [0, 0, 3.5], fov: 40 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.75} />
                <directionalLight position={[1, 2, 2]} intensity={1.4} />
                <Wizard scale={[0.025, 0.025, 0.025]} />
              </Suspense>
            </Canvas>

            {/* Mobile */}
            <div className='pointer-events-none absolute inset-0 flex sm:hidden items-center justify-center'>
              <div className='pointer-events-auto'>
                <OrbitingIcons items={BtnList} radius={110} iconSize={44} />
              </div>
            </div>
            {/* Small screens */}
            <div className='pointer-events-none absolute inset-0 hidden sm:flex md:hidden items-center justify-center'>
              <div className='pointer-events-auto'>
                <OrbitingIcons items={BtnList} radius={170} iconSize={56} />
              </div>
            </div>
            {/* Medium screens and up */}
            <div className='pointer-events-none absolute inset-0 hidden md:flex items-center justify-center'>
              <div className='pointer-events-auto'>
                <OrbitingIcons items={BtnList} radius={250} iconSize={72} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-vignette-overlay' />
    </section>
  );
};

export default Home;
