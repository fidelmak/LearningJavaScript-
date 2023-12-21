function bmiCalculator (weight, height) {
    var incm = (height * height)
    var bmi = Math.round(weight / incm);
    
    if(bmi<18.5){
        return `Your BMI is ${bmi}, so you are underweight.`
    }else if(bmi == 18.5|| bmi < 24.9){
        return `Your BMI is ${bmi}, so you have a normal weight.`
    }else{
        return  `Your BMI is ${bmi}, so you are overweight.`
    }
    
    return bmi;
}
console.log(bmiCalculator(60,2));
console.log(bmiCalculator(80,2));
console.log(bmiCalculator(100,2));
