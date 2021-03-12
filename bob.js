class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            density:0.8
        }
        this.body = Bodies.circle(x,y,40,options);
        this.x = x;
        this.y = y;
        this.r = 40;
        //this.image = loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        /*imageMode(CENTER);
        image(this.image,0,0,100,100);*/
        ellipseMode(RADIUS);
        fill("#FF00FF");
        ellipse(0,0,this.r);
        pop();
    }
}