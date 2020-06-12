import React from 'react'
import { Canvas } from 'react-three-fiber'
import Arrow from './Arrow';
// import { OrbitControls } from 'drei';
import { MapControls } from 'drei';
// import { TrackballControls } from 'drei'; //Doesn't flip
// import { TransformControls } from 'drei';


export default () => (

      <Canvas>
        {/* <OrbitControls /> */}
        <MapControls />
        {/* <TrackballControls /> */}
        {/* <TransformControls /> */}
      <pointLight position={[10, 10, 10]} />
      <Arrow />
    </Canvas>

    )
