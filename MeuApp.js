const songName = document.getElementById('song-Name');
const song = document.getElementById('audio');
const play = document.getElementById('play');
const bandName = document.getElementById('band-Name');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentprogress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-Container');
//const shufflebutton = document.getElementById('shuffle-button');






 let isShuffled = false;
 let isplaying = false;

const sairporai ={
   songName: 'sair por ai',
   artist: 'knust',
   file:'sair_por_ai'
}

const altamiramedo ={
   songName: 'altamira medo',
   artist: 'hiosaki,knust,pelé',
   file: 'altamira_medo'
}

const deusadoolimpo ={
   songName: 'deusa do olimpo',
   artist: 'hiosaki',
   file: 'deusa_do_olimpo'
}

const falsapaixao ={
   songName: 'falsa paixao',
   artist: 'hiosaki', 
   file: 'falsa_paixao'
};
const amanha = {
   songName: 'amanha',
   artist: 'knust',
   file: 'amanha'
}
const obraprima ={
   songName: 'obra prima',
   artist: 'ikki',
   file: 'obra_prima'
}
const originalplaylist = [falsapaixao,amanha,obraprima,deusadoolimpo,altamiramedo,sairporai];
let sortedplaylist = [...originalplaylist];
let index = 0;

function playsong(){
   play.querySelector('.bi').classList.remove('bi-play-circle-fill');
   play.querySelector('.bi').classList.add('bi-pause-circle-fill');
   song.play();
   isplaying = true;
 }

   function pausesong(){
      play.querySelector('.bi').classList.add('bi-play-circle-fill');
      play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
      song.pause();
      isplaying = false;
   }
   
function playpausedecider(){
   if(isplaying=== true){
      pausesong();
   }
   else{
      playsong();
   }
}

function iniciar(){
   cover.src = `images/${sortedplaylist[index].file}.jpeg`;
   song.src = `songs/${sortedplaylist[index].file}.mp3`;
   songName.innerText = sortedplaylist[index].songName;
   bandName.innerText = sortedplaylist[index].artist;
}
function previoussong(){
   if(index === 0){
   index = sortedplaylist.length - 1;
}
else {
   index-= 1;
}
iniciar();
playsong();
}


function nextsong(){
   if(index=== sortedplaylist.length - 1){
   index = 0;
}
else {
   index += 1;
}
iniciar();
playsong();
}

function updateprogressbar(){
   const barwidth = (song.currentTime/song.duration)*100;
   currentprogress.style.setProperty('--progress', `${barwidth}%`)
}

function jumpto(event){
   const width = progressContainer.clientWidth;
   const clickposition = event.offsetX;
   const jumptotime = (clickposition/width)*song.duration;
   song.currentTime = jumptotime;
}

function shuffleArray(preshuffleArray){
  const size = preshuffleArray.length;
  let currentindex = size - 1;
  while(currentindex > 0){
  let randomindex = Math.floor(Math.random()* size); 
  let aux = preshuffleArray[currentindex];
  preshuffleArray[currentindex] = preshuffleArray[randomindex];
  preshuffleArray[randomindex] = aux;
  currentindex -=1;
}
}


function shufflebuttonClicked(){
if (isShuffled=== false){
   isShuffled = true;
   shuffleArray(sortedplaylist);

   //shufflebutton.classList.add('button-active');
}
}
//like.addEventListener('click', likeClick => like.style.setProperty('--likes') );

document.getElementById('like-button').addEventListener('click', function() {this.classList.toggle('active')})

iniciar();

play.addEventListener('click', playpausedecider);
previous.addEventListener('click',previoussong);
next.addEventListener('click', nextsong);
song.addEventListener('timeupdate', updateprogressbar);
progressContainer.addEventListener('click', jumpto);
//function shufflebutton(){
//var shufflebutton = window.document.getElementById('shufflebutton');
//}



//<input type="button"  name="shufflebutton"  id="shufflebutton"></input>