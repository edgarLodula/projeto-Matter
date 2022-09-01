class Ground{
    constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.h=h
    this.w=w
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
    World.add(world,this.body)
}
display(){
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}
}