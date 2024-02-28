let count=0;
let countadd = document.getElementById("countinc")
function add(){
    count+=1
    countadd.innerText = count
}

function minus(){
    count-=1
    countadd.innerText = count
}
function savebtn(){
    let parach=document.getElementById("para")
    parach.textContent += count + "- "
    count = 0
    countadd.textContent = count
}