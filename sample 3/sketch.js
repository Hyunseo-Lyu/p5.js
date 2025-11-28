

let skinColor;
let hairColor;
let lightBlue;
let pink;
let earbudColor;

let eyeOpen = false; 
let setX = 0; // 눈동자의 x축 이동값
let setY = 0; // 눈동자의 y축 이동값

function setup() {
  createCanvas(600, 600);
  
  lightBlue = color(135, 206, 235); 
  skinColor = color(255, 224, 189); 
  hairColor = color(139, 69, 19);   
  pink = color(255, 192, 203);   
  earbudColor = color(220);       
  
  angleMode(DEGREES); 
}

function draw() {
  background(lightBlue);
  
  // 눈이 떠 있을 때만 눈동자 움직이기 
  if (eyeOpen) {
    setX = (mouseX - width / 2) / 100;
    setY = (mouseY - height / 2) / 100;
    
    
    if (setX > 5) {
    setX = 5;
  } else if (setX < -5) {
    setX = -5;
  }

  if (setY > 3) {
    setY = 3;
  } else if (setY < -3) {
    setY = -3;
  }
  }

 
  stroke(0);
  strokeWeight(3);

  fill(pink);
  ellipse(300, 600, 250, 250); // 옷
  
  fill(skinColor); 
  rect(267, 450, 70, 50, 20); // 목
  ellipse(300, 300, 280, 330); // 얼굴
  
  fill(hairColor);
  ellipse(380, 150, 80, 90); // 똥머리
  arc(300, 300, 280, 330, 190, 350, CHORD); // 앞머리
  
  noFill(); 
  stroke(0);
  strokeWeight(3);
  
  if (eyeOpen) {
    // 눈 뜬 상태 
    fill(255);
    ellipse(240, 330, 30, 30); // 왼쪽 흰자
    ellipse(355, 330, 30, 30); // 오른쪽 흰자

    fill(0);
    ellipse(240 + setX, 330 + setY, 20, 20); // 왼쪽 검은자
    ellipse(355 + setX, 330 + setY, 20, 20); // 오른쪽 검은자

    fill(280);
    ellipse(243 + setX, 328 + setY, 10, 10); // 왼쪽 하이라이트
    ellipse(352 + setX, 328 + setY, 10, 10); // 오른쪽 하이라이트
  } else {
    // 눈 감은 상태 
    line(270, 300, 200, 310); //왼쪽 눈
    line(400, 310, 330, 300); //오른쪽 눈
  }

 
  fill(255, 0, 0);
  triangle(320, 410, 300, 380, 280, 410); // 입
  
  line(305, 350, 300, 330);
 
  line(220, 220, 220, 275); // 앞머리 선
  line(270, 220, 270, 275);
  line(320, 220, 320, 275);
  line(370, 220, 370, 275);
  
  line(300, 500, 300, 600); // 옷 절개선
  
  fill('#FF7493');
  circle(320, 560, 10); // 단추 3개
  circle(320, 530, 10);
  circle(320, 590, 10);
  
  fill(earbudColor); // 에어팟
  quad(140, 320, 152, 320, 160, 345, 145, 335);
  ellipse(150, 310, 25, 30);
  
  quad(460, 320, 445, 320, 440, 349, 452, 340);
  ellipse(449, 310, 27, 30);
}

//키보드 인터랙션
function keyPressed() {
 if (key === ' ') {
        eyeOpen = !eyeOpen; 
    }

    if (key === 's' || key === 'S') {
        saveGif('mySketch', 10);
    }
}
 