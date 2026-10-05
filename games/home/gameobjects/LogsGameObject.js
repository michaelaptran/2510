class LogsGameObject extends GameObject{
    constructor(){
        super("Logs", ["Wall"])
        this.addComponent(new LogsController())
        this.addComponent(new Polygon(), {fillStyle:"brown", points:[
            new Vector2(250,-10),
            new Vector2(250,20),
            new Vector2(360,20),
            new Vector2(360,-10),
        ]})
    }
}