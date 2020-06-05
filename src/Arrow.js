import React from 'react'
// import { Canvas } from 'react-three-fiber'

// function Head() {
//     return(
//         <mesh>
//           <cylinderBufferGeometry attach="geometry"/>
//           <meshStandardMaterial attach="material" color="hotpink"/>
//         </mesh>
//       )
// }

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
    <mesh>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

export default Arrow;