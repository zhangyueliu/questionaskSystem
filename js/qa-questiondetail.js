$(function(){
	
	//横向滑动初始化
	mui($('.course-wrap')).scroll({  
		scrollX:true,
		scrollY:false,
		indicators: true,
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006  
	});
	
	$('.body').goTop();
	
	//提交信息提示框
	$(".submit").click(function(){
		//要提交的内容
		var text=$(this).siblings().val();
		if(text==""){
			tipBox("请填写回答内容");
		}else{
			//调取接口
			tipBox("提交成功");
		}
	})
});
