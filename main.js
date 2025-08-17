import * as three from 'three' ;
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const scene = new three.Scene()
const camera = new three.PerspectiveCamera(75, 
										   window.innerWidth / window.innerHeight,
											0.1,
											1000 )
const renderer = new three.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

let txt3d_m = new three.Mesh()
function creatTxt(font)  {

		const txt3d = new TextGeometry("My text",{
			font : font,
			size: 0.5,
			height: 0.2,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 0.03,
			bevelSize: 0.02,
			bevelOffset: 0,
			bevelSegments: 5
		})
		txt3d.center()
		const material = new three.MeshNormalMaterial()
		txt3d_m = new three.Mesh(txt3d,material)
		scene.add(txt3d_m)
}



const font_loader = new FontLoader( )
const font = font_loader.load('PT Serif_Bold.json' ,creatTxt )
								

camera.position.z = 5;



function animate() {
	requestAnimationFrame( animate );
	txt3d_m.rotation.z += 0.01
	txt3d_m.rotation.y += 0.01
	txt3d_m.rotation.x += 0.01


	renderer.render( scene, camera );
}
animate();