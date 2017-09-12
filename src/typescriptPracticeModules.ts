//export means module than can be imported
export class PointF {    
    constructor(private x?: number, private y?: number) {
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y;
    }
}