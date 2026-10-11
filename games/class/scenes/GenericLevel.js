class GenericLevel extends Scene{
    constructor(){
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(100,300))
        this.instantiate(new PointsGameObject(), new Vector2(10,25))
        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(50,50))

        helperGameObject.transform.setParent(mainGameObject.transform)

        

    }
}