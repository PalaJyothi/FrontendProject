var divlenght = document.querySelectorAll('.song').length;
console.log(divlenght);

for(var i=0; i<divlenght; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);

 var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = "file:///C:/Users/jyothi/Downloads/dynamite.mp3";

var song2 = new Audio();
song2.src = "file:///C:/Users/jyothi/Downloads/wings.mp3";

var song3 = new Audio();
song3.src = "file:///C:/Users/jyothi/Downloads/fakelove.mp3";

var song4 = new Audio();
song4.src = "file:///C:/Users/jyothi/Downloads/boywithlove.mp3";

var song5 = new Audio();
song5.src = "file:///C:/Users/jyothi/Downloads/springday.mp3";

var song6 = new Audio();
song6.src = "file:///C:/Users/jyothi/Downloads/micdrop.mp3";

var song7 = new Audio();
song7.src = "file:///C:/Users/jyothi/Downloads/on.mp3";

var song8 = new Audio();
song8.src = "file:///C:/Users/jyothi/Downloads/dna.mp3";


function playsong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "Dynamite":
   song1.play();
   break;

  case "Blood Sweat and Tears":
   song2.play();
   break;

  case "Fake Love":
   song3.play();
   break;

  case "Boy with Love":
   song4.play();
   break;

  case "Spring Day":
   song5.play();
   break;

  case "Mic Drop":
   song6.play();
   break;

  case "ON":
   song7.play();
   break;

  case "DNA":
   song8.play();
   break;

  

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "Dynamite":
   song1.pause();
   break;

  case "Blood Sweat and Tears":
   song2.pause();
   break;

  case "Fake Love":
   song3.pause();
   break;

  case "Boy with Love":
   song4.pause();
   break;

  case "Spring Day":
   song5.pause();
   break;

  case "Mic Drop":
   song6.pause();
   break;

  case "ON":
   song7.pause();
   break;

  case "DNA":
   song8.pause();
   break;

 

  default:
   console.log("wrong input");
   break;
 }
}
