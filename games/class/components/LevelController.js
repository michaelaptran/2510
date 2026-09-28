class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)

    }

    update(){
        let enemyGameObject = GameObject.find("Enemy")
        if(!enemyGameObject){
            //Change scene to level 2
            SceneManager.loadScene(Level02)

        }

    }
}