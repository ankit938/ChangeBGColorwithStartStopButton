// const randomColor=function(){
//   const hex="0123456789abcdef";
//   let colors='#';
//   for(let i=0;i<6;i++){
//       colors+=hex[Math.floor(math.random()*16)]
//   }
//   return colors;
// };
 var i = 0;
 var x;
function change() {
   var doc = document.getElementById("background");
   var color = ["black", "blue", "brown", "green","yellow","red","aqua","magenta"];
   const colors = [];
  // for (let i = 0; i < 10; i++) {
  //    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  //    colors.push(randomColor);
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
   }
   //console.log(colors);
   
  //}
  // for(let i=0;i<color.length;i++){
   
   //}
 
 





 
//  doc.style.backgroundColor = color[i];
//const x=setTimeout(change,1000);
// doc.addEventListener('click',function(event){
//   const start=document.getElementById("start");
//   const stop=document.getElementById("stop");
     
// });
// var doc = document.getElementById("background");
// function change(){
//   doc.style.backgroundColor=randomColor;
// }
function start(){
  x=setInterval(change, 1000);
}

function stop(){
  clearInterval(x);
 }