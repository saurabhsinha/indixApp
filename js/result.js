var result = function(){
	var parseAndGeneratehtml = function(data){
		console.log(data)
		var headerImage = data.Image;
		var heading = data.Heading;
		var moreAtWebsite = data.AbstractURL;
		var abstractText = data.AbstractText;
		var abstractTextSub = abstractText.substring(0,50);
		
		if(headerImage==""){
			$(".zci__img").attr("src","images/noImage.png");
		}
		else{
			$(".zci__img").attr("src",headerImage);
		}
		if(heading==""){
			$(".headerLink").text("No Heading available");
		}
		else{
			$(".headerLink").text(heading);
		}
		$(".zci__content ").text("");
		if(abstractText==""){
			$(".zci__content ").text("No text available");
		}
		else{
			$(".zci__content ").text(abstractText);
		}
		
	}
	
	var formSubmit = function(query){
	    	$.ajax({
			      type: 'GET',
			      url: 'https://api.duckduckgo.com/',
			      data: { q: query, format: 'json', pretty: 1 },
			      jsonpCallback: 'jsonp',
			      dataType: 'jsonp'
			    }).then(function (data) {
			    	$("#search_form_input").val(query);
			    	parseAndGeneratehtml(data);
			    });
	};
	
	
	return {
		returnForm:function(query){
			console.log(query)
			formSubmit(query);
		}
	}
}();