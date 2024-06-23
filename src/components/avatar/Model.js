import { Experience } from "@/components/avatar/Experience";
import { Canvas } from "@react-three/fiber";


export const Model = () => {
    return (
        <Canvas camera={{ position: [0, 3, 5], fov: 23 }}>
            <Experience />
        </Canvas>
    )
}