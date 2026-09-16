class WallGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new WallController())
        this.addComponent(new Polygon(), {fillStyle:"blue", points:[
            new Vector2(15,-10),
            new Vector2(15,20),
            new Vector2(120,20),
            new Vector2(120,-10),
        ]})
        this.addComponent(new Polygon(), {fillStyle:"blue", points:[
            new Vector2(170,-10),
            new Vector2(170,20),
            new Vector2(270,20),
            new Vector2(270,-10),
        ]})
    }
}