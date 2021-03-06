function CustomMarker(e) {
    this.latlng = new google.maps.LatLng({
        lat: e.position.lat,
        lng: e.position.lng
    }), this.setMap(e.map), this.templateData = e.templateData, this.markerData = {pin: e.markerPin}
}

function MarkerClusterer(e, t, r) {
    this.extend(MarkerClusterer, google.maps.OverlayView), this.map_ = e, this.markers_ = [], this.clusters_ = [], this.sizes = [53, 56, 66, 78, 90], this.styles_ = [], this.ready_ = !1;
    var a = r || {};
    this.gridSize_ = a.gridSize || 60, this.minClusterSize_ = a.minimumClusterSize || 2, this.maxZoom_ = a.maxZoom || null, this.styles_ = a.styles || [], this.imagePath_ = a.imagePath || this.MARKER_CLUSTER_IMAGE_PATH_, this.imageExtension_ = a.imageExtension || this.MARKER_CLUSTER_IMAGE_EXTENSION_, this.zoomOnClick_ = !0, void 0 != a.zoomOnClick && (this.zoomOnClick_ = a.zoomOnClick), this.averageCenter_ = !1, void 0 != a.averageCenter && (this.averageCenter_ = a.averageCenter), this.setupStyles_(), this.setMap(e), this.prevZoom_ = this.map_.getZoom();
    var s = this;
    google.maps.event.addListener(this.map_, "zoom_changed", function () {
        var e = s.map_.getZoom();
        s.prevZoom_ != e && (s.prevZoom_ = e, s.resetViewport())
    }), google.maps.event.addListener(this.map_, "idle", function () {
        s.redraw()
    }), t && t.length && this.addMarkers(t, !1)
}

function Cluster(e) {
    this.markerClusterer_ = e, this.map_ = e.getMap(), this.gridSize_ = e.getGridSize(), this.minClusterSize_ = e.getMinClusterSize(), this.averageCenter_ = e.isAverageCenter(), this.center_ = null, this.markers_ = [], this.bounds_ = null, this.clusterIcon_ = new ClusterIcon(this, e.getStyles(), e.getGridSize())
}

function ClusterIcon(e, t, r) {
    e.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView), this.styles_ = t, this.padding_ = r || 0, this.cluster_ = e, this.center_ = null, this.map_ = e.getMap(), this.div_ = null, this.sums_ = null, this.visible_ = !1, this.setMap(this.map_)
}

!function (e) {
    "use strict";

    function t() {
        i(), n(), l(), p(), d(), u()
    }

    function r() {
    }

    function a() {
    }

    function s() {
    }

    function i() {
        e(".mkdf-property-whishlist").on("click", function (t) {
            t.preventDefault();
            var r, a = e(this);
            void 0 !== a.data("property-id") && mkdf.body.hasClass("logged-in") ? (r = a.data("property-id"), o(a, r)) : e(document.body).trigger("open_user_login_trigger")
        })
    }

    function o(t, r) {
        var a = {action: "mkdf_re_add_property_to_wishlist", property_id: r};
        return e.ajax({
            type: "POST", data: a, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                var r = JSON.parse(e);
                "success" == r.status && (t.hasClass("mkdf-icon-only") || t.find("span").text(r.data.message), t.find("i").removeClass("fa-heart fa-heart-o").addClass(r.data.icon))
            }
        }), !1
    }

    function n() {
        var t = e(".mkdf-property-single-holder"), r = e(".mkdf-property-enquiry-holder"),
            a = t.find(".mkdf-property-single-action"), s = e(".mkdf-property-enquiry-close");
        a.on("click", function () {
            r.fadeIn(300), r.addClass("opened")
        }), r.add(s).on("click", function () {
            r.hasClass("opened") && (r.fadeOut(300), r.removeClass("opened"))
        }), e(".mkdf-property-enquiry-inner").click(function (e) {
            e.stopPropagation()
        }), e(window).on("keyup", function (e) {
            r.hasClass("opened") && 27 == e.keyCode && (r.fadeOut(300), r.removeClass("opened"))
        })
    }

    function l() {
        var t = e(".mkdf-property-enquiry-holder"), r = e(".mkdf-property-enquiry-response"),
            a = t.find(".mkdf-property-enquiry-form");
        a.on("submit", function (s) {
            s.preventDefault(), r.empty();
            var i = {
                name: a.find("#enquiry-name").val(),
                email: a.find("#enquiry-email").val(),
                message: a.find("#enquiry-message").val(),
                itemId: a.find("#enquiry-item-id").val(),
                nonce: a.find("#mkdf_re_nonce_property_item_enquiry").val()
            }, o = {action: "mkdf_re_send_property_enquiry", data: i};
            e.ajax({
                type: "POST", url: mkdfGlobalVars.vars.mkdfAjaxUrl, data: o, success: function (e) {
                    var s = JSON.parse(e);
                    "error" == s.status ? r.html(s.message) : (r.html(s.message), a.fadeOut(300), setTimeout(function () {
                        t.remove()
                    }, 2e3))
                }
            })
        })
    }

    function d() {
        var t = e(".mkdf-mortgage-calculator-holder");
        t.length && t.each(function () {
            var t = e(this), r = t.find("form"), a = t.find(".mkdf-mc-result-holder");
            r.on("submit", function (e) {
                e.preventDefault();
                var t = r.find("#price").val().replace(/,/g, ""), s = parseFloat(r.find("#interest-rate").val()),
                    i = parseInt(r.find("#term-years").val(), 10), o = r.find("#down-payment").val().replace(/,/g, ""),
                    n = t - o, l = 12 * i, d = s / 1200, p = Math.pow(1 + d, -l), u = n * (d / (1 - p)), m = 12 * u;
                a.find(".mkdf-mc-payment-value").html(Math.round(100 * u) / 100 + "$"), a.find(".mkdf-mc-amount-financed-value").html(Math.round(100 * n) / 100 + "$"), a.find(".mkdf-mc-mortgage-payments-value").html(Math.round(100 * u) / 100 + "$"), a.find(".mkdf-mc-annual-costs-value").html(Math.round(100 * m) / 100 + "$"), a.slideDown()
            })
        })
    }

    function p() {
        var t = e("#mkdf-re-add-property-form, #mkdf-re-edit-property-form");
        if (t.length) {
            var r = t.find("button"), a = r.data("updating-text"), s = r.data("updated-text");
            t.on("submit", function (i) {
                i.preventDefault();
                var o = r.html(), n = e(this).find(".mkdf-membership-gallery-upload-hidden"), l = [];
                r.html(a);
                var d = new FormData;
                n.each(function () {
                    var t, r = e(this), a = r.attr("name"), s = r.parents(".mkdf-membership-repeater-field").attr("id"),
                        i = r[0].files;
                    if ("-1" != a.indexOf("[]")) {
                        t = a.substring(0, a.length - 2) + "_mkdf_regarray_";
                        var o = s.lastIndexOf("-"), n = s.substring(o + 1);
                        l.push(t), t = t + n + "_"
                    } else t = a + "_mkdf_reg_";
                    0 == i.length && d.append(t, new File([""], "mkdf-dummy-file.txt", {type: "text/plain"}));
                    for (var p = 0; p < i.length; p++) d.append(t + p, i[p])
                }), "mkdf-re-add-property-form" == t.attr("id") ? ("adding", d.append("action", "mkdf_re_add_property")) : ("editing", d.append("action", "mkdf_re_edit_property"));
                var p = e(this).serialize();
                return d.append("data", p), e.ajax({
                    type: "POST",
                    data: d,
                    contentType: !1,
                    processData: !1,
                    url: mkdfGlobalVars.vars.mkdfAjaxUrl,
                    success: function (e) {
                        var t;
                        t = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(t), "success" == t.status ? (r.html(s), window.location = t.redirect) : r.html(o)
                    }
                }), !1
            })
        }
    }

    function u() {
        var t = e(".mkdf-property-item-delete");
        t.length && t.each(function () {
            var t = e(this), r = t.data("property-id"), a = t.data("confirm-text"),
                s = t.parents(".mkdf-re-profile-property-item");
            t.on("click", function (t) {
                if (t.preventDefault(), confirm(a)) {
                    var i = {action: "mkdf_re_delete_property", property_id: r};
                    e.ajax({
                        type: "POST", data: i, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                            var t;
                            t = JSON.parse(e), "success" == t.status && s.fadeOut(function () {
                                s.remove()
                            })
                        }
                    })
                }
            })
        })
    }

    var m = {};
    mkdf.modules.property = m, m.mkdfPropertyAddToWishlist = i, m.mkdfShowHideEnquiryForm = n, m.mkdfSubmitEnquiryForm = l, m.mkdfMortgageCalculator = d, m.mkdfOnDocumentReady = t, m.mkdfOnWindowLoad = r, m.mkdfOnWindowResize = a, m.mkdfOnWindowScroll = s, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s)
}(jQuery), function (e) {
    "use strict";

    function t() {
        r()
    }

    function r() {
        var t = e(".mkdf-re-profile-searches-holder");
        if (t.length) {
            t.find(".mkdf-undo-query-save").click(function () {
                if (confirm("Are you sure you want to remove this search?")) {
                    var t = e(this);
                    t.html('<span class="fa fa-spinner fa-spin" aria-hidden="true"></span>');
                    var r = {action: "mkdf_re_property_ajax_remove_query", query_id: t.data("query-id")};
                    e.ajax({
                        type: "POST", data: r, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                            var r;
                            r = JSON.parse(e), "success" == r.status ? t.closest("tr").remove() : "error" == r.status && t.html('<i class="fa fa-times" aria-hidden="true"></i>')
                        }
                    })
                }
            })
        }
    }

    var a = {};
    mkdf.modules.propertyProfile = a, a.mkdfOnDocumentReady = t, e(document).ready(t)
}(jQuery), function (e) {
    "use strict";

    function t() {
        l(), d()
    }

    function r() {
        i(), u(), n(), p().init()
    }

    function a() {
        i()
    }

    function s() {
        p().scroll()
    }

    function i() {
        var t = e(".mkdf-property-list-holder.mkdf-pl-masonry");
        t.length && t.each(function () {
            var t = e(this), r = t.find(".mkdf-pl-inner");
            o(t.find(".mkdf-pl-grid-sizer").width(), t), r.isotope({
                layoutMode: "packery",
                itemSelector: "article",
                percentPosition: !0,
                packery: {gutter: ".mkdf-pl-grid-gutter", columnWidth: ".mkdf-pl-grid-sizer"}
            }), setTimeout(function () {
                mkdf.modules.common.mkdfInitParallax()
            }, 600), r.css("opacity", "1")
        })
    }

    function o(e, t) {
        if (t.hasClass("mkdf-pl-images-fixed")) {
            var r = parseInt(t.find("article").css("padding-left")), a = t.find(".mkdf-pl-masonry-default"),
                s = t.find(".mkdf-pl-masonry-large-width"), i = t.find(".mkdf-pl-masonry-large-height"),
                o = t.find(".mkdf-pl-masonry-large-width-height");
            mkdf.windowWidth > 680 ? (a.css("height", e - 2 * r), i.css("height", Math.round(2 * e) - 2 * r), o.css("height", Math.round(2 * e) - 2 * r), s.css("height", e - 2 * r)) : (a.css("height", e), i.css("height", e), o.css("height", e), s.css("height", Math.round(e / 2)))
        }
    }

    function n() {
        var t = e(".mkdf-property-list-holder");
        t.length && t.each(function () {
            var t = e(this), r = t.find(".mkdf-pl-inner"), a = t.find("article");
            t.find(".mkdf-property-list-map-part").length && (a.each(function () {
                var t = e(this);
                t.hasClass("mkdf-init") || (t.mouseenter(function () {
                    var r = t.attr("id"), a = e(".mkdf-map-marker-holder:not(.mapActive)");
                    a.length && (a.removeClass("active"), e("#" + r + ".mkdf-map-marker-holder").addClass("active"))
                }), t.addClass("mkdf-init"))
            }), r.mouseleave(function () {
                e(".mkdf-map-marker-holder").each(function () {
                    e(this).hasClass("mapActive") || e(this).removeClass("active")
                })
            }))
        })
    }

    function l() {
        var t = e(".mkdf-property-list-filter-part .mkdf-filter-price-holder"), r = t.find(".mkdf-range-slider"),
            a = t.find("#mkdf-min-price-value"), s = a.data("min-price"), i = t.find("#mkdf-max-price-value"),
            o = i.data("max-price"), n = t.data("price-label-setting"), l = t.data("max-price-setting");
        r.slider({
            range: !0, animate: !0, min: 0, max: l, step: 25, values: [s, o], create: function () {
            }, slide: function (e, t) {
                a.html(n + t.values[0]), i.html(n + t.values[1])
            }, change: function (e, t) {
                a.data("min-price", t.values[0]), i.data("max-price", t.values[1])
            }
        }), e(document).on("property_list_filter_reset", r, function (e) {
            r.slider("values", 0, 0), r.slider("values", 1, l), a.html(n + 0), i.html(n + l), a.data("min-price", 0), i.data("max-price", l)
        })
    }

    function d() {
        e(document).on("click", ".mkdf-spec-quantity-minus, .mkdf-spec-quantity-plus", function (t) {
            t.stopPropagation();
            var r, a = e(this), s = a.siblings(".mkdf-spec-quantity-input"), i = parseFloat(s.data("step")),
                o = parseFloat(s.data("max")), n = !1, l = parseFloat(s.val());
            a.hasClass("mkdf-spec-quantity-minus") && (n = !0), n ? (r = l - i, r >= 1 ? s.val(r) : s.val(0)) : (r = l + i, void 0 === o ? s.val(r) : r >= o ? s.val(o) : s.val(r))
        })
    }

    function p() {
        var t = e(".mkdf-property-list-holder"), r = function (t) {
            var r = t.find(".mkdf-pl-standard-pagination li");
            r.length && r.each(function () {
                var r = e(this).children("a"), a = 1;
                r.on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), void 0 !== r.data("paged") && !1 !== r.data("paged") && (a = r.data("paged")), i(t, a)
                })
            })
        }, a = function (e) {
            e.find(".mkdf-pl-load-more a").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), i(e)
            })
        }, s = function (e) {
            var t = e.outerHeight(), r = e.offset().top, a = t + r - mkdfGlobalVars.vars.mkdfAddForAdminBar;
            !e.hasClass("mkdf-pl-infinite-scroll-started") && mkdf.scroll + mkdf.windowHeight > a && i(e)
        }, i = function (t, r) {
            var a, s, i = t.find(".mkdf-pl-inner");
            void 0 !== t.data("max-num-pages") && !1 !== t.data("max-num-pages") && (s = t.data("max-num-pages")), t.hasClass("mkdf-pl-pag-standard") && t.data("next-page", r), t.hasClass("mkdf-pl-pag-infinite-scroll") && t.addClass("mkdf-pl-infinite-scroll-started"), 1 == r && t.data("next-page", r);
            var o = mkdf.modules.common.getLoadMoreData(t), n = t.find(".mkdf-pl-loading"),
                c = t.find(".mkdf-pl-filter-loading");
            if ((a = o.nextPage) <= s || 0 == s) {
                1 == a ? c.addClass("mkdf-showing") : t.hasClass("mkdf-pl-pag-standard") ? (n.addClass("mkdf-showing mkdf-standard-pag-trigger"), t.addClass("mkdf-pl-pag-standard-animate")) : n.addClass("mkdf-showing");
                var f = mkdf.modules.common.setLoadMoreAjaxData(o, "mkdf_re_property_ajax_load_more");
                e.ajax({
                    type: "POST", data: f, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (o) {
                        t.hasClass("mkdf-pl-pag-standard") || a++, t.data("next-page", a);
                        var f = e.parseJSON(o), h = f.html, k = f.mapAddresses, g = "";
                        null !== k && void 0 != k.addresses && (g = k.addresses), t.hasClass("mkdf-pl-pag-standard") || 1 == r ? (l(t, s, a), t.waitForImages(function () {
                            t.hasClass("mkdf-pl-masonry") ? d(t, i, n, c, h, g) : t.hasClass("mkdf-pl-gallery") && t.hasClass("mkdf-pl-has-filter") ? d(t, i, n, c, h, g) : p(t, i, n, c, h, g)
                        })) : t.waitForImages(function () {
                            t.hasClass("mkdf-pl-masonry") ? 1 == r ? d(t, i, n, c, h, g) : u(t, i, n, c, h, g) : t.hasClass("mkdf-pl-gallery") && t.hasClass("mkdf-pl-has-filter") && 1 != r ? u(t, i, n, c, h, g) : m(t, i, n, c, h, g)
                        }), t.hasClass("mkdf-pl-infinite-scroll-started") && t.removeClass("mkdf-pl-infinite-scroll-started")
                    }
                })
            }
            1 == r && t.find(".mkdf-pl-load-more-holder").show(), a === s && t.find(".mkdf-pl-load-more-holder").hide()
        }, l = function (e, t, r) {
            var a = e.find(".mkdf-pl-standard-pagination"), s = a.find("li.mkdf-pl-pag-number"),
                i = a.find("li.mkdf-pl-pag-prev a"), o = a.find("li.mkdf-pl-pag-next a");
            s.removeClass("mkdf-pl-pag-active"), s.eq(r - 1).addClass("mkdf-pl-pag-active"), i.data("paged", r - 1), o.data("paged", r + 1), r > 1 ? i.css({opacity: "1"}) : i.css({opacity: "0"}), r === t ? o.css({opacity: "0"}) : o.css({opacity: "1"})
        }, d = function (e, t, r, a, s, i) {
            t.find("article").remove(), t.append(s), e.hasClass("mkdf-pl-with-map") && "" !== i && (mkdf.modules.realEstateMaps.mkdfReinitMultipleGoogleMaps(i, "append"), n()), o(t.find(".mkdf-pl-grid-sizer").width(), e), t.isotope("reloadItems").isotope({sortBy: "original-order"}), r.removeClass("mkdf-showing mkdf-standard-pag-trigger"), a.removeClass("mkdf-showing"), e.removeClass("mkdf-pl-pag-standard-animate"), setTimeout(function () {
                t.isotope("layout"), mkdf.modules.common.mkdfInitParallax()
            }, 600)
        }, p = function (e, t, r, a, s, i) {
            r.removeClass("mkdf-showing mkdf-standard-pag-trigger"), a.removeClass("mkdf-showing"), e.removeClass("mkdf-pl-pag-standard-animate"), t.html(s), e.hasClass("mkdf-pl-with-map") && "" !== i && (mkdf.modules.realEstateMaps.mkdfReinitMultipleGoogleMaps(i, "replace"), n()), mkdf.modules.common.mkdfInitParallax()
        }, u = function (e, t, r, a, s, i) {
            t.append(s), o(t.find(".mkdf-pl-grid-sizer").width(), e), t.isotope("reloadItems").isotope({sortBy: "original-order"}), e.hasClass("mkdf-pl-with-map") && "" !== i && (mkdf.modules.realEstateMaps.mkdfReinitMultipleGoogleMaps(i, "append"), n()), r.removeClass("mkdf-showing"), a.removeClass("mkdf-showing"), setTimeout(function () {
                t.isotope("layout"), mkdf.modules.common.mkdfInitParallax()
            }, 600)
        }, m = function (e, t, r, a, s, i) {
            r.removeClass("mkdf-showing"), a.removeClass("mkdf-showing"), t.append(s), e.hasClass("mkdf-pl-with-map") && "" !== i && (mkdf.modules.realEstateMaps.mkdfReinitMultipleGoogleMaps(i, "append"), n()), mkdf.modules.common.mkdfInitParallax()
        };
        return {
            init: function () {
                t.length && t.each(function () {
                    var t = e(this);
                    t.hasClass("mkdf-pl-pag-standard") && r(t), t.hasClass("mkdf-pl-pag-load-more") && a(t), t.hasClass("mkdf-pl-pag-infinite-scroll") && s(t)
                })
            }, scroll: function () {
                t.length && t.each(function () {
                    var t = e(this);
                    t.hasClass("mkdf-pl-pag-infinite-scroll") && s(t)
                })
            }, getMainPagFunction: function (e, t) {
                i(e, t)
            }
        }
    }

    function u() {
        function t(t, r) {
            // var a = t.find("select");
            // a.length && a.select2({minimumResultsForSearch: -1}).on("select2:select", function (a) {
            //     var s = e(a.currentTarget), i = s.val();
            //     t.data(r, i)
            // })
        }

        function r(e, t, r) {
            e.find("select").val(r).trigger("change"), e.data(t, r)
        }

        function a(t, r) {
            t.find(".mkdf-ptl-item").click(function (a) {
                a.preventDefault();
                var i = e(this);
                s(t, r, i.data("id"))
            })
        }

        function s(e, t, r) {
            var a = e.find(".mkdf-ptl-item");
            if ("" == r) a.removeClass("active"), e.data(t, ""); else {
                var s = e.find(".mkdf-ptl-item[data-id=" + r + "]");
                s.hasClass("active") ? (s.removeClass("active"), e.data(t, "")) : (a.removeClass("active"), s.addClass("active"), e.data(t, r))
            }
        }

        var i = e(".mkdf-property-list-filter-part");
        i.length && i.each(function () {
            var i = e(this), o = i.parents(".mkdf-property-list-holder"), n = i.find(".mkdf-property-filter-button"),
                l = i.find(".mkdf-filter-status-holder"), d = i.find(".mkdf-filter-type-holder"),
                u = i.find(".mkdf-filter-city-holder"), c = i.find("#mkdf-min-price-value"),
                f = i.find("#mkdf-max-price-value"), h = i.find(".mkdf-min-size"), k = i.find(".mkdf-max-size"),
                g = i.find("#mkdf-specification-bedrooms"), v = i.find("#mkdf-specification-bathrooms");
            l.length > 0 && t(l, "status"), u.length > 0 && t(u, "city"), d.length > 0 && a(d, "type"), n.click(function () {
                var t = l.data("status"), r = d.data("type"), a = u.data("city"), s = c.data("min-price"),
                    i = f.data("max-price"), n = h.val(), m = k.val(), y = g.val(), _ = v.val(), C = [];
                e("input[name='mkdf-features[]']:checked").each(function () {
                    C.push(parseInt(e(this).data("id")))
                }), C = C.join(","), o.data("property-status", t), o.data("property-type", r), o.data("property-city", a), o.data("property-min-price", s), o.data("property-max-price", i), o.data("property-min-size", n), o.data("property-max-size", m), o.data("property-bedrooms", y), o.data("property-bathrooms", _), o.data("property-features", C), p().getMainPagFunction(o, 1)
            });
            var y = o.find(".mkdf-property-query-section");
            if (y.length) {
                var _ = y.find(".mkdf-property-save-search-button"), C = y.find(".mkdf-query-result");
                _.click(function () {
                    if (mkdf.body.hasClass("logged-in")) {
                        C.html('<span class="fa fa-spinner fa-spin" aria-hidden="true"></span>');
                        var t = l.data("status"), r = d.data("type"), a = u.data("city"), s = c.data("min-price"),
                            i = f.data("max-price"), o = h.val(), n = k.val(), p = g.val(), _ = v.val(), M = [];
                        e("input[name='mkdf-features[]']:checked").each(function () {
                            M.push(parseInt(e(this).data("id")))
                        }), M = M.join(",");
                        var w = {
                            action: "mkdf_re_property_ajax_save_query",
                            status: t,
                            type: r,
                            city: a,
                            minPrice: s,
                            maxPrice: i,
                            minSize: o,
                            maxSize: n,
                            bedrooms: p,
                            bathrooms: _,
                            features: M
                        };
                        e.ajax({
                            type: "POST", data: w, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                                var t;
                                t = JSON.parse(e), C.html('<span class="mkdf-result-message">' + t.message + "</span>"), C.append(t.data), m(y)
                            }
                        })
                    } else e(document.body).trigger("open_user_login_trigger")
                })
            }
            var M = o.find(".mkdf-property-filter-reset-button");
            M.length && M.click(function (t) {
                t.preventDefault();
                var a = o.find(".mkdf-feature-cb");
                e(document.body).trigger("property_list_filter_reset"), h.val(""), k.val(""), g.val(0), v.val(0), a.each(function () {
                    e(this).prop("checked", !1)
                }), r(l, "status", l.data("default-status")), r(u, "city", u.data("default-city")), s(d, "type", d.data("default-type")), n.trigger("click")
            })
        })
    }

    function m(t) {
        var r = t.find(".mkdf-undo-query-save"), a = t.find(".mkdf-query-result");
        r.click(function () {
            a.html('<span class="fa fa-spinner fa-spin" aria-hidden="true"></span>');
            var t = {action: "mkdf_re_property_ajax_remove_query", query_id: r.data("query-id")};
            e.ajax({
                type: "POST", data: t, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                    var t;
                    t = JSON.parse(e), a.html('<span class="mkdf-result-message">' + t.message + "</span>"), a.append(t.data)
                }
            })
        })
    }

    var c = {};
    mkdf.modules.propertyList = c, c.mkdfOnDocumentReady = t, c.mkdfOnWindowLoad = r, c.mkdfOnWindowResize = a, c.mkdfOnWindowScroll = s, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s)
}(jQuery), function (e) {
    "use strict";

    function t() {
        i()
    }

    function r() {
    }

    function a() {
    }

    function s() {
    }

    function i() {
        var t = e(".mkdf-property-search-holder");
        t.length && t.each(function () {
            // var t = e(this), r = t.find(".mkdf-search-status-section");
            // r.length && r.each(function () {
            //     var e = r.find("select");
            //     e.length && e.select2({minimumResultsForSearch: -1}).on("select2:select", function (e) {
            //     })
            // });
            // var a = t.find(".mkdf-search-type-section");
            // a.length && a.each(function () {
            //     var t = e(this), r = t.find("input[name=mkdf-search-type]"), a = t.find(".mkdf-ptl-item");
            //     a.click(function (t) {
            //         t.preventDefault();
            //         var s = e(this);
            //         s.hasClass("active") ? (r.val(""), s.removeClass("active")) : (a.removeClass("active"), s.addClass("active"), r.val(s.data("id")))
            //     })
            // });
            // var s = t.find(".mkdf-search-city-section");
            // s.length && s.each(function () {
            //     var e = s.find("select");
            //     e.length && e.select2({minimumResultsForSearch: 0})
            //         .on("select2:select", function (e) {
            //         })
            // })
        })
    }

    var o = {};
    mkdf.modules.propertySearch = o, o.mkdfOnDocumentReady = t, o.mkdfOnWindowLoad = r, o.mkdfOnWindowResize = a, o.mkdfOnWindowScroll = s, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s)
}(jQuery), function (e) {
    "use strict";

    function t() {
        r()
    }

    function r() {
        var t = e(".dsidx-resp-search-form select");
        t.length && t.each(function () {
            e(this).select2({minimumResultsForSearch: 1 / 0})
        });
        var r = e(".dsidx-sorting-control select");
        r.length && r.each(function () {
            e(this).select2({minimumResultsForSearch: 1 / 0})
        });
        var a = e(".dsidx-contact-form-schedule-date-row select");
        a.length && a.each(function () {
            e(this).select2({minimumResultsForSearch: 1 / 0})
        })
    }

    var a = {};
    mkdf.modules.idxpress = a, a.mkdfOnWindowLoad = t, e(window).load(t)
}(jQuery), function (e) {
    "use strict";

    function t() {
        r()
    }

    function r() {
        var t = e("#ihf-main-container select");
        t.length && t.each(function () {
            e(this).select2({minimumResultsForSearch: 1 / 0})
        })
    }

    var a = {};
    mkdf.modules.ihomeFinder = a, a.mkdfOnWindowLoad = t, e(window).load(t)
}(jQuery);
var j = jQuery.noConflict();
CustomMarker.prototype = new google.maps.OverlayView, CustomMarker.prototype.draw = function () {
    var e = this, t = this.div;
    if (!t) {
        t = this.div = document.createElement("div");
        var r = this.templateData.itemId;
        t.className = "mkdf-map-marker-holder", t.setAttribute("id", r);
        var a = _.template(j(".mkdf-info-window-template").html());
        a = a(e.templateData);
        var s = _.template(j(".mkdf-marker-template").html());
        s = s(e.markerData), j(t).append(a), j(t).append(s), t.style.position = "absolute", t.style.cursor = "pointer";
        this.getPanes().overlayImage.appendChild(t)
    }
    var i = this.getProjection().fromLatLngToDivPixel(this.latlng);
    i && (t.style.left = i.x + "px", t.style.top = i.y + "px")
}, CustomMarker.prototype.remove = function () {
    this.div && (this.div.parentNode.removeChild(this.div), this.div = null)
}, CustomMarker.prototype.getPosition = function () {
    return this.latlng
}, function (e) {
    "use strict";

    function t() {
    }

    function r() {
        i(), o(), n()
    }

    function a() {
    }

    function s() {
    }

    function i() {
        e("#mkdf-re-single-map-holder").length && mkdf.modules.realEstateMaps.mkdfGoogleMaps.getDirectoryItemAddress({mapHolder: "mkdf-re-single-map-holder"})
    }

    function o() {
        e("#mkdf-re-multiple-map-holder").length && mkdf.modules.realEstateMaps.mkdfGoogleMaps.getDirectoryItemsAddresses({
            mapHolder: "mkdf-re-multiple-map-holder",
            hasFilter: !0
        })
    }

    function n() {
        var t = e(".mkdf-re-view-larger-map a"), r = t.children("i"), a = e(".mkdf-map-holder");
        t.length && t.click(function (e) {
            e.preventDefault(), a.hasClass("mkdf-fullscreen-map") ? (a.removeClass("mkdf-fullscreen-map"), r.removeClass("icon-basic-magnifier-minus"), r.addClass("icon-basic-magnifier-plus")) : (a.addClass("mkdf-fullscreen-map"), r.removeClass("icon-basic-magnifier-plus"), r.addClass("icon-basic-magnifier-minus")), mkdf.modules.realEstateMaps.mkdfGoogleMaps.getDirectoryItemsAddresses()
        })
    }

    function l(e, t) {
        if ("append" === t) {
            var r = mkdfMultipleMapVars.multiple.addresses;
            r = mkdfMultipleMapVars.multiple.addresses.concat(e), mkdfMultipleMapVars.multiple.addresses = r, mkdf.modules.realEstateMaps.mkdfGoogleMaps.getDirectoryItemsAddresses({addresses: r})
        } else "replace" === t && (mkdfMultipleMapVars.multiple.addresses = e, mkdf.modules.realEstateMaps.mkdfGoogleMaps.getDirectoryItemsAddresses({addresses: e}))
    }

    var d = {};
    mkdf.modules.realEstateMaps = d, d.mkdfInitMultipleRealEstateMap = o, d.mkdfInitSingleRealEstateMap = i, d.mkdfInitMobileMap = n, d.mkdfReinitMultipleGoogleMaps = l, d.mkdfGoogleMaps = {}, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s), d.mkdfGoogleMaps = {
        mapHolder: {}, map: {}, markers: {}, radius: {}, getDirectoryItemAddress: function (t) {
            var r = {
                location: mkdfSingleMapVars.single.currentRealEstate.location,
                zoom: 16,
                mapHolder: "",
                draggable: mkdfMapsVars.global.draggable,
                mapTypeControl: mkdfMapsVars.global.mapTypeControl,
                scrollwheel: mkdfMapsVars.global.scrollable,
                streetViewControl: mkdfMapsVars.global.streetViewControl,
                zoomControl: mkdfMapsVars.global.zoomControl,
                title: mkdfSingleMapVars.single.currentRealEstate.title,
                itemId: mkdfSingleMapVars.single.currentRealEstate.itemId,
                content: "",
                styles: mkdfMapsVars.global.mapStyle,
                markerPin: mkdfSingleMapVars.single.currentRealEstate.markerPin,
                featuredImage: mkdfSingleMapVars.single.currentRealEstate.featuredImage,
                itemUrl: mkdfSingleMapVars.single.currentRealEstate.itemUrl
            }, a = e.extend({}, r, t);
            this.mapHolder = a.mapHolder;
            var s = document.getElementById(a.mapHolder), i = new google.maps.Map(s, {
                zoom: a.zoom,
                draggable: a.draggable,
                mapTypeControl: a.mapTypeControl,
                scrollwheel: a.scrollwheel,
                streetViewControl: a.streetViewControl,
                zoomControl: a.zoomControl
            });
            if (i.setOptions({styles: a.styles}), void 0 !== a.location && null !== a.location) {
                var o = {lat: parseFloat(a.location.latitude), lng: parseFloat(a.location.longitude)};
                i.setCenter(o);
                var n = {
                    title: a.title,
                    itemId: a.itemId,
                    address: a.location.address,
                    featuredImage: a.featuredImage,
                    itemUrl: a.itemUrl
                };
                new CustomMarker({map: i, position: o, templateData: n, markerPin: a.markerPin});
                this.initMarkerInfo()
            }
        }, getDirectoryItemsAddresses: function (t) {
            var r = {
                geolocation: !1,
                mapHolder: "mkdf-re-multiple-map-holder",
                addresses: mkdfMultipleMapVars.multiple.addresses,
                draggable: mkdfMapsVars.global.draggable,
                mapTypeControl: mkdfMapsVars.global.mapTypeControl,
                scrollwheel: mkdfMapsVars.global.scrollable,
                streetViewControl: mkdfMapsVars.global.streetViewControl,
                zoomControl: mkdfMapsVars.global.zoomControl,
                zoom: 16,
                styles: mkdfMapsVars.global.mapStyle,
                radius: 50,
                hasFilter: !1
            }, a = e.extend({}, r, t), s = document.getElementById(a.mapHolder), i = new google.maps.Map(s, {
                zoom: a.zoom,
                draggable: a.draggable,
                mapTypeControl: a.mapTypeControl,
                scrollwheel: a.scrollwheel,
                streetViewControl: a.streetViewControl,
                zoomControl: a.zoomControl
            });
            this.mapHolder = a.mapHolder, this.map = i, this.radius = a.radius, i.setOptions({styles: a.styles}), navigator.geolocation && a.geolocation && this.centerOnCurrentLocation();
            var o = [], n = a.addresses.length;
            if (null !== a.addresses.length) for (var l = 0; l < n; l++) {
                var d = a.addresses[l].location;
                void 0 !== d && null !== d && "" !== d.latitude && "" !== d.longitude && o.push(a.addresses[l])
            }
            this.setMapBounds(o), this.addMultipleMarkers(o)
        }, addMultipleMarkers: function (e) {
            for (var t = this.map, r = [], a = e.length, s = 0; s < a; s++) {
                var i = {lat: parseFloat(e[s].location.latitude), lng: parseFloat(e[s].location.longitude)}, o = {
                    title: e[s].title,
                    itemId: e[s].itemId,
                    address: e[s].location.address,
                    featuredImage: e[s].featuredImage,
                    itemUrl: e[s].itemUrl
                }, n = new CustomMarker({position: i, map: t, templateData: o, markerPin: e[s].markerPin});
                r.push(n)
            }
            this.markers = r, this.initMapClusters(), this.initMarkerInfo();
            var l = this;
            google.maps.event.addListener(t, "idle", function () {
                new google.maps.Circle({
                    strokeColor: "#FF0000",
                    strokeOpacity: 0,
                    strokeWeight: 0,
                    fillColor: "#FF0000",
                    fillOpacity: 0,
                    map: t,
                    center: t.getCenter(),
                    radius: 1e3 * l.radius
                })
            })
        }, setMapBounds: function (e) {
            for (var t = new google.maps.LatLngBounds, r = 0; r < e.length; r++) t.extend(new google.maps.LatLng(parseFloat(e[r].location.latitude), parseFloat(e[r].location.longitude)));
            this.map.fitBounds(t)
        }, initMapClusters: function () {
            var e = {minimumClusterSize: 2, maxZoom: 12, styles: [{width: 50, height: 60, url: "", textSize: 12}]};
            new MarkerClusterer(this.map, this.markers, e)
        }, initMarkerInfo: function () {
            e(document).off("click", ".mkdf-map-marker"), e(document).on("click", ".mkdf-map-marker", function () {
                var t = e(this), r = e(".mkdf-map-marker-holder"), a = e(".mkdf-info-window"),
                    s = t.parent(".mkdf-map-marker-holder"), i = t.siblings(".mkdf-info-window");
                s.hasClass("active mapActive") ? (s.removeClass("active mapActive"), i.fadeOut(0)) : (r.removeClass("active mapActive"), a.fadeOut(0), s.addClass("active mapActive"), i.fadeIn(300))
            })
        }, addInfoWindow: function () {
            return new google.maps.InfoWindow({content: ""})
        }, centerOnCurrentLocation: function () {
            var e = this.map;
            navigator.geolocation.getCurrentPosition(function (t) {
                var r = {lat: t.coords.latitude, lng: t.coords.longitude};
                e.setCenter(r)
            })
        }, refreshCircleAreaMarkers: function (e) {
            for (var t = this.markers.length, r = 0; r < t; r++) e.contains(this.markers[r].getPosition()) ? this.markers[r].setVisible(!0) : this.markers[r].setVisible(!1)
        }
    }
}(jQuery), MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = "https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m", MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png", MarkerClusterer.prototype.extend = function (e, t) {
    return function (e) {
        for (var t in e.prototype) this.prototype[t] = e.prototype[t];
        return this
    }.apply(e, [t])
}, MarkerClusterer.prototype.onAdd = function () {
    this.setReady_(!0)
}, MarkerClusterer.prototype.draw = function () {
}, MarkerClusterer.prototype.setupStyles_ = function () {
    if (!this.styles_.length) for (var e, t = 0; e = this.sizes[t]; t++) this.styles_.push({
        url: this.imagePath_ + (t + 1) + "." + this.imageExtension_,
        height: e,
        width: e
    })
}, MarkerClusterer.prototype.fitMapToMarkers = function () {
    for (var e, t = this.getMarkers(), r = new google.maps.LatLngBounds, a = 0; e = t[a]; a++) r.extend(e.getPosition());
    this.map_.fitBounds(r)
}, MarkerClusterer.prototype.setStyles = function (e) {
    this.styles_ = e
}, MarkerClusterer.prototype.getStyles = function () {
    return this.styles_
}, MarkerClusterer.prototype.isZoomOnClick = function () {
    return this.zoomOnClick_
}, MarkerClusterer.prototype.isAverageCenter = function () {
    return this.averageCenter_
}, MarkerClusterer.prototype.getMarkers = function () {
    return this.markers_
}, MarkerClusterer.prototype.getTotalMarkers = function () {
    return this.markers_.length
}, MarkerClusterer.prototype.setMaxZoom = function (e) {
    this.maxZoom_ = e
}, MarkerClusterer.prototype.getMaxZoom = function () {
    return this.maxZoom_
}, MarkerClusterer.prototype.calculator_ = function (e, t) {
    for (var r = 0, a = e.length, s = a; 0 !== s;) s = parseInt(s / 10, 10), r++;
    return r = Math.min(r, t), {text: a, index: r}
}, MarkerClusterer.prototype.setCalculator = function (e) {
    this.calculator_ = e
}, MarkerClusterer.prototype.getCalculator = function () {
    return this.calculator_
}, MarkerClusterer.prototype.addMarkers = function (e, t) {
    for (var r, a = 0; r = e[a]; a++) this.pushMarkerTo_(r);
    t || this.redraw()
}, MarkerClusterer.prototype.pushMarkerTo_ = function (e) {
    if (e.isAdded = !1, e.draggable) {
        var t = this;
        google.maps.event.addListener(e, "dragend", function () {
            e.isAdded = !1, t.repaint()
        })
    }
    this.markers_.push(e)
}, MarkerClusterer.prototype.addMarker = function (e, t) {
    this.pushMarkerTo_(e), t || this.redraw()
}, MarkerClusterer.prototype.removeMarker_ = function (e) {
    var t = -1;
    if (this.markers_.indexOf) t = this.markers_.indexOf(e); else for (var r, a = 0; r = this.markers_[a]; a++) if (r == e) {
        t = a;
        break
    }
    return -1 != t && (e.setMap(null), this.markers_.splice(t, 1), !0)
}, MarkerClusterer.prototype.removeMarker = function (e, t) {
    var r = this.removeMarker_(e);
    return !(t || !r) && (this.resetViewport(), this.redraw(), !0)
}, MarkerClusterer.prototype.removeMarkers = function (e, t) {
    for (var r, a = !1, s = 0; r = e[s]; s++) {
        var i = this.removeMarker_(r);
        a = a || i
    }
    if (!t && a) return this.resetViewport(), this.redraw(), !0
}, MarkerClusterer.prototype.setReady_ = function (e) {
    this.ready_ || (this.ready_ = e, this.createClusters_())
}, MarkerClusterer.prototype.getTotalClusters = function () {
    return this.clusters_.length
}, MarkerClusterer.prototype.getMap = function () {
    return this.map_
}, MarkerClusterer.prototype.setMap = function (e) {
    this.map_ = e
}, MarkerClusterer.prototype.getGridSize = function () {
    return this.gridSize_
}, MarkerClusterer.prototype.setGridSize = function (e) {
    this.gridSize_ = e
}, MarkerClusterer.prototype.getMinClusterSize = function () {
    return this.minClusterSize_
}, MarkerClusterer.prototype.setMinClusterSize = function (e) {
    this.minClusterSize_ = e
}, MarkerClusterer.prototype.getExtendedBounds = function (e) {
    var t = this.getProjection(), r = new google.maps.LatLng(e.getNorthEast().lat(), e.getNorthEast().lng()),
        a = new google.maps.LatLng(e.getSouthWest().lat(), e.getSouthWest().lng()), s = t.fromLatLngToDivPixel(r);
    s.x += this.gridSize_, s.y -= this.gridSize_;
    var i = t.fromLatLngToDivPixel(a);
    i.x -= this.gridSize_, i.y += this.gridSize_;
    var o = t.fromDivPixelToLatLng(s), n = t.fromDivPixelToLatLng(i);
    return e.extend(o), e.extend(n), e
}, MarkerClusterer.prototype.isMarkerInBounds_ = function (e, t) {
    return t.contains(e.getPosition())
}, MarkerClusterer.prototype.clearMarkers = function () {
    this.resetViewport(!0), this.markers_ = []
}, MarkerClusterer.prototype.resetViewport = function (e) {
    for (var t, r = 0; t = this.clusters_[r]; r++) t.remove();
    for (var a, r = 0; a = this.markers_[r]; r++) a.isAdded = !1, e && a.setMap(null);
    this.clusters_ = []
}, MarkerClusterer.prototype.repaint = function () {
    var e = this.clusters_.slice();
    this.clusters_.length = 0, this.resetViewport(), this.redraw(), window.setTimeout(function () {
        for (var t, r = 0; t = e[r]; r++) t.remove()
    }, 0)
}, MarkerClusterer.prototype.redraw = function () {
    this.createClusters_()
}, MarkerClusterer.prototype.distanceBetweenPoints_ = function (e, t) {
    if (!e || !t) return 0;
    var r = (t.lat() - e.lat()) * Math.PI / 180, a = (t.lng() - e.lng()) * Math.PI / 180,
        s = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(e.lat() * Math.PI / 180) * Math.cos(t.lat() * Math.PI / 180) * Math.sin(a / 2) * Math.sin(a / 2);
    return 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)) * 6371
}, MarkerClusterer.prototype.addToClosestCluster_ = function (e) {
    for (var t, r = 4e4, a = null, s = (e.getPosition(), 0); t = this.clusters_[s]; s++) {
        var i = t.getCenter();
        if (i) {
            var o = this.distanceBetweenPoints_(i, e.getPosition());
            o < r && (r = o, a = t)
        }
    }
    if (a && a.isMarkerInClusterBounds(e)) a.addMarker(e); else {
        var t = new Cluster(this);
        t.addMarker(e), this.clusters_.push(t)
    }
}, MarkerClusterer.prototype.createClusters_ = function () {
    if (this.ready_) for (var e, t = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast()), r = this.getExtendedBounds(t), a = 0; e = this.markers_[a]; a++) !e.isAdded && this.isMarkerInBounds_(e, r) && this.addToClosestCluster_(e)
}, Cluster.prototype.isMarkerAlreadyAdded = function (e) {
    if (this.markers_.indexOf) return -1 != this.markers_.indexOf(e);
    for (var t, r = 0; t = this.markers_[r]; r++) if (t == e) return !0;
    return !1
}, Cluster.prototype.addMarker = function (e) {
    if (this.isMarkerAlreadyAdded(e)) return !1;
    if (this.center_) {
        if (this.averageCenter_) {
            var t = this.markers_.length + 1, r = (this.center_.lat() * (t - 1) + e.getPosition().lat()) / t,
                a = (this.center_.lng() * (t - 1) + e.getPosition().lng()) / t;
            this.center_ = new google.maps.LatLng(r, a), this.calculateBounds_()
        }
    } else this.center_ = e.getPosition(), this.calculateBounds_();
    e.isAdded = !0, this.markers_.push(e);
    var s = this.markers_.length;
    if (s < this.minClusterSize_ && e.getMap() != this.map_ && e.setMap(this.map_), s == this.minClusterSize_) for (var i = 0; i < s; i++) this.markers_[i].setMap(null);
    return s >= this.minClusterSize_ && e.setMap(null), this.updateIcon(), !0
}, Cluster.prototype.getMarkerClusterer = function () {
    return this.markerClusterer_
}, Cluster.prototype.getBounds = function () {
    for (var e, t = new google.maps.LatLngBounds(this.center_, this.center_), r = this.getMarkers(), a = 0; e = r[a]; a++) t.extend(e.getPosition());
    return t
}, Cluster.prototype.remove = function () {
    this.clusterIcon_.remove(), this.markers_.length = 0, delete this.markers_
}, Cluster.prototype.getSize = function () {
    return this.markers_.length
}, Cluster.prototype.getMarkers = function () {
    return this.markers_
}, Cluster.prototype.getCenter = function () {
    return this.center_
}, Cluster.prototype.calculateBounds_ = function () {
    var e = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(e)
}, Cluster.prototype.isMarkerInClusterBounds = function (e) {
    return this.bounds_.contains(e.getPosition())
}, Cluster.prototype.getMap = function () {
    return this.map_
}, Cluster.prototype.updateIcon = function () {
    var e = this.map_.getZoom(), t = this.markerClusterer_.getMaxZoom();
    if (t && e > t) for (var r, a = 0; r = this.markers_[a]; a++) r.setMap(this.map_); else {
        if (this.markers_.length < this.minClusterSize_) return void this.clusterIcon_.hide();
        var s = this.markerClusterer_.getStyles().length, i = this.markerClusterer_.getCalculator()(this.markers_, s);
        this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.setSums(i), this.clusterIcon_.show()
    }
}, ClusterIcon.prototype.triggerClusterClick = function (e) {
    var t = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(t, "clusterclick", this.cluster_, e), t.isZoomOnClick() && this.map_.fitBounds(this.cluster_.getBounds())
}, ClusterIcon.prototype.onAdd = function () {
    if (this.div_ = document.createElement("DIV"), this.div_.className = "mkdf-cluster-marker", this.visible_) {
        var e = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(e), this.div_.innerHTML = '<div class="mkdf-cluster-marker-inner"><span class="mkdf-cluster-marker-number">' + this.sums_.text + '</span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="594.657px" height="832.35px" viewBox="0 0 594.657 832.35" enable-background="new 0 0 594.657 832.35" xml:space="preserve"><path fill="#FFCD0A" d="M507.572,87.086C451.414,30.928,376.748,0,297.329,0S143.244,30.928,87.086,87.086S0,217.91,0,297.33c0,37.328,8.104,75.127,24.773,115.561c13.006,31.545,31.131,64.504,57.041,103.725l82.887,125.467l113.352,180.572c4.189,6.676,11.396,10.66,19.276,10.66c7.881,0,15.087-3.984,19.276-10.66l113.319-180.521l82.919-125.518c25.911-39.221,44.035-72.18,57.041-103.725c16.67-40.434,24.772-78.232,24.772-115.561C594.657,217.91,563.729,143.244,507.572,87.086z" class="pin-color"/></svg></div>'
    }
    this.getPanes().overlayMouseTarget.appendChild(this.div_);
    var t = this;
    google.maps.event.addDomListener(this.div_, "click", function (e) {
        t.triggerClusterClick(e)
    })
}, ClusterIcon.prototype.getPosFromLatLng_ = function (e) {
    var t = this.getProjection().fromLatLngToDivPixel(e);
    return "object" == typeof this.iconAnchor_ && 2 === this.iconAnchor_.length ? (t.x -= this.iconAnchor_[0], t.y -= this.iconAnchor_[1]) : (t.x -= parseInt(this.width_ / 2, 10), t.y -= parseInt(this.height_ / 2, 10)), t
}, ClusterIcon.prototype.draw = function () {
    if (this.visible_) {
        var e = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = e.y + "px", this.div_.style.left = e.x + "px"
    }
}, ClusterIcon.prototype.hide = function () {
    this.div_ && (this.div_.style.display = "none"), this.visible_ = !1
}, ClusterIcon.prototype.show = function () {
    if (this.div_) {
        var e = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(e), this.div_.style.display = ""
    }
    this.visible_ = !0
}, ClusterIcon.prototype.remove = function () {
    this.setMap(null)
}, ClusterIcon.prototype.onRemove = function () {
    this.div_ && this.div_.parentNode && (this.hide(), this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, ClusterIcon.prototype.setSums = function (e) {
    this.sums_ = e, this.text_ = e.text, this.index_ = e.index, this.div_ && (this.div_.innerHTML = e.text), this.useStyle()
}, ClusterIcon.prototype.useStyle = function () {
    var e = Math.max(0, this.sums_.index - 1);
    e = Math.min(this.styles_.length - 1, e);
    var t = this.styles_[e];
    this.url_ = t.url, this.height_ = t.height, this.width_ = t.width, this.textColor_ = t.textColor, this.anchor_ = t.anchor, this.textSize_ = t.textSize, this.backgroundPosition_ = t.backgroundPosition, this.iconAnchor_ = t.iconAnchor
}, ClusterIcon.prototype.setCenter = function (e) {
    this.center_ = e
}, ClusterIcon.prototype.createCss = function (e) {
    var t = [];
    t.push("background-image:url(" + this.url_ + ");");
    var r = this.backgroundPosition_ ? this.backgroundPosition_ : "0 0";
    t.push("background-position:" + r + ";"), "object" == typeof this.anchor_ ? ("number" == typeof this.anchor_[0] && this.anchor_[0] > 0 && this.anchor_[0] < this.height_ ? t.push("height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;") : "number" == typeof this.anchor_[0] && this.anchor_[0] < 0 && -this.anchor_[0] < this.height_ ? t.push("height:" + this.height_ + "px; line-height:" + (this.height_ + this.anchor_[0]) + "px;") : t.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px;"), "number" == typeof this.anchor_[1] && this.anchor_[1] > 0 && this.anchor_[1] < this.width_ ? t.push("width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;") : t.push("width:" + this.width_ + "px; text-align:center;")) : t.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;");
    var a = this.textColor_ ? this.textColor_ : "black", s = this.textSize_ ? this.textSize_ : 11;
    return t.push("cursor:pointer; top:" + e.y + "px; left:" + e.x + "px; color:" + a + "; position:absolute; font-size:" + s + "px; font-family:Arial,sans-serif; font-weight:bold"), t.join("")
}, window.MarkerClusterer = MarkerClusterer, MarkerClusterer.prototype.addMarker = MarkerClusterer.prototype.addMarker, MarkerClusterer.prototype.addMarkers = MarkerClusterer.prototype.addMarkers, MarkerClusterer.prototype.clearMarkers = MarkerClusterer.prototype.clearMarkers, MarkerClusterer.prototype.fitMapToMarkers = MarkerClusterer.prototype.fitMapToMarkers, MarkerClusterer.prototype.getCalculator = MarkerClusterer.prototype.getCalculator, MarkerClusterer.prototype.getGridSize = MarkerClusterer.prototype.getGridSize, MarkerClusterer.prototype.getExtendedBounds = MarkerClusterer.prototype.getExtendedBounds, MarkerClusterer.prototype.getMap = MarkerClusterer.prototype.getMap, MarkerClusterer.prototype.getMarkers = MarkerClusterer.prototype.getMarkers, MarkerClusterer.prototype.getMaxZoom = MarkerClusterer.prototype.getMaxZoom, MarkerClusterer.prototype.getStyles = MarkerClusterer.prototype.getStyles, MarkerClusterer.prototype.getTotalClusters = MarkerClusterer.prototype.getTotalClusters, MarkerClusterer.prototype.getTotalMarkers = MarkerClusterer.prototype.getTotalMarkers, MarkerClusterer.prototype.redraw = MarkerClusterer.prototype.redraw, MarkerClusterer.prototype.removeMarker = MarkerClusterer.prototype.removeMarker, MarkerClusterer.prototype.removeMarkers = MarkerClusterer.prototype.removeMarkers, MarkerClusterer.prototype.resetViewport = MarkerClusterer.prototype.resetViewport, MarkerClusterer.prototype.repaint = MarkerClusterer.prototype.repaint, MarkerClusterer.prototype.setCalculator = MarkerClusterer.prototype.setCalculator, MarkerClusterer.prototype.setGridSize = MarkerClusterer.prototype.setGridSize, MarkerClusterer.prototype.setMaxZoom = MarkerClusterer.prototype.setMaxZoom, MarkerClusterer.prototype.onAdd = MarkerClusterer.prototype.onAdd, MarkerClusterer.prototype.draw = MarkerClusterer.prototype.draw, Cluster.prototype.getCenter = Cluster.prototype.getCenter, Cluster.prototype.getSize = Cluster.prototype.getSize, Cluster.prototype.getMarkers = Cluster.prototype.getMarkers, ClusterIcon.prototype.onAdd = ClusterIcon.prototype.onAdd, ClusterIcon.prototype.draw = ClusterIcon.prototype.draw, ClusterIcon.prototype.onRemove = ClusterIcon.prototype.onRemove, function (e) {
    "use strict";

    function t() {
        r()
    }

    function r() {
        var t = e("#mkdf-rating"), r = t.val(), a = e(".mkdf-star-rating"), s = function () {
            for (var t = 0; t < a.length; t++) {
                var s = a[t];
                t < r ? e(s).addClass("active") : e(s).removeClass("active")
            }
        };
        s(), a.click(function () {
            t.val(e(this).data("value")).trigger("change")
        }), t.change(function () {
            r = t.val(), s()
        })
    }

    var a = {};
    mkdf.modules.propertyRating = a, a.mkdfOnDocumentReady = t, e(document).ready(t)
}(jQuery),function (e) {
    "use strict";

    function t() {
        r()
    }

    function r() {
        // var t = e(".mkdf-register-content-inner"), r = t.find("select");
        // r.length && r.each(function () {
        //     e(this).select2({minimumResultsForSearch: 1 / 0})
        // })
    }

    var a = {};
    mkdf.modules.roles = a, a.mkdfOnDocumentReady = t, e(document).ready(t)
}(jQuery),function (e) {
    "use strict";

    function t() {
        i(), o()
    }

    function r() {
    }

    function a() {
    }

    function s() {
    }

    function i() {
        var t = e("#mkdf-re-add-agent_profile-form");
        if (t.length) {
            var r = t.find("button"), a = r.data("updating-text"), s = r.data("updated-text");
            t.on("submit", function (t) {
                t.preventDefault();
                var i = r.html();
                r.html(a);
                var o = {action: "mkdf_re_add_agent_profile", data: e(this).serialize()};
                return e.ajax({
                    type: "POST", data: o, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                        var t;
                        t = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(t), "success" == t.status ? r.html(s) : r.html(i)
                    }
                }), !1
            })
        }
    }

    function o() {
        var t = e("#mkdf-re-update-agency-profile-form");
        if (t.length) {
            var r = t.find("button"), a = r.data("updating-text"), s = r.data("updated-text");
            t.on("submit", function (t) {
                t.preventDefault();
                var i = r.html();
                r.html(a);
                var o = {action: "mkdf_re_update_agency_profile", data: e(this).serialize()};
                return e.ajax({
                    type: "POST", data: o, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                        var t;
                        t = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(t), "success" == t.status ? r.html(s) : r.html(i)
                    }
                }), !1
            })
        }
    }

    var n = {};
    mkdf.modules.agency = n, n.mkdfOnDocumentReady = t, n.mkdfOnWindowLoad = r, n.mkdfOnWindowResize = a, n.mkdfOnWindowScroll = s, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s)
}(jQuery),function (e) {
    "use strict";

    function t() {
        i()
    }

    function r() {
    }

    function a() {
    }

    function s() {
    }

    function i() {
        var t = e("#mkdf-re-update-agent_profile-profile-form");
        if (t.length) {
            var r = t.find("button"), a = r.data("updating-text"), s = r.data("updated-text");
            t.on("submit", function (t) {
                t.preventDefault();
                var i = r.html();
                r.html(a);
                var o = {action: "mkdf_re_update_agent_profile", data: e(this).serialize()};
                return e.ajax({
                    type: "POST", data: o, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                        var t;
                        t = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(t), "success" == t.status ? r.html(s) : r.html(i)
                    }
                }), !1
            })
        }
    }

    var o = {};
    mkdf.modules.agent = o, o.mkdfOnDocumentReady = t, o.mkdfOnWindowLoad = r, o.mkdfOnWindowResize = a, o.mkdfOnWindowScroll = s, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s)
}(jQuery),function (e) {
    "use strict";

    function t() {
        i()
    }

    function r() {
    }

    function a() {
    }

    function s() {
    }

    function i() {
        var t = e("#mkdf-re-update-owner-profile-form");
        if (t.length) {
            var r = t.find("button"), a = r.data("updating-text"), s = r.data("updated-text");
            t.on("submit", function (t) {
                t.preventDefault();
                var i = r.html();
                r.html(a);
                var o = {action: "mkdf_re_update_owner_profile", data: e(this).serialize()};
                return e.ajax({
                    type: "POST", data: o, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                        var t;
                        t = JSON.parse(e), mkdf.modules.socialLogin.mkdfRenderAjaxResponseMessage(t), "success" == t.status ? r.html(s) : r.html(i)
                    }
                }), !1
            })
        }
    }

    var o = {};
    mkdf.modules.owner = o, o.mkdfOnDocumentReady = t, o.mkdfOnWindowLoad = r, o.mkdfOnWindowResize = a, o.mkdfOnWindowScroll = s, e(document).ready(t), e(window).load(r), e(window).resize(a), e(window).scroll(s)
}(jQuery);