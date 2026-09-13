class LaserGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"orange"})
    }
}