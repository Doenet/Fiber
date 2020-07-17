import React from 'react'
import { extend, Canvas } from 'react-three-fiber'
import *  as THREE from 'three'
// import Arrow from './Arrow';
// import { OrbitControls } from 'drei';
import { MapControls } from 'drei';
// import { TrackballControls } from 'drei'; //Doesn't flip
// import { TransformControls } from 'drei';
//https://spectrum.chat/react-three-fiber/general/basic-example-of-drawing-a-line~9edb471e-0bb2-4814-b346-b2d4829fc78e

import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'threejs-meshline';

extend({ MeshLine, MeshLineMaterial })

//To-Do
//What property of <Canvas/> does scrolling affect? Zoom?
//Make more gridlines
//Do we write our own <MapControls> or do we dyanimacally adjust line width?

function Axis() {

  const hvertices = []
  // for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100)
  //   hvertices.push(new THREE.Vector3(Math.cos(j), Math.sin(j), 0))
  hvertices.push(new THREE.Vector3(-100,0,0));
  hvertices.push(new THREE.Vector3(100,0,0));

  const vvertices = []
  
  vvertices.push(new THREE.Vector3(0,-100,0));
  vvertices.push(new THREE.Vector3(0,100,0));
  //   const line = new MeshLine()
  //   line.setVertices(vertices)

  let width = 0.1;
  let color = '#403634';
  //#636160 Color for non-principal axes
  return (<>
      <mesh raycast={MeshLineRaycast}>
        <meshLine attach="geometry" vertices={hvertices} />
        <meshLineMaterial
          attach="material"
          transparent
          depthTest={false}
          lineWidth={width}
          color={color}
          // dashArray={0.05}
          // dashRatio={0.95}
        />
      </mesh>
      <mesh raycast={MeshLineRaycast}>
      <meshLine attach="geometry" vertices={vvertices} />
      <meshLineMaterial
        attach="material"
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        // dashArray={0.05}
        // dashRatio={0.95}
      />
    </mesh>
    </>
  )
}

function NewAxis() {

  const hvertices = []
  // for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100)
  //   hvertices.push(new THREE.Vector3(Math.cos(j), Math.sin(j), 0))
  hvertices.push(new THREE.Vector3(-100,0,0));
  hvertices.push(new THREE.Vector3(100,0,0));

  const vvertices = []
  
  vvertices.push(new THREE.Vector3(0,-100,0));
  vvertices.push(new THREE.Vector3(0,100,0));
  //   const line = new MeshLine()
  //   line.setVertices(vertices)

  let width = 0.1;
  let color = '#403634';
  return (<>
      <mesh raycast={MeshLineRaycast}>
        <meshLine attach="geometry" vertices={hvertices} />
        <meshLineMaterial
          attach="material"
          transparent
          depthTest={false}
          lineWidth={width}
          color={color}
          // dashArray={0.05}
          // dashRatio={0.95}
        />
      </mesh>
      <mesh raycast={MeshLineRaycast}>
      <meshLine attach="geometry" vertices={vvertices} />
      <meshLineMaterial
        attach="material"
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        // dashArray={0.05}
        // dashRatio={0.95}
      />
    </mesh>
    </>
  )
}

// function MapAxis() {

//   const offsetToLines = function(offset) {
//     let vpoints = [];
//     vpoints.push(new THREE.Vector3(offset, -10, 0));
//     vpoints.push(new THREE.Vector3(offset, 10, 0));
//     console.log(offset)
//     return (
//       <line key={offset}>
//         <geometry attach="geometry" vertices={vpoints}/>
//         <lineBasicMaterial attach="material" color="black"/>
//       </line>
//     )
//   }

//   let hpoints = [];
//   hpoints.push(new THREE.Vector3(-10, 0, 0));
//   hpoints.push(new THREE.Vector3(10, 0, 0));

//   let zpoints = [];
//   zpoints.push(new THREE.Vector3(0,0,-10));
//   zpoints.push(new THREE.Vector3(0,0,10));

//   let offsets = [-2,-1,0,1,2];

//     return (
//       <>
//         <line>
//           <geometry attach="geometry" vertices={hpoints} />
//           <lineBasicMaterial attach="material" color="black" linewidth={100}/>
//         </line>
//         {offsets.map(offsetToLines)}
//         <line>
//           <geometry attach="geometry" vertices={zpoints}/>
//           <lineBasicMaterial attach="material" color="black"/>
//         </line>
//       </>
//     )
// }



export default function App() {
  // let [ref, material] = useResource();
  // let [zoomLevel,setZoomLevel] = useState(50);


  // const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);


  return (

    <Canvas orthographic camera={{ position: [0, 0, 2], zoom: 50, up: [0, 0, 1], far: 10000 }}>
      <ambientLight />
      <MapControls />
      <Axis />
      {/* <OrbitControls /> */}
      {/* <mesh> */}
      {/* <bufferGeometry setFromPoints = {points}/> */}
      {/* <lineBasicMaterial attach="material" color="black"/> */}
      {/* </mesh> */}
      {/* <TrackballControls /> */}
      {/* <TransformControls /> */}
      {/* <Arrow /> */}

      {/* <line ref={ref} geometry={lineGeometry} >
        <lineBasicMaterial attach="material" color="black" />
      </line> */}



    </Canvas>

  )
}

