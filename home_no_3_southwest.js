var myBody = document.getElementsByTagName("body");

function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
    pineTrail = loadSound('assets/home_no_3.mp3', success);
    threeZero = loadSound('assets/0three-zero.mp3', success);
    threeOne = loadSound('assets/0three-one.mp3', success);
    threeThree = loadSound('assets/0three-three.mp3', success);
    threeFive = loadSound('assets/0three-five.mp3', success);
    threeEight = loadSound('assets/0three-eight.mp3', success);
    threeNine = loadSound('assets/0three-nine.mp3', success);
};

var text_area;
var content_home3;
var compassHeading;
var filterFreq;
var timer;
// var mic;
// var recorder;
// var soundFile;
// var state;
// var contentIndex;
// var printedText;
// var textTimer;
// var threeTwo;
// var threeThree;
// var threeFour;
// var contentSplit;
// var splitTimer;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    pineTrail.setVolume(1.0);
    pineTrail.playMode('untilDone');
    threeZero.setVolume(1.0);
    threeZero.playMode('untilDone');
    threeOne.setVolume(1.0);
    threeOne.playMode('untilDone');
    threeThree.setVolume(1.0);
    threeThree.playMode('untilDone');
    threeFive.setVolume(1.0);
    threeFive.playMode('untilDone');
    threeEight.setVolume(1.0);
    threeEight.playMode('untilDone');
    threeNine.setVolume(1.0);
    threeNine.playMode('untilDone');
    content_home3 = ["3.0 three", "3.1 Deciduous trees, vines and undergrowth \n cascade down the hill behind", "3.2 fourteen meshed windows \n that fall out of unpainted clapboard: \n two rooms on bottom and two on top. \n Rain drips louder than distant trucks passing", "3.3 who slice the landscape perpendicular", "3.4 to water systems’ homely stasis: (up, down).", "3.5 Bowed wooden exterior shrugs damply into earth.", "3.6 Mutely, it suggests \n a dozen daughters or sons, sleeves rolled, \n braiding hair and, in summer shade, \n shoveling (this was when", "3.7 wealth came from below.)\n It took one hundred passes \n for me to see the home. \n Walking here my head is usually down, \n searching for shiny stones.", "3.8  Quartz rock is abundant here: \n left behind by waters that bore it, left,", "3.9 upstream, northwest."];

    text_area = document.getElementById("compass_content");

    i = .001;
    filterFreq = 100;
    filter = new p5.BandPass();
    pineTrail.disconnect();
    pineTrail.connect(filter);
    filter.amp(1.0, 20, 0)

    timer = 0;
    textFont("courier", 25);

// //recording setup
//     state = 0;
//     mic = new p5.AudioIn();
//     mic.start();
//     recorder = new p5.SoundRecorder();
//     recorder.setInput(mic);
//     soundFile = new p5.SoundFile();
  
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
        if(threeZero.isPlaying() == true){
             threeZero.pause();
             };
        if(threeOne.isPlaying() == true){
             threeOne.pause();
             };
        if(threeFive.isPlaying() == true){
             threeFive.pause();
             };
        text_area.innerHTML = "";
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        if (timeinseconds >= pineTrail.duration()){
        pineTrail.stop();
    };
    };
// function stopR(){
//     recorder.stop();
//     saveSound(soundFile,'rec1.wav');
// }

       
function draw(){
// //recorder
//     function mouseIsPressed() {
//         if (state === 0 && mic.enabled) {
//             if (pineTrail.isPlaying() == true){
//                 pineTrail.pause();
//             }
//             recorder.record(soundFile, 5, stopR());
//             state++;
//         } 
//         };

//blue floor
    fill(0,0,255);
    noStroke();
    rect(0, 800, windowWidth, 500);

//counters
    timer ++;
    var timeinseconds = timer/60


    if (filterFreq <= 10000){
        filterFreq = filterFreq + 1.6;
    } else {filterFreq = filterFreq - 1.6
    };

    if (timeinseconds == 180){
        if (i <= 1000){
            i++;
        } else {i = i - 1;
        };
    };
//format text
    textAlign(RIGHT);

 //text and sound triggers   
    if(compassHeading >= 355 || compassHeading <=5){
        //text_area.innerHTML = content_home3[0];
        fill(255);
        background(0);
        text(content_home3[0], windowWidth/2, windowHeight/4);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeZero.play();
            if (timeinseconds >= threeZero.duration()){
                threeZero.stop();
     };
        };
    };

    if(compassHeading >= 5 && compassHeading <=31){
        playbaqq();
        pineTrail.play();  
    };

    if(compassHeading >= 31 && compassHeading <=41){
        fill(255);
        background(0);
        text(content_home3[1], windowWidth/2, windowHeight/4);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        //text_area.innerHTML = content_home3[1];
        //vocal.play();
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeOne.play();
            if (timeinseconds >= threeOne.duration()){
                threeOne.stop();
            };
        }
    };

    if(compassHeading >= 41 && compassHeading <=67){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >= 67 && compassHeading <=77){
        fill(255);
        background(0);
        text(content_home3[2], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[2];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
        }
    };

    if(compassHeading >= 77 && compassHeading <=103){
        playbaqq();
        pineTrail.play();  
    };

    if(compassHeading >= 103 && compassHeading <=113){
        fill(255);
        background(0);
        text(content_home3[3], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[3];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeThree.play();
        if (timeinseconds >= threeThree.duration()){
         threeThree.stop();
        };
        }
    };

    if(compassHeading >= 113 && compassHeading <=139){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >= 139 && compassHeading <=149){
        fill(255);
        background(0);
        text(content_home3[4], windowWidth/2, windowHeight/4);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        //text_area.innerHTML = content_home3[4];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
        }
    };

    if(compassHeading >= 149 && compassHeading <=175){
        playbaqq();  
        pineTrail.play();
    };

    if(compassHeading >= 175 && compassHeading <=185){
        fill(255);
        background(0);
        text(content_home3[5], windowWidth/2, windowHeight/4);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        //text_area.innerHTML = content_home3[4];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeFive.play();
            if (timeinseconds >= threeFive.duration()){
            threeFive.stop();
            };
        }
    };

    if(compassHeading >= 185 && compassHeading <=211){
        playbaqq();  
        pineTrail.play();
    };

    if(compassHeading >= 211 && compassHeading <=221){
        fill(255);
        background(0);
        text(content_home3[6], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[5];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
        }
    };

    if(compassHeading >= 221 && compassHeading <=247){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >= 247 && compassHeading <=257){
        fill(255);
        background(0);
        text(content_home3[7], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[6];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
        };
    };

    if(compassHeading >= 257 && compassHeading <=283){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >= 283 && compassHeading <=288){
        fill(255);
        background(0);
        text(content_home3[8], windowWidth/2, windowHeight/4);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        //text_area.innerHTML = content_home3[7];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeEight.play();
            if (timeinseconds >= threeEight.duration()){
            threeEight.stop();
            };
            };
    };

    if(compassHeading >= 288 && compassHeading <=319){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >=319 && compassHeading <=329){
        fill(255);
        background(0);
        text(content_home3[9], windowWidth/2, windowHeight/4);
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
        //text_area.innerHTML = content_home3[8];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeNine.play();
            if (timeinseconds >= threeNine.duration()){
            threeNine.stop();
            };
            };
    };

};

