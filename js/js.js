// JavaScript Document

var list = [
			"Bus",
			"Public Catering",
			"Travel",
			"Development",
			"IceCream",
			"Worker"
		];


jQuery(document).ready(function(){
	setTimeout(function(){
		$("#head").animate({left: "0px"}, 500);
	}, 1000);
	setTimeout(function(){
		$("#slide").animate({left: "0px"}, 500);
	}, 1200);
	setTimeout(function(){
		$("#discount").animate({left: "0px"}, 500);
	}, 1400);
	setTimeout(function(){
		$("#con").animate({ backgroundColor: "#ffffff"}, 500);
		$("#con").css({  boxShadow : "0 0 7px 7px rgba(255,255,255,0.7)",}, 500);
    }, 2000);
		setTimeout(function(){
		
		$("#con").animate({ backgroundColor: "#6e9eb9"}, 300);
		$("#con").css({  boxShadow : "none"});
    }, 2700);
	setTimeout(function(){
		$("#runer").animate({left: "90px"}, 2000);
	}, 2900);
	
	setTimeout(function(){	
		var i = 0;

			(function() {

	   		 if (i < 70) {
				i++
				$("#discount span").html("-" + i + "%");	
	        setTimeout(arguments.callee, 20);
	    } 
		})();
		setTimeout(function(){
				$(".clase_details").animate({ opacity: "1.0"}, 1000);
		}, 1500);
		
	}, 3200);
	
	
	
	
	$("#close").click(function () {
	   $("#con").animate({opacity: '0',top: '-5px'},500);
	   
	   setTimeout(function(){
		   $("body").append("<h1>");
			$("h1").html("This test jQuery and Less CSS");
			$("h1").animate({ opacity: 1.0,marginTop:"30px"}, 500);
		}, 500);
		
		setTimeout(function(){
		$("body").append("<ul>");
			for(i=0;i<list.length;i++){
				var li = $("<li>");
				var a = $("<a>");
				a.attr("href", "#");
				a.href="#";
				a.html(list[i]);
				li.append(a);
				$("ul").append(li);
			}
		}, 500);
		setTimeout(function(){
			$("ul").animate({opacity: "1.0"}, 500);
		}, 1000);
		}, 1000);
		setTimeout(function(){
			$("body").append("<p>");
			$("body p").attr("class","text");
			$("body p").html("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ");
			$("body p").animate({ opacity: "1.0"}, 1000);
		}, 1700);
		
		setTimeout(function(){
			$('img[name="back"]').animate({opacity: "1.0"}, 1000);
		}, 1900);
		setTimeout(function(){
			$('img[name="houses"]').animate({top: "-40px"}, 600);
		}, 2300);
		setTimeout(function(){
			$('img[name="lamp"]').animate({left: "52%"}, 600);
		}, 2900);
		setTimeout(function(){
			$('img[name="lamp"]').animate({left: "50%"}, 300);
		}, 3500);
		setTimeout(function(){
			$('img[name="bush"]').animate({left: "48%"}, 600);
		}, 3200);
		setTimeout(function(){
			$('img[name="bush"]').animate({left: "50%"}, 300);
		}, 3800);
		
		setTimeout(function(){
			$('img[name="car"]').css({marginLeft: "500px",opacity: "1.0"}, 2000);	
			$('img[name="car"]').animate({marginLeft: "-500px"}, 15000);
		}, 3000);
		setTimeout(function(){
			$('img[name="cloud"]').animate({opacity: "1.0"}, 2000);
		}, 3800);
		
		
		
    });
	

});	