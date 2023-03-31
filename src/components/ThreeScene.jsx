import React from 'react'
import threeStyles from './ThreeScene.module.css'
import * as THREE from 'three'
import image1 from './textures/image1.png'
import image2 from './textures/image2.png'
import image3 from './textures/image3.png'
import image4 from './textures/image4.png'
import image5 from './textures/image5.png'
import image6 from './textures/image6.jpeg'

const ThreeScene = () => {

    const mountRef = React.useRef(null)

    React.useEffect(()=> {
        // create a scene
        const scene = new THREE.Scene();

        // create a new camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

        // set camera position
        camera.position.z = 10;

        // create a new webgl renderer
        const renderer = new THREE.WebGLRenderer();
        
        // set the clear color of the renderer
        renderer.setClearColor(0x10101b);

        // set the size of the rendered to fill the window
        renderer.setSize(window.innerWidth, window.innerHeight);

        // add the renderer canvas element to the mountRef DOM element
        mountRef.current.appendChild(renderer.domElement);

        // create a box geometry with width, height and depth of 5
        const boxGeometry = new THREE.BoxGeometry(5, 5, 5);

        // create an array of materials for the box
        const boxMaterials = [

            // create a material with the first image and double sided rendering
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(image1),
                side: THREE.DoubleSide,
            }),
            // create a material with the second image and double sided rendering
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(image2),
                side: THREE.DoubleSide,
            }),
            // create a material with the third image and double sided rendering
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(image3),
                side: THREE.DoubleSide,
            }),
            // create a material with the fourth image and double sided rendering
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(image4),
                side: THREE.DoubleSide,
            }),
            // create a material with the fifth image and double sided rendering
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(image5),
                side: THREE.DoubleSide,
            }),
            // create a material with the sixth image and double sided rendering
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(image6),
                side: THREE.DoubleSide,
            }),


        ];

        // create a mesh with the bos geometry and the array of box materials
        const box = new THREE.Mesh(boxGeometry, boxMaterials);

        // add the box to the scene
        scene.add(box);

        // create a plan geometry with a with and height of 17
        const planeGeometry = new THREE.PlaneGeometry(17, 17);

        // translate the plane in the x, y and z directions
        planeGeometry.translate(0, 0.5, -2);

        // create a material for the plane
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.6,
        });

        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -2.6;
        scene.add(plane);

        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        const animate = function() {
            requestAnimationFrame(animate);
            box.rotation.x += 0.01;
            box.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

  return <div className={threeStyles.canvas} ref={mountRef}></div>
}

export default ThreeScene