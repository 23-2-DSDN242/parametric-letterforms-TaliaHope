const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "offsetx": 0,
  "offsetx2": 70,
  "offsety2": -100,
  "offsety": -100,
  "offsety3": -100,
  "offsetx3": -100,
  "offsety4": 30,
  "offsetx4": -48,
  "offsety5": 140,
  "offsetx5": 140,
  "offsety6": -100,
  "offsetx6": -100,
  "offsety7": -1.6000000000000085,
  "offsetx7": 36.79999999999998,
  "offsety8": -4,
  "offsetx8": 36.79999999999998,
  "offsety9": 140,
  "offsetx9": 140,
  "offsety10": 140,
  "offsetx10": 140,
  "offsety11": 140,
  "offsetx11": 140,
  "offsety12": 140,
  "offsetx12": 200
}

const letterB = {
  "offsetx": 36.4,
  "offsetx2": 70,
  "offsety2": -100,
  "offsety": -100,
  "offsety3": 90,
  "offsetx3": -18,
  "offsety4": 92,
  "offsetx4": -48,
  "offsety5": -100,
  "offsetx5": 140,
  "offsety6": 108.80000000000001,
  "offsetx6": 70.39999999999998,
  "offsety7": 140,
  "offsetx7": 140,
  "offsety8": 140,
  "offsetx8": 140,
  "offsety9": 140,
  "offsetx9": 140,
  "offsety10": 140,
  "offsetx10": 140,
  "offsety11": 140,
  "offsetx11": 140,
  "offsety12": 140,
  "offsetx12": 200
}

const letterC = {
  "offsetx": 36.4,
  "offsetx2": 70,
  "offsety2": -100,
  "offsety": -100,
  "offsety3": -20,
  "offsetx3": -18,
  "offsety4": 92,
  "offsetx4": -48,
  "offsety5": -100,
  "offsetx5": 140,
  "offsety6": 140,
  "offsetx6": 140,
  "offsety7": 140,
  "offsetx7": 140,
  "offsety8": 140,
  "offsetx8": 140,
  "offsety9": 140,
  "offsetx9": 140,
  "offsety10": 140,
  "offsetx10": 140,
  "offsety11": 140,
  "offsetx11": 140,
  "offsety12": 140,
  "offsetx12": 200
}



const backgroundColor  = "#ffffff";


/* Internal constants */
const darkPink = "#FFF2C4"; // Tape color
const lightPink = "#FFB2E2";
const color1 = "#A5D9FA";
const color2 = "#A4422D";
const color3 = "#32A42D";
const color4 = "#00A77A";
const color5 = "#F5D12C";
const strokeColor = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos2x = -35 + letterData["offsetx"];
  let pos3x = 35 + letterData["offsetx2"];
  let pos2y = 0 + letterData["offsety"];
  let pos4x = 0 + letterData["offsety2"];
  let pos3y = 20 + letterData["offsety3"];
  let pos5x = 20 + letterData["offsetx3"];
  let pos4y = 80 + letterData["offsety4"];
  let pos6x = 50 + letterData["offsetx4"];
  let pos7y = 25 + letterData["offsety5"];
  let pos7x = 25 + letterData["offsetx5"];
  let pos8y = 0 + letterData["offsety6"];
  let pos8x = 0 + letterData["offsetx6"];
  let pos9y = 0 + letterData["offsety7"];
  let pos9x = 0 + letterData["offsetx7"];
  let pos10y = 20 + letterData["offsety8"];
  let pos10x = 0 + letterData["offsetx8"];
  let pos11y = 25 + letterData["offsety9"];
  let pos11x = 45 + letterData["offsetx9"];
  let pos12y = 30 + letterData["offsety10"];
  let pos12x = 20 + letterData["offsetx10"];
  let pos13y = 50 + letterData["offsety11"];
  let pos13x = 40 + letterData["offsetx11"];
  let pos14y = 0 + letterData["offsety12"];
  let pos14x = 0 + letterData["offsetx12"];
  let pos15y = 15 + letterData["offsety13"];
  let pos15x = 10 + letterData["offsetx13"];
  
  fill(color1); // long line
  noStroke();
  if(pos2x > 1 ){
  rect(pos2x, 0, 26, 198);
  }
  if(pos3x < 40 ){
  fill(darkPink);  // 2 long line
  noStroke();
  rect(pos3x, 0, 26, 198);
  }


  push()
  rotate(10);
  fill(color3); // long line /
  noStroke();
  if(pos9x, pos9y < 1 ){
  rect(pos9x, pos9y, 26, 190);
  }
  pop()

  push()
  rotate(350);
  fill(color3); // 2 long line \
  if(pos10x, pos10y < 69 ){
  rect(pos10x, pos10y, 26, 190);
  }
  pop()


  fill(lightPink);// short line hori
  rect(pos4x, pos2y, 90, 26);
  fill(lightPink); // 2 short line hori
  rect(pos5x, pos3y, 90, 26);
  fill(lightPink); // 3 short line hori
  rect(pos6x, pos4y, 90, 26);


  fill(color2); // short line vert
  rect(pos7x, pos7y, 27, 89);
  fill(color2); // 2 short line vert
  rect(pos8x, pos8y, 27, 89);


  push()
  rotate(70);
  fill(color4); // 1 short line ro \
  rect(pos11x, pos11y, 85, 26);
  fill(color4); // 2 short line ro \
  rect(pos12x, pos12y, 85, 26);
  fill(color4); // 3 short line ro \
  rect(pos13x, pos13y, 85, 26);
  pop()

  push()
  rotate(-70);
  fill(color5); // 1 short line ro /
  rect(pos14x, pos14y, 85, 26);
  fill(color5); // 2 short line ro /
  rect(pos15x, pos15y, 85, 26);
  pop()
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
