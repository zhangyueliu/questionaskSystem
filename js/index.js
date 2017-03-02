$(function(){
	$('#nav li').on('click',function(){
		$('#nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');
		var index=$(this).index();
		$('.slider').css({"-webkit-transform":"translateX(-"+25*index+"%)"});
	});
});
