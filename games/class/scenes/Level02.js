class Level02 extends Scene{
    constructor(){
        super()
       // this.instantiate(new MainGameObject(), new Vector2(875,800))
        this.instantiate(new EnemyGameObject(), new Vector2(50,200), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(100,250), Math.PI)
       // this.instantiate(new PointsGameObject(), new Vector2(10,25))
        this.instantiate(new LevelControllerGameObject())
    }
}