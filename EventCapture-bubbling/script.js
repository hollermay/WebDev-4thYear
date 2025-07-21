
// event bubbling- when execution happens bottom to top(that element outwards)
// event capture- to reverse the behaviour (top to that element)

let grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click",()=>{
    console.log("grandparent clicked");
})

let parent = document.getElementById("parent");
parent.addEventListener("click",(event)=>{
    console.log("parent clicked");
    event.stopPropagation();
})
let child = document.getElementById("child");
child.addEventListener("click",(event)=>{
    console.log("child clicked");
    event.stopPropagation();
})

