let arr=[1,2,3,4,5,6]
const addOne=(num)=>{
    return num+1
}

//filtering array
let a=arr.filter((num)=>num)
console.log(a)


//maping array
let result=arr.map(addOne)
console.log(result)

let double=arr.map((num)=>{
    return num*2
})
console.log(double)


//even numbers filtering
let ar=[1,2,3,4,5,6]
let b=ar.filter((even)=>even%2==0)
console.log(b)

//odd numbers filtering
let c=ar.filter((odd)=>(odd%2!=0))
console.log(c)


//reduce
let sum=ar.reduce((total,curr)=>{
    return total+curr
},1)
console.log(sum);



//mapping products
let products=[
    {id:1,name:'laptop',price:1000},
    {id:2,name:'phone',price:500},
    {id:3,name:'tablet',price:300}   
]
let id=products.map((product)=>{
    console.log(product.id)
})
let name=products.map((product)=>{
    console.log(product.name)
})
let price=products.map((product)=>{
    console.log(product.price)
})

//sum of price with reduce
let sumofprice=products.reduce((total,curr)=>{
    return total+curr.price
},0)
console.log(sumofprice)

//filter products
let product=products.filter((product)=>product.price>200)
console.log(product);

//find products
let d=products.find((p)=>p.id==2)
console.log(d);


//destructuring
let student={
    stdname:'divya',
    age:19,
    city:'Bangalore'
}
const {stdname,age}=student
console.log(stdname,age);


let car={
    brand:'Toyota',
    year:2020
}
const newCar={...car, year:2021}
console.log(newCar);


let arr1=[11,22,33]
let arr2=[...arr,...arr1]
console.log(arr2);

