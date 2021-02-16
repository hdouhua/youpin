(function () {
    function l(r, h) {
        var p;
        if (r) {
            for (var o, q = h ? 1 : 0; o = i[q++];) {
                if (p = j[o]) {
                    for (var m, n = 0; (m = p[n]) && !0 !== r(o, m); n++) { }
                }
            }
        }
    }
    function k(h) {
        var c;
        l(function (m, d) {
            if ((h + "").toUpperCase() === d.B) {
                return c = c || d,
                    !0
            }
        });
        return c
    }
    function e(h) {
        var c;
        l(function (n, d) {
            h = (h + "").replace(/^0+/, "").replace(/^\+/, "");
            var m = (d.N + "").replace(/^0+/, "").replace(/^\+/, "");
            h === m && (c = d)
        });
        return c
    }
    function g(h) {
        var c;
        l(function (m, d) {
            if ((h + "").toLowerCase() === d.C.toLowerCase()) {
                return c = d,
                    !0
            }
        });
        return c
    }
    function f(d) {
        return k(d) || e(d) || g(d)
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
        , j = {};
    if (JSP_VAR) {
        var j = JSP_VAR.areaConfig
            , b = JSP_VAR.locale;
        //TODO: hack
        JSP_VAR.deviceType = 'PC';
        // JSP_VAR.theme = '';
        // JSP_VAR.bizDeviceType = '';

        0 === b.indexOf("zh") && (b = "zh_CN" === b ? "zh_CN" : "zh_TW")
    }
    window.RegionsCode = {
        getAll: function (t, s, p) {
            for (var m = ["<div class='country-code'>"], r, u, q, o = 0; u = i[o++];) {
                if (r = j[u],
                    q = "",
                    t && u in t && (q = t[u]),
                    r) {
                    m.push("<div class='container countrycode-container-" + u + "'><div class='header'>" + (q || u) + "</div>");
                    m.push("<ul class='list'>");
                    for (var n = 0; q = r[n++];) {
                        u = s ? (q.N + "").replace(/^0+/, function () {
                            return "+"
                        }) : "",
                            m.push("<li class='record clearfix'><span class='record-country' data-code='" + u + "' data-brief='" + q.B + "'>" + q.C + "</span><span class='record-code'>" + u + "</span></li>")
                    }
                    m.push("</ul></div>")
                }
            }
            t = cancelStr = "";
            cancelStr = JSP_VAR && JSP_VAR.cancel ? JSP_VAR.cancel : "Cancel";
            p ? t = "" : t = '<div class="cancel_panel"><div class="cancel_box"><a class="btnadpt bg_white btn-cancel" href="javascript:void(0);">' + cancelStr + "</a></div></div>";
            m.push("</div>");
            m.push(t);
            m.push('<div class="navbar_panel"><div class="navbar">');
            for (p = 0; 26 > p; p++) {
                t = String.fromCharCode(65 + p),
                    m.push('<a to="' + t + '">' + t + "</a>")
            }
            m.push("</div></div>");
            return m.join("")
        },
        getData: function () {
            return {
                list: i,
                data: j
            }
        },
        getByBrief: k,
        getByCode: e,
        getByCountry: g,
        search: f,
        searchLike: function (n) {
            var m = [];
            if (n = (n + "").replace(/^\+/, "")) {
                var c = f(n);
                c && m.push(c);
                l(function (o, d) {
                    -1 !== d.C.toLowerCase().indexOf(n) ? m.push(d) : -1 !== (d.N + "").indexOf(n) && m.push(d)
                })
            }
            return m
        },
        searchLikeData: function (n) {
            var m = [];
            if (n = (n + "").replace(/^\+/, "")) {
                var c = f(n);
                c && m.push(c);
                l(function (o, d) {
                    RegExp("^" + n, "i").test(d.C.toLowerCase()) ? m.push(d) : RegExp("^" + n).test(d.N.replace(/^\+/, "")) && m.push(d)
                })
            }
            return m
        },
        addUsual: function (o) {
            var n;
            if (n = o.B) {
                if (n = o.C) {
                    if (n = o.N) {
                        a: if (j.usual) {
                            n = 0;
                            for (var m; m = j.usual[n++];) {
                                if (m.N === o.N || o.B === m.B) {
                                    n = !0;
                                    break a
                                }
                            }
                            n = !1
                        } else {
                            n = void 0
                        }
                        n = !n
                    }
                }
            }
            n && j.usual && j.usual.unshift(o)
        }
    }
}
)();
var Base64 = function () {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    _utf8_encode = function (g) {
        g = g.replace(/\r\n/g, "\n");
        for (var f = "", b = 0; b < g.length; b++) {
            var e = g.charCodeAt(b);
            128 > e ? f += String.fromCharCode(e) : (127 < e && 2048 > e ? f += String.fromCharCode(e >> 6 | 192) : (f += String.fromCharCode(e >> 12 | 224),
                f += String.fromCharCode(e >> 6 & 63 | 128)),
                f += String.fromCharCode(e & 63 | 128))
        }
        return f
    }
        ;
    _utf8_decode = function (g) {
        for (var f = "", b = 0, e = c1 = c2 = 0; b < g.length;) {
            e = g.charCodeAt(b),
                128 > e ? (f += String.fromCharCode(e),
                    b++) : 191 < e && 224 > e ? (c2 = g.charCodeAt(b + 1),
                        f += String.fromCharCode((e & 31) << 6 | c2 & 63),
                        b += 2) : (c2 = g.charCodeAt(b + 1),
                            c3 = g.charCodeAt(b + 2),
                            f += String.fromCharCode((e & 15) << 12 | (c2 & 63) << 6 | c3 & 63),
                            b += 3)
        }
        return f
    }
        ;
    return {
        encode: function (i) {
            var g = "", l, f, m, b, j, e, k = 0;
            for (i = _utf8_encode(i); k < i.length;) {
                l = i.charCodeAt(k++),
                    f = i.charCodeAt(k++),
                    m = i.charCodeAt(k++),
                    b = l >> 2,
                    l = (l & 3) << 4 | f >> 4,
                    j = (f & 15) << 2 | m >> 6,
                    e = m & 63,
                    isNaN(f) ? j = e = 64 : isNaN(m) && (e = 64),
                    g = g + _keyStr.charAt(b) + _keyStr.charAt(l) + _keyStr.charAt(j) + _keyStr.charAt(e)
            }
            return g
        },
        decode: function (l) {
            var k = "", e, g, f, i, j, b = 0;
            for (l = l.replace(/[^A-Za-z0-9\+\/\=]/g, ""); b < l.length;) {
                e = _keyStr.indexOf(l.charAt(b++)),
                    g = _keyStr.indexOf(l.charAt(b++)),
                    i = _keyStr.indexOf(l.charAt(b++)),
                    j = _keyStr.indexOf(l.charAt(b++)),
                    e = e << 2 | g >> 4,
                    g = (g & 15) << 4 | i >> 2,
                    f = (i & 3) << 6 | j,
                    k += String.fromCharCode(e),
                    64 != i && (k += String.fromCharCode(g)),
                    64 != j && (k += String.fromCharCode(f))
            }
            return k = _utf8_decode(k)
        }
    }
}()
    , CryptoJS = CryptoJS || function (m, l) {
        var q = {}
            , i = q.lib = {}
            , s = function () { }
            , b = i.Base = {
                extend: function (h) {
                    s.prototype = this;
                    var g = new s;
                    h && g.mixIn(h);
                    g.hasOwnProperty("init") || (g.init = function () {
                        g.$super.init.apply(this, arguments)
                    }
                    );
                    g.init.prototype = g;
                    g.$super = this;
                    return g
                },
                create: function () {
                    var d = this.extend();
                    d.init.apply(d, arguments);
                    return d
                },
                init: function () { },
                mixIn: function (h) {
                    for (var g in h) {
                        h.hasOwnProperty(g) && (this[g] = h[g])
                    }
                    h.hasOwnProperty("toString") && (this.toString = h.toString)
                },
                clone: function () {
                    return this.init.prototype.extend(this)
                }
            }
            , n = i.WordArray = b.extend({
                init: function (h, d) {
                    h = this.words = h || [];
                    this.sigBytes = d != l ? d : 4 * h.length
                },
                toString: function (d) {
                    return (d || p).stringify(this)
                },
                concat: function (w) {
                    var v = this.words
                        , t = w.words
                        , r = this.sigBytes;
                    w = w.sigBytes;
                    this.clamp();
                    if (r % 4) {
                        for (var u = 0; u < w; u++) {
                            v[r + u >>> 2] |= (t[u >>> 2] >>> 24 - u % 4 * 8 & 255) << 24 - (r + u) % 4 * 8
                        }
                    } else {
                        if (65535 < t.length) {
                            for (u = 0; u < w; u += 4) {
                                v[r + u >>> 2] = t[u >>> 2]
                            }
                        } else {
                            v.push.apply(v, t)
                        }
                    }
                    this.sigBytes += w;
                    return this
                },
                clamp: function () {
                    var h = this.words
                        , c = this.sigBytes;
                    h[c >>> 2] &= 4294967295 << 32 - c % 4 * 8;
                    h.length = m.ceil(c / 4)
                },
                clone: function () {
                    var d = b.clone.call(this);
                    d.words = this.words.slice(0);
                    return d
                },
                random: function (t) {
                    for (var r = [], c = 0; c < t; c += 4) {
                        r.push(4294967296 * m.random() | 0)
                    }
                    return new n.init(r, t)
                }
            })
            , f = q.enc = {}
            , p = f.Hex = {
                stringify: function (w) {
                    var v = w.words;
                    w = w.sigBytes;
                    for (var t = [], r = 0; r < w; r++) {
                        var u = v[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        t.push((u >>> 4).toString(16));
                        t.push((u & 15).toString(16))
                    }
                    return t.join("")
                },
                parse: function (v) {
                    for (var u = v.length, t = [], r = 0; r < u; r += 2) {
                        t[r >>> 3] |= parseInt(v.substr(r, 2), 16) << 24 - r % 8 * 4
                    }
                    return new n.init(t, u / 2)
                }
            }
            , j = f.Latin1 = {
                stringify: function (v) {
                    var u = v.words;
                    v = v.sigBytes;
                    for (var t = [], r = 0; r < v; r++) {
                        t.push(String.fromCharCode(u[r >>> 2] >>> 24 - r % 4 * 8 & 255))
                    }
                    return t.join("")
                },
                parse: function (v) {
                    for (var u = v.length, t = [], r = 0; r < u; r++) {
                        t[r >>> 2] |= (v.charCodeAt(r) & 255) << 24 - r % 4 * 8
                    }
                    return new n.init(t, u)
                }
            }
            , o = f.Utf8 = {
                stringify: function (h) {
                    try {
                        return decodeURIComponent(escape(j.stringify(h)))
                    } catch (g) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function (d) {
                    return j.parse(unescape(encodeURIComponent(d)))
                }
            }
            , e = i.BufferedBlockAlgorithm = b.extend({
                reset: function () {
                    this._data = new n.init;
                    this._nDataBytes = 0
                },
                _append: function (d) {
                    "string" == typeof d && (d = o.parse(d));
                    this._data.concat(d);
                    this._nDataBytes += d.sigBytes
                },
                _process: function (x) {
                    var u = this._data
                        , r = u.words
                        , w = u.sigBytes
                        , v = this.blockSize
                        , y = w / (4 * v)
                        , y = x ? m.ceil(y) : m.max((y | 0) - this._minBufferSize, 0);
                    x = y * v;
                    w = m.min(4 * x, w);
                    if (x) {
                        for (var c = 0; c < x; c += v) {
                            this._doProcessBlock(r, c)
                        }
                        c = r.splice(0, x);
                        u.sigBytes -= w
                    }
                    return new n.init(c, w)
                },
                clone: function () {
                    var d = b.clone.call(this);
                    d._data = this._data.clone();
                    return d
                },
                _minBufferSize: 0
            });
        i.Hasher = e.extend({
            cfg: b.extend(),
            init: function (d) {
                this.cfg = this.cfg.extend(d);
                this.reset()
            },
            reset: function () {
                e.reset.call(this);
                this._doReset()
            },
            update: function (d) {
                this._append(d);
                this._process();
                return this
            },
            finalize: function (d) {
                d && this._append(d);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function (d) {
                return function (h, c) {
                    return (new d.init(c)).finalize(h)
                }
            },
            _createHmacHelper: function (d) {
                return function (h, c) {
                    return (new k.HMAC.init(d, c)).finalize(h)
                }
            }
        });
        var k = q.algo = {};
        return q
    }(Math);
(function (k) {
    function j(y, x, v, s, r, q, w) {
        y = y + (x & v | ~x & s) + r + w;
        return (y << q | y >>> 32 - q) + x
    }
    function o(y, x, v, s, r, q, w) {
        y = y + (x & s | v & ~s) + r + w;
        return (y << q | y >>> 32 - q) + x
    }
    function f(y, x, v, s, r, q, w) {
        y = y + (x ^ v ^ s) + r + w;
        return (y << q | y >>> 32 - q) + x
    }
    function p(y, x, v, s, r, q, w) {
        y = y + (v ^ (x | ~s)) + r + w;
        return (y << q | y >>> 32 - q) + x
    }
    for (var b = CryptoJS, l = b.lib, e = l.WordArray, n = l.Hasher, l = b.algo, i = [], m = 0; 64 > m; m++) {
        i[m] = 4294967296 * k.abs(k.sin(m + 1)) | 0
    }
    l = l.MD5 = n.extend({
        _doReset: function () {
            this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (X, M) {
            for (var L = 0; 16 > L; L++) {
                var u = M + L
                    , s = X[u];
                X[u] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360
            }
            var L = this._hash.words
                , u = X[M + 0]
                , s = X[M + 1]
                , Q = X[M + 2]
                , W = X[M + 3]
                , t = X[M + 4]
                , d = X[M + 5]
                , O = X[M + 6]
                , H = X[M + 7]
                , G = X[M + 8]
                , C = X[M + 9]
                , K = X[M + 10]
                , g = X[M + 11]
                , R = X[M + 12]
                , D = X[M + 13]
                , h = X[M + 14]
                , Y = X[M + 15]
                , U = L[0]
                , P = L[1]
                , N = L[2]
                , S = L[3]
                , U = j(U, P, N, S, u, 7, i[0])
                , S = j(S, U, P, N, s, 12, i[1])
                , N = j(N, S, U, P, Q, 17, i[2])
                , P = j(P, N, S, U, W, 22, i[3])
                , U = j(U, P, N, S, t, 7, i[4])
                , S = j(S, U, P, N, d, 12, i[5])
                , N = j(N, S, U, P, O, 17, i[6])
                , P = j(P, N, S, U, H, 22, i[7])
                , U = j(U, P, N, S, G, 7, i[8])
                , S = j(S, U, P, N, C, 12, i[9])
                , N = j(N, S, U, P, K, 17, i[10])
                , P = j(P, N, S, U, g, 22, i[11])
                , U = j(U, P, N, S, R, 7, i[12])
                , S = j(S, U, P, N, D, 12, i[13])
                , N = j(N, S, U, P, h, 17, i[14])
                , P = j(P, N, S, U, Y, 22, i[15])
                , U = o(U, P, N, S, s, 5, i[16])
                , S = o(S, U, P, N, O, 9, i[17])
                , N = o(N, S, U, P, g, 14, i[18])
                , P = o(P, N, S, U, u, 20, i[19])
                , U = o(U, P, N, S, d, 5, i[20])
                , S = o(S, U, P, N, K, 9, i[21])
                , N = o(N, S, U, P, Y, 14, i[22])
                , P = o(P, N, S, U, t, 20, i[23])
                , U = o(U, P, N, S, C, 5, i[24])
                , S = o(S, U, P, N, h, 9, i[25])
                , N = o(N, S, U, P, W, 14, i[26])
                , P = o(P, N, S, U, G, 20, i[27])
                , U = o(U, P, N, S, D, 5, i[28])
                , S = o(S, U, P, N, Q, 9, i[29])
                , N = o(N, S, U, P, H, 14, i[30])
                , P = o(P, N, S, U, R, 20, i[31])
                , U = f(U, P, N, S, d, 4, i[32])
                , S = f(S, U, P, N, G, 11, i[33])
                , N = f(N, S, U, P, g, 16, i[34])
                , P = f(P, N, S, U, h, 23, i[35])
                , U = f(U, P, N, S, s, 4, i[36])
                , S = f(S, U, P, N, t, 11, i[37])
                , N = f(N, S, U, P, H, 16, i[38])
                , P = f(P, N, S, U, K, 23, i[39])
                , U = f(U, P, N, S, D, 4, i[40])
                , S = f(S, U, P, N, u, 11, i[41])
                , N = f(N, S, U, P, W, 16, i[42])
                , P = f(P, N, S, U, O, 23, i[43])
                , U = f(U, P, N, S, C, 4, i[44])
                , S = f(S, U, P, N, R, 11, i[45])
                , N = f(N, S, U, P, Y, 16, i[46])
                , P = f(P, N, S, U, Q, 23, i[47])
                , U = p(U, P, N, S, u, 6, i[48])
                , S = p(S, U, P, N, H, 10, i[49])
                , N = p(N, S, U, P, h, 15, i[50])
                , P = p(P, N, S, U, d, 21, i[51])
                , U = p(U, P, N, S, R, 6, i[52])
                , S = p(S, U, P, N, W, 10, i[53])
                , N = p(N, S, U, P, K, 15, i[54])
                , P = p(P, N, S, U, s, 21, i[55])
                , U = p(U, P, N, S, G, 6, i[56])
                , S = p(S, U, P, N, Y, 10, i[57])
                , N = p(N, S, U, P, O, 15, i[58])
                , P = p(P, N, S, U, D, 21, i[59])
                , U = p(U, P, N, S, t, 6, i[60])
                , S = p(S, U, P, N, g, 10, i[61])
                , N = p(N, S, U, P, Q, 15, i[62])
                , P = p(P, N, S, U, C, 21, i[63]);
            L[0] = L[0] + U | 0;
            L[1] = L[1] + P | 0;
            L[2] = L[2] + N | 0;
            L[3] = L[3] + S | 0
        },
        _doFinalize: function () {
            var v = this._data
                , u = v.words
                , q = 8 * this._nDataBytes
                , s = 8 * v.sigBytes;
            u[s >>> 5] |= 128 << 24 - s % 32;
            var c = k.floor(q / 4294967296);
            u[(s + 64 >>> 9 << 4) + 15] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            u[(s + 64 >>> 9 << 4) + 14] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360;
            v.sigBytes = 4 * (u.length + 1);
            this._process();
            v = this._hash;
            u = v.words;
            for (q = 0; 4 > q; q++) {
                s = u[q],
                    u[q] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360
            }
            return v
        },
        clone: function () {
            var d = n.clone.call(this);
            d._hash = this._hash.clone();
            return d
        }
    });
    b.MD5 = n._createHelper(l);
    b.HmacMD5 = n._createHmacHelper(l)
}
)(Math);
(function (c, d, u) {
    function h(a, f) {
        return f ? a.getFullYear() + "-" + (a.getMonth() + 1) : a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ":" + a.getMilliseconds()
    }
    function t(a, f) {
        if (Array.prototype.forEach) {
            Array.prototype.forEach.call(a, f)
        } else {
            for (var b = 0, c = a.length; b < c; b++) {
                f.call(a, a[b], b)
            }
        }
    }
    function r(a) {
        return (a + "").replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function z(a) {
        return (a + "").replace(/\</g, "&lt").replace(/\>/g, "&gt")
    }
    function A(a, f, b, c, e, g) {
        var h = new Date;
        h.setDate(h.getDate() + b);
        d.cookie = a + "=" + encodeURIComponent(f) + ";expires=" + h.toGMTString() + ";path=" + c + ";domain=" + e + (null == g ? "" : ";max-age=" + g)
    }
    function J(a, f, b) {
        A(a, "", new Date(0), f, b)
    }
    function g(a) {
        for (var f = d.cookie.split(";"), b = "", c = 0; c < f.length; c++) {
            if (r(f[c]).substr(0, a.length) == a) {
                b = r(f[c]).substr(a.length + 1);
                break
            }
        }
        return decodeURIComponent(b)
    }
    function y(a) {
        var f = ""
            , b = !1;
        if (0 === location.search.length) {
            return f
        }
        if (0 == location.search.indexOf("?") && 1 < location.search.indexOf("=")) {
            for (arrSource = location.search.substring(1, location.search.length).split("&"),
                P = 0; P < arrSource.length && !b;) {
                0 < arrSource[P].indexOf("=") && arrSource[P].split("=")[0].toLowerCase() == a.toLowerCase() && (f = arrSource[P].split("=")[1],
                    b = !0),
                    P++
            }
        }
        return f
    }
    function C(a, f) {
        if (a === f) {
            return !0
        }
        if (a.constructor !== f.constructor || !(a instanceof Object && f instanceof Object)) {
            return !1
        }
        for (var b in a) {
            if (a.hasOwnProperty(b) && (!f.hasOwnProperty(b) || a[b] !== f[b])) {
                return !1
            }
        }
        for (b in f) {
            if (f.hasOwnProperty(b) && !a.hasOwnProperty(b)) {
                return !1
            }
        }
        return !0
    }
    function M(a, f, b) {
        if (!f) {
            return a
        }
        b = b || /\{([\w-]+)\}/g;
        a = E(a);
        return a.replace(b, function (a, d) {
            if (f[d] !== u) {
                var e;
                e = f[d] instanceof Function ? f[d].call(f) : E(f[d]);
                return b.test(e) ? M(e, f, b) : e
            }
            return c.__debug__ ? d : ""
        })
    }
    function E(a) {
        var f = {
            "&quot;": '"',
            "&#39;": "'"
        }, b;
        for (b in f) {
            f.hasOwnProperty(b) && (a = (a + "").replace(RegExp(b, "g"), f[b]))
        }
        return a
    }
    function N(a, f) {
        s.add("objectExtend", f);
        for (var b in f) {
            a[b] = f[b]
        }
        return a
    }
    function za(a) {
        for (var f in a) {
            return !1
        }
        return !0
    }
    function Aa(a) {
        try {
            return Array.prototype.slice.call(a, 0)
        } catch (f) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
                b.push(a[c])
            }
            return b
        }
    }
    function e(a, f) {
        a = a || "";
        f = f || d;
        if (0 === a.indexOf("#")) {
            return f.getElementById(a.substring(1))
        }
        var b = [];
        if (/^[a-zA-Z]{1,}$/.test(a)) {
            b = Aa(f.getElementsByTagName(a))
        } else {
            if (0 === a.indexOf(".")) {
                if (f.querySelectorAll) {
                    b = Aa(f.querySelectorAll(a))
                } else {
                    for (var c = f.getElementsByTagName("*"), e = a.substring(1), g = 0, h = c.length; g < h; g++) {
                        I(c[g], e) && b.push(c[g])
                    }
                }
            }
        }
        return b
    }
    function Ia(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    function Z(a, f) {
        for (var b = 0, c = a.length; b < c; b++) {
            if (a[b] === f) {
                return !0
            }
        }
        return !1
    }
    function B(a, f) {
        a && 1 === a.nodeType && ("none" === a.style.display ? a.style.display = f ? "block" : a._oldDisplay || "" : f && (a.style.display = "block"))
    }
    function v(a) {
        a && 1 === a.nodeType && "none" !== a.style.display && (a._oldDisplay = a.style.display || "",
            a.style.display = "none")
    }
    function w(a, f) {
        if (Ia(a)) {
            for (var b = 0, c = a.length; b < c; b++) {
                w(a[b], f)
            }
        } else {
            I(a, f) || (a.className = "" === a.className ? f : a.className + (" " + f))
        }
    }
    function I(a, f) {
        if (a.className) {
            var b = a.className.split(/\s+/);
            b.unshift("000");
            b.push("000");
            return 2 < b.length && -1 < b.join(",").indexOf("," + f + ",")
        }
        return !1
    }
    function F(a, f) {
        if (Ia(a)) {
            for (var b = 0, c = a.length; b < c; b++) {
                F(a[b], f)
            }
        } else {
            if (I(a, f)) {
                for (var b = a.className.split(/\s+/), c = 0, d = b.length; c < d; c++) {
                    if (f === b[c]) {
                        b.splice(c, 1);
                        break
                    }
                }
                a.className = b.join(" ")
            }
        }
    }
    function V(a, f) {
        var b = ("getComputedStyle" in c ? c.getComputedStyle(a) : a.currentStyle)[f];
        if ("width" === f || "height" === f) {
            b = Math.max(parseInt(b) || 0, a["client" + ca(f)], a["offset" + ca(f)])
        }
        return b
    }
    function ca(a) {
        return (a + "").replace(/^[a-z]/, function (a) {
            return a.toUpperCase()
        })
    }
    function x(a, f, b) {
        a.addEventListener ? a.addEventListener(f, b, !1) : a.attachEvent ? a.attachEvent("on" + f, b) : a["on" + f] = b
    }
    function T(a, f) {
        try {
            a[f]()
        } catch (b) { }
    }
    function da(a) {
        return "string" === typeof a ? c.JSON && c.JSON.parse ? c.JSON.parse(a) : eval("(" + a + ")") : a
    }
    function m(a) {
        var f = {};
        a = (a + "").replace("&&&START&&&", "");
        try {
            f = da(a)
        } catch (b) { }
        return f
    }
    function p(a) {
        if (c.JSON && c.JSON.stringify) {
            return c.JSON.stringify(a)
        }
        var f = [];
        if ("object" == typeof a) {
            if (a instanceof Array) {
                var b = [];
                f.push("[");
                for (var d = 0; d < a.length; d++) {
                    b.push(p(a[d]))
                }
                f.push(b.join());
                f.push("]")
            } else {
                if (null != a) {
                    f.push("{");
                    b = [];
                    for (d in a) {
                        b.push('"' + d + '":' + p(a[d]))
                    }
                    f.push(b.join());
                    f.push("}")
                }
            }
            return f.join("")
        }
        return "number" !== typeof a ? '"' + (a || "") + '"' : a
    }
    function q(a) {
        var f = [], b = "", c;
        for (c in a) {
            b = typeof a[c],
                "object" !== b || "number" == b ? f.push(c + "=" + a[c]) : f.push(c + "=" + encodeURIComponent(q(a[c])))
        }
        return f.join("&")
    }
    function n(a, f) {
        var b = d.createElement("input");
        if (!("placeholder" in b || b._initedplace)) {
            b._initedplace = !0;
            var c = a.getAttribute("placeholder")
                , e = a.id || a.name
                , g = a.className;
            b.value = c;
            b.id = e + "_pla";
            b.className = g;
            w(a, "hideimportant");
            a.setAttribute("pla_id", e + "_pla");
            b.setAttribute("for_id", e);
            b.style.color = "#999";
            a.parentNode.insertBefore(b, a);
            x(b, "focus", function () {
                w(b, "hideimportant");
                F(a, "hideimportant");
                a.focus()
            });
            x(a, "blur", function () {
                "" == r(a.value) && (w(a, "hideimportant"),
                    F(b, "hideimportant"))
            });
            f && (a.value = "",
                w(a, "hideimportant"),
                F(b, "hideimportant"));
            try {
                a.focus(),
                    a.blur()
            } catch (h) { }
        }
    }
    function Ub(a, f, b) {
        var c = d.createElement(a);
        "script" === a ? (c.type = "text/script",
            c.src = f,
            d.body.appendChild(c)) : (c.rel = "stylesheet",
                c.type = "text/css",
                c.href = f,
                "v3" === b ? d.getElementsByTagName("head")[0].appendChild(c) : (a = d.getElementsByTagName("script").length,
                    a = d.getElementsByTagName("script")[a - 1],
                    a.parentNode.insertBefore(c, a)))
    }
    function Vb(a) {
        x(a, "focus", function () {
            db(a)
        });
        x(a, "blur", function () {
            clearTimeout(a.__checkInputTC)
        })
    }
    function db(a) {
        var f = a.value, b = "__oldVal" in a ? a.__oldVal : a.__oldVal = f, c = a._inputChangeFns, d;
        if (f !== b) {
            for (var e = 0; e < c.length; e++) {
                "function" === typeof c[e] && !1 === c[e].call(a, f, b, a.__reset) && (d = !1)
            }
        }
        !1 !== d && (a.__oldVal = f);
        a.__reset && (a.__reset = !1);
        a.__checkInputTC = setTimeout(function () {
            db(a)
        }, 50)
    }
    function eb(a) {
        this.key = a || "account.xiaomi.com"
    }
    function Wb(a) {
        if ("object" !== typeof a) {
            return a
        }
        var f = [], b;
        for (b in a) {
            f.push(b + "=" + encodeURIComponent(a[b]))
        }
        return f.join("&")
    }
    function fb(a) {
        this.id = Xb++;
        for (var f in a) {
            a.hasOwnProperty(f) && (this[f] = a[f])
        }
        this.xhr = new (c.XMLHttpRequest || c.ActiveXObject)("Microsoft.XMLHTTP");
        this.request()
    }
    function ka(a) {
        a = a || {};
        var f = Yb, b = {}, c;
        for (c in f) {
            c in b || c in a || (a[c] = f[c])
        }
        this.opt = a;
        this.init()
    }
    function Zb(a) {
        qa.on(function (f, b) {
            a.style.height = Math.max(f.height, b.height) + "px";
            a.style.width = b.width + "px"
        });
        qa.onbeforeResize(function () {
            a.style.height = "auto";
            a.style.width = "100%"
        })
    }
    function gb(a) {
        a = a || [];
        for (var f = "", b = 0; b < a.length; b++) {
            f = "function" === typeof a[b] ? f + a[b]() : f + hb.get(a[b])
        }
        return f
    }
    function ib() {
        var a = ""
            , f = "dataCenterZone locale env browser search DefaultRegion outerlinkDone captchaNeed loginType addInputChange manualCode getSmsCode sendServiceLoginTicketLog selectCode resisterResult registerError registerTimeout loginCode recyclePhoneInit loginOrigin resisterOrigin".split(" ");
        t(s.get(), function (b) {
            try {
                var c = {
                    title: b.title,
                    message: b.message
                };
                Z(f, b.title) && (a += z(p(c)))
            } catch (d) {
                a += "stringfy \u51fa\u9519<br>"
            }
        });
        return a
    }
    function ra(a, f) {
        L({
            biz: "loginQr",
            type: k.tickType,
            step: 0
        });
        b.qrIframe.height = k.qrsize;
        b.qrIframe.width = k.qrsize;
        var c = b.qrIframe
            , d = k.qrsize
            , e = ""
            , g = JSP_VAR;
        y("callback") && y("sid") && (g = location.search);
        if ("object" === typeof g) {
            for (var h in g) {
                g.hasOwnProperty(h) && g[h] && (e += "&" + h + "=" + encodeURIComponent(g[h]))
            }
            e = "?" + e.substring(1)
        } else {
            e = g
        }
        c.src = "/pass/lp" + e + "&_qrsize=" + d;
        B(b.loginQr, !0);
        c = V(b.layout, "height");
        d = V(b.layout, "width");
        b.loginQr.style.width = d + "px";
        "tab" === f ? b.loginQr.style.height = c - 82 + "px" : v(b.loginMain);
        !0 === a && w(b.body, "only_qrlogin");
        return !1
    }
    function Ba(a) {
        b.qrIframe.src = "about:blank";
        v(b.loginQr);
        B(b.loginMain, !0);
        !0 === a && w(b.body, "only_pwdlogin");
        return !1
    }
    function $b(a) {
        var f = jb(a)
            , b = kb[a]
            , c = "";
        f && b && (c = M('<a href="{url}" class="btnadpt btn_{type} sns-login-link" title="{text}" data-type="{type}">                       <i class="btn_sns_icontype icon_default_{type}"></i><span>{text}</span>                     </a>', {
            url: f,
            type: a,
            text: b
        }));
        return c
    }
    function la(a, f, b) {
        a = e("input", a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c]
                , g = d.name;
            if ("" === g || "hidden" === d.type || "none" === d.style.display && g !== b || g === f) {
                a.splice(c, 1),
                    c--
            }
        }
        return a
    }
    function ac(a, f, c, d) {
        f = r(f);
        if ("user" === a) {
            if (f !== l.maskedPhone) {
                return "tel" === c ? lb(f) : !1 === Ja(f) ? !1 : !0
            }
        } else {
            if ("password" === a) {
                if ("number" === c || "tel" === c) {
                    return /^\d{4,6}$/.test(f)
                }
                if (I(d, "set-password")) {
                    return !(8 > f.length || 16 < f.length || /^\d+$/.test(f) || /^[A-Za-z]+$/.test(f) || /^[^A-Za-z0-9]+$/.test(f))
                }
            } else {
                if ("captCode" === a) {
                    return /^\w{4,8}$/.test(f)
                }
                if ("repassword" === a) {
                    return f === b.rePwd.value
                }
            }
        }
        return !0
    }
    function Ka(a, f, c) {
        a = la(a, f);
        f = 0;
        for (var d = {}, e = 0; e < a.length; e++) {
            var g = a[e]
                , h = g.name
                , k = g.value
                , l = g._type || g.type;
            "password" !== h && "repassword" !== h && "visiablepwd" !== h && (k = r(k));
            "" === k ? (H.show(h + "_" + l + "_empty", g),
                f++) : ac(h, k, l, g) ? d[h] = "user" === h && "+86" !== r(b.codeValue.innerHTML) ? r(b.codeValue.innerHTML) + k : k : (H.show(h + "_" + l + "_rule", g),
                    f++);
            if (f) {
                break
            }
        }
        return c ? c(f ? !1 : d) : !f
    }
    function ea(a) {
        a = la(a);
        for (var f = 0; f < a.length; f++) {
            H.clean(a[f])
        }
    }
    function mb() {
        var a = e(".form-panel", b.layout);
        t(a, function (a, b) {
            v(a)
        })
    }
    function n(a, b) {
        if (!k.supportPlaceholder) {
            var c = d.createElement("span")
                , e = a.parentNode
                , g = a.getAttribute("placeholder");
            c.className = "placehld";
            c.id = a.id + "_pla";
            c.innerHTML = g;
            e.insertBefore(c, a);
            e.style.position = "relative";
            c.style.position = "absolute";
            c.style.cursor = "text";
            c.style.lineHeight = V(a, "lineHeight") || 1.2;
            c.style.left = (a.offsetLeft || 0) + "px";
            c.style.top = (a.offsetTop || 0) + "px";
            b && (c.style.color = b);
            fa.on(a, function (a, b) {
                "" === a ? B(c) : v(c)
            });
            x(c, G.click, function () {
                try {
                    a.focus(),
                        v(c)
                } catch (b) { }
            })
        }
    }
    function nb(a) {
        if (!k.supportPlaceholder) {
            var b = a.parentNode;
            a = d.getElementById(a.id + "_pla");
            try {
                b.removeChild(a)
            } catch (c) { }
        }
    }
    function La(a) {
        s.add("objectCopy", a);
        var b = {}, c, d = {};
        for (c in a) {
            c in a && !(c in d) && (b[c] = a[c])
        }
        return b
    }
    function Ja(a) {
        a = {
            miid: /^\d{3,}$/.test(a),
            phoneLike: /^\d{7,}$/.test(a),
            phone: /^\++\d{7,}$/.test(a) || /^0{2}\d{7,}/.test(a),
            emailLike: -1 !== (a + "").indexOf("@"),
            email: /^[\w.\-]+@(?:[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.)+[A-Za-z]{2,6}$/.test(a),
            nonum: /[^0-9]/.test(a),
            chsChar: /[\u4e00-\u9fa5]/.test(a)
        };
        return a.chsChar ? !1 : a
    }
    function lb(a) {
        var b = /^\d{7,}$/.test(a);
        a = /^\+?\d{7,}$/.test(a);
        return k.oAuthorize ? a : b
    }
    function ob(a, b) {
        A("userName", a, -3650, "/", ".xiaomi.com", 315360000);
        var c = parseInt(a, 10) === b ? b : b + "|" + a;
        LStore.set("user", c)
    }
    function sa(a, f) {
        f = f || k.captChaURL;
        a.src = f + "&" + (new Date).getTime();
        b.captchaCode && (b.captchaCode.__reset = !0) && (b.captchaCode.value = "");
        w(b.layout, "captcha_layout")
    }
    function pb(a) {
        k.captchaInit = 1;
        b.captcha.innerHTML = k.captchaTpl;
        b.captchaCode = e("#captcha-code");
        b.captchaImg = e("#captcha-img");
        n(b.captchaCode);
        x(b.captchaImg, G.click, function () {
            clearTimeout(b.captchaImg.__refreshImg);
            b.captchaImg.__refreshImg = setTimeout(function () {
                sa(b.captchaImg)
            }, 100)
        });
        x(b.captchaCode, G.keyup, function (a) {
            a = a || c.event;
            13 === (a.charCode || a.keyCode) && (Ma(),
                a.returnValue = !1,
                a.preventDefault && a.preventDefault());
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        });
        fa.on(b.captchaCode, function (a, c, d) {
            !d && ea(b.mainForm)
        })
    }
    function qb(a) {
        k.captchaInit && sa(b.captchaImg);
        b.captchaCode && H.clean(b.captchaCode);
        H.show(l.verifyPwd ? D.PWD_RES_ERROR : D.LOGIN_RES_ERROR, b.userName)
    }
    function Na(a) {
        var f = a.tips ? a.tips : D.password_number_rule;
        a.ignore ? H.show(f) : H.show(f, b.pwd)
    }
    function rb(a) {
        H.show(a.tips ? a.tips : D.TOKEN_EXPIRE)
    }
    function sb(a) {
        H.show(D.FORBIDDEN)
    }
    function tb(a) {
        H.show(D.INTERNAL_ERROR)
    }
    function bc(a) {
        for (var f = "", c = 0; 10 > c;) {
            f = decodeURIComponent(a);
            if (a === f) {
                break
            }
            a = f;
            c++
        }
        a = z(a);
        a = a.replace(/\$\{(.*)\}\$/g, function (a, b, f) {
            return '<span class="strong-color" style="color:#ff7e00">' + b + "</span>"
        });
        b.header.innerHTML = a
    }
    function cc() {
        var a;
        a = "<div class='search-code'><i class='icon_search'></i><input type='text' class='search-code-input'></div>" + RegionsCode.getAll({
            usual: D.POPULAR
        }, !0, !0);
        b.codeContainerCon.innerHTML = a;
        b.searchCodeInput = e(".search-code-input", b.codeContainer)[0];
        b.recordCode = e(".record-country", b.codeContainer);
        fa.on(b.searchCodeInput, function (a, c) {
            a = r(a);
            if (0 < a.length) {
                w(b.codeContainer, "search-mode");
                var d = RegionsCode.searchLikeData(a)
            } else {
                return F(b.codeContainer, "search-mode"),
                    !1
            }
            t(b.recordCode, function (a) {
                var b = r(a.getAttribute("data-brief"));
                if (I(a.parentNode.parentNode.parentNode, "countrycode-container-usual")) {
                    return !1
                }
                a: {
                    for (var f = d, f = f || [], c = 0, ja; ja = f[c++];) {
                        if (b === ja.B) {
                            b = !0;
                            break a
                        }
                    }
                    b = !1
                }
                b ? w(a.parentNode, "selected") : F(a.parentNode, "selected")
            })
        });
        x(b.searchCodeInput, G.keydown, function (a) {
            a = a || c.event;
            if (13 == (a.charCode || a.keyCode)) {
                var d = e(".selected", b.codeContainer)[0];
                d && T(d, "click");
                a.returnValue = !1;
                a.preventDefault && a.preventDefault()
            }
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        })
    }
    function ga() {
        b.searchCodeInput && (b.searchCodeInput.value = "");
        F(b.codeContainer, "search-mode");
        v(b.codeContainer);
        l.codeShown = !1
    }
    function ub(a) {
        var f = e(".record-country", a)[0];
        a = f.getAttribute("data-code");
        f = f.getAttribute("data-brief");
        b.codeValue.innerHTML = a;
        k.region = f;
        s.add("selectCode", a, f)
    }
    function dc(a) {
        t(e("a", b.navTabs), function (b, c) {
            b.getAttribute("data-tab") === a ? w(b, "now") : F(b, "now")
        });
        t(b.tabsCon, function (b, c) {
            b.getAttribute("data-con") === a ? B(b, !0) : v(b)
        });
        "qr" === a ? (w(b.loginQr, "tab_qr_area"),
            ra(!0, "tab")) : Ba(!0)
    }
    function vb(a) {
        !k.fromTw && F(b.regionCode, "disable");
        r(b.userName.value) || (l.manualControlCode = !1,
            l.showCodeValue = !1);
        a.phoneLike && !a.phone && (l.manualControlCode ? (F(b.regionCode, "add_regioncode"),
            l.showCodeValue = !1,
            ga()) : (w(b.regionCode, "add_regioncode"),
                l.showCodeValue = !0));
        if (!r(b.userName.value) || a.nonum) {
            F(b.regionCode, "add_regioncode"),
                ga(),
                l.manualControlCode || (l.manualControlCode = !1,
                    l.showCodeValue = !1)
        }
        s.add("showCodeValue", l.showCodeValue)
    }
    function wb(a, b) {
        var c = {
            title: b.title,
            cls: b.cls,
            html: '<div id="' + a + '" class="form-panel">' + b.html + "</div>",
            customDevice640: !0,
            modalfixed: !0,
            afterRender: function () {
                l.initModal = !0
            }
        };
        l.initModal ? (ta.update(c),
            ta.show()) : ta = new ka(c)
    }
    function Oa(a, f, ja) {
        var g = Pa[a];
        l.currentView = a;
        if (!Pa[a] || "registerConfirm" === a || "loginConfirm" === a) {
            var g = Pa[a] = gb([a])
                , h = d.createElement("div");
            h.innerHTML = g;
            h.className = "form-panel";
            h.id = f;
            "registerConfirm" === a ? (wb(f, {
                html: g,
                title: D.MSG_REGISTER,
                cls: "mod_bottom_win"
            }),
                c.onetrack && onetrack("trackPage", {
                    page: "view_login_recycle_register_dualselect_page"
                })) : "loginConfirm" === a ? (wb(f, {
                    html: g,
                    title: D.MSG_LOGIN,
                    cls: "mod_bottom_win"
                }),
                    c.onetrack && onetrack("trackPage", {
                        page: "view_login_recycle_login_dualselect_page"
                    })) : b.mainContent.appendChild(h);
            b.acRegister = e("#ac-register");
            b.acRegister && (b.acRegisterOkBtn = e(".ok_btn", b.acRegister)[0],
                b.acRegisterNoBtn = e(".no_btn", b.acRegister)[0],
                b.acqTipsReg = e(".acq_tips", b.acRegister)[0],
                b.agreeLink = e(".agreement_link", b.acRegister)[0],
                b.privacyLink = e(".privacy_link", b.acRegister)[0]);
            b.setPwd = e("#set-pwd");
            b.setPwd && (b.setPwdInput = e("input", b.setPwd));
            b.registerButton = e("#register-button");
            b.rePwd = e(".re-password")[0];
            b.acConfirm = e("#ac-confirm");
            b.acConfirm && (b.acConfirmOkBtn = e(".ok_btn", b.acConfirm)[0],
                b.acConfirmNoBtn = e(".no_btn", b.acConfirm)[0],
                b.userActive = e(".user-active", b.acConfirm)[0]);
            b.userPhone = e(".user-phone")[0];
            b.loginConfirm = e("#login-confirm");
            b.loginConfirm && (b.loginConfirmOkBtn = e(".ok_btn", b.loginConfirm)[0],
                b.loginConfirmNoBtn = e(".no_btn", b.loginConfirm)[0]);
            b.registerConfirm = e("#register-confirm");
            b.registerConfirm && (b.registerConfirmOkBtn = e(".ok_btn", b.registerConfirm)[0],
                b.registerConfirmNoBtn = e(".no_btn", b.registerConfirm)[0]);
            b.agreeLink && b.agreeLink.setAttribute("href", JSP_VAR.agreeLink);
            b.privacyLink && b.privacyLink.setAttribute("href", JSP_VAR.privacyLink);
            ja && ec(a, ja)
        }
        "setPwd" === a && t(e("input", b.setPwd), function (a, b) {
            n(a)
        });
        k.currentBiz && k.currentBiz.bizBg && v(b.bannerIframe);
        mb();
        v(b.footer);
        B(b[a], !0);
        fc(ja, a)
    }
    function ec(a, f) {
        K = f;
        K.data.nickname ? e(".usernameShow", b[a])[0] && (e(".usernameShow", b[a])[0].innerText = K.data.nickname) : v(e(".us-userName", b[a])[0]);
        e(".us-portraitUrl", b[a])[0] && K.data.portrait && (e(".us-portraitUrl", b[a])[0].innerHTML = '<img src="' + K.data.portrait + '">');
        e(".phoneShow", b[a])[0] && (e(".phoneShow", b[a])[0].innerText = K.data.phone);
        e(".useridShow", b[a])[0] && (e(".useridShow", b[a])[0].innerText = K.data.maskedUserId);
        b.userPhone && (b.userPhone.innerText = k.userMask || Qa.phone || K.data.phone);
        e(".register-time", b[a])[0] && (K.data.registerTime ? e(".register-time", b[a])[0].innerText = h(new Date(K.data.registerTime), !0) : v(e(".us-register", b[a])[0]));
        e(".last-login-time", b[a])[0] && K.data.lastLoginTime && (e(".last-login-time", b[a])[0].innerText = h(new Date(K.data.lastLoginTime), !0));
        e(".device-login", b[a])[0] && K.data.deviceType && k.loginDevice[K.data.deviceType] && (e(".device-login", b[a])[0].innerText = k.loginDevice[K.data.deviceType]);
        K.data.lastLoginTime || K.data.deviceType || v(b.userActive);
        e(".register-email", b[a])[0] && (K.data.email ? e(".register-email", b[a])[0].innerText = K.data.email : v(e(".us-email", b[a])[0]))
    }
    function fc(a, f) {
        b.registerButton && x(b.registerButton, "click", function (a) {
            a = a || c.event;
            Ka(b.setPwd, !1, function (a) {
                if (a && !za(a)) {
                    var b = {
                        noPwd: !1
                    }
                        , b = N(b, a);
                    xb(b, f)
                }
            });
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        })
    }
    function yb() {
        x(b.acRegisterOkBtn, G.click, function () {
            I(this, "disabled") || zb("acRegister")
        });
        x(b.acRegisterNoBtn, G.click, function () {
            k.oAuthorize || (W.resetCookie(),
                l.clientAcq = !1);
            k.oAuthorize && (location.href = "/pass/serviceLogin?sid=" + $.sid + "&callback=" + encodeURIComponent($.callback));
            mb();
            H.clean();
            clearTimeout(Ra);
            ma(D.INIT_CODE_TEXT, !1);
            k.currentBiz && k.currentBiz.bizBg && B(b.bannerIframe, !0);
            B(b.loginMain);
            B(b.footer);
            l.currentView = "loginMain";
            for (var a = la(b.mainForm), f = 0; f < a.length; f++) {
                var c = a[f];
                c.value = "";
                k.captchaInit && "captCode" === c.name && sa(b.captchaImg)
            }
        })
    }
    function zb(a, b) {
        var c = k.recycleUserInfo;
        if (c && c.data && 1 === c.data.registerPwd || 1 === l.registerPwd) {
            return ta && ta.close(),
                Oa("setPwd", "set-pwd"),
                !1
        }
        xb({
            noPwd: !0
        }, a, b)
    }
    function xb(a, f, c) {
        if (l.lockSubmit) {
            return !1
        }
        var d = N($, a);
        l.clientAcq ? d.phoneHash = W.hash || "" : d.phone = Qa.phone;
        d.region = k.region;
        c && (d = N(d, c));
        d.client_id = y("client_id");
        s.add("resisterOrigin", f);
        L({
            biz: "loginRegisterOrigin",
            type: k.tickType,
            step: f
        });
        d.log = ib();
        s.add("resisterLogin", "done");
        Ajax({
            url: "/pass/tokenRegister",
            method: "POST",
            data: d,
            success: function (a) {
                l.lockSubmit = 0;
                s.add("resisterResult", a);
                a = m(a.replace("&&&START&&&", ""));
                var f = a.code;
                if (0 === f) {
                    L({
                        biz: "loginRegister",
                        type: k.tickType,
                        step: "end"
                    }),
                        l.clientAcq && (W.resetCookie(),
                            l.clientAcq = !1),
                        location.href = k.recycleSign ? "/pass/serviceLogin?sid=" + d.sid + "&callback=" + encodeURIComponent(d.callback) : "/pass/serviceLogin" + decodeURIComponent(d.qs)
                } else {
                    if (a.ignore = !0,
                        a.tips) {
                        var f = a.tips
                            , c = {
                                type1: e("input", b.setPwd)[0],
                                type2: e("input", b.setPwd)[1]
                            };
                        (a = a.action) && c[a] ? H.show(f, c[a]) : H.show(f)
                    } else {
                        if (f in O) {
                            O[f](a)
                        } else {
                            O.regFail(a)
                        }
                    }
                }
            },
            error: function (a) {
                s.add("registerError", a.status, a.responseText);
                l.lockSubmit = 0
            },
            timeout: function () {
                s.add("registerTimeout", (new Date).getTime());
                l.lockSubmit = 0
            }
        });
        l.lockSubmit = 1
    }
    function Sa(a, b, c, d) {
        var e = "ticket" !== y("_loginSign") ? "pwd" : "ticket";
        s.add("login", a, b);
        e === l.loginType || k.recycleSign ? Ab(a, b, c, d) : (J("userId", "/", "account.xiaomi.com"),
            J("userId", "/", "xiaomi.com"),
            J("cUserId", "/", "account.xiaomi.com"),
            J("cUserId", "/", "xiaomi.com"),
            e = La($),
            e._sign = "",
            e._loginSign = l.loginType,
            e._json = !0,
            d && (e = N(e, d)),
            e.client_id = y("client_id"),
            Ajax({
                url: "/pass/serviceLogin",
                method: "GET",
                data: e,
                success: function (e) {
                    s.add("loginSign", e);
                    e = m(e);
                    0 !== e.code ? (b._sign = e._sign,
                        b.qs = e.qs,
                        b.callback = e.callback,
                        Ab(a, b, c, d)) : (L({
                            biz: "login",
                            type: k.tickType,
                            step: "end"
                        }),
                            location.href = e.location)
                }
            }))
    }
    function Ab(a, f, c, d) {
        if (l.lockSubmit) {
            return !1
        }
        d && (f = N(f, d));
        s.add("loginOrigin", c);
        L({
            biz: "loginOrigin",
            type: k.tickType,
            step: c
        });
        f.log = ib();
        Ajax({
            url: a,
            method: "POST",
            data: f,
            success: function (a) {
                l.lockSubmit = 0;
                s.add("loginResult", a);
                a = m(a);
                var c = a.code
                    , d = "";
                if (f.user) {
                    var e = f.user
                        , d = e.replace(e.substring(3, e.length - 3), "***")
                }
                s.add("loginCode", c);
                if (a.tips) {
                    e = a.tips,
                        c = {
                            type1: b.userName,
                            type2: b.pwd
                        },
                        (a = a.action) && c[a] ? H.show(e, c[a]) : H.show(e)
                } else {
                    if (c in O) {
                        O[c](a, e, d)
                    } else {
                        O["default"](a, e)
                    }
                }
            },
            error: function (a) {
                s.add("loginError", a.status, a.responseText);
                a = a.status;
                var b = f.user;
                a in O ? 0 === a ? (s.add("loginsErrorStatus", "in"),
                    O.network({}, b)) : (s.add("loginsErrorStatus", "out"),
                        O[a]({}, b)) : (s.add("loginsErrorStatus", "fail"),
                            O.fail({}, b));
                l.lockSubmit = 0
            },
            timeout: function () {
                s.add("loginTimeout", (new Date).getTime());
                l.lockSubmit = 0
            }
        });
        l.lockSubmit = 1
    }
    function gc(a) {
        Ajax({
            url: "/pass2/profile/icon",
            method: "GET",
            data: {
                user: a
            },
            success: function (a) {
                s.add("getProfile", a);
                a = m(a);
                if (0 === a.code) {
                    if (a.data.icon) {
                        var c = new Image;
                        c.src = a.data.icon;
                        b.accountAvatorCon.appendChild(c)
                    }
                    B(b.accountAvator, !0)
                }
            }
        })
    }
    function Bb() {
        if ("mobile" !== k.deviceType) {
            var a = b.qrhelp.getBoundingClientRect();
            e(".mod_ercode")[0].style.right = d.documentElement.clientWidth - a.right + "px";
            e(".mod_ercode")[0].style.top = a.top + 20 + "px"
        }
    }
    function Cb(a) {
        var b = l.clientAcq ? a.userHash : a.user;
        (na = Ta[b]) || (na = Ta[b] = {
            left: 5,
            times: 0
        });
        na.initQuota ? Db(a) : hc(b, function (b) {
            na.left = b;
            na.initQuota = 1;
            Db(a)
        })
    }
    function Db(a) {
        var f = Ta[l.clientAcq ? a.userHash : a.user];
        0 === f.left ? Ua(f.left) : f.sending ? Eb(f, !0) : (f.sending = !0,
            Ajax({
                url: "/pass/sendServiceLoginTicket",
                method: "post",
                data: a,
                dataType: "text",
                success: function (a) {
                    s.add("sendServiceLoginTicket", a);
                    s.add("sendServiceLoginTicketLog", "success");
                    f.sending = !1;
                    var c = {};
                    try {
                        c = m(a.replace("&&&START&&&", ""))
                    } catch (d) { }
                    a = c.code;
                    0 === a ? (L({
                        biz: "login",
                        type: k.tickType,
                        step: "sendPhoneTicketSuccess"
                    }),
                        f.left = Math.max(f.left - 1, 0),
                        f.hold = (f.times += 1) * ic,
                        Eb(f)) : c.tips ? "type1" === c.action && H.show(c.tips, b.userName) : a in O ? (c.send = f,
                            O[a](c)) : O.fail(c)
                },
                error: function () {
                    f.sending = !1;
                    ma(D.send_again, !1)
                }
            }))
    }
    function Eb(a, b) {
        Ua(a.left);
        if (!b) {
            text = D.send_hold;
            var c = function () {
                a.hold--;
                var b = text.replace("{time}", "(" + a.hold + ")");
                1 <= a.hold ? (ma(b, !0),
                    Ra = setTimeout(function () {
                        c()
                    }, 980)) : ma(D.send_again, !1)
            };
            clearTimeout(Ra);
            c()
        }
    }
    function ma(a, f) {
        b[ua].innerHTML = a;
        f ? w(b[ua], "disabled") : F(b[ua], "disabled")
    }
    function hc(a, b) {
        var c = {
            contentType: 160033,
            userId: -1
        };
        l.clientAcq ? c.addressHash = a : c.address = a;
        Ajax({
            url: "/pass/sms/quota",
            method: "POST",
            data: c,
            dataType: "text",
            success: function (a) {
                var c = {};
                try {
                    c = m(a.replace("&&&START&&&", ""))
                } catch (d) { }
                0 === c.result ? b(parseInt(c.info) || 0) : b(0)
            },
            error: function () {
                b(0)
            }
        })
    }
    function Ua(a) {
        var b = D.leftTimesText
            , c = "getSmsCode" === ua ? H : acError;
        2 >= a ? (b = 0 === a ? D.nochance : M(b, {
            left: a
        }),
            c.show(b)) : c.clean()
    }
    function Ca(a) {
        return "ticket" === l.loginType ? a ? "pwd" : "phone" : a ? "phone" : "pwd"
    }
    function jc() {
        if (Q.tmpVal) {
            for (var a in Q.data) {
                -1 !== Q.tmpVal.indexOf(a) && (s.add("COMMAND", a),
                    "function" === typeof Q.data[a] && Q.data[a](),
                    Q.tmpVal = "",
                    Q.history.push(a))
            }
        }
    }
    function Va(a, f) {
        !0 === f && v(b.changeLoginType);
        "block" === e(".err_tip", b[l.currentView])[0].style.display && ea(b.mainForm);
        b.toggleVisiable.__visiable && ("ticket" === a ? (B(b.pwd, !0),
            v(b.pwdVisiable)) : (v(b.pwd),
                B(b.pwdVisiable)));
        nb(b.pwd);
        nb(b.userName);
        l.loginType = a;
        l.enableCode = "ticket" === l.loginType ? U ? !0 : !1 : k.enableCode;
        Fb();
        if ("pwd" === a) {
            F(b.regionCode, "add_regioncode");
            F(b.loginPanel, "sms_login");
            F(b.extraLinks, "extra_links");
            v(b.smsCodePanel);
            b.pwd.value = "";
            b.pwdVisiable.value = "";
            b.userName.setAttribute("_type", "text");
            b.pwd.setAttribute("_type", "password");
            try {
                b.userName.type = "text",
                    b.pwd.type = "password"
            } catch (c) { }
            b.userName.setAttribute("placeholder", "Email/Phone/Mi Account");
            b.pwd.setAttribute("placeholder", "Password");
            var d = e(".err_tip", b.loginMain)[0];
            d.parentNode.insertBefore(b.captcha, d);
            d = Ja(b.userName.value, !0);
            l.enableCode && vb(d)
        } else {
            if ("ticket" === a) {
                b.userName.value && !lb(b.userName.value) && l.maskedPhone !== b.userName.value && (b.userName.value = "",
                    b.clearLink && v(b.clearLink));
                U || (b.codeValue.innerHTML = "+86",
                    w(b.regionCode, "disable"));
                w(b.loginPanel, "sms_login");
                w(b.regionCode, "add_regioncode");
                w(b.extraLinks, "extra_links");
                B(b.smsCodePanel, !0);
                b.pwd.value = "";
                b.userName.setAttribute("_type", "tel");
                if (/FP2801 Build/i.test(navigator.userAgent)) {
                    b.pwd.setAttribute("_type", "tel"),
                        b.userName.type = "tel",
                        b.pwd.type = "tel"
                } else {
                    b.pwd.setAttribute("_type", "number");
                    try {
                        b.userName.type = "tel",
                            b.pwd.type = "number"
                    } catch (g) { }
                }
                b.userName.setAttribute("placeholder", D.PHONE_NUM);
                b.pwd.setAttribute("placeholder", D.SMS_CODE);
                b.pwd.parentNode.parentNode.insertBefore(b.captcha, b.pwd.parentNode)
            }
        }
        !b.userName.value && n(b.userName);
        !b.pwd.value && n(b.pwd)
    }
    function Fb() {
        var a = k.currentBiz && k.currentBiz.pwdText ? k.currentBiz.pwdText : ""
            , f = k.currentBiz && k.currentBiz.smsText ? k.currentBiz.smsText : "";
        "ticket" === l.loginType ? (b.loginButton.value = f ? f : "Sign in/Sign up",
            b.changeLoginType.innerText = a ? a : "Sign in with password") : (b.loginButton.value = a ? a : "Sign in",
                b.changeLoginType.innerText = f ? f : "Sign in with SMS")
    }
    function Ma() {
        L({
            biz: "login",
            type: k.tickType,
            subBiz: l.loginType,
            step: "submit"
        });
        c.onetrack && onetrack("track", "click_" + Ca() + "_login" + ("phone" === Ca() ? "_or_erg" : ""));
        if (!Ka(b.mainForm)) {
            return !1
        }
        if ("pwd" === l.loginType && X && !l.useManMachineError) {
            var a = l.showCodeValue ? r(b.codeValue.innerHTML) + r(b.userName.value) : r(b.userName.value);
            X.start({
                uid: a,
                a: (k.zoneDic[JSP_VAR.dataCenterZone] || "en") + "-pwd-login"
            })
        } else {
            Gb()
        }
    }
    function Gb() {
        var a = La($);
        k.captchaNeed && b.captchaCode && (a.captCode = r(b.captchaCode.value));
        a.client_id = y("client_id");
        if ("pwd" === l.loginType) {
            var f = l.showCodeValue ? r(b.codeValue.innerHTML) + r(b.userName.value) : r(b.userName.value)
                , c = e("#XiaomiEdit") || e("#npXiaomiEdit")
                , c = c && c.GetValue() || b.pwd.value;
            l.clientAcq && l.maskedPhone === f ? a.userHash = W.hash : a.user = f;
            a.hash = (CryptoJS.MD5(c).toString() + "").toUpperCase();
            !k.md5pwd && (a.pwd = c);
            a.cc = b.codeValue.innerHTML;
            Sa("/pass/serviceLoginAuth2", a, "loginMain")
        } else {
            if ("ticket" === l.loginType) {
                var d = "+86" === r(b.codeValue.innerHTML) ? r(b.userName.value) : r(b.codeValue.innerHTML) + r(b.userName.value)
                    , f = b.pwd.value;
                if (l.clientAcq && l.maskedPhone === d) {
                    return a.userHash = W.hash,
                        a.ticket = f,
                        Sa("/pass/serviceLoginTicketAuth", a, "acRegister"),
                        !1
                }
                Qa.phone = d;
                Ajax({
                    url: "/pass/phoneInfo",
                    method: "POST",
                    data: {
                        user: d,
                        ticket: f,
                        sid: $.sid
                    },
                    success: function (b) {
                        s.add("phoneInfo", b);
                        K = b = m(b);
                        var f = b.code;
                        if (0 === f) {
                            switch (l.registerPwd = b.data.registerPwd,
                            b.data.status) {
                                case 2:
                                    a.user = d;
                                    Sa("/pass/serviceLoginTicketAuth", a, "loginMain");
                                    break;
                                case 0:
                                    k.oAuthorize ? (Oa("acRegister", "ac-register", b),
                                        yb()) : zb("loginMain")
                            }
                        } else {
                            if (f in O) {
                                O[f](b)
                            } else {
                                O.fail(b)
                            }
                        }
                    }
                })
            }
        }
        return !1
    }
    function Hb() {
        "pwd" === l.loginType ? Gb() : "ticket" === l.loginType && Cb(X.sendData)
    }
    var Wa = c.MiLogin || (c.MiLogin = {})
        , kc = function () {
            var a = location.hostname;
            return -1 < a.indexOf("onebox") ? "onebox" : -1 < a.indexOf("preview") ? "preview" : "release"
        }()
        , s = function () {
            var a = [];
            return {
                add: function (b, d, e) {
                    a.push({
                        title: b,
                        message: d,
                        more: e,
                        time: h(new Date)
                    });
                    -1 !== (location.search + "").indexOf("debug") && "console" in c && "function" === typeof c.console.log && console.log(arguments)
                },
                get: function () {
                    return a
                }
            }
        }()
        , L = function () {
            var a = {}
                , b = []
                , c = ""
                , d = null
                , e = 0
                , g = function () {
                    var b = a[c];
                    b && b.callback && b.callback();
                    c = "";
                    clearTimeout(d);
                    d = null;
                    h()
                }
                , h = function () {
                    if (!d) {
                        var e = b.shift();
                        if (e) {
                            c = e;
                            var e = q(a[e].data)
                                , k = new Image;
                            k.onload = k.oncomplete = k.onerror = g;
                            k.src = "/pass/ajax/tick?" + e;
                            d = setTimeout(function () {
                                d = null;
                                h()
                            }, 1000)
                        }
                    }
                };
            return function (c, d) {
                c._t = (new Date).getTime();
                key = "sendStatus-" + e++;
                c = {
                    key: key,
                    data: c,
                    callback: d
                };
                s.add(key, c);
                a[key] = c;
                b.push(key);
                h()
            }
        }()
        , aa = function () {
            var a = navigator.userAgent
                , b = {};
            /\s+chrome\/([\d\.]*)/i.test(a) ? (b.name = "Chrome",
                b.version = parseInt(RegExp.$1)) : /msie\s+(\d+\.\d+)/i.test(a) ? (b.name = "IE",
                    b.version = parseFloat(RegExp.$1)) : /\s+firefox\/([\d\.]*)/i.test(a) ? (b.name = "Firefox",
                        b.version = parseInt(RegExp.$1)) : /applewebKit\/([\d\.]*)/i.test(a) ? (b.name = "Webkit",
                            b.version = parseInt(RegExp.$1),
                            /miuibrowser\/([\d\.]*)/i.test(a) && (b.name = "MIUI Browser",
                                b.version = parseInt(RegExp.$1)),
                            /version\/([\d\.]*)\s+.*Safari/i.test(a) && (b.name = "Safari",
                                b.version = parseInt(RegExp.$1))) : /trident\/([\d\.]*)/i.test(a) ? (a = a.match(/rv:([\d\.]*)/)) && 2 <= a.length ? (b.name = "IE",
                                    b.version = parseFloat(a[1])) : (b.name = "Trident",
                                        b.version = RegExp.$1) : (b.name = a,
                                            b.version = 0);
            return b
        }();
    (function () {
        var a = d.createElement("a");
        a.target = "_blank";
        d.body.appendChild(a);
        var b = 0
            , e = null;
        return function (g, h) {
            if ("_self" === h) {
                location.href = g
            } else {
                a.href = g;
                var k = (new Date).getTime();
                if (!(e === g && 1000 > k - b)) {
                    e = g;
                    b = k;
                    try {
                        var l = d.createEvent("MouseEvents");
                        l.initMouseEvent("click", !0, !0, c);
                        a.dispatchEvent(l)
                    } catch (m) {
                        a.click()
                    }
                }
            }
        }
    }
    )();
    var fa = function () {
        return {
            on: function (a, b) {
                var c = a._inputChangeFns;
                c || (c = a._inputChangeFns = [],
                    Vb(a));
                c.push(b)
            },
            off: function (a, b) {
                for (var c = a._inputChnageFns, d = 0; d < c.length; d++) {
                    b === c[d] && (c.splice(d, 1),
                        d--)
                }
            }
        }
    }();
    try {
        var Xa = !!c.localStorage
    } catch (Sc) {
        Xa = !1
    }
    eb.prototype = {
        key: "account.xiaomi.com",
        _read: Xa ? function () {
            var a = "";
            try {
                a = c.localStorage.getItem(this.key)
            } catch (b) { }
            a = (new Function("", "return " + a))();
            return "object" == typeof a && a ? a : {}
        }
            : function () {
                return {}
            }
        ,
        _save: Xa ? function (a) {
            try {
                c.localStorage.setItem(this.key, p(a))
            } catch (b) {
                s.add("setItem \u629b\u51fa\u5f02\u5e38", aa.name + " " + aa.version)
            }
        }
            : function () {
                return !1
            }
        ,
        _readAndGc: function (a) {
            var b = this._read(), c;
            for (c in b) {
                var d = b[c];
                d.expires && (new Date).getTime() - d.time >= d.expires && delete b[c]
            }
            this._save(b);
            return a ? b[a] : b
        },
        remove: function (a) {
            var b = this._readAndGc();
            delete b[a];
            this._save(b)
        },
        get: function (a) {
            a = this._readAndGc(a) || {};
            return a.value ? a.value : null
        },
        set: function (a, b, c) {
            if (!a) {
                return !1
            }
            var d = this._readAndGc()
                , e = (new Date).getTime();
            d[a] = {
                value: b,
                expires: c,
                time: e
            };
            this._save(d)
        }
    };
    c.LStore = new eb("account.xiaomi.com");
    var Xb = 0;
    fb.prototype = {
        request: function () {
            var a = this.url || "?"
                , b = this.data || {}
                , d = (this.method || "GET").toUpperCase()
                , e = this;
            this.xhr.onreadystatechange = function () {
                e.state = e.xhr.readyState;
                s.add("xhrReadyState", e.xhr.readyState);
                4 == e.xhr.readyState && (c.clearTimeout(e.timeouthandler),
                    e.status = e.xhr.status,
                    s.add("xhrStatus", e.status),
                    200 == e.xhr.status ? e.success && e.success(e.xhr.responseText, e.xhr) : (s.add("xhrError"),
                        e.error && e.error(e.xhr)))
            }
                ;
            b = Wb(b);
            "GET" == d ? (a = -1 === a.indexOf("?") ? a + ("?" + b + "&_dc=" + (new Date).getTime()) : a + ("&" + b + "&_dc=" + (new Date).getTime()),
                b = null) : a += "?_dc=" + (new Date).getTime();
            s.add("initopen");
            this.xhr.open(d, a, !0);
            this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.timeouthandler = c.setTimeout(function () {
                s.add("intoTimeout");
                e.timeout()
            }, 5000);
            s.add("initsend");
            this.xhr.send(b)
        },
        timeout: function () { }
    };
    c.Ajax = function (a) {
        return new fb(a)
    }
        ;
    var qa = {
        fns: [],
        beforeFns: [],
        inited: !1,
        on: function (a) {
            "function" === typeof a && this.fns.push(a);
            !this.inited && this.init();
            c.onresize && c.onresize()
        },
        off: function (a) {
            if ("function" === typeof a) {
                for (var b = 0, c = this.fns.length; b < c; b++) {
                    if (a === this.fns[b]) {
                        return this.fns.splice(b, 1),
                            !0
                    }
                }
            }
            return !1
        },
        onbeforeResize: function (a) {
            "function" === typeof a && this.beforeFns.push(a)
        },
        beforeExec: function () {
            for (var a = 0, b; b = this.beforeFns[a++];) {
                b && b.call(c)
            }
        },
        exec: function () {
            this.beforeExec();
            var a;
            a = c.innerWidth || 0;
            var b = c.innerHeight || 0;
            a || ("CSS1Compat" == d.compatMode ? (a = d.documentElement.clientWidth,
                b = d.documentElement.clientHeight) : (a = d.body.clientWidth,
                    b = d.body.clientHeight));
            a = {
                width: a,
                height: b
            };
            for (var b = d.documentElement, e = d.body, g = Math.max(b.clientHeight || 0, e.scrollHeight, b.scrollHeight || 0, e.offsetHeight, b.offsetHeight || 0), b = {
                width: Math.max(b.clientWidth || 0, e.scrollWidth, b.scrollWidth || 0, e.offsetWidth, b.offsetWidth || 0),
                height: g
            }, e = d.documentElement, g = d.body, e = {
                scleft: Math.max(e.scrollLeft || 0, g.scrollLeft),
                sctop: Math.max(e.scrollTop || 0, g.scrollTop)
            }, g = 0, h; h = this.fns[g++];) {
                h && h.call(c, a, b, e)
            }
        },
        init: function () {
            var a = null
                , b = this;
            c.onresize = function () {
                c.clearTimeout(a);
                a = c.setTimeout(function () {
                    b.exec()
                }, 60)
            }
        },
        triggle: function () {
            this.exec()
        }
    }
        , Ya = {}
        , R = null
        , Da = d.body
        , Yb = {
            title: "{Modal-DefTitle}",
            cls: "",
            titleCls: "",
            bodyCls: "",
            html: "",
            afterRender: function () { }
        }
        , lc = function () {
            var a = 0;
            return function () {
                return "modal-id-" + a++
            }
        }();
    ka.prototype = {
        init: function () {
            var a = this.opt;
            R || (a.renderTo ? R = a.renderTo : (R = d.createElement("div"),
                w(R, "modal_container"),
                R.innerHTML = '<div class="modal_msk"></div>',
                Da.appendChild(R),
                !a.modalfixed && Zb(R)));
            this.id = a.id || lc();
            var b = this.modal = Ya[this.id]
                , g = this;
            b || (b = this.modal = d.createElement("div"),
                w(b, "modal_tip"),
                this.hide(),
                b.id = this.id,
                b.innerHTML = '<div class="modal_tip_flex"><div class="modal_tip_hd modal-header"><div class="external_logo_area"><a class="milogo" href="javascript:void(0)"></a></div><div class="modal-header-text modal_tip_title"></div><a href="javascript:void(0)" title="" class="modal-header-close btn_mod_close"><span>Close</span></a></div><div class="modal_tip_bd modal-body"></div></div>',
                a.renderTo ? a.renderTo.appendChild(b) : R.appendChild(b),
                this.header = e(".modal-header", b)[0],
                this.title = e(".modal-header-text", b)[0],
                this.body = e(".modal-body", b)[0],
                this.closeBtn = e(".modal-header-close", b)[0],
                x(this.closeBtn, "click", function () {
                    g.close()
                }),
                this.render(a),
                Ya[this.id] = b,
                this.resizeModal = function (d, e, g) {
                    e = b;
                    var h = "getComputedStyle" in c ? c.getComputedStyle(e) : e.currentStyle;
                    e = {
                        width: Math.max(parseInt(h.width) || 0, e.clientWidth, e.offsetWidth),
                        height: Math.max(parseInt(h.height) || 0, e.clientHeight, e.offsetHeight)
                    };
                    h = d.height;
                    d = d.width;
                    var k = g.sctop;
                    g = g.scleft;
                    a.deviceType && "mobile" === a.deviceType || (e && e.height && (b.style.marginTop = e.height < h ? (h - e.height) / 2 + "px" : 0 + k + "px",
                        b.style.top = 0),
                        e && e.width && (b.style.marginLeft = e.width < d ? (d - e.width) / 2 + "px" : 0 + g + "px",
                            b.style.left = 0))
                }
                ,
                a.modalfixed && (this.resizeModal = function () { }
                ),
                !a.renderTo && qa.on(this.resizeModal));
            this.show()
        },
        show: function () {
            if (this.modal && (B(R, "hide"),
                B(this.modal, "hide"),
                !this.opt.renderTo)) {
                var a = this;
                setTimeout(function () {
                    !a.opt.modalfixed && qa.triggle()
                }, 200)
            }
        },
        beforeClose: function () {
            if (this.opt.beforeClose) {
                return this.opt.beforeClose.call(this)
            }
        },
        close: function (a) {
            if (this.modal) {
                if (!1 === this.beforeClose()) {
                    return 0
                }
                a ? (qa.off(this.resizeModal),
                    R.removeChild(this.modal),
                    this.modal = null,
                    Ya[this.id] = null,
                    v(R, "hide")) : this.hide()
            }
        },
        hide: function () {
            v(R, "hide");
            v(this.modal, "hide")
        },
        render: function (a) {
            this.title.innerHTML = a.title;
            this.body.innerHTML = a.html;
            a.titleCls && w(this.title, a.titleCls);
            a.bodyCls && w(this.body, a.bodyCls);
            a.cls && w(this.modal, a.cls);
            a.afterRender.call(this)
        },
        update: function (a, b) {
            b && (a.titleCls && F(this.title, a.titleCls),
                a.bodyCls && F(this.body, a.bodyCls),
                a.cls && F(this.modal, a.cls));
            this.render(a)
        }
    };
    c.Modal = ka;
    var U = JSP_VAR.dataCenterZone && "China" != JSP_VAR.dataCenterZone
        , ha = JSP_VAR.loginMethods
        , mc = /iosPassportSDK/i.test(navigator.userAgent)
        , Ib = [{
            name: "Mi Home",
            icon: "icon_mijia",
            alink: "https://g.home.mi.com/views/download-mihome.html"
        }, {
            name: "Mi Store",
            icon: "icon_mistore",
            alink: "https://www.mi.com/appdownload/"
        }, {
            name: "Mi AI Speaker",
            icon: "icon_xiaoai",
            alink: "https://mina.mi.com/download"
        }]
        , hb = function () {
            var a = {};
            return {
                add: function (b, c) {
                    if (c) {
                        a[b] = c
                    } else {
                        if ("object" === typeof b) {
                            for (var d in b) {
                                b.hasOwnProperty(d) && (a[d] = b[d])
                            }
                        }
                    }
                },
                get: function (b) {
                    return a[b] || ""
                }
            }
        }();
    hb.add({
        help: '<div class="help_center_panel help-panel"><a class="help_center" href="https://account.xiaomi.com/helpcenter/"></a></div>',
        wrapper: '<div class="wrapper">              \x3c!-- loading --\x3e              <div class="popup_mask acquirePhoneMask" style="display:none;" id="loadingMask">                <div class="bkc"></div>                <div class="mod_wrap loadingmask">                </div>                <div class="loadingTips">Verifying...</div>              </div>              \x3c!--bg_banner_start--\x3e              <div class="bgiframe">                <iframe name="ifr" style="height:100%" width="100%" height="686" src="about:blank" id="bgiframe" frameborder="0" scrolling="no"></iframe>              </div>              \x3c!--bg_banner_end--\x3e              <div class="wrap">                <div class="layout_panel">                  <div class="layout" id="layout">                    <div id="main-content">                      \x3c!--\u8868\u5355\u8f93\u5165\u767b\u5f55--\x3e                      <div class="mainbox form-panel" id="login-main">                        <div id="custom_display_2"><a class="ercode" id="qrcode-trigger" href="javascript:void(0)"></a></div>                        \x3c!-- header s --\x3e                        <div class="lgnheader">                          <div class="header_tit t_c">                            <em id="custom_display_1" class="milogo">                              <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect><rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect><rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect><rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect><rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect><rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect><rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect><rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect></svg>                            </em>                            <h4 class="header_tit_txt" id="login-title">Sign in to your Mi Account</h4>                          </div>                        </div>                       \x3c!-- header e --\x3e                        \x3c!-- tab s --\x3e                        <div class="nav_tabs_panel">                          <div id="nav-tabs" class="nav_tabs">                            <a class="navtab-link now" href="javascript:void(0);" data-tab="pwd">Sign in</a><span class="line"></span>                            <a class="navtab-link" href="javascript:void(0);" data-tab="qr">Scan QR code</a>                          </div>                        </div>                        \x3c!-- tab e --\x3e                        \x3c!-- tab con s --\x3e                        <div class="tabs-con tabs_con now" data-con="pwd">                          <div>                            <div class="login_area" id="login-main-form">                                <div class="loginbox c_b">                                  \x3c!-- \u8f93\u5165\u6846 --\x3e                                  <div class="lgn_inputbg c_b login-panel pwdLogin">                                    \x3c!--\u9a8c\u8bc1\u7528\u6237\u540d--\x3e                                    <div class="single_imgarea" id="account-info">                                      <div class="na-img-area" id="account-avator" style="display:none">                                        <div class="na-img-bg-area" id="account-avator-con"></div>                                      </div>                                      <p class="us_name tac" id="account-displayname"></p>                                      <p class="us_id tac"></p>                                    </div>                                    <label id="region-code" class="labelbox login_user c_b" for="">                                      <div class="turn_area"><a class="btn_turn" id="manual_code" href="javascript:void(0);" title="Hide country code"></a></div>                                      <div class="country_list">                                        <div class="animation countrycode_selector" id="countrycode_selector">                                          <span class="country_code"><tt class="countrycode-value" id="countrycode_value"></tt><i class="icon_arrow_down"></i></span>                                        </div>                                      </div>                                      <input class="item_account" autocomplete="off" type="text" name="user" id="username" placeholder="Email/Phone/Mi Account">                                      <input type="hidden" name="log" id="debug_log">                                    </label>                                    <div class="country-container" id="countrycode_container" style="display: none;">                                      <div class="country_container_con" id="countrycode_container_con"></div>                                    </div>                                    <label class="labelbox pwd_panel c_b">                                      <input class="item_account" type="password" placeholder="Password" autocomplete="off" id="pwd" name="password" />                                      <input class="item_account" type="text" placeholder="Password" autocomplete="off" id="visiablePwd" name="visiablepwd" style="display:none" />                                      <div class="eye_panel pwd-visiable">                                        <i class="eye pwd-eye">                                          <svg width="20" height="20" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">                                            <path class="eye_outer" fill-rule="evenodd" clip-rule="evenodd" d="M30.0001 0C41.9789 0 52.5304 6.3047 58.7068 15.8731C60.3286 18.3856 60.3288 21.6127 58.7072 24.1253C52.5312 33.6948 41.9793 40 30.0001 40C18.021 40 7.46928 33.695 1.29293 24.1263C-0.328972 21.6136 -0.328905 18.3862 1.29305 15.8735C7.46979 6.30466 18.0212 0 30.0001 0ZM29.9634 7C22.791 7 16.9767 12.8203 16.9767 20C16.9767 27.1797 22.791 33 29.9634 33C37.1357 33 42.9501 27.1797 42.9501 20C42.9501 12.8203 37.1357 7 29.9634 7ZM29.9634 11C34.9288 11 38.9541 15.0294 38.9541 20C38.9541 24.9706 34.9288 29 29.9634 29C24.9979 29 20.9726 24.9706 20.9726 20C20.9726 15.0294 24.9979 11 29.9634 11Z"/>                                          </svg>                                          </i>                                      </div>                                      <div id="sms-code-panel" class="code_panel">                                        <a class="send_ticket" href="javascript:;" id="getSMSCode">Get verification code</a>                                      </div>                                    </label>                                  </div>                                  <div class="security_Controller">                                    <label class="checkbox_area">                                      <input type="checkbox" id="trustSecurityController" class="checkbox">Using security control</label>                                  </div>                                  <div id="captcha"></div>                                  \x3c!-- \u9519\u8bef\u4fe1\u606f --\x3e                                  <div class="err_tip">                                    <div><em class="icon_error"></em><span class="error-con"></span></div>                                  </div>                                  <div class="btns_bg">                                    <input class="btnadpt" id="login-button" type="button" value="Sign in" />                                    <span id="custom_display_8" class="sns-default-container sns_default_container">                                      </span>                                  </div>                                  <div class="other_panel clearfix">                                    <span id="custom_display_256" class="sms_link">                                      <a href="javascript:;" class="btnadpt btn_gray login_type_link" id="ChangeLoginType">Sign in with SMS</a>                                    </span>                                    <div class="reverse" id="extra-links">                                      <div class="n_links_area reg_forget_links reg-forget-links" id="custom_display_64">                                        <a class="outer-link" href="/pass/register">Create account</a><span>|</span>                                        <a class="outer-link" href="/pass/forgetPassword">Forgot password?</a>                                      </div>                                      <div class="n_links_area sms_unavaliable_links sms-unavaliable-links"><a target="_blank" href="https://account.xiaomi.com/helpcenter/faq/_/02.faqs/05.sms-and-email-verification-code/faq-1">Can&#39;t receive verification code?</a></div>                                    </div>                                    \x3c!-- \u5176\u4ed6\u767b\u5f55\u65b9\u5f0f s --\x3e                                    <div style="display:none" class="other_login_type sns-login-container" id="custom_display_16">                                      <fieldset class="oth_type_tit">                                        <legend align="center" class="oth_type_txt">More options</legend>                                      </fieldset>                                      <div id="sns-login-links" class="oth_type_links">                                      </div>                                    </div>                                    \x3c!-- \u5176\u4ed6\u767b\u5f55\u65b9\u5f0f e --\x3e                                    <p class="acq_tips" style="display: none;"></p>                                  </div>                                </div>                            </div>                          </div>                        </div>                        <div class="tabs-con tabs_con" data-con="qr">                        </div>                        \x3c!-- tab con e --\x3e                      </div>                      <div class="ercode_area" id="login-qrcode">                        <div class="ercode_pannel">                          <a class="ercode code_close" href="javascript:void(0)" id="qrcode-close"></a>                          <div class="ercode_box">                            <div class="code_hd">                              <h3 class="code_tit">Scan QR code to sign in</h3>                                <p>Go to Settings > Mi Account on your Mi Phone and tap the Scanner icon to sign in using a QR code.<i id="qrcode-help" class="icon_help"></i></p>                            </div>                            <div class="code_iframe">                              <iframe style="background:#fff;" src="about:blank" id="qriframe" frameborder="0" scrolling="no" sandbox="allow-scripts allow-same-origin allow-top-navigation allow-modals"></iframe>                            </div>                            <div id="qr-apps">                              <fieldset class="oth_type_tit">                                <legend align="center" class="oth_type_txt">Xiaomi apps</legend>                              </fieldset>                              <div id="apps-panel" class="apps_panel">                              </div>                            </div>                            <div class="custom_sub_txt">                              <p id="custom-qr-name"></p>                              <p>Go to Settings > Mi Account on your Mi Phone to sign in using a QR code</p>                            </div>                          </div>                        </div>                      </div>                    </div>                  </div>                </div>              </div>            </div>',
        footer: '<div id="custom_display_4" class="n-footer">              <div class="nf-link-area clearfix">                <ul class="lang-select-list">                  <li><a href="javascript:void(0)" data-lang="zh_CN" class="lang-select-li">\u7b80\u4f53</a>|</li>                  <li><a href="javascript:void(0)" data-lang="zh_TW" class="lang-select-li">\u7e41\u4f53</a>|</li>                  <li><a href="javascript:void(0)" data-lang="en" class="lang-select-li">English</a>|</li>                  <li><a href="https://account.xiaomi.com/helpcenter/faq" target="_blank">FAQ</a>|</li>                  <li><a id="msg-privacy" href="javascript:void(0)" target="_blank">Privacy Policy</a></li>                </ul>              </div>              <p class="nf-intro"></p>            </div>',
        footerSgp: '<div id="custom_display_4" class="n-footer">                <div class="nf-link-area clearfix">                  <ul class="lang-select-list">                    <li><a href="javascript:void(0)" data-lang="en" id="first-lang-select" class="lang-select-li">English</a></li>                    <li class="page-footer-list">                      <button id="show-more-lang" class="show_more_lang show-more-lang">\u2026</button>|</li>                    <li><a href="https://account.xiaomi.com/helpcenter/faq" target="_blank">FAQ</a>|</li>                    <li><a id="msg-privacy" href="javascript:void(0)" target="_blank">Privacy Policy</a></li>                  </ul>                </div>                <p class="nf-intro"></p>              </div>',
        acRegister: '\x3c!-- \u53d6\u53f7\u6ce8\u518c --\x3e      <div class="tac mode_panel ac_register_panel">        <h1 class="ac_register_title">Create Mi Account</h1>        <div class="box">          <img src="https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/sim.png" alt="sim card" width="70" height="70">' + (y("_oauthAuthorize") ? '<div class="login_area xs_title_box">            <div class="description">              <p>                <span>Create account using current phone number (<span class="user-phone"></span>)</span>              </p>            </div>          </div>' : '<p>Phone:<span class="maskedPhone"></span></p>') + '</div>        <div class="err_tip">          <div class="dis_box"><em class="icon_error"></em><span class="error-con"></span></div>        </div>        <p class="agreeTip">I&#39;ve read and agreed to Xiaomi&#39;s <a href="javascript:void(0)" class="agreement_link">User Agreement</a> and <a href="javascript:void(0)" class="privacy_link">Privacy Policy</a>.</p>        <div class="fixed_bot"><a href="javascript:;" class="btnadpt ok_btn">' + (y("_oauthAuthorize") ? "Submit" : "Sign up now") + '</a>          <a href="javascript:;" class="btnadpt no_btn btn_gray">Sign in with another account</a>        </div>        <p class="acq_tips" style="display: none">\u53d6\u53f7\u6765\u6e90\u4e8e\u4e2d\u56fd\u79fb\u52a8</p>      </div>',
        setPwd: '<div class="mode_panel set_pwd_panel">                    <div class="set_pwd_con">                      <h4>Set your password:</h4>                      <label class="labelbox c_b">                        <input class="item_account set-password re-password" type="password" name="password" placeholder="Enter your password">                      </label>                      <label class="labelbox c_b">                        <input class="item_account set-password" name="repassword" type="password" placeholder="Confirm your password">                      </label>                      <div class="err_tip pwd_tip">                        <div class="dis_box"><em class="icon_error"></em><span class="error-con" data-origin="8-16characters, combining at least 2 of the following: digits, letters, and special symbols.">8-16characters, combining at least 2 of the following: digits, letters, and special symbols.</span></div>                      </div>                    </div>                    <div class="btns_bg t_c">                      <a id="register-button" class="btnadpt">Create account</a>                    </div>                  </div>'
    });
    var nc = gb(["help", "wrapper", U ? "footerSgp" : "footer"]);
    d.body.innerHTML = nc;
    (function () {
        if (U) {
            var a = [{
                key: "zh_CN",
                value: "\u200e\u4e2d\u6587(\u7b80\u4f53)\u200e",
                title: "\u9009\u62e9\u8bed\u8a00",
                data: "cn"
            }, {
                key: "zh_TW",
                value: "\u200e\u200e\u4e2d\u6587(\u7e41\u9ad4)\u200e",
                title: "\u9078\u64c7\u8a9e\u8a00",
                data: "tw"
            }, {
                key: "en",
                value: "\u200eEnglish",
                title: "Select Your Language",
                data: "en"
            }, {
                key: "ko_KR",
                value: "\ud55c\uad6d\uc5b4",
                title: "\uc5b8\uc5b4\ub97c \uc120\ud0dd\ud558\uc138\uc694"
            }, {
                key: "pt_BR",
                value: "Portugu\u00eas (Brasil)\u200e",
                title: "Selecione o seu idioma",
                data: "pt"
            }, {
                key: "in_ID",
                value: "Bahasa Indonesia",
                title: "Pilih Bahasa Anda",
                data: "id"
            }, {
                key: "hi_IN",
                value: "\u0939\u093f\u0928\u094d\u0926\u0940",
                title: "\u0905\u092a\u0928\u0940 \u092d\u093e\u0937\u093e \u091a\u0941\u0928\u0947\u0902",
                data: "hi_IN"
            }, {
                key: "ta_IN",
                value: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
                title: "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bc6\u0bbe\u0bb4\u0bbf\u0baf\u0bc8 \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
                data: "ta_IN"
            }, {
                key: "te_IN",
                value: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",
                title: "\u0c2e\u0c40 \u0c2d\u0c3e\u0c37\u0c28\u0c41 \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f",
                data: "te_IN"
            }, {
                key: "kn_IN",
                value: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
                title: "\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cad\u0cbe\u0cb7\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c86\u0caf\u0ccd\u0c95\u0cc6 \u0cae\u0cbe\u0ca1\u0cbf",
                data: "kn_IN"
            }, {
                key: "mr_IN",
                value: "\u092e\u0930\u093e\u0920\u0940",
                title: "\u0924\u0941\u092e\u091a\u0940 \u092d\u093e\u0937\u093e \u0928\u093f\u0935\u0921\u093e",
                data: "mr_IN"
            }, {
                key: "ml_IN",
                value: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
                title: "\u0d24\u0d3e\u0d19\u0d4d\u0d15\u0d33\u0d41\u0d1f\u0d46 \u0d2d\u0d3e\u0d37 \u0d24\u0d3f\u0d30\u0d1e\u0d4d\u0d1e\u0d46\u0d1f\u0d41\u0d15\u0d4d\u0d15\u0d41\u0d15",
                data: "ml_IN"
            }, {
                key: "bn_IN",
                value: "\u09ac\u09be\u0982\u09b2\u09be",
                title: "\u0986\u09aa\u09a8\u09be\u09b0 \u09ad\u09be\u09b7\u09be \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
                data: "bn_IN"
            }, {
                key: "th_TH",
                value: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
                title: "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e20\u0e32\u0e29\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
                data: "th_TH"
            }, {
                key: "vi_VN",
                value: "Ti\u1ebfng Vi\u1ec7t",
                title: "Ch\u1ecdn ng\u00f4n ng\u1eef c\u1ee7a b\u1ea1n",
                data: "vi_VN"
            }, {
                key: "ms_MY",
                value: "Bahasa Melayu",
                title: "Pilih Bahasa Anda",
                data: "ms_MY"
            }, {
                key: "tr_TR",
                value: "T\u00fcrk\u00e7e",
                title: "Dilini Se\u00e7",
                data: "tr_TR"
            }, {
                key: "ar",
                value: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                title: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u063a\u0629",
                data: "ar"
            }, {
                key: "ru_RU",
                value: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                title: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044f\u0437\u044b\u043a",
                data: "ru_RU"
            }, {
                key: "es_US",
                value: "Espa\u00f1ol (Am\u00e9rica)\u200e",
                title: "Seleccionar idioma",
                data: "es_US"
            }, {
                key: "uk_UA",
                value: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
                title: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043c\u043e\u0432\u0443",
                data: "uk_UA"
            }, {
                key: "uz_UZ",
                value: "O'zbekcha",
                title: "Tilni tanlang",
                data: "uz_UZ"
            }, {
                key: "as_IN",
                value: "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be",
                title: "\u09ad\u09be\u09b7\u09be \u099a\u09df\u09a8 \u0995\u09f0\u0995",
                data: "as_IN"
            }, {
                key: "fa_IR",
                value: "\u0641\u0627\u0631\u0633\u06cc",
                title: "\u0627\u0646\u062a\u062e\u0627\u0628 \u0632\u0628\u0627\u0646",
                data: "fa_IR"
            }, {
                key: "fr_FR",
                value: "Fran\u00e7ais",
                title: "S\u00e9lectionnez une langue",
                data: "fr_FR"
            }, {
                key: "it_IT",
                value: "Italiano",
                title: "Scegli la lingua",
                data: "it_IT"
            }, {
                key: "iw_IL",
                value: "\u05e2\u05d1\u05e8\u05d9\u05ea",
                title: "\u05d1\u05d7\u05e8 \u05e9\u05e4\u05d4",
                data: "iw_IL"
            }, {
                key: "my_MM",
                value: "\u1017\u1019\u102c",
                title: "\u1018\u102c\u101e\u102c\u1005\u1000\u102c\u1038\u1000\u102d\u102f\u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u1015\u102b",
                data: "my_MM"
            }, {
                key: "pl_PL",
                value: "Polski",
                title: "Wybierz j\u0119zyk",
                data: "pl_PL"
            }, {
                key: "es_ES",
                value: "Espa\u00f1ol (Espa\u00f1a)\u200e",
                title: "Selecciona idioma"
            }, {
                key: "cs_CZ",
                value: "\u010ce\u0161tina",
                title: "Vyberte jazyk"
            }, {
                key: "el_GR",
                value: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                title: "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b3\u03bb\u03ce\u03c3\u03c3\u03b1"
            }, {
                key: "nl_NL",
                value: "Nederlands",
                title: "Selecteer uw taal"
            }, {
                key: "de_DE",
                value: "Deutsch",
                title: "Sprache ausw\u00e4hlen"
            }, {
                key: "ja_JP",
                value: "\u65e5\u672c\u8a9e\u200e",
                title: "\u8a00\u8a9e\u3092\u9078\u629e"
            }, {
                key: "bs_BA",
                value: "Bosanski\u200e",
                title: "Izaberite jezik"
            }, {
                key: "hr_HR",
                value: "Hrvatski",
                title: "Izaberi jezik"
            }, {
                key: "fi_FI",
                value: "Suomi",
                title: "Valitse kieli"
            }, {
                key: "lv_LV",
                value: "Latvie\u0161u",
                title: "Izv\u0113l\u0113ties valodu"
            }, {
                key: "ne_IN",
                value: "\u0928\u0947\u092a\u093e\u0932\u0940",
                title: "\u092d\u093e\u0937\u093e \u091b\u0928\u094c\u091f \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d"
            }, {
                key: "pt_PT",
                value: "Portugu\u00eas (Portugal)",
                title: "Selecionar idioma"
            }, {
                key: "ro_RO",
                value: "Rom\u00e2n\u0103",
                title: "Selecta\u0163i limba"
            }, {
                key: "sr_RS",
                value: "\u0421\u0440\u043f\u0441\u043a\u0438",
                title: "\u0418\u0437\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0458\u0435\u0437\u0438\u043a"
            }, {
                key: "sk_SK",
                value: "Sloven\u010dina",
                title: "Vyberte jazyk"
            }, {
                key: "sl_SI",
                value: "Sloven\u0161\u010dina",
                title: "Izberite jezik"
            }, {
                key: "lt_LT",
                value: "Lietuvi\u0173",
                title: "Pasirinkite kalb\u0105"
            }, {
                key: "gu_IN",
                value: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",
                title: "\u0aad\u0abe\u0ab7\u0abe \u0aaa\u0ab8\u0a82\u0aa6 \u0a95\u0ab0\u0acb"
            }, {
                key: "hy_AM",
                value: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576",
                title: "\u0538\u0576\u057f\u0580\u0565\u056c \u056c\u0565\u0566\u0578\u0582\u0576"
            }, {
                key: "pa_IN",
                value: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",
                title: "\u0a2d\u0a3e\u0a36\u0a3e \u0a1a\u0a41\u0a23\u0a4b"
            }, {
                key: "ha_NG",
                value: "Hausa",
                title: "Zabi yare"
            }, {
                key: "kk_KZ",
                value: "\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456",
                title: "\u0422\u0456\u043b\u0434\u0456 \u0442\u0430\u04a3\u0434\u0430\u04a3\u044b\u0437"
            }, {
                key: "az_AZ",
                value: "Az\u0259rbaycan",
                title: "Dil se\u00e7in"
            }, {
                key: "or_IN",
                value: "\u0b13\u0b21\u0b3c\u0b3f\u0b06",
                title: "\u0b2d\u0b3e\u0b37\u0b3e \u0b1a\u0b5f\u0b28 \u0b15\u0b30\u0b28\u0b4d\u0b24\u0b41"
            }], b, c = ["<div class='modal-select-list-con'><ul class='lang-select-list lang_items_list c_b'>"], g = e("#first-lang-select"), h = e("#show-more-lang");
            t(a, function (a, d) {
                var e = "";
                a.key === JSP_VAR.locale && (b = a,
                    e = "current");
                c.push('<li><a href="javascript:void(0)" class="lang-select-li ' + e + '" data-lang="' + a.key + '">' + a.value + "</a></li>")
            });
            c.push("</ul></div>");
            b || (b = -1 !== JSP_VAR.locale.indexOf("zh") ? a[1] : a[2]);
            "en" !== b.key && (a = d.createElement("a"),
                a.href = "javascript:void(0)",
                a.className = "current",
                a.innerHTML = b.value,
                g.parentNode.insertBefore(a, g));
            var k = new ka({
                title: b.title,
                cls: "mod_acc_tip more-lang-modal",
                html: c.join(""),
                customDevice640: !0,
                modalfixed: !0,
                afterRender: function () { }
            });
            k.close();
            h.onclick = function () {
                k.show()
            }
        }
    }
    )();
    var Za;
    (function () {
        Za = new ka({
            title: "Tips",
            cls: "mod_acc_tip security-controller-modal",
            html: '<div id="sect-controller-panel" class="security_controller_panel"><h4>You need to install security plug-in to sign in securely.</h4><p>Security controls are used to encrypt your password and enhance the security of the account.</p><p>Click &quot;Install now&quot; button, and follow the steps.</p><div class="tip_msg">After the installation is complete, restart your browser.</div></div><div class="tip_btns"><a title="Install now" href="https://account.xiaomi.com/static/res/0369340/account-static/static/mipay/XiaomiCtrl.exe" class="btn_tip btn_commom btn-action-controller">Install now</a></div>',
            customDevice640: !0,
            modalfixed: !0,
            afterRender: function () { }
        });
        Za.close()
    }
    )();
    var $a = [{
        verifyList: {
            name: "mistore",
            deviceType: "PC"
        },
        src: "https://s1.mi.com/loginbanner.html",
        qrName: "Scan using <span>Mi Store</span> app"
    }, {
        verifyList: {
            name: "scfPortal",
            deviceType: "PC"
        },
        src: "https://scf.mi.com/loginbanner.html"
    }, {
        verifyList: {
            name: "mihomeMember",
            deviceType: "weixin"
        },
        src: "https://wx.men.mi.com/member/loginbanner.html",
        smsText: "Sign in with SMS",
        pwdText: "Sign in using password",
        bizBg: !0,
        errorBrdNone: !0,
        snsDefaultHide: !0
    }, {
        verifyList: {
            name: "miotstore",
            deviceType: "mobile"
        },
        title: "Welcome to Youpin"
    }, {
        verifyList: {
            name: "test",
            deviceType: "mobile"
        },
        src: "https://wx.men.mi.com/member/loginbanner.html",
        title: "Customized service title (Not recommended)"
    }, {
        verifyList: {
            name: "test",
            deviceType: "PC"
        },
        src: "https://static.account.xiaomi.com/uiTheme/html/loginbanner.html"
    }, {
        verifyList: {
            name: "fengOS",
            deviceType: "mobile"
        }
    }, {
        verifyList: {
            name: "poco",
            deviceType: "PC"
        }
    }, {
        verifyList: {
            name: "poco",
            deviceType: "mobile"
        }
    }]
        , Da = d.body
        , G = {
            click: "ontap" in d.body ? "tap" : "click",
            focus: "focus",
            blur: "blur",
            keyup: "keyup",
            keypress: "keypress",
            keydown: "keydown"
        }
        , D = {
            SMS_CODE: "Verification code",
            PHONE_NUM: "Phone number",
            VERIFY_PASSWORD: "Enter password",
            VERIFY_PASSWORD_SUBMIT: "OK",
            user_text_empty: "Enter your email address or phone number",
            user_tel_empty: "Enter phone number",
            user_text_rule: "Invalid username format",
            user_tel_rule: "The phone number is invalid",
            password_password_empty: "Enter your password",
            repassword_password_empty: "Confirm your password",
            password_password_rule: "8-16characters, combining at least 2 of the following: digits, letters, and special symbols.",
            repassword_password_rule: "Passwords don&#39;t match",
            PASSWORD_FORMAT: "8-16characters, combining at least 2 of the following: digits, letters, and special symbols.",
            visiablepwd_text_empty: "Enter your password",
            password_number_empty: "Enter code",
            password_number_rule: "The code is invalid",
            password_tel_empty: "Enter code",
            password_tel_rule: "The code is invalid",
            captCode_text_empty: "Enter verification code",
            captCode_text_rule: "The code you entered is incorrect",
            nochance: "You&#39;ve exceeded the number of verification attempts allowed within 24 hours.",
            send_again: "Resend",
            send_hold: "Resend code{time}",
            leftTimesText: "{left} attempt{plural} remaining",
            INIT_CODE_TEXT: "Get verification code",
            Register_Error: "Couldn&#39;t create account",
            TOKEN_EXPIRE: "Your verification info expired, try again.",
            USER_RES_ERROR: "Invalid username format",
            PWD_RES_ERROR: "Invalid password",
            PWD_INPUT_EMPTY: "Enter your password",
            CODE_INPUT_ERROR: "The code you entered is incorrect",
            CODE_RES_ERROR: "The code you entered is incorrect",
            No_PWD_USER_TIP: "If you don&#39;t have a password, sign in using SMS or select &quot;Forgot password&quot; to restore it.",
            LOGIN_RES_ERROR: "The account ID or password you entered is incorrect.",
            TooMuchRegister: "This phone has been associated with several Mi Accounts in a short period of time. Try using another phone number.",
            REFRESH_IMG_TIP: "Send another verification code",
            LOGIN_FORZEN: "This account has been suspended.",
            POPULAR: "Frequently used",
            INTERNAL_ERROR: "An error occurred",
            NETWORK_ERROR: "Connection timed out. Try again.",
            PHONE_INPUT_ERROR: "The phone number is invalid",
            FORBIDDEN: "Too many sign in attempts. Try again later.",
            SUBMIT_REGISTER_SECOND: "Create ({second}s)",
            SUBMIT_REGISTER: "Create",
            SUBMIT_LOGIN_SECOND: "Yes ({second}s)",
            SUBMIT_LOGIN: "Yes",
            MSG_REGISTER: "Create",
            MSG_LOGIN: "Sign in"
        }
        , $ = {
            _json: "true",
            callback: JSP_VAR.callback,
            sid: JSP_VAR.sid,
            qs: JSP_VAR.qs,
            _sign: JSP_VAR._sign,
            serviceParam: JSP_VAR.serviceParam
        }
        , Qa = {
            phone: ""
        }
        , O = {
            0: function (a, b, c) {
                l.clientAcq && (W.resetCookie(),
                    l.clientAcq = !1);
                s.add("loginPost", "success", a);
                LStore.remove("loginNeedCode");
                s.add("securityStatus", a.securityStatus);
                L({
                    biz: "login",
                    type: k.tickType,
                    step: "success"
                });
                0 === (a.securityStatus || 0) ? (L({
                    biz: "login",
                    type: k.tickType,
                    step: "end"
                }),
                    ob(c, a.userId),
                    href = a.location) : (L({
                        biz: "login",
                        type: k.tickType,
                        step: "endIdentity"
                    }),
                        href = a.notificationUrl);
                s.add("href", href);
                location.href = href
            },
            81003: function (a, b, c) {
                s.add("loginPost", "step2", a);
                LStore.remove("loginNeedCode");
                ob(c, a.userId);
                c = La($);
                c.user = encodeURIComponent(b);
                a.qs ? c.qs = encodeURIComponent(a.qs) : delete c.qs;
                a.userId && (c.userId = encodeURIComponent(a.userId));
                a.phone && (c.phoneHint = encodeURIComponent(a.phone));
                a.backupPhone && (c.backupPhone = encodeURIComponent(a.backupPhone));
                c._sign = encodeURIComponent(a._sign);
                c.callback = encodeURIComponent(a.callback);
                c.sid = encodeURIComponent(a.sid);
                c.app = !0;
                a = ["_locale", "_customDisplay", "lsrp_appName", "mini"];
                b = 0;
                for (var d, e; d = a[b++];) {
                    (e = y(d)) && (c[d] = encodeURIComponent(e))
                }
                s.add("twoStepLogin", "queryObj", c);
                c = k.twoStepURL + "?" + q(c);
                location.href = c
            },
            70016: qb,
            20003: function () {
                H.show(D.USER_RES_ERROR, b.userName)
            },
            87001: function (a, c) {
                L({
                    biz: "login",
                    type: k.tickType,
                    step: "captchaError"
                });
                s.add("resNeedCaptcha", "useManMachineError", l.useManMachineError);
                if (X && !l.useManMachineError) {
                    X.start({
                        activeVerify: !0
                    })
                } else {
                    var d = !0;
                    k.captchaNeed || (k.captchaNeed = 1,
                        LStore.set("loginNeedCode", "1", 900000));
                    k.captchaInit || (d = !1,
                        pb(a.captchaUrl));
                    sa(b.captchaImg, a.captchaUrl);
                    d && H.show(D.CODE_RES_ERROR, b.captchaCode);
                    a.send && ma(D.send_again, !1)
                }
            },
            350008: function (a) {
                H.show(D.LOGIN_FORZEN, b.userName)
            },
            403: sb,
            fail: tb,
            10001: tb,
            100001: sb,
            network: function (a) {
                H.show(D.NETWORK_ERROR)
            },
            "default": qb,
            21327: rb,
            21314: rb,
            70002: function () {
                H.show(D.No_PWD_USER_TIP)
            },
            70014: Na,
            10031: Na,
            10017: Na,
            70008: function () {
                H.show(D.user_tel_rule, b.userName)
            },
            70009: function () {
                H.show(D.user_tel_empty, b.userName)
            },
            70022: function (a) {
                a.send && (Ua(na.left = 0),
                    ma(D.send_again, !1))
            },
            20023: function () {
                var a = e(".btn-box", b[l.currentView])[0];
                H.show(D.TooMuchRegister);
                v(a)
            },
            regFail: function () {
                H.show(D.Register_Error)
            }
        }
        , ab = {
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            DEL: 46,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            SPACE: 32,
            WIN: 91,
            COMMAND: 91,
            DOWN: 40
        }
        , oc = c.matchMedia && c.matchMedia("screen and (prefers-color-scheme: dark)").matches;
    /PassportSDK\/[\w|.]* passport-ui/i.test(navigator.userAgent);
    var Jb = /PassportSDK\/[\w|.]* passport-ui\/(\d+.\d+.\d+)/i.test(navigator.userAgent) ? RegExp.$1 : !1
        , Kb = /iosPassportSDK\/(\d+.\d+.\d+)/i.test(navigator.userAgent) ? RegExp.$1 : !1
        , pc = 0 === JSP_VAR.locale.indexOf("zh") ? "zh_CN" === JSP_VAR.locale ? "zh_CN" : "zh_TW" : 0 === JSP_VAR.locale.indexOf("en_") ? "en" : JSP_VAR.locale
        , qc = JSP_VAR.dataCenterZone
        , rc = JSP_VAR.deviceType
        , sc = "mobile" === JSP_VAR.deviceType ? "wap" : "web"
        , tc = function () {
            var a = y("_qrsize");
            return parseInt(a) || 270
        }()
        , uc = function () {
            var a = "";
            JSP_VAR.dataCenterZone && "India" === JSP_VAR.dataCenterZone && (a = "ticket");
            var a = y("_loginType") || a
                , b = "all pwd qr ticket pwdonly ticketonly".split(" ")
                , c = parseInt(a) || 0;
            return Z(b, a) ? a : b[c] || "all"
        }()
        , vc = JSP_VAR.region
        , wc = "TW" === JSP_VAR.region
        , xc = U ? "Xiaomi Inc., All rights reserved" : "Xiaomi Inc., All rights reserved - Beijing ICP - 10046444 - <a class='beian-record-link' target='_blank'><span></span>Beijing Public Security ICP-11010802020134</a> - Beijing ICP licence No. - 110507"
        , yc = "PC" !== JSP_VAR.deviceType
        , zc = !U
        , Ac = JSP_VAR.privacyLink
        , Bc = JSP_VAR.isPreview || location.href.indexOf("_debugMode") ? 100 : _t_.samplingRate
        , Cc = _t_.samplingBase
        , Dc = "placeholder" in d.createElement("input")
        , Ec = LStore.get("loginNeedCode")
        , Fc = "PC" !== JSP_VAR.deviceType
        , Gc = function () {
            //TODO: hack
            return false;

            var a = !(!U && "zh_CN" === JSP_VAR.locale)
                , b = navigator.userAgent;
            t(["Windows CE", "MSIE 7.0; Windows Phone OS 7.0", "MSIE 6.0; Windows NT 5.1"], function (c, d) {
                -1 !== b.indexOf(c) && (a = !1)
            });
            return a
        }()
        , Hc = function () {
            var a = U ? ["facebook"] : ["qq", "weibo", "alipay", "weixin"];
            if (U) {
                /(PassportSDK)|(OAuthSDK)|(OAuthMIUI)/ig.test(navigator.userAgent) || a.push("google")
            } else {
                if ("mobile" === JSP_VAR.deviceType && !/MQQBrowser|UCBrowser|[^mobile] safari/gi.test(navigator.userAgent)) {
                    for (var b in a) {
                        "weixin" === a[b] && a.splice(b, 1)
                    }
                }
            }
            ("Safari" === aa.name || mc) && a.push("apple");
            return a
        }()
        , Ic = function () {
            var a = "qq weibo alipay weixin facebook google".split(" ")
                , b = "";
            /micromessenger/i.test(navigator.userAgent) && (b = "weixin");
            y("_snsdefault") && Z(a, y("_snsdefault")) && (b = y("_snsdefault"));
            return b
        }()
        , Jc = "true" === y("_snsNone") ? !0 : !1;
    /passportsdk\/(notificationwebview|PassportHybridView)/i.test(navigator.userAgent) && w(d.body, "sys_wv");
    var k = {
        locale: pc,
        dataCenterZone: qc,
        deviceType: rc,
        tickType: sc,
        uiThemePath: "https://static.account.xiaomi.com/uiTheme/css/",
        md5pwd: !0,
        infoUrl: "/pass/js/info?type=notice",
        logoWidth: 50,
        qrsize: tc,
        loginType: uc,
        region: vc,
        regionTW: wc,
        copyRight: xc,
        copyRightHide: yc,
        getPhoneOn: !1,
        enableSMS: zc,
        privacyLink: Ac,
        samplingRate: Bc,
        samplingBase: Cc,
        supportPlaceholder: Dc,
        captchaNeed: Ec,
        twoStepURL: "/pass/2StepLogin/login",
        enableVisiablePwd: Fc,
        enableCode: Gc,
        snsLoginItem: Hc,
        snsDefault: Ic,
        snsNone: Jc,
        ismiui: void 0,
        default1px_gif: "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==",
        beianRecordLink: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134",
        beianRecordImg: "https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png",
        captchaTpl: '<div class="lgncode c_b"><label class="labelbox code_label"><input id="captcha-code" class="code" name="captCode" type="text" placeholder="Image verification" autocomplete="off"></label><img class="chkcode_img" id="captcha-img" src="about:blank" alt="Send another verification code"></div>',
        captChaURL: "/pass/getCode?icodeType=login",
        cookieUsageTpl: '<i class="warning_white"></i><div class="text_content"><p class="warning_text">Attention</p><p>This website uses cookies to store info on your device. Cookies help our website work normally and show us how we can improve your user experience. By using this website, you agree to our cookie policy.</p></div><button class="close_cookie_usage close-cookie-usage"><i class="icon_close"></i><span class="btn-text">Agree</span></button>',
        oauthInitNum: 2,
        oauthTpl: '<div class="oauth_box"><p class="title">By signing in you&#39;re granting this app the following permissions</p><div class="scope_list"></div><div class="oauth_wrap clearfix"><a href="javascript:;" class="wrap_more fl">More</a><i class="icon_caret fl"></i></div></div>',
        oAuthorizeTpl: "ticket" === y("_loginType") ? '<div class="login_area xs_title_box">              <div class="content_title">To ensure the security of your account, verify your phone number.</div>              <div class="description">                <p>                  <span class="verify-tip">Send verification code to phone</span>                  <span class="ff6 verify-masked">{verify-masked}                  </span>                </p>              </div>            </div>' : '<div class="login_area xs_title_box">              <div class="description">                <p>                  <span class="verify-tip">Email address <span class="ff6">{verify-masked}</span> is already associated with an existing account. Verify password to add this email address.</span>                </p>              </div>            </div>',
        ercodeTpl: '<div class="ercode_tip">                <div class="title">1. How do I sign in using a QR code?</div><p>Go to Settings > Mi Account, and then tap the scanner icon in the upper corner of the screen. Scan the QR code to sign in.</p>                <div class="title">2. Can I use other Xiaomi apps to sign in using a QR code?</div><p>Yes! Mi Home, Mi Store, and Mi AI Speaker will do the job.</p>                <div class="title">3. Can I use third party app scanners?</div><p>You can use WeChat, Weibo, and QQ.</p>              </div>              <div style="display:none;" class="t_c">                <a class="btnadpt plain" href="" title="View details">View details</a>              </div>',
        bizTheme: {
            bizName: JSP_VAR.theme,
            bizDeviceType: JSP_VAR.bizDeviceType
        },
        useManMachine: "true" === JSP_VAR.useManMachine,
        zoneDic: {
            China: "cn",
            Russia: "ru"
        },
        oAuthorize: "true" === y("_oauthAuthorize"),
        uUserName: decodeURIComponent(y("_userName")) || "",
        userMask: JSP_VAR.userMask,
        fromTw: "true" === JSP_VAR.fromTw,
        hideQrApps: "true" === y("_hideQrApps") ? !0 : !1,
        hideCookieUse: "true" === y("_hideCookieUse") ? !0 : !1
    }, Kc = k.enableCode, Lb;
    Lb = ha && ha.length && Ia(ha) ? ha[0].toLowerCase() : "pwd";
    var l = {
        lockSubmit: 0,
        codeShown: !1,
        codeInit: !1,
        enableCode: Kc,
        loginType: Lb,
        registerPwd: 0,
        clientAcq: !1,
        maskedPhone: "",
        currentView: "loginMain",
        showCustomPage: function () {
            for (var a = {
                deviceType: k.bizTheme.bizDeviceType,
                name: k.bizTheme.bizName
            }, b = 0; b < $a.length; b++) {
                var c = $a[b];
                if (C(a, c.verifyList)) {
                    return k.currentBiz = c,
                        !0
                }
            }
            return !1
        }(),
        useManMachineError: !1
    }
        , ba = {
            LOGO: 1,
            QRTRIGGER: 2,
            FOOTER: 4,
            SNSDEFAULT: 8,
            SNSLOGIN: 16,
            SMSBTN: 256,
            OUTERLINK: 64
        }
        , kb = {
            qq: "Sign in with QQ",
            weibo: "Sign in with Weibo",
            weixin: "Sign in with WeChat",
            alipay: "Sign in with Alipay",
            facebook: "Sign in with Facebook",
            google: "Sign in with Google",
            apple: "Sign in with Apple"
        }
        , b = {
            body: d.body,
            layout: e("#layout"),
            footer: e(".n-footer")[0],
            header: e("#login-title"),
            loginMain: e("#login-main"),
            mainContent: e("#main-content"),
            loginQr: e("#login-qrcode"),
            loginButton: e("#login-button"),
            qrIframe: e("#qriframe"),
            qrTrigger: e("#qrcode-trigger"),
            qrClose: e("#qrcode-close"),
            regionCode: e("#region-code"),
            codeSelector: e("#countrycode_selector"),
            codeContainer: e("#countrycode_container"),
            codeContainerCon: e("#countrycode_container_con"),
            codeValue: e("#countrycode_value"),
            manualCode: e("#manual_code"),
            userName: e("#username"),
            snsLogin: e("#sns-login-links"),
            pwd: e("#pwd"),
            outerLink: e(".outer-link"),
            captcha: e("#captcha"),
            langSelect: e(".lang-select-li"),
            mainForm: e("#login-main-form"),
            error: e("#error-outcon"),
            accountInfo: e("#account-info"),
            accountAvator: e("#account-avator"),
            accountAvatorCon: e("#account-avator-con"),
            accountDisplayname: e("#account-displayname"),
            snsDefaultCon: e(".sns-default-container")[0],
            snsLoginCon: e(".sns-login-container")[0],
            recordLink: e(".beian-record-link")[0],
            pwdVisiable: k.enableVisiablePwd && e("#visiablePwd"),
            toggleVisiable: e(".pwd-visiable")[0],
            pwdEye: e(".pwd-eye"),
            msgPrivacy: e("#msg-privacy"),
            securityControllerPanel: e(".security_Controller")[0],
            securityController: e("#trustSecurityController"),
            navTabs: e("#nav-tabs"),
            tabsCon: e(".tabs-con"),
            copyRight: e(".nf-intro")[0],
            bannerIframe: e("#bgiframe"),
            customQrName: e("#custom-qr-name"),
            loginPanel: e(".login-panel")[0],
            smsCodePanel: e("#sms-code-panel"),
            phone: e("#phoneNum"),
            smsCode: e("#ticket"),
            getSmsCode: e("#getSMSCode"),
            changeLoginType: e("#ChangeLoginType"),
            acBox: e(".ac-box")[0],
            loadingMask: e("#loadingMask"),
            extraLinks: e("#extra-links"),
            qrhelp: e("#qrcode-help"),
            appsPanel: e("#apps-panel"),
            qrApps: e("#qr-apps"),
            help: e(".help-panel")[0]
        }
        , K = {};
    t("ABCDEFGHIGKLMNOPQRSTUVWXYZ".split(""), function (a, b) {
        ab[a] = a.charCodeAt()
    });
    t("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIGKLMNOPQRSTUVWXYZ".split(""), function (a) {
        a.charCodeAt()
    });
    var Q = {
        data: {
            "*#*#284#*#*": function () {
                var a = "";
                t(s.get(), function (b) {
                    try {
                        a += z(p(b)) + "<br/>"
                    } catch (c) {
                        a += "stringfy \u51fa\u9519<br>"
                    }
                });
                d.write(a);
                d.close()
            }
        },
        history: [],
        tmpVal: ""
    }
        , Mb = function () {
            var a = {};
            x(Da, G.keydown, function (b) {
                b = b || c.event;
                var d = b.keyCode || b.charCode, e = b.target || b.srcElement, g;
                d in a && t(a[d] || [], function (a, b) {
                    !1 === a.call(e || c) && (g = !1)
                });
                !1 === g && (b.returnValue = !1,
                    b.preventDefault && b.preventDefault())
            });
            return {
                on: function (b, c) {
                    (a[b] || (a[b] = [])).push(c)
                },
                off: function (b, c) {
                    var d = a[b] || (a[b] = []);
                    t(d, function (a, b) {
                        c === a && d.splice(b, 1)
                    })
                }
            }
        }()
        , jb = function () {
            var a = "PC" === k.deviceType
                , b = {
                    qq: "100284651",
                    weibo: "2996826273",
                    weixin: a ? "wxxmzh" : "wxxmh5",
                    alipay: "2088011127562160",
                    facebook: "222161937813280",
                    google: "google",
                    apple: "YXBwbGVfeGlhb21p"
                }
                , a = a ? "snsapi_login" : "snsapi_userinfo"
                , c = decodeURIComponent(y("third"));
            c || (c = encodeURIComponent(JSP_VAR.callback) + "&sid=" + JSP_VAR.sid);
            var d = {}, e;
            for (e in b) {
                d[e] = "/pass/sns/login/auth?" + ["appid=" + b[e], "weixin" === e ? "scope=" + a : "", "callback=" + c].join("&")
            }
            return function (a) {
                return a ? d[a] : d
            }
        }()
        , Lc = function () {
            for (var a = location.search.substring(1).split("&"), b = 0; b < a.length; b++) {
                0 === a[b].indexOf("_locale=") && (a.splice(b, 1),
                    b--)
            }
            return function (b) {
                return "?" + a.join("&") + "&_locale=" + b
            }
        }()
        , H = function () {
            return {
                show: function (a, c) {
                    var d = D[a] || a
                        , g = e(".err_tip", b[l.currentView])[0]
                        , h = e(".error-con", g)[0];
                    c && (k.currentBiz && k.currentBiz.errorBrdNone ? F(c.parentNode, "error_bg") : w(c.parentNode, "error_bg"));
                    c && "captCode" === c.name && (c.value = "");
                    h.innerHTML = d;
                    F(g, "pwd_tip");
                    B(g, !0)
                },
                clean: function (a) {
                    var c = e(".err_tip", b[l.currentView])[0]
                        , d = e(".error-con", c)[0];
                    a && F(a.parentNode, "error_bg");
                    a && I(a, "set-password") ? (w(c, "pwd_tip"),
                        d.innerHTML = D.PASSWORD_FORMAT) : (v(c),
                            d.innerHTML = "")
                }
            }
        }()
        , va = function () {
            return function (a, b) {
                if ("number" === typeof a) {
                    for (var c = 0; 8 >= c; c++) {
                        var d = a & 1 << c
                            , g = b
                            , h = e("#custom_display_" + d);
                        d && (g ? B(h) : v(h))
                    }
                }
            }
        }()
        , Pa = {}
        , ta = ""
        , ic = 60
        , Ra = null
        , Ta = {}
        , na = {}
        , ua = "getSmsCode";
    x(b.getSmsCode, "click", function () {
        L({
            biz: "login",
            type: k.tickType,
            step: "sendPhoneTicket"
        });
        c.onetrack && onetrack("track", "click_phone_get_sms");
        if (!I(this, "disabled")) {
            ea(b.mainForm);
            ua = "getSmsCode";
            var a = "+86" === r(b.codeValue.innerHTML) ? r(b.userName.value) : r(b.codeValue.innerHTML) + r(b.userName.value)
                , d = {
                    sid: "passport"
                };
            Ka(b.mainForm, "password", function (b) {
                s.add("getSmsCode", b);
                b && !za(b) && (d = N(d, b),
                    l.clientAcq && b.user === l.maskedPhone ? (d.userHash = W.hash,
                        b.user && delete b.user) : l.clientAcq = !1,
                    X ? (X.start({
                        uid: a,
                        a: (k.zoneDic[JSP_VAR.dataCenterZone] || "en") + "-ticket-login"
                    }),
                        X.sendData = d) : Cb(d))
            })
        }
    });
    var W = function () {
        var a = function () {
            var a = Base64.decode(g("operator")) || ""
                , c = Base64.decode(g("operatorLink")) || ""
                , d = e(".acq_tips", b[l.currentView])[0];
            d.innerHTML = '<a href="' + c + '">' + a + "</a>";
            B(d)
        };
        return {
            start: function () {
                var c = g("hash");
                "" !== c && "" !== g("activatorToken") && Ajax({
                    url: "/pass/phoneInfo",
                    method: "POST",
                    data: {
                        userHash: c,
                        sid: $.sid
                    },
                    success: function (c) {
                        s.add("phoneInfo", c);
                        K = c = m(c);
                        if (0 === c.code) {
                            switch (l.clientAcq = !0,
                            l.registerPwd = c.data.registerPwd,
                            l.maskedPhone = c.data.phone,
                            c.data.status) {
                                case 2:
                                    a();
                                    b.userName.value = c.data.phone;
                                    break;
                                case 0:
                                    Oa("acRegister", "ac-register", c),
                                        e(".maskedPhone", b.acRegister)[0].innerText = l.maskedPhone,
                                        a(),
                                        yb()
                            }
                        }
                    }
                })
            },
            resetCookie: function () {
                A("hash", "", -1, "/", ".account.xiaomi.com", wa);
                A("activatorToken", "", -1, "/", ".account.xiaomi.com", wa);
                A("operator", "", -1, "/", ".account.xiaomi.com", wa);
                A("operatorLink", "", -1, "/", ".account.xiaomi.com", wa)
            },
            hash: g("hash")
        }
    }()
        , Mc = {
            start: function (a) {
                c.miAccGetTokenHandler = function (a) {
                    0 === a.code && ((new Image).src = a.url)
                }
                    ;
                (function (a) {
                    var b = d.createElement("script");
                    b.src = a;
                    d.body.insertBefore(b, d.body.firstChild)
                }
                )("https://act.account.xiaomi.com/h5/getAccessToken")
            }
        };
    s.add("JSP_VAR", c.JSP_VAR);
    s.add("dataCenterZone", c.JSP_VAR.dataCenterZone);
    s.add("locale", c.JSP_VAR.locale);
    s.add("_d_", c._d_);
    s.add("_t_", c._t_);
    s.add("bizConfig", $a);
    s.add("CONF", k);
    s.add("STAT", l);
    s.add("MSG", D);
    s.add("env", kc);
    s.add("browser", aa);
    s.add("search", location.search);
    s.add("FROMTW", k.fromTw);
    s.add("=====================================\u5206\u5272\u7ebf==========================", "=====================================================================");
    L({
        biz: "login",
        type: k.tickType,
        step: 0
    });
    c.onetrack && onetrack("trackPage", {
        page: "view_setting_" + Ca() + "_login_page"
    });
    k.getPhoneOn && Mc.start();
    x(Da, "PC" === k.deviceType ? G.keypress : "input", function (a) {
        a = a || c.event;
        if ("input" === a.type && "user" === a.target.name) {
            if (a = a.target.value) {
                Q.tmpVal = a
            }
        } else {
            if (a = a.charCode || a.keyCode) {
                Q.tmpVal += String.fromCharCode(a)
            }
        }
        clearTimeout(Q.tc);
        Q.tc = setTimeout(jc, 50)
    });
    if (l.showCustomPage) {
        var Ea = k.bizTheme.bizName
            , bb = k.bizTheme.bizDeviceType;
        Ea && bb && Ub("link", k.uiThemePath + Ea + "/login_" + Ea + ("PC" === bb ? ".css" : "weixin" === bb ? "_wx.css" : "_wap.css"), "v3");
        w(b.body, Ea + "_theme");
        k.currentBiz && (k.currentBiz.qrName && (b.customQrName.innerHTML = k.currentBiz.qrName),
            b.bannerIframe && k.currentBiz.src && (b.bannerIframe.src = k.currentBiz.src),
            k.currentBiz.title && (b.header.innerHTML = k.currentBiz.title),
            k.currentBiz.navTitle && (b.navTabs.innerHTML = k.currentBiz.navTitle),
            k.currentBiz.snsDefaultHide && va(ba.SNSDEFAULT));
        Fb()
    }
    U && w(b.body, "foreign");
    oc && w(b.body, "viewblack");
    !y("_noAcq") && k.enableSMS && y("lsrp_appName") && W.start();
    if (l.enableCode) {
        var Fa = k.regionTW ? "TW" : RegionsCode.search(k.region || k.locale.split("_")[1] || "cn");
        k.fromTw ? (b.codeValue.innerHTML = "+886",
            w(b.regionCode, "disable")) : Fa && (s.add("DefaultRegion", Fa),
                RegionsCode.addUsual(Fa),
                b.codeValue.innerHTML = k.regionTW ? "+886" : (Fa.N + "").replace(/^00/, "+"))
    }
    n(b.userName);
    n(b.pwd);
    ha && ha.length && ("ticket" === l.loginType && Va(l.loginType),
        1 === ha.length && v(b.changeLoginType));
    if ("qr" === k.loginType) {
        ra(!0)
    } else {
        if ("all" !== k.loginType) {
            var Nb = !1;
            0 < k.loginType.indexOf("only") && (Nb = !0,
                Ba(!0),
                w(b.navTabs, "only"));
            l.loginType = k.loginType.split("only")[0];
            Va(l.loginType, Nb)
        }
    }
    y("_showQr") && ("false" === y("_showQr") ? Ba(!0) : "true" === y("_showQr") && B(b.qrTrigger, !0));
    x(b.qrTrigger, G.click, ra);
    x(b.qrClose, G.click, Ba);
    x(b.qrTrigger, G.focus, function () {
        Mb.on(ab.SPACE, ra)
    });
    x(b.qrTrigger, G.blur, function () {
        Mb.off(ab.SPACE, ra)
    });
    k.oAuthorize && w(b.body, "o_authorize");
    var xa = "";
    try {
        xa = c.miui.getDeviceCloudHashId(),
            s.add("deviceId", xa)
    } catch (Tc) { }
    if (xa && 10 < xa.length) {
        var wa = 1892160000;
        A("deviceId", xa, 21900, "/", ".account.xiaomi.com", wa)
    }
    t(b.outerLink, function (a, b) {
        var d = a.href
            , e = "";
        /\/pass\/(\w+)/.test(d) && (e = RegExp.$1);
        a.href = d + location.search;
        s.add("outerlink" + b, d);
        x(a, "click", function () {
            L({
                biz: "login",
                type: k.tickType,
                step: e
            });
            "forgetPassword" === e ? c.onetrack && onetrack("track", "click_forgetpwd_link") : c.onetrack && onetrack("track", "click_register_link")
        })
    });
    s.add("outerlinkDone", "done");
    b.msgPrivacy && (b.msgPrivacy.href = k.privacyLink);
    b.copyRight.innerHTML = k.copyRight;
    b.recordLink = e(".beian-record-link")[0];
    k.copyRightHide && v(b.copyRight);
    if (k.snsDefault) {
        var S = $b(k.snsDefault);
        S && b.snsDefaultCon && (b.snsDefaultCon.innerHTML = S,
            x(b.snsDefaultCon, "click", function () {
                L({
                    biz: "login",
                    type: k.tickType,
                    step: k.snsDefault
                })
            }))
    } else {
        S = "";
        s.add("snsLoginItem", k.snsLoginItem);
        for (var P in k.snsLoginItem) {
            var Y = k.snsLoginItem[P]
                , S = S + ('<a class="icon_type btn_' + Y + ' sns-login-link" data-type="' + Y + '" href="javascript:void(0)" title="' + kb[Y] + '"><i class="btn_sns_icontype icon_default_' + Y + '"></i></a>')
        }
        S && b.snsLogin && (b.snsLogin.innerHTML = S);
        t(e(".sns-login-link", b.snsLogin), function (a, b) {
            var d = a.getAttribute("data-type")
                , e = jb(d);
            s.add("snsloginlink", d, e);
            e && (a.href = e,
                a.target = "_blank");
            x(a, "click", function () {
                L({
                    biz: "login",
                    type: k.tickType,
                    step: d
                });
                var a = d;
                "weixin" === d ? a = "wechat" : "facebook" === d && (a = "fb");
                c.onetrack && onetrack("track", "click_" + a + "_login")
            })
        });
        b.snsLoginCon && B(b.snsLoginCon, !0)
    }
    t(b.langSelect, function (a, b) {
        var c = a.getAttribute("data-lang");
        c === k.locale ? w(a, "current") : (a.href = Lc(c),
            s.add("langInit", c))
    });
    s.add("linkInit", "done", "register,forgetPwd,snsLogin,languageSelect,loginBanner");
    k.captchaNeed && k.useManMachine && (s.add("captchaNeed", "pageinitNeed"),
        pb(),
        sa(b.captchaImg));
    if ("mobile" === k.deviceType) {
        var Ga = d.createElement("div");
        Ga.id = "btn-clear-link";
        Ga.className = "clear_link_panel";
        Ga.innerHTML = '<span class="clear_link"></span>';
        b.regionCode.appendChild(Ga);
        b.clearLink = e("#btn-clear-link")
    }
    b.inputs = la(b.layout);
    t(b.inputs, function (a, c) {
        fa.on(a, function (a, c) {
            ea(b[l.currentView])
        })
    });
    fa.on(b.userName, function (a, c) {
        l.clientAcq && (b.userName.value = "",
            v(b.acqTipsMain),
            W.resetCookie(),
            l.clientAcq = !1);
        var d = Ja(a, !0);
        ea(b.mainForm);
        b.clearLink && (r(b.userName.value) ? B(b.clearLink, !0) : v(b.clearLink));
        l.enableCode && "pwd" === l.loginType && vb(d)
    });
    fa.on(b.pwd, function (a, c) {
        ea(b.mainForm);
        b.pwdVisiable && (b.pwdVisiable.value = a);
        "number" === b.pwd.type && (b.pwd.value = a.slice(0, 6))
    });
    b.pwdVisiable && fa.on(b.pwdVisiable, function (a, c) {
        ea(b.mainForm);
        b.pwd.value = a
    });
    x(b.toggleVisiable, "click", function (a) {
        a = a || c.event;
        b.toggleVisiable.__visiable ? (b.toggleVisiable.__visiable = !1,
            F(b.pwdEye, "chk"),
            B(b.pwd),
            v(b.pwdVisiable),
            T(b.pwd, "focus")) : (b.toggleVisiable.__visiable = !0,
                w(b.pwdEye, "chk"),
                v(b.pwd),
                B(b.pwdVisiable),
                T(b.pwdVisiable, "focus"));
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    b.clearLink && x(b.clearLink, "click", function () {
        var a = la(b.loginMain, !1, "visiablepwd");
        t(a, function (a, b) {
            a.value = ""
        });
        "pwd" === l.loginType && F(b.regionCode, "add_regioncode");
        v(b.clearLink);
        T(b.userName, "focus")
    });
    x(b.changeLoginType, "click", function () {
        L({
            biz: "login",
            type: k.tickType,
            subBiz: "ticket" === l.loginType ? "pwd" : "ticket",
            step: "changeLoginType"
        });
        c.onetrack && onetrack("track", "click_" + Ca(!0) + "_login_link");
        "ticket" !== l.loginType ? l.loginType = "ticket" : l.loginType = "pwd";
        Va(l.loginType);
        s.add("loginType", l.loginType)
    });
    if (!0 === JSP_VAR.showActiveXControl) {
        if ("IE" === aa.name || "Firefox" === aa.name) {
            B(b.securityControllerPanel, !0),
                s.add("activeXControl", "true")
        }
    } else {
        v(b.securityControllerPanel)
    }
    var Ob = !1;
    b.securityController && (b.securityController.checked = Ob ? !0 : !1);
    x(b.securityController, G.click, function () {
        var a = !0;
        try {
            new ActiveXObject("XiaomiEdit.XiaomiEditCtrl.1")
        } catch (c) {
            a = !1
        }
        a = "IE" === aa.name && a || navigator.plugins["Xiaomi Safe Control for NP"];
        (Ob = b.securityController.checked) ? a ? (v(b.pwd),
            a = d.createElement("div"),
            w(a, "pwd-object"),
            "IE" === aa.name ? (a.innerHTML = '<object id="XiaomiEdit" name="XiaomiEdit" classid="CLSID:E0A362BA-2608-48EA-9D8F-F45258D3091C" width="358" height="50"></object>',
                b.pwd.parentNode.appendChild(a),
                d.getElementById("XiaomiEdit")) : (a.innerHTML = '<object type="application/npXiaomiEditCtl-Plugin" id="npXiaomiEdit" name="XiaomiEdit" width="358" height="48"></object>',
                    b.pwd.parentNode.appendChild(a),
                    d.getElementById("npXiaomiEdit")),
            F(b.pwd.parentNode, "labelbox")) : Za.show() : (B(b.pwd),
                w(b.pwd.parentNode, "labelbox"),
                e(".pwd-object")[0] && b.pwd.parentNode.removeChild(e(".pwd-object")[0]),
                a && (b.pwd.value = ""))
    });
    s.add("stoppropagation keyevent", G.keydown + "," + G.keyup + "," + G.keypress);
    x(b.pwd, G.keydown, function (a) {
        a = a || c.event;
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    x(b.pwd, G.keyup, function (a) {
        a = a || c.event;
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    x(b.pwd, G.keypress, function (a) {
        a = a || c.event;
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    b.pwdVisiable && (x(b.pwdVisiable, G.keydown, function (a) {
        a = a || c.event;
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    }),
        x(b.pwdVisiable, G.keyup, function (a) {
            a = a || c.event;
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        }),
        x(b.pwdVisiable, G.keypress, function (a) {
            a = a || c.event;
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        }));
    s.add("addInputChange", "userName");
    x(b.loginButton, "click", function (a) {
        Ma()
    });
    var Nc = la(b.mainForm);
    t(Nc, function (a, b) {
        x(a, G.keydown, function (a) {
            a = a || c.event;
            13 === (a.charCode || a.keyCode) && (Ma(),
                a.returnValue = !1,
                a.preventDefault && a.preventDefault());
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        })
    });
    var Pb = parseInt(y("_customDisplay")) || 0;
    va(Pb);
    k.snsNone ? va(ba.SNSLOGIN + ba.SNSDEFAULT) : k.snsDefault ? (va(ba.SNSLOGIN),
        "none" !== b.snsDefaultCon.style.display && w(d.body, "hasSnsDefault"),
        s.add("customDisplay", "snslogin", ba.SNSLOGIN)) : (s.add("customDisplay", "snsdefault", ba.DEFAULT),
            va(ba.SNSDEFAULT));
    s.add("customDisplay", Pb);
    var Qb = y("lsrp_appName");
    Qb && bc(Qb);
    Ajax({
        url: k.infoUrl,
        data: {
            _locale: k.locale
        },
        success: function (a, c) {
            s.add("siteInfo", a);
            var e = m(a)
                , e = e[k.locale] || e[JSP_VAR.locale] || []
                , g = d.createElement("div")
                , h = "";
            t(e, function (a, b) {
                h += '<p class="site_info_txt">' + (a.url ? '<a href="' + a.url + '" class="site_info_link" target="_blank">' : "") + a.txt + (a.url ? "</a>" : "") + "</p>"
            });
            w(g, "site_info");
            g.innerHTML = h;
            b.header.parentNode.appendChild(g)
        }
    });
    x(b.codeSelector, G.click, function (a) {
        if (!k.fromTw && l.enableCode) {
            l.codeInit || (l.codeInit = !0,
                cc());
            H.clean(b.userName);
            a = a || c.event;
            var d = a.target || a.srcElement;
            if (I(d, "countrycode_selector") || I(d, "countrycode-value") || I(d, "country_code") || I(d, "icon_arrow_down")) {
                l.codeShown ? (v(b.codeContainer),
                    l.codeShown = !1) : (B(b.codeContainer, !0),
                        b.searchCodeInput && T(b.searchCodeInput, "focus"),
                        l.codeShown = !0)
            }
            a.preventDefault();
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation();
            return !1
        }
    });
    x(b.body, G.click, function (a) {
        ga();
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    x(b.codeContainer, G.click, function (a) {
        a = a || c.event;
        var b = a.target || a.srcElement;
        I(b, "record") ? (ub(b),
            ga()) : I(b, "record-country") || I(b, "record-code") ? (ub(b.parentNode),
                ga()) : I(b, "search-code") || I(b, "search-code-input") || ga();
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    x(b.navTabs, G.click, function (a) {
        a = a || c.event;
        a = a.target || a.srcElement;
        I(a, "navtab-link") && (a = a.getAttribute("data-tab"),
            dc(a))
    });
    var ya = parseInt(y("_userId"), 10) || 0
        , Oc = parseInt(g("userId"), 10)
        , Rb = z(g("userName"))
        , oa = z(decodeURIComponent(y("_userName")));
    ya && (l.verifyPwd = !0,
        oa || (oa = ya,
            Oc === ya && Rb && (oa = Rb)),
        s.add("verifyPwd", ya, oa),
        k.oAuthorize ? (b.accountDisplayname.innerHTML = k.oAuthorizeTpl.replace("{verify-masked}", k.userMask),
            b.userName.value = k.uUserName,
            "ticket" !== y("_loginType") && gc(oa)) : (b.userName.value = ya,
                b.accountDisplayname.innerHTML = oa,
                b.header.innerHTML = D.VERIFY_PASSWORD,
                b.accountDisplayname.style.paddingBottom = "20px"),
        b.pwd.value = "",
        v(b.changeLoginType),
        v(b.userName.parentNode),
        B(b.accountInfo, !0),
        v(b.qrTrigger),
        b.loginButton.value = D.VERIFY_PASSWORD_SUBMIT,
        v(e("#custom_display_" + ba.SNSLOGIN)));
    x(b.manualCode, G.click, function (a) {
        a = a || c.event;
        l.showCodeValue && (l.showCodeValue = !1,
            l.manualControlCode = !0,
            F(b.regionCode, "add_regioncode"),
            w(b.manualCode.parentNode, "turn_off"),
            w(b.regionCode, "divflex"),
            s.add("manualCode", l.showCodeValue, l.manualControlCode));
        ga();
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    var Ha = !0;
    if (scopes) {
        var pa = d.createElement("div");
        pa.innerHTML = k.oauthTpl;
        b.layout.appendChild(pa);
        scopes = da(scopes);
        b.scopeList = e(".scope_list", pa)[0];
        b.OAuthBox = pa;
        b.OAuthWrap = e(".oauth_wrap", pa)[0];
        b.OAuthWrapText = e(".wrap_more", pa)[0];
        S = _htmlMore = "";
        for (P = 0; P < scopes.length; P++) {
            P < k.oauthInitNum ? S += '<p class="scope_item"><i class="icon_select icon_true disabled"></i>' + scopes[P].name + "</p>" : _htmlMore += '<p class="scope_item"><i class="icon_select icon_true disabled"></i>' + scopes[P].name + "</p>"
        }
        b.scopeList.innerHTML = S + '<div class="scope_more scope-more">' + _htmlMore + "</div>";
        scopes.length > k.oauthInitNum && B(b.OAuthWrap, !0);
        x(b.OAuthWrap, "click", function () {
            Ha = !Ha;
            b.OAuthWrapText.innerText = Ha ? "More" : "Hide";
            Ha ? (F(b.OAuthWrap, "up"),
                v(e(".scope-more")[0])) : (w(b.OAuthWrap, "up"),
                    B(e(".scope-more")[0], !0))
        })
    }
    if (b.recordLink && k.beianRecordLink) {
        b.recordLink.href = k.beianRecordLink;
        var ia = new Image
            , Pc = e("span", b.recordLink)[0];
        ia.onload = ia.oncomplete = function () {
            ia._loaded = !0;
            Pc.appendChild(ia)
        }
            ;
        setTimeout(function () {
            !ia._loaded && (ia.src = k.default1px_gif)
        }, 1000);
        ia.src = k.beianRecordImg
    }
    Y = d.createElement("div");
    Y.id = "cookie-usage-notify";
    Y.className = "cookie_usage_notify";
    Y.innerHTML = k.cookieUsageTpl;
    (function (a, b) {
        var c = b.parentNode;
        c.lastChild == b ? c.appendChild(a) : c.insertBefore(a, b.nextSibling)
    }
    )(Y, b.footer);
    b.cookieUsage = e("#cookie-usage-notify");
    var Qc = e(".close-cookie-usage", b.cookieUsage)[0]
        , Sb = null;
    k.hideCookieUse ? v(b.cookieUsage) : (c.localStorage ? "true" !== localStorage.getItem("COOKIE_USAGE") && B(b.cookieUsage, !0) : B(b.cookieUsage, !0),
        x(Qc, G.click, function (a) {
            a = a || c.event;
            clearTimeout(Sb);
            v(b.cookieUsage);
            c.localStorage && localStorage.setItem("COOKIE_USAGE", !0);
            "cancelBubble" in a && (a.cancelBubble = !0);
            "stopPropagation" in a && a.stopPropagation()
        }),
        Sb = setTimeout(function () {
            v(b.cookieUsage)
        }, 20000));
    var X;
    if (k.useManMachine) {
        try {
            (function () {
                initMiverify({
                    k: "8027422fb0eb42fbac1b521ec4a7961f",
                    locale: JSP_VAR.locale,
                    bindBtn: "",
                    errorAction: !0,
                    onSuccess: function (a) {
                        A("vToken", a.flag, 1, "/", ".account.xiaomi.com", 86400);
                        A("vAction", (k.zoneDic[JSP_VAR.dataCenterZone] || "en") + "-" + l.loginType + "-login", 1, "/", ".account.xiaomi.com", 86400);
                        Hb()
                    },
                    onError: function (a) {
                        a.exception && (l.useManMachineError = !0,
                            Hb())
                    },
                    onClose: function (a, b) {
                        b ? L({
                            biz: "loginGeetestClose",
                            type: k.tickType,
                            step: "close"
                        }) : L({
                            biz: "loginUserMachineError",
                            type: k.tickType,
                            step: "machineError"
                        })
                    }
                }, function (a) {
                    X = a
                })
            }
            )()
        } catch (Rc) {
            throw Error(Rc)
        }
    }
    var cb = "";
    Ib && t(Ib, function (a, c) {
        cb += '<a class="app_item" href="' + a.alink + '" target="_blank"><i class="icon_app ' + a.icon + '"></i><span class="text">' + a.name + "<span></a>";
        b.appsPanel.innerHTML = cb
    });
    var Tb = new ka({
        title: "FAQ",
        cls: "mod_ercode",
        html: k.ercodeTpl,
        customDevice640: !0,
        modalfixed: !0,
        afterRender: function () { }
    });
    Tb.close();
    x(b.qrhelp, G.click, function (a) {
        a = a || c.event;
        w(e(".modal_container")[0], "ercode_panel");
        Tb.show();
        Bb();
        "cancelBubble" in a && (a.cancelBubble = !0);
        "stopPropagation" in a && a.stopPropagation()
    });
    c.onresize = function () {
        var a = V(b.layout, "width");
        b.loginQr.style.width = a + "px";
        Bb()
    }
        ;
    k.hideQrApps && v(b.qrApps);
    (function () {
        var a = Jb && 322 < parseInt(Jb.replace(/\./g, ""));
        (Kb && 405 < parseInt(Kb.replace(/\./g, "")) || a) && v(b.help)
    }
    )();
    Wa && Wa.loaded && Wa.loaded()
}
)(window, document);
