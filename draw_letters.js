/* These are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* Internal constants */
const darkPink = "#FFF2C4"; // Tape color
const lightPink = "#FFB2E2";
const color1 = "#A5D9FA";
const color2 = "#A4422D";
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
   
  fill(color1); // long line
  noStroke();
  rect(pos2x, 0, 30, 200);

  fill(darkPink);  // 2 long line
  noStroke();
  rect(pos3x, 0, 30, 200);

  fill(lightPink);// short line hori
  rect(pos4x, pos2y, 80, 30);
  fill(lightPink); // 2 short line hori
  rect(pos5x, pos3y, 80, 30);
  fill(lightPink); // 3 short line hori
  rect(pos6x, pos4y, 80, 30);

  fill(color2); // short line vert
  rect(pos7x, pos7y, 30, 80);
  //fill(color1); // 2 short line vert
  //rect(60, 120, 35, 80);

  //rotate(16);
  //fill(color3); // long line /
  //noStroke();
  //rect(0, 0, 35, 200);
  //rotate(328);
  //fill(color3); // 2 long line \
  //rect(60, 0, 35, 200);
  
  //rotate(42);
  //fill(color4); // 1 short line ro \
  //rect(100, 80, 80, 35);
  //fill(color4); // 2 short line ro \
 // rect(100, 20, 80, 35);
  //fill(color4); // 3 short line ro \
  //rect(15, 0, 80, 35);

  //rotate(90);
  //fill(color5); // 1 short line ro /
  //rect(50, 0, 80, 35);
  //fill(color5); // 2 short line ro /
  //rect(50, -80, 80, 35);
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




 
  


