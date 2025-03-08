import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import gsap from 'gsap';

function StarField() {
  // Generate points with proper validation
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2, radius0: 1 });
  
  // Ensure no NaN values in the positions array
  for (let i = 0; i < sphere.length; i++) {
    if (isNaN(sphere[i])) {
      sphere[i] = 0;
    }
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.hero-content',
      { 
        y: 100,
        opacity: 0 
      },
      { 
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          gl={{ antialias: true }}
        >
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <StarField />
        </Canvas>
      </div>

      {/* Content */}
      <div 
        ref={containerRef}
        className="relative z-10 flex items-center justify-center h-full px-4"
      >
        <div className="text-center hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
              PAVITHAN UNENTHIRAN
            </h1>
            <p className="text-xl text-gray-300 md:text-2xl">
              Full Stack Web Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <a
              href="mailto:pavithanunenthiran29@gmail.com"
              className="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-indigo-600 rounded-full group hover:bg-white"
            >
              <span className="absolute inset-0 rounded-full border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-indigo-600">
                Get In Touch
              </span>
            </a>
            <a
              href="#projects"
              className="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all border-2 border-white rounded-full group hover:bg-white"
            >
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                View Projects
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}