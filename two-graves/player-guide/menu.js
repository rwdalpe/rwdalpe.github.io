$(document).ready(function() {
	var widescreen = (window.matchMedia("(min-width: 50em)").matches || false);
	
	$("article.book > div.toc").slicknav({
		label : "",
		allowParentLinks : true,
		closeOnClick : function() { return !widescreen },
		init : function() {
			$("div.toc").addClass("js-on");
			$("article.book").addClass("js-on");
		},
		open : function(trigger) {
			if (trigger[0].className.indexOf("slicknav_btn") > -1 && !widescreen) {
				$(".slicknav_menu").css("height", "60%");
			}
		},
		close : function(trigger) {
			if (trigger[0].className.indexOf("slicknav_btn") > -1 && !widescreen) {
				$(".slicknav_menu").css("height", "");
			}
		}
	});
	
	$(window).resize(function() {
		var mediaMatch = (window.matchMedia("(min-width: 50em)").matches || false);
		if(mediaMatch != widescreen) {
			widescreen = mediaMatch;
			
			if(mediaMatch) {
				$(".slicknav_menu").css("height", "100%");
				$("article.book > div.toc").slicknav("open");
			} else {
				$(".slicknav_menu").css("height", "");
				$("article.book > div.toc").slicknav("close");
			}
		}
	});
	
	if(widescreen) {
		$("article.book > div.toc").slicknav("open");
	}
});