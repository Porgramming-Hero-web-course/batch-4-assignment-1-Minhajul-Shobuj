{
  //Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  const countWordOccurrences = (param1: string, param2: string) => {
    let count = 0;
    let checking = 0;
    while (param1.includes(param2, checking)) {
      count++;
      checking = param1.indexOf(param2, checking) + 1;
    }
    console.log(count);
  };
  countWordOccurrences("I love typescript", "typescript");
}
