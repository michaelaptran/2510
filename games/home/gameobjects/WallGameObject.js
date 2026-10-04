class WallGameObject extends GameObject{
    constructor(){
        super("Wall", ["Wall"])
        this.addComponent(new WallController())
        this.addComponent(new Polygon(), {fillStyle:"brown", points:[
            new Vector2(15,-10),
            new Vector2(15,20),
            new Vector2(120,20),
            new Vector2(120,-10),
        ]})
}
}