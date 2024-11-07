In this blog we are discussing "The significance of union and intersection types in Typescript."
--------------------------------(Union type)---------------------------------
Union type help us to set severel types for any value. We can set severel type for function, array, object etc. We use the vertical bar (|) to separate each type.
Let's see some examples--
type User = {
name: string;
gender: "Male" | "Female";
mail?: string;
bloodGroup: "O+" | "A+" | "B+" | "Ab+";
};
We use union on gender and bloodGroup property to set severel values. Both male and female and different blood type group users can use this User type for set their data. We don't need to create differnt type for differnt gender and blood group users. Same way we can use on function and others.

function padLeft(value: string, padding: string | number) {
// ...
}
-------------------------------(Intersection type)----------------------------
Intersection type help us to adjust two or more types. We can set many types at once for function, array, object etc. We use (&) to set intersection type.
Let's see some examples---

type FrontEndDeveloper = {
skills: string[];
expertise1: "Client Side";
};
type BackEndDeveloper = {
skills: string[];
expertise: "Server Side";
};
type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;
In the FullStackDeveloper type we need to full fill all the property of FrontEndDeveloper and BackendDeveloper. Because we adjust both on FullStackDeveloper using intersection. In a word intersection combained two or more type in one. Same way we can use it for others.

At last both union and intersection make type flexible. Union create option and on the other hand itersection make compulsory. But both make our code shorter, smarter and cleaner as well.
