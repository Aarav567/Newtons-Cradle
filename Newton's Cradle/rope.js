class rope{
	constructor( body1, body2, offsetX, offsetY){
		var options={
			bodyA:body1,
            bodyB:body2,
			pointB:{ x:offsetX, y:offsetY},
		}
        this.offsetX=offsetX
        this.offsetY=offsetY

        this.Slingshot=Constraint.create(options)
        World.add(world, this.Slingshot)




	}




    attach(body){
        this.Slingshot.bodyA=body

    }
    fly(){
        this.Slingshot.bodyA=null

    }



	

	display(){

        if(this.Slingshot.bodyA){
            var pointA=this.Slingshot.bodyA.position
            var pointB=this.Slingshot.bodyB.position
            fill("black")
            strokeWeight(2)

            var ANCHOR1X= pointA.x
            var ANCHOR1Y= pointA.y

            var ANCHOR2X= pointB.x+this.offsetX
            var ANCHOR2Y= pointB.y+this.offsetY

            line(ANCHOR1X, ANCHOR1Y, ANCHOR2X, ANCHOR2Y)
        }





	}

}