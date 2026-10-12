class GenericLevel extends Scene{
    constructor(){
        super()
        let frog = this.instantiate(new MainGameObject(), new Vector2(100, 300))
        let head = this.instantiate(new FrogHead(),new Vector2(0, -20))
        let leftArm = this.instantiate(new FrogLeftArm(),new Vector2(-10, -10))
        let rightArm = this.instantiate(new FrogRightArm(),new Vector2(10, -10))
        let leftLeg = this.instantiate(new FrogLeftLeg(),new Vector2(-8, 10))
        let rightLeg = this.instantiate(new FrogRightLeg(),new Vector2(8, 10))
        // Set the parent of each body part
        head.transform.setParent(frog.transform);
        leftArm.transform.setParent(frog.transform);
        rightArm.transform.setParent(frog.transform);
        leftLeg.transform.setParent(frog.transform);
        rightLeg.transform.setParent(frog.transform);
    }
}