var myBody = document.getElementsByTagName("body");

// function vidLoad(){
//     vid1.hide()
// }

function success() {
    myBody[0].style.backgroundColor = "#0000FF";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
    loss_no_3 = loadSound('assets/home_no_3_degradex2.mp3', success);
    original_no_3 = loadSound('assets/pinetrail.mp3');
};

var text_area;
var content_home2;
var compassHeading;
var filterFreq;
var timer;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    loss_no_3.setVolume(1.0);
    loss_no_3.playMode('untilDone');
    content_home3 = [""];
    text_area = document.getElementById("compass_content");
    i = .001;
    filterFreq = 100;
    filter = new p5.BandPass();
    loss_no_3.disconnect();
    loss_no_3.connect(filter);
    filter.amp(1.0, 5, 0)
    timer = 1;

  
window.addEventListener('deviceorientation', function(e) {
    var alpha = e.alpha;
        if(e.webkitCompassHeading){
            compassHeading = e.webkitCompassHeading;
        } else compassHeading = 360 - alpha;
    });
};

function playbaqq() {
    var freq = filterFreq;
        filter.freq(freq);
        filter.res(i);
        loss_no_3.play();
}
       
function draw(){
    timer ++;
    var timeinseconds = timer/60
    console.log(timeinseconds);

    if (filterFreq <= 10000){
        filterFreq = filterFreq + 1.6;
    } else {filterFreq = 100
    };

    if (timeinseconds == 180){
        if (i <= 1000){
            i = i + 1;
        } else {i = .001;
        };
    }

    playbaqq();


    // if(compassHeading >= 90 && compasHeading <=180){
    // };

// if(compassHeading >= 25 && compassHeading < 35){
//             if(forNorth.isPlaying() == true){
//             forNorth.pause();
//             };
//             if(forWest.isPlaying() == true){
//             forWest.stop();
//             };
//         if (mouseIsPressed){
//         text_area.innerHTML = auxText[2];
//         image(jpg03, 20, 10, 700, 394);
//         } else {
//         text_area.innerHTML = " ";
//         fill(0, 0, 255);
//         noStroke();
//         rect(19, 9, 701, 395);
//         }; 
// };
//  //East by degrees - prose  
// if(compassHeading >= 35 && compassHeading < 45){  
//     if(forNorth.isPlaying() == true){
//             forNorth.pause();
//     };
//     if(forWest.isPlaying() == true){
//             forWest.pause();
//     };
//     if (mouseIsPressed){
//         text_area.innerHTML = auxText[0];
//         image(jpg01, 20, 10, 700, 394);
//         } else {
//         text_area.innerHTML =" ";
//         fill(0, 0, 255);
//         noStroke();
//         rect(19, 9, 701, 395);
//     };
// };
// if(compassHeading >= 45 && compassHeading < 55){
//     if (mouseIsPressed){
//         text_area.innerHTML = auxText[1];
//         image(jpg02, 20, 10, 700, 394);
//         } else {
//         text_area.innerHTML = " ";
//         fill(0, 0, 255);
//         noStroke();
//         rect(19, 9, 701, 395);
//         };
// };
// if(compassHeading >= 55 && compassHeading < 65){
//     if (mouseIsPressed){
//         text_area.innerHTML = auxText[3];
//         image(jpg04, 20, 10, 700, 394);
//         } else {
//         text_area.innerHTML = " ";
//         fill(0, 0, 255);
//         noStroke();
//         rect(19, 9, 701, 395);
//         };
// };
//     // if(compassHeading >= 65 && compassHeading < 75) {
//     //           text_area.innerHTML = content_home5[0];  
//    // };
//     if(compassHeading >= 75 && compassHeading < 85) {
//               text_area.innerHTML = content_home5[0];  
//     };
//     if(compassHeading >= 85 && compassHeading < 95) {
//               text_area.innerHTML = content_home5[1];  
//     };
//     if(compassHeading >= 95 && compassHeading < 105) {
//               text_area.innerHTML = content_home5[2];  
//     };
//     if(compassHeading >= 105 && compassHeading < 115) {
//         text_area.innerHTML = content_home5[3];
//     };
//     if(compassHeading >= 115 && compassHeading < 125) {
//         text_area.innerHTML = content_home5[4];
//     };
// //South poem by degrees
//     if(compassHeading >= 125 && compassHeading < 135) {
//         text_area.innerHTML = content_home5[5];    
//     };
//     if(compassHeading >= 135 && compassHeading < 145) {
//         text_area.innerHTML = content_home5[6];
//     };
//     if(compassHeading >= 145 && compassHeading < 155) {
//         text_area.innerHTML = content_home5[7];
//     };
//     if(compassHeading >= 155 && compassHeading < 165) {
//         text_area.innerHTML = content_home5[8];
//         if(forWest.isPlaying() == true){
//             forWest.stop();
//         };
//         if(forNorth.isPlaying() == true){
//             forNorth.pause();
//         }; 
//     };

// //West forWest.mp3(2minutes)
//     if(compassHeading >= 235 && compassHeading < 335) {
//         forWest.play();
//         filterFreq++;
//         if(filterFreq % 60 == 0){
//             i++;
//         }
//         if(i >= forWest.duration()){
//             forWest.stop();
//         }
//     if (mouseIsPressed){
//         text_area.innerHTML = auxText[4];
//         image(jpg04, 20, 10, 700, 394);
//         } else {
//         text_area.innerHTML = " ";
//         fill(0, 0, 255);
//         noStroke();
//         rect(19, 9, 701, 395);
//         };
//         if(forNorth.isPlaying() == true){
//             forNorth.pause();
//         };
//     };
};

