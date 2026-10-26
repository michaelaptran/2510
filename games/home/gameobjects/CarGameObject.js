class CarGameObject extends GameObject{
    constructor(direction = 1, speed = 120){
        super("Car", ["Wall"])
        this.addComponent(new CarController(), {direction:direction,speed:speed})
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(15,-10),
            new Vector2(15,20),
            new Vector2(120,20),
            new Vector2(120,-10),
        ]})
}
}