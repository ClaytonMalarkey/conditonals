var a = 100;
var is_member = true;
if(a >= 90 && is_member == true)
{
    console.log("awesome");
}
else if(a >= 75 && a < 90){
    console.log("great");
}else if(a < 75 && a >= 50) {
    console.log("keep going")
}else if(is_member = false && a >= 10){
    console.log("try again");
}else {
    console.log("average");
}