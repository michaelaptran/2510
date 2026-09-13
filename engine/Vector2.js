class Vector2{
    x
    y
    
    //Think __init__
    constructor(x, y){
        //Think self.x
        this.x = x
        this.y = y

    }

    clone(){
        return new Vector2(this.x, this.y)
    }
}