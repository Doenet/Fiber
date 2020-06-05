import React from 'react'
import * as THREE from "three"
// import { Canvas } from 'react-three-fiber'

function Head(props) {
    return(
        <mesh position={props.position}>
          <cylinderBufferGeometry attach="geometry" args={[0,2,5,32]}/>
          <meshStandardMaterial attach="material" color="hotpink"/>
        </mesh>
      )
}

// function Tail() {
//     return(
//         <mesh>
//           <cylinderBufferGeometry attach="geometry"/>
//           <meshStandardMaterial attach="material" color="hotpink"/>
//         </mesh>
//       )
// }

// function Arrow() {
//   return(
//     <>
//     <Head/>
//     <Tail/>
//     </>
//   )
// }

function Arrow() {
  return(
    
    <>
    <Head position = {new THREE.Vector3(-2,1,0)}/>
    </>
    // <mesh>
    //     <sphereBufferGeometry attach="geometry" />
    //     <meshStandardMaterial attach="material" color="red" />
    // </mesh>
  )
}

export default Arrow;