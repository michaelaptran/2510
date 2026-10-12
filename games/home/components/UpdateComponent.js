class UpdateComponent extends Component{

    jump = 50
    start(){


    }

    update(){

        console.log(Input.keysDown)

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