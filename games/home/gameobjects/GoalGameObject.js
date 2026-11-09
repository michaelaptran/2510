class GoalGameObject extends GameObject{
    constructor(){
        super("Goal", ["Goal"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'lime', 
            points:[
                new Vector2(-100,-25),
                new Vector2(100,-25),
                new Vector2(100,25),
                new Vector2(-100,25)
             ]
            })

        this.addComponent(new Collider(), {
            points:[
                new Vector2(-100,-25),
                new Vector2(100,-25),
                new Vector2(100,25),
                new Vector2(-100,25)
            ]
        })
    }
}