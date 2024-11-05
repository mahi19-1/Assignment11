//    Ticket fare Calculator    //


var money = 800;
var age = 7;
var AnotherAge = 70;
var student = true;

if(age < 10){
    console.log("The ticket is free")
}
else if(student){
    var discount = money*50/100;
 var payableAmount = money - discount 
 console.log(payableAmount)       //50% discount//
}
else if(AnotherAge >= 60){
 var discount = money*15/100;
 var payableAmount = money - discount 
 console.log(payableAmount)      //15% discount//
}
else("Regular ticket fare 800 tk")