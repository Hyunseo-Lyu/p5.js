function setup() {
  createCanvas(500, 500);
  
  background('#00004C');
  
  fill('#FF0000')
  rect(0,0,500,200);
  
  fill('#FF8000')
  rect(0,0,500,150);
  
  fill('#FFFF00')
  rect(0,0,500,100);
  
  fill('#FFFF80')
  rect(0,0,500,50);
  
  stroke(0)
  strokeWeight(3)
  fill('#0080FF	');
  ellipse(250, 250, 300, 300);
  
  fill('#66CC00');
  noStroke()
  ellipse(200, 200, 100, 40);
  ellipse(230, 200, 80, 35);
  ellipse(170, 200, 70, 30);
  ellipse(190, 210, 60, 25);
  ellipse(210, 190, 50, 20);
  
  noStroke()
  ellipse(300, 280, 100, 40);
  ellipse(330, 280, 80, 35);
  ellipse(270, 280, 70, 30);
  ellipse(290, 290, 60, 25);
  ellipse(310, 270, 50, 20);
  
  noStroke()
  ellipse(200, 350, 100, 40);
  ellipse(230, 350, 80, 35);
  ellipse(190, 350, 70, 30);
  ellipse(210, 360, 60, 25);
  ellipse(230, 340, 50, 20);
  
  noStroke()
  triangle(300, 200, 350, 250, 376, 205);
  
  fill('')
  noStroke()
  quad(50, 90, 66, 50, 50, 15, 30, 50);
  quad(50, 62, 86, 50, 50, 38, 14, 50);
  
  quad(450, 90, 466, 50, 450, 15, 430, 50);
  quad(450, 62, 486, 50, 450, 38, 414, 50);
  
  quad(50, 490, 66, 450, 50, 415, 30, 450);
  quad(50, 462, 86, 450, 50, 438, 14, 450);
  
  quad(450, 490, 466, 450, 450, 415, 430, 450);
  quad(450, 462, 486, 450, 450, 438, 414, 450);


}

function draw() {
  
  stroke(0.5)
  fill(0, 200, 200);
  rect(85, 210, 80, 60, 10);  // 몸통
  arc(125, 210, 80, 80, PI, 0, CHORD);  // 머리

  // 다리
  arc(95, 270, 20, 20, 0, PI, CHORD);
  arc(125, 270, 20, 20, 0, PI, CHORD);
  arc(155, 270, 20, 20, 0, PI, CHORD);

  // 눈
  fill(255);
  rect(110, 220, 10, 15);
  rect(130, 220, 10, 15);

  fill(0);
  rect(113, 225, 5, 8);
  rect(133, 225, 5, 8);
  
// 주황 외계인
  stroke(0)
  fill(200, 100, 0);           // 주황색 몸통
  rect(350, 330, 50, 70, 12);  // 몸통

fill(200, 100, 0);           // 머리
arc(375, 330, 50, 50, PI, 0, CHORD); // 머리

// 눈
stroke(0);
strokeWeight(3);
point(365, 340);
point(385, 340);

// 팔 (line)
stroke(150, 50, 0);
strokeWeight(2);
line(350, 340, 330, 350);  // 왼쪽 팔
line(400, 340, 420, 350);  // 오른쪽 팔

// 다리 (작은 arc)
stroke(0);
fill(200, 100, 0);
arc(360, 400, 15, 15, 0, PI, CHORD);
arc(390, 400, 15, 15, 0, PI, CHORD);

// 장식 점
stroke(255, 255, 0);
point(375, 360);
point(365, 380);
point(385, 380);
  

}