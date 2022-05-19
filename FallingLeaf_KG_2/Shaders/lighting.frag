#version 330 core
out vec4 outputColor;

uniform vec3 objectColor;
uniform vec3 lightColor;

in vec2 texCoord;

uniform sampler2D texture0;

void main(){
     vec4 texColor = texture(texture0, texCoord);

    vec4 FragColor = vec4(lightColor * objectColor, 1.0);
    vec4 ambient = vec4(lightColor * 0.5f, 1.0f) * texColor;
    outputColor = ambient;
}