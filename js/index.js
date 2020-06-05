function onNaviHover() {
	$(this).find(".ti-mo").stop().fadeIn(500);
}

function onNaviLeave() {
	$(this).find(".ti-mo").stop().fadeOut(500);
}

$(".titles").hover(onNaviHover, onNaviLeave);


$(".end-pic").each(function(i){
	$(this).css("left", (i* 16.6666)+"%");
	var wid = $(".end-wrap").innerWidth()/6;
	$(this).find(".end-cont").innerWidth(wid);
});

$(".end-pic").hover(onEndHover, onEndLeave);

function onEndHover() {
	$(this).css("left", (i* 100)+"%");
	$(this).find("")	
}



