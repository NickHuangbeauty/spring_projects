import { useRef, useEffect } from 'react';

import birdScene from '../assets/3d/bird.glb'; // Importing the bird model
import { useAnimations, useGLTF } from '@react-three/drei'; // Importing hooks for animations and GLTF model loading
import { useFrame } from '@react-three/fiber'; // Importing the hook to run an animation loop

const bird = () => {
  const birdRef = useRef(); // Creating a reference to attach to the bird mesh
  const { scene, animations } = useGLTF(birdScene); // Loading the bird model and its animations
  const { actions } = useAnimations(animations, birdRef); // Preparing the animations to be used with the bird model

  useEffect(() => {
    actions['Take 001'].play(); // Automatically play the 'Take 001' animation on component mount
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2; // Making the bird bob up and down over time
    
    // Check if the bird has exceeded the left or right boundaries of the camera
    if(birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI; // Turn the bird around to face the opposite direction
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0; // Turn the bird around to face the original direction
    }

    // Adjust the bird's position on the x and z axes based on its orientation
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.03; // Move the bird forward
    } else {
      birdRef.current.position.x -= 0.04; // Move the bird backward
    }
    // Make the bird's movement on the z-axis more random to enhance the flying dynamics
    birdRef.current.position.z += (Math.random() - 0.5) * 0.2;
  })

  return (
    <mesh 
      position={[-5, 2, 1]} // Setting the initial position of the bird
      scale={[0.003, 0.003, 0.003]} // Scaling down the bird model
      ref={birdRef}  // Attaching the reference to the mesh
    >
      <primitive object={scene} /> // Rendering the bird model
    </mesh>
  )
}

export default bird