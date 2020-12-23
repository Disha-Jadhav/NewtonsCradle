class bob
{
    constructor(x, y, r)
    {
        var options = 
        {
            restitution: 0.3,
            friction: 0.5,
            density: 3
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    } 
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        ellipseMode(RADIUS);
        stroke("black");
        fill("red");
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}