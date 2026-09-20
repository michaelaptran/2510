class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new BackgroundGameObject(), new Vector2(0,0))
        this.instantiate(new MainGameObject(), new Vector2(875,800))
        this.instantiate(new WallGameObject(), new Vector2(100,100))
        this.instantiate(new WallGameObject(), new Vector2(300,300))
        this.instantiate(new WallGameObject(), new Vector2(0,500))
        this.instantiate(new WallGameObject(), new Vector2(700,700))
    }
}