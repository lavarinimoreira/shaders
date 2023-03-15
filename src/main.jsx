import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "react-three-fiber";
import MyShaderMaterial from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas
    camera={{ fov: 75, near: 0.1, far: 1000, position: [0.25, -0.25, 1] }}
  >
    <mesh>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <MyShaderMaterial />
    </mesh>
  </Canvas>
);
