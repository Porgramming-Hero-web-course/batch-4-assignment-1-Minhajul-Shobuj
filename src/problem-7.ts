{
  //---------------------------------(Problem-7)------------------------------
  //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  //___________________________________(Solve)_________________________________

  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge() {
      let currentYear: number = new Date().getFullYear();
      const carAge = currentYear - this.year;
      console.log(carAge);
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();
}
