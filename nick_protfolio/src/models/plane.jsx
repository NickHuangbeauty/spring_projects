import { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

// Define the plane component with rotation functionality
const plane = ( {isRotating, ...props} ) => {
  const ref = useRef(); // Reference to the 3D object for manipulation
  const { scene, animations } = useGLTF(planeScene); // Load the plane model and its animations
  const { actions } = useAnimations(animations, ref); // Access the animations

  // Handle the rotation of the plane based on the isRotating prop
  useEffect(() => {
    if(isRotating) {
      actions['Take 001'].play(); // Start the rotation animation
    } else {
      actions['Take 001'].stop(); // Stop the rotation animation
    }
  }, [actions, isRotating]); // Re-run effect if actions or isRotating changes

  // Render the plane model
  return (
      <mesh {...props} ref={ref}>
        <primitive object={scene} /> // Use the loaded plane scene
      </mesh>
  )
}

export default plane // Export the plane component
