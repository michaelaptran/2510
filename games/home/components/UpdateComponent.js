class UpdateComponent extends Component{

    start(){


    }

    update(){

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - 10
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + 10
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - 10
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + 10


    

    }

}