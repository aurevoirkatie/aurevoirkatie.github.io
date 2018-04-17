var myBody = document.getElementsByTagName("body");

function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
    loss_no_3 = loadSound('assets/home_no_3_degradeOnly.mp3', success);
    original_no_3 = loadSound('assets/vocal.mp3', success);
};

var text_area;
var content_home3;
var compassHeading;
var filterFreq;
var timer;
var mic;
var recorder;
var soundFile;
var state;
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
    loss_no_3.setVolume(1.0);
    loss_no_3.playMode('untilDone');
    original_no_3.setVolume(1.0);
    original_no_3.playMode('untilDone');
    content_home3 = ["3.0 three", "3.1 when the highway was distant enough", "3.2 for drips to ring louder than", "3.3 passing trucks who sliced the landscape", "3.4 perpendicular in a Cartesian split", "3.5 to the water systems whose homely stasis", "3.6 ran up and down", "3.7 up and down", "3.8 quartz rock is often left abandoned by whatever waters bore it. upstream,", "3.9 northeast"];

    text_area = document.getElementById("compass_content");

    i = .001;
    filterFreq = 100;
    filter = new p5.BandPass();
    loss_no_3.disconnect();
    loss_no_3.connect(filter);
    filter.amp(1.0, 20, 0)

    timer = 0;
    textFont("courier", 25);

//recording setup
    state = 0;
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();

    function mouseIsPressed() {
        if (state === 0 && mic.enabled) {
            recorder.record(soundFile);
            state++;
        } else if (state === 1) {
            recorder.stop();
            state = 0;
        };
  
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
        if(original_no_3.isPlaying() == true){
             original_no_3.pause();
             };
        text_area.innerHTML = "";
        fill(0);
        noStroke();
        rect(0, 0, windowWidth, 500);
    };
};

       
function draw(){
//blue floor
    fill(0,0,255);
    noStroke();
    rect(0, 800, windowWidth, 500);

//counters

    timer ++;
    var timeinseconds = timer/60
    //console.log(timeinseconds);


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
    textAlign(CENTER);

 //text and sound triggers   
    if(compassHeading >= 355 || compassHeading <=5){
        //text_area.innerHTML = content_home3[0];
        fill(255);
        background(0);
        text(content_home3[0], windowWidth/2, windowHeight/4);
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 5 && compassHeading <=31){
        playbaqq();
        loss_no_3.play();  
    };

    if(compassHeading >= 31 && compassHeading <=41){
        fill(255);
        background(0);
        text(content_home3[1], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[1];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 41 && compassHeading <=67){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 67 && compassHeading <=77){
        fill(255);
        background(0);
        text(content_home3[2], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[2];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 77 && compassHeading <=103){
        playbaqq();
        loss_no_3.play();  
    };

    if(compassHeading >= 103 && compassHeading <=113){
        fill(255);
        background(0);
        text(content_home3[3], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[3];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 113 && compassHeading <=139){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 139 && compassHeading <=149){
        fill(255);
        background(0);
        text(content_home3[4], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[4];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 149 && compassHeading <=175){
        playbaqq();  
        loss_no_3.play();
    };

    if(compassHeading >= 175 && compassHeading <=185){
        fill(255);
        background(0);
        text(content_home3[5], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[4];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 185 && compassHeading <=211){
        playbaqq();  
        loss_no_3.play();
    };

    if(compassHeading >= 211 && compassHeading <=221){
        fill(255);
        background(0);
        text(content_home3[6], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[5];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 221 && compassHeading <=247){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 247 && compassHeading <=257){
        fill(255);
        background(0);
        text(content_home3[7], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[6];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 257 && compassHeading <=283){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 283 && compassHeading <=288){
        fill(255);
        background(0);
        text(content_home3[8], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[7];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if(compassHeading >= 288 && compassHeading <=319){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >=319 && compassHeading <=329){
        fill(255);
        background(0);
        text(content_home3[9], windowWidth/2, windowHeight/4);
        //text_area.innerHTML = content_home3[8];
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            soundFile.play();
            save(soundFile, 'rec1.wav');
            };
    };

    if (timeinseconds >= loss_no_3.duration()){
        loss_no_3.stop();
    };

    if (timeinseconds >= original_no_3.duration()){
         original_no_3.stop();
     };
};

