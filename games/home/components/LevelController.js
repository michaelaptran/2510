class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)

    }

    update(){
        let mainGameObject = GameObject.find("Main")
        if(!mainGameObject){
            //Change scene to level 1
            SceneManager.loadScene(Level01)
            return
        }

        let screenController = mainGameObject.getComponent(UpdateComponent)
        
        if(screenController.gameState == "gameover"){
            SceneManager.loadScene(GameOverScreen)
            return
        }
        if(screenController.gameState == "gamewon"){
            SceneManager.loadScene(GameOverScreen)
            return
        }

        
        
    }
}
