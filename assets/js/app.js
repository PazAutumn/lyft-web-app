$(document).ready(()=> {
	setTimeout(function() {
    $('.display').fadeOut(2000);
	}, 3000);
	setTimeout(function() {
    $('.first').fadeIn(3000);
	}, 5000);

	$('select').material_select();

	$("#phone").keyup(function(){
		if($(this).val().length == 10){
			$("#phone-next").removeAttr("disabled");
		}else{
			$("#phone-next").attr("disabled", true);
		}
	});
	$("#sign").click(function(){
		$(".first").hide();
		$(".second").show();
	})

});

