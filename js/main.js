//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
var container = document.getElementById("container3D");
var w = container.offsetWidth;
var h = container.offsetHeight;
renderer.setSize(w, h);
container.appendChild(renderer.domElement);
// document.body.appendChild(renderer.domElement);
var camera = new THREE.PerspectiveCamera(75, w / h, 0.01, 1000);
camera.aspect = w / h;

var loader = new GLTFLoader();

var obj;

loader.load("./models/cloud/scene.gltf", function (gltf) {
  obj = gltf.scene;

  scene.add(gltf.scene);
});

scene.background = new THREE.Color(0x000000);

//resize window function
// window.addEventListener("resize", onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// various lights
// var light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500); //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 5);
scene.add(ambientLight);

// scene.add(light);
// var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// hemiLight.position.set(0, 300, 0);
// scene.add(hemiLight);

// var dirLight = new THREE.DirectionalLight(0xffffff);
// dirLight.position.set(75, 5000, -75);
// scene.add(dirLight);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(1, 1, 2);

function animate() {
  requestAnimationFrame(animate);
  //   obj.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();
