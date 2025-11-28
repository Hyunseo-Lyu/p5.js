  // 색상 변수
  let c1, c2, c3, c4; 
  let t1, t2, t3, t4; 
  let t = 0;

  // 움직임 변수
  let dx1=0, dy1=0, dx2=0, dy2=0, dx3=0, dy3=0, dx4=0, dy4=0;


function setup() {
  createCanvas(500, 500);

  
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
  c3 = color(random(255), random(255), random(255));
  c4 = color(random(255), random(255), random(255));

  
  t1 = color(random(255), random(255), random(255));
  t2 = color(random(255), random(255), random(255));
  t3 = color(random(255), random(255), random(255));
  t4 = color(random(255), random(255), random(255));
}

function draw() {
 background('#00004C');

  fill('#FF0000'); 
  rect(0,0,500,200);
  
  fill('#FF8000'); 
  rect(0,0,500,150);
  
  fill('#FFFF00'); 
  rect(0,0,500,100);
  
  fill('#FFFF80'); 
  rect(0,0,500,50);

  let earthSize = 300 + 20 * sin(frameCount * 0.05);
  stroke(0); strokeWeight(3); 
  fill('#0080FF');
  ellipse(250, 250, earthSize, earthSize); // 지구 크기 변화

  noStroke(); 
  fill('#66CC00');
  ellipse(200, 200, 100, 40);
  ellipse(230, 200, 80, 35);
  ellipse(170, 200, 70, 30);
  ellipse(190, 210, 60, 25);
  ellipse(210, 190, 50, 20);

  ellipse(300, 280, 100, 40);
  ellipse(330, 280, 80, 35);
  ellipse(270, 280, 70, 30);
  ellipse(290, 290, 60, 25);
  ellipse(310, 270, 50, 20);

  ellipse(200, 350, 100, 40);
  ellipse(230, 350, 80, 35);
  ellipse(190, 350, 70, 30);
  ellipse(210, 360, 60, 25);
  ellipse(230, 340, 50, 20);

  triangle(300, 200, 350, 250, 376, 205);

  
  c1 = lerpColor(c1, t1, 0.02);
  c2 = lerpColor(c2, t2, 0.02);
  c3 = lerpColor(c3, t3, 0.02);
  c4 = lerpColor(c4, t4, 0.02);

  
  dx1 = 5 * sin(frameCount * 0.02);
  dy1 = 5 * cos(frameCount * 0.02);

  dx2 = 5 * sin(frameCount * 0.025);
  dy2 = 5 * cos(frameCount * 0.025);

  dx3 = 5 * sin(frameCount * 0.03);
  dy3 = 5 * cos(frameCount * 0.03);

  dx4 = 5 * sin(frameCount * 0.035);
  dy4 = 5 * cos(frameCount * 0.035);


  fill(c1);
  quad(50+dx1, 90+dy1, 66+dx1, 50+dy1, 50+dx1, 15+dy1, 30+dx1, 50+dy1);
  quad(50+dx1, 62+dy1, 86+dx1, 50+dy1, 50+dx1, 38+dy1, 14+dx1, 50+dy1);


  fill(c2);
  quad(450+dx2, 90+dy2, 466+dx2, 50+dy2, 450+dx2, 15+dy2, 430+dx2, 50+dy2);
  quad(450+dx2, 62+dy2, 486+dx2, 50+dy2, 450+dx2, 38+dy2, 414+dx2, 50+dy2);


  fill(c3);
  quad(50+dx3, 490+dy3, 66+dx3, 450+dy3, 50+dx3, 415+dy3, 30+dx3, 450+dy3);
  quad(50+dx3, 462+dy3, 86+dx3, 450+dy3, 50+dx3, 438+dy3, 14+dx3, 450+dy3);


  fill(c4);
  quad(450+dx4, 490+dy4, 466+dx4, 450+dy4, 450+dx4, 415+dy4, 430+dx4, 450+dy4);
  quad(450+dx4, 462+dy4, 486+dx4, 450+dy4, 450+dx4, 438+dy4, 414+dx4, 450+dy4);

 
  if (frameCount % 300 == 0) {
    t1 = color(random(255), random(255), random(255));
    t2 = color(random(255), random(255), random(255));
    t3 = color(random(255), random(255), random(255));
    t4 = color(random(255), random(255), random(255));
  }

  t += 0.05;

 
  
  stroke(0.5)
  fill(0, 200, 200);
  rect(85, 210, 80, 60, 10); 
  arc(125, 210, 80, 80, PI, 0, CHORD);
  

  
  arc(95, 270, 20, 20, 0, PI, CHORD);
  arc(95, 270, 20, 20, 0, PI, CHORD);
  arc(125, 270, 20, 20, 0, PI, CHORD);
  arc(155, 270, 20, 20, 0, PI, CHORD);

  
  fill(255);
  rect(110, 220, 10, 15);
  rect(130, 220, 10, 15);

  fill(0);
  rect(113, 225, 5, 8);
  rect(133, 225, 5, 8);

  
  stroke(0)
  fill(200, 100, 0); 
  rect(350, 330, 50, 70, 12); 
  arc(375, 330, 50, 50, PI, 0, CHORD);

  stroke(0);
  strokeWeight(3);
  point(365, 340);
  point(385, 340);

  stroke(150, 50, 0);
  strokeWeight(2);
  line(350, 340, 330, 350);
  line(400, 340, 420, 350);

  
  stroke(0);
  fill(200, 100, 0); 
  arc(360, 400, 15, 15, 0, PI, CHORD);
  arc(390, 400, 15, 15, 0, PI, CHORD);

  
  stroke(255, 255, 0);
  point(375, 360);
  point(365, 380);
  point(385, 380);
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}