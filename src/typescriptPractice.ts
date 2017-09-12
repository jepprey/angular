// ts types:
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true, 'a', false];
// old javascript enum
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// new ts enum
enum Color {Red = 0, Green = 1, Blue = 2}; // Explictly state value
let BackgroundColor = Color.Red;

// type assertions
let message = 'abc'; //message is type string
let message2;        //message2 is type any
message2 = 'abc';
// type assertion using <string>
let endsWithC = (<string>message2).endsWith('c'); 
// type assertion using 'as string'
let alternativeWay = (message2 as string).endsWith('c');
// does not change structure in memory

// arrow functions
let log = function(message) {
    console.log(message);
}
let doLog = (message) =>{
    console.log(message);
}
// if one line can exclude curly braces
let doLog2 = (message) => console.log(message);
// can also exclude parenthesis if one parameter
let doLog3 = message => console.log(message);
// if no parameters
let doLog4 = () => console.log();
//------------------------------------------------------------------------------------------------------------//
// Interfaces
// using in-line annotation; use interface instead
let drawPoint = (point: { x: number, y: number } ) => {
    // ...
}
drawPoint ({
    x: 1,
    y: 2
})
// interface implementation:
interface Point {       //interface custom type always uses Pascal case
    x: number,
    y: number
}
let drawPoint2 = (point: Point) => {
    // ...
}
//------------------------------------------------------------------------------------------------------------//
// Classes
// problem with above implementation: violates Cohesion principle
// drawPoint is highly related to the structure of the Point
// use Class object to group variables (properties) and functions (methods) that are highly related
// Can't move functions into interface
interface PointC {       
    x: number,
    y: number,
    draw: () => void    //interface can only have signature of function
}
let drawPointC = (point: Point) => {
    // ...
}
//create class
class PointD {
    // members of class are fields
    x: number;
    y: number;
    // functions of class are methods
    drawD() {
        // ...
    }
    getDistanceD(another: Point) {

    }
}