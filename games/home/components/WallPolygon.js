class WallPolygon extends Component{
    draw(ctx) {
        let position = this.transform.position


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.moveTo(15,50)
        ctx.lineTo(15, 75)
        ctx.lineTo(60,75)
        ctx.lineTo(60,50)
    
                
        ctx.fillStyle = "Blue"
        ctx.fill()

        //Signaling that I'm done drawing
        ctx.restore()
    }
}