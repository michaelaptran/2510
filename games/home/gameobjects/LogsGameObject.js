class LogsGameObject extends GameObject{
    constructor(direction = 1, speed = 120){
        super("Logs", ["Log"])
        this.addComponent(new LogsController(), {direction:direction,speed:speed})
        this.addComponent(new Polygon(), {fillStyle:"brown", points:[
            new Vector2(-55,-15),
            new Vector2(-55,15),
            new Vector2(55,15),
            new Vector2(55,-15),
        ]})
    }
}