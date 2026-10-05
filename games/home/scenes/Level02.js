class Level02 extends Scene{
    constructor(){
        super()
        this.instantiate(new RoadGameObject(), new Vector2(0,0))
        this.instantiate(new LogsGameObject(), new Vector2(-500,-100))
        this.instantiate(new LogsGameObject(), new Vector2(-300,-300))
        this.instantiate(new LogsGameObject(), new Vector2(-600,-400))
        this.instantiate(new LogsGameObject(), new Vector2(0,-200))

        this.instantiate(new LogsGameObject(), new Vector2(-300,-20))
        this.instantiate(new LogsGameObject(), new Vector2(-300,0))
        this.instantiate(new LogsGameObject(), new Vector2(-600,100))
        this.instantiate(new LogsGameObject(), new Vector2(-200,-400))
        this.instantiate(new LogsGameObject(), new Vector2(-200,-200))
        this.instantiate(new LevelControllerGameObject())
    }
}