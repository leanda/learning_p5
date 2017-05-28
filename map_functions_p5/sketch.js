var r = 0;
var b = 255;

function setup() {
    createCanvas(600, 400)
}

function draw() {
    // background
    r = map(mouseX,0,600,0,255);
    background(r, 0, b);
    // ellipse
    fill(250,118,222);
    ellipse(mouseX,200,64,64);

}
