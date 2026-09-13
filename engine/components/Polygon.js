class Polygon extends Component{
    fillStyle = "magenta"

    points = []

    draw(ctx) {
        let position = this.transform.position


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        ctx.translate(position.x, position.y)

        ctx.beginPath()

        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }
        ctx.lineTo(0,-35)
        ctx.lineTo(10,-50)
        ctx.lineTo(100,-50)
        ctx.lineTo(110,-35)
        ctx.lineTo(55,60)
                
        ctx.fillStyle = "purple"
        ctx.fill()

        ctx.lineTo(55,-35)
        ctx.lineTo(70,-5)


        ctx.fillStyle = "red"
        ctx.fill()

        //Signaling that I'm done drawing
        ctx.restore()
    }
}