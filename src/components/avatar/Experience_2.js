// components/avatar/Experience_2.js
import { Avatar2 } from "./Avatar_2";

export const Experience2 = ({ modelScale = 4, modelY = -0.89, onReady, reducedMotion = false }) => {
    return (
        <>
            <group position-y={modelY} scale={modelScale}>
                <Avatar2 onReady={onReady} reducedMotion={reducedMotion} />
            </group>
            <ambientLight intensity={2} />
            <directionalLight position={[3, 4, 5]} intensity={1.2} />
            <directionalLight position={[-3, 2, 1]} intensity={0.4} />
        </>
    );
};
