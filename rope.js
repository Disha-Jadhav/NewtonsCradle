class rope
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display()
    {
        var point1 = this.Rope.bodyA.position;
        var point2 = this.pointB;
        strokeWeight(4);
        line(point1.x, point1.y, point2.x, point2.y);
    }
    
}
