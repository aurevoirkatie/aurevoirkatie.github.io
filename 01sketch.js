var index;
var locationData;

/*function preload() {
  locationData =  getCurrentPosition();
  }*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("futura", 10);

  getCurrentPosition(doThisOnLocation)
  if(geoCheck() == true){
    print("hi (:")
  }else{
    text("to use this tool, please enable Location Services in your device's settings")//error getting geolocaion
  }

  index = 0;
}
/*
  print(locationData.latitude)
  print(locationData.longitude)
  print(locationData.accuracy)
  print(locationData.altitude)
  print(locationData.altitudeAccuracy)
  print(locationData.heading)
  print(locationData.speed)
  }*/

function draw() {
  fill(255);
  translate(windowWidth/2, windowHeight/2);
  textAlign(CENTER);
  function doThisOnLocation(position){
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
}
}
