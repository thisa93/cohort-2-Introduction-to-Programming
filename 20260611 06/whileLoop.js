//Find the summation of first 10 numbers
function main(){
    sumOfFirstTenNumbers();
}
main();

function sumOfFirstTenNumbers(){
    let count = 0;
    let sum = 0;
    while(count <20){
        sum+=count;
        count++;
        console.log(`Count value is`,count,`Sum value is `,sum);
    }
    console.log(`summation of first `,count,`number is `,sum);
}