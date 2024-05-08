/* These are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* Internal constants */
const darkPink = [255, 222, 89, 127]; // Tape color
const lightPink = [255, 222, 89, 127];
const color1 = [255, 222, 89, 127];
const color2 = [255, 222, 89, 127];
const color3 = [255, 222, 89, 127];
const color4 = [255, 222, 89, 127];
const color5 = [255, 222, 89, 127];
const strokeColor = [255, 222, 89, 127];

function drawLetter(letterData) {
  angleMode(DEGREES)
  stroke(strokeColor);
  strokeWeight(4);
  
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
  if(pos3x > 1 ){
  fill(darkPink);  // 2 long line
  noStroke();
  rect(pos3x, 0, 26, 198);
  }


  push()
  rotate(10);
  fill(color3); // long line /
  noStroke();
  if(pos9x, pos9y > -13 ){
  rect(pos9x, pos9y, 26, 190);
  }
  pop()

  push()
  rotate(350);
  fill(color3); // 2 long line \
  if(pos10x, pos10y > 0 ){
  rect(pos10x, pos10y, 26, 190);
  }
  pop()


  fill(lightPink);// short line hori
  if(pos4x, pos2y > -70 ){
  rect(pos4x, pos2y, 90, 26);
  }
  fill(lightPink); // 2 short line hori
  if(pos5x, pos3y > -70 ){
  rect(pos5x, pos3y, 90, 26);
  }
  fill(lightPink); // 3 short line hori
  if(pos6x, pos4y > -71 ){
  rect(pos6x, pos4y, 90, 26);
  }
    

  fill(color2); // short line vert
  if(pos7x, pos7y > 0 ){
  rect(pos7x, pos7y, 27, 89);
  }
  fill(color2); // 2 short line vert
  if(pos8x, pos8y > 0 ){
  rect(pos8x, pos8y, 27, 89);
  }


  push()
  rotate(70);
  fill(color4); // 1 short line ro \
  if(pos11x, pos11y > 0 ){
  rect(pos11x, pos11y, 85, 26);
  }
  fill(color4); // 2 short line ro \
  if(pos12x, pos12y > -49 ){
  rect(pos12x, pos12y, 85, 26);
  }
  fill(color4); // 3 short line ro \
  if(pos13x, pos13y > -57 ){
  rect(pos13x, pos13y, 85, 26);
  }
  pop()

  push()
  rotate(-70);
  fill(color5); // 1 short line ro /
  if(pos14x, pos14y > 0 ){
  rect(pos14x, pos14y, 85, 26);
  }
  fill(color5); // 2 short line ro /
  if(pos15x, pos15y > 0 ){
  rect(pos15x, pos15y, 85, 26);
  }
  pop()


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let old_cirRot = oldObj["offsetx"];
  let new_cirRot = newObj["offsetx"];
  if (old_cirRot > new_cirRot) {
    new_cirRot = new_cirRot + 360;
  }
  new_letter["offsetx"] = map(percent, 0, 100, old_cirRot, new_cirRot);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety4"] = map (percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]); 
  new_letter["offsetx5"] = map(percent, 0, 100, oldObj["offsetx5"], newObj["offsetx5"]);
  new_letter["offsety6"] = map(percent, 0, 100, oldObj["offsety6"], newObj["offsety6"]);
  new_letter["offsetx6"] = map(percent, 0, 100, oldObj["offsetx6"], newObj["offsetx6"]);
  new_letter["offsety7"] = map(percent, 0, 100, oldObj["offsety7"], newObj["offsety7"]);
  new_letter["offsetx7"] = map(percent, 0, 100, oldObj["offsetx7"], newObj["offsetx7"]);
  new_letter["offsety8"] = map(percent, 0, 100, oldObj["offsety8"], newObj["offsety8"]);
  new_letter["offsetx8"] = map(percent, 0, 100, oldObj["offsetx8"], newObj["offsetx8"]);
  new_letter["offsety9"] = map(percent, 0, 100, oldObj["offsety9"], newObj["offsety9"]);
  new_letter["offsetx9"] = map(percent, 0, 100, oldObj["offsetx9"], newObj["offsetx9"]);
  new_letter["offsety10"] = map(percent, 0, 100, oldObj["offsety10"], newObj["offsety10"]);
  new_letter["offsetx10"] = map(percent, 0, 100, oldObj["offsetx10"], newObj["offsetx10"]);
  new_letter["offsety11"] = map(percent, 0, 100, oldObj["offsety11"], newObj["offsety11"]);
  new_letter["offsetx11"] = map(percent, 0, 100, oldObj["offsetx11"], newObj["offsetx11"]);
  new_letter["offsety12"] = map(percent, 0, 100, oldObj["offsety12"], newObj["offsety12"]);
  new_letter["offsetx12"] = map(percent, 0, 100, oldObj["offsetx12"], newObj["offsetx12"]);
  new_letter["offsety13"] = map(percent, 0, 100, oldObj["offsety13"], newObj["offsety13"]);
  new_letter["offsetx13"] = map(percent, 0, 100, oldObj["offsetx13"], newObj["offsetx13"]);
  return new_letter;
}

var swapWords = [
  "TAPETAPE",
  "STICKYEW",
  "ATTACHED",
  "ADHESIVE",
  "SUPERGLU"
];
