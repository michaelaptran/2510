class RoadGameObject extends GameObject{
    constructor(){
        super("Road", [])

        this.addComponent(new RoadController())

        this.addComponent(new Polygon(), {fillStyle:"Gray", points:[
            new Vector2(-4000,-500),
            new Vector2(4000,-500),
            new Vector2(4000,1000),
            new Vector2(-4000,1000)
        ]})
        
    }
    }
