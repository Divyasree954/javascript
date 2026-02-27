let num=[2,3,4,5,6,7,8]
let obj={
    name:'Divya',city:'Bangalore',age:19
}
for(let index in obj){
    console.log(index); 
}

for(let index in obj){
    console.log(obj[index]);
    
}

//for of loop- only access the index of keys
for(let index in num){
    console.log(index); 
}

//for in loop- only access the values 
for(let index in num){
    console.log(num[index])
}

//both the keys and values will print
console.log(num);
console.log(obj);


let obj1={
    name:'div',
    state:{
        city:'hyderabad'
    },
    age:19
}
console.log(obj1.state.city);


// optional chaining 
let obj2={
    name:'div',
    age:19
}
console.log(obj2?.state?.city);