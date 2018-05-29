//let declarations and DOM declarations//
let shapeBox = document.getElementById('div-shape-box');
//this is the Parent Class called SHAPE//
class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.radius= height / 2;
        this.name = "Shape";
        this.div = document.createElement('div');
        this.div.className = 'shapes'
        this.div.style.width = width + 'px';
        this.div.style.height = height + 'px';
        this.div.style.left = Math.floor(Math.random()* (600 - width)) + 'px';
        this.div.style.top = Math.floor(Math.random()* (600 - height)) + 'px';
        shapeBox.appendChild(this.div);
    }
}

//this is the Child Class RECTANGLE//
class Rectangle extends Shape {
    constructor(width, height){
        super(width, height);
        this.name = 'Rectangle';
        this.radius = null // doesn't need to have a radius//
        this.div.style.backgroundColor = 'blue';
        this.div.className = 'shapes rectangle ';
    }
}

// This is the Child Class SQUARE//
class Square extends Rectangle{
    constructor(height){
        super(height,height);
        this.name = 'Square';
        this.radius = null // doesn't need to have a radius//
        this.div.style.backgroundColor = 'yellow';
        this.div.style.width = this.width + 'px';
        this.div.className = 'shape square';
    }
}

// This is the Child Class for CIRCLE//
class Circle extends Shape {
    constructor(radius) {
        super(radius);
        this.name = 'Circle';
        this.div.style.backgroundColor = 'green';
        this.div.className += 'circle';
        this.radius = radius;
    }
    area(){ //WORK ON AREA AND PERIMETERS OF THE
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter(){
        return 2 * Math.PI * (this.radius);
    }
}

// this is where I will bind the DOM and HTML//
//RECTANGLE BUTTON//
document.getElementById('recButton').addEventListener('click', function(){
    var recW = document.getElementById('recWidth').value;
    var recH = document.getElementById('recHeight').value;
    new Rectangle( recW, recH);
})

//SQUARE BUTTON//
document.getElementById('sqButton').addEventListener('click', function(){
    var sqL = document.getElementById('sqLength').value;
    new Square(sqL);
})


// CIRCLE BUTTON//
document.getElementById('cirButton').addEventListener('click', function(){
    var cirRad = document.getElementById('cirRadius').value;
    new Circle(cirRad);
})
