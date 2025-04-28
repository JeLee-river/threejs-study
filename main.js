import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbcccdc);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1); // 사물의 모양
const material = new THREE.MeshBasicMaterial({ color: 0x93bfcf }); // 음영이 부여진 사물
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const edges = new THREE.EdgesGeometry(geometry); // 사물에서 라인 추출
const edgeLines = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0x547792, linewidth: 2 }) // 라인 생성
);
cube.add(edgeLines); // 큐브의 자식으로 추가

camera.position.z = 5; // 사물과 거리 (화면을 차지하는 크기)

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
