class TextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"

    font = "10px Arial"

    draw(ctx) {


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle

        ctx.font = this.font
        
        ctx.fillText(this.text, 0,0)

        //Signaling that I'm done drawing
        ctx.restore()
    }
}