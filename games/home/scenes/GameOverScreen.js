class GameOverScreen extends Scene{
    constructor(){
        super("black")
        let title = new GameObject("GameOverTitle", [], "UI")

        title.addComponent(new MultiLineTextLabel(), {text:"Game Over!", fillStyle:"red", font:"bold 50px Arial", maxWidth: 400})
        this.instantiate(title, new Vector2(Engine.canvas.width/2, Engine.canvas.height/2 - 50))

        let restartText = new GameObject("RestartText", [], "UI")
        restartText.addComponent(new MultiLineTextLabel(), {text:"Press R to Restart", fillStyle:"white", font:"bold 30px Arial", maxWidth: 400})
        this.instantiate(restartText, new Vector2(Engine.canvas.width/2, Engine.canvas.height/2 + 40))

        let restartController = new GameObject("RestartController", [], "UI")
        restartController.addComponent(new RestartController())
        this.instantiate(restartController)


    }
}