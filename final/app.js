let inputIn_bio = document.getElementById("bio");
let inputIn_kh = document.getElementById("kh");
let inputIn_wh = document.getElementById("wh");
let inputIn_ch = document.getElementById("ch");
let inputIn_geo = document.getElementById("geo");
let inputIn_eng = document.getElementById("eng");
let button = document.getElementById("btn")
let div = document.querySelector(".out");


let submit = document.getElementById('.sub');
let out1 = document.getElementById('.submit');
button.onclick = function(){

    out1.innerHTML = "Thank you";
}

button.onclick = function(){
 let bio = inputIn_bio.value;
 let kh = inputIn_kh.value;
 let wh = inputIn_wh.value;
 let ch = inputIn_ch.value;
 let geo = inputIn_geo.value;
 let eng = inputIn_eng.value;
 
let fbio = bio * 590;
let fkh = kh * 990;
let fwh = wh * 790;
let fch = ch * 690;
let fgeo = geo * 590;
let feng = eng * 890;
let final =  fbio + fkh + fwh + fch + fgeo + feng
div.innerHTML ="These items will cost: " + final;

}

   