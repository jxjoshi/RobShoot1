var bg, bgImg
var heli, heliImg
var robber1, robber2, robber3, robber4, robberNorm, robberInj
var go, goImg
var restart, restartImg

function preload() {
    bgImg = loadImage("Background.jpeg");
    heliImg = loadImage("Heli.png");
    robberNorm = loadImage("RobberNorm.png");
    robberInj = loadImage("RobberInj.png");
    goImg = loadImage("GO.png")
    restartImg = loadImage("Restart.png")
}

function setup() {
    createCanvas(1800,750);
    
    bg = createSprite(165,300,1,1);
    bg.addImage(bgImg);

    heli = createSprite(160,500,1,1);
    heli.addImage(heliImg);
    heli.scale = 0.15;

}


function draw() {
    if(keyDown("space")) {
        heli.velocityY = -9 ;
    }
    
    heli.velocityY = heli.velocityY + 2;
    
    drawSprites();
}