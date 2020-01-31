function __(a){return document.getElementsByClassName(a);}
	console.log("started");
	setInterval(function(){
		prev_playback_speed=document.getElementsByTagName("video")[0].playbackRate;
	    if(__("akamai-player-video").length==0){//if ad
	        document.getElementsByTagName("video")[1].currentTime=500;//jump video to 500s xD
	    }
	},100)
function speedController_(e){
    if(e.keyCode==107 || e.keyCode==187){document.getElementsByTagName("video")[0].playbackRate += .25;}else if(e.keyCode==109 || e.keyCode==189){document.getElementsByTagName("video")[0].playbackRate -= .25;}
__("navbar-brand")[0].innerHTML=document.getElementsByTagName("video")[0].playbackRate+" x"
}
document.addEventListener('keydown', speedController_);