class UpdateComponent extends Component{

    speed = 500
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
        let wallGameObjects = GameObject.findGameObjectsWithTag("Wall")
        for(const wallGameObject of wallGameObjects){
            let wallPosition = wallGameObject.transform.position
            let distance = myPosition.minus(wallPosition).magnitude
            if(distance < 15){
                mainGameObject.destroy()

            }
        }
        Camera.main.transform.positon = this.transform.position.clone()

    }

}