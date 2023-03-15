uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
  
void main(){
    //gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 0.5);
   
    /* The code above works fine, but if we separate it we
        can have more control and better understanding about
        what is going on. So, lets do it:                 */

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    /* here we are adding some 'movement' to the shader
     by playing with the z coordenate: */
    modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

}