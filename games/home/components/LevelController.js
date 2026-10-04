class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)

    }

    update(){
        let mainGameObject = GameObject.find("Main")
        if(mainGameObject.transform.position.y <= -400){
            SceneManager.loadScene(Level02)

        }
        if(!mainGameObject){
            //Change scene to level 1
            SceneManager.loadScene(Level01)
        }
    }
}