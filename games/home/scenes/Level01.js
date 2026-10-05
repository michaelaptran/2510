class Level01 extends Scene{
    constructor(){
        super()
        this.instantiate(new WaterGameObject(), new Vector2(0,0))
        this.instantiate(new CarGameObject(), new Vector2(-500,200))
        this.instantiate(new CarGameObject(), new Vector2(-300,-300))

        this.instantiate(new CarGameObject(), new Vector2(-200,200))
        this.instantiate(new CarGameObject(), new Vector2(-1000,-300))
        this.instantiate(new LevelControllerGameObject())

}
}