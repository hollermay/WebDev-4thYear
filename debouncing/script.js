// Event debouncing - to delay the execution of a function - to optimize the no. of calls to backend/server
// It is widely used in search bars across all the applications

    let timer;
    const inp=document.getElementById("searchInput");
    inp.addEventListener("input",(e)=>{
        clearTimeout(timer);
        timer= setTimeout(()=>{
            console.log("input entered :", e.target.value);
        },2000);

    })



