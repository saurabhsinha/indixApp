var isIE8 = false,
    isIE9 = false,
    isMobile = false,
    supportTransition = true,
    isIEMobile = false,
    searchFormHomePage = $("#search_form_input_homepage");

//Debounce Function
(function($, sr) {
    "use strict";
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    // smartresize
    jQuery.fn[sr] = function(fn) {
        return fn ? this.on('resize', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'espressoResize');

var main = function(){
	var runinit = function(){
		// Detection for IE Version
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion = new Number(RegExp.$1);
            if (ieversion == 8) {
                isIE8 = true;
                $body.addClass('isIE8');
            } else if (ieversion == 9) {
                isIE9 = true;
                $body.addClass('isIE9');
            }
        };
     // Detection for Mobile Device
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            isMobile = true;
            $body.addClass('isMobile');
        };
     // Detection for CSS Transitions Support
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style;
        supportTransition = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
	}
      //function to get viewport/window size (width and height)
        var viewport = function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }
            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        };
        var fireApi = function(){
        	
        }
        return {
            //main function to initiate template pages
            init:function(){
            	runinit();
            },
            fireApi : function(){
        		var searchText = search_form_input_homepage.val;
        		console.log(searchText)
        	}
	}
}();