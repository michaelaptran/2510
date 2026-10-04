class Wall2Controller extends Component{
    direction = 1
    update(){
    this.transform.position.x += Time.deltaTime * 120 * this.direction
        if(this.transform.position.x > 1600){
            this.direction = -1
        }
        if(this.transform.position.x < -50){
            this.direction = 1
        }
            


    }
}