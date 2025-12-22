console.log("hello")
let redBtn=document.getElementById("red");
let blueBtn=document.getElementById("blue");
let blackBtn=document.getElementById("black");
let bike=document.getElementById("bike")

redBtn.addEventListener("click",()=>{
    bike.style.backgroundImage="url('img/red-removebg-preview.png')";
    bike.style.backgroundSize="700px"
    bike.style.backgroundRepeat="no-repeat"
})
blueBtn.addEventListener("click",()=>{
    bike.style.backgroundImage="url('img/blue-removebg-preview.png')";
    bike.style.backgroundSize="1000px"
    bike.style.backgroundRepeat="no-repeat"
})
blackBtn.addEventListener("click",()=>{
    bike.style.backgroundImage="url('img/black-removebg-preview.png')";
    bike.style.backgroundSize="800px"
    bike.style.backgroundRepeat="no-repeat"
})