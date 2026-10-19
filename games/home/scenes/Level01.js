class Level01 extends Scene{
    constructor(){
        super()
        this.instantiate(new RoadGameObject(), new Vector2(0,0))




        //Water Level
        this.instantiate(new WaterGameObject(), new Vector2(0,-1000))
        //First row of logs
        this.instantiate(new LogsGameObject(1, 120), new Vector2(-500,-600))
        this.instantiate(new LogsGameObject(1,120), new Vector2(200,-600))
        //Second row of logs (reverse)
        this.instantiate(new LogsGameObject(-1,150), new Vector2(-300,-800))
        this.instantiate(new LogsGameObject(-1,150), new Vector2(400,-800))
        //Third row of logs
        this.instantiate(new LogsGameObject(1,180), new Vector2(-600,-1000))
        this.instantiate(new LogsGameObject(1,180), new Vector2(100,-1000))
        //Fourth row of logs (reverse)
        this.instantiate(new LogsGameObject(-1,100), new Vector2(-400,-1200))
        this.instantiate(new LogsGameObject(-1,100), new Vector2(300,-1200))



        this.instantiate(new LevelControllerGameObject())

}
}