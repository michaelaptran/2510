class FrogHead extends GameObject {
    constructor() {
        super("FrogHead")
        this.addComponent(new Polygon(), {
            fillStyle: "green",
            points: [
                new Vector2(-12, -10),
                new Vector2(-12, 10),
                new Vector2(12, 10),
                new Vector2(12, -10)
            ]
        })
    }
}