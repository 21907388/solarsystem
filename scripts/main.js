
const cal=document.querySelector("button");
const data=document.querySelector(".loader");
const out=document.getElementById("result");
const loader=document.getElementById("loader");
const nom=document.getElementById("name");
const surname=document.getElementById("surname");
const output=document.getElementById("last");
const image=document.getElementById("img");
const footer=document.getElementById("footer");
const foot=document.getElementById("image");
const header=document.getElementById("header");


let nameText=nom.value;
let surnameText=surname.value;

let pictures=["friend","images","joy","money","promotion","success","surprise","thinking","travel","wedding"];
let texts=["You will meet someone who will become a very good friend",
"You will meet the love of your life", "You will experiment joy beyond measure",
"You will touch a lot of money","You will be promoted to a different position",
"You will succeed in everything you will do","You will be surprised more than you expect",
"You will find answers to your hardest questions in life","You will travel the world",
"You will get married"];

loader.style.display="none";
foot.style.display="none";
footer.style.display="none";
let x = Math.floor((Math.random() * 10) + 1);
cal.addEventListener('click', ()=> {
    output.innerHTML="";
    foot.style.display="none";
    footer.style.display="none";
if( (nom.value== "") && (surname.value == "") ){
    output.innerHTML="Please enter your name and surname properly !";
    output.style.color="white";
    
}
else{

    output.style.display="none";
     header.style.display="none";
    loader.style.display="block";
    function showPage() {
        loader.style.display="none";
       foot.style.display="block";
       image.src=`images/${pictures[x-1]}.jpg`;
       footer.style.color="white";
       footer.innerHTML="Dear "+nom.value+" "+surname.value+", in 2023 <br>"+texts[x-1];
       footer.style.display="block";
       
       }
     
      setTimeout(showPage, 3000);
    

    }


})
