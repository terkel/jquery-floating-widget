/*
 * jQuery Floating Widget plugin v0.9
 * http://terkel.jp/archives/2011/05/jquery-floating-widget-plugin/
 *
 * Copyright (c) 2011 Takeru Suzuki
 * Dual licensed under the MIT and GPL licenses.
 */
(function ($) {
    $.fn.floatingWidget = function () {
        return this.each(function () {
            var $this             = $(this),
                $parent           = $this.offsetParent(),
                $window           = $(window),
                top               = $this.offset().top - parseFloat($this.css('marginTop').replace(/auto/, 0)),
                bottom            = $parent.offset().top + $parent.height() - $this.outerHeight(true),
                floatingClass     = 'floating',
                pinnedBottomClass = 'pinned-bottom';
            if ($parent.height() > $this.outerHeight(true)) {
                $window.scroll(function () {
                    var y = $window.scrollTop();
                    if (y > top) {
                        $this.addClass(floatingClass);
                        if (y > bottom) {
                            $this.removeClass(floatingClass).addClass(pinnedBottomClass);
                        } else {
                            $this.removeClass(pinnedBottomClass);
                        }
                    } else {
                        $this.removeClass(floatingClass);
                    }
                });
            }
        });
    };
})(jQuery);
