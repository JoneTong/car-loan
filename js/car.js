$(function(){
	// window.addEvent('resize',function(){})
	// var winh=$(window).height();
	// $(window).resize(function(){
	// findheight()
	// });
	function findheight(){
		if(window.innerHeight){
			winh=window.innerHeight;
		}else if((document.body)&&(document.body.clientHeight)){
			winh=doxument.body.clientHeight;
		}
		if(document.documentElement&&document.documentElement.clientHeight){
			winh=document.documentElement.clientHeight
		}
		return winh
	}
	findheight()
	// alert(winh)
	var boxinh=winh*$(".box").length
	$(".boxout").css({"height":winh})
	$(".boxin").css({"height":boxinh})
	$(".box").css({"height":winh})
	if(document.addEventListener){
		document.addEventListener("mousewheel",scrollfun,false)
		document.addEventListener("DOMMouseScroll",scrollfun,false)
	}else{
		document.attachEvent("onmousewheel",scrollfun)
	}
	var judge
	var num=0;
	var index
	// var flag=true;
	function scrollfun(e){
		var ev=e||window.event;
		if(ev.type=="DOMMouseScroll"){
			judge=-ev.detail;
		}else{
			judge=ev.wheelDelta;
		}
		// alert(judge)
		// console.log($("*",".boxin"))
	if(!$(".boxin").is(":animated")){
	
	if(judge<0){
		num-=winh
	var gg=winh*($(".box").length-1)
	if (num<=-gg) {
		num=-gg
	}
	$(".boxin").animate({"top":num},function(){
		bx0()	  
	})
	}else{
		num+=winh;
		if (num==winh) {
		num=0
		}
	$(".boxin").animate({"top":num},function(){
		bx0();	
			
	})
	}
}
}
$(".listbtn").css({"background":"#00024D","color":"#fff"})
$(".listbtn").eq(0).css({"background":"#FFFC00","color":"#000"})
function bx0(){
	if($(".box").eq(0).position().top==(-num)){
		$(".listbtn").eq(0).css({"background":"#FFFC00","color":"#000"})
	}else{
		$(".listbtn").eq(0).css({"background":"#00024D","color":"#fff"})
	}

	if ($(".box").eq(1).position().top==(-num)) {
		$(".listbtn").eq(1).css({"background":"#FFFC00","color":"#000"})
		$(".t1").delay(600)
			.fadeIn()
			.queue(function(nex){
			$(this).next(".t2").fadeIn()
				nex()
			})
			.delay(400)
			.queue(function(nex){
				$(this).nextAll(".t3").fadeIn()
				nex()
			})
			.delay(400)
			.queue(function(nex){
				$(this).nextAll(".t4").fadeIn()
				nex()
			})
		}else{
			$(".listbtn").eq(1).css({"background":"#00024D","color":"#fff"})
			$(".tbj1").find("p").css("display","none");
		}
		
	if ($(".box").eq(2).position().top==(-num)) {
		$(".listbtn").eq(2).css({"background":"#FFFC00","color":"#000"})
		$(".shujut1").delay(500).animate({width:43})
		$(".shujut2").delay(500).animate({width:108})
		$(".shujut3").delay(500).animate({width:162})
		$(".shujut4").delay(500).animate({width:277},function(){
			$(this).nextAll(".shuz").delay(500).fadeIn(1000)
		})
		}else{
			$(".listbtn").eq(2).css({"background":"#00024D","color":"#fff"})
			$(".shujut1").css({width:0})
			$(".shujut2").css({width:0})
			$(".shujut3").css({width:0})
			$(".shujut4").css({width:0})
			$(".shuz").fadeOut()		
		}
	if ($(".box").eq(3).position().top==(-num)) {
		$(".listbtn").eq(3).css({"background":"#FFFC00","color":"#000"})
		$(".bx4pic").eq(0).delay(500).fadeIn(300,function xian(){
			$(this).next(".bx4pic").fadeIn(300,xian)
		})
	}else{
		$(".listbtn").eq(3).css({"background":"#00024D","color":"#fff"})
		$(".bx4pic").fadeOut()
	}
	if ($(".box").eq(4).position().top==(-num)) {
		$(".listbtn").eq(4).css({"background":"#FFFC00","color":"#000"})
		$(".clodl").delay(500).animate({left:10})
		$(".clodr").delay(500).animate({right:10})
		$(".bzdun").delay(500).animate({width:456},function(){
			$(this).nextAll(".benxi").delay(500).fadeIn()
		})
	}else{
		$(".listbtn").eq(4).css({"background":"#00024D","color":"#fff"})
		$(".clodl").animate({left:50})
		$(".clodr").animate({right:50})
		$(".bzdun").animate({width:0})
		$(".benxi").fadeOut()
	}

	if ($(".box").eq(5).position().top==(-num)) {
		$(".listbtn").eq(5).css({"background":"#FFFC00","color":"#000"})
		$(".bd1").animate({left:0,opacity:1},400)
		$(".bd2").animate({left:420,opacity:1},600)
		$(".bd3").animate({left:840,opacity:1},800)
	}else{
		$(".listbtn").eq(5).css({"background":"#00024D","color":"#fff"})
		$(".bd1,.bd2,.bd3").animate({left:-346,opacity:0})
	}
	if ($(".box").eq(6).position().top==(-num)) {
		$(".listbtn").eq(6).css({"background":"#FFFC00","color":"#000"})
		$(".most1").delay(500).animate({top:0,opacity:1},400)
		$(".most2").delay(500).animate({top:0,opacity:1},600)
		$(".most3").delay(500).animate({top:0,opacity:1},800)
	}else{
		$(".listbtn").eq(6).css({"background":"#00024D","color":"#fff"})
		$(".most1,.most2,.most3").animate({top:-346,opacity:0},400)
	}
	if ($(".box").eq(7).position().top==(-num)){
		$(".listbtn").eq(7).css({"background":"#FFFC00","color":"#000"})
		$(".actl1").delay(600).fadeIn(300)
		$(".actl5").delay(900).fadeIn(300)
		$(".actl3").delay(1200).fadeIn(300)
		$(".actl2").delay(1500).fadeIn(300)
		$(".actl4").delay(1800).fadeIn(300)
		$(".actl6").delay(2100).fadeIn(300)
	}else{
		$(".listbtn").eq(7).css({"background":"#00024D","color":"#fff"})
		$(".actl").fadeOut();
	}
	if ($(".box").eq(8).position().top==(-num)){
		$(".listbtn").eq(8).css({"background":"#FFFC00","color":"#000"})
		$(".luckyimg").animate({width:1183},1000,function(){
			$(".luckw").eq(0).fadeIn(500,function(){
				$(this).next(".luckw").fadeIn(500)
			})
		})
		}else{
			$(".listbtn").eq(8).css({"background":"#00024D","color":"#fff"})
			$(".luckyimg").animate({width:0})
			$(".luckw").fadeOut()
	}
	if ($(".box").eq(9).position().top==(-num)) {
		$(".listbtn").eq(9).css({"background":"#FFFC00","color":"#000"})
		$(".sevlist").eq(0).delay(600).fadeIn(400,function sevshow(){
			$(this).next(".sevlist").fadeIn(400,sevshow)
		})
		}else{
			$(".listbtn").eq(9).css({"background":"#00024D","color":"#fff"})
			$(".sevlist").fadeOut()
	}
	if ($(".box").eq(10).position().top==(-num)) {
		$(".listbtn").eq(10).css({"background":"#FFFC00","color":"#000"})
		$(".localp").animate({left:202,opacity:1},600)
		$(".locarp").animate({right:439,opacity:1},600,function(){
			$(".loworld").delay(600).fadeIn(600)
		})
		}else{
			$(".listbtn").eq(10).css({"background":"#00024D","color":"#fff"})
			$(".localp").animate({left:0,opacity:0})
			$(".locarp").animate({right:0,opacity:0})
			$(".loworld").fadeOut()
	}
	if ($(".box").eq(11).position().top==(-num)) {
		$(".listbtn").eq(11).css({"background":"#FFFC00","color":"#000"})
		$(".brandpic").eq(0).delay(600).fadeIn(200,function bran(){
			$(this).next().fadeIn(200,bran)
		})
		}else{
			$(".listbtn").eq(11).css({"background":"#00024D","color":"#fff"})
			$(".brandpic").fadeOut()
	}
	if ($(".box").eq(12).position().top==(-num)) {
		$(".listbtn").eq(12).css({"background":"#FFFC00","color":"#000"})
		$(".exppic").animate({top:0,opacity:1},1000,function(){
			$(".exppont").fadeIn(1000)
		})
		var nn=10,nn2=0,nn3=5;
		       var tim=setInterval(function(){  
		       nn+=125;      	 
               nn2+=1;
               nn3+=1;
               $(".expw1").html(nn);
               $(".expw2").html(nn2);
               $(".expw3").html(nn3);
                if(nn2==20){
        	  	clearInterval(tim)
        	  }
          },50)
		}else{
			nn2=0
			$(".listbtn").eq(12).css({"background":"#00024D","color":"#fff"})
			$(".exppic").animate({top:-200,opacity:0})
			$(".exppont").fadeOut()
	}
	if ($(".box").eq(13).position().top==(-num)){
		$(".listbtn").eq(13).css({"background":"#FFFC00","color":"#000"})
		$(".ajpic").eq(0).delay(500).fadeIn(300,function anjs(){
			$(this).next().fadeIn(300,anjs)
			
		})
		setInterval(function(){
			$(".shan").fadeIn(2000)
					  .fadeOut(2000)},2000)
	}else{
		$(".listbtn").eq(13).css({"background":"#00024D","color":"#fff"})
		$(".ajpic").fadeOut();
	}
	if ($(".box").eq(14).position().top==(-num)){
		$(".listbtn").eq(14).css({"background":"#FFFC00","color":"#000"})
		}else{
		$(".listbtn").eq(14).css({"background":"#00024D","color":"#fff"})
	}
}
 	$(".list").on("click",function(e){
           index=$(e.target).closest("li").index();
           num=-index*winh
            $(".boxin").animate({top:num});
        bx0()
              
    });  


})
