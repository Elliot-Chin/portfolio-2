import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";


export const Experience = () => {
    return (
        <>
            <OrbitControls
            screenSpacePanning={false}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
            />
            <group position-y={-1}>
            <Avatar />
            </group>
            <ambientLight intensity={2} />
        </>
    )
}