class HealthCoinGameObject extends GameObject{
    constructor(){
        super("HealthCoinGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'red', points: Assets.triangle})
        this.addComponent(new Collider(), {isTrigger: true})
        //this.addComponent(new HealthCoinGameObjectController())
        this.transform.scale = new Vector2(10,10)
    }
}