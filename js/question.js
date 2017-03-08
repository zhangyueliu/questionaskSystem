$(document).ready(function(){
	/*提问页面进入*/
	$(".js-quesspecies").click(function(){
		$(".qa-queclassifica-page").css({
			transform:"translate(0%,0)",
		});
	});
	$(".qa-queclassifica-page").find(".js-back").click(function(){
		$(".qa-queclassifica-page").css({
			transform:"translate(100%,0)",
		});
	});
	$(".js-reword").click(function(){
		$(".qa-reword-page").css({
			transform:"translate(0%,0)",
		});
	});
	$(".qa-reword-page").find(".js-back").click(function(){
		$(".qa-reword-page").css({
			transform:"translate(100%,0)",
		});
	});
	//点击科目修改科目
	$('.qa-queclassifica-page .qa-report-title').click(function(){
		$(".qa-queclassifica-page").css({
			transform:"translate(100%,0)",
		});
		var val=$(this).text();
		var id=$(this).attr('data-id');
		$('#subject').text(val);
		$('#subject').attr('data-id',id);
	});
	//点击悬赏修改悬赏
	$('.qa-reword-page .qa-report-title').click(function(){
		$(".qa-reword-page").css({
			transform:"translate(100%,0)",
		});
		var val=$(this).text();
		var score=$(this).attr('data-score');
		$('#score').text(val);
		$('#score').attr('data-score',score);
	});
	//提交信息提示框
	$(".qa-report-btn").on("click",function(){
		//根据data-id是否存在判断是否选择了科目
		
		//判断文本框不为空
		if($('.biref textarea').val()==""||$('.biref textarea').val()==null){
			mui.toast("请填写问题描述");
		}else if($('.biref-more textarea').val()==""||$('.biref-more textarea').val()==null){
			mui.toast("请填写问题补充");
		}else{
			//调取接口
			mui.toast("提交成功");
		}
	});
})

