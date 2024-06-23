import { Canvas } from "@react-three/fiber";
import { ExperienceMissingAnimation } from "./Experience_MissingAnimation";


export const ModelMissingAnimation = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 23 }}>
            <ExperienceMissingAnimation />
        </Canvas>
    )
}