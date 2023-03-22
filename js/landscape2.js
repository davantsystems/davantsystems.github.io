function createRender() {
    const vertexHeight = 15000;
    const planeDefinition = 100;
    const planeSize = 1245000;
    const totalObjects = 50000;
    let frame = 60;

    const container = document.createElement('div');
    container.id = 'scene';
    const splash = document.getElementById('splash');
    splash.appendChild(container);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
    camera.position.z = 50000;
    camera.position.y = calculateCameraYPosition(camera);
    camera.lookAt(new THREE.Vector3(0, 25000, 0));

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x23233f, 1, 300000);

    const uniforms = {
        time: { value: 0.0 }
    };

    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0.0 },
            fogColor: { value: new THREE.Color(scene.fog.color) },
            fogNear: { value: scene.fog.near },
            fogFar: { value: scene.fog.far }
        },
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
        wireframe: true
    });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition), material);
    plane.rotation.x -= Math.PI * .50;

    scene.add(plane);

    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(totalObjects * 3);

    for (let i = 0; i < totalObjects; i++) {
        positions[i * 3] = Math.random() * planeSize - (planeSize * .5);
        positions[i * 3 + 1] = (Math.random() * 100000) + 10000;
        positions[i * 3 + 2] = Math.random() * planeSize - (planeSize * .5);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointMaterial = new THREE.PointsMaterial({
        size: 100,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, pointMaterial);

    scene.add(particles);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    function render() {
        requestAnimationFrame(render);
        if (camera.position.z < -20000) {
            camera.position.z = 50000;
        }
        camera.position.z -= 150;
        uniforms.time.value = frame;
        frame += .03;
        renderer.render(scene, camera);
    }

    render();
}

function calculateCameraYPosition(camera) {
    const vFOV = camera.fov * Math.PI / 180; // Convert vertical FOV to radians
    const height = 2 * Math.tan(vFOV / 2) * camera.position.z; // Calculate the visible height at the specified distance
    return height / 2.3; // Half of the visible height
}

createRender();
