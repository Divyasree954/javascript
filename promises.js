const promise=new Promise((Resolve,reject)=>{
    let success=false
    if(success){
        Resolve("data resolved successfully")
    }
    else{
        reject("data rejected")
    }
})
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))

    //async await
    async function fetchData() {
        try{
            const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await res.json()
            data.map((user)=>console.log(user.email))
            data.map((user)=>console.log(user.address.city))
            // console.log(data)
        }catch(error){
            console.log(error)
        }
    }
fetchData()