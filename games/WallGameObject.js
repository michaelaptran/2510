class WallGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new WallController())
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(15,-10),
            new Vector2(15,50),
            new Vector2(60,50),
            new Vector2(60,-10),
        ]})
    }
}