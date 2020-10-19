class Chain{
constructor(bodyA, bodyB){
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.05,
        length: 10
        }
      this.chain = Constraint.create(options);
        World.add(world,this.chain);    
}
display()
{
    //var pos1= this.chain.bodyA.position;
  //  line(pos1.x,pos1.y,...)
  push ();
  strokeWeight(5)
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y,)
pop ();
}





}