class paper {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            desnity: 1.2
        }

        this.body = Bodies.circle(x, y, r, options)
        this.r = r
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        //var angle = this.body.angle;
        var paper_position = this.body.position;
        push()
        translate(paper_position.x, paper_position.y)
        //rotate(angle);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255, 0, 255)
        imageMode(CENTER);
        image(this.image, 0, 20, 100,100);
        pop()
    }
}