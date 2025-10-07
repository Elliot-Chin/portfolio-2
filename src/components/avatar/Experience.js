import { Avatar } from "./Avatar";


export const Experience = ({ animate = true }) => {
    return (
      <>
        <group position-y={-1}>
          <Avatar animate={animate} />
        </group>
        <ambientLight intensity={2} />
      </>
    )
  }
  