import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from "../components/Loader"

import Island from '../models/island';
import Sky from '../models/sky';
import Plane from '../models/plane';
import Bird from '../models/bird';
import HomeInfo from '../components/HomeInfo';

// Define the Home component
const Home = () => {
  // State for controlling rotation and current stage
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // Adjust island scale, position, and rotation based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  // Adjust plane scale and position based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }
  
  // Get island and plane adjustments
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  // Render the Home component
  return (
    <section className='w-full h-screen relative'>
    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ?
        'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000}}
      >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[5, 1, 1]} intensity={1.2} />
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
       
        <Bird />
        <Sky isRotating={isRotating} />
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane
          isRotating={isRotating}
          scale={planeScale}
          position={planePosition}
          rotation={[0, 20, 0]}
        /> 
      </Suspense>
      </Canvas>
    </section>
  )
}

export default Home