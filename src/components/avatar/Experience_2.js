import { OrbitControls } from "@react-three/drei";
import { Avatar2 } from "./Avatar_2";


export const Experience2 = () => {
    return (
        <>
            <OrbitControls
                screenSpacePanning={false}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
            />
            <group position-y={-0.5}>
                <Avatar2 />
            </group>
            <ambientLight intensity={2} />
        </>
    )
}