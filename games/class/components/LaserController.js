class LaserController extends Component{
    update(){
        this.transform.position.y -= 5

        if(this.transform.position.y < 50){
            this.gameObject.destroy()
        }
    }
}