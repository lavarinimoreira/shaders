//Solid red color:

precision mediump float;

uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;

void main(){

    vec4 textureColor = texture2D(uTexture, vUv);

    //                 (r, g, b, transparency);
    // gl_FragColor = vec4(uColor,1.0);

    gl_FragColor = textureColor;
}


// In this example, the shader creates a color based on the sine of the time.
// precision highp float;
//       varying vec2 uv;
//       uniform float time;
//       void main() {
//         gl_FragColor = vec4(vec3(sin(time)), 1.0);
//       }

