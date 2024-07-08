import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import ThreeScene from './ThreeScene';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Canvas style={{ position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: -1 }}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <ThreeScene />
      </Canvas>
      <div className="container mt-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
