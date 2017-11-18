function setup(){
  createCanvas(1080,420);
}
function draw(){
  if(mouseIsPressed){
    fill(50,0,50,155);
  }else{
  fill(0,60,50,155);
}
rect(mouseX,mouseY,80,80);
}
