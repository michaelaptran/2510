class EndScreen extends Scene{
    constructor(black){
        super()

        let wrappedText = new GameObject("WrappedText",[],"UI")
        wrappedText.addComponent(new MultiLineTextLabel(),{fillStyle:"gray", text:"You beat the game!", font:"30px Times"})
        this.instantiate(wrappedText, new Vector2(-300,300))

    }
}