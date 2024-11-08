{
  //---------------------------------(Problem-6)------------------------------
  //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  //___________________________________(Solve)_________________________________

  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = <X extends Profile, Y extends Partial<Profile>>(
    param1: X,
    param2: Y
  ) => {
    return { ...param1, ...param2 };
  };
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
