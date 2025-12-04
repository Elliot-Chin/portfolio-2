import { AvatarMissingAnimation } from "./Avatar_MissingAnimation";


export const ExperienceMissingAnimation = () => {
    return (
        <>
            <group position-y={-1}>
                <AvatarMissingAnimation />
            </group>
            <ambientLight intensity={2} />
        </>
    )
}