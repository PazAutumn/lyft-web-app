$(document).ready(()=> {
	setTimeout(function() {
    $('.display').fadeOut(2000);
	}, 3000);
	setTimeout(function() {
    $('.first').fadeIn(3000);
	}, 5000);

	$("select").material_select();

 	$("#sign").click(function(){
		$(".first").hide();
		$(".second").fadeIn(3000);
	});

	$("#phone-back").click(function(){
		$(".second").hide();
		$(".first").fadeIn(3000);
	});

	$("#phone").keyup(function(){
		if($(this).val().length == 10){
			$("#phone-next").removeAttr("disabled");
		}else{
			$("#phone-next").attr("disabled", true);
		}
	});
	$("#phone-next").click(function(){
		var newCode = [];
		var phone = $("#phone").val();
		var number1 = Math.round(Math.random()*9);
		var number2 = Math.round(Math.random()*9);
		var number3 = Math.round(Math.random()*9);
		newCode.push("LAB-"+number1+number2+number3);
		alert("Tu código es "+newCode);
		$("#enter").html('<p id="#enter">Enter code sent to +56'+phone+'</p>');
		$(".second").hide();
		$(".third").fadeIn(3000);
	});

	$("#resend").click(function(){
		var newCode = [];
		var phone = $("#phone").val();
		var number1 = Math.round(Math.random()*9);
		var number2 = Math.round(Math.random()*9);
		var number3 = Math.round(Math.random()*9);
		newCode.push("LAB-"+number1+number2+number3);
		alert("Tu código es "+newCode);
	});
	$("#phone-back2").click(function(){
		$(".third").hide();
		$(".second").fadeIn(3000);
	});
	$("#phone-next2").click(function(){
		$(".third").hide();
		$(".fourth").fadeIn(3000);
	});
	$("#phone-back3").click(function(){
		$(".fourth").hide();
		$(".third").fadeIn(3000);
	});
	$("#phone-next3").click(function(){
		$(".fourth").hide();
		$(".final").fadeIn(3000);
	});
});

