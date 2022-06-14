import {
    S as Lt,
    i as Nt,
    s as Zt,
    e as i,
    t as $,
    k as N,
    c as s,
    a as h,
    h as T,
    d as l,
    m as Z,
    b as e,
    K as Ee,
    g as de,
    L as t,
    E as Re,
    v as Ct,
    w as Bt,
    x as Ut,
    y as Wt,
    q as Ft,
    o as Rt,
    B as Yt
} from "../chunks/index-c16f1bef.js";

var Kt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function Xt(J) {
    return J && J.__esModule && Object.prototype.hasOwnProperty.call(J, "default") ? J.default : J
}

var Ht = { exports: {} };
(function(J, q) {
    (function(w, d) {
        J.exports = d()
    })(Kt, function() {
        return function(w) {
            function d(r) {
                if (o[r]) return o[r].exports;
                var v = o[r] = { exports: {}, id: r, loaded: !1 };
                return w[r].call(v.exports, v, v.exports, d), v.loaded = !0, v.exports
            }

            var o = {};
            return d.m = w, d.c = o, d.p = "dist/", d(0)
        }([function(w, d, o) {
            function r(u) {
                return u && u.__esModule ? u : { default: u }
            }

            var v = Object.assign || function(u) {
                    for (var O = 1; O < arguments.length; O++) {
                        var G = arguments[O];
                        for (var le in G) Object.prototype.hasOwnProperty.call(G, le) && (u[le] = G[le])
                    }
                    return u
                },
                f = o(1),
                I = (r(f), o(6)),
                c = r(I),
                k = o(7),
                p = r(k),
                y = o(8),
                b = r(y),
                g = o(9),
                A = r(g),
                z = o(10),
                ue = r(z),
                fe = o(11),
                R = r(fe),
                X = o(14),
                pe = r(X),
                P = [],
                B = !1,
                x = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                Y = function() {
                    var u = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (u && (B = !0), B) return P = (0, R.default)(P, x), (0, ue.default)(P, x.once), P
                },
                Q = function() {
                    P = (0, pe.default)(), Y()
                },
                n = function() {
                    P.forEach(function(u, O) {
                        u.node.removeAttribute("data-aos"), u.node.removeAttribute("data-aos-easing"), u.node.removeAttribute("data-aos-duration"), u.node.removeAttribute("data-aos-delay")
                    })
                },
                a = function(u) {
                    return u === !0 || u === "mobile" && A.default.mobile() || u === "phone" && A.default.phone() || u === "tablet" && A.default.tablet() || typeof u == "function" && u() === !0
                },
                _ = function(u) {
                    x = v(x, u), P = (0, pe.default)();
                    var O = document.all && !window.atob;
                    return a(x.disable) || O ? n() : (x.disableMutationObserver || b.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), x.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? Y(!0) : x.startEvent === "load" ? window.addEventListener(x.startEvent, function() {
                        Y(!0)
                    }) : document.addEventListener(x.startEvent, function() {
                        Y(!0)
                    }), window.addEventListener("resize", (0, p.default)(Y, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, p.default)(Y, x.debounceDelay, !0)), window.addEventListener("scroll", (0, c.default)(function() {
                        (0, ue.default)(P, x.once)
                    }, x.throttleDelay)), x.disableMutationObserver || b.default.ready("[data-aos]", Q), P)
                };
            w.exports = { init: _, refresh: Y, refreshHard: Q }
        }, function(w, d) {}, , , , , function(w, d) {
            (function(o) {
                function r(a, _, u) {
                    function O(m) {
                        var V = H,
                            re = K;
                        return H = K = void 0, F = m, S = a.apply(re, V)
                    }

                    function G(m) {
                        return F = m, D = setTimeout(U, _), C ? O(m) : S
                    }

                    function le(m) {
                        var V = m - M,
                            re = m - F,
                            Ie = _ - V;
                        return ae ? Q(Ie, W - re) : Ie
                    }

                    function ee(m) {
                        var V = m - M,
                            re = m - F;
                        return M === void 0 || V >= _ || V < 0 || ae && re >= W
                    }

                    function U() {
                        var m = n();
                        return ee(m) ? ce(m) : void(D = setTimeout(U, le(m)))
                    }

                    function ce(m) {
                        return D = void 0, j && H ? O(m) : (H = K = void 0, S)
                    }

                    function te() {
                        D !== void 0 && clearTimeout(D), F = 0, H = M = K = D = void 0
                    }

                    function ve() {
                        return D === void 0 ? S : ce(n())
                    }

                    function L() {
                        var m = n(),
                            V = ee(m);
                        if (H = arguments, K = this, M = m, V) {
                            if (D === void 0) return G(M);
                            if (ae) return D = setTimeout(U, _), O(M)
                        }
                        return D === void 0 && (D = setTimeout(U, _)), S
                    }

                    var H, K, W, S, D, M, F = 0,
                        C = !1,
                        ae = !1,
                        j = !0;
                    if (typeof a != "function") throw new TypeError(y);
                    return _ = k(_) || 0, f(u) && (C = !!u.leading, ae = "maxWait" in u, W = ae ? Y(k(u.maxWait) || 0, _) : W, j = "trailing" in u ? !!u.trailing : j), L.cancel = te, L.flush = ve, L
                }

                function v(a, _, u) {
                    var O = !0,
                        G = !0;
                    if (typeof a != "function") throw new TypeError(y);
                    return f(u) && (O = "leading" in u ? !!u.leading : O, G = "trailing" in u ? !!u.trailing : G), r(a, _, {
                        leading: O,
                        maxWait: _,
                        trailing: G
                    })
                }

                function f(a) {
                    var _ = typeof a == "undefined" ? "undefined" : p(a);
                    return !!a && (_ == "object" || _ == "function")
                }

                function I(a) {
                    return !!a && (typeof a == "undefined" ? "undefined" : p(a)) == "object"
                }

                function c(a) {
                    return (typeof a == "undefined" ? "undefined" : p(a)) == "symbol" || I(a) && x.call(a) == g
                }

                function k(a) {
                    if (typeof a == "number") return a;
                    if (c(a)) return b;
                    if (f(a)) {
                        var _ = typeof a.valueOf == "function" ? a.valueOf() : a;
                        a = f(_) ? _ + "" : _
                    }
                    if (typeof a != "string") return a === 0 ? a : +a;
                    a = a.replace(A, "");
                    var u = ue.test(a);
                    return u || fe.test(a) ? R(a.slice(2), u ? 2 : 8) : z.test(a) ? b : +a
                }

                var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
                        return typeof a
                    } : function(a) {
                        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                    },
                    y = "Expected a function",
                    b = NaN,
                    g = "[object Symbol]",
                    A = /^\s+|\s+$/g,
                    z = /^[-+]0x[0-9a-f]+$/i,
                    ue = /^0b[01]+$/i,
                    fe = /^0o[0-7]+$/i,
                    R = parseInt,
                    X = (typeof o == "undefined" ? "undefined" : p(o)) == "object" && o && o.Object === Object && o,
                    pe = (typeof self == "undefined" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self,
                    P = X || pe || Function("return this")(),
                    B = Object.prototype,
                    x = B.toString,
                    Y = Math.max,
                    Q = Math.min,
                    n = function() {
                        return P.Date.now()
                    };
                w.exports = v
            }).call(d, function() {
                return this
            }())
        }, function(w, d) {
            (function(o) {
                function r(n, a, _) {
                    function u(j) {
                        var m = L,
                            V = H;
                        return L = H = void 0, M = j, W = n.apply(V, m)
                    }

                    function O(j) {
                        return M = j, S = setTimeout(ee, a), F ? u(j) : W
                    }

                    function G(j) {
                        var m = j - D,
                            V = j - M,
                            re = a - m;
                        return C ? Y(re, K - V) : re
                    }

                    function le(j) {
                        var m = j - D,
                            V = j - M;
                        return D === void 0 || m >= a || m < 0 || C && V >= K
                    }

                    function ee() {
                        var j = Q();
                        return le(j) ? U(j) : void(S = setTimeout(ee, G(j)))
                    }

                    function U(j) {
                        return S = void 0, ae && L ? u(j) : (L = H = void 0, W)
                    }

                    function ce() {
                        S !== void 0 && clearTimeout(S), M = 0, L = D = H = S = void 0
                    }

                    function te() {
                        return S === void 0 ? W : U(Q())
                    }

                    function ve() {
                        var j = Q(),
                            m = le(j);
                        if (L = arguments, H = this, D = j, m) {
                            if (S === void 0) return O(D);
                            if (C) return S = setTimeout(ee, a), u(D)
                        }
                        return S === void 0 && (S = setTimeout(ee, a)), W
                    }

                    var L, H, K, W, S, D, M = 0,
                        F = !1,
                        C = !1,
                        ae = !0;
                    if (typeof n != "function") throw new TypeError(p);
                    return a = c(a) || 0, v(_) && (F = !!_.leading, C = "maxWait" in _, K = C ? x(c(_.maxWait) || 0, a) : K, ae = "trailing" in _ ? !!_.trailing : ae), ve.cancel = ce, ve.flush = te, ve
                }

                function v(n) {
                    var a = typeof n == "undefined" ? "undefined" : k(n);
                    return !!n && (a == "object" || a == "function")
                }

                function f(n) {
                    return !!n && (typeof n == "undefined" ? "undefined" : k(n)) == "object"
                }

                function I(n) {
                    return (typeof n == "undefined" ? "undefined" : k(n)) == "symbol" || f(n) && B.call(n) == b
                }

                function c(n) {
                    if (typeof n == "number") return n;
                    if (I(n)) return y;
                    if (v(n)) {
                        var a = typeof n.valueOf == "function" ? n.valueOf() : n;
                        n = v(a) ? a + "" : a
                    }
                    if (typeof n != "string") return n === 0 ? n : +n;
                    n = n.replace(g, "");
                    var _ = z.test(n);
                    return _ || ue.test(n) ? fe(n.slice(2), _ ? 2 : 8) : A.test(n) ? y : +n
                }

                var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
                        return typeof n
                    } : function(n) {
                        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                    },
                    p = "Expected a function",
                    y = NaN,
                    b = "[object Symbol]",
                    g = /^\s+|\s+$/g,
                    A = /^[-+]0x[0-9a-f]+$/i,
                    z = /^0b[01]+$/i,
                    ue = /^0o[0-7]+$/i,
                    fe = parseInt,
                    R = (typeof o == "undefined" ? "undefined" : k(o)) == "object" && o && o.Object === Object && o,
                    X = (typeof self == "undefined" ? "undefined" : k(self)) == "object" && self && self.Object === Object && self,
                    pe = R || X || Function("return this")(),
                    P = Object.prototype,
                    B = P.toString,
                    x = Math.max,
                    Y = Math.min,
                    Q = function() {
                        return pe.Date.now()
                    };
                w.exports = r
            }).call(d, function() {
                return this
            }())
        }, function(w, d) {
            function o(k) {
                var p = void 0,
                    y = void 0;
                for (p = 0; p < k.length; p += 1)
                    if (y = k[p], y.dataset && y.dataset.aos || y.children && o(y.children)) return !0;
                return !1
            }

            function r() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function v() {
                return !!r()
            }

            function f(k, p) {
                var y = window.document,
                    b = r(),
                    g = new b(I);
                c = p, g.observe(y.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })
            }

            function I(k) {
                k && k.forEach(function(p) {
                    var y = Array.prototype.slice.call(p.addedNodes),
                        b = Array.prototype.slice.call(p.removedNodes),
                        g = y.concat(b);
                    if (o(g)) return c()
                })
            }

            Object.defineProperty(d, "__esModule", { value: !0 });
            var c = function() {};
            d.default = { isSupported: v, ready: f }
        }, function(w, d) {
            function o(y, b) {
                if (!(y instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function r() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }

            Object.defineProperty(d, "__esModule", { value: !0 });
            var v = function() {
                    function y(b, g) {
                        for (var A = 0; A < g.length; A++) {
                            var z = g[A];
                            z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(b, z.key, z)
                        }
                    }

                    return function(b, g, A) {
                        return g && y(b.prototype, g), A && y(b, A), b
                    }
                }(),
                f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                I = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                c = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                k = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                p = function() {
                    function y() {
                        o(this, y)
                    }

                    return v(y, [{
                        key: "phone",
                        value: function() {
                            var b = r();
                            return !(!f.test(b) && !I.test(b.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var b = r();
                            return !(!c.test(b) && !k.test(b.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), y
                }();
            d.default = new p
        }, function(w, d) {
            Object.defineProperty(d, "__esModule", { value: !0 });
            var o = function(v, f, I) {
                    var c = v.node.getAttribute("data-aos-once");
                    f > v.position ? v.node.classList.add("aos-animate") : typeof c != "undefined" && (c === "false" || !I && c !== "true") && v.node.classList.remove("aos-animate")
                },
                r = function(v, f) {
                    var I = window.pageYOffset,
                        c = window.innerHeight;
                    v.forEach(function(k, p) {
                        o(k, c + I, f)
                    })
                };
            d.default = r
        }, function(w, d, o) {
            function r(c) {
                return c && c.__esModule ? c : { default: c }
            }

            Object.defineProperty(d, "__esModule", { value: !0 });
            var v = o(12),
                f = r(v),
                I = function(c, k) {
                    return c.forEach(function(p, y) {
                        p.node.classList.add("aos-init"), p.position = (0, f.default)(p.node, k.offset)
                    }), c
                };
            d.default = I
        }, function(w, d, o) {
            function r(c) {
                return c && c.__esModule ? c : { default: c }
            }

            Object.defineProperty(d, "__esModule", { value: !0 });
            var v = o(13),
                f = r(v),
                I = function(c, k) {
                    var p = 0,
                        y = 0,
                        b = window.innerHeight,
                        g = {
                            offset: c.getAttribute("data-aos-offset"),
                            anchor: c.getAttribute("data-aos-anchor"),
                            anchorPlacement: c.getAttribute("data-aos-anchor-placement")
                        };
                    switch (g.offset && !isNaN(g.offset) && (y = parseInt(g.offset)), g.anchor && document.querySelectorAll(g.anchor) && (c = document.querySelectorAll(g.anchor)[0]), p = (0, f.default)(c).top, g.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            p += c.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            p += c.offsetHeight;
                            break;
                        case "top-center":
                            p += b / 2;
                            break;
                        case "bottom-center":
                            p += b / 2 + c.offsetHeight;
                            break;
                        case "center-center":
                            p += b / 2 + c.offsetHeight / 2;
                            break;
                        case "top-top":
                            p += b;
                            break;
                        case "bottom-top":
                            p += c.offsetHeight + b;
                            break;
                        case "center-top":
                            p += c.offsetHeight / 2 + b
                    }
                    return g.anchorPlacement || g.offset || isNaN(k) || (y = k), p + y
                };
            d.default = I
        }, function(w, d) {
            Object.defineProperty(d, "__esModule", { value: !0 });
            var o = function(r) {
                for (var v = 0, f = 0; r && !isNaN(r.offsetLeft) && !isNaN(r.offsetTop);) v += r.offsetLeft - (r.tagName != "BODY" ? r.scrollLeft : 0), f += r.offsetTop - (r.tagName != "BODY" ? r.scrollTop : 0), r = r.offsetParent;
                return { top: f, left: v }
            };
            d.default = o
        }, function(w, d) {
            Object.defineProperty(d, "__esModule", { value: !0 });
            var o = function(r) {
                return r = r || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(r, function(v) {
                    return { node: v }
                })
            };
            d.default = o
        }])
    })
})(Ht);
var Jt = Xt(Ht.exports);

function Qt(J) {
    let q, w, d, o, r, v, f, I, c, k, p, y, b, g, A, z, ue, fe, R, X, pe, P, B, x, Y, Q, n, a, _, u, O, G, le, ee, U,
        ce, te, ve, L, H, K, W, S, D, M, F, C, ae, j, m, V, re, Ie, Ye, Ke, oe, Xe, Je, Qe, et, tt, at, rt, ze, _e, Ae,
        me, ne, he, ot, nt, it, st, je, lt, ct, De, we, vt, qe, xe, Se, be, Oe, ke, mt, dt, ie, Ve, ut, ft, Me, pt;
    return {
        c() {
            q = i("div"), w = i("div"), d = i("div"), o = i("div"), r = i("h1"), v = $("Powering an "), f = i("span"), I = $("altcoin revolution"), c = $(" on Uniswap V3"), k = N(), p = i("p"), y = $("The Uniswap V3 altcoin season is here, and MAYA is at its forefront. Mint and swap self-market-making tokens with hyper-efficient, perma-locked liquidity."), b = N(), g = i("div"), A = i("div"), z = i("a"), ue = $("Launch App"), fe = N(), R = i("a"), X = i("img"), P = N(), B = i("a"), x = i("img"), Q = N(), n = i("a"), a = i("img"), u = N(), O = i("div"), G = i("img"), ee = N(), U = i("div"), ce = i("div"), te = i("h2"), ve = $("MayaSwap is the DEX where "), L = i("span"), H = $("Uniswap V3 transfer tax tokens"), K = $(" trade."), W = N(), S = i("div"), D = i("div"), M = i("div"), F = i("div"), C = i("img"), j = N(), m = i("div"), V = i("h2"), re = $("Concentrated liquidity."), Ie = i("br"), Ye = $("No active management."), Ke = N(), oe = i("p"), Xe = $("It's always been clear that Uniswap V3 is more efficient than V2 - about ~4,000x more efficient, in fact. But before MAYA's innovations, the lower slippage that V3 boasts has come at the cost of active, centralized, and IL-exposed market making."), Je = i("br"), Qe = i("br"), et = $("MAYA enables the creation and trading of self-market making tokens propped up by algorithmic concentrated LP taxes, that re-organize the placement of their liquidity asymmetrically as the price fluctuates."), tt = i("br"), at = i("br"), rt = $("We can finally move our tokens to Uniswap V3 and make the most of the liquidity in this space!"), ze = N(), _e = i("div"), Ae = i("div"), me = i("div"), ne = i("div"), he = i("h2"), ot = $("A new paradigm in AMM trading,"), nt = i("br"), it = $("powered by $MAYA."), st = N(), je = i("p"), lt = $("MAYA's ecosystem is powered by $MAYA, and its staked counterpart, $mMAYA. MayaSwap currently provides the only way to make and trade tokens that have both buy/sell taxes AND concentrated liquidity. This enables us to take middleman fees that go back to even further concentrating $MAYA's buy-side liquidity."), ct = N(), De = i("div"), we = i("img"), qe = N(), xe = i("div"), Se = i("div"), be = i("div"), Oe = i("div"), ke = i("img"), dt = N(), ie = i("div"), Ve = i("h2"), ut = $("Create. Swap. Stake. Vote."), ft = N(), Me = i("p"), pt = $("Burn $MAYA to create and run presales for transfer tax tokens on Uniswap V3 with programmatically rising price floors. Swap them on MayaSwap. Stake $MAYA for lower trading fees, access to launchpad presales, and voting power in our upcoming DAO."), this.h()
        },
        l(E) {
            q = s(E, "DIV", { class: !0 });
            var se = h(q);
            w = s(se, "DIV", { class: !0 });
            var Ge = h(w);
            d = s(Ge, "DIV", { class: !0 });
            var $e = h(d);
            o = s($e, "DIV", {
                class: !0,
                "data-aos": !0,
                "data-aos-duration": !0,
                "data-aos-delay": !0,
                "data-aos-easing": !0
            });
            var Te = h(o);
            r = s(Te, "H1", { class: !0 });
            var Pe = h(r);
            v = T(Pe, "Powering an "), f = s(Pe, "SPAN", { class: !0 });
            var ht = h(f);
            I = T(ht, "altcoin revolution"), ht.forEach(l), c = T(Pe, " on Uniswap V3"), Pe.forEach(l), k = Z(Te), p = s(Te, "P", { class: !0 });
            var bt = h(p);
            y = T(bt, "The Uniswap V3 altcoin season is here, and MAYA is at its forefront. Mint and swap self-market-making tokens with hyper-efficient, perma-locked liquidity."), bt.forEach(l), Te.forEach(l), b = Z($e), g = s($e, "DIV", {
                class: !0,
                "data-aos": !0,
                "data-aos-duration": !0,
                "data-aos-delay": !0,
                "data-aos-easing": !0
            });
            var gt = h(g);
            A = s(gt, "DIV", { class: !0 });
            var ge = h(A);
            z = s(ge, "A", { class: !0, href: !0 });
            var yt = h(z);
            ue = T(yt, "Launch App"), yt.forEach(l), fe = Z(ge), R = s(ge, "A", { class: !0, href: !0, target: !0 });
            var _t = h(R);
            X = s(_t, "IMG", { src: !0, alt: !0, class: !0 }), _t.forEach(l), P = Z(ge), B = s(ge, "A", {
                class: !0,
                href: !0,
                target: !0
            });
            var wt = h(B);
            x = s(wt, "IMG", { src: !0, alt: !0, class: !0 }), wt.forEach(l), Q = Z(ge), n = s(ge, "A", {
                class: !0,
                href: !0,
                target: !0
            });
            var xt = h(n);
            a = s(xt, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), xt.forEach(l), ge.forEach(l), gt.forEach(l), $e.forEach(l), u = Z(Ge), O = s(Ge, "DIV", { class: !0 });
            var kt = h(O);
            G = s(kt, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), kt.forEach(l), Ge.forEach(l), se.forEach(l), ee = Z(E), U = s(E, "DIV", { class: !0 });
            var Et = h(U);
            ce = s(Et, "DIV", { class: !0 });
            var It = h(ce);
            te = s(It, "H2", { class: !0 });
            var Le = h(te);
            ve = T(Le, "MayaSwap is the DEX where "), L = s(Le, "SPAN", { class: !0 });
            var At = h(L);
            H = T(At, "Uniswap V3 transfer tax tokens"), At.forEach(l), K = T(Le, " trade."), Le.forEach(l), It.forEach(l), Et.forEach(l), W = Z(E), S = s(E, "DIV", { class: !0 });
            var jt = h(S);
            D = s(jt, "DIV", { class: !0 });
            var Dt = h(D);
            M = s(Dt, "DIV", { class: !0 });
            var Ne = h(M);
            F = s(Ne, "DIV", { class: !0 });
            var St = h(F);
            C = s(St, "IMG", { src: !0, alt: !0, class: !0 }), St.forEach(l), j = Z(Ne), m = s(Ne, "DIV", {
                class: !0,
                "data-aos": !0,
                "data-aos-duration": !0,
                "data-aos-delay": !0,
                "data-aos-easing": !0
            });
            var Ze = h(m);
            V = s(Ze, "H2", { class: !0 });
            var He = h(V);
            re = T(He, "Concentrated liquidity."), Ie = s(He, "BR", {}), Ye = T(He, "No active management."), He.forEach(l), Ke = Z(Ze), oe = s(Ze, "P", { class: !0 });
            var ye = h(oe);
            Xe = T(ye, "It's always been clear that Uniswap V3 is more efficient than V2 - about ~4,000x more efficient, in fact. But before MAYA's innovations, the lower slippage that V3 boasts has come at the cost of active, centralized, and IL-exposed market making."), Je = s(ye, "BR", {}), Qe = s(ye, "BR", {}), et = T(ye, "MAYA enables the creation and trading of self-market making tokens propped up by algorithmic concentrated LP taxes, that re-organize the placement of their liquidity asymmetrically as the price fluctuates."), tt = s(ye, "BR", {}), at = s(ye, "BR", {}), rt = T(ye, "We can finally move our tokens to Uniswap V3 and make the most of the liquidity in this space!"), ye.forEach(l), Ze.forEach(l), Ne.forEach(l), Dt.forEach(l), jt.forEach(l), ze = Z(E), _e = s(E, "DIV", { class: !0 });
            var Ot = h(_e);
            Ae = s(Ot, "DIV", { class: !0 });
            var Vt = h(Ae);
            me = s(Vt, "DIV", { class: !0 });
            var Ce = h(me);
            ne = s(Ce, "DIV", {
                class: !0,
                "data-aos": !0,
                "data-aos-duration": !0,
                "data-aos-delay": !0,
                "data-aos-easing": !0
            });
            var Be = h(ne);
            he = s(Be, "H2", { class: !0 });
            var Ue = h(he);
            ot = T(Ue, "A new paradigm in AMM trading,"), nt = s(Ue, "BR", {}), it = T(Ue, "powered by $MAYA."), Ue.forEach(l), st = Z(Be), je = s(Be, "P", { class: !0 });
            var Mt = h(je);
            lt = T(Mt, "MAYA's ecosystem is powered by $MAYA, and its staked counterpart, $mMAYA. MayaSwap currently provides the only way to make and trade tokens that have both buy/sell taxes AND concentrated liquidity. This enables us to take middleman fees that go back to even further concentrating $MAYA's buy-side liquidity."), Mt.forEach(l), Be.forEach(l), ct = Z(Ce), De = s(Ce, "DIV", { class: !0 });
            var zt = h(De);
            we = s(zt, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }), zt.forEach(l), Ce.forEach(l), Vt.forEach(l), Ot.forEach(l), qe = Z(E), xe = s(E, "DIV", { class: !0 });
            var qt = h(xe);
            Se = s(qt, "DIV", { class: !0 });
            var Gt = h(Se);
            be = s(Gt, "DIV", { class: !0 });
            var We = h(be);
            Oe = s(We, "DIV", { class: !0 });
            var $t = h(Oe);
            ke = s($t, "IMG", { src: !0, alt: !0, class: !0 }), $t.forEach(l), dt = Z(We), ie = s(We, "DIV", {
                class: !0,
                "data-aos": !0,
                "data-aos-duration": !0,
                "data-aos-delay": !0,
                "data-aos-easing": !0
            });
            var Fe = h(ie);
            Ve = s(Fe, "H2", { class: !0 });
            var Tt = h(Ve);
            ut = T(Tt, "Create. Swap. Stake. Vote."), Tt.forEach(l), ft = Z(Fe), Me = s(Fe, "P", { class: !0 });
            var Pt = h(Me);
            pt = T(Pt, "Burn $MAYA to create and run presales for transfer tax tokens on Uniswap V3 with programmatically rising price floors. Swap them on MayaSwap. Stake $MAYA for lower trading fees, access to launchpad presales, and voting power in our upcoming DAO."), Pt.forEach(l), Fe.forEach(l), We.forEach(l), Gt.forEach(l), qt.forEach(l), this.h()
        },
        h() {
            e(f, "class", "hero__title__inner svelte-t58lac"), e(r, "class", "hero__title hero__title--max svelte-t58lac"), e(p, "class", "max svelte-t58lac"), e(o, "class", "hero__row1 svelte-t58lac"), e(o, "data-aos", "fade-up"), e(o, "data-aos-duration", "1100"), e(o, "data-aos-delay", "200"), e(o, "data-aos-easing", "ease-out-quart"), e(z, "class", "hero__button svelte-t58lac"), e(z, "href", "/swap/"), Ee(X.src, pe = "/img/uniswap.png") || e(X, "src", pe), e(X, "alt", ""), e(X, "class", "svelte-t58lac"), e(R, "class", "b b-uni svelte-t58lac"), e(R, "href", "https://app.uniswap.org/#/swap?outputCurrency=0xc02D52Dd7d456eDE7f85F897329693c1c8036FCC&inputCurrency=ETH&chain=mainnet&use=V3"), e(R, "target", "_blank"), Ee(x.src, Y = "/img/dextools.png") || e(x, "src", Y), e(x, "alt", ""), e(x, "class", "svelte-t58lac"), e(B, "class", "b svelte-t58lac"), e(B, "href", "https://www.defined.fi/eth/0xc4c336c9da49dd5c9fd00e5de91a0bf8608c363d"), e(B, "target", "_blank"), Ee(a.src, _ = "/img/etherscan.svg") || e(a, "src", _), e(a, "alt", ""), e(a, "class", "svelte-t58lac"), e(n, "class", "b b-es svelte-t58lac"), e(n, "href", "https://etherscan.io/address/0xc02D52Dd7d456eDE7f85F897329693c1c8036FCC"), e(n, "target", "_blank"), e(A, "class", "hero__buttons svelte-t58lac"), e(g, "class", "hero__row2 svelte-t58lac"), e(g, "data-aos", "fade-up"), e(g, "data-aos-duration", "1100"), e(g, "data-aos-delay", "200"), e(g, "data-aos-easing", "ease-out-quart"), e(d, "class", "hero__left svelte-t58lac"), e(G, "class", "hero__image svelte-t58lac"), Ee(G.src, le = "/img/landing/pyramid.png") || e(G, "src", le), e(G, "alt", ""), e(O, "class", "hero__right"), e(w, "class", "hero svelte-t58lac"), e(q, "class", "wrapper svelte-t58lac"), e(L, "class", "hero__title__inner svelte-t58lac"), e(te, "class", "hero__title svelte-t58lac"), e(ce, "class", "banner"), e(U, "class", "wrapper svelte-t58lac"), Ee(C.src, ae = "/img/landing/1.png") || e(C, "src", ae), e(C, "alt", ""), e(C, "class", "svelte-t58lac"), e(F, "class", "feature__image"), e(V, "class", "svelte-t58lac"), e(oe, "class", "svelte-t58lac"), e(m, "class", "feature__text svelte-t58lac"), e(m, "data-aos", "fade-left"), e(m, "data-aos-duration", "1100"), e(m, "data-aos-delay", "200"), e(m, "data-aos-easing", "ease-out-quart"), e(M, "class", "feature svelte-t58lac"), e(D, "class", "featureWrapper svelte-t58lac"), e(S, "class", "wrapper svelte-t58lac"), e(he, "class", "svelte-t58lac"), e(je, "class", "svelte-t58lac"), e(ne, "class", "feature__text feature__text--l svelte-t58lac"), e(ne, "data-aos", "fade-right"), e(ne, "data-aos-duration", "1100"), e(ne, "data-aos-delay", "200"), e(ne, "data-aos-easing", "ease-out-quart"), Ee(we.src, vt = "/img/landing/5.png") || e(we, "src", vt), e(we, "alt", ""), e(we, "class", "svelte-t58lac"), e(De, "class", "feature__image"), e(me, "class", "feature svelte-t58lac"), e(Ae, "class", "featureWrapper svelte-t58lac"), e(_e, "class", "wrapper svelte-t58lac"), Ee(ke.src, mt = "/img/landing/3.png") || e(ke, "src", mt), e(ke, "alt", ""), e(ke, "class", "svelte-t58lac"), e(Oe, "class", "feature__image"), e(Ve, "class", "svelte-t58lac"), e(Me, "class", "svelte-t58lac"), e(ie, "class", "feature__text svelte-t58lac"), e(ie, "data-aos", "fade-left"), e(ie, "data-aos-duration", "1100"), e(ie, "data-aos-delay", "200"), e(ie, "data-aos-easing", "ease-out-quart"), e(be, "class", "feature svelte-t58lac"), e(Se, "class", "featureWrapper svelte-t58lac"), e(xe, "class", "wrapper svelte-t58lac")
        },
        m(E, se) {
            de(E, q, se), t(q, w), t(w, d), t(d, o), t(o, r), t(r, v), t(r, f), t(f, I), t(r, c), t(o, k), t(o, p), t(p, y), t(d, b), t(d, g), t(g, A), t(A, z), t(z, ue), t(A, fe), t(A, R), t(R, X), t(A, P), t(A, B), t(B, x), t(A, Q), t(A, n), t(n, a), t(w, u), t(w, O), t(O, G), de(E, ee, se), de(E, U, se), t(U, ce), t(ce, te), t(te, ve), t(te, L), t(L, H), t(te, K), de(E, W, se), de(E, S, se), t(S, D), t(D, M), t(M, F), t(F, C), t(M, j), t(M, m), t(m, V), t(V, re), t(V, Ie), t(V, Ye), t(m, Ke), t(m, oe), t(oe, Xe), t(oe, Je), t(oe, Qe), t(oe, et), t(oe, tt), t(oe, at), t(oe, rt), de(E, ze, se), de(E, _e, se), t(_e, Ae), t(Ae, me), t(me, ne), t(ne, he), t(he, ot), t(he, nt), t(he, it), t(ne, st), t(ne, je), t(je, lt), t(me, ct), t(me, De), t(De, we), de(E, qe, se), de(E, xe, se), t(xe, Se), t(Se, be), t(be, Oe), t(Oe, ke), t(be, dt), t(be, ie), t(ie, Ve), t(Ve, ut), t(ie, ft), t(ie, Me), t(Me, pt)
        },
        p: Re,
        i: Re,
        o: Re,
        d(E) {
            E && l(q), E && l(ee), E && l(U), E && l(W), E && l(S), E && l(ze), E && l(_e), E && l(qe), E && l(xe)
        }
    }
}

function ea(J) {
    return Ct(() => {
        Jt.init()
    }), []
}

class ta extends Lt {
    constructor(q) {
        super(), Nt(this, q, ea, Qt, Zt, {})
    }
}

function aa(J) {
    let q, w, d, o, r, v;
    return r = new ta({}), {
        c() {
            q = i("sveltekit:head"), w = i("title"), d = $("MayaSwap"), o = N(), Bt(r.$$.fragment)
        },
        l(f) {
            q = s(f, "SVELTEKIT:HEAD", {});
            var I = h(q);
            w = s(I, "TITLE", {});
            var c = h(w);
            d = T(c, "MayaSwap"), c.forEach(l), I.forEach(l), o = Z(f), Ut(r.$$.fragment, f)
        },
        m(f, I) {
            de(f, q, I), t(q, w), t(w, d), de(f, o, I), Wt(r, f, I), v = !0
        },
        p: Re,
        i(f) {
            v || (Ft(r.$$.fragment, f), v = !0)
        },
        o(f) {
            Rt(r.$$.fragment, f), v = !1
        },
        d(f) {
            f && l(q), f && l(o), Yt(r, f)
        }
    }
}

class oa extends Lt {
    constructor(q) {
        super(), Nt(this, q, null, aa, Zt, {})
    }
}

export { oa as default };
