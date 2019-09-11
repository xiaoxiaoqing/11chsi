$(function () {
// 根据屏幕的大小设置字体的大小
var fs = document.documentElement.offsetWidth;
$('html').css({'fontSize':fs*10/828});
	$('.ying').on('click',function(){
		$('.lay').show();
	});
	$('.close').on('click',function(){
		$('.lay').hide();
	})
	$('.pdf').on('click',function(){
		$('.main').html('<img class="tu" src="lxq.jpg" alt="">')
	})
})
