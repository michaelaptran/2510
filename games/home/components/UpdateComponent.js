class UpdateComponent extends Component{

    jump = 100
    start(){


    }

    update(){

        //console.log(Input.keysDown)

        if (Input.keysDownThisFrame.includes("ArrowUp")){
            this.transform.position.y = this.transform.position.y - this.jump
            //this.transform.rotation = 0
        }
        else if (Input.keysDownThisFrame.includes("ArrowDown")){
            this.transform.position.y = this.transform.position.y + this.jump
            //this.transform.rotation = Math.PI
        }
        else if (Input.keysDownThisFrame.includes("ArrowLeft")){
            this.transform.position.x = this.transform.position.x - this.jump
            //this.transform.rotation = -Math.PI / 2
        }
        else if (Input.keysDownThisFrame.includes("ArrowRight")){
            this.transform.position.x = this.transform.position.x + this.jump
            //this.transform.rotation = Math.PI / 2
        }


        let myPosition = this.transform.position

        let logGameObjects = GameObject.findGameObjectsWithTag("Log")
        let onLog = false

        for (const log of logGameObjects){
            let logPosition = log.transform.position

            let distanceX = Math.abs(myPosition.x - logPosition.x)
            let distanceY = Math.abs(myPosition.y - logPosition.y)
            if(distanceX < 55 && distanceY < 35){
                onLog = true
                let logController = log.getComponent(LogsController)
                //Moving frog with log
                this.transform.position.x += Time.deltaTime * logController.speed * logController.direction
                break
            }
        }

        //Checking whether the frog is in the river 
        let inWater = this.transform.position.y < -500 && this.transform.position.y > -1500

        if(inWater && !onLog){
            //Spawns frog back at starting position
            this.transform.position.x = 0
            this.transform.position.y = 500
        }

        // Collision check for cars
        let mainGameObject = GameObject.find("Main")
        let carGameObjects = GameObject.findGameObjectsWithTag("Wall")
        for(const carGameObject of carGameObjects){
            let carPosition = carGameObject.transform.position
            let distance = myPosition.minus(carPosition).magnitude
            if(distance < 5){
                mainGameObject.destroy()

            }
        }
        Camera.main.transform.position = this.transform.position.clone()

    }

}