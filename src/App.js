import React from 'react'
import { Canvas } from 'react-three-fiber'
import Arrow from './Arrow';


export default () => (

      <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Arrow/>
    </Canvas>

    )
