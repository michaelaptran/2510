class BackgroundController extends Component{
    
    start(){


    }
    
    update(){
    
        this.transform.position.y += 1
        if (this.transform.position.y > 1000){
            this.transform.position.y = 0
    }
    }
}