$(document).ready(function(){
	$('.search--adv').submit(function() {
			event.preventDefault();
			
		})
	$("body").on('click','.chomp--link,.tile__expand ',function(){
		$content = $(".zci__content");
		if($(".zci").hasClass("has-chomp-expanded")){
			$(".zci").removeClass("has-chomp-expanded");
			$(".chomp--link__mr").show();
			$(".chomp--link__ls").hide();
			$(".tile").removeClass("is-open");
		}
		else{
			$(".zci").addClass("has-chomp-expanded");
			$(".chomp--link__mr").hide();
			$(".chomp--link__ls").show();
			$(".tile").addClass("is-open");
		}		
	})
	$('body').on('click','.one-line',function(){
		var data = $(this).data('link');
		//$('#search_form_input').val(data);
		var url = 'result.html?query=' + encodeURIComponent(data);
		document.location.href = url;
	});
	$('body').on('click','#search_button',function(){
		event.prevent
		var url = 'result.html?query=' + encodeURIComponent($('#search_form_input').val());
		document.location.href = url;
	})
});