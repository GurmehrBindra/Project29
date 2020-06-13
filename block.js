class Block{
    constructor(x,y){
        this.body= Bodies.rectangle(x,y,20,50);
        this.width= 20;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        fill("red")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}