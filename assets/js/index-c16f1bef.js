function A() {}

function H(t, n) { for (const e in n) t[e] = n[e]; return t }

function B(t) { return t() }

function q() { return Object.create(null) }

function p(t) { t.forEach(B) }

function I(t) { return typeof t == "function" }

function lt(t, n) { return t != t ? n == n : t !== n || t && typeof t == "object" || typeof t == "function" }
let g;

function ot(t, n) { return g || (g = document.createElement("a")), g.href = n, t === g.href }

function G(t) { return Object.keys(t).length === 0 }

function J(t, ...n) { if (t == null) return A; const e = t.subscribe(...n); return e.unsubscribe ? () => e.unsubscribe() : e }

function st(t, n, e) { t.$$.on_destroy.push(J(n, e)) }

function at(t, n, e, i) { if (t) { const c = L(t, n, e, i); return t[0](c) } }

function L(t, n, e, i) { return t[1] && i ? H(e.ctx.slice(), t[1](i(n))) : e.ctx }

function ft(t, n, e, i) { if (t[2] && i) { const c = t[2](i(e)); if (n.dirty === void 0) return c; if (typeof c == "object") { const s = [],
                u = Math.max(n.dirty.length, c.length); for (let l = 0; l < u; l += 1) s[l] = n.dirty[l] | c[l]; return s } return n.dirty | c } return n.dirty }

function _t(t, n, e, i, c, s) { if (c) { const u = L(n, e, i, s);
        t.p(u, c) } }

function dt(t) { if (t.ctx.length > 32) { const n = [],
            e = t.ctx.length / 32; for (let i = 0; i < e; i++) n[i] = -1; return n } return -1 }
let w = !1;

function K() { w = !0 }

function Q() { w = !1 }

function R(t, n, e, i) { for (; t < n;) { const c = t + (n - t >> 1);
        e(c) <= i ? t = c + 1 : n = c } return t }

function U(t) { if (t.hydrate_init) return;
    t.hydrate_init = !0; let n = t.childNodes; if (t.nodeName === "HEAD") { const r = []; for (let o = 0; o < n.length; o++) { const f = n[o];
            f.claim_order !== void 0 && r.push(f) } n = r } const e = new Int32Array(n.length + 1),
        i = new Int32Array(n.length);
    e[0] = -1; let c = 0; for (let r = 0; r < n.length; r++) { const o = n[r].claim_order,
            f = (c > 0 && n[e[c]].claim_order <= o ? c + 1 : R(1, c, y => n[e[y]].claim_order, o)) - 1;
        i[r] = e[f] + 1; const a = f + 1;
        e[a] = r, c = Math.max(a, c) } const s = [],
        u = []; let l = n.length - 1; for (let r = e[c] + 1; r != 0; r = i[r - 1]) { for (s.push(n[r - 1]); l >= r; l--) u.push(n[l]);
        l-- } for (; l >= 0; l--) u.push(n[l]);
    s.reverse(), u.sort((r, o) => r.claim_order - o.claim_order); for (let r = 0, o = 0; r < u.length; r++) { for (; o < s.length && u[r].claim_order >= s[o].claim_order;) o++; const f = o < s.length ? s[o] : null;
        t.insertBefore(u[r], f) } }

function V(t, n) { if (w) { for (U(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentElement !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        n !== t.actual_end_child ? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child) : t.actual_end_child = n.nextSibling } else(n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n) }

function ht(t, n, e) { w && !e ? V(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null) }

function W(t) { t.parentNode.removeChild(t) }

function X(t) { return document.createElement(t) }

function Y(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) }

function N(t) { return document.createTextNode(t) }

function mt() { return N(" ") }

function pt() { return N("") }

function yt(t, n, e, i) { return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i) }

function gt(t, n, e) { e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e) }

function bt(t) { return t === "" ? null : +t }

function Z(t) { return Array.from(t.childNodes) }

function tt(t) { t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 }) }

function O(t, n, e, i, c = !1) { tt(t); const s = (() => { for (let u = t.claim_info.last_index; u < t.length; u++) { const l = t[u]; if (n(l)) { const r = e(l); return r === void 0 ? t.splice(u, 1) : t[u] = r, c || (t.claim_info.last_index = u), l } } for (let u = t.claim_info.last_index - 1; u >= 0; u--) { const l = t[u]; if (n(l)) { const r = e(l); return r === void 0 ? t.splice(u, 1) : t[u] = r, c ? r === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = u, l } } return i() })(); return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s }

function P(t, n, e, i) { return O(t, c => c.nodeName === n, c => { const s = []; for (let u = 0; u < c.attributes.length; u++) { const l = c.attributes[u];
            e[l.name] || s.push(l.name) } s.forEach(u => c.removeAttribute(u)) }, () => i(n)) }

function xt(t, n, e) { return P(t, n, e, X) }

function $t(t, n, e) { return P(t, n, e, Y) }

function nt(t, n) { return O(t, e => e.nodeType === 3, e => { const i = "" + n; if (e.data.startsWith(i)) { if (e.data.length !== i.length) return e.splitText(i.length) } else e.data = i }, () => N(n), !0) }

function wt(t) { return nt(t, " ") }

function Et(t, n) { n = "" + n, t.wholeText !== n && (t.data = n) }

function vt(t, n) { t.value = n == null ? "" : n }

function kt(t, n, e, i) { e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? "important" : "") }

function At(t, n = document.body) { return Array.from(n.querySelectorAll(t)) }
let m;

function h(t) { m = t }

function S() { if (!m) throw new Error("Function called outside component initialization"); return m }

function Nt(t) { S().$$.on_mount.push(t) }

function St(t) { S().$$.after_update.push(t) }

function jt(t, n) { return S().$$.context.set(t, n), n }
const d = [],
    M = [],
    x = [],
    T = [],
    z = Promise.resolve();
let v = !1;

function D() { v || (v = !0, z.then(F)) }

function Ct() { return D(), z }

function k(t) { x.push(t) }
const E = new Set;
let b = 0;

function F() { const t = m;
    do { for (; b < d.length;) { const n = d[b];
            b++, h(n), et(n.$$) } for (h(null), d.length = 0, b = 0; M.length;) M.pop()(); for (let n = 0; n < x.length; n += 1) { const e = x[n];
            E.has(e) || (E.add(e), e()) } x.length = 0 } while (d.length); for (; T.length;) T.pop()();
    v = !1, E.clear(), h(t) }

function et(t) { if (t.fragment !== null) { t.update(), p(t.before_update); const n = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(k) } }
const $ = new Set;
let _;

function qt() { _ = { r: 0, c: [], p: _ } }

function Mt() { _.r || p(_.c), _ = _.p }

function it(t, n) { t && t.i && ($.delete(t), t.i(n)) }

function Tt(t, n, e, i) { if (t && t.o) { if ($.has(t)) return;
        $.add(t), _.c.push(() => { $.delete(t), i && (e && t.d(1), i()) }), t.o(n) } }

function Bt(t, n) { const e = {},
        i = {},
        c = { $$scope: 1 }; let s = t.length; for (; s--;) { const u = t[s],
            l = n[s]; if (l) { for (const r in u) r in l || (i[r] = 1); for (const r in l) c[r] || (e[r] = l[r], c[r] = 1);
            t[s] = l } else
            for (const r in u) c[r] = 1 } for (const u in i) u in e || (e[u] = void 0); return e }

function Lt(t) { return typeof t == "object" && t !== null ? t : {} }

function Ot(t) { t && t.c() }

function Pt(t, n) { t && t.l(n) }

function rt(t, n, e, i) { const { fragment: c, on_mount: s, on_destroy: u, after_update: l } = t.$$;
    c && c.m(n, e), i || k(() => { const r = s.map(B).filter(I);
        u ? u.push(...r) : p(r), t.$$.on_mount = [] }), l.forEach(k) }

function ct(t, n) { const e = t.$$;
    e.fragment !== null && (p(e.on_destroy), e.fragment && e.fragment.d(n), e.on_destroy = e.fragment = null, e.ctx = []) }

function ut(t, n) { t.$$.dirty[0] === -1 && (d.push(t), D(), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31 }

function zt(t, n, e, i, c, s, u, l = [-1]) { const r = m;
    h(t); const o = t.$$ = { fragment: null, ctx: null, props: s, update: A, not_equal: c, bound: q(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(n.context || (r ? r.$$.context : [])), callbacks: q(), dirty: l, skip_bound: !1, root: n.target || r.$$.root };
    u && u(o.root); let f = !1; if (o.ctx = e ? e(t, n.props || {}, (a, y, ...j) => { const C = j.length ? j[0] : y; return o.ctx && c(o.ctx[a], o.ctx[a] = C) && (!o.skip_bound && o.bound[a] && o.bound[a](C), f && ut(t, a)), y }) : [], o.update(), f = !0, p(o.before_update), o.fragment = i ? i(o.ctx) : !1, n.target) { if (n.hydrate) { K(); const a = Z(n.target);
            o.fragment && o.fragment.l(a), a.forEach(W) } else o.fragment && o.fragment.c();
        n.intro && it(t.$$.fragment), rt(t, n.target, n.anchor, n.customElement), Q(), F() } h(r) } class Dt { $destroy() { ct(this, 1), this.$destroy = A } $on(n, e) { const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []); return i.push(e), () => { const c = i.indexOf(e);
            c !== -1 && i.splice(c, 1) } } $set(n) { this.$$set && !G(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1) } }
export { Lt as A, ct as B, H as C, Ct as D, A as E, J as F, p as G, I as H, Y as I, $t as J, ot as K, V as L, yt as M, st as N, at as O, _t as P, dt as Q, ft as R, Dt as S, At as T, vt as U, bt as V, Z as a, gt as b, xt as c, W as d, X as e, kt as f, ht as g, nt as h, zt as i, Et as j, mt as k, pt as l, wt as m, qt as n, Tt as o, Mt as p, it as q, jt as r, lt as s, N as t, St as u, Nt as v, Ot as w, Pt as x, rt as y, Bt as z };