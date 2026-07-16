let student = {
    roll_No : 25,
    name: "Afsha",
    marks: 85

};

console.log("Original Object: ");
console.log(student);

console.log("\nAccessing Properties: ");
console.log("Name: ",student.name);
console.log("Marks: ",student.marks);

student.marks = 90;

console.log("\n After Updating Marks: ");
console.log(student);

student.city = "Mumbai";
console.log("\n After Adding City: ");
console.log(student);

delete student.roll_No;
console.log("\n After Deleting Roll Number: ");
console.log(student);
