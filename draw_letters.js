/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkPink  = "#FFF2C4"; // tape colour
const lightPink  = "#FFB2E2";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

 // drawing shapes here
  fill(darkPink); // long line
  noStroke()
  rect(0, 0, 35, 200);
  fill(lightPink); // 2 long line
  rect(60, 0, 35, 200);
 
  fill(lightPink); // short line vert
  rect(0, 0, 35, 80);
  fill(darkPink); // 2 short line vert
  rect(60, 120, 35, 80);
  
  fill(darkPink); // short line hori
  rect(0, 0, 80, 35);
  fill(lightPink); // 2 short line hori
  rect(0, 50, 80, 35);
  fill(lightPink); // 3 short line hori
  rect(0, 120, 80, 35);


  rotate(16);
  fill(darkPink); // long line /
  noStroke()
  rect(0, 0, 35, 200);
  rotate(328);
  fill(lightPink); // 2 long line \
  rect(60, 0, 35, 200);
  
  rotate(42);
  fill(lightPink); // 1 short line ro \
  rect(100, 80, 80, 35);
  fill(darkPink); // 2 short line ro \
  rect(100, 20, 80, 35);
  fill(darkPink); // 3 short line ro \
  rect(15, 0, 80, 35);

  rotate(90);
  fill(darkPink); // 1 short line ro /
  rect(50, 0, 80, 35);
  fill(darkPink); // 2 short line ro /
  rect(50, -80, 80, 35);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "TAPETAPE",
  "STICKYEW",
  "ATTACHED"
]
