// NeuroLumen - A Luz que Revela
// Three.js particle system + Gallery

let scene, camera, renderer;
let sceneExp, cameraExp, rendererExp;
let pointCloud, pointCloudExp;

function initThree() {
  const container = document.getElementById('three-container');
  if (!container) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  camera.position.z = 30;

  // Partículas de luz (hero)
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const colors = [];
  for (let i = 0; i < 5000; i++) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;
    vertices.push(x, y, z);
    // Cyan to teal variation
    const c = 0.7 + Math.random() * 0.3;
    colors.push(0, c, c * 0.9);
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.18,
    transparent: true,
    opacity: 0.85,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  pointCloud = new THREE.Points(geometry, material);
  scene.add(pointCloud);

  function animate() {
    requestAnimationFrame(animate);
    if (pointCloud) {
      pointCloud.rotation.y += 0.0006;
      pointCloud.rotation.x += 0.0003;
    }
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Second Three.js scene for the "Experiência" section
function initThreeExp() {
  const container = document.getElementById('three-container-exp');
  if (!container) return;

  const width = container.clientWidth || 800;
  const height = container.clientHeight || 450;

  sceneExp = new THREE.Scene();
  cameraExp = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  rendererExp = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  rendererExp.setSize(width, height);
  rendererExp.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(rendererExp.domElement);

  cameraExp.position.z = 25;

  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 3000; i++) {
    vertices.push(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 40
    );
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({
    color: 0x00ffcc,
    size: 0.2,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  pointCloudExp = new THREE.Points(geometry, material);
  sceneExp.add(pointCloudExp);

  // Mouse interaction
  let mouseX = 0, mouseY = 0;
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  });

  function animateExp() {
    requestAnimationFrame(animateExp);
    if (pointCloudExp) {
      pointCloudExp.rotation.y += 0.001 + mouseX * 0.002;
      pointCloudExp.rotation.x += 0.0005 + mouseY * 0.001;
    }
    rendererExp.render(sceneExp, cameraExp);
  }
  animateExp();

  window.addEventListener('resize', () => {
    if (!cameraExp || !rendererExp || !container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    cameraExp.aspect = w / h;
    cameraExp.updateProjectionMatrix();
    rendererExp.setSize(w, h);
  });
}

// Galeria
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/133/600/400",
  "https://picsum.photos/id/201/600/400",
  "https://picsum.photos/id/237/600/400",
  "https://picsum.photos/id/251/600/400",
  "https://picsum.photos/id/180/600/400",
  "https://picsum.photos/id/870/600/400",
  "https://picsum.photos/id/1018/600/400"
];

function loadGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  images.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = "group relative overflow-hidden rounded-2xl aspect-video cursor-pointer border border-cyan-500/20 hover:border-cyan-400/60 transition";
    div.innerHTML = `
      <img src="${src}" alt="Revelação ${i + 1}" loading="lazy"
           class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
        <p class="text-cyan-300 text-sm font-medium">Revelação Neural #${i + 1}</p>
      </div>
    `;
    grid.appendChild(div);
  });
}

window.onload = () => {
  initThree();
  initThreeExp();
  loadGallery();
};
