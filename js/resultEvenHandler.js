$(document).ready(function(){
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
});