import { Avatar } from "./Avatar";


export const Experience = ({ animate = true, onReady }) => {
    return (
      <>
        <group position-y={-1}>
          <Avatar animate={animate} onReady={onReady} />
        </group>
        <ambientLight intensity={2} />
      </>
    )
  }
  
