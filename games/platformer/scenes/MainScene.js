class MainScene extends Scene{
  constructor(){
    super()
    this.instantiate(new SquareGameObject(), new Vector2(0,100), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0,50), 0)
    this.instantiate(new PlatformGameObject(), new Vector2(0,200), 0)
  }
}
