const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loading-screen");
const cakeScene = document.getElementById("cake-scene");
const main = document.getElementById("main");

const blowBtn = document.getElementById("blowBtn");
const countdown = document.getElementById("countdown");
const flame = document.querySelector(".flame");

let count = 3;

startBtn.onclick = () => {

loadingScreen.classList.add("hidden");
cakeScene.classList.remove("hidden");

const timer = setInterval(() => {

count--;

if(count > 0){

countdown.innerHTML = count;

}else{

clearInterval(timer);

countdown.innerHTML = "💨 Blow Candle";

}

},1000);

};

blowBtn.onclick = () => {

flame.style.display = "none";

cakeScene.classList.add("hidden");

main.classList.remove("hidden");

};

const photos = [
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg"
];

const bubu = [
"bubu1.jpg",
"bubu2.jpg",
"bubu3.jpg",
"bubu4.jpg",
"bubu5.jpg",
"bubu6.jpg"
];

const messages = [
"❤️ Happy Birthday Bisma ❤️",
"🌸 Tumhari smile sabse pyari hai.",
"🤲 Allah tumhe hamesha khush rakhe.",
"🩺 Dua hai tum ek kamyab doctor bano.",
"💖 Tum hamesha muskuraati raho.",
"🤝 Ye surprise sirf tumhare liye hai."
];

let current = 0;

const photo = document.getElementById("photo");
const bubuImg = document.getElementById("bubu");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

text.innerHTML = messages[0];

nextBtn.onclick = () => {

current++;

if(current >= photos.length){
current = 0;
}

photo.src = photos[current];
bubuImg.src = bubu[current];
text.innerHTML = messages[current];

};

const heartBox = document.getElementById("hearts");
const flowerBox = document.getElementById("flowers");

function createHeart(){

let heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️❤️❤️❤️❤️";

heart.style.left = Math.random()*90 + "%";
heart.style.animationDuration = (3 + Math.random()*3) + "s";

heartBox.appendChild(heart);


setTimeout(()=>{

heart.remove();

},6000);

}


function createFlower(){

let flower = document.createElement("div");

flower.className = "flower";

flower.innerHTML = "🌸";

flower.style.left = Math.random()*90 + "%";
flower.style.animationDuration = (4 + Math.random()*3) + "s";

flowerBox.appendChild(flower);


setTimeout(()=>{

flower.remove();

},7000);

}


setInterval(createHeart,800);

setInterval(createFlower,1200);


// Music start

const song = new Audio("palpal.mp3");
song.loop = true;

startBtn.addEventListener("click",()=>{

song.play().catch(()=>{});

});


// Questions

let questions = [

"Kya tum hamesha smile karogi? ❤️",

"Kya tum apne doctor banne ka sapna pura karogi? 🩺",

"Kya tum mujhe kabhi bhoologi nahi? 🤝",

"Kya tum hamesha khush rahogi? 🌸"

];


let qIndex = 0;


function showQuestion(){

if(qIndex < questions.length){

alert(questions[qIndex]);

qIndex++;

}

else{

alert("❤️ Promise ho gaya. Hamesha khush rehna Bisma ❤️");

}

}
// Final surprise message

function finalSurprise(){

alert(
"❤️ Promise ho gaya Bisma ❤️\n\n" +
"🤲 Allah tumhe hamesha khush rakhe.\n\n" +
"🩺 Dua hai tum doctor bano aur apne saare sapne pure karo.\n\n" +
"🌸 Hamesha smile karti rehna."
);

}


// Extra sparkle animation

function sparkle(){

let star = document.createElement("div");

star.innerHTML = "✨";

star.style.position="fixed";
star.style.left=Math.random()*100+"%";
star.style.top="0px";
star.style.fontSize="25px";
star.style.animation="fall 4s linear";

document.body.appendChild(star);


setTimeout(()=>{

star.remove();

},4000);

}


setInterval(sparkle,1500);

// Bisma memory video setup

const memoryVideo = document.createElement("video");

memoryVideo.src = "video1.mp4";
memoryVideo.controls = true;
memoryVideo.style.width = "90%";
memoryVideo.style.maxWidth = "400px";
memoryVideo.style.borderRadius = "20px";


function showVideo(){

document.getElementById("main").appendChild(memoryVideo);

}
