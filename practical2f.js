let students = [
    {
    roll_No: 100,
    name: "Rahul",
    marks: 85
},

{
    roll_No: 102,
    name: "Varun",
    marks: 85
},

{
    roll_No: 103,
    name: "Anju",
    marks: 90
}
];

function display(s)
{
    console.log("Student Details");
    console.log("------------------------------------");
    for(let stud of s)
    {
        console.log(`Roll No: ${stud.roll_No}`);
        console.log(`Name: ${stud.name}`);
        console.log(`Marks: ${stud.marks}`);
        console.log("------------------------------------");
    }
}
display(students);
console.log("Afsha");