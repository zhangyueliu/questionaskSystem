$(function(){
	
	//横向滑动初始化
	mui($('.course-wrap')).scroll({  
		scrollX:true,
		scrollY:false,
		indicators: true,
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006  
	});
	
	$('.body').goTop();
});
