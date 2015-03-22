$(document).ready(function(){
	$(".chomp--link").click(function(){
		$content = $(".zci__content");
		if($(".zci").hasClass("has-chomp-expanded")){
			$(".zci").removeClass("has-chomp-expanded");
			$(".chomp--link__mr").show();
			$(".chomp--link__ls").hide();
		}
		else{
			$(".zci").addClass("has-chomp-expanded");
			$(".chomp--link__mr").hide();
			$(".chomp--link__ls").show();
		}
		
		
		
		
	})
});