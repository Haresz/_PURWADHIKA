function margeData(arr1, arr2) {
  let array = [];
  for (let index = 0; index < arr1.length || index < arr2.length; index++) {
    if (
      arr1[index].name === arr2[index].name &&
      arr1[index].email === arr2[index].email
    ) {
      array.push(arr1[index]);
    } else {
      array.push(arr1[index]);
      array.push(arr2[index]);
    }
  }
  return console.log(array);
}

margeData(
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ],
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ]
);
