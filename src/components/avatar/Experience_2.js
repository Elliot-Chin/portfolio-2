// components/avatar/Experience_2.js
import { OrbitControls } from "@react-three/drei";
import { Avatar2 } from "./Avatar_2";

export const Experience2 = ({ modelScale = 4 }) => {
    return (
        <>
            <OrbitControls
                screenSpacePanning={false}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            {/* Position down slightly; scale makes it HUMONGOUS without CSS blur */}
            <group position-y={-0.89} scale={modelScale}>
                <Avatar2 />
            </group>
            <ambientLight intensity={2} />
        </>
    );
};
