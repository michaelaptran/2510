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
    plus(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }
    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    get magnitude(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}