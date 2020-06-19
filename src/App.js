import React from 'react'
import { Canvas } from 'react-three-fiber'
import *  as THREE from 'three'
import Arrow from './Arrow';
// import { OrbitControls } from 'drei';
import { MapControls } from 'drei';
// import { TrackballControls } from 'drei'; //Doesn't flip
// import { TransformControls } from 'drei';
//https://spectrum.chat/react-three-fiber/general/basic-example-of-drawing-a-line~9edb471e-0bb2-4814-b346-b2d4829fc78e

var points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

export default () => (

      <Canvas>
        <ambientLight />
        {/* <OrbitControls /> */}
        <MapControls />
        <mesh>
          <bufferGeometry setFromPoints = {points}/>
          <lineBasicMaterial attach="material" color="black"/>
        </mesh>
        {/* <TrackballControls /> */}
        {/* <TransformControls /> */}
      {/* <Arrow /> */}
    </Canvas>

    )
