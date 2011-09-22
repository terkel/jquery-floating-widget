/*
 * jQuery Floating Widget plugin v0.9.1
 * http://terkel.jp/archives/2011/05/jquery-floating-widget-plugin/
 *
 * Copyright (c) 2011 Takeru Suzuki
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b){b.fn.floatingWidget=function(){return this.each(function(){var a=b(this),c=a.offsetParent(),d=b(window),e=a.offset().top-parseFloat(a.css("marginTop").replace(/auto/,0));c.height()>a.outerHeight(!0)&&d.scroll(function(){var b=d.scrollTop(),f=c.offset().top+c.height()-a.outerHeight(!0);b>e?(a.addClass("floating"),b>f?a.removeClass("floating").addClass("pinned-bottom"):a.removeClass("pinned-bottom")):a.removeClass("floating")})})}})(jQuery);
