//移动端--回到顶部
//此插件引用需要引用zepto
//调用方法
(function($) {
	var timer = null;
	var isTop=true;
	$.fn.goTop = function(options) {
		//滚动条滚动
		$('.body').scroll(function() {
			//传过来是true
			if(!isTop){
				clearInterval(timer);
			}
			isTop=false;
			
		})
		$('.gotop').on('click', function() {
			//重复执行
			timer = setInterval(function() {
				//每30ms获取一次距离,计算一次速度,重新给滚动条位置赋值
				var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
				var speed = Math.floor(-scrolltop / 3);
				//在置顶过程中，这句代码出发scroll事件
				document.documentElement.scrollTop = document.body.scrollTop = scrolltop + speed;
				//每次将false改为true
				isTop=true;
				//置顶后清除计时器
				if(scrolltop == 0) {
					clearInterval(timer);
				}
			}, 30);
		});
	};
})(window.Zepto);