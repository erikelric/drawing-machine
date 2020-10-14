let array = [];

function setup() {
  createCanvas(400, 400);
  background(220);

  strokeWeight(5);
  noFill();

}

function draw() {

if (mouseIsPressed){
  // line(mouseX, mouseY, pmouseX, pmouseY);
  background(0);
  array.push([mouseX, mouseY]);
  }

}

function keyTyped(){

    if (key === `s`){
      //save this image
      saveCanvas(`fileName`, `png`);
    } else if (key === 'd'){
      // diplay the image
      background(255);

      for(let i = 0; i < array.length; i++){
        // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
        curveVertex(array[i][0], array[i][1])
      }
      endShape();

    }

    return false;
}
