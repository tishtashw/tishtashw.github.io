function setup(){
  createCanvas(1080,420);
}
function draw(){
  if(mouseIsPressed){
    line(50,0,50,155);
  }else{
  line(0,60,50,155);
}
triangle(mouseX,mouseY,80,180);
}
