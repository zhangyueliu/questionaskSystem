$(document).ready(function(){
	/*举报页面进入提问页面*/
	$(".js-report-list").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".addreport-title").val($(this).text());
	})
	//提交信息提示框
	$("#report-submit").click(function(){
		if($("textarea").val()==""){
			mui.toast("请填写补充说明");
		}else{
			//调取接口
			mui.toast("提交成功");
		}
	});
})

