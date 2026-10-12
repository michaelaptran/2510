class FrogRightArm extends GameObject {
    constructor() {
        super("FrogRightArm");
        this.addComponent(new Polygon(), {
            fillStyle: "green",
            points: [
                new Vector2(5, -4),
                new Vector2(15, -12),
                new Vector2(20, -10),
                new Vector2(18, -5),
                new Vector2(5, 4)
            ]
        })
    }
}