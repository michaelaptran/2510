class LogsController extends Component{
    direction = 1
    update(){
    this.transform.position.x += Time.deltaTime * 120 * this.direction
        if(this.transform.position.x > 1000){
            this.direction = -1
        }
        if(this.transform.position.x < -1000){
            this.direction = 1
        }
            


    }
}