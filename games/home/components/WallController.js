class WallController extends Component{
    update(){
        this.transform.position.x += 2
        if (this.transform.position.x > 1500){
            this.transform.position.x = -2
    }
}
}