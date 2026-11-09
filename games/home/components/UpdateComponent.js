class UpdateComponent extends Component{

    health = 3
    isInvulnerable = false
    invulnerabilityTimer = 0
    invulnerabilityDuration = 2
    flashTimer = 0
    flashInterval = 0.15
    gameState = "playing"



    jump = 100
    start(){


    }

    update(){
        if(this.gameState != "playing"){
            if(Input.keysDownThisFrame.includes("KeyR")){
                this.restartGame()
            }
            return
        }


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

        //Invulnerability timer
        if (this.isInvulnerable) {
            this.invulnerabilityTimer -= Time.deltaTime
            this.flashTimer -= Time.deltaTime

            if (this.flashTimer <= 0) {
                this.setFrogVisibility(!this.gameObject.visible)
                this.flashTimer = this.flashInterval
                
            }

            if (this.invulnerabilityTimer < 0) {
                this.isInvulnerable = false
                this.invulnerabilityTimer = 0
                
                this.setFrogVisibility(true)
            }
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
        let inWater = this.transform.position.y < -500 && this.transform.position.y > -1200

        if(inWater && !onLog){
            //Spawns frog back at starting position
            this.takeDamage()
        }

        // Collision check for cars
        const carGameObjects = GameObject.findGameObjectsWithTag("Wall")
        for(const carGameObject of carGameObjects){
           const isCollision = Collisions.isCollisionPolygonPolygon(this.gameObject, carGameObject)

           if(isCollision && !this.isInvulnerable){
                this.takeDamage()
                break
           }
        
        

        }

        //Check for collision with goal
        const goalGameObjects = GameObject.findGameObjectsWithTag("Goal")
        for(const goalGameObject of goalGameObjects){
            const isCollision = Collisions.isCollisionPolygonPolygon(this.gameObject, goalGameObject)
            if(isCollision){
                this.gameState = "won"
                console.log("You won!")
                break
            }

        }


        Camera.main.transform.position = this.transform.position.clone()
    }

    restartGame(){
        //Reset health
        this.health = 3

        //Reset invulnerability
        this.isInvulnerable = false
        this.invulnerabilityTimer = 0
        this.flashTimer = 0


        this.setFrogVisibility(true)

        //Reset frog position
        this.gameObject.transform.position = new Vector2(0,500)

        //Reset game state
        this.gameState = "playing"
        console.log("Game restarted!")
    }

    setFrogVisibility(visible) {
            this.gameObject.visible = visible
            for(const gameObject of SceneManager.currentScene.gameObjects){
                if(gameObject.transform.parent === this.gameObject.transform){
                    gameObject.visible = visible
                }
            }
        }
        
    takeDamage(){
        //Don't take damage if invulnerable or the game is over
        if (this.isInvulnerable || this.gameState != "playing") {
            return
        }
        this.health--

        //Respawn Frog
        this.transform.position.x = 0
        this.transform.position.y = 500

        if(this.health <= 0){
            this.health = 0
            this.gameState = "gameover"
            this.setFrogVisibility(true)
            console.log("Game Over!")
            return
        }

        //Start invulnerability
        this.isInvulnerable = true
        this.invulnerabilityTimer = this.invulnerabilityDuration

        //Start flashing
        this.flashTimer = this.flashInterval
        this.setFrogVisibility(false)
    }
}