function checkNumberType(num){
    if(num > 0) {
        return "positive";
    }
    else if(num < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}

console.log(checkNumberType(5)); 
console.log(checkNumberType(-3));
console.log(checkNumberType(0));