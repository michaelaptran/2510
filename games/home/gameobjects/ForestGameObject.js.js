class ForestGameObject extends GameObject{
    constructor(){
        super("Forest", [])

        this.addComponent(new ForestController())

        this.addComponent(new Polygon(), {fillStyle:"Green", points:[
            new Vector2(-2000,-500),
            new Vector2(2000,-500),
            new Vector2(2000,500),
            new Vector2(-2000,500)
        ]})
        
    }
    }
