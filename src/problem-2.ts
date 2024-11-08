{
  //---------------------------------(Problem-2)------------------------------
  //Create a TypeScript function "removeDuplicates" that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  //___________________________________(Solve)_________________________________
  const removeDuplicates = (param: number[]) => {
    const newArray = param.filter(
      (item, index) => param.indexOf(item) === index
    );
    console.log(newArray);
  };
  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
