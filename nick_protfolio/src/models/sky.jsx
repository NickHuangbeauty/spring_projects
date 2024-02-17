import { useGLTF } from '@react-three/drei'
import {useRef } from 'react'
import { useFrame } from '@react-three/fiber';

import skyScen from '../assets/3d/sky.glb'

const sky = ({ isRotating }) => {
    const sky = useGLTF(skyScen);
    const skyRef = useRef();
  
    useFrame((_, delta) => {
      if(isRotating) {
        skyRef.current.rotation.y += 0.15 * delta
      }
    })


    return (
      <mesh ref={skyRef}>
          <primitive object={sky.scene} />
      </mesh>
  )
}

export default sky