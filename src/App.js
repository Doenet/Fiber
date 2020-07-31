import React, {useMemo, useRef} from 'react'
import { extend, Canvas, useThree, useLoader, useFrame, useUpdate } from 'react-three-fiber'
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
//https://spectrum.chat/react-three-fiber/general/how-to-use-mapcontrols-instead-of-default-orbitcontrols~254a6a5b-47df-4573-978c-37085808d9f2
//What property of <Canvas/> does scrolling affect? Zoom?
//Make more gridlines
//Do we write our own <MapControls> or do we dyanimacally adjust line width?

// function Axis() {

//   const hvertices = []
//   // for (let j = 0; j < Math.PI; j += (2 * Math.PI) / 100)
//   //   hvertices.push(new THREE.Vector3(Math.cos(j), Math.sin(j), 0))
//   hvertices.push(new THREE.Vector3(-100,0,0));
//   hvertices.push(new THREE.Vector3(100,0,0));

//   const vvertices = []
  
//   vvertices.push(new THREE.Vector3(0,-100,0));
//   vvertices.push(new THREE.Vector3(0,100,0));
//   //   const line = new MeshLine()
//   //   line.setVertices(vertices)

//   let width = 0.1;
//   let color = '#403634';
//   //#636160 Color for non-principal axes
//   return (<>
//       <mesh raycast={MeshLineRaycast}>
//         <meshLine attach="geometry" vertices={hvertices} />
//         <meshLineMaterial
//           attach="material"
//           transparent
//           depthTest={false}
//           lineWidth={width}
//           color={color}
//           // dashArray={0.05}
//           // dashRatio={0.95}
//         />
//       </mesh>
//       <mesh raycast={MeshLineRaycast}>
//       <meshLine attach="geometry" vertices={vvertices} />
//       <meshLineMaterial
//         attach="material"
//         transparent
//         depthTest={false}
//         lineWidth={width}
//         color={color}
//         // dashArray={0.05}
//         // dashRatio={0.95}
//       />
//     </mesh>
//     </>
//   )
// }

function NewAxis() {
  let { viewport, mouse } = useThree();
  // let { }
  // https://codesandbox.io/s/react-three-fiber-gestures-8d3ho?file=/src/index.js:502-643
  const ref = useRef();
  useFrame((state) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    // console.log("state",state)
    // console.log("mouse x",x);
    // console.log("mouse y",y);
    // console.log("viewport",viewport);
    ref.current.position.set(x,y,0);
    console.log("ref position",ref.current.position);
    // ref.current.update()
  });
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

  const offsets = [-3,-2,-1,1,2,3];

  let width = 0.1;
  let color = '#403634';
  let off_width = 0.01;
  let off_color = '#8c8484';

  const xOffsetToVertical = function(x) {
    let temp = [];
    temp.push(new THREE.Vector3(x,-100,0));
    temp.push(new THREE.Vector3(x,100,0));
    return(
      <mesh key={"v" + x.toString()}  raycast={MeshLineRaycast} ref={ref}>
        <meshLine attach="geometry" vertices={temp} />
        <meshLineMaterial
          attach="material"
          transparent
          depthTest={false}
          lineWidth={off_width}
          color={off_color}
          // dashArray={0.05}
          // dashRatio={0.95}
        />
      </mesh>
    )
  };

  const yOffsetToHorizontal = function(y) {
    let temp = [];
    temp.push(new THREE.Vector3(-100,y,0));
    temp.push(new THREE.Vector3(100,y,0));
    return(
      <mesh key={"h" + y.toString()} raycast={MeshLineRaycast}>
        <meshLine attach="geometry" vertices={temp}/>
        <meshLineMaterial
          attach="material"
          transparent
          depthTest={false}
          lineWidth={off_width}
          color={off_color}
          // dashArray={0.05}
          // dashRatio={0.95}
        />
      </mesh>
    )
  }

  return (<>
    {offsets.map(yOffsetToHorizontal)}
    {offsets.map(xOffsetToVertical)}

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

function TextExample({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#1c5fc9', ...props }) {
  const font = useLoader(THREE.FontLoader, '/bold.blob');
  const config = useMemo(() => ({ font, size:40, height: 50 }), [font]);
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )
  return(
    <mesh ref={mesh}>
      <textGeometry attach="geometry" args={[children, config]}/>
      <meshStandardMaterial attach="material"/>
    </mesh>
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


// function ZoomWithClick(){
//   let { viewport, mouse } = useThree();
//   // let { }
//   const controls = useRef();
//   useFrame((state) => {
//     const x = (mouse.x * viewport.width) / 2
//     const y = (mouse.y * viewport.height) / 2
//     console.log("state",state)
//     console.log("mouse x",x);
//     console.log("mouse y",y);
//     console.log("viewport",viewport);
//     // controls.current.position.set(x,y,0);
//     // console.log("controls",controls.current.position);
//     // controls.current.update()
//   });

//  return null;
// }

export default function App() {
  // let [ref, material] = useResource();
  // let [zoomLevel,setZoomLevel] = useState(50);


  // const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);


  return (

    <Canvas orthographic camera={{ position: [0, 0, 2], zoom: 50, up: [0, 0, 1], far: 10000 }}>
      <ambientLight />
      {/* <MapControls /> */}
      <NewAxis />
      {/* <TextExample position={[0,0,0]} children="I'm a Number!"/> */}

      {/* <ZoomWithClick /> */}
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

