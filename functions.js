//functions
function add(a,b){
    console.log(a+b);   
}
add(2,4)
const sub=(a,b)=>{
    console.log(a-b); 
}
sub(3,4)
const mul=(a,b)=>{
    console.log(a*b); 
}
mul(6,4)

//callback function
const calc=(a,b,fun)=>{
    fun(a,b)
}
calc(4,3,mul)