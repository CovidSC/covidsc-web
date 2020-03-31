/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t =
    'undefined' != typeof window &&
    null != window.customElements &&
    void 0 !== window.customElements.polyfillWrapFlushCallback,
  e = (t, e, i = null) => {
    for (; e !== i; ) {
      const i = e.nextSibling;
      t.removeChild(e), (e = i);
    }
  },
  i = `{{lit-${String(Math.random()).slice(2)}}}`,
  n = `\x3c!--${i}--\x3e`,
  o = new RegExp(`${i}|${n}`);
class a {
  constructor(t, e) {
    (this.parts = []), (this.element = e);
    const n = [],
      a = [],
      s = document.createTreeWalker(e.content, 133, null, !1);
    let l = 0,
      p = -1,
      u = 0;
    const {
      strings: h,
      values: { length: m },
    } = t;
    for (; u < m; ) {
      const t = s.nextNode();
      if (null !== t) {
        if ((p++, 1 === t.nodeType)) {
          if (t.hasAttributes()) {
            const e = t.attributes,
              { length: i } = e;
            let n = 0;
            for (let t = 0; t < i; t++) r(e[t].name, '$lit$') && n++;
            for (; n-- > 0; ) {
              const e = h[u],
                i = c.exec(e)[2],
                n = i.toLowerCase() + '$lit$',
                a = t.getAttribute(n);
              t.removeAttribute(n);
              const r = a.split(o);
              this.parts.push({ type: 'attribute', index: p, name: i, strings: r }),
                (u += r.length - 1);
            }
          }
          'TEMPLATE' === t.tagName && (a.push(t), (s.currentNode = t.content));
        } else if (3 === t.nodeType) {
          const e = t.data;
          if (e.indexOf(i) >= 0) {
            const i = t.parentNode,
              a = e.split(o),
              s = a.length - 1;
            for (let e = 0; e < s; e++) {
              let n,
                o = a[e];
              if ('' === o) n = d();
              else {
                const t = c.exec(o);
                null !== t &&
                  r(t[2], '$lit$') &&
                  (o = o.slice(0, t.index) + t[1] + t[2].slice(0, -'$lit$'.length) + t[3]),
                  (n = document.createTextNode(o));
              }
              i.insertBefore(n, t), this.parts.push({ type: 'node', index: ++p });
            }
            '' === a[s] ? (i.insertBefore(d(), t), n.push(t)) : (t.data = a[s]), (u += s);
          }
        } else if (8 === t.nodeType)
          if (t.data === i) {
            const e = t.parentNode;
            (null !== t.previousSibling && p !== l) || (p++, e.insertBefore(d(), t)),
              (l = p),
              this.parts.push({ type: 'node', index: p }),
              null === t.nextSibling ? (t.data = '') : (n.push(t), p--),
              u++;
          } else {
            let e = -1;
            for (; -1 !== (e = t.data.indexOf(i, e + 1)); )
              this.parts.push({ type: 'node', index: -1 }), u++;
          }
      } else s.currentNode = a.pop();
    }
    for (const t of n) t.parentNode.removeChild(t);
  }
}
const r = (t, e) => {
    const i = t.length - e.length;
    return i >= 0 && t.slice(i) === e;
  },
  s = t => -1 !== t.index,
  d = () => document.createComment(''),
  c = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function l(t, e) {
  const {
      element: { content: i },
      parts: n,
    } = t,
    o = document.createTreeWalker(i, 133, null, !1);
  let a = u(n),
    r = n[a],
    s = -1,
    d = 0;
  const c = [];
  let l = null;
  for (; o.nextNode(); ) {
    s++;
    const t = o.currentNode;
    for (
      t.previousSibling === l && (l = null),
        e.has(t) && (c.push(t), null === l && (l = t)),
        null !== l && d++;
      void 0 !== r && r.index === s;

    )
      (r.index = null !== l ? -1 : r.index - d), (a = u(n, a)), (r = n[a]);
  }
  c.forEach(t => t.parentNode.removeChild(t));
}
const p = t => {
    let e = 11 === t.nodeType ? 0 : 1;
    const i = document.createTreeWalker(t, 133, null, !1);
    for (; i.nextNode(); ) e++;
    return e;
  },
  u = (t, e = -1) => {
    for (let i = e + 1; i < t.length; i++) {
      const e = t[i];
      if (s(e)) return i;
    }
    return -1;
  };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h = new WeakMap(),
  m = t => 'function' == typeof t && h.has(t),
  f = {},
  g = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b {
  constructor(t, e, i) {
    (this.__parts = []), (this.template = t), (this.processor = e), (this.options = i);
  }
  update(t) {
    let e = 0;
    for (const i of this.__parts) void 0 !== i && i.setValue(t[e]), e++;
    for (const t of this.__parts) void 0 !== t && t.commit();
  }
  _clone() {
    const e = t
        ? this.template.element.content.cloneNode(!0)
        : document.importNode(this.template.element.content, !0),
      i = [],
      n = this.template.parts,
      o = document.createTreeWalker(e, 133, null, !1);
    let a,
      r = 0,
      d = 0,
      c = o.nextNode();
    for (; r < n.length; )
      if (((a = n[r]), s(a))) {
        for (; d < a.index; )
          d++,
            'TEMPLATE' === c.nodeName && (i.push(c), (o.currentNode = c.content)),
            null === (c = o.nextNode()) && ((o.currentNode = i.pop()), (c = o.nextNode()));
        if ('node' === a.type) {
          const t = this.processor.handleTextExpression(this.options);
          t.insertAfterNode(c.previousSibling), this.__parts.push(t);
        } else
          this.__parts.push(
            ...this.processor.handleAttributeExpressions(c, a.name, a.strings, this.options),
          );
        r++;
      } else this.__parts.push(void 0), r++;
    return t && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const _ = ` ${i} `;
class v {
  constructor(t, e, i, n) {
    (this.strings = t), (this.values = e), (this.type = i), (this.processor = n);
  }
  getHTML() {
    const t = this.strings.length - 1;
    let e = '',
      o = !1;
    for (let a = 0; a < t; a++) {
      const t = this.strings[a],
        r = t.lastIndexOf('\x3c!--');
      o = (r > -1 || o) && -1 === t.indexOf('--\x3e', r + 1);
      const s = c.exec(t);
      e += null === s ? t + (o ? _ : n) : t.substr(0, s.index) + s[1] + s[2] + '$lit$' + s[3] + i;
    }
    return (e += this.strings[t]), e;
  }
  getTemplateElement() {
    const t = document.createElement('template');
    return (t.innerHTML = this.getHTML()), t;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const y = t => null === t || !('object' == typeof t || 'function' == typeof t),
  x = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
class w {
  constructor(t, e, i) {
    (this.dirty = !0), (this.element = t), (this.name = e), (this.strings = i), (this.parts = []);
    for (let t = 0; t < i.length - 1; t++) this.parts[t] = this._createPart();
  }
  _createPart() {
    return new S(this);
  }
  _getValue() {
    const t = this.strings,
      e = t.length - 1;
    let i = '';
    for (let n = 0; n < e; n++) {
      i += t[n];
      const e = this.parts[n];
      if (void 0 !== e) {
        const t = e.value;
        if (y(t) || !x(t)) i += 'string' == typeof t ? t : String(t);
        else for (const e of t) i += 'string' == typeof e ? e : String(e);
      }
    }
    return (i += t[e]), i;
  }
  commit() {
    this.dirty && ((this.dirty = !1), this.element.setAttribute(this.name, this._getValue()));
  }
}
class S {
  constructor(t) {
    (this.value = void 0), (this.committer = t);
  }
  setValue(t) {
    t === f ||
      (y(t) && t === this.value) ||
      ((this.value = t), m(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; m(this.value); ) {
      const t = this.value;
      (this.value = f), t(this);
    }
    this.value !== f && this.committer.commit();
  }
}
class C {
  constructor(t) {
    (this.value = void 0), (this.__pendingValue = void 0), (this.options = t);
  }
  appendInto(t) {
    (this.startNode = t.appendChild(d())), (this.endNode = t.appendChild(d()));
  }
  insertAfterNode(t) {
    (this.startNode = t), (this.endNode = t.nextSibling);
  }
  appendIntoPart(t) {
    t.__insert((this.startNode = d())), t.__insert((this.endNode = d()));
  }
  insertAfterPart(t) {
    t.__insert((this.startNode = d())), (this.endNode = t.endNode), (t.endNode = this.startNode);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (null === this.startNode.parentNode) return;
    for (; m(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = f), t(this);
    }
    const t = this.__pendingValue;
    t !== f &&
      (y(t)
        ? t !== this.value && this.__commitText(t)
        : t instanceof v
        ? this.__commitTemplateResult(t)
        : t instanceof Node
        ? this.__commitNode(t)
        : x(t)
        ? this.__commitIterable(t)
        : t === g
        ? ((this.value = g), this.clear())
        : this.__commitText(t));
  }
  __insert(t) {
    this.endNode.parentNode.insertBefore(t, this.endNode);
  }
  __commitNode(t) {
    this.value !== t && (this.clear(), this.__insert(t), (this.value = t));
  }
  __commitText(t) {
    const e = this.startNode.nextSibling,
      i = 'string' == typeof (t = null == t ? '' : t) ? t : String(t);
    e === this.endNode.previousSibling && 3 === e.nodeType
      ? (e.data = i)
      : this.__commitNode(document.createTextNode(i)),
      (this.value = t);
  }
  __commitTemplateResult(t) {
    const e = this.options.templateFactory(t);
    if (this.value instanceof b && this.value.template === e) this.value.update(t.values);
    else {
      const i = new b(e, t.processor, this.options),
        n = i._clone();
      i.update(t.values), this.__commitNode(n), (this.value = i);
    }
  }
  __commitIterable(t) {
    Array.isArray(this.value) || ((this.value = []), this.clear());
    const e = this.value;
    let i,
      n = 0;
    for (const o of t)
      (i = e[n]),
        void 0 === i &&
          ((i = new C(this.options)),
          e.push(i),
          0 === n ? i.appendIntoPart(this) : i.insertAfterPart(e[n - 1])),
        i.setValue(o),
        i.commit(),
        n++;
    n < e.length && ((e.length = n), this.clear(i && i.endNode));
  }
  clear(t = this.startNode) {
    e(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
class A {
  constructor(t, e, i) {
    if (
      ((this.value = void 0),
      (this.__pendingValue = void 0),
      2 !== i.length || '' !== i[0] || '' !== i[1])
    )
      throw new Error('Boolean attributes can only contain a single expression');
    (this.element = t), (this.name = e), (this.strings = i);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = f), t(this);
    }
    if (this.__pendingValue === f) return;
    const t = !!this.__pendingValue;
    this.value !== t &&
      (t ? this.element.setAttribute(this.name, '') : this.element.removeAttribute(this.name),
      (this.value = t)),
      (this.__pendingValue = f);
  }
}
class T extends w {
  constructor(t, e, i) {
    super(t, e, i), (this.single = 2 === i.length && '' === i[0] && '' === i[1]);
  }
  _createPart() {
    return new k(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty && ((this.dirty = !1), (this.element[this.name] = this._getValue()));
  }
}
class k extends S {}
let E = !1;
(() => {
  try {
    const t = {
      get capture() {
        return (E = !0), !1;
      },
    };
    window.addEventListener('test', t, t), window.removeEventListener('test', t, t);
  } catch (t) {}
})();
class P {
  constructor(t, e, i) {
    (this.value = void 0),
      (this.__pendingValue = void 0),
      (this.element = t),
      (this.eventName = e),
      (this.eventContext = i),
      (this.__boundHandleEvent = t => this.handleEvent(t));
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    for (; m(this.__pendingValue); ) {
      const t = this.__pendingValue;
      (this.__pendingValue = f), t(this);
    }
    if (this.__pendingValue === f) return;
    const t = this.__pendingValue,
      e = this.value,
      i =
        null == t ||
        (null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)),
      n = null != t && (null == e || i);
    i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
      n &&
        ((this.__options = O(t)),
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
      (this.value = t),
      (this.__pendingValue = f);
  }
  handleEvent(t) {
    'function' == typeof this.value
      ? this.value.call(this.eventContext || this.element, t)
      : this.value.handleEvent(t);
  }
}
const O = t => t && (E ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ function R(t) {
  let e = N.get(t.type);
  void 0 === e && ((e = { stringsArray: new WeakMap(), keyString: new Map() }), N.set(t.type, e));
  let n = e.stringsArray.get(t.strings);
  if (void 0 !== n) return n;
  const o = t.strings.join(i);
  return (
    (n = e.keyString.get(o)),
    void 0 === n && ((n = new a(t, t.getTemplateElement())), e.keyString.set(o, n)),
    e.stringsArray.set(t.strings, n),
    n
  );
}
const N = new Map(),
  I = new WeakMap();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const z = new /**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(class {
  handleAttributeExpressions(t, e, i, n) {
    const o = e[0];
    if ('.' === o) {
      return new T(t, e.slice(1), i).parts;
    }
    return '@' === o
      ? [new P(t, e.slice(1), n.eventContext)]
      : '?' === o
      ? [new A(t, e.slice(1), i)]
      : new w(t, e, i).parts;
  }
  handleTextExpression(t) {
    return new C(t);
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ 'undefined' != typeof window &&
  (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.2.1');
const D = (t, ...e) => new v(t, e, 'html', z),
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */ L = (t, e) => `${t}--${e}`;
let U = !0;
void 0 === window.ShadyCSS
  ? (U = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      'Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.',
    ),
    (U = !1));
const F = t => e => {
    const n = L(e.type, t);
    let o = N.get(n);
    void 0 === o && ((o = { stringsArray: new WeakMap(), keyString: new Map() }), N.set(n, o));
    let r = o.stringsArray.get(e.strings);
    if (void 0 !== r) return r;
    const s = e.strings.join(i);
    if (((r = o.keyString.get(s)), void 0 === r)) {
      const i = e.getTemplateElement();
      U && window.ShadyCSS.prepareTemplateDom(i, t), (r = new a(e, i)), o.keyString.set(s, r);
    }
    return o.stringsArray.set(e.strings, r), r;
  },
  H = ['html', 'svg'],
  V = new Set(),
  j = (t, e, i) => {
    V.add(t);
    const n = i ? i.element : document.createElement('template'),
      o = e.querySelectorAll('style'),
      { length: a } = o;
    if (0 === a) return void window.ShadyCSS.prepareTemplateStyles(n, t);
    const r = document.createElement('style');
    for (let t = 0; t < a; t++) {
      const e = o[t];
      e.parentNode.removeChild(e), (r.textContent += e.textContent);
    }
    (t => {
      H.forEach(e => {
        const i = N.get(L(e, t));
        void 0 !== i &&
          i.keyString.forEach(t => {
            const {
                element: { content: e },
              } = t,
              i = new Set();
            Array.from(e.querySelectorAll('style')).forEach(t => {
              i.add(t);
            }),
              l(t, i);
          });
      });
    })(t);
    const s = n.content;
    i
      ? (function(t, e, i = null) {
          const {
            element: { content: n },
            parts: o,
          } = t;
          if (null == i) return void n.appendChild(e);
          const a = document.createTreeWalker(n, 133, null, !1);
          let r = u(o),
            s = 0,
            d = -1;
          for (; a.nextNode(); ) {
            for (
              d++, a.currentNode === i && ((s = p(e)), i.parentNode.insertBefore(e, i));
              -1 !== r && o[r].index === d;

            ) {
              if (s > 0) {
                for (; -1 !== r; ) (o[r].index += s), (r = u(o, r));
                return;
              }
              r = u(o, r);
            }
          }
        })(i, r, s.firstChild)
      : s.insertBefore(r, s.firstChild),
      window.ShadyCSS.prepareTemplateStyles(n, t);
    const d = s.querySelector('style');
    if (window.ShadyCSS.nativeShadow && null !== d) e.insertBefore(d.cloneNode(!0), e.firstChild);
    else if (i) {
      s.insertBefore(r, s.firstChild);
      const t = new Set();
      t.add(r), l(i, t);
    }
  };
window.JSCompiler_renameProperty = (t, e) => t;
const B = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          return t ? '' : null;
        case Object:
        case Array:
          return null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, e) {
      switch (e) {
        case Boolean:
          return null !== t;
        case Number:
          return null === t ? null : Number(t);
        case Object:
        case Array:
          return JSON.parse(t);
      }
      return t;
    },
  },
  M = (t, e) => e !== t && (e == e || t == t),
  $ = { attribute: !0, type: String, converter: B, reflect: !1, hasChanged: M };
class G extends HTMLElement {
  constructor() {
    super(),
      (this._updateState = 0),
      (this._instanceProperties = void 0),
      (this._updatePromise = new Promise(t => (this._enableUpdatingResolver = t))),
      (this._changedProperties = new Map()),
      (this._reflectingProperties = void 0),
      this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this._classProperties.forEach((e, i) => {
        const n = this._attributeNameForProperty(i, e);
        void 0 !== n && (this._attributeToPropertyMap.set(n, i), t.push(n));
      }),
      t
    );
  }
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
      this._classProperties = new Map();
      const t = Object.getPrototypeOf(this)._classProperties;
      void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t));
    }
  }
  static createProperty(t, e = $) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(t, e),
      e.noAccessor || this.prototype.hasOwnProperty(t))
    )
      return;
    const i = 'symbol' == typeof t ? Symbol() : `__${t}`,
      n = this.getPropertyDescriptor(t, i, e);
    void 0 !== n && Object.defineProperty(this.prototype, t, n);
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(i) {
        const n = this[t];
        (this[e] = i), this._requestUpdate(t, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return (this._classProperties && this._classProperties.get(t)) || $;
  }
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (
      (t.hasOwnProperty('finalized') || t.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty('properties', this)))
    ) {
      const t = this.properties,
        e = [
          ...Object.getOwnPropertyNames(t),
          ...('function' == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(t)
            : []),
        ];
      for (const i of e) this.createProperty(i, t[i]);
    }
  }
  static _attributeNameForProperty(t, e) {
    const i = e.attribute;
    return !1 === i
      ? void 0
      : 'string' == typeof i
      ? i
      : 'string' == typeof t
      ? t.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(t, e, i = M) {
    return i(t, e);
  }
  static _propertyValueFromAttribute(t, e) {
    const i = e.type,
      n = e.converter || B,
      o = 'function' == typeof n ? n : n.fromAttribute;
    return o ? o(t, i) : t;
  }
  static _propertyValueToAttribute(t, e) {
    if (void 0 === e.reflect) return;
    const i = e.type,
      n = e.converter;
    return ((n && n.toAttribute) || B.toAttribute)(t, i);
  }
  initialize() {
    this._saveInstanceProperties(), this._requestUpdate();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t, e) => {
      if (this.hasOwnProperty(e)) {
        const t = this[e];
        delete this[e],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(e, t);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, e) => (this[e] = t)), (this._instanceProperties = void 0);
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    void 0 !== this._enableUpdatingResolver &&
      (this._enableUpdatingResolver(), (this._enableUpdatingResolver = void 0));
  }
  disconnectedCallback() {}
  attributeChangedCallback(t, e, i) {
    e !== i && this._attributeToProperty(t, i);
  }
  _propertyToAttribute(t, e, i = $) {
    const n = this.constructor,
      o = n._attributeNameForProperty(t, i);
    if (void 0 !== o) {
      const t = n._propertyValueToAttribute(e, i);
      if (void 0 === t) return;
      (this._updateState = 8 | this._updateState),
        null == t ? this.removeAttribute(o) : this.setAttribute(o, t),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(t, e) {
    if (8 & this._updateState) return;
    const i = this.constructor,
      n = i._attributeToPropertyMap.get(t);
    if (void 0 !== n) {
      const t = i.getPropertyOptions(n);
      (this._updateState = 16 | this._updateState),
        (this[n] = i._propertyValueFromAttribute(e, t)),
        (this._updateState = -17 & this._updateState);
    }
  }
  _requestUpdate(t, e) {
    let i = !0;
    if (void 0 !== t) {
      const n = this.constructor,
        o = n.getPropertyOptions(t);
      n._valueHasChanged(this[t], e, o.hasChanged)
        ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
          !0 !== o.reflect ||
            16 & this._updateState ||
            (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()),
            this._reflectingProperties.set(t, o)))
        : (i = !1);
    }
    !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate());
  }
  requestUpdate(t, e) {
    return this._requestUpdate(t, e), this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = 4 | this._updateState;
    try {
      await this._updatePromise;
    } catch (t) {}
    const t = this.performUpdate();
    return null != t && (await t), !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    this._instanceProperties && this._applyInstanceProperties();
    let t = !1;
    const e = this._changedProperties;
    try {
      (t = this.shouldUpdate(e)), t ? this.update(e) : this._markUpdated();
    } catch (e) {
      throw ((t = !1), this._markUpdated(), e);
    }
    t &&
      (1 & this._updateState || ((this._updateState = 1 | this._updateState), this.firstUpdated(e)),
      this.updated(e));
  }
  _markUpdated() {
    (this._changedProperties = new Map()), (this._updateState = -5 & this._updateState);
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((t, e) => this._propertyToAttribute(e, this[e], t)),
      (this._reflectingProperties = void 0)),
      this._markUpdated();
  }
  updated(t) {}
  firstUpdated(t) {}
}
G.finalized = !0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q = t => e =>
    'function' == typeof e
      ? ((t, e) => (window.customElements.define(t, e), e))(t, e)
      : ((t, e) => {
          const { kind: i, elements: n } = e;
          return {
            kind: i,
            elements: n,
            finisher(e) {
              window.customElements.define(t, e);
            },
          };
        })(t, e),
  J = (t, e) =>
    'method' === e.kind && e.descriptor && !('value' in e.descriptor)
      ? Object.assign(Object.assign({}, e), {
          finisher(i) {
            i.createProperty(e.key, t);
          },
        })
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          initializer() {
            'function' == typeof e.initializer && (this[e.key] = e.initializer.call(this));
          },
          finisher(i) {
            i.createProperty(e.key, t);
          },
        };
function W(t) {
  return (e, i) =>
    void 0 !== i
      ? ((t, e, i) => {
          e.constructor.createProperty(i, t);
        })(t, e, i)
      : J(t, e);
}
function X(t) {
  return (e, i) => {
    const n = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: !0,
      configurable: !0,
    };
    return void 0 !== i ? Y(n, e, i) : Z(n, e);
  };
}
const Y = (t, e, i) => {
    Object.defineProperty(e, i, t);
  },
  Z = (t, e) => ({ kind: 'method', placement: 'prototype', key: e.key, descriptor: t }),
  /**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ K =
    'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype,
  Q = Symbol();
class tt {
  constructor(t, e) {
    if (e !== Q)
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    this.cssText = t;
  }
  get styleSheet() {
    return (
      void 0 === this._styleSheet &&
        (K
          ? ((this._styleSheet = new CSSStyleSheet()), this._styleSheet.replaceSync(this.cssText))
          : (this._styleSheet = null)),
      this._styleSheet
    );
  }
  toString() {
    return this.cssText;
  }
}
const et = (t, ...e) => {
  const i = e.reduce(
    (e, i, n) =>
      e +
      (t => {
        if (t instanceof tt) return t.cssText;
        if ('number' == typeof t) return t;
        throw new Error(
          `Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`,
        );
      })(i) +
      t[n + 1],
    t[0],
  );
  return new tt(i, Q);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions || (window.litElementVersions = [])).push('2.3.1');
const it = {};
class nt extends G {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) return;
    const t = this.getStyles();
    if (void 0 === t) this._styles = [];
    else if (Array.isArray(t)) {
      const e = (t, i) => t.reduceRight((t, i) => (Array.isArray(i) ? e(i, t) : (t.add(i), t)), i),
        i = e(t, new Set()),
        n = [];
      i.forEach(t => n.unshift(t)), (this._styles = n);
    } else this._styles = [t];
  }
  initialize() {
    super.initialize(),
      this.constructor._getUniqueStyles(),
      (this.renderRoot = this.createRenderRoot()),
      window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }
  adoptStyles() {
    const t = this.constructor._styles;
    0 !== t.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? K
          ? (this.renderRoot.adoptedStyleSheets = t.map(t => t.styleSheet))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            t.map(t => t.cssText),
            this.localName,
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
  }
  update(t) {
    const e = this.render();
    super.update(t),
      e !== it &&
        this.constructor.render(e, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this,
        }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach(t => {
          const e = document.createElement('style');
          (e.textContent = t.cssText), this.renderRoot.appendChild(e);
        }));
  }
  render() {
    return it;
  }
}
(nt.finalized = !0),
  (nt.render = (t, i, n) => {
    if (!n || 'object' != typeof n || !n.scopeName)
      throw new Error('The `scopeName` option is required.');
    const o = n.scopeName,
      a = I.has(i),
      r = U && 11 === i.nodeType && !!i.host,
      s = r && !V.has(o),
      d = s ? document.createDocumentFragment() : i;
    if (
      (((t, i, n) => {
        let o = I.get(i);
        void 0 === o &&
          (e(i, i.firstChild),
          I.set(i, (o = new C(Object.assign({ templateFactory: R }, n)))),
          o.appendInto(i)),
          o.setValue(t),
          o.commit();
      })(t, d, Object.assign({ templateFactory: F(o) }, n)),
      s)
    ) {
      const t = I.get(d);
      I.delete(d);
      const n = t.value instanceof b ? t.value.template : void 0;
      j(o, d, n), e(i, i.firstChild), i.appendChild(d), I.set(i, t);
    }
    !a && r && window.ShadyCSS.styleElement(i.host);
  });
customElements.define(
  'covid-sc-map',
  class extends nt {
    constructor() {
      super(), (this.spotmap = {}), (this.hotspots = []);
    }
    static get properties() {
      return { spotmap: { type: Object }, hotspots: { type: Object } };
    }
    static get styles() {
      return et`:host{height:inherit;width:inherit}`;
    }
    render() {
      return D` <div id="map" style="height:inherit; width: inherit"></div> `;
    }
    firstUpdated() {
      this.loadMap();
    }
    loadMap() {
      if (void 0 === window.google) {
        const t = document.createElement('script'),
          e = 'AIzaSyBx6seaJUAP-r-6eePDE1IGQCXosHcQZbY';
        (t.src = `//maps.googleapis.com/maps/api/js?key=${e}`),
          (t.onload = function() {
            (this.map = this.initMap()), (window.map = this.map);
          }.bind(this)),
          document.body.append(t);
      } else (this.map = this.initMap()), (window.map = this.map);
    }
    initMap() {
      const t = new window.google.maps.Map(this.shadowRoot.getElementById('map'), {
        zoom: 7.1,
        center: { lat: 33.71, lng: -81.0348 },
        mapTypeId: 'terrain',
      });
      return console.log(t), t;
    }
    drawCircles(t, e) {
      let i;
      for (const n in e) {
        (e[n].center = { lat: parseFloat(e[n].center.lat), lng: parseFloat(e[n].center.lng) }),
          e[n].hasOwnProperty('fillOpacity') || (e[n].fillOpacity = 0.35);
        const o = new window.google.maps.Circle({
          strokeColor: e[n].color,
          strokeOpacity: e[n].strokeOpacity,
          strokeWeight: 0,
          fillColor: e[n].color,
          fillOpacity: e[n].fillOpacity,
          map: t,
          center: e[n].center,
          radius: 100 * Math.sqrt(e[n].population),
          clickable: !0,
        });
        (e[n].contentString =
          `<div id="content"><div id="covidDataInfo"></div><h5 id="firstHeading" class="firstHeading">${e[n].header}</h5>` +
          `<div id="bodyContent">${e[n].content}</div>` +
          '</div>'),
          (i = new google.maps.InfoWindow()),
          google.maps.event.addListener(
            o,
            'click',
            (function(n, o) {
              return function() {
                i.setContent(e[o].contentString), i.setPosition(n.getCenter()), i.open(t);
              };
            })(o, n),
          );
      }
    }
    updated(t) {
      t.forEach((e, i) => {
        console.log(`${i} changed. oldValue: ${e}, ${t.get(i)}`),
          'hotspots' === i &&
            this.hotspots.confirmedCircles &&
            window.map &&
            this.drawCircles(window.map, this.hotspots.confirmedCircles),
          'hotspots' === i &&
            this.hotspots.deathCircles &&
            window.map &&
            this.drawCircles(window.map, this.hotspots.deathCircles);
      });
    }
  },
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ot = function(t, e) {
  return (ot =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(t, e) {
        t.__proto__ = e;
      }) ||
    function(t, e) {
      for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    })(t, e);
};
function at(t, e) {
  function i() {
    this.constructor = t;
  }
  ot(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
}
var rt = function() {
  return (rt =
    Object.assign ||
    function(t) {
      for (var e, i = 1, n = arguments.length; i < n; i++)
        for (var o in (e = arguments[i]))
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t;
    }).apply(this, arguments);
};
function st(t, e, i, n) {
  var o,
    a = arguments.length,
    r = a < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    r = Reflect.decorate(t, e, i, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(e, i, r) : o(e, i)) || r);
  return a > 3 && r && Object.defineProperty(e, i, r), r;
  /**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
}
const dt = et`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
let ct = class extends nt {
  render() {
    return D`<slot></slot>`;
  }
};
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function lt(t) {
  return (
    void 0 === t && (t = window),
    !!(function(t) {
      void 0 === t && (t = window);
      var e = !1;
      try {
        var i = {
            get passive() {
              return (e = !0), !1;
            },
          },
          n = function() {};
        t.document.addEventListener('test', n, i), t.document.removeEventListener('test', n, i);
      } catch (t) {
        e = !1;
      }
      return e;
    })(
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */ t,
    ) && { passive: !0 }
  );
}
(ct.styles = dt), (ct = st([q('mwc-icon')], ct));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pt,
  ut = (function() {
    function t(t) {
      void 0 === t && (t = {}), (this.adapter_ = t);
    }
    return (
      Object.defineProperty(t, 'cssClasses', {
        get: function() {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t, 'strings', {
        get: function() {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t, 'numbers', {
        get: function() {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t, 'defaultAdapter', {
        get: function() {
          return {};
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.init = function() {}),
      (t.prototype.destroy = function() {}),
      t
    );
  })(),
  ht = {
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  },
  mt = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
  },
  ft = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
  };
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gt = ['touchstart', 'pointerdown', 'mousedown', 'keydown'],
  bt = ['touchend', 'pointerup', 'mouseup', 'contextmenu'],
  _t = [],
  vt = (function(t) {
    function e(i) {
      var n = t.call(this, rt({}, e.defaultAdapter, i)) || this;
      return (
        (n.activationAnimationHasEnded_ = !1),
        (n.activationTimer_ = 0),
        (n.fgDeactivationRemovalTimer_ = 0),
        (n.fgScale_ = '0'),
        (n.frame_ = { width: 0, height: 0 }),
        (n.initialSize_ = 0),
        (n.layoutFrame_ = 0),
        (n.maxRadius_ = 0),
        (n.unboundedCoords_ = { left: 0, top: 0 }),
        (n.activationState_ = n.defaultActivationState_()),
        (n.activationTimerCallback_ = function() {
          (n.activationAnimationHasEnded_ = !0), n.runDeactivationUXLogicIfReady_();
        }),
        (n.activateHandler_ = function(t) {
          return n.activate_(t);
        }),
        (n.deactivateHandler_ = function() {
          return n.deactivate_();
        }),
        (n.focusHandler_ = function() {
          return n.handleFocus();
        }),
        (n.blurHandler_ = function() {
          return n.handleBlur();
        }),
        (n.resizeHandler_ = function() {
          return n.layout();
        }),
        n
      );
    }
    return (
      at(e, t),
      Object.defineProperty(e, 'cssClasses', {
        get: function() {
          return ht;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e, 'strings', {
        get: function() {
          return mt;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e, 'numbers', {
        get: function() {
          return ft;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e, 'defaultAdapter', {
        get: function() {
          return {
            addClass: function() {},
            browserSupportsCssVars: function() {
              return !0;
            },
            computeBoundingRect: function() {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            containsEventTarget: function() {
              return !0;
            },
            deregisterDocumentInteractionHandler: function() {},
            deregisterInteractionHandler: function() {},
            deregisterResizeHandler: function() {},
            getWindowPageOffset: function() {
              return { x: 0, y: 0 };
            },
            isSurfaceActive: function() {
              return !0;
            },
            isSurfaceDisabled: function() {
              return !0;
            },
            isUnbounded: function() {
              return !0;
            },
            registerDocumentInteractionHandler: function() {},
            registerInteractionHandler: function() {},
            registerResizeHandler: function() {},
            removeClass: function() {},
            updateCssVariable: function() {},
          };
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype.init = function() {
        var t = this,
          i = this.supportsPressRipple_();
        if ((this.registerRootHandlers_(i), i)) {
          var n = e.cssClasses,
            o = n.ROOT,
            a = n.UNBOUNDED;
          requestAnimationFrame(function() {
            t.adapter_.addClass(o),
              t.adapter_.isUnbounded() && (t.adapter_.addClass(a), t.layoutInternal_());
          });
        }
      }),
      (e.prototype.destroy = function() {
        var t = this;
        if (this.supportsPressRipple_()) {
          this.activationTimer_ &&
            (clearTimeout(this.activationTimer_),
            (this.activationTimer_ = 0),
            this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer_ &&
              (clearTimeout(this.fgDeactivationRemovalTimer_),
              (this.fgDeactivationRemovalTimer_ = 0),
              this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));
          var i = e.cssClasses,
            n = i.ROOT,
            o = i.UNBOUNDED;
          requestAnimationFrame(function() {
            t.adapter_.removeClass(n), t.adapter_.removeClass(o), t.removeCssVars_();
          });
        }
        this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_();
      }),
      (e.prototype.activate = function(t) {
        this.activate_(t);
      }),
      (e.prototype.deactivate = function() {
        this.deactivate_();
      }),
      (e.prototype.layout = function() {
        var t = this;
        this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
          (this.layoutFrame_ = requestAnimationFrame(function() {
            t.layoutInternal_(), (t.layoutFrame_ = 0);
          }));
      }),
      (e.prototype.setUnbounded = function(t) {
        var i = e.cssClasses.UNBOUNDED;
        t ? this.adapter_.addClass(i) : this.adapter_.removeClass(i);
      }),
      (e.prototype.handleFocus = function() {
        var t = this;
        requestAnimationFrame(function() {
          return t.adapter_.addClass(e.cssClasses.BG_FOCUSED);
        });
      }),
      (e.prototype.handleBlur = function() {
        var t = this;
        requestAnimationFrame(function() {
          return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED);
        });
      }),
      (e.prototype.supportsPressRipple_ = function() {
        return this.adapter_.browserSupportsCssVars();
      }),
      (e.prototype.defaultActivationState_ = function() {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: !1,
          isActivated: !1,
          isProgrammatic: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
        };
      }),
      (e.prototype.registerRootHandlers_ = function(t) {
        var e = this;
        t &&
          (gt.forEach(function(t) {
            e.adapter_.registerInteractionHandler(t, e.activateHandler_);
          }),
          this.adapter_.isUnbounded() && this.adapter_.registerResizeHandler(this.resizeHandler_)),
          this.adapter_.registerInteractionHandler('focus', this.focusHandler_),
          this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      }),
      (e.prototype.registerDeactivationHandlers_ = function(t) {
        var e = this;
        'keydown' === t.type
          ? this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_)
          : bt.forEach(function(t) {
              e.adapter_.registerDocumentInteractionHandler(t, e.deactivateHandler_);
            });
      }),
      (e.prototype.deregisterRootHandlers_ = function() {
        var t = this;
        gt.forEach(function(e) {
          t.adapter_.deregisterInteractionHandler(e, t.activateHandler_);
        }),
          this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_),
          this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_),
          this.adapter_.isUnbounded() && this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }),
      (e.prototype.deregisterDeactivationHandlers_ = function() {
        var t = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_),
          bt.forEach(function(e) {
            t.adapter_.deregisterDocumentInteractionHandler(e, t.deactivateHandler_);
          });
      }),
      (e.prototype.removeCssVars_ = function() {
        var t = this,
          i = e.strings;
        Object.keys(i).forEach(function(e) {
          0 === e.indexOf('VAR_') && t.adapter_.updateCssVariable(i[e], null);
        });
      }),
      (e.prototype.activate_ = function(t) {
        var e = this;
        if (!this.adapter_.isSurfaceDisabled()) {
          var i = this.activationState_;
          if (!i.isActivated) {
            var n = this.previousActivationEvent_;
            if (!(n && void 0 !== t && n.type !== t.type))
              (i.isActivated = !0),
                (i.isProgrammatic = void 0 === t),
                (i.activationEvent = t),
                (i.wasActivatedByPointer =
                  !i.isProgrammatic &&
                  void 0 !== t &&
                    ('mousedown' === t.type ||
                      'touchstart' === t.type ||
                      'pointerdown' === t.type)),
                void 0 !== t &&
                _t.length > 0 &&
                _t.some(function(t) {
                  return e.adapter_.containsEventTarget(t);
                })
                  ? this.resetActivationState_()
                  : (void 0 !== t && (_t.push(t.target), this.registerDeactivationHandlers_(t)),
                    (i.wasElementMadeActive = this.checkElementMadeActive_(t)),
                    i.wasElementMadeActive && this.animateActivation_(),
                    requestAnimationFrame(function() {
                      (_t = []),
                        i.wasElementMadeActive ||
                          void 0 === t ||
                          (' ' !== t.key && 32 !== t.keyCode) ||
                          ((i.wasElementMadeActive = e.checkElementMadeActive_(t)),
                          i.wasElementMadeActive && e.animateActivation_()),
                        i.wasElementMadeActive ||
                          (e.activationState_ = e.defaultActivationState_());
                    }));
          }
        }
      }),
      (e.prototype.checkElementMadeActive_ = function(t) {
        return void 0 === t || 'keydown' !== t.type || this.adapter_.isSurfaceActive();
      }),
      (e.prototype.animateActivation_ = function() {
        var t = this,
          i = e.strings,
          n = i.VAR_FG_TRANSLATE_START,
          o = i.VAR_FG_TRANSLATE_END,
          a = e.cssClasses,
          r = a.FG_DEACTIVATION,
          s = a.FG_ACTIVATION,
          d = e.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var c = '',
          l = '';
        if (!this.adapter_.isUnbounded()) {
          var p = this.getFgTranslationCoordinates_(),
            u = p.startPoint,
            h = p.endPoint;
          (c = u.x + 'px, ' + u.y + 'px'), (l = h.x + 'px, ' + h.y + 'px');
        }
        this.adapter_.updateCssVariable(n, c),
          this.adapter_.updateCssVariable(o, l),
          clearTimeout(this.activationTimer_),
          clearTimeout(this.fgDeactivationRemovalTimer_),
          this.rmBoundedActivationClasses_(),
          this.adapter_.removeClass(r),
          this.adapter_.computeBoundingRect(),
          this.adapter_.addClass(s),
          (this.activationTimer_ = setTimeout(function() {
            return t.activationTimerCallback_();
          }, d));
      }),
      (e.prototype.getFgTranslationCoordinates_ = function() {
        var t,
          e = this.activationState_,
          i = e.activationEvent;
        return {
          startPoint: (t = {
            x:
              (t = e.wasActivatedByPointer
                ? (function(t, e, i) {
                    if (!t) return { x: 0, y: 0 };
                    var n,
                      o,
                      a = e.x,
                      r = e.y,
                      s = a + i.left,
                      d = r + i.top;
                    if ('touchstart' === t.type) {
                      var c = t;
                      (n = c.changedTouches[0].pageX - s), (o = c.changedTouches[0].pageY - d);
                    } else {
                      var l = t;
                      (n = l.pageX - s), (o = l.pageY - d);
                    }
                    return { x: n, y: o };
                  })(i, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect())
                : { x: this.frame_.width / 2, y: this.frame_.height / 2 }).x -
              this.initialSize_ / 2,
            y: t.y - this.initialSize_ / 2,
          }),
          endPoint: {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2,
          },
        };
      }),
      (e.prototype.runDeactivationUXLogicIfReady_ = function() {
        var t = this,
          i = e.cssClasses.FG_DEACTIVATION,
          n = this.activationState_,
          o = n.hasDeactivationUXRun,
          a = n.isActivated;
        (o || !a) &&
          this.activationAnimationHasEnded_ &&
          (this.rmBoundedActivationClasses_(),
          this.adapter_.addClass(i),
          (this.fgDeactivationRemovalTimer_ = setTimeout(function() {
            t.adapter_.removeClass(i);
          }, ft.FG_DEACTIVATION_MS)));
      }),
      (e.prototype.rmBoundedActivationClasses_ = function() {
        var t = e.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(t),
          (this.activationAnimationHasEnded_ = !1),
          this.adapter_.computeBoundingRect();
      }),
      (e.prototype.resetActivationState_ = function() {
        var t = this;
        (this.previousActivationEvent_ = this.activationState_.activationEvent),
          (this.activationState_ = this.defaultActivationState_()),
          setTimeout(function() {
            return (t.previousActivationEvent_ = void 0);
          }, e.numbers.TAP_DELAY_MS);
      }),
      (e.prototype.deactivate_ = function() {
        var t = this,
          e = this.activationState_;
        if (e.isActivated) {
          var i = rt({}, e);
          e.isProgrammatic
            ? (requestAnimationFrame(function() {
                return t.animateDeactivation_(i);
              }),
              this.resetActivationState_())
            : (this.deregisterDeactivationHandlers_(),
              requestAnimationFrame(function() {
                (t.activationState_.hasDeactivationUXRun = !0),
                  t.animateDeactivation_(i),
                  t.resetActivationState_();
              }));
        }
      }),
      (e.prototype.animateDeactivation_ = function(t) {
        var e = t.wasActivatedByPointer,
          i = t.wasElementMadeActive;
        (e || i) && this.runDeactivationUXLogicIfReady_();
      }),
      (e.prototype.layoutInternal_ = function() {
        var t = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var i = Math.max(this.frame_.height, this.frame_.width);
        this.maxRadius_ = this.adapter_.isUnbounded()
          ? i
          : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) +
            e.numbers.PADDING;
        var n = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
        this.adapter_.isUnbounded() && n % 2 != 0
          ? (this.initialSize_ = n - 1)
          : (this.initialSize_ = n),
          (this.fgScale_ = '' + this.maxRadius_ / this.initialSize_),
          this.updateLayoutCssVars_();
      }),
      (e.prototype.updateLayoutCssVars_ = function() {
        var t = e.strings,
          i = t.VAR_FG_SIZE,
          n = t.VAR_LEFT,
          o = t.VAR_TOP,
          a = t.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(i, this.initialSize_ + 'px'),
          this.adapter_.updateCssVariable(a, this.fgScale_),
          this.adapter_.isUnbounded() &&
            ((this.unboundedCoords_ = {
              left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
              top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2),
            }),
            this.adapter_.updateCssVariable(n, this.unboundedCoords_.left + 'px'),
            this.adapter_.updateCssVariable(o, this.unboundedCoords_.top + 'px'));
      }),
      e
    );
  })(ut);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const yt = et`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}`,
  /**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ xt = (function(
    t,
    e,
  ) {
    void 0 === e && (e = !1);
    var i,
      n = t.CSS;
    if ('boolean' == typeof pt && !e) return pt;
    if (!(n && 'function' == typeof n.supports)) return !1;
    var o = n.supports('--css-vars', 'yes'),
      a = n.supports('(--css-vars: yes)') && n.supports('color', '#00000000');
    return (i = o || a), e || (pt = i), i;
  })(window),
  wt = navigator.userAgent.match(/Safari/);
let St = !1;
const Ct = t => {
  wt &&
    !St &&
    (() => {
      St = !0;
      const t = document.createElement('style'),
        e = new C({ templateFactory: R });
      e.appendInto(t), e.setValue(yt), e.commit(), document.head.appendChild(t);
    })();
  const e = t.surfaceNode,
    i = t.interactionNode || e;
  i.getRootNode() !== e.getRootNode() && '' === i.style.position && (i.style.position = 'relative');
  const n = new vt({
    browserSupportsCssVars: () => xt,
    isUnbounded: () => void 0 === t.unbounded || t.unbounded,
    isSurfaceActive: () => {
      return (
        (e = ':active'),
        ((t = i).matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
      );
      var t, e;
    },
    isSurfaceDisabled: () => Boolean(i.hasAttribute('disabled')),
    addClass: t => e.classList.add(t),
    removeClass: t => e.classList.remove(t),
    containsEventTarget: t => i.contains(t),
    registerInteractionHandler: (t, e) => i.addEventListener(t, e, lt()),
    deregisterInteractionHandler: (t, e) => i.removeEventListener(t, e, lt()),
    registerDocumentInteractionHandler: (t, e) =>
      document.documentElement.addEventListener(t, e, lt()),
    deregisterDocumentInteractionHandler: (t, e) =>
      document.documentElement.removeEventListener(t, e, lt()),
    registerResizeHandler: t => window.addEventListener('resize', t),
    deregisterResizeHandler: t => window.removeEventListener('resize', t),
    updateCssVariable: (t, i) => e.style.setProperty(t, i),
    computeBoundingRect: () => e.getBoundingClientRect(),
    getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
  });
  return n.init(), n;
};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class At {
  constructor(t) {
    (this.classes = new Set()), (this.changed = !1), (this.element = t);
    const e = (t.getAttribute('class') || '').split(/\s+/);
    for (const t of e) this.classes.add(t);
  }
  add(t) {
    this.classes.add(t), (this.changed = !0);
  }
  remove(t) {
    this.classes.delete(t), (this.changed = !0);
  }
  commit() {
    if (this.changed) {
      let t = '';
      this.classes.forEach(e => (t += e + ' ')), this.element.setAttribute('class', t);
    }
  }
}
const Tt = new WeakMap(),
  kt =
    ((Et = t => e => {
      if (
        !(e instanceof S) ||
        e instanceof k ||
        'class' !== e.committer.name ||
        e.committer.parts.length > 1
      )
        throw new Error(
          'The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.',
        );
      const { committer: i } = e,
        { element: n } = i;
      let o = Tt.get(e);
      void 0 === o && (n.setAttribute('class', i.strings.join(' ')), Tt.set(e, (o = new Set())));
      const a = n.classList || new At(n);
      o.forEach(e => {
        e in t || (a.remove(e), o.delete(e));
      });
      for (const e in t) {
        const i = t[e];
        i != o.has(e) && (i ? (a.add(e), o.add(e)) : (a.remove(e), o.delete(e)));
      }
      'function' == typeof a.commit && a.commit();
    }),
    (...t) => {
      const e = Et(...t);
      return h.set(e, !0), e;
    });
var Et;
class Pt extends nt {
  constructor() {
    super(...arguments),
      (this.raised = !1),
      (this.unelevated = !1),
      (this.outlined = !1),
      (this.dense = !1),
      (this.disabled = !1),
      (this.trailingIcon = !1),
      (this.fullwidth = !1),
      (this.icon = ''),
      (this.label = '');
  }
  createRenderRoot() {
    return this.attachShadow({ mode: 'open', delegatesFocus: !0 });
  }
  focus() {
    const t = this.buttonElement;
    if (t) {
      const e = t.ripple;
      e && e.handleFocus(), t.focus();
    }
  }
  blur() {
    const t = this.buttonElement;
    if (t) {
      const e = t.ripple;
      e && e.handleBlur(), t.blur();
    }
  }
  render() {
    const t = {
      'mdc-button--raised': this.raised,
      'mdc-button--unelevated': this.unelevated,
      'mdc-button--outlined': this.outlined,
      'mdc-button--dense': this.dense,
    };
    return D` <button id="button" class="mdc-button ${kt(t)}" ?disabled="${
      this.disabled
    }" aria-label="${this.label ||
      this
        .icon}"> <div class="mdc-button__ripple"></div> <span class="leading-icon"> <slot name="icon"> ${
      this.icon && !this.trailingIcon ? this.renderIcon(this.icon) : ''
    } </slot> </span> <span class="mdc-button__label">${
      this.label
    }</span> <slot></slot> <span class="trailing-icon"> <slot name="trailingIcon"> ${
      this.icon && this.trailingIcon ? this.renderIcon(this.icon) : ''
    } </slot> </span> </button>`;
  }
  renderIcon(t) {
    return D` <mwc-icon class="mdc-button__icon"> ${t} </mwc-icon>`;
  }
  firstUpdated() {
    this.buttonElement.ripple = Ct({ surfaceNode: this.buttonElement, unbounded: !1 });
  }
}
st([W({ type: Boolean })], Pt.prototype, 'raised', void 0),
  st([W({ type: Boolean })], Pt.prototype, 'unelevated', void 0),
  st([W({ type: Boolean })], Pt.prototype, 'outlined', void 0),
  st([W({ type: Boolean })], Pt.prototype, 'dense', void 0),
  st([W({ type: Boolean, reflect: !0 })], Pt.prototype, 'disabled', void 0),
  st([W({ type: Boolean })], Pt.prototype, 'trailingIcon', void 0),
  st([W({ type: Boolean, reflect: !0 })], Pt.prototype, 'fullwidth', void 0),
  st([W({ type: String })], Pt.prototype, 'icon', void 0),
  st([W({ type: String })], Pt.prototype, 'label', void 0),
  st([X('#button')], Pt.prototype, 'buttonElement', void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ot = et`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(.4,0,.2,1);background-color:#fff}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size,.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height,2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight,500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing,.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration,none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform,uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:0;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:0}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button{height:36px}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover,0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active,0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled,0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12))}:host{display:inline-flex;outline:0;vertical-align:top}:host([disabled]){pointer-events:none}:host([fullwidth]){width:100%}.mdc-button{flex:auto;overflow:hidden;padding:0 var(--mdc-button-horizontal-padding,8px) 0 var(--mdc-button-horizontal-padding,8px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding,16px) 0 var(--mdc-button-horizontal-padding,16px)}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding,16px) - var(--mdc-button-outline-width,1px)) 0 calc(var(--mdc-button-horizontal-padding,16px) - var(--mdc-button-outline-width,1px));border-width:var(--mdc-button-outline-width,1px);border-color:var(--mdc-button-outline-color,var(--mdc-theme-primary,#6200ee))}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}.mdc-button .mdc-button__ripple{border-radius:0}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color,rgba(0,0,0,.12));color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38));border-color:var(--mdc-button-disabled-outline-color,var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38)))}`;
let Rt = class extends Pt {};
(Rt.styles = Ot), (Rt = st([q('mwc-button')], Rt));
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Nt = et`.layout.horizontal,.layout.vertical{display:-ms-flexbox;display:-webkit-flex;display:flex}.layout.inline{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.layout.horizontal{-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.layout.vertical{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.layout.wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.layout.no-wrap{-ms-flex-wrap:nowrap;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.layout.center,.layout.center-center{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.layout.center-justified,.layout.center-center{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.flex{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px}.flex-auto{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto}.flex-none{-ms-flex:none;-webkit-flex:none;flex:none}`,
  It =
    (et`.layout.horizontal-reverse,.layout.vertical-reverse{display:-ms-flexbox;display:-webkit-flex;display:flex}.layout.horizontal-reverse{-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.layout.vertical-reverse{-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.layout.wrap-reverse{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}`,
    et`.layout.start{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.layout.center,.layout.center-center{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.layout.end{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}.layout.baseline{-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline}.layout.start-justified{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.layout.center-justified,.layout.center-center{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.layout.end-justified{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.layout.around-justified{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}.layout.justified{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.self-start{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start}.self-center{-ms-align-self:center;-webkit-align-self:center;align-self:center}.self-end{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end}.self-stretch{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch}.self-baseline{-ms-align-self:baseline;-webkit-align-self:baseline;align-self:baseline}.layout.start-aligned{-ms-flex-line-pack:start;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.layout.end-aligned{-ms-flex-line-pack:end;-ms-align-content:flex-end;-webkit-align-content:flex-end;align-content:flex-end}.layout.center-aligned{-ms-flex-line-pack:center;-ms-align-content:center;-webkit-align-content:center;align-content:center}.layout.between-aligned{-ms-flex-line-pack:justify;-ms-align-content:space-between;-webkit-align-content:space-between;align-content:space-between}.layout.around-aligned{-ms-flex-line-pack:distribute;-ms-align-content:space-around;-webkit-align-content:space-around;align-content:space-around}`);
et`.flex,.flex-1{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px}.flex-2{-ms-flex:2;-webkit-flex:2;flex:2}.flex-3{-ms-flex:3;-webkit-flex:3;flex:3}.flex-4{-ms-flex:4;-webkit-flex:4;flex:4}.flex-5{-ms-flex:5;-webkit-flex:5;flex:5}.flex-6{-ms-flex:6;-webkit-flex:6;flex:6}.flex-7{-ms-flex:7;-webkit-flex:7;flex:7}.flex-8{-ms-flex:8;-webkit-flex:8;flex:8}.flex-9{-ms-flex:9;-webkit-flex:9;flex:9}.flex-10{-ms-flex:10;-webkit-flex:10;flex:10}.flex-11{-ms-flex:11;-webkit-flex:11;flex:11}.flex-12{-ms-flex:12;-webkit-flex:12;flex:12}`,
  et`.block{display:block}[hidden]{display:none!important}.invisible{visibility:hidden!important}.relative{position:relative}.fit{position:absolute;top:0;right:0;bottom:0;left:0}body.fullbleed{margin:0;height:100vh}.scroll{-webkit-overflow-scrolling:touch;overflow:auto}.fixed-bottom,.fixed-left,.fixed-right,.fixed-top{position:fixed}.fixed-top{top:0;left:0;right:0}.fixed-right{top:0;right:0;bottom:0}.fixed-bottom{right:0;bottom:0;left:0}.fixed-left{top:0;bottom:0;left:0}`;
customElements.define(
  'covid-sc-data-card',
  class extends nt {
    constructor() {
      super(), (this.title = ''), (this.value = ''), (this.delta = '');
    }
    static get properties() {
      return { title: { type: String }, value: { type: String }, delta: { type: String } };
    }
    static get styles() {
      return [
        Nt,
        It,
        et`:host([ghost]){height:0}:host([ghost]) > .content{display:none}:host{border-radius:4px;background-color:#f0f0f0;overflow:hidden}.title{height:32px;line-height:32px;background-color:#d8d8d8}.value{color:#393939}.delta{color:#8c8c8c}`,
      ];
    }
    render() {
      return D` <div class="layout vertical flex content" style="height: 100%;"> <div class="layout vertical flex"> <div class="title">${this.title}</div> <div class="layout vertical flex center-justified"> <div class="value">${this.value}</div> <div class="delta">${this.delta}</div> </div> </div> </div> `;
    }
    firstUpdated() {}
  },
);
customElements.define(
  'covid-sc-page-home',
  class extends nt {
    constructor() {
      super(), (this.countyList = []), (this.map = {}), (this.hotspots = {});
    }
    static get properties() {
      return { title: { type: String }, page: { type: String } };
    }
    static get styles() {
      return [
        Nt,
        It,
        et`:host{}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}.module-content{margin:4px 8px 4px 8px}.module-footer{height:24px;font-family:Roboto;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;color:#393939;margin:0 8px 4px 8px}.action-button{}.action-button{margin:8px;width:100%;min-width:288px}.min-margin > covid-sc-data-card:nth-of-type(1){margin-right:8px}.min-margin > covid-sc-data-card:nth-of-type(2){margin-left:8px}.min-margin{min-width:288px}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}.buttonlink{text-decoration:none}mwc-button{--mdc-theme-primary:#e9437a;--mdc-theme-on-primary:white}.data-table{border-radius:4px;overflow:hidden}.data-table-row{height:48px;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.data-table-row > div{flex:1;text-align:left}.data-table-row > div:nth-of-type(1){margin-left:10px}.data-table > div:nth-of-type(even){background-color:#d8d8d8}.data-table > div:nth-of-type(odd){background-color:#f0f0f0}.footer{width:100%;height:41px;background-color:#393939;font-family:Roboto;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#d8d8d8}.footer > div > a{color:#fff}@media only screen and (min-width : 628px){.action-button{}.action-button{margin:8px;min-width:288px;flex-grow:1}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}}`,
      ];
    }
    render() {
      return D` <div class="layout vertical module-container"> <div class="module-title"> Get Help </div> <div class="layout horizontal center-justified wrap"> <a href="https://covidnearyou.org/" target="_blank" class="layout flex action-button buttonlink"><mwc-button alt="Get help" unelevated label="CHECK SYMPTOMS" style="width: inherit;"></mwc-button></a> <a href="https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19" target="_blank" class="layout flex action-button buttonlink"><mwc-button alt="Get help" unelevated label="FIND RESOURCES" style="width: inherit;"></mwc-button></a> </div> </div> <div class="layout vertical module-container"> <div class="module-title"> Confirmed Cases/Deaths </div> <div class="layout horizontal center-justified wrap"> <div class="layout horizontal flex action-button min-margin" style="max-width:392px;"> <covid-sc-data-card title="SC Cases" value="${
        this.counts && this.counts.state && this.counts.state.confirmed
          ? this.counts.state.confirmed
          : ''
      }" delta="${
        this.counts && this.counts.state && this.counts.state.confirmedChanged
          ? this.counts.state.confirmedChanged
          : ''
      }"></covid-sc-data-card> <covid-sc-data-card title="SC Deaths" value="${
        this.counts && this.counts.state && this.counts.state.deaths ? this.counts.state.deaths : ''
      }" delta="${
        this.counts && this.counts.state && this.counts.state.deathsChanged
          ? this.counts.state.deathsChanged
          : ''
      }"></covid-sc-data-card> </div> <div class="layout horizontal flex action-button min-margin" style="max-width:392px;"> <covid-sc-data-card title="USA Cases" value="${
        this.counts && this.counts.national && this.counts.national.confirmed
          ? this.counts.national.confirmed
          : ''
      }" delta="${
        this.counts && this.counts.national && this.counts.national.confirmedChanged
          ? this.counts.national.confirmedChanged
          : ''
      }"></covid-sc-data-card> <covid-sc-data-card title="USA Deaths" value="${
        this.counts && this.counts.national && this.counts.national.deaths
          ? this.counts.national.deaths
          : ''
      }" delta="${
        this.counts && this.counts.national && this.counts.national.deathsChanged
          ? this.counts.national.deathsChanged
          : ''
      }"></covid-sc-data-card> </div> </div> <div class="module-footer"> ${
        this.counts && this.counts.national && this.counts.national.lastUpdate
          ? `Updated ${this.counts.national.lastUpdate}`
          : ''
      } </div> </div> <div class="layout vertical module-container"> <div class="module-title"> Confirmed Cases/Deaths By Region </div> <covid-sc-map .map="${
        this.map
      }" .hotspots="${
        this.hotspots
      }" class="module-content" style="height:400px; box-sizing:border-box; width: calc(100%-8px);"></covid-sc-map> <div class="module-footer"> ${
        this.counts && this.counts.national && this.counts.national.lastUpdate
          ? `Updated ${this.counts.national.lastUpdate}`
          : ''
      } </div> </div> <div class="layout vertical module-container"> <div class="module-title"> Confirmed Cases/Deaths By Region </div> <div class="layout vertical data-table module-content"> <div class="layout horizontal center data-table-row"> <div><b>County</b></div> <div class="layout horizontal center data-table-row"> <div><b>Growth Rate</b></div> <div><b>Change</b></div> </div> </div> ${this.countyList.map(
        t =>
          D` <div class="layout horizontal center data-table-row"> <div>${t.County}:</div> <div class="layout horizontal center data-table-row"> <div>${t.Confirmed_POPADJ_GF}</div> <div>(${t.Confirmed_POPADJ_GF_Change})</div> </div> </div> `,
      )} </div> <div class="module-footer"> ${
        this.counts && this.counts.national && this.counts.national.lastUpdate
          ? `Updated ${this.counts.national.lastUpdate}`
          : ''
      } </div> </div> <div class="footer layout vertical center-justified"> <div> Powered by <a href="https://www.hank.ai/" class="buttonlink">Hank.ai</a> and <a href="https://www.krum.io/" class="buttonlink">Krumware</a> </div> </div> `;
    }
    firstUpdated() {
      this.getData(), (this.counts = {});
    }
    getData() {
      const t = ['SC', 'NC', 'GA'],
        e = {},
        i = {},
        n = new Date();
      n.setDate(n.getDate() - 1);
      const o = 'https://covidsc.com/data/covid_latest.json?v=6';
      function a(t, e = 0) {
        return t.toLocaleString(void 0, { maximumFractionDigits: e });
      }
      console.log(`loading json file ${o}`),
        fetch(o)
          .then(t => t.json())
          .then(n => {
            let o = [];
            n.forEach(n => {
              (n.LastUpdate = n.LastUpdate.replace(' ', 'T')),
                'USA' === n.Country &&
                  t.includes(n.State) &&
                  'ALL' !== n.County &&
                  (o.push({
                    State: n.State,
                    County: n.County,
                    Confirmed_POPADJ_GF: n.Confirmed_POPADJ_GF,
                    Confirmed_POPADJ_GF_Change: n.Confirmed_POPADJ_GF_Change,
                  }),
                  n.Confirmed > 0 &&
                    (e[n.County] = {
                      center: { lat: n.Lat, lng: n.Long },
                      population: 500 * n.Confirmed,
                      header: `${n.County}, ${n.State} Confirmed Cases`,
                      content: `${n.Confirmed} confirmed cases (+${n.Confirmed_Change} since yesterday)`,
                      color: '#FF0000',
                      strokeOpacity: 0.8,
                    }),
                  n.Deaths > 0 &&
                    (i[n.County] = {
                      center: { lat: n.Lat, lng: n.Long },
                      population: 700 * n.Deaths,
                      header: `${n.County}, SC Deaths`,
                      content: `${n.Deaths} deaths (+${n.Deaths_Change} since yesterday)`,
                      color: '#0000FF',
                      strokeOpacity: 0.8,
                    })),
                'USA' === n.Country &&
                  'SC' === n.State &&
                  'ALL' === n.County &&
                  ((this.counts.state = {
                    confirmed: a(n.Confirmed),
                    deaths: a(n.Deaths),
                    confirmedChanged: a(n.Confirmed_Change),
                    deathsChanged: a(n.Deaths_Change),
                  }),
                  n.Confirmed_Change > 0 &&
                    (this.counts.state.confirmedChanged = `+${this.counts.state.confirmedChanged}`),
                  n.Deaths_Change > 0 &&
                    (this.counts.state.deathsChanged = `+${this.counts.state.deathsChanged}`),
                  (this.counts.state.lastUpdate = new Date(n.LastUpdate).toLocaleDateString()),
                  console.log('State Counts', this.counts.state)),
                'USA' === n.Country &&
                  'ALL' === n.State &&
                  ((this.counts.national = {
                    confirmed: a(n.Confirmed),
                    deaths: a(n.Deaths),
                    confirmedChanged: a(n.Confirmed_Change),
                    deathsChanged: a(n.Deaths_Change),
                  }),
                  n.Confirmed_Change > 0 &&
                    (this.counts.national.confirmedChanged = `+${this.counts.national.confirmedChanged}`),
                  n.Deaths_Change > 0 &&
                    (this.counts.national.deathsChanged = `+${this.counts.national.deathsChanged}`),
                  (this.counts.national.lastUpdate = new Date(n.LastUpdate).toLocaleDateString()),
                  console.log('National Counts', this.counts.national));
            }),
              (o = o.sort((t, e) => e.Confirmed_POPADJ_GF - t.Confirmed_POPADJ_GF));
            for (let t = 0; t < o.length; t++) {
              const e = o[t];
              e.Confirmed_POPADJ_GF > 10 &&
                ((e.County += ' County'),
                (e.Confirmed_POPADJ_GF = e.Confirmed_POPADJ_GF.toFixed(2)),
                (e.Confirmed_POPADJ_GF_Change = e.Confirmed_POPADJ_GF_Change.toFixed(2)),
                e.Confirmed_POPADJ_GF_Change >= 0 &&
                  (e.Confirmed_POPADJ_GF_Change = `+${e.Confirmed_POPADJ_GF_Change}`),
                (this.countyList = [...this.countyList, e]));
            }
            (this.hotspots = { confirmedCircles: e, deathCircles: i }), this.requestUpdate();
          });
    }
  },
);
customElements.define(
  'covid-sc-page-symptoms',
  class extends nt {
    constructor() {
      super();
    }
    static get properties() {
      return { title: { type: String }, page: { type: String } };
    }
    static get styles() {
      return [
        Nt,
        It,
        et`:host{}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.action-button{width:200px}.action-button{margin:8px;min-width:288px;flex-grow:1}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}.buttonlink{text-decoration:none}`,
      ];
    }
    render() {
      return D` <div class="layout vertical module-container"> chat <a href="/">return to home</a> </div> `;
    }
    firstUpdated() {}
  },
);
customElements.define(
  'covid-sc-page-resources',
  class extends nt {
    constructor() {
      super();
    }
    static get properties() {
      return { title: { type: String }, page: { type: String } };
    }
    static get styles() {
      return [
        Nt,
        It,
        et`:host{}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.action-button{width:200px}.action-button{margin:8px;min-width:288px;flex-grow:1}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}.buttonlink{text-decoration:none}`,
      ];
    }
    render() {
      return D` <div class="layout vertical module-container"> resources <a href="/">return to home</a> </div> `;
    }
    firstUpdated() {}
  },
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var zt = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  },
  Dt = { DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100, MAX_TOP_APP_BAR_HEIGHT: 128 },
  Lt = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title',
  },
  Ut = (function(t) {
    function e(i) {
      return t.call(this, rt({}, e.defaultAdapter, i)) || this;
    }
    return (
      at(e, t),
      Object.defineProperty(e, 'strings', {
        get: function() {
          return Lt;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e, 'cssClasses', {
        get: function() {
          return zt;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e, 'numbers', {
        get: function() {
          return Dt;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e, 'defaultAdapter', {
        get: function() {
          return {
            addClass: function() {},
            removeClass: function() {},
            hasClass: function() {
              return !1;
            },
            setStyle: function() {},
            getTopAppBarHeight: function() {
              return 0;
            },
            notifyNavigationIconClicked: function() {},
            getViewportScrollY: function() {
              return 0;
            },
            getTotalActionItems: function() {
              return 0;
            },
          };
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype.handleTargetScroll = function() {}),
      (e.prototype.handleWindowResize = function() {}),
      (e.prototype.handleNavigationClick = function() {
        this.adapter_.notifyNavigationIconClicked();
      }),
      e
    );
  })(ut),
  Ft = (function(t) {
    function e(e) {
      var i = t.call(this, e) || this;
      return (
        (i.wasDocked_ = !0),
        (i.isDockedShowing_ = !0),
        (i.currentAppBarOffsetTop_ = 0),
        (i.isCurrentlyBeingResized_ = !1),
        (i.resizeThrottleId_ = 0),
        (i.resizeDebounceId_ = 0),
        (i.lastScrollPosition_ = i.adapter_.getViewportScrollY()),
        (i.topAppBarHeight_ = i.adapter_.getTopAppBarHeight()),
        i
      );
    }
    return (
      at(e, t),
      (e.prototype.destroy = function() {
        t.prototype.destroy.call(this), this.adapter_.setStyle('top', '');
      }),
      (e.prototype.handleTargetScroll = function() {
        var t = Math.max(this.adapter_.getViewportScrollY(), 0),
          e = t - this.lastScrollPosition_;
        (this.lastScrollPosition_ = t),
          this.isCurrentlyBeingResized_ ||
            ((this.currentAppBarOffsetTop_ -= e),
            this.currentAppBarOffsetTop_ > 0
              ? (this.currentAppBarOffsetTop_ = 0)
              : Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_ &&
                (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_),
            this.moveTopAppBar_());
      }),
      (e.prototype.handleWindowResize = function() {
        var t = this;
        this.resizeThrottleId_ ||
          (this.resizeThrottleId_ = setTimeout(function() {
            (t.resizeThrottleId_ = 0), t.throttledResizeHandler_();
          }, Dt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),
          (this.isCurrentlyBeingResized_ = !0),
          this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_),
          (this.resizeDebounceId_ = setTimeout(function() {
            t.handleTargetScroll(), (t.isCurrentlyBeingResized_ = !1), (t.resizeDebounceId_ = 0);
          }, Dt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS));
      }),
      (e.prototype.checkForUpdate_ = function() {
        var t = -this.topAppBarHeight_,
          e = this.currentAppBarOffsetTop_ < 0,
          i = this.currentAppBarOffsetTop_ > t,
          n = e && i;
        if (n) this.wasDocked_ = !1;
        else {
          if (!this.wasDocked_) return (this.wasDocked_ = !0), !0;
          if (this.isDockedShowing_ !== i) return (this.isDockedShowing_ = i), !0;
        }
        return n;
      }),
      (e.prototype.moveTopAppBar_ = function() {
        if (this.checkForUpdate_()) {
          var t = this.currentAppBarOffsetTop_;
          Math.abs(t) >= this.topAppBarHeight_ && (t = -Dt.MAX_TOP_APP_BAR_HEIGHT),
            this.adapter_.setStyle('top', t + 'px');
        }
      }),
      (e.prototype.throttledResizeHandler_ = function() {
        var t = this.adapter_.getTopAppBarHeight();
        this.topAppBarHeight_ !== t &&
          ((this.wasDocked_ = !1),
          (this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - t),
          (this.topAppBarHeight_ = t)),
          this.handleTargetScroll();
      }),
      e
    );
  })(Ut);
let Ht = !1;
const Vt = () => {},
  jt = {
    get passive() {
      return (Ht = !0), !1;
    },
  };
document.addEventListener('x', Vt, jt), document.removeEventListener('x', Vt);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Bt extends nt {
  createFoundation() {
    void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
      this.mdcFoundationClass &&
        ((this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter())),
        this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
const Mt = Ht ? { passive: !0 } : void 0;
class $t extends Bt {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Ut),
      (this.centerTitle = !1),
      (this.handleTargetScroll = () => {
        this.mdcFoundation.handleTargetScroll();
      }),
      (this.handleNavigationClick = () => {
        this.mdcFoundation.handleNavigationClick();
      });
  }
  get scrollTarget() {
    return this._scrollTarget || window;
  }
  set scrollTarget(t) {
    this.unregisterScrollListener();
    const e = this.scrollTarget;
    (this._scrollTarget = t),
      this.updateRootPosition(),
      this.requestUpdate('scrollTarget', e),
      this.registerScrollListener();
  }
  updateRootPosition() {
    if (this.mdcRoot) {
      const t = this.scrollTarget === window;
      this.mdcRoot.style.position = t ? '' : 'absolute';
    }
  }
  render() {
    let t = D`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;
    return (
      this.centerTitle &&
        (t = D`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${t}</section>`),
      D` <header class="mdc-top-app-bar ${kt(
        this.barClasses(),
      )}"> <div class="mdc-top-app-bar__row"> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation"> <slot name="navigationIcon" @click="${
        this.handleNavigationClick
      }"></slot> ${this.centerTitle ? null : t} </section> ${
        this.centerTitle ? t : null
      } <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar"> <slot name="actionItems"></slot> </section> </div> </header> <div class="${kt(
        this.contentClasses(),
      )}"> <slot></slot> </div> `
    );
  }
  createAdapter() {
    return Object.assign(
      Object.assign(
        {},
        ((t = this.mdcRoot),
        {
          addClass: e => {
            t.classList.add(e);
          },
          removeClass: e => {
            t.classList.remove(e);
          },
          hasClass: e => t.classList.contains(e),
        }),
      ),
      {
        setStyle: (t, e) => this.mdcRoot.style.setProperty(t, e),
        getTopAppBarHeight: () => this.mdcRoot.clientHeight,
        notifyNavigationIconClicked: () => {
          this.dispatchEvent(new Event(Lt.NAVIGATION_EVENT, { bubbles: !0, cancelable: !0 }));
        },
        getViewportScrollY: () =>
          this.scrollTarget instanceof Window
            ? this.scrollTarget.pageYOffset
            : this.scrollTarget.scrollTop,
        getTotalActionItems: () => this._actionItemsSlot.assignedNodes({ flatten: !0 }).length,
      },
    );
    /**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
    var t;
  }
  registerListeners() {
    this.registerScrollListener();
  }
  unregisterListeners() {
    this.unregisterScrollListener();
  }
  registerScrollListener() {
    this.scrollTarget.addEventListener('scroll', this.handleTargetScroll, Mt);
  }
  unregisterScrollListener() {
    this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
  }
  firstUpdated() {
    super.firstUpdated(), this.updateRootPosition(), this.registerListeners();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.unregisterListeners();
  }
}
st([X('.mdc-top-app-bar')], $t.prototype, 'mdcRoot', void 0),
  st([X('slot[name="actionItems"]')], $t.prototype, '_actionItemsSlot', void 0),
  st([W({ type: Boolean })], $t.prototype, 'centerTitle', void 0),
  st([W()], $t.prototype, 'scrollTarget', null);
class Gt extends $t {
  constructor() {
    super(...arguments),
      (this.mdcFoundationClass = Ft),
      (this.prominent = !1),
      (this.dense = !1),
      (this.handleResize = () => {
        this.mdcFoundation.handleWindowResize();
      });
  }
  barClasses() {
    return {
      'mdc-top-app-bar--dense': this.dense,
      'mdc-top-app-bar--prominent': this.prominent,
      'center-title': this.centerTitle,
    };
  }
  contentClasses() {
    return {
      'mdc-top-app-bar--fixed-adjust': !this.dense && !this.prominent,
      'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.prominent,
      'mdc-top-app-bar--prominent-fixed-adjust': !this.dense && this.prominent,
      'mdc-top-app-bar--dense-prominent-fixed-adjust': this.dense && this.prominent,
    };
  }
  registerListeners() {
    super.registerListeners(), window.addEventListener('resize', this.handleResize, Mt);
  }
  unregisterListeners() {
    super.unregisterListeners(), window.removeEventListener('resize', this.handleResize);
  }
}
st([W({ type: Boolean, reflect: !0 })], Gt.prototype, 'prominent', void 0),
  st([W({ type: Boolean, reflect: !0 })], Gt.prototype, 'dense', void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const qt = et`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size,1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height,2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight,500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing,.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform,inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(.4,0,.2,1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity:0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow,0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12))}`;
let Jt = class extends Gt {};
(Jt.styles = qt), (Jt = st([q('mwc-top-app-bar')], Jt));
class Wt extends nt {
  constructor() {
    var t;
    super(),
      (t = t => this.handleNavigation(t)),
      document.body.addEventListener('click', e => {
        if (e.defaultPrevented || 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
        const i = e.composedPath().filter(t => 'A' === t.tagName)[0];
        if (!i || i.target || i.hasAttribute('download') || 'external' === i.getAttribute('rel'))
          return;
        const n = i.href;
        if (!n || -1 !== n.indexOf('mailto:')) return;
        const o = window.location,
          a = o.origin || o.protocol + '//' + o.host;
        0 === n.indexOf(a) &&
          (e.preventDefault(), n !== o.href && (window.history.pushState({}, '', n), t(o, e)));
      }),
      window.addEventListener('popstate', e => t(window.location, e)),
      t(window.location, null),
      (this.location = '/');
  }
  static get properties() {
    return { title: { type: String }, page: { type: String } };
  }
  static get styles() {
    return [
      Nt,
      It,
      et`:host{min-height:100vh;font-size:calc(10px + 2vmin);color:#1a2b42;margin:0 auto;text-align:center;--mdc-theme-primary:#0b4192e0;--mdc-theme-on-primary:white}main{margin-left:auto;margin-right:auto;flex-grow:1;align-items:center;max-width:816px}.logo > svg{margin-top:36px;animation:app-logo-spin infinite 20s linear}@keyframes app-logo-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.action-button{margin:8px;width:288px}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}`,
    ];
  }
  render() {
    return D` <mwc-top-app-bar dense> <div slot="title">COVID SC</div> <div></div> </mwc-top-app-bar> <main> ${this.page} </main> `;
  }
  renderPage(t) {
    switch (t.pathname) {
      case '/symptoms':
        return D`<covid-sc-page-symptoms></covid-sc-page-symptoms>`;
      case '/resources':
        return D`<covid-sc-page-resources></covid-sc-page-resources>`;
      default:
        return D`<covid-sc-page-home></covid-sc-page-home>`;
    }
  }
  firstUpdated() {}
  handleNavigation(t) {
    (this.location = t), (this.page = this.renderPage(t));
  }
}
customElements.define('covid-sc-app', Wt);
export { Wt as CovidScApp };
//# sourceMappingURL=covid-sc-app-4ca6a917.js.map
