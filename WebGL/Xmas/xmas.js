/*global window, jQuery, THREE */

var Leaf = function() {
    THREE.Group.apply(this, arguments);
    
    var leaf = new THREE.Mesh(
        new THREE.TorusGeometry(.8,1.6,3.4),
        new THREE.MeshStandardMaterial({
            color: 0x0b8450,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.8,
            refractionRatio: 0.25
        })
    );
    
    leaf.rotateX(Math.random()*Math.PI*2);
    leaf.rotateZ(Math.random()*Math.PI*2);
    leaf.rotateY(Math.random()*Math.PI*2);
    leaf.receiveShadow = true;
    leaf.castShadow = true;
    
    this.add(leaf);
    
}

//interesting: creates a new object with the specified prototype object and properties.
Leaf.prototype = Object.create(THREE.Group.prototype);
Leaf.prototype.constructor = Leaf;


var ChristmasTree = function (){
    THREE.Group.apply(this, arguments);
    
    var potMaterial = new THREE.MeshStandardMaterial({
        color: 0xf97514,
        shading: THREE.FlatShading,
        metalness:0,
        roughness: 0.8,
        refractionRatio: 0.25
    });
    
    var pot = new THREE.Mesh(
        addNoise(new THREE.CylinderGeometry(30,25,35,8,2), 2),
        potMaterial
    );
    pot.position.y += 17.5;
    pot.position.y += 17.5;
    pot.castShadow = true;
    pot.receiveShadow = true;
    this.add(pot);
    var potRim = new THREE.Mesh(
        addNoise(new THREE.CylinderGeometry(38, 35, 10, 8, 1), 2),
        potMaterial
    );
    potRim.position.y += 35;
    potRim.castShadow = true;
    potRim.receiveShadow = true;
    this.add(potRim);
    
    var trunk = new THREE.Mesh(
        addNoise(new THREE.CylinderGeometry(12, 18, 30, 8, 3),2),
        new THREE.MeshStandardMaterial( {
            color: 0x713918,
            shading: THREE.FlatShading ,
            metalness: 0,
            roughness: 0.8,
            refractionRatio: 0.25
        } )
    );
    
    trunk.position.y += 45;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    this.add(trunk);

    // A shape, 
    
    var x = 20, y = 10;
    var logo = new THREE.Shape(); // From http://blog.burlock.org/html5/130-paths
    logo.moveTo( x + 25, y + 25 );
    logo.bezierCurveTo( x + 25, y + 25, x + 20, y, x, y );
    logo.bezierCurveTo( x - 30, y, x - 30, y + 35,x - 30,y + 35 );
    logo.bezierCurveTo( x - 30, y + 55, x - 10, y + 77, x + 25, y + 95 );
    logo.bezierCurveTo( x + 60, y + 77, x + 80, y + 55, x + 80, y + 35 );
    logo.bezierCurveTo( x + 80, y + 35, x + 80, y, x + 50, y );
    logo.bezierCurveTo( x + 35, y, x + 25, y + 25, x + 25, y + 25 );

    
    var extrudeSettings = {
        amount: 8, 
        bevelEnabled: true, 
        bevelSegments: 2, 
        steps: 2, 
        bevelSize: 1, 
        bevelThickness: 1 
    };
    
    var treeGroup = new THREE.Group();

    var logoGeometry = new THREE.ExtrudeGeometry( logo, extrudeSettings );
    addNoise(logoGeometry, 2,2,0.5)
    var mesh = new THREE.Mesh( logoGeometry, new THREE.MeshStandardMaterial( {
            color: 0x15a46b,
            shading: THREE.FlatShading ,
            metalness: 0,
            roughness: 0.8,
            refractionRatio: 0.25
        } ) ) ;

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    treeGroup.add( mesh );

    for(var x = 0; x < logoGeometry.vertices.length; x++) {
        var leaf = new Leaf();
        leaf.position.copy(logoGeometry.vertices[x]);
        treeGroup.add(leaf);
    }

    treeGroup.position.y += 180;
    treeGroup.position.x -= 60;
    treeGroup.position.z += 10;
    treeGroup.rotateZ(Math.PI);
    treeGroup.rotateY(Math.PI);
    treeGroup.scale.set(1.2,1.2,1.2);

    this.add(treeGroup);

    var decorationPositions = [
        [-35, 55, 17, -0.1, 0],
        [35, 59, 17, -0.1, 0],
        [-5, 74, 17, -0.2, 0.2],
        [18, 123, 18, -0.2, 0.3],
        [43, 100, 15, -0.2, 0.3],
        [-12, 133, 20, 0, 0],

        [-35, 65, -17, 0.1, -0],
        [25, 67, -17, 0.1, -0],
        [-5, 74, -17, 0.2, -0.2],
        [10, 143, -18, 0.2, 0.3],
        [50, 85, -15, 0.2, 0.3],
    ];
    this.decorations = [];
    for (var d = 0; d < decorationPositions.length; d++) {
        var decoration = new Decoration();
        decoration.position.set(decorationPositions[d][0], decorationPositions[d][1], decorationPositions[d][2]);
        decoration.rotateX(decorationPositions[d][3]);
        decoration.rotateZ(decorationPositions[d][4]);
        this.add(decoration);
        this.decorations.push(decoration);
    }

    
}


ChristmasTree.prototype = Object.create(THREE.Group.prototype);
ChristmasTree.prototype.constructor = ChristmasTree;
ChristmasTree.prototype.updatePosition = function() {
    for(var d = 0; d < this.decorations.length; d++) {
        this.decorations[d].updatePosition();
    }
};


var Star = function() {

    THREE.Group.apply(this, arguments);

    var starShape = new THREE.Shape([
        new THREE.Vector2(0, 50),
        new THREE.Vector2(10, 10),
        new THREE.Vector2(40, 10),
        new THREE.Vector2(20, -10),
        new THREE.Vector2(30, -50),
        new THREE.Vector2(0, -20),
        new THREE.Vector2(-30, -50),
        new THREE.Vector2(-20, -10),
        new THREE.Vector2(-40, 10),
        new THREE.Vector2(-10, 10)
    ]);

    var geometry = new THREE.ExtrudeGeometry(starShape, {
        steps: 1,
        amount: 4,
        curveSegments: 1,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 10,
        bevelSegments: 1
    });
    addNoise(geometry, 0, 0, 2);

    var star = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: 0xffd423,
        shading: THREE.FlatShading,
        metalness: 0,
        roughness: 0.8,
        refractionRatio: 0.25,
        emissive: 0xffd423,
        emissiveIntensity: 0.4
    }));
    star.scale.set(.3, .3, .3);
    this.add(star);

    var pointLight = new THREE.DirectionalLight( 0xffd423,.4);
    pointLight.position.set( 0, 10, 0);

    this.add( pointLight );
}
Star.prototype = Object.create(THREE.Group.prototype);
Star.prototype.constructor = Star;
Star.prototype.updatePosition = function() {
    this.rotateY(0.005);
};


//constructor of a group of meshes 
var Decoration = function() {
     // Run the Group constructor with the given arguments
    THREE.Group.apply(this, arguments);
    
      var colors = ['#ff0051', '#f56762','#a53c6c','#f19fa0','#72bdbf','#47689b'];
    
    this.rotationSpeed = Math.random() * 0.02 + 0.005;
    this.rotationPosition = Math.random();
    
    var bauble  = new THREE.Mesh(
        addNoise(new THREE.OctahedronGeometry(12,1),2),
        new THREE.MeshStandardMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 0.8,
            refractionRatio: 0.25
        })
    );
    
    bauble.castShadow = true;
    bauble.receiveShadow = true;
    bauble.rotateZ(Math.random()*Math.PI*2);
    bauble.rotateY(Math.random()*Math.PI*2);
    this.add(bauble);

     var shapeOne = new THREE.Mesh(
        addNoise(new THREE.CylinderGeometry(4, 6, 10, 6, 1), 0.5),
        new THREE.MeshStandardMaterial( {
            color: 0xf8db08,
            shading: THREE.FlatShading ,
            metalness: 0,
            roughness: 0.8,
            refractionRatio: 0.25
        } )
    );
    shapeOne.position.y += 8;
    shapeOne.castShadow = true;
    shapeOne.receiveShadow = true;
    this.add(shapeOne);
    
    var shapeTwo = new THREE.Mesh(
        addNoise(new THREE.TorusGeometry( 2,1, 6, 4, Math.PI), 0.2),
        new THREE.MeshStandardMaterial( {
            color: 0xf8db08,
            shading: THREE.FlatShading ,
            metalness: 0,
            roughness: 0.8,
            refractionRatio: 0.25

        } )
    );
    
    shapeTwo.position.y += 13;
    shapeTwo.castShadow = true;
    shapeTwo.receiveShadow = true;
    
    
    
};

Decoration.prototype = Object.create(THREE.Group.prototype);
Decoration.prototype.constructor = Decoration;

Decoration.prototype.updatePosition = function() {
  this.rotationPosition += this.rotationSpeed;
  this.rotation.y = (Math.sin(this.rotationPosition));
};

var Present = function() {

    THREE.Group.apply(this, arguments);

     // A random color assignment
    var colors = ['#ff0051', '#a53c6c','#f19fa0','#72bdbf','#47689b'],
        boxColor = colors.splice( Math.floor(Math.random()*colors.length), 1 )[0];
        colors.push('#393839'),
        ribbonColor = colors.splice( Math.floor(Math.random()*colors.length), 1 )[0],
        boxMaterial = new THREE.MeshStandardMaterial( {
            color: boxColor,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 1
        }),
        ribbonMaterial = new THREE.MeshStandardMaterial( {
            color: ribbonColor,
            shading: THREE.FlatShading,
            metalness: 0,
            roughness: 1
        });

    var box = new THREE.Mesh(
        addNoise(new THREE.BoxGeometry( 20, 12, 15), 2,1, 2),
        boxMaterial
    );
    box.position.y += 6;
    box.castShadow = true;
    box.receiveShadow = true;
    this.add(box);

    box = new THREE.Mesh(
        addNoise(new THREE.BoxGeometry( 22, 14, 2),.5),
        ribbonMaterial
    );
    box.position.y += 6;
    box.castShadow = true;
    box.receiveShadow = true;
    this.add(box);

    box = new THREE.Mesh(
        addNoise(new THREE.BoxGeometry( 2, 14, 17),.5),
        ribbonMaterial
    );
    box.position.y += 6;
    box.castShadow = true;
    box.receiveShadow = true;
    this.add(box);

    var bow = new THREE.Mesh(
        addNoise(new THREE.TorusGeometry(2, 1, 4, 4), 0.5),
        ribbonMaterial
    );
    bow.position.x -= 2;
    bow.position.y += 14;
    bow.rotateZ(-1*Math.PI/1.5);

    bow.castShadow = true;
    bow.receiveShadow = true;
    this.add(bow);

    bow = new THREE.Mesh(
        addNoise(new THREE.TorusGeometry(2, 1, 4, 4), 0.5),
        ribbonMaterial
    );
    bow.position.x += 2;
    bow.rotateZ(Math.PI/1.5);
    bow.position.y += 14;
    bow.castShadow = true;
    bow.receiveShadow = true;
    this.add(bow);

    this.scale.set(2,2,2);

}
Present.prototype = Object.create(THREE.Group.prototype);
Present.prototype.constructor = Present;



//
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);


camera.position.set(0,30,50);

camera.lookAt(new THREE.Vector3(0,15,0));

var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xfff6e6);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

//append to document
document.body.appendChild( renderer.domElement );

var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(100,100,125);
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




var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5,5,5,5),
    new THREE.MeshBasicMaterial({color: 0x393839, wireframe: true})
);
plane.rotateX(Math.PI/2);
//scene.add(plane);

renderer.render(scene, camera);





// Add the tree
var tree = new ChristmasTree();
scene.add(tree);

// A star on top
var star = new Star();
star.position.y += 200;
scene.add(star);

// Loop around the tree, adding presents every 20 to 40 degrees.
for(var angle = 0; angle < 360; angle += Math.random()*20+20) {
    var p = new Present();
    var radius = Math.random() * 40 + 50;
    p.position.x =  Math.cos(angle * Math.PI / 180) * radius;
    p.position.z =  Math.sin(angle * Math.PI / 180) * radius;
    p.scale.set(Math.random() + 1, Math.random() + 1,Math.random() + 1);
    scene.add(p);
}


// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.target = new THREE.Vector3(0,80,0);
controls.maxPolarAngle = Math.PI / 2;
controls.minDistance = 100;
controls.maxDistance = 220;

requestAnimationFrame(render);

function render() {
   controls.update();

    // Update animated elements
    tree.updatePosition();
    star.updatePosition();

    // Render the scene/camera combnation
    renderer.render(scene, camera);

    // Repeat...
    requestAnimationFrame(render);
}


////loop
//controls.addEventListener('change', function(){
//    renderer.render(scene,camera);
//});

//for random size trangulation
function addNoise(geometry, noiseX, noiseY, noiseZ) {

    noiseX = noiseX || 2;
    noiseY = noiseY || noiseX;
    noiseZ = noiseZ || noiseY;

    // loop through each vertix in the geometry and move it randomly
    for(var i = 0; i < geometry.vertices.length; i++){
        var v = geometry.vertices[i];
        v.x += -noiseX / 2 + Math.random() * noiseX;
        v.y += -noiseY / 2 + Math.random() * noiseY;
        v.z += -noiseZ / 2 + Math.random() * noiseZ;
    }

    return geometry;
}






