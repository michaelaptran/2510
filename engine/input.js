class Input{
    static keysDown = []
    
    //This function is called when a key is pressed down
    static keydown(event){
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)

    }

    //This function is called when a key is released then it removes the key from the keysDown array
    static keyup(event){
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index, 1)

    }
}