$(function(){
	var filter={
		type:0,//层选项
		word:'',//关键字
		page:1
	}
	//切换层
	$('#nav li').on('tap', function() {		
//		设置筛选条件
		var typeid=$(this).attr('type');
		filter={type:typeid,page:1};
		$('#nav ul li').removeClass('active-nav')
		$(this).addClass('active-nav');	
		//回到页面顶部
		mui('.box').pullRefresh().scrollTo(0, 0, 150);
		mui('.box').pullRefresh().pulldownLoading();
		mui($('.course-wrap')).scroll().refresh;
	});
	//回到顶部
	$('.suspend .gotop').on('tap', function() {
			mui('.box').pullRefresh().scrollTo(0, 0, 500);
		});
	
	var metro = new metroRedux();
	metro.pullrefresh(function() {
		var html;
		var html1 = '<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">0</span>分</span></div></div><div class="report">举报</div></div><p class="color-7f">这是问题描述，点击进入问题详情页</p><div class="bottom-box clearfix"><div>2017年03月02日</div><div>建设工程经济</div><div class="color-7f">10条回答</div></div></div>';
		var htmlcourse='<div class="course-div"><div class="course-head"><img src="img/arrows.png" class="arrow" style="display: inline;" /><span class="course-head-title">你可能需要的课程</span><a href="#"><span class="course-more">更多</span><img src="img/more.png" class="course-img-more" style="display: inline;" /></a></div><div class="course-wrap mui-scroll-wrapper mui-slider-indicatorcode mui-segmented-control mui-segmented-control-inverted"><div style="width: 90.6rem;height: 12.6rem;" class="mui-scroll"><!--此值为15.1*推荐课程数+0.03，套页面时可修改，目前是6个--><div class="  course-box m"><a href="#"><div class="course-img"><img src="img/feng.png" /></div><p class="overtwo-circle">这这是课程名称</p></a></div><div class="m course-box"><a href="#"><div class="course-img"><img src="img/feng.png" /></div><p class="overtwo-circle">这是课程名称这这是课程名称这这是课程名称课程名称</p></a></div><div class=" course-box m"><a href="#"><div class="course-img"><img src="img/feng.png" /></div><p class="overtwo-circle">这是课程名称</p></a></div><div class="course-box m"><a href="#"><div class="course-img"><img src="img/feng.png" /></div><p class="overtwo-circle">这是课程名称</p></a></div><div class=" course-box m"><a href="#"><div class="course-img"><img src="img/feng.png" /></div><p class="overtwo-circle">这是课程名称</p></a></div><div class="m course-box"><a href="#"><div class="course-img"><img src="img/feng.png" /></div><p class="overtwo-circle">这是课程名称</p></a></div></div></div></div>';
		var bookeach='<div class="course-box m"><a href="#"><div class="book-img"><img src="img/bookimg.png" /></div><p class="overtwo-circle">这是图书名称</p></a></div>';
		var htmlbook='<div class="course-div"><div class="course-head"><img src="img/arrows.png" class="arrow" style="display: inline;" /><span class="course-head-title">你可能需要的图书</span><a href="#"><span class="course-more">更多</span><img src="img/more.png" class="course-img-more" style="display: inline;" /></a></div><div class="course-wrap mui-scroll-wrapper mui-slider-indicatorcode mui-segmented-control mui-segmented-control-inverted"><div style="width: 90.6rem;height: 18.8rem;" class="mui-scroll">'+bookeach+bookeach+bookeach+'</div></div></div>';
		
			
			html=html1+html1+html1+htmlcourse+html1+html1+html1+htmlbook+html1+html1+html1;
		$('.mui-table-view').html('');
		$('.mui-table-view').append(html);
		
		//注意，加载完新数据后，必须执行如下代码，注意：若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		
		mui(".box").pullRefresh().endPulldownToRefresh();
		
	}, function() {
		$('.mui-table-view').append('<div class="question-box"><div class="head-box flex-box"><div class="headpic"><img src="img/headpic.png" width="100%" /></div><div class="head-text"><div class="nickname">nickname</div><div class="status"><span>已解决</span><span class="reward color-7f">悬赏<span class="score">20</span>分</span></div></div><div class="report">举报</div></div><p class="color-7f">这是问题描述，点击进入问题详情页</p><div class="bottom-box clearfix"><div>2017年03月02日</div><div>建设工程经济</div><div class="color-7f">10条回答</div></div></div>');
		//注意：
		//1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
		//2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
		mui('.box').pullRefresh().endPullupToRefresh(false);
	});	
	
	//横向滑动初始化
	mui($('.course-wrap')).scroll({  
		scrollX:true,
		scrollY:false,
		indicators: true,
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006  
	});
});
