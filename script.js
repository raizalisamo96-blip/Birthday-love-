const screens = document.querySelectorAll(".screen");

function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

const startBtn = document.getElementById("startBtn");
const countText = document.getElementById("countText");

startBtn.onclick = ()=>{

showScreen("countdownScreen");

let count = 3;

countText.innerHTML = count;

let timer = setInterval(()=>{

count--;

if(count>0){

countText.innerHTML = count;

}else{

clearInterval(timer);

showScreen("cakeScreen");

}

},1000);

};
const blowBtn = document.getElementById("blowBtn");
const flame = document.querySelector(".flame");

const song = new Audio("palpal.mp3");
song.loop = true;

blowBtn.onclick = ()=>{

if(flame){

flame.style.display = "none";

}

song.play().catch(()=>{});

setTimeout(()=>{

showScreen("storyScreen");

},1200);

};
const photos=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg"
];

const texts=[
"❤️ Happy Birthday Bisma ❤️",
"🌸 Tumhari smile meri favourite cheez hai.",
"🤲 Allah tumhe hamesha khush rakhe.",
"🩺 Dua hai tum ek kamyab doctor bano.",
"💖 Hamesha aise hi muskuraati rehna.",
"🤍 Tum bahut special ho."
];

let current=0;

const photo=document.getElementById("bismaPhoto");
const story=document.getElementById("storyText");
const nextBtn=document.getElementById("nextStoryBtn");

nextBtn.onclick=()=>{

current++;

if(current<photos.length){

photo.src=photos[current];
story.innerHTML=texts[current];

}else{

showScreen("videoScreen");

}

};
const videoNextBtn=document.getElementById("videoNextBtn");

videoNextBtn.onclick=()=>{

showScreen("questionScreen");

};

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

yesBtn.onclick=()=>{

showScreen("promiseScreen");

};

noBtn.onclick=()=>{

noBtn.style.position="absolute";
noBtn.style.left=Math.random()*250+"px";
noBtn.style.top=Math.random()*350+"px";

};
const finalBtn=document.getElementById("finalBtn");

finalBtn.onclick=()=>{

showScreen("finalScreen");

createFireworks();

};

function createFireworks(){

for(let i=0;i<40;i++){

let spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";
spark.style.left=Math.random()*100+"%";
spark.style.top=Math.random()*100+"%";
spark.style.fontSize=(15+Math.random()*20)+"px";
spark.style.pointerEvents="none";
spark.style.transition="all 2s ease";

document.body.appendChild(spark);

setTimeout(()=>{

spark.style.opacity="0";
spark.style.transform="scale(2)";

},100);

setTimeout(()=>{

spark.remove();

},2000);

}

}
