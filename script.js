
let count=0;


document.getElementById("green").addEventListener("click",()=>{
count++;
document.getElementById("count").textContent =`count= ${count}`;
document.getElementById("count").style.color =" rgb(0, 255, 0)";
}
);
document.getElementById("red").addEventListener("click",()=>{
count--;
document.getElementById("count").textContent =`count= ${count}`;
document.getElementById("count").style.color =" rgb(255, 0, 0)";
}
);
document.getElementById("grey").addEventListener("click",()=>{
 count=0;
 document.getElementById("count").textContent = `count= ${count}`;
 document.getElementById("count").style.color = "rgb(90, 83, 83)";
}
)
