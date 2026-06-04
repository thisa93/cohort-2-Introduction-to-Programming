function main(){

}
main();

function findTriangularType(a, b, c){
    if(a===b && c===b){
        console.log("Equialatral Triangle.");
    }
    else if(a===b || b===c || a===c){
        console.log("Isosceles Triangle.");
    }
    else{
        console.log("Scalene Triangle.");
    }
}