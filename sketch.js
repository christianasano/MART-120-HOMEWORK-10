var headX = 250;
var headY = 100;
var headDirection = 1;

var mouthX = 150;
var mouthY = 300;
var mouthDirection = 1;

var x,y;
var speedX=1, speedY=1 ;


var bodyX = 200;
var bodyY = 185;
var bodyDirection = 4;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
    x = 0;
    y = 0; 
    speedX = 1;
    speedY = 1
}

function draw()
{
    background(120,45,78);
    textSize(size)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("HELLO WORLD!", 10,80);
    
    

    // head
    fill(255, 204, 0);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    circle(headX,headY,175);
    

    fill(500, 704, 200);
    
    circle(headX,headY,105);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    

    // eyes
    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    // nose
    
    point(245,90);
    
    // mouth
    x = x + speedX;
    y = y + speedY;
    ellipse(245, 135, 30, 45)
    mouthX+=mouthDirection;
    if(mouthX >= 418 || mouthX <= 82)
    {
        mouthDirection *= -1;
    }
    

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    // body
    fill(10, 24, 120);
    rect(200,bodyY,100,150);

    fill(100, 224, 120);
    rect(100,bodyY,50,150);
    bodyY += bodyDirection;
    if(bodyY <= 20 || bodyY >= 350 )
    {
        bodyDirection *= -1;
    }
    // decoration
    fill(255);
    triangle(220,320,250,220,280,320)
    // right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);
    
    fill(120);
    textSize(22);
  
    text("CHRISTIAN ASANO",170,400 );


}