class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("Block.png");
        this.Visibility = 250;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed < 3){
          image(this.image, pos.x, pos.y, this.width, this.height);
        }
        else{
         
          World.remove(world, this.body);

          push();
          this.Visibility = this.Visibility -5;
          tint(250, this.Visibility);
          image(this.image, pos.x, pos.y, this.width, this.height);
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          pop();
        }
      }
}
