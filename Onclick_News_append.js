import { navbar } from "./components/navbar.js";
let navbar_div_rrb =  document.getElementById("navbar_rrb");
navbar_div_rrb.innerHTML = navbar();

import {footer} from "./components/footer.js"
let footer_div=document.getElementById("footer_rj");
footer_div.innerHTML=footer();


let data_div = document.getElementById("container_rrb");
data_div.innerHTML = null;

let storedData = JSON.parse(localStorage.getItem("news_rrb"));
console.log(storedData);

let box = document.createElement("div");
box.class = "news";
    
let img = document.createElement("img");
img.src = storedData.urlToImage;
    
let h = document.createElement("h1");
h.innerText = storedData.title;

let  des = document.createElement("h4");
des.innerText = storedData.description;
    
let  p = document.createElement("p");
p.innerText = storedData.content;
    
box.append(h,des,img,p);
data_div.append(box);

const homePage_logo = document.getElementById('homePage_logo');
homePage_logo.addEventListener("click",homepage)
homePage_logo.style.cursor="pointer";

function homepage (){
window.location.href="index.html"
}
