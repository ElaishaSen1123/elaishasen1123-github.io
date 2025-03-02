function setup() {
  createCanvas(400, 300);
  background(30);
}

function draw() {
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50, 50);

  console.log(`Mouse Position: (${mouseX}, ${mouseY})`);
}
