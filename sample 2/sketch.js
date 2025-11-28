let skinColor;
let hairColor;
let lightBlue;
let pink;
let earbudColor;

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
  
  stroke(0);        
  strokeWeight(3);  
 
  fill(pink);
  ellipse(300, 600, 250, 250); //옷
  
  fill(skinColor); 
 
  rect(267, 450, 70, 50, 20); //목
  ellipse(300, 300, 280, 330); //얼굴
  
  
  fill(hairColor);
  
  ellipse(380, 150, 80, 90); // 똥머리
  
  arc(300, 300, 280, 330, 190, 350, CHORD); //앞머리
  
   noFill(); 
  
  line(270, 300, 200, 310); //왼쪽 눈
  
  line(400, 310, 330, 300); //오른쪽 눈
  
  
 

  
  fill(280)
  c1 = 243
  d1 = 328
  ellipse(c1, d1, 10, 10);
  
  c2 = 352
  d2 = 328
  ellipse(c2, d2, 10, 10);
  
  
  
  fill(255, 0, 0);
  triangle(320, 410, 300, 380, 280, 410); //입
  
  line(305, 350, 300, 330);
 
  line(220, 220, 220, 275); //앞머리 선
  line(270, 220, 270, 275);
  line(320, 220, 320, 275);
  line(370, 220, 370, 275);
  
  line(300, 500, 300, 600); //옷 절개선
  
  fill('#FF7493');
 
  circle(320, 560, 10); //옷 단추
  circle(320, 530, 10);
  circle(320, 590, 10);
  
  
  fill(earbudColor); //에어팟
  quad(140, 320, 152, 320, 160, 345, 145, 335)
  ellipse(150, 310, 25, 30);
  
  quad(460, 320, 445, 320, 440, 349, 452, 340);
  ellipse(449, 310, 27, 30);
}

let eyeOpen = true;       // 눈 상태 저장용 변수
let lastBlinkTime = 0;    // 눈 감은 시점
let BLINK_DURATION = 200; // 눈 감고 있는 시간 (0.2초)

// 스페이스바로 깜빡이기
function keyPressed() {
  if (key === ' ') {
    eyeOpen = false;
    lastBlinkTime = millis();
  }
}

// draw() 함수 맨 아래쪽(에어팟 그린 뒤)에 아래 코드를 추가하세요 👇
// (이건 눈을 상태에 따라 그려주는 부분이에요)
function drawEyes() {
  noFill();
  stroke(0);
  strokeWeight(3);

  if (eyeOpen) {
    // 눈 뜬 상태
    line(270, 300, 200, 310); // 왼쪽 눈
    line(400, 310, 330, 300); // 오른쪽 눈
  } else {
    // 눈 감은 상태
    arc(235, 305, 50, 10, 0, PI); // 왼쪽 감은 눈
    arc(365, 305, 50, 10, 0, PI); // 오른쪽 감은 눈
  }

  // 일정 시간이 지나면 다시 눈 뜨기
  if (!eyeOpen && millis() - lastBlinkTime > BLINK_DURATION) {
    eyeOpen = true;
  }
}