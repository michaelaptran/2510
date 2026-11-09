class Level01 extends Scene{
    constructor(){
        super()
        //Road Level
        this.instantiate(new RoadGameObject(), new Vector2(0,0))
        this.instantiate(new CarGameObject(1,250), new Vector2(-1100,1800))
        this.instantiate(new CarGameObject(-1,250), new Vector2(1100,1700))

        this.instantiate(new CarGameObject(1,200), new Vector2(-1100,1600))

        this.instantiate(new CarGameObject(1,350), new Vector2(-1100,1500))
        this.instantiate(new CarGameObject(1,350), new Vector2(-800,1500))

        this.instantiate(new CarGameObject(-1,250), new Vector2(1100,1400))
        this.instantiate(new CarGameObject(-1,250), new Vector2(800,1400))
        this.instantiate(new CarGameObject(-1,250), new Vector2(1400,1400))
        this.instantiate(new CarGameObject(-1,250), new Vector2(1800,1400))

        //3 cars in a row
        this.instantiate(new CarGameObject(1,500), new Vector2(-1100,1300))
        this.instantiate(new CarGameObject(1,500), new Vector2(-600,1300))
        this.instantiate(new CarGameObject(1,500), new Vector2(-900,1300))

        //3 cars in a row
        this.instantiate(new CarGameObject(-1,600), new Vector2(1100,1200))
        this.instantiate(new CarGameObject(-1,600), new Vector2(600,1200))
        this.instantiate(new CarGameObject(-1,600), new Vector2(900,1200))

        this.instantiate(new CarGameObject(1,450), new Vector2(-1100,1100))
        this.instantiate(new CarGameObject(1,450), new Vector2(-600,1100))

        this.instantiate(new CarGameObject(-1,450), new Vector2(1100,1000))
        this.instantiate(new CarGameObject(-1,450), new Vector2(1400,1000))

        this.instantiate(new CarGameObject(1,350), new Vector2(-1100,900))
        this.instantiate(new CarGameObject(1,350), new Vector2(-800,900))

        this.instantiate(new CarGameObject(-1,350), new Vector2(1100,800))
        this.instantiate(new CarGameObject(-1,350), new Vector2(1700,800))
        this.instantiate(new CarGameObject(-1,350), new Vector2(800,800))

        this.instantiate(new CarGameObject(1,350), new Vector2(-1100,700))
        this.instantiate(new CarGameObject(1,350), new Vector2(-800,700))
        this.instantiate(new CarGameObject(1,350), new Vector2(-500,700))
        this.instantiate(new CarGameObject(1,350), new Vector2(-1500,700))

        this.instantiate(new CarGameObject(-1,550), new Vector2(1100,600))
        //Troll car that is hard to avoid, it hits the heart
        this.instantiate(new CarGameObject(-1,550), new Vector2(800,600), 60 *360)
        this.instantiate(new CarGameObject(-1,550), new Vector2(500,600))
        this.instantiate(new CarGameObject(-1,550), new Vector2(1500,600))

        //spawn health coin object
        this.instantiate(new HealthCoinGameObject(), new Vector2(-300, 500), Math.random() * 360)

        this.instantiate(new CarGameObject(1,250), new Vector2(-1100,500))
        this.instantiate(new CarGameObject(1,250), new Vector2(-600,500))

        this.instantiate(new CarGameObject(-1,250), new Vector2(1100,400))
        this.instantiate(new CarGameObject(-1,250), new Vector2(500,400))

        


        //Water Level
        this.instantiate(new WaterGameObject(), new Vector2(0,-1000))
        //First row of logs
        this.instantiate(new LogsGameObject(1, 120), new Vector2(-500,-600))
        this.instantiate(new LogsGameObject(1,120), new Vector2(200,-600))
        this.instantiate(new LogsGameObject(1,120), new Vector2(900,-600))
        //Second row of logs (reverse)
        this.instantiate(new LogsGameObject(-1,150), new Vector2(-300,-700))
        this.instantiate(new LogsGameObject(-1,150), new Vector2(400,-700))
        this.instantiate(new LogsGameObject(-1,150), new Vector2(1100,-700))
        //Third row of logs
        this.instantiate(new LogsGameObject(1,180), new Vector2(-600,-800))
        this.instantiate(new LogsGameObject(1,180), new Vector2(100,-800))
        this.instantiate(new LogsGameObject(1,180), new Vector2(700,-800))
        //Fourth row of logs (reverse)
        this.instantiate(new LogsGameObject(-1,100), new Vector2(-400,-900))
        this.instantiate(new LogsGameObject(-1,100), new Vector2(300,-900))
        this.instantiate(new LogsGameObject(-1,100), new Vector2(1100,-900))
        //Fifth row of logs
        this.instantiate(new LogsGameObject(1,200), new Vector2(-500,-1000))
        this.instantiate(new LogsGameObject(1,200), new Vector2(300,-1000))
        this.instantiate(new LogsGameObject(1,200), new Vector2(1100,-1000))
        //Sixth row of logs (reverse)
        this.instantiate(new LogsGameObject(-1,150), new Vector2(-300,-1100))
        this.instantiate(new LogsGameObject(-1,150), new Vector2(400,-1100))
        this.instantiate(new LogsGameObject(-1,150), new Vector2(1100,-1100))


        //Goal
        this.instantiate(new GoalGameObject(), new Vector2(0,-1200))



        this.instantiate(new LevelControllerGameObject())

}
}