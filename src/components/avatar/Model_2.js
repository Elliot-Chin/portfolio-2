// components/avatar/Model_2.js
import { Canvas } from "@react-three/fiber";
import { Experience2 } from "./Experience_2";

export const Model2 = ({
    modelScale = 4,   // how big the avatar looks
    cameraZ = 1.8,    // bring camera closer for bigger look
    fov = 40,         // wider fov can also make it feel larger
    dprMax = 2,       // 2 is crisp on most screens
    className = "",
}) => {
    return (
        <Canvas
            className={`w-full h-full ${className}`}
            dpr={[1, dprMax]}
            camera={{ position: [0, 0, cameraZ], fov }}
            gl={{ antialias: true }}
        >
            <Experience2 modelScale={modelScale} />
        </Canvas>
    );
};
