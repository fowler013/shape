//let declarations and DOM declarations//
let shapeBox = document.getElementById('div-shape-box');
//this is the Parent Class called SHAPE//
class Shape {
    constructor(width, height, radius) {
        this.width = width;
        this.height = height;
        this.radius = this.height / 2;
        this.name = "Shape";
        this.div = document.createElement('div');
        this.div.className = 'shapes'
        this.div.style.width = width + 'px';
        this.div.style.height = height + 'px';
        this.div.style.left = Math.floor(Math.random() * (600 - width)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (600 - height)) + 'px';
        shapeBox.appendChild(this.div);
        //BELOW IS THE FUNCTION THAT WILL GIVE INFO ABOUT THE SHAPE//
        this.div.addEventListener('click', () => {
            this.shapeInfo();
        });
        //BELOW IS THE FUNCTION TO REMOVE SHAPE//
        this.div.addEventListener('dblclick', () => {
            this.removeShape()
        });


        this.updateColor();
    }
    //THIS IS UPDATECOLOR CALL//
    updateColor() {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 123)}, ${randomVal(0, 112)}`;
        this.div.style.backgroundColor = randomColor;
    }
    //SHAPEINFO DOM CONNECTION//
    shapeInfo() {
        document.getElementById('h4Name').innerText = this.name;
        document.getElementById('h4Width').innerText = this.width;
        document.getElementById('h4Height').innerHTML = this.height;
        document.getElementById('h4Radius').innerText = this.radius;
         document.getElementById('h4Area').innerText = this.area();
         document.getElementById('h4Perimeter').innerText = this.perimeter();
    }
    area(){
        return this.height * this.width;
    }
    perimeter(){
        return this.height * 2 + this.width * 2;
    }
}

// this is the function for insertShape to make random numbers//
function insertShape() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
}

//this is the randomValue function//
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//this is the Child Class RECTANGLE//
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.name = 'Rectangle', 'color red';
        this.radius =   null // doesn't need to have a radius//
        this.updateColor();
        this.div.className = 'rectangle ';
    }
}

// This is the Child Class SQUARE//
class Square extends Rectangle {
    constructor(height) {
        super(height, height);
        this.name = 'Square';
        this.radius = null // doesn't need to have a radius//
        this.updateColor()
        this.div.style.width = this.width + 'px';
        this.div.className = 'square';
    }
}

// This is the Child Class for CIRCLE//
class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.name = 'Circle';
        this.updateColor();
        this.div.className = 'circle';
        this.radius = radius;
    }
    area() { //WORK ON AREA AND PERIMETERS OF THE
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return 2 * Math.PI * (this.radius);
    }
}

//this is the Child Class for Triangle//
class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.name = 'Triangle';
        this.div.className = 'triangle-topleft';
        this.div.style.width = '0px';
        this.div.style.height = '0px';
        this.radius = null;
        this.updateColor();
        this.div.style.borderTopWidth = this.height + 'px';
        this.div.style.borderRightWidth = this.height + 'px';
    }
    area() {
        return (this.height * this.height) / 2;
    }
    perimeter() {
        return 2 * this.height + (Math.sqrt(2 * Math.pow(this.height, 2)))
    }
}
// this is where I will bind the DOM and HTML//
//RECTANGLE BUTTON//
document.getElementById('recButton').addEventListener('click', function () {
    var recW = document.getElementById('recWidth').value;
    var recH = document.getElementById('recHeight').value;
    new Rectangle(recW, recH);
})

//SQUARE BUTTON//
document.getElementById('sqButton').addEventListener('click', function () {
    var sqL = document.getElementById('sqLength').value;
    new Square(sqL);
})


// CIRCLE BUTTON//
document.getElementById('cirButton').addEventListener('click', function () {
    var cirRad = document.getElementById('cirRadius').value;
    new Circle(cirRad);
})

// TRIANGLE BUTTON//
document.getElementById('triButton').addEventListener('click', function () {
    var triH = document.getElementById('triHeight').value;
    new Triangle(triH);
})