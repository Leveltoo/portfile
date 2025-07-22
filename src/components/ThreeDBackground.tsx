'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const ThreeDBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const backgroundParticlesMeshRef = useRef<THREE.Points | null>(null);
  const particlesMaterialRef = useRef<THREE.ShaderMaterial | null>(null); // New ref for the shader material

  // Vertex Shader for particles
  const vertexShader = `
    precision highp float;
    uniform float uTime;

    attribute float size;
    attribute vec3 customColor;

    varying vec3 vColor;

    void main() {
      vColor = customColor;

      vec3 newPosition = position;

      vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );
      gl_PointSize = size * ( 300.0 / -mvPosition.z );
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  // Fragment Shader for particles
  const fragmentShader = `
    varying vec3 vColor;

    void main() {
      // Simple circular particle
      float r = 0.0;
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      r = dot(cxy, cxy);
      if (r > 1.0) {
        discard;
      }

      gl_FragColor = vec4( vColor, 0.5 - r * 0.5 ); // Adjusted alpha for better visibility
    }
  `;

  const animate = useCallback(() => {
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      // Update uTime uniform
      if (particlesMaterialRef.current) {
        particlesMaterialRef.current.uniforms.uTime.value = performance.now() * 0.001;
      }

      // Background particles subtle rotation
      if (backgroundParticlesMeshRef.current) {
        backgroundParticlesMeshRef.current.rotation.y += 0.0005;
        backgroundParticlesMeshRef.current.rotation.x += 0.0002;
      }

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Shared Shader Material ---
    const sharedParticlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true
    });
    particlesMaterialRef.current = sharedParticlesMaterial;

    // --- Background Particles ---
    const backgroundParticlesGeometry = new THREE.BufferGeometry();
    const backgroundParticlesCount = 20000; // Increased particle count for depth
    camera.position.z = 100; // Adjust camera position for deeper feel
    const bgPosArray = new Float32Array(backgroundParticlesCount * 3);
    const bgColorsArray = new Float32Array(backgroundParticlesCount * 3); // For custom colors
    const bgSizesArray = new Float32Array(backgroundParticlesCount); // For custom sizes

    const bgBaseColor = new THREE.Color(0xadd8e6); // Light blue for better visibility and depth

    for (let i = 0; i < backgroundParticlesCount; i++) {
      bgPosArray[i * 3] = (Math.random() - 0.5) * 200; // x
      bgPosArray[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
      bgPosArray[i * 3 + 2] = (Math.random() - 0.5) * 200; // z

      bgColorsArray[i * 3] = bgBaseColor.r + (Math.random() - 0.5) * 0.2; // Add some randomness
      bgColorsArray[i * 3 + 1] = bgBaseColor.g + (Math.random() - 0.5) * 0.2;
      bgColorsArray[i * 3 + 2] = bgBaseColor.b + (Math.random() - 0.5) * 0.2;
      bgSizesArray[i] = 0.5 + Math.random() * 0.5; // Larger and random initial size for visibility
    }

    backgroundParticlesGeometry.setAttribute('position', new THREE.BufferAttribute(bgPosArray, 3));
    backgroundParticlesGeometry.setAttribute(
      'customColor',
      new THREE.BufferAttribute(bgColorsArray, 3)
    );
    backgroundParticlesGeometry.setAttribute('size', new THREE.BufferAttribute(bgSizesArray, 1));

    const backgroundParticlesMesh = new THREE.Points(
      backgroundParticlesGeometry,
      sharedParticlesMaterial
    ); // Use shared material
    scene.add(backgroundParticlesMesh);
    backgroundParticlesMeshRef.current = backgroundParticlesMesh;

    // Start animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);

      if (mountRef.current && rendererRef.current && rendererRef.current.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      if (rendererRef.current) rendererRef.current.dispose();
      if (backgroundParticlesGeometry) backgroundParticlesGeometry.dispose();
      // Only dispose the shared material once
      if (particlesMaterialRef.current) particlesMaterialRef.current.dispose();
    };
  }, [animate]);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
};

export default ThreeDBackground;
