class FrogLeftLeg extends GameObject {
    constructor() {
        super("FrogLeftLeg");

        this.addComponent(new Polygon(), {
            fillStyle: "green",
            points: [
                new Vector2(-5, -5),
                new Vector2(-12, 5),
                new Vector2(-20, 12),
                new Vector2(-18, 17),
                new Vector2(-10, 14),
                new Vector2(0, 5)
            ]
        })
    }
}