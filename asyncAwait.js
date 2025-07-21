
// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise 1");
//         resolve("success");
//     },2000);
// })


// Promise chaining

// promise1.then((res)=>{
//     console.log(res);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("pr 2");
//         resolve("success");
//     },3000)}) ;
// }).then(()=>{
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//         console.log("pr 3");
//         resolve("success");
//     },1000)});
// })


// const promise1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise 1");
//         resolve("success");
//     },4000);
// })

// const promise2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise 2");
//         reject("error");
//     },4000);
// })
// const promise3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise 3");
//         resolve("success");
//     },4000);
// })
// const promise4= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("promise 4");
//         resolve("success");
//     },4000);
// })


// Promise.all([promise1,promise2,promise3,promise4]);
// Promise.allSettled([promise1,promise2,promise3,promise4]);
// Promise.race([promise1,promise2,promise3,promise4]);
// Promise.any([promise1,promise2,promise3,promise4]);



// async await - to execute a series of asynchronous tasks in sequential order in a simpler way
// async - keyword is used in js to make a function asynchronous. 
// await - used before an asynchronous operation that returns a promise and blocks the further execution of code until prmise is resolved/
// aysnc operation completes.


async function apiData()
{
    const data= await fetch("https://dummyjson.com/users");
    const resp=await data.json();
    console.log(resp);
}
apiData();
