var onerectX = 0;
var tworectX = 0;
var threerectX = 40;
var civrectX = 20;
var BcivrectX = 330;
var CcivrectX = 210;
var DcivrectX = -55;
var EcivrectX = -160;
var FcivrectX = -200;

function setup() {
    createCanvas(600, 600);

}

function draw() {
    background(110,178,25);
    fill(51);
    rect(-1,200, 601,200);
    
    stroke(51);
    fill(125,181,230)
    rect(100,90, 100,100);
    
    fill(120,140,41);
    rect(300,410, 100,100);
    
    fill(153,29,65);
    rect(400,90, 100,100);
    
    fill(203,148,52);
    rect(150,410, 100,100);
    
    drawcars();
    
}
    


function drawcars() {
    //cop cars
    stroke(255,255,255);
    fill(0,0,255); 
    rect(onerectX,240, 40,20);
    onerectX = onerectX + 0.9;
    rect(tworectX,300, 40,20);
    tworectX = tworectX + 1;
    
    //pursued car
    stroke(0);
    fill(255,0,0)
    rect(threerectX,270, 40,20)
    threerectX = threerectX + 1.2;
    
    //green civillian car
    stroke(0);
    fill(0,255,0);
    rect(civrectX,375, 40,20)
    civrectX = civrectX + 0.6;
    
    //grey civillian car
    stroke(0);
    fill(160,160,160);
    rect(BcivrectX,360, 40,20)
    BcivrectX = BcivrectX + 0.5;
    
    //magenta civillian car
    stroke(0);
    fill(255,51,153);
    rect(CcivrectX,210, 40,20);
    CcivrectX = CcivrectX + 0.5;
    
    //orange civillian car
    stroke(0);
    fill(255,128,0);
    rect(DcivrectX,210, 40,20);
    DcivrectX = DcivrectX + 0.5;
    
    //seafoam civillian car
    stroke(0);
    fill(120,128,204);
    rect(EcivrectX,225, 40,20);
    EcivrectX = EcivrectX + 0.5;
    
    //pink civillian car
    stroke(0);
    fill(255,153,255);
    rect(FcivrectX,350, 40,20);
    FcivrectX = FcivrectX + 0.5;
}