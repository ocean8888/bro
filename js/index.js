$(function(){
	var num=1;
	var length=$(".body1_left .picture img").length;
	var width=$(".body1_left .picture img").width();
	var timer="";

	points(0);
	function points(index){
		$(".body1_left .points span").eq(index).addClass('current').siblings('span').removeClass('current');
	}
	$(".body1_left .picture img").eq(0).show().siblings('img').hide();
	$(".body1_left .points span").mouseover(function() {
		var index=$(this).index();
		$(".body1_left .picture img").eq(index).show().siblings('img').hide();
		points(index);
	});
	function skip(){		
		if(num==length){
			$(".body1_left .picture img").eq(0).show().siblings('img').hide();
			num=1;
		}else{
			$(".body1_left .picture img").eq(num).show().siblings('img').hide();
			num++;
		}
		points(num-1);
	}
	timer = setInterval(skip,1500);
	$(".picture").mouseover(function(){
		clearTimeout(timer);
	})
	$(".picture").mouseleave(function() {
		timer = setInterval(skip,1500);
	});


	var length1=$(".body2_right .con ol").length;
	var width1=$(".body2_right .con ol").width();
	var num1=1;
	timer1="";

	points1(0);
	function points1(index){
		$(".body2_right .down span").eq(index).addClass('now').siblings('span').removeClass('now');
	}
	$(".body2_right .con ol").eq(0).show().siblings('ol').hide();
	$(".body2_right .down span").mouseover(function() {
		var index=$(this).index();
		$(".body2_right .con ol").eq(index).show().siblings('ol').hide();
		points1(index);
	});
	function skip1(){		
		if(num1==length1){
			$(".body2_right .con ol").eq(0).show().siblings('ol').hide();
			num1=1;
		}else{
			$(".body2_right .con ol").eq(num1).show().siblings('ol').hide();
			num1++;
		}
		points1(num1-1);
	}
	timer1 = setInterval(skip1,1500);
	$("ol").mouseover(function(){
		clearTimeout(timer1);
	})
	$("ol").mouseleave(function() {
		timer1 = setInterval(skip1,1500);
	});
})