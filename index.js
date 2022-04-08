import {
    Sprite,
    SpriteMaterial,
    DoubleSide,
    Mesh,
    PlaneGeometry,
    MeshBasicMaterial
} from 'three'
import { 
    CSS3DRenderer,
    CSS3DObject, 
    CSS3DSprite 
} from 'three/examples/jsm/renderers/CSS3DRenderer.js';

class Text3DRenderer extends CSS3DRenderer{
    constructor(options) {
        super(options);
        this.domElement.style.position = 'absolute';
        this.domElement.style.top = 0;
        this.domElement.style.left = 0;
        this.domElement.style.margin = 0;
        this.domElement.style.padding = 0;
        this.domElement.style.zIndex = -1;
    }
}

class Text3D extends CSS3DObject{

    constructor(element, width, height ) {
        super(element);
        this.domElement = element;
        this.width = width || 64;
        this.height = height || 64;
        this.domElement.style.width = width + 'px'
        this.domElement.style.height = height + 'px'
        const plane = this.createPlane();
        this.position.copy(plane.position);
        this.rotation.copy(plane.rotation);
        this.position.y += this.height / 2
        this.add(plane)
    }

    createPlane() {
        var planeWidth = this.width;
        var planeHeight = this.height;
        let geo = new PlaneGeometry(planeWidth, planeHeight);
        let plane = new Mesh(geo, new MeshBasicMaterial({
            color: 0x000000,
            opacity: 0, 
            side: DoubleSide 
        }))
        return plane
    }
}

class Text3DS extends CSS3DSprite{

    constructor(element, width, height ) {
        super(element);
        this.domElement = element;
        this.width = width || 64;
        this.height = height || 64;
        this.domElement.style.width = width + 'px'
        this.domElement.style.height = height + 'px'
        const plane = this.createPlane();
        this.position.copy(plane.position);
        this.rotation.copy(plane.rotation);
        this.position.y += this.height / 2
        this.add(plane)
    }

    createPlane() {
        var planeWidth = this.width;
        var planeHeight = this.height;
        let plane = new Sprite(new SpriteMaterial({
            color: 0x000000,
            transparent: false,
            opacity: 0
        }))
        plane.scale.set(planeWidth, planeHeight)
        return plane
    }
}

export { Text3DRenderer, Text3D, Text3DS }