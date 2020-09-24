const bills=[124,48,268];
console.log(bills);

function tipCalculator(bills)
{
    var percentage;
    if(bills<50){
        percentage=0.2;
    }
    else if(bills>=50 &&  bills<200)
    {
        percentage=0.15;
    }
    else{
        percentage=0.1;
    }
    return percentage * bill;

}

var tips=[tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues=[bills[0]+tips[0],
                   bills[1]+tips[1],
                   bills[2]+bills[2]];

                   console.log(tips,finalValues);