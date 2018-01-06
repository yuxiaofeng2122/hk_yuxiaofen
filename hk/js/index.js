var aHeight=[400,600,700,900,1100,1300,1400,1600,1700,1800,1900,2100,2300,2600,2800,2900,3000];
var aHeight1=[];
var sum='';

window.onload=function(){
	$('.logo-children').css({'display':'block'});
	$('.logo-children').addClass('bounceInLeft animated');

	$('.biaoti').css({'display':'block'});
	$('.biaoti').addClass('fadeInRight animated');

	$('.biaoti1').css({'display':'block'});
	$('.biaoti1').addClass('fadeInRight animated');

	$('.nav').css({'display':'flex'});
	$('.nav').addClass('fadeInLeft animated');

	// $('.nav-link').css({'display':'block'});
	// $('.nav-link').addClass('flip animated');

	$('.title').css({'display':'block'});
	$('.title').addClass('fadeInRight animated');

	$('.HolyGrail-content-box').css({'display':'block'});
	$('.HolyGrail-content-box').addClass(' bounceInUp animated');
	var bodyHeight=document.body.clientWidth;
	console.log(bodyHeight)
	if(bodyHeight<321){
		shop(0.85334);
	}else if(bodyHeight>321&&bodyHeight<376){
		shop(1);
	}else if(bodyHeight>376&&bodyHeight<415){
		shop(1.104);
	}else if(bodyHeight>415&&bodyHeight<569){
		shop(1.5172);
	}else if(bodyHeight>569&&bodyHeight<668){
		shop(1.7812);
	}else if(bodyHeight>668&&bodyHeight<736){
		shop(1.9626);
	}else if(bodyHeight>736){
		shop(1.9626);
	}
   

    var st = $(this).scrollTop();
	// 商品通标题
	if(st>=aHeight1[0]){
		$('#rolling').css({'display':'block'});
		$('#rolling').addClass('flipInX animated');
	}
	// 商品通图片
	if(st>=aHeight1[1]){
		$('#rolling1').css({'display':'block'});
		$('#rolling1').addClass('rolling1');
	}
	// 会员通标题
	if(st>=aHeight1[2]){
		$('#rolling2').css({'display':'block'});
		$('#rolling2').addClass('flipInX animated');
	}
	// 会员通图片
	if(st>=aHeight1[3]){
		$('#rolling3').addClass('rolling3');
	}
	// 营销通标题
	if(st>=aHeight1[4]){
		$('#rolling4').css({'display':'block'});
		$('#rolling4').addClass('flipInX animated');
	}
	// 营销通图片
	if(st>=aHeight1[5]){
		$('#rolling5').addClass('rolling5');
	}
	// 新零售标题
	if(st>=aHeight1[6]){
		$('#rolling6').css({'display':'block'});
		$('#rolling6').addClass('flipInX animated');
	}
	// 新零售导航
	if(st>=aHeight1[7]){
		$('.retail-rolling').addClass('rolling70');
	}
	// 各行各业
	if(st>=aHeight1[8]){
		$('#rolling8').css({'display':'block'});
		$('#rolling8').addClass('flipInX animated');
	}
	// 各行各业导航
	if(st>=aHeight1[9]){
		$('.rolling9').css({'display':'block'});
		$('.rolling10').css({'display':'block'});
		$('.rolling9').addClass('fadeInRight animated');
		$('.rolling10').addClass('fadeInLeft animated');
	}

	// 客户案例
	if(st>=aHeight1[10]){
		$('#rolling11').css({'display':'block'});
		$('#rolling11').addClass('flipInX animated');
	}
	// 客户案例导航
	if(st>=aHeight1[11]){
		$('.rolling12').css({'display':'block'});
		$('.rolling13').css({'display':'block'});
		$('.rolling14').css({'display':'block'});
		$('.rolling12').addClass('fadeInRight animated');
		$('.rolling13').addClass('fadeInLeft animated');
		$('.rolling14').addClass('fadeInRight animated');
	}
	/*   技术积累*/
	if(st>=aHeight1[12]){
		$('.rolling15').css({'display':'block'});
		$('.rolling16').css({'display':'block'});
		$('.rolling15').addClass('fadeInRight animated');
		$('.rolling16').addClass('fadeInLeft animated');
	}
	// 平台接入
	if(st>=aHeight1[13]){
		$('.HolyGrail-platform').css({'display':'block'});
		$('.HolyGrail-platform').addClass('bounceIn animated');
	}
	// 版本
	if(st>=aHeight1[14]){
		$('#rolling17').css({'display':'block'});
		$('#rolling17').addClass('fadeInLeft animated');
	}
	if(st>=aHeight1[15]){
		$('#rolling18').css({'display':'block'});
		$('#rolling18').addClass('fadeInLeft animated');
		$('#rolling19').css({'display':'block'});
		$('#rolling19').addClass('fadeInRight animated');
	}
	if(st>=aHeight1[16]){
		$('#rolling20').css({'display':'block'});
		$('#rolling20').addClass('fadeInLeft animated');
		$('#rolling21').css({'display':'block'});
		$('#rolling21').addClass('fadeInRight animated');
		$('#rolling22').css({'display':'block'});
		$('#rolling22').addClass('fadeInLeft animated');
	}
	
}

function shop(a){
		for(var i=0;i<aHeight.length;i++){
			sum=aHeight[i]*a;
			aHeight1.push(sum);
		}
	}


/*    滚动控制页面   */
$(window).scroll(function (){


	var st = $(this).scrollTop();
	// 商品通标题
	if(st>=aHeight1[0]){
		$('#rolling').css({'display':'block'});
		$('#rolling').addClass('flipInX animated');
	}
	// 商品通图片
	if(st>=aHeight1[1]){
		$('#rolling1').css({'display':'block'});
		$('#rolling1').addClass('rolling1');
	}
	// 会员通标题
	if(st>=aHeight1[2]){
		$('#rolling2').css({'display':'block'});
		$('#rolling2').addClass('flipInX animated');
	}
	// 会员通图片
	if(st>=aHeight1[3]){
		$('#rolling3').addClass('rolling3');
	}
	// 营销通标题
	if(st>=aHeight1[4]){
		$('#rolling4').css({'display':'block'});
		$('#rolling4').addClass('flipInX animated');
	}
	// 营销通图片
	if(st>=aHeight1[5]){
		$('#rolling5').addClass('rolling5');
	}
	// 新零售标题
	if(st>=aHeight1[6]){
		$('#rolling6').css({'display':'block'});
		$('#rolling6').addClass('flipInX animated');
	}
	// 新零售导航
	if(st>=aHeight1[7]){
		$('.retail-rolling').addClass('rolling70');
	}
	// 各行各业
	if(st>=aHeight1[8]){
		$('#rolling8').css({'display':'block'});
		$('#rolling8').addClass('flipInX animated');
	}
	// 各行各业导航
	if(st>=aHeight1[9]){
		$('.rolling9').css({'display':'block'});
		$('.rolling10').css({'display':'block'});
		$('.rolling9').addClass('fadeInRight animated');
		$('.rolling10').addClass('fadeInLeft animated');
	}

	// 客户案例
	if(st>=aHeight1[10]){
		$('#rolling11').css({'display':'block'});
		$('#rolling11').addClass('flipInX animated');
	}
	// 客户案例导航
	if(st>=aHeight1[11]){
		$('.rolling12').css({'display':'block'});
		$('.rolling13').css({'display':'block'});
		$('.rolling14').css({'display':'block'});
		$('.rolling12').addClass('fadeInRight animated');
		$('.rolling13').addClass('fadeInLeft animated');
		$('.rolling14').addClass('fadeInRight animated');
	}
	/*   技术积累*/
	if(st>=aHeight1[12]){
		$('.rolling15').css({'display':'block'});
		$('.rolling16').css({'display':'block'});
		$('.rolling15').addClass('fadeInRight animated');
		$('.rolling16').addClass('fadeInLeft animated');
	}
	// 平台接入
	if(st>=aHeight1[13]){
		$('.HolyGrail-platform').css({'display':'block'});
		$('.HolyGrail-platform').addClass('bounceIn animated');
	}
	// 版本
	if(st>=aHeight1[14]){
		$('#rolling17').css({'display':'block'});
		$('#rolling17').addClass('fadeInLeft animated');
	}
	if(st>=aHeight1[15]){
		$('#rolling18').css({'display':'block'});
		$('#rolling18').addClass('fadeInLeft animated');
		$('#rolling19').css({'display':'block'});
		$('#rolling19').addClass('fadeInRight animated');
	}
	if(st>=aHeight1[16]){
		$('#rolling20').css({'display':'block'});
		$('#rolling20').addClass('fadeInLeft animated');
		$('#rolling21').css({'display':'block'});
		$('#rolling21').addClass('fadeInRight animated');
		$('#rolling22').css({'display':'block'});
		$('#rolling22').addClass('fadeInLeft animated');
	}

});