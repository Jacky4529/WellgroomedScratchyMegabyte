

function ChangeColor(){
  
document.getElementById("changeColor").style.color = genRandomColor();
  
  //document.getElementById("changeColor").style.color = genRandomColor();
  //document.getElementById("changeColor").style.backgroundColor = genRandomColor();
  //document.getElementById("btnColor").style.color = genRandomColor();
  //document.getElementById("btnColor").style.backgroundColor = genRandomColor();
  
document.body.style.backgroundColor=genRandomColor();
}

let newColor = []
let colors = []



function genRandomColor(){
  let r=0,g=0,b=0;
  r=Math.round(Math.random()*255);
  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);
  //console.log("rgb("+r+","+g+","+b+")")
  //console.log(r,g,b)
  document.getElementById("bkc").innerText= "Background color code: "+r+", "+g+", "+b+"";
  newColor= r + " " + g + " " + b 
  colors[colors.length]= newColor
    return "rgb("+r+","+g+","+b+")";
  
}

