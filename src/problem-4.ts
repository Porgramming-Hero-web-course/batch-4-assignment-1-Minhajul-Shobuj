{
  //Problem-4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  const calculateShapeArea = (shape: Circle | Rectangle) => {
    if ("radius" in shape) {
      const circleArea = Math.PI * shape.radius * shape.radius;
      console.log(circleArea);
    } else {
      const rectangleArea = shape.height * shape.width;
      console.log(rectangleArea);
    }
  };
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
}
