import { Canvas } from "@react-three/fiber";
import { ExperienceTextingAnimation } from "./Experience_TextingAnimation";


export const ModelTextingAnimation = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
            <ExperienceTextingAnimation />
        </Canvas>
    )
}