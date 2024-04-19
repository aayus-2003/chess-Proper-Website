console.log('main.js also working') 

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;


let controls;

let objToRender = 'chess';

const loader = new GLTFLoader();


loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);

    const scaleFactor = 50; // height of model
    object.scale.set(scaleFactor, scaleFactor, scaleFactor);

    ambientLight.intensity = 10; //---- help to change brightness
    ambientLight.color.setHex('d2e8cc');

  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 300) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);


document.getElementById("container3D").appendChild(renderer.domElement);


camera.position.z = objToRender === "dino" ? 25 : 500;


const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500) 
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);


if (objToRender === "dino") {
  controls = new OrbitControls(camera, renderer.domElement);
}


function animate() {
  requestAnimationFrame(animate);


  if (object && objToRender === "chess") {

    //here we can change movement of model

    object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    object.rotation.x =  -1 + mouseY * 1.5 / window.innerHeight;
  }
  renderer.render(scene, camera);
}


window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


document.onmouseover = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}


animate();

// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";



const scen = new THREE.Scene();

const camer = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


let mouseXx = window.innerWidth / 2;
let mouseYy = window.innerHeight / 2;

let objec;


let control;

let objToRende = 'knight';

const loade = new GLTFLoader();

const ambientLigh = new THREE.AmbientLight(0x333333, objToRende === "dino" ? 5 : 1);

loade.load(
  `models/${objToRende}/scene.gltf`,
  function (gltf) {
    objec = gltf.scene;
    scen.add(objec);

    const scaleFactor = 6; // height of model
    objec.scale.set(scaleFactor, scaleFactor, scaleFactor);

    ambientLigh.intensity = 8; //---- help to change brightness
    ambientLigh.color.setHex('FFFFFF');

  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 300) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);


const rendere = new THREE.WebGLRenderer({ alpha: true });
rendere.setSize(window.innerWidth, window.innerHeight);


document.getElementById("knight").appendChild(rendere.domElement);


camer.position.z = objToRende === "dino" ? 25 : 500;


const topLigh = new THREE.DirectionalLight(0xffffff, 1);
topLigh.position.set(500, 500, 500) 
topLigh.castShadow = true;
scen.add(topLigh);


scen.add(ambientLigh);


if (objToRende === "dino") {
  control = new OrbitControls(camer, rendere.domElement);
}


function animat() {
  requestAnimationFrame(animat);


  if (objec && objToRende === "knight") {

    //here we can change movement of model

    objec.rotation.y = -3 + mouseXx / window.innerWidth * 3;
    // objec.rotation.x =  -1 + mouseYy * 1.5 / window.innerHeight;
  }
  rendere.render(scen, camer);
}


window.addEventListener("resize", function () {
  camer.aspect = window.innerWidth / window.innerHeight;
  camer.updateProjectionMatrix();
  rendere.setSize(window.innerWidth, window.innerHeight);
});


document.onmousemove = (e) => {
  mouseXx = e.clientX;
  mouseYy = e.clientY;
}


animat();