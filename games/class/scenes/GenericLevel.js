class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(875,800))
        this.instantiate(new PointsGameObject(), new Vector2(10,25))

    }
}