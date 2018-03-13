var index;
//var mic;
//var myVoice;
var locationData;

function preload() {
  //soundFormats('mp3', 'ogg');
  //ssss = loadSound('http://localhost:8000/assets/ssss.mp3');
  //tremendous_velocity = loadSound('http://localhost:8000/assets/tremendous_velocity.mp3')
  //tktk = loadSound('http://localhost:8000/assets/tktk.mp3')
  locationData =  getCurrentPosition();
  //myVoice = new p5.Speech();
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("futura", 10);

  if(geoCheck() == true){
    //geolocation is available
  }else{
    text("to use this tool, please enable Location Services in your device's settings")//error getting geolocaion
  }

  index = 0;

  print(locationData.latitude)
  print(locationData.longitude)
  print(locationData.accuracy)
  print(locationData.altitude)
  print(locationData.altitudeAccuracy)
  print(locationData.heading)
  print(locationData.speed)
  //FFT = new p5.FFT();
  //ssss.setVolume(0.3);
  //tremendous_velocity.setVolume(0.3);
  //tktk.setVolume(0.5);
  //mic = new p5.AudioIn();
  //mic.start();
  //FFT.setInput(mic);
  //ssss.playMode('untilDone');
  //tremendous_velocity.playMode('untilDone');
  //tktk.playMode('untilDone');
  //var myRec = new p5.SpeechRec();
  }

function draw() {

  fill(255);
  translate(windowWidth/2, windowHeight/2);
  textAlign(CENTER);
  
  
}
  //myVoice.setPitch(1.6);
  //myVoice.setRate(0.7);
  //myVoice.setVolume(0.5);
  //var mic_level = mic.getLevel();
  //var spectrum = FFT.analyze()
  //var bass_energy = FFT.getEnergy("bass")
  //var mid_energy = FFT.getEnergy("mid")
  //var hi_energy = FFT.getEnergy("highMid")
  //var filter = 
  //var waveform = FFT.waveform()


  //text() takes 3 arguments: what text, where on x-axis, and where on y-axis
  //text(mirrorSplit[index], random(-500, 500), random(-500,500));
	//drawCount = drawCount + 1;

//*FREQUENCY CONTROLLED PLAYBACK*//
  /*if (bass_energy > 90){
      //tktk.play();
     myVoice.speak(mirrorSplit[index])
      index++;
     }
   if (mid_energy > 10){
      tremendous_velocity.play();
     index++;
     }
   if (hi_energy > 10) {
      ssss.play();
    index++; 
    }

  if(index >= mirrorSplit.length) {
    index = 0;
    }
  }*/

/*function showResult() {
  if(myRec.resultValue==true) {
    background(192, 255, 192);
    text(myRec.resultString, width/2, height/2);
    console.log(myRec.resultString);
    }
  }*/
//}