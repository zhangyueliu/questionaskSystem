$(document).ready(function(){
	/*举报页面进入提问页面*/
	$(".js-report-list").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".addreport-title").val($(this).text());
	})
	/提交信息提示框/
	$(".qa-report-btn").click(function(){
			tipBox("您的举报内容已经提交成功");
		if($(".addreport-title").val()==""||$(".addreport-title").val()==null){
			console.log("a")
			tipBox("请选择举报原因");
		}else if($("textarea").val()==""){
			tipBox("请填写补充说明");
		}else{
			//调取接口
			tipBox("提交成功");
		}
	})
})

