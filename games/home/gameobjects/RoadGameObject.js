class RoadGameObject extends GameObject{
    constructor(){
        super("Road", [])

        this.addComponent(new RoadController())

        this.addComponent(new Polygon(), {fillStyle:"Gray", points:[
            new Vector2(-2000,-500),
            new Vector2(2000,-500),
            new Vector2(2000,500),
            new Vector2(-2000,500)
        ]})
        
    }
    }
