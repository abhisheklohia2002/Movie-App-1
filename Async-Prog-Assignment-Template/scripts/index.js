var arr = ["https://wallpapercave.com/wp/wp5296285.jpg","https://wallpapercave.com/uwp/uwp2051115.jpeg","https://wallpapercave.com/dwp1x/wp1832228.jpg","https://wallpapercave.com/uwp/uwp2150859.jpeg","https://wallpapercave.com/uwp/uwp1827086.jpeg"];


document.querySelector("#btn1").addEventListener("click",runprogram);
let counter;
function runprogram(){ 
 let i= 0;

 var tag = document.getElementById("slideshow");
   counter = setInterval(function(){
       tag.innerHTML = null;
    
     
     var tag_img = document.createElement("img");
     tag_img.setAttribute("id","animation")
   tag_img.src = arr[i]
 console.log(tag_img)
tag.append(tag_img);

console.log("i:",i)
i++;

if(i == arr.length){
    i = 0;

}

    },2000)
}

document.getElementById("btn2").addEventListener("click",pause);


function pause(){
    clearInterval(counter);

}