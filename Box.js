class Box{
    constructor(x,y,w,h){

        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world, this.body);

        this.width = w;
        this.height = h;

    }

    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width,this.height);

    }

}