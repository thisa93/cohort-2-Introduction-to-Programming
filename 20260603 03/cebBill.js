// Type-1
//     0-30    5   80
//     31-60   9   120
// Type-2
//     0-60    14  ---
//     61-90   20  120
//     91-120  28  1000   
//     121-180 44  1500
//     >180   85  2100
ebBillCalculator(181);

function ebBillCalculator(unit){
    let amount,fixedRate;
    if(unit<61){
        if(unit<31){
            amount=unit*5;
            fixedRate=80;
        }
        else{
            amount = 30*5+(unit-30)*9;
            fixedRate = 120;
        }
    }
    else{
        amount=60*14;
        if(unit<91){
            amount += (unit-60)*20;
            fixedRate=120;
        }
        else if(unit<121){
            amount += 30*20+(unit-90)*28;
            fixedRate=1000;
        }
        else if(unit<181){
            amount += 30*20+30*28+(unit-120)*44;
            fixedRate=1500;
        }
        else{
            amount += 30*20+30*28+60*44+(unit-180)*85;
            fixedRate=2100;
        }
    }
    console.log("Your used unit value is "+unit);
    console.log("Amount for your used units is "+amount);
    console.log("Fixed rate amount is "+fixedRate);
    console.log("Total amount to be paid is "+(amount+fixedRate));
}