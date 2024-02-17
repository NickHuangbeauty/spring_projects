import { useRef, useEffect } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    
    // 檢查鳥是否超出攝影機的左邊或右邊邊界
    if(birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI; // 轉向
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0; // 轉向
    }

    // 根據鳥的朝向來調整其在x軸和z軸上的位置
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.03; // 增加移動速度以使效果更明顯
    } else {
      birdRef.current.position.x -= 0.04; // 增加移動速度以使效果更明顯
    }
    // 使鳥在z軸上的移動更加隨機，增加飛行動態
    birdRef.current.position.z += (Math.random() - 0.5) * 0.2;
  })

  return (
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]}
      ref={birdRef}  
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default bird