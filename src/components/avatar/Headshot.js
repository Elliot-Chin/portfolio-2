import { Experience } from "@/components/avatar/Experience";
import { Canvas } from "@react-three/fiber";


export const Headshot = () => {
    return (
        <Canvas camera={{ position: [0, 3, 3], fov: 10 }}>
            <group position-y={-0.5}>
                <Experience />
            </group>
        </Canvas>
    )
}