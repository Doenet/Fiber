import React from 'react'
import { Canvas } from 'react-three-fiber'
import *  as THREE from 'three'
// import Arrow from './Arrow';
// import { OrbitControls } from 'drei';
import { MapControls } from 'drei';
// import { TrackballControls } from 'drei'; //Doesn't flip
// import { TransformControls } from 'drei';
//https://spectrum.chat/react-three-fiber/general/basic-example-of-drawing-a-line~9edb471e-0bb2-4814-b346-b2d4829fc78e


function Axis(){

  var hpoints = [];
  hpoints.push(new THREE.Vector3(-10, 0, 0));
  hpoints.push(new THREE.Vector3(10, 0, 0));
  var vpoints = [];
  vpoints.push(new THREE.Vector3(0, -10, 0));
  vpoints.push(new THREE.Vector3(0, 10, 0));
  return (<>
  <mesh >
          <cylinderBufferGeometry attach="geometry" args={[1,1,2000,32]}/>
          <meshStandardMaterial attach="material" color="black"/>
        </mesh>
    {/* <line>
    <geometry attach="geometry" vertices={hpoints} />
    <lineBasicMaterial attach="material" color="black" linewidth={100}/>
  </line>
  <line>
    <geometry attach="geometry" vertices={vpoints} />
    <lineBasicMaterial attach="material" color="black" linewidth={10} />
  </line> */}
  </>
  )
}

function NewAxis() {

  const offsetToLines = function(offset) {
    let vpoints = [];
    vpoints.push(new THREE.Vector3(offset, -10, 0));
    vpoints.push(new THREE.Vector3(offset, 10, 0));
    console.log(offset)
    return (
      <line key={offset}>
        <geometry attach="geometry" vertices={vpoints}/>
        <lineBasicMaterial attach="material" color="black"/>
      </line>
    )
  }

  let hpoints = [];
  hpoints.push(new THREE.Vector3(-10, 0, 0));
  hpoints.push(new THREE.Vector3(10, 0, 0));

  let zpoints = [];
  zpoints.push(new THREE.Vector3(0,0,-10));
  zpoints.push(new THREE.Vector3(0,0,10));

  let offsets = [-2,-1,0,1,2];

    return (
      <>
        <line>
          <geometry attach="geometry" vertices={hpoints} />
          <lineBasicMaterial attach="material" color="black" linewidth={100}/>
        </line>
        {offsets.map(offsetToLines)}
        <line>
          <geometry attach="geometry" vertices={zpoints}/>
          <lineBasicMaterial attach="material" color="black"/>
        </line>
      </>
    )
}

function CylinderAxis() {
  return(
    <>
    </>
  )
}

export default function App() {
  // let [ref, material] = useResource();
  
  

  // const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);


  return (

    <Canvas orthographic camera={{ position: [0, 0, 50], zoom: 10, up: [0, 0, 1], far: 10000 }}>
      <ambientLight />
      <MapControls />
      <Axis/>
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

