class BackgroundGameObject extends GameObject{
    constructor(){
        super()

        this.addComponent(new BackgroundController())

        this.addComponent(new Polygon(), {fillStyle:"red", points:[
            new Vector2(0,0),
            new Vector2(2000,0),
            new Vector2(2000,-300),
            new Vector2(0,-300),
        ]})

        this.addComponent(new Polygon(), {fillStyle:"yellow", points:[
            new Vector2(0,-300),
            new Vector2(0,-800),
            new Vector2(2000,-800),
            new Vector2(2000,-300),
        ]})

        this.addComponent(new Polygon(), {fillStyle:"orange", points:[
            new Vector2(0,-600),
            new Vector2(0,-1000),
            new Vector2(2000,-1000),
            new Vector2(2000,-600),
        ]})

        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(0,0),
            new Vector2(2000,0),
            new Vector2(2000,300),
            new Vector2(0,300),
        ]})
        this.addComponent(new Polygon(), {fillStyle:"blue", points:[
            new Vector2(0,300),
            new Vector2(0,800),
            new Vector2(2000,800),
            new Vector2(2000,300),
        ]})

        this.addComponent(new Polygon(), {fillStyle:"green", points:[
            new Vector2(0,600),
            new Vector2(0,1000),
            new Vector2(2000,1000),
            new Vector2(2000,600),
        ]})
    }
    }
