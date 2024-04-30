/* These are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* Internal constants */
const darkPink = "#FFF2C4"; // Tape color
const lightPink = "#FFB2E2";
const color1 = "#A5D9FA";
const color2 = "#A4422D";
const color3 = "#32A42D";
const color4 = "#00A77A";
const color5 = "#F5D12C";
const strokeColor = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  // Color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // Determine parameters 
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
  rect(pos2x, 0, 26, 198);

  fill(darkPink);  // 2 long line
  noStroke();
  rect(pos3x, 0, 26, 198);
  
  push()
  rotate(10);
  fill(color3); // long line /
  noStroke();
  rect(pos9x, pos9y, 26, 190);
  push()
  pop()
  rotate(340);
  fill(color3); // 2 long line \
  rect(pos10x, pos10y, 26, 190);
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

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "TAPETAPE",
  "STICKYEW",
  "ATTACHED"
];




 
  


