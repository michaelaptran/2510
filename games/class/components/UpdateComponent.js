class UpdateComponent extends Component{


    speed = 200

    start(){
        this.timeSinceLastLaser = 0


    }

    update(){
        this.timeSinceLastLaser += 1
        console.log(Input.keysDown)

        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed


        if (this.timeSinceLastLaser > 20){
            this.timeSinceLastLaser = 0
            let laserGameObject = instantiate(new LaserGameObject(), this.transform.position.clone())
            if (Math.random() < .5)
            laserGameObject.getComponent(Polygon).fillStyle = "#FF9911"
        }

        Camera.main.transform.position = this.transform.position.clone()

    }

}