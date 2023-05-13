x = 0;
y = 0;
screen_width = 0;
screen_height = 0;

draw_apple = "";

to_number = ""

speak_data = ""


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

to_number = Number(content);

if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started drawing apple"
  draw_apple = "set";
}

else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number"
}

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function preload(){

loadImage("apple.png");
}


function setup() {
 
screen_width = window.innerWidth;
screen_height = window.innerHeight;

canvas = createCanvas(screen_width,screen_height);
canvas.postion(0,150)


}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }

for(var i = i; i<= to_number; i++){

  x = Math.floor(Math.random()*700);
  y = Math.floor(Math.random()*400);
  Image(apple, x, y, 50, 50);
}
document.getElementById("status").innerHTML = to_number + "Apples drawn";
speak();

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";


}
