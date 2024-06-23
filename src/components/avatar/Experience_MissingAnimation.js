import { OrbitControls } from "@react-three/drei";
import { AvatarMissingAnimation } from "./Avatar_MissingAnimation";


export const ExperienceMissingAnimation = () => {
    return (
        <>
            <OrbitControls
                screenSpacePanning={false}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
            />
            <group position-y={-1}>
                <AvatarMissingAnimation />
            </group>
            <ambientLight intensity={2} />
        </>
    )
}