$(function(){	
	$('.more').on('tap',function(){
		$('.more-hide-dive').toggle();
		$('.shade').toggle();
	})
	$('.shade').on('touchstart',function(){
		$('.shade').toggle();
		$('.more-hide-dive').toggle();
	});
	$('.main-box .search-div div').on('click',function(){
		//层滑动
		$('.search-box').css({"-webkit-transform":"translateX(0)"});
		$('.main-box').css({"-webkit-transform":"translateX(-100%)"});
		//获取显示的搜索词
		var word=$('.main-box .search-div input').val().trim();
		//赋给搜索层
		$('.search-box .search-div input').val(word);
		$('.search-box .search-div input').focus();
	});
	$('.search-box .back').on('tap',function(){
		$('.search-box').css({"-webkit-transform":"translateX(100%)"});
		$('.main-box').css({"-webkit-transform":"translateX(0)"});
	});
	$('.search-box .search-div input').focus(function(){		
		$('.search-box .search-div i').css({'display':'none'})
		$(this).attr('placeholder','');
	})
	$('.search-box .search-div input').on('blur',function(){
		if(!$(this).val()){
			$('.search-box .search-div i').css({'display':'block'})
			$(this).attr('placeholder','搜索你关注的问题');
		}
	});
	mui('body').on('tap','a',function(){document.location.href=this.href;}); 
	
	$('.support').on('tap',function(){
		$(this).addClass('support-active').removeClass('support');
	});
	$('.tread').on('tap',function(){
		$(this).addClass('tread-active').removeClass('tread');
	});
	$('.write').on('tap',function(){
		$(this).addClass('write-active').removeClass('write');
	})
	
});

//	下拉刷新,上拉加载,初始化
	function metroRedux() {}
	metroRedux.prototype = {
		pullrefresh: function(callback1, callback2) {
			var that = this;
			mui.init({
				pullRefresh: {
					container: '.box',
					down: {
						height: 50, //可选,默认50.触发下拉刷新拖动距离,
						auto: true, //可选,默认false.true是自动下拉刷新一次
						contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
						contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
						contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
						callback: pulldownRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					},
					up: {
						height: 50, //可选.默认50.触发上拉加载拖动距离
						auto: false, //可选,默认false.true是自动上拉加载一次
						contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
						contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
						callback: pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
					}
				}
			});
			/**
			 * 下拉刷新具体业务实现
			 */
			function pulldownRefresh() {
				//console.log("下拉刷新")
				callback1();
			}
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				//console.log("上拉加载")
				callback2();
			}
		}
	}
	
//取地址栏
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	} else {
		return '';
	}
}
