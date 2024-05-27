const randomColor=function(){
    const hex="0123456789abcdef";
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(math.random()*16)]
    }
    return color;
};
let intervalId;
const startChangingcolor=function(){
    if(!intervalId){
        intervalId=setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChangeColor=function(){
    clearInterval(intervalId);
    intervalId=null;
}
 document.getElementById('start').addEventListener('click',startChangingcolor);

 document.getElementById('stop').addEventListener('click',stopChangeColor);