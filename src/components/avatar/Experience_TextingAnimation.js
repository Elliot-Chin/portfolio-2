import { AvatarTextingAnimation } from "./Avatar_TextingAnimation"

export const ExperienceTextingAnimation = () => {
  return (
    <>
      <group position-y={-1.05} scale={1.0}>
        <AvatarTextingAnimation />
      </group>
      <ambientLight intensity={2} />
    </>
  )
}
