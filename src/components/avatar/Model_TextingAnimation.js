import { Canvas } from "@react-three/fiber"
import { ExperienceTextingAnimation } from "./Experience_TextingAnimation"

export const ModelTextingAnimation = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 18, near: 0.1, far: 100 }}
      gl={{ antialias: true }}
    >
      <ExperienceTextingAnimation />
    </Canvas>
  )
}
