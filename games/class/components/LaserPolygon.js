class LaserPolygon extends Component{
    draw(ctx) {
        let position = this.transform.position


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0,-10)
        ctx.lineTo(5,5)
        ctx.lineTo(-5,5)

                
        ctx.fillStyle = "green"
        ctx.fill()

        //Signaling that I'm done drawing
        ctx.restore()
    }
}