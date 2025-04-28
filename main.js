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

camera.position.z = 5; // 사물과 거리 (화면을 차지하는 크기)

function animate() {
  renderer.render(scene, camera);
}
