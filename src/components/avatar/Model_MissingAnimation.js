import { Canvas } from "@react-three/fiber";
import { ExperienceMissingAnimation } from "./Experience_MissingAnimation";


export const ModelMissingAnimation = ({
    cameraZ = 5,
    fov = 23,
    modelY = -1,
    modelScale = 1,
}) => {
    return (
        <Canvas camera={{ position: [0, 0, cameraZ], fov }}>
            <ExperienceMissingAnimation modelY={modelY} modelScale={modelScale} />
        </Canvas>
    )
}
