class Input{
    static keysDown = []

    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseButtonsDown = []
    static mouseButtonsDownThisFrame = []
    static mouseButtonsUpThisFrame = []

    static mousedown(event){
        if(!Input.mouseButtonsDown.includes(event.code)){
            Input.mouseButtonsDown.push(event.code)
            Input.mouseButtonsDownThisFrame.push(event.code)
        }
    }

    static mouseup(event){
        let index = Input.mouseButtonsDown.indexOf(event.code)
        Input.mouseButtonsDown.splice(index, 1)
        Input.mouseButtonsUpThisFrame.push(event.code)

    }
    
    //This function is called when a key is pressed down
    static keydown(event){
        if(!Input.keysDown.includes(event.code)){
            Input.keysDown.push(event.code)
            Input.keysDownThisFrame.push(event.code)
        }
    }

    //This function is called when a key is released then it removes the key from the keysDown array
    static keyup(event){
        //Get the index of the key
        let index = Input.keysDown.indexOf(event.code)

        // Remove the key from the array using split command
        Input.keysDown.splice(index, 1)

        Input.keysUpThisFrame.push(event.code)

    }

    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []
        Input.mouseButtonsDownThisFrame = []
        Input.mouseButtonsUpThisFrame = []

    }

}