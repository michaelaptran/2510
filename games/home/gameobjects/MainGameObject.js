class MainGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"green", points:[
            //Frog body 
            new Vector2(-30,-20),
            new Vector2(-20,-35),
            new Vector2(-5,-40),
            new Vector2(5,-40),
            new Vector2(20,-35),
            new Vector2(30,-20),
            new Vector2(25,10),
            new Vector2(15,25),
            new Vector2(0,15),
            new Vector2(-15,25),
            new Vector2(-25,10),
        ]})

    
}
}