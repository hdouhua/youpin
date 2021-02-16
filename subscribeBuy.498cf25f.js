/**
 * origin: https://m.xiaomiyoupin.com/app/shop/ugg/js/subscribeBuy.498cf25f.js
 */

(function (t) {
    function e(e) {
        for (var a, r, s = e[0], c = e[1], u = e[2], d = 0, f = []; d < s.length; d++)
            r = s[d],
                Object.prototype.hasOwnProperty.call(i, r) && i[r] && f.push(i[r][0]),
                i[r] = 0;
        for (a in c)
            Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        l && l(e);
        while (f.length)
            f.shift()();
        return o.push.apply(o, u || []),
            n()
    }
    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], a = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== i[c] && (a = !1)
            }
            a && (o.splice(e--, 1),
                t = r(r.s = n[0]))
        }
        return t
    }
    var a = {}
        , i = {
            subscribeBuy: 0
        }
        , o = [];
    function r(e) {
        if (a[e])
            return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, r),
            n.l = !0,
            n.exports
    }
    r.m = t,
        r.c = a,
        r.d = function (t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        r.t = function (t, e) {
            if (1 & e && (t = r(t)),
                8 & e)
                return t;
            if (4 & e && "object" === typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var a in t)
                    r.d(n, a, function (e) {
                        return t[e]
                    }
                        .bind(null, a));
            return n
        }
        ,
        r.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t["default"]
            }
                : function () {
                    return t
                }
                ;
            return r.d(e, "a", e),
                e
        }
        ,
        r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
        , c = s.push.bind(s);
    s.push = e,
        s = s.slice();
    for (var u = 0; u < s.length; u++)
        e(s[u]);
    var l = c;
    o.push([27, "chunk-vendors", "chunk-common"]),
        n()
}
)({
    "0118": function (t, e, n) {
        "use strict";
        var a = n("7b21")
            , i = n.n(a);
        i.a
    },
    "19a2": function (t, e, n) {
        "use strict";
        var a = function () {
            var t = this
                , e = t.$createElement
                , n = t._self._c || e;
            return n("div", {
                staticClass: "unLogin-container"
            }, [t.isApp && t.showMacgic ? n("magicNavBar", {
                ref: "bar",
                attrs: {
                    title: t.title,
                    showShareIcon: !1,
                    titleBarHeight: "44px",
                    titleFontSize: "15px",
                    backIconNext: "https://img.youpin.mi-img.com/editor1/e01fe49d6de9145e78357090f12956e2.png?w=64&h=64",
                    navBackgroundColor: "#fff"
                }
            }) : t._e(), n("div", {
                staticClass: "content-box"
            }, [n("img", {
                staticClass: "icon",
                attrs: {
                    src: "https://img.youpin.mi-img.com/editor1/83630ba678f7c111c037964ef4424667.png?w=450&h=454",
                    alt: ""
                }
            }), n("div", {
                staticClass: "tip"
            }, [t._v("同学，要先登录哦~")]), n("img", {
                staticClass: "btn",
                attrs: {
                    src: "https://img.youpin.mi-img.com/editor1/d62908b7e527a3c4942337cb08d6e84d.png?w=454&h=96",
                    alt: ""
                },
                on: {
                    click: t.handleLogin
                }
            })])], 1)
        }
            , i = []
            , o = n("4538")
            , r = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.ok ? n("div", {
                    staticClass: "magic-nav-bar"
                }, [n("div", {
                    staticClass: "bg-area"
                }), n("div", {
                    staticClass: "status-area",
                    style: t.statusAreaStyle
                }), n("div", {
                    staticClass: "title-area",
                    style: t.titleAreaStyle
                }, [n("div", {
                    staticClass: "title-area-content"
                }, [n("div", {
                    staticClass: "back-icon",
                    on: {
                        click: t.goBack
                    }
                }, [n("img", {
                    staticClass: "icon-img",
                    style: t.iconStyle,
                    attrs: {
                        src: t.backIconPre
                    }
                })]), n("div", {
                    staticClass: "title-text"
                }, [t._v(t._s(t.title))]), t.showShareIcon ? n("img", {
                    staticClass: "share-icon",
                    style: t.iconStyle,
                    attrs: {
                        src: t.shareIconPre
                    },
                    on: {
                        click: t.handleShare
                    }
                }) : t._e()])])]) : t._e()
            }
            , s = []
            , c = {
                name: "magic-nav-bar",
                data: function () {
                    return {
                        ok: 0,
                        statusBarHeight: 0,
                        opacity: 0
                    }
                },
                methods: {
                    pageScroll: function () {
                        var t = this.immersiveScroll
                            , e = document.documentElement.scrollTop || document.body.scrollTop
                            , n = (e - t) / t + 1;
                        this.opacity = n > 1 ? 1 : n
                    },
                    goBack: function () {
                        o["ua"].app ? Object(o["appApi"])("onBackPress", {}, 1) : (history.go(-1),
                            setTimeout((function () {
                                var t = "https://m.xiaomiyoupin.com/main";
                                if (o["ua"].miniprogram) {
                                    var e = Object(o["addParam"])(t, "miniprogramurl", encodeURIComponent("/pages/index/index"));
                                    jumpTo(e)
                                } else
                                    jumpTo(t)
                            }
                            ), 60))
                    },
                    handleShare: function () {
                        var t = {
                            title: "fasdfas",
                            pyqTitle: "fasd",
                            content: "fasdfasd",
                            imgUrl: "fasdfasd"
                        };
                        console.log("some this", this),
                            this.$emit("shareHandle", t, {
                                pathConfig: {
                                    path: "pages/activity/newSpecial/newSpecial"
                                }
                            })
                    }
                },
                mounted: function () {
                    var t = this;
                    setTimeout((function () {
                        t.statusBarHeight = window.statusBarHeight && window.statusBarHeight > 28 ? window.statusBarHeight : 28,
                            t.ok = 1
                    }
                    ), 300),
                        window.addEventListener("scroll", this.pageScroll),
                        this.pageScroll()
                },
                beforeDestroy: function () {
                    this.isWeb && window.removeEventListener("scroll", this.pageScroll)
                },
                computed: {
                    statusAreaStyle: function () {
                        return {
                            height: this.statusBarHeight + "px"
                        }
                    },
                    titleAreaStyle: function () {
                        return {
                            height: this.titleBarHeight
                        }
                    },
                    commonStyle: function () {
                        return {
                            opacity: this.opacity,
                            backgroundColor: this.titleBgColor
                        }
                    },
                    titleStylePre: function () {
                        return {
                            color: this.titleColorPre,
                            fontSize: this.titleFontSize,
                            maxWidth: this.maxTitleWidth
                        }
                    },
                    titleStyleNext: function () {
                        return {
                            color: this.titleColorNext,
                            fontSize: this.titleFontSize,
                            maxWidth: this.maxTitleWidth
                        }
                    },
                    iconStyle: function () {
                        return {
                            width: this.iconWidth
                        }
                    }
                },
                props: {
                    titleBarHeight: {
                        default: "45px"
                    },
                    title: {
                        default: "小米有品"
                    },
                    immersiveScroll: {
                        default: 88
                    },
                    showShareIcon: {
                        default: !0
                    },
                    shareObj: {},
                    titleColorPre: {
                        default: "#333333"
                    },
                    titleColorNext: {
                        default: "#333333"
                    },
                    titleBgColor: {
                        default: "#FA214E"
                    },
                    titleFontSize: {
                        default: "20px"
                    },
                    backIconPre: {
                        default: "https://img.youpin.mi-img.com/editor1/baca1be1cd35ddcebebe7c3a8f9e9589.png?w=96&h=96"
                    },
                    backIconNext: {
                        default: "https://img.youpin.mi-img.com/editor1/e01fe49d6de9145e78357090f12956e2.png?w=64&h=64"
                    },
                    shareIconPre: {
                        default: "https://img.youpin.mi-img.com/editor1/c0f3d919c40c235dfb2a1e7509a01ee9.png?w=64&h=64"
                    },
                    shareIconNext: {
                        default: "https://img.youpin.mi-img.com/editor1/f81c2d271ee47f37c7f3424748b4c96c.png?w=64&h=64"
                    },
                    iconWidth: {
                        default: "32px"
                    },
                    maxTitleWidth: {
                        default: "75%"
                    },
                    navBackgroundColor: {
                        default: "#ffffff"
                    },
                    titleColor: {
                        default: "#fff"
                    },
                    homePath: {
                        required: !1,
                        default: "https://m.xiaomiyoupin.com/main"
                    },
                    showShare: {
                        default: !0
                    }
                }
            }
            , u = c
            , l = (n("3c6a"),
                n("2877"))
            , d = Object(l["a"])(u, r, s, !1, null, "6de698f3", null)
            , f = d.exports
            , p = {
                name: "UnLogin",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    showMacgic: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function () {
                    return {
                        isApp: o["ua"].app
                    }
                },
                methods: {
                    handleLogin: function () {
                        Object(o["jumptoLogin"])()
                    }
                },
                components: {
                    magicNavBar: f
                }
            }
            , m = p
            , g = (n("52b8"),
                Object(l["a"])(m, a, i, !1, null, "201bdc3b", null));
        e["a"] = g.exports
    },
    "1ebe": function (t, e, n) { },
    27: function (t, e, n) {
        t.exports = n("c3e5")
    },
    "3c6a": function (t, e, n) {
        "use strict";
        var a = n("d579")
            , i = n.n(a);
        i.a
    },
    "3e61": function (t, e, n) {
        "use strict";
        var a = n("3f08")
            , i = n.n(a);
        i.a
    },
    "3f08": function (t, e, n) { },
    "3fd9": function (t, e, n) { },
    4538: function (t, e) {
        //TODO: hack for app
        console.debug('origin:', window.miHomeLib.ua)
        let newX = window.miHomeLib.ua
        newX.chrome = false
        newX.pc = false
        newX.app = true
        newX.iOS = true
        newX.iOS_app = true
        console.debug('updated:', newX)

        t.exports = window.miHomeLib
    },
    "52b8": function (t, e, n) {
        "use strict";
        var a = n("91b3")
            , i = n.n(a);
        i.a
    },
    "7b21": function (t, e, n) { },
    "91b3": function (t, e, n) { },
    c3e5: function (t, e, n) {
        "use strict";
        n.r(e);
        var a = {};
        n.r(a),
            n.d(a, "getPageConfig", (function () {
                return Ge
            }
            )),
            n.d(a, "getActConfig", (function () {
                return ze
            }
            )),
            n.d(a, "getVerifyStatus", (function () {
                return Je
            }
            )),
            n.d(a, "doOrder", (function () {
                return qe
            }
            )),
            n.d(a, "doSpike", (function () {
                return Xe
            }
            )),
            n.d(a, "getWinnerList", (function () {
                return Ye
            }
            )),
            n.d(a, "getOrders", (function () {
                return Ke
            }
            )),
            n.d(a, "getComment", (function () {
                return Qe
            }
            ));
        n("cadf"),
            n("551c"),
            n("f751"),
            n("097d");
        var i = n("2b0e")
            , o = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return 0 === t.loginCode ? n("div", {
                    staticClass: "unLogin-page"
                }, [n("UnLogin", {
                    attrs: {
                        showMacgic: !1
                    }
                })], 1) : 1 === t.loginCode ? n("div", {
                    ref: "mainContent",
                    staticClass: "page-main f-col",
                    class: {
                        "dark-theme": "1" === t.pageConfig.theme
                    },
                    style: t.mainStyle
                }, [n("div", {
                    staticClass: "act-rules",
                    on: {
                        click: t.goRules
                    }
                }, [n("img", {
                    attrs: {
                        src: t.pageConfig.actRuleImg,
                        alt: ""
                    }
                })]), 2 === t.status ? n("float-pop") : t._e(), n("product-main", {
                    ref: "main"
                }), t.pageConfig.showComment ? n("comment") : t._e(), t.showLuckier && t.actConfig && t.actConfig.actStatusInfo && t.actConfig.actStatusInfo.spikeEndLeftTime < 0 ? n("luckier-area") : t._e(), n("banner"), n("recommend-area"), n("modal-container")], 1) : n("div")
            }
            , r = []
            , s = (n("8e6e"),
                n("456d"),
                n("a481"),
                n("ac6a"),
                n("5df3"),
                n("bd86"))
            , c = (n("96cf"),
                n("3b8d"))
            , u = n("2f62")
            , l = n("4538")
            , d = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "module-recommend-area recommend-product-area"
                }, [n("elevator", {
                    attrs: {
                        backgroundColor: t.pageConfig.bgColor,
                        fontColor: t.pageConfig.tabFontColor,
                        floorData: t.floorData,
                        minTabCount: 4,
                        diyClick: !0,
                        lazyLoad: !0
                    },
                    on: {
                        bannerClick: t.bannerClick,
                        productClick: t.productClick,
                        floorShow: t.floorShow,
                        navClick: t.navClick,
                        spreadFloorStatusChange: t.spreadFloorStatusChange
                    }
                })], 1)
            }
            , f = []
            , p = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.floorList && t.floorList.length ? n("ElevatorCore", {
                    attrs: {
                        floorList: t.floorList,
                        spreadXCount: t.spreadXCount,
                        backgroundColor: t.backgroundColor,
                        fontColor: t.fontColor,
                        arrowImage: t.arrowImage,
                        sysNavBarHeight: t.sysNavBarHeight,
                        showArrow: t.floorList.length > 4,
                        showTab: t.floorList.length >= t.minTabCount
                    },
                    on: {
                        floorShow: function (e) {
                            return t.$emit("floorShow", e)
                        },
                        navClick: function (e) {
                            return t.$emit("navClick", e)
                        },
                        spreadFloorStatusChange: function (e) {
                            return t.$emit("spreadFloorStatusChange", e)
                        }
                    },
                    scopedSlots: t._u([{
                        key: "nav",
                        fn: function (e) {
                            var a = e.item
                                , i = e.active
                                , o = e.fixed
                                , r = e.spreadFloor
                                , s = e.index;
                            return [n("div", {
                                staticClass: "nav-cell",
                                class: {
                                    active: i,
                                    fixed: o,
                                    spreadFloor: r
                                },
                                style: t.getCellStyle(i, s, r)
                            }, [n("span", {
                                staticClass: "nav-cell-text"
                            }, [n("span", [t._v(t._s(a.floorName))]), n("i", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: i,
                                    expression: "active"
                                }],
                                staticClass: "line",
                                style: {
                                    backgroundColor: t.fontColor
                                }
                            })])])]
                        }
                    }, {
                        key: "content",
                        fn: function (e) {
                            var a = e.item
                                , i = e.index;
                            return [n("div", {
                                staticClass: "content-item",
                                class: {
                                    item: a
                                }
                            }, [n("div", {
                                staticClass: "floor-banner",
                                style: {
                                    backgroundImage: "url('" + a.bannerImage + "')"
                                },
                                on: {
                                    click: function (e) {
                                        return t.goBanner(a, i)
                                    }
                                }
                            }), n("div", {
                                staticClass: "floor-goods"
                            }, t._l(a.goodsList, (function (e, a) {
                                return n("div", {
                                    key: a,
                                    staticClass: "floor-goods-item",
                                    on: {
                                        click: function (n) {
                                            return t.goProduct(e, i, a)
                                        }
                                    }
                                }, [n("div", {
                                    staticClass: "good-img"
                                }, [t.lazyLoad ? n("img", {
                                    directives: [{
                                        name: "lazy",
                                        rawName: "v-lazy",
                                        value: e.img800s,
                                        expression: "good.img800s"
                                    }],
                                    attrs: {
                                        alt: ""
                                    }
                                }) : n("img", {
                                    attrs: {
                                        src: e.img800s,
                                        alt: ""
                                    }
                                })]), n("div", {
                                    staticClass: "good-info"
                                }, [n("div", {
                                    staticClass: "good-name"
                                }, [n("span", [t._v(t._s(e.name))])]), e.labels && e.labels.length ? n("div", {
                                    staticClass: "good-label"
                                }, t._l(e.labels, (function (e, a) {
                                    return n("div", {
                                        key: a,
                                        staticClass: "label"
                                    }, [n("span", [t._v(t._s(e))])])
                                }
                                )), 0) : t._e()]), n("div", {
                                    staticClass: "good-price"
                                }, [n("span", {
                                    staticClass: "unit"
                                }, [t._v("¥")]), n("span", [t._v(t._s(e.priceMin / 100))])])])
                            }
                            )), 0)])]
                        }
                    }], null, !1, 2336885743)
                }) : t._e()
            }
            , m = []
            , g = (n("7514"),
                n("c5f6"),
                function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        ref: "elevator"
                    }, [t.showTab ? n("div", {
                        ref: "nav",
                        staticClass: "elevator-nav",
                        style: {
                            height: t.navHeight + "px"
                        }
                    }, [n("div", {
                        staticClass: "elevator-nav-box",
                        class: {
                            fixed: t.navAdsorbTop,
                            spread: t.spreadFloor
                        },
                        style: t.elevatorNavBoxStyle
                    }, [n("div", {
                        staticClass: "elevator-nav-container",
                        class: {
                            hideArrow: !t.showArrow
                        },
                        style: t.navContainerStyle
                    }, [t.spreadFloor ? n("div", {
                        staticClass: "switch-floor",
                        style: {
                            height: t.navHeight + "px",
                            color: t.fontColor
                        }
                    }, [n("span", [t._v("切换楼层")])]) : t._e(), n("div", {
                        ref: "navContainer",
                        staticClass: "nav-container-main",
                        style: t.spreadFloor ? {
                            maxHeight: t.navHeight * t.spreadYLineCount + "px"
                        } : null
                    }, t._l(t.floorList, (function (e, a) {
                        return n("div", {
                            key: a,
                            ref: "navItems",
                            refInFor: !0,
                            staticClass: "nav-item",
                            class: {
                                active: a === t.activeIndex
                            },
                            style: t.navItemStyle,
                            on: {
                                click: function (e) {
                                    return t.goStage(a)
                                }
                            }
                        }, [t._t("nav", null, {
                            item: e,
                            active: a === t.activeIndex,
                            fixed: t.navAdsorbTop,
                            index: a,
                            spreadFloor: t.spreadFloor
                        })], 2)
                    }
                    )), 0), t.showArrow ? n("div", {
                        staticClass: "elevator-nav-arrow",
                        class: {
                            fixed: t.navAdsorbTop
                        },
                        style: t.arrowStyle,
                        on: {
                            click: function (e) {
                                t.spreadFloor = !t.spreadFloor
                            }
                        }
                    }, [n("img", {
                        staticClass: "arrow-img",
                        attrs: {
                            src: t.arrowImage,
                            alt: ""
                        }
                    })]) : t._e()]), t.spreadFloor ? n("div", {
                        staticClass: "box-mask",
                        style: {
                            height: t.navHeight + "px"
                        },
                        on: {
                            click: function (e) {
                                t.spreadFloor = !1
                            }
                        }
                    }) : t._e()])]) : t._e(), n("div", {
                        staticClass: "elevator-floor"
                    }, t._l(t.floorList, (function (e, a) {
                        return n("div", {
                            key: a,
                            ref: "floor",
                            refInFor: !0,
                            staticClass: "elevator-content"
                        }, [t._t("content", null, {
                            item: e,
                            index: a
                        })], 2)
                    }
                    )), 0)])
                }
            )
            , h = []
            , v = {
                name: "ElevatorCore",
                data: function () {
                    return {
                        activeIndex: 0,
                        floorVisIndex: -1,
                        navAdsorbTop: !1,
                        spreadFloor: !1,
                        navHeight: null,
                        navWidth: null
                    }
                },
                props: {
                    floorList: {},
                    spreadXCount: {
                        default: 3
                    },
                    spreadYLineCount: {
                        default: 3
                    },
                    sysNavBarHeight: {
                        default: 0
                    },
                    backgroundColor: {
                        default: "#fff"
                    },
                    fontColor: {
                        default: "#fff"
                    },
                    showArrow: {
                        default: !0
                    },
                    arrowImage: {
                        default: "https://img.youpin.mi-img.com/shopcenter/i4bhm1mon5o_23562078001605511984226.png"
                    },
                    showTab: {
                        default: !0
                    }
                },
                methods: {
                    pageScroll: function () {
                        for (var t = this.$refs.nav, e = document.documentElement.scrollTop || document.body.scrollTop, n = document.documentElement.scrollHeight || document.body.scrollHeight, a = document.documentElement.clientHeight || document.body.clientHeight, i = this.$refs.floor || [], o = i.length - 1; o >= 0; o--) {
                            var r = i[o]
                                , s = r.getBoundingClientRect().top - a - this.sysNavBarHeight;
                            if (s <= 3) {
                                this.floorVisIndex = o;
                                break
                            }
                        }
                        if (this.showTab) {
                            var c = t && t.getBoundingClientRect().top;
                            this.navAdsorbTop = c <= this.sysNavBarHeight;
                            for (var u = i.length - 1; u >= 0; u--) {
                                var l = i[u]
                                    , d = l.getBoundingClientRect().top - t.offsetHeight - this.sysNavBarHeight;
                                if (d <= 3) {
                                    this.activeIndex = u;
                                    break
                                }
                            }
                            n - e - a < 10 && (this.activeIndex = i.length - 1),
                                this.spreadFloor = !1
                        }
                    },
                    goStage: function (t) {
                        var e = this.$refs.nav
                            , n = this.$refs.floor || [];
                        window.scrollTo({
                            top: n[t].offsetTop - e.offsetHeight - this.sysNavBarHeight
                        }),
                            this.spreadFloor = !1,
                            this.$emit("navClick", t)
                    }
                },
                mounted: function () {
                    document.addEventListener("scroll", this.pageScroll),
                        this.showTab && (this.$refs.navItems && this.$refs.navItems[0] && (this.navHeight = this.$refs.navItems[0].offsetHeight),
                            this.navWidth = this.$refs.nav.offsetWidth)
                },
                computed: {
                    navItemStyle: function () {
                        return this.spreadFloor ? {
                            width: 1 / this.spreadXCount * 100 + "%"
                        } : null
                    },
                    navContainerStyle: function () {
                        return this.navWidth ? {
                            width: this.navWidth + "px"
                        } : null
                    },
                    elevatorNavBoxStyle: function () {
                        return this.navAdsorbTop ? {
                            top: this.sysNavBarHeight + "px",
                            backgroundColor: this.backgroundColor
                        } : {
                                backgroundColor: this.backgroundColor
                            }
                    },
                    arrowStyle: function () {
                        var t;
                        return t = /rgba\(/.test(this.backgroundColor) ? "linear-gradient(to left, ".concat(this.backgroundColor, " 0%,").concat(this.backgroundColor, " 70%,").concat(this.backgroundColor.replace(/\w+\s*\)/, "0)"), " 100%)") : "transparent",
                        {
                            height: this.navHeight + "px",
                            background: t
                        }
                    }
                },
                destroyed: function () {
                    var t = this;
                    document.removeEventListener("scroll", this.pageScroll),
                        this.$nextTick((function () {
                            t.pageScroll()
                        }
                        ))
                },
                watch: {
                    activeIndex: function (t) {
                        var e = this.$refs.navItems || []
                            , n = this.$refs.navContainer
                            , a = e[0];
                        a && (this.showArrow && n.scrollTo({
                            left: t * a.offsetWidth - (n.offsetWidth - a.offsetWidth) / 2
                        }),
                            this.spreadFloor && this.$refs.navItems[t].scrollIntoViewIfNeeded())
                    },
                    spreadFloor: function (t) {
                        var e = this;
                        this.$emit("spreadFloorStatusChange", t),
                            t && setTimeout((function () {
                                e.$refs.navItems[e.activeIndex].scrollIntoViewIfNeeded()
                            }
                            ), 0)
                    },
                    floorVisIndex: function (t) {
                        t > -1 && this.$emit("floorShow", t)
                    }
                }
            }
            , b = v
            , y = (n("dc9c"),
                n("2877"))
            , C = Object(y["a"])(b, g, h, !1, null, "4d62bdf6", null)
            , w = C.exports
            , _ = (n("6c7b"),
                new Array(10).fill({
                    offset: 1,
                    gid: 101483,
                    name: "知吾煮生态杂",
                    jumpUrl: "https://m.xiaomiyoupin.com/detail?gid=101483",
                    priceMin: 5900,
                    marketPrice: 5900,
                    img800: "http://img.youpin.mi-img.com/800_pic/101483_8aff00639e7e315a8495145970c25c2b.png",
                    img800s: "https://img.youpin.mi-img.com/staging/800_pic/d56e3689b1ad54e19c6e2de0d406bb16.png",
                    labels: ["特价", "促销"]
                }))
            , O = {
                getGoods: {
                    code: 0,
                    message: "ok",
                    data: {
                        elements: [{
                            planId: 1440,
                            entityList: _
                        }, {
                            planId: 1441,
                            entityList: _
                        }, {
                            planId: 1442,
                            entityList: _
                        }, {
                            planId: 1443,
                            entityList: _
                        }, {
                            planId: 1444,
                            entityList: _
                        }]
                    }
                }
            }
            , k = ""
            , S = function (t) {
                var e = t.url
                    , n = void 0 === e ? "" : e
                    , a = t.data
                    , i = void 0 === a ? {} : a
                    , o = (t.noToast,
                        t.special,
                        t.method)
                    , r = void 0 === o ? "get" : o;
                return new Promise((function (t, e) {
                    $.ajax({
                        url: 0 === n.indexOf("http") ? n : k + n,
                        type: r,
                        contentType: "application/json",
                        dataType: "json",
                        timeout: 1e4,
                        cache: !1,
                        data: 0 === Object.keys(i).length ? "" : JSON.stringify(i),
                        success: function (e) {
                            t(e)
                        },
                        error: function (t) {
                            e(t)
                        }
                    })
                }
                ))
            }
            , I = function (t) {
                var e = [{
                    gidList: t,
                    priceInventoryStrategy: "NEED_PRICE_INVENTORY_SATUTS"
                }];
                return S({
                    url: "/mtop/goods/frontend/list/goodsinfo",
                    method: "post",
                    data: e
                })
            }
            , j = function (t) {
                var e;
                try {
                    "http:" === location.protocol && window.args && "1" === window.args.mock && (e = 1)
                } catch (a) { }
                if (e)
                    return Promise.resolve(O.getGoods);
                var n = [{}, {
                    planIdList: t
                }];
                return S({
                    url: "/mtop/act/neptune/planId/getGoods",
                    method: "post",
                    data: n
                })
            }
            , T = {
                getProDetailInfo2: I,
                getElevatorData: j
            }
            , x = {
                name: "Elevator",
                components: {
                    ElevatorCore: w
                },
                data: function () {
                    return {
                        floorList: []
                    }
                },
                props: {
                    backgroundColor: {
                        default: "rgba(256,256,256,1)"
                    },
                    fontColor: {
                        default: "#666"
                    },
                    arrowImage: {
                        default: "https://img.youpin.mi-img.com/shopcenter/tqao3v9m9h8_23562078001605521106733.png"
                    },
                    floorData: {
                        type: Array
                    },
                    spreadXCount: {
                        type: Number,
                        default: 3
                    },
                    sysNavBarHeight: {
                        default: 0
                    },
                    minTabCount: {
                        type: Number,
                        default: -1 / 0
                    },
                    diyClick: {
                        default: !1
                    },
                    lazyLoad: {
                        default: !1
                    }
                },
                methods: {
                    getCellStyle: function (t, e, n) {
                        return {
                            color: this.fontColor,
                            marginLeft: 0 !== e || n ? "0" : "-8px",
                            opacity: t ? 1 : .4
                        }
                    },
                    goBanner: function (t) {
                        this.diyClick ? this.$emit("bannerClick", t) : jumpTo(t.jumpUrl)
                    },
                    goProduct: function (t, e, n) {
                        this.diyClick ? this.$emit("productClick", t, e, n) : jumpTo(t.bannerUrl)
                    }
                },
                created: function () {
                    var t = this;
                    if (this.floorData && this.floorData.length) {
                        var e = this.floorData.map((function (t) {
                            return {
                                sortBy: t.sortBy,
                                planId: t.planId,
                                count: t.count
                            }
                        }
                        ));
                        T.getElevatorData(e).then((function (e) {
                            if (0 === e.code)
                                for (var n = e.data && e.data.elements || [], a = function (e) {
                                    var a = Object.assign({}, t.floorData[e])
                                        , i = n.find((function (t) {
                                            return +t.planId === +a.planId
                                        }
                                        ));
                                    i && i.entityList && i.entityList.length && (a.goodsList = i.entityList,
                                        a.count > 0 && (a.goodsList = a.goodsList.slice(0, a.count)),
                                        t.floorList.push(a))
                                }, i = 0; i < t.floorData.length; i++)
                                    a(i)
                        }
                        ))
                    }
                },
                watch: {}
            }
            , P = x
            , D = (n("3e61"),
                Object(y["a"])(P, p, m, !1, null, "5d33454f", null))
            , A = D.exports;
        function L(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function N(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? L(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var E = {
            name: "recommendArea",
            components: {
                elevator: A
            },
            data: function () {
                return {
                    hasReported: !1,
                    floorShowRecord: []
                }
            },
            computed: N(N({}, Object(u["d"])(["actId", "pageConfig", "actConfig"])), {}, {
                floorData: function () {
                    return (this.pageConfig.floors || []).map((function (t) {
                        return t.count = 9,
                            t
                    }
                    ))
                }
            }),
            methods: {
                bannerClick: function (t) {
                    this.$url(t.bannerUrl)
                },
                productClick: function (t, e) {
                    this.$url(t.jumpUrl, !0, this.$ypm.touch("goodclick", e + 1))
                },
                floorShow: function (t) {
                    var e = this;
                    this.floorShowRecord.indexOf(t) < 0 && (this.floorShowRecord.push(t),
                        setTimeout((function () {
                            e.$ypm.touch("good", t + 1)
                        }
                        ), 300))
                },
                navClick: function (t) {
                    this.$ypm.touch("tabclick", t + 1)
                },
                spreadFloorStatusChange: function (t) {
                    t && this.$ypm.touch("openclick")
                }
            }
        }
            , B = E
            , U = Object(y["a"])(B, d, f, !1, null, "69d90c3e", null)
            , F = U.exports
            , H = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.usersList && t.usersList.length ? n("div", {
                    staticClass: "luckier-area pretty-module"
                }, [n("div", {
                    staticClass: "luckier-title"
                }, [t._v("\n    获得购买资格名单公示\n  ")]), n("div", {
                    staticClass: "luckier-list"
                }, t._l(t.usersList, (function (e, a) {
                    return n("div", {
                        key: a,
                        staticClass: "luckier-user"
                    }, [n("div", {
                        staticClass: "user-info"
                    }, [n("div", {
                        staticClass: "user-avatar"
                    }, [n("img", {
                        attrs: {
                            src: e.avatar,
                            alt: ""
                        }
                    })]), n("div", {
                        staticClass: "user-name text-cut"
                    }, [t._v("\n          " + t._s(e.nickname) + "\n        ")])]), n("div", {
                        staticClass: "user-tel"
                    }, [t._v("\n        " + t._s(e.tel) + "\n      ")])])
                }
                )), 0)]) : t._e()
            }
            , R = [];
        function M(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function V(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? M(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var W = {
            name: "luckier-area",
            components: {},
            data: function () {
                return {
                    usersList: []
                }
            },
            computed: V({}, Object(u["d"])(["actId", "pageConfig", "actConfig"])),
            created: function () {
                var t = this;
                this.$api.getWinnerList(this.actId).then((function (e) {
                    t.usersList = e.winners || []
                }
                ))
            }
        }
            , G = W
            , z = Object(y["a"])(G, H, R, !1, null, "38d623cd", null)
            , J = z.exports
            , q = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;

                //TODO: hack - automatically doSpike
                if (t.status === 4) {
                    console.log('do spike')
                    // setTimeout(function () {
                    //     t.doSpike();
                    // }, 50)
                }

                return t.status > 0 && t.status < 20 ? n("div", {
                    staticClass: "module-product-main pretty-module",
                    class: "status-" + t.status
                }, [n("div", {
                    staticClass: "good-info"
                }, [n("div", {
                    staticClass: "info-left"
                }, [n("div", {
                    staticClass: "good-name text-cut"
                }, [t._v(t._s(t.pageConfig.goodName))]), n("div", {
                    staticClass: "good-desc text-cut"
                }, [t._v(t._s(t.pageConfig.subGoodTile))])]), n("div", {
                    staticClass: "info-right"
                }, [n("div", {
                    staticClass: "good-price"
                }, [n("span", {
                    staticClass: "unit"
                }, [t._v("￥")]), n("span", [t._v(t._s(t.pageConfig.goodPrice))])]), n("div", {
                    staticClass: "good-more",
                    on: {
                        click: t.goProductDetail
                    }
                }, [t._v("\n        商品详情"), n("i", {
                    staticClass: "arrow-icon"
                })])])]), n("div", {
                    staticClass: "status-area f-col"
                }, [1 === t.status ? [n("div", {
                    staticClass: "explain-text"
                }, [t._v("预约即将开始")]), t.judgeShowTimer(t.startOrderTimer) ? n("div", {
                    staticClass: "explain-text-sub time-c black-time"
                }, [t._v("\n        距离预约开始还有"), n("span", [t._v(t._s(t.startOrderTimer.h))]), t._v(":"), n("span", [t._v(t._s(t.startOrderTimer.m))]), t._v(":"), n("span", [t._v(t._s(t.startOrderTimer.s))])]) : n("div", {
                    staticClass: "explain-text-sub"
                }, [t._v("预约时间: " + t._s(t.orderStartTimer.dateStr) + " " + t._s(t.orderStartTimer.timeStr))]), t.$isApp ? n("div", {
                    staticClass: "attend-btn disabled"
                }, [t._v("即将开始")]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: t.openApp
                    }
                }, [t._v("打开小米有品app进行预约")]), n("div", {
                    staticClass: "process-img"
                }), n("order-rules")] : t._e(), 2 === t.status ? [n("div", {
                    staticClass: "explain-text"
                }, [t._v("预约开始啦")]), t.judgeShowTimer(t.endOrderTimer) ? n("div", {
                    staticClass: "explain-text-sub time-c"
                }, [t._v("\n        距离预约结束还有"), n("span", [t._v(t._s(t.endOrderTimer.h))]), t._v(":"), n("span", [t._v(t._s(t.endOrderTimer.m))]), t._v(":"), n("span", [t._v(t._s(t.endOrderTimer.s))])]) : n("div", {
                    staticClass: "explain-text-sub"
                }, [t._v("距离预约结束还有"), n("span", [t._v(t._s(Math.floor(t.endOrderTimer.h / 24) || "--"))]), t._v("天")]), t.$isApp && t.actConfig.userStatusInfo && t.actConfig.userStatusInfo.phoneNeed ? n("div", {
                    staticClass: "tel-area"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.telNumber,
                        expression: "telNumber"
                    }],
                    ref: "input",
                    staticClass: "tel-area-controller",
                    attrs: {
                        type: "number",
                        placeholder: "输入手机号预约"
                    },
                    domProps: {
                        value: t.telNumber
                    },
                    on: {
                        input: [function (e) {
                            e.target.composing || (t.telNumber = e.target.value)
                        }
                            , t.inputtingTel],
                        focus: t.inputFocus
                    }
                })]) : t._e(), t.$isApp ? n("div", {
                    staticClass: "attend-btn breath-btn",
                    on: {
                        click: t.startPreorder
                    }
                }, [t._v("立即预约")]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: t.openApp
                    }
                }, [t._v("打开小米有品app进行预约")]), n("div", {
                    staticClass: "process-img"
                }), n("order-rules")] : t._e(), 3 === t.status ? [t._m(0), n("div", {
                    staticClass: "explain-text-sub"
                }, [t.actConfig.actStatusInfo.orderedCount ? n("p", [t._v("当前已预约成功 "), n("span", [t._v(t._s(t.actConfig.actStatusInfo.orderedCount))]), t._v(" 人")]) : t._e(), t.judgeShowTimer(t.startBuyTimer) ? n("p", {
                    staticClass: "time-c black-time"
                }, [t._v("\n          " + t._s(t.spikeTimer.dateStr) + " " + t._s(t.spikeTimer.timeStr) + "开抢 剩余"), n("span", [t._v(t._s(t.startBuyTimer.h))]), t._v(":"), n("span", [t._v(t._s(t.startBuyTimer.m))]), t._v(":"), n("span", [t._v(t._s(t.startBuyTimer.s))])]) : n("p", [t._v("开抢时间："), n("span", {
                    staticClass: "start-buy-time"
                }, [t._v(t._s(t.spikeTimer.dateStr) + " " + t._s(t.spikeTimer.timeStr))])])]), t.$isApp ? n("div", {
                    staticClass: "attend-btn disabled"
                }, [t._v("即将开始")]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: t.openApp
                    }
                }, [t._v("前往小米有品app抢购")]), n("div", {
                    staticClass: "process-img"
                })] : t._e(), 4 === t.status ? [t._m(1), n("div", {
                    staticClass: "explain-text-sub"
                }, [t.isTest ? n("p", {
                    staticClass: "time-c black-time"
                }, [t._v("距离抢购结束还有"), n("span", [t._v(t._s(t.endBuyTimer.h))]), t._v(":"), n("span", [t._v(t._s(t.endBuyTimer.m))]), t._v(":"), n("span", [t._v(t._s(t.endBuyTimer.s))])]) : t._e(), n("p", [t._v("点击下方按钮抢购买资格")]), n("p", [t._v("手速要快哦～")])]), t.$isApp ? n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: t.doSpike
                    }
                }, [t._v("立即抢购")]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: t.openApp
                    }
                }, [t._v("前往小米有品app抢购")]), n("div", {
                    staticClass: "process-img"
                })] : t._e(), 5 === t.status ? [n("div", {
                    staticClass: "explain-text"
                }, [t._v("\n        非常遗憾，已被抢光\n      ")]), n("div", {
                    staticClass: "explain-text-sub"
                }, [t.actConfig.userStatusInfo && t.actConfig.userStatusInfo.redPackageValue ? n("p", [t._v("\n          别灰心，已送您" + t._s(t.actConfig.userStatusInfo.redPackageValue / 100) + "元红包，半小时内到账～\n        ")]) : t._e(), t.pageConfig.nextActPop ? n("p", [t._v(t._s(t.pageConfig.nextActPop))]) : t._e()]), t.$isApp ? n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: function (e) {
                            return t.openApp("otherAct")
                        }
                    }
                }, [t._v(t._s(t.failedText))]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: function (e) {
                            return t.openApp("otherAct")
                        }
                    }
                }, [t._v("打开小米有品app参与其他活动")])] : t._e(), 6 === t.status ? [t._m(2), n("div", {
                    staticClass: "explain-text-sub"
                }, [n("p", [t._v("购买资格将在10分钟内发至您的账户")]), t.pageConfig.nextActPop ? n("p", [t._v(t._s(t.pageConfig.nextActPop))]) : t._e()]), t.$isApp ? n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: function (e) {
                            return t.openApp("yxg")
                        }
                    }
                }, [t._v("查看我的购买资格")]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: function (e) {
                            return t.openApp("yxg")
                        }
                    }
                }, [t._v("打开小米有品app查看购买资格")])] : t._e(), 7 === t.status ? [n("div", {
                    staticClass: "explain-text"
                }, [t._v("\n        预约已结束\n      ")]), n("div", {
                    staticClass: "explain-text-sub"
                }, [t.pageConfig.nextActPop ? n("p", [t._v(t._s(t.pageConfig.nextActPop))]) : t._e()]), t.$isApp ? n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: function (e) {
                            return t.openApp("otherAct")
                        }
                    }
                }, [t._v(t._s(t.failedText))]) : n("div", {
                    staticClass: "attend-btn",
                    on: {
                        click: function (e) {
                            return t.openApp("otherAct")
                        }
                    }
                }, [t._v("打开小米有品app参加其他活动")])] : t._e()], 2), n("div", {
                    staticClass: "pretty-support"
                }), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.spikeFlag,
                        expression: "spikeFlag"
                    }],
                    staticClass: "loading-mask",
                    on: {
                        touchmove: function (t) {
                            t.preventDefault()
                        }
                    }
                }, [n("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "https://img.youpin.mi-img.com/shopcenter/qvlhjdm6gc_23562078001610594860874.gif"
                    }
                })])]) : t._e()
            }
            , X = [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "explain-text f-center"
                }, [n("i", {
                    staticClass: "ok-icon"
                }), t._v("恭喜您预约成功\n      ")])
            }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "explain-text f-center"
                    }, [n("i", {
                        staticClass: "wait-icon"
                    }), t._v("开抢时间到！\n      ")])
                }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "explain-text f-center"
                    }, [n("i", {
                        staticClass: "ok-icon"
                    }), t._v("恭喜您获得购买资格！\n      ")])
                }
            ];
        n("6b54");
        function Y(t) {
            return t < 10 ? "0" + t : t.toString()
        }
        function K(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = Math.floor(t / 36e5)
                , a = Math.floor(t / 6e4) - 60 * n
                , i = Math.floor(t / 1e3) - 60 * n * 60 - 60 * a
                , o = Math.floor((t - 60 * n * 60 * 1e3 - 60 * a * 1e3 - 1e3 * i) / 10);
            return e.h = Y(n),
                e.m = Y(a),
                e.s = Y(i),
                e.ss = Y(o),
                e.ts = t,
                e
        }
        var Q = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30
                , a = arguments.length > 3 ? arguments[3] : void 0;
            if (!(t < 0)) {
                clearInterval(e.timer);
                var i = Date.now() + t;
                K(i - Date.now(), e),
                    e.timer = setInterval((function () {
                        var t = i - Date.now();
                        if (t <= 0) {
                            return a && a(),
                                e.h = "00",
                                e.m = "00",
                                e.s = "00",
                                e.ss = "00",
                                e.ts = 0,
                                void clearInterval(e.timer);
                        }
                        K(t, e)
                    }
                    ), n)
            }
        }
            , Z = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.pageConfig.orderRules ? n("div", {
                    staticClass: "order-rules"
                }, [n("div", {
                    staticClass: "rules-title"
                }, [t._v(t._s(t.pageConfig.orderRulesTitle || "抢购资格要求"))]), n("div", {
                    ref: "rules",
                    staticClass: "rules-content"
                }, t._l(t.rules, (function (e, a) {
                    return n("p", {
                        key: a
                    }, [t._v("\n      " + t._s(e) + "\n    ")])
                }
                )), 0)]) : t._e()
            }
            , tt = [];
        n("28a5");
        function et(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function nt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? et(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var at = {
            name: "orderRules",
            data: function () {
                return {
                    rules: [],
                    subClass: !1
                }
            },
            computed: nt({}, Object(u["d"])(["pageConfig"])),
            created: function () {
                this.pageConfig.orderRules && (this.rules = this.pageConfig.orderRules.split(/\n|\r/))
            }
        }
            , it = at
            , ot = Object(y["a"])(it, Z, tt, !1, null, "353d522c", null)
            , rt = ot.exports
            , st = n("ed08")
            , ct = n("a670");
        function ut(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function lt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ut(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var dt = /^0?1[3-9][0-9]\d{8}$/
            , ft = {
                name: "product-main",
                components: {
                    orderRules: rt
                },
                data: function () {
                    return {
                        startOrderTimer: {
                            h: "--",
                            m: "--",
                            s: "--",
                            ss: "--",
                            ts: 1 / 0
                        },
                        endOrderTimer: {
                            h: "--",
                            m: "--",
                            s: "--",
                            ss: "--",
                            ts: 1 / 0
                        },
                        startBuyTimer: {
                            h: "--",
                            m: "--",
                            s: "--",
                            ss: "--",
                            ts: 1 / 0
                        },
                        endBuyTimer: {
                            h: "--",
                            m: "--",
                            s: "--",
                            ss: "--",
                            ts: 1 / 0
                        },
                        telNumber: "",
                        orderFlag: !1,
                        spikeFlag: !1,
                        hasReportedInputting: !1,
                        isTest: "http:" === location.protocol,
                        retryCount: 0
                    }
                },
                computed: lt(lt(lt({}, Object(u["d"])(["actId", "pageConfig", "actConfig"])), Object(u["b"])(["status"])), {}, {
                    orderStartTimer: function () {
                        return new st["j"](this.actConfig.actStatusInfo.orderStartTime / 1e3)
                    },
                    orderEndTimer: function () {
                        return new st["j"](this.actConfig.actStatusInfo.orderEndTime / 1e3)
                    },
                    spikeTimer: function () {
                        return new st["j"](this.actConfig.actStatusInfo.spikeTime / 1e3)
                    },
                    failedText: function () {
                        return this.pageConfig.actLinkUrl ? "还有机会，看看其他活动" : "回首页看看其他活动"
                    }
                }),
                methods: lt(lt({}, Object(u["c"])(["setActId", "setPageConfig", "changeActConfig"])), {}, {
                    reportSubButtonClick: function () {
                        var t = this;
                        setTimeout((function () {
                            t.$ypm.touch("buttonclick")
                        }
                        ), 20)
                    },
                    openApp: function (t) {
                        var e = this;
                        this.reportSubButtonClick();
                        var n = {
                            otherAct: this.pageConfig.actLinkUrl || "https://m.xiaomiyoupin.com/main",
                            yxg: "https://m.xiaomiyoupin.com/privilege"
                        }
                            , a = n[t] || location.href;
                        setTimeout((function () {
                            e.$isApp ? e.$url(a, !0) : openAppLink(a)
                        }
                        ), 200)
                    },
                    startPreorder: function () {
                        var t = this;
                        if (!this.orderFlag) {
                            this.reportSubButtonClick(),
                                setTimeout((function () {
                                    t.$ypm.touch("order")
                                }
                                ), 40);
                            var e = this.telNumber.toString();
                            if (!dt.test(e) && this.actConfig.userStatusInfo.phoneNeed)
                                return this.$showToast("手机号格式有误");
                            this.orderFlag = !0,
                                this.$bus.$emit("changeListenStatus", !1),
                                Object(ct["a"])({
                                    skip: this.judgeSkipFace(),
                                    skipVal: !0,
                                    type: this.judgeSkipType()
                                }).then((function (n) {
                                    if (t.reportFaceVerify(n),
                                        2 !== t.status)
                                        return t.$showToast("预约时间已过");
                                    setTimeout((function () {
                                        t.$ypm.touch("orderParams", 0, "tel=1&actId=".concat(t.actId))
                                    }
                                    ), 200),
                                        t.$api.doOrder(e, t.actId).then((function (e) {
                                            t.changeActConfig({
                                                userStatusInfo: {
                                                    ordered: !0
                                                },
                                                actStatusInfo: {
                                                    orderedCount: e && e.orderCount || 0
                                                }
                                            }),
                                                e.award && t.$bus.$emit("showModal", "success-order", {
                                                    award: e.award,
                                                    spikeTimer: t.spikeTimer,
                                                    isNew: e.newUser
                                                })
                                        }
                                        )).catch((function (e) {
                                            t.orderFlag = !1,
                                                2030 === e.code && e.data ? (e = e.data,
                                                    t.$bus.$emit("showModal", "cannot-order", {
                                                        award: e.award,
                                                        isNew: e.newUser
                                                    })) : t.$bus.$emit("refreshData", !0)
                                        }
                                        ))
                                }
                                )).catch((function (e) {
                                    t.$showToast(e && e.detail && e.detail.message || e && e.msg || "认证失败"),
                                        t.orderFlag = !1,
                                        t.reportFaceVerify(e)
                                }
                                ))
                        }
                    },
                    reportFaceVerify: function (t) {
                        var e = this;
                        setTimeout((function () {
                            e.$ypm.touch("faceResult", 0, JSON.stringify(t))
                        }
                        ), 350)
                    },
                    judgeSkipFace: function () {
                        if ("http:" === location.protocol && this.$args.skip)
                            return 1 === +this.$args.skip;
                        var t = this.actConfig.actStatusInfo.checkType
                            , e = this.actConfig.userStatusInfo.checkStatus;
                        return 0 === t || (1 === t ? "ID_CARD_VERIFIED" === e || "FACE_VERIFIED" === e : 2 === t ? "FACE_VERIFIED" === e : void 0)
                    },
                    judgeSkipType: function () {
                        var t = this.actConfig.actStatusInfo.checkType;
                        return 1 === t ? 2 : 0
                    },
                    doSpike: function () {
                        this.spikeFlag || (this.spikeFlag = !0,
                            this.reportSubButtonClick(),
                            this.postSpike())
                    },
                    postSpike: function () {
                        var t = this;
                        this.$api.doSpike(this.actId, this.actConfig.userStatusInfo.spikeUrl, this.actConfig.userStatusInfo.token).then((function (e) {
                            if (e.success)
                                t.changeActConfig({
                                    userStatusInfo: {
                                        ordered: !0,
                                        spiked: !0,
                                        win: !0
                                    }
                                });
                            else {
                                //TODO: hack - comment out these lines to allow re-submit
                                // var n = {
                                //     userStatusInfo: {
                                //         ordered: !0,
                                //         spiked: !0,
                                //         win: !1
                                //     }
                                // };
                                // e.spikeAwardConfigBO && 4 === e.spikeAwardConfigBO.awardType && (n.userStatusInfo.redPackageValue = e.spikeAwardConfigBO.value),
                                // t.changeActConfig(n),
                                // t.setFailCache()
                            }
                            t.spikeFlag = !1
                        }
                        )).catch((function (e) {
                            e && 500 === e.code ? setTimeout((function () {
                                var e = t;
                                t.$bus.$emit("refreshData", (function () {
                                    e.spikeFlag = !1
                                }
                                ))
                            }
                            ), 2e3) : e && 1 === e.networkError ? t.spikeFlag = !1 : e && (503 === e.code || 418 === e.code) && t.retryCount < 2 ? (t.retryCount++,
                                t.postSpike(),
                                t.isTest && console.log("抢购超时，第".concat(t.retryCount, "次重试"))) : (t.changeActConfig({
                                    userStatusInfo: {
                                        ordered: !0,
                                        spiked: !0,
                                        win: !1
                                    }
                                }),
                                    t.spikeFlag = !1,
                                    t.setFailCache())
                        }
                        ))
                    },
                    setFailCache: function () {
                        try {
                            localStorage.setItem("spike_mt_fail_" + this.actId, "1")
                        } catch (t) { }
                    },
                    goProductDetail: function () {
                        var t = this;
                        this.$ypm.touch("detail"),
                            setTimeout((function () {
                                t.$url(t.pageConfig.goodDetailUrl)
                            }
                            ), 200)
                    },
                    goOtherAct: function () {
                        this.reportSubButtonClick()
                    },
                    inputtingTel: function () {
                        this.hasReportedInputting || (this.hasReportedInputting = !0,
                            this.$ypm.touch("number"))
                    },
                    judgeShowTimer: function (t) {
                        return t.ts < 864e5
                    },
                    getTime: function (t) {
                        return new st["j"](t / 1e3)
                    },
                    inputFocus: function () {
                        window.scrollTo({
                            top: 350,
                            behavior: "smooth"
                        })
                    }
                }),
                mounted: function () {
                    var t = this;
                    this.$on("startInterVal", (function () {
                        var e = t.actConfig && t.actConfig.actStatusInfo;

                        //TODO: hack - enable buy button xxx milliseconds prior to origin time
                        console.log('actStatusInfo:', t.actConfig.actStatusInfo)
                        const xxx = 1000 * 30
                        e.spikeLeftTime -= xxx
                        e.spikeTime -= xxx
                        e.orderEndTime = e.spikeTime - 30 * 60 * 1000 // 30 minutes prior to spikeTime
                        e.orderEndLeftTime = e.orderEndTime - Date.now()

                        Q(e.orderStartLeftTime, t.startOrderTimer, 300, (function () {
                            t.changeActConfig({
                                actStatusInfo: {
                                    orderStartLeftTime: -1
                                }
                            })
                        }
                        )),
                            Q(e.orderEndLeftTime, t.endOrderTimer, 300, (function () {
                                t.changeActConfig({
                                    actStatusInfo: {
                                        orderEndLeftTime: -1
                                    }
                                })
                            }
                            )),
                            Q(e.spikeLeftTime, t.startBuyTimer, 300, (function () {
                                t.changeActConfig({
                                    actStatusInfo: {
                                        spikeLeftTime: -1
                                    }
                                })
                            }
                            )),
                            Q(e.spikeEndLeftTime, t.endBuyTimer, 300, (function () {
                                t.changeActConfig({
                                    actStatusInfo: {
                                        spikeEndLeftTime: -1
                                    }
                                })
                            }
                            ))
                    }
                    ))
                },
                watch: {
                    retryCount: function (t) {
                        this.$ypm.touch("retrySpikeCount", 0, "count=".concat(t))
                    }
                }
            }
            , pt = ft
            , mt = Object(y["a"])(pt, q, X, !1, null, "2fc4bb18", null)
            , gt = mt.exports
            , ht = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.pageConfig.banImg ? n("div", {
                    staticClass: "module-banner"
                }, [n("div", {
                    staticClass: "banner-main",
                    on: {
                        click: function (e) {
                            return t.goAdPage(1)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.pageConfig.banImg,
                        alt: ""
                    }
                })])]) : t._e()
            }
            , vt = [];
        function bt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function yt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? bt(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ct = {
            name: "banner",
            computed: yt({}, Object(u["d"])(["pageConfig"])),
            methods: {
                goAdPage: function (t) {
                    var e = this;
                    this.$ypm.touch("banner", t),
                        setTimeout((function () {
                            e.$url(e.pageConfig.banUrl)
                        }
                        ), 200)
                }
            }
        }
            , wt = Ct
            , _t = Object(y["a"])(wt, ht, vt, !1, null, "2f899d90", null)
            , Ot = _t.exports
            , kt = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.orderList.length ? n("div", {
                    staticClass: "float-pop"
                }, [n("scroll-card", {
                    attrs: {
                        originList: t.orderList,
                        duration: 3e3,
                        paddingSize: 10
                    },
                    scopedSlots: t._u([{
                        key: "scrollItem",
                        fn: function (e) {
                            var a = e.item;
                            return [n("div", {
                                staticClass: "float-item"
                            }, [n("div", {
                                staticClass: "user-avatar"
                            }, [n("img", {
                                staticClass: "avatar-img",
                                attrs: {
                                    src: a.avatar,
                                    alt: ""
                                }
                            })]), n("div", {
                                staticClass: "user-info"
                            }, [t._v("\n          " + t._s(a.nickname) + " 预约成功\n        ")])])]
                        }
                    }], null, !1, 3793916082)
                })], 1) : t._e()
            }
            , St = []
            , It = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.list_count > 0,
                        expression: "list_count > 0"
                    }],
                    staticClass: "scroll-card-container",
                    style: {
                        height: t.unitHeight * t.showCount + t.paddingSize + "px"
                    }
                }, [n("div", {
                    staticClass: "scroll-rail",
                    attrs: {
                        id: "valentine_scroll_rail"
                    }
                }, t._l(t.list_show, (function (e, a) {
                    return n("div", {
                        key: a,
                        ref: "scroll-item",
                        refInFor: !0,
                        staticClass: "scroll-item",
                        style: {
                            marginBottom: t.paddingSize + "px"
                        }
                    }, [t._t("scrollItem", null, {
                        item: e
                    })], 2)
                }
                )), 0)])
            }
            , jt = []
            , Tt = n("75fc")
            , xt = {
                name: "scroll-card",
                data: function () {
                    return {
                        list_show: [],
                        list_count: 0,
                        curIndex: 0,
                        timer: null,
                        ok: 0,
                        unitHeight: 40
                    }
                },
                methods: {
                    startInterval: function () {
                        var t = this;
                        this.timer = setInterval((function () {
                            t.curIndex++;
                            var e = -(t.unitHeight + t.paddingSize) * t.curIndex;
                            $("#valentine_scroll_rail").animate({
                                top: e
                            }, 500, (function () {
                                t.curIndex === t.list_count && ($("#valentine_scroll_rail").animate({
                                    top: 0
                                }, 0),
                                    t.curIndex = 0)
                            }
                            ))
                        }
                        ), this.duration + 500)
                    },
                    initList: function (t) {
                        this.list_count = t.length,
                            this.list_show = [].concat(Object(Tt["a"])(t), Object(Tt["a"])(t.slice(0, this.showCount)))
                    }
                },
                mounted: function () {
                    var t = this;
                    this.initList(this.originList),
                        setTimeout((function () {
                            var e = t.$refs["scroll-item"] && t.$refs["scroll-item"][0];
                            if (e) {
                                if (t.unitHeight = e.offsetHeight,
                                    t.originList.length <= 1)
                                    return;
                                t.startInterval()
                            }
                        }
                        ), 30)
                },
                beforeDestroy: function () {
                    clearTimeout(this.timer)
                },
                components: {},
                props: {
                    showCount: {
                        default: 1
                    },
                    originList: {
                        require: !0
                    },
                    duration: {
                        default: 2e3
                    },
                    paddingSize: {
                        default: 0
                    }
                },
                watch: {}
            }
            , Pt = xt
            , $t = (n("0118"),
                Object(y["a"])(Pt, It, jt, !1, null, "5fc13af9", null))
            , Dt = $t.exports;
        function At(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function Lt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? At(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Nt = {
            name: "floatPop",
            components: {
                scrollCard: Dt
            },
            data: function () {
                return {
                    orderList: []
                }
            },
            computed: Lt({}, Object(u["d"])(["pageConfig", "actId"])),
            methods: {},
            created: function () {
                var t = this;
                this.$api.getOrders(this.actId).then((function (e) {
                    t.orderList = e && e.orders || []
                }
                ))
            }
        }
            , Et = Nt
            , Bt = Object(y["a"])(Et, kt, St, !1, null, null, null)
            , Ut = Bt.exports
            , Ft = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return this.commentTopData && this.commentMainData ? n("div", {
                    directives: [{
                        name: "observe-visibility",
                        rawName: "v-observe-visibility",
                        value: t.visChange,
                        expression: "visChange"
                    }],
                    staticClass: "module-comment pretty-module",
                    on: {
                        click: t.goProduct
                    }
                }, [n("div", {
                    staticClass: "comment-top"
                }, [n("div", {
                    staticClass: "comment-count"
                }, [t._v("\n      用户评价 (" + t._s(t.commentTopData.total_count) + ")\n    ")]), n("div", {
                    staticClass: "comment-rate"
                }, [t._v("\n      " + t._s(t.commentTopData.positive_rate) + "%好评 "), n("i", {
                    staticClass: "arrow-icon"
                })])]), n("div", {
                    staticClass: "comment-main"
                }, [n("div", {
                    staticClass: "user-content"
                }, [n("div", {
                    staticClass: "user-avatar"
                }, [n("img", {
                    attrs: {
                        src: t.commentMainData.avatar || "https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_userhead.png",
                        alt: ""
                    }
                })]), n("div", {
                    staticClass: "user-name"
                }, [t._v("\n        " + t._s(t.commentMainData.nick_name || "匿名用户") + "\n      ")])]), n("div", {
                    staticClass: "comment-content"
                }, [n("div", {
                    staticClass: "comment-text text-cut-2"
                }, [t._v("\n        " + t._s(t.commentMainData.text) + "\n      ")]), t.commentMainData.comment_imgs && t.commentMainData.comment_imgs.length ? n("div", {
                    staticClass: "comment-pics"
                }, [n("div", {
                    staticClass: "comment-pics-container"
                }, t._l(t.commentMainData.comment_imgs, (function (t, e) {
                    return n("div", {
                        key: e,
                        staticClass: "comment-img"
                    }, [n("img", {
                        attrs: {
                            src: t.thumbnail,
                            alt: ""
                        }
                    })])
                }
                )), 0)]) : t._e()])]), n("div", {
                    staticClass: "pretty-support"
                })]) : t._e()
            }
            , Ht = [];
        n("4917");
        function Rt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function Mt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Rt(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Vt = {
            name: "comment",
            data: function () {
                return {
                    commentTopData: "",
                    commentMainData: "",
                    hasReported: !1,
                    gid: 0
                }
            },
            mounted: function () {
                var t = this
                    , e = this.pageConfig.goodDetailUrl
                    , n = e.match(/[?|&]gid=(\w+)/);
                n && (this.gid = +n[1],
                    this.$api.getComment(this.gid).then((function (e) {
                        e && !e.data || (t.commentTopData = e.data.index,
                            t.commentMainData = e.data.content && e.data.content[0])
                    }
                    )))
            },
            computed: Mt({}, Object(u["d"])(["pageConfig"])),
            methods: {
                goProduct: function () {
                    this.$url("https://m.xiaomiyoupin.com/allCommentList?gid=".concat(this.gid, "&tagIndex=0&isVisible=1"), !0, this.$ypm.touch("evaluationclick"))
                },
                visChange: function (t) {
                    t && !this.hasReported && (this.hasReported = !0,
                        this.$ypm.touch("evaluation"))
                }
            }
        }
            , Wt = Vt
            , Gt = Object(y["a"])(Wt, Ft, Ht, !1, null, "eaaf9e28", null)
            , zt = Gt.exports
            , Jt = n("19a2")
            , qt = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.modalName ? n("div", {
                    staticClass: "modal-container",
                    on: {
                        touchmove: t.touchmove
                    }
                }, [n("div", {
                    staticClass: "modal-mask",
                    on: {
                        click: t.maskClose
                    }
                }), n("div", {
                    staticClass: "modal-content"
                }, ["cannot-order" === t.modalName ? n("cannot-order", {
                    attrs: {
                        info: t.sendData
                    }
                }) : t._e(), "success-order" === t.modalName ? n("success-order", {
                    attrs: {
                        info: t.sendData
                    }
                }) : t._e(), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showCloseIcon,
                        expression: "showCloseIcon"
                    }],
                    staticClass: "close-icon",
                    on: {
                        click: t.close
                    }
                })], 1)]) : t._e()
            }
            , Xt = []
            , Yt = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "cannot-order modal-main f-col"
                }, [t._m(0), n("div", {
                    ref: "scrollArea",
                    staticClass: "scroll-area"
                }, [n("order-rules", {
                    attrs: {
                        modalS: 1
                    }
                })], 1), t.pageConfig.showGuideBtn && t.info.isNew && t.pageConfig.failSubscribeNewUserUrl ? n("div", {
                    staticClass: "go-rule-btn",
                    class: {
                        "with-pop": t.info.award && t.awardText
                    },
                    on: {
                        click: function (e) {
                            return t.goUrl(t.pageConfig.failSubscribeNewUserUrl)
                        }
                    }
                }, [t.info.award && t.awardText ? n("div", {
                    staticClass: "award-pop"
                }, [n("div", {
                    staticClass: "content-main"
                }, [t._v("\n        " + t._s(t.awardText) + "\n      ")])]) : t._e(), t._v("\n    去获得抢购资格\n  ")]) : t.pageConfig.showGuideBtn && !t.info.isNew && t.pageConfig.failSubscribeOldUserUrl ? n("div", {
                    staticClass: "go-rule-btn",
                    class: {
                        "with-pop": t.info.award && t.awardText
                    },
                    on: {
                        click: function (e) {
                            return t.goUrl(t.pageConfig.failSubscribeOldUserUrl)
                        }
                    }
                }, [t.info.award && t.awardText ? n("div", {
                    staticClass: "award-pop"
                }, [n("div", {
                    staticClass: "content-main"
                }, [t._v("\n        " + t._s(t.awardText) + "\n      ")])]) : t._e(), t._v("\n    去获得抢购资格\n  ")]) : n("div", {
                    staticClass: "go-rule-btn",
                    class: {
                        "with-pop": t.info.award && t.awardText
                    },
                    on: {
                        click: function (e) {
                            return t.$bus.$emit("hideModal")
                        }
                    }
                }, [t.info.award && t.awardText ? n("div", {
                    staticClass: "award-pop"
                }, [n("div", {
                    staticClass: "content-main"
                }, [t._v("\n        " + t._s(t.awardText) + "\n      ")])]) : t._e(), t._v("\n    我知道了\n  ")])])
            }
            , Kt = [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "modal-title"
                }, [n("p", [t._v("您不具备抢购资格")]), n("p", [t._v("无法预约")])])
            }
            ]
            , Qt = n("b434");
        function Zt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function te(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Zt(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var ee = {
            name: "cannot-order",
            data: function () {
                return {}
            },
            components: {
                orderRules: rt
            },
            props: ["info"],
            computed: te(te({}, Object(u["d"])(["pageConfig"])), {}, {
                awardText: function () {
                    var t = Object(Qt["a"])(this.info.award)
                        , e = "";
                    return t && t.value ? (4 === t.type ? e = "".concat(t.value.amount, "元红包") : 1 === t.value.type ? e = "".concat(t.value.amount, "折券") : 2 === t.value.type ? e = "".concat(t.value.amount, "元券") : 3 === t.value.type && (e = "超值换购券"),
                        "已送您".concat(this.info.isNew ? "新人好礼" : "").concat(e, "，快去买买买~")) : ""
                }
            }),
            created: function () {
                this.$ypm.touch("pop")
            },
            mounted: function () {
                var t = this.$refs.scrollArea;
                t && t.scrollHeight > t.offsetHeight && this.$bus.$emit("changePreventStatus", !1)
            },
            destroyed: function () {
                this.$bus.$emit("changePreventStatus", !0)
            },
            methods: {
                goUrl: function (t) {
                    this.$ypm.touch("popbutton"),
                        this.$url(t)
                }
            }
        }
            , ne = ee
            , ae = Object(y["a"])(ne, Yt, Kt, !1, null, null, null)
            , ie = ae.exports
            , oe = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "success-order modal-main f-col"
                }, [t._m(0), t.info.award && t.info.spikeTimer ? n("div", {
                    staticClass: "modal-sub-title"
                }, [t._v("\n    请于" + t._s(t.info.spikeTimer.dateStr) + " " + t._s(t.info.spikeTimer.timeStr) + "前来抢购\n  ")]) : t._e(), t.info.award ? n("div", {
                    staticClass: "modal-award-tip"
                }, [t._v("\n    " + t._s(t.info.isNew ? "送您新人好礼，快去下单吧～" : "送您一份好礼，快去下单吧～") + "\n  ")]) : t._e(), t.info.award ? n("div", {
                    staticClass: "award-content"
                }, [n("award", {
                    attrs: {
                        gapBgc: "1" === t.pageConfig.theme ? "#252525" : "#fff",
                        info: t.info.award,
                        hideGoUse: !0,
                        diyClick: !0
                    }
                })], 1) : t._e(), t.info.isNew && t.pageConfig.successSubscribeNewUserUrl ? n("div", {
                    staticClass: "go-rule-btn",
                    on: {
                        click: function (e) {
                            return t.goUrl(t.pageConfig.successSubscribeNewUserUrl)
                        }
                    }
                }, [t._v("\n    去使用\n  ")]) : !t.info.isNew && t.pageConfig.successSubscribeOldUserUrl ? n("div", {
                    staticClass: "go-rule-btn",
                    on: {
                        click: function (e) {
                            return t.goUrl(t.pageConfig.successSubscribeOldUserUrl)
                        }
                    }
                }, [t._v("\n    去使用\n  ")]) : n("div", {
                    staticClass: "go-rule-btn",
                    on: {
                        click: function (e) {
                            return t.goUrl()
                        }
                    }
                }, [t._v("\n    我知道了\n  ")])])
            }
            , re = [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "modal-title"
                }, [n("p", [t._v("恭喜您预约成功")])])
            }
            ]
            , se = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return t.awardInfo ? n("div", {
                    staticClass: "award-area",
                    on: {
                        click: t.goCoupon
                    }
                }, [n("div", {
                    staticClass: "award"
                }, [4 === t.awardInfo.type ? n("div", {
                    staticClass: "red coupon"
                }, [n("div", {
                    staticClass: "coupon-value"
                }, [n("p", {
                    staticClass: "value"
                }, t._l(t.awardInfo.value.amountDeco, (function (e, a) {
                    return n("span", {
                        key: a,
                        class: [{
                            "value-symbol": 0 !== e.type
                        }, "value-symbol-" + e.type]
                    }, [t._v(t._s(e.val))])
                }
                )), 0), n("p", {
                    staticClass: "tip"
                }, [t._v("已入账")])]), n("div", {
                    staticClass: "coupon-desc"
                }, [n("p", {
                    staticClass: "desc"
                }, [t._v(t._s(t.awardInfo.name))]), t.awardInfo.endTimer && t.awardInfo.endTimer.dateStr ? n("p", {
                    staticClass: "enddate"
                }, [t._v("\n          " + t._s(t.awardInfo.endTimer.dateStr + "/" + t.awardInfo.endTimer.timeStr) + "\n        ")]) : t._e()])]) : t._e(), 1 === t.awardInfo.type ? n("div", {
                    staticClass: "normal coupon"
                }, [n("div", {
                    staticClass: "top-gap gap",
                    style: t.gapStyle
                }), n("div", {
                    staticClass: "bottom-gap gap",
                    style: t.gapStyle
                }), n("div", {
                    staticClass: "coupon-value"
                }, [n("p", {
                    staticClass: "value"
                }, t._l(t.awardInfo.value.amountDeco, (function (e, a) {
                    return n("span", {
                        key: a,
                        class: [{
                            "value-symbol": 0 !== e.type
                        }, "value-symbol-" + e.type]
                    }, [t._v(t._s(e.val))])
                }
                )), 0), t.awardInfo.bottom ? n("p", {
                    staticClass: "tip"
                }, [t._v(t._s(t.awardInfo.bottom.text))]) : t._e()]), n("div", {
                    staticClass: "coupon-other"
                }, [n("div", {
                    staticClass: "coupon-desc",
                    class: {
                        "hide-go-use": t.hideGoUse
                    }
                }, [n("p", {
                    staticClass: "desc"
                }, [t._v(t._s(t.awardInfo.name))]), t.awardInfo.endTimer && t.awardInfo.endTimer.dateStr ? n("p", {
                    staticClass: "enddate"
                }, [t._v("\n            " + t._s(t.awardInfo.endTimer.dateStr + "/" + t.awardInfo.endTimer.timeStr) + "\n          ")]) : t._e()]), t.hideGoUse ? t._e() : n("div", {
                    staticClass: "coupon-use"
                }, [n("p", {
                    staticClass: "use-tip"
                }, [t._v("去使用")])])])]) : t._e()])]) : t._e()
            }
            , ce = []
            , ue = {
                name: "Award",
                components: {},
                data: function () {
                    return {
                        awardInfo: ""
                    }
                },
                props: ["gapBgc", "info", "diyClick", "hideGoUse"],
                created: function () {
                    this.awardInfo = Object(Qt["a"])(this.info)
                },
                computed: {
                    gapStyle: function () {
                        return {
                            backgroundColor: this.gapBgc || "#fff"
                        }
                    }
                },
                methods: {
                    goCoupon: function () {
                        this.diyClick ? this.$emit("couponClick", this.awardInfo) : jumpTo(this.awardInfo.jumpUrl)
                    }
                }
            }
            , le = ue
            , de = (n("ffc9"),
                Object(y["a"])(le, se, ce, !1, null, "f857fe2e", null))
            , fe = de.exports;
        function pe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function me(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pe(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var ge = {
            name: "cannot-order",
            data: function () {
                return {}
            },
            components: {
                award: fe
            },
            props: ["info"],
            computed: me({}, Object(u["d"])(["pageConfig", "actConfig"])),
            created: function () {
                this.$ypm.touch("orderpop")
            },
            methods: {
                goUrl: function (t) {
                    this.$ypm.touch("orderpopclick"),
                        t ? this.$url(t) : this.$bus.$emit("hideModal")
                }
            }
        }
            , he = ge
            , ve = Object(y["a"])(he, oe, re, !1, null, null, null)
            , be = ve.exports
            , ye = {
                name: "modalContainer",
                data: function () {
                    return {
                        modalName: "",
                        sendData: {},
                        showCloseIcon: !0,
                        preventStatus: !0
                    }
                },
                created: function () {
                    var t = this;
                    this.$bus.$on("showModal", (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        t.modalName = e,
                            t.sendData = n,
                            t.showCloseIcon = a
                    }
                    )),
                        this.$bus.$on("hideModal", (function () {
                            t.modalName = "",
                                t.sendData = {},
                                t.showCloseIcon = !1
                        }
                        )),
                        this.$bus.$on("changePreventStatus", (function (e) {
                            t.preventStatus = e
                        }
                        ))
                },
                methods: {
                    close: function () {
                        this.modalName = "",
                            this.sendData = {}
                    },
                    maskClose: function () {
                        this.showCloseIcon && this.close()
                    },
                    touchmove: function (t) {
                        this.preventStatus && t.preventDefault()
                    }
                },
                components: {
                    cannotOrder: ie,
                    successOrder: be
                }
            }
            , Ce = ye
            , we = Object(y["a"])(Ce, qt, Xt, !1, null, null, null)
            , _e = we.exports
            , Oe = n("19cf");
        function ke(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function Se(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ke(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ie = {
            name: "app-main",
            components: {
                luckierArea: J,
                UnLogin: Jt["a"],
                recommendArea: F,
                banner: Ot,
                productMain: gt,
                modalContainer: _e,
                floatPop: Ut,
                comment: zt
            },
            data: function () {
                var t = this
                    , e = this.$args.actId;
                return this.setActId(e),
                    setTimeout((function () {
                        t.$ypm.view()
                    }
                    ), 0),
                {
                    loginCode: -1,
                    startListenPageVisible: !1,
                    showLuckier: !1,
                    mainPaddingTop: NaN
                }
            },
            mounted: function () {
                var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                    var e, n = this;
                    return regeneratorRuntime.wrap((function (t) {
                        while (1)
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                        this.handleGetLogin();
                                case 2:
                                    e = t.sent,
                                        e && this.handleHomeData(!0),
                                        window.eventEmitter && window.eventEmitter.on("share-result", (function () {
                                            n.$ypm.touch("share")
                                        }
                                        )),
                                        this.$bus.$on("refreshData", this.getActConfig.bind(this, !0)),
                                        this.$bus.$on("changeListenStatus", (function (t) {
                                            n.startListenPageVisible = t
                                        }
                                        ));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            computed: Se(Se(Se({}, Object(u["d"])(["actId", "pageConfig", "actConfig"])), Object(u["b"])(["status"])), {}, {
                mainStyle: function () {
                    return {
                        backgroundImage: "url(".concat(this.pageConfig.bgTitleImg, ")"),
                        backgroundColor: this.pageConfig.bgColor,
                        paddingTop: this.mainPaddingTop + "px"
                    }
                }
            }),
            methods: Se(Se({}, Object(u["c"])(["setActId", "setPageConfig", "setActConfig", "changeActConfig"])), {}, {
                getPageConfig: function () {
                    var t = this;
                    return new Promise((function (e, n) {
                        t.$api.getPageConfig(t.actId).then((function (a) {
                            a.data && a.data.content ? (t.setPageConfig(a.data.content),
                                e(a.data.content),
                                t.$nextTick((function () {
                                    Oe["a"].setIconShare({
                                        title: t.pageConfig.shareTitle,
                                        content: t.pageConfig.shareDesc,
                                        image: t.pageConfig.shareImg,
                                        url: "".concat(location.origin).concat(location.pathname, "?share=1&actId=").concat(t.actId)
                                    })
                                }
                                ))) : (t.$showToast("页面配置获取失败"),
                                    n())
                        }
                        )).catch((function () {
                            n()
                        }
                        ))
                    }
                    ))
                },
                getActConfig: function (t, e) {
                    var n = this;
                    return this.$api.getActConfig(this.actId).then((function (a) {
                        n.setActConfig(Object.assign({}, a)),
                            t && n.$nextTick((function () {
                                n.$refs.main.$emit("startInterVal")
                            }
                            )),
                            n.getVerifyStatus(),
                            e && e()
                    }
                    ))
                },
                getVerifyStatus: function () {
                    var t = this
                        , e = this.actConfig.actStatusInfo.checkType;
                    [1, 2].indexOf(this.status) > -1 && 0 !== e && this.$api.getVerifyStatus().then((function (e) {
                        t.changeActConfig({
                            userStatusInfo: {
                                checkStatus: e.data
                            }
                        })
                    }
                    ))
                },
                handleGetLogin: function () {
                    var t = this;
                    return Object(l["getLogin"])().then((function (e) {
                        return e || (Object(l["jumptoLogin"])(),
                            t.$isApp && setTimeout((function () {
                                t.loginCode = 0
                            }
                            ), 1e3)),
                            e
                    }
                    ))
                },
                handleHomeData: function () {
                    var t = this;
                    Promise.all([this.getActConfig(), this.getPageConfig()]).then((function () {
                        t.loginCode = 1,
                            t.$nextTick((function () {
                                t.$refs.main.$emit("startInterVal"),
                                    setTimeout(t.setMainPaddingTop, 0)
                            }
                            ))
                    }
                    ))
                },
                goRules: function () {
                    var t = this;
                    this.$ypm.touch("rule"),
                        setTimeout((function () {
                            t.$url(t.pageConfig.actRuleUrl)
                        }
                        ), 200)
                },
                setPageVisible: function () {
                    this.startListenPageVisible = !0;
                    var t = this
                        , e = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null
                        , n = e.replace("hidden", "visibilitychange").replace("Hidden", "Visibilitychange")
                        , a = function () {
                            !document[e] && t.startListenPageVisible && t.$bus.$emit("refreshData")
                        };
                    document.addEventListener(n, a)
                },
                setMainPaddingTop: function () {
                    if (this.$refs.mainContent && this.pageConfig.heightWidthRatio) {
                        var t = this.$refs.mainContent.offsetWidth;
                        this.mainPaddingTop = t * this.pageConfig.heightWidthRatio
                    }
                }
            }),
            watch: {
                status: {
                    immediate: !0,
                    handler: function (t) {
                        t > 0 && this.$ypm.touch("view")
                    }
                }
            }
        }
            , je = Ie
            , Te = (n("c6b6"),
                Object(y["a"])(je, o, r, !1, null, null, null))
            , xe = Te.exports
            , Pe = n("8c4f")
            , $e = new i["a"]
            , De = (n("7f7f"),
                n("24de"))
            , Ae = [{
                awardStartTime: 1589705083,
                couponDiscountPrice: 0,
                couponTarget: "https://m.xiaomiyoupin.com/detail?gid=104631",
                awardEndTime: 1593506683,
                awardName: "测试测试测试",
                couponValue: 333,
                awardDesc: "测试】券裂变-满减券-不包含限时购商品和其他特殊商品",
                couponBottomPrice: 1e4,
                thirdPartPageUrl: "",
                id: "5eccdc8b3f764748e2d0c7e9",
                awardNum: 1,
                couponDiscountType: 2,
                awardValue: "3.33元",
                couponDiscountValue: 0,
                awardType: 1
            }, {
                awardName: "爱搭搭撒阿萨德按时 阿萨德大",
                thirdPartPageUrl: "",
                id: "5eccdc8b3f764748e2d0c7e3",
                awardValue: "30.00元",
                awardType: 4
            }]
            , Le = {
                getActInfo: {
                    msg: "ok",
                    code: 0,
                    data: {
                        userStatusInfo: {
                            ordered: !1,
                            spiked: !1,
                            win: !1,
                            canOrder: !1,
                            redPackageValue: 100,
                            phoneNeed: !1
                        },
                        actStatusInfo: {
                            checkNeed: !0,
                            orderedCount: 0,
                            checkType: 1,
                            orderStartLeftTime: -1,
                            orderEndLeftTime: 9e6,
                            spikeLeftTime: 10000001,
                            spikeEndLeftTime: 9000002,
                            orderEndTime: 1600861972e3,
                            spikeTime: 1600861973e3,
                            orderStartTime: 1600775572002
                        }
                    },
                    success: !0
                },
                order: {
                    msg: "ok",
                    code: 2030,
                    success: !0,
                    data: {
                        orderCount: 100,
                        award: Ae[0],
                        newUser: !1
                    }
                },
                spike: {
                    msg: "ok",
                    code: 500,
                    success: !0,
                    data: {
                        actId: "",
                        userId: "",
                        success: !1,
                        awardConfigBO: {
                            actId: "",
                            awardType: 4,
                            awardName: "",
                            value: 50
                        }
                    }
                },
                winnerList: {
                    msg: "ok",
                    code: 0,
                    data: {
                        winners: new Array(40).fill({
                            avatar: "https://img.youpin.mi-img.com/editor1/d485dfa91cab2b4cd0a3b957ff0a931c.png?w=200&h=200",
                            nickname: "wcnd",
                            tel: "176****6619"
                        })
                    },
                    success: !0
                },
                one: {
                    code: 0,
                    data: {
                        utime: 1600930333139,
                        ctime: 1600859244200,
                        startTime: 1600930333098,
                        sort: 1600859244200,
                        id: "5f6b2c6ce21b840001c9d3cd",
                        endTime: 4102416e6,
                        content: {
                            foreignKey: "5f69c7d28c5e2d363c7c5bb6",
                            bgTitleImg: "https://img.youpin.mi-img.com/youpinoper/d9f3a51f57a817870e2a23879968a172.png?w=1125&h=1404",
                            actRuleImg: "https://img.youpin.mi-img.com/youpinoper/4341ec26b0559b30a572c22ccc78dfa1.png?w=81&h=243",
                            banImg: "https://img.youpin.mi-img.com/youpinoper/900650a7ec5e77c82db3e3c3856a557b.png?w=1059&h=441",
                            shareImg: "https://img.youpin.mi-img.com/youpinoper/408a8dd5af2552c3825abd37c771dcda.png?w=628&h=554",
                            actRuleUrl: "https://m.xiaomiyoupin.com/w/universal?_rt=weex&pageid=4095",
                            actLinkUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d",
                            nextActPop: "<下次预约活动提示>",
                            goodName: "贵州茅台飞天酒53度",
                            subGoodTile: "经典飞天  国货匠心  陈一点更香醇",
                            goodPrice: 1499,
                            showComment: !0,
                            pageTitle: "买买买",
                            orderRules: "厚度和摄像机保持基本的坚持不接受厚度和摄像机保持基本的坚持不接受\n还是很开心还是快下班\n还是很开心还是快下班",
                            orderRulesTitle: "aaaaaa",
                            goodDetailUrl: "https://www.xiaomiyoupin.com/detail?gid=117989",
                            banUrl: "https://m.xiaomiyoupin.com/app/shop/ugg/ypManor/manorHome/index.html?hideNavBar=true",
                            shareTitle: "分享标题",
                            shareDesc: "分享文案",
                            failSubscribeNewUserUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d",
                            failSubscribeOldUserUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d",
                            successSubscribeNewUserUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d",
                            successSubscribeOldUserUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d",
                            reGood: [{
                                img: "",
                                imgLayoutType: "",
                                url: "",
                                gid: "100961",
                                name: "8H美式简约独立弹簧布艺沙发"
                            }, {
                                img: "",
                                imgLayoutType: "",
                                url: "",
                                gid: "100961",
                                name: "8H美式简约独立弹簧布艺沙发"
                            }, {
                                img: "",
                                imgLayoutType: "",
                                url: "",
                                gid: "100961",
                                name: "8H美式简约独立弹簧布艺沙发"
                            }, {
                                img: "",
                                imgLayoutType: "",
                                url: "",
                                gid: "100961",
                                name: "8H美式简约独立弹簧布艺沙发"
                            }],
                            bgColor: "rgba(141, 0, 23, 1)",
                            showGuideBtn: !0,
                            date: [1600916750338, 4102416e6],
                            theme: "1",
                            heightWidthRatio: 1.04,
                            goodRecTitle: "更多茅台推荐 ",
                            goodRecSubTitle: "想你所想，爱你所爱，国酒佳酿，为你奉上",
                            tabFontColor: "#fff",
                            floors: [{
                                floorName: "嘻嘻哈哈",
                                planId: 1440,
                                sortBy: "1",
                                bannerImage: "https://img.youpin.mi-img.com/shopcenter/jf8i80srcfg_6956012061601275075355.png",
                                bannerUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d"
                            }, {
                                floorName: "哈哈哈啊啊啊啊啊啊",
                                planId: 1441,
                                sortBy: "1",
                                bannerImage: "https://img.youpin.mi-img.com/editor1/d485dfa91cab2b4cd0a3b957ff0a931c.png?w=200&h=200",
                                bannerUrl: "https://m.xiaomiyoupin.com/app/shop/ugg/ypManor/manorHome/index.html?hideNavBar=true"
                            }, {
                                floorName: "苟苟粒粒",
                                planId: 1442,
                                sortBy: "2",
                                bannerImage: "https://img.youpin.mi-img.com/shopcenter/jf8i80srcfg_6956012061601275075355.png",
                                bannerUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d"
                            }, {
                                floorName: "过过家家",
                                planId: 1443,
                                sortBy: "1",
                                bannerImage: "https://img.youpin.mi-img.com/shopcenter/1g5bm6vi1do_6956012061603285482709.jpeg",
                                bannerUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d"
                            }, {
                                floorName: "港港记记",
                                planId: 1444,
                                sortBy: "2",
                                bannerImage: "https://img.youpin.mi-img.com/shopcenter/jf8i80srcfg_6956012061601275075355.png",
                                bannerUrl: "https://m.xiaomiyoupin.com/hd/assistance/index.html?hideNavBar=true&actId=5f041d784cedfd00011e0b5d"
                            }]
                        }
                    },
                    message: "ok"
                },
                verifyStatus: {
                    traceId: "311bbc0e600a41a8bfc2f4fcea40ec76",
                    success: !0,
                    code: 0,
                    attachments: {
                        timestamp: "1602645418748"
                    },
                    data: "FACE_VERIFIED",
                    message: "ok"
                },
                getComment: {
                    success: !0,
                    code: 0,
                    data: {
                        code: 0,
                        message: "ok",
                        traceId: "e570c733-2239-11eb-8af5-e4434b98b2a8",
                        data: {
                            index: {
                                avg_score: 5,
                                positive_rate: 99,
                                tags: [{
                                    id: "__all__",
                                    name: "全部",
                                    count: 1992,
                                    type: "__all__",
                                    category: "good"
                                }, {
                                    id: "__img__",
                                    name: "有图",
                                    count: 469,
                                    type: "__img__",
                                    category: "good"
                                }, {
                                    id: "__append__",
                                    name: "追评",
                                    count: 21,
                                    type: "__append__",
                                    category: "good"
                                }, {
                                    id: "__good__",
                                    name: "好评",
                                    count: 759,
                                    type: "__good__",
                                    category: "good"
                                }, {
                                    id: "7469df067d15d68342d004fd7a8f9975",
                                    name: "效果显著",
                                    count: 70,
                                    type: "7469df067d15d68342d004fd7a8f9975",
                                    category: "good"
                                }, {
                                    id: "222ce29a3b1728e0c663a84ef65ad4ba",
                                    name: "口感俱佳",
                                    count: 1,
                                    type: "222ce29a3b1728e0c663a84ef65ad4ba",
                                    category: "good"
                                }, {
                                    id: "4b72573381e407102b2d803de6830767",
                                    name: "速度蛮快",
                                    count: 1,
                                    type: "4b72573381e407102b2d803de6830767",
                                    category: "good"
                                }, {
                                    id: "00532e3e8e5d1f4a951c03de34116d5d",
                                    name: "传输速度快",
                                    count: 1,
                                    type: "00532e3e8e5d1f4a951c03de34116d5d",
                                    category: "good"
                                }],
                                total_count: 1992,
                                effective_count: 1992
                            },
                            content: [{
                                pid: 253309,
                                score: 5,
                                comment_id: 23831548,
                                pics: ["https://img.youpin.mi-img.com/comment/b3871470129bc9544bfe17333154f5b4.jpg?w=724&h=964", "https://img.youpin.mi-img.com/comment/df3bfb8a62f60de576fb6984207690f2.jpg?w=724&h=964", "https://img.youpin.mi-img.com/comment/5294b38f04b642687ebd286395b6b899.jpg?w=600&h=800", "https://img.youpin.mi-img.com/comment/4aa2deab125cb8f6ed190b9082a64b45.jpg?w=724&h=964", "https://img.youpin.mi-img.com/comment/30e825fe18ae5109b74b4b8a9186f1c0.jpg?w=724&h=964"],
                                comment_imgs: [{
                                    img: "https://img.youpin.mi-img.com/comment/b3871470129bc9544bfe17333154f5b4.jpg?w=724&h=964",
                                    thumbnail: "https://img.youpin.mi-img.com/comment/b3871470129bc9544bfe17333154f5b4.jpg@base@tag=imgScale&h=200&w=200"
                                }, {
                                    img: "https://img.youpin.mi-img.com/comment/df3bfb8a62f60de576fb6984207690f2.jpg?w=724&h=964",
                                    thumbnail: "https://img.youpin.mi-img.com/comment/df3bfb8a62f60de576fb6984207690f2.jpg@base@tag=imgScale&h=200&w=200"
                                }, {
                                    img: "https://img.youpin.mi-img.com/comment/5294b38f04b642687ebd286395b6b899.jpg?w=600&h=800",
                                    thumbnail: "https://img.youpin.mi-img.com/comment/5294b38f04b642687ebd286395b6b899.jpg@base@tag=imgScale&h=200&w=200"
                                }, {
                                    img: "https://img.youpin.mi-img.com/comment/4aa2deab125cb8f6ed190b9082a64b45.jpg?w=724&h=964",
                                    thumbnail: "https://img.youpin.mi-img.com/comment/4aa2deab125cb8f6ed190b9082a64b45.jpg@base@tag=imgScale&h=200&w=200"
                                }, {
                                    img: "https://img.youpin.mi-img.com/comment/30e825fe18ae5109b74b4b8a9186f1c0.jpg?w=724&h=964",
                                    thumbnail: "https://img.youpin.mi-img.com/comment/30e825fe18ae5109b74b4b8a9186f1c0.jpg@base@tag=imgScale&h=200&w=200"
                                }],
                                ctime: 1604848755,
                                text: "手机一直都是小米，有品上也买了不少东西，一天能抢到两瓶茅台很高兴，包装得很好，有平台防伪验证和防止中途拆封的标签，做得很棒，让人很放心，希望下个月还能有这样的运气",
                                txt: "手机一直都是小米，有品上也买了不少东西，一天能抢到两瓶茅台很高兴，包装得很好，有平台防伪验证和防止中途拆封的标签，做得很棒，让人很放心，希望下个月还能有这样的运气",
                                is_feature: !1,
                                _: 0,
                                avatar: "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p012M5Xawe1J/IHCxRqMTr44O5n.jpg",
                                nick_name: "吴*",
                                liked: !1,
                                like_count: 0
                            }],
                            __debug: {
                                pids: [253309],
                                product_id: 0,
                                data_source: "direct"
                            },
                            bigdata_meta: {
                                trace_kv: "requestId=abc4827496ca464ea991eae8ab7b926f&bucket=default&pids=253309&tag_ids=__all__&comment_count=1992&gid=135927"
                            }
                        }
                    }
                },
                getOrders: {
                    msg: "ok",
                    code: 0,
                    data: {
                        orders: [{
                            nickname: "2258621429",
                            avatar: "https://img.youpin.mi-img.com/editor1/b51712bb25c74a9003aeb6b73a0bafac.png?w=176&h=176"
                        }, {
                            nickname: "yang",
                            avatar: "https://img.youpin.mi-img.com/editor1/d485dfa91cab2b4cd0a3b957ff0a931c.png?w=200&h=200"
                        }, {
                            nickname: "2258621429",
                            avatar: "https://img.youpin.mi-img.com/editor1/b51712bb25c74a9003aeb6b73a0bafac.png?w=176&h=176"
                        }]
                    },
                    success: !0
                }
            };
        function Ne() {
            return "localStorage" in window && null !== window["localStorage"] && ua.app
        }
        var Ee = {
            setCache: function (t, e, n) {
                if (!Ne())
                    return !1;
                try {
                    Be[t].set(t, e, n)
                } catch (a) {
                    return console.log(a),
                        !1
                }
            },
            getCache: function (t, e) {
                if (!Ne())
                    return null;
                try {
                    return Be[t].get(t, e)
                } catch (n) {
                    return console.log(n),
                        null
                }
            }
        }
            , Be = {
                subscribeBuy_GetActInfo: {
                    get: function (t, e) {
                        var n = "".concat(t, "_").concat(e);
                        try {
                            var a = JSON.parse(localStorage.getItem(n));
                            return a.actStatusInfo.orderStartLeftTime = a.actStatusInfo.orderStartTime - Date.now(),
                                a.actStatusInfo.orderEndLeftTime = a.actStatusInfo.orderEndTime - Date.now(),
                                a.actStatusInfo.spikeLeftTime = a.actStatusInfo.spikeTime - Date.now(),
                                a.actStatusInfo.spikeEndLeftTime = a.actStatusInfo.spikeEndTime - Date.now() || 6e4,
                                a
                        } catch (i) {
                            return null
                        }
                    },
                    set: function (t, e, n) {
                        var a = "".concat(t, "_").concat(e)
                            , i = n.actStatusInfo.orderStartTime - n.actStatusInfo.orderStartLeftTime;
                        n.actStatusInfo.spikeEndTime = i + n.actStatusInfo.spikeEndLeftTime,
                            localStorage.setItem(a, JSON.stringify(n))
                    }
                },
                subscribeBuy_order: {
                    set: function (t, e, n) {
                        var a = "subscribeBuy_GetActInfo_".concat(e)
                            , i = JSON.parse(localStorage.getItem(a));
                        i.userStatusInfo.ordered = !0,
                            localStorage.setItem(a, JSON.stringify(i))
                    }
                },
                subscribeBuy_spike: {
                    set: function (t, e, n) {
                        var a = "subscribeBuy_GetActInfo_".concat(e)
                            , i = JSON.parse(localStorage.getItem(a))
                            , o = n && n.success || !1;
                        i.userStatusInfo.win = o,
                            i.userStatusInfo.spiked = o,
                            localStorage.setItem(a, JSON.stringify(i))
                    }
                }
            };
        function Ue(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                    n.push.apply(n, a)
            }
            return n
        }
        function Fe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ue(Object(n), !0).forEach((function (e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var He = ""
            , Re = 0;
        "http:" === location.protocol && window.args && "1" === window.args.mock && (Re = 1);
        var Me = function () {
            var t = Array.prototype.slice.call(arguments);
            return l["ua"].app ? setTimeout((function () {
                return l["toast"].apply(window, t)
            }
            ), 200) : l["toast"].apply(window, t)
        };
        function Ve(t) {
            return 0 === t.code ? Promise.resolve(Object.assign({}, JSON.parse(JSON.stringify(t.data)))) : (t.msg && Me(t.msg),
                Promise.reject(t))
        }
        var We = function (t) {
            var e = t.url
                , n = void 0 === e ? "" : e
                , a = t.data
                , o = void 0 === a ? {} : a
                , r = t.noToast
                , s = void 0 !== r && r
                , u = t.special
                , l = void 0 !== u && u
                , d = t.method
                , f = void 0 === d ? "get" : d
                , p = t.exp
                , m = void 0 === p ? [] : p
                , g = t.cacheConfig
                , h = void 0 === g ? {} : g
                , v = t.headers
                , b = void 0 === v ? {} : v
                , y = t.minRequestTime
                , C = void 0 === y ? 0 : y;
            return new Promise((function (t, e) {
                var a;
                C && (a = new Promise((function (t) {
                    return setTimeout((function () {
                        t(!0)
                    }
                    ), C)
                }
                ))),
                    $.ajax({
                        url: 0 === n.indexOf("http") ? n : He + n,
                        type: f,
                        contentType: "application/json",
                        dataType: "json",
                        timeout: 1e4,
                        headers: b,
                        cache: !1,
                        data: 0 === Object.keys(o).length ? "" : JSON.stringify(o),
                        success: function () {
                            var n = Object(c["a"])(regeneratorRuntime.mark((function n(o) {
                                var r;
                                return regeneratorRuntime.wrap((function (n) {
                                    while (1)
                                        switch (n.prev = n.next) {
                                            case 0:
                                                if (!(C > 0)) {
                                                    n.next = 3;
                                                    break
                                                }
                                                return n.next = 3,
                                                    a;
                                            case 3:
                                                if (!l) {
                                                    n.next = 5;
                                                    break
                                                }
                                                return n.abrupt("return", t(o));
                                            case 5:
                                                if (0 !== o.code) {
                                                    n.next = 10;
                                                    break
                                                }
                                                if (t(o.data),
                                                    !0 === h.cacheSet)
                                                    try {
                                                        Ee.setCache(h.name, h.key, o.data)
                                                    } catch (c) { }
                                                n.next = 17;
                                                break;
                                            case 10:
                                                if (!0 !== h.cacheGet) {
                                                    n.next = 15;
                                                    break
                                                }
                                                try {
                                                    r = Ee.getCache(h.name, h.key)
                                                } catch (c) {
                                                    console.log(c)
                                                }
                                                if (!r) {
                                                    n.next = 15;
                                                    break
                                                }
                                                return setTimeout((function () {
                                                    i["a"].prototype.$ypm.touch("readCache", 0, JSON.stringify({
                                                        cacheName: h.name,
                                                        apiDetail: o,
                                                        cacheDetail: r
                                                    }))
                                                }
                                                ), 0),
                                                    n.abrupt("return", t(r));
                                            case 15:
                                                !s && (o.message || o.msg) && m.indexOf(o.code) < 0 && Me(o.message || o.msg),
                                                    e(o);
                                            case 17:
                                            case "end":
                                                return n.stop()
                                        }
                                }
                                ), n)
                            }
                            )));
                            function o(t) {
                                return n.apply(this, arguments)
                            }
                            return o
                        }(),
                        error: function (t) {
                            s || Me("网络状态不佳，请稍后再试哦~"),
                                e({
                                    networkError: 1
                                })
                        }
                    })
            }
            ))
        }
            , Ge = function (t) {
                if (Re)
                    return Promise.resolve(Le.one);
                var e = [{}, "a2b09bb4e6a14b61b833b2feb03e24b4", t];
                return We({
                    url: "/mtop/mf/resource/data/one",
                    method: "post",
                    data: e,
                    special: !0
                })
            }
            , ze = function (t) {
                if (Re)
                    return Ve(Le.getActInfo);
                var e = [{}, {
                    actId: t
                }];
                return We({
                    url: "/mtop/act/orderspike/getActInfo",
                    method: "post",
                    cacheConfig: {
                        name: "subscribeBuy_GetActInfo",
                        cacheGet: !0,
                        cacheSet: !0,
                        key: t
                    },
                    data: e
                })
            }
            , Je = function () {
                if (Re)
                    return Promise.resolve(Le.verifyStatus);
                var t = [{}];
                return We({
                    url: "/mtop/market/ucenter/v2/userIdentity/verifyStatus",
                    method: "post",
                    special: !0,
                    noToast: !0,
                    data: t
                })
            }
            , qe = function (t, e) {
                if (Re)
                    return Ve(Le.order);
                var n = [{}, {
                    actId: e,
                    tel: t
                }];
                return We({
                    url: "/mtop/act/orderspike/order",
                    method: "post",
                    exp: [2030],
                    cacheConfig: {
                        name: "subscribeBuy_order",
                        cacheSet: !0,
                        key: e
                    },
                    data: n
                })
            }
            , Xe = function (t, e, n) {
                if (Re)
                    return Ve(Le.spike);
                var a = 800 + Math.floor(700 * Math.random())
                    , i = [{}, {
                        actId: t,
                        token: n
                    }];
                return We({
                    url: e || "/mtop/act/orderspike/spike",
                    method: "post",
                    data: i,
                    cacheConfig: {
                        name: "subscribeBuy_spike",
                        cacheSet: !0,
                        key: t
                    },
                    minRequestTime: a,
                    exp: [503, 418, 500, 407, 418],
                    headers: Fe({}, De["a"].c(i))
                })
            }
            , Ye = function (t) {
                if (Re)
                    return Ve(Le.winnerList);
                var e = [{}, {
                    actId: t
                }];
                return We({
                    url: "/mtop/act/orderspike/getWinners",
                    method: "post",
                    data: e,
                    noToast: !0
                })
            }
            , Ke = function (t) {
                if (Re)
                    return Ve(Le.getOrders);
                var e = [{}, {
                    actId: t
                }];
                return We({
                    url: "/mtop/act/orderspike/getOrders",
                    method: "post",
                    data: e,
                    noToast: !0
                })
            }
            , Qe = function (t) {
                if (Re)
                    return Ve(Le.getComment);
                var e = {
                    gid: t
                };
                return We({
                    url: "https://m.xiaomiyoupin.com/mtop/market/comment/product/top",
                    method: "post",
                    data: e,
                    special: !0,
                    noToast: !0
                })
            };
        i["a"].use(u["a"]);
        var Ze = new u["a"].Store({
            state: {
                actId: "",
                pageConfig: "",
                actConfig: ""
            },
            mutations: {
                setActId: function (t, e) {
                    t.actId = e
                },
                setPageConfig: function (t, e) {
                    t.pageConfig = e;
                    var n = e.pageTitle || "预约抢购";
                    document.title = n;
                    try {
                        var a = window.YPJsBridge || window.youpinBridge;
                        a && a.invoke && a.invoke("common", "titleChanged", n),
                            rnSendWebEvent("titleChanged", n)
                    } catch (i) { }
                },
                setActConfig: function (t, e) {
                    t.actConfig = e;

                    //TODO: hack
                    console.log('userStatusInfo:', t.actConfig.userStatusInfo)

                    try {
                        "1" === localStorage.getItem("spike_mt_fail_" + t.actId) && (t.actConfig.userStatusInfo.spiked = !0,
                            t.actConfig.userStatusInfo.win = !1,
                            i["a"].prototype.$ypm.touch("readCacheExtra"))
                    } catch (n) { }
                },
                changeActConfig: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.actStatusInfo && (t.actConfig.actStatusInfo = Object.assign(t.actConfig.actStatusInfo, e.actStatusInfo || {})),
                        e.userStatusInfo && (t.actConfig.userStatusInfo = Object.assign(t.actConfig.userStatusInfo, e.userStatusInfo || {}))
                }
            },
            getters: {
                status: function (t) {
                    if (!t.actConfig)
                        return 0;
                    var e = t.actConfig.userStatusInfo
                        , n = t.actConfig.actStatusInfo
                        , a = n.orderStartLeftTime
                        , i = n.orderEndLeftTime
                        , o = n.spikeLeftTime
                        , r = n.spikeEndLeftTime
                        , s = e.spiked
                        , c = e.ordered
                        , u = e.win;
                    return a > 0 ? 1 : a <= 0 && i > 0 ? c ? 3 : 2 : i <= 0 && o > 0 ? c ? 3 : 7 : o <= 0 && r > 0 ? c ? s ? u ? 6 : 5 : 4 : 7 : r <= 0 ? c ? s && u ? 6 : 5 : 7 : 999
                }
            }
        })
            , tn = n("f8dd");
        function en() {
            var t = Ze.state.actId;
            return "preorder_".concat(t)
        }
        try {
            /yptuishou/.test(navigator.userAgent) && (l["ua"].app = !1)
        } catch (dn) { }
        var nn = {
            $vx: Ze,
            $bus: $e,
            $isApp: l["ua"].app,
            $showToast: l["toast"],
            $api: a,
            $url: function (t) {
                var e = this
                    , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                    , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (t) {
                    var i = Object(l["addParam"])(t, "spmref", tn["a"].getSpm({
                        b: "".concat(a.b || en() || "0"),
                        c: "".concat(a.c || "0"),
                        d: "".concat(a.d || "0")
                    }));
                    setTimeout((function () {
                        n && e.$isApp ? Object(l["openNewWeb"])(i) : Object(l["jumpTo"])(i)
                    }
                    ), 20)
                }
            },
            $args: l["args"],
            $ypm: {
                touch: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    n = n || "status=".concat(Ze.getters.status);
                    var a = {
                        b: "".concat(en()),
                        c: t,
                        d: e
                    };
                    return tn["a"].touch(t, encodeURIComponent(n), {
                        spm: a
                    }),
                        a
                },
                view: function () {
                    tn["a"].view(en(), location.href, "", "", {})
                },
                visible: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                        , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    n = "status=".concat(Ze.getters.status);
                    var a = {
                        b: "".concat(en()),
                        c: t,
                        d: e
                    };
                    return tn["a"].visible(t, encodeURIComponent(n), {
                        spm: a
                    }),
                        a
                },
                context: tn["a"]
            }
        }
            , an = function (t) {
                Object.assign(t.prototype, nn)
            }
            , on = n("3a34")
            , rn = n.n(on)
            , sn = n("85fe")
            , cn = n("caf9");
        if ("http:" === window.location.protocol && window.args && window.args.vConsole) {
            var un = new rn.a;
            i["a"].use(un)
        }
        i["a"].use(cn["a"]),
            i["a"].use(Pe["a"]);
        var ln = new Pe["a"]({
            mode: "history"
        });
        an(i["a"]),
            i["a"].config.productionTip = !1,
            i["a"].directive("observe-visibility", sn["a"]),
            new i["a"]({
                store: Ze,
                render: function (t) {
                    return t(xe)
                },
                router: ln
            }).$mount("#app")
    },
    c6b6: function (t, e, n) {
        "use strict";
        var a = n("1ebe")
            , i = n.n(a);
        i.a
    },
    d579: function (t, e, n) { },
    dc9c: function (t, e, n) {
        "use strict";
        var a = n("3fd9")
            , i = n.n(a);
        i.a
    },
    f10c: function (t, e, n) { },
    ffc9: function (t, e, n) {
        "use strict";
        var a = n("f10c")
            , i = n.n(a);
        i.a
    }
});
