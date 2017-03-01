//
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);


camera.position.set(0,30,50);

camera.lookAt(new THREE.Vector3(0,15,0));

var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfff6e6);

//append to document
document.body.appendChild( renderer.domElement );

var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25,50,25);
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;
scene.add(pointLight);


var shadowMaterial = new THREE.ShadowMaterial({color: 0xeeeeee});
shadowMaterial.opacity = 0.5;
var groundMesh = new THREE.Mesh(
    new THREE.BoxGeometry(100, .1, 100),
    shadowMaterial
);
groundMesh.receiveShadow = true;
scene.add(groundMesh);

var shapeOne = new THREE.Mesh(
    new THREE.OctahedronGeometry(10,1),
    new THREE.MeshStandardMaterial({
        color: 0xff0051,
        shading: THREE.FlatShading,
        metalness: 0,
        roughness: 0.8
    })
);

shapeOne.position.y += 10;
shapeOne.rotateZ(Math.PI/3);
shapeOne.castShadow = true;
scene.add(shapeOne);

var shapeTwo = new THREE.Mesh(
    new THREE.OctahedronGeometry(5,1),
    new THREE.MeshStandardMaterial({
        color: 0x47689b,
        shading: THREE.FlatShading ,
        metalness: 0,
        roughness: 0.8
    })
);

shapeTwo.position.y += 5;
shapeTwo.position.x += 15;
shapeTwo.rotateZ(Math.PI/5);
shapeTwo.castShadow = true;
scene.add(shapeTwo);

// Render the scene/camera combnation
renderer.render(scene, camera);



var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5,5,5,5),
    new THREE.MeshBasicMaterial({color: 0x393839, wireframe: true})
);
plane.rotateX(Math.PI/2);
//scene.add(plane);

renderer.render(scene, camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
//loop
controls.addEventListener('change', function(){
                          renderer.render(scene,camera);
});








