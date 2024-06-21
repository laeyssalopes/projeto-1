function setup() {
    createCanvas(700, 700);
     background('pink');
    
  }
  
  function draw() {
    
    stroke('black');
    fill('purple');
    
    if(mouseIsPressed){
       circle(mouseX, mouseY, 10, 10);
    }
  }