function basics_addEvent(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, false);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on" + evType, fn);
		return r;
	}
}

function basics_initNavigation() {
	
	if (!document.getElementById || (document.body.style.webkitTransition === undefined && document.body.style.MozTransition === undefined))
		return;
	
	// Find #navigation
	var navElement = document.getElementById('navigation');
	if (navElement == null)
		return;
	
	navElement.className = (navElement.className.length == 0 ? "" : (navElement.className + " ")) + "fade-enabled";
	
	// Find ul
	var listElement = null;
	for (var i = 0; i < navElement.childNodes.length; i++) {
		if (navElement.childNodes[i].nodeName.toLowerCase() == "ul") {
			listElement = navElement.childNodes[i];
			break;
		}
	}
	
	if (listElement == null)
		return;
	
	// Add fading helpers to each list item. Note that this is just as effective on ::before and ::after, but this ensures a perfect fallback to the normal hovering for unsupported browsers.
	for (var i = 0; i < listElement.childNodes.length; i++) {
		
		var listItem = listElement.childNodes[i];
		if (listItem.nodeName.toLowerCase() == "li") {
			var fadeA = document.createElement("span");
			fadeA.className = "fade-helper regular";
			listItem.appendChild(fadeA);
			
			var fadeB = document.createElement("span");
			fadeB.className = "fade-helper hover";
			listItem.appendChild(fadeB);
		}
	}
}

basics_addEvent(window, 'load', basics_initNavigation);



// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-300913-1']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

//function basics_initDownloadAnalytics() {
//	
//	var anchors = document.getElementsByTagName('a');
//	for (var i = 0; i < anchors.length; i++) {
//		var anchor = anchors[i];
//		if (anchor.href.indexOf('/get/') >= 0) {
//			
//			basics_addEvent(anchor, 'click', function () {
//				var that=this;
//				_gaq.push(['_trackEvent', 'Download', this.href]);
//				setTimeout(function(){location.href=that.href;}, 250);
//				return true;
//			});
//		}
//	}
//}
//
//basics_addEvent(window, 'load', basics_initDownloadAnalytics);




// Sharing

function shareOnTwitter(anchor) {
	window.open(anchor.href, "", "toolbar=0, status=0, width=600, height=360");
}