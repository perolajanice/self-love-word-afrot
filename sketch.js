// Variable: Variables are used to store information to be referenced and manipulated in a computer program
// a way of labelling data

var button;

var quotes = [
 "Love yourself",
 "I love me",
 "no self doubt",
 "Im not valued by my environment",
  ];

// A way of reusing blocks of code with a single line

function setup() {
  createCanvas(1800, 990);
  background(255, 190, 230);
  button = createButton('click me');
  button.position(800, 450);
  button.mousePressed(changeQuote);
}

function draw() {

  var title = 'Wall of Self-Love';
  text(title, 650, 200, textSize(40));

 fill(0);
  var instructions = 'Click button to generate quotes and press a key to clear wall :)';
  text(instructions, 100, 970, textSize(17));

// if statement: allows for the program to make decisions on what code should be executed
  if (keyIsPressed === true) {
    background(255, 190, 230);
  }
}


function changeQuote() {
 var quote = random(quotes);
 fill(random(255),(100),(180));
 textSize(15);
 text(quote, random(1600),random(900), 150, 150);
}
