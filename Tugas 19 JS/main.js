class vehicle {
    #year;
    #bodykit
     constructor(
        year,
        color = "black",
        bodykit
     ){
        this.#year = year;
        this.color =color; 
        this.#bodykit = bodykit;
     }
      info(){
        console.log( 
            `year: ${this.getyear()}, color: ${this.color}, bodykit: ${this.bodykit}`
        )
      }
      setyear(year){
        this.#year = year;
      }

      getyear() {
        return this.#year;
      }
}

const car =new vehicle(20000,"black",4)

car.info()

car.setyear(2005)

car.info()

car.color("red")

car.info()