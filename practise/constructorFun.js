function createStudent(firstName, lastName) {
    let student = {
        firstName: firstName,
        lastName: lastName,
        getFullNAme: function () {
            console.log(`$(this.firstName) ${this.lastName}`);

        }

    }
    return student;
}
function student(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullNAme = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
   
}
let student3=createStudent("james","dino");
console.log(student3);
let student1=new student("john","doe");
console.log(student1);