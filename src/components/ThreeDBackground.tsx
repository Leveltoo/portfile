'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  // Use a single ref to hold all Three.js objects for cleanup
  const threeJsObjectsRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    camera?: THREE.PerspectiveCamera;
    scene?: THREE.Scene;
    particles?: THREE.Points;
    material?: THREE.ShaderMaterial;
    geometry?: THREE.BufferGeometry;
    animationFrameId?: number;
  }>({});

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

  useEffect(() => {
    if (!mountRef.current) return;

    const threeJsObjects = threeJsObjectsRef.current;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    threeJsObjects.scene = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    threeJsObjects.camera = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    threeJsObjects.renderer = renderer;

    // --- Shared Shader Material ---
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true
    });
    threeJsObjects.material = material;

    // --- Background Particles ---
    const geometry = new THREE.BufferGeometry();
    threeJsObjects.geometry = geometry;
    const backgroundParticlesCount = 20000;
    camera.position.z = 100;
    const bgPosArray = new Float32Array(backgroundParticlesCount * 3);
    const bgColorsArray = new Float32Array(backgroundParticlesCount * 3);
    const bgSizesArray = new Float32Array(backgroundParticlesCount);

    const bgBaseColor = new THREE.Color(0xadd8e6);

    for (let i = 0; i < backgroundParticlesCount; i++) {
      bgPosArray[i * 3] = (Math.random() - 0.5) * 200;
      bgPosArray[i * 3 + 1] = (Math.random() - 0.5) * 200;
      bgPosArray[i * 3 + 2] = (Math.random() - 0.5) * 200;

      bgColorsArray[i * 3] = bgBaseColor.r + (Math.random() - 0.5) * 0.2;
      bgColorsArray[i * 3 + 1] = bgBaseColor.g + (Math.random() - 0.5) * 0.2;
      bgColorsArray[i * 3 + 2] = bgBaseColor.b + (Math.random() - 0.5) * 0.2;
      bgSizesArray[i] = 0.5 + Math.random() * 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(bgPosArray, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(bgColorsArray, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(bgSizesArray, 1));

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    threeJsObjects.particles = particles;

    // --- Animation Loop ---
    const animate = () => {
      if (
        threeJsObjects.particles &&
        threeJsObjects.material &&
        threeJsObjects.renderer &&
        threeJsObjects.scene &&
        threeJsObjects.camera
      ) {
        // Slower animation speed
        threeJsObjects.material.uniforms.uTime.value = performance.now() * 0.0001;

        // Slower and more subtle rotation
        threeJsObjects.particles.rotation.y += 0.0001;
        threeJsObjects.particles.rotation.x += 0.00005;

        threeJsObjects.renderer.render(threeJsObjects.scene, threeJsObjects.camera);
      }
      threeJsObjects.animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- Event Listeners ---
    const handleResize = () => {
      if (threeJsObjects.camera && threeJsObjects.renderer) {
        threeJsObjects.camera.aspect = window.innerWidth / window.innerHeight;
        threeJsObjects.camera.updateProjectionMatrix();
        threeJsObjects.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      if (threeJsObjects.animationFrameId) {
        cancelAnimationFrame(threeJsObjects.animationFrameId);
      }
      window.removeEventListener('resize', handleResize);

      if (mountRef.current && threeJsObjects.renderer?.domElement) {
        mountRef.current.removeChild(threeJsObjects.renderer.domElement);
      }

      threeJsObjects.geometry?.dispose();
      threeJsObjects.material?.dispose();
      threeJsObjects.renderer?.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
};

export default ThreeDBackground;
