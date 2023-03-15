import "./App.css";
import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import testVertexShader from "./shaders/test/vertex.glsl";
import textFragmentShader from "./shaders/test/fragment.glsl";

/** Ths is how the code looks like with 3JS. But
 * React Three Fiber provides other ways to build it.
 *****************************************************/
// const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);

// const material = new THREE.RawShaderMaterial({
//   vertexShader: `
//     uniform mat4 projectionMatrix;
//     uniform mat4 viewMatrix;
//     uniform mat4 modelMatrix;

//     attribute vec3 position;

//     void main(){
//       gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

//     }
//   `,
//   fragmentShader: `
//     precision mediump float;

//     void main(){
//       gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
//     }
//   `,
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const MyShaderMaterial = () => {
  const materialRef = useRef();

  useState(() => {
    console.log(testVertexShader);
  });

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.elapsedTime;
    }
  });

  const uniforms = {
    time: { value: 0 },
  };

  // getting the shaders
  const vertexShader = testVertexShader;

  const fragmentShader = textFragmentShader;

  return (
    // <shaderMaterial/>
    <rawShaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
    />
  );
};

export default MyShaderMaterial;
