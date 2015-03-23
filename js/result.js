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
		var relatedTopics = data.RelatedTopics;
		$.each(relatedTopics,function(i,d){
			var divRowOne = $("<div class='info  one-line'>");
			divRowOne.append(d.Result);
			var expandLink = $("<div class='tile__expand  tile--info__expand   js-tile-expand'></div>")
			$(".tile--info").append(divRowOne).append(expandLink);
		})
		if(moreAtWebsite != ""){
			var moreLink = $("<a href='"+moreAtWebsite+"' class='zci__more-at--info'><img width='16' height='16' class='zci__more-at__icon' src='images/wikipedia.png'>More at Wikipedia </a>");
			$(".zci__links > a:nth-child(1)").after(moreLink);
		}
		var results = data.Results;
		if(results.length>0){
			$.each(results,function(i,d){
				console.log(d)
				var result = $("<div id='r1-"+i+"' class='result results_links_deep highlight_d' data-nir='1'>");
				var resultBody = $("<div class='result__body links_main links_deep'>");
				var resultTitle = $("<h2 class='result__title'>");
				var resulta = $(d.Text);
				resulta.find('a').addClass('result__a');
				var resultSnippet = $("<div class='result__snippet'>")
				resultSnippet.append(d.Text)
				
				var resultExtra = '<div class="result__extras"> '+
									'<div class="result__extras__url"> '+
										'<span class="result__icon"><a '+
											'" '+
											'title=""><img '+
												'title="" id="" height="16" '+
												'width="16" class="result__icon__img" '+
												'src="'+d.Icon.URL+'"></a></span><a '+
											'class="result__url" '+
											'href="'+d.FirstURL+'"><span '+
											'class="result__url__domain">'+d.FirstURL+'</span></a> '+
									'</div> '+
									'<a href="/?q=duckduckgo+site:en.wikipedia.org" '+
										'title="Search domain en.wikipedia.org" class="result__menu">More '+
										'results</a>'+
								'</div>';
				result.append(resultBody).append(resultTitle).append(resulta).append(resultSnippet).append(resultExtra);
				$('.full-urls').append(result);
			})
		}
		else{
			var emptyText = $("<div>No result returned</div>")
			$('.full-urls').append(emptyText);
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