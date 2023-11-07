class ThreeInstance {
    public canvas: HTMLCanvasElement = document.createElement("canvas");
}

const threeInstance = new ThreeInstance();

export const canvas = threeInstance.canvas;