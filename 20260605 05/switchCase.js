function main(){
    doCalculation(5,10,"+");
}
main();

function doCalculation(num1, num2, op){
    switch(op){
        case "+":
            console.log(`The sum of `,num1,` and `,num2,` is `,(num1+num2));
        break;
        case "-":
            console.log(`The sub of `,num1,` and `,num2,` is `,(num1-num2));
        break;
        case "*":
            console.log(`The mul of `,num1,` and `,num2,` is `,(num1*num2));
        break;
        case "/":
            console.log(`The div of `,num1,` and `,num2,` is `,(num1/num2));
        break;
    }
}