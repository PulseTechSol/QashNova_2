"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";

function BlobShader() {
  const mesh = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const lerpedMouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    lerpedMouse.current.x += (mouse.current.x - lerpedMouse.current.x) * 0.05;
    lerpedMouse.current.y += (mouse.current.y - lerpedMouse.current.y) * 0.05;

    if (mesh.current) {
      const mat = mesh.current.material as THREE.ShaderMaterial;
      mat.uniforms.u_mouse.value.set(
        lerpedMouse.current.x,
        lerpedMouse.current.y
      );
      mat.uniforms.u_time.value += 0.01;
    }
  });

  const getThreeJSCode = () => {
    return `
    precision mediump float;

    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform float u_time;

    float flame(
      vec2 uv,
      vec2 center,
      float r,
      float blur,
      vec2 wind
    ) {
      vec2 diff = uv - center;
      diff.x *= 0.9 + 0.2 * sin(u_time + diff.y * 10.0);
      diff.y *= 0.2 + 0.3 * cos(u_time + diff.x * 10.0);
      diff += wind * 0.1 * (1.2 - diff.y);
      return smoothstep(r + blur, r - blur, length(diff));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;

      float angle = radians(-18.0);
      vec2 center = vec2(0.2, 0.5);
      vec2 offset = uv - center;

      float cosA = cos(angle);
      float sinA = sin(angle);
      mat2 rotation = mat2(
        cosA, -sinA,
        sinA,  cosA
      );
      uv = rotation * offset + center;

      vec2 wind = -(u_mouse - center) * 4.0;
      vec3 color = vec3(0.0);

      vec2 mainBlob = vec2(1.2, 0.5);

      // New Colors:
      color += flame(uv, mainBlob, 0.38, 0.28, wind) * vec3(0.235, 0.396, 1.0);      // Light Blue
      color += flame(uv, mainBlob + vec2(-0.13, 0.0), 0.38, 0.32, wind) * vec3(0.345, 0.255, 2.831);  // Purple
      color += flame(uv, mainBlob + vec2(0.02, -0.02), 0.34, 0.25, wind) * vec3(0.149, 0.090, 0.694);  // Dark Blue

      float alpha = clamp(dot(color, vec3(0.333)), 0.0, 0.9);
      gl_FragColor = vec4(color, alpha);
    }
  `;
  };

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={{
          u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
          u_time: { value: 0 },
          u_resolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
        }}
        vertexShader={`
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={getThreeJSCode()}
        transparent
      />
    </mesh>
  );
}

export default function AnimatedBackground({
  darkMode = false,
}: {
  darkMode?: boolean;
}) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <BlobShader />
    </Canvas>
  );
}
