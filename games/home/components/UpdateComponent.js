class UpdateComponent extends Component{

    speed = 20
    start(){


    }

    update(){

        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed


        let myPosition = this.transform.position
        let mainGameObject = GameObject.find("Main")
        let carGameObjects = GameObject.findGameObjectsWithTag("Wall")
        for(const carGameObject of carGameObjects){
            let carPosition = carGameObject.transform.position
            let distance = myPosition.minus(carPosition).magnitude
            if(distance < 5){
                mainGameObject.destroy()

            }
        }
        Camera.main.transform.positon = this.transform.position.clone()

    }

}