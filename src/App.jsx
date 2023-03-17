import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import testVertexShader from "./shaders/test/vertex.glsl";
import textFragmentShader from "./shaders/test/fragment.glsl";
import { OrbitControls } from "@react-three/drei";
import { Color, Texture, TextureLoader, Vector2 } from "three";

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

  // useState(() => {
  //   console.log(testVertexShader);
  // });

  /**
   * Textures
   */
  const textureLoader = new TextureLoader();
  const flagTexture = textureLoader.load("/public/images/texture.jpg");

  const uniforms = {
    uTime: { value: 0 },
    uFrequency: { value: new Vector2(10, 5) },
    uColor: { value: new Color("green") },
    uTexture: { value: flagTexture },
  };

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  // getting the shaders:

  const vertexShader = testVertexShader;
  const fragmentShader = textFragmentShader;
  // const [vertexShader, setVertexShader] = useState(testVertexShader);
  // const [fragmentShader, setFragmentShader] = useState(textFragmentShader);

  return (
    // <shaderMaterial/>

    <rawShaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      // transparent={true}
    />
  );
};

export default MyShaderMaterial;
