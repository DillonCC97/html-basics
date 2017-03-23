var x = 0;

function setup() {
    frameRate(10);
    createCanvas(700, 700);
    background(100);
}

function mouseDragged() {
    //background(100);
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 20, 20);
    x = x + 1;
}

function keyPressed() {
    if (keyCode == '13') {
        background(100);
    }
}
