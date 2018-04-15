var myBody = document.getElementsByTagName("body");

function success() {
    myBody[0].style.backgroundColor = "#0000FF";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
    loss_no_3 = loadSound('assets/home_no_3_degradeOnly.mp3', success);
    //original_no_3 = loadSound('assets/pinetrail1.mp3');
};

var text_area;
var content_home3;
var compassHeading;
var filterFreq;
var timer;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    loss_no_3.setVolume(1.0);
    loss_no_3.playMode('untilDone');
    //original_no_3.setVolume(1.0);
    //original_no_3.playMode('untilDone');
    content_home3 = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9"];
    text_area = document.getElementById("compass_content");
    i = .001;
    filterFreq = 100;
    filter = new p5.BandPass();
    loss_no_3.disconnect();
    loss_no_3.connect(filter);
    filter.amp(1.0, 20, 0)
    timer = 0;

  
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
        
        // if(original_no_3.isPlaying() == true){
        //     original_no_3.pause();
        //     };
        text_area.innerHTML = "";
    };
       
function draw(){
//counters

    timer ++;
    var timeinseconds = timer/60
    console.log(timeinseconds);


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

 //text and sound triggers   
    if(compassHeading >= 355 || compassHeading <=5){
        text_area.innerHTML = content_home3[0];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 5 && compassHeading <=31){
        playbaqq();
        loss_no_3.play();  
    };

    if(compassHeading >= 31 && compassHeading <=41){
        text_area.innerHTML = content_home3[1];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 41 && compassHeading <=67){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 67 && compassHeading <=77){
        text_area.innerHTML = content_home3[2];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 77 && compassHeading <=103){
        playbaqq();
        loss_no_3.play();  
    };

    if(compassHeading >= 103 && compassHeading <=113){
        text_area.innerHTML = content_home3[3];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 113 && compassHeading <=139){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 139 && compassHeading <=149){
        text_area.innerHTML = content_home3[4];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 149 && compassHeading <=175){
        playbaqq();  
        loss_no_3.play();
    };

    if(compassHeading >= 175 && compassHeading <=185){
        text_area.innerHTML = content_home3[4];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 185 && compassHeading <=211){
        playbaqq();  
        loss_no_3.play();
    };

    if(compassHeading >= 211 && compassHeading <=221){
        text_area.innerHTML = content_home3[5];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 221 && compassHeading <=247){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 247 && compassHeading <=257){
        text_area.innerHTML = content_home3[6];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 257 && compassHeading <=283){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >= 283 && compassHeading <=288){
        text_area.innerHTML = content_home3[7];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if(compassHeading >= 288 && compassHeading <=319){
        playbaqq(); 
        loss_no_3.play(); 
    };

    if(compassHeading >=319 && compassHeading <=329){
        text_area.innerHTML = content_home3[8];
        //original_no_3.play();
        if(loss_no_3.isPlaying() == true){
            loss_no_3.pause();
            };
    };

    if (timeinseconds >= loss_no_3.duration()){
        loss_no_3.stop();
    };

    // if (timeinseconds >= original_no_3.duration()){
    //     original_no_3.stop();
    // };
};

