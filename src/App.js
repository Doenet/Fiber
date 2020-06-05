import React from 'react'
import { Canvas } from 'react-three-fiber'
import Arrow from './Arrow';
// import './Arrow';


class App extends React.Component{

  
  render() {
    return(
    <Canvas>
      <Arrow/>
      <pointLight position={[10, 10, 10]} />
      {/* <mesh>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh> */}
    </Canvas>
    )
  }
  
}


export default App;
