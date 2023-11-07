import * as THREE from "three";
import { load, loadAsync } from "../../loaders/TextureLoader";
import { initAssetsStore } from "../../store/InitAssets";

export class BasicBackground extends THREE.Mesh {
    private startBackgroundImage?: THREE.Texture;

    constructor(private backgroundUrl?: string) {
        super();
    }

    public load = async (canvas: HTMLCanvasElement) => {
        if (this.backgroundUrl) {
            console.log("start loading background", this.backgroundUrl);
            
            if (!this.startBackgroundImage) {
                this.startBackgroundImage = await loadAsync(this.backgroundUrl);
            }
            console.log("end loading background", this.backgroundUrl);
        } else {
            this.startBackgroundImage = initAssetsStore.assetsMap.basicBackground.image;
        }

        this.geometry = new THREE.PlaneGeometry(canvas.width, canvas.height);
        this.material = new THREE.MeshStandardMaterial({
            map: this.startBackgroundImage,
            transparent: true,
            roughness: 0.1,
            metalness: 0.1
        });
    };
}