class CarController extends Component{
    direction = 1
    update(){
        
    this.transform.position.x += Time.deltaTime * 300 * this.direction
        if(this.transform.position.x > 1000){
            this.direction = -1
        }
        if(this.transform.position.x < -1000){
            this.direction = 1
        }


        // Collision check and moves MainGameObject back to starting position

    }
}