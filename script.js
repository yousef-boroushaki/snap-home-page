
const  hamNav = document.querySelector(".fa-bars");
const  mobileNav = document.querySelector(".nav-mobile");
const closeNav = document.querySelector(".close-mobile-nav");
const angleUp = document.querySelector(".fa-angle-up");
const angleDown = document.querySelector(".fa-angle-down");
const mobileNavDownload = document.querySelector("#app-snap-download");
const inputClear = document.querySelector(".fa-window-close");
const dot = document.querySelector(".dot");

let container = document.querySelector(".container");
let joinWeb = document.querySelector(".join-web-app");
let btnMobile = document.querySelector(".btn-mobile");
let closeMobile = document.querySelector(".close-mobile-btn");
let inputErsal = document.querySelector(".ersal-input");


inputClear.style.display = "none";
var inputHolder = inputErsal.placeholder;

inputErsal.addEventListener("keydown", ()=>{
    inputClear.style.display = "flex";
    dot.style.opacity = "0";
})

inputClear.addEventListener("click", function(){
    dot.style.opacity = "1";
    inputClear.style.display = "none";
});

inputErsal.addEventListener("blur", ()=>{
    inputErsal.placeholder = "6789****09";
    dot.style.opacity = "1";
    inputClear.style.display = "none";
})

hamNav.addEventListener("click", ()=> {
    mobileNav.style.display = "block";   
    hamNav.style.display = "none";   
    closeNav.style.display = "block";       
})


closeNav.addEventListener("click" , ()=> {
    mobileNav.style.display = "none";
    closeNav.style.display = "none";
    var wid = document.body.offsetWidth;
    
    if( wid > "840")
        hamNav.style.display = "none"; 
    else if( wid <= "840")
        hamNav.style.display = "block"; 
})

angleUp.style.display = "none";
mobileNavDownload.style.display = "none";

angleUp.addEventListener("click" , ()=>{
    angleDown.style.display = "block";
    angleUp.style.display = "none";
    mobileNavDownload.style.display = "none";
})

angleDown.addEventListener("click" , ()=>{
    angleDown.style.display = "none";
    angleUp.style.display = "block";
    mobileNavDownload.style.display = "block";    
})





joinWeb.addEventListener("click" , ()=> {
    btnMobile.style.display = "block";
    document.body.style.opacity = "0.8";
    btnMobile.style.transition = "all 3s ease-in-out";
})

closeMobile.addEventListener("click" , ()=> {
    btnMobile.style.display = "none";
    document.body.style.opacity = "1";
})

