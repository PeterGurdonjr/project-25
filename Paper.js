class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
        
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        image(this.image,100,600, 10);

        ellipseMode(RADIUS);

        fill("purple");

       ellipse(this.body.position.x, this.body.position.y, this.radius);

    }       
};