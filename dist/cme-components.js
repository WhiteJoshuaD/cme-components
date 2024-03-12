var fi = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var x = (e, t, r) => (fi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), q = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, L = (e, t, r, n) => (fi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var ls = (e, t, r, n) => ({
  set _(s) {
    L(e, t, s, r);
  },
  get _() {
    return x(e, t, n);
  }
}), ce = (e, t, r) => (fi(e, t, "access private method"), r);
import { jsx as D, jsxs as tt } from "react/jsx-runtime";
import * as R from "react";
import z, { forwardRef as xe, createElement as Z, createContext as cn, useContext as pn, useEffect as Re, useLayoutEffect as yo, useRef as $e, useMemo as Er, useCallback as Fe, useDebugValue as Gl, Children as $n, isValidElement as $s, cloneElement as Qa, Fragment as Ys, useState as we } from "react";
import * as Yl from "react-dom";
import Xl, { flushSync as Jl, createPortal as Ga } from "react-dom";
var is = (e) => e.type === "checkbox", Vr = (e) => e instanceof Date, Ge = (e) => e == null;
const Ya = (e) => typeof e == "object";
var Pe = (e) => !Ge(e) && !Array.isArray(e) && Ya(e) && !Vr(e), Xa = (e) => Pe(e) && e.target ? is(e.target) ? e.target.checked : e.target.value : e, eu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ja = (e, t) => e.has(eu(t)), tu = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Pe(t) && t.hasOwnProperty("isPrototypeOf");
}, bo = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Me(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(bo && (e instanceof Blob || e instanceof FileList)) && (r || Pe(e)))
    if (t = r ? [] : {}, !r && !tu(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = Me(e[n]));
  else
    return e;
  return t;
}
var mn = (e) => Array.isArray(e) ? e.filter(Boolean) : [], _e = (e) => e === void 0, I = (e, t, r) => {
  if (!t || !Pe(e))
    return r;
  const n = mn(t.split(/[,[\].]+?/)).reduce((s, i) => Ge(s) ? s : s[i], e);
  return _e(n) || n === e ? _e(e[t]) ? r : e[t] : n;
}, gt = (e) => typeof e == "boolean";
const As = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ht = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, It = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ec = z.createContext(null), vn = () => z.useContext(ec), ru = (e) => {
  const { children: t, ...r } = e;
  return z.createElement(ec.Provider, { value: r }, t);
};
var tc = (e, t, r, n = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(s, i, {
      get: () => {
        const o = i;
        return t._proxyFormState[o] !== ht.all && (t._proxyFormState[o] = !n || ht.all), r && (r[o] = !0), e[o];
      }
    });
  return s;
}, it = (e) => Pe(e) && !Object.keys(e).length, rc = (e, t, r, n) => {
  r(e);
  const { name: s, ...i } = e;
  return it(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((o) => t[o] === (!n || ht.all));
}, at = (e) => Array.isArray(e) ? e : [e], nc = (e, t, r) => !e || !t || e === t || at(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n)));
function Xs(e) {
  const t = z.useRef(e);
  t.current = e, z.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function nu(e) {
  const t = vn(), { control: r = t.control, disabled: n, name: s, exact: i } = e || {}, [o, a] = z.useState(r._formState), c = z.useRef(!0), l = z.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = z.useRef(s);
  return u.current = s, Xs({
    disabled: n,
    next: (d) => c.current && nc(u.current, d.name, i) && rc(d, l.current, r._updateFormState) && a({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), z.useEffect(() => (c.current = !0, l.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), tc(o, r, l.current, !1);
}
var Ot = (e) => typeof e == "string", sc = (e, t, r, n, s) => Ot(e) ? (n && t.watch.add(e), I(r, e, s)) : Array.isArray(e) ? e.map((i) => (n && t.watch.add(i), I(r, i))) : (n && (t.watchAll = !0), r);
function su(e) {
  const t = vn(), { control: r = t.control, name: n, defaultValue: s, disabled: i, exact: o } = e || {}, a = z.useRef(n);
  a.current = n, Xs({
    disabled: i,
    subject: r._subjects.values,
    next: (u) => {
      nc(a.current, u.name, o) && l(Me(sc(a.current, r._names, u.values || r._formValues, !1, s)));
    }
  });
  const [c, l] = z.useState(r._getWatch(n, s));
  return z.useEffect(() => r._removeUnmounted()), c;
}
var wo = (e) => /^\w*$/.test(e), ic = (e) => mn(e.replace(/["|']|\]/g, "").split(/\.|\[/)), ye = (e, t, r) => {
  let n = -1;
  const s = wo(t) ? [t] : ic(t), i = s.length, o = i - 1;
  for (; ++n < i; ) {
    const a = s[n];
    let c = r;
    if (n !== o) {
      const l = e[a];
      c = Pe(l) || Array.isArray(l) ? l : isNaN(+s[n + 1]) ? {} : [];
    }
    e[a] = c, e = e[a];
  }
  return e;
};
function iu(e) {
  const t = vn(), { name: r, disabled: n, control: s = t.control, shouldUnregister: i } = e, o = Ja(s._names.array, r), a = su({
    control: s,
    name: r,
    defaultValue: I(s._formValues, r, I(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), c = nu({
    control: s,
    name: r
  }), l = z.useRef(s.register(r, {
    ...e.rules,
    value: a,
    ...gt(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return z.useEffect(() => {
    const u = s._options.shouldUnregister || i, d = (p, f) => {
      const y = I(s._fields, p);
      y && (y._f.mount = f);
    };
    if (d(r, !0), u) {
      const p = Me(I(s._options.defaultValues, r));
      ye(s._defaultValues, r, p), _e(I(s._formValues, r)) && ye(s._formValues, r, p);
    }
    return () => {
      (o ? u && !s._state.action : u) ? s.unregister(r) : d(r, !1);
    };
  }, [r, s, o, i]), z.useEffect(() => {
    I(s._fields, r) && s._updateDisabledField({
      disabled: n,
      fields: s._fields,
      name: r,
      value: I(s._fields, r)._f.value
    });
  }, [n, r, s]), {
    field: {
      name: r,
      value: a,
      ...gt(n) || c.disabled ? { disabled: c.disabled || n } : {},
      onChange: z.useCallback((u) => l.current.onChange({
        target: {
          value: Xa(u),
          name: r
        },
        type: As.CHANGE
      }), [r]),
      onBlur: z.useCallback(() => l.current.onBlur({
        target: {
          value: I(s._formValues, r),
          name: r
        },
        type: As.BLUR
      }), [r, s]),
      ref: (u) => {
        const d = I(s._fields, r);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!I(c.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!I(c.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!I(c.touchedFields, r)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!I(c.validatingFields, r)
      },
      error: {
        enumerable: !0,
        get: () => I(c.errors, r)
      }
    })
  };
}
const ou = (e) => e.render(iu(e));
var oc = (e, t, r, n, s) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, Ht = () => {
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? r : r & 3 | 8).toString(16);
  });
}, hi = (e, t, r = {}) => r.shouldFocus || _e(r.shouldFocus) ? r.focusName || `${e}.${_e(r.focusIndex) ? t : r.focusIndex}.` : "", An = (e) => ({
  isOnSubmit: !e || e === ht.onSubmit,
  isOnBlur: e === ht.onBlur,
  isOnChange: e === ht.onChange,
  isOnAll: e === ht.all,
  isOnTouch: e === ht.onTouched
}), ji = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Lr = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const i = I(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !n)
          break;
        if (o.ref && t(o.ref, o.name) && !n)
          break;
        Lr(a, t);
      } else
        Pe(a) && Lr(a, t);
    }
  }
};
var ac = (e, t, r) => {
  const n = mn(I(e, r));
  return ye(n, "root", t[r]), ye(e, r, n), e;
}, xo = (e) => e.type === "file", ir = (e) => typeof e == "function", Ts = (e) => {
  if (!bo)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ws = (e) => Ot(e), _o = (e) => e.type === "radio", Os = (e) => e instanceof RegExp;
const Uo = {
  value: !1,
  isValid: !1
}, Bo = { value: !0, isValid: !0 };
var cc = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !_e(e[0].attributes.value) ? _e(e[0].value) || e[0].value === "" ? Bo : { value: e[0].value, isValid: !0 } : Bo
    ) : Uo;
  }
  return Uo;
};
const Wo = {
  isValid: !1,
  value: null
};
var lc = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Wo) : Wo;
function Zo(e, t, r = "validate") {
  if (ws(e) || Array.isArray(e) && e.every(ws) || gt(e) && !e)
    return {
      type: r,
      message: ws(e) ? e : "",
      ref: t
    };
}
var Ir = (e) => Pe(e) && !Os(e) ? e : {
  value: e,
  message: ""
}, Ui = async (e, t, r, n, s) => {
  const { ref: i, refs: o, required: a, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: f, name: y, valueAsNumber: h, mount: g, disabled: v } = e._f, b = I(t, y);
  if (!g || v)
    return {};
  const _ = o ? o[0] : i, C = (O) => {
    n && _.reportValidity && (_.setCustomValidity(gt(O) ? "" : O || ""), _.reportValidity());
  }, w = {}, E = _o(i), T = is(i), $ = E || T, M = (h || xo(i)) && _e(i.value) && _e(b) || Ts(i) && i.value === "" || b === "" || Array.isArray(b) && !b.length, K = oc.bind(null, y, r, w), se = (O, B, W, H = It.maxLength, ee = It.minLength) => {
    const Q = O ? B : W;
    w[y] = {
      type: O ? H : ee,
      message: Q,
      ref: i,
      ...K(O ? H : ee, Q)
    };
  };
  if (s ? !Array.isArray(b) || !b.length : a && (!$ && (M || Ge(b)) || gt(b) && !b || T && !cc(o).isValid || E && !lc(o).isValid)) {
    const { value: O, message: B } = ws(a) ? { value: !!a, message: a } : Ir(a);
    if (O && (w[y] = {
      type: It.required,
      message: B,
      ref: _,
      ...K(It.required, B)
    }, !r))
      return C(B), w;
  }
  if (!M && (!Ge(u) || !Ge(d))) {
    let O, B;
    const W = Ir(d), H = Ir(u);
    if (!Ge(b) && !isNaN(b)) {
      const ee = i.valueAsNumber || b && +b;
      Ge(W.value) || (O = ee > W.value), Ge(H.value) || (B = ee < H.value);
    } else {
      const ee = i.valueAsDate || new Date(b), Q = (Ze) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Ze), he = i.type == "time", ue = i.type == "week";
      Ot(W.value) && b && (O = he ? Q(b) > Q(W.value) : ue ? b > W.value : ee > new Date(W.value)), Ot(H.value) && b && (B = he ? Q(b) < Q(H.value) : ue ? b < H.value : ee < new Date(H.value));
    }
    if ((O || B) && (se(!!O, W.message, H.message, It.max, It.min), !r))
      return C(w[y].message), w;
  }
  if ((c || l) && !M && (Ot(b) || s && Array.isArray(b))) {
    const O = Ir(c), B = Ir(l), W = !Ge(O.value) && b.length > +O.value, H = !Ge(B.value) && b.length < +B.value;
    if ((W || H) && (se(W, O.message, B.message), !r))
      return C(w[y].message), w;
  }
  if (p && !M && Ot(b)) {
    const { value: O, message: B } = Ir(p);
    if (Os(O) && !b.match(O) && (w[y] = {
      type: It.pattern,
      message: B,
      ref: i,
      ...K(It.pattern, B)
    }, !r))
      return C(B), w;
  }
  if (f) {
    if (ir(f)) {
      const O = await f(b, t), B = Zo(O, _);
      if (B && (w[y] = {
        ...B,
        ...K(It.validate, B.message)
      }, !r))
        return C(B.message), w;
    } else if (Pe(f)) {
      let O = {};
      for (const B in f) {
        if (!it(O) && !r)
          break;
        const W = Zo(await f[B](b, t), _, B);
        W && (O = {
          ...W,
          ...K(B, W.message)
        }, C(W.message), r && (w[y] = O));
      }
      if (!it(O) && (w[y] = {
        ref: _,
        ...O
      }, !r))
        return w;
    }
  }
  return C(!0), w;
}, pi = (e, t) => [
  ...e,
  ...at(t)
], mi = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function vi(e, t, r) {
  return [
    ...e.slice(0, t),
    ...at(r),
    ...e.slice(t)
  ];
}
var gi = (e, t, r) => Array.isArray(e) ? (_e(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]), e) : [], yi = (e, t) => [
  ...at(t),
  ...at(e)
];
function au(e, t) {
  let r = 0;
  const n = [...e];
  for (const s of t)
    n.splice(s - r, 1), r++;
  return mn(n).length ? n : [];
}
var bi = (e, t) => _e(t) ? [] : au(e, at(t).sort((r, n) => r - n)), wi = (e, t, r) => {
  [e[t], e[r]] = [e[r], e[t]];
};
function cu(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = _e(e) ? n++ : e[t[n++]];
  return e;
}
function lu(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !_e(e[t]))
      return !1;
  return !0;
}
function Ne(e, t) {
  const r = Array.isArray(t) ? t : wo(t) ? [t] : ic(t), n = r.length === 1 ? e : cu(e, r), s = r.length - 1, i = r[s];
  return n && delete n[i], s !== 0 && (Pe(n) && it(n) || Array.isArray(n) && lu(n)) && Ne(e, r.slice(0, -1)), e;
}
var zo = (e, t, r) => (e[t] = r, e);
function uu(e) {
  const t = vn(), { control: r = t.control, name: n, keyName: s = "id", shouldUnregister: i } = e, [o, a] = z.useState(r._getFieldArray(n)), c = z.useRef(r._getFieldArray(n).map(Ht)), l = z.useRef(o), u = z.useRef(n), d = z.useRef(!1);
  u.current = n, l.current = o, r._names.array.add(n), e.rules && r.register(n, e.rules), Xs({
    next: ({ values: w, name: E }) => {
      if (E === u.current || !E) {
        const T = I(w, u.current);
        Array.isArray(T) && (a(T), c.current = T.map(Ht));
      }
    },
    subject: r._subjects.array
  });
  const p = z.useCallback((w) => {
    d.current = !0, r._updateFieldArray(n, w);
  }, [r, n]), f = (w, E) => {
    const T = at(Me(w)), $ = pi(r._getFieldArray(n), T);
    r._names.focus = hi(n, $.length - 1, E), c.current = pi(c.current, T.map(Ht)), p($), a($), r._updateFieldArray(n, $, pi, {
      argA: mi(w)
    });
  }, y = (w, E) => {
    const T = at(Me(w)), $ = yi(r._getFieldArray(n), T);
    r._names.focus = hi(n, 0, E), c.current = yi(c.current, T.map(Ht)), p($), a($), r._updateFieldArray(n, $, yi, {
      argA: mi(w)
    });
  }, h = (w) => {
    const E = bi(r._getFieldArray(n), w);
    c.current = bi(c.current, w), p(E), a(E), r._updateFieldArray(n, E, bi, {
      argA: w
    });
  }, g = (w, E, T) => {
    const $ = at(Me(E)), M = vi(r._getFieldArray(n), w, $);
    r._names.focus = hi(n, w, T), c.current = vi(c.current, w, $.map(Ht)), p(M), a(M), r._updateFieldArray(n, M, vi, {
      argA: w,
      argB: mi(E)
    });
  }, v = (w, E) => {
    const T = r._getFieldArray(n);
    wi(T, w, E), wi(c.current, w, E), p(T), a(T), r._updateFieldArray(n, T, wi, {
      argA: w,
      argB: E
    }, !1);
  }, b = (w, E) => {
    const T = r._getFieldArray(n);
    gi(T, w, E), gi(c.current, w, E), p(T), a(T), r._updateFieldArray(n, T, gi, {
      argA: w,
      argB: E
    }, !1);
  }, _ = (w, E) => {
    const T = Me(E), $ = zo(r._getFieldArray(n), w, T);
    c.current = [...$].map((M, K) => !M || K === w ? Ht() : c.current[K]), p($), a([...$]), r._updateFieldArray(n, $, zo, {
      argA: w,
      argB: T
    }, !0, !1);
  }, C = (w) => {
    const E = at(Me(w));
    c.current = E.map(Ht), p([...E]), a([...E]), r._updateFieldArray(n, [...E], (T) => T, {}, !0, !1);
  };
  return z.useEffect(() => {
    if (r._state.action = !1, ji(n, r._names) && r._subjects.state.next({
      ...r._formState
    }), d.current && (!An(r._options.mode).isOnSubmit || r._formState.isSubmitted))
      if (r._options.resolver)
        r._executeSchema([n]).then((w) => {
          const E = I(w.errors, n), T = I(r._formState.errors, n);
          (T ? !E && T.type || E && (T.type !== E.type || T.message !== E.message) : E && E.type) && (E ? ye(r._formState.errors, n, E) : Ne(r._formState.errors, n), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const w = I(r._fields, n);
        w && w._f && !(An(r._options.reValidateMode).isOnSubmit && An(r._options.mode).isOnSubmit) && Ui(w, r._formValues, r._options.criteriaMode === ht.all, r._options.shouldUseNativeValidation, !0).then((E) => !it(E) && r._subjects.state.next({
          errors: ac(r._formState.errors, E, n)
        }));
      }
    r._subjects.values.next({
      name: n,
      values: { ...r._formValues }
    }), r._names.focus && Lr(r._fields, (w, E) => {
      if (r._names.focus && E.startsWith(r._names.focus) && w.focus)
        return w.focus(), 1;
    }), r._names.focus = "", r._updateValid(), d.current = !1;
  }, [o, n, r]), z.useEffect(() => (!I(r._formValues, n) && r._updateFieldArray(n), () => {
    (r._options.shouldUnregister || i) && r.unregister(n);
  }), [n, r, s, i]), {
    swap: z.useCallback(v, [p, n, r]),
    move: z.useCallback(b, [p, n, r]),
    prepend: z.useCallback(y, [p, n, r]),
    append: z.useCallback(f, [p, n, r]),
    remove: z.useCallback(h, [p, n, r]),
    insert: z.useCallback(g, [p, n, r]),
    update: z.useCallback(_, [p, n, r]),
    replace: z.useCallback(C, [p, n, r]),
    fields: z.useMemo(() => o.map((w, E) => ({
      ...w,
      [s]: c.current[E] || Ht()
    })), [o, s])
  };
}
var xi = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const i of e)
        i.next && i.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((i) => i !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Rs = (e) => Ge(e) || !Ya(e);
function pr(e, t) {
  if (Rs(e) || Rs(t))
    return e === t;
  if (Vr(e) && Vr(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const s of r) {
    const i = e[s];
    if (!n.includes(s))
      return !1;
    if (s !== "ref") {
      const o = t[s];
      if (Vr(i) && Vr(o) || Pe(i) && Pe(o) || Array.isArray(i) && Array.isArray(o) ? !pr(i, o) : i !== o)
        return !1;
    }
  }
  return !0;
}
var uc = (e) => e.type === "select-multiple", du = (e) => _o(e) || is(e), _i = (e) => Ts(e) && e.isConnected, fu = (e) => Pe(e) && Object.values(e).some((t) => t), dc = (e) => {
  for (const t in e)
    if (ir(e[t]))
      return !0;
  return !1;
};
function ks(e, t = {}) {
  const r = Array.isArray(e);
  if (Pe(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || Pe(e[n]) && !dc(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, ks(e[n], t[n])) : Ge(e[n]) || (t[n] = !0);
  return t;
}
function fc(e, t, r) {
  const n = Array.isArray(e);
  if (Pe(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || Pe(e[s]) && !dc(e[s]) ? _e(t) || Rs(r[s]) ? r[s] = Array.isArray(e[s]) ? ks(e[s], []) : { ...ks(e[s]) } : fc(e[s], Ge(t) ? {} : t[s], r[s]) : r[s] = !pr(e[s], t[s]);
  return r;
}
var us = (e, t) => fc(e, t, ks(t)), hc = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => _e(e) ? e : t ? e === "" ? NaN : e && +e : r && Ot(e) ? new Date(e) : n ? n(e) : e;
function Si(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return xo(t) ? t.files : _o(t) ? lc(e.refs).value : uc(t) ? [...t.selectedOptions].map(({ value: r }) => r) : is(t) ? cc(e.refs).value : hc(_e(t.value) ? e.ref.value : t.value, e);
}
var hu = (e, t, r, n) => {
  const s = {};
  for (const i of e) {
    const o = I(t, i);
    o && ye(s, i, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, xn = (e) => _e(e) ? e : Os(e) ? e.source : Pe(e) ? Os(e.value) ? e.value.source : e.value : e, pu = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ho(e, t, r) {
  const n = I(e, r);
  if (n || wo(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const i = s.join("."), o = I(t, i), a = I(e, i);
    if (o && !Array.isArray(o) && r !== i)
      return { name: r };
    if (a && a.type)
      return {
        name: i,
        error: a
      };
    s.pop();
  }
  return {
    name: r
  };
}
var mu = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, vu = (e, t) => !mn(I(e, t)).length && Ne(e, t);
const gu = {
  mode: ht.onSubmit,
  reValidateMode: ht.onChange,
  shouldFocusError: !0
};
function yu(e = {}) {
  let t = {
    ...gu,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ir(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, n = {}, s = Pe(t.defaultValues) || Pe(t.values) ? Me(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : Me(s), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, a = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, l = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    values: xi(),
    array: xi(),
    state: xi()
  }, p = An(t.mode), f = An(t.reValidateMode), y = t.criteriaMode === ht.all, h = (m) => (S) => {
    clearTimeout(l), l = setTimeout(m, S);
  }, g = async (m) => {
    if (u.isValid || m) {
      const S = t.resolver ? it((await $()).errors) : await K(n, !0);
      S !== r.isValid && d.state.next({
        isValid: S
      });
    }
  }, v = (m, S) => {
    (u.isValidating || u.validatingFields) && (S.forEach((A) => {
      ye(r.validatingFields, A, m);
    }), r.isValidating = fu(r.validatingFields), d.state.next({
      validatingFields: r.validatingFields,
      isValidating: r.isValidating
    }));
  }, b = (m, S = [], A, F, N = !0, k = !0) => {
    if (F && A) {
      if (o.action = !0, k && Array.isArray(I(n, m))) {
        const V = A(I(n, m), F.argA, F.argB);
        N && ye(n, m, V);
      }
      if (k && Array.isArray(I(r.errors, m))) {
        const V = A(I(r.errors, m), F.argA, F.argB);
        N && ye(r.errors, m, V), vu(r.errors, m);
      }
      if (u.touchedFields && k && Array.isArray(I(r.touchedFields, m))) {
        const V = A(I(r.touchedFields, m), F.argA, F.argB);
        N && ye(r.touchedFields, m, V);
      }
      u.dirtyFields && (r.dirtyFields = us(s, i)), d.state.next({
        name: m,
        isDirty: O(m, S),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      ye(i, m, S);
  }, _ = (m, S) => {
    ye(r.errors, m, S), d.state.next({
      errors: r.errors
    });
  }, C = (m) => {
    r.errors = m, d.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, w = (m, S, A, F) => {
    const N = I(n, m);
    if (N) {
      const k = I(i, m, _e(A) ? I(s, m) : A);
      _e(k) || F && F.defaultChecked || S ? ye(i, m, S ? k : Si(N._f)) : H(m, k), o.mount && g();
    }
  }, E = (m, S, A, F, N) => {
    let k = !1, V = !1;
    const ae = {
      name: m
    }, Oe = !!(I(n, m) && I(n, m)._f.disabled);
    if (!A || F) {
      u.isDirty && (V = r.isDirty, r.isDirty = ae.isDirty = O(), k = V !== ae.isDirty);
      const Ke = Oe || pr(I(s, m), S);
      V = !!(!Oe && I(r.dirtyFields, m)), Ke || Oe ? Ne(r.dirtyFields, m) : ye(r.dirtyFields, m, !0), ae.dirtyFields = r.dirtyFields, k = k || u.dirtyFields && V !== !Ke;
    }
    if (A) {
      const Ke = I(r.touchedFields, m);
      Ke || (ye(r.touchedFields, m, A), ae.touchedFields = r.touchedFields, k = k || u.touchedFields && Ke !== A);
    }
    return k && N && d.state.next(ae), k ? ae : {};
  }, T = (m, S, A, F) => {
    const N = I(r.errors, m), k = u.isValid && gt(S) && r.isValid !== S;
    if (e.delayError && A ? (c = h(() => _(m, A)), c(e.delayError)) : (clearTimeout(l), c = null, A ? ye(r.errors, m, A) : Ne(r.errors, m)), (A ? !pr(N, A) : N) || !it(F) || k) {
      const V = {
        ...F,
        ...k && gt(S) ? { isValid: S } : {},
        errors: r.errors,
        name: m
      };
      r = {
        ...r,
        ...V
      }, d.state.next(V);
    }
    v(!1, Object.keys(r.validatingFields).filter((V) => V === m));
  }, $ = async (m) => t.resolver(i, t.context, hu(m || a.mount, n, t.criteriaMode, t.shouldUseNativeValidation)), M = async (m) => {
    const { errors: S } = await $(m);
    if (m)
      for (const A of m) {
        const F = I(S, A);
        F ? ye(r.errors, A, F) : Ne(r.errors, A);
      }
    else
      r.errors = S;
    return S;
  }, K = async (m, S, A = {
    valid: !0
  }) => {
    for (const F in m) {
      const N = m[F];
      if (N) {
        const { _f: k, ...V } = N;
        if (k) {
          const ae = a.array.has(k.name), Oe = await Ui(N, i, y, t.shouldUseNativeValidation && !S, ae);
          if (Oe[k.name] && (A.valid = !1, S))
            break;
          !S && (I(Oe, k.name) ? ae ? ac(r.errors, Oe, k.name) : ye(r.errors, k.name, Oe[k.name]) : Ne(r.errors, k.name));
        }
        V && await K(V, S, A);
      }
    }
    return A.valid;
  }, se = () => {
    for (const m of a.unMount) {
      const S = I(n, m);
      S && (S._f.refs ? S._f.refs.every((A) => !_i(A)) : !_i(S._f.ref)) && Ie(m);
    }
    a.unMount = /* @__PURE__ */ new Set();
  }, O = (m, S) => (m && S && ye(i, m, S), !pr(Se(), s)), B = (m, S, A) => sc(m, a, {
    ...o.mount ? i : _e(S) ? s : Ot(m) ? { [m]: S } : S
  }, A, S), W = (m) => mn(I(o.mount ? i : s, m, e.shouldUnregister ? I(s, m, []) : [])), H = (m, S, A = {}) => {
    const F = I(n, m);
    let N = S;
    if (F) {
      const k = F._f;
      k && (!k.disabled && ye(i, m, hc(S, k)), N = Ts(k.ref) && Ge(S) ? "" : S, uc(k.ref) ? [...k.ref.options].forEach((V) => V.selected = N.includes(V.value)) : k.refs ? is(k.ref) ? k.refs.length > 1 ? k.refs.forEach((V) => (!V.defaultChecked || !V.disabled) && (V.checked = Array.isArray(N) ? !!N.find((ae) => ae === V.value) : N === V.value)) : k.refs[0] && (k.refs[0].checked = !!N) : k.refs.forEach((V) => V.checked = V.value === N) : xo(k.ref) ? k.ref.value = "" : (k.ref.value = N, k.ref.type || d.values.next({
        name: m,
        values: { ...i }
      })));
    }
    (A.shouldDirty || A.shouldTouch) && E(m, N, A.shouldTouch, A.shouldDirty, !0), A.shouldValidate && Ze(m);
  }, ee = (m, S, A) => {
    for (const F in S) {
      const N = S[F], k = `${m}.${F}`, V = I(n, k);
      (a.array.has(m) || !Rs(N) || V && !V._f) && !Vr(N) ? ee(k, N, A) : H(k, N, A);
    }
  }, Q = (m, S, A = {}) => {
    const F = I(n, m), N = a.array.has(m), k = Me(S);
    ye(i, m, k), N ? (d.array.next({
      name: m,
      values: { ...i }
    }), (u.isDirty || u.dirtyFields) && A.shouldDirty && d.state.next({
      name: m,
      dirtyFields: us(s, i),
      isDirty: O(m, k)
    })) : F && !F._f && !Ge(k) ? ee(m, k, A) : H(m, k, A), ji(m, a) && d.state.next({ ...r }), d.values.next({
      name: o.mount ? m : void 0,
      values: { ...i }
    });
  }, he = async (m) => {
    const S = m.target;
    let A = S.name, F = !0;
    const N = I(n, A), k = () => S.type ? Si(N._f) : Xa(m), V = (ae) => {
      F = Number.isNaN(ae) || ae === I(i, A, ae);
    };
    if (N) {
      let ae, Oe;
      const Ke = k(), _t = m.type === As.BLUR || m.type === As.FOCUS_OUT, ql = !pu(N._f) && !t.resolver && !I(r.errors, A) && !N._f.deps || mu(_t, I(r.touchedFields, A), r.isSubmitted, f, p), ui = ji(A, a, _t);
      ye(i, A, Ke), _t ? (N._f.onBlur && N._f.onBlur(m), c && c(0)) : N._f.onChange && N._f.onChange(m);
      const di = E(A, Ke, _t, !1), Kl = !it(di) || ui;
      if (!_t && d.values.next({
        name: A,
        type: m.type,
        values: { ...i }
      }), ql)
        return u.isValid && g(), Kl && d.state.next({ name: A, ...ui ? {} : di });
      if (!_t && ui && d.state.next({ ...r }), v(!0, [A]), t.resolver) {
        const { errors: Lo } = await $([A]);
        if (V(Ke), F) {
          const Ql = Ho(r.errors, n, A), jo = Ho(Lo, n, Ql.name || A);
          ae = jo.error, A = jo.name, Oe = it(Lo);
        }
      } else
        ae = (await Ui(N, i, y, t.shouldUseNativeValidation))[A], V(Ke), F && (ae ? Oe = !1 : u.isValid && (Oe = await K(n, !0)));
      F && (N._f.deps && Ze(N._f.deps), T(A, Oe, ae, di));
    }
  }, ue = (m, S) => {
    if (I(r.errors, S) && m.focus)
      return m.focus(), 1;
  }, Ze = async (m, S = {}) => {
    let A, F;
    const N = at(m);
    if (v(!0, N), t.resolver) {
      const k = await M(_e(m) ? m : N);
      A = it(k), F = m ? !N.some((V) => I(k, V)) : A;
    } else
      m ? (F = (await Promise.all(N.map(async (k) => {
        const V = I(n, k);
        return await K(V && V._f ? { [k]: V } : V);
      }))).every(Boolean), !(!F && !r.isValid) && g()) : F = A = await K(n);
    return d.state.next({
      ...!Ot(m) || u.isValid && A !== r.isValid ? {} : { name: m },
      ...t.resolver || !m ? { isValid: A } : {},
      errors: r.errors,
      isValidating: !1
    }), S.shouldFocus && !F && Lr(n, ue, m ? N : a.mount), F;
  }, Se = (m) => {
    const S = {
      ...s,
      ...o.mount ? i : {}
    };
    return _e(m) ? S : Ot(m) ? I(S, m) : m.map((A) => I(S, A));
  }, ke = (m, S) => ({
    invalid: !!I((S || r).errors, m),
    isDirty: !!I((S || r).dirtyFields, m),
    isTouched: !!I((S || r).touchedFields, m),
    isValidating: !!I((S || r).validatingFields, m),
    error: I((S || r).errors, m)
  }), rt = (m) => {
    m && at(m).forEach((S) => Ne(r.errors, S)), d.state.next({
      errors: m ? r.errors : {}
    });
  }, Xe = (m, S, A) => {
    const F = (I(n, m, { _f: {} })._f || {}).ref;
    ye(r.errors, m, {
      ...S,
      ref: F
    }), d.state.next({
      name: m,
      errors: r.errors,
      isValid: !1
    }), A && A.shouldFocus && F && F.focus && F.focus();
  }, ze = (m, S) => ir(m) ? d.values.subscribe({
    next: (A) => m(B(void 0, S), A)
  }) : B(m, S, !0), Ie = (m, S = {}) => {
    for (const A of m ? at(m) : a.mount)
      a.mount.delete(A), a.array.delete(A), S.keepValue || (Ne(n, A), Ne(i, A)), !S.keepError && Ne(r.errors, A), !S.keepDirty && Ne(r.dirtyFields, A), !S.keepTouched && Ne(r.touchedFields, A), !S.keepIsValidating && Ne(r.validatingFields, A), !t.shouldUnregister && !S.keepDefaultValue && Ne(s, A);
    d.values.next({
      values: { ...i }
    }), d.state.next({
      ...r,
      ...S.keepDirty ? { isDirty: O() } : {}
    }), !S.keepIsValid && g();
  }, X = ({ disabled: m, name: S, field: A, fields: F, value: N }) => {
    if (gt(m)) {
      const k = m ? void 0 : _e(N) ? Si(A ? A._f : I(F, S)._f) : N;
      ye(i, S, k), E(S, k, !1, !1, !0);
    }
  }, ge = (m, S = {}) => {
    let A = I(n, m);
    const F = gt(S.disabled);
    return ye(n, m, {
      ...A || {},
      _f: {
        ...A && A._f ? A._f : { ref: { name: m } },
        name: m,
        mount: !0,
        ...S
      }
    }), a.mount.add(m), A ? X({
      field: A,
      disabled: S.disabled,
      name: m,
      value: S.value
    }) : w(m, !0, S.value), {
      ...F ? { disabled: S.disabled } : {},
      ...t.progressive ? {
        required: !!S.required,
        min: xn(S.min),
        max: xn(S.max),
        minLength: xn(S.minLength),
        maxLength: xn(S.maxLength),
        pattern: xn(S.pattern)
      } : {},
      name: m,
      onChange: he,
      onBlur: he,
      ref: (N) => {
        if (N) {
          ge(m, S), A = I(n, m);
          const k = _e(N.value) && N.querySelectorAll && N.querySelectorAll("input,select,textarea")[0] || N, V = du(k), ae = A._f.refs || [];
          if (V ? ae.find((Oe) => Oe === k) : k === A._f.ref)
            return;
          ye(n, m, {
            _f: {
              ...A._f,
              ...V ? {
                refs: [
                  ...ae.filter(_i),
                  k,
                  ...Array.isArray(I(s, m)) ? [{}] : []
                ],
                ref: { type: k.type, name: m }
              } : { ref: k }
            }
          }), w(m, !1, void 0, k);
        } else
          A = I(n, m, {}), A._f && (A._f.mount = !1), (t.shouldUnregister || S.shouldUnregister) && !(Ja(a.array, m) && o.action) && a.unMount.add(m);
      }
    };
  }, Ae = () => t.shouldFocusError && Lr(n, ue, a.mount), de = (m) => {
    gt(m) && (d.state.next({ disabled: m }), Lr(n, (S, A) => {
      let F = m;
      const N = I(n, A);
      N && gt(N._f.disabled) && (F || (F = N._f.disabled)), S.disabled = F;
    }, 0, !1));
  }, le = (m, S) => async (A) => {
    let F;
    A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
    let N = Me(i);
    if (d.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: k, values: V } = await $();
      r.errors = k, N = V;
    } else
      await K(n);
    if (Ne(r.errors, "root"), it(r.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await m(N, A);
      } catch (k) {
        F = k;
      }
    } else
      S && await S({ ...r.errors }, A), Ae(), setTimeout(Ae);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: it(r.errors) && !F,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), F)
      throw F;
  }, G = (m, S = {}) => {
    I(n, m) && (_e(S.defaultValue) ? Q(m, Me(I(s, m))) : (Q(m, S.defaultValue), ye(s, m, Me(S.defaultValue))), S.keepTouched || Ne(r.touchedFields, m), S.keepDirty || (Ne(r.dirtyFields, m), r.isDirty = S.defaultValue ? O(m, Me(I(s, m))) : O()), S.keepError || (Ne(r.errors, m), u.isValid && g()), d.state.next({ ...r }));
  }, re = (m, S = {}) => {
    const A = m ? Me(m) : s, F = Me(A), N = it(m), k = N ? s : F;
    if (S.keepDefaultValues || (s = A), !S.keepValues) {
      if (S.keepDirtyValues)
        for (const V of a.mount)
          I(r.dirtyFields, V) ? ye(k, V, I(i, V)) : Q(V, I(k, V));
      else {
        if (bo && _e(m))
          for (const V of a.mount) {
            const ae = I(n, V);
            if (ae && ae._f) {
              const Oe = Array.isArray(ae._f.refs) ? ae._f.refs[0] : ae._f.ref;
              if (Ts(Oe)) {
                const Ke = Oe.closest("form");
                if (Ke) {
                  Ke.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      i = e.shouldUnregister ? S.keepDefaultValues ? Me(s) : {} : Me(k), d.array.next({
        values: { ...k }
      }), d.values.next({
        values: { ...k }
      });
    }
    a = {
      mount: S.keepDirtyValues ? a.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !u.isValid || !!S.keepIsValid || !!S.keepDirtyValues, o.watch = !!e.shouldUnregister, d.state.next({
      submitCount: S.keepSubmitCount ? r.submitCount : 0,
      isDirty: N ? !1 : S.keepDirty ? r.isDirty : !!(S.keepDefaultValues && !pr(m, s)),
      isSubmitted: S.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: N ? [] : S.keepDirtyValues ? S.keepDefaultValues && i ? us(s, i) : r.dirtyFields : S.keepDefaultValues && m ? us(s, m) : {},
      touchedFields: S.keepTouched ? r.touchedFields : {},
      errors: S.keepErrors ? r.errors : {},
      isSubmitSuccessful: S.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, fe = (m, S) => re(ir(m) ? m(i) : m, S);
  return {
    control: {
      register: ge,
      unregister: Ie,
      getFieldState: ke,
      handleSubmit: le,
      setError: Xe,
      _executeSchema: $,
      _getWatch: B,
      _getDirty: O,
      _updateValid: g,
      _removeUnmounted: se,
      _updateFieldArray: b,
      _updateDisabledField: X,
      _getFieldArray: W,
      _reset: re,
      _resetDefaultValues: () => ir(t.defaultValues) && t.defaultValues().then((m) => {
        fe(m, t.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (m) => {
        r = {
          ...r,
          ...m
        };
      },
      _disableForm: de,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: C,
      get _fields() {
        return n;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(m) {
        o = m;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(m) {
        a = m;
      },
      get _formState() {
        return r;
      },
      set _formState(m) {
        r = m;
      },
      get _options() {
        return t;
      },
      set _options(m) {
        t = {
          ...t,
          ...m
        };
      }
    },
    trigger: Ze,
    register: ge,
    handleSubmit: le,
    watch: ze,
    setValue: Q,
    getValues: Se,
    reset: fe,
    resetField: G,
    clearErrors: rt,
    unregister: Ie,
    setError: Xe,
    setFocus: (m, S = {}) => {
      const A = I(n, m), F = A && A._f;
      if (F) {
        const N = F.refs ? F.refs[0] : F.ref;
        N.focus && (N.focus(), S.shouldSelect && N.select());
      }
    },
    getFieldState: ke
  };
}
function bu(e = {}) {
  const t = z.useRef(), r = z.useRef(), [n, s] = z.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ir(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: ir(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...yu(e),
    formState: n
  });
  const i = t.current.control;
  return i._options = e, Xs({
    subject: i._subjects.state,
    next: (o) => {
      rc(o, i._proxyFormState, i._updateFormState, !0) && s({ ...i._formState });
    }
  }), z.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), z.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const o = i._getDirty();
      o !== n.isDirty && i._subjects.state.next({
        isDirty: o
      });
    }
  }, [i, n.isDirty]), z.useEffect(() => {
    e.values && !pr(e.values, r.current) ? (i._reset(e.values, i._options.resetOptions), r.current = e.values, s((o) => ({ ...o }))) : i._resetDefaultValues();
  }, [e.values, i]), z.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), z.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), z.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = tc(n, i), t.current;
}
var qo = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var n = I(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, pc = function(e, t) {
  var r = function(s) {
    var i = t.fields[s];
    i && i.ref && "reportValidity" in i.ref ? qo(i.ref, s, e) : i.refs && i.refs.forEach(function(o) {
      return qo(o, s, e);
    });
  };
  for (var n in t.fields)
    r(n);
}, wu = function(e, t) {
  t.shouldUseNativeValidation && pc(e, t);
  var r = {};
  for (var n in e) {
    var s = I(t.fields, n), i = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (xu(t.names || Object.keys(e), n)) {
      var o = Object.assign({}, I(r, n));
      ye(o, "root", i), ye(r, n, o);
    } else
      ye(r, n, i);
  }
  return r;
}, xu = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, _u = function(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], s = n.code, i = n.message, o = n.path.join(".");
    if (!r[o])
      if ("unionErrors" in n) {
        var a = n.unionErrors[0].errors[0];
        r[o] = { message: a.message, type: a.code };
      } else
        r[o] = { message: i, type: s };
    if ("unionErrors" in n && n.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var c = r[o].types, l = c && c[n.code];
      r[o] = oc(o, t, r, s, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}, Su = function(e, t, r) {
  return r === void 0 && (r = {}), function(n, s, i) {
    try {
      return Promise.resolve(function(o, a) {
        try {
          var c = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(l) {
            return i.shouldUseNativeValidation && pc({}, i), { errors: {}, values: r.raw ? n : l };
          });
        } catch (l) {
          return a(l);
        }
        return c && c.then ? c.then(void 0, a) : c;
      }(0, function(o) {
        if (function(a) {
          return a.errors != null;
        }(o))
          return { values: {}, errors: wu(_u(o.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = (e, t) => {
  const r = xe(
    ({
      color: n = "currentColor",
      size: s = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: o,
      className: a = "",
      children: c,
      ...l
    }, u) => Z(
      "svg",
      {
        ref: u,
        ...Cu,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: ["lucide", `lucide-${Eu(e)}`, a].join(" "),
        ...l
      },
      [
        ...t.map(([d, p]) => Z(d, p)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = Js("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = Js("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Au = Js("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.352.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tu = Js("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
var Bi = { exports: {} }, Ci = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko;
function Ou() {
  if (Ko)
    return Ci;
  Ko = 1;
  var e = z;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, s = e.useEffect, i = e.useLayoutEffect, o = e.useDebugValue;
  function a(d, p) {
    var f = p(), y = n({ inst: { value: f, getSnapshot: p } }), h = y[0].inst, g = y[1];
    return i(function() {
      h.value = f, h.getSnapshot = p, c(h) && g({ inst: h });
    }, [d, f, p]), s(function() {
      return c(h) && g({ inst: h }), d(function() {
        c(h) && g({ inst: h });
      });
    }, [d]), o(f), f;
  }
  function c(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var f = p();
      return !r(d, f);
    } catch {
      return !0;
    }
  }
  function l(d, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return Ci.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ci;
}
var Ei = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function Ru() {
  return Qo || (Qo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = z, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(_) {
      {
        for (var C = arguments.length, w = new Array(C > 1 ? C - 1 : 0), E = 1; E < C; E++)
          w[E - 1] = arguments[E];
        n("error", _, w);
      }
    }
    function n(_, C, w) {
      {
        var E = t.ReactDebugCurrentFrame, T = E.getStackAddendum();
        T !== "" && (C += "%s", w = w.concat([T]));
        var $ = w.map(function(M) {
          return String(M);
        });
        $.unshift("Warning: " + C), Function.prototype.apply.call(console[_], console, $);
      }
    }
    function s(_, C) {
      return _ === C && (_ !== 0 || 1 / _ === 1 / C) || _ !== _ && C !== C;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = e.useState, a = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(_, C, w) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = C();
      if (!d) {
        var T = C();
        i(E, T) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var $ = o({
        inst: {
          value: E,
          getSnapshot: C
        }
      }), M = $[0].inst, K = $[1];
      return c(function() {
        M.value = E, M.getSnapshot = C, f(M) && K({
          inst: M
        });
      }, [_, E, C]), a(function() {
        f(M) && K({
          inst: M
        });
        var se = function() {
          f(M) && K({
            inst: M
          });
        };
        return _(se);
      }, [_]), l(E), E;
    }
    function f(_) {
      var C = _.getSnapshot, w = _.value;
      try {
        var E = C();
        return !i(w, E);
      } catch {
        return !0;
      }
    }
    function y(_, C, w) {
      return C();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !h, v = g ? y : p, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v;
    Ei.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ei;
}
process.env.NODE_ENV === "production" ? Bi.exports = Ou() : Bi.exports = Ru();
var ku = Bi.exports;
const or = () => {
}, et = (
  /*#__NOINLINE__*/
  or()
), $i = Object, me = (e) => e === et, At = (e) => typeof e == "function", ar = (e, t) => ({
  ...e,
  ...t
}), Pu = (e) => At(e.then), ds = /* @__PURE__ */ new WeakMap();
let Iu = 0;
const On = (e) => {
  const t = typeof e, r = e && e.constructor, n = r == Date;
  let s, i;
  if ($i(e) === e && !n && r != RegExp) {
    if (s = ds.get(e), s)
      return s;
    if (s = ++Iu + "~", ds.set(e, s), r == Array) {
      for (s = "@", i = 0; i < e.length; i++)
        s += On(e[i]) + ",";
      ds.set(e, s);
    }
    if (r == $i) {
      s = "#";
      const o = $i.keys(e).sort();
      for (; !me(i = o.pop()); )
        me(e[i]) || (s += i + ":" + On(e[i]) + ",");
      ds.set(e, s);
    }
  } else
    s = n ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return s;
}, Vt = /* @__PURE__ */ new WeakMap(), Ai = {}, fs = {}, So = "undefined", ei = typeof window != So, Wi = typeof document != So, Nu = () => ei && typeof window.requestAnimationFrame != So, vc = (e, t) => {
  const r = Vt.get(e);
  return [
    // Getter
    () => !me(t) && e.get(t) || Ai,
    // Setter
    (n) => {
      if (!me(t)) {
        const s = e.get(t);
        t in fs || (fs[t] = s), r[5](t, ar(s, n), s || Ai);
      }
    },
    // Subscriber
    r[6],
    // Get server cache snapshot
    () => !me(t) && t in fs ? fs[t] : !me(t) && e.get(t) || Ai
  ];
};
let Zi = !0;
const Du = () => Zi, [zi, Hi] = ei && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  or,
  or
], Mu = () => {
  const e = Wi && document.visibilityState;
  return me(e) || e !== "hidden";
}, Fu = (e) => (Wi && document.addEventListener("visibilitychange", e), zi("focus", e), () => {
  Wi && document.removeEventListener("visibilitychange", e), Hi("focus", e);
}), Vu = (e) => {
  const t = () => {
    Zi = !0, e();
  }, r = () => {
    Zi = !1;
  };
  return zi("online", t), zi("offline", r), () => {
    Hi("online", t), Hi("offline", r);
  };
}, Lu = {
  isOnline: Du,
  isVisible: Mu
}, ju = {
  initFocus: Fu,
  initReconnect: Vu
}, Go = !z.useId, Rn = !ei || "Deno" in window, Uu = (e) => Nu() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Ti = Rn ? Re : yo, Oi = typeof navigator < "u" && navigator.connection, Yo = !Rn && Oi && ([
  "slow-2g",
  "2g"
].includes(Oi.effectiveType) || Oi.saveData), Co = (e) => {
  if (At(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? On(e) : "", [
    e,
    t
  ];
};
let Bu = 0;
const qi = () => ++Bu, gc = 0, yc = 1, bc = 2, Wu = 3;
var _n = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Wu,
  FOCUS_EVENT: gc,
  MUTATE_EVENT: bc,
  RECONNECT_EVENT: yc
};
async function wc(...e) {
  const [t, r, n, s] = e, i = ar({
    populateCache: !0,
    throwOnError: !0
  }, typeof s == "boolean" ? {
    revalidate: s
  } : s || {});
  let o = i.populateCache;
  const a = i.rollbackOnError;
  let c = i.optimisticData;
  const l = (p) => typeof a == "function" ? a(p) : a !== !1, u = i.throwOnError;
  if (At(r)) {
    const p = r, f = [], y = t.keys();
    for (const h of y)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(h) && p(t.get(h)._k) && f.push(h);
    return Promise.all(f.map(d));
  }
  return d(r);
  async function d(p) {
    const [f] = Co(p);
    if (!f)
      return;
    const [y, h] = vc(t, f), [g, v, b, _] = Vt.get(t), C = () => {
      const B = g[f];
      return (At(i.revalidate) ? i.revalidate(y().data, p) : i.revalidate !== !1) && (delete b[f], delete _[f], B && B[0]) ? B[0](bc).then(() => y().data) : y().data;
    };
    if (e.length < 3)
      return C();
    let w = n, E;
    const T = qi();
    v[f] = [
      T,
      0
    ];
    const $ = !me(c), M = y(), K = M.data, se = M._c, O = me(se) ? K : se;
    if ($ && (c = At(c) ? c(O, K) : c, h({
      data: c,
      _c: O
    })), At(w))
      try {
        w = w(O);
      } catch (B) {
        E = B;
      }
    if (w && Pu(w))
      if (w = await w.catch((B) => {
        E = B;
      }), T !== v[f][0]) {
        if (E)
          throw E;
        return w;
      } else
        E && $ && l(E) && (o = !0, h({
          data: O,
          _c: et
        }));
    if (o && !E)
      if (At(o)) {
        const B = o(w, O);
        h({
          data: B,
          error: et,
          _c: et
        });
      } else
        h({
          data: w,
          error: et,
          _c: et
        });
    if (v[f][1] = qi(), Promise.resolve(C()).then(() => {
      h({
        _c: et
      });
    }), E) {
      if (u)
        throw E;
      return;
    }
    return w;
  }
}
const Xo = (e, t) => {
  for (const r in e)
    e[r][0] && e[r][0](t);
}, Zu = (e, t) => {
  if (!Vt.has(e)) {
    const r = ar(ju, t), n = {}, s = wc.bind(et, e);
    let i = or;
    const o = {}, a = (u, d) => {
      const p = o[u] || [];
      return o[u] = p, p.push(d), () => p.splice(p.indexOf(d), 1);
    }, c = (u, d, p) => {
      e.set(u, d);
      const f = o[u];
      if (f)
        for (const y of f)
          y(d, p);
    }, l = () => {
      if (!Vt.has(e) && (Vt.set(e, [
        n,
        {},
        {},
        {},
        s,
        c,
        a
      ]), !Rn)) {
        const u = r.initFocus(setTimeout.bind(et, Xo.bind(et, n, gc))), d = r.initReconnect(setTimeout.bind(et, Xo.bind(et, n, yc)));
        i = () => {
          u && u(), d && d(), Vt.delete(e);
        };
      }
    };
    return l(), [
      e,
      s,
      l,
      i
    ];
  }
  return [
    e,
    Vt.get(e)[4]
  ];
}, zu = (e, t, r, n, s) => {
  const i = r.errorRetryCount, o = s.retryCount, a = ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) * r.errorRetryInterval;
  !me(i) && o > i || setTimeout(n, a, s);
}, Hu = (e, t) => On(e) == On(t), [xc, qu] = Zu(/* @__PURE__ */ new Map()), Ku = ar(
  {
    // events
    onLoadingSlow: or,
    onSuccess: or,
    onError: or,
    onErrorRetry: zu,
    onDiscarded: or,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Yo ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Yo ? 5e3 : 3e3,
    // providers
    compare: Hu,
    isPaused: () => !1,
    cache: xc,
    mutate: qu,
    fallback: {}
  },
  // use web preset by default
  Lu
), Qu = (e, t) => {
  const r = ar(e, t);
  if (t) {
    const { use: n, fallback: s } = e, { use: i, fallback: o } = t;
    n && i && (r.use = n.concat(i)), s && o && (r.fallback = ar(s, o));
  }
  return r;
}, Gu = cn({}), Yu = "$inf$", _c = ei && window.__SWR_DEVTOOLS_USE__, Xu = _c ? window.__SWR_DEVTOOLS_USE__ : [], Ju = () => {
  _c && (window.__SWR_DEVTOOLS_REACT__ = z);
}, ed = (e) => At(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], td = () => ar(Ku, pn(Gu)), rd = (e) => (t, r, n) => e(t, r && ((...i) => {
  const [o] = Co(t), [, , , a] = Vt.get(xc);
  if (o.startsWith(Yu))
    return r(...i);
  const c = a[o];
  return me(c) ? r(...i) : (delete a[o], c);
}), n), nd = Xu.concat(rd), sd = (e) => function(...r) {
  const n = td(), [s, i, o] = ed(r), a = Qu(n, o);
  let c = e;
  const { use: l } = a, u = (l || []).concat(nd);
  for (let d = u.length; d--; )
    c = u[d](c);
  return c(s, i || a.fetcher || null, a);
}, id = (e, t, r) => {
  const n = t[e] || (t[e] = []);
  return n.push(r), () => {
    const s = n.indexOf(r);
    s >= 0 && (n[s] = n[n.length - 1], n.pop());
  };
};
Ju();
const Jo = z.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), Ri = {
  dedupe: !0
}, od = (e, t, r) => {
  const { cache: n, compare: s, suspense: i, fallbackData: o, revalidateOnMount: a, revalidateIfStale: c, refreshInterval: l, refreshWhenHidden: u, refreshWhenOffline: d, keepPreviousData: p } = r, [f, y, h, g] = Vt.get(n), [v, b] = Co(e), _ = $e(!1), C = $e(!1), w = $e(v), E = $e(t), T = $e(r), $ = () => T.current, M = () => $().isVisible() && $().isOnline(), [K, se, O, B] = vc(n, v), W = $e({}).current, H = me(o) ? r.fallback[v] : o, ee = (G, re) => {
    for (const fe in W) {
      const pe = fe;
      if (pe === "data") {
        if (!s(G[pe], re[pe]) && (!me(G[pe]) || !s(ze, re[pe])))
          return !1;
      } else if (re[pe] !== G[pe])
        return !1;
    }
    return !0;
  }, Q = Er(() => {
    const G = !v || !t ? !1 : me(a) ? $().isPaused() || i ? !1 : me(c) ? !0 : c : a, re = (S) => {
      const A = ar(S);
      return delete A._k, G ? {
        isValidating: !0,
        isLoading: !0,
        ...A
      } : A;
    }, fe = K(), pe = B(), Ve = re(fe), nt = fe === pe ? Ve : re(pe);
    let m = Ve;
    return [
      () => {
        const S = re(K());
        return ee(S, m) ? (m.data = S.data, m.isLoading = S.isLoading, m.isValidating = S.isValidating, m.error = S.error, m) : (m = S, S);
      },
      () => nt
    ];
  }, [
    n,
    v
  ]), he = ku.useSyncExternalStore(Fe(
    (G) => O(v, (re, fe) => {
      ee(fe, re) || G();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      v
    ]
  ), Q[0], Q[1]), ue = !_.current, Ze = f[v] && f[v].length > 0, Se = he.data, ke = me(Se) ? H : Se, rt = he.error, Xe = $e(ke), ze = p ? me(Se) ? Xe.current : Se : ke, Ie = Ze && !me(rt) ? !1 : ue && !me(a) ? a : $().isPaused() ? !1 : i ? me(ke) ? !1 : c : me(ke) || c, X = !!(v && t && ue && Ie), ge = me(he.isValidating) ? X : he.isValidating, Ae = me(he.isLoading) ? X : he.isLoading, de = Fe(
    async (G) => {
      const re = E.current;
      if (!v || !re || C.current || $().isPaused())
        return !1;
      let fe, pe, Ve = !0;
      const nt = G || {}, m = !h[v] || !nt.dedupe, S = () => Go ? !C.current && v === w.current && _.current : v === w.current, A = {
        isValidating: !1,
        isLoading: !1
      }, F = () => {
        se(A);
      }, N = () => {
        const V = h[v];
        V && V[1] === pe && delete h[v];
      }, k = {
        isValidating: !0
      };
      me(K().data) && (k.isLoading = !0);
      try {
        if (m && (se(k), r.loadingTimeout && me(K().data) && setTimeout(() => {
          Ve && S() && $().onLoadingSlow(v, r);
        }, r.loadingTimeout), h[v] = [
          re(b),
          qi()
        ]), [fe, pe] = h[v], fe = await fe, m && setTimeout(N, r.dedupingInterval), !h[v] || h[v][1] !== pe)
          return m && S() && $().onDiscarded(v), !1;
        A.error = et;
        const V = y[v];
        if (!me(V) && // case 1
        (pe <= V[0] || // case 2
        pe <= V[1] || // case 3
        V[1] === 0))
          return F(), m && S() && $().onDiscarded(v), !1;
        const ae = K().data;
        A.data = s(ae, fe) ? ae : fe, m && S() && $().onSuccess(fe, v, r);
      } catch (V) {
        N();
        const ae = $(), { shouldRetryOnError: Oe } = ae;
        ae.isPaused() || (A.error = V, m && S() && (ae.onError(V, v, ae), (Oe === !0 || At(Oe) && Oe(V)) && (!$().revalidateOnFocus || !$().revalidateOnReconnect || M()) && ae.onErrorRetry(V, v, ae, (Ke) => {
          const _t = f[v];
          _t && _t[0] && _t[0](_n.ERROR_REVALIDATE_EVENT, Ke);
        }, {
          retryCount: (nt.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Ve = !1, F(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      v,
      n
    ]
  ), le = Fe(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...G) => wc(n, w.current, ...G),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Ti(() => {
    E.current = t, T.current = r, me(Se) || (Xe.current = Se);
  }), Ti(() => {
    if (!v)
      return;
    const G = de.bind(et, Ri);
    let re = 0;
    const pe = id(v, f, (Ve, nt = {}) => {
      if (Ve == _n.FOCUS_EVENT) {
        const m = Date.now();
        $().revalidateOnFocus && m > re && M() && (re = m + $().focusThrottleInterval, G());
      } else if (Ve == _n.RECONNECT_EVENT)
        $().revalidateOnReconnect && M() && G();
      else {
        if (Ve == _n.MUTATE_EVENT)
          return de();
        if (Ve == _n.ERROR_REVALIDATE_EVENT)
          return de(nt);
      }
    });
    return C.current = !1, w.current = v, _.current = !0, se({
      _k: b
    }), Ie && (me(ke) || Rn ? G() : Uu(G)), () => {
      C.current = !0, pe();
    };
  }, [
    v
  ]), Ti(() => {
    let G;
    function re() {
      const pe = At(l) ? l(K().data) : l;
      pe && G !== -1 && (G = setTimeout(fe, pe));
    }
    function fe() {
      !K().error && (u || $().isVisible()) && (d || $().isOnline()) ? de(Ri).then(re) : re();
    }
    return re(), () => {
      G && (clearTimeout(G), G = -1);
    };
  }, [
    l,
    u,
    d,
    v
  ]), Gl(ze), i && me(ke) && v) {
    if (!Go && Rn)
      throw new Error("Fallback data is required when using suspense in SSR.");
    E.current = t, T.current = r, C.current = !1;
    const G = g[v];
    if (!me(G)) {
      const re = le(G);
      Jo(re);
    }
    if (me(rt)) {
      const re = de(Ri);
      me(ze) || (re.status = "fulfilled", re.value = !0), Jo(re);
    } else
      throw rt;
  }
  return {
    mutate: le,
    get data() {
      return W.data = !0, ze;
    },
    get error() {
      return W.error = !0, rt;
    },
    get isValidating() {
      return W.isValidating = !0, ge;
    },
    get isLoading() {
      return W.isLoading = !0, Ae;
    }
  };
}, ad = sd(od);
var ve;
(function(e) {
  e.assertEqual = (s) => s;
  function t(s) {
  }
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (s) => {
    const i = {};
    for (const o of s)
      i[o] = o;
    return i;
  }, e.getValidEnumValues = (s) => {
    const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), o = {};
    for (const a of i)
      o[a] = s[a];
    return e.objectValues(o);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(i) {
    return s[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
    return i;
  }, e.find = (s, i) => {
    for (const o of s)
      if (i(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, i = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(ve || (ve = {}));
var Ki;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ki || (Ki = {}));
const j = ve.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Yt = (e) => {
  switch (typeof e) {
    case "undefined":
      return j.undefined;
    case "string":
      return j.string;
    case "number":
      return isNaN(e) ? j.nan : j.number;
    case "boolean":
      return j.boolean;
    case "function":
      return j.function;
    case "bigint":
      return j.bigint;
    case "symbol":
      return j.symbol;
    case "object":
      return Array.isArray(e) ? j.array : e === null ? j.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? j.promise : typeof Map < "u" && e instanceof Map ? j.map : typeof Set < "u" && e instanceof Set ? j.set : typeof Date < "u" && e instanceof Date ? j.date : j.object;
    default:
      return j.unknown;
  }
}, P = ve.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), cd = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class bt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const r = t || function(i) {
      return i.message;
    }, n = { _errors: [] }, s = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let a = n, c = 0;
          for (; c < o.path.length; ) {
            const l = o.path[c];
            c === o.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(r(o))) : a[l] = a[l] || { _errors: [] }, a = a[l], c++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ve.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
bt.create = (e) => new bt(e);
const kn = (e, t) => {
  let r;
  switch (e.code) {
    case P.invalid_type:
      e.received === j.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case P.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, ve.jsonStringifyReplacer)}`;
      break;
    case P.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${ve.joinValues(e.keys, ", ")}`;
      break;
    case P.invalid_union:
      r = "Invalid input";
      break;
    case P.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${ve.joinValues(e.options)}`;
      break;
    case P.invalid_enum_value:
      r = `Invalid enum value. Expected ${ve.joinValues(e.options)}, received '${e.received}'`;
      break;
    case P.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case P.invalid_return_type:
      r = "Invalid function return type";
      break;
    case P.invalid_date:
      r = "Invalid date";
      break;
    case P.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : ve.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case P.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case P.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case P.custom:
      r = "Invalid input";
      break;
    case P.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case P.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case P.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, ve.assertNever(e);
  }
  return { message: r };
};
let Sc = kn;
function ld(e) {
  Sc = e;
}
function Ps() {
  return Sc;
}
const Is = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    a = l(o, { data: t, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
}, ud = [];
function U(e, t) {
  const r = Is({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Ps(),
      kn
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class He {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return te;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r)
      n.push({
        key: await s.key,
        value: await s.value
      });
    return He.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return te;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (n[i.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const te = Object.freeze({
  status: "aborted"
}), Cc = (e) => ({ status: "dirty", value: e }), Ye = (e) => ({ status: "valid", value: e }), Qi = (e) => e.status === "aborted", Gi = (e) => e.status === "dirty", Pn = (e) => e.status === "valid", Ns = (e) => typeof Promise < "u" && e instanceof Promise;
var Y;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Y || (Y = {}));
class Rt {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ea = (e, t) => {
  if (Pn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new bt(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ne(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: s };
}
class oe {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Yt(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Yt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new He(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Yt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Ns(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Yt(t)
    }, i = this._parseSync({ data: t, path: s.path, parent: s });
    return ea(s, i);
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Yt(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), i = await (Ns(s) ? s : Promise.resolve(s));
    return ea(n, i);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = t(s), a = () => i.addIssue({
        code: P.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new xt({
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Lt.create(this, this._def);
  }
  nullable() {
    return Tr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return wt.create(this, this._def);
  }
  promise() {
    return un.create(this, this._def);
  }
  or(t) {
    return Mn.create([this, t], this._def);
  }
  and(t) {
    return Fn.create(this, t, this._def);
  }
  transform(t) {
    return new xt({
      ...ne(this._def),
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Bn({
      ...ne(this._def),
      innerType: this,
      defaultValue: r,
      typeName: J.ZodDefault
    });
  }
  brand() {
    return new $c({
      typeName: J.ZodBranded,
      type: this,
      ...ne(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Vs({
      ...ne(this._def),
      innerType: this,
      catchValue: r,
      typeName: J.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return os.create(this, t);
  }
  readonly() {
    return js.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const dd = /^c[^\s-]{8,}$/i, fd = /^[a-z][a-z0-9]*$/, hd = /^[0-9A-HJKMNP-TV-Z]{26}$/, pd = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, md = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, vd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ki;
const gd = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, yd = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, bd = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function wd(e, t) {
  return !!((t === "v4" || !t) && gd.test(e) || (t === "v6" || !t) && yd.test(e));
}
class yt extends oe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== j.string) {
      const i = this._getOrReturnCtx(t);
      return U(
        i,
        {
          code: P.invalid_type,
          expected: j.string,
          received: i.parsedType
        }
        //
      ), te;
    }
    const n = new He();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (s = this._getOrReturnCtx(t, s), U(s, {
          code: P.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (s = this._getOrReturnCtx(t, s), U(s, {
          code: P.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value, a = t.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(t, s), o ? U(s, {
          code: P.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && U(s, {
          code: P.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        md.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "email",
          code: P.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        ki || (ki = new RegExp(vd, "u")), ki.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "emoji",
          code: P.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        pd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "uuid",
          code: P.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        dd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "cuid",
          code: P.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        fd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "cuid2",
          code: P.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        hd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "ulid",
          code: P.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), U(s, {
            validation: "url",
            code: P.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "regex",
          code: P.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: P.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: P.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: P.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? bd(i).test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: P.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? wd(t.data, i.version) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "ip",
          code: P.invalid_string,
          message: i.message
        }), n.dirty()) : ve.assertNever(i);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: P.invalid_string,
      ...Y.errToObj(n)
    });
  }
  _addCheck(t) {
    return new yt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Y.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Y.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Y.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Y.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Y.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Y.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Y.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Y.errToObj(t) });
  }
  datetime(t) {
    var r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
      ...Y.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Y.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...Y.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Y.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Y.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Y.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Y.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Y.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Y.errToObj(t));
  }
  trim() {
    return new yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
yt.create = (e) => {
  var t;
  return new yt({
    checks: [],
    typeName: J.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
function xd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(e.toFixed(s).replace(".", "")), o = parseInt(t.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class cr extends oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== j.number) {
      const i = this._getOrReturnCtx(t);
      return U(i, {
        code: P.invalid_type,
        expected: j.number,
        received: i.parsedType
      }), te;
    }
    let n;
    const s = new He();
    for (const i of this._def.checks)
      i.kind === "int" ? ve.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? xd(t.data, i.value) !== 0 && (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.not_finite,
        message: i.message
      }), s.dirty()) : ve.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, Y.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, Y.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, Y.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, Y.toString(r));
  }
  setLimit(t, r, n, s) {
    return new cr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: Y.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new cr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Y.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Y.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Y.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Y.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Y.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ve.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
cr.create = (e) => new cr({
  checks: [],
  typeName: J.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class lr extends oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== j.bigint) {
      const i = this._getOrReturnCtx(t);
      return U(i, {
        code: P.invalid_type,
        expected: j.bigint,
        received: i.parsedType
      }), te;
    }
    let n;
    const s = new He();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: P.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : ve.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, Y.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, Y.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, Y.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, Y.toString(r));
  }
  setLimit(t, r, n, s) {
    return new lr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: Y.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new lr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Y.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
lr.create = (e) => {
  var t;
  return new lr({
    checks: [],
    typeName: J.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
class In extends oe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== j.boolean) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: P.invalid_type,
        expected: j.boolean,
        received: n.parsedType
      }), te;
    }
    return Ye(t.data);
  }
}
In.create = (e) => new In({
  typeName: J.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class $r extends oe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== j.date) {
      const i = this._getOrReturnCtx(t);
      return U(i, {
        code: P.invalid_type,
        expected: j.date,
        received: i.parsedType
      }), te;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return U(i, {
        code: P.invalid_date
      }), te;
    }
    const n = new He();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (s = this._getOrReturnCtx(t, s), U(s, {
        code: P.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (s = this._getOrReturnCtx(t, s), U(s, {
        code: P.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : ve.assertNever(i);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new $r({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Y.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Y.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
$r.create = (e) => new $r({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: J.ZodDate,
  ...ne(e)
});
class Ds extends oe {
  _parse(t) {
    if (this._getType(t) !== j.symbol) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: P.invalid_type,
        expected: j.symbol,
        received: n.parsedType
      }), te;
    }
    return Ye(t.data);
  }
}
Ds.create = (e) => new Ds({
  typeName: J.ZodSymbol,
  ...ne(e)
});
class Nn extends oe {
  _parse(t) {
    if (this._getType(t) !== j.undefined) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: P.invalid_type,
        expected: j.undefined,
        received: n.parsedType
      }), te;
    }
    return Ye(t.data);
  }
}
Nn.create = (e) => new Nn({
  typeName: J.ZodUndefined,
  ...ne(e)
});
class Dn extends oe {
  _parse(t) {
    if (this._getType(t) !== j.null) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: P.invalid_type,
        expected: j.null,
        received: n.parsedType
      }), te;
    }
    return Ye(t.data);
  }
}
Dn.create = (e) => new Dn({
  typeName: J.ZodNull,
  ...ne(e)
});
class ln extends oe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ye(t.data);
  }
}
ln.create = (e) => new ln({
  typeName: J.ZodAny,
  ...ne(e)
});
class Cr extends oe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ye(t.data);
  }
}
Cr.create = (e) => new Cr({
  typeName: J.ZodUnknown,
  ...ne(e)
});
class jt extends oe {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return U(r, {
      code: P.invalid_type,
      expected: j.never,
      received: r.parsedType
    }), te;
  }
}
jt.create = (e) => new jt({
  typeName: J.ZodNever,
  ...ne(e)
});
class Ms extends oe {
  _parse(t) {
    if (this._getType(t) !== j.undefined) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: P.invalid_type,
        expected: j.void,
        received: n.parsedType
      }), te;
    }
    return Ye(t.data);
  }
}
Ms.create = (e) => new Ms({
  typeName: J.ZodVoid,
  ...ne(e)
});
class wt extends oe {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== j.array)
      return U(r, {
        code: P.invalid_type,
        expected: j.array,
        received: r.parsedType
      }), te;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (o || a) && (U(r, {
        code: o ? P.too_big : P.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (U(r, {
      code: P.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (U(r, {
      code: P.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Rt(r, o, r.path, a)))).then((o) => He.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Rt(r, o, r.path, a)));
    return He.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new wt({
      ...this._def,
      minLength: { value: t, message: Y.toString(r) }
    });
  }
  max(t, r) {
    return new wt({
      ...this._def,
      maxLength: { value: t, message: Y.toString(r) }
    });
  }
  length(t, r) {
    return new wt({
      ...this._def,
      exactLength: { value: t, message: Y.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
wt.create = (e, t) => new wt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: J.ZodArray,
  ...ne(t)
});
function Fr(e) {
  if (e instanceof Te) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Lt.create(Fr(n));
    }
    return new Te({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof wt ? new wt({
      ...e._def,
      type: Fr(e.element)
    }) : e instanceof Lt ? Lt.create(Fr(e.unwrap())) : e instanceof Tr ? Tr.create(Fr(e.unwrap())) : e instanceof kt ? kt.create(e.items.map((t) => Fr(t))) : e;
}
class Te extends oe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = ve.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== j.object) {
      const l = this._getOrReturnCtx(t);
      return U(l, {
        code: P.invalid_type,
        expected: j.object,
        received: l.parsedType
      }), te;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof jt && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const u = i[l], d = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Rt(s, d, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof jt) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (l === "strict")
        a.length > 0 && (U(s, {
          code: P.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Rt(s, d, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const d = await u.key;
        l.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => He.mergeObjectSync(n, l)) : He.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Y.errToObj, new Te({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, o, a;
          const c = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = Y.errToObj(t).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Te({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Te({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Te({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Te({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: J.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Te({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return ve.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Te({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return ve.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new Te({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Fr(this);
  }
  partial(t) {
    const r = {};
    return ve.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new Te({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return ve.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof Lt; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new Te({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ec(ve.objectKeys(this.shape));
  }
}
Te.create = (e, t) => new Te({
  shape: () => e,
  unknownKeys: "strip",
  catchall: jt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
Te.strictCreate = (e, t) => new Te({
  shape: () => e,
  unknownKeys: "strict",
  catchall: jt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
Te.lazycreate = (e, t) => new Te({
  shape: e,
  unknownKeys: "strip",
  catchall: jt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
class Mn extends oe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new bt(a.ctx.common.issues));
      return U(r, {
        code: P.invalid_union,
        unionErrors: o
      }), te;
    }
    if (r.common.async)
      return Promise.all(n.map(async (i) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let i;
      const o = [];
      for (const c of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }), l.common.issues.length && o.push(l.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((c) => new bt(c));
      return U(r, {
        code: P.invalid_union,
        unionErrors: a
      }), te;
    }
  }
  get options() {
    return this._def.options;
  }
}
Mn.create = (e, t) => new Mn({
  options: e,
  typeName: J.ZodUnion,
  ...ne(t)
});
const xs = (e) => e instanceof Ln ? xs(e.schema) : e instanceof xt ? xs(e.innerType()) : e instanceof jn ? [e.value] : e instanceof ur ? e.options : e instanceof Un ? Object.keys(e.enum) : e instanceof Bn ? xs(e._def.innerType) : e instanceof Nn ? [void 0] : e instanceof Dn ? [null] : null;
class ti extends oe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== j.object)
      return U(r, {
        code: P.invalid_type,
        expected: j.object,
        received: r.parsedType
      }), te;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (U(r, {
      code: P.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), te);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const i of r) {
      const o = xs(i.shape[t]);
      if (!o)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new ti({
      typeName: J.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...ne(n)
    });
  }
}
function Yi(e, t) {
  const r = Yt(e), n = Yt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === j.object && n === j.object) {
    const s = ve.objectKeys(t), i = ve.objectKeys(e).filter((a) => s.indexOf(a) !== -1), o = { ...e, ...t };
    for (const a of i) {
      const c = Yi(e[a], t[a]);
      if (!c.valid)
        return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (r === j.array && n === j.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i], a = t[i], c = Yi(o, a);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === j.date && n === j.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Fn extends oe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (i, o) => {
      if (Qi(i) || Qi(o))
        return te;
      const a = Yi(i.value, o.value);
      return a.valid ? ((Gi(i) || Gi(o)) && r.dirty(), { status: r.value, value: a.data }) : (U(n, {
        code: P.invalid_intersection_types
      }), te);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Fn.create = (e, t, r) => new Fn({
  left: e,
  right: t,
  typeName: J.ZodIntersection,
  ...ne(r)
});
class kt extends oe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== j.array)
      return U(n, {
        code: P.invalid_type,
        expected: j.array,
        received: n.parsedType
      }), te;
    if (n.data.length < this._def.items.length)
      return U(n, {
        code: P.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), te;
    !this._def.rest && n.data.length > this._def.items.length && (U(n, {
      code: P.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((o, a) => {
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new Rt(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(i).then((o) => He.mergeArray(r, o)) : He.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new kt({
      ...this._def,
      rest: t
    });
  }
}
kt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new kt({
    items: e,
    typeName: J.ZodTuple,
    rest: null,
    ...ne(t)
  });
};
class Vn extends oe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== j.object)
      return U(n, {
        code: P.invalid_type,
        expected: j.object,
        received: n.parsedType
      }), te;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: i._parse(new Rt(n, a, n.path, a)),
        value: o._parse(new Rt(n, n.data[a], n.path, a))
      });
    return n.common.async ? He.mergeObjectAsync(r, s) : He.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof oe ? new Vn({
      keyType: t,
      valueType: r,
      typeName: J.ZodRecord,
      ...ne(n)
    }) : new Vn({
      keyType: yt.create(),
      valueType: t,
      typeName: J.ZodRecord,
      ...ne(r)
    });
  }
}
class Fs extends oe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== j.map)
      return U(n, {
        code: P.invalid_type,
        expected: j.map,
        received: n.parsedType
      }), te;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, c], l) => ({
      key: s._parse(new Rt(n, a, n.path, [l, "key"])),
      value: i._parse(new Rt(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return te;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), a.set(l.value, u.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of o) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return te;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), a.set(l.value, u.value);
      }
      return { status: r.value, value: a };
    }
  }
}
Fs.create = (e, t, r) => new Fs({
  valueType: t,
  keyType: e,
  typeName: J.ZodMap,
  ...ne(r)
});
class Ar extends oe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== j.set)
      return U(n, {
        code: P.invalid_type,
        expected: j.set,
        received: n.parsedType
      }), te;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (U(n, {
      code: P.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (U(n, {
      code: P.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function o(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return te;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const a = [...n.data.values()].map((c, l) => i._parse(new Rt(n, c, n.path, l)));
    return n.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(t, r) {
    return new Ar({
      ...this._def,
      minSize: { value: t, message: Y.toString(r) }
    });
  }
  max(t, r) {
    return new Ar({
      ...this._def,
      maxSize: { value: t, message: Y.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ar.create = (e, t) => new Ar({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: J.ZodSet,
  ...ne(t)
});
class jr extends oe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== j.function)
      return U(r, {
        code: P.invalid_type,
        expected: j.function,
        received: r.parsedType
      }), te;
    function n(a, c) {
      return Is({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ps(),
          kn
        ].filter((l) => !!l),
        issueData: {
          code: P.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(a, c) {
      return Is({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ps(),
          kn
        ].filter((l) => !!l),
        issueData: {
          code: P.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof un) {
      const a = this;
      return Ye(async function(...c) {
        const l = new bt([]), u = await a._def.args.parseAsync(c, i).catch((f) => {
          throw l.addIssue(n(c, f)), l;
        }), d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((f) => {
          throw l.addIssue(s(d, f)), l;
        });
      });
    } else {
      const a = this;
      return Ye(function(...c) {
        const l = a._def.args.safeParse(c, i);
        if (!l.success)
          throw new bt([n(c, l.error)]);
        const u = Reflect.apply(o, this, l.data), d = a._def.returns.safeParse(u, i);
        if (!d.success)
          throw new bt([s(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new jr({
      ...this._def,
      args: kt.create(t).rest(Cr.create())
    });
  }
  returns(t) {
    return new jr({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new jr({
      args: t || kt.create([]).rest(Cr.create()),
      returns: r || Cr.create(),
      typeName: J.ZodFunction,
      ...ne(n)
    });
  }
}
class Ln extends oe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ln.create = (e, t) => new Ln({
  getter: e,
  typeName: J.ZodLazy,
  ...ne(t)
});
class jn extends oe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return U(r, {
        received: r.data,
        code: P.invalid_literal,
        expected: this._def.value
      }), te;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
jn.create = (e, t) => new jn({
  value: e,
  typeName: J.ZodLiteral,
  ...ne(t)
});
function Ec(e, t) {
  return new ur({
    values: e,
    typeName: J.ZodEnum,
    ...ne(t)
  });
}
class ur extends oe {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return U(r, {
        expected: ve.joinValues(n),
        received: r.parsedType,
        code: P.invalid_type
      }), te;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return U(r, {
        received: r.data,
        code: P.invalid_enum_value,
        options: n
      }), te;
    }
    return Ye(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t) {
    return ur.create(t);
  }
  exclude(t) {
    return ur.create(this.options.filter((r) => !t.includes(r)));
  }
}
ur.create = Ec;
class Un extends oe {
  _parse(t) {
    const r = ve.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== j.string && n.parsedType !== j.number) {
      const s = ve.objectValues(r);
      return U(n, {
        expected: ve.joinValues(s),
        received: n.parsedType,
        code: P.invalid_type
      }), te;
    }
    if (r.indexOf(t.data) === -1) {
      const s = ve.objectValues(r);
      return U(n, {
        received: n.data,
        code: P.invalid_enum_value,
        options: s
      }), te;
    }
    return Ye(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Un.create = (e, t) => new Un({
  values: e,
  typeName: J.ZodNativeEnum,
  ...ne(t)
});
class un extends oe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== j.promise && r.common.async === !1)
      return U(r, {
        code: P.invalid_type,
        expected: j.promise,
        received: r.parsedType
      }), te;
    const n = r.parsedType === j.promise ? r.data : Promise.resolve(r.data);
    return Ye(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
un.create = (e, t) => new un({
  type: e,
  typeName: J.ZodPromise,
  ...ne(t)
});
class xt extends oe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === J.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, i = {
      addIssue: (o) => {
        U(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "preprocess") {
      const o = s.transform(n.data, i);
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(o).then((a) => this._def.schema._parseAsync({
        data: a,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: o,
        path: n.path,
        parent: n
      });
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const c = s.refinement(a, i);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? te : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? te : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Pn(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => Pn(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    ve.assertNever(s);
  }
}
xt.create = (e, t, r) => new xt({
  schema: e,
  typeName: J.ZodEffects,
  effect: t,
  ...ne(r)
});
xt.createWithPreprocess = (e, t, r) => new xt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: J.ZodEffects,
  ...ne(r)
});
class Lt extends oe {
  _parse(t) {
    return this._getType(t) === j.undefined ? Ye(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Lt.create = (e, t) => new Lt({
  innerType: e,
  typeName: J.ZodOptional,
  ...ne(t)
});
class Tr extends oe {
  _parse(t) {
    return this._getType(t) === j.null ? Ye(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Tr.create = (e, t) => new Tr({
  innerType: e,
  typeName: J.ZodNullable,
  ...ne(t)
});
class Bn extends oe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === j.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Bn.create = (e, t) => new Bn({
  innerType: e,
  typeName: J.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ne(t)
});
class Vs extends oe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Ns(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new bt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new bt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Vs.create = (e, t) => new Vs({
  innerType: e,
  typeName: J.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ne(t)
});
class Ls extends oe {
  _parse(t) {
    if (this._getType(t) !== j.nan) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: P.invalid_type,
        expected: j.nan,
        received: n.parsedType
      }), te;
    }
    return { status: "valid", value: t.data };
  }
}
Ls.create = (e) => new Ls({
  typeName: J.ZodNaN,
  ...ne(e)
});
const _d = Symbol("zod_brand");
class $c extends oe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class os extends oe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? te : i.status === "dirty" ? (r.dirty(), Cc(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? te : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new os({
      in: t,
      out: r,
      typeName: J.ZodPipeline
    });
  }
}
class js extends oe {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return Pn(r) && (r.value = Object.freeze(r.value)), r;
  }
}
js.create = (e, t) => new js({
  innerType: e,
  typeName: J.ZodReadonly,
  ...ne(t)
});
const Ac = (e, t = {}, r) => e ? ln.create().superRefine((n, s) => {
  var i, o;
  if (!e(n)) {
    const a = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, c = (o = (i = a.fatal) !== null && i !== void 0 ? i : r) !== null && o !== void 0 ? o : !0, l = typeof a == "string" ? { message: a } : a;
    s.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : ln.create(), Sd = {
  object: Te.lazycreate
};
var J;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(J || (J = {}));
const Cd = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ac((r) => r instanceof e, t), Tc = yt.create, Oc = cr.create, Ed = Ls.create, $d = lr.create, Rc = In.create, Ad = $r.create, Td = Ds.create, Od = Nn.create, Rd = Dn.create, kd = ln.create, Pd = Cr.create, Id = jt.create, Nd = Ms.create, Dd = wt.create, Md = Te.create, Fd = Te.strictCreate, Vd = Mn.create, Ld = ti.create, jd = Fn.create, Ud = kt.create, Bd = Vn.create, Wd = Fs.create, Zd = Ar.create, zd = jr.create, Hd = Ln.create, qd = jn.create, Kd = ur.create, Qd = Un.create, Gd = un.create, ta = xt.create, Yd = Lt.create, Xd = Tr.create, Jd = xt.createWithPreprocess, ef = os.create, tf = () => Tc().optional(), rf = () => Oc().optional(), nf = () => Rc().optional(), sf = {
  string: (e) => yt.create({ ...e, coerce: !0 }),
  number: (e) => cr.create({ ...e, coerce: !0 }),
  boolean: (e) => In.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => lr.create({ ...e, coerce: !0 }),
  date: (e) => $r.create({ ...e, coerce: !0 })
}, of = te;
var Dt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: kn,
  setErrorMap: ld,
  getErrorMap: Ps,
  makeIssue: Is,
  EMPTY_PATH: ud,
  addIssueToContext: U,
  ParseStatus: He,
  INVALID: te,
  DIRTY: Cc,
  OK: Ye,
  isAborted: Qi,
  isDirty: Gi,
  isValid: Pn,
  isAsync: Ns,
  get util() {
    return ve;
  },
  get objectUtil() {
    return Ki;
  },
  ZodParsedType: j,
  getParsedType: Yt,
  ZodType: oe,
  ZodString: yt,
  ZodNumber: cr,
  ZodBigInt: lr,
  ZodBoolean: In,
  ZodDate: $r,
  ZodSymbol: Ds,
  ZodUndefined: Nn,
  ZodNull: Dn,
  ZodAny: ln,
  ZodUnknown: Cr,
  ZodNever: jt,
  ZodVoid: Ms,
  ZodArray: wt,
  ZodObject: Te,
  ZodUnion: Mn,
  ZodDiscriminatedUnion: ti,
  ZodIntersection: Fn,
  ZodTuple: kt,
  ZodRecord: Vn,
  ZodMap: Fs,
  ZodSet: Ar,
  ZodFunction: jr,
  ZodLazy: Ln,
  ZodLiteral: jn,
  ZodEnum: ur,
  ZodNativeEnum: Un,
  ZodPromise: un,
  ZodEffects: xt,
  ZodTransformer: xt,
  ZodOptional: Lt,
  ZodNullable: Tr,
  ZodDefault: Bn,
  ZodCatch: Vs,
  ZodNaN: Ls,
  BRAND: _d,
  ZodBranded: $c,
  ZodPipeline: os,
  ZodReadonly: js,
  custom: Ac,
  Schema: oe,
  ZodSchema: oe,
  late: Sd,
  get ZodFirstPartyTypeKind() {
    return J;
  },
  coerce: sf,
  any: kd,
  array: Dd,
  bigint: $d,
  boolean: Rc,
  date: Ad,
  discriminatedUnion: Ld,
  effect: ta,
  enum: Kd,
  function: zd,
  instanceof: Cd,
  intersection: jd,
  lazy: Hd,
  literal: qd,
  map: Wd,
  nan: Ed,
  nativeEnum: Qd,
  never: Id,
  null: Rd,
  nullable: Xd,
  number: Oc,
  object: Md,
  oboolean: nf,
  onumber: rf,
  optional: Yd,
  ostring: tf,
  pipeline: ef,
  preprocess: Jd,
  promise: Gd,
  record: Bd,
  set: Zd,
  strictObject: Fd,
  string: Tc,
  symbol: Td,
  transformer: ta,
  tuple: Ud,
  undefined: Od,
  union: Vd,
  unknown: Pd,
  void: Nd,
  NEVER: of,
  ZodIssueCode: P,
  quotelessJson: cd,
  ZodError: bt
});
function be() {
  return be = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, be.apply(this, arguments);
}
function af(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function kc(...e) {
  return (t) => e.forEach(
    (r) => af(r, t)
  );
}
function qe(...e) {
  return Fe(kc(...e), e);
}
const Or = /* @__PURE__ */ xe((e, t) => {
  const { children: r, ...n } = e, s = $n.toArray(r), i = s.find(lf);
  if (i) {
    const o = i.props.children, a = s.map((c) => c === i ? $n.count(o) > 1 ? $n.only(null) : /* @__PURE__ */ $s(o) ? o.props.children : null : c);
    return /* @__PURE__ */ Z(Xi, be({}, n, {
      ref: t
    }), /* @__PURE__ */ $s(o) ? /* @__PURE__ */ Qa(o, void 0, a) : null);
  }
  return /* @__PURE__ */ Z(Xi, be({}, n, {
    ref: t
  }), r);
});
Or.displayName = "Slot";
const Xi = /* @__PURE__ */ xe((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ $s(r) ? /* @__PURE__ */ Qa(r, {
    ...uf(n, r.props),
    ref: t ? kc(t, r.ref) : r.ref
  }) : $n.count(r) > 1 ? $n.only(null) : null;
});
Xi.displayName = "SlotClone";
const cf = ({ children: e }) => /* @__PURE__ */ Z(Ys, null, e);
function lf(e) {
  return /* @__PURE__ */ $s(e) && e.type === cf;
}
function uf(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const s = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? s && i ? r[n] = (...a) => {
      i(...a), s(...a);
    } : s && (r[n] = s) : n === "style" ? r[n] = {
      ...s,
      ...i
    } : n === "className" && (r[n] = [
      s,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function Pc(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Pc(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function df() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Pc(e)) && (n && (n += " "), n += t);
  return n;
}
const ra = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, na = df, Ic = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return na(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = t, o = Object.keys(s).map((l) => {
    const u = r == null ? void 0 : r[l], d = i == null ? void 0 : i[l];
    if (u === null)
      return null;
    const p = ra(u) || ra(d);
    return s[l][p];
  }), a = r && Object.entries(r).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: d, className: p, ...f } = u;
    return Object.entries(f).every((y) => {
      let [h, g] = y;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...a
      }[h]) : {
        ...i,
        ...a
      }[h] === g;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return na(e, o, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Nc(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Nc(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ff() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Nc(e)) && (n && (n += " "), n += t);
  return n;
}
const Eo = "-";
function hf(e) {
  const t = mf(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(o) {
    const a = o.split(Eo);
    return a[0] === "" && a.length !== 1 && a.shift(), Dc(a, t) || pf(o);
  }
  function i(o, a) {
    const c = r[o] || [];
    return a && n[o] ? [...c, ...n[o]] : c;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: i
  };
}
function Dc(e, t) {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? Dc(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(Eo);
  return (o = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}
const sa = /^\[(.+)\]$/;
function pf(e) {
  if (sa.test(e)) {
    const t = sa.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function mf(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return gf(Object.entries(e.classGroups), r).forEach(([i, o]) => {
    Ji(o, n, i, t);
  }), n;
}
function Ji(e, t, r, n) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : ia(t, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (vf(s)) {
        Ji(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      Ji(o, ia(t, i), r, n);
    });
  });
}
function ia(e, t) {
  let r = e;
  return t.split(Eo).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function vf(e) {
  return e.isThemeGetter;
}
function gf(e, t) {
  return t ? e.map(([r, n]) => {
    const s = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [t + o, a])) : i);
    return [r, s];
  }) : e;
}
function yf(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function s(i, o) {
    r.set(i, o), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let o = r.get(i);
      if (o !== void 0)
        return o;
      if ((o = n.get(i)) !== void 0)
        return s(i, o), o;
    },
    set(i, o) {
      r.has(i) ? r.set(i, o) : s(i, o);
    }
  };
}
const Mc = "!";
function bf(e) {
  const t = e.separator, r = t.length === 1, n = t[0], s = t.length;
  return function(o) {
    const a = [];
    let c = 0, l = 0, u;
    for (let h = 0; h < o.length; h++) {
      let g = o[h];
      if (c === 0) {
        if (g === n && (r || o.slice(h, h + s) === t)) {
          a.push(o.slice(l, h)), l = h + s;
          continue;
        }
        if (g === "/") {
          u = h;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const d = a.length === 0 ? o : o.substring(l), p = d.startsWith(Mc), f = p ? d.substring(1) : d, y = u && u > l ? u - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: y
    };
  };
}
function wf(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function xf(e) {
  return {
    cache: yf(e.cacheSize),
    splitModifiers: bf(e),
    ...hf(e)
  };
}
const _f = /\s+/;
function Sf(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(_f).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = r(o);
    let d = n(u ? l.substring(0, u) : l), p = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = n(l), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      p = !1;
    }
    const f = wf(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? f + Mc : f,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: p
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: c,
      hasPostfixModifier: l
    } = o, u = a + c;
    return i.has(u) ? !1 : (i.add(u), s(c, l).forEach((d) => i.add(a + d)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function Cf() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Fc(t)) && (n && (n += " "), n += r);
  return n;
}
function Fc(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Fc(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Ef(e, ...t) {
  let r, n, s, i = o;
  function o(c) {
    const l = t.reduce((u, d) => d(u), e());
    return r = xf(l), n = r.cache.get, s = r.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = n(c);
    if (l)
      return l;
    const u = Sf(c, r);
    return s(c, u), u;
  }
  return function() {
    return i(Cf.apply(null, arguments));
  };
}
function Ce(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Vc = /^\[(?:([a-z-]+):)?(.+)\]$/i, $f = /^\d+\/\d+$/, Af = /* @__PURE__ */ new Set(["px", "full", "screen"]), Tf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Of = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, kf = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Nt(e) {
  return mr(e) || Af.has(e) || $f.test(e);
}
function qt(e) {
  return gn(e, "length", jf);
}
function mr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function hs(e) {
  return gn(e, "number", mr);
}
function Sn(e) {
  return !!e && Number.isInteger(Number(e));
}
function If(e) {
  return e.endsWith("%") && mr(e.slice(0, -1));
}
function ie(e) {
  return Vc.test(e);
}
function Kt(e) {
  return Tf.test(e);
}
const Nf = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Df(e) {
  return gn(e, Nf, Lc);
}
function Mf(e) {
  return gn(e, "position", Lc);
}
const Ff = /* @__PURE__ */ new Set(["image", "url"]);
function Vf(e) {
  return gn(e, Ff, Bf);
}
function Lf(e) {
  return gn(e, "", Uf);
}
function Cn() {
  return !0;
}
function gn(e, t, r) {
  const n = Vc.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function jf(e) {
  return Of.test(e) && !Rf.test(e);
}
function Lc() {
  return !1;
}
function Uf(e) {
  return kf.test(e);
}
function Bf(e) {
  return Pf.test(e);
}
function Wf() {
  const e = Ce("colors"), t = Ce("spacing"), r = Ce("blur"), n = Ce("brightness"), s = Ce("borderColor"), i = Ce("borderRadius"), o = Ce("borderSpacing"), a = Ce("borderWidth"), c = Ce("contrast"), l = Ce("grayscale"), u = Ce("hueRotate"), d = Ce("invert"), p = Ce("gap"), f = Ce("gradientColorStops"), y = Ce("gradientColorStopPositions"), h = Ce("inset"), g = Ce("margin"), v = Ce("opacity"), b = Ce("padding"), _ = Ce("saturate"), C = Ce("scale"), w = Ce("sepia"), E = Ce("skew"), T = Ce("space"), $ = Ce("translate"), M = () => ["auto", "contain", "none"], K = () => ["auto", "hidden", "clip", "visible", "scroll"], se = () => ["auto", ie, t], O = () => [ie, t], B = () => ["", Nt, qt], W = () => ["auto", mr, ie], H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], he = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ue = () => ["", "0", ie], Ze = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Se = () => [mr, hs], ke = () => [mr, ie];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Cn],
      spacing: [Nt, qt],
      blur: ["none", "", Kt, ie],
      brightness: Se(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Kt, ie],
      borderSpacing: O(),
      borderWidth: B(),
      contrast: Se(),
      grayscale: ue(),
      hueRotate: ke(),
      invert: ue(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [If, qt],
      inset: se(),
      margin: se(),
      opacity: Se(),
      padding: O(),
      saturate: Se(),
      scale: Se(),
      sepia: ue(),
      skew: ke(),
      space: O(),
      translate: O()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ie]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Kt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ze()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ze()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...H(), ie]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Sn, ie]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: se()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ue()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ue()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Sn, ie]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Cn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Sn, ie]
        }, ie]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Cn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Sn, ie]
        }, ie]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ie]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ie]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...he()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...he(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...he(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [T]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ie, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ie, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Kt]
        }, Kt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ie, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ie, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Kt, qt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Cn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", mr, hs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Nt, ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ie]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ie]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Nt, qt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Nt, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ie]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ie]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...H(), Mf]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Df]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ee(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ee()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Nt, ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Nt, qt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Nt, qt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Kt, Lf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Cn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Q()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Kt, ie]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ie]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ke()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ke()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ie]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Sn, ie]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ie]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ie]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ie]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Nt, qt, hs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Zf = /* @__PURE__ */ Ef(Wf);
function Ue(...e) {
  return Zf(ff(e));
}
const zf = Ic(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Us = R.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => /* @__PURE__ */ D(
    n ? Or : "button",
    {
      className: Ue(zf({ variant: t, size: r, className: e })),
      ref: i,
      ...s
    }
  )
);
Us.displayName = "Button";
const Hf = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Be = Hf.reduce((e, t) => {
  const r = /* @__PURE__ */ xe((n, s) => {
    const { asChild: i, ...o } = n, a = i ? Or : t;
    return Re(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ Z(a, be({}, o, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function qf(e, t) {
  e && Jl(
    () => e.dispatchEvent(t)
  );
}
const Kf = /* @__PURE__ */ xe((e, t) => /* @__PURE__ */ Z(Be.label, be({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), jc = Kf, Qf = Ic(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Uc = R.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ D(
  jc,
  {
    ref: r,
    className: Ue(Qf(), e),
    ...t
  }
));
Uc.displayName = jc.displayName;
const Gf = ru, Bc = R.createContext(
  {}
), Tn = ({
  ...e
}) => /* @__PURE__ */ D(Bc.Provider, { value: { name: e.name }, children: /* @__PURE__ */ D(ou, { ...e }) }), ri = () => {
  const e = R.useContext(Bc), t = R.useContext(Wc), { getFieldState: r, formState: n } = vn(), s = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, Wc = R.createContext(
  {}
), Ur = R.forwardRef(({ className: e, ...t }, r) => {
  const n = R.useId();
  return /* @__PURE__ */ D(Wc.Provider, { value: { id: n }, children: /* @__PURE__ */ D("div", { ref: r, className: Ue("space-y-2", e), ...t }) });
});
Ur.displayName = "FormItem";
const Br = R.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: s } = ri();
  return /* @__PURE__ */ D(
    Uc,
    {
      ref: r,
      className: Ue(n && "text-destructive", e),
      htmlFor: s,
      ...t
    }
  );
});
Br.displayName = "FormLabel";
const Wr = R.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: s, formMessageId: i } = ri();
  return /* @__PURE__ */ D(
    Or,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${s} ${i}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
Wr.displayName = "FormControl";
const Yf = R.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = ri();
  return /* @__PURE__ */ D(
    "p",
    {
      ref: r,
      id: n,
      className: Ue("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Yf.displayName = "FormDescription";
const Zr = R.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: s, formMessageId: i } = ri(), o = s ? String(s == null ? void 0 : s.message) : t;
  return o ? /* @__PURE__ */ D(
    "p",
    {
      ref: n,
      id: i,
      className: Ue("text-sm font-medium text-destructive", e),
      ...r,
      children: o
    }
  ) : null;
});
Zr.displayName = "FormMessage";
function oa(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function je(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function $o(e, t = []) {
  let r = [];
  function n(i, o) {
    const a = /* @__PURE__ */ cn(o), c = r.length;
    r = [
      ...r,
      o
    ];
    function l(d) {
      const { scope: p, children: f, ...y } = d, h = (p == null ? void 0 : p[e][c]) || a, g = Er(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ Z(h.Provider, {
        value: g
      }, f);
    }
    function u(d, p) {
      const f = (p == null ? void 0 : p[e][c]) || a, y = pn(f);
      if (y)
        return y;
      if (o !== void 0)
        return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      u
    ];
  }
  const s = () => {
    const i = r.map((o) => /* @__PURE__ */ cn(o));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return Er(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: c
          }
        }),
        [
          a,
          c
        ]
      );
    };
  };
  return s.scopeName = e, [
    n,
    Xf(s, ...t)
  ];
}
function Xf(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const n = e.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(i) {
      const o = n.reduce((a, { useScope: c, scopeName: l }) => {
        const d = c(i)[`__scope${l}`];
        return {
          ...a,
          ...d
        };
      }, {});
      return Er(
        () => ({
          [`__scope${t.scopeName}`]: o
        }),
        [
          o
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Jf(e) {
  const t = e + "CollectionProvider", [r, n] = $o(t), [s, i] = r(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), o = (f) => {
    const { scope: y, children: h } = f, g = z.useRef(null), v = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ z.createElement(s, {
      scope: y,
      itemMap: v,
      collectionRef: g
    }, h);
  }, a = e + "CollectionSlot", c = /* @__PURE__ */ z.forwardRef((f, y) => {
    const { scope: h, children: g } = f, v = i(a, h), b = qe(y, v.collectionRef);
    return /* @__PURE__ */ z.createElement(Or, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ z.forwardRef((f, y) => {
    const { scope: h, children: g, ...v } = f, b = z.useRef(null), _ = qe(y, b), C = i(l, h);
    return z.useEffect(() => (C.itemMap.set(b, {
      ref: b,
      ...v
    }), () => void C.itemMap.delete(b))), /* @__PURE__ */ z.createElement(Or, {
      [u]: "",
      ref: _
    }, g);
  });
  function p(f) {
    const y = i(e + "CollectionConsumer", f);
    return z.useCallback(() => {
      const g = y.collectionRef.current;
      if (!g)
        return [];
      const v = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (C, w) => v.indexOf(C.ref.current) - v.indexOf(w.ref.current)
      );
    }, [
      y.collectionRef,
      y.itemMap
    ]);
  }
  return [
    {
      Provider: o,
      Slot: c,
      ItemSlot: d
    },
    p,
    n
  ];
}
const eh = /* @__PURE__ */ cn(void 0);
function th(e) {
  const t = pn(eh);
  return e || t || "ltr";
}
function Ut(e) {
  const t = $e(e);
  return Re(() => {
    t.current = e;
  }), Er(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
function rh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ut(e);
  Re(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
const eo = "dismissableLayer.update", nh = "dismissableLayer.pointerDownOutside", sh = "dismissableLayer.focusOutside";
let aa;
const ih = /* @__PURE__ */ cn({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), oh = /* @__PURE__ */ xe((e, t) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: s, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: a, onDismiss: c, ...l } = e, u = pn(ih), [d, p] = we(null), f = (r = d == null ? void 0 : d.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, y] = we({}), h = qe(
    t,
    ($) => p($)
  ), g = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(v), _ = d ? g.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, w = _ >= b, E = ah(($) => {
    const M = $.target, K = [
      ...u.branches
    ].some(
      (se) => se.contains(M)
    );
    !w || K || (i == null || i($), a == null || a($), $.defaultPrevented || c == null || c());
  }, f), T = ch(($) => {
    const M = $.target;
    [
      ...u.branches
    ].some(
      (se) => se.contains(M)
    ) || (o == null || o($), a == null || a($), $.defaultPrevented || c == null || c());
  }, f);
  return rh(($) => {
    _ === u.layers.size - 1 && (s == null || s($), !$.defaultPrevented && c && ($.preventDefault(), c()));
  }, f), Re(() => {
    if (d)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (aa = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ca(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = aa);
      };
  }, [
    d,
    f,
    n,
    u
  ]), Re(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ca());
  }, [
    d,
    u
  ]), Re(() => {
    const $ = () => y({});
    return document.addEventListener(eo, $), () => document.removeEventListener(eo, $);
  }, []), /* @__PURE__ */ Z(Be.div, be({}, l, {
    ref: h,
    style: {
      pointerEvents: C ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: je(e.onFocusCapture, T.onFocusCapture),
    onBlurCapture: je(e.onBlurCapture, T.onBlurCapture),
    onPointerDownCapture: je(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function ah(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ut(e), n = $e(!1), s = $e(() => {
  });
  return Re(() => {
    const i = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          Zc(nh, r, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", s.current);
      n.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ch(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ut(e), n = $e(!1);
  return Re(() => {
    const s = (i) => {
      i.target && !n.current && Zc(sh, r, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [
    t,
    r
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function ca() {
  const e = new CustomEvent(eo);
  document.dispatchEvent(e);
}
function Zc(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && s.addEventListener(e, t, {
    once: !0
  }), n ? qf(s, i) : s.dispatchEvent(i);
}
let Pi = 0;
function lh() {
  Re(() => {
    var e, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : la()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : la()), Pi++, () => {
      Pi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), Pi--;
    };
  }, []);
}
function la() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Ii = "focusScope.autoFocusOnMount", Ni = "focusScope.autoFocusOnUnmount", ua = {
  bubbles: !1,
  cancelable: !0
}, uh = /* @__PURE__ */ xe((e, t) => {
  const { loop: r = !1, trapped: n = !1, onMountAutoFocus: s, onUnmountAutoFocus: i, ...o } = e, [a, c] = we(null), l = Ut(s), u = Ut(i), d = $e(null), p = qe(
    t,
    (h) => c(h)
  ), f = $e({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  Re(() => {
    if (n) {
      let h = function(_) {
        if (f.paused || !a)
          return;
        const C = _.target;
        a.contains(C) ? d.current = C : Qt(d.current, {
          select: !0
        });
      }, g = function(_) {
        if (f.paused || !a)
          return;
        const C = _.relatedTarget;
        C !== null && (a.contains(C) || Qt(d.current, {
          select: !0
        }));
      }, v = function(_) {
        if (document.activeElement === document.body)
          for (const w of _)
            w.removedNodes.length > 0 && Qt(a);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(v);
      return a && b.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [
    n,
    a,
    f.paused
  ]), Re(() => {
    if (a) {
      fa.add(f);
      const h = document.activeElement;
      if (!a.contains(h)) {
        const v = new CustomEvent(Ii, ua);
        a.addEventListener(Ii, l), a.dispatchEvent(v), v.defaultPrevented || (dh(vh(zc(a)), {
          select: !0
        }), document.activeElement === h && Qt(a));
      }
      return () => {
        a.removeEventListener(Ii, l), setTimeout(() => {
          const v = new CustomEvent(Ni, ua);
          a.addEventListener(Ni, u), a.dispatchEvent(v), v.defaultPrevented || Qt(h ?? document.body, {
            select: !0
          }), a.removeEventListener(Ni, u), fa.remove(f);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    f
  ]);
  const y = Fe((h) => {
    if (!r && !n || f.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, v = document.activeElement;
    if (g && v) {
      const b = h.currentTarget, [_, C] = fh(b);
      _ && C ? !h.shiftKey && v === C ? (h.preventDefault(), r && Qt(_, {
        select: !0
      })) : h.shiftKey && v === _ && (h.preventDefault(), r && Qt(C, {
        select: !0
      })) : v === b && h.preventDefault();
    }
  }, [
    r,
    n,
    f.paused
  ]);
  return /* @__PURE__ */ Z(Be.div, be({
    tabIndex: -1
  }, o, {
    ref: p,
    onKeyDown: y
  }));
});
function dh(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Qt(n, {
      select: t
    }), document.activeElement !== r)
      return;
}
function fh(e) {
  const t = zc(e), r = da(t, e), n = da(t.reverse(), e);
  return [
    r,
    n
  ];
}
function zc(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function da(e, t) {
  for (const r of e)
    if (!hh(r, {
      upTo: t
    }))
      return r;
}
function hh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ph(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && ph(e) && t && e.select();
  }
}
const fa = mh();
function mh() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = ha(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = ha(e, t), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function ha(e, t) {
  const r = [
    ...e
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function vh(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const pt = globalThis != null && globalThis.document ? yo : () => {
}, gh = R.useId || (() => {
});
let yh = 0;
function Hc(e) {
  const [t, r] = R.useState(gh());
  return pt(() => {
    e || r(
      (n) => n ?? String(yh++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const bh = ["top", "right", "bottom", "left"], dr = Math.min, ot = Math.max, Bs = Math.round, ps = Math.floor, fr = (e) => ({
  x: e,
  y: e
}), wh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xh = {
  start: "end",
  end: "start"
};
function to(e, t, r) {
  return ot(e, dr(t, r));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wt(e) {
  return e.split("-")[0];
}
function yn(e) {
  return e.split("-")[1];
}
function Ao(e) {
  return e === "x" ? "y" : "x";
}
function To(e) {
  return e === "y" ? "height" : "width";
}
function bn(e) {
  return ["top", "bottom"].includes(Wt(e)) ? "y" : "x";
}
function Oo(e) {
  return Ao(bn(e));
}
function _h(e, t, r) {
  r === void 0 && (r = !1);
  const n = yn(e), s = Oo(e), i = To(s);
  let o = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = Ws(o)), [o, Ws(o)];
}
function Sh(e) {
  const t = Ws(e);
  return [ro(e), t, ro(t)];
}
function ro(e) {
  return e.replace(/start|end/g, (t) => xh[t]);
}
function Ch(e, t, r) {
  const n = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s : n : t ? n : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function Eh(e, t, r, n) {
  const s = yn(e);
  let i = Ch(Wt(e), r === "start", n);
  return s && (i = i.map((o) => o + "-" + s), t && (i = i.concat(i.map(ro)))), i;
}
function Ws(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wh[t]);
}
function $h(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function qc(e) {
  return typeof e != "number" ? $h(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function pa(e, t, r) {
  let {
    reference: n,
    floating: s
  } = e;
  const i = bn(t), o = Oo(t), a = To(o), c = Wt(t), l = i === "y", u = n.x + n.width / 2 - s.width / 2, d = n.y + n.height / 2 - s.height / 2, p = n[a] / 2 - s[a] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: u,
        y: n.y - s.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: n.x - s.width,
        y: d
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (yn(t)) {
    case "start":
      f[o] -= p * (r && l ? -1 : 1);
      break;
    case "end":
      f[o] += p * (r && l ? -1 : 1);
      break;
  }
  return f;
}
const Ah = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: o
  } = r, a = i.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let l = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: u,
    y: d
  } = pa(l, n, c), p = n, f = {}, y = 0;
  for (let h = 0; h < a.length; h++) {
    const {
      name: g,
      fn: v
    } = a[h], {
      x: b,
      y: _,
      data: C,
      reset: w
    } = await v({
      x: u,
      y: d,
      initialPlacement: n,
      placement: p,
      strategy: s,
      middlewareData: f,
      rects: l,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, d = _ ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...C
      }
    }, w && y <= 50 && (y++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : w.rects), {
      x: u,
      y: d
    } = pa(l, p, c)), h = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: s,
    middlewareData: f
  };
};
async function Wn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: s,
    platform: i,
    rects: o,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = Bt(t, e), y = qc(f), g = a[p ? d === "floating" ? "reference" : "floating" : d], v = Zs(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(g))) == null || r ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    ...o.floating,
    x: n,
    y: s
  } : o.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), C = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Zs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: _,
    strategy: c
  }) : b);
  return {
    top: (v.top - w.top + y.top) / C.y,
    bottom: (w.bottom - v.bottom + y.bottom) / C.y,
    left: (v.left - w.left + y.left) / C.x,
    right: (w.right - v.right + y.right) / C.x
  };
}
const Th = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: s,
      rects: i,
      platform: o,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Bt(e, t) || {};
    if (l == null)
      return {};
    const d = qc(u), p = {
      x: r,
      y: n
    }, f = Oo(s), y = To(f), h = await o.getDimensions(l), g = f === "y", v = g ? "top" : "left", b = g ? "bottom" : "right", _ = g ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[f] - p[f] - i.floating[y], w = p[f] - i.reference[f], E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let T = E ? E[_] : 0;
    (!T || !await (o.isElement == null ? void 0 : o.isElement(E))) && (T = a.floating[_] || i.floating[y]);
    const $ = C / 2 - w / 2, M = T / 2 - h[y] / 2 - 1, K = dr(d[v], M), se = dr(d[b], M), O = K, B = T - h[y] - se, W = T / 2 - h[y] / 2 + $, H = to(O, W, B), ee = !c.arrow && yn(s) != null && W !== H && i.reference[y] / 2 - (W < O ? K : se) - h[y] / 2 < 0, Q = ee ? W < O ? W - O : W - B : 0;
    return {
      [f]: p[f] + Q,
      data: {
        [f]: H,
        centerOffset: W - H - Q,
        ...ee && {
          alignmentOffset: Q
        }
      },
      reset: ee
    };
  }
}), Oh = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        middlewareData: i,
        rects: o,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: h = !0,
        ...g
      } = Bt(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const v = Wt(s), b = Wt(a) === a, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = p || (b || !h ? [Ws(a)] : Sh(a));
      !p && y !== "none" && C.push(...Eh(a, h, y, _));
      const w = [a, ...C], E = await Wn(t, g), T = [];
      let $ = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && T.push(E[v]), d) {
        const O = _h(s, o, _);
        T.push(E[O[0]], E[O[1]]);
      }
      if ($ = [...$, {
        placement: s,
        overflows: T
      }], !T.every((O) => O <= 0)) {
        var M, K;
        const O = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, B = w[O];
        if (B)
          return {
            data: {
              index: O,
              overflows: $
            },
            reset: {
              placement: B
            }
          };
        let W = (K = $.filter((H) => H.overflows[0] <= 0).sort((H, ee) => H.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!W)
          switch (f) {
            case "bestFit": {
              var se;
              const H = (se = $.map((ee) => [ee.placement, ee.overflows.filter((Q) => Q > 0).reduce((Q, he) => Q + he, 0)]).sort((ee, Q) => ee[1] - Q[1])[0]) == null ? void 0 : se[0];
              H && (W = H);
              break;
            }
            case "initialPlacement":
              W = a;
              break;
          }
        if (s !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function ma(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function va(e) {
  return bh.some((t) => e[t] >= 0);
}
const Rh = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...s
      } = Bt(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await Wn(t, {
            ...s,
            elementContext: "reference"
          }), o = ma(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: va(o)
            }
          };
        }
        case "escaped": {
          const i = await Wn(t, {
            ...s,
            altBoundary: !0
          }), o = ma(i, r.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: va(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function kh(e, t) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), o = Wt(r), a = yn(r), c = bn(r) === "y", l = ["left", "top"].includes(o) ? -1 : 1, u = i && c ? -1 : 1, d = Bt(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return a && typeof y == "number" && (f = a === "end" ? y * -1 : y), c ? {
    x: f * u,
    y: p * l
  } : {
    x: p * l,
    y: f * u
  };
}
const Ph = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: s,
        y: i,
        placement: o,
        middlewareData: a
      } = t, c = await kh(t, e);
      return o === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: s + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: o
        }
      };
    }
  };
}, Ih = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: v,
              y: b
            } = g;
            return {
              x: v,
              y: b
            };
          }
        },
        ...c
      } = Bt(e, t), l = {
        x: r,
        y: n
      }, u = await Wn(t, c), d = bn(Wt(s)), p = Ao(d);
      let f = l[p], y = l[d];
      if (i) {
        const g = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", b = f + u[g], _ = f - u[v];
        f = to(b, f, _);
      }
      if (o) {
        const g = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", b = y + u[g], _ = y - u[v];
        y = to(b, y, _);
      }
      const h = a.fn({
        ...t,
        [p]: f,
        [d]: y
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n
        }
      };
    }
  };
}, Nh = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: s,
        rects: i,
        middlewareData: o
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Bt(e, t), u = {
        x: r,
        y: n
      }, d = bn(s), p = Ao(d);
      let f = u[p], y = u[d];
      const h = Bt(a, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const _ = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[_] + g.mainAxis, w = i.reference[p] + i.reference[_] - g.mainAxis;
        f < C ? f = C : f > w && (f = w);
      }
      if (l) {
        var v, b;
        const _ = p === "y" ? "width" : "height", C = ["top", "left"].includes(Wt(s)), w = i.reference[d] - i.floating[_] + (C && ((v = o.offset) == null ? void 0 : v[d]) || 0) + (C ? 0 : g.crossAxis), E = i.reference[d] + i.reference[_] + (C ? 0 : ((b = o.offset) == null ? void 0 : b[d]) || 0) - (C ? g.crossAxis : 0);
        y < w ? y = w : y > E && (y = E);
      }
      return {
        [p]: f,
        [d]: y
      };
    }
  };
}, Dh = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: r,
        rects: n,
        platform: s,
        elements: i
      } = t, {
        apply: o = () => {
        },
        ...a
      } = Bt(e, t), c = await Wn(t, a), l = Wt(r), u = yn(r), d = bn(r) === "y", {
        width: p,
        height: f
      } = n.floating;
      let y, h;
      l === "top" || l === "bottom" ? (y = l, h = u === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = l, y = u === "end" ? "top" : "bottom");
      const g = f - c[y], v = p - c[h], b = !t.middlewareData.shift;
      let _ = g, C = v;
      if (d) {
        const E = p - c.left - c.right;
        C = u || b ? dr(v, E) : E;
      } else {
        const E = f - c.top - c.bottom;
        _ = u || b ? dr(g, E) : E;
      }
      if (b && !u) {
        const E = ot(c.left, 0), T = ot(c.right, 0), $ = ot(c.top, 0), M = ot(c.bottom, 0);
        d ? C = p - 2 * (E !== 0 || T !== 0 ? E + T : ot(c.left, c.right)) : _ = f - 2 * ($ !== 0 || M !== 0 ? $ + M : ot(c.top, c.bottom));
      }
      await o({
        ...t,
        availableWidth: C,
        availableHeight: _
      });
      const w = await s.getDimensions(i.floating);
      return p !== w.width || f !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function hr(e) {
  return Kc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ct(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(e) {
  var t;
  return (t = (Kc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kc(e) {
  return e instanceof Node || e instanceof ct(e).Node;
}
function Zt(e) {
  return e instanceof Element || e instanceof ct(e).Element;
}
function Pt(e) {
  return e instanceof HTMLElement || e instanceof ct(e).HTMLElement;
}
function ga(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot;
}
function as(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: s
  } = mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(s);
}
function Mh(e) {
  return ["table", "td", "th"].includes(hr(e));
}
function Ro(e) {
  const t = ko(), r = mt(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Fh(e) {
  let t = dn(e);
  for (; Pt(t) && !ni(t); ) {
    if (Ro(t))
      return t;
    t = dn(t);
  }
  return null;
}
function ko() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ni(e) {
  return ["html", "body", "#document"].includes(hr(e));
}
function mt(e) {
  return ct(e).getComputedStyle(e);
}
function si(e) {
  return Zt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function dn(e) {
  if (hr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ga(e) && e.host || // Fallback.
    zt(e)
  );
  return ga(t) ? t.host : t;
}
function Qc(e) {
  const t = dn(e);
  return ni(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pt(t) && as(t) ? t : Qc(t);
}
function Zn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = Qc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ct(s);
  return i ? t.concat(o, o.visualViewport || [], as(s) ? s : [], o.frameElement && r ? Zn(o.frameElement) : []) : t.concat(s, Zn(s, [], r));
}
function Gc(e) {
  const t = mt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const s = Pt(e), i = s ? e.offsetWidth : r, o = s ? e.offsetHeight : n, a = Bs(r) !== i || Bs(n) !== o;
  return a && (r = i, n = o), {
    width: r,
    height: n,
    $: a
  };
}
function Po(e) {
  return Zt(e) ? e : e.contextElement;
}
function zr(e) {
  const t = Po(e);
  if (!Pt(t))
    return fr(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: s,
    $: i
  } = Gc(t);
  let o = (i ? Bs(r.width) : r.width) / n, a = (i ? Bs(r.height) : r.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Vh = /* @__PURE__ */ fr(0);
function Yc(e) {
  const t = ct(e);
  return !ko() || !t.visualViewport ? Vh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Lh(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== ct(e) ? !1 : t;
}
function Rr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), i = Po(e);
  let o = fr(1);
  t && (n ? Zt(n) && (o = zr(n)) : o = zr(e));
  const a = Lh(i, r, n) ? Yc(i) : fr(0);
  let c = (s.left + a.x) / o.x, l = (s.top + a.y) / o.y, u = s.width / o.x, d = s.height / o.y;
  if (i) {
    const p = ct(i), f = n && Zt(n) ? ct(n) : n;
    let y = p, h = y.frameElement;
    for (; h && n && f !== y; ) {
      const g = zr(h), v = h.getBoundingClientRect(), b = mt(h), _ = v.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, C = v.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, d *= g.y, c += _, l += C, y = ct(h), h = y.frameElement;
    }
  }
  return Zs({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
const jh = [":popover-open", ":modal"];
function Xc(e) {
  return jh.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Uh(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: s
  } = e;
  const i = s === "fixed", o = zt(n), a = t ? Xc(t.floating) : !1;
  if (n === o || a && i)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = fr(1);
  const u = fr(0), d = Pt(n);
  if ((d || !d && !i) && ((hr(n) !== "body" || as(o)) && (c = si(n)), Pt(n))) {
    const p = Rr(n);
    l = zr(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y
  };
}
function Bh(e) {
  return Array.from(e.getClientRects());
}
function Jc(e) {
  return Rr(zt(e)).left + si(e).scrollLeft;
}
function Wh(e) {
  const t = zt(e), r = si(e), n = e.ownerDocument.body, s = ot(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = ot(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + Jc(e);
  const a = -r.scrollTop;
  return mt(n).direction === "rtl" && (o += ot(t.clientWidth, n.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
function Zh(e, t) {
  const r = ct(e), n = zt(e), s = r.visualViewport;
  let i = n.clientWidth, o = n.clientHeight, a = 0, c = 0;
  if (s) {
    i = s.width, o = s.height;
    const l = ko();
    (!l || l && t === "fixed") && (a = s.offsetLeft, c = s.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: a,
    y: c
  };
}
function zh(e, t) {
  const r = Rr(e, !0, t === "fixed"), n = r.top + e.clientTop, s = r.left + e.clientLeft, i = Pt(e) ? zr(e) : fr(1), o = e.clientWidth * i.x, a = e.clientHeight * i.y, c = s * i.x, l = n * i.y;
  return {
    width: o,
    height: a,
    x: c,
    y: l
  };
}
function ya(e, t, r) {
  let n;
  if (t === "viewport")
    n = Zh(e, r);
  else if (t === "document")
    n = Wh(zt(e));
  else if (Zt(t))
    n = zh(t, r);
  else {
    const s = Yc(e);
    n = {
      ...t,
      x: t.x - s.x,
      y: t.y - s.y
    };
  }
  return Zs(n);
}
function el(e, t) {
  const r = dn(e);
  return r === t || !Zt(r) || ni(r) ? !1 : mt(r).position === "fixed" || el(r, t);
}
function Hh(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Zn(e, [], !1).filter((a) => Zt(a) && hr(a) !== "body"), s = null;
  const i = mt(e).position === "fixed";
  let o = i ? dn(e) : e;
  for (; Zt(o) && !ni(o); ) {
    const a = mt(o), c = Ro(o);
    !c && a.position === "fixed" && (s = null), (i ? !c && !s : !c && a.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || as(o) && !c && el(e, o)) ? n = n.filter((u) => u !== o) : s = a, o = dn(o);
  }
  return t.set(e, n), n;
}
function qh(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = e;
  const o = [...r === "clippingAncestors" ? Hh(t, this._c) : [].concat(r), n], a = o[0], c = o.reduce((l, u) => {
    const d = ya(t, u, s);
    return l.top = ot(d.top, l.top), l.right = dr(d.right, l.right), l.bottom = dr(d.bottom, l.bottom), l.left = ot(d.left, l.left), l;
  }, ya(t, a, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Kh(e) {
  const {
    width: t,
    height: r
  } = Gc(e);
  return {
    width: t,
    height: r
  };
}
function Qh(e, t, r) {
  const n = Pt(t), s = zt(t), i = r === "fixed", o = Rr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = fr(0);
  if (n || !n && !i)
    if ((hr(t) !== "body" || as(s)) && (a = si(t)), n) {
      const d = Rr(t, !0, i, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else
      s && (c.x = Jc(s));
  const l = o.left + a.scrollLeft - c.x, u = o.top + a.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: o.width,
    height: o.height
  };
}
function ba(e, t) {
  return !Pt(e) || mt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function tl(e, t) {
  const r = ct(e);
  if (!Pt(e) || Xc(e))
    return r;
  let n = ba(e, t);
  for (; n && Mh(n) && mt(n).position === "static"; )
    n = ba(n, t);
  return n && (hr(n) === "html" || hr(n) === "body" && mt(n).position === "static" && !Ro(n)) ? r : n || Fh(e) || r;
}
const Gh = async function(e) {
  const t = this.getOffsetParent || tl, r = this.getDimensions;
  return {
    reference: Qh(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await r(e.floating)
    }
  };
};
function Yh(e) {
  return mt(e).direction === "rtl";
}
const Xh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uh,
  getDocumentElement: zt,
  getClippingRect: qh,
  getOffsetParent: tl,
  getElementRects: Gh,
  getClientRects: Bh,
  getDimensions: Kh,
  getScale: zr,
  isElement: Zt,
  isRTL: Yh
};
function Jh(e, t) {
  let r = null, n;
  const s = zt(e);
  function i() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), r = null;
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (a || t(), !d || !p)
      return;
    const f = ps(u), y = ps(s.clientWidth - (l + d)), h = ps(s.clientHeight - (u + p)), g = ps(l), b = {
      rootMargin: -f + "px " + -y + "px " + -h + "px " + -g + "px",
      threshold: ot(0, dr(1, c)) || 1
    };
    let _ = !0;
    function C(w) {
      const E = w[0].intersectionRatio;
      if (E !== c) {
        if (!_)
          return o();
        E ? o(!1, E) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      _ = !1;
    }
    try {
      r = new IntersectionObserver(C, {
        ...b,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(C, b);
    }
    r.observe(e);
  }
  return o(!0), i;
}
function ep(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Po(e), u = s || i ? [...l ? Zn(l) : [], ...Zn(t)] : [];
  u.forEach((v) => {
    s && v.addEventListener("scroll", r, {
      passive: !0
    }), i && v.addEventListener("resize", r);
  });
  const d = l && a ? Jh(l, r) : null;
  let p = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === l && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var _;
      (_ = f) == null || _.observe(t);
    })), r();
  }), l && !c && f.observe(l), f.observe(t));
  let y, h = c ? Rr(e) : null;
  c && g();
  function g() {
    const v = Rr(e);
    h && (v.x !== h.x || v.y !== h.y || v.width !== h.width || v.height !== h.height) && r(), h = v, y = requestAnimationFrame(g);
  }
  return r(), () => {
    var v;
    u.forEach((b) => {
      s && b.removeEventListener("scroll", r), i && b.removeEventListener("resize", r);
    }), d == null || d(), (v = f) == null || v.disconnect(), f = null, c && cancelAnimationFrame(y);
  };
}
const tp = Ih, rp = Oh, np = Dh, sp = Rh, wa = Th, ip = Nh, op = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Xh,
    ...r
  }, i = {
    ...s.platform,
    _c: n
  };
  return Ah(e, t, {
    ...s,
    platform: i
  });
}, ap = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: s
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? wa({
        element: n.current,
        padding: s
      }).fn(r) : {} : n ? wa({
        element: n,
        padding: s
      }).fn(r) : {};
    }
  };
};
var _s = typeof document < "u" ? yo : Re;
function zs(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!zs(e[n], t[n]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = s[n];
      if (!(i === "_owner" && e.$$typeof) && !zs(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xa(e, t) {
  const r = rl(e);
  return Math.round(t * r) / r;
}
function _a(e) {
  const t = R.useRef(e);
  return _s(() => {
    t.current = e;
  }), t;
}
function cp(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: s,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = R.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = R.useState(n);
  zs(p, n) || f(n);
  const [y, h] = R.useState(null), [g, v] = R.useState(null), b = R.useCallback((Q) => {
    Q !== E.current && (E.current = Q, h(Q));
  }, []), _ = R.useCallback((Q) => {
    Q !== T.current && (T.current = Q, v(Q));
  }, []), C = i || y, w = o || g, E = R.useRef(null), T = R.useRef(null), $ = R.useRef(u), M = c != null, K = _a(c), se = _a(s), O = R.useCallback(() => {
    if (!E.current || !T.current)
      return;
    const Q = {
      placement: t,
      strategy: r,
      middleware: p
    };
    se.current && (Q.platform = se.current), op(E.current, T.current, Q).then((he) => {
      const ue = {
        ...he,
        isPositioned: !0
      };
      B.current && !zs($.current, ue) && ($.current = ue, Yl.flushSync(() => {
        d(ue);
      }));
    });
  }, [p, t, r, se]);
  _s(() => {
    l === !1 && $.current.isPositioned && ($.current.isPositioned = !1, d((Q) => ({
      ...Q,
      isPositioned: !1
    })));
  }, [l]);
  const B = R.useRef(!1);
  _s(() => (B.current = !0, () => {
    B.current = !1;
  }), []), _s(() => {
    if (C && (E.current = C), w && (T.current = w), C && w) {
      if (K.current)
        return K.current(C, w, O);
      O();
    }
  }, [C, w, O, K, M]);
  const W = R.useMemo(() => ({
    reference: E,
    floating: T,
    setReference: b,
    setFloating: _
  }), [b, _]), H = R.useMemo(() => ({
    reference: C,
    floating: w
  }), [C, w]), ee = R.useMemo(() => {
    const Q = {
      position: r,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return Q;
    const he = xa(H.floating, u.x), ue = xa(H.floating, u.y);
    return a ? {
      ...Q,
      transform: "translate(" + he + "px, " + ue + "px)",
      ...rl(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: he,
      top: ue
    };
  }, [r, a, H.floating, u.x, u.y]);
  return R.useMemo(() => ({
    ...u,
    update: O,
    refs: W,
    elements: H,
    floatingStyles: ee
  }), [u, O, W, H, ee]);
}
function lp(e) {
  const [t, r] = we(void 0);
  return pt(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const n = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let o, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          o = l.inlineSize, a = l.blockSize;
        } else
          o = e.offsetWidth, a = e.offsetHeight;
        r({
          width: o,
          height: a
        });
      });
      return n.observe(e, {
        box: "border-box"
      }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [
    e
  ]), t;
}
const nl = "Popper", [sl, il] = $o(nl), [up, ol] = sl(nl), dp = (e) => {
  const { __scopePopper: t, children: r } = e, [n, s] = we(null);
  return /* @__PURE__ */ Z(up, {
    scope: t,
    anchor: n,
    onAnchorChange: s
  }, r);
}, fp = "PopperAnchor", hp = /* @__PURE__ */ xe((e, t) => {
  const { __scopePopper: r, virtualRef: n, ...s } = e, i = ol(fp, r), o = $e(null), a = qe(t, o);
  return Re(() => {
    i.onAnchorChange((n == null ? void 0 : n.current) || o.current);
  }), n ? null : /* @__PURE__ */ Z(Be.div, be({}, s, {
    ref: a
  }));
}), al = "PopperContent", [pp, qv] = sl(al), mp = /* @__PURE__ */ xe((e, t) => {
  var r, n, s, i, o, a, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: f = "center", alignOffset: y = 0, arrowPadding: h = 0, avoidCollisions: g = !0, collisionBoundary: v = [], collisionPadding: b = 0, sticky: _ = "partial", hideWhenDetached: C = !1, updatePositionStrategy: w = "optimized", onPlaced: E, ...T } = e, $ = ol(al, u), [M, K] = we(null), se = qe(
    t,
    (pe) => K(pe)
  ), [O, B] = we(null), W = lp(O), H = (r = W == null ? void 0 : W.width) !== null && r !== void 0 ? r : 0, ee = (n = W == null ? void 0 : W.height) !== null && n !== void 0 ? n : 0, Q = d + (f !== "center" ? "-" + f : ""), he = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, ue = Array.isArray(v) ? v : [
    v
  ], Ze = ue.length > 0, Se = {
    padding: he,
    boundary: ue.filter(vp),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Ze
  }, { refs: ke, floatingStyles: rt, placement: Xe, isPositioned: ze, middlewareData: Ie } = cp({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: Q,
    whileElementsMounted: (...pe) => ep(...pe, {
      animationFrame: w === "always"
    }),
    elements: {
      reference: $.anchor
    },
    middleware: [
      Ph({
        mainAxis: p + ee,
        alignmentAxis: y
      }),
      g && tp({
        mainAxis: !0,
        crossAxis: !1,
        limiter: _ === "partial" ? ip() : void 0,
        ...Se
      }),
      g && rp({
        ...Se
      }),
      np({
        ...Se,
        apply: ({ elements: pe, rects: Ve, availableWidth: nt, availableHeight: m }) => {
          const { width: S, height: A } = Ve.reference, F = pe.floating.style;
          F.setProperty("--radix-popper-available-width", `${nt}px`), F.setProperty("--radix-popper-available-height", `${m}px`), F.setProperty("--radix-popper-anchor-width", `${S}px`), F.setProperty("--radix-popper-anchor-height", `${A}px`);
        }
      }),
      O && ap({
        element: O,
        padding: h
      }),
      gp({
        arrowWidth: H,
        arrowHeight: ee
      }),
      C && sp({
        strategy: "referenceHidden",
        ...Se
      })
    ]
  }), [X, ge] = cl(Xe), Ae = Ut(E);
  pt(() => {
    ze && (Ae == null || Ae());
  }, [
    ze,
    Ae
  ]);
  const de = (s = Ie.arrow) === null || s === void 0 ? void 0 : s.x, le = (i = Ie.arrow) === null || i === void 0 ? void 0 : i.y, G = ((o = Ie.arrow) === null || o === void 0 ? void 0 : o.centerOffset) !== 0, [re, fe] = we();
  return pt(() => {
    M && fe(window.getComputedStyle(M).zIndex);
  }, [
    M
  ]), /* @__PURE__ */ Z("div", {
    ref: ke.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...rt,
      transform: ze ? rt.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: re,
      "--radix-popper-transform-origin": [
        (a = Ie.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (c = Ie.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ Z(pp, {
    scope: u,
    placedSide: X,
    onArrowChange: B,
    arrowX: de,
    arrowY: le,
    shouldHideArrow: G
  }, /* @__PURE__ */ Z(Be.div, be({
    "data-side": X,
    "data-align": ge
  }, T, {
    ref: se,
    style: {
      ...T.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ze ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = Ie.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function vp(e) {
  return e !== null;
}
const gp = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var r, n, s, i, o;
    const { placement: a, rects: c, middlewareData: l } = t, d = ((r = l.arrow) === null || r === void 0 ? void 0 : r.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, f = d ? 0 : e.arrowHeight, [y, h] = cl(a), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[h], v = ((n = (s = l.arrow) === null || s === void 0 ? void 0 : s.x) !== null && n !== void 0 ? n : 0) + p / 2, b = ((i = (o = l.arrow) === null || o === void 0 ? void 0 : o.y) !== null && i !== void 0 ? i : 0) + f / 2;
    let _ = "", C = "";
    return y === "bottom" ? (_ = d ? g : `${v}px`, C = `${-f}px`) : y === "top" ? (_ = d ? g : `${v}px`, C = `${c.floating.height + f}px`) : y === "right" ? (_ = `${-f}px`, C = d ? g : `${b}px`) : y === "left" && (_ = `${c.floating.width + f}px`, C = d ? g : `${b}px`), {
      data: {
        x: _,
        y: C
      }
    };
  }
});
function cl(e) {
  const [t, r = "center"] = e.split("-");
  return [
    t,
    r
  ];
}
const yp = dp, bp = hp, wp = mp, xp = /* @__PURE__ */ xe((e, t) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return n ? /* @__PURE__ */ Xl.createPortal(/* @__PURE__ */ Z(Be.div, be({}, s, {
    ref: t
  })), n) : null;
});
function Sa({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, s] = _p({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, o = i ? e : n, a = Ut(r), c = Fe((l) => {
    if (i) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && a(d);
    } else
      s(l);
  }, [
    i,
    e,
    s,
    a
  ]);
  return [
    o,
    c
  ];
}
function _p({ defaultProp: e, onChange: t }) {
  const r = we(e), [n] = r, s = $e(n), i = Ut(t);
  return Re(() => {
    s.current !== n && (i(n), s.current = n);
  }, [
    n,
    s,
    i
  ]), r;
}
function Sp(e) {
  const t = $e({
    value: e,
    previous: e
  });
  return Er(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Cp = /* @__PURE__ */ xe((e, t) => /* @__PURE__ */ Z(Be.span, be({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
})));
var Ep = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Nr = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), vs = {}, Di = 0, ll = function(e) {
  return e && (e.host || ll(e.parentNode));
}, $p = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = ll(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Ap = function(e, t, r, n) {
  var s = $p(t, Array.isArray(e) ? e : [e]);
  vs[r] || (vs[r] = /* @__PURE__ */ new WeakMap());
  var i = vs[r], o = [], a = /* @__PURE__ */ new Set(), c = new Set(s), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  s.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (a.has(p))
        u(p);
      else {
        var f = p.getAttribute(n), y = f !== null && f !== "false", h = (Nr.get(p) || 0) + 1, g = (i.get(p) || 0) + 1;
        Nr.set(p, h), i.set(p, g), o.push(p), h === 1 && y && ms.set(p, !0), g === 1 && p.setAttribute(r, "true"), y || p.setAttribute(n, "true");
      }
    });
  };
  return u(t), a.clear(), Di++, function() {
    o.forEach(function(d) {
      var p = Nr.get(d) - 1, f = i.get(d) - 1;
      Nr.set(d, p), i.set(d, f), p || (ms.has(d) || d.removeAttribute(n), ms.delete(d)), f || d.removeAttribute(r);
    }), Di--, Di || (Nr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), vs = {});
  };
}, Tp = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = t || Ep(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), Ap(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, Tt = function() {
  return Tt = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Tt.apply(this, arguments);
};
function ul(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function Op(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = t.length, i; n < s; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ss = "right-scroll-bar-position", Cs = "width-before-scroll-bar", Rp = "with-scroll-bars-hidden", kp = "--removed-body-scroll-bar-size";
function Mi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Pp(e, t) {
  var r = we(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && (r.value = n, r.callback(n, s));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Ca = /* @__PURE__ */ new WeakMap();
function Ip(e, t) {
  var r = Pp(t || null, function(n) {
    return e.forEach(function(s) {
      return Mi(s, n);
    });
  });
  return R.useLayoutEffect(function() {
    var n = Ca.get(r);
    if (n) {
      var s = new Set(n), i = new Set(e), o = r.current;
      s.forEach(function(a) {
        i.has(a) || Mi(a, null);
      }), i.forEach(function(a) {
        s.has(a) || Mi(a, o);
      });
    }
    Ca.set(r, e);
  }, [e]), r;
}
function Np(e) {
  return e;
}
function Dp(e, t) {
  t === void 0 && (t = Np);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var o = t(i, n);
      return r.push(o), function() {
        r = r.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var o = r;
        r = [], o.forEach(i);
      }
      r = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var o = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(i), o = r;
      }
      var c = function() {
        var u = o;
        o = [], u.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          o.push(u), l();
        },
        filter: function(u) {
          return o = o.filter(u), r;
        }
      };
    }
  };
  return s;
}
function Mp(e) {
  e === void 0 && (e = {});
  var t = Dp(null);
  return t.options = Tt({ async: !0, ssr: !1 }, e), t;
}
var dl = function(e) {
  var t = e.sideCar, r = ul(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return R.createElement(n, Tt({}, r));
};
dl.isSideCarExport = !0;
function Fp(e, t) {
  return e.useMedium(t), dl;
}
var fl = Mp(), Fi = function() {
}, ii = R.forwardRef(function(e, t) {
  var r = R.useRef(null), n = R.useState({
    onScrollCapture: Fi,
    onWheelCapture: Fi,
    onTouchMoveCapture: Fi
  }), s = n[0], i = n[1], o = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, f = e.noIsolation, y = e.inert, h = e.allowPinchZoom, g = e.as, v = g === void 0 ? "div" : g, b = ul(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), _ = p, C = Ip([r, t]), w = Tt(Tt({}, b), s);
  return R.createElement(
    R.Fragment,
    null,
    u && R.createElement(_, { sideCar: fl, removeScrollBar: l, shards: d, noIsolation: f, inert: y, setCallbacks: i, allowPinchZoom: !!h, lockRef: r }),
    o ? R.cloneElement(R.Children.only(a), Tt(Tt({}, w), { ref: C })) : R.createElement(v, Tt({}, w, { className: c, ref: C }), a)
  );
});
ii.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ii.classNames = {
  fullWidth: Cs,
  zeroRight: Ss
};
var Vp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Lp() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Vp();
  return t && e.setAttribute("nonce", t), e;
}
function jp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Up(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bp = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Lp()) && (jp(t, r), Up(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Wp = function() {
  var e = Bp();
  return function(t, r) {
    R.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, hl = function() {
  var e = Wp(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, Zp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vi = function(e) {
  return parseInt(e || "", 10) || 0;
}, zp = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Vi(r), Vi(n), Vi(s)];
}, Hp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zp;
  var t = zp(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, qp = hl(), Hs = "data-scroll-locked", Kp = function(e, t, r, n) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Rp, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body[`).concat(Hs, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ss, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Cs, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(Ss, " .").concat(Ss, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Cs, " .").concat(Cs, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Hs, `] {
    `).concat(kp, ": ").concat(a, `px;
  }
`);
}, Qp = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n, i = R.useMemo(function() {
    return Hp(s);
  }, [s]);
  return R.useEffect(function() {
    return document.body.setAttribute(Hs, ""), function() {
      document.body.removeAttribute(Hs);
    };
  }, []), R.createElement(qp, { styles: Kp(i, !t, s, r ? "" : "!important") });
}, no = !1;
if (typeof window < "u")
  try {
    var gs = Object.defineProperty({}, "passive", {
      get: function() {
        return no = !0, !0;
      }
    });
    window.addEventListener("test", gs, gs), window.removeEventListener("test", gs, gs);
  } catch {
    no = !1;
  }
var Dr = no ? { passive: !1 } : !1, Gp = function(e) {
  return e.tagName === "TEXTAREA";
}, pl = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Gp(e) && r[t] === "visible")
  );
}, Yp = function(e) {
  return pl(e, "overflowY");
}, Xp = function(e) {
  return pl(e, "overflowX");
}, Ea = function(e, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = ml(e, r);
    if (n) {
      var s = vl(e, r), i = s[1], o = s[2];
      if (i > o)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, Jp = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, em = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, ml = function(e, t) {
  return e === "v" ? Yp(t) : Xp(t);
}, vl = function(e, t) {
  return e === "v" ? Jp(t) : em(t);
}, tm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, rm = function(e, t, r, n, s) {
  var i = tm(e, window.getComputedStyle(t).direction), o = i * n, a = r.target, c = t.contains(a), l = !1, u = o > 0, d = 0, p = 0;
  do {
    var f = vl(e, a), y = f[0], h = f[1], g = f[2], v = h - g - i * y;
    (y || v) && ml(e, a) && (d += v, p += y), a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && (s && d === 0 || !s && o > d) || !u && (s && p === 0 || !s && -o > p)) && (l = !0), l;
}, ys = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $a = function(e) {
  return [e.deltaX, e.deltaY];
}, Aa = function(e) {
  return e && "current" in e ? e.current : e;
}, nm = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, im = 0, Mr = [];
function om(e) {
  var t = R.useRef([]), r = R.useRef([0, 0]), n = R.useRef(), s = R.useState(im++)[0], i = R.useState(function() {
    return hl();
  })[0], o = R.useRef(e);
  R.useEffect(function() {
    o.current = e;
  }, [e]), R.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var h = Op([e.lockRef.current], (e.shards || []).map(Aa), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = R.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !o.current.allowPinchZoom;
    var v = ys(h), b = r.current, _ = "deltaX" in h ? h.deltaX : b[0] - v[0], C = "deltaY" in h ? h.deltaY : b[1] - v[1], w, E = h.target, T = Math.abs(_) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && T === "h" && E.type === "range")
      return !1;
    var $ = Ea(T, E);
    if (!$)
      return !0;
    if ($ ? w = T : (w = T === "v" ? "h" : "v", $ = Ea(T, E)), !$)
      return !1;
    if (!n.current && "changedTouches" in h && (_ || C) && (n.current = w), !w)
      return !0;
    var M = n.current || w;
    return rm(M, g, h, M === "h" ? _ : C, !0);
  }, []), c = R.useCallback(function(h) {
    var g = h;
    if (!(!Mr.length || Mr[Mr.length - 1] !== i)) {
      var v = "deltaY" in g ? $a(g) : ys(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && nm(w.delta, v);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var _ = (o.current.shards || []).map(Aa).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), C = _.length > 0 ? a(g, _[0]) : !o.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = R.useCallback(function(h, g, v, b) {
    var _ = { name: h, delta: g, target: v, should: b };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== _;
      });
    }, 1);
  }, []), u = R.useCallback(function(h) {
    r.current = ys(h), n.current = void 0;
  }, []), d = R.useCallback(function(h) {
    l(h.type, $a(h), h.target, a(h, e.lockRef.current));
  }, []), p = R.useCallback(function(h) {
    l(h.type, ys(h), h.target, a(h, e.lockRef.current));
  }, []);
  R.useEffect(function() {
    return Mr.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Dr), document.addEventListener("touchmove", c, Dr), document.addEventListener("touchstart", u, Dr), function() {
      Mr = Mr.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", c, Dr), document.removeEventListener("touchmove", c, Dr), document.removeEventListener("touchstart", u, Dr);
    };
  }, []);
  var f = e.removeScrollBar, y = e.inert;
  return R.createElement(
    R.Fragment,
    null,
    y ? R.createElement(i, { styles: sm(s) }) : null,
    f ? R.createElement(Qp, { gapMode: "margin" }) : null
  );
}
const am = Fp(fl, om);
var gl = R.forwardRef(function(e, t) {
  return R.createElement(ii, Tt({}, e, { ref: t, sideCar: am }));
});
gl.classNames = ii.classNames;
const cm = gl, lm = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], um = [
  " ",
  "Enter"
], oi = "Select", [ai, ci, dm] = Jf(oi), [wn, Kv] = $o(oi, [
  dm,
  il
]), Io = il(), [fm, kr] = wn(oi), [hm, pm] = wn(oi), mm = (e) => {
  const { __scopeSelect: t, children: r, open: n, defaultOpen: s, onOpenChange: i, value: o, defaultValue: a, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: f } = e, y = Io(t), [h, g] = we(null), [v, b] = we(null), [_, C] = we(!1), w = th(l), [E = !1, T] = Sa({
    prop: n,
    defaultProp: s,
    onChange: i
  }), [$, M] = Sa({
    prop: o,
    defaultProp: a,
    onChange: c
  }), K = $e(null), se = h ? !!h.closest("form") : !0, [O, B] = we(/* @__PURE__ */ new Set()), W = Array.from(O).map(
    (H) => H.props.value
  ).join(";");
  return /* @__PURE__ */ Z(yp, y, /* @__PURE__ */ Z(fm, {
    required: f,
    scope: t,
    trigger: h,
    onTriggerChange: g,
    valueNode: v,
    onValueNodeChange: b,
    valueNodeHasChildren: _,
    onValueNodeHasChildrenChange: C,
    contentId: Hc(),
    value: $,
    onValueChange: M,
    open: E,
    onOpenChange: T,
    dir: w,
    triggerPointerDownPosRef: K,
    disabled: p
  }, /* @__PURE__ */ Z(ai.Provider, {
    scope: t
  }, /* @__PURE__ */ Z(hm, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: Fe((H) => {
      B(
        (ee) => new Set(ee).add(H)
      );
    }, []),
    onNativeOptionRemove: Fe((H) => {
      B((ee) => {
        const Q = new Set(ee);
        return Q.delete(H), Q;
      });
    }, [])
  }, r)), se ? /* @__PURE__ */ Z(_l, {
    key: W,
    "aria-hidden": !0,
    required: f,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: $,
    onChange: (H) => M(H.target.value),
    disabled: p
  }, $ === void 0 ? /* @__PURE__ */ Z("option", {
    value: ""
  }) : null, Array.from(O)) : null));
}, vm = "SelectTrigger", gm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, disabled: n = !1, ...s } = e, i = Io(r), o = kr(vm, r), a = o.disabled || n, c = qe(t, o.onTriggerChange), l = ci(r), [u, d, p] = Sl((y) => {
    const h = l().filter(
      (b) => !b.disabled
    ), g = h.find(
      (b) => b.value === o.value
    ), v = Cl(h, y, g);
    v !== void 0 && o.onValueChange(v.value);
  }), f = () => {
    a || (o.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ Z(bp, be({
    asChild: !0
  }, i), /* @__PURE__ */ Z(Be.button, be({
    type: "button",
    role: "combobox",
    "aria-controls": o.contentId,
    "aria-expanded": o.open,
    "aria-required": o.required,
    "aria-autocomplete": "none",
    dir: o.dir,
    "data-state": o.open ? "open" : "closed",
    disabled: a,
    "data-disabled": a ? "" : void 0,
    "data-placeholder": xl(o.value) ? "" : void 0
  }, s, {
    ref: c,
    onClick: je(s.onClick, (y) => {
      y.currentTarget.focus();
    }),
    onPointerDown: je(s.onPointerDown, (y) => {
      const h = y.target;
      h.hasPointerCapture(y.pointerId) && h.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && (f(), o.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      }, y.preventDefault());
    }),
    onKeyDown: je(s.onKeyDown, (y) => {
      const h = u.current !== "";
      !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && d(y.key), !(h && y.key === " ") && lm.includes(y.key) && (f(), y.preventDefault());
    })
  })));
}), ym = "SelectValue", bm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, className: n, style: s, children: i, placeholder: o = "", ...a } = e, c = kr(ym, r), { onValueNodeHasChildrenChange: l } = c, u = i !== void 0, d = qe(t, c.onValueNodeChange);
  return pt(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ Z(Be.span, be({}, a, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), xl(c.value) ? /* @__PURE__ */ Z(Ys, null, o) : i);
}), wm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, children: n, ...s } = e;
  return /* @__PURE__ */ Z(Be.span, be({
    "aria-hidden": !0
  }, s, {
    ref: t
  }), n || "▼");
}), xm = (e) => /* @__PURE__ */ Z(xp, be({
  asChild: !0
}, e)), fn = "SelectContent", _m = /* @__PURE__ */ xe((e, t) => {
  const r = kr(fn, e.__scopeSelect), [n, s] = we();
  if (pt(() => {
    s(new DocumentFragment());
  }, []), !r.open) {
    const i = n;
    return i ? /* @__PURE__ */ Ga(/* @__PURE__ */ Z(yl, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ Z(ai.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ Z("div", null, e.children))), i) : null;
  }
  return /* @__PURE__ */ Z(Sm, be({}, e, {
    ref: t
  }));
}), Ft = 10, [yl, Pr] = wn(fn), Sm = /* @__PURE__ */ xe((e, t) => {
  const {
    __scopeSelect: r,
    position: n = "item-aligned",
    onCloseAutoFocus: s,
    onEscapeKeyDown: i,
    onPointerDownOutside: o,
    side: a,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: p,
    collisionPadding: f,
    sticky: y,
    hideWhenDetached: h,
    avoidCollisions: g,
    //
    ...v
  } = e, b = kr(fn, r), [_, C] = we(null), [w, E] = we(null), T = qe(
    t,
    (X) => C(X)
  ), [$, M] = we(null), [K, se] = we(null), O = ci(r), [B, W] = we(!1), H = $e(!1);
  Re(() => {
    if (_)
      return Tp(_);
  }, [
    _
  ]), lh();
  const ee = Fe((X) => {
    const [ge, ...Ae] = O().map(
      (G) => G.ref.current
    ), [de] = Ae.slice(-1), le = document.activeElement;
    for (const G of X)
      if (G === le || (G == null || G.scrollIntoView({
        block: "nearest"
      }), G === ge && w && (w.scrollTop = 0), G === de && w && (w.scrollTop = w.scrollHeight), G == null || G.focus(), document.activeElement !== le))
        return;
  }, [
    O,
    w
  ]), Q = Fe(
    () => ee([
      $,
      _
    ]),
    [
      ee,
      $,
      _
    ]
  );
  Re(() => {
    B && Q();
  }, [
    B,
    Q
  ]);
  const { onOpenChange: he, triggerPointerDownPosRef: ue } = b;
  Re(() => {
    if (_) {
      let X = {
        x: 0,
        y: 0
      };
      const ge = (de) => {
        var le, G, re, fe;
        X = {
          x: Math.abs(Math.round(de.pageX) - ((le = (G = ue.current) === null || G === void 0 ? void 0 : G.x) !== null && le !== void 0 ? le : 0)),
          y: Math.abs(Math.round(de.pageY) - ((re = (fe = ue.current) === null || fe === void 0 ? void 0 : fe.y) !== null && re !== void 0 ? re : 0))
        };
      }, Ae = (de) => {
        X.x <= 10 && X.y <= 10 ? de.preventDefault() : _.contains(de.target) || he(!1), document.removeEventListener("pointermove", ge), ue.current = null;
      };
      return ue.current !== null && (document.addEventListener("pointermove", ge), document.addEventListener("pointerup", Ae, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ge), document.removeEventListener("pointerup", Ae, {
          capture: !0
        });
      };
    }
  }, [
    _,
    he,
    ue
  ]), Re(() => {
    const X = () => he(!1);
    return window.addEventListener("blur", X), window.addEventListener("resize", X), () => {
      window.removeEventListener("blur", X), window.removeEventListener("resize", X);
    };
  }, [
    he
  ]);
  const [Ze, Se] = Sl((X) => {
    const ge = O().filter(
      (le) => !le.disabled
    ), Ae = ge.find(
      (le) => le.ref.current === document.activeElement
    ), de = Cl(ge, X, Ae);
    de && setTimeout(
      () => de.ref.current.focus()
    );
  }), ke = Fe((X, ge, Ae) => {
    const de = !H.current && !Ae;
    (b.value !== void 0 && b.value === ge || de) && (M(X), de && (H.current = !0));
  }, [
    b.value
  ]), rt = Fe(
    () => _ == null ? void 0 : _.focus(),
    [
      _
    ]
  ), Xe = Fe((X, ge, Ae) => {
    const de = !H.current && !Ae;
    (b.value !== void 0 && b.value === ge || de) && se(X);
  }, [
    b.value
  ]), ze = n === "popper" ? Ta : Cm, Ie = ze === Ta ? {
    side: a,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: p,
    collisionPadding: f,
    sticky: y,
    hideWhenDetached: h,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ Z(yl, {
    scope: r,
    content: _,
    viewport: w,
    onViewportChange: E,
    itemRefCallback: ke,
    selectedItem: $,
    onItemLeave: rt,
    itemTextRefCallback: Xe,
    focusSelectedItem: Q,
    selectedItemText: K,
    position: n,
    isPositioned: B,
    searchRef: Ze
  }, /* @__PURE__ */ Z(cm, {
    as: Or,
    allowPinchZoom: !0
  }, /* @__PURE__ */ Z(uh, {
    asChild: !0,
    trapped: b.open,
    onMountAutoFocus: (X) => {
      X.preventDefault();
    },
    onUnmountAutoFocus: je(s, (X) => {
      var ge;
      (ge = b.trigger) === null || ge === void 0 || ge.focus({
        preventScroll: !0
      }), X.preventDefault();
    })
  }, /* @__PURE__ */ Z(oh, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: i,
    onPointerDownOutside: o,
    onFocusOutside: (X) => X.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ Z(ze, be({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (X) => X.preventDefault()
  }, v, Ie, {
    onPlaced: () => W(!0),
    ref: T,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...v.style
    },
    onKeyDown: je(v.onKeyDown, (X) => {
      const ge = X.ctrlKey || X.altKey || X.metaKey;
      if (X.key === "Tab" && X.preventDefault(), !ge && X.key.length === 1 && Se(X.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(X.key)) {
        let de = O().filter(
          (le) => !le.disabled
        ).map(
          (le) => le.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(X.key) && (de = de.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(X.key)) {
          const le = X.target, G = de.indexOf(le);
          de = de.slice(G + 1);
        }
        setTimeout(
          () => ee(de)
        ), X.preventDefault();
      }
    })
  }))))));
}), Cm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...s } = e, i = kr(fn, r), o = Pr(fn, r), [a, c] = we(null), [l, u] = we(null), d = qe(
    t,
    (T) => u(T)
  ), p = ci(r), f = $e(!1), y = $e(!0), { viewport: h, selectedItem: g, selectedItemText: v, focusSelectedItem: b } = o, _ = Fe(() => {
    if (i.trigger && i.valueNode && a && l && h && g && v) {
      const T = i.trigger.getBoundingClientRect(), $ = l.getBoundingClientRect(), M = i.valueNode.getBoundingClientRect(), K = v.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const le = K.left - $.left, G = M.left - le, re = T.left - G, fe = T.width + re, pe = Math.max(fe, $.width), Ve = window.innerWidth - Ft, nt = oa(G, [
          Ft,
          Ve - pe
        ]);
        a.style.minWidth = fe + "px", a.style.left = nt + "px";
      } else {
        const le = $.right - K.right, G = window.innerWidth - M.right - le, re = window.innerWidth - T.right - G, fe = T.width + re, pe = Math.max(fe, $.width), Ve = window.innerWidth - Ft, nt = oa(G, [
          Ft,
          Ve - pe
        ]);
        a.style.minWidth = fe + "px", a.style.right = nt + "px";
      }
      const se = p(), O = window.innerHeight - Ft * 2, B = h.scrollHeight, W = window.getComputedStyle(l), H = parseInt(W.borderTopWidth, 10), ee = parseInt(W.paddingTop, 10), Q = parseInt(W.borderBottomWidth, 10), he = parseInt(W.paddingBottom, 10), ue = H + ee + B + he + Q, Ze = Math.min(g.offsetHeight * 5, ue), Se = window.getComputedStyle(h), ke = parseInt(Se.paddingTop, 10), rt = parseInt(Se.paddingBottom, 10), Xe = T.top + T.height / 2 - Ft, ze = O - Xe, Ie = g.offsetHeight / 2, X = g.offsetTop + Ie, ge = H + ee + X, Ae = ue - ge;
      if (ge <= Xe) {
        const le = g === se[se.length - 1].ref.current;
        a.style.bottom = "0px";
        const G = l.clientHeight - h.offsetTop - h.offsetHeight, re = Math.max(ze, Ie + (le ? rt : 0) + G + Q), fe = ge + re;
        a.style.height = fe + "px";
      } else {
        const le = g === se[0].ref.current;
        a.style.top = "0px";
        const re = Math.max(Xe, H + h.offsetTop + (le ? ke : 0) + Ie) + Ae;
        a.style.height = re + "px", h.scrollTop = ge - Xe + h.offsetTop;
      }
      a.style.margin = `${Ft}px 0`, a.style.minHeight = Ze + "px", a.style.maxHeight = O + "px", n == null || n(), requestAnimationFrame(
        () => f.current = !0
      );
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    a,
    l,
    h,
    g,
    v,
    i.dir,
    n
  ]);
  pt(
    () => _(),
    [
      _
    ]
  );
  const [C, w] = we();
  pt(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const E = Fe((T) => {
    T && y.current === !0 && (_(), b == null || b(), y.current = !1);
  }, [
    _,
    b
  ]);
  return /* @__PURE__ */ Z(Em, {
    scope: r,
    contentWrapper: a,
    shouldExpandOnScrollRef: f,
    onScrollButtonChange: E
  }, /* @__PURE__ */ Z("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: C
    }
  }, /* @__PURE__ */ Z(Be.div, be({}, s, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...s.style
    }
  }))));
}), Ta = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, align: n = "start", collisionPadding: s = Ft, ...i } = e, o = Io(r);
  return /* @__PURE__ */ Z(wp, be({}, o, i, {
    ref: t,
    align: n,
    collisionPadding: s,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...i.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [Em, No] = wn(fn, {}), Oa = "SelectViewport", $m = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, ...n } = e, s = Pr(Oa, r), i = No(Oa, r), o = qe(t, s.onViewportChange), a = $e(0);
  return /* @__PURE__ */ Z(Ys, null, /* @__PURE__ */ Z("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ Z(ai.Slot, {
    scope: r
  }, /* @__PURE__ */ Z(Be.div, be({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, n, {
    ref: o,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...n.style
    },
    onScroll: je(n.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = i;
      if (d != null && d.current && u) {
        const p = Math.abs(a.current - l.scrollTop);
        if (p > 0) {
          const f = window.innerHeight - Ft * 2, y = parseFloat(u.style.minHeight), h = parseFloat(u.style.height), g = Math.max(y, h);
          if (g < f) {
            const v = g + p, b = Math.min(f, v), _ = v - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = _ > 0 ? _ : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      a.current = l.scrollTop;
    })
  }))));
}), Am = "SelectGroup", [Qv, Tm] = wn(Am), Om = "SelectLabel", Rm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, ...n } = e, s = Tm(Om, r);
  return /* @__PURE__ */ Z(Be.div, be({
    id: s.id
  }, n, {
    ref: t
  }));
}), so = "SelectItem", [km, bl] = wn(so), Pm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, value: n, disabled: s = !1, textValue: i, ...o } = e, a = kr(so, r), c = Pr(so, r), l = a.value === n, [u, d] = we(i ?? ""), [p, f] = we(!1), y = qe(t, (v) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, v, n, s);
  }), h = Hc(), g = () => {
    s || (a.onValueChange(n), a.onOpenChange(!1));
  };
  if (n === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ Z(km, {
    scope: r,
    value: n,
    disabled: s,
    textId: h,
    isSelected: l,
    onItemTextChange: Fe((v) => {
      d((b) => {
        var _;
        return b || ((_ = v == null ? void 0 : v.textContent) !== null && _ !== void 0 ? _ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ Z(ai.ItemSlot, {
    scope: r,
    value: n,
    disabled: s,
    textValue: u
  }, /* @__PURE__ */ Z(Be.div, be({
    role: "option",
    "aria-labelledby": h,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": s || void 0,
    "data-disabled": s ? "" : void 0,
    tabIndex: s ? void 0 : -1
  }, o, {
    ref: y,
    onFocus: je(
      o.onFocus,
      () => f(!0)
    ),
    onBlur: je(
      o.onBlur,
      () => f(!1)
    ),
    onPointerUp: je(o.onPointerUp, g),
    onPointerMove: je(o.onPointerMove, (v) => {
      if (s) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      } else
        v.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: je(o.onPointerLeave, (v) => {
      if (v.currentTarget === document.activeElement) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      }
    }),
    onKeyDown: je(o.onKeyDown, (v) => {
      var b;
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && v.key === " " || (um.includes(v.key) && g(), v.key === " " && v.preventDefault());
    })
  }))));
}), bs = "SelectItemText", Im = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, className: n, style: s, ...i } = e, o = kr(bs, r), a = Pr(bs, r), c = bl(bs, r), l = pm(bs, r), [u, d] = we(null), p = qe(
    t,
    (v) => d(v),
    c.onItemTextChange,
    (v) => {
      var b;
      return (b = a.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(a, v, c.value, c.disabled);
    }
  ), f = u == null ? void 0 : u.textContent, y = Er(
    () => /* @__PURE__ */ Z("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, f),
    [
      c.disabled,
      c.value,
      f
    ]
  ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
  return pt(() => (h(y), () => g(y)), [
    h,
    g,
    y
  ]), /* @__PURE__ */ Z(Ys, null, /* @__PURE__ */ Z(Be.span, be({
    id: c.textId
  }, i, {
    ref: p
  })), c.isSelected && o.valueNode && !o.valueNodeHasChildren ? /* @__PURE__ */ Ga(i.children, o.valueNode) : null);
}), Nm = "SelectItemIndicator", Dm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, ...n } = e;
  return bl(Nm, r).isSelected ? /* @__PURE__ */ Z(Be.span, be({
    "aria-hidden": !0
  }, n, {
    ref: t
  })) : null;
}), Ra = "SelectScrollUpButton", Mm = /* @__PURE__ */ xe((e, t) => {
  const r = Pr(Ra, e.__scopeSelect), n = No(Ra, e.__scopeSelect), [s, i] = we(!1), o = qe(t, n.onScrollButtonChange);
  return pt(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const l = a.scrollTop > 0;
        i(l);
      };
      const a = r.viewport;
      return c(), a.addEventListener("scroll", c), () => a.removeEventListener("scroll", c);
    }
  }, [
    r.viewport,
    r.isPositioned
  ]), s ? /* @__PURE__ */ Z(wl, be({}, e, {
    ref: o,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: c } = r;
      a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
    }
  })) : null;
}), ka = "SelectScrollDownButton", Fm = /* @__PURE__ */ xe((e, t) => {
  const r = Pr(ka, e.__scopeSelect), n = No(ka, e.__scopeSelect), [s, i] = we(!1), o = qe(t, n.onScrollButtonChange);
  return pt(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const l = a.scrollHeight - a.clientHeight, u = Math.ceil(a.scrollTop) < l;
        i(u);
      };
      const a = r.viewport;
      return c(), a.addEventListener("scroll", c), () => a.removeEventListener("scroll", c);
    }
  }, [
    r.viewport,
    r.isPositioned
  ]), s ? /* @__PURE__ */ Z(wl, be({}, e, {
    ref: o,
    onAutoScroll: () => {
      const { viewport: a, selectedItem: c } = r;
      a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
    }
  })) : null;
}), wl = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...s } = e, i = Pr("SelectScrollButton", r), o = $e(null), a = ci(r), c = Fe(() => {
    o.current !== null && (window.clearInterval(o.current), o.current = null);
  }, []);
  return Re(() => () => c(), [
    c
  ]), pt(() => {
    var l;
    const u = a().find(
      (d) => d.ref.current === document.activeElement
    );
    u == null || (l = u.ref.current) === null || l === void 0 || l.scrollIntoView({
      block: "nearest"
    });
  }, [
    a
  ]), /* @__PURE__ */ Z(Be.div, be({
    "aria-hidden": !0
  }, s, {
    ref: t,
    style: {
      flexShrink: 0,
      ...s.style
    },
    onPointerDown: je(s.onPointerDown, () => {
      o.current === null && (o.current = window.setInterval(n, 50));
    }),
    onPointerMove: je(s.onPointerMove, () => {
      var l;
      (l = i.onItemLeave) === null || l === void 0 || l.call(i), o.current === null && (o.current = window.setInterval(n, 50));
    }),
    onPointerLeave: je(s.onPointerLeave, () => {
      c();
    })
  }));
}), Vm = /* @__PURE__ */ xe((e, t) => {
  const { __scopeSelect: r, ...n } = e;
  return /* @__PURE__ */ Z(Be.div, be({
    "aria-hidden": !0
  }, n, {
    ref: t
  }));
});
function xl(e) {
  return e === "" || e === void 0;
}
const _l = /* @__PURE__ */ xe((e, t) => {
  const { value: r, ...n } = e, s = $e(null), i = qe(t, s), o = Sp(r);
  return Re(() => {
    const a = s.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (o !== r && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(a, r), a.dispatchEvent(d);
    }
  }, [
    o,
    r
  ]), /* @__PURE__ */ Z(Cp, {
    asChild: !0
  }, /* @__PURE__ */ Z("select", be({}, n, {
    ref: i,
    defaultValue: r
  })));
});
_l.displayName = "BubbleSelect";
function Sl(e) {
  const t = Ut(e), r = $e(""), n = $e(0), s = Fe((o) => {
    const a = r.current + o;
    t(a), function c(l) {
      r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(a);
  }, [
    t
  ]), i = Fe(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return Re(() => () => window.clearTimeout(n.current), []), [
    r,
    s,
    i
  ];
}
function Cl(e, t, r) {
  const s = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let o = Lm(e, Math.max(i, 0));
  s.length === 1 && (o = o.filter(
    (l) => l !== r
  ));
  const c = o.find(
    (l) => l.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Lm(e, t) {
  return e.map(
    (r, n) => e[(t + n) % e.length]
  );
}
const jm = mm, El = gm, Um = bm, Bm = wm, Wm = xm, $l = _m, Zm = $m, Al = Rm, Tl = Pm, zm = Im, Hm = Dm, Ol = Mm, Rl = Fm, kl = Vm, qm = jm, Km = Um, Pl = R.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ tt(
  El,
  {
    ref: n,
    className: Ue(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ D(Bm, { asChild: !0, children: /* @__PURE__ */ D(mc, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Pl.displayName = El.displayName;
const Il = R.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ D(
  Ol,
  {
    ref: r,
    className: Ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ D(Au, { className: "h-4 w-4" })
  }
));
Il.displayName = Ol.displayName;
const Nl = R.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ D(
  Rl,
  {
    ref: r,
    className: Ue(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ D(mc, { className: "h-4 w-4" })
  }
));
Nl.displayName = Rl.displayName;
const Dl = R.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, s) => /* @__PURE__ */ D(Wm, { children: /* @__PURE__ */ tt(
  $l,
  {
    ref: s,
    className: Ue(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ D(Il, {}),
      /* @__PURE__ */ D(
        Zm,
        {
          className: Ue(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ D(Nl, {})
    ]
  }
) }));
Dl.displayName = $l.displayName;
const Qm = R.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ D(
  Al,
  {
    ref: r,
    className: Ue("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Qm.displayName = Al.displayName;
const Ml = R.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ tt(
  Tl,
  {
    ref: n,
    className: Ue(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ D("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ D(Hm, { children: /* @__PURE__ */ D($u, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ D(zm, { children: t })
    ]
  }
));
Ml.displayName = Tl.displayName;
const Gm = R.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ D(
  kl,
  {
    ref: r,
    className: Ue("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Gm.displayName = kl.displayName;
const qs = R.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ D(
    "input",
    {
      type: t,
      className: Ue(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
qs.displayName = "Input";
const Fl = R.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ D(
    "textarea",
    {
      className: Ue(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
Fl.displayName = "Textarea";
const Pa = (e) => Dt.string().transform((t) => t === "" ? null : t).nullable().refine((t) => t === null || !isNaN(Number(t)), {
  message: "Invalid number"
}).transform((t) => t === null ? 0 : Number(t)).pipe(e), Ym = Dt.object({
  name: Dt.string().min(1, "Required"),
  description: Dt.string().min(1, "Required"),
  location: Dt.string().optional(),
  credits: Dt.array(
    Dt.object({
      creditTypeId: Pa(Dt.number().positive("Required")),
      amount: Pa(Dt.number().positive("Required"))
    })
  ).nonempty()
});
function Gv({ publishableKey: e, onSubmit: t }) {
  const r = bu({
    resolver: Su(Ym),
    defaultValues: {
      credits: [
        {
          creditTypeId: "",
          amount: ""
        }
      ]
    }
  });
  return /* @__PURE__ */ D(Gf, { ...r, children: /* @__PURE__ */ tt("form", { onSubmit: r.handleSubmit(t), children: [
    /* @__PURE__ */ tt("div", { className: "space-y-8", children: [
      /* @__PURE__ */ D(
        Tn,
        {
          control: r.control,
          name: "name",
          render: ({ field: n }) => /* @__PURE__ */ tt(Ur, { children: [
            /* @__PURE__ */ D(Br, { children: "Name" }),
            /* @__PURE__ */ D(Wr, { children: /* @__PURE__ */ D(qs, { ...n }) }),
            /* @__PURE__ */ D(Zr, {})
          ] })
        }
      ),
      /* @__PURE__ */ D(
        Tn,
        {
          control: r.control,
          name: "description",
          render: ({ field: n }) => /* @__PURE__ */ tt(Ur, { children: [
            /* @__PURE__ */ D(Br, { children: "Description" }),
            /* @__PURE__ */ D(Wr, { children: /* @__PURE__ */ D(Fl, { ...n }) }),
            /* @__PURE__ */ D(Zr, {})
          ] })
        }
      ),
      /* @__PURE__ */ D(
        Tn,
        {
          control: r.control,
          name: "location",
          render: ({ field: n }) => /* @__PURE__ */ tt(Ur, { children: [
            /* @__PURE__ */ D(Br, { children: "Location" }),
            /* @__PURE__ */ D(Wr, { children: /* @__PURE__ */ D(qs, { ...n }) }),
            /* @__PURE__ */ D(Zr, {})
          ] })
        }
      ),
      /* @__PURE__ */ D("hr", {}),
      /* @__PURE__ */ D(Xm, { publishableKey: e })
    ] }),
    /* @__PURE__ */ D(Us, { type: "submit", children: "Submit" })
  ] }) });
}
function Xm({ publishableKey: e }) {
  const { creditTypes: t } = ev({ publishableKey: e }), r = vn(), { fields: n, append: s, remove: i } = uu({
    name: "credits"
  });
  return /* @__PURE__ */ tt("div", { className: "space-y-6", children: [
    n.map((o, a) => /* @__PURE__ */ tt("div", { className: "flex items-end gap-4", children: [
      /* @__PURE__ */ D(
        Tn,
        {
          control: r.control,
          name: `credits.${a}.creditTypeId`,
          render: ({ field: c }) => /* @__PURE__ */ tt(Ur, { className: "relative flex-grow", children: [
            /* @__PURE__ */ D(Br, { className: Ue(a !== 0 && "sr-only"), children: "Credit Type" }),
            /* @__PURE__ */ tt(qm, { value: c.value, onValueChange: c.onChange, children: [
              /* @__PURE__ */ D(Wr, { children: /* @__PURE__ */ D(Pl, { children: /* @__PURE__ */ D(Km, { placeholder: "Select a credit type" }) }) }),
              /* @__PURE__ */ D(Dl, { children: t == null ? void 0 : t.map((l) => /* @__PURE__ */ D(
                Ml,
                {
                  value: String(l.id),
                  children: l.name
                },
                l.id
              )) })
            ] }),
            /* @__PURE__ */ D(Zr, { className: "absolute -translate-y-1" })
          ] })
        }
      ),
      /* @__PURE__ */ D(
        Tn,
        {
          control: r.control,
          name: `credits.${a}.amount`,
          render: ({ field: c }) => /* @__PURE__ */ tt(Ur, { className: "relative w-[150px]", children: [
            /* @__PURE__ */ D(Br, { className: Ue(a !== 0 && "sr-only"), children: "Amount" }),
            /* @__PURE__ */ D(Wr, { children: /* @__PURE__ */ D(qs, { ...c }) }),
            /* @__PURE__ */ D(Zr, { className: "absolute -translate-y-1" })
          ] })
        }
      ),
      /* @__PURE__ */ D(
        Us,
        {
          type: "button",
          variant: "outline",
          disabled: n.length === 1,
          onClick: () => i(a),
          children: /* @__PURE__ */ D(Tu, { className: "size-4" })
        }
      )
    ] }, o.id)),
    /* @__PURE__ */ D("div", { className: "flex justify-end mt-4", children: /* @__PURE__ */ D(
      Us,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        onClick: () => s({ creditTypeId: "", creditAmount: "" }),
        children: "Add Credit Type"
      }
    ) })
  ] });
}
async function Jm({
  publishableKey: e
}) {
  const t = await fetch("https://cme-api.azurewebsites.net/credit-types", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${e}`
    }
  });
  if (!t.ok)
    throw new Error("Failed to fetch");
  return (await t.json()).data;
}
function ev({ publishableKey: e }) {
  const { data: t, error: r, isLoading: n } = ad(
    ["creditTypes"],
    () => Jm({ publishableKey: e })
  );
  return {
    creditTypes: t,
    isLoading: n,
    isError: r
  };
}
var cs = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, hn = typeof window > "u" || "Deno" in window;
function ft() {
}
function tv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function io(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Vl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ia(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== Do(o, t.options))
        return !1;
    } else if (!Hn(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function Na(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (zn(t.options.mutationKey) !== zn(i))
        return !1;
    } else if (!Hn(t.options.mutationKey, i))
      return !1;
  }
  return !(n && t.state.status !== n || s && !s(t));
}
function Do(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || zn)(e);
}
function zn(e) {
  return JSON.stringify(
    e,
    (t, r) => ao(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function Hn(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Hn(e[r], t[r])) : !1;
}
function Ll(e, t) {
  if (e === t)
    return e;
  const r = Da(e) && Da(t);
  if (r || ao(e) && ao(t)) {
    const n = r ? e : Object.keys(e), s = n.length, i = r ? t : Object.keys(t), o = i.length, a = r ? [] : {};
    let c = 0;
    for (let l = 0; l < o; l++) {
      const u = r ? l : i[l];
      !r && e[u] === void 0 && t[u] === void 0 && n.includes(u) ? (a[u] = void 0, c++) : (a[u] = Ll(e[u], t[u]), a[u] === e[u] && e[u] !== void 0 && c++);
    }
    return s === o && c === s ? e : a;
  }
  return t;
}
function oo(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Da(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ao(e) {
  if (!Ma(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Ma(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Ma(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function rv(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function co(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? Ll(e, t) : t;
}
function nv(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function sv(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var vr, Xt, Hr, ja, iv = (ja = class extends cs {
  constructor() {
    super();
    q(this, vr, void 0);
    q(this, Xt, void 0);
    q(this, Hr, void 0);
    L(this, Hr, (t) => {
      if (!hn && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    x(this, Xt) || this.setEventListener(x(this, Hr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = x(this, Xt)) == null || t.call(this), L(this, Xt, void 0));
  }
  setEventListener(t) {
    var r;
    L(this, Hr, t), (r = x(this, Xt)) == null || r.call(this), L(this, Xt, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    x(this, vr) !== t && (L(this, vr, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof x(this, vr) == "boolean" ? x(this, vr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, vr = new WeakMap(), Xt = new WeakMap(), Hr = new WeakMap(), ja), Ks = new iv(), qr, Jt, Kr, Ua, ov = (Ua = class extends cs {
  constructor() {
    super();
    q(this, qr, !0);
    q(this, Jt, void 0);
    q(this, Kr, void 0);
    L(this, Kr, (t) => {
      if (!hn && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    x(this, Jt) || this.setEventListener(x(this, Kr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = x(this, Jt)) == null || t.call(this), L(this, Jt, void 0));
  }
  setEventListener(t) {
    var r;
    L(this, Kr, t), (r = x(this, Jt)) == null || r.call(this), L(this, Jt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    x(this, qr) !== t && (L(this, qr, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return x(this, qr);
  }
}, qr = new WeakMap(), Jt = new WeakMap(), Kr = new WeakMap(), Ua), Qs = new ov();
function av(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function li(e) {
  return (e ?? "online") === "online" ? Qs.isOnline() : !0;
}
var jl = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Li(e) {
  return e instanceof jl;
}
function Ul(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((g, v) => {
    i = g, o = v;
  }), c = (g) => {
    var v;
    n || (f(new jl(g)), (v = e.abort) == null || v.call(e));
  }, l = () => {
    t = !0;
  }, u = () => {
    t = !1;
  }, d = () => !Ks.isFocused() || e.networkMode !== "always" && !Qs.isOnline(), p = (g) => {
    var v;
    n || (n = !0, (v = e.onSuccess) == null || v.call(e, g), s == null || s(), i(g));
  }, f = (g) => {
    var v;
    n || (n = !0, (v = e.onError) == null || v.call(e, g), s == null || s(), o(g));
  }, y = () => new Promise((g) => {
    var v;
    s = (b) => {
      const _ = n || !d();
      return _ && g(b), _;
    }, (v = e.onPause) == null || v.call(e);
  }).then(() => {
    var g;
    s = void 0, n || (g = e.onContinue) == null || g.call(e);
  }), h = () => {
    if (n)
      return;
    let g;
    try {
      g = e.fn();
    } catch (v) {
      g = Promise.reject(v);
    }
    Promise.resolve(g).then(p).catch((v) => {
      var E;
      if (n)
        return;
      const b = e.retry ?? (hn ? 0 : 3), _ = e.retryDelay ?? av, C = typeof _ == "function" ? _(r, v) : _, w = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, v);
      if (t || !w) {
        f(v);
        return;
      }
      r++, (E = e.onFail) == null || E.call(e, r, v), rv(C).then(() => {
        if (d())
          return y();
      }).then(() => {
        t ? f(v) : h();
      });
    });
  };
  return li(e.networkMode) ? h() : y().then(h), {
    promise: a,
    cancel: c,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: l,
    continueRetry: u
  };
}
function cv() {
  let e = [], t = 0, r = (p) => {
    p();
  }, n = (p) => {
    p();
  }, s = (p) => setTimeout(p, 0);
  const i = (p) => {
    s = p;
  }, o = (p) => {
    let f;
    t++;
    try {
      f = p();
    } finally {
      t--, t || l();
    }
    return f;
  }, a = (p) => {
    t ? e.push(p) : s(() => {
      r(p);
    });
  }, c = (p) => (...f) => {
    a(() => {
      p(...f);
    });
  }, l = () => {
    const p = e;
    e = [], p.length && s(() => {
      n(() => {
        p.forEach((f) => {
          r(f);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: c,
    schedule: a,
    setNotifyFunction: (p) => {
      r = p;
    },
    setBatchNotifyFunction: (p) => {
      n = p;
    },
    setScheduler: i
  };
}
var We = cv(), gr, Ba, Bl = (Ba = class {
  constructor() {
    q(this, gr, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), io(this.gcTime) && L(this, gr, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (hn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    x(this, gr) && (clearTimeout(x(this, gr)), L(this, gr, void 0));
  }
}, gr = new WeakMap(), Ba), Qr, Gr, lt, er, ut, Le, qn, yr, Yr, Es, vt, Mt, Wa, lv = (Wa = class extends Bl {
  constructor(t) {
    super();
    q(this, Yr);
    q(this, vt);
    q(this, Qr, void 0);
    q(this, Gr, void 0);
    q(this, lt, void 0);
    q(this, er, void 0);
    q(this, ut, void 0);
    q(this, Le, void 0);
    q(this, qn, void 0);
    q(this, yr, void 0);
    L(this, yr, !1), L(this, qn, t.defaultOptions), ce(this, Yr, Es).call(this, t.options), L(this, Le, []), L(this, lt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, L(this, Qr, t.state || uv(this.options)), this.state = x(this, Qr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !x(this, Le).length && this.state.fetchStatus === "idle" && x(this, lt).remove(this);
  }
  setData(t, r) {
    const n = co(this.state.data, t, this.options);
    return ce(this, vt, Mt).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    ce(this, vt, Mt).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = x(this, er);
    return (n = x(this, ut)) == null || n.cancel(t), r ? r.then(ft).catch(ft) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(x(this, Qr));
  }
  isActive() {
    return x(this, Le).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || x(this, Le).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Vl(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = x(this, Le).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = x(this, ut)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = x(this, Le).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = x(this, ut)) == null || r.continue();
  }
  addObserver(t) {
    x(this, Le).includes(t) || (x(this, Le).push(t), this.clearGcTimeout(), x(this, lt).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    x(this, Le).includes(t) && (L(this, Le, x(this, Le).filter((r) => r !== t)), x(this, Le).length || (x(this, ut) && (x(this, yr) ? x(this, ut).cancel({ revert: !0 }) : x(this, ut).cancelRetry()), this.scheduleGc()), x(this, lt).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return x(this, Le).length;
  }
  invalidate() {
    this.state.isInvalidated || ce(this, vt, Mt).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var l, u, d, p;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (x(this, er))
        return (l = x(this, ut)) == null || l.continueRetry(), x(this, er);
    }
    if (t && ce(this, Yr, Es).call(this, t), !this.options.queryFn) {
      const f = x(this, Le).find((y) => y.options.queryFn);
      f && ce(this, Yr, Es).call(this, f.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (f) => {
      Object.defineProperty(f, "signal", {
        enumerable: !0,
        get: () => (L(this, yr, !0), n.signal)
      });
    };
    i(s);
    const o = () => this.options.queryFn ? (L(this, yr, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), a = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    i(a), (u = this.options.behavior) == null || u.onFetch(
      a,
      this
    ), L(this, Gr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && ce(this, vt, Mt).call(this, { type: "fetch", meta: (p = a.fetchOptions) == null ? void 0 : p.meta });
    const c = (f) => {
      var y, h, g, v;
      Li(f) && f.silent || ce(this, vt, Mt).call(this, {
        type: "error",
        error: f
      }), Li(f) || ((h = (y = x(this, lt).config).onError) == null || h.call(
        y,
        f,
        this
      ), (v = (g = x(this, lt).config).onSettled) == null || v.call(
        g,
        this.state.data,
        f,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return L(this, ut, Ul({
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (f) => {
        var y, h, g, v;
        if (typeof f > "u") {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(f), (h = (y = x(this, lt).config).onSuccess) == null || h.call(y, f, this), (v = (g = x(this, lt).config).onSettled) == null || v.call(
          g,
          f,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: c,
      onFail: (f, y) => {
        ce(this, vt, Mt).call(this, { type: "failed", failureCount: f, error: y });
      },
      onPause: () => {
        ce(this, vt, Mt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ce(this, vt, Mt).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode
    })), L(this, er, x(this, ut).promise), x(this, er);
  }
}, Qr = new WeakMap(), Gr = new WeakMap(), lt = new WeakMap(), er = new WeakMap(), ut = new WeakMap(), Le = new WeakMap(), qn = new WeakMap(), yr = new WeakMap(), Yr = new WeakSet(), Es = function(t) {
  this.options = { ...x(this, qn), ...t }, this.updateGcTime(this.options.gcTime);
}, vt = new WeakSet(), Mt = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: t.meta ?? null,
          fetchStatus: li(this.options.networkMode) ? "fetching" : "paused",
          ...!n.dataUpdatedAt && {
            error: null,
            status: "pending"
          }
        };
      case "success":
        return {
          ...n,
          data: t.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const s = t.error;
        return Li(s) && s.revert && x(this, Gr) ? { ...x(this, Gr), fetchStatus: "idle" } : {
          ...n,
          error: s,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: s,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...t.state
        };
    }
  };
  this.state = r(this.state), We.batch(() => {
    x(this, Le).forEach((n) => {
      n.onQueryUpdate();
    }), x(this, lt).notify({ query: this, type: "updated", action: t });
  });
}, Wa);
function uv(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = typeof t < "u", n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var St, Za, dv = (Za = class extends cs {
  constructor(t = {}) {
    super();
    q(this, St, void 0);
    this.config = t, L(this, St, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? Do(s, r);
    let o = this.get(i);
    return o || (o = new lv({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    x(this, St).has(t.queryHash) || (x(this, St).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = x(this, St).get(t.queryHash);
    r && (t.destroy(), r === t && x(this, St).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    We.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return x(this, St).get(t);
  }
  getAll() {
    return [...x(this, St).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Ia(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Ia(t, n)) : r;
  }
  notify(t) {
    We.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    We.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    We.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, St = new WeakMap(), Za), Ct, Kn, st, Xr, Et, Gt, za, fv = (za = class extends Bl {
  constructor(t) {
    super();
    q(this, Et);
    q(this, Ct, void 0);
    q(this, Kn, void 0);
    q(this, st, void 0);
    q(this, Xr, void 0);
    this.mutationId = t.mutationId, L(this, Kn, t.defaultOptions), L(this, st, t.mutationCache), L(this, Ct, []), this.state = t.state || hv(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...x(this, Kn), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    x(this, Ct).includes(t) || (x(this, Ct).push(t), this.clearGcTimeout(), x(this, st).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    L(this, Ct, x(this, Ct).filter((r) => r !== t)), this.scheduleGc(), x(this, st).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    x(this, Ct).length || (this.state.status === "pending" ? this.scheduleGc() : x(this, st).remove(this));
  }
  continue() {
    var t;
    return ((t = x(this, Xr)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, a, c, l, u, d, p, f, y, h, g, v, b, _, C, w, E, T;
    const r = () => (L(this, Xr, Ul({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: ($, M) => {
        ce(this, Et, Gt).call(this, { type: "failed", failureCount: $, error: M });
      },
      onPause: () => {
        ce(this, Et, Gt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ce(this, Et, Gt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), x(this, Xr).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        ce(this, Et, Gt).call(this, { type: "pending", variables: t }), await ((i = (s = x(this, st).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const M = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
        M !== this.state.context && ce(this, Et, Gt).call(this, {
          type: "pending",
          context: M,
          variables: t
        });
      }
      const $ = await r();
      return await ((l = (c = x(this, st).config).onSuccess) == null ? void 0 : l.call(
        c,
        $,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, $, t, this.state.context)), await ((f = (p = x(this, st).config).onSettled) == null ? void 0 : f.call(
        p,
        $,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((h = (y = this.options).onSettled) == null ? void 0 : h.call(y, $, null, t, this.state.context)), ce(this, Et, Gt).call(this, { type: "success", data: $ }), $;
    } catch ($) {
      try {
        throw await ((v = (g = x(this, st).config).onError) == null ? void 0 : v.call(
          g,
          $,
          t,
          this.state.context,
          this
        )), await ((_ = (b = this.options).onError) == null ? void 0 : _.call(
          b,
          $,
          t,
          this.state.context
        )), await ((w = (C = x(this, st).config).onSettled) == null ? void 0 : w.call(
          C,
          void 0,
          $,
          this.state.variables,
          this.state.context,
          this
        )), await ((T = (E = this.options).onSettled) == null ? void 0 : T.call(
          E,
          void 0,
          $,
          t,
          this.state.context
        )), $;
      } finally {
        ce(this, Et, Gt).call(this, { type: "error", error: $ });
      }
    }
  }
}, Ct = new WeakMap(), Kn = new WeakMap(), st = new WeakMap(), Xr = new WeakMap(), Et = new WeakSet(), Gt = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !li(this.options.networkMode),
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: t.error,
          failureCount: n.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), We.batch(() => {
    x(this, Ct).forEach((n) => {
      n.onMutationUpdate(t);
    }), x(this, st).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, za);
function hv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var dt, Qn, br, Ha, pv = (Ha = class extends cs {
  constructor(t = {}) {
    super();
    q(this, dt, void 0);
    q(this, Qn, void 0);
    q(this, br, void 0);
    this.config = t, L(this, dt, []), L(this, Qn, 0);
  }
  build(t, r, n) {
    const s = new fv({
      mutationCache: this,
      mutationId: ++ls(this, Qn)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    x(this, dt).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    L(this, dt, x(this, dt).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    We.batch(() => {
      x(this, dt).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return x(this, dt);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return x(this, dt).find(
      (n) => Na(r, n)
    );
  }
  findAll(t = {}) {
    return x(this, dt).filter(
      (r) => Na(t, r)
    );
  }
  notify(t) {
    We.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    return L(this, br, (x(this, br) ?? Promise.resolve()).then(() => {
      const t = x(this, dt).filter((r) => r.state.isPaused);
      return We.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ft)),
          Promise.resolve()
        )
      );
    }).then(() => {
      L(this, br, void 0);
    })), x(this, br);
  }
}, dt = new WeakMap(), Qn = new WeakMap(), br = new WeakMap(), Ha);
function mv(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var y, h, g, v, b;
        const s = t.options, i = (g = (h = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : g.direction, o = ((v = t.state.data) == null ? void 0 : v.pages) || [], a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [], c = { pages: [], pageParams: [] };
        let l = !1;
        const u = (_) => {
          Object.defineProperty(_, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? l = !0 : t.signal.addEventListener("abort", () => {
              l = !0;
            }), t.signal)
          });
        }, d = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), p = async (_, C, w) => {
          if (l)
            return Promise.reject();
          if (C == null && _.pages.length)
            return Promise.resolve(_);
          const E = {
            queryKey: t.queryKey,
            pageParam: C,
            direction: w ? "backward" : "forward",
            meta: t.options.meta
          };
          u(E);
          const T = await d(
            E
          ), { maxPages: $ } = t.options, M = w ? sv : nv;
          return {
            pages: M(_.pages, T, $),
            pageParams: M(_.pageParams, C, $)
          };
        };
        let f;
        if (i && o.length) {
          const _ = i === "backward", C = _ ? vv : Fa, w = {
            pages: o,
            pageParams: a
          }, E = C(s, w);
          f = await p(w, E, _);
        } else {
          f = await p(
            c,
            a[0] ?? s.initialPageParam
          );
          const _ = e ?? o.length;
          for (let C = 1; C < _; C++) {
            const w = Fa(s, f);
            f = await p(f, w);
          }
        }
        return f;
      };
      t.options.persister ? t.fetchFn = () => {
        var s, i;
        return (i = (s = t.options).persister) == null ? void 0 : i.call(
          s,
          n,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = n;
    }
  };
}
function Fa(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function vv(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var De, tr, rr, Jr, en, nr, tn, rn, qa, gv = (qa = class {
  constructor(e = {}) {
    q(this, De, void 0);
    q(this, tr, void 0);
    q(this, rr, void 0);
    q(this, Jr, void 0);
    q(this, en, void 0);
    q(this, nr, void 0);
    q(this, tn, void 0);
    q(this, rn, void 0);
    L(this, De, e.queryCache || new dv()), L(this, tr, e.mutationCache || new pv()), L(this, rr, e.defaultOptions || {}), L(this, Jr, /* @__PURE__ */ new Map()), L(this, en, /* @__PURE__ */ new Map()), L(this, nr, 0);
  }
  mount() {
    ls(this, nr)._++, x(this, nr) === 1 && (L(this, tn, Ks.subscribe(() => {
      Ks.isFocused() && (this.resumePausedMutations(), x(this, De).onFocus());
    })), L(this, rn, Qs.subscribe(() => {
      Qs.isOnline() && (this.resumePausedMutations(), x(this, De).onOnline());
    })));
  }
  unmount() {
    var e, t;
    ls(this, nr)._--, x(this, nr) === 0 && ((e = x(this, tn)) == null || e.call(this), L(this, tn, void 0), (t = x(this, rn)) == null || t.call(this), L(this, rn, void 0));
  }
  isFetching(e) {
    return x(this, De).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return x(this, tr).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = x(this, De).find({ queryKey: e })) == null ? void 0 : t.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    return t !== void 0 ? Promise.resolve(t) : this.fetchQuery(e);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = x(this, De).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = tv(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return x(this, De).build(this, o).setData(i, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return We.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var t;
    return (t = x(this, De).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = x(this, De);
    We.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = x(this, De), n = {
      type: "active",
      ...e
    };
    return We.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = We.batch(
      () => x(this, De).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(ft).catch(ft);
  }
  invalidateQueries(e = {}, t = {}) {
    return We.batch(() => {
      if (x(this, De).findAll(e).forEach((n) => {
        n.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    const r = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, n = We.batch(
      () => x(this, De).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ft)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(ft);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = x(this, De).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ft).catch(ft);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = mv(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ft).catch(ft);
  }
  resumePausedMutations() {
    return x(this, tr).resumePausedMutations();
  }
  getQueryCache() {
    return x(this, De);
  }
  getMutationCache() {
    return x(this, tr);
  }
  getDefaultOptions() {
    return x(this, rr);
  }
  setDefaultOptions(e) {
    L(this, rr, e);
  }
  setQueryDefaults(e, t) {
    x(this, Jr).set(zn(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...x(this, Jr).values()];
    let r = {};
    return t.forEach((n) => {
      Hn(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    x(this, en).set(zn(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...x(this, en).values()];
    let r = {};
    return t.forEach((n) => {
      Hn(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...x(this, rr).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Do(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...x(this, rr).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    x(this, De).clear(), x(this, tr).clear();
  }
}, De = new WeakMap(), tr = new WeakMap(), rr = new WeakMap(), Jr = new WeakMap(), en = new WeakMap(), nr = new WeakMap(), tn = new WeakMap(), rn = new WeakMap(), qa), Je, Ee, Gn, Qe, wr, nn, $t, Yn, sn, on, xr, _r, sr, an, Sr, En, Xn, lo, Jn, uo, es, fo, ts, ho, rs, po, ns, mo, ss, vo, Gs, Wl, Ka, yv = (Ka = class extends cs {
  constructor(t, r) {
    super();
    q(this, Sr);
    q(this, Xn);
    q(this, Jn);
    q(this, es);
    q(this, ts);
    q(this, rs);
    q(this, ns);
    q(this, ss);
    q(this, Gs);
    q(this, Je, void 0);
    q(this, Ee, void 0);
    q(this, Gn, void 0);
    q(this, Qe, void 0);
    q(this, wr, void 0);
    q(this, nn, void 0);
    q(this, $t, void 0);
    q(this, Yn, void 0);
    q(this, sn, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    q(this, on, void 0);
    q(this, xr, void 0);
    q(this, _r, void 0);
    q(this, sr, void 0);
    q(this, an, /* @__PURE__ */ new Set());
    this.options = r, L(this, Je, t), L(this, $t, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (x(this, Ee).addObserver(this), Va(x(this, Ee), this.options) ? ce(this, Sr, En).call(this) : this.updateResult(), ce(this, ts, ho).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return go(
      x(this, Ee),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return go(
      x(this, Ee),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ce(this, rs, po).call(this), ce(this, ns, mo).call(this), x(this, Ee).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, s = x(this, Ee);
    if (this.options = x(this, Je).defaultQueryOptions(t), oo(n, this.options) || x(this, Je).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: x(this, Ee),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), ce(this, ss, vo).call(this);
    const i = this.hasListeners();
    i && La(
      x(this, Ee),
      s,
      this.options,
      n
    ) && ce(this, Sr, En).call(this), this.updateResult(r), i && (x(this, Ee) !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && ce(this, Xn, lo).call(this);
    const o = ce(this, Jn, uo).call(this);
    i && (x(this, Ee) !== s || this.options.enabled !== n.enabled || o !== x(this, sr)) && ce(this, es, fo).call(this, o);
  }
  getOptimisticResult(t) {
    const r = x(this, Je).getQueryCache().build(x(this, Je), t), n = this.createResult(r, t);
    return wv(this, n) && (L(this, Qe, n), L(this, nn, this.options), L(this, wr, x(this, Ee).state)), n;
  }
  getCurrentResult() {
    return x(this, Qe);
  }
  trackResult(t) {
    const r = {};
    return Object.keys(t).forEach((n) => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (x(this, an).add(n), t[n])
      });
    }), r;
  }
  getCurrentQuery() {
    return x(this, Ee);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = x(this, Je).defaultQueryOptions(t), n = x(this, Je).getQueryCache().build(x(this, Je), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return ce(this, Sr, En).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), x(this, Qe)));
  }
  createResult(t, r) {
    var E;
    const n = x(this, Ee), s = this.options, i = x(this, Qe), o = x(this, wr), a = x(this, nn), l = t !== n ? t.state : x(this, Gn), { state: u } = t;
    let { error: d, errorUpdatedAt: p, fetchStatus: f, status: y } = u, h = !1, g;
    if (r._optimisticResults) {
      const T = this.hasListeners(), $ = !T && Va(t, r), M = T && La(t, n, r, s);
      ($ || M) && (f = li(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (y = "pending")), r._optimisticResults === "isRestoring" && (f = "idle");
    }
    if (r.select && typeof u.data < "u")
      if (i && u.data === (o == null ? void 0 : o.data) && r.select === x(this, Yn))
        g = x(this, sn);
      else
        try {
          L(this, Yn, r.select), g = r.select(u.data), g = co(i == null ? void 0 : i.data, g, r), L(this, sn, g), L(this, $t, null);
        } catch (T) {
          L(this, $t, T);
        }
    else
      g = u.data;
    if (typeof r.placeholderData < "u" && typeof g > "u" && y === "pending") {
      let T;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        T = i.data;
      else if (T = typeof r.placeholderData == "function" ? r.placeholderData(
        (E = x(this, on)) == null ? void 0 : E.state.data,
        x(this, on)
      ) : r.placeholderData, r.select && typeof T < "u")
        try {
          T = r.select(T), L(this, $t, null);
        } catch ($) {
          L(this, $t, $);
        }
      typeof T < "u" && (y = "success", g = co(
        i == null ? void 0 : i.data,
        T,
        r
      ), h = !0);
    }
    x(this, $t) && (d = x(this, $t), g = x(this, sn), p = Date.now(), y = "error");
    const v = f === "fetching", b = y === "pending", _ = y === "error", C = b && v;
    return {
      status: y,
      fetchStatus: f,
      isPending: b,
      isSuccess: y === "success",
      isError: _,
      isInitialLoading: C,
      isLoading: C,
      data: g,
      dataUpdatedAt: u.dataUpdatedAt,
      error: d,
      errorUpdatedAt: p,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > l.dataUpdateCount || u.errorUpdateCount > l.errorUpdateCount,
      isFetching: v,
      isRefetching: v && !b,
      isLoadingError: _ && u.dataUpdatedAt === 0,
      isPaused: f === "paused",
      isPlaceholderData: h,
      isRefetchError: _ && u.dataUpdatedAt !== 0,
      isStale: Mo(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = x(this, Qe), n = this.createResult(x(this, Ee), this.options);
    if (L(this, wr, x(this, Ee).state), L(this, nn, this.options), x(this, wr).data !== void 0 && L(this, on, x(this, Ee)), oo(n, r))
      return;
    L(this, Qe, n);
    const s = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !x(this, an).size)
        return !0;
      const c = new Set(
        a ?? x(this, an)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(x(this, Qe)).some((l) => {
        const u = l;
        return x(this, Qe)[u] !== r[u] && c.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0), ce(this, Gs, Wl).call(this, { ...s, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ce(this, ts, ho).call(this);
  }
}, Je = new WeakMap(), Ee = new WeakMap(), Gn = new WeakMap(), Qe = new WeakMap(), wr = new WeakMap(), nn = new WeakMap(), $t = new WeakMap(), Yn = new WeakMap(), sn = new WeakMap(), on = new WeakMap(), xr = new WeakMap(), _r = new WeakMap(), sr = new WeakMap(), an = new WeakMap(), Sr = new WeakSet(), En = function(t) {
  ce(this, ss, vo).call(this);
  let r = x(this, Ee).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(ft)), r;
}, Xn = new WeakSet(), lo = function() {
  if (ce(this, rs, po).call(this), hn || x(this, Qe).isStale || !io(this.options.staleTime))
    return;
  const r = Vl(
    x(this, Qe).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  L(this, xr, setTimeout(() => {
    x(this, Qe).isStale || this.updateResult();
  }, r));
}, Jn = new WeakSet(), uo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(x(this, Ee)) : this.options.refetchInterval) ?? !1;
}, es = new WeakSet(), fo = function(t) {
  ce(this, ns, mo).call(this), L(this, sr, t), !(hn || this.options.enabled === !1 || !io(x(this, sr)) || x(this, sr) === 0) && L(this, _r, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ks.isFocused()) && ce(this, Sr, En).call(this);
  }, x(this, sr)));
}, ts = new WeakSet(), ho = function() {
  ce(this, Xn, lo).call(this), ce(this, es, fo).call(this, ce(this, Jn, uo).call(this));
}, rs = new WeakSet(), po = function() {
  x(this, xr) && (clearTimeout(x(this, xr)), L(this, xr, void 0));
}, ns = new WeakSet(), mo = function() {
  x(this, _r) && (clearInterval(x(this, _r)), L(this, _r, void 0));
}, ss = new WeakSet(), vo = function() {
  const t = x(this, Je).getQueryCache().build(x(this, Je), this.options);
  if (t === x(this, Ee))
    return;
  const r = x(this, Ee);
  L(this, Ee, t), L(this, Gn, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Gs = new WeakSet(), Wl = function(t) {
  We.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(x(this, Qe));
    }), x(this, Je).getQueryCache().notify({
      query: x(this, Ee),
      type: "observerResultsUpdated"
    });
  });
}, Ka);
function bv(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Va(e, t) {
  return bv(e, t) || e.state.dataUpdatedAt > 0 && go(e, t, t.refetchOnMount);
}
function go(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && Mo(e, t);
  }
  return !1;
}
function La(e, t, r, n) {
  return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && Mo(e, r);
}
function Mo(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function wv(e, t) {
  return !oo(e.getCurrentResult(), t);
}
var Zl = R.createContext(
  void 0
), xv = (e) => {
  const t = R.useContext(Zl);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, _v = ({
  client: e,
  children: t
}) => (R.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ R.createElement(Zl.Provider, { value: e }, t)), zl = R.createContext(!1), Sv = () => R.useContext(zl);
zl.Provider;
function Cv() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Ev = R.createContext(Cv()), $v = () => R.useContext(Ev);
function Av(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Tv = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Ov = (e) => {
  R.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Rv = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && Av(r, [e.error, n]), kv = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Pv = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Iv = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function Nv(e, t, r) {
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = xv(r), s = Sv(), i = $v(), o = n.defaultQueryOptions(e);
  o._optimisticResults = s ? "isRestoring" : "optimistic", kv(o), Tv(o, i), Ov(i);
  const [a] = R.useState(
    () => new t(
      n,
      o
    )
  ), c = a.getOptimisticResult(o);
  if (R.useSyncExternalStore(
    R.useCallback(
      (l) => {
        const u = s ? () => {
        } : a.subscribe(We.batchCalls(l));
        return a.updateResult(), u;
      },
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), R.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), Pv(o, c))
    throw Iv(o, a, i);
  if (Rv({
    result: c,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw c.error;
  return o.notifyOnChangeProps ? c : a.trackResult(c);
}
function Fo(e, t) {
  return Nv(e, yv, t);
}
const Dv = new gv({
  defaultOptions: {
    queries: {
      staleTime: 1 / 0,
      refetchOnWindowFocus: !1,
      refetchOnMount: !1,
      refetchOnReconnect: !1,
      retry: !1
    }
  }
}), Vo = cn(void 0);
function Yv({
  apiKey: e,
  children: t
}) {
  if (!e)
    throw new Error("apiKey is required");
  return /* @__PURE__ */ D(Vo.Provider, { value: { apiKey: e }, children: /* @__PURE__ */ D(_v, { client: Dv, children: t }) });
}
async function Mv(e) {
  const t = await fetch("http://localhost:5000/activities", {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${e}`
    }
  });
  if (!t.ok)
    throw new Error("Something went wrong");
  return t.json();
}
function Fv() {
  const e = pn(Vo);
  if (e === void 0)
    throw new Error(
      "useActivities must be used within a CmeComponentsProvider"
    );
  if (!e.apiKey)
    throw new Error("No API key provided");
  const { data: t, isLoading: r, isError: n } = Fo({
    queryKey: ["activities"],
    queryFn: () => Mv(e.apiKey)
  });
  return { activities: t, isLoading: r, isError: n };
}
function Xv() {
  const { activities: e } = Fv();
  return /* @__PURE__ */ D("ul", { children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ D("li", { children: t.name }, t.id)) });
}
function Hl() {
  const e = pn(Vo);
  if (e === void 0)
    throw new Error(
      "useComponentsContext must be used within a <CmeComponentsProvider /> component."
    );
  return e;
}
async function Vv(e) {
  const t = await fetch(
    "http://localhost:5000/accme-accreditation-criteria",
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${e}`
      }
    }
  );
  if (!t.ok)
    throw new Error("Something went wrong");
  return (await t.json()).data;
}
function Lv() {
  const e = Hl();
  if (!e.apiKey)
    throw new Error("No API key provided");
  const { data: t, isLoading: r, isError: n } = Fo({
    queryKey: ["accmeAccreditationCriteria", e.apiKey],
    queryFn: () => Vv(e.apiKey)
  });
  return { criteria: t, isLoading: r, isError: n };
}
async function jv({
  id: e,
  apiKey: t
}) {
  const r = await fetch(
    `http://localhost:5000/accme-accreditation-criteria/${e}`,
    {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${t}`
      }
    }
  );
  if (!r.ok)
    throw new Error("Something went wrong");
  return r.json();
}
function Uv({ id: e }) {
  const t = Hl();
  if (!t.apiKey)
    throw new Error("No API key provided");
  const { data: r, isLoading: n, isError: s } = Fo({
    queryKey: ["criterion", e, t.apiKey],
    queryFn: () => jv({ apiKey: t.apiKey, id: e })
  });
  return { criterion: r, isLoading: n, isError: s };
}
function Jv() {
  const { criteria: e, isLoading: t, isError: r } = Lv();
  return t ? /* @__PURE__ */ D("div", { children: "Loading..." }) : r ? /* @__PURE__ */ D("div", { children: "Error loading data" }) : /* @__PURE__ */ tt("div", { children: [
    /* @__PURE__ */ D("ul", { children: e == null ? void 0 : e.map((n) => /* @__PURE__ */ D("li", { children: n.name }, n.id)) }),
    /* @__PURE__ */ D("hr", {}),
    /* @__PURE__ */ D(Bv, {})
  ] });
}
function Bv() {
  const { criterion: e, isLoading: t, isError: r } = Uv({ id: 3 });
  return t ? /* @__PURE__ */ D("div", { children: "Loading..." }) : r ? /* @__PURE__ */ D("div", { children: "Error loading data" }) : /* @__PURE__ */ D("div", { children: e == null ? void 0 : e.name });
}
export {
  Jv as AccmeAccreditationCriteriaList,
  Xv as ActivitiesList,
  Gv as ActivityForm,
  Vo as CmeComponentsContext,
  Yv as CmeComponentsProvider,
  Fv as useActivities
};
