var button;

var words = [
  "Self-care isn't selfish",
  "Your mind must arrive at the destination before your life does",
  "Self love is the best love",
  "a quotea quotea quotea quotea quote",
  "another quote another quoteanother quoteanother quote"
  ];

function setup() {
  createCanvas(1800, 990);
  background(255, 190, 230);
  button = createButton('click me');
  button.position(800, 450);
  button.mousePressed(changeWord);
}

function draw() {

  var title = 'Wall of Self-Love';
  text(title, 650, 200, textSize(40));

  var instructions = 'Click button to generate quotes and press a key to clear wall :)';
  text(instructions, 100, 970, textSize(17));


  if (keyIsPressed === true) {
    background(255, 190, 230);
  }
}


function changeWord() {
 var word = random(words);

 textSize(15);
 text(word, random(1600),random(900), 150, 150);
}
