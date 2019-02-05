let shape = prompt("Area of a circle, rectangle, triangle or trapeziod?")

switch (shape) {
    case "circle":
        alert("You have selected circle"); 
        areaCircle();       
        break;
    case "rectangle":
        alert("rectangle");
        areaRectangle();
        break;
    case "triangle":
        alert("triangle");
        areaTriangle();
        break;
    case "trapezoid":
        alert("trapezoid");
        areaTrapezoid();
        break;
    default:
        alert("I dont know how to do that shape")
    

}

function areaCircle() {
let r = prompt("What is the radius of the circle?");
let x;
var pi = 3.14;
x=r*r*pi;
alert("This is the area of the circle you inputted " + x +".");
}

function areaRectangle() {
let w = prompt("What is the width of the rectangle?")
let l = prompt("What is the length of the recatangle?")
let x;
x=w*l;
alert("This is the area of the rectangle you inputted "+ x +".");
}

function areaTriangle() {
let w = prompt("What is the width of the triangle?")
let l = prompt("What is the length of the triangle?")
let x;
x=(w*l)/2
alert("This is the area of the trianlge you inputted " + x + ".");
}

function areaTrapezoid() {
let b1 = prompt("What is the length of the base?")
let b2 = prompt("What is the length of the opposite side you provided as the base?")
let h = prompt("What is the height of the trapezoid? Or what is the distance between each base?")
let x;
x=((parseInt(b1)+parseInt(b2))*h)/2;
alert("This is the area of the trapezoid you inputted " + x + ".");
}
