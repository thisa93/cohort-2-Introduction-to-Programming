function main(){
    //circle(7);
    //circle(14);
    numSwap(55,35);
}
main();

function circle(rad){
    let radius = rad;
    let area=0, cur=0;

    area = Math.PI*Math.pow(radius,2);
    cur=2*Math.PI*radius;
    console.log("Area of the Circle is "+ area+"sqr cm");
    console.log("Curcumference of the Circle is "+ cur+"cm");
}

function numSwap(num1, num2){
    let number1=num1;
    let number2=num2;
    let temp;
    console.log("The given numbers are num1="+number1+" num2="+number2);
    temp=number1;
    number1=number2;
    number2=temp;
    console.log("The numbers after the swap:-> num1="+number1+" num2="+number2);
}