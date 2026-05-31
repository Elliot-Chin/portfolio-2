import { AvatarMissingAnimation } from "./Avatar_MissingAnimation";


export const ExperienceMissingAnimation = ({ modelY = -1, modelScale = 1 }) => {
    return (
        <>
            <group position-y={modelY} scale={modelScale}>
                <AvatarMissingAnimation />
            </group>
            <ambientLight intensity={2} />
        </>
    )
}
