$(function(){
	$('#nav li').on('click',function(){
		$('#nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');
		var index=$(this).index();
		$('.slider').css({"-webkit-transform":"translateX(-"+16.66*index+"%)"});
		if($('.box').eq(index).scrollTop()>50){
			$('.suspend .gotop').show();
		}else{
			$('.suspend .gotop').hide();
		}
	});
	
	$('body').goTop({percent:16.67,isTab:true});
});