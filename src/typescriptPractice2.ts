// Objects
class Point {
    // members of class are fields
    x: number;
    y: number;
    // functions of class are methods
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point) {
        // ...
    }
}
let point: Point;
point.draw(); // will cause error "Cannot read property 'draw' of undefined"
// when defining object of custom type, need to explicitly allocate memory
let point2 = new Point(); //point2 object is an instance of Point class
point2.x = 1;
point2.y = 2;
// ...
// ...
// ...
// ...
point2.draw();
//--------------------------------------------------------------------------------------------//
// Constructors
// a method that is called when you create instance of the class
class PointA {    
    x: number;
    y: number;
    
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
let point3 = new PointA(1,2); 
point3.draw();
// can only have 1 constructor so make constructors optional parameters
let point4 = new PointA();
//--------------------------------------------------------------------------------------------//
// Access Modifiers
// public - default
// private
// protected
// Access Modifiers in Constructors
class PointB {    
    constructor(private x?: number, private y?: number) {
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
let point5  = new PointB();
//--------------------------------------------------------------------------------------------//
// Properties
// fields must be camel case
// prefix constructor fields with underscore
class PointE {    
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this._y);
    }

    get x(){
        return this._x;
    }
    set x(value){
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
}
let point6  = new PointE(1,2);
let x = point6.x;
point6.x = 10;
point6.draw;