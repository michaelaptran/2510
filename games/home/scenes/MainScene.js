class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new BackgroundGameObject(), new Vector2(0,0))
        this.spawnMain()
        this.instantiate(new WallGameObject(), new Vector2(100,100))
        this.instantiate(new WallGameObject(), new Vector2(300,300))
        this.instantiate(new WallGameObject(), new Vector2(0,500))
        this.instantiate(new WallGameObject(), new Vector2(700,700))

        this.instantiate(new Wall2GameObject(), new Vector2(300,100))
        this.instantiate(new Wall2GameObject(), new Vector2(400,300))
        this.instantiate(new Wall2GameObject(), new Vector2(200,500))
        this.instantiate(new Wall2GameObject(), new Vector2(900,700))
    }
    spawnMain(){
        this.instantiate(new MainGameObject(), new Vector2(875,800))
    }
}