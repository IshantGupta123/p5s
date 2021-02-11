class Box{
    constructor(){
   var options={
        restitution:2
    }
        this.body=Bodies.rectangle(200,100,50,20,options)
        World.add(world,this.body)
}
    display(){
        var pos=this.body.position
        rect(pos.x,pos.y,this.width,this.height)
    }
}