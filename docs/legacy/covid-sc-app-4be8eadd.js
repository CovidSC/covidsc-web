System.register([], function(t) {
  'use strict';
  return {
    execute: function() {
      function e(t) {
        return (e =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function n(t, e, n, i, r, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, r);
      }
      function i(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function o(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t;
      }
      function a(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && c(t, e);
      }
      function s(t) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function l(t, e, n) {
        return (l = d()
          ? Reflect.construct
          : function(t, e, n) {
              var i = [null];
              i.push.apply(i, e);
              var r = new (Function.bind.apply(t, i))();
              return n && c(r, n.prototype), r;
            }).apply(null, arguments);
      }
      function p(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (p = function(t) {
          if (
            null === t ||
            !(function(t) {
              return -1 !== Function.toString.call(t).indexOf('[native code]');
            })(t)
          )
            return t;
          if ('function' != typeof t)
            throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return l(t, arguments, s(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
            })),
            c(n, t)
          );
        })(t);
      }
      function u(t, e) {
        return !e || ('object' != typeof e && 'function' != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : e;
      }
      function f(t) {
        return function() {
          var e,
            n = s(t);
          if (d()) {
            var i = s(this).constructor;
            e = Reflect.construct(n, arguments, i);
          } else e = n.apply(this, arguments);
          return u(this, e);
        };
      }
      function h(t, e, n) {
        return (h =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var i = (function(t, e) {
                  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)); );
                  return t;
                })(t, e);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, e);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(t, e, n || t);
      }
      function m(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
        );
      }
      function v(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) return b(t);
          })(t) ||
          (function(t) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
          })(t) ||
          g(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function g(t, e) {
        if (t) {
          if ('string' == typeof t) return b(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(n)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? b(t, e)
              : void 0
          );
        }
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function _(t) {
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (t = g(t))) {
            var e = 0,
              n = function() {};
            return {
              s: n,
              n: function() {
                return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
              },
              e: function(t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          r,
          o = !0,
          a = !1;
        return {
          s: function() {
            i = t[Symbol.iterator]();
          },
          n: function() {
            var t = i.next();
            return (o = t.done), t;
          },
          e: function(t) {
            (a = !0), (r = t);
          },
          f: function() {
            try {
              o || null == i.return || i.return();
            } finally {
              if (a) throw r;
            }
          },
        };
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
       */ var y =
          'undefined' != typeof window &&
          null != window.customElements &&
          void 0 !== window.customElements.polyfillWrapFlushCallback,
        x = function(t, e) {
          for (
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            e !== n;

          ) {
            var i = e.nextSibling;
            t.removeChild(e), (e = i);
          }
        },
        w = '{{lit-'.concat(String(Math.random()).slice(2), '}}'),
        k = '\x3c!--'.concat(w, '--\x3e'),
        S = new RegExp(''.concat(w, '|').concat(k)),
        C = function t(e, n) {
          i(this, t), (this.parts = []), (this.element = n);
          for (
            var r = [],
              o = [],
              a = document.createTreeWalker(n.content, 133, null, !1),
              s = 0,
              c = -1,
              d = 0,
              l = e.strings,
              p = e.values.length;
            d < p;

          ) {
            var u = a.nextNode();
            if (null !== u) {
              if ((c++, 1 === u.nodeType)) {
                if (u.hasAttributes()) {
                  for (var f = u.attributes, h = f.length, m = 0, v = 0; v < h; v++)
                    A(f[v].name, '$lit$') && m++;
                  for (; m-- > 0; ) {
                    var g = l[d],
                      b = P.exec(g)[2],
                      _ = b.toLowerCase() + '$lit$',
                      y = u.getAttribute(_);
                    u.removeAttribute(_);
                    var x = y.split(S);
                    this.parts.push({ type: 'attribute', index: c, name: b, strings: x }),
                      (d += x.length - 1);
                  }
                }
                'TEMPLATE' === u.tagName && (o.push(u), (a.currentNode = u.content));
              } else if (3 === u.nodeType) {
                var k = u.data;
                if (k.indexOf(w) >= 0) {
                  for (var C = u.parentNode, T = k.split(S), O = T.length - 1, R = 0; R < O; R++) {
                    var I = void 0,
                      N = T[R];
                    if ('' === N) I = E();
                    else {
                      var D = P.exec(N);
                      null !== D &&
                        A(D[2], '$lit$') &&
                        (N = N.slice(0, D.index) + D[1] + D[2].slice(0, -'$lit$'.length) + D[3]),
                        (I = document.createTextNode(N));
                    }
                    C.insertBefore(I, u), this.parts.push({ type: 'node', index: ++c });
                  }
                  '' === T[O] ? (C.insertBefore(E(), u), r.push(u)) : (u.data = T[O]), (d += O);
                }
              } else if (8 === u.nodeType)
                if (u.data === w) {
                  var z = u.parentNode;
                  (null !== u.previousSibling && c !== s) || (c++, z.insertBefore(E(), u)),
                    (s = c),
                    this.parts.push({ type: 'node', index: c }),
                    null === u.nextSibling ? (u.data = '') : (r.push(u), c--),
                    d++;
                } else
                  for (var L = -1; -1 !== (L = u.data.indexOf(w, L + 1)); )
                    this.parts.push({ type: 'node', index: -1 }), d++;
            } else a.currentNode = o.pop();
          }
          for (var j = 0, U = r; j < U.length; j++) {
            var F = U[j];
            F.parentNode.removeChild(F);
          }
        },
        A = function(t, e) {
          var n = t.length - e.length;
          return n >= 0 && t.slice(n) === e;
        },
        T = function(t) {
          return -1 !== t.index;
        },
        E = function() {
          return document.createComment('');
        },
        P = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
      function O(t, e) {
        for (
          var n = t.element.content,
            i = t.parts,
            r = document.createTreeWalker(n, 133, null, !1),
            o = I(i),
            a = i[o],
            s = -1,
            c = 0,
            d = [],
            l = null;
          r.nextNode();

        ) {
          s++;
          var p = r.currentNode;
          for (
            p.previousSibling === l && (l = null),
              e.has(p) && (d.push(p), null === l && (l = p)),
              null !== l && c++;
            void 0 !== a && a.index === s;

          )
            (a.index = null !== l ? -1 : a.index - c), (a = i[(o = I(i, o))]);
        }
        d.forEach(function(t) {
          return t.parentNode.removeChild(t);
        });
      }
      var R = function(t) {
          for (
            var e = 11 === t.nodeType ? 0 : 1, n = document.createTreeWalker(t, 133, null, !1);
            n.nextNode();

          )
            e++;
          return e;
        },
        I = function(t) {
          for (
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, n = e + 1;
            n < t.length;
            n++
          ) {
            var i = t[n];
            if (T(i)) return n;
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
      var N = new WeakMap(),
        D = function(t) {
          return 'function' == typeof t && N.has(t);
        },
        z = {},
        L = {},
        j = (function() {
          function t(e, n, r) {
            i(this, t),
              (this.__parts = []),
              (this.template = e),
              (this.processor = n),
              (this.options = r);
          }
          return (
            o(t, [
              {
                key: 'update',
                value: function(t) {
                  var e,
                    n = 0,
                    i = _(this.__parts);
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      var r = e.value;
                      void 0 !== r && r.setValue(t[n]), n++;
                    }
                  } catch (t) {
                    i.e(t);
                  } finally {
                    i.f();
                  }
                  var o,
                    a = _(this.__parts);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var s = o.value;
                      void 0 !== s && s.commit();
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                },
              },
              {
                key: '_clone',
                value: function() {
                  for (
                    var t,
                      e = y
                        ? this.template.element.content.cloneNode(!0)
                        : document.importNode(this.template.element.content, !0),
                      n = [],
                      i = this.template.parts,
                      r = document.createTreeWalker(e, 133, null, !1),
                      o = 0,
                      a = 0,
                      s = r.nextNode();
                    o < i.length;

                  )
                    if (((t = i[o]), T(t))) {
                      for (; a < t.index; )
                        a++,
                          'TEMPLATE' === s.nodeName && (n.push(s), (r.currentNode = s.content)),
                          null === (s = r.nextNode()) &&
                            ((r.currentNode = n.pop()), (s = r.nextNode()));
                      if ('node' === t.type) {
                        var c = this.processor.handleTextExpression(this.options);
                        c.insertAfterNode(s.previousSibling), this.__parts.push(c);
                      } else {
                        var d;
                        (d = this.__parts).push.apply(
                          d,
                          v(
                            this.processor.handleAttributeExpressions(
                              s,
                              t.name,
                              t.strings,
                              this.options,
                            ),
                          ),
                        );
                      }
                      o++;
                    } else this.__parts.push(void 0), o++;
                  return y && (document.adoptNode(e), customElements.upgrade(e)), e;
                },
              },
            ]),
            t
          );
        })(),
        U = ' '.concat(w, ' '),
        F = (function() {
          function t(e, n, r, o) {
            i(this, t),
              (this.strings = e),
              (this.values = n),
              (this.type = r),
              (this.processor = o);
          }
          return (
            o(t, [
              {
                key: 'getHTML',
                value: function() {
                  for (var t = this.strings.length - 1, e = '', n = !1, i = 0; i < t; i++) {
                    var r = this.strings[i],
                      o = r.lastIndexOf('\x3c!--');
                    n = (o > -1 || n) && -1 === r.indexOf('--\x3e', o + 1);
                    var a = P.exec(r);
                    e +=
                      null === a
                        ? r + (n ? U : k)
                        : r.substr(0, a.index) + a[1] + a[2] + '$lit$' + a[3] + w;
                  }
                  return (e += this.strings[t]);
                },
              },
              {
                key: 'getTemplateElement',
                value: function() {
                  var t = document.createElement('template');
                  return (t.innerHTML = this.getHTML()), t;
                },
              },
            ]),
            t
          );
        })(),
        H = function(t) {
          return null === t || !('object' === e(t) || 'function' == typeof t);
        },
        V = function(t) {
          return Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        },
        B = (function() {
          function t(e, n, r) {
            i(this, t),
              (this.dirty = !0),
              (this.element = e),
              (this.name = n),
              (this.strings = r),
              (this.parts = []);
            for (var o = 0; o < r.length - 1; o++) this.parts[o] = this._createPart();
          }
          return (
            o(t, [
              {
                key: '_createPart',
                value: function() {
                  return new M(this);
                },
              },
              {
                key: '_getValue',
                value: function() {
                  for (var t = this.strings, e = t.length - 1, n = '', i = 0; i < e; i++) {
                    n += t[i];
                    var r = this.parts[i];
                    if (void 0 !== r) {
                      var o = r.value;
                      if (H(o) || !V(o)) n += 'string' == typeof o ? o : String(o);
                      else {
                        var a,
                          s = _(o);
                        try {
                          for (s.s(); !(a = s.n()).done; ) {
                            var c = a.value;
                            n += 'string' == typeof c ? c : String(c);
                          }
                        } catch (t) {
                          s.e(t);
                        } finally {
                          s.f();
                        }
                      }
                    }
                  }
                  return (n += t[e]);
                },
              },
              {
                key: 'commit',
                value: function() {
                  this.dirty &&
                    ((this.dirty = !1), this.element.setAttribute(this.name, this._getValue()));
                },
              },
            ]),
            t
          );
        })(),
        M = (function() {
          function t(e) {
            i(this, t), (this.value = void 0), (this.committer = e);
          }
          return (
            o(t, [
              {
                key: 'setValue',
                value: function(t) {
                  t === z ||
                    (H(t) && t === this.value) ||
                    ((this.value = t), D(t) || (this.committer.dirty = !0));
                },
              },
              {
                key: 'commit',
                value: function() {
                  for (; D(this.value); ) {
                    var t = this.value;
                    (this.value = z), t(this);
                  }
                  this.value !== z && this.committer.commit();
                },
              },
            ]),
            t
          );
        })(),
        G = (function() {
          function t(e) {
            i(this, t), (this.value = void 0), (this.__pendingValue = void 0), (this.options = e);
          }
          return (
            o(t, [
              {
                key: 'appendInto',
                value: function(t) {
                  (this.startNode = t.appendChild(E())), (this.endNode = t.appendChild(E()));
                },
              },
              {
                key: 'insertAfterNode',
                value: function(t) {
                  (this.startNode = t), (this.endNode = t.nextSibling);
                },
              },
              {
                key: 'appendIntoPart',
                value: function(t) {
                  t.__insert((this.startNode = E())), t.__insert((this.endNode = E()));
                },
              },
              {
                key: 'insertAfterPart',
                value: function(t) {
                  t.__insert((this.startNode = E())),
                    (this.endNode = t.endNode),
                    (t.endNode = this.startNode);
                },
              },
              {
                key: 'setValue',
                value: function(t) {
                  this.__pendingValue = t;
                },
              },
              {
                key: 'commit',
                value: function() {
                  if (null !== this.startNode.parentNode) {
                    for (; D(this.__pendingValue); ) {
                      var t = this.__pendingValue;
                      (this.__pendingValue = z), t(this);
                    }
                    var e = this.__pendingValue;
                    e !== z &&
                      (H(e)
                        ? e !== this.value && this.__commitText(e)
                        : e instanceof F
                        ? this.__commitTemplateResult(e)
                        : e instanceof Node
                        ? this.__commitNode(e)
                        : V(e)
                        ? this.__commitIterable(e)
                        : e === L
                        ? ((this.value = L), this.clear())
                        : this.__commitText(e));
                  }
                },
              },
              {
                key: '__insert',
                value: function(t) {
                  this.endNode.parentNode.insertBefore(t, this.endNode);
                },
              },
              {
                key: '__commitNode',
                value: function(t) {
                  this.value !== t && (this.clear(), this.__insert(t), (this.value = t));
                },
              },
              {
                key: '__commitText',
                value: function(t) {
                  var e = this.startNode.nextSibling,
                    n = 'string' == typeof (t = null == t ? '' : t) ? t : String(t);
                  e === this.endNode.previousSibling && 3 === e.nodeType
                    ? (e.data = n)
                    : this.__commitNode(document.createTextNode(n)),
                    (this.value = t);
                },
              },
              {
                key: '__commitTemplateResult',
                value: function(t) {
                  var e = this.options.templateFactory(t);
                  if (this.value instanceof j && this.value.template === e)
                    this.value.update(t.values);
                  else {
                    var n = new j(e, t.processor, this.options),
                      i = n._clone();
                    n.update(t.values), this.__commitNode(i), (this.value = n);
                  }
                },
              },
              {
                key: '__commitIterable',
                value: function(e) {
                  Array.isArray(this.value) || ((this.value = []), this.clear());
                  var n,
                    i,
                    r = this.value,
                    o = 0,
                    a = _(e);
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      var s = i.value;
                      void 0 === (n = r[o]) &&
                        ((n = new t(this.options)),
                        r.push(n),
                        0 === o ? n.appendIntoPart(this) : n.insertAfterPart(r[o - 1])),
                        n.setValue(s),
                        n.commit(),
                        o++;
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                  o < r.length && ((r.length = o), this.clear(n && n.endNode));
                },
              },
              {
                key: 'clear',
                value: function() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startNode;
                  x(this.startNode.parentNode, t.nextSibling, this.endNode);
                },
              },
            ]),
            t
          );
        })(),
        q = (function() {
          function t(e, n, r) {
            if (
              (i(this, t),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              2 !== r.length || '' !== r[0] || '' !== r[1])
            )
              throw new Error('Boolean attributes can only contain a single expression');
            (this.element = e), (this.name = n), (this.strings = r);
          }
          return (
            o(t, [
              {
                key: 'setValue',
                value: function(t) {
                  this.__pendingValue = t;
                },
              },
              {
                key: 'commit',
                value: function() {
                  for (; D(this.__pendingValue); ) {
                    var t = this.__pendingValue;
                    (this.__pendingValue = z), t(this);
                  }
                  if (this.__pendingValue !== z) {
                    var e = !!this.__pendingValue;
                    this.value !== e &&
                      (e
                        ? this.element.setAttribute(this.name, '')
                        : this.element.removeAttribute(this.name),
                      (this.value = e)),
                      (this.__pendingValue = z);
                  }
                },
              },
            ]),
            t
          );
        })(),
        J = (function(t) {
          a(n, t);
          var e = f(n);
          function n(t, r, o) {
            var a;
            return (
              i(this, n),
              ((a = e.call(this, t, r, o)).single = 2 === o.length && '' === o[0] && '' === o[1]),
              a
            );
          }
          return (
            o(n, [
              {
                key: '_createPart',
                value: function() {
                  return new W(this);
                },
              },
              {
                key: '_getValue',
                value: function() {
                  return this.single
                    ? this.parts[0].value
                    : h(s(n.prototype), '_getValue', this).call(this);
                },
              },
              {
                key: 'commit',
                value: function() {
                  this.dirty && ((this.dirty = !1), (this.element[this.name] = this._getValue()));
                },
              },
            ]),
            n
          );
        })(B),
        W = (function(t) {
          a(n, t);
          var e = f(n);
          function n() {
            return i(this, n), e.apply(this, arguments);
          }
          return n;
        })(M),
        X = !1;
      !(function() {
        try {
          var t = {
            get capture() {
              return (X = !0), !1;
            },
          };
          window.addEventListener('test', t, t), window.removeEventListener('test', t, t);
        } catch (t) {}
      })();
      var Y = (function() {
          function t(e, n, r) {
            var o = this;
            i(this, t),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.element = e),
              (this.eventName = n),
              (this.eventContext = r),
              (this.__boundHandleEvent = function(t) {
                return o.handleEvent(t);
              });
          }
          return (
            o(t, [
              {
                key: 'setValue',
                value: function(t) {
                  this.__pendingValue = t;
                },
              },
              {
                key: 'commit',
                value: function() {
                  for (; D(this.__pendingValue); ) {
                    var t = this.__pendingValue;
                    (this.__pendingValue = z), t(this);
                  }
                  if (this.__pendingValue !== z) {
                    var e = this.__pendingValue,
                      n = this.value,
                      i =
                        null == e ||
                        (null != n &&
                          (e.capture !== n.capture ||
                            e.once !== n.once ||
                            e.passive !== n.passive)),
                      r = null != e && (null == n || i);
                    i &&
                      this.element.removeEventListener(
                        this.eventName,
                        this.__boundHandleEvent,
                        this.__options,
                      ),
                      r &&
                        ((this.__options = $(e)),
                        this.element.addEventListener(
                          this.eventName,
                          this.__boundHandleEvent,
                          this.__options,
                        )),
                      (this.value = e),
                      (this.__pendingValue = z);
                  }
                },
              },
              {
                key: 'handleEvent',
                value: function(t) {
                  'function' == typeof this.value
                    ? this.value.call(this.eventContext || this.element, t)
                    : this.value.handleEvent(t);
                },
              },
            ]),
            t
          );
        })(),
        $ = function(t) {
          return t && (X ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
      function Z(t) {
        var e = K.get(t.type);
        void 0 === e &&
          ((e = { stringsArray: new WeakMap(), keyString: new Map() }), K.set(t.type, e));
        var n = e.stringsArray.get(t.strings);
        if (void 0 !== n) return n;
        var i = t.strings.join(w);
        return (
          void 0 === (n = e.keyString.get(i)) &&
            ((n = new C(t, t.getTemplateElement())), e.keyString.set(i, n)),
          e.stringsArray.set(t.strings, n),
          n
        );
      }
      var K = new Map(),
        Q = new WeakMap(),
        tt = new ((function() {
          function t() {
            i(this, t);
          }
          return (
            o(t, [
              {
                key: 'handleAttributeExpressions',
                value: function(t, e, n, i) {
                  var r = e[0];
                  return '.' === r
                    ? new J(t, e.slice(1), n).parts
                    : '@' === r
                    ? [new Y(t, e.slice(1), i.eventContext)]
                    : '?' === r
                    ? [new q(t, e.slice(1), n)]
                    : new B(t, e, n).parts;
                },
              },
              {
                key: 'handleTextExpression',
                value: function(t) {
                  return new G(t);
                },
              },
            ]),
            t
          );
        })())();
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
      'undefined' != typeof window &&
        (window.litHtmlVersions || (window.litHtmlVersions = [])).push('1.2.1');
      var et = function(t) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
            n[i - 1] = arguments[i];
          return new F(t, n, 'html', tt);
        },
        nt = function(t, e) {
          return ''.concat(t, '--').concat(e);
        },
        it = !0;
      void 0 === window.ShadyCSS
        ? (it = !1)
        : void 0 === window.ShadyCSS.prepareTemplateDom &&
          (console.warn(
            'Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.',
          ),
          (it = !1));
      var rt = function(t) {
          return function(e) {
            var n = nt(e.type, t),
              i = K.get(n);
            void 0 === i &&
              ((i = { stringsArray: new WeakMap(), keyString: new Map() }), K.set(n, i));
            var r = i.stringsArray.get(e.strings);
            if (void 0 !== r) return r;
            var o = e.strings.join(w);
            if (void 0 === (r = i.keyString.get(o))) {
              var a = e.getTemplateElement();
              it && window.ShadyCSS.prepareTemplateDom(a, t),
                (r = new C(e, a)),
                i.keyString.set(o, r);
            }
            return i.stringsArray.set(e.strings, r), r;
          };
        },
        ot = ['html', 'svg'],
        at = new Set(),
        st = function(t, e, n) {
          at.add(t);
          var i = n ? n.element : document.createElement('template'),
            r = e.querySelectorAll('style'),
            o = r.length;
          if (0 !== o) {
            for (var a = document.createElement('style'), s = 0; s < o; s++) {
              var c = r[s];
              c.parentNode.removeChild(c), (a.textContent += c.textContent);
            }
            !(function(t) {
              ot.forEach(function(e) {
                var n = K.get(nt(e, t));
                void 0 !== n &&
                  n.keyString.forEach(function(t) {
                    var e = t.element.content,
                      n = new Set();
                    Array.from(e.querySelectorAll('style')).forEach(function(t) {
                      n.add(t);
                    }),
                      O(t, n);
                  });
              });
            })(t);
            var d = i.content;
            n
              ? (function(t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = t.element.content,
                    r = t.parts;
                  if (null != n)
                    for (
                      var o = document.createTreeWalker(i, 133, null, !1), a = I(r), s = 0, c = -1;
                      o.nextNode();

                    ) {
                      c++;
                      var d = o.currentNode;
                      for (
                        d === n && ((s = R(e)), n.parentNode.insertBefore(e, n));
                        -1 !== a && r[a].index === c;

                      ) {
                        if (s > 0) {
                          for (; -1 !== a; ) (r[a].index += s), (a = I(r, a));
                          return;
                        }
                        a = I(r, a);
                      }
                    }
                  else i.appendChild(e);
                })(n, a, d.firstChild)
              : d.insertBefore(a, d.firstChild),
              window.ShadyCSS.prepareTemplateStyles(i, t);
            var l = d.querySelector('style');
            if (window.ShadyCSS.nativeShadow && null !== l)
              e.insertBefore(l.cloneNode(!0), e.firstChild);
            else if (n) {
              d.insertBefore(a, d.firstChild);
              var p = new Set();
              p.add(a), O(n, p);
            }
          } else window.ShadyCSS.prepareTemplateStyles(i, t);
        };
      window.JSCompiler_renameProperty = function(t, e) {
        return t;
      };
      var ct = {
          toAttribute: function(t, e) {
            switch (e) {
              case Boolean:
                return t ? '' : null;
              case Object:
              case Array:
                return null == t ? t : JSON.stringify(t);
            }
            return t;
          },
          fromAttribute: function(t, e) {
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
        dt = function(t, e) {
          return e !== t && (e == e || t == t);
        },
        lt = { attribute: !0, type: String, converter: ct, reflect: !1, hasChanged: dt },
        pt = (function(t) {
          a(c, t);
          var r,
            s = f(c);
          function c() {
            var t;
            return (
              i(this, c),
              ((t = s.call(this))._updateState = 0),
              (t._instanceProperties = void 0),
              (t._updatePromise = new Promise(function(e) {
                return (t._enableUpdatingResolver = e);
              })),
              (t._changedProperties = new Map()),
              (t._reflectingProperties = void 0),
              t.initialize(),
              t
            );
          }
          return (
            o(
              c,
              [
                {
                  key: 'initialize',
                  value: function() {
                    this._saveInstanceProperties(), this._requestUpdate();
                  },
                },
                {
                  key: '_saveInstanceProperties',
                  value: function() {
                    var t = this;
                    this.constructor._classProperties.forEach(function(e, n) {
                      if (t.hasOwnProperty(n)) {
                        var i = t[n];
                        delete t[n],
                          t._instanceProperties || (t._instanceProperties = new Map()),
                          t._instanceProperties.set(n, i);
                      }
                    });
                  },
                },
                {
                  key: '_applyInstanceProperties',
                  value: function() {
                    var t = this;
                    this._instanceProperties.forEach(function(e, n) {
                      return (t[n] = e);
                    }),
                      (this._instanceProperties = void 0);
                  },
                },
                {
                  key: 'connectedCallback',
                  value: function() {
                    this.enableUpdating();
                  },
                },
                {
                  key: 'enableUpdating',
                  value: function() {
                    void 0 !== this._enableUpdatingResolver &&
                      (this._enableUpdatingResolver(), (this._enableUpdatingResolver = void 0));
                  },
                },
                { key: 'disconnectedCallback', value: function() {} },
                {
                  key: 'attributeChangedCallback',
                  value: function(t, e, n) {
                    e !== n && this._attributeToProperty(t, n);
                  },
                },
                {
                  key: '_propertyToAttribute',
                  value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lt,
                      i = this.constructor,
                      r = i._attributeNameForProperty(t, n);
                    if (void 0 !== r) {
                      var o = i._propertyValueToAttribute(e, n);
                      if (void 0 === o) return;
                      (this._updateState = 8 | this._updateState),
                        null == o ? this.removeAttribute(r) : this.setAttribute(r, o),
                        (this._updateState = -9 & this._updateState);
                    }
                  },
                },
                {
                  key: '_attributeToProperty',
                  value: function(t, e) {
                    if (!(8 & this._updateState)) {
                      var n = this.constructor,
                        i = n._attributeToPropertyMap.get(t);
                      if (void 0 !== i) {
                        var r = n.getPropertyOptions(i);
                        (this._updateState = 16 | this._updateState),
                          (this[i] = n._propertyValueFromAttribute(e, r)),
                          (this._updateState = -17 & this._updateState);
                      }
                    }
                  },
                },
                {
                  key: '_requestUpdate',
                  value: function(t, e) {
                    var n = !0;
                    if (void 0 !== t) {
                      var i = this.constructor,
                        r = i.getPropertyOptions(t);
                      i._valueHasChanged(this[t], e, r.hasChanged)
                        ? (this._changedProperties.has(t) || this._changedProperties.set(t, e),
                          !0 !== r.reflect ||
                            16 & this._updateState ||
                            (void 0 === this._reflectingProperties &&
                              (this._reflectingProperties = new Map()),
                            this._reflectingProperties.set(t, r)))
                        : (n = !1);
                    }
                    !this._hasRequestedUpdate && n && (this._updatePromise = this._enqueueUpdate());
                  },
                },
                {
                  key: 'requestUpdate',
                  value: function(t, e) {
                    return this._requestUpdate(t, e), this.updateComplete;
                  },
                },
                {
                  key: '_enqueueUpdate',
                  value:
                    ((r = (function(t) {
                      return function() {
                        var e = this,
                          i = arguments;
                        return new Promise(function(r, o) {
                          var a = t.apply(e, i);
                          function s(t) {
                            n(a, r, o, s, c, 'next', t);
                          }
                          function c(t) {
                            n(a, r, o, s, c, 'throw', t);
                          }
                          s(void 0);
                        });
                      };
                    })(
                      regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this._updateState = 4 | this._updateState),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    this._updatePromise
                                  );
                                case 4:
                                  t.next = 8;
                                  break;
                                case 6:
                                  (t.prev = 6), (t.t0 = t.catch(1));
                                case 8:
                                  if (null == (e = this.performUpdate())) {
                                    t.next = 12;
                                    break;
                                  }
                                  return (t.next = 12), e;
                                case 12:
                                  return t.abrupt('return', !this._hasRequestedUpdate);
                                case 13:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[1, 6]],
                        );
                      }),
                    )),
                    function() {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: 'performUpdate',
                  value: function() {
                    this._instanceProperties && this._applyInstanceProperties();
                    var t = !1,
                      e = this._changedProperties;
                    try {
                      (t = this.shouldUpdate(e)) ? this.update(e) : this._markUpdated();
                    } catch (e) {
                      throw ((t = !1), this._markUpdated(), e);
                    }
                    t &&
                      (1 & this._updateState ||
                        ((this._updateState = 1 | this._updateState), this.firstUpdated(e)),
                      this.updated(e));
                  },
                },
                {
                  key: '_markUpdated',
                  value: function() {
                    (this._changedProperties = new Map()),
                      (this._updateState = -5 & this._updateState);
                  },
                },
                {
                  key: '_getUpdateComplete',
                  value: function() {
                    return this._updatePromise;
                  },
                },
                {
                  key: 'shouldUpdate',
                  value: function(t) {
                    return !0;
                  },
                },
                {
                  key: 'update',
                  value: function(t) {
                    var e = this;
                    void 0 !== this._reflectingProperties &&
                      this._reflectingProperties.size > 0 &&
                      (this._reflectingProperties.forEach(function(t, n) {
                        return e._propertyToAttribute(n, e[n], t);
                      }),
                      (this._reflectingProperties = void 0)),
                      this._markUpdated();
                  },
                },
                { key: 'updated', value: function(t) {} },
                { key: 'firstUpdated', value: function(t) {} },
                {
                  key: '_hasRequestedUpdate',
                  get: function() {
                    return 4 & this._updateState;
                  },
                },
                {
                  key: 'hasUpdated',
                  get: function() {
                    return 1 & this._updateState;
                  },
                },
                {
                  key: 'updateComplete',
                  get: function() {
                    return this._getUpdateComplete();
                  },
                },
              ],
              [
                {
                  key: '_ensureClassProperties',
                  value: function() {
                    var t = this;
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                      this._classProperties = new Map();
                      var e = Object.getPrototypeOf(this)._classProperties;
                      void 0 !== e &&
                        e.forEach(function(e, n) {
                          return t._classProperties.set(n, e);
                        });
                    }
                  },
                },
                {
                  key: 'createProperty',
                  value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt;
                    if (
                      (this._ensureClassProperties(),
                      this._classProperties.set(t, n),
                      !n.noAccessor && !this.prototype.hasOwnProperty(t))
                    ) {
                      var i = 'symbol' === e(t) ? Symbol() : '__'.concat(t),
                        r = this.getPropertyDescriptor(t, i, n);
                      void 0 !== r && Object.defineProperty(this.prototype, t, r);
                    }
                  },
                },
                {
                  key: 'getPropertyDescriptor',
                  value: function(t, e, n) {
                    return {
                      get: function() {
                        return this[e];
                      },
                      set: function(n) {
                        var i = this[t];
                        (this[e] = n), this._requestUpdate(t, i);
                      },
                      configurable: !0,
                      enumerable: !0,
                    };
                  },
                },
                {
                  key: 'getPropertyOptions',
                  value: function(t) {
                    return (this._classProperties && this._classProperties.get(t)) || lt;
                  },
                },
                {
                  key: 'finalize',
                  value: function() {
                    var t = Object.getPrototypeOf(this);
                    if (
                      (t.hasOwnProperty('finalized') || t.finalize(),
                      (this.finalized = !0),
                      this._ensureClassProperties(),
                      (this._attributeToPropertyMap = new Map()),
                      this.hasOwnProperty(JSCompiler_renameProperty('properties', this)))
                    ) {
                      var e,
                        n = this.properties,
                        i = _(
                          [].concat(
                            v(Object.getOwnPropertyNames(n)),
                            v(
                              'function' == typeof Object.getOwnPropertySymbols
                                ? Object.getOwnPropertySymbols(n)
                                : [],
                            ),
                          ),
                        );
                      try {
                        for (i.s(); !(e = i.n()).done; ) {
                          var r = e.value;
                          this.createProperty(r, n[r]);
                        }
                      } catch (t) {
                        i.e(t);
                      } finally {
                        i.f();
                      }
                    }
                  },
                },
                {
                  key: '_attributeNameForProperty',
                  value: function(t, e) {
                    var n = e.attribute;
                    return !1 === n
                      ? void 0
                      : 'string' == typeof n
                      ? n
                      : 'string' == typeof t
                      ? t.toLowerCase()
                      : void 0;
                  },
                },
                {
                  key: '_valueHasChanged',
                  value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dt;
                    return n(t, e);
                  },
                },
                {
                  key: '_propertyValueFromAttribute',
                  value: function(t, e) {
                    var n = e.type,
                      i = e.converter || ct,
                      r = 'function' == typeof i ? i : i.fromAttribute;
                    return r ? r(t, n) : t;
                  },
                },
                {
                  key: '_propertyValueToAttribute',
                  value: function(t, e) {
                    if (void 0 !== e.reflect) {
                      var n = e.type,
                        i = e.converter;
                      return ((i && i.toAttribute) || ct.toAttribute)(t, n);
                    }
                  },
                },
                {
                  key: 'observedAttributes',
                  get: function() {
                    var t = this;
                    this.finalize();
                    var e = [];
                    return (
                      this._classProperties.forEach(function(n, i) {
                        var r = t._attributeNameForProperty(i, n);
                        void 0 !== r && (t._attributeToPropertyMap.set(r, i), e.push(r));
                      }),
                      e
                    );
                  },
                },
              ],
            ),
            c
          );
        })(p(HTMLElement));
      pt.finalized = !0;
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
      var ut = function(t) {
        return function(e) {
          return 'function' == typeof e
            ? (function(t, e) {
                return window.customElements.define(t, e), e;
              })(t, e)
            : (function(t, e) {
                return {
                  kind: e.kind,
                  elements: e.elements,
                  finisher: function(e) {
                    window.customElements.define(t, e);
                  },
                };
              })(t, e);
        };
      };
      function ft(t) {
        return function(e, n) {
          return void 0 !== n
            ? (function(t, e, n) {
                e.constructor.createProperty(n, t);
              })(t, e, n)
            : (function(t, e) {
                return 'method' === e.kind && e.descriptor && !('value' in e.descriptor)
                  ? Object.assign(Object.assign({}, e), {
                      finisher: function(n) {
                        n.createProperty(e.key, t);
                      },
                    })
                  : {
                      kind: 'field',
                      key: Symbol(),
                      placement: 'own',
                      descriptor: {},
                      initializer: function() {
                        'function' == typeof e.initializer &&
                          (this[e.key] = e.initializer.call(this));
                      },
                      finisher: function(n) {
                        n.createProperty(e.key, t);
                      },
                    };
              })(t, e);
        };
      }
      function ht(t) {
        return function(e, n) {
          var i = {
            get: function() {
              return this.renderRoot.querySelector(t);
            },
            enumerable: !0,
            configurable: !0,
          };
          return void 0 !== n ? mt(i, e, n) : vt(i, e);
        };
      }
      var mt = function(t, e, n) {
          Object.defineProperty(e, n, t);
        },
        vt = function(t, e) {
          return { kind: 'method', placement: 'prototype', key: e.key, descriptor: t };
        },
        gt = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype,
        bt = Symbol(),
        _t = (function() {
          function t(e, n) {
            if ((i(this, t), n !== bt))
              throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
            this.cssText = e;
          }
          return (
            o(t, [
              {
                key: 'toString',
                value: function() {
                  return this.cssText;
                },
              },
              {
                key: 'styleSheet',
                get: function() {
                  return (
                    void 0 === this._styleSheet &&
                      (gt
                        ? ((this._styleSheet = new CSSStyleSheet()),
                          this._styleSheet.replaceSync(this.cssText))
                        : (this._styleSheet = null)),
                    this._styleSheet
                  );
                },
              },
            ]),
            t
          );
        })(),
        yt = function(t) {
          if (t instanceof _t) return t.cssText;
          if ('number' == typeof t) return t;
          throw new Error(
            "Value passed to 'css' function must be a 'css' function result: ".concat(
              t,
              ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.",
            ),
          );
        },
        xt = function(t) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
            n[i - 1] = arguments[i];
          var r = n.reduce(function(e, n, i) {
            return e + yt(n) + t[i + 1];
          }, t[0]);
          return new _t(r, bt);
        };
      (window.litElementVersions || (window.litElementVersions = [])).push('2.3.1');
      var wt = {},
        kt = (function(t) {
          a(n, t);
          var e = f(n);
          function n() {
            return i(this, n), e.apply(this, arguments);
          }
          return (
            o(
              n,
              [
                {
                  key: 'initialize',
                  value: function() {
                    h(s(n.prototype), 'initialize', this).call(this),
                      this.constructor._getUniqueStyles(),
                      (this.renderRoot = this.createRenderRoot()),
                      window.ShadowRoot &&
                        this.renderRoot instanceof window.ShadowRoot &&
                        this.adoptStyles();
                  },
                },
                {
                  key: 'createRenderRoot',
                  value: function() {
                    return this.attachShadow({ mode: 'open' });
                  },
                },
                {
                  key: 'adoptStyles',
                  value: function() {
                    var t = this.constructor._styles;
                    0 !== t.length &&
                      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
                        ? gt
                          ? (this.renderRoot.adoptedStyleSheets = t.map(function(t) {
                              return t.styleSheet;
                            }))
                          : (this._needsShimAdoptedStyleSheets = !0)
                        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                            t.map(function(t) {
                              return t.cssText;
                            }),
                            this.localName,
                          ));
                  },
                },
                {
                  key: 'connectedCallback',
                  value: function() {
                    h(s(n.prototype), 'connectedCallback', this).call(this),
                      this.hasUpdated &&
                        void 0 !== window.ShadyCSS &&
                        window.ShadyCSS.styleElement(this);
                  },
                },
                {
                  key: 'update',
                  value: function(t) {
                    var e = this,
                      i = this.render();
                    h(s(n.prototype), 'update', this).call(this, t),
                      i !== wt &&
                        this.constructor.render(i, this.renderRoot, {
                          scopeName: this.localName,
                          eventContext: this,
                        }),
                      this._needsShimAdoptedStyleSheets &&
                        ((this._needsShimAdoptedStyleSheets = !1),
                        this.constructor._styles.forEach(function(t) {
                          var n = document.createElement('style');
                          (n.textContent = t.cssText), e.renderRoot.appendChild(n);
                        }));
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    return wt;
                  },
                },
              ],
              [
                {
                  key: 'getStyles',
                  value: function() {
                    return this.styles;
                  },
                },
                {
                  key: '_getUniqueStyles',
                  value: function() {
                    if (!this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
                      var t = this.getStyles();
                      if (void 0 === t) this._styles = [];
                      else if (Array.isArray(t)) {
                        var e = (function t(e, n) {
                            return e.reduceRight(function(e, n) {
                              return Array.isArray(n) ? t(n, e) : (e.add(n), e);
                            }, n);
                          })(t, new Set()),
                          n = [];
                        e.forEach(function(t) {
                          return n.unshift(t);
                        }),
                          (this._styles = n);
                      } else this._styles = [t];
                    }
                  },
                },
              ],
            ),
            n
          );
        })(pt);
      (kt.finalized = !0),
        (kt.render = function(t, n, i) {
          if (!i || 'object' !== e(i) || !i.scopeName)
            throw new Error('The `scopeName` option is required.');
          var r = i.scopeName,
            o = Q.has(n),
            a = it && 11 === n.nodeType && !!n.host,
            s = a && !at.has(r),
            c = s ? document.createDocumentFragment() : n;
          if (
            ((function(t, e, n) {
              var i = Q.get(e);
              void 0 === i &&
                (x(e, e.firstChild),
                Q.set(e, (i = new G(Object.assign({ templateFactory: Z }, n)))),
                i.appendInto(e)),
                i.setValue(t),
                i.commit();
            })(t, c, Object.assign({ templateFactory: rt(r) }, i)),
            s)
          ) {
            var d = Q.get(c);
            Q.delete(c);
            var l = d.value instanceof j ? d.value.template : void 0;
            st(r, c, l), x(n, n.firstChild), n.appendChild(c), Q.set(n, d);
          }
          !o && a && window.ShadyCSS.styleElement(n.host);
        });
      function St() {
        var t = m([':host{height:inherit;width:inherit}']);
        return (
          (St = function() {
            return t;
          }),
          t
        );
      }
      function Ct() {
        var t = m([' <div id="map" style="height:inherit; width: inherit"></div> ']);
        return (
          (Ct = function() {
            return t;
          }),
          t
        );
      }
      var At = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          var t;
          return i(this, n), ((t = e.call(this)).spotmap = {}), (t.hotspots = []), t;
        }
        return (
          o(
            n,
            [
              {
                key: 'render',
                value: function() {
                  return et(Ct());
                },
              },
              {
                key: 'firstUpdated',
                value: function() {
                  this.loadMap();
                },
              },
              {
                key: 'loadMap',
                value: function() {
                  if (void 0 === window.google) {
                    var t = document.createElement('script');
                    (t.src = '//maps.googleapis.com/maps/api/js?key='.concat(
                      'AIzaSyBx6seaJUAP-r-6eePDE1IGQCXosHcQZbY',
                    )),
                      (t.onload = function() {
                        (this.map = this.initMap()), (window.map = this.map);
                      }.bind(this)),
                      document.body.append(t);
                  } else (this.map = this.initMap()), (window.map = this.map);
                },
              },
              {
                key: 'initMap',
                value: function() {
                  var t = new window.google.maps.Map(this.shadowRoot.getElementById('map'), {
                    zoom: 7.1,
                    center: { lat: 33.71, lng: -81.0348 },
                    mapTypeId: 'terrain',
                  });
                  return console.log(t), t;
                },
              },
              {
                key: 'drawCircles',
                value: function(t, e) {
                  var n;
                  for (var i in e) {
                    (e[i].center = {
                      lat: parseFloat(e[i].center.lat),
                      lng: parseFloat(e[i].center.lng),
                    }),
                      e[i].hasOwnProperty('fillOpacity') || (e[i].fillOpacity = 0.35);
                    var r = new window.google.maps.Circle({
                      strokeColor: e[i].color,
                      strokeOpacity: e[i].strokeOpacity,
                      strokeWeight: 0,
                      fillColor: e[i].color,
                      fillOpacity: e[i].fillOpacity,
                      map: t,
                      center: e[i].center,
                      radius: 100 * Math.sqrt(e[i].population),
                      clickable: !0,
                    });
                    (e[i].contentString =
                      ''
                        .concat(
                          '<div id="content"><div id="covidDataInfo"></div><h5 id="firstHeading" class="firstHeading">',
                        )
                        .concat(e[i].header, '</h5>') +
                      '<div id="bodyContent">'.concat(e[i].content, '</div>') +
                      '</div>'),
                      (n = new google.maps.InfoWindow()),
                      google.maps.event.addListener(
                        r,
                        'click',
                        (function(i, r) {
                          return function() {
                            n.setContent(e[r].contentString),
                              n.setPosition(i.getCenter()),
                              n.open(t);
                          };
                        })(r, i),
                      );
                  }
                },
              },
              {
                key: 'updated',
                value: function(t) {
                  var e = this;
                  t.forEach(function(n, i) {
                    console.log(
                      ''
                        .concat(i, ' changed. oldValue: ')
                        .concat(n, ', ')
                        .concat(t.get(i)),
                    ),
                      'hotspots' === i &&
                        e.hotspots.confirmedCircles &&
                        window.map &&
                        e.drawCircles(window.map, e.hotspots.confirmedCircles),
                      'hotspots' === i &&
                        e.hotspots.deathCircles &&
                        window.map &&
                        e.drawCircles(window.map, e.hotspots.deathCircles);
                  });
                },
              },
            ],
            [
              {
                key: 'properties',
                get: function() {
                  return { spotmap: { type: Object }, hotspots: { type: Object } };
                },
              },
              {
                key: 'styles',
                get: function() {
                  return xt(St());
                },
              },
            ],
          ),
          n
        );
      })(kt);
      customElements.define('covid-sc-map', At);
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
      var Tt = function(t, e) {
        return (Tt =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function Et(t, e) {
        function n() {
          this.constructor = t;
        }
        Tt(t, e),
          (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
      }
      var Pt = function() {
        return (Pt =
          Object.assign ||
          function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var r in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }).apply(this, arguments);
      };
      function Ot(t, n, i, r) {
        var o,
          a = arguments.length,
          s = a < 3 ? n : null === r ? (r = Object.getOwnPropertyDescriptor(n, i)) : r;
        if (
          'object' === ('undefined' == typeof Reflect ? 'undefined' : e(Reflect)) &&
          'function' == typeof Reflect.decorate
        )
          s = Reflect.decorate(t, n, i, r);
        else
          for (var c = t.length - 1; c >= 0; c--)
            (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(n, i, s) : o(n, i)) || s);
        return a > 3 && s && Object.defineProperty(n, i, s), s;
      }
      function Rt() {
        var t = m([
          ':host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}',
        ]);
        return (
          (Rt = function() {
            return t;
          }),
          t
        );
      }
      var It = xt(Rt());
      function Nt() {
        var t = m(['<slot></slot>']);
        return (
          (Nt = function() {
            return t;
          }),
          t
        );
      }
      var Dt = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          return i(this, n), e.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: 'render',
              value: function() {
                return et(Nt());
              },
            },
          ]),
          n
        );
      })(kt);
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
      function zt(t) {
        return (
          void 0 === t && (t = window),
          !!(function(t) {
            void 0 === t && (t = window);
            var e = !1;
            try {
              var n = {
                  get passive() {
                    return (e = !0), !1;
                  },
                },
                i = function() {};
              t.document.addEventListener('test', i, n),
                t.document.removeEventListener('test', i, n);
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
      (Dt.styles = It), (Dt = Ot([ut('mwc-icon')], Dt));
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
      var Lt,
        jt = (function() {
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
        Ut = {
          BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
          FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
          FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
          ROOT: 'mdc-ripple-upgraded',
          UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
        },
        Ft = {
          VAR_FG_SCALE: '--mdc-ripple-fg-scale',
          VAR_FG_SIZE: '--mdc-ripple-fg-size',
          VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
          VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
          VAR_LEFT: '--mdc-ripple-left',
          VAR_TOP: '--mdc-ripple-top',
        },
        Ht = {
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
      var Vt = ['touchstart', 'pointerdown', 'mousedown', 'keydown'],
        Bt = ['touchend', 'pointerup', 'mouseup', 'contextmenu'],
        Mt = [],
        Gt = (function(t) {
          function e(n) {
            var i = t.call(this, Pt({}, e.defaultAdapter, n)) || this;
            return (
              (i.activationAnimationHasEnded_ = !1),
              (i.activationTimer_ = 0),
              (i.fgDeactivationRemovalTimer_ = 0),
              (i.fgScale_ = '0'),
              (i.frame_ = { width: 0, height: 0 }),
              (i.initialSize_ = 0),
              (i.layoutFrame_ = 0),
              (i.maxRadius_ = 0),
              (i.unboundedCoords_ = { left: 0, top: 0 }),
              (i.activationState_ = i.defaultActivationState_()),
              (i.activationTimerCallback_ = function() {
                (i.activationAnimationHasEnded_ = !0), i.runDeactivationUXLogicIfReady_();
              }),
              (i.activateHandler_ = function(t) {
                return i.activate_(t);
              }),
              (i.deactivateHandler_ = function() {
                return i.deactivate_();
              }),
              (i.focusHandler_ = function() {
                return i.handleFocus();
              }),
              (i.blurHandler_ = function() {
                return i.handleBlur();
              }),
              (i.resizeHandler_ = function() {
                return i.layout();
              }),
              i
            );
          }
          return (
            Et(e, t),
            Object.defineProperty(e, 'cssClasses', {
              get: function() {
                return Ut;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, 'strings', {
              get: function() {
                return Ft;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, 'numbers', {
              get: function() {
                return Ht;
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
                n = this.supportsPressRipple_();
              if ((this.registerRootHandlers_(n), n)) {
                var i = e.cssClasses,
                  r = i.ROOT,
                  o = i.UNBOUNDED;
                requestAnimationFrame(function() {
                  t.adapter_.addClass(r),
                    t.adapter_.isUnbounded() && (t.adapter_.addClass(o), t.layoutInternal_());
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
                var n = e.cssClasses,
                  i = n.ROOT,
                  r = n.UNBOUNDED;
                requestAnimationFrame(function() {
                  t.adapter_.removeClass(i), t.adapter_.removeClass(r), t.removeCssVars_();
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
              var n = e.cssClasses.UNBOUNDED;
              t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n);
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
                (Vt.forEach(function(t) {
                  e.adapter_.registerInteractionHandler(t, e.activateHandler_);
                }),
                this.adapter_.isUnbounded() &&
                  this.adapter_.registerResizeHandler(this.resizeHandler_)),
                this.adapter_.registerInteractionHandler('focus', this.focusHandler_),
                this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            }),
            (e.prototype.registerDeactivationHandlers_ = function(t) {
              var e = this;
              'keydown' === t.type
                ? this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_)
                : Bt.forEach(function(t) {
                    e.adapter_.registerDocumentInteractionHandler(t, e.deactivateHandler_);
                  });
            }),
            (e.prototype.deregisterRootHandlers_ = function() {
              var t = this;
              Vt.forEach(function(e) {
                t.adapter_.deregisterInteractionHandler(e, t.activateHandler_);
              }),
                this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_),
                this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_),
                this.adapter_.isUnbounded() &&
                  this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            }),
            (e.prototype.deregisterDeactivationHandlers_ = function() {
              var t = this;
              this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_),
                Bt.forEach(function(e) {
                  t.adapter_.deregisterDocumentInteractionHandler(e, t.deactivateHandler_);
                });
            }),
            (e.prototype.removeCssVars_ = function() {
              var t = this,
                n = e.strings;
              Object.keys(n).forEach(function(e) {
                0 === e.indexOf('VAR_') && t.adapter_.updateCssVariable(n[e], null);
              });
            }),
            (e.prototype.activate_ = function(t) {
              var e = this;
              if (!this.adapter_.isSurfaceDisabled()) {
                var n = this.activationState_;
                if (!n.isActivated) {
                  var i = this.previousActivationEvent_;
                  if (!(i && void 0 !== t && i.type !== t.type))
                    (n.isActivated = !0),
                      (n.isProgrammatic = void 0 === t),
                      (n.activationEvent = t),
                      (n.wasActivatedByPointer =
                        !n.isProgrammatic &&
                        void 0 !== t &&
                          ('mousedown' === t.type ||
                            'touchstart' === t.type ||
                            'pointerdown' === t.type)),
                      void 0 !== t &&
                      Mt.length > 0 &&
                      Mt.some(function(t) {
                        return e.adapter_.containsEventTarget(t);
                      })
                        ? this.resetActivationState_()
                        : (void 0 !== t &&
                            (Mt.push(t.target), this.registerDeactivationHandlers_(t)),
                          (n.wasElementMadeActive = this.checkElementMadeActive_(t)),
                          n.wasElementMadeActive && this.animateActivation_(),
                          requestAnimationFrame(function() {
                            (Mt = []),
                              n.wasElementMadeActive ||
                                void 0 === t ||
                                (' ' !== t.key && 32 !== t.keyCode) ||
                                ((n.wasElementMadeActive = e.checkElementMadeActive_(t)),
                                n.wasElementMadeActive && e.animateActivation_()),
                              n.wasElementMadeActive ||
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
                n = e.strings,
                i = n.VAR_FG_TRANSLATE_START,
                r = n.VAR_FG_TRANSLATE_END,
                o = e.cssClasses,
                a = o.FG_DEACTIVATION,
                s = o.FG_ACTIVATION,
                c = e.numbers.DEACTIVATION_TIMEOUT_MS;
              this.layoutInternal_();
              var d = '',
                l = '';
              if (!this.adapter_.isUnbounded()) {
                var p = this.getFgTranslationCoordinates_(),
                  u = p.startPoint,
                  f = p.endPoint;
                (d = u.x + 'px, ' + u.y + 'px'), (l = f.x + 'px, ' + f.y + 'px');
              }
              this.adapter_.updateCssVariable(i, d),
                this.adapter_.updateCssVariable(r, l),
                clearTimeout(this.activationTimer_),
                clearTimeout(this.fgDeactivationRemovalTimer_),
                this.rmBoundedActivationClasses_(),
                this.adapter_.removeClass(a),
                this.adapter_.computeBoundingRect(),
                this.adapter_.addClass(s),
                (this.activationTimer_ = setTimeout(function() {
                  return t.activationTimerCallback_();
                }, c));
            }),
            (e.prototype.getFgTranslationCoordinates_ = function() {
              var t,
                e = this.activationState_,
                n = e.activationEvent;
              return {
                startPoint: (t = {
                  x:
                    (t = e.wasActivatedByPointer
                      ? (function(t, e, n) {
                          if (!t) return { x: 0, y: 0 };
                          var i,
                            r,
                            o = e.x,
                            a = e.y,
                            s = o + n.left,
                            c = a + n.top;
                          if ('touchstart' === t.type) {
                            var d = t;
                            (i = d.changedTouches[0].pageX - s),
                              (r = d.changedTouches[0].pageY - c);
                          } else {
                            var l = t;
                            (i = l.pageX - s), (r = l.pageY - c);
                          }
                          return { x: i, y: r };
                        })(
                          n,
                          this.adapter_.getWindowPageOffset(),
                          this.adapter_.computeBoundingRect(),
                        )
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
                n = e.cssClasses.FG_DEACTIVATION,
                i = this.activationState_,
                r = i.hasDeactivationUXRun,
                o = i.isActivated;
              (r || !o) &&
                this.activationAnimationHasEnded_ &&
                (this.rmBoundedActivationClasses_(),
                this.adapter_.addClass(n),
                (this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                  t.adapter_.removeClass(n);
                }, Ht.FG_DEACTIVATION_MS)));
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
                var n = Pt({}, e);
                e.isProgrammatic
                  ? (requestAnimationFrame(function() {
                      return t.animateDeactivation_(n);
                    }),
                    this.resetActivationState_())
                  : (this.deregisterDeactivationHandlers_(),
                    requestAnimationFrame(function() {
                      (t.activationState_.hasDeactivationUXRun = !0),
                        t.animateDeactivation_(n),
                        t.resetActivationState_();
                    }));
              }
            }),
            (e.prototype.animateDeactivation_ = function(t) {
              var e = t.wasActivatedByPointer,
                n = t.wasElementMadeActive;
              (e || n) && this.runDeactivationUXLogicIfReady_();
            }),
            (e.prototype.layoutInternal_ = function() {
              var t = this;
              this.frame_ = this.adapter_.computeBoundingRect();
              var n = Math.max(this.frame_.height, this.frame_.width);
              this.maxRadius_ = this.adapter_.isUnbounded()
                ? n
                : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) +
                  e.numbers.PADDING;
              var i = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
              this.adapter_.isUnbounded() && i % 2 != 0
                ? (this.initialSize_ = i - 1)
                : (this.initialSize_ = i),
                (this.fgScale_ = '' + this.maxRadius_ / this.initialSize_),
                this.updateLayoutCssVars_();
            }),
            (e.prototype.updateLayoutCssVars_ = function() {
              var t = e.strings,
                n = t.VAR_FG_SIZE,
                i = t.VAR_LEFT,
                r = t.VAR_TOP,
                o = t.VAR_FG_SCALE;
              this.adapter_.updateCssVariable(n, this.initialSize_ + 'px'),
                this.adapter_.updateCssVariable(o, this.fgScale_),
                this.adapter_.isUnbounded() &&
                  ((this.unboundedCoords_ = {
                    left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                    top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2),
                  }),
                  this.adapter_.updateCssVariable(i, this.unboundedCoords_.left + 'px'),
                  this.adapter_.updateCssVariable(r, this.unboundedCoords_.top + 'px'));
            }),
            e
          );
        })(jt);
      function qt() {
        var t = m([
          '@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}',
        ]);
        return (
          (qt = function() {
            return t;
          }),
          t
        );
      }
      var Jt,
        Wt = xt(qt()),
        Xt = (function(t, e) {
          void 0 === e && (e = !1);
          var n,
            i = t.CSS;
          if ('boolean' == typeof Lt && !e) return Lt;
          if (!(i && 'function' == typeof i.supports)) return !1;
          var r = i.supports('--css-vars', 'yes'),
            o = i.supports('(--css-vars: yes)') && i.supports('color', '#00000000');
          return (n = r || o), e || (Lt = n), n;
        })(window),
        Yt = navigator.userAgent.match(/Safari/),
        $t = !1,
        Zt = function(t) {
          Yt &&
            !$t &&
            (function() {
              $t = !0;
              var t = document.createElement('style'),
                e = new G({ templateFactory: Z });
              e.appendInto(t), e.setValue(Wt), e.commit(), document.head.appendChild(t);
            })();
          var e = t.surfaceNode,
            n = t.interactionNode || e;
          n.getRootNode() !== e.getRootNode() &&
            '' === n.style.position &&
            (n.style.position = 'relative');
          var i = new Gt({
            browserSupportsCssVars: function() {
              return Xt;
            },
            isUnbounded: function() {
              return void 0 === t.unbounded || t.unbounded;
            },
            isSurfaceActive: function() {
              return (
                (e = ':active'),
                ((t = n).matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
              );
              var t, e;
            },
            isSurfaceDisabled: function() {
              return Boolean(n.hasAttribute('disabled'));
            },
            addClass: function(t) {
              return e.classList.add(t);
            },
            removeClass: function(t) {
              return e.classList.remove(t);
            },
            containsEventTarget: function(t) {
              return n.contains(t);
            },
            registerInteractionHandler: function(t, e) {
              return n.addEventListener(t, e, zt());
            },
            deregisterInteractionHandler: function(t, e) {
              return n.removeEventListener(t, e, zt());
            },
            registerDocumentInteractionHandler: function(t, e) {
              return document.documentElement.addEventListener(t, e, zt());
            },
            deregisterDocumentInteractionHandler: function(t, e) {
              return document.documentElement.removeEventListener(t, e, zt());
            },
            registerResizeHandler: function(t) {
              return window.addEventListener('resize', t);
            },
            deregisterResizeHandler: function(t) {
              return window.removeEventListener('resize', t);
            },
            updateCssVariable: function(t, n) {
              return e.style.setProperty(t, n);
            },
            computeBoundingRect: function() {
              return e.getBoundingClientRect();
            },
            getWindowPageOffset: function() {
              return { x: window.pageXOffset, y: window.pageYOffset };
            },
          });
          return i.init(), i;
        },
        Kt = (function() {
          function t(e) {
            i(this, t), (this.classes = new Set()), (this.changed = !1), (this.element = e);
            var n,
              r = _((e.getAttribute('class') || '').split(/\s+/));
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var o = n.value;
                this.classes.add(o);
              }
            } catch (t) {
              r.e(t);
            } finally {
              r.f();
            }
          }
          return (
            o(t, [
              {
                key: 'add',
                value: function(t) {
                  this.classes.add(t), (this.changed = !0);
                },
              },
              {
                key: 'remove',
                value: function(t) {
                  this.classes.delete(t), (this.changed = !0);
                },
              },
              {
                key: 'commit',
                value: function() {
                  if (this.changed) {
                    var t = '';
                    this.classes.forEach(function(e) {
                      return (t += e + ' ');
                    }),
                      this.element.setAttribute('class', t);
                  }
                },
              },
            ]),
            t
          );
        })(),
        Qt = new WeakMap(),
        te =
          ((Jt = function(t) {
            return function(e) {
              if (
                !(e instanceof M) ||
                e instanceof W ||
                'class' !== e.committer.name ||
                e.committer.parts.length > 1
              )
                throw new Error(
                  'The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.',
                );
              var n = e.committer,
                i = n.element,
                r = Qt.get(e);
              void 0 === r &&
                (i.setAttribute('class', n.strings.join(' ')), Qt.set(e, (r = new Set())));
              var o = i.classList || new Kt(i);
              for (var a in (r.forEach(function(e) {
                e in t || (o.remove(e), r.delete(e));
              }),
              t)) {
                var s = t[a];
                s != r.has(a) && (s ? (o.add(a), r.add(a)) : (o.remove(a), r.delete(a)));
              }
              'function' == typeof o.commit && o.commit();
            };
          }),
          function() {
            var t = Jt.apply(void 0, arguments);
            return N.set(t, !0), t;
          });
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
      */ function ee() {
        var t = m([' <mwc-icon class="mdc-button__icon"> ', ' </mwc-icon>']);
        return (
          (ee = function() {
            return t;
          }),
          t
        );
      }
      function ne() {
        var t = m([
          ' <button id="button" class="mdc-button ',
          '" ?disabled="',
          '" aria-label="',
          '"> <div class="mdc-button__ripple"></div> <span class="leading-icon"> <slot name="icon"> ',
          ' </slot> </span> <span class="mdc-button__label">',
          '</span> <slot></slot> <span class="trailing-icon"> <slot name="trailingIcon"> ',
          ' </slot> </span> </button>',
        ]);
        return (
          (ne = function() {
            return t;
          }),
          t
        );
      }
      var ie = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          var t;
          return (
            i(this, n),
            ((t = e.apply(this, arguments)).raised = !1),
            (t.unelevated = !1),
            (t.outlined = !1),
            (t.dense = !1),
            (t.disabled = !1),
            (t.trailingIcon = !1),
            (t.fullwidth = !1),
            (t.icon = ''),
            (t.label = ''),
            t
          );
        }
        return (
          o(n, [
            {
              key: 'createRenderRoot',
              value: function() {
                return this.attachShadow({ mode: 'open', delegatesFocus: !0 });
              },
            },
            {
              key: 'focus',
              value: function() {
                var t = this.buttonElement;
                if (t) {
                  var e = t.ripple;
                  e && e.handleFocus(), t.focus();
                }
              },
            },
            {
              key: 'blur',
              value: function() {
                var t = this.buttonElement;
                if (t) {
                  var e = t.ripple;
                  e && e.handleBlur(), t.blur();
                }
              },
            },
            {
              key: 'render',
              value: function() {
                var t = {
                  'mdc-button--raised': this.raised,
                  'mdc-button--unelevated': this.unelevated,
                  'mdc-button--outlined': this.outlined,
                  'mdc-button--dense': this.dense,
                };
                return et(
                  ne(),
                  te(t),
                  this.disabled,
                  this.label || this.icon,
                  this.icon && !this.trailingIcon ? this.renderIcon(this.icon) : '',
                  this.label,
                  this.icon && this.trailingIcon ? this.renderIcon(this.icon) : '',
                );
              },
            },
            {
              key: 'renderIcon',
              value: function(t) {
                return et(ee(), t);
              },
            },
            {
              key: 'firstUpdated',
              value: function() {
                this.buttonElement.ripple = Zt({ surfaceNode: this.buttonElement, unbounded: !1 });
              },
            },
          ]),
          n
        );
      })(kt);
      function re() {
        var t = m([
          '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(.4,0,.2,1);background-color:#fff}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size,.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height,2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight,500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing,.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration,none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform,uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:0;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:0}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-button{height:36px}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover,0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active,0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled,0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12))}:host{display:inline-flex;outline:0;vertical-align:top}:host([disabled]){pointer-events:none}:host([fullwidth]){width:100%}.mdc-button{flex:auto;overflow:hidden;padding:0 var(--mdc-button-horizontal-padding,8px) 0 var(--mdc-button-horizontal-padding,8px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding,16px) 0 var(--mdc-button-horizontal-padding,16px)}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding,16px) - var(--mdc-button-outline-width,1px)) 0 calc(var(--mdc-button-horizontal-padding,16px) - var(--mdc-button-outline-width,1px));border-width:var(--mdc-button-outline-width,1px);border-color:var(--mdc-button-outline-color,var(--mdc-theme-primary,#6200ee))}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}.mdc-button .mdc-button__ripple{border-radius:0}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color,rgba(0,0,0,.12));color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38));border-color:var(--mdc-button-disabled-outline-color,var(--mdc-button-disabled-ink-color,rgba(0,0,0,.38)))}',
        ]);
        return (
          (re = function() {
            return t;
          }),
          t
        );
      }
      Ot([ft({ type: Boolean })], ie.prototype, 'raised', void 0),
        Ot([ft({ type: Boolean })], ie.prototype, 'unelevated', void 0),
        Ot([ft({ type: Boolean })], ie.prototype, 'outlined', void 0),
        Ot([ft({ type: Boolean })], ie.prototype, 'dense', void 0),
        Ot([ft({ type: Boolean, reflect: !0 })], ie.prototype, 'disabled', void 0),
        Ot([ft({ type: Boolean })], ie.prototype, 'trailingIcon', void 0),
        Ot([ft({ type: Boolean, reflect: !0 })], ie.prototype, 'fullwidth', void 0),
        Ot([ft({ type: String })], ie.prototype, 'icon', void 0),
        Ot([ft({ type: String })], ie.prototype, 'label', void 0),
        Ot([ht('#button')], ie.prototype, 'buttonElement', void 0);
      var oe = xt(re()),
        ae = (function(t) {
          a(n, t);
          var e = f(n);
          function n() {
            return i(this, n), e.apply(this, arguments);
          }
          return n;
        })(ie);
      function se() {
        var t = m([
          '.block{display:block}[hidden]{display:none!important}.invisible{visibility:hidden!important}.relative{position:relative}.fit{position:absolute;top:0;right:0;bottom:0;left:0}body.fullbleed{margin:0;height:100vh}.scroll{-webkit-overflow-scrolling:touch;overflow:auto}.fixed-bottom,.fixed-left,.fixed-right,.fixed-top{position:fixed}.fixed-top{top:0;left:0;right:0}.fixed-right{top:0;right:0;bottom:0}.fixed-bottom{right:0;bottom:0;left:0}.fixed-left{top:0;bottom:0;left:0}',
        ]);
        return (
          (se = function() {
            return t;
          }),
          t
        );
      }
      function ce() {
        var t = m([
          '.flex,.flex-1{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px}.flex-2{-ms-flex:2;-webkit-flex:2;flex:2}.flex-3{-ms-flex:3;-webkit-flex:3;flex:3}.flex-4{-ms-flex:4;-webkit-flex:4;flex:4}.flex-5{-ms-flex:5;-webkit-flex:5;flex:5}.flex-6{-ms-flex:6;-webkit-flex:6;flex:6}.flex-7{-ms-flex:7;-webkit-flex:7;flex:7}.flex-8{-ms-flex:8;-webkit-flex:8;flex:8}.flex-9{-ms-flex:9;-webkit-flex:9;flex:9}.flex-10{-ms-flex:10;-webkit-flex:10;flex:10}.flex-11{-ms-flex:11;-webkit-flex:11;flex:11}.flex-12{-ms-flex:12;-webkit-flex:12;flex:12}',
        ]);
        return (
          (ce = function() {
            return t;
          }),
          t
        );
      }
      function de() {
        var t = m([
          '.layout.start{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.layout.center,.layout.center-center{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.layout.end{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}.layout.baseline{-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline}.layout.start-justified{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.layout.center-justified,.layout.center-center{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.layout.end-justified{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.layout.around-justified{-ms-flex-pack:distribute;-webkit-justify-content:space-around;justify-content:space-around}.layout.justified{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.self-start{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start}.self-center{-ms-align-self:center;-webkit-align-self:center;align-self:center}.self-end{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end}.self-stretch{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch}.self-baseline{-ms-align-self:baseline;-webkit-align-self:baseline;align-self:baseline}.layout.start-aligned{-ms-flex-line-pack:start;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.layout.end-aligned{-ms-flex-line-pack:end;-ms-align-content:flex-end;-webkit-align-content:flex-end;align-content:flex-end}.layout.center-aligned{-ms-flex-line-pack:center;-ms-align-content:center;-webkit-align-content:center;align-content:center}.layout.between-aligned{-ms-flex-line-pack:justify;-ms-align-content:space-between;-webkit-align-content:space-between;align-content:space-between}.layout.around-aligned{-ms-flex-line-pack:distribute;-ms-align-content:space-around;-webkit-align-content:space-around;align-content:space-around}',
        ]);
        return (
          (de = function() {
            return t;
          }),
          t
        );
      }
      function le() {
        var t = m([
          '.layout.horizontal-reverse,.layout.vertical-reverse{display:-ms-flexbox;display:-webkit-flex;display:flex}.layout.horizontal-reverse{-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.layout.vertical-reverse{-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.layout.wrap-reverse{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}',
        ]);
        return (
          (le = function() {
            return t;
          }),
          t
        );
      }
      function pe() {
        var t = m([
          '.layout.horizontal,.layout.vertical{display:-ms-flexbox;display:-webkit-flex;display:flex}.layout.inline{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.layout.horizontal{-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.layout.vertical{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.layout.wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.layout.no-wrap{-ms-flex-wrap:nowrap;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.layout.center,.layout.center-center{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.layout.center-justified,.layout.center-center{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.flex{-ms-flex:1 1 .000000001px;-webkit-flex:1;flex:1;-webkit-flex-basis:.000000001px;flex-basis:.000000001px}.flex-auto{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto}.flex-none{-ms-flex:none;-webkit-flex:none;flex:none}',
        ]);
        return (
          (pe = function() {
            return t;
          }),
          t
        );
      }
      (ae.styles = oe), (ae = Ot([ut('mwc-button')], ae));
      var ue = xt(pe()),
        fe = (xt(le()), xt(de()));
      xt(ce()), xt(se());
      function he() {
        var t = m([
          ':host([ghost]){height:0}:host([ghost]) > .content{display:none}:host{border-radius:4px;background-color:#f0f0f0;overflow:hidden}.title{height:32px;line-height:32px;background-color:#d8d8d8}.value{color:#393939}.delta{color:#8c8c8c}',
        ]);
        return (
          (he = function() {
            return t;
          }),
          t
        );
      }
      function me() {
        var t = m([
          ' <div class="layout vertical flex content" style="height: 100%;"> <div class="layout vertical flex"> <div class="title">',
          '</div> <div class="layout vertical flex center-justified"> <div class="value">',
          '</div> <div class="delta">',
          '</div> </div> </div> </div> ',
        ]);
        return (
          (me = function() {
            return t;
          }),
          t
        );
      }
      var ve = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          var t;
          return i(this, n), ((t = e.call(this)).title = ''), (t.value = ''), (t.delta = ''), t;
        }
        return (
          o(
            n,
            [
              {
                key: 'render',
                value: function() {
                  return et(me(), this.title, this.value, this.delta);
                },
              },
              { key: 'firstUpdated', value: function() {} },
            ],
            [
              {
                key: 'properties',
                get: function() {
                  return {
                    title: { type: String },
                    value: { type: String },
                    delta: { type: String },
                  };
                },
              },
              {
                key: 'styles',
                get: function() {
                  return [ue, fe, xt(he())];
                },
              },
            ],
          ),
          n
        );
      })(kt);
      function ge() {
        var t = m([
          ':host{}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}.module-content{margin:4px 8px 4px 8px}.module-footer{height:24px;font-family:Roboto;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;color:#393939;margin:0 8px 4px 8px}.action-button{}.action-button{margin:8px;width:100%;min-width:288px}.min-margin > covid-sc-data-card:nth-of-type(1){margin-right:8px}.min-margin > covid-sc-data-card:nth-of-type(2){margin-left:8px}.min-margin{min-width:288px}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}.buttonlink{text-decoration:none}mwc-button{--mdc-theme-primary:#e9437a;--mdc-theme-on-primary:white}.data-table{border-radius:4px;overflow:hidden}.data-table-row{height:48px;font-size:16px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.data-table-row > div{flex:1;text-align:left}.data-table-row > div:nth-of-type(1){margin-left:10px}.data-table > div:nth-of-type(even){background-color:#d8d8d8}.data-table > div:nth-of-type(odd){background-color:#f0f0f0}.footer{width:100%;height:41px;background-color:#393939;font-family:Roboto;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#d8d8d8}.footer > div > a{color:#fff}@media only screen and (min-width : 628px){.action-button{}.action-button{margin:8px;min-width:288px;flex-grow:1}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}}',
        ]);
        return (
          (ge = function() {
            return t;
          }),
          t
        );
      }
      function be() {
        var t = m([
          ' <div class="layout horizontal center data-table-row"> <div>',
          ':</div> <div class="layout horizontal center data-table-row"> <div>',
          '</div> <div>(',
          ')</div> </div> </div> ',
        ]);
        return (
          (be = function() {
            return t;
          }),
          t
        );
      }
      function _e() {
        var t = m([
          ' <div class="layout vertical module-container"> <div class="module-title"> Get Help </div> <div class="layout horizontal center-justified wrap"> <a href="https://covidnearyou.org/" target="_blank" class="layout flex action-button buttonlink"><mwc-button alt="Get help" unelevated label="CHECK SYMPTOMS" style="width: inherit;"></mwc-button></a> <a href="https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19" target="_blank" class="layout flex action-button buttonlink"><mwc-button alt="Get help" unelevated label="FIND RESOURCES" style="width: inherit;"></mwc-button></a> </div> </div> <div class="layout vertical module-container"> <div class="module-title"> Confirmed Cases/Deaths </div> <div class="layout horizontal center-justified wrap"> <div class="layout horizontal flex action-button min-margin" style="max-width:392px;"> <covid-sc-data-card title="SC Cases" value="',
          '" delta="',
          '"></covid-sc-data-card> <covid-sc-data-card title="SC Deaths" value="',
          '" delta="',
          '"></covid-sc-data-card> </div> <div class="layout horizontal flex action-button min-margin" style="max-width:392px;"> <covid-sc-data-card title="USA Cases" value="',
          '" delta="',
          '"></covid-sc-data-card> <covid-sc-data-card title="USA Deaths" value="',
          '" delta="',
          '"></covid-sc-data-card> </div> </div> <div class="module-footer"> ',
          ' </div> </div> <div class="layout vertical module-container"> <div class="module-title"> Confirmed Cases/Deaths By Region </div> <covid-sc-map .map="',
          '" .hotspots="',
          '" class="module-content" style="height:400px; box-sizing:border-box; width: calc(100%-8px);"></covid-sc-map> <div class="module-footer"> ',
          ' </div> </div> <div class="layout vertical module-container"> <div class="module-title"> Confirmed Cases/Deaths By Region </div> <div class="layout vertical data-table module-content"> <div class="layout horizontal center data-table-row"> <div><b>County</b></div> <div class="layout horizontal center data-table-row"> <div><b>Growth Rate</b></div> <div><b>Change</b></div> </div> </div> ',
          ' </div> <div class="module-footer"> ',
          ' </div> </div> <div class="footer layout vertical center-justified"> <div> Powered by <a href="https://www.hank.ai/" class="buttonlink">Hank.ai</a> and <a href="https://www.krum.io/" class="buttonlink">Krumware</a> </div> </div> ',
        ]);
        return (
          (_e = function() {
            return t;
          }),
          t
        );
      }
      customElements.define('covid-sc-data-card', ve);
      var ye = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          var t;
          return (
            i(this, n), ((t = e.call(this)).countyList = []), (t.map = {}), (t.hotspots = {}), t
          );
        }
        return (
          o(
            n,
            [
              {
                key: 'render',
                value: function() {
                  return et(
                    _e(),
                    this.counts && this.counts.state && this.counts.state.confirmed
                      ? this.counts.state.confirmed
                      : '',
                    this.counts && this.counts.state && this.counts.state.confirmedChanged
                      ? this.counts.state.confirmedChanged
                      : '',
                    this.counts && this.counts.state && this.counts.state.deaths
                      ? this.counts.state.deaths
                      : '',
                    this.counts && this.counts.state && this.counts.state.deathsChanged
                      ? this.counts.state.deathsChanged
                      : '',
                    this.counts && this.counts.national && this.counts.national.confirmed
                      ? this.counts.national.confirmed
                      : '',
                    this.counts && this.counts.national && this.counts.national.confirmedChanged
                      ? this.counts.national.confirmedChanged
                      : '',
                    this.counts && this.counts.national && this.counts.national.deaths
                      ? this.counts.national.deaths
                      : '',
                    this.counts && this.counts.national && this.counts.national.deathsChanged
                      ? this.counts.national.deathsChanged
                      : '',
                    this.counts && this.counts.national && this.counts.national.lastUpdate
                      ? 'Updated '.concat(this.counts.national.lastUpdate)
                      : '',
                    this.map,
                    this.hotspots,
                    this.counts && this.counts.national && this.counts.national.lastUpdate
                      ? 'Updated '.concat(this.counts.national.lastUpdate)
                      : '',
                    this.countyList.map(function(t) {
                      return et(
                        be(),
                        t.County,
                        t.Confirmed_POPADJ_GF,
                        t.Confirmed_POPADJ_GF_Change,
                      );
                    }),
                    this.counts && this.counts.national && this.counts.national.lastUpdate
                      ? 'Updated '.concat(this.counts.national.lastUpdate)
                      : '',
                  );
                },
              },
              {
                key: 'firstUpdated',
                value: function() {
                  this.getData(), (this.counts = {});
                },
              },
              {
                key: 'getData',
                value: function() {
                  var t = this,
                    e = ['SC', 'NC', 'GA'],
                    n = {},
                    i = {},
                    r = new Date();
                  r.setDate(r.getDate() - 1);
                  var o = 'https://covidsc.com/data/covid_latest.json?v=6';
                  function a(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return t.toLocaleString(void 0, { maximumFractionDigits: e });
                  }
                  console.log('loading json file '.concat(o)),
                    fetch(o)
                      .then(function(t) {
                        return t.json();
                      })
                      .then(function(r) {
                        var o = [];
                        r.forEach(function(r) {
                          (r.LastUpdate = r.LastUpdate.replace(' ', 'T')),
                            'USA' === r.Country &&
                              e.includes(r.State) &&
                              'ALL' !== r.County &&
                              (o.push({
                                State: r.State,
                                County: r.County,
                                Confirmed_POPADJ_GF: r.Confirmed_POPADJ_GF,
                                Confirmed_POPADJ_GF_Change: r.Confirmed_POPADJ_GF_Change,
                              }),
                              r.Confirmed > 0 &&
                                (n[r.County] = {
                                  center: { lat: r.Lat, lng: r.Long },
                                  population: 500 * r.Confirmed,
                                  header: ''
                                    .concat(r.County, ', ')
                                    .concat(r.State, ' Confirmed Cases'),
                                  content: ''
                                    .concat(r.Confirmed, ' confirmed cases (+')
                                    .concat(r.Confirmed_Change, ' since yesterday)'),
                                  color: '#FF0000',
                                  strokeOpacity: 0.8,
                                }),
                              r.Deaths > 0 &&
                                (i[r.County] = {
                                  center: { lat: r.Lat, lng: r.Long },
                                  population: 700 * r.Deaths,
                                  header: ''.concat(r.County, ', SC Deaths'),
                                  content: ''
                                    .concat(r.Deaths, ' deaths (+')
                                    .concat(r.Deaths_Change, ' since yesterday)'),
                                  color: '#0000FF',
                                  strokeOpacity: 0.8,
                                })),
                            'USA' === r.Country &&
                              'SC' === r.State &&
                              'ALL' === r.County &&
                              ((t.counts.state = {
                                confirmed: a(r.Confirmed),
                                deaths: a(r.Deaths),
                                confirmedChanged: a(r.Confirmed_Change),
                                deathsChanged: a(r.Deaths_Change),
                              }),
                              r.Confirmed_Change > 0 &&
                                (t.counts.state.confirmedChanged = '+'.concat(
                                  t.counts.state.confirmedChanged,
                                )),
                              r.Deaths_Change > 0 &&
                                (t.counts.state.deathsChanged = '+'.concat(
                                  t.counts.state.deathsChanged,
                                )),
                              (t.counts.state.lastUpdate = new Date(
                                r.LastUpdate,
                              ).toLocaleDateString()),
                              console.log('State Counts', t.counts.state)),
                            'USA' === r.Country &&
                              'ALL' === r.State &&
                              ((t.counts.national = {
                                confirmed: a(r.Confirmed),
                                deaths: a(r.Deaths),
                                confirmedChanged: a(r.Confirmed_Change),
                                deathsChanged: a(r.Deaths_Change),
                              }),
                              r.Confirmed_Change > 0 &&
                                (t.counts.national.confirmedChanged = '+'.concat(
                                  t.counts.national.confirmedChanged,
                                )),
                              r.Deaths_Change > 0 &&
                                (t.counts.national.deathsChanged = '+'.concat(
                                  t.counts.national.deathsChanged,
                                )),
                              (t.counts.national.lastUpdate = new Date(
                                r.LastUpdate,
                              ).toLocaleDateString()),
                              console.log('National Counts', t.counts.national));
                        }),
                          (o = o.sort(function(t, e) {
                            return e.Confirmed_POPADJ_GF - t.Confirmed_POPADJ_GF;
                          }));
                        for (var s = 0; s < o.length; s++) {
                          var c = o[s];
                          c.Confirmed_POPADJ_GF > 10 &&
                            ((c.County += ' County'),
                            (c.Confirmed_POPADJ_GF = c.Confirmed_POPADJ_GF.toFixed(2)),
                            (c.Confirmed_POPADJ_GF_Change = c.Confirmed_POPADJ_GF_Change.toFixed(
                              2,
                            )),
                            c.Confirmed_POPADJ_GF_Change >= 0 &&
                              (c.Confirmed_POPADJ_GF_Change = '+'.concat(
                                c.Confirmed_POPADJ_GF_Change,
                              )),
                            (t.countyList = [].concat(v(t.countyList), [c])));
                        }
                        (t.hotspots = { confirmedCircles: n, deathCircles: i }), t.requestUpdate();
                      });
                },
              },
            ],
            [
              {
                key: 'properties',
                get: function() {
                  return { title: { type: String }, page: { type: String } };
                },
              },
              {
                key: 'styles',
                get: function() {
                  return [ue, fe, xt(ge())];
                },
              },
            ],
          ),
          n
        );
      })(kt);
      function xe() {
        var t = m([
          ':host{}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.action-button{width:200px}.action-button{margin:8px;min-width:288px;flex-grow:1}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}.buttonlink{text-decoration:none}',
        ]);
        return (
          (xe = function() {
            return t;
          }),
          t
        );
      }
      function we() {
        var t = m([
          ' <div class="layout vertical module-container"> chat <a href="/">return to home</a> </div> ',
        ]);
        return (
          (we = function() {
            return t;
          }),
          t
        );
      }
      customElements.define('covid-sc-page-home', ye);
      var ke = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          return i(this, n), e.call(this);
        }
        return (
          o(
            n,
            [
              {
                key: 'render',
                value: function() {
                  return et(we());
                },
              },
              { key: 'firstUpdated', value: function() {} },
            ],
            [
              {
                key: 'properties',
                get: function() {
                  return { title: { type: String }, page: { type: String } };
                },
              },
              {
                key: 'styles',
                get: function() {
                  return [ue, fe, xt(xe())];
                },
              },
            ],
          ),
          n
        );
      })(kt);
      function Se() {
        var t = m([
          ':host{}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.action-button{width:200px}.action-button{margin:8px;min-width:288px;flex-grow:1}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}covid-sc-data-card{min-width:136px;max-width:188px;height:94px;flex-grow:1}covid-sc-data-card[ghost]{max-width:188px;height:0;flex-grow:1}.buttonlink{text-decoration:none}',
        ]);
        return (
          (Se = function() {
            return t;
          }),
          t
        );
      }
      function Ce() {
        var t = m([
          ' <div class="layout vertical module-container"> resources <a href="/">return to home</a> </div> ',
        ]);
        return (
          (Ce = function() {
            return t;
          }),
          t
        );
      }
      customElements.define('covid-sc-page-symptoms', ke);
      var Ae = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          return i(this, n), e.call(this);
        }
        return (
          o(
            n,
            [
              {
                key: 'render',
                value: function() {
                  return et(Ce());
                },
              },
              { key: 'firstUpdated', value: function() {} },
            ],
            [
              {
                key: 'properties',
                get: function() {
                  return { title: { type: String }, page: { type: String } };
                },
              },
              {
                key: 'styles',
                get: function() {
                  return [ue, fe, xt(Se())];
                },
              },
            ],
          ),
          n
        );
      })(kt);
      customElements.define('covid-sc-page-resources', Ae);
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
      var Te = {
          FIXED_CLASS: 'mdc-top-app-bar--fixed',
          FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
          SHORT_CLASS: 'mdc-top-app-bar--short',
          SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
          SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
        },
        Ee = { DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100, MAX_TOP_APP_BAR_HEIGHT: 128 },
        Pe = {
          ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
          NAVIGATION_EVENT: 'MDCTopAppBar:nav',
          NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
          ROOT_SELECTOR: '.mdc-top-app-bar',
          TITLE_SELECTOR: '.mdc-top-app-bar__title',
        },
        Oe = (function(t) {
          function e(n) {
            return t.call(this, Pt({}, e.defaultAdapter, n)) || this;
          }
          return (
            Et(e, t),
            Object.defineProperty(e, 'strings', {
              get: function() {
                return Pe;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, 'cssClasses', {
              get: function() {
                return Te;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, 'numbers', {
              get: function() {
                return Ee;
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
        })(jt),
        Re = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.wasDocked_ = !0),
              (n.isDockedShowing_ = !0),
              (n.currentAppBarOffsetTop_ = 0),
              (n.isCurrentlyBeingResized_ = !1),
              (n.resizeThrottleId_ = 0),
              (n.resizeDebounceId_ = 0),
              (n.lastScrollPosition_ = n.adapter_.getViewportScrollY()),
              (n.topAppBarHeight_ = n.adapter_.getTopAppBarHeight()),
              n
            );
          }
          return (
            Et(e, t),
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
                }, Ee.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),
                (this.isCurrentlyBeingResized_ = !0),
                this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_),
                (this.resizeDebounceId_ = setTimeout(function() {
                  t.handleTargetScroll(),
                    (t.isCurrentlyBeingResized_ = !1),
                    (t.resizeDebounceId_ = 0);
                }, Ee.DEBOUNCE_THROTTLE_RESIZE_TIME_MS));
            }),
            (e.prototype.checkForUpdate_ = function() {
              var t = -this.topAppBarHeight_,
                e = this.currentAppBarOffsetTop_ < 0,
                n = this.currentAppBarOffsetTop_ > t,
                i = e && n;
              if (i) this.wasDocked_ = !1;
              else {
                if (!this.wasDocked_) return (this.wasDocked_ = !0), !0;
                if (this.isDockedShowing_ !== n) return (this.isDockedShowing_ = n), !0;
              }
              return i;
            }),
            (e.prototype.moveTopAppBar_ = function() {
              if (this.checkForUpdate_()) {
                var t = this.currentAppBarOffsetTop_;
                Math.abs(t) >= this.topAppBarHeight_ && (t = -Ee.MAX_TOP_APP_BAR_HEIGHT),
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
        })(Oe);
      var Ie = !1,
        Ne = function() {},
        De = {
          get passive() {
            return (Ie = !0), !1;
          },
        };
      function ze() {
        var t = m([
          ' <header class="mdc-top-app-bar ',
          '"> <div class="mdc-top-app-bar__row"> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation"> <slot name="navigationIcon" @click="',
          '"></slot> ',
          ' </section> ',
          ' <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar"> <slot name="actionItems"></slot> </section> </div> </header> <div class="',
          '"> <slot></slot> </div> ',
        ]);
        return (
          (ze = function() {
            return t;
          }),
          t
        );
      }
      function Le() {
        var t = m([
          '<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">',
          '</section>',
        ]);
        return (
          (Le = function() {
            return t;
          }),
          t
        );
      }
      function je() {
        var t = m(['<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>']);
        return (
          (je = function() {
            return t;
          }),
          t
        );
      }
      document.addEventListener('x', Ne, De), document.removeEventListener('x', Ne);
      var Ue = Ie ? { passive: !0 } : void 0,
        Fe = (function(t) {
          a(n, t);
          var e = f(n);
          function n() {
            var t;
            return (
              i(this, n),
              ((t = e.apply(this, arguments)).mdcFoundationClass = Oe),
              (t.centerTitle = !1),
              (t.handleTargetScroll = function() {
                t.mdcFoundation.handleTargetScroll();
              }),
              (t.handleNavigationClick = function() {
                t.mdcFoundation.handleNavigationClick();
              }),
              t
            );
          }
          return (
            o(n, [
              {
                key: 'updateRootPosition',
                value: function() {
                  if (this.mdcRoot) {
                    var t = this.scrollTarget === window;
                    this.mdcRoot.style.position = t ? '' : 'absolute';
                  }
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = et(je());
                  return (
                    this.centerTitle && (t = et(Le(), t)),
                    et(
                      ze(),
                      te(this.barClasses()),
                      this.handleNavigationClick,
                      this.centerTitle ? null : t,
                      this.centerTitle ? t : null,
                      te(this.contentClasses()),
                    )
                  );
                },
              },
              {
                key: 'createAdapter',
                value: function() {
                  var t,
                    e = this;
                  return Object.assign(
                    Object.assign(
                      {},
                      ((t = this.mdcRoot),
                      {
                        addClass: function(e) {
                          t.classList.add(e);
                        },
                        removeClass: function(e) {
                          t.classList.remove(e);
                        },
                        hasClass: function(e) {
                          return t.classList.contains(e);
                        },
                      }),
                    ),
                    {
                      setStyle: function(t, n) {
                        return e.mdcRoot.style.setProperty(t, n);
                      },
                      getTopAppBarHeight: function() {
                        return e.mdcRoot.clientHeight;
                      },
                      notifyNavigationIconClicked: function() {
                        e.dispatchEvent(
                          new Event(Pe.NAVIGATION_EVENT, { bubbles: !0, cancelable: !0 }),
                        );
                      },
                      getViewportScrollY: function() {
                        return e.scrollTarget instanceof Window
                          ? e.scrollTarget.pageYOffset
                          : e.scrollTarget.scrollTop;
                      },
                      getTotalActionItems: function() {
                        return e._actionItemsSlot.assignedNodes({ flatten: !0 }).length;
                      },
                    },
                  );
                },
              },
              {
                key: 'registerListeners',
                value: function() {
                  this.registerScrollListener();
                },
              },
              {
                key: 'unregisterListeners',
                value: function() {
                  this.unregisterScrollListener();
                },
              },
              {
                key: 'registerScrollListener',
                value: function() {
                  this.scrollTarget.addEventListener('scroll', this.handleTargetScroll, Ue);
                },
              },
              {
                key: 'unregisterScrollListener',
                value: function() {
                  this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
                },
              },
              {
                key: 'firstUpdated',
                value: function() {
                  h(s(n.prototype), 'firstUpdated', this).call(this),
                    this.updateRootPosition(),
                    this.registerListeners();
                },
              },
              {
                key: 'disconnectedCallback',
                value: function() {
                  h(s(n.prototype), 'disconnectedCallback', this).call(this),
                    this.unregisterListeners();
                },
              },
              {
                key: 'scrollTarget',
                get: function() {
                  return this._scrollTarget || window;
                },
                set: function(t) {
                  this.unregisterScrollListener();
                  var e = this.scrollTarget;
                  (this._scrollTarget = t),
                    this.updateRootPosition(),
                    this.requestUpdate('scrollTarget', e),
                    this.registerScrollListener();
                },
              },
            ]),
            n
          );
        })(
          (function(t) {
            a(n, t);
            var e = f(n);
            function n() {
              return i(this, n), e.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: 'createFoundation',
                  value: function() {
                    void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
                      this.mdcFoundationClass &&
                        ((this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter())),
                        this.mdcFoundation.init());
                  },
                },
                {
                  key: 'firstUpdated',
                  value: function() {
                    this.createFoundation();
                  },
                },
              ]),
              n
            );
          })(kt),
        );
      Ot([ht('.mdc-top-app-bar')], Fe.prototype, 'mdcRoot', void 0),
        Ot([ht('slot[name="actionItems"]')], Fe.prototype, '_actionItemsSlot', void 0),
        Ot([ft({ type: Boolean })], Fe.prototype, 'centerTitle', void 0),
        Ot([ft()], Fe.prototype, 'scrollTarget', null);
      var He = (function(t) {
        a(n, t);
        var e = f(n);
        function n() {
          var t;
          return (
            i(this, n),
            ((t = e.apply(this, arguments)).mdcFoundationClass = Re),
            (t.prominent = !1),
            (t.dense = !1),
            (t.handleResize = function() {
              t.mdcFoundation.handleWindowResize();
            }),
            t
          );
        }
        return (
          o(n, [
            {
              key: 'barClasses',
              value: function() {
                return {
                  'mdc-top-app-bar--dense': this.dense,
                  'mdc-top-app-bar--prominent': this.prominent,
                  'center-title': this.centerTitle,
                };
              },
            },
            {
              key: 'contentClasses',
              value: function() {
                return {
                  'mdc-top-app-bar--fixed-adjust': !this.dense && !this.prominent,
                  'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.prominent,
                  'mdc-top-app-bar--prominent-fixed-adjust': !this.dense && this.prominent,
                  'mdc-top-app-bar--dense-prominent-fixed-adjust': this.dense && this.prominent,
                };
              },
            },
            {
              key: 'registerListeners',
              value: function() {
                h(s(n.prototype), 'registerListeners', this).call(this),
                  window.addEventListener('resize', this.handleResize, Ue);
              },
            },
            {
              key: 'unregisterListeners',
              value: function() {
                h(s(n.prototype), 'unregisterListeners', this).call(this),
                  window.removeEventListener('resize', this.handleResize);
              },
            },
          ]),
          n
        );
      })(Fe);
      function Ve() {
        var t = m([
          '.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size,1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height,2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight,500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing,.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform,inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(.4,0,.2,1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity:0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow,0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12))}',
        ]);
        return (
          (Ve = function() {
            return t;
          }),
          t
        );
      }
      Ot([ft({ type: Boolean, reflect: !0 })], He.prototype, 'prominent', void 0),
        Ot([ft({ type: Boolean, reflect: !0 })], He.prototype, 'dense', void 0);
      var Be = xt(Ve()),
        Me = (function(t) {
          a(n, t);
          var e = f(n);
          function n() {
            return i(this, n), e.apply(this, arguments);
          }
          return n;
        })(He);
      function Ge() {
        var t = m([
          ':host{min-height:100vh;font-size:calc(10px + 2vmin);color:#1a2b42;margin:0 auto;text-align:center;--mdc-theme-primary:#0b4192e0;--mdc-theme-on-primary:white}main{margin-left:auto;margin-right:auto;flex-grow:1;align-items:center;max-width:816px}.logo > svg{margin-top:36px;animation:app-logo-spin infinite 20s linear}@keyframes app-logo-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}.action-button{margin:8px;width:288px}.module-container{font-family:Roboto;font-size:16px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#393939}.module-title{margin:10px 8px 4px 8px;text-align:left}',
        ]);
        return (
          (Ge = function() {
            return t;
          }),
          t
        );
      }
      function qe() {
        var t = m(['<covid-sc-page-home></covid-sc-page-home>']);
        return (
          (qe = function() {
            return t;
          }),
          t
        );
      }
      function Je() {
        var t = m(['<covid-sc-page-resources></covid-sc-page-resources>']);
        return (
          (Je = function() {
            return t;
          }),
          t
        );
      }
      function We() {
        var t = m(['<covid-sc-page-symptoms></covid-sc-page-symptoms>']);
        return (
          (We = function() {
            return t;
          }),
          t
        );
      }
      function Xe() {
        var t = m([
          ' <mwc-top-app-bar dense> <div slot="title">COVID SC</div> <div></div> </mwc-top-app-bar> <main> ',
          ' </main> ',
        ]);
        return (
          (Xe = function() {
            return t;
          }),
          t
        );
      }
      (Me.styles = Be), (Me = Ot([ut('mwc-top-app-bar')], Me));
      var Ye = t(
        'CovidScApp',
        (function(t) {
          a(n, t);
          var e = f(n);
          function n() {
            var t, r;
            return (
              i(this, n),
              (t = e.call(this)),
              (r = function(e) {
                return t.handleNavigation(e);
              }),
              document.body.addEventListener('click', function(t) {
                if (
                  !(t.defaultPrevented || 0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey)
                ) {
                  var e = t.composedPath().filter(function(t) {
                    return 'A' === t.tagName;
                  })[0];
                  if (
                    e &&
                    !e.target &&
                    !e.hasAttribute('download') &&
                    'external' !== e.getAttribute('rel')
                  ) {
                    var n = e.href;
                    if (n && -1 === n.indexOf('mailto:')) {
                      var i = window.location,
                        o = i.origin || i.protocol + '//' + i.host;
                      0 === n.indexOf(o) &&
                        (t.preventDefault(),
                        n !== i.href && (window.history.pushState({}, '', n), r(i, t)));
                    }
                  }
                }
              }),
              window.addEventListener('popstate', function(t) {
                return r(window.location, t);
              }),
              r(window.location, null),
              (t.location = '/'),
              t
            );
          }
          return (
            o(
              n,
              [
                {
                  key: 'render',
                  value: function() {
                    return et(Xe(), this.page);
                  },
                },
                {
                  key: 'renderPage',
                  value: function(t) {
                    switch (t.pathname) {
                      case '/symptoms':
                        return et(We());
                      case '/resources':
                        return et(Je());
                      default:
                        return et(qe());
                    }
                  },
                },
                { key: 'firstUpdated', value: function() {} },
                {
                  key: 'handleNavigation',
                  value: function(t) {
                    (this.location = t), (this.page = this.renderPage(t));
                  },
                },
              ],
              [
                {
                  key: 'properties',
                  get: function() {
                    return { title: { type: String }, page: { type: String } };
                  },
                },
                {
                  key: 'styles',
                  get: function() {
                    return [ue, fe, xt(Ge())];
                  },
                },
              ],
            ),
            n
          );
        })(kt),
      );
      customElements.define('covid-sc-app', Ye);
    },
  };
});
//# sourceMappingURL=covid-sc-app-4be8eadd.js.map
