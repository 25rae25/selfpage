/******************* header hover ************************/  
function onNaviHover() {
	$(this).find(".ti-mo").stop().fadeIn(500);
}

function onNaviLeave() {
	$(this).find(".ti-mo").stop().fadeOut(500);
}

$(".titles").hover(onNaviHover, onNaviLeave);

/******************* 마지막사진 ************************/  
$(".end-pic").each(function(i){
	$(this).css("left", (i* 16.6666)+"%");
	var wid = $(".end-wrap").innerWidth()/6;
	$(this).find(".end-cont").innerWidth(wid);
});

$(".end-pic").hover(onEndHover, onEndLeave);

/* function onEndHover() {
	$(this).css("left", (i* 100)+"%");
	$(this).find("")	
}

function onEndLeave() {

}; */

/******************* X자 ************************/  
$(".bar-wrap .bars").click(onBarClick);

function onBarClick() {
	if($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).find(".bar1").css("animation-name", "bar1-rev");
		$(this).find(".bar2").css("animation-name", "bar2-rev");
		$(this).find(".bar3").css("animation-name", "bar3-rev");
	}
	else {
		$(this).addClass("active");
		$(this).find(".bar1").css("animation-name", "bar1");
		$(this).find(".bar2").css("animation-name", "bar2");
		$(this).find(".bar3").css("animation-name", "bar3");
	}
}


/******************* pic ************************/  
/* var slide = new Slide(".picture", ".pic", "scale"); */

var picNow = 0;
var picSlide = $(".picture > .pic");
var picLast = picSlide.length -1;

picInit();

function picInit() {
	$(".picture > .pic").remove();
	$(picSlide[picNow]).appendTo(".picture");
}

function picAni() {
	var picSlide = $(picSlide[picNow]).appendTo(".picture").css({"transform":"scale(1.3)",
"opacity":0});
}
setTimeout(function(){
	$(".picture").find(".pic1").css({"transform":"scale(1.3)","opacity":0})
	$(".picture").find(".pic2").css({"transform":"scale(0.8)","opacity":0})
	$(".picture").find(".pic3").css({"transform":"scale(1.3)","opacity":0})

});


function onpicPrev() {

picNow = (picNow == 0) ? picLast : picNow - 1;
mainAni();
}
function onpicNext() {

picNow = (picNow == picLast) ? 0 : picNow + 1;
picAni();
}
$(".picture > .bt-prev").click(onMainPrev);
$(".picture > .bt-next").click(onMainNext);
