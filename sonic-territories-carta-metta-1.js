var myBody = document.getElementsByTagName("body");

/*function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}*/

/*function preload() {
 soundFormats('mp3', 'ogg');
    pineTrail = loadSound('assets/creak.mp3', success);
    threeZero = loadSound('assets/0three-zero.mp3', success);
    threeOne = loadSound('assets/three-one.mp3', success);
    threeThree = loadSound('assets/three-three.mp3', success);
    threeFive = loadSound('assets/three-five.mp3', success);
    threeEight = loadSound('assets/0three-eight.mp3', success);
    threeNine = loadSound('assets/0three-nine.mp3', success);
    vocal = loadSound('assets/vocal.mp3', success);
};*/

var text_area;
var content_home3;
var compassHeading;
var filterFreq;
var timer;
var timeinseconds;
var mic;
var recorder;
var soundFile;
var state;
var recordButton;
var playButton;
var backgroundColor;
var cnv;
// var contentIndex;
// var printedText;
// var textTimer;
// var threeTwo;
// var threeThree;
// var threeFour;
// var contentSplit;
// var splitTimer;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    text_area = document.getElementById("compass_content");
//    timeinseconds = 0;
//    i = .001;
//   timer = 0;
//    textFont("courier", 25);
//recording setup
    state = 0;
    mic = new p5.AudioIn();
    mic.start();
    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();

//IDK what text_area part means??//
    backgroundColor = color(100, 50, 150);
//    text_area.innerHTML = "";

//BUTTONS
    recordButton = createButton('press + hold to record');
    recordButton.position(0,0);
    recordButton.mousePressed(rec);
    recordButton.mouseReleased(stop);

    playButton = createButton('play');
    playButton.position (10,10);
    playButton.mousePressed(play);
        
}

  
/*window.addEventListener('deviceorientation', function(e) {
    var alpha = e.alpha;
        if(e.webkitCompassHeading){
            compassHeading = e.webkitCompassHeading;
        } else compassHeading = 360 - alpha;
        });
    };


/*function keyPressed (){

    else if (state === 1) {
       background(0,255,0);
       recorder.stop();
       text('Stopped', 20, 20);
       state++;
       }
    else if (state === 2) {
        background(0,0,255);
        save(soundFile, 'mySound.mp3');
        soundFile.play(); //play the result
        state++;
        }
    }*/
    
function rec(){
    if (mic.enabled) {
        recorder.record(soundFile);
        background (255,0,0);
        text('Recording!', 20, 20);
        state++;
    }
}

function stop(){
    recorder.stop();
    text('Stopped', 20, 20);
    state++;
}

function play(){
    save(soundFile, 'mySound.mp3');
    soundFile.play(); //play the result
    state++;
}
       
function draw(){
    backgroundColor.setRed(128 + 128 * sin(millis() / 1000));
  background(backgroundColor);
};

//blue floor
//    fill(0,0,255);
//    noStroke();
//    rect(0, 1050, windowWidth, 275);

//counters
/*   timer ++;
    var timeinseconds = timer/60*/


  //  if (filterFreq <= 8000){
    //    filterFreq = filterFreq + 1.6;
    //} else {filterFreq = filterFreq - 1.6
    //};

/*    if (timeinseconds == 240){
        if (i <= 1000){
            i++;
        } else {i = i - 1;
        };
    };*/
//format text
//    textAlign(LEFT);

/* //text and sound triggers   
    if(compassHeading >= 355 || compassHeading <=5){
        //text_area.innerHTML = content_home3[0];
        fill(255);
        background(0);
        text(content_home3[0], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeZero.play();
        };
    };

    if(compassHeading >= 5 && compassHeading <=31){
        playbaqq();
        pineTrail.play();  
    };

    if(compassHeading >= 31 && compassHeading <=41){
        fill(255);
        background(0);
        text(content_home3[1], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
        //text_area.innerHTML = content_home3[1];
        //vocal.play();
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeOne.play();
        }
    };

    if(compassHeading >= 41 && compassHeading <=67){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >= 67 && compassHeading <=77){
        fill(255);
        background(0);
        text(content_home3[2], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
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
        text(content_home3[3], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
        //text_area.innerHTML = content_home3[3];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeThree.play();
        }
    };

    if(compassHeading >= 113 && compassHeading <=139){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >= 139 && compassHeading <=149){
        fill(255);
        background(0);
        text(content_home3[4], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
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
        text(content_home3[5], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
        //text_area.innerHTML = content_home3[4];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeFive.play();
        }
    };

    if(compassHeading >= 185 && compassHeading <=211){
        playbaqq();  
        pineTrail.play();
    };

    if(compassHeading >= 211 && compassHeading <=221){
        fill(255);
        background(0);
        text(content_home3[6], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
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
        text(content_home3[7], windowWidth/4, windowHeight/4);
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
        text(content_home3[8], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
        //text_area.innerHTML = content_home3[7];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeEight.play();
        };
    };

    if(compassHeading >= 288 && compassHeading <=319){
        playbaqq(); 
        pineTrail.play(); 
    };

    if(compassHeading >=319 && compassHeading <=329){
        fill(255);
        background(0);
        text(content_home3[9], windowWidth/4, windowHeight/4);
        fill(0,0,255);
        noStroke();
        rect(0, 1050, windowWidth, 275);
        //text_area.innerHTML = content_home3[8];
        if(pineTrail.isPlaying() == true){
            pineTrail.pause();
            threeNine.play();
        };
    };

};*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};

