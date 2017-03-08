$(function(){
	//追问下的回答框显示
	$('.question-box:first-child').next('.answer-in').show();
	//追问下的箭头显示
	$('.asked .answer-arrow').show();
	//点击回复
	$('.reply').on('tap',function(){	
		if($(this).parent().parent().next('.answer-in').css('display')=='none'){
			//所有的框和箭头隐藏
			$('.answer-arrow').hide();
			$('.answer-in').hide();
			//当前下的箭头和框显示
			$(this).children('.answer-arrow').show();
			$(this).parent().parent().next('.answer-in').show();
			//所有回答有下边框
			$('.question-box').css({'border-bottom':'0.1rem solid #ECECED'});
			//当前回答无下边框
			$(this).parent().parent().css({'border-bottom':'none'})
			//追问的图标变灰
			$('.asked .write-active').addClass('write').removeClass('write-active');
		}
	});
	//点击追问
	$('.asked').on('tap',function(){
		if($(this).parent().parent().next('.answer-in').css('display')=='none'){
			$(this).find('.answer-arrow').show();
			$('.answer-in').hide();
			$('.reply .answer-arrow').hide();
			$('.question-box').css({'border-bottom':'0.1rem solid #ECECED'});
			$(this).parent().parent().next('.answer-in').show();
			if($('.asked .write').length>0){
				$('.asked .write').addClass('write-active').removeClass('write');
			}
			if($(this).parent().parent().css('border-width')!='0px'){
				$(this).parent().parent().css({'border-bottom':'none'})
			}
		}
	});
	$('body').goTop();
	$('.submit').on('tap',function(){
		//要提交的内容
		var text=$(this).siblings().val();
		if(text==""){
			mui.toast("请填写回答内容");
		}else{
			//调取接口
			mui.toast("提交成功");
		}
	})
});
