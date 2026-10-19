class LogsController extends Component{
    direction = 1
    speed = 120
    update(){
    this.transform.position.x += Time.deltaTime * this.speed * this.direction
        //Moving right: reset
        if(this.direction === 1 && this.transform.position.x > 2000){
            this.transform.position.x = -1000
        }
        //Moving left: reset
        if(this.direction === -1 && this.transform.position.x < -2000){
            this.transform.position.x = 1000
        }
            


    }
}