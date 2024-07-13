// let person = {
//     firstName : "Atul",
//     secondName : "Raj",
//     getFullName: function () {
//       return `The name of the person is ${person.firstName} ${person.secondName}`

//     },
//     phoneNumber: {
//         mobile: "123450",
//         landline:"35698",
//     },
// };
// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);

// function person(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// let person1 = new person("Atul","Raj");
// let person2 = new person("Rohit","Jaguar");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

//   Classes
// class vehicle{
//   constructor(name,maker,engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine =engine;

//   }
//   getDetails = function(){
//     return `The name of the vehicle is:${this.name}`;
//   }
// }

//   let v1 = new vehicle("Creta","Hyundai","2500cc");
//   let v2 = new vehicle("Q5","Auddi","3000cc");
//   console.log(v1.name);
//   console.log(v2.name);
//   console.log(v1.getDetails());

class Person{
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    let getDetails_NoAccess  = function (){
      return `first Name  is:${thsi.firstName},
      last Name  is:${thsi.lastName}`;
    }
    this.getDetails_Access = function(){
      return `first Name  is:${thsi.firstName},
      last Name  is:${thsi.lastName}`;
    }
  }
}
let person1 = new Person("Atul","Raj");
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.getDetails_NoAccess);
console.log(person1.getDetails_Access);
