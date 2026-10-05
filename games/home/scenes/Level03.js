class Level03 extends Scene{
    constructor(){
        super()
        this.instantiate(new ForestGameObject(), new Vector2(0,0))
        this.instantiate(new LevelControllerGameObject())
    }
}