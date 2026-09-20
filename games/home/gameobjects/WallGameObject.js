class WallGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new WallController())
        this.addComponent(new Polygon(), {fillStyle:"brown", points:[
            new Vector2(15,-10),
            new Vector2(15,20),
            new Vector2(120,20),
            new Vector2(120,-10),
        ]})
        this.addComponent(new Polygon(), {fillStyle:"brown", points:[
            new Vector2(250,-10),
            new Vector2(250,20),
            new Vector2(360,20),
            new Vector2(360,-10),
        ]})
    }
}