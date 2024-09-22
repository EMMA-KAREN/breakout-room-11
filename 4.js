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