{
  //---------------------------------(Problem-1)------------------------------
  //Write a TypeScript function "sumArray" that takes an array of numbers and returns the sum of all elements in the array.

  //___________________________________(Solve)_________________________________
  const sumArray = (param: number[]) => {
    let sum: number = 0;
    for (let i = 0; i < param.length; i++) {
      sum = sum + param[i];
    }
    console.log(sum);
  };
  sumArray([1, 2, 3, 4, 5]);
}
