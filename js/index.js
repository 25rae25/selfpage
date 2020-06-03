/*
var onEndHover = $(".end-wrap .end-pic").width();


$(".end-wrap .end-pic").hover(function(){
	$(this).innerWidth('50%')
});

$(".end-wrap .end-pic").



$(".end-wrap .end-pic").



$(".end-wrap .end-pic").stop().show();
$(".end-wrap .end-pic").hover(onEndHover, onEndLeave);
*/


$(".end-pic").each(function(i){
	$(this).css("left", (i* 16.6666)+"%");
	var wid = $(".end-wrap").innerWidth()/6;
	$(this).find(".end-cont").innerWidth(wid);
});