class WaterGameObject extends GameObject{
    constructor(){
        super("Water",[])

        this.addComponent(new WaterController())

        this.addComponent(new Polygon(), {fillStyle:"Blue", points:[
            new Vector2(-2000,-500),
            new Vector2(2000,-500),
            new Vector2(2000,500),
            new Vector2(-2000,500)
        ]})
        
    }
    }
