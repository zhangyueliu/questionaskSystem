$(function(){
	$('.nav li').on('click',function(){
		$('.nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');
	});
});

