question 1:
// odd number question number
for (let i = 0; i<= 60; i++){
    if (i%2 !== 0)
    console.log(i)
}
// 2%2=0
// 0+1=1
// // 11%2=5 rem1 

// question 2:if statement
let age = 17;
if(age >=1 && age<=17){
    console.log('you are under age ');
}
else if(age>=18 && age <=100){
    console.log ('you are an aldult');
}
else{
    console.log('invalid input');
}


// question  3.Arrays .list of 10 names and pick the 4th .number counting starts from 0
let names =['Faith','emma','elvin','philip','ken','eris','ann','joy','joseph','jane'];
console.log (names[4])
console.log (names);

// question 4:
    let checkloaneligitability =(employeestatus, creditscore, yearsinbusiness) =>{
 // if an employee meets the requirements of employement status (self employeed,meets the right creddit score rage which is greaterthan 650 is elligable for loan .ifnot no loan  )
        if((employeestatus === "employed" && creditscore >700) ||
        (employeestatus === "self-employed" && creditscore >650 && yearsinbusiness >2)) {
            console.log("eligible for loan");
        }
        else{
            console.log("not eligible for loan")
        } }
// this employee meets the employed status requiremnt so he gets the loan)
        checkloaneligitability("employed", 720,0);
// this employee meets the self-employee status requiremnt so he gets the loan)
        checkloaneligitability("self-employed",630,3);
// this employee meets the unemployee status requiremnt so he gets the loan)
        checkloaneligitability("unemployed",900,5);
   


        question 5:
        (15>5= true &&!(29<15=false || true))
        (false ||true =true)
       ( true && !true)
       (true && false)
       (false)||
       (15=5*2=25 so 25<20 =false  && !false) 
       false && !fale =>false && true => false
       (false) || false 
       result to false 

//        another way:

true && (false || true)
true !(false || true)
true ! true
false ||(false && !false)
false || false
false


// question 6:
function addnumber(a, b){ 
    return a+b;
}

let sum = addnumber(10, 5);
 console.log(sum);

// let checkAge = (age) => {
//     // declares the variable named checkage and age is the parameter
//     let message;
  
//     if (age >= 1 && age <= 17) {
//       message = "You are underage";
//     } else if (age >= 18 && age <= 100) {
//       message = "You are an adult";
//     } else {
//       message = "Invalid input";
//     }
  
//     console.log(message);
//   };
  

  checkAge(25); // Output: You are an adult
  checkAge(12); // Output: You are underage
  checkAge(105); // Output: Invalid input
  checkAge(-5); // Output: InvALID