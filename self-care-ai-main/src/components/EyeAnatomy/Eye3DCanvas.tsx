import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { 
  RotateCcw, 
  Maximize2, 
  Eye, 
  Play, 
  Pause, 
  Layers, 
  Compass, 
  Sparkles, 
  Droplets,
  ZoomIn,
  ZoomOut
} from "lucide-react";

interface Eye3DCanvasProps {
  selectedStructureId: string;
  onSelectStructure: (id: string) => void;
  className?: string;
}

export const Eye3DCanvas: React.FC<Eye3DCanvasProps> = ({
  selectedStructureId,
  onSelectStructure,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Mesh references for highlight & interactive raycasting
  const meshesRef = useRef<{ [key: string]: THREE.Object3D }>({});
  const flowParticlesRef = useRef<THREE.Points | null>(null);
  const flowPositionsRef = useRef<Float32Array | null>(null);
  const flowProgressRef = useRef<Float32Array | null>(null);

  const [viewMode, setViewMode] = useState<"cross-section" | "globe" | "exploded">("cross-section");
  const [isFlowing, setIsFlowing] = useState<boolean>(true);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  // Initialize Scene, Camera, Lights, Meshes, and Controls
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060c18); // Deep clinical dark navy
    sceneRef.current = scene;

    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    camera.position.set(0, 2.5, 9);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 16;
    controls.maxPolarAngle = Math.PI * 0.95;
    controlsRef.current = controls;

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(6, 8, 8);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.8); // Cool blue fill
    dirLight2.position.set(-6, -4, -6);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0x34d399, 1.2); // Emerald rim light
    rimLight.position.set(0, -6, 6);
    scene.add(rimLight);

    // Root Group for Eye
    const eyeGroup = new THREE.Group();
    eyeGroup.name = "eyeGroup";
    scene.add(eyeGroup);

    // Build the anatomical models
    buildAnatomyModel(eyeGroup, viewMode);

    // Setup Aqueous Humor Particle Flow
    setupAqueousFlow(eyeGroup);

    // Raycaster for interactive clicking & hovering
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const interactables = Object.values(meshesRef.current).filter(m => m.visible);
      const intersects = raycaster.intersectObjects(interactables, true);

      if (intersects.length > 0) {
        // Find top-level registered part
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.userData.structureId && hitObj.parent && hitObj.parent !== eyeGroup) {
          hitObj = hitObj.parent;
        }
        if (hitObj?.userData?.structureId) {
          setHoveredPart(hitObj.userData.structureId);
          container.style.cursor = "pointer";
          return;
        }
      }
      setHoveredPart(null);
      container.style.cursor = "grab";
    };

    const handlePointerDown = () => {
      container.style.cursor = "grabbing";
    };

    const handlePointerUp = (e: MouseEvent) => {
      container.style.cursor = "grab";
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const interactables = Object.values(meshesRef.current).filter(m => m.visible);
      const intersects = raycaster.intersectObjects(interactables, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.userData.structureId && hitObj.parent && hitObj.parent !== eyeGroup) {
          hitObj = hitObj.parent;
        }
        if (hitObj?.userData?.structureId) {
          onSelectStructure(hitObj.userData.structureId);
        }
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousemove", handlePointerMove);
    dom.addEventListener("mousedown", handlePointerDown);
    dom.addEventListener("mouseup", handlePointerUp);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      controls.update();

      // Animate Aqueous Humor Particles
      animateAqueousFlow(delta);

      // Subtle slow idle rotation if not grabbing
      if (viewMode === "globe") {
        eyeGroup.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("mousemove", handlePointerMove);
      dom.removeEventListener("mousedown", handlePointerDown);
      dom.removeEventListener("mouseup", handlePointerUp);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (dom.parentElement === container) {
          container.removeChild(dom);
        }
      }
    };
  }, []);

  // Update Models when viewMode changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const eyeGroup = scene.getObjectByName("eyeGroup") as THREE.Group;
    if (!eyeGroup) return;

    // Clear previous anatomical meshes
    while (eyeGroup.children.length > 0) {
      const child = eyeGroup.children[0];
      eyeGroup.remove(child);
    }
    meshesRef.current = {};

    buildAnatomyModel(eyeGroup, viewMode);
    setupAqueousFlow(eyeGroup);
  }, [viewMode]);

  // Highlight selected structure & smoothly focus camera
  useEffect(() => {
    Object.entries(meshesRef.current).forEach(([id, obj]) => {
      const isSelected = id === selectedStructureId;
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material && "emissive" in child.material) {
            if (isSelected) {
              child.material.emissive = new THREE.Color(0x10b981);
              child.material.emissiveIntensity = 0.55;
            } else {
              child.material.emissive = new THREE.Color(0x000000);
              child.material.emissiveIntensity = 0;
            }
          }
        }
      });
    });

    // Camera auto-focus on select
    focusCameraOnPart(selectedStructureId);
  }, [selectedStructureId]);

  // Function to build all anatomical components of the eye
  const buildAnatomyModel = (group: THREE.Group, mode: "cross-section" | "globe" | "exploded") => {
    const isCutaway = mode === "cross-section";
    const explodedFactor = mode === "exploded" ? 1.5 : 1.0;
    const phiLength = isCutaway ? Math.PI : Math.PI * 2; // Cutaway exposes inside

    // 1. Sclera (Outer White Protective Shell)
    const scleraRadius = 2.4;
    const scleraGeom = new THREE.SphereGeometry(
      scleraRadius,
      48,
      48,
      isCutaway ? 0 : 0,
      phiLength,
      0,
      Math.PI
    );
    const scleraMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.35,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const scleraMesh = new THREE.Mesh(scleraGeom, scleraMat);
    scleraMesh.rotation.y = isCutaway ? -Math.PI / 2 : 0;
    scleraMesh.userData = { structureId: "wall", name: "Sclera" };
    group.add(scleraMesh);
    meshesRef.current["sclera"] = scleraMesh;

    // 2. Choroid (Vascular Pigmented Middle Layer)
    const choroidRadius = 2.34;
    const choroidGeom = new THREE.SphereGeometry(
      choroidRadius,
      36,
      36,
      isCutaway ? 0 : 0,
      phiLength,
      0,
      Math.PI * 0.88
    );
    const choroidMat = new THREE.MeshStandardMaterial({
      color: 0x3d1a11,
      roughness: 0.6,
      side: THREE.DoubleSide
    });
    const choroidMesh = new THREE.Mesh(choroidGeom, choroidMat);
    choroidMesh.rotation.y = isCutaway ? -Math.PI / 2 : 0;
    group.add(choroidMesh);

    // 3. Retina (Inner Light-Sensitive Neurological Wall)
    const retinaRadius = 2.3;
    const retinaGeom = new THREE.SphereGeometry(
      retinaRadius,
      40,
      40,
      isCutaway ? 0 : 0,
      phiLength,
      0,
      Math.PI * 0.82
    );
    const retinaMat = new THREE.MeshStandardMaterial({
      color: 0xdd6b20, // Warm retinal orange
      roughness: 0.5,
      side: THREE.DoubleSide
    });
    const retinaMesh = new THREE.Mesh(retinaGeom, retinaMat);
    retinaMesh.rotation.y = isCutaway ? -Math.PI / 2 : 0;
    retinaMesh.userData = { structureId: "retina-macula", name: "Retina & Macula" };
    group.add(retinaMesh);
    meshesRef.current["retina-macula"] = retinaMesh;

    // Macula Spot (Yellow Fovea Centralis on posterior pole)
    const maculaGeom = new THREE.CircleGeometry(0.32, 24);
    const maculaMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, side: THREE.DoubleSide });
    const maculaMesh = new THREE.Mesh(maculaGeom, maculaMat);
    maculaMesh.position.set(0.3, 0.1, -2.28);
    maculaMesh.rotation.y = Math.PI;
    group.add(maculaMesh);

    // 4. Cornea (Anterior Clear Bulge)
    const corneaZ = (2.2 * explodedFactor);
    const corneaGeom = new THREE.SphereGeometry(
      1.4,
      36,
      24,
      0,
      isCutaway ? Math.PI : Math.PI * 2,
      0,
      Math.PI * 0.38
    );
    const corneaMat = new THREE.MeshPhysicalMaterial({
      color: 0xdbeafe,
      transmission: 0.88,
      opacity: 0.95,
      transparent: true,
      roughness: 0.05,
      ior: 1.376,
      thickness: 0.4,
      side: THREE.DoubleSide
    });
    const corneaMesh = new THREE.Mesh(corneaGeom, corneaMat);
    corneaMesh.position.set(0, 0, corneaZ * 0.52);
    corneaMesh.rotation.x = Math.PI * 0.5;
    corneaMesh.rotation.z = isCutaway ? -Math.PI / 2 : 0;
    corneaMesh.userData = { structureId: "cornea", name: "Cornea" };
    group.add(corneaMesh);
    meshesRef.current["cornea"] = corneaMesh;

    // 5. Iris (Color Diaphragm & Pupil Aperture)
    const irisZ = 1.35 * explodedFactor;
    const irisInnerR = 0.42;
    const irisOuterR = 1.32;
    const irisGeom = new THREE.RingGeometry(irisInnerR, irisOuterR, 36, 1, 0, isCutaway ? Math.PI : Math.PI * 2);
    const irisMat = new THREE.MeshStandardMaterial({
      color: 0x059669, // Clinical emerald iris
      roughness: 0.45,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    const irisMesh = new THREE.Mesh(irisGeom, irisMat);
    irisMesh.position.set(0, 0, irisZ);
    irisMesh.rotation.z = isCutaway ? -Math.PI / 2 : 0;
    irisMesh.userData = { structureId: "iris-pupil", name: "Iris & Pupil" };
    group.add(irisMesh);
    meshesRef.current["iris-pupil"] = irisMesh;

    // Pupil Border / Sphincter Ring
    const sphincterGeom = new THREE.TorusGeometry(irisInnerR + 0.02, 0.03, 16, 32);
    const sphincterMat = new THREE.MeshBasicMaterial({ color: 0x064e3b });
    const sphincterMesh = new THREE.Mesh(sphincterGeom, sphincterMat);
    sphincterMesh.position.set(0, 0, irisZ + 0.01);
    group.add(sphincterMesh);

    // 6. Anterior Chamber (Transparent Water Volume between Cornea & Iris)
    const antChamberGeom = new THREE.CylinderGeometry(
      irisOuterR * 0.95,
      irisOuterR * 0.8,
      0.45,
      32,
      1,
      false,
      0,
      isCutaway ? Math.PI : Math.PI * 2
    );
    const antChamberMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      transmission: 0.7,
      roughness: 0.1,
      side: THREE.DoubleSide
    });
    const antChamberMesh = new THREE.Mesh(antChamberGeom, antChamberMat);
    antChamberMesh.rotation.x = Math.PI / 2;
    antChamberMesh.rotation.y = isCutaway ? -Math.PI / 2 : 0;
    antChamberMesh.position.set(0, 0, (irisZ + 0.25));
    antChamberMesh.userData = { structureId: "anterior-chamber", name: "Anterior Chamber" };
    group.add(antChamberMesh);
    meshesRef.current["anterior-chamber"] = antChamberMesh;

    // Trabecular Meshwork & Schlemm's Canal (Filtration Ring at Anterior Angle)
    const angleGeom = new THREE.TorusGeometry(irisOuterR - 0.02, 0.08, 16, 48, isCutaway ? Math.PI : Math.PI * 2);
    const angleMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Vibrant cyan drainage ring
      emissive: 0x0369a1,
      emissiveIntensity: 0.4,
      roughness: 0.3
    });
    const angleMesh = new THREE.Mesh(angleGeom, angleMat);
    angleMesh.position.set(0, 0, irisZ + 0.05);
    angleMesh.rotation.z = isCutaway ? -Math.PI / 2 : 0;
    angleMesh.userData = { structureId: "trabecular-meshwork", name: "Trabecular Meshwork & Schlemm's Canal" };
    group.add(angleMesh);
    meshesRef.current["trabecular-meshwork"] = angleMesh;

    // 7. Crystalline Lens (Biconvex Optical Disc behind Iris)
    const lensZ = 1.05 * explodedFactor;
    // Biconvex shape via lathe of curve
    const lensPoints = [];
    for (let i = 0; i <= 20; i++) {
      const t = (i / 20) * Math.PI;
      const x = Math.sin(t) * 0.92; // Lens equator radius
      const y = Math.cos(t) * 0.38; // Lens thickness
      lensPoints.push(new THREE.Vector2(x, y));
    }
    const lensGeom = new THREE.LatheGeometry(lensPoints, 36, 0, isCutaway ? Math.PI : Math.PI * 2);
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: 0xf0fdf4,
      transmission: 0.85,
      transparent: true,
      opacity: 0.9,
      roughness: 0.08,
      ior: 1.41,
      thickness: 0.6,
      side: THREE.DoubleSide
    });
    const lensMesh = new THREE.Mesh(lensGeom, lensMat);
    lensMesh.rotation.x = Math.PI / 2;
    lensMesh.rotation.y = isCutaway ? -Math.PI / 2 : 0;
    lensMesh.position.set(0, 0, lensZ);
    lensMesh.userData = { structureId: "crystalline-lens", name: "Crystalline Lens" };
    group.add(lensMesh);
    meshesRef.current["crystalline-lens"] = lensMesh;

    // 8. Ciliary Body & Ciliary Processes (Corona Ciliaris Ring)
    const ciliaryZ = 1.0 * explodedFactor;
    const ciliaryGeom = new THREE.TorusGeometry(1.5, 0.22, 16, 48, isCutaway ? Math.PI : Math.PI * 2);
    const ciliaryMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea, // Distinct purple ciliary body
      roughness: 0.6,
      emissive: 0x581c87,
      emissiveIntensity: 0.25
    });
    const ciliaryMesh = new THREE.Mesh(ciliaryGeom, ciliaryMat);
    ciliaryMesh.position.set(0, 0, ciliaryZ);
    ciliaryMesh.rotation.z = isCutaway ? -Math.PI / 2 : 0;
    ciliaryMesh.userData = { structureId: "ciliary-body", name: "Ciliary Body & Processes" };
    group.add(ciliaryMesh);
    meshesRef.current["ciliary-body"] = ciliaryMesh;

    // Posterior Chamber (Annular crevice between iris and lens/zonules)
    const postChamberGeom = new THREE.RingGeometry(0.7, 1.45, 32, 1, 0, isCutaway ? Math.PI : Math.PI * 2);
    const postChamberMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    const postChamberMesh = new THREE.Mesh(postChamberGeom, postChamberMat);
    postChamberMesh.position.set(0, 0, lensZ + 0.15);
    postChamberMesh.rotation.z = isCutaway ? -Math.PI / 2 : 0;
    postChamberMesh.userData = { structureId: "posterior-chamber", name: "Posterior Chamber" };
    group.add(postChamberMesh);
    meshesRef.current["posterior-chamber"] = postChamberMesh;

    // 9. Zonules of Zinn (Delicate Suspensory Fibers)
    const zonuleGroup = new THREE.Group();
    const zonuleCount = isCutaway ? 24 : 48;
    const zonuleMat = new THREE.LineBasicMaterial({ color: 0xa7f3d0, transparent: true, opacity: 0.75 });
    for (let i = 0; i < zonuleCount; i++) {
      const angle = (i / zonuleCount) * (isCutaway ? Math.PI : Math.PI * 2) - (isCutaway ? Math.PI / 2 : 0);
      const innerX = Math.cos(angle) * 0.92;
      const innerY = Math.sin(angle) * 0.92;
      const outerX = Math.cos(angle) * 1.42;
      const outerY = Math.sin(angle) * 1.42;

      const pts = [
        new THREE.Vector3(innerX, innerY, lensZ),
        new THREE.Vector3(outerX, outerY, ciliaryZ)
      ];
      const zGeom = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(zGeom, zonuleMat);
      zonuleGroup.add(line);
    }
    group.add(zonuleGroup);

    // 10. Vitreous Humor Gel Chamber (Posterior Sphere Volume)
    const vitreousGeom = new THREE.SphereGeometry(
      2.1,
      32,
      32,
      isCutaway ? 0 : 0,
      phiLength,
      0,
      Math.PI * 0.8
    );
    const vitreousMat = new THREE.MeshPhysicalMaterial({
      color: 0x67e8f9,
      transmission: 0.92,
      opacity: 0.18,
      transparent: true,
      roughness: 0.1,
      side: THREE.DoubleSide
    });
    const vitreousMesh = new THREE.Mesh(vitreousGeom, vitreousMat);
    vitreousMesh.position.set(0, 0, -0.3);
    vitreousMesh.rotation.y = isCutaway ? -Math.PI / 2 : 0;
    vitreousMesh.userData = { structureId: "vitreous-body", name: "Vitreous Humor" };
    group.add(vitreousMesh);
    meshesRef.current["vitreous-body"] = vitreousMesh;

    // 11. Optic Nerve (Cranial Nerve II Posterior Stem)
    const opticGeom = new THREE.CylinderGeometry(0.5, 0.55, 1.8, 24);
    const opticMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.5
    });
    const opticMesh = new THREE.Mesh(opticGeom, opticMat);
    opticMesh.position.set(0, -0.15, -3.2);
    opticMesh.rotation.x = Math.PI / 2;
    opticMesh.userData = { structureId: "optic-nerve", name: "Optic Nerve" };
    group.add(opticMesh);
    meshesRef.current["optic-nerve"] = opticMesh;

    // Central Retinal Artery & Vein cores inside optic nerve
    const arteryGeom = new THREE.CylinderGeometry(0.08, 0.08, 1.82, 12);
    const arteryMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const arteryMesh = new THREE.Mesh(arteryGeom, arteryMat);
    arteryMesh.position.set(0.1, -0.15, -3.2);
    arteryMesh.rotation.x = Math.PI / 2;
    group.add(arteryMesh);

    const veinGeom = new THREE.CylinderGeometry(0.09, 0.09, 1.82, 12);
    const veinMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const veinMesh = new THREE.Mesh(veinGeom, veinMat);
    veinMesh.position.set(-0.1, -0.15, -3.2);
    veinMesh.rotation.x = Math.PI / 2;
    group.add(veinMesh);
  };

  // Setup Animated Aqueous Humor Flow Particle System
  const setupAqueousFlow = (group: THREE.Group) => {
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const progress = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      progress[i] = Math.random(); // Random starting phase [0, 1]
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geom, mat);
    group.add(particles);

    flowParticlesRef.current = particles;
    flowPositionsRef.current = positions;
    flowProgressRef.current = progress;
  };

  // Animate the Aqueous Humor through its 5-stage anatomical pathway
  const animateAqueousFlow = (delta: number) => {
    if (!isFlowing || !flowParticlesRef.current || !flowPositionsRef.current || !flowProgressRef.current) return;

    const positions = flowPositionsRef.current;
    const progress = flowProgressRef.current;
    const count = progress.length;
    const speed = 0.22;

    for (let i = 0; i < count; i++) {
      progress[i] = (progress[i] + delta * speed) % 1.0;
      const t = progress[i];
      const idx = i * 3;

      // Stage 1 (0.0 -> 0.25): Production at Ciliary Body in Posterior Chamber
      // Stage 2 (0.25 -> 0.45): Flow forward through pupillary aperture into Anterior Chamber
      // Stage 3 (0.45 -> 0.75): Convective circulation inside Anterior Chamber
      // Stage 4 (0.75 -> 1.0): Drainage through Trabecular Meshwork at the iridocorneal angle
      const particleAngle = (i / count) * Math.PI * 2;

      if (t < 0.25) {
        // In Posterior Chamber near Ciliary Processes
        const subT = t / 0.25;
        const r = THREE.MathUtils.lerp(1.35, 0.65, subT);
        const z = THREE.MathUtils.lerp(1.0, 1.25, subT);
        positions[idx] = Math.cos(particleAngle) * r;
        positions[idx + 1] = Math.sin(particleAngle) * r;
        positions[idx + 2] = z;
      } else if (t < 0.45) {
        // Passing through Pupil Aperture
        const subT = (t - 0.25) / 0.2;
        const r = THREE.MathUtils.lerp(0.65, 0.38, subT);
        const z = THREE.MathUtils.lerp(1.25, 1.45, subT);
        positions[idx] = Math.cos(particleAngle) * r;
        positions[idx + 1] = Math.sin(particleAngle) * r;
        positions[idx + 2] = z;
      } else if (t < 0.75) {
        // Circulating in Anterior Chamber toward filtration angle
        const subT = (t - 0.45) / 0.3;
        const r = THREE.MathUtils.lerp(0.38, 1.28, subT);
        const z = THREE.MathUtils.lerp(1.45, 1.38, subT);
        // Add subtle swirl
        const swirlAngle = particleAngle + subT * 0.5;
        positions[idx] = Math.cos(swirlAngle) * r;
        positions[idx + 1] = Math.sin(swirlAngle) * r;
        positions[idx + 2] = z;
      } else {
        // Draining through Trabecular Meshwork into Schlemm's Canal
        const subT = (t - 0.75) / 0.25;
        const r = THREE.MathUtils.lerp(1.28, 1.36, subT);
        const z = THREE.MathUtils.lerp(1.38, 1.22, subT);
        positions[idx] = Math.cos(particleAngle) * r;
        positions[idx + 1] = Math.sin(particleAngle) * r;
        positions[idx + 2] = z;
      }
    }

    flowParticlesRef.current.geometry.attributes.position.needsUpdate = true;
  };

  // Smooth Camera transition to target structure
  const focusCameraOnPart = (partId: string) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    // Target positions
    const viewTargets: { [key: string]: { pos: [number, number, number]; lookAt: [number, number, number] } } = {
      "anterior-chamber": { pos: [0, 1.8, 5.2], lookAt: [0, 0, 1.3] },
      "posterior-chamber": { pos: [1.2, 1.5, 4.8], lookAt: [0, 0, 1.1] },
      "cornea": { pos: [0, 0.8, 4.8], lookAt: [0, 0, 1.5] },
      "trabecular-meshwork": { pos: [1.5, 1.5, 4.5], lookAt: [0.8, 0.8, 1.3] },
      "ciliary-body": { pos: [1.8, 1.8, 4.8], lookAt: [0, 0, 1.0] },
      "crystalline-lens": { pos: [0, 1.2, 4.2], lookAt: [0, 0, 1.05] },
      "iris-pupil": { pos: [0, 1.0, 4.6], lookAt: [0, 0, 1.35] },
      "vitreous-body": { pos: [2.5, 2.5, 6.5], lookAt: [0, 0, -0.2] },
      "retina-macula": { pos: [0, 2.0, -5.5], lookAt: [0, 0, -2.0] },
      "optic-nerve": { pos: [1.5, -2.0, -5.8], lookAt: [0, -0.15, -3.2] }
    };

    const target = viewTargets[partId] || { pos: [0, 2.5, 8.5], lookAt: [0, 0, 0] };
    
    // Smooth transition
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...target.pos);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...target.lookAt);

    let t = 0;
    const tween = () => {
      t += 0.05;
      if (t <= 1) {
        camera.position.lerpVectors(startPos, endPos, t);
        controls.target.lerpVectors(startTarget, endTarget, t);
        requestAnimationFrame(tween);
      } else {
        camera.position.copy(endPos);
        controls.target.copy(endTarget);
      }
    };
    tween();
  };

  const handleResetCamera = () => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    camera.position.set(0, 2.5, 9);
    controls.target.set(0, 0, 0);
  };

  const handleZoom = (direction: "in" | "out") => {
    const camera = cameraRef.current;
    if (!camera) return;
    const factor = direction === "in" ? 0.8 : 1.25;
    camera.position.multiplyScalar(factor);
  };

  return (
    <div className={`relative w-full h-full min-h-[520px] bg-slate-950 rounded-3xl overflow-hidden select-none ${className}`}>
      
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Overlay Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        
        {/* Left: View Mode Toggle */}
        <div className="pointer-events-auto flex items-center gap-1.5 p-1 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 shadow-xl">
          <button
            onClick={() => setViewMode("cross-section")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === "cross-section"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/60"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers size={13} />
            <span>Chamber Cutaway</span>
          </button>
          <button
            onClick={() => setViewMode("globe")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === "globe"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/60"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Eye size={13} />
            <span>Full 3D Globe</span>
          </button>
        </div>

        {/* Right: Camera & Flow Actions */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Aqueous Flow Toggle */}
          <button
            onClick={() => setIsFlowing(!isFlowing)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border shadow-xl backdrop-blur-md ${
              isFlowing
                ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                : "bg-slate-900/90 border-slate-700/80 text-slate-400 hover:text-white"
            }`}
            title="Toggle Aqueous Humor Fluid Circulation Animation"
          >
            <Droplets size={13} className={isFlowing ? "text-cyan-400 animate-pulse" : ""} />
            <span className="hidden sm:inline">Aqueous Flow:</span>
            <span>{isFlowing ? "ON" : "PAUSED"}</span>
          </button>

          {/* Zoom Buttons */}
          <button
            onClick={() => handleZoom("in")}
            className="p-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 shadow-xl"
            title="Zoom In"
          >
            <ZoomIn size={14} />
          </button>
          <button
            onClick={() => handleZoom("out")}
            className="p-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 shadow-xl"
            title="Zoom Out"
          >
            <ZoomOut size={14} />
          </button>

          {/* Reset Camera */}
          <button
            onClick={handleResetCamera}
            className="p-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 shadow-xl"
            title="Reset 3D Camera"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Floating Hover Indicator */}
      {hoveredPart && (
        <div className="absolute top-16 left-4 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/50 px-3.5 py-1.5 rounded-xl text-xs text-emerald-200 font-bold shadow-2xl pointer-events-none animate-fadeIn">
          Click to inspect: <span className="text-white capitalize">{hoveredPart.replace("-", " ")}</span>
        </div>
      )}

      {/* Bottom Status / Navigation Hints */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <Compass size={13} className="text-emerald-400" />
            <strong>Rotate:</strong> Drag
          </span>
          <span>•</span>
          <span><strong>Zoom:</strong> Scroll</span>
          <span>•</span>
          <span><strong>Pan:</strong> Right-Click</span>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
          <Sparkles size={12} />
          <span>Native 60FPS WebGL 3D Model • Zero Auth Restrictions</span>
        </div>
      </div>

    </div>
  );
};
