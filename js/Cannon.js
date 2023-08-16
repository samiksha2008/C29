class Cannon{
    constructor(x,y,width,height,angle){
this.x=x
this.y=y
this.width=width
this.height=height
this.angle=angle
}
display(){
    if (keyIsDown(RIGHT_ARROW) && this.angle < -0.05) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -1.05) {
        this.angle -= 0.02;
      }
 fill("#676e6a")
 push()
translate(this.x,this.y)
rotate(this.angle)
rect(-30,100,this.width,this.height)

 pop()

 arc(this.x-32,this.y+180,90,120,PI,TWO_PI)
 noFill


}

    
}