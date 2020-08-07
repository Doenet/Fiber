import React from 'react'
import * as THREE from "three"
import { extend, Canvas } from "react-three-fiber";
import fonts from "./fonts.js";
import { Text } from "troika-three-text";


extend({ Text });


function TextExample() {
  const opts = {
    font: "Philosopher",
    fontSize: 12,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial"
  };

  return(
    <Text
      position-z={-180}
      {...opts}
      text={"I am 3D Text!"}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
    >
      {opts.materialType === "MeshPhongMaterial" ? (
        <meshPhongMaterial attach="material" color={opts.color} />
      ) : null}
    </Text>
  )
}

// function BADBADTextExample({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#1c5fc9', ...props }) {
//   const font = useLoader(THREE.FontLoader, '/bold.blob');
//   const config = useMemo(() => ({ font, size:40, height: 50 }), [font]);
//   const mesh = useUpdate(
//     self => {
//       const size = new THREE.Vector3()
//       self.geometry.computeBoundingBox()
//       self.geometry.boundingBox.getSize(size)
//       self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
//       self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
//     },
//     [children]
//   )
//   return(
//     <mesh ref={mesh}>
//       <textGeometry attach="geometry" args={[children, config]}/>
//       <meshStandardMaterial attach="material"/>
//     </mesh>
//   )
// }

export default TextExample;