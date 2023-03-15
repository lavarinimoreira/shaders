//Solid red color:

precision mediump float;

void main(){
    //                 (r, g, b, transparency);
    gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
}


// In this example, the shader creates a color based on the sine of the time.
// precision highp float;
//       varying vec2 uv;
//       uniform float time;
//       void main() {
//         gl_FragColor = vec4(vec3(sin(time)), 1.0);
//       }

