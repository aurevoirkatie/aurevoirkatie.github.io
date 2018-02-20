//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = 360 - e.alpha;
        }
        //north
        if(compassHeading > 330 || compassHeading < 20) {
             text_area.textContent = "grinning, toothless, white hairs sprouting from \n their doughy chins, round and soft. \n they were ancient, even then. \n I remember their long skirts and small steps, \n moving slowly, voices crackling with delight. \n I wonder if, in their final years, the noise";
    }   //northeast
        if(compassHeading >= 20 && compassHeading < 60) {
             text_area.textContent = "of the 18-wheelers bothered them or if \n at that point \n they were too deaf to notice \n the endless whine of motors \n the kinetic anxiety of wheels  \n struggling to round the uphill curve on their way";
        if(compassHeading >= 60 && compassHeading < 110) {
             text_area.textContent = "East, to flatter, straighter roads.";
    }   //southeast
        if(compassHeading >= 110 && compassHeading < 160) {
             text_area.textContent = "Rain this day. Some ice, actually. \n The door of the shed creaks. \n This one is most recently habited of all of them.";
    }
        //south
        if(compassHeading >= 160 && compassHeading < 200) {
             text_area.textContent = "The one wooden chair \n I could see through the back door window \n faced me \n South.";
    }   
        //southwest
        if(compassHeading >= 200 && compassHeading < 240) {
             text_area.textContent = "I had seen the young couple hauling wood and weeding. \n Wind cuts out. \n A 2x4 props open a window.";
    }
        //west
        if(compassHeading >= 240 && compassHeading < 290) {
             text_area.textContent = "2 years ago I had walked onto the back porch \n with my mother and father. Some wooden slats \n framed holes in the floor that gaped clear to the foundation. \n A rooster cries. ";
    }
        //northwest
        if(compassHeading >= 290 && compassHeading <= 330) {
             text_area.textContent = "tremendous velocity \n steam \n right up against \n indurate \n facing outwards \n fading earthward \n as i recall \n the sisters who lived here in my childhood";
    }
         
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


