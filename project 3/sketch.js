
function setup() {
  createCanvas(1000,1000)
  background(151, 99, 188)

  }

  function draw() {

    //triangle
    for(var x= 0; x<=width; x+=30){
      for(var y = 30; y <= height; y = y + 30){


    stroke(5);
    fill(165,76,115)
    triangle(x+5, y+75, x+45, y+10, x+86, y+75)}
    }


//ellipse
for(var x2 = 0; x2 <= width; x2 =x2+105 ){
          for(var y2 = 0; y2 <= height; y2 = y2+5){
              noStroke()
                fill(120,30,150);
             ellipse(x2+15,y2+9,12,12)
          }
}






  }
