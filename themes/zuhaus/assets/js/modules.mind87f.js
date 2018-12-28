!function (e) {
    "use strict";

    function a() {
        mkdf.scroll = e(window).scrollTop(), mkdf.body.hasClass("mkdf-dark-header") && (mkdf.defaultHeaderStyle = "mkdf-dark-header"), mkdf.body.hasClass("mkdf-light-header") && (mkdf.defaultHeaderStyle = "mkdf-light-header")
    }

    function t() {
    }

    function o() {
        mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height()
    }

    function d() {
        mkdf.scroll = e(window).scrollTop()
    }

    switch (window.mkdf = {}, mkdf.modules = {}, mkdf.scroll = 0, mkdf.window = e(window), mkdf.document = e(document), mkdf.windowWidth = e(window).width(), mkdf.windowHeight = e(window).height(), mkdf.body = e("body"), mkdf.html = e("html, body"), mkdf.htmlEl = e("html"), mkdf.menuDropdownHeightSet = !1, mkdf.defaultHeaderStyle = "", mkdf.minVideoWidth = 1500, mkdf.videoWidthOriginal = 1280, mkdf.videoHeightOriginal = 720, mkdf.videoRatio = 1.61, mkdf.mkdfOnDocumentReady = a, mkdf.mkdfOnWindowLoad = t, mkdf.mkdfOnWindowResize = o, mkdf.mkdfOnWindowScroll = d, e(document).ready(a), e(window).load(t), e(window).resize(o), e(window).scroll(d), !0) {
        case mkdf.body.hasClass("mkdf-grid-1300"):
            mkdf.boxedLayoutWidth = 1350;
            break;
        case mkdf.body.hasClass("mkdf-grid-1200"):
            mkdf.boxedLayoutWidth = 1250;
            break;
        case mkdf.body.hasClass("mkdf-grid-1000"):
            mkdf.boxedLayoutWidth = 1050;
            break;
        case mkdf.body.hasClass("mkdf-grid-800"):
            mkdf.boxedLayoutWidth = 850;
            break;
        default:
            mkdf.boxedLayoutWidth = 1150
    }
}(jQuery), function (e) {
    "use strict";

    function a() {
        O().init(), d(), T().init(), m(), f(), u(), h(), k(), g(), v(), y()
    }

    function t() {
        C(), _(), p(), x().init()
    }

    function o() {
        h()
    }

    function d() {
        navigator.appVersion.toLowerCase().indexOf("mac") > -1 && mkdf.body.hasClass("mkdf-smooth-scroll") && mkdf.body.removeClass("mkdf-smooth-scroll")
    }

    function n() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", s, !1), window.onmousewheel = document.onmousewheel = s, document.onkeydown = r
    }

    function i() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", s, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
    }

    function s(e) {
        l(e)
    }

    function r(e) {
        for (var a = [37, 38, 39, 40], t = a.length; t--;) if (e.keyCode === a[t]) return void l(e)
    }

    function l(e) {
        e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
    }

    function m() {
        e("#mkdf-back-to-top").on("click", function (e) {
            e.preventDefault(), mkdf.html.animate({scrollTop: 0}, mkdf.window.scrollTop() / 3, "linear")
        })
    }

    function f() {
        mkdf.window.scroll(function () {
            var a, t = e(this).scrollTop(), o = e(this).height();
            a = t > 0 ? t + o / 2 : 1, c(a < 1e3 ? "off" : "on")
        })
    }

    function c(a) {
        var t = e("#mkdf-back-to-top");
        t.removeClass("off on"), "on" === a ? t.addClass("on") : t.addClass("off")
    }

    function u() {
        var a = e(".mkdf-self-hosted-video");
        a.length && a.mediaelementplayer({audioWidth: "100%"})
    }

    function h() {
        var a = e(".mkdf-self-hosted-video-holder .mkdf-video-wrap");
        a.length && a.each(function () {
            var a = e(this), t = a.closest(".mkdf-self-hosted-video-holder").outerWidth(), o = t / mkdf.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (a.parent().width(t), a.parent().height(o)), a.width(t), a.height(o), a.find("video, .mejs-overlay, .mejs-poster").width(t), a.find("video, .mejs-overlay, .mejs-poster").height(o)
        })
    }

    function k() {
        fluidvids.init({selector: ["iframe"], players: ["www.youtube.com", "player.vimeo.com"]})
    }

    function p() {
        if (mkdf.body.hasClass("mkdf-smooth-page-transitions")) {
            if (mkdf.body.hasClass("mkdf-smooth-page-transitions-preloader")) {
                var a = e("body > .mkdf-smooth-transition-loader.mkdf-mimic-ajax");
                a.fadeOut(500), e(window).bind("pageshow", function (e) {
                    e.originalEvent.persisted && a.fadeOut(500)
                })
            }
            if (mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout")) {
                e("a").click(function (a) {
                    var t = e(this);
                    (t.parents(".mkdf-shopping-cart-dropdown").length || t.parent(".product-remove").length) && t.hasClass("remove") || 1 === a.which && t.attr("href").indexOf(window.location.host) >= 0 && void 0 === t.data("rel") && void 0 === t.attr("rel") && !t.hasClass("lightbox-active") && (void 0 === t.attr("target") || "_self" === t.attr("target")) && t.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (a.preventDefault(), e(".mkdf-wrapper-inner").fadeOut(1e3, function () {
                        window.location = t.attr("href")
                    }))
                })
            }
        }
    }

    function g() {
        var a = e(".mkdf-preload-background");
        a.length && a.each(function () {
            var a = e(this);
            if ("" !== a.css("background-image") && "none" !== a.css("background-image")) {
                var t = a.attr("style");
                if (t = t.match(/url\(["']?([^'")]+)['"]?\)/), t = t ? t[1] : "") {
                    var o = new Image;
                    o.src = t, e(o).load(function () {
                        a.removeClass("mkdf-preload-background")
                    })
                }
            } else e(window).load(function () {
                a.removeClass("mkdf-preload-background")
            })
        })
    }

    function v() {
        e("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>'
        })
    }

    function y() {
        var a = e(".mkdf-search-post-type");
        a.length && a.each(function () {
            var a = e(this), t = a.find(".mkdf-post-type-search-field"),
                o = a.siblings(".mkdf-post-type-search-results"), d = a.find(".mkdf-search-loading"),
                n = a.find(".mkdf-search-icon");
            d.addClass("mkdf-hidden");
            var i, s = a.data("post-type");
            t.on("keyup paste", function () {
                var a = e(this);
                a.attr("autocomplete", "off"), d.removeClass("mkdf-hidden"), n.addClass("mkdf-hidden"), clearTimeout(i), i = setTimeout(function () {
                    var t = a.val();
                    if (t.length < 3) o.html(""), o.fadeOut(), d.addClass("mkdf-hidden"), n.removeClass("mkdf-hidden"); else {
                        var i = {action: "zuhaus_mikado_search_post_types", term: t, postType: s};
                        e.ajax({
                            type: "POST", data: i, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                                var a = JSON.parse(e);
                                "success" === a.status && (d.addClass("mkdf-hidden"), n.removeClass("mkdf-hidden"), o.html(a.data.html), o.fadeIn())
                            }, error: function (e, a, t) {
                                console.log("Status: " + a), console.log("Error: " + t), d.addClass("mkdf-hidden"), n.removeClass("mkdf-hidden"), o.fadeOut()
                            }
                        })
                    }
                }, 500)
            }), t.on("focusout", function () {
                d.addClass("mkdf-hidden"), n.removeClass("mkdf-hidden"), o.fadeOut()
            })
        })
    }

    function b(e) {
        var a = e.data(), t = {};
        for (var o in a) a.hasOwnProperty(o) && void 0 !== a[o] && !1 !== a[o] && (t[o] = a[o]);
        return t
    }

    function w(e, a) {
        var t = {action: a};
        for (var o in e) e.hasOwnProperty(o) && void 0 !== e[o] && !1 !== e[o] && (t[o] = e[o]);
        return t
    }

    function C() {
        var a = e(".mkdf-parallax-row-holder");
        a.length && a.each(function () {
            var a = e(this), t = a.data("parallax-bg-image"), o = .4 * a.data("parallax-bg-speed"), d = 0;
            void 0 !== a.data("parallax-bg-height") && !1 !== a.data("parallax-bg-height") && (d = parseInt(a.data("parallax-bg-height"))), a.css({"background-image": "url(" + t + ")"}), d > 0 && a.css({
                "min-height": d + "px",
                height: d + "px"
            }), a.parallax("50%", o)
        })
    }

    function x() {
        function a() {
            o.length && o.each(function () {
                var a = e(this), t = a.parents("aside.mkdf-sidebar"), o = a.parents(".wpb_widgetised_column"), d = "",
                    n = 0;
                if (i = a.offset().top, s = a.position().top, r = 0, l = 0, t.length) {
                    r = t.outerHeight(), l = t.outerWidth(), d = t, n = t.parent().parent().outerHeight();
                    var f = t.parent().parent().find(".mkdf-blog-holder");
                    f.length && (n -= parseInt(f.css("marginBottom")))
                } else o.length && (r = o.outerHeight(), l = o.outerWidth(), d = o, n = o.parents(".vc_row").outerHeight());
                m.push({
                    object: a,
                    offset: i,
                    position: s,
                    height: r,
                    width: l,
                    sidebarHolder: d,
                    sidebarHolderHeight: n
                })
            })
        }

        function t() {
            m.length && e.each(m, function (a) {
                var t = (m[a].object, m[a].offset), o = m[a].position, d = m[a].height, i = m[a].width,
                    s = m[a].sidebarHolder, r = m[a].sidebarHolderHeight;
                if (mkdf.body.hasClass("mkdf-fixed-on-scroll")) {
                    var l = e(".mkdf-fixed-wrapper.fixed");
                    l.length && (n = l.outerHeight() + mkdfGlobalVars.vars.mkdfAddForAdminBar)
                } else mkdf.body.hasClass("mkdf-no-behavior") && (n = mkdfGlobalVars.vars.mkdfAddForAdminBar);
                if (mkdf.windowWidth > 1024 && s.length) {
                    var f = -(o - n), c = d - o - 40, u = r + t - n - o - mkdfGlobalVars.vars.mkdfTopBarHeight;
                    if (mkdf.scroll >= t - n && d < r) if (s.hasClass("mkdf-sticky-sidebar-appeared") ? s.css({top: f + "px"}) : s.addClass("mkdf-sticky-sidebar-appeared").css({
                        position: "fixed",
                        top: f + "px",
                        width: i,
                        "margin-top": "-10px"
                    }).animate({"margin-top": "0"}, 200), mkdf.scroll + c >= u) {
                        var h = r - c + f - n;
                        s.css({position: "absolute", top: h + "px"})
                    } else s.hasClass("mkdf-sticky-sidebar-appeared") && s.css({
                        position: "fixed",
                        top: f + "px"
                    }); else s.removeClass("mkdf-sticky-sidebar-appeared").css({
                        position: "relative",
                        top: "0",
                        width: "auto"
                    })
                } else s.removeClass("mkdf-sticky-sidebar-appeared").css({
                    position: "relative",
                    top: "0",
                    width: "auto"
                })
            })
        }

        var o = e(".mkdf-widget-sticky-sidebar"), d = e(".mkdf-page-header"), n = d.length ? d.outerHeight() : 0, i = 0,
            s = 0, r = 0, l = 0, m = [];
        return {
            init: function () {
                a(), t(), e(window).scroll(function () {
                    t()
                })
            }, reInit: t
        }
    }

    function _() {
        var a = e(".mkdf-owl-slider");
        a.length && a.each(function () {
            var a, t = e(this), o = e(this), d = t.children().length, n = 1, i = !0, s = !0, r = !0, l = 5e3, m = 600,
                f = 0, c = 0, u = 0, h = 0, k = !1, p = !1, g = !1, v = !1, y = !1, b = !0, w = !1, x = !1,
                _ = !!t.hasClass("mkdf-pl-is-slider"), S = _ ? t.parent() : t;
            if (void 0 === t.data("number-of-items") || !1 === t.data("number-of-items") || _ || (n = t.data("number-of-items")), void 0 !== S.data("number-of-columns") && !1 !== S.data("number-of-columns") && _ && (n = S.data("number-of-columns")), "no" === S.data("enable-loop") && (i = !1), "no" === S.data("enable-autoplay") && (s = !1), "no" === S.data("enable-autoplay-hover-pause") && (r = !1), void 0 !== S.data("slider-speed") && !1 !== S.data("slider-speed") && (l = S.data("slider-speed")), void 0 !== S.data("slider-speed-animation") && !1 !== S.data("slider-speed-animation") && (m = S.data("slider-speed-animation")), void 0 !== S.data("slider-margin") && !1 !== S.data("slider-margin") ? f = "no" === S.data("slider-margin") ? 0 : S.data("slider-margin") : t.parent().hasClass("mkdf-huge-space") ? f = 60 : t.parent().hasClass("mkdf-large-space") ? f = 50 : t.parent().hasClass("mkdf-medium-space") ? f = 40 : t.parent().hasClass("mkdf-normal-space") ? f = 30 : t.parent().hasClass("mkdf-small-space") ? f = 20 : t.parent().hasClass("mkdf-tiny-space") && (f = 10), "yes" === S.data("slider-padding") && (k = !0, h = parseInt(.28 * t.outerWidth()), f = 50), "yes" === S.data("enable-center") && (p = !0), "yes" === S.data("enable-auto-width") && (g = !0), void 0 !== S.data("slider-animate-in") && !1 !== S.data("slider-animate-in") && (v = S.data("slider-animate-in")), void 0 !== S.data("slider-animate-out") && !1 !== S.data("slider-animate-out") && (y = S.data("slider-animate-out")), "no" === S.data("enable-navigation") && (b = !1), "yes" === S.data("enable-pagination") && (w = !0), "yes" === S.data("enable-thumbnail") && (x = !0), b && w && t.addClass("mkdf-slider-has-both-nav"), d <= 1 && (i = !1, s = !1, b = !1, w = !1), t.hasClass("mkdf-property-single-gallery-holder")) var T = !0; else T = !1;
            var O = 2, I = 3, z = n;
            if (n < 3 && (O = n, I = n), n > 4 && (z = 4), (k || f > 30) && (c = 20, u = 30), f > 0 && f <= 30 && (c = f, u = f), t.waitForImages(function () {
                o.owlCarousel({
                    items: n,
                    loop: i,
                    autoplay: s,
                    autoplayHoverPause: r,
                    autoplayTimeout: l,
                    smartSpeed: m,
                    margin: f,
                    stagePadding: h,
                    center: p,
                    autoWidth: g,
                    animateInClass: v,
                    animateOut: y,
                    dots: w,
                    nav: b,
                    navText: ['<span class="mkdf-prev-icon  arrow_carrot-left"></span>', '<span class="mkdf-next-icon  arrow_carrot-right"></span>'],
                    responsive: {
                        0: {items: 1, margin: c, stagePadding: 0, center: !1, autoWidth: T},
                        681: {items: O, margin: u},
                        769: {items: I, margin: u},
                        1025: {items: z},
                        1281: {items: n}
                    },
                    onInitialize: function () {
                        setTimeout(function () {
                            t.css("visibility", "visible").css("opacity", 1)
                        }, 500), C(), x && a.find(".mkdf-slider-thumbnail-item:first-child").addClass("active")
                    },
                    onTranslate: function (e) {
                        if (x) {
                            var t = e.item.index + 1;
                            a.find(".mkdf-slider-thumbnail-item.active").removeClass("active"), a.find(".mkdf-slider-thumbnail-item:nth-child(" + t + ")").addClass("active")
                        }
                    },
                    onDrag: function (e) {
                        if (mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout")) {
                            e.isTrigger > 0 && setTimeout(function () {
                                t.addClass("mkdf-slider-is-moving")
                            }, 100)
                        }
                    },
                    onDragged: function () {
                        mkdf.body.hasClass("mkdf-smooth-page-transitions-fadeout") && t.hasClass("mkdf-slider-is-moving") && setTimeout(function () {
                            t.removeClass("mkdf-slider-is-moving")
                        }, 300), x && (a.find(".mkdf-slider-thumbnail-item.active").removeClass("active"), a.find(".mkdf-slider-thumbnail-item:nth-child(" + index + ")").addClass("active"))
                    }
                })
            }), x) {
                a = t.parent().find(".mkdf-slider-thumbnail");
                var H = parseInt(a.data("thumbnail-count")), D = "";
                switch (H % 6) {
                    case 2:
                        D = "two";
                        break;
                    case 3:
                        D = "three";
                        break;
                    case 4:
                        D = "four";
                        break;
                    case 5:
                        D = "five";
                        break;
                    case 0:
                    default:
                        D = "six"
                }
                "" !== D && a.addClass("mkdf-slider-columns-" + D), a.find(".mkdf-slider-thumbnail-item").click(function () {
                    e(this).siblings(".active").removeClass("active"), e(this).addClass("active"), o.trigger("to.owl.carousel", [e(this).index(), m])
                })
            }
        })
    }

    var S = {};
    mkdf.modules.common = S, S.mkdfFluidVideo = k, S.mkdfEnableScroll = i, S.mkdfDisableScroll = n, S.mkdfOwlSlider = _, S.mkdfInitParallax = C, S.mkdfInitSelfHostedVideoPlayer = u, S.mkdfSelfHostedVideoSize = h, S.mkdfPrettyPhoto = v, S.mkdfStickySidebarWidget = x, S.getLoadMoreData = b, S.setLoadMoreAjaxData = w, S.mkdfOnDocumentReady = a, S.mkdfOnWindowLoad = t, S.mkdfOnWindowResize = o, e(document).ready(a), e(window).load(t), e(window).resize(o);
    var T = function () {
        var a = function (a) {
            e(".mkdf-main-menu .mkdf-active-item, .mkdf-mobile-nav .mkdf-active-item, .mkdf-fullscreen-menu .mkdf-active-item").removeClass("mkdf-active-item"), a.parent().addClass("mkdf-active-item"), e(".mkdf-main-menu a, .mkdf-mobile-nav a, .mkdf-fullscreen-menu a").removeClass("current"), a.addClass("current")
        }, t = function () {
            var t = e("[data-mkdf-anchor]");
            t.waypoint(function (t) {
                "down" === t && a(e("a[href='" + window.location.href.split("#")[0] + "#" + e(this.element).data("mkdf-anchor") + "']"))
            }, {offset: "50%"}), t.waypoint(function (t) {
                "up" === t && a(e("a[href='" + window.location.href.split("#")[0] + "#" + e(this.element).data("mkdf-anchor") + "']"))
            }, {
                offset: function () {
                    return -(e(this.element).outerHeight() - 150)
                }
            })
        }, o = function () {
            var a = window.location.hash.split("#")[1];
            "" !== a && e('[data-mkdf-anchor="' + a + '"]').length > 0 && d(a)
        }, d = function (t) {
            var o, d = e("a"), i = t, s = "" !== i ? e('[data-mkdf-anchor="' + i + '"]') : "";
            if ("" !== i && s.length > 0) {
                var r = s.offset().top;
                return o = r - n(r) - mkdfGlobalVars.vars.mkdfAddForAdminBar, a(d), mkdf.html.stop().animate({scrollTop: Math.round(o)}, 1e3, function () {
                    history.pushState && history.pushState(null, "", "#" + i)
                }), !1
            }
        }, n = function (e) {
            "mkdf-sticky-header-on-scroll-down-up" === mkdf.modules.stickyHeader.behaviour && (mkdf.modules.stickyHeader.isStickyVisible = e > mkdf.modules.header.stickyAppearAmount), "mkdf-sticky-header-on-scroll-up" === mkdf.modules.stickyHeader.behaviour && e > mkdf.scroll && (mkdf.modules.stickyHeader.isStickyVisible = !1);
            var a = mkdf.modules.stickyHeader.isStickyVisible ? mkdfGlobalVars.vars.mkdfStickyHeaderTransparencyHeight : mkdfPerPageVars.vars.mkdfHeaderTransparencyHeight;
            return mkdf.windowWidth < 1025 && (a = 0), a
        }, i = function () {
            mkdf.document.on("click", ".mkdf-main-menu a, .mkdf-fullscreen-menu a, .mkdf-btn, .mkdf-anchor, .mkdf-mobile-nav a", function () {
                var t, o = e(this), d = o.prop("hash").split("#")[1],
                    i = "" !== d ? e('[data-mkdf-anchor="' + d + '"]') : "";
                if ("" !== d && i.length > 0) {
                    var s = i.offset().top;
                    return t = s - n(s) - mkdfGlobalVars.vars.mkdfAddForAdminBar, a(o), mkdf.html.stop().animate({scrollTop: Math.round(t)}, 1e3, function () {
                        history.pushState && history.pushState(null, "", "#" + d)
                    }), !1
                }
            })
        };
        return {
            init: function () {
                e("[data-mkdf-anchor]").length && (i(), t(), e(window).load(function () {
                    o()
                }))
            }
        }
    }, O = function () {
        var a = e(".mkdf-icon-has-hover"), t = function (e) {
            if (void 0 !== e.data("hover-color")) {
                var a = function (e) {
                    e.data.icon.css("color", e.data.color)
                }, t = e.data("hover-color"), o = e.css("color");
                "" !== t && (e.on("mouseenter", {icon: e, color: t}, a), e.on("mouseleave", {icon: e, color: o}, a))
            }
        };
        return {
            init: function () {
                a.length && a.each(function () {
                    t(e(this))
                })
            }
        }
    }
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        e(document).on("click", ".mkdf-like", function () {
            var a, t = e(this), o = t.attr("id");
            if (t.hasClass("liked")) return !1;
            void 0 !== t.data("type") && (a = t.data("type"));
            var d = {action: "zuhaus_mikado_like", likes_id: o, type: a};
            e.post(mkdfGlobalVars.vars.mkdfAjaxUrl, d, function (e) {
                t.html(e).addClass("liked").attr("title", "You already like this!")
            });
            return !1
        })
    }

    ({}).mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        d()
    }

    function t() {
        n().init()
    }

    function o() {
        n().scroll()
    }

    function d() {
        var a = e(".mkdf-blog-list-holder.mkdf-bl-masonry");
        a.length && a.each(function () {
            var a = e(this), t = a.find(".mkdf-blog-list");
            t.waitForImages(function () {
                t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".mkdf-bl-item",
                    percentPosition: !0,
                    packery: {gutter: ".mkdf-bl-grid-gutter", columnWidth: ".mkdf-bl-grid-sizer"}
                }), t.css("opacity", "1")
            })
        })
    }

    function n() {
        var a = e(".mkdf-blog-list-holder"), t = function (a) {
            var t = a.find(".mkdf-bl-standard-pagination li");
            t.length && t.each(function () {
                var t = e(this).children("a"), o = 1;
                t.on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), void 0 !== t.data("paged") && !1 !== t.data("paged") && (o = t.data("paged")), n(a, o)
                })
            })
        }, o = function (e) {
            e.find(".mkdf-blog-pag-load-more a").on("click", function (a) {
                a.preventDefault(), a.stopPropagation(), n(e)
            })
        }, d = function (e) {
            var a = e.outerHeight(), t = e.offset().top, o = a + t - mkdfGlobalVars.vars.mkdfAddForAdminBar;
            !e.hasClass("mkdf-bl-pag-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > o && n(e)
        }, n = function (a, t) {
            var o, d, n = a.find(".mkdf-blog-list");
            void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (d = a.data("max-num-pages")), a.hasClass("mkdf-bl-pag-standard-blog-list") && a.data("next-page", t), a.hasClass("mkdf-bl-pag-infinite-scroll") && a.addClass("mkdf-bl-pag-infinite-scroll-started");
            var f = mkdf.modules.common.getLoadMoreData(a), c = a.find(".mkdf-blog-pag-loading");
            if ((o = f.nextPage) <= d) {
                a.hasClass("mkdf-bl-pag-standard-blog-list") ? (c.addClass("mkdf-showing mkdf-standard-pag-trigger"), a.addClass("mkdf-bl-pag-standard-blog-list-animate")) : c.addClass("mkdf-showing");
                var u = mkdf.modules.common.setLoadMoreAjaxData(f, "zuhaus_mikado_blog_shortcode_load_more");
                e.ajax({
                    type: "POST", data: u, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (t) {
                        a.hasClass("mkdf-bl-pag-standard-blog-list") || o++, a.data("next-page", o);
                        var f = e.parseJSON(t), u = f.html;
                        a.hasClass("mkdf-bl-pag-standard-blog-list") ? (i(a, d, o), a.waitForImages(function () {
                            a.hasClass("mkdf-bl-masonry") ? s(a, n, c, u) : (r(a, n, c, u), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit())
                        })) : a.waitForImages(function () {
                            a.hasClass("mkdf-bl-masonry") ? l(n, c, u) : (m(n, c, u), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit())
                        }), a.hasClass("mkdf-bl-pag-infinite-scroll-started") && a.removeClass("mkdf-bl-pag-infinite-scroll-started")
                    }
                })
            }
            o === d && a.find(".mkdf-blog-pag-load-more").hide()
        }, i = function (e, a, t) {
            var o = e.find(".mkdf-bl-standard-pagination"), d = o.find("li.mkdf-bl-pag-number"),
                n = o.find("li.mkdf-bl-pag-prev a"), i = o.find("li.mkdf-bl-pag-next a");
            d.removeClass("mkdf-bl-pag-active"), d.eq(t - 1).addClass("mkdf-bl-pag-active"), n.data("paged", t - 1), i.data("paged", t + 1), t > 1 ? n.css({opacity: "1"}) : n.css({opacity: "0"}), t === a ? i.css({opacity: "0"}) : i.css({opacity: "1"})
        }, s = function (e, a, t, o) {
            a.html(o).isotope("reloadItems").isotope({sortBy: "original-order"}), t.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-bl-pag-standard-blog-list-animate"), setTimeout(function () {
                a.isotope("layout"), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit()
            }, 600)
        }, r = function (e, a, t, o) {
            t.removeClass("mkdf-showing mkdf-standard-pag-trigger"), e.removeClass("mkdf-bl-pag-standard-blog-list-animate"), a.html(o)
        }, l = function (e, a, t) {
            e.append(t).isotope("reloadItems").isotope({sortBy: "original-order"}), a.removeClass("mkdf-showing"), setTimeout(function () {
                e.isotope("layout"), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit()
            }, 600)
        }, m = function (e, a, t) {
            a.removeClass("mkdf-showing"), e.append(t)
        };
        return {
            init: function () {
                a.length && a.each(function () {
                    var a = e(this);
                    a.hasClass("mkdf-bl-pag-standard-blog-list") && t(a), a.hasClass("mkdf-bl-pag-load-more") && o(a), a.hasClass("mkdf-bl-pag-infinite-scroll") && d(a)
                })
            }, scroll: function () {
                a.length && a.each(function () {
                    var a = e(this);
                    a.hasClass("mkdf-bl-pag-infinite-scroll") && d(a)
                })
            }
        }
    }

    var i = {};
    mkdf.modules.blogListSC = i, i.mkdfOnDocumentReady = a, i.mkdfOnWindowLoad = t, i.mkdfOnWindowScroll = o, e(document).ready(a), e(window).load(t), e(window).scroll(o)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t(), o()
    }

    function t() {
        var a, t = e(".mkdf-blog-holder.mkdf-blog-chequered"), o = t.children(".mkdf-blog-holder-inner");
        t.length && (a = o.find(".mkdf-blog-masonry-grid-sizer").outerWidth(), o.children("article").css({height: a + "px"}), o.isotope("layout", function () {
            o.css("opacity", "1")
        }))
    }

    function o() {
        e(document.body).on("blog_list_load_more_trigger", function () {
            t()
        })
    }

    var d = {};
    mkdf.modules.blogChequered = d, d.mkdfOnWindowLoad = a, e(window).load(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        d(), i()
    }

    function t() {
        n()
    }

    function o() {
        d()
    }

    function d() {
        var a = e(".mkdf-blog-holder.mkdf-blog-masonry-gallery");
        a.length && a.each(function () {
            var a = e(this), t = a.children(".mkdf-blog-holder-inner"), o = t.find("article"),
                d = 1.25 * t.find(".mkdf-blog-masonry-grid-sizer").width();
            o.css({height: d + "px"}), t.isotope("layout", function () {
            }), n()
        })
    }

    function n() {
        var a = e(".mkdf-blog-holder.mkdf-blog-masonry-gallery");
        a.length && a.each(function () {
            var a = e(this), t = a.find("article"), o = a.find(".mkdf-blog-pagination-holder"), d = 0;
            t.each(function () {
                var a = e(this);
                setTimeout(function () {
                    a.appear(function () {
                        d++, 7 == d && (d = 0), setTimeout(function () {
                            a.addClass("mkdf-appeared")
                        }, 200 * d)
                    }, {accX: 0, accY: 0})
                }, 150)
            }), o.appear(function () {
                o.addClass("mkdf-appeared")
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        })
    }

    function i() {
        e(document.body).on("blog_list_load_more_trigger", function () {
            n()
        })
    }

    var s = {};
    mkdf.modules.blogMasonryGallery = s, s.mkdfOnDocumentReady = a, s.mkdfOnWindowLoad = t, s.mkdfOnWindowResize = o, e(document).ready(a), e(window).load(t), e(window).resize(o)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t(), o()
    }

    function t() {
        var a = e(".mkdf-blog-holder.mkdf-blog-narrow");
        a.length && a.each(function () {
            var a = e(this), t = a.find("article"), o = a.find(".mkdf-blog-pagination-holder");
            t.each(function () {
                var a = e(this);
                a.appear(function () {
                    a.addClass("mkdf-appeared")
                }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
            }), o.appear(function () {
                o.addClass("mkdf-appeared")
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        })
    }

    function o() {
        e(document.body).on("blog_list_load_more_trigger", function () {
            t()
        })
    }

    var d = {};
    mkdf.modules.blogNarrow = d, d.mkdfOnWindowLoad = a, e(window).load(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        n(), s()
    }

    function t() {
        r().init()
    }

    function o() {
        s()
    }

    function d() {
        r().scroll()
    }

    function n() {
        e("audio.mkdf-blog-audio").mediaelementplayer({audioWidth: "100%"})
    }

    function i(e, a) {
        if (a.hasClass("mkdf-masonry-images-fixed")) {
            var t = parseInt(a.find("article").css("padding-left")), o = a.find(".mkdf-post-size-default"),
                d = a.find(".mkdf-post-size-large-width"), n = a.find(".mkdf-post-size-large-height"),
                i = a.find(".mkdf-post-size-large-width-height");
            mkdf.windowWidth > 680 ? (o.css("height", e - 2 * t), n.css("height", Math.round(2 * e) - 2 * t), i.css("height", Math.round(2 * e) - 2 * t), d.css("height", e - 2 * t)) : (o.css("height", e), n.css("height", e), i.css("height", e), d.css("height", Math.round(e / 2)))
        }
    }

    function s() {
        var a = e(".mkdf-blog-holder.mkdf-blog-type-masonry");
        a.length && a.each(function () {
            var a = e(this), t = a.children(".mkdf-blog-holder-inner");
            i(a.find(".mkdf-blog-masonry-grid-sizer").width(), a), t.waitForImages(function () {
                t.isotope({
                    layoutMode: "packery",
                    itemSelector: "article",
                    percentPosition: !0,
                    packery: {gutter: ".mkdf-blog-masonry-grid-gutter", columnWidth: ".mkdf-blog-masonry-grid-sizer"}
                }), t.css("opacity", "1"), setTimeout(function () {
                    t.isotope("layout")
                }, 800)
            })
        })
    }

    function r() {
        var a = e(".mkdf-blog-holder"), t = function (e) {
            e.find(".mkdf-blog-pag-load-more a").on("click", function (a) {
                a.preventDefault(), a.stopPropagation(), d(e)
            })
        }, o = function (e) {
            var a = e.outerHeight(), t = e.offset().top, o = a + t - mkdfGlobalVars.vars.mkdfAddForAdminBar;
            !e.hasClass("mkdf-blog-pagination-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > o && d(e)
        }, d = function (a) {
            var t, o, d = a.children(".mkdf-blog-holder-inner");
            void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (o = a.data("max-num-pages")), a.hasClass("mkdf-blog-pagination-infinite-scroll") && a.addClass("mkdf-blog-pagination-infinite-scroll-started");
            var l = mkdf.modules.common.getLoadMoreData(a), m = a.find(".mkdf-blog-pag-loading");
            if ((t = l.nextPage) <= o) {
                m.addClass("mkdf-showing");
                var f = mkdf.modules.common.setLoadMoreAjaxData(l, "zuhaus_mikado_blog_load_more");
                e.ajax({
                    type: "POST", data: f, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (o) {
                        t++, a.data("next-page", t);
                        var l = e.parseJSON(o), f = l.html;
                        a.waitForImages(function () {
                            a.hasClass("mkdf-blog-type-masonry") ? (s(d, m, f), i(d.find(".mkdf-blog-masonry-grid-sizer").width(), a)) : r(d, m, f), setTimeout(function () {
                                n(), mkdf.modules.common.mkdfOwlSlider(), mkdf.modules.common.mkdfFluidVideo(), mkdf.modules.common.mkdfInitSelfHostedVideoPlayer(), mkdf.modules.common.mkdfSelfHostedVideoSize(), "function" == typeof mkdf.modules.common.mkdfStickySidebarWidget && mkdf.modules.common.mkdfStickySidebarWidget().reInit(), e(document.body).trigger("blog_list_load_more_trigger")
                            }, 400)
                        }), a.hasClass("mkdf-blog-pagination-infinite-scroll-started") && a.removeClass("mkdf-blog-pagination-infinite-scroll-started")
                    }
                })
            }
            t === o && a.find(".mkdf-blog-pag-load-more").hide()
        }, s = function (e, a, t) {
            e.append(t).isotope("reloadItems").isotope({sortBy: "original-order"}), a.removeClass("mkdf-showing"), setTimeout(function () {
                e.isotope("layout")
            }, 600)
        }, r = function (e, a, t) {
            a.removeClass("mkdf-showing"), e.append(t)
        };
        return {
            init: function () {
                a.length && a.each(function () {
                    var a = e(this);
                    a.hasClass("mkdf-blog-pagination-load-more") && t(a), a.hasClass("mkdf-blog-pagination-infinite-scroll") && o(a)
                })
            }, scroll: function () {
                a.length && a.each(function () {
                    var a = e(this);
                    a.hasClass("mkdf-blog-pagination-infinite-scroll") && o(a)
                })
            }
        }
    }

    var l = {};
    mkdf.modules.blog = l, l.mkdfOnDocumentReady = a, l.mkdfOnWindowLoad = t, l.mkdfOnWindowResize = o, l.mkdfOnWindowScroll = d, e(document).ready(a), e(window).load(t), e(window).resize(o), e(window).scroll(d)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e("a.mkdf-fullscreen-menu-opener");
        if (a.length) {
            var t, o = e(".mkdf-fullscreen-menu-holder-outer"), d = !1, n = !1,
                i = e(".mkdf-fullscreen-above-menu-widget-holder"), s = e(".mkdf-fullscreen-below-menu-widget-holder"),
                r = e(".mkdf-fullscreen-menu-holder-outer nav > ul > li > a"),
                l = e(".mkdf-fullscreen-menu > ul li.has_sub > a"),
                m = e(".mkdf-fullscreen-menu ul li:not(.has_sub) a");
            o.height(mkdf.windowHeight).niceScroll({
                scrollspeed: 30,
                mousescrollstep: 20,
                cursorwidth: 0,
                cursorborder: 0,
                cursorborderradius: 0,
                cursorcolor: "transparent",
                autohidemode: !1,
                horizrailenabled: !1
            }), e(window).resize(function () {
                o.height(mkdf.windowHeight)
            }), mkdf.body.hasClass("mkdf-fade-push-text-right") ? (t = "mkdf-push-nav-right", d = !0) : mkdf.body.hasClass("mkdf-fade-push-text-top") && (t = "mkdf-push-text-top", n = !0), (d || n) && (i.length && i.children().css({
                "-webkit-animation-delay": "0ms",
                "-moz-animation-delay": "0ms",
                "animation-delay": "0ms"
            }), r.each(function (a) {
                e(this).css({
                    "-webkit-animation-delay": 70 * (a + 1) + "ms",
                    "-moz-animation-delay": 70 * (a + 1) + "ms",
                    "animation-delay": 70 * (a + 1) + "ms"
                })
            }), s.length && s.children().css({
                "-webkit-animation-delay": 70 * (r.length + 1) + "ms",
                "-moz-animation-delay": 70 * (r.length + 1) + "ms",
                "animation-delay": 70 * (r.length + 1) + "ms"
            })), a.on("click", function (o) {
                o.preventDefault(), a.hasClass("mkdf-fm-opened") ? (a.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), mkdf.modules.common.mkdfEnableScroll(), e("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                    e("nav.popup_menu").getNiceScroll().resize()
                })) : (a.addClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-out").addClass("mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in"), mkdf.body.removeClass(t), mkdf.modules.common.mkdfDisableScroll(), e(document).keyup(function (o) {
                    27 == o.keyCode && (a.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), mkdf.modules.common.mkdfEnableScroll(), e("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                        e("nav.popup_menu").getNiceScroll().resize()
                    }))
                }))
            }), l.on("tap click", function (a) {
                a.preventDefault();
                var t = e(this), d = t.parent();
                if (d.hasClass("has_sub")) {
                    var n = d.find("> ul.sub_menu");
                    n.is(":visible") ? (n.slideUp(450, "easeInOutQuint", function () {
                        o.getNiceScroll().resize()
                    }), d.removeClass("open_sub")) : (d.addClass("open_sub"), 1 === l.length ? d.removeClass("open_sub").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                        o.getNiceScroll().resize(), n.slideDown(400, "easeInOutQuint", function () {
                            o.getNiceScroll().resize()
                        })
                    }) : d.siblings().removeClass("open_sub").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                        o.getNiceScroll().resize(), n.slideDown(400, "easeInOutQuint", function () {
                            o.getNiceScroll().resize()
                        })
                    }))
                }
                return !1
            }), m.click(function (o) {
                if ("http://#" === e(this).attr("href") || "#" === e(this).attr("href")) return !1;
                1 == o.which && (a.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-fullscreen-menu-opened"), mkdf.body.removeClass("mkdf-fullscreen-fade-in").addClass("mkdf-fullscreen-fade-out"), mkdf.body.addClass(t), e("nav.mkdf-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                    e("nav.popup_menu").getNiceScroll().resize()
                }), mkdf.modules.common.mkdfEnableScroll())
            })
        }
    }

    var o = {};
    mkdf.modules.headerMinimal = o, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t(), o()
    }

    function t() {
        var a = e(".mkdf-mobile-header .mkdf-mobile-menu-opener"), t = e(".mkdf-mobile-header .mkdf-mobile-nav"),
            o = e(".mkdf-mobile-nav .mobile_arrow, .mkdf-mobile-nav h6, .mkdf-mobile-nav a.mkdf-mobile-no-link");
        a.length && t.length && a.on("tap click", function (e) {
            e.stopPropagation(), e.preventDefault(), t.is(":visible") ? (t.slideUp(450, "easeInOutQuint"), a.removeClass("mkdf-mobile-menu-opened")) : (t.slideDown(450, "easeInOutQuint"),
                a.addClass("mkdf-mobile-menu-opened"))
        }), o.length && o.each(function () {
            e(this).on("tap click", function (a) {
                var t = e(this), d = t.parent("li");
                if (d.hasClass("has_sub")) {
                    var n = d.find("> ul.sub_menu");
                    n.is(":visible") ? (n.slideUp(450, "easeInOutQuint"), d.removeClass("mkdf-opened")) : (d.addClass("open_sub"), 1 === o.length ? d.removeClass("mkdf-opened").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                        n.slideDown(400, "easeInOutQuint")
                    }) : d.siblings().removeClass("mkdf-opened").find(".sub_menu").slideUp(400, "easeInOutQuint", function () {
                        n.slideDown(400, "easeInOutQuint")
                    }))
                }
            })
        }), e(".mkdf-mobile-nav a, .mkdf-mobile-logo-wrapper a").on("click tap", function (o) {
            "http://#" !== e(this).attr("href") && "#" !== e(this).attr("href") && (t.slideUp(450, "easeInOutQuint"), a.removeClass("mkdf-mobile-menu-opened"))
        })
    }

    function o() {
        var a = e(".mkdf-mobile-header"), t = a.find(".mkdf-mobile-menu-opener"), o = a.length ? a.outerHeight() : 0;
        if (mkdf.body.hasClass("mkdf-content-is-behind-header") && o > 0 && mkdf.windowWidth <= 1024 && e(".mkdf-content").css("marginTop", -o), mkdf.body.hasClass("mkdf-sticky-up-mobile-header")) {
            var d, n = e("#wpadminbar"), i = e(document).scrollTop();
            d = o + mkdfGlobalVars.vars.mkdfAddForAdminBar, e(window).scroll(function () {
                var o = e(document).scrollTop();
                o > d ? a.addClass("mkdf-animate-mobile-header") : a.removeClass("mkdf-animate-mobile-header"), o > i && o > d && !t.hasClass("mkdf-mobile-menu-opened") || o < d ? (a.removeClass("mobile-header-appear"), a.css("margin-bottom", 0), n.length && a.find(".mkdf-mobile-header-inner").css("top", 0)) : (a.addClass("mobile-header-appear"), a.css("margin-bottom", d)), i = e(document).scrollTop()
            })
        }
    }

    var d = {};
    mkdf.modules.mobileHeader = d, d.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        mkdf.windowWidth > 1024 && t()
    }

    function t() {
        var a, t, o = e(".mkdf-page-header"), d = e(".mkdf-sticky-header"), n = e(".mkdf-fixed-wrapper"),
            i = n.children(".mkdf-menu-area"), s = i.outerHeight(), r = e(".mkdf-slider"),
            l = r.length ? r.outerHeight() : 0,
            m = n.length ? n.offset().top - mkdfGlobalVars.vars.mkdfAddForAdminBar : 0;
        switch (!0) {
            case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-up"):
                mkdf.modules.stickyHeader.behaviour = "mkdf-sticky-header-on-scroll-up";
                var f = e(document).scrollTop();
                a = parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) + parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfStickyHeaderHeight), t = function () {
                    var t = e(document).scrollTop();
                    t > f && t > a || t < a ? (mkdf.modules.stickyHeader.isStickyVisible = !1, d.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"), mkdf.body.removeClass("mkdf-sticky-header-appear")) : (mkdf.modules.stickyHeader.isStickyVisible = !0, d.addClass("header-appear"), mkdf.body.addClass("mkdf-sticky-header-appear")), f = e(document).scrollTop()
                }, t(), e(window).scroll(function () {
                    t()
                });
                break;
            case mkdf.body.hasClass("mkdf-sticky-header-on-scroll-down-up"):
                mkdf.modules.stickyHeader.behaviour = "mkdf-sticky-header-on-scroll-down-up", 0 !== mkdfPerPageVars.vars.mkdfStickyScrollAmount ? mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(mkdfPerPageVars.vars.mkdfStickyScrollAmount) : mkdf.modules.stickyHeader.stickyAppearAmount = parseInt(mkdfGlobalVars.vars.mkdfTopBarHeight) + parseInt(mkdfGlobalVars.vars.mkdfLogoAreaHeight) + parseInt(mkdfGlobalVars.vars.mkdfMenuAreaHeight) + parseInt(l), t = function () {
                    mkdf.scroll < mkdf.modules.stickyHeader.stickyAppearAmount ? (mkdf.modules.stickyHeader.isStickyVisible = !1, d.removeClass("header-appear").find(".mkdf-main-menu .second").removeClass("mkdf-drop-down-start"), mkdf.body.removeClass("mkdf-sticky-header-appear")) : (mkdf.modules.stickyHeader.isStickyVisible = !0, d.addClass("header-appear"), mkdf.body.addClass("mkdf-sticky-header-appear"))
                }, t(), e(window).scroll(function () {
                    t()
                });
                break;
            case mkdf.body.hasClass("mkdf-fixed-on-scroll"):
                mkdf.modules.stickyHeader.behaviour = "mkdf-fixed-on-scroll";
                var c = function () {
                    mkdf.scroll <= m ? (n.removeClass("fixed"), mkdf.body.removeClass("mkdf-fixed-header-appear"), i.css({height: s + "px"}), o.css("margin-bottom", "0")) : (n.addClass("fixed"), mkdf.body.addClass("mkdf-fixed-header-appear"), i.css({height: s - 10 + "px"}), o.css("margin-bottom", s - 10 + "px"))
                };
                c(), e(window).scroll(function () {
                    c()
                })
        }
    }

    var o = {};
    mkdf.modules.stickyHeader = o, o.isStickyVisible = !1, o.stickyAppearAmount = 0, o.behaviour = "", o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        o(), n()
    }

    function t() {
        d()
    }

    function o() {
        var a = e(".mkdf-drop-down > ul > li.narrow.menu-item-has-children");
        a.length && a.each(function (a) {
            var t = e(this), o = t.offset().left, d = t.find(".second"), n = d.find(".inner ul"), i = n.outerWidth(),
                s = mkdf.windowWidth - o;
            mkdf.body.hasClass("mkdf-boxed") && (s = mkdf.boxedLayoutWidth - (o - (mkdf.windowWidth - mkdf.boxedLayoutWidth) / 2));
            var r;
            t.find("li.sub").length > 0 && (r = s - i), d.removeClass("right"), n.removeClass("right"), (s < i || r < i) && (d.addClass("right"), n.addClass("right"))
        })
    }

    function d() {
        var a = e(".mkdf-drop-down > ul > li.wide");
        a.length && a.each(function (t) {
            var o = e(a[t]).find(".second");
            if (o.length && !o.hasClass("left_position") && !o.hasClass("right_position")) {
                o.css("left", 0);
                var d = o.offset().left;
                if (mkdf.body.hasClass("mkdf-boxed")) {
                    var n = e(".mkdf-boxed .mkdf-wrapper .mkdf-wrapper-inner").outerWidth();
                    d -= (mkdf.windowWidth - n) / 2, o.css("left", -d), o.css("width", n)
                } else o.css("left", -d), o.css("width", mkdf.windowWidth)
            }
        })
    }

    function n() {
        var a = e(".mkdf-drop-down > ul > li");
        a.each(function (t) {
            if (e(a[t]).find(".second").length > 0) {
                var o = e(a[t]), d = o.find(".second");
                if (o.hasClass("wide")) {
                    var n = 0, i = e(this).find(".second > .inner > ul > li");
                    i.each(function () {
                        var a = e(this).height();
                        a > n && (n = a)
                    }), i.css("height", ""), i.height(n)
                }
                if (mkdf.menuDropdownHeightSet || (o.data("original_height", d.height() + "px"), d.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) o.on("touchstart mouseenter", function () {
                    d.css({height: o.data("original_height"), overflow: "visible", visibility: "visible", opacity: "1"})
                }).on("mouseleave", function () {
                    d.css({height: "0px", overflow: "hidden", visibility: "hidden", opacity: "0"})
                }); else if (mkdf.body.hasClass("mkdf-dropdown-animate-height")) o.mouseenter(function () {
                    d.css({
                        visibility: "visible",
                        height: "0px",
                        opacity: "0"
                    }), d.stop().animate({height: o.data("original_height"), opacity: 1}, 300, function () {
                        d.css("overflow", "visible")
                    })
                }).mouseleave(function () {
                    d.stop().animate({height: "0px"}, 150, function () {
                        d.css({overflow: "hidden", visibility: "hidden"})
                    })
                }); else {
                    var s = {
                        interval: 0, over: function () {
                            setTimeout(function () {
                                d.addClass("mkdf-drop-down-start"), d.stop().css({height: o.data("original_height")})
                            }, 150)
                        }, timeout: 150, out: function () {
                            d.stop().css({height: "0px"}), d.removeClass("mkdf-drop-down-start")
                        }
                    };
                    o.hoverIntent(s)
                }
            }
        }), e(".mkdf-drop-down ul li.wide ul li a").on("click", function (a) {
            if (1 == a.which) {
                var t = e(this);
                setTimeout(function () {
                    t.mouseleave()
                }, 500)
            }
        }), mkdf.menuDropdownHeightSet = !0
    }

    var i = {};
    mkdf.modules.header = i, i.mkdfSetDropDownMenuPosition = o, i.mkdfSetDropDownWideMenuPosition = d, i.mkdfOnDocumentReady = a, i.mkdfOnWindowLoad = t, e(document).ready(a), e(window).load(t)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        if (mkdf.body.hasClass("mkdf-search-covers-header")) {
            var a = e("a.mkdf-search-opener");
            a.length > 0 && a.click(function (a) {
                a.preventDefault();
                var t, o = e(this), d = e(".mkdf-page-header"), n = e(".mkdf-top-bar"),
                    i = d.find(".mkdf-fixed-wrapper.fixed"), s = e(".mkdf-mobile-header"), r = e(".mkdf-search-cover"),
                    l = !!o.parents(".mkdf-top-bar").length, m = !!o.parents(".mkdf-fixed-wrapper.fixed").length,
                    f = !!o.parents(".mkdf-sticky-header").length, c = !!o.parents(".mkdf-mobile-header").length;
                r.removeClass("mkdf-is-active"), l ? (t = mkdfGlobalVars.vars.mkdfTopBarHeight, n.find(".mkdf-search-cover").addClass("mkdf-is-active")) : m ? (t = i.outerHeight(), d.children(".mkdf-search-cover").addClass("mkdf-is-active")) : f ? (t = mkdfGlobalVars.vars.mkdfStickyHeaderHeight, d.children(".mkdf-search-cover").addClass("mkdf-is-active")) : c ? (t = s.hasClass("mobile-header-appear") ? s.children(".mkdf-mobile-header-inner").outerHeight() : s.outerHeight(), s.find(".mkdf-search-cover").addClass("mkdf-is-active")) : (t = d.outerHeight(), d.children(".mkdf-search-cover").addClass("mkdf-is-active")), r.hasClass("mkdf-is-active") && r.height(t).stop(!0).fadeIn(600).find('input[type="text"]').focus(), r.find(".mkdf-search-close").click(function (e) {
                    e.preventDefault(), r.stop(!0).fadeOut(450)
                }), r.blur(function () {
                    r.stop(!0).fadeOut(450)
                }), e(window).scroll(function () {
                    r.stop(!0).fadeOut(450)
                })
            })
        }
    }

    var o = {};
    mkdf.modules.searchCoversHeader = o, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t(), o()
    }

    function t() {
        var a = e(".mkdf-wrapper"), t = e("a.mkdf-side-menu-button-opener"), o = "mkdf-right-side-menu-opened";
        a.prepend('<div class="mkdf-cover"/>'), e("a.mkdf-side-menu-button-opener, a.mkdf-close-side-menu").click(function (a) {
            if (a.preventDefault(), t.hasClass("opened")) t.removeClass("opened"), mkdf.body.removeClass(o); else {
                t.addClass("opened"), mkdf.body.addClass(o), e(".mkdf-wrapper .mkdf-cover").click(function () {
                    mkdf.body.removeClass("mkdf-right-side-menu-opened"), t.removeClass("opened")
                });
                var d = e(window).scrollTop();
                e(window).scroll(function () {
                    Math.abs(mkdf.scroll - d) > 400 && (mkdf.body.removeClass(o), t.removeClass("opened"))
                })
            }
        })
    }

    function o() {
        var a = e(".mkdf-side-menu");
        a.length && a.niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
        })
    }

    var d = {};
    mkdf.modules.sidearea = d, d.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-title-holder.mkdf-bg-parallax");
        if (a.length > 0 && mkdf.windowWidth > 1024) {
            var t = a.hasClass("mkdf-bg-parallax-zoom-out"), o = parseInt(a.data("height")),
                d = parseInt(a.data("background-width")), n = o / 1e4 * 7, i = -mkdf.scroll * n,
                s = mkdfGlobalVars.vars.mkdfAddForAdminBar;
            a.css({"background-position": "center " + (i + s) + "px"}), t && t.css({"background-size": d - mkdf.scroll + "px auto"}), e(window).scroll(function () {
                i = -mkdf.scroll * n, a.css({"background-position": "center " + (i + s) + "px"}), t && t.css({"background-size": d - mkdf.scroll + "px auto"})
            })
        }
    }

    var o = {};
    mkdf.modules.title = o, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        d(), n(), i()
    }

    function t() {
        s()
    }

    function o() {
        s()
    }

    function d() {
        e(document).on("click", ".mkdf-quantity-minus, .mkdf-quantity-plus", function (a) {
            a.stopPropagation();
            var t, o = e(this), d = o.siblings(".mkdf-quantity-input"), n = parseFloat(d.data("step")),
                i = parseFloat(d.data("max")), s = !1, r = parseFloat(d.val());
            o.hasClass("mkdf-quantity-minus") && (s = !0), s ? (t = r - n, t >= 1 ? d.val(t) : d.val(0)) : (t = r + n, void 0 === i ? d.val(t) : t >= i ? d.val(i) : d.val(t)), d.trigger("change")
        })
    }

    function n() {
        var a = e(".woocommerce-ordering .orderby");
        a.length && a.select2({minimumResultsForSearch: 1 / 0});
        var t = e(".mkdf-woocommerce-page .mkdf-content .variations td.value select");
        t.length && t.select2();
        var o = e("#calc_shipping_country");
        o.length && o.select2();
        var d = e(".cart-collaterals .shipping select#calc_shipping_state");
        d.length && d.select2()
    }

    function i() {
        var a = e(".mkdf-woo-single-page.mkdf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image");
        a.length && (a.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof mkdf.modules.common.mkdfPrettyPhoto && mkdf.modules.common.mkdfPrettyPhoto())
    }

    function s() {
        var a = e(".mkdf-pl-holder.mkdf-masonry-layout .mkdf-pl-outer");
        a.length && a.each(function () {
            var a = e(this);
            a.waitForImages(function () {
                a.isotope({
                    itemSelector: ".mkdf-pli",
                    resizable: !1,
                    masonry: {columnWidth: ".mkdf-pl-sizer", gutter: ".mkdf-pl-gutter"}
                }), setTimeout(function () {
                    "function" == typeof mkdf.modules.common.mkdfInitParallax && mkdf.modules.common.mkdfInitParallax()
                }, 1e3), a.isotope("layout").css("opacity", 1)
            })
        })
    }

    var r = {};
    mkdf.modules.woocommerce = r, r.mkdfOnDocumentReady = a, r.mkdfOnWindowLoad = t, r.mkdfOnWindowResize = o, e(document).ready(a), e(window).load(t), e(window).resize(o)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-accordion-holder");
        a.length && a.each(function () {
            var a = e(this);
            if (a.hasClass("mkdf-accordion") && a.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content"
            }), a.hasClass("mkdf-toggle")) {
                var t = e(this), o = t.find(".mkdf-accordion-title"), d = o.next();
                t.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), d.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), o.each(function () {
                    var a = e(this);
                    a.hover(function () {
                        a.toggleClass("ui-state-hover")
                    }), a.on("click", function () {
                        a.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), a.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                    })
                })
            }
        })
    }

    var o = {};
    mkdf.modules.accordions = o, o.mkdfInitAccordions = t, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a, t, o,
            d = e(".mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate");
        d.length && d.each(function () {
            var d = e(this);
            d.appear(function () {
                if (t = d.data("animation"), o = parseInt(d.data("animation-delay")), void 0 !== t && "" !== t) {
                    a = t;
                    var e = a + "-on";
                    setTimeout(function () {
                        d.addClass(e)
                    }, o)
                }
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        })
    }

    var o = {};
    mkdf.modules.animationHolder = o, o.mkdfInitAnimationHolder = t, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        o().init()
    }

    var t = {};
    mkdf.modules.button = t, t.mkdfButton = o, t.mkdfOnDocumentReady = a, e(document).ready(a);
    var o = function () {
        var a = e(".mkdf-btn"), t = function (e) {
            if (void 0 !== e.data("hover-color")) {
                var a = function (e) {
                    e.data.button.css("color", e.data.color)
                }, t = e.css("color"), o = e.data("hover-color");
                e.on("mouseenter", {button: e, color: o}, a), e.on("mouseleave", {button: e, color: t}, a)
            }
        }, o = function (e) {
            if (void 0 !== e.data("hover-bg-color")) {
                var a = function (e) {
                    e.data.button.css("background-color", e.data.color)
                }, t = e.css("background-color"), o = e.data("hover-bg-color");
                e.on("mouseenter", {button: e, color: o}, a), e.on("mouseleave", {button: e, color: t}, a)
            }
        }, d = function (e) {
            if (void 0 !== e.data("hover-border-color")) {
                var a = function (e) {
                    e.data.button.css("border-color", e.data.color)
                }, t = e.css("borderTopColor"), o = e.data("hover-border-color");
                e.on("mouseenter", {button: e, color: o}, a), e.on("mouseleave", {button: e, color: t}, a)
            }
        };
        return {
            init: function () {
                a.length && a.each(function () {
                    t(e(this)), o(e(this)), d(e(this))
                })
            }
        }
    }
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a, t, o, d, n, i, s, r, l, m, f, c = e(".mkdf-countdown"), u = new Date, h = u.getMonth();
        c.length && c.each(function () {
            function c() {
                g.find(".countdown-amount").css({
                    "font-size": u + "px",
                    "line-height": u + "px"
                }), g.find(".countdown-period").css({"font-size": k + "px"})
            }

            var u, k, p = e(this).attr("id"), g = e("#" + p);
            a = g.data("year"), t = g.data("month"), o = g.data("day"), d = g.data("hour"), n = g.data("minute"), i = g.data("timezone"), s = g.data("month-label"), r = g.data("day-label"), l = g.data("hour-label"), m = g.data("minute-label"), f = g.data("second-label"), u = g.data("digit-size"), k = g.data("label-size"), h != t && (t -= 1), g.countdown({
                until: new Date(a, t, o, d, n, 44),
                labels: ["", s, "", r, l, m, f],
                format: "ODHMS",
                timezone: i,
                padZeroes: !0,
                onTick: c
            })
        })
    }

    var o = {};
    mkdf.modules.countdown = o, o.mkdfInitCountdown = t, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-counter-holder");
        a.length && a.each(function () {
            var a = e(this), t = a.find(".mkdf-counter");
            a.appear(function () {
                if (a.css("opacity", "1"), t.hasClass("mkdf-zero-counter")) {
                    var e = parseFloat(t.text());
                    t.countTo({from: 0, to: e, speed: 1500, refreshInterval: 100})
                } else t.absoluteCounter({speed: 2e3, fadeInDelay: 1e3})
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        })
    }

    var o = {};
    mkdf.modules.counter = o, o.mkdfInitCounter = t, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        o()
    }

    function t() {
        d()
    }

    function o() {
        var a = e(".mkdf-custom-font-holder");
        a.length && a.each(function () {
            var a = e(this), t = "", o = "", d = "", n = "", i = "", s = "", r = "";
            void 0 !== a.data("item-class") && !1 !== a.data("item-class") && (t = a.data("item-class")), void 0 !== a.data("font-size-1280") && !1 !== a.data("font-size-1280") && (o += "font-size: " + a.data("font-size-1280") + " !important;"), void 0 !== a.data("font-size-1024") && !1 !== a.data("font-size-1024") && (d += "font-size: " + a.data("font-size-1024") + " !important;"), void 0 !== a.data("font-size-768") && !1 !== a.data("font-size-768") && (n += "font-size: " + a.data("font-size-768") + " !important;"), void 0 !== a.data("font-size-680") && !1 !== a.data("font-size-680") && (i += "font-size: " + a.data("font-size-680") + " !important;"), void 0 !== a.data("line-height-1280") && !1 !== a.data("line-height-1280") && (o += "line-height: " + a.data("line-height-1280") + " !important;"), void 0 !== a.data("line-height-1024") && !1 !== a.data("line-height-1024") && (d += "line-height: " + a.data("line-height-1024") + " !important;"), void 0 !== a.data("line-height-768") && !1 !== a.data("line-height-768") && (n += "line-height: " + a.data("line-height-768") + " !important;"), void 0 !== a.data("line-height-680") && !1 !== a.data("line-height-680") && (i += "line-height: " + a.data("line-height-680") + " !important;"), (o.length || d.length || n.length || i.length) && (o.length && (r += "@media only screen and (max-width: 1280px) {.mkdf-custom-font-holder." + t + " { " + o + " } }"), d.length && (r += "@media only screen and (max-width: 1024px) {.mkdf-custom-font-holder." + t + " { " + d + " } }"), n.length && (r += "@media only screen and (max-width: 768px) {.mkdf-custom-font-holder." + t + " { " + n + " } }"), i.length && (r += "@media only screen and (max-width: 680px) {.mkdf-custom-font-holder." + t + " { " + i + " } }")), r.length && (s = '<style type="text/css">' + r + "</style>"), s.length && e("head").append(s)
        })
    }

    function d() {
        var a = e(".mkdf-cf-typed");
        a.length && a.each(function () {
            var a = e(this), t = a.parent(".mkdf-cf-typed-wrap"), o = t.parent(".mkdf-custom-font-holder"), d = [],
                n = a.find(".mkdf-cf-typed-1").text(), i = a.find(".mkdf-cf-typed-2").text(),
                s = a.find(".mkdf-cf-typed-3").text(), r = a.find(".mkdf-cf-typed-4").text();
            n.length && d.push(n), i.length && d.push(i), s.length && d.push(s), r.length && d.push(r), o.appear(function () {
                a.typed({
                    strings: d,
                    typeSpeed: 90,
                    backDelay: 700,
                    loop: !0,
                    contentType: "text",
                    loopCount: !1,
                    cursorChar: "_"
                })
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        })
    }

    var n = {};
    mkdf.modules.customFont = n, n.mkdfCustomFontResize = o, n.mkdfCustomFontTypeOut = d, n.mkdfOnDocumentReady = a, n.mkdfOnWindowLoad = t, e(document).ready(a), e(window).load(t)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-elements-holder");
        a.length && a.each(function () {
            var a = e(this), t = a.children(".mkdf-eh-item"), o = "", d = "";
            t.each(function () {
                var a = e(this), t = "", o = "", n = "", i = "", s = "", r = "";
                void 0 !== a.data("item-class") && !1 !== a.data("item-class") && (t = a.data("item-class")), void 0 !== a.data("1280-1600") && !1 !== a.data("1280-1600") && (o = a.data("1280-1600")), void 0 !== a.data("1024-1280") && !1 !== a.data("1024-1280") && (n = a.data("1024-1280")), void 0 !== a.data("768-1024") && !1 !== a.data("768-1024") && (i = a.data("768-1024")), void 0 !== a.data("680-768") && !1 !== a.data("680-768") && (s = a.data("680-768")), void 0 !== a.data("680") && !1 !== a.data("680") && (r = a.data("680")), (o.length || n.length || i.length || s.length || r.length || "".length) && (o.length && (d += "@media only screen and (min-width: 1281px) and (max-width: 1600px) {.mkdf-eh-item-content." + t + " { padding: " + o + " !important; } }"), n.length && (d += "@media only screen and (min-width: 1025px) and (max-width: 1280px) {.mkdf-eh-item-content." + t + " { padding: " + n + " !important; } }"), i.length && (d += "@media only screen and (min-width: 769px) and (max-width: 1024px) {.mkdf-eh-item-content." + t + " { padding: " + i + " !important; } }"), s.length && (d += "@media only screen and (min-width: 681px) and (max-width: 768px) {.mkdf-eh-item-content." + t + " { padding: " + s + " !important; } }"), r.length && (d += "@media only screen and (max-width: 680px) {.mkdf-eh-item-content." + t + " { padding: " + r + " !important; } }"))
            }), d.length && (o = '<style type="text/css">' + d + "</style>"), o.length && e("head").append(o), "function" == typeof mkdf.modules.common.mkdfOwlSlider && mkdf.modules.common.mkdfOwlSlider()
        })
    }

    var o = {};
    mkdf.modules.elementsHolder = o, o.mkdfInitElementsHolderResponsiveStyle = t, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-full-screen-sections");
        a.length && a.each(function () {
            var a = e(this), t = a.children(".mkdf-fss-wrapper"), i = t.children(".mkdf-fss-item"), s = i.length,
                r = i.hasClass("mkdf-fss-item-has-style"), l = !1, m = "", f = "", c = "";
            mkdf.body.hasClass("mkdf-light-header") ? c = "light" : mkdf.body.hasClass("mkdf-dark-header") && (c = "dark"), void 0 !== a.data("enable-continuous-vertical") && !1 !== a.data("enable-continuous-vertical") && "yes" === a.data("enable-continuous-vertical") && (l = !0), void 0 !== a.data("enable-navigation") && !1 !== a.data("enable-navigation") && (m = a.data("enable-navigation")), void 0 !== a.data("enable-pagination") && !1 !== a.data("enable-pagination") && (f = a.data("enable-pagination"));
            var u = "no" !== m, h = "no" !== f;
            t.fullpage({
                sectionSelector: ".mkdf-fss-item",
                scrollingSpeed: 1200,
                verticalCentered: !1,
                continuousVertical: l,
                navigation: h,
                onLeave: function (t, n, l) {
                    r && o(e(i[n - 1]).data("header-style"), c), u && d(a, s, n)
                },
                afterRender: function () {
                    r && o(i.first().data("header-style"), c), u && (d(a, s, 1), a.children(".mkdf-fss-nav-holder").css("visibility", "visible")), t.css("visibility", "visible")
                }
            }), n(a), u && (a.find("#mkdf-fss-nav-up").on("click", function () {
                return e.fn.fullpage.moveSectionUp(), !1
            }), a.find("#mkdf-fss-nav-down").on("click", function () {
                return e.fn.fullpage.moveSectionDown(), !1
            }))
        })
    }

    function o(e, a) {
        void 0 !== e && "" !== e ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + e + "-header") : "" !== a ? mkdf.body.removeClass("mkdf-light-header mkdf-dark-header").addClass("mkdf-" + a + "-header") : mkdf.body.removeClass("mkdf-light-header mkdf-dark-header")
    }

    function d(e, a, t) {
        var o = e, d = o.find("#mkdf-fss-nav-up"), n = o.find("#mkdf-fss-nav-down"), i = !1;
        void 0 !== e.data("enable-continuous-vertical") && !1 !== e.data("enable-continuous-vertical") && "yes" === e.data("enable-continuous-vertical") && (i = !0), 1 !== t || i ? t !== a || i ? (d.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        }), n.css({opacity: "1", height: "auto", visibility: "visible"})) : (n.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), 2 === a && d.css({opacity: "1", height: "auto", visibility: "visible"})) : (d.css({
            opacity: "0",
            height: "0",
            visibility: "hidden"
        }), n.css({opacity: "0", height: "0", visibility: "hidden"}), t !== a && n.css({
            opacity: "1",
            height: "auto",
            visibility: "visible"
        }))
    }

    function n(a) {
        var t = a.find(".mkdf-fss-item"), o = "", d = "";
        t.each(function () {
            var a = e(this), t = "", d = "", n = "", i = "", s = "";
            void 0 !== a.data("item-class") && !1 !== a.data("item-class") && (t = a.data("item-class")), void 0 !== a.data("laptop-image") && !1 !== a.data("laptop-image") && (d = a.data("laptop-image")), void 0 !== a.data("tablet-image") && !1 !== a.data("tablet-image") && (n = a.data("tablet-image")), void 0 !== a.data("tablet-portrait-image") && !1 !== a.data("tablet-portrait-image") && (i = a.data("tablet-portrait-image")), void 0 !== a.data("mobile-image") && !1 !== a.data("mobile-image") && (s = a.data("mobile-image")), (d.length || n.length || i.length || s.length) && (d.length && (o += "@media only screen and (max-width: 1280px) {.mkdf-fss-item." + t + " { background-image: url(" + d + ") !important; } }"), n.length && (o += "@media only screen and (max-width: 1024px) {.mkdf-fss-item." + t + " { background-image: url( " + n + ") !important; } }"), i.length && (o += "@media only screen and (max-width: 800px) {.mkdf-fss-item." + t + " { background-image: url( " + i + ") !important; } }"), s.length && (o += "@media only screen and (max-width: 680px) {.mkdf-fss-item." + t + " { background-image: url( " + s + ") !important; } }"))
        }), o.length && (d = '<style type="text/css">' + o + "</style>"), d.length && e("head").append(d)
    }

    var i = {};
    mkdf.modules.fullScreenSections = i, i.mkdfInitFullScreenSections = t, i.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-google-map");
        a.length && a.each(function () {
            var a = e(this), t = !1;
            void 0 !== a.data("predefined-style") && "yes" === a.data("predefined-style") && (t = !0);
            var d;
            void 0 !== a.data("custom-map-style") && (d = a.data("custom-map-style"));
            var n;
            void 0 !== a.data("color-overlay") && !1 !== a.data("color-overlay") && (n = a.data("color-overlay"));
            var i;
            void 0 !== a.data("saturation") && !1 !== a.data("saturation") && (i = a.data("saturation"));
            var s;
            void 0 !== a.data("lightness") && !1 !== a.data("lightness") && (s = a.data("lightness"));
            var r;
            void 0 !== a.data("zoom") && !1 !== a.data("zoom") && (r = a.data("zoom"));
            var l;
            void 0 !== a.data("pin") && !1 !== a.data("pin") && (l = a.data("pin"));
            var m;
            void 0 !== a.data("height") && !1 !== a.data("height") && (m = a.data("height"));
            var f;
            void 0 !== a.data("unique-id") && !1 !== a.data("unique-id") && (f = a.data("unique-id"));
            var c;
            void 0 !== a.data("scroll-wheel") && (c = a.data("scroll-wheel"));
            var u;
            void 0 !== a.data("addresses") && !1 !== a.data("addresses") && (u = a.data("addresses")), o(t, d, n, i, s, c, r, "mkdf-map-" + f, m, l, "map_" + f, "geocoder_" + f, u)
        })
    }

    function o(e, a, t, o, n, i, s, r, l, m, f, c, u) {
        if ("object" == typeof google) {
            var h = [];
            h = e ? [{
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{color: "#444444"}]
            }, {featureType: "landscape", elementType: "all", stylers: [{color: "#f2f2f2"}]}, {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [{saturation: "23"}, {color: "#ffffff"}, {visibility: "on"}]
            }, {
                featureType: "landscape",
                elementType: "geometry.stroke",
                stylers: [{visibility: "on"}]
            }, {
                featureType: "landscape",
                elementType: "labels.text",
                stylers: [{visibility: "on"}]
            }, {
                featureType: "landscape",
                elementType: "labels.text.fill",
                stylers: [{color: "#8396d7"}]
            }, {
                featureType: "landscape",
                elementType: "labels.text.stroke",
                stylers: [{hue: "#ff0000"}, {visibility: "off"}]
            }, {featureType: "poi", elementType: "all", stylers: [{visibility: "off"}]}, {
                featureType: "road",
                elementType: "all",
                stylers: [{saturation: -100}, {lightness: 45}]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{color: "#efe0c3"}, {visibility: "on"}]
            }, {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{color: "#85a1ca"}, {visibility: "on"}]
            }, {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{invert_lightness: !0}]
            }, {
                featureType: "road.highway",
                elementType: "labels",
                stylers: [{visibility: "on"}]
            }, {
                featureType: "road.highway",
                elementType: "labels.icon",
                stylers: [{invert_lightness: !0}]
            }, {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{visibility: "off"}]
            }, {featureType: "transit", elementType: "all", stylers: [{visibility: "off"}]}, {
                featureType: "water",
                elementType: "all",
                stylers: [{color: "#c9e4f3"}, {visibility: "on"}]
            }] : [{stylers: [{hue: t}, {saturation: o}, {lightness: n}, {gamma: 1}]}];
            var k;
            k = e || "yes" === a ? "mkdf-style" : google.maps.MapTypeId.ROADMAP, i = "yes" === i;
            var p = new google.maps.StyledMapType(h, {name: "Mikado Google Map"});
            c = new google.maps.Geocoder;
            var g = new google.maps.LatLng(-34.397, 150.644);
            isNaN(l) || (l += "px");
            var v = {
                zoom: s,
                scrollwheel: i,
                center: g,
                zoomControl: !0,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                scaleControl: !1,
                scaleControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                streetViewControl: !1,
                streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                panControl: !1,
                panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                mapTypeControl: !1,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkdf-style"],
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeId: k
            };
            f = new google.maps.Map(document.getElementById(r), v), f.mapTypes.set("mkdf-style", p);
            var y;
            for (y = 0; y < u.length; ++y) d(u[y], m, f, c);
            document.getElementById(r).style.height = l
        }
    }

    function d(e, a, t, o) {
        if ("" !== e) {
            var d = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + e + "</p></div></div>",
                n = new google.maps.InfoWindow({content: d});
            o.geocode({address: e}, function (o, d) {
                if (d === google.maps.GeocoderStatus.OK) {
                    t.setCenter(o[0].geometry.location);
                    var i = new google.maps.Marker({
                        map: t,
                        position: o[0].geometry.location,
                        icon: a,
                        title: e.store_title
                    });
                    google.maps.event.addListener(i, "click", function () {
                        n.open(t, i)
                    }), google.maps.event.addDomListener(window, "resize", function () {
                        t.setCenter(o[0].geometry.location)
                    })
                }
            })
        }
    }

    var n = {};
    mkdf.modules.googleMap = n, n.mkdfShowGoogleMap = t, n.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        o().init()
    }

    var t = {};
    mkdf.modules.icon = t, t.mkdfIcon = o, t.mkdfOnDocumentReady = a, e(document).ready(a);
    var o = function () {
        var a = e(".mkdf-icon-shortcode"), t = function (e) {
            e.hasClass("mkdf-icon-animation") && e.appear(function () {
                e.parent(".mkdf-icon-animation-holder").addClass("mkdf-icon-animation-show")
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        }, o = function (e) {
            if (void 0 !== e.data("hover-color")) {
                var a = function (e) {
                    e.data.icon.css("color", e.data.color)
                }, t = e.find(".mkdf-icon-element"), o = e.data("hover-color"), d = t.css("color");
                "" !== o && (e.on("mouseenter", {icon: t, color: o}, a), e.on("mouseleave", {icon: t, color: d}, a))
            }
        }, d = function (e) {
            if (void 0 !== e.data("hover-background-color")) {
                var a = function (e) {
                    e.data.icon.css("background-color", e.data.color)
                }, t = e.data("hover-background-color"), o = e.css("background-color");
                "" !== t && (e.on("mouseenter", {icon: e, color: t}, a), e.on("mouseleave", {icon: e, color: o}, a))
            }
        }, n = function (e) {
            if (void 0 !== e.data("hover-border-color")) {
                var a = function (e) {
                    e.data.icon.css("border-color", e.data.color)
                }, t = e.data("hover-border-color"), o = e.css("borderTopColor");
                "" !== t && (e.on("mouseenter", {icon: e, color: t}, a), e.on("mouseleave", {icon: e, color: o}, a))
            }
        };
        return {
            init: function () {
                a.length && a.each(function () {
                    t(e(this)), o(e(this)), d(e(this)), n(e(this))
                })
            }
        }
    }
}(jQuery), function (e) {
    "use strict";

    function a() {
        o().init()
    }

    var t = {};
    mkdf.modules.iconListItem = t, t.mkdfInitIconList = o, t.mkdfOnDocumentReady = a, e(document).ready(a);
    var o = function () {
        var a = e(".mkdf-animate-list"), t = function (e) {
            setTimeout(function () {
                e.appear(function () {
                    e.addClass("mkdf-appeared")
                }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
            }, 30)
        };
        return {
            init: function () {
                a.length && a.each(function () {
                    t(e(this))
                })
            }
        }
    }
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-image-gallery.mkdf-ig-masonry-type");
        a.length && a.each(function () {
            var a = e(this), t = a.find(".mkdf-ig-masonry");
            t.waitForImages(function () {
                t.isotope({
                    layoutMode: "packery",
                    itemSelector: ".mkdf-ig-image",
                    percentPosition: !0,
                    packery: {gutter: ".mkdf-ig-grid-gutter", columnWidth: ".mkdf-ig-grid-sizer"}
                }), setTimeout(function () {
                    t.isotope("layout"), mkdf.modules.common.mkdfInitParallax()
                }, 800), t.css("opacity", "1")
            })
        })
    }

    var o = {};
    mkdf.modules.imageGallery = o, o.mkdfInitImageGalleryMasonry = t, o.mkdfOnWindowLoad = a, e(window).load(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-pie-chart-holder");
        a.length && a.each(function () {
            var a = e(this), t = a.children(".mkdf-pc-percentage"), d = "#25abd1", n = "#f7f7f7", i = 176;
            void 0 !== t.data("size") && "" !== t.data("size") && (i = t.data("size")), void 0 !== t.data("bar-color") && "" !== t.data("bar-color") && (d = t.data("bar-color")), void 0 !== t.data("track-color") && "" !== t.data("track-color") && (n = t.data("track-color")), t.appear(function () {
                o(t), a.css("opacity", "1"), t.easyPieChart({
                    barColor: d,
                    trackColor: n,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 3,
                    animate: 1500,
                    size: i
                })
            }, {accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount})
        })
    }

    function o(e) {
        var a = e.find(".mkdf-pc-percent"), t = parseFloat(a.text());
        a.countTo({from: 0, to: t, speed: 1500, refreshInterval: 50})
    }

    var d = {};
    mkdf.modules.pieChart = d, d.mkdfInitPieChart = t, d.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-progress-bar");
        a.length && a.each(function () {
            var a = e(this), t = a.find(".mkdf-pb-content"), d = t.data("percentage");
            a.appear(function () {
                o(a, d), t.css("width", "0%"), t.animate({width: d + "%"}, 2e3)
            })
        })
    }

    function o(a, t) {
        var o = parseFloat(t), d = a.find(".mkdf-pb-percent");
        d.length && d.each(function () {
            var a = e(this);
            a.css("opacity", "1"), a.countTo({from: 0, to: o, speed: 2e3, refreshInterval: 50})
        })
    }

    var d = {};
    mkdf.modules.progressBar = d, d.mkdfInitProgressBars = t,
        d.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery), function (e) {
    "use strict";

    function a() {
        t()
    }

    function t() {
        var a = e(".mkdf-tabs");
        a.length && a.each(function () {
            var a = e(this);
            a.children(".mkdf-tab-container").each(function (a) {
                a += 1;
                var t = e(this), o = t.attr("id"), d = t.parent().find(".mkdf-tabs-nav li:nth-child(" + a + ") a"),
                    n = d.attr("href");
                o = "#" + o, o.indexOf(n) > -1 && d.attr("href", o)
            }), a.tabs(), e(".mkdf-tabs a.mkdf-external-link").unbind("click")
        })
    }

    var o = {};
    mkdf.modules.tabs = o, o.mkdfInitTabs = t, o.mkdfOnDocumentReady = a, e(document).ready(a)
}(jQuery);