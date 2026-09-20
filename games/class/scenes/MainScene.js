class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(875,800))
        this.instantiate(new EnemyGameObject(), new Vector2(500,500), Math.PI/4)
    }
}