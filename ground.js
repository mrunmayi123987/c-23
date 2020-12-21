class Ground{

    constructor(x,y,width,height){
    
        var ground_options ={
            isStatic: true
        }

       this. body = Bodies.rectangle(x,y,width,height,ground_options);
this.height=height;
this.width=width;

        World.add(world,this.body);
    }
    display(){
   var posi = this.body.position;

   rectMode(CENTER);
   rect(posi.x,posi.y,this.width,this.height);
    }
}