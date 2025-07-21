// Promises are objects in js that has one of three states - pending, resolved or rejected. They're generally used to get result from APIs 
// They're generally used to resolve the problem of callback hell/ pyramid of doom


// let promise1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data 1");
//         resolve("success");
//     },2000);
// })
// console.log(promise1);



// Promise handling - .then() gets executed after the promise gets resolved/fulfilled.
// .catch() is executed if the promise gets rejected


function menuDisplay(cb)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("menu served !");
        resolve("success");
         if(cb)
            cb();
    },2000);
    })
}

function orderPlace(cb)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("order placed !");
        resolve("success");
         if(cb)
            cb();
    },2000);
    })
}
function orderServe(cb)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("order served !");
        resolve("success");
         if(cb)
            cb();
    },3000);
    })
}
function billPay(cb)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("bill paid !");
        resolve("success");
         if(cb)
            cb();
    },2000);
    })
}
function exit(cb)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("exit !");
        resolve("success");
        if(cb)
            cb();
    },2000);
    })
}
console.log("Serving menu...");



// Promise chaining - nesting of promises one after other.
menuDisplay().then(()=>{
    console.log("placing order...");
    return orderPlace();
}).
then(()=>{
    console.log("serving order...");
    return orderServe();
}).then(()=>{
    console.log("paying bill...");
    return billPay;
}).then(()=>{
    return exit();
}).then((res)=>{
    console.log(res);
})

