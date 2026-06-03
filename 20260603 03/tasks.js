//Find given number is possitve or negative
function main(){
    //findPostiveOrNegative(-5);
    //findGrade(55);
    isVowel('A');
}
main();

function findPostiveOrNegative(num){
    let number = num;
    if(number >=0){
        console.log("The given number "+number+" is a possitive number.");
    }
    else{
        console.log("The given number "+number+" is a negative number.");
    }
}

function checkOddOrEven(num){
    if(num%2==0)
        console.log("The given number "+num+" is an even number.");
    else
        console.log("The given number "+num+" is an odd number.");
}

function findGrade(mark){
    let marks = mark;
    console.log("Your given marks value is "+marks);
    if(marks>=0 && marks<=100){
        if(marks>=80)
            console.log("The grade is 'A'");
        else if(marks>=70)
            console.log("The grade is 'B'");
        else if(marks>=60)
            console.log("The grade is 'C'");
        else if(marks>=50)
            console.log("The grade is 'D'");
        else
            console.log("The grade is 'F'");
    }
    else
        console.log("Invalid input. Try again.");
}

function isVowel(char){
    if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U')
        console.log("'"+char+"' is a vowel letter");
    else
        console.log("'"+char+"' is a consonant letter");
}