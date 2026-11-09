class RestartController extends Component{
    start(){
        
    }
    update(){
        if(Input.keysDownThisFrame.includes("KeyR")){
            SceneManager.loadScene(Level01, true)
        }
    }
}