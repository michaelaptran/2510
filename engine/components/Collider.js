class Collider extends Component{
    _points // Variable with a different name
    get points(){
        return this._points ?? this.gameObject.getComponent(Polygon).points
    }
    set points(points){
        this._points = points
    }
}