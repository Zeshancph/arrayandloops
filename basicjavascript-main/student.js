export class student  {

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.fullName = this.generateFullName();
        
    }
    generateFullName(){
        const fullname = this.firstName + " "  + this.lastName;
        return this.fullName;
    }
    getFULLNAME(){
        return fullName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;

    }
    nameEmail(){
        return this.firstName + " and email is " + this.email;

    }
    setEmail (email){
        this.email = email;
        return this.email;
    }
}
/*
const student1 =  new student( "Tom", "Hardy", "tom@gmail.com");
console.log(student1.fullName());
console.log(student1.nameEmail());
console.log(student1.setEmail("hardy@gmail.com"));
console.log(student1.nameEmail());
*/

const names =  ["Tom", "Martin", "Lukas", "Samuel", "Reka"];
const index = names.indexOf("Martin");
console.log ("index is: " +index);

const p1 = {
    firstName: "Christan",
    lastName: "Kirschberg"
    
}
const people =[
    { firstName: "Zeshan", lastName: "Aziz"},
    { firstName: "Martin", lastName: "Tom"},
    { firstName: "Christan", lastName: "Kirschberg"},
    { firstName: "Jens", lastName: "christiansen"}
    
]
console.log (people[1]);
//`console.log (names);