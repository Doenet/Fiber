import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import ReactDOM from 'react-dom'
// import React from 'react'
// import { Canvas } from 'react-three-fiber'

// ReactDOM.render(
//   <Canvas>
//     <pointLight position={[10, 10, 10]} />
//     <mesh>
//       <sphereBufferGeometry attach="geometry" />
//       <meshStandardMaterial attach="material" color="red" />
//     </mesh>
//   </Canvas>,
//   document.getElementById('root')
// )