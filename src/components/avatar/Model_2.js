import { Canvas } from "@react-three/fiber";
import { Experience2 } from "./Experience_2";


export const Model2 = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 23 }}>
            <Experience2 />
        </Canvas>
    )
}