let d= new Date();
let hour=d.getHours();
let min=d.getMinutes();
let seconds=d.getSeconds();
window.addEventListener("load",()=>{
  document.getElementById("hour").style.transform=`rotate((30*${hour})deg)`;
  document.getElementById("min").style.transform=`rotate((6*${min})deg)`;
  document.getElementById("second").style.transform=`rotate((6*${second})deg)`;
});
console.log(hour,min,seconds);
setInterval(HOUR,(12*60*60*1000));
setInterval(MIN,(60*60*1000));
setInterval(SECOND,60*1000);
function HOUR(){
    document.getElementById("hour").style.transform="rotate(360deg)";
    
}
function MIN(){
    document.getElementById("min").style.transform="rotate(360deg)";

}
function SECOND(){
    document.getElementById("second").style.transform="rotate(360deg)";

}
//document.getElementById("demo").innerHTML=JSON.stringify(d);