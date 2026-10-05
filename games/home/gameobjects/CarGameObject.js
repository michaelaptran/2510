class CarGameObject extends GameObject{
    constructor(){
        super("Car", ["Wall"])
        this.addComponent(new CarController())
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(15,-10),
            new Vector2(15,20),
            new Vector2(120,20),
            new Vector2(120,-10),
        ]})
}
}