// 2. BMI Calculator and Health Category //
// Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//- BMI < 18.5, you are underweight.
//- BMI >= 18.5 and BMI <=24.9, you are normal.
//- BMI >=25 and BMI <= 29.9, you are overweight.
//- Otherwise, you are obese.

var weight = 60;
var height = 160;
var bmi = weight / height * height;

if (bmi < 18.5) {
    console.log("you are underweight")
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("you are normal")
}
else if (bmi >= 25 && bmi <= 2.29) {
    console.log("you are overweight")
}
else { console.log("you are obese") }



