//移动端--回到顶部
//此插件引用需要引用zepto
//调用方法
(function($) {
	$.fn.goTop = function() {
		$('.suspend .gotop').on('click', function() {
			mui('.box').pullRefresh().scrollTo(0, 0, 500);
		});
	};
})(window.Zepto);