function numbertype(number)
{
    if(number > 0)
    {
        return "the number is positive";
    }
    else if (number < 0){
        return "the number is negative";
    }
    else {
        return "the number is zero";
    }
}

let num = -1;
let result = numbertype(num);

console.log(result + " " +num );