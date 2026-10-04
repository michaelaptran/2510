class Wall2GameObject extends GameObject{
    constructor(){
        super("Wall2", ["Wall"])
        this.addComponent(new Wall2Controller())
        this.addComponent(new Polygon(), {fillStyle:"brown", points:[
            new Vector2(250,-10),
            new Vector2(250,20),
            new Vector2(360,20),
            new Vector2(360,-10),
        ]})
    }
}