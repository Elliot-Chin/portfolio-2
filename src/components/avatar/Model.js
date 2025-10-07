import { Experience } from "@/components/avatar/Experience";
import { Canvas } from "@react-three/fiber";


export const Model = ({ animate = true }) => {
    return (
        <Canvas camera={{ position: [0, 1, 3], fov: 38 }}>
            <Experience animate={animate} />
        </Canvas>
    )
}
