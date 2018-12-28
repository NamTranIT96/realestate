if (function (e, a, s) {
    var i, r = e.getElementsByTagName(a)[0];
    e.getElementById(s) || (i = e.createElement(a), i.id = s, i.src = "", r.parentNode.insertBefore(i, r))
},
"undefined" != typeof mkdfSocialLoginVars)


    var facebookAppId = mkdfSocialLoginVars.social.facebookAppId;
facebookAppId && (window.fbAsyncInit = function () {
    FB.init({appId: facebookAppId, cookie: !0, xfbml: !0, version: "v2.5"}), window.FB = FB
}), function (e) {
    "use strict";

    function a() {
        t(), n(), o(), d(), g(), b(), C(), v(), w(), y(), A()
    }

    function s() {
        m(), p(), k()
    }

    function i() {
    }

    function r() {
    }

    function t() {
        var a = e(".mkdf-login-opener"), s = e(".mkdf-login-register-holder");
        if (e(document.body).on("open_user_login_trigger", function () {
            s.fadeIn(300), s.addClass("opened")
        }), a) {
            var i = e(".mkdf-login-register-content");
            a.click(function (e) {
                e.preventDefault(), s.fadeIn(300), s.addClass("opened")
            }), s.click(function (e) {
                s.hasClass("opened") && (s.fadeOut(300), s.removeClass("opened"))
            }), i.click(function (e) {
                e.stopPropagation()
            }), e(window).on("keyup", function (e) {
                s.hasClass("opened") && 27 == e.keyCode && (s.fadeOut(300), s.removeClass("opened"))
            }), i.tabs()
        }
    }

    function n() {
        e(".mkdf-login-form").on("submit", function (a) {
            a.preventDefault();
            var s = {
                action: "mkdf_membership_login_user",
                security: e(this).find("#mkdf-login-security").val(),
                login_data: e(this).serialize()
            };
            return e.ajax({
                type: "POST", data: s, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                    var a;
                    a = JSON.parse(e), l(a), "success" == a.status && (window.location = a.redirect)
                }
            }), !1
        })
    }

    function o() {
        e(".mkdf-register-form").on("submit", function (a) {
            a.preventDefault();
            var s = {
                action: "mkdf_membership_register_user",
                security: e(this).find("#mkdf-register-security").val(),
                register_data: e(this).serialize()
            };
            return e.ajax({
                type: "POST", data: s, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                    var a;
                    a = JSON.parse(e), l(a), "success" == a.status && (window.location = a.redirect)
                }
            }), !1
        })
    }

    function d() {
        var a = e(".mkdf-reset-pass-form");
        a.submit(function (s) {
            s.preventDefault();
            var i = {
                action: "mkdf_membership_user_lost_password",
                user_login: a.find("#user_reset_password_login").val()
            };
            e.ajax({
                type: "POST", data: i, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                    var a = JSON.parse(e);
                    l(a), "success" == a.status && (window.location = a.redirect)
                }
            })
        })
    }

    function l(a) {
        var s, i = e(".mkdf-membership-response-holder"),
            r = _.template(e(".mkdf-membership-response-template").html());
        s = "success" === a.status ? "mkdf-membership-message-succes" : "mkdf-membership-message-error";
        var t = {messageClass: s, message: a.message}, n = r(t);
        i.html(n)
    }

    function m() {
        e(".mkdf-facebook-login-holder").submit(function (e) {
            e.preventDefault(), window.FB.login(function (e) {
                f(e)
            }, {scope: "email, public_profile"})
        })
    }

    function f(e) {
        "connected" === e.status ? c() : "not_authorized" === e.status ? console.log("Please log into this app") : console.log("Please log into Facebook")
    }

    function c() {
        console.log("Welcome! Fetching information from Facebook..."), FB.api("/me", "GET", {fields: "id, name, email, link, picture"}, function (a) {
            var s = e(".mkdf-facebook-login-holder [name^=mkdf_nonce_facebook_login]").val();
            a.nonce = s, a.image = a.picture.data.url;
            var i = {action: "mkdf_membership_check_facebook_user", response: a};
            e.ajax({
                type: "POST", data: i, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                    var a;
                    a = JSON.parse(e), l(a), "success" == a.status && (window.location = a.redirect)
                }
            })
        })
    }

    function p() {
        if ("undefined" != typeof mkdfSocialLoginVars) var a = mkdfSocialLoginVars.social.googleClientId;
        if (a) gapi.load("auth2", function () {
            window.auth2 = gapi.auth2.init({client_id: a}), h()
        }); else {
            e(".mkdf-google-login-holder").submit(function (e) {
                e.preventDefault()
            })
        }
    }

    function h() {
        e(".mkdf-google-login-holder").submit(function (e) {
            e.preventDefault(), window.auth2.signIn(), u()
        })
    }

    function u() {
        if (window.auth2.isSignedIn.get()) {
            var a = window.auth2.currentUser.get(), s = a.getBasicProfile(),
                i = e(".mkdf-google-login-holder [name^=mkdf_nonce_google_login]").val(), r = {
                    id: s.getId(),
                    name: s.getName(),
                    email: s.getEmail(),
                    image: s.getImageUrl(),
                    link: "https://plus.google.com/" + s.getId(),
                    nonce: i
                }, t = {action: "mkdf_membership_check_google_user", response: r};
            e.ajax({
                type: "POST", data: t, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                    var a;
                    a = JSON.parse(e), l(a), "success" == a.status && (window.location = a.redirect)
                }
            })
        }
    }

    function g() {
        var a = e("#mkdf-membership-update-profile-form");
        if (a.length) {
            var s = a.find("button"), i = s.data("updating-text"), r = s.data("updated-text");
            a.on("submit", function (a) {
                a.preventDefault();
                var t = s.html();
                s.html(i);
                var n = {action: "mkdf_membership_update_user_profile", data: e(this).serialize()};
                return e.ajax({
                    type: "POST", data: n, url: mkdfGlobalVars.vars.mkdfAjaxUrl, success: function (e) {
                        var a;
                        a = JSON.parse(e), l(a), "success" == a.status ? (s.html(r), window.location = a.redirect) : s.html(t)
                    }
                }), !1
            })
        }
    }

    function k() {
        var a = (e(".mkdf-membership-main-wrapper"), e(".page-template-user-dashboard .mkdf-content")),
            s = e(".mkdf-page-footer"), i = 0;
        if (!mkdf.body.hasClass("mkdf-header-transparent") && mkdf.windowWidth > 1024 && (i = i + mkdfGlobalVars.vars.mkdfMenuAreaHeight + mkdfGlobalVars.vars.mkdfLogoAreaHeight), s.length > 0 && (i += s.outerHeight()), mkdf.windowWidth > 1024) {
            var r = mkdf.windowHeight - i;
            a.css({"min-height": r + "px"})
        }
    }

    function b() {
        e(".mkdf-membership-input.datepicker").datepicker({dateFormat: "MM dd, yy"})
    }

    function v() {
        function a(a) {
            s(a), i(a), a.find("> .mkdf-membership-repeater-add .mkdf-clone").on("click", function (s) {
                s.preventDefault();
                var i = e(this);
                r(a, i)
            })
        }

        function s(a) {
            a.find(".mkdf-clone-remove").on("click", function (a) {
                a.preventDefault();
                var s, i = e(this), r = i.closest(".mkdf-membership-repeater-fields-row"),
                    t = i.closest(".mkdf-membership-repeater-fields-holder"), n = !!t.hasClass("mkdf-enable-pc");
                if (t.hasClass("mkdf-table-layout")) s = t.find("tbody tr.mkdf-membership-repeater-fields-row"); else if (n) {
                    var o = i.data("name");
                    s = t.find("> .mkdf-membership-repeater-fields-row[data-name=" + o + "]")
                } else s = t.find("> .mkdf-membership-repeater-fields-row");
                1 == s.length ? (r.find(":input").val("").removeAttr("checked").removeAttr("selected"), r.hide()) : r.remove()
            })
        }

        function i(a) {
            var s, i = a.find("> .mkdf-membership-repeater-fields-holder");
            s = i.hasClass("mkdf-table-layout") ? i.find("tbody tr.mkdf-membership-repeater-fields-row") : i.find("> .mkdf-membership-repeater-fields-row"), s.each(function () {
                var a = e(this);
                a.hasClass("mkdf-initially-hidden") && a.hide()
            })
        }

        function r(i, r) {
            function t(a) {
                var s = a.parents(".mkdf-membership-gallery-holder").find(".mkdf-membership-gallery-images-holder"),
                    i = a.siblings(".mkdf-membership-remove-image");
                a.removeClass("mkdf-binded"), i.removeClass("mkdf-binded"), s.empty(), a.siblings(".mkdf-membership-gallery-upload-hidden").each(function (a) {
                    e(this).val("")
                })
            }

            var n, o = i.find("> .mkdf-membership-repeater-fields-holder"), d = !!o.hasClass("mkdf-enable-pc");
            if (o.hasClass("mkdf-table-layout")) n = o.find("tbody tr.mkdf-membership-repeater-fields-row"); else if (d) {
                var l = r.data("name");
                n = o.find("> .mkdf-membership-repeater-fields-row[data-name=" + l + "]")
            } else n = o.find("> .mkdf-membership-repeater-fields-row");
            var m = !0;
            if (1 == n.length && "none" == n.css("display") && (n.show(), m = !1), m) {
                n.eq(0).find(".mkdf-membership-repeater-field").each(function () {
                    e(this).find("select").each(function () {
                        e(this).hasClass("mkdf-select2") && e("select.mkdf-select2").select2("destroy")
                    })
                });
                var f = r.data("count"), c = n.eq(0).clone(), p = !1, h = !1, u = !1, g = !1;
                c.find(".mkdf-membership-repeater-field").each(function () {
                    var a = e(this), s = a.attr("id");
                    void 0 !== s && a.attr("id", s.slice(0, -1) + f), a.find(":input, textarea").each(function () {
                        var a = e(this);
                        if (a.hasClass("mkdf-membership-gallery-upload-hidden")) {
                            p = !0;
                            t(a.siblings(".mkdf-membership-gallery-upload"))
                        } else a.hasClass("checkbox") && (h = !0);
                        a.val("").removeAttr("checked").removeAttr("selected"), a.is(":radio") && a.val(o.find(":radio").length)
                    }), a.find("select").each(function () {
                        e(this).hasClass("mkdf-select2") && (u = !0)
                    })
                }), n.each(function () {
                    e(this).find(".mkdf-membership-repeater-wrapper").length && (g = !0)
                }), r.data("count", f + 1), c.appendTo(o), a(c.find(".mkdf-membership-repeater-wrapper")), s(c), p && (e(".mkdf-media-uploader").off("click", ".mkdf-media-upload-btn"), C(), A()), h && mkdfInitSwitch(), u && mkdfSelect2()
            }
        }

        var t = e(".mkdf-membership-repeater-wrapper");
        t.length && t.each(function () {
            a(e(this))
        })
    }

    function w() {
        var a = e(".mkdf-membership-sortable-holder"), s = a.hasClass("mkdf-enable-pc");
        a.sortable({
            handle: ".mkdf-membership-repeater-sort",
            cursor: "move",
            placeholder: "placeholder",
            start: function (e, a) {
                a.placeholder.height(a.item.height()), s && (a.helper.hasClass("second-level") ? (a.placeholder.removeClass("placeholder"), a.placeholder.addClass("placeholder-sub")) : (a.placeholder.removeClass("placeholder-sub"), a.placeholder.addClass("placeholder")))
            },
            sort: function (e, a) {
                if (s) {
                    var i;
                    i = a.helper.hasClass("second-level") ? a.position.left + 50 : a.position.left, i >= 75 && !a.helper.hasClass("second-level") && !a.helper.hasClass("mkdf-sort-parent") ? (a.placeholder.removeClass("placeholder"), a.placeholder.addClass("placeholder-sub"), a.helper.addClass("second-level")) : i < 30 && a.helper.hasClass("second-level") && !a.helper.hasClass("mkdf-sort-child") && (a.placeholder.removeClass("placeholder-sub"), a.placeholder.addClass("placeholder"), a.helper.removeClass("second-level"))
                }
            }
        })
    }

    function y() {
        var a = e(".mkdf-membership-address-field");
        a.length && a.each(function () {
            var a = e(this), s = a.find("#reset"), i = a.find("input"), r = a.find(".map_canvas"),
                t = a.data("country"), n = a.data("lat-field"), o = e("input[name=" + n + "]"),
                d = a.data("long-field"), l = e("input[name=" + d + "]"), m = i.val(), f = o.val(), c = l.val();
            i.geocomplete({
                map: r,
                details: ".mkdf-membership-address-elements",
                detailsAttribute: "data-geo",
                types: ["geocode", "establishment"],
                country: t,
                markerOptions: {draggable: !0}
            }), i.bind("geocode:dragged", function (a, s) {
                o.val(s.lat()), l.val(s.lng()), e("#reset").show(), console.log(s), i.geocomplete("map").panTo(s), (new google.maps.Geocoder).geocode({latLng: s}, function (e, a) {
                    if (a == google.maps.GeocoderStatus.OK && e[0]) {
                        var s = e[0].address_components[1].short_name, r = e[0].address_components[2].short_name,
                            t = e[0].address_components[3].short_name, n = e[0].address_components[4].short_name;
                        i.val(s + " " + r + " " + t + " " + n)
                    }
                })
            }), i.on("focus", function () {
                var e = i.geocomplete("map");
                google.maps.event.trigger(e, "resize")
            }), s.on("click", function () {
                return i.geocomplete("resetMarker"), i.val(m), o.val(f), l.val(c), e("#reset").hide(), !1
            }), e(window).on("load", function () {
                i.trigger("geocode")
            })
        })
    }

    function C() {
        var a = e(".mkdf-membership-gallery-uploader");
        a.length && a.each(function () {
            var a = e(this), s = a.find(".mkdf-membership-gallery-upload-hidden"),
                i = a.find(".mkdf-membership-gallery-upload"),
                r = a.parents(".mkdf-membership-gallery-holder").find(".mkdf-membership-gallery-images-holder");
            i.hasClass("mkdf-binded") || (s.on("change", function (a) {
                a.target.files.length;
                r.empty();
                for (var s, i = 0; s = a.target.files[i]; i++) {
                    var t = new FileReader;
                    t.onload = function (a) {
                        return function (s) {
                            "-1" != e.inArray(a.type, ["image/gif", "image/jpeg", "image/png"]) ? r.append('<li class="mkdf-membership-gallery-image"><img src="' + s.target.result + '" title="' + escape(a.name) + '"/></li>') : r.append('<li class="mkdf-membership-gallery-image"><span class="mkdf-membership-input-text">' + escape(a.name) + "</span></li>")
                        }
                    }(s), t.readAsDataURL(s)
                }
            }), i.on("click", function (e) {
                e.preventDefault(), s.trigger("click")
            }), i.addClass("mkdf-binded"))
        })
    }

    function A() {
        var a = e(".mkdf-membership-remove-image");
        a.length && a.each(function () {
            var a = e(this),
                s = a.parents(".mkdf-membership-gallery-holder").find(".mkdf-membership-gallery-images-holder"),
                i = a.siblings(".mkdf-membership-media-hidden");
            a.hasClass("mkdf-binded") || (a.on("click", function (e) {
                e.preventDefault(), i.val(""), s.empty()
            }), a.addClass("mkdf-binded"))
        })
    }

    var S = {};
    "undefined" != typeof mkdf && (mkdf.modules.socialLogin = S), S.mkdfUserLogin = n, S.mkdfUserRegister = o, S.mkdfUserLostPassword = d, S.mkdfInitLoginWidgetModal = t, S.mkdfInitFacebookLogin = m, S.mkdfInitGooglePlusLogin = p, S.mkdfUpdateUserProfile = g, S.mkdfRenderAjaxResponseMessage = l, e(document).ready(a), e(window).load(s), e(window).resize(i), e(window).scroll(r)
}(jQuery);