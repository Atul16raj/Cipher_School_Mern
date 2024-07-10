var x =15;
{
    let x = 5;
    console.log(x);
}
console.log(x);

// output
//5
//15

const q1 = ["Jan","Feb","Mar"]
const q2 = ["Apr","May","June"]
const q3 = ["July","Aug","Sep"]
const q4 = ["Oct","Nov","Dec"]
const year = [...q1,...q2,...q3,...q4];
console.log(year)

    // output
// [
//     'Jan',  'Feb', 'Mar',
//     'Apr',  'May', 'June',
//     'July', 'Aug', 'Sep',
//     'Oct',  'Nov', 'Dec'
//   ]

const myNumber = [25,12,45,50,77]
let maxValue = Math.max(...myNumber);
console.log(maxValue);



const name ="CipherSchools";
let text = " ";
for(let ch of name){
    text += ch + " ";
}
console.log(text);


const myNumber1 = ()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log("This is inside promise");
     resolve();
    },2000)
    });
};


const addNumbers=(...args)=>{
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
    console.log(args);
};
console.log(addNumbers(15,14,16,22));


