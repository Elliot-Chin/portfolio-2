import { OrbitControls } from "@react-three/drei";
import { AvatarTextingAnimation } from "./Avatar_TextingAnimation";


export const ExperienceTextingAnimation = () => {
    return (
        <>
            <OrbitControls
                screenSpacePanning={false}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
            />
            <group position-y={-1}>
                <AvatarTextingAnimation />
            </group>
            <ambientLight intensity={2} />
        </>
    )
}