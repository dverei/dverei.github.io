/*!
 * seqviz - seqviz - 3.0.23 
 * provided and maintained by Lattice Automation (https://latticeautomation.com/) 
 * LICENSE MIT
 */
! function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("seqviz", [], e) : "object" == typeof exports ? exports.seqviz = e() : t.seqviz = e()
}(window, (function () {
	return n = {}, t.m = e = [function (t, e, n) {
		"use strict";
		t.exports = n(92)
	}, function (t, e) {
		(function () {
			t.exports = {
				Element: 1,
				Attribute: 2,
				Text: 3,
				CData: 4,
				EntityReference: 5,
				EntityDeclaration: 6,
				ProcessingInstruction: 7,
				Comment: 8,
				Document: 9,
				DocType: 10,
				DocumentFragment: 11,
				NotationDeclaration: 12,
				Declaration: 201,
				Raw: 202,
				AttributeDeclaration: 203,
				ElementDeclaration: 204,
				Dummy: 205
			}
		}).call(this)
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = {
				a: "t",
				t: "a",
				c: "g",
				g: "c",
				A: "T",
				T: "A",
				C: "G",
				G: "C",
				r: "y",
				R: "Y",
				y: "r",
				Y: "R",
				S: "S",
				s: "s",
				W: "W",
				w: "w",
				d: "h",
				D: "H",
				h: "d",
				H: "D",
				k: "m",
				K: "M",
				m: "k",
				M: "K",
				v: "b",
				V: "B",
				b: "v",
				B: "V",
				N: "N",
				n: "n",
				X: "X",
				x: "x",
				U: "A",
				u: "a"
			},
			a = e.dnaComplement = function (t) {
				if (!t) return {
					seq: "",
					compSeq: ""
				};
				for (var e = "", n = "", a = 0, c = t.length; a < c; a += 1) r[t[a]] && (e += t[a], n += r[t[a]]);
				return {
					seq: e,
					compSeq: n
				}
			},
			c = (e.reverseComplement = function (t) {
				return a(t).compSeq.split("").reverse().join("")
			}, e.trimCarriageReturn = function (t) {
				return t.replace(/^[\n\r]+|[\n\r]+$/g, "")
			}, e.extractDate = function (t) {
				var e = Date.now();
				return t.forEach((function (t) {
					Date.parse(t) && (e = Date.parse(t))
				})), e
			}, e.firstElement = function (t) {
				if (Array.isArray(t)) return t[0]
			}, new Set(["FWD", "FORWARD", "FOR", "1", 1])),
			o = new Set(["REV", "REVERSE", "-1", -1]);
		e.directionality = function (t) {
			return t ? c.has(t) ? 1 : o.has(t) ? -1 : 0 : 0
		}, e.partFactory = function () {
			return {
				name: "",
				date: (new Date).getTime(),
				seq: "",
				compSeq: "",
				tags: [],
				annotations: [],
				primers: [],
				cutSites: [],
				note: ""
			}
		}
	}, function (t, e, n) {
		"use strict";

		function r(t, e) {
			var n = "$ " + t;
			if (!(n in g)) throw new SyntaxError("intrinsic " + t + " does not exist!");
			if (void 0 === g[n] && !e) throw new c("intrinsic " + t + " exists, but is not available. Please file an issue!");
			return g[n]
		}
		var a, c = TypeError,
			o = Object.getOwnPropertyDescriptor ? function () {
				return Object.getOwnPropertyDescriptor(arguments, "callee").get
			}() : function () {
				throw new c
			},
			i = n(25)(),
			u = Object.getPrototypeOf || function (t) {
				return t.__proto__
			},
			s = a,
			l = "undefined" == typeof Uint8Array ? a : u(Uint8Array),
			g = {
				"$ %Array%": Array,
				"$ %ArrayBuffer%": "undefined" == typeof ArrayBuffer ? a : ArrayBuffer,
				"$ %ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? a : ArrayBuffer.prototype,
				"$ %ArrayIteratorPrototype%": i ? u([][Symbol.iterator]()) : a,
				"$ %ArrayPrototype%": Array.prototype,
				"$ %ArrayProto_entries%": Array.prototype.entries,
				"$ %ArrayProto_forEach%": Array.prototype.forEach,
				"$ %ArrayProto_keys%": Array.prototype.keys,
				"$ %ArrayProto_values%": Array.prototype.values,
				"$ %AsyncFromSyncIteratorPrototype%": a,
				"$ %AsyncFunction%": void 0,
				"$ %AsyncFunctionPrototype%": a,
				"$ %AsyncGenerator%": a,
				"$ %AsyncGeneratorFunction%": void 0,
				"$ %AsyncGeneratorPrototype%": a,
				"$ %AsyncIteratorPrototype%": s && i && Symbol.asyncIterator ? s[Symbol.asyncIterator]() : a,
				"$ %Atomics%": "undefined" == typeof Atomics ? a : Atomics,
				"$ %Boolean%": Boolean,
				"$ %BooleanPrototype%": Boolean.prototype,
				"$ %DataView%": "undefined" == typeof DataView ? a : DataView,
				"$ %DataViewPrototype%": "undefined" == typeof DataView ? a : DataView.prototype,
				"$ %Date%": Date,
				"$ %DatePrototype%": Date.prototype,
				"$ %decodeURI%": decodeURI,
				"$ %decodeURIComponent%": decodeURIComponent,
				"$ %encodeURI%": encodeURI,
				"$ %encodeURIComponent%": encodeURIComponent,
				"$ %Error%": Error,
				"$ %ErrorPrototype%": Error.prototype,
				"$ %eval%": eval,
				"$ %EvalError%": EvalError,
				"$ %EvalErrorPrototype%": EvalError.prototype,
				"$ %Float32Array%": "undefined" == typeof Float32Array ? a : Float32Array,
				"$ %Float32ArrayPrototype%": "undefined" == typeof Float32Array ? a : Float32Array.prototype,
				"$ %Float64Array%": "undefined" == typeof Float64Array ? a : Float64Array,
				"$ %Float64ArrayPrototype%": "undefined" == typeof Float64Array ? a : Float64Array.prototype,
				"$ %Function%": Function,
				"$ %FunctionPrototype%": Function.prototype,
				"$ %Generator%": a,
				"$ %GeneratorFunction%": void 0,
				"$ %GeneratorPrototype%": a,
				"$ %Int8Array%": "undefined" == typeof Int8Array ? a : Int8Array,
				"$ %Int8ArrayPrototype%": "undefined" == typeof Int8Array ? a : Int8Array.prototype,
				"$ %Int16Array%": "undefined" == typeof Int16Array ? a : Int16Array,
				"$ %Int16ArrayPrototype%": "undefined" == typeof Int16Array ? a : Int8Array.prototype,
				"$ %Int32Array%": "undefined" == typeof Int32Array ? a : Int32Array,
				"$ %Int32ArrayPrototype%": "undefined" == typeof Int32Array ? a : Int32Array.prototype,
				"$ %isFinite%": isFinite,
				"$ %isNaN%": isNaN,
				"$ %IteratorPrototype%": i ? u(u([][Symbol.iterator]())) : a,
				"$ %JSON%": JSON,
				"$ %JSONParse%": JSON.parse,
				"$ %Map%": "undefined" == typeof Map ? a : Map,
				"$ %MapIteratorPrototype%": "undefined" != typeof Map && i ? u((new Map)[Symbol.iterator]()) : a,
				"$ %MapPrototype%": "undefined" == typeof Map ? a : Map.prototype,
				"$ %Math%": Math,
				"$ %Number%": Number,
				"$ %NumberPrototype%": Number.prototype,
				"$ %Object%": Object,
				"$ %ObjectPrototype%": Object.prototype,
				"$ %ObjProto_toString%": Object.prototype.toString,
				"$ %ObjProto_valueOf%": Object.prototype.valueOf,
				"$ %parseFloat%": parseFloat,
				"$ %parseInt%": parseInt,
				"$ %Promise%": "undefined" == typeof Promise ? a : Promise,
				"$ %PromisePrototype%": "undefined" == typeof Promise ? a : Promise.prototype,
				"$ %PromiseProto_then%": "undefined" == typeof Promise ? a : Promise.prototype.then,
				"$ %Promise_all%": "undefined" == typeof Promise ? a : Promise.all,
				"$ %Promise_reject%": "undefined" == typeof Promise ? a : Promise.reject,
				"$ %Promise_resolve%": "undefined" == typeof Promise ? a : Promise.resolve,
				"$ %Proxy%": "undefined" == typeof Proxy ? a : Proxy,
				"$ %RangeError%": RangeError,
				"$ %RangeErrorPrototype%": RangeError.prototype,
				"$ %ReferenceError%": ReferenceError,
				"$ %ReferenceErrorPrototype%": ReferenceError.prototype,
				"$ %Reflect%": "undefined" == typeof Reflect ? a : Reflect,
				"$ %RegExp%": RegExp,
				"$ %RegExpPrototype%": RegExp.prototype,
				"$ %Set%": "undefined" == typeof Set ? a : Set,
				"$ %SetIteratorPrototype%": "undefined" != typeof Set && i ? u((new Set)[Symbol.iterator]()) : a,
				"$ %SetPrototype%": "undefined" == typeof Set ? a : Set.prototype,
				"$ %SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? a : SharedArrayBuffer,
				"$ %SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? a : SharedArrayBuffer.prototype,
				"$ %String%": String,
				"$ %StringIteratorPrototype%": i ? u("" [Symbol.iterator]()) : a,
				"$ %StringPrototype%": String.prototype,
				"$ %Symbol%": i ? Symbol : a,
				"$ %SymbolPrototype%": i ? Symbol.prototype : a,
				"$ %SyntaxError%": SyntaxError,
				"$ %SyntaxErrorPrototype%": SyntaxError.prototype,
				"$ %ThrowTypeError%": o,
				"$ %TypedArray%": l,
				"$ %TypedArrayPrototype%": l ? l.prototype : a,
				"$ %TypeError%": c,
				"$ %TypeErrorPrototype%": c.prototype,
				"$ %Uint8Array%": "undefined" == typeof Uint8Array ? a : Uint8Array,
				"$ %Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? a : Uint8Array.prototype,
				"$ %Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? a : Uint8ClampedArray,
				"$ %Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? a : Uint8ClampedArray.prototype,
				"$ %Uint16Array%": "undefined" == typeof Uint16Array ? a : Uint16Array,
				"$ %Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? a : Uint16Array.prototype,
				"$ %Uint32Array%": "undefined" == typeof Uint32Array ? a : Uint32Array,
				"$ %Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? a : Uint32Array.prototype,
				"$ %URIError%": URIError,
				"$ %URIErrorPrototype%": URIError.prototype,
				"$ %WeakMap%": "undefined" == typeof WeakMap ? a : WeakMap,
				"$ %WeakMapPrototype%": "undefined" == typeof WeakMap ? a : WeakMap.prototype,
				"$ %WeakSet%": "undefined" == typeof WeakSet ? a : WeakSet,
				"$ %WeakSetPrototype%": "undefined" == typeof WeakSet ? a : WeakSet.prototype
			},
			f = n(48).call(Function.call, String.prototype.replace),
			p = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
			d = /\\(\\)?/g;
		t.exports = function (t, e) {
			if (1 < arguments.length && "boolean" != typeof e) throw new TypeError('"allowMissing" argument must be a boolean');
			var n = function (t) {
				var e = [];
				return f(t, p, (function (t, n, r, a) {
					e[e.length] = r ? f(a, d, "$1") : n || t
				})), e
			}(t);
			if (0 === n.length) return r(t, e);
			for (var a = r("%" + n[0] + "%", e), c = 1; c < n.length; c += 1) null != a && (a = a[n[c]]);
			return a
		}
	}, function (t, e, n) {
		(function () {
			var e, r, a, c, o, i, u, s, l, g, f, p, d, h, y, m, b, v = {}.hasOwnProperty;

			function w(t) {
				this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, s || (s = n(29), a = n(31), c = n(32), o = n(33), i = n(34), f = n(39), p = n(40), g = n(41), u = n(57), r = n(1), l = n(111), n(30), e = n(112))
			}
			b = n(7), m = b.isObject, y = b.isFunction, h = b.isEmpty, d = b.getValue, e = l = r = u = g = p = f = i = o = c = a = s = null, t.exports = (Object.defineProperty(w.prototype, "nodeName", {
				get: function () {
					return this.name
				}
			}), Object.defineProperty(w.prototype, "nodeType", {
				get: function () {
					return this.type
				}
			}), Object.defineProperty(w.prototype, "nodeValue", {
				get: function () {
					return this.value
				}
			}), Object.defineProperty(w.prototype, "parentNode", {
				get: function () {
					return this.parent
				}
			}), Object.defineProperty(w.prototype, "childNodes", {
				get: function () {
					return this.childNodeList && this.childNodeList.nodes || (this.childNodeList = new l(this.children)), this.childNodeList
				}
			}), Object.defineProperty(w.prototype, "firstChild", {
				get: function () {
					return this.children[0] || null
				}
			}), Object.defineProperty(w.prototype, "lastChild", {
				get: function () {
					return this.children[this.children.length - 1] || null
				}
			}), Object.defineProperty(w.prototype, "previousSibling", {
				get: function () {
					var t;
					return t = this.parent.children.indexOf(this), this.parent.children[t - 1] || null
				}
			}), Object.defineProperty(w.prototype, "nextSibling", {
				get: function () {
					var t;
					return t = this.parent.children.indexOf(this), this.parent.children[t + 1] || null
				}
			}), Object.defineProperty(w.prototype, "ownerDocument", {
				get: function () {
					return this.document() || null
				}
			}), Object.defineProperty(w.prototype, "textContent", {
				get: function () {
					var t, e, n, a, c;
					if (this.nodeType !== r.Element && this.nodeType !== r.DocumentFragment) return null;
					for (c = "", e = 0, n = (a = this.children).length; e < n; e++)(t = a[e]).textContent && (c += t.textContent);
					return c
				},
				set: function (t) {
					throw new Error("This DOM method is not implemented." + this.debugInfo())
				}
			}), w.prototype.setParent = function (t) {
				var e, n, r, a, c;
				for ((this.parent = t) && (this.options = t.options, this.stringify = t.stringify), c = [], n = 0, r = (a = this.children).length; n < r; n++) e = a[n], c.push(e.setParent(this));
				return c
			}, w.prototype.element = function (t, e, n) {
				var r, a, c, o, i, u, s, l, g, f, p;
				if ((u = null) === e && null == n && (e = (g = [{}, null])[0], n = g[1]), null == e && (e = {}), e = d(e), m(e) || (n = (f = [e, n])[0], e = f[1]), null != t && (t = d(t)), Array.isArray(t))
					for (c = 0, s = t.length; c < s; c++) a = t[c], u = this.element(a);
				else if (y(t)) u = this.element(t.apply());
				else if (m(t)) {
					for (i in t)
						if (v.call(t, i))
							if (p = t[i], y(p) && (p = p.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && 0 === i.indexOf(this.stringify.convertAttKey)) u = this.attribute(i.substr(this.stringify.convertAttKey.length), p);
							else if (!this.options.separateArrayItems && Array.isArray(p) && h(p)) u = this.dummy();
					else if (m(p) && h(p)) u = this.element(i);
					else if (this.options.keepNullNodes || null != p)
						if (!this.options.separateArrayItems && Array.isArray(p))
							for (o = 0, l = p.length; o < l; o++) a = p[o], (r = {})[i] = a, u = this.element(r);
						else m(p) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === i.indexOf(this.stringify.convertTextKey) ? u = this.element(p) : (u = this.element(i)).element(p) : u = this.element(i, p);
					else u = this.dummy()
				} else u = this.options.keepNullNodes || null !== n ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === t.indexOf(this.stringify.convertTextKey) ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && 0 === t.indexOf(this.stringify.convertCDataKey) ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && 0 === t.indexOf(this.stringify.convertCommentKey) ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && 0 === t.indexOf(this.stringify.convertRawKey) ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && 0 === t.indexOf(this.stringify.convertPIKey) ? this.instruction(t.substr(this.stringify.convertPIKey.length), n) : this.node(t, e, n) : this.dummy();
				if (null == u) throw new Error("Could not create any elements with: " + t + ". " + this.debugInfo());
				return u
			}, w.prototype.insertBefore = function (t, e, n) {
				var r, a, c, o, i;
				if (null != t ? t.type : void 0) return o = e, (c = t).setParent(this), o ? (a = children.indexOf(o), i = children.splice(a), children.push(c), Array.prototype.push.apply(children, i)) : children.push(c), c;
				if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
				return a = this.parent.children.indexOf(this), i = this.parent.children.splice(a), r = this.parent.element(t, e, n), Array.prototype.push.apply(this.parent.children, i), r
			}, w.prototype.insertAfter = function (t, e, n) {
				var r, a, c;
				if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
				return a = this.parent.children.indexOf(this), c = this.parent.children.splice(a + 1), r = this.parent.element(t, e, n), Array.prototype.push.apply(this.parent.children, c), r
			}, w.prototype.remove = function () {
				var t;
				if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
				return t = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [t, t - t + 1].concat([])), this.parent
			}, w.prototype.node = function (t, e, n) {
				var r, a;
				return null != t && (t = d(t)), e = d(e = e || {}), m(e) || (n = (a = [e, n])[0], e = a[1]), r = new s(this, t, e), null != n && r.text(n), this.children.push(r), r
			}, w.prototype.text = function (t) {
				var e;
				return m(t) && this.element(t), e = new p(this, t), this.children.push(e), this
			}, w.prototype.cdata = function (t) {
				var e;
				return e = new a(this, t), this.children.push(e), this
			}, w.prototype.comment = function (t) {
				var e;
				return e = new c(this, t), this.children.push(e), this
			}, w.prototype.commentBefore = function (t) {
				var e, n;
				return e = this.parent.children.indexOf(this), n = this.parent.children.splice(e), this.parent.comment(t), Array.prototype.push.apply(this.parent.children, n), this
			}, w.prototype.commentAfter = function (t) {
				var e, n;
				return e = this.parent.children.indexOf(this), n = this.parent.children.splice(e + 1), this.parent.comment(t), Array.prototype.push.apply(this.parent.children, n), this
			}, w.prototype.raw = function (t) {
				var e;
				return e = new f(this, t), this.children.push(e), this
			}, w.prototype.dummy = function () {
				return new u(this)
			}, w.prototype.instruction = function (t, e) {
				var n, r, a, c, o;
				if (null != t && (t = d(t)), null != e && (e = d(e)), Array.isArray(t))
					for (c = 0, o = t.length; c < o; c++) n = t[c], this.instruction(n);
				else if (m(t))
					for (n in t) v.call(t, n) && (r = t[n], this.instruction(n, r));
				else y(e) && (e = e.apply()), a = new g(this, t, e), this.children.push(a);
				return this
			}, w.prototype.instructionBefore = function (t, e) {
				var n, r;
				return n = this.parent.children.indexOf(this), r = this.parent.children.splice(n), this.parent.instruction(t, e), Array.prototype.push.apply(this.parent.children, r), this
			}, w.prototype.instructionAfter = function (t, e) {
				var n, r;
				return n = this.parent.children.indexOf(this), r = this.parent.children.splice(n + 1), this.parent.instruction(t, e), Array.prototype.push.apply(this.parent.children, r), this
			}, w.prototype.declaration = function (t, e, n) {
				var a, c;
				return a = this.document(), c = new o(a, t, e, n), 0 === a.children.length ? a.children.unshift(c) : a.children[0].type === r.Declaration ? a.children[0] = c : a.children.unshift(c), a.root() || a
			}, w.prototype.dtd = function (t, e) {
				var n, a, c, o, u, s, l, g, f;
				for (n = this.document(), a = new i(n, t, e), c = o = 0, s = (g = n.children).length; o < s; c = ++o)
					if (g[c].type === r.DocType) return n.children[c] = a;
				for (c = u = 0, l = (f = n.children).length; u < l; c = ++u)
					if (f[c].isRoot) return n.children.splice(c, 0, a), a;
				return n.children.push(a), a
			}, w.prototype.up = function () {
				if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
				return this.parent
			}, w.prototype.root = function () {
				var t;
				for (t = this; t;) {
					if (t.type === r.Document) return t.rootObject;
					if (t.isRoot) return t;
					t = t.parent
				}
			}, w.prototype.document = function () {
				var t;
				for (t = this; t;) {
					if (t.type === r.Document) return t;
					t = t.parent
				}
			}, w.prototype.end = function (t) {
				return this.document().end(t)
			}, w.prototype.prev = function () {
				var t;
				if ((t = this.parent.children.indexOf(this)) < 1) throw new Error("Already at the first node. " + this.debugInfo());
				return this.parent.children[t - 1]
			}, w.prototype.next = function () {
				var t;
				if (-1 === (t = this.parent.children.indexOf(this)) || t === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
				return this.parent.children[t + 1]
			}, w.prototype.importDocument = function (t) {
				var e;
				return (e = t.root().clone()).parent = this, e.isRoot = !1, this.children.push(e), this
			}, w.prototype.debugInfo = function (t) {
				var e, n;
				return null != (t = t || this.name) || (null != (e = this.parent) ? e.name : void 0) ? null == t ? "parent: <" + this.parent.name + ">" : (null != (n = this.parent) ? n.name : void 0) ? "node: <" + t + ">, parent: <" + this.parent.name + ">" : "node: <" + t + ">" : ""
			}, w.prototype.ele = function (t, e, n) {
				return this.element(t, e, n)
			}, w.prototype.nod = function (t, e, n) {
				return this.node(t, e, n)
			}, w.prototype.txt = function (t) {
				return this.text(t)
			}, w.prototype.dat = function (t) {
				return this.cdata(t)
			}, w.prototype.com = function (t) {
				return this.comment(t)
			}, w.prototype.ins = function (t, e) {
				return this.instruction(t, e)
			}, w.prototype.doc = function () {
				return this.document()
			}, w.prototype.dec = function (t, e, n) {
				return this.declaration(t, e, n)
			}, w.prototype.e = function (t, e, n) {
				return this.element(t, e, n)
			}, w.prototype.n = function (t, e, n) {
				return this.node(t, e, n)
			}, w.prototype.t = function (t) {
				return this.text(t)
			}, w.prototype.d = function (t) {
				return this.cdata(t)
			}, w.prototype.c = function (t) {
				return this.comment(t)
			}, w.prototype.r = function (t) {
				return this.raw(t)
			}, w.prototype.i = function (t, e) {
				return this.instruction(t, e)
			}, w.prototype.u = function () {
				return this.up()
			}, w.prototype.importXMLBuilder = function (t) {
				return this.importDocument(t)
			}, w.prototype.replaceChild = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.removeChild = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.appendChild = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.hasChildNodes = function () {
				return 0 !== this.children.length
			}, w.prototype.cloneNode = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.normalize = function () {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.isSupported = function (t, e) {
				return !0
			}, w.prototype.hasAttributes = function () {
				return 0 !== this.attribs.length
			}, w.prototype.compareDocumentPosition = function (t) {
				var n;
				return this === t ? 0 : this.document() !== t.document() ? (n = e.Disconnected | e.ImplementationSpecific, Math.random() < .5 ? n |= e.Preceding : n |= e.Following, n) : this.isAncestor(t) ? e.Contains | e.Preceding : this.isDescendant(t) ? e.Contains | e.Following : this.isPreceding(t) ? e.Preceding : e.Following
			}, w.prototype.isSameNode = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.lookupPrefix = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.isDefaultNamespace = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.lookupNamespaceURI = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.isEqualNode = function (t) {
				var e, n, r;
				if (t.nodeType !== this.nodeType) return !1;
				if (t.children.length !== this.children.length) return !1;
				for (e = n = 0, r = this.children.length - 1; 0 <= r ? n <= r : r <= n; e = 0 <= r ? ++n : --n)
					if (!this.children[e].isEqualNode(t.children[e])) return !1;
				return !0
			}, w.prototype.getFeature = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.setUserData = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.getUserData = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, w.prototype.contains = function (t) {
				return !!t && (t === this || this.isDescendant(t))
			}, w.prototype.isDescendant = function (t) {
				var e, n, r, a;
				for (n = 0, r = (a = this.children).length; n < r; n++) {
					if (t === (e = a[n])) return !0;
					if (e.isDescendant(t)) return !0
				}
				return !1
			}, w.prototype.isAncestor = function (t) {
				return t.isDescendant(this)
			}, w.prototype.isPreceding = function (t) {
				var e, n;
				return e = this.treePosition(t), n = this.treePosition(this), -1 !== e && -1 !== n && e < n
			}, w.prototype.isFollowing = function (t) {
				var e, n;
				return e = this.treePosition(t), n = this.treePosition(this), -1 !== e && -1 !== n && n < e
			}, w.prototype.treePosition = function (t) {
				var e, n;
				return n = 0, e = !1, this.foreachTreeNode(this.document(), (function (r) {
					if (n++, !e && r === t) return e = !0
				})), e ? n : -1
			}, w.prototype.foreachTreeNode = function (t, e) {
				var n, r, a, c, o;
				for (r = 0, a = (c = (t = t || this.document()).children).length; r < a; r++) {
					if (o = e(n = c[r])) return o;
					if (o = this.foreachTreeNode(n, e)) return o
				}
			}, w)
		}).call(this)
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.createLinearTranslations = e.translateDNA = e.primerFactory = e.annotationFactory = e.reverse = e.calcLength = e.calcTm = e.calcGC = e.returnRanges = e.getMismatchIndices = e.translateWildNucleotides = e.nucleotideWildCards = e.nucleotides = void 0;
		var r, a = n(8),
			c = n(2),
			o = (r = n(6)) && r.__esModule ? r : {
				default: r
			};

		function i(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function u(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.nucleotides = {
			a: "a",
			c: "c",
			t: "t",
			g: "g",
			u: "u"
		};
		var s = e.nucleotideWildCards = {
				y: {
					c: "c",
					t: "t"
				},
				r: {
					a: "a",
					g: "g"
				},
				w: {
					a: "a",
					t: "t"
				},
				s: {
					g: "g",
					c: "c"
				},
				k: {
					t: "t",
					g: "g"
				},
				m: {
					c: "c",
					a: "a"
				},
				d: {
					a: "a",
					g: "g",
					t: "t"
				},
				v: {
					a: "a",
					c: "c",
					g: "g"
				},
				h: {
					a: "a",
					c: "c",
					t: "t"
				},
				b: {
					c: "c",
					g: "g",
					t: "t"
				},
				x: {
					a: "a",
					c: "c",
					g: "g",
					t: "t"
				},
				n: {
					a: "a",
					c: "c",
					g: "g",
					t: "t"
				}
			},
			l = {
				AAA: "K",
				AAT: "N",
				AAG: "K",
				AAC: "N",
				ATA: "I",
				ATT: "I",
				ATG: "M",
				ATC: "I",
				AGA: "R",
				AGT: "S",
				AGG: "R",
				AGC: "S",
				ACA: "T",
				ACT: "T",
				ACG: "T",
				ACC: "T",
				TAA: "*",
				TAT: "Y",
				TAG: "*",
				TAC: "Y",
				TTA: "L",
				TTT: "F",
				TTG: "L",
				TTC: "F",
				TGA: "*",
				TGT: "C",
				TGG: "W",
				TGC: "C",
				TCA: "S",
				TCT: "S",
				TCG: "S",
				TCC: "S",
				GAA: "E",
				GAT: "D",
				GAG: "E",
				GAC: "D",
				GTA: "V",
				GTT: "V",
				GTG: "V",
				GTC: "V",
				GGA: "G",
				GGT: "G",
				GGG: "G",
				GGC: "G",
				GCA: "A",
				GCT: "A",
				GCG: "A",
				GCC: "A",
				CAA: "Q",
				CAT: "H",
				CAG: "Q",
				CAC: "H",
				CTA: "L",
				CTT: "L",
				CTG: "L",
				CTC: "L",
				CGA: "R",
				CGT: "R",
				CGG: "R",
				CGC: "R",
				CCA: "P",
				CCT: "P",
				CCG: "P",
				CCC: "P"
			},
			g = (e.translateWildNucleotides = function (t) {
				return t.toLowerCase().split("").map((function (t) {
					return s[t] ? "(".concat(Object.keys(s[t]).join("|"), ")") : t
				})).join("")
			}, e.getMismatchIndices = function (t, e) {
				return t.split("").map((function (t, n) {
					return t !== e.split("")[n] ? n : -1
				})).filter((function (t) {
					return -1 !== t
				}))
			}),
			f = (e.returnRanges = function (t) {
				var e = t[0],
					n = t[0] - 1,
					r = [];
				return t.forEach((function (a, c) {
					n + 1 < a && (r.push([e, t[c - 1]]), n = (e = a) - 1), a === t[t.length - 1] && r.push([e, a]), n += 1
				})), r
			}, e.calcGC = function (t) {
				if (!t) return 0;
				var e = (t.match(/[CG]/gi) || []).length / t.length * 100;
				return parseFloat(e.toFixed(2))
			}),
			p = (e.calcTm = function (t, e) {
				var n = 1 < arguments.length && void 0 !== e ? e : t,
					r = t.length,
					a = (t.match(/[CG]/gi) || []).length,
					c = (t.match(/[AT]/gi) || []).length,
					o = g(t, n).length,
					i = f(t);
				return r < 14 ? 2 * c + 4 * a : 24 < r && r < 46 && 40 < i && t.slice(0, 1) in {
					G: "G",
					C: "C"
				} ? 100 / r * (.815 * r + .41 * a - o - 6.75) : Math.round(64.9 + 41 * (a - 16.4) / r)
			}, e.calcLength = function (t, e, n) {
				return t < e ? e - t : e === t ? n : n - t + e
			}, e.reverse = function (t) {
				return t.split("").reverse().join("")
			}, e.annotationFactory = function (t, e) {
				var n = 1 < arguments.length && void 0 !== e ? e : -1,
					r = (0, a.chooseRandomColor)();
				return -1 < n && (r = (0, a.colorByIndex)(n)), {
					id: (0, o.default)(),
					color: r,
					name: t || "Untitled",
					type: "",
					start: 0,
					end: 0,
					direction: "NONE"
				}
			}, e.primerFactory = function () {
				return {
					overhang: "",
					name: "",
					id: (0, o.default)(),
					complementId: "",
					gc: 0,
					tm: 0,
					any: 0,
					dimer: 0,
					hairpin: 0,
					stability: 0,
					penalty: 0,
					vector: "",
					sequence: "",
					strict: !1
				}
			}, e.translateDNA = function (t) {
				for (var e = t.toUpperCase(), n = e.length, r = "", a = 0; a < n; a += 3, 1) a + 2 < n && (r += l[e[a] + e[a + 1] + e[a + 2]] || "?");
				return r
			});
		e.createLinearTranslations = function (t, e) {
			var n = e + e;
			return t.map((function (t) {
				var r = t.start,
					a = t.direction,
					o = t.end;
				o < r && (o += e.length);
				var s = 1 === a ? n.substring(r, o) : (0, c.dnaComplement)(n.substring(r, o)).compSeq.split("").reverse().join(""),
					l = 1 === a ? p(s) : p(s).split("").reverse().join(""),
					g = 1 === a ? r : o - 3 * l.length,
					f = 1 === a ? (r + 3 * l.length) % e.length : o % e.length;
				return 0 === f && -1 === a && (f += e.length),
					function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {};
							e % 2 ? i(Object(n), !0).forEach((function (e) {
								u(t, e, n[e])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
							}))
						}
						return t
					}({}, t, {
						start: g,
						end: f,
						AAseq: l
					})
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = function () {
			var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 7,
				n = (t = Math.pow(10, e + 1)) / 10,
				r = Math.floor(Math.random() * (t - n + 1)) + n;
			return String(r).substring(1)
		}
	}, function (t, e) {
		(function () {
			var e, n, r, a, c, o, i, u = [].slice,
				s = {}.hasOwnProperty;
			e = function () {
				var t, e, n, r, a, o;
				if (o = arguments[0], a = 2 <= arguments.length ? u.call(arguments, 1) : [], c(Object.assign)) Object.assign.apply(null, arguments);
				else
					for (t = 0, n = a.length; t < n; t++)
						if (null != (r = a[t]))
							for (e in r) s.call(r, e) && (o[e] = r[e]);
				return o
			}, c = function (t) {
				return !!t && "[object Function]" === Object.prototype.toString.call(t)
			}, o = function (t) {
				var e;
				return !!t && ("function" == (e = typeof t) || "object" == e)
			}, r = function (t) {
				return c(Array.isArray) ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
			}, a = function (t) {
				var e;
				if (r(t)) return !t.length;
				for (e in t)
					if (s.call(t, e)) return !1;
				return !0
			}, i = function (t) {
				var e, n;
				return o(t) && (n = Object.getPrototypeOf(t)) && (e = n.constructor) && "function" == typeof e && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object)
			}, n = function (t) {
				return c(t.valueOf) ? t.valueOf() : t
			}, t.exports.assign = e, t.exports.isFunction = c, t.exports.isObject = o, t.exports.isArray = r, t.exports.isEmpty = a, t.exports.isPlainObject = i, t.exports.getValue = n
		}).call(this)
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = e.COLORS = ["#9DEAED", "#8FDE8C", "#CFF283", "#8CDEBD", "#F0A3CE", "#F7C672", "#F07F7F", "#FAA887", "#F099F7", "#C59CFF", "#6B81FF", "#85A6FF"],
			a = e.COLOR_BORDER_MAP = {
				"#9DEAED": "#5EB5B8",
				"#8FDE8C": "#5CA35A",
				"#CFF283": "#8DB041",
				"#8CDEBD": "#4CA17F",
				"#F0A3CE": "#BD6295",
				"#F7C672": "#BD872B",
				"#F07F7F": "#AD4040",
				"#FAA887": "#B36446",
				"#F099F7": "#AB63B0",
				"#C59CFF": "#8A60C4",
				"#6B81FF": "#2E3B85",
				"#85A6FF": "#4C66AD"
			},
			c = (e.INSERT_COLORS = ["#6bdbdc", "#a066c9", "#bbd44c", "#f3995b"], e.chooseRandomColor = function (t) {
				var e = 0 < arguments.length && void 0 !== t ? t : [],
					n = e.length ? e : r;
				return n[Math.floor(Math.random() * n.length)]
			}, e.colorByIndex = function (t) {
				return r[t % r.length]
			}, e.borderColorByIndex = function (t) {
				return a[r[t % r.length]]
			}, {}),
			o = (e.darkerColor = function (t) {
				if (c[t]) return c[t];
				var e = o(-.5, t);
				return c[t] = e
			}, function (t, e, n, r) {
				var a, c, o, i, u, s, l, g = parseInt,
					f = Math.round,
					p = "string" == typeof n;
				if ("number" != typeof t || t < -1 || 1 < t || "string" != typeof e || "r" !== e[0] && "#" !== e[0] || n && !p) return null;

				function d(t) {
					var e = t.length,
						n = {};
					if (9 < e) {
						var r = function (t, e) {
							return function (t) {
								if (Array.isArray(t)) return t
							}(t) || function (t, e) {
								if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
									var n = [],
										r = !0,
										a = !1,
										c = void 0;
									try {
										for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
									} catch (t) {
										a = !0, c = t
									} finally {
										try {
											r || null == i.return || i.return()
										} finally {
											if (a) throw c
										}
									}
									return n
								}
							}(t, e) || function () {
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							}()
						}(t = t.split(","), 4);
						if (a = r[0], c = r[1], o = r[2], p = r[3], (e = t.length) < 3 || 4 < e) return null;
						n.r = g("a" === a[3] ? a.slice(5) : a.slice(4)), n.g = g(c), n.b = g(o), n.a = p ? parseFloat(p) : -1
					} else {
						if (8 === e || 6 === e || e < 4) return null;
						e < 6 && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (4 < e ? t[4] + t[4] : "")), t = g(t.slice(1), 16), 9 === e || 5 === e ? (n.r = t >> 24 & 255, n.g = t >> 16 & 255, n.b = t >> 8 & 255, n.a = f((255 & t) / .255) / 1e3) : (n.r = t >> 16, n.g = t >> 8 & 255, n.b = 255 & t, n.a = -1)
					}
					return n
				}
				return l = 9 < e.length, l = p ? 9 < n.length || "c" === n && !l : l, u = d(e), i = t < 0, s = n && "c" !== n ? d(n) : i ? {
					r: 0,
					g: 0,
					b: 0,
					a: -1
				} : {
					r: 255,
					g: 255,
					b: 255,
					a: -1
				}, i = 1 - (t = i ? -1 * t : t), u && s ? (o = r ? (a = f(i * u.r + t * s.r), c = f(i * u.g + t * s.g), f(i * u.b + t * s.b)) : (a = f(Math.pow(i * Math.pow(u.r, 2) + t * Math.pow(s.r, 2), .5)), c = f(Math.pow(i * Math.pow(u.g, 2) + t * Math.pow(s.g, 2), .5)), f(Math.pow(i * Math.pow(u.b, 2) + t * Math.pow(s.b, 2), .5))), p = u.a, s = s.a, p = (u = 0 <= p || 0 <= s) ? p < 0 ? s : s < 0 ? p : p * i + s * t : 0, l ? "rgb" + (u ? "a(" : "(") + a + "," + c + "," + o + (u ? "," + f(1e3 * p) / 1e3 : "") + ")" : "#" + (4294967296 + 16777216 * a + 65536 * c + 256 * o + (u ? f(255 * p) : 0)).toString(16).slice(1, u ? void 0 : -2)) : null
			})
	}, function (t, e) {
		var n;
		n = function () {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (n = window)
		}
		t.exports = n
	}, function (t, e, n) {
		"use strict";
		var r = n(23),
			a = Object.keys || function (t) {
				var e = [];
				for (var n in t) e.push(n);
				return e
			};
		t.exports = g;
		var c = n(19);
		c.inherits = n(14);
		var o = n(61),
			i = n(45);
		c.inherits(g, o);
		for (var u = a(i.prototype), s = 0; s < u.length; s++) {
			var l = u[s];
			g.prototype[l] || (g.prototype[l] = i.prototype[l])
		}

		function g(t) {
			if (!(this instanceof g)) return new g(t);
			o.call(this, t), i.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", f)
		}

		function f() {
			this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this)
		}

		function p(t) {
			t.end()
		}
		Object.defineProperty(g.prototype, "writableHighWaterMark", {
			enumerable: !1,
			get: function () {
				return this._writableState.highWaterMark
			}
		}), Object.defineProperty(g.prototype, "destroyed", {
			get: function () {
				return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
			},
			set: function (t) {
				void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
			}
		}), g.prototype._destroy = function (t, e) {
			this.push(null), this.end(), r.nextTick(e, t)
		}
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function a() {
			if ("function" != typeof WeakMap) return null;
			var t = new WeakMap;
			return a = function () {
				return t
			}, t
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var c = function (t) {
			if (t && t.__esModule) return t;
			if (null === t || "object" !== r(t) && "function" != typeof t) return {
				default: t
			};
			var e = a();
			if (e && e.has(t)) return e.get(t);
			var n = {},
				c = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in t)
				if (Object.prototype.hasOwnProperty.call(t, o)) {
					var i = c ? Object.getOwnPropertyDescriptor(t, o) : null;
					i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = t[o]
				}
			return n.default = t, e && e.set(t, n), n
		}(n(0)).createContext({
			linear: 0,
			circular: 0,
			setCentralIndex: function () {}
		});
		c.displayName = "CentralIndexContext", e.default = c
	}, function (t, e) {
		var n, r, a = t.exports = {};

		function c() {
			throw new Error("setTimeout has not been defined")
		}

		function o() {
			throw new Error("clearTimeout has not been defined")
		}

		function i(t) {
			if (n === setTimeout) return setTimeout(t, 0);
			if ((n === c || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
			try {
				return n(t, 0)
			} catch (e) {
				try {
					return n.call(null, t, 0)
				} catch (e) {
					return n.call(this, t, 0)
				}
			}
		}! function () {
			try {
				n = "function" == typeof setTimeout ? setTimeout : c
			} catch (t) {
				n = c
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : o
			} catch (t) {
				r = o
			}
		}();
		var u, s = [],
			l = !1,
			g = -1;

		function f() {
			l && u && (l = !1, u.length ? s = u.concat(s) : g = -1, s.length && p())
		}

		function p() {
			if (!l) {
				var t = i(f);
				l = !0;
				for (var e = s.length; e;) {
					for (u = s, s = []; ++g < e;) u && u[g].run();
					g = -1, e = s.length
				}
				u = null, l = !1,
					function (t) {
						if (r === clearTimeout) return clearTimeout(t);
						if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
						try {
							r(t)
						} catch (e) {
							try {
								return r.call(null, t)
							} catch (e) {
								return r.call(this, t)
							}
						}
					}(t)
			}
		}

		function d(t, e) {
			this.fun = t, this.array = e
		}

		function h() {}
		a.nextTick = function (t) {
			var e = new Array(arguments.length - 1);
			if (1 < arguments.length)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			s.push(new d(t, e)), 1 !== s.length || l || i(p)
		}, d.prototype.run = function () {
			this.fun.apply(null, this.array)
		}, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function (t) {
			return []
		}, a.binding = function (t) {
			throw new Error("process.binding is not supported")
		}, a.cwd = function () {
			return "/"
		}, a.chdir = function (t) {
			throw new Error("process.chdir is not supported")
		}, a.umask = function () {
			return 0
		}
	}, function (t, e, n) {
		"use strict";
		(function (t) {
			/*!
			 * The buffer module from node.js, for the browser.
			 *
			 * @author   Feross Aboukhadijeh <http://feross.org>
			 * @license  MIT
			 */
			var r = n(117),
				a = n(118),
				c = n(60);

			function o() {
				return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
			}

			function i(t, e) {
				if (o() < e) throw new RangeError("Invalid typed array length");
				return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
			}

			function u(t, e, n) {
				if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
				if ("number" != typeof t) return s(this, t, e, n);
				if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
				return g(this, t)
			}

			function s(t, e, n, r) {
				if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
				return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
					if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
					if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
					return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = f(t, e), t
				}(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
					if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
					var r = 0 | d(e, n),
						a = (t = i(t, r)).write(e, n);
					return a !== r && (t = t.slice(0, a)), t
				}(t, e, n) : function (t, e) {
					if (u.isBuffer(e)) {
						var n = 0 | p(e.length);
						return 0 === (t = i(t, n)).length || e.copy(t, 0, 0, n), t
					}
					if (e) {
						if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function (t) {
							return t != t
						}(e.length) ? i(t, 0) : f(t, e);
						if ("Buffer" === e.type && c(e.data)) return f(t, e.data)
					}
					throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
				}(t, e)
			}

			function l(t) {
				if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
				if (t < 0) throw new RangeError('"size" argument must not be negative')
			}

			function g(t, e) {
				if (l(e), t = i(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < e; ++n) t[n] = 0;
				return t
			}

			function f(t, e) {
				var n = e.length < 0 ? 0 : 0 | p(e.length);
				t = i(t, n);
				for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
				return t
			}

			function p(t) {
				if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
				return 0 | t
			}

			function d(t, e) {
				if (u.isBuffer(t)) return t.length;
				if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
				"string" != typeof t && (t = "" + t);
				var n = t.length;
				if (0 === n) return 0;
				for (var r = !1;;) switch (e) {
					case "ascii":
					case "latin1":
					case "binary":
						return n;
					case "utf8":
					case "utf-8":
					case void 0:
						return L(t).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * n;
					case "hex":
						return n >>> 1;
					case "base64":
						return q(t).length;
					default:
						if (r) return L(t).length;
						e = ("" + e).toLowerCase(), r = !0
				}
			}

			function h(t, e, n) {
				var r = t[e];
				t[e] = t[n], t[n] = r
			}

			function y(t, e, n, r, a) {
				if (0 === t.length) return -1;
				if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
					if (a) return -1;
					n = t.length - 1
				} else if (n < 0) {
					if (!a) return -1;
					n = 0
				}
				if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, n, r, a);
				if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [e], n, r, a);
				throw new TypeError("val must be string, number or Buffer")
			}

			function m(t, e, n, r, a) {
				var c, o = 1,
					i = t.length,
					u = e.length;
				if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
					if (t.length < 2 || e.length < 2) return -1;
					i /= o = 2, u /= 2, n /= 2
				}

				function s(t, e) {
					return 1 === o ? t[e] : t.readUInt16BE(e * o)
				}
				if (a) {
					var l = -1;
					for (c = n; c < i; c++)
						if (s(t, c) === s(e, -1 === l ? 0 : c - l)) {
							if (-1 === l && (l = c), c - l + 1 === u) return l * o
						} else -1 !== l && (c -= c - l), l = -1
				} else
					for (i < n + u && (n = i - u), c = n; 0 <= c; c--) {
						for (var g = !0, f = 0; f < u; f++)
							if (s(t, c + f) !== s(e, f)) {
								g = !1;
								break
							}
						if (g) return c
					}
				return -1
			}

			function b(t, e, n, r) {
				n = Number(n) || 0;
				var a = t.length - n;
				r ? a < (r = Number(r)) && (r = a) : r = a;
				var c = e.length;
				if (c % 2 != 0) throw new TypeError("Invalid hex string");
				c / 2 < r && (r = c / 2);
				for (var o = 0; o < r; ++o) {
					var i = parseInt(e.substr(2 * o, 2), 16);
					if (isNaN(i)) return o;
					t[n + o] = i
				}
				return o
			}

			function v(t, e, n, r) {
				return F(function (t) {
					for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
					return e
				}(e), t, n, r)
			}

			function w(t, e, n, r) {
				return F(function (t, e) {
					for (var n, r, a, c = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) r = (n = t.charCodeAt(o)) >> 8, a = n % 256, c.push(a), c.push(r);
					return c
				}(e, t.length - n), t, n, r)
			}

			function O(t, e, n) {
				return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
			}

			function E(t, e, n) {
				n = Math.min(t.length, n);
				for (var r = [], a = e; a < n;) {
					var c, o, i, u, s = t[a],
						l = null,
						g = 239 < s ? 4 : 223 < s ? 3 : 191 < s ? 2 : 1;
					if (a + g <= n) switch (g) {
						case 1:
							s < 128 && (l = s);
							break;
						case 2:
							128 == (192 & (c = t[a + 1])) && 127 < (u = (31 & s) << 6 | 63 & c) && (l = u);
							break;
						case 3:
							c = t[a + 1], o = t[a + 2], 128 == (192 & c) && 128 == (192 & o) && 2047 < (u = (15 & s) << 12 | (63 & c) << 6 | 63 & o) && (u < 55296 || 57343 < u) && (l = u);
							break;
						case 4:
							c = t[a + 1], o = t[a + 2], i = t[a + 3], 128 == (192 & c) && 128 == (192 & o) && 128 == (192 & i) && 65535 < (u = (15 & s) << 18 | (63 & c) << 12 | (63 & o) << 6 | 63 & i) && u < 1114112 && (l = u)
					}
					null === l ? (l = 65533, g = 1) : 65535 < l && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), a += g
				}
				return function (t) {
					var e = t.length;
					if (e <= T) return String.fromCharCode.apply(String, t);
					for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += T));
					return n
				}(r)
			}
			e.Buffer = u, e.SlowBuffer = function (t) {
				return +t != t && (t = 0), u.alloc(+t)
			}, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
				try {
					var t = new Uint8Array(1);
					return t.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function () {
							return 42
						}
					}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
				} catch (t) {
					return !1
				}
			}(), e.kMaxLength = o(), u.poolSize = 8192, u._augment = function (t) {
				return t.__proto__ = u.prototype, t
			}, u.from = function (t, e, n) {
				return s(null, t, e, n)
			}, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
				value: null,
				configurable: !0
			})), u.alloc = function (t, e, n) {
				return function (t, e, n, r) {
					return l(e), e <= 0 ? i(t, e) : void 0 !== n ? "string" == typeof r ? i(t, e).fill(n, r) : i(t, e).fill(n) : i(t, e)
				}(null, t, e, n)
			}, u.allocUnsafe = function (t) {
				return g(null, t)
			}, u.allocUnsafeSlow = function (t) {
				return g(null, t)
			}, u.isBuffer = function (t) {
				return !(null == t || !t._isBuffer)
			}, u.compare = function (t, e) {
				if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
				if (t === e) return 0;
				for (var n = t.length, r = e.length, a = 0, c = Math.min(n, r); a < c; ++a)
					if (t[a] !== e[a]) {
						n = t[a], r = e[a];
						break
					}
				return n < r ? -1 : r < n ? 1 : 0
			}, u.isEncoding = function (t) {
				switch (String(t).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, u.concat = function (t, e) {
				if (!c(t)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === t.length) return u.alloc(0);
				var n;
				if (void 0 === e)
					for (n = e = 0; n < t.length; ++n) e += t[n].length;
				var r = u.allocUnsafe(e),
					a = 0;
				for (n = 0; n < t.length; ++n) {
					var o = t[n];
					if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
					o.copy(r, a), a += o.length
				}
				return r
			}, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
				var t = this.length;
				if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var e = 0; e < t; e += 2) h(this, e, e + 1);
				return this
			}, u.prototype.swap32 = function () {
				var t = this.length;
				if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var e = 0; e < t; e += 4) h(this, e, e + 3), h(this, e + 1, e + 2);
				return this
			}, u.prototype.swap64 = function () {
				var t = this.length;
				if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var e = 0; e < t; e += 8) h(this, e, e + 7), h(this, e + 1, e + 6), h(this, e + 2, e + 5), h(this, e + 3, e + 4);
				return this
			}, u.prototype.toString = function () {
				var t = 0 | this.length;
				return 0 == t ? "" : 0 === arguments.length ? E(this, 0, t) : function (t, e, n) {
					var r = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (e >>>= 0)) return "";
					for (t = t || "utf8";;) switch (t) {
						case "hex":
							return x(this, e, n);
						case "utf8":
						case "utf-8":
							return E(this, e, n);
						case "ascii":
							return S(this, e, n);
						case "latin1":
						case "binary":
							return C(this, e, n);
						case "base64":
							return O(this, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return N(this, e, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), r = !0
					}
				}.apply(this, arguments)
			}, u.prototype.equals = function (t) {
				if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
				return this === t || 0 === u.compare(this, t)
			}, u.prototype.inspect = function () {
				var t = "",
					n = e.INSPECT_MAX_BYTES;
				return 0 < this.length && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
			}, u.prototype.compare = function (t, e, n, r, a) {
				if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
				if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), e < 0 || n > t.length || r < 0 || a > this.length) throw new RangeError("out of range index");
				if (a <= r && n <= e) return 0;
				if (a <= r) return -1;
				if (n <= e) return 1;
				if (this === t) return 0;
				for (var c = (a >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (e >>>= 0), i = Math.min(c, o), s = this.slice(r, a), l = t.slice(e, n), g = 0; g < i; ++g)
					if (s[g] !== l[g]) {
						c = s[g], o = l[g];
						break
					}
				return c < o ? -1 : o < c ? 1 : 0
			}, u.prototype.includes = function (t, e, n) {
				return -1 !== this.indexOf(t, e, n)
			}, u.prototype.indexOf = function (t, e, n) {
				return y(this, t, e, n, !0)
			}, u.prototype.lastIndexOf = function (t, e, n) {
				return y(this, t, e, n, !1)
			}, u.prototype.write = function (t, e, n, r) {
				if (void 0 === e) r = "utf8", n = this.length, e = 0;
				else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
				else {
					if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
				}
				var a = this.length - e;
				if ((void 0 === n || a < n) && (n = a), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				r = r || "utf8";
				for (var c, o, i, u, s = !1;;) switch (r) {
					case "hex":
						return b(this, t, e, n);
					case "utf8":
					case "utf-8":
						return i = e, u = n, F(L(t, this.length - i), this, i, u);
					case "ascii":
						return v(this, t, e, n);
					case "latin1":
					case "binary":
						return v(this, t, e, n);
					case "base64":
						return this, c = e, o = n, F(q(t), this, c, o);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return w(this, t, e, n);
					default:
						if (s) throw new TypeError("Unknown encoding: " + r);
						r = ("" + r).toLowerCase(), s = !0
				}
			}, u.prototype.toJSON = function () {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var T = 4096;

			function S(t, e, n) {
				var r = "";
				n = Math.min(t.length, n);
				for (var a = e; a < n; ++a) r += String.fromCharCode(127 & t[a]);
				return r
			}

			function C(t, e, n) {
				var r = "";
				n = Math.min(t.length, n);
				for (var a = e; a < n; ++a) r += String.fromCharCode(t[a]);
				return r
			}

			function x(t, e, n) {
				var r = t.length;
				(!e || e < 0) && (e = 0), (!n || n < 0 || r < n) && (n = r);
				for (var a = "", c = e; c < n; ++c) a += R(t[c]);
				return a
			}

			function N(t, e, n) {
				for (var r = t.slice(e, n), a = "", c = 0; c < r.length; c += 2) a += String.fromCharCode(r[c] + 256 * r[c + 1]);
				return a
			}

			function P(t, e, n) {
				if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
				if (n < t + e) throw new RangeError("Trying to access beyond buffer length")
			}

			function _(t, e, n, r, a, c) {
				if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (a < e || e < c) throw new RangeError('"value" argument is out of bounds');
				if (n + r > t.length) throw new RangeError("Index out of range")
			}

			function A(t, e, n, r) {
				e < 0 && (e = 65535 + e + 1);
				for (var a = 0, c = Math.min(t.length - n, 2); a < c; ++a) t[n + a] = (e & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
			}

			function k(t, e, n, r) {
				e < 0 && (e = 4294967295 + e + 1);
				for (var a = 0, c = Math.min(t.length - n, 4); a < c; ++a) t[n + a] = e >>> 8 * (r ? a : 3 - a) & 255
			}

			function I(t, e, n, r) {
				if (n + r > t.length) throw new RangeError("Index out of range");
				if (n < 0) throw new RangeError("Index out of range")
			}

			function j(t, e, n, r, c) {
				return c || I(t, 0, n, 4), a.write(t, e, n, r, 23, 4), n + 4
			}

			function D(t, e, n, r, c) {
				return c || I(t, 0, n, 8), a.write(t, e, n, r, 52, 8), n + 8
			}
			u.prototype.slice = function (t, e) {
				var n, r = this.length;
				if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
				else {
					var a = e - t;
					n = new u(a, void 0);
					for (var c = 0; c < a; ++c) n[c] = this[c + t]
				}
				return n
			}, u.prototype.readUIntLE = function (t, e, n) {
				t |= 0, e |= 0, n || P(t, e, this.length);
				for (var r = this[t], a = 1, c = 0; ++c < e && (a *= 256);) r += this[t + c] * a;
				return r
			}, u.prototype.readUIntBE = function (t, e, n) {
				t |= 0, e |= 0, n || P(t, e, this.length);
				for (var r = this[t + --e], a = 1; 0 < e && (a *= 256);) r += this[t + --e] * a;
				return r
			}, u.prototype.readUInt8 = function (t, e) {
				return e || P(t, 1, this.length), this[t]
			}, u.prototype.readUInt16LE = function (t, e) {
				return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
			}, u.prototype.readUInt16BE = function (t, e) {
				return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
			}, u.prototype.readUInt32LE = function (t, e) {
				return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
			}, u.prototype.readUInt32BE = function (t, e) {
				return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
			}, u.prototype.readIntLE = function (t, e, n) {
				t |= 0, e |= 0, n || P(t, e, this.length);
				for (var r = this[t], a = 1, c = 0; ++c < e && (a *= 256);) r += this[t + c] * a;
				return (a *= 128) <= r && (r -= Math.pow(2, 8 * e)), r
			}, u.prototype.readIntBE = function (t, e, n) {
				t |= 0, e |= 0, n || P(t, e, this.length);
				for (var r = e, a = 1, c = this[t + --r]; 0 < r && (a *= 256);) c += this[t + --r] * a;
				return (a *= 128) <= c && (c -= Math.pow(2, 8 * e)), c
			}, u.prototype.readInt8 = function (t, e) {
				return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
			}, u.prototype.readInt16LE = function (t, e) {
				e || P(t, 2, this.length);
				var n = this[t] | this[t + 1] << 8;
				return 32768 & n ? 4294901760 | n : n
			}, u.prototype.readInt16BE = function (t, e) {
				e || P(t, 2, this.length);
				var n = this[t + 1] | this[t] << 8;
				return 32768 & n ? 4294901760 | n : n
			}, u.prototype.readInt32LE = function (t, e) {
				return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
			}, u.prototype.readInt32BE = function (t, e) {
				return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
			}, u.prototype.readFloatLE = function (t, e) {
				return e || P(t, 4, this.length), a.read(this, t, !0, 23, 4)
			}, u.prototype.readFloatBE = function (t, e) {
				return e || P(t, 4, this.length), a.read(this, t, !1, 23, 4)
			}, u.prototype.readDoubleLE = function (t, e) {
				return e || P(t, 8, this.length), a.read(this, t, !0, 52, 8)
			}, u.prototype.readDoubleBE = function (t, e) {
				return e || P(t, 8, this.length), a.read(this, t, !1, 52, 8)
			}, u.prototype.writeUIntLE = function (t, e, n, r) {
				t = +t, e |= 0, n |= 0, r || _(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
				var a = 1,
					c = 0;
				for (this[e] = 255 & t; ++c < n && (a *= 256);) this[e + c] = t / a & 255;
				return e + n
			}, u.prototype.writeUIntBE = function (t, e, n, r) {
				t = +t, e |= 0, n |= 0, r || _(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
				var a = n - 1,
					c = 1;
				for (this[e + a] = 255 & t; 0 <= --a && (c *= 256);) this[e + a] = t / c & 255;
				return e + n
			}, u.prototype.writeUInt8 = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
			}, u.prototype.writeUInt16LE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : A(this, t, e, !0), e + 2
			}, u.prototype.writeUInt16BE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : A(this, t, e, !1), e + 2
			}, u.prototype.writeUInt32LE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : k(this, t, e, !0), e + 4
			}, u.prototype.writeUInt32BE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : k(this, t, e, !1), e + 4
			}, u.prototype.writeIntLE = function (t, e, n, r) {
				if (t = +t, e |= 0, !r) {
					var a = Math.pow(2, 8 * n - 1);
					_(this, t, e, n, a - 1, -a)
				}
				var c = 0,
					o = 1,
					i = 0;
				for (this[e] = 255 & t; ++c < n && (o *= 256);) t < 0 && 0 === i && 0 !== this[e + c - 1] && (i = 1), this[e + c] = (t / o >> 0) - i & 255;
				return e + n
			}, u.prototype.writeIntBE = function (t, e, n, r) {
				if (t = +t, e |= 0, !r) {
					var a = Math.pow(2, 8 * n - 1);
					_(this, t, e, n, a - 1, -a)
				}
				var c = n - 1,
					o = 1,
					i = 0;
				for (this[e + c] = 255 & t; 0 <= --c && (o *= 256);) t < 0 && 0 === i && 0 !== this[e + c + 1] && (i = 1), this[e + c] = (t / o >> 0) - i & 255;
				return e + n
			}, u.prototype.writeInt8 = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
			}, u.prototype.writeInt16LE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : A(this, t, e, !0), e + 2
			}, u.prototype.writeInt16BE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : A(this, t, e, !1), e + 2
			}, u.prototype.writeInt32LE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : k(this, t, e, !0), e + 4
			}, u.prototype.writeInt32BE = function (t, e, n) {
				return t = +t, e |= 0, n || _(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : k(this, t, e, !1), e + 4
			}, u.prototype.writeFloatLE = function (t, e, n) {
				return j(this, t, e, !0, n)
			}, u.prototype.writeFloatBE = function (t, e, n) {
				return j(this, t, e, !1, n)
			}, u.prototype.writeDoubleLE = function (t, e, n) {
				return D(this, t, e, !0, n)
			}, u.prototype.writeDoubleBE = function (t, e, n) {
				return D(this, t, e, !1, n)
			}, u.prototype.copy = function (t, e, n, r) {
				if (n = n || 0, r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < r && r < n && (r = n), r === n) return 0;
				if (0 === t.length || 0 === this.length) return 0;
				if (e < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
				var a, c = r - n;
				if (this === t && n < e && e < r)
					for (a = c - 1; 0 <= a; --a) t[a + e] = this[a + n];
				else if (c < 1e3 || !u.TYPED_ARRAY_SUPPORT)
					for (a = 0; a < c; ++a) t[a + e] = this[a + n];
				else Uint8Array.prototype.set.call(t, this.subarray(n, n + c), e);
				return c
			}, u.prototype.fill = function (t, e, n, r) {
				if ("string" == typeof t) {
					if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
						var a = t.charCodeAt(0);
						a < 256 && (t = a)
					}
					if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
					if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
				} else "number" == typeof t && (t &= 255);
				if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
				if (n <= e) return this;
				var c;
				if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof (t = t || 0))
					for (c = e; c < n; ++c) this[c] = t;
				else {
					var o = u.isBuffer(t) ? t : L(new u(t, r).toString()),
						i = o.length;
					for (c = 0; c < n - e; ++c) this[c + e] = o[c % i]
				}
				return this
			};
			var M = /[^+\/0-9A-Za-z-_]/g;

			function R(t) {
				return t < 16 ? "0" + t.toString(16) : t.toString(16)
			}

			function L(t, e) {
				var n;
				e = e || 1 / 0;
				for (var r = t.length, a = null, c = [], o = 0; o < r; ++o) {
					if (55295 < (n = t.charCodeAt(o)) && n < 57344) {
						if (!a) {
							if (56319 < n) {
								-1 < (e -= 3) && c.push(239, 191, 189);
								continue
							}
							if (o + 1 === r) {
								-1 < (e -= 3) && c.push(239, 191, 189);
								continue
							}
							a = n;
							continue
						}
						if (n < 56320) {
							-1 < (e -= 3) && c.push(239, 191, 189), a = n;
							continue
						}
						n = 65536 + (a - 55296 << 10 | n - 56320)
					} else a && -1 < (e -= 3) && c.push(239, 191, 189);
					if (a = null, n < 128) {
						if ((e -= 1) < 0) break;
						c.push(n)
					} else if (n < 2048) {
						if ((e -= 2) < 0) break;
						c.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((e -= 3) < 0) break;
						c.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((e -= 4) < 0) break;
						c.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return c
			}

			function q(t) {
				return r.toByteArray(function (t) {
					if ((t = function (t) {
							return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
						}(t).replace(M, "")).length < 2) return "";
					for (; t.length % 4 != 0;) t += "=";
					return t
				}(t))
			}

			function F(t, e, n, r) {
				for (var a = 0; a < r && !(a + n >= e.length || a >= t.length); ++a) e[a + n] = t[a];
				return a
			}
		}).call(this, n(9))
	}, function (t, e) {
		"function" == typeof Object.create ? t.exports = function (t, e) {
			e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}))
		} : t.exports = function (t, e) {
			if (e) {
				function n() {}
				t.super_ = e, n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
			}
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(48);
		t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = n(80),
			c = a(r("String.prototype.indexOf"));
		t.exports = function (t, e) {
			var n = r(t, !!e);
			return "function" == typeof n && c(t, ".prototype.") ? a(n) : n
		}
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = function t(e, n) {
			if (e === n) return !0;
			if ("object" !== r(e) || null === e || "object" !== r(n) || null === n) return !1;
			if (Object.keys(e).length !== Object.keys(n).length) return !1;
			for (var a in e) {
				if (!n.hasOwnProperty(a)) return !1;
				if (!t(e[a], n[a])) return !1
			}
			return !0
		}
	}, function (t, e, n) {
		(function () {
			"use strict";
			var t, r, a, c, o = {}.hasOwnProperty;

			function i(t) {
				this.message = t
			}
			r = n(28), t = n(106), a = n(115), c = n(66), e.defaults = r.defaults, e.processors = c, e.ValidationError = (function (t, e) {
				for (var n in e) o.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(i, Error), i), e.Builder = t.Builder, e.Parser = a.Parser, e.parseString = a.parseString, e.parseStringPromise = a.parseStringPromise
		}).call(this)
	}, function (t, e, n) {
		(function (t) {
			function n(t) {
				return Object.prototype.toString.call(t)
			}
			e.isArray = function (t) {
				return Array.isArray ? Array.isArray(t) : "[object Array]" === n(t)
			}, e.isBoolean = function (t) {
				return "boolean" == typeof t
			}, e.isNull = function (t) {
				return null === t
			}, e.isNullOrUndefined = function (t) {
				return null == t
			}, e.isNumber = function (t) {
				return "number" == typeof t
			}, e.isString = function (t) {
				return "string" == typeof t
			}, e.isSymbol = function (t) {
				return "symbol" == typeof t
			}, e.isUndefined = function (t) {
				return void 0 === t
			}, e.isRegExp = function (t) {
				return "[object RegExp]" === n(t)
			}, e.isObject = function (t) {
				return "object" == typeof t && null !== t
			}, e.isDate = function (t) {
				return "[object Date]" === n(t)
			}, e.isError = function (t) {
				return "[object Error]" === n(t) || t instanceof Error
			}, e.isFunction = function (t) {
				return "function" == typeof t
			}, e.isPrimitive = function (t) {
				return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
			}, e.isBuffer = t.isBuffer
		}).call(this, n(13).Buffer)
	}, function (t, e, n) {
		(function () {
			var e, r = {}.hasOwnProperty;

			function a(t) {
				a.__super__.constructor.call(this, t), this.value = ""
			}
			e = n(4), t.exports = (function (t, e) {
				for (var n in e) r.call(e, n) && (t[n] = e[n]);

				function a() {
					this.constructor = t
				}
				a.prototype = e.prototype, t.prototype = new a, t.__super__ = e.prototype
			}(a, e), Object.defineProperty(a.prototype, "data", {
				get: function () {
					return this.value
				},
				set: function (t) {
					return this.value = t || ""
				}
			}), Object.defineProperty(a.prototype, "length", {
				get: function () {
					return this.value.length
				}
			}), Object.defineProperty(a.prototype, "textContent", {
				get: function () {
					return this.value
				},
				set: function (t) {
					return this.value = t || ""
				}
			}), a.prototype.clone = function () {
				return Object.create(this)
			}, a.prototype.substringData = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, a.prototype.appendData = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, a.prototype.insertData = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, a.prototype.deleteData = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, a.prototype.replaceData = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, a.prototype.isEqualNode = function (t) {
				return !!a.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.data === this.data
			}, a)
		}).call(this)
	}, function (t, e) {
		(function () {
			t.exports = {
				None: 0,
				OpenTag: 1,
				InsideTag: 2,
				CloseTag: 3
			}
		}).call(this)
	}, function (t, e, n) {
		"use strict";
		var r, a = "object" == typeof Reflect ? Reflect : null,
			c = a && "function" == typeof a.apply ? a.apply : function (t, e, n) {
				return Function.prototype.apply.call(t, e, n)
			};
		r = a && "function" == typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function (t) {
			return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
		} : function (t) {
			return Object.getOwnPropertyNames(t)
		};
		var o = Number.isNaN || function (t) {
			return t != t
		};

		function i() {
			i.init.call(this)
		}((t.exports = i).EventEmitter = i).prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
		var u = 10;

		function s(t) {
			return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
		}

		function l(t, e, n, r) {
			var a, c, o;
			if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
			if (void 0 === (c = t._events) ? (c = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== c.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), c = t._events), o = c[e]), void 0 === o) o = c[e] = n, ++t._eventsCount;
			else if ("function" == typeof o ? o = c[e] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), 0 < (a = s(t)) && o.length > a && !o.warned) {
				o.warned = !0;
				var i = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
				i.name = "MaxListenersExceededWarning", i.emitter = t, i.type = e, i.count = o.length,
					function (t) {
						console && console.warn && console.warn(t)
					}(i)
			}
			return t
		}

		function g(t, e, n) {
			var r = {
					fired: !1,
					wrapFn: void 0,
					target: t,
					type: e,
					listener: n
				},
				a = function () {
					for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
					this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, c(this.listener, this.target, t))
				}.bind(r);
			return a.listener = n, r.wrapFn = a
		}

		function f(t, e, n) {
			var r = t._events;
			if (void 0 === r) return [];
			var a = r[e];
			return void 0 === a ? [] : "function" == typeof a ? n ? [a.listener || a] : [a] : n ? function (t) {
				for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
				return e
			}(a) : d(a, a.length)
		}

		function p(t) {
			var e = this._events;
			if (void 0 !== e) {
				var n = e[t];
				if ("function" == typeof n) return 1;
				if (void 0 !== n) return n.length
			}
			return 0
		}

		function d(t, e) {
			for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
			return n
		}
		Object.defineProperty(i, "defaultMaxListeners", {
			enumerable: !0,
			get: function () {
				return u
			},
			set: function (t) {
				if ("number" != typeof t || t < 0 || o(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
				u = t
			}
		}), i.init = function () {
			void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
		}, i.prototype.setMaxListeners = function (t) {
			if ("number" != typeof t || t < 0 || o(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
			return this._maxListeners = t, this
		}, i.prototype.getMaxListeners = function () {
			return s(this)
		}, i.prototype.emit = function (t) {
			for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
			var r = "error" === t,
				a = this._events;
			if (void 0 !== a) r = r && void 0 === a.error;
			else if (!r) return !1;
			if (r) {
				var o;
				if (0 < e.length && (o = e[0]), o instanceof Error) throw o;
				var i = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
				throw i.context = o, i
			}
			var u = a[t];
			if (void 0 === u) return !1;
			if ("function" == typeof u) c(u, this, e);
			else {
				var s = u.length,
					l = d(u, s);
				for (n = 0; n < s; ++n) c(l[n], this, e)
			}
			return !0
		}, i.prototype.on = i.prototype.addListener = function (t, e) {
			return l(this, t, e, !1)
		}, i.prototype.prependListener = function (t, e) {
			return l(this, t, e, !0)
		}, i.prototype.once = function (t, e) {
			if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
			return this.on(t, g(this, t, e)), this
		}, i.prototype.prependOnceListener = function (t, e) {
			if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
			return this.prependListener(t, g(this, t, e)), this
		}, i.prototype.off = i.prototype.removeListener = function (t, e) {
			var n, r, a, c, o;
			if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
			if (void 0 === (r = this._events)) return this;
			if (void 0 === (n = r[t])) return this;
			if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
			else if ("function" != typeof n) {
				for (a = -1, c = n.length - 1; 0 <= c; c--)
					if (n[c] === e || n[c].listener === e) {
						o = n[c].listener, a = c;
						break
					}
				if (a < 0) return this;
				0 === a ? n.shift() : function (t, e) {
					for (; e + 1 < t.length; e++) t[e] = t[e + 1];
					t.pop()
				}(n, a), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, o || e)
			}
			return this
		}, i.prototype.removeAllListeners = function (t) {
			var e, n, r;
			if (void 0 === (n = this._events)) return this;
			if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
			if (0 === arguments.length) {
				var a, c = Object.keys(n);
				for (r = 0; r < c.length; ++r) "removeListener" !== (a = c[r]) && this.removeAllListeners(a);
				return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
			}
			if ("function" == typeof (e = n[t])) this.removeListener(t, e);
			else if (void 0 !== e)
				for (r = e.length - 1; 0 <= r; r--) this.removeListener(t, e[r]);
			return this
		}, i.prototype.listeners = function (t) {
			return f(this, t, !0)
		}, i.prototype.rawListeners = function (t) {
			return f(this, t, !1)
		}, i.listenerCount = function (t, e) {
			return "function" == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
		}, i.prototype.listenerCount = p, i.prototype.eventNames = function () {
			return 0 < this._eventsCount ? r(this._events) : []
		}
	}, function (t, e, n) {
		"use strict";
		(function (e) {
			void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
				nextTick: function (t, n, r, a) {
					if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
					var c, o, i = arguments.length;
					switch (i) {
						case 0:
						case 1:
							return e.nextTick(t);
						case 2:
							return e.nextTick((function () {
								t.call(null, n)
							}));
						case 3:
							return e.nextTick((function () {
								t.call(null, n, r)
							}));
						case 4:
							return e.nextTick((function () {
								t.call(null, n, r, a)
							}));
						default:
							for (c = new Array(i - 1), o = 0; o < c.length;) c[o++] = arguments[o];
							return e.nextTick((function () {
								t.apply(null, c)
							}))
					}
				}
			} : t.exports = e
		}).call(this, n(12))
	}, function (t, e, n) {
		"use strict";
		var r = n(125).Buffer,
			a = r.isEncoding || function (t) {
				switch ((t = "" + t) && t.toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
					case "raw":
						return !0;
					default:
						return !1
				}
			};

		function c(t) {
			var e;
			switch (this.encoding = function (t) {
				var e = function (t) {
					if (!t) return "utf8";
					for (var e;;) switch (t) {
						case "utf8":
						case "utf-8":
							return "utf8";
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return "utf16le";
						case "latin1":
						case "binary":
							return "latin1";
						case "base64":
						case "ascii":
						case "hex":
							return t;
						default:
							if (e) return;
							t = ("" + t).toLowerCase(), e = !0
					}
				}(t);
				if ("string" != typeof e && (r.isEncoding === a || !a(t))) throw new Error("Unknown encoding: " + t);
				return e || t
			}(t), this.encoding) {
				case "utf16le":
					this.text = u, this.end = s, e = 4;
					break;
				case "utf8":
					this.fillLast = i, e = 4;
					break;
				case "base64":
					this.text = l, this.end = g, e = 3;
					break;
				default:
					return this.write = f, void(this.end = p)
			}
			this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
		}

		function o(t) {
			return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
		}

		function i(t) {
			var e = this.lastTotal - this.lastNeed,
				n = function (t, e) {
					if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
					if (1 < t.lastNeed && 1 < e.length) {
						if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
						if (2 < t.lastNeed && 2 < e.length && 128 != (192 & e[2])) return t.lastNeed = 2, "�"
					}
				}(this, t);
			return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
		}

		function u(t, e) {
			if ((t.length - e) % 2 != 0) return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
			var n = t.toString("utf16le", e);
			if (n) {
				var r = n.charCodeAt(n.length - 1);
				if (55296 <= r && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
			}
			return n
		}

		function s(t) {
			var e = t && t.length ? this.write(t) : "";
			if (this.lastNeed) {
				var n = this.lastTotal - this.lastNeed;
				return e + this.lastChar.toString("utf16le", 0, n)
			}
			return e
		}

		function l(t, e) {
			var n = (t.length - e) % 3;
			return 0 == n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 == n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
		}

		function g(t) {
			var e = t && t.length ? this.write(t) : "";
			return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
		}

		function f(t) {
			return t.toString(this.encoding)
		}

		function p(t) {
			return t && t.length ? this.write(t) : ""
		}(e.StringDecoder = c).prototype.write = function (t) {
			if (0 === t.length) return "";
			var e, n;
			if (this.lastNeed) {
				if (void 0 === (e = this.fillLast(t))) return "";
				n = this.lastNeed, this.lastNeed = 0
			} else n = 0;
			return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
		}, c.prototype.end = function (t) {
			var e = t && t.length ? this.write(t) : "";
			return this.lastNeed ? e + "�" : e
		}, c.prototype.text = function (t, e) {
			var n = function (t, e, n) {
				var r = e.length - 1;
				if (r < n) return 0;
				var a = o(e[r]);
				return 0 <= a ? (0 < a && (t.lastNeed = a - 1), a) : --r < n || -2 === a ? 0 : 0 <= (a = o(e[r])) ? (0 < a && (t.lastNeed = a - 2), a) : --r < n || -2 === a ? 0 : 0 <= (a = o(e[r])) ? (0 < a && (2 === a ? a = 0 : t.lastNeed = a - 3), a) : 0
			}(this, t, e);
			if (!this.lastNeed) return t.toString("utf8", e);
			this.lastTotal = n;
			var r = t.length - (n - this.lastNeed);
			return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
		}, c.prototype.fillLast = function (t) {
			if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
			t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
		}
	}, function (t, e, n) {
		"use strict";
		(function (e) {
			var r = e.Symbol,
				a = n(145);
			t.exports = function () {
				return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && a()
			}
		}).call(this, n(9))
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.SelectionContext = e.defaultSelection = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== c(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = n(5);

		function c(t) {
			return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function o() {
			return (o = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function i(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function u(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? i(Object(n), !0).forEach((function (e) {
					p(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function s(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function l(t) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function g(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function f(t, e) {
			return (f = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function p(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var d = e.defaultSelection = {
			ref: null,
			name: "",
			seq: "",
			gc: 0,
			tm: 0,
			type: "",
			start: 0,
			end: 0,
			length: 0,
			clockwise: !0
		};
		(e.SelectionContext = r.createContext(d)).displayName = "SelectionContext", e.default = function (t) {
			return function (t) {
				var e, n;
				return n = e = function () {
					function e() {
						var t, n;
						! function (t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, e);
						for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
						return n = function (t, e) {
							return !e || "object" !== c(e) && "function" != typeof e ? g(t) : e
						}(this, (t = l(e)).call.apply(t, [this].concat(o))), p(g(n), "state", u({}, d)), p(g(n), "previousBase", null), p(g(n), "forward", null), p(g(n), "fullSelectionLength", 0), p(g(n), "dragEvent", !1), p(g(n), "selectionStarted", !1), p(g(n), "shiftSelection", !1), p(g(n), "idToRange", new Map), p(g(n), "componentDidMount", (function () {
							document.addEventListener("mouseup", n.stopDrag)
						})), p(g(n), "componentWillUnmount", (function () {
							document.removeEventListener("mouseup", n.stopDrag)
						})), p(g(n), "stopDrag", (function () {
							n.dragEvent = !1
						})), p(g(n), "resetCircleDragVars", (function (t) {
							n.previousBase = t, n.forward = null, n.fullSelectionLength = 0, n.dragEvent = !0
						})), p(g(n), "inputRef", (function (t, e) {
							n.idToRange.set(t, u({
								ref: t
							}, e))
						})), p(g(n), "removeMountedBlock", (function (t) {
							n.idToRange.delete(t)
						})), p(g(n), "mouseEvent", (function (t) {
							var e = n.props,
								r = e.Circular,
								a = e.Linear;
							if ("mousemove" !== t.type && "mouseup" !== t.type || n.dragEvent) {
								var c = n.dragEvent ? n.idToRange.get(t.currentTarget.id) : n.idToRange.get(t.target.id) || n.idToRange.get(t.currentTarget.id);
								if (c) {
									var o = c.start,
										i = c.end,
										s = c.direction,
										l = c.element;
									switch (c.type) {
										case "ANNOTATION":
										case "PRIMER":
										case "FIND":
										case "TRANSLATION":
										case "ENZYME":
											a || n.props.setCentralIndex("linear", o);
											var g = !s || 1 === s,
												f = g ? o : i,
												p = g ? i : o;
											n.setSelection(u({}, l, {}, c, {
												start: f,
												end: p,
												clockwise: g
											})), n.dragEvent = !1;
											break;
										case "SEQ":
											a ? n.linearSeqEvent(t, c) : r && n.circularSeqEvent(t)
									}
								}
							}
						})), p(g(n), "linearSeqEvent", (function (t, e) {
							var r = n.props.selection,
								a = n.calculateBaseLinear(t, e),
								c = null !== r.start && a >= r.start;
							"mousedown" === t.type && null !== a ? (n.setSelection(u({}, d, {
								start: t.shiftKey ? r.start : a,
								end: a,
								clockwise: c
							})), n.dragEvent = !0) : n.dragEvent && null !== a && n.setSelection(u({}, d, {
								start: r.start,
								end: a,
								clockwise: c
							}))
						})), p(g(n), "circularSeqEvent", (function (t) {
							var e = n.props,
								r = e.seq,
								a = e.selection,
								c = a.start,
								o = a.end,
								i = a.clockwise,
								s = a.currRef,
								l = n.calculateBaseCircular(t),
								g = s,
								f = r.length;
							if ("mousedown" === t.type) {
								var p = t.shiftKey ? c : l,
									h = t.shiftKey ? n.calcSelectionLength(p, l, !1) : n.calcSelectionLength(p, l, !0);
								n.selectionStarted = 0 < h, n.resetCircleDragVars(p), n.setSelection(u({}, d, {
									start: p,
									end: l,
									ref: "",
									clockwise: i
								}))
							} else if ("mousemove" === t.type && n.dragEvent && l && l !== n.previousBase) {
								var y = l > n.previousBase,
									m = .9 * f,
									b = Math.abs(n.previousBase - l),
									v = m < b;
								n.forward = y ? !v : v;
								var w = v ? f - b : b,
									O = n.forward === n.props.selection.clockwise || null === n.props.selection.clockwise;
								if (O ? n.fullSelectionLength += w : n.fullSelectionLength -= w, n.previousBase = l, n.fullSelectionLength < .01 * f && !n.shiftSelection) {
									i = n.forward;
									var E = n.calcSelectionLength(n.props.selection.start, l, n.forward);
									n.fullSelectionLength < 0 && (n.fullSelectionLength = E), E > n.fullSelectionLength && (i = !n.forward), o = l, g = ""
								}
								O = n.forward === n.props.selection.clockwise;
								var T = n.calcSelectionLength(n.props.selection.start, l, n.props.selection.clockwise);
								n.selectionStarted && n.shiftSelection && T > n.fullSelectionLength && (n.fullSelectionLength = T);
								var S = n.dragEvent && O,
									C = "ALL" === s,
									x = !C && n.fullSelectionLength >= f;
								S && x ? (g = "ALL", o = c) : C ? (n.fullSelectionLength = f + n.fullSelectionLength % f, g = "ALL", !S && T === n.fullSelectionLength - f && .9 * f < T && (o = l, g = "", n.fullSelectionLength = n.fullSelectionLength - f)) : (o = l, g = ""), n.shiftSelection = !1, n.setSelection(u({}, d, {
									start: c,
									end: o,
									ref: g,
									clockwise: i
								}))
							}
						})), p(g(n), "calculateBaseLinear", (function (t, e) {
							var r = n.props,
								a = r.size,
								c = r.bpsPerBlock,
								o = a.width,
								i = t.currentTarget.getBoundingClientRect(),
								u = (t.clientX - i.left) / o,
								s = Math.round(u * c);
							return e.start + s
						})), p(g(n), "calculateBaseCircular", (function (t) {
							var e = n.props,
								r = e.center,
								a = e.centralIndex,
								c = e.seq,
								o = e.yDiff;
							if (!r) return 0;
							var i = t.currentTarget.getBoundingClientRect(),
								u = t.clientX - i.left,
								s = t.clientY - i.top,
								l = u - r.x,
								g = (s - (r.y + o)) / l,
								f = Math.atan(g) * (180 / Math.PI) + 90;
							l < 0 && (f += 180);
							var p = f / 360,
								d = Math.round(c.length * p);
							return (d += a) > c.length && (d -= c.length), d
						})), p(g(n), "setSelection", (function (t) {
							var e = n.props.setSelection;
							if (t.start !== n.props.selection.start || t.end !== n.props.selection.end || t.ref !== n.props.selection.ref) {
								var r = u({}, n.props.selection, {}, t),
									c = r.clockwise,
									o = r.start,
									i = r.end,
									s = r.ref,
									l = r.type,
									g = r.element,
									f = n.calcSelectionLength(o, i, c),
									p = n.getSelectedSequence(o, i, c);
								e({
									ref: s,
									seq: p,
									gc: (0, a.calcGC)(p),
									tm: (0, a.calcTm)(p),
									type: l,
									start: o,
									end: i,
									length: f,
									clockwise: c,
									element: g
								})
							}
						})), p(g(n), "getSelectedSequence", (function (t, e, r) {
							var a = n.props.seq;
							return e < t && !r ? a.substring(e, t) : t < e && !r ? a.substring(e, a.length) + a.substring(0, t) : t < e && r ? a.substring(t, e) : e < t && r ? a.substring(t, a.length) + a.substring(0, e) : ""
						})), p(g(n), "calcSelectionLength", (function (t, e, r) {
							var a = n.props.seq;
							return e < t && !r ? t - e : t < e && !r ? t + (a.length - e) : t < e && r ? e - t : e < t && r ? a.length - t + e : 0
						})), n
					}
					return function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									writable: !0,
									configurable: !0
								}
							}), e && f(t, e)
						}(e, r.Component),
						function (t, e, n) {
							e && s(t.prototype, e)
						}(e, [{
							key: "render",
							value: function () {
								return r.createElement(t, o({}, this.props, {
									inputRef: this.inputRef,
									mouseEvent: this.mouseEvent,
									onUnmount: this.removeMountedBlock
								}))
							}
						}]), e
				}(), p(e, "displayName", "SelectionHandler"), n
			}(t)
		}
	}, function (t, e, n) {
		"use strict";
		/*
		object-assign
		(c) Sindre Sorhus
		@license MIT
		*/
		var r = Object.getOwnPropertySymbols,
			a = Object.prototype.hasOwnProperty,
			c = Object.prototype.propertyIsEnumerable;
		t.exports = function () {
			try {
				if (!Object.assign) return !1;
				var t = new String("abc");
				if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
				for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
				if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
						return e[t]
					})).join("")) return !1;
				var r = {};
				return "abcdefghijklmnopqrst".split("").forEach((function (t) {
					r[t] = t
				})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
			} catch (t) {
				return !1
			}
		}() ? Object.assign : function (t, e) {
			for (var n, o, i = function (t) {
					if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
					return Object(t)
				}(t), u = 1; u < arguments.length; u++) {
				for (var s in n = Object(arguments[u])) a.call(n, s) && (i[s] = n[s]);
				if (r) {
					o = r(n);
					for (var l = 0; l < o.length; l++) c.call(n, o[l]) && (i[o[l]] = n[o[l]])
				}
			}
			return i
		}
	}, function (t, e) {
		(function () {
			e.defaults = {
				.1: {
					explicitCharkey: !1,
					trim: !0,
					normalize: !0,
					normalizeTags: !1,
					attrkey: "@",
					charkey: "#",
					explicitArray: !1,
					ignoreAttrs: !1,
					mergeAttrs: !1,
					explicitRoot: !1,
					validator: null,
					xmlns: !1,
					explicitChildren: !1,
					childkey: "@@",
					charsAsChildren: !1,
					includeWhiteChars: !1,
					async: !1,
					strict: !0,
					attrNameProcessors: null,
					attrValueProcessors: null,
					tagNameProcessors: null,
					valueProcessors: null,
					emptyTag: ""
				},
				.2: {
					explicitCharkey: !1,
					trim: !1,
					normalize: !1,
					normalizeTags: !1,
					attrkey: "$",
					charkey: "_",
					explicitArray: !0,
					ignoreAttrs: !1,
					mergeAttrs: !1,
					explicitRoot: !0,
					validator: null,
					xmlns: !1,
					explicitChildren: !1,
					preserveChildrenOrder: !1,
					childkey: "$$",
					charsAsChildren: !1,
					includeWhiteChars: !1,
					async: !1,
					strict: !0,
					attrNameProcessors: null,
					attrValueProcessors: null,
					tagNameProcessors: null,
					valueProcessors: null,
					rootName: "root",
					xmldec: {
						version: "1.0",
						encoding: "UTF-8",
						standalone: !0
					},
					doctype: null,
					renderOpts: {
						pretty: !0,
						indent: "  ",
						newline: "\n"
					},
					headless: !1,
					chunkSize: 1e4,
					emptyTag: "",
					cdata: !1
				}
			}
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c, o, i, u, s, l = {}.hasOwnProperty;

			function g(t, n, r) {
				var a, c, o, i;
				if (g.__super__.constructor.call(this, t), null == n) throw new Error("Missing element name. " + this.debugInfo());
				if (this.name = this.stringify.name(n), this.type = e.Element, this.attribs = {}, (this.schemaTypeInfo = null) != r && this.attribute(r), t.type === e.Document && (this.isRoot = !0, (this.documentObject = t).rootObject = this, t.children))
					for (c = 0, o = (i = t.children).length; c < o; c++)
						if ((a = i[c]).type === e.DocType) {
							a.name = this.name;
							break
						}
			}
			s = n(7), u = s.isObject, i = s.isFunction, o = s.getValue, c = n(4), e = n(1), r = n(56), a = n(30), t.exports = (function (t, e) {
				for (var n in e) l.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(g, c), Object.defineProperty(g.prototype, "tagName", {
				get: function () {
					return this.name
				}
			}), Object.defineProperty(g.prototype, "namespaceURI", {
				get: function () {
					return ""
				}
			}), Object.defineProperty(g.prototype, "prefix", {
				get: function () {
					return ""
				}
			}), Object.defineProperty(g.prototype, "localName", {
				get: function () {
					return this.name
				}
			}), Object.defineProperty(g.prototype, "id", {
				get: function () {
					throw new Error("This DOM method is not implemented." + this.debugInfo())
				}
			}), Object.defineProperty(g.prototype, "className", {
				get: function () {
					throw new Error("This DOM method is not implemented." + this.debugInfo())
				}
			}), Object.defineProperty(g.prototype, "classList", {
				get: function () {
					throw new Error("This DOM method is not implemented." + this.debugInfo())
				}
			}), Object.defineProperty(g.prototype, "attributes", {
				get: function () {
					return this.attributeMap && this.attributeMap.nodes || (this.attributeMap = new a(this.attribs)), this.attributeMap
				}
			}), g.prototype.clone = function () {
				var t, e, n, r;
				for (e in (n = Object.create(this)).isRoot && (n.documentObject = null), n.attribs = {}, r = this.attribs) l.call(r, e) && (t = r[e], n.attribs[e] = t.clone());
				return n.children = [], this.children.forEach((function (t) {
					var e;
					return ((e = t.clone()).parent = n).children.push(e)
				})), n
			}, g.prototype.attribute = function (t, e) {
				var n, a;
				if (null != t && (t = o(t)), u(t))
					for (n in t) l.call(t, n) && (a = t[n], this.attribute(n, a));
				else i(e) && (e = e.apply()), this.options.keepNullAttributes && null == e ? this.attribs[t] = new r(this, t, "") : null != e && (this.attribs[t] = new r(this, t, e));
				return this
			}, g.prototype.removeAttribute = function (t) {
				var e, n, r;
				if (null == t) throw new Error("Missing attribute name. " + this.debugInfo());
				if (t = o(t), Array.isArray(t))
					for (n = 0, r = t.length; n < r; n++) e = t[n], delete this.attribs[e];
				else delete this.attribs[t];
				return this
			}, g.prototype.toString = function (t) {
				return this.options.writer.element(this, this.options.writer.filterOptions(t))
			}, g.prototype.att = function (t, e) {
				return this.attribute(t, e)
			}, g.prototype.a = function (t, e) {
				return this.attribute(t, e)
			}, g.prototype.getAttribute = function (t) {
				return this.attribs.hasOwnProperty(t) ? this.attribs[t].value : null
			}, g.prototype.setAttribute = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getAttributeNode = function (t) {
				return this.attribs.hasOwnProperty(t) ? this.attribs[t] : null
			}, g.prototype.setAttributeNode = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.removeAttributeNode = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getElementsByTagName = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getAttributeNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.setAttributeNS = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.removeAttributeNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getAttributeNodeNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.setAttributeNodeNS = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getElementsByTagNameNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.hasAttribute = function (t) {
				return this.attribs.hasOwnProperty(t)
			}, g.prototype.hasAttributeNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.setIdAttribute = function (t, e) {
				return this.attribs.hasOwnProperty(t) ? this.attribs[t].isId : e
			}, g.prototype.setIdAttributeNS = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.setIdAttributeNode = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getElementsByTagName = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getElementsByTagNameNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.getElementsByClassName = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, g.prototype.isEqualNode = function (t) {
				var e, n, r;
				if (!g.__super__.isEqualNode.apply(this, arguments).isEqualNode(t)) return !1;
				if (t.namespaceURI !== this.namespaceURI) return !1;
				if (t.prefix !== this.prefix) return !1;
				if (t.localName !== this.localName) return !1;
				if (t.attribs.length !== this.attribs.length) return !1;
				for (e = n = 0, r = this.attribs.length - 1; 0 <= r ? n <= r : r <= n; e = 0 <= r ? ++n : --n)
					if (!this.attribs[e].isEqualNode(t.attribs[e])) return !1;
				return !0
			}, g)
		}).call(this)
	}, function (t, e) {
		(function () {
			function e(t) {
				this.nodes = t
			}
			t.exports = (Object.defineProperty(e.prototype, "length", {
				get: function () {
					return Object.keys(this.nodes).length || 0
				}
			}), e.prototype.clone = function () {
				return this.nodes = null
			}, e.prototype.getNamedItem = function (t) {
				return this.nodes[t]
			}, e.prototype.setNamedItem = function (t) {
				var e;
				return e = this.nodes[t.nodeName], this.nodes[t.nodeName] = t, e || null
			}, e.prototype.removeNamedItem = function (t) {
				var e;
				return e = this.nodes[t], delete this.nodes[t], e || null
			}, e.prototype.item = function (t) {
				return this.nodes[Object.keys(this.nodes)[t]] || null
			}, e.prototype.getNamedItemNS = function (t, e) {
				throw new Error("This DOM method is not implemented.")
			}, e.prototype.setNamedItemNS = function (t) {
				throw new Error("This DOM method is not implemented.")
			}, e.prototype.removeNamedItemNS = function (t, e) {
				throw new Error("This DOM method is not implemented.")
			}, e)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing CDATA text. " + this.debugInfo());
				this.name = "#cdata-section", this.type = e.CData, this.value = this.stringify.cdata(n)
			}
			e = n(1), r = n(20), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.clone = function () {
				return Object.create(this)
			}, c.prototype.toString = function (t) {
				return this.options.writer.cdata(this, this.options.writer.filterOptions(t))
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing comment text. " + this.debugInfo());
				this.name = "#comment", this.type = e.Comment, this.value = this.stringify.comment(n)
			}
			e = n(1), r = n(20), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.clone = function () {
				return Object.create(this)
			}, c.prototype.toString = function (t) {
				return this.options.writer.comment(this, this.options.writer.filterOptions(t))
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c = {}.hasOwnProperty;

			function o(t, n, r, c) {
				var i;
				o.__super__.constructor.call(this, t), a(n) && (n = (i = n).version, r = i.encoding, c = i.standalone), n = n || "1.0", this.type = e.Declaration, this.version = this.stringify.xmlVersion(n), null != r && (this.encoding = this.stringify.xmlEncoding(r)), null != c && (this.standalone = this.stringify.xmlStandalone(c))
			}
			a = n(7).isObject, r = n(4), e = n(1), t.exports = (function (t, e) {
				for (var n in e) c.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(o, r), o.prototype.toString = function (t) {
				return this.options.writer.declaration(this, this.options.writer.filterOptions(t))
			}, o)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c, o, i, u, s, l = {}.hasOwnProperty;

			function g(t, n, r) {
				var a, c, o, i, u, l;
				if (g.__super__.constructor.call(this, t), this.type = e.DocType, t.children)
					for (c = 0, o = (i = t.children).length; c < o; c++)
						if ((a = i[c]).type === e.Element) {
							this.name = a.name;
							break
						}
				this.documentObject = t, s(n) && (n = (u = n).pubID, r = u.sysID), null == r && (r = (l = [n, r])[0], n = l[1]), null != n && (this.pubID = this.stringify.dtdPubID(n)), null != r && (this.sysID = this.stringify.dtdSysID(r))
			}
			s = n(7).isObject, u = n(4), e = n(1), r = n(35), c = n(36), a = n(37), o = n(38), i = n(30), t.exports = (function (t, e) {
				for (var n in e) l.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(g, u), Object.defineProperty(g.prototype, "entities", {
				get: function () {
					var t, n, r, a, c;
					for (a = {}, n = 0, r = (c = this.children).length; n < r; n++)(t = c[n]).type !== e.EntityDeclaration || t.pe || (a[t.name] = t);
					return new i(a)
				}
			}), Object.defineProperty(g.prototype, "notations", {
				get: function () {
					var t, n, r, a, c;
					for (a = {}, n = 0, r = (c = this.children).length; n < r; n++)(t = c[n]).type === e.NotationDeclaration && (a[t.name] = t);
					return new i(a)
				}
			}), Object.defineProperty(g.prototype, "publicId", {
				get: function () {
					return this.pubID
				}
			}), Object.defineProperty(g.prototype, "systemId", {
				get: function () {
					return this.sysID
				}
			}), Object.defineProperty(g.prototype, "internalSubset", {
				get: function () {
					throw new Error("This DOM method is not implemented." + this.debugInfo())
				}
			}), g.prototype.element = function (t, e) {
				var n;
				return n = new a(this, t, e), this.children.push(n), this
			}, g.prototype.attList = function (t, e, n, a, c) {
				var o;
				return o = new r(this, t, e, n, a, c), this.children.push(o), this
			}, g.prototype.entity = function (t, e) {
				var n;
				return n = new c(this, !1, t, e), this.children.push(n), this
			}, g.prototype.pEntity = function (t, e) {
				var n;
				return n = new c(this, !0, t, e), this.children.push(n), this
			}, g.prototype.notation = function (t, e) {
				var n;
				return n = new o(this, t, e), this.children.push(n), this
			}, g.prototype.toString = function (t) {
				return this.options.writer.docType(this, this.options.writer.filterOptions(t))
			}, g.prototype.ele = function (t, e) {
				return this.element(t, e)
			}, g.prototype.att = function (t, e, n, r, a) {
				return this.attList(t, e, n, r, a)
			}, g.prototype.ent = function (t, e) {
				return this.entity(t, e)
			}, g.prototype.pent = function (t, e) {
				return this.pEntity(t, e)
			}, g.prototype.not = function (t, e) {
				return this.notation(t, e)
			}, g.prototype.up = function () {
				return this.root() || this.documentObject
			}, g.prototype.isEqualNode = function (t) {
				return !!g.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.name === this.name && t.publicId === this.publicId && t.systemId === this.systemId
			}, g)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n, r, a, o, i) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing DTD element name. " + this.debugInfo());
				if (null == r) throw new Error("Missing DTD attribute name. " + this.debugInfo(n));
				if (!a) throw new Error("Missing DTD attribute type. " + this.debugInfo(n));
				if (!o) throw new Error("Missing DTD attribute default. " + this.debugInfo(n));
				if (0 !== o.indexOf("#") && (o = "#" + o), !o.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(n));
				if (i && !o.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(n));
				this.elementName = this.stringify.name(n), this.type = e.AttributeDeclaration, this.attributeName = this.stringify.name(r), this.attributeType = this.stringify.dtdAttType(a), i && (this.defaultValue = this.stringify.dtdAttDefault(i)), this.defaultValueType = o
			}
			r = n(4), e = n(1), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.toString = function (t) {
				return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(t))
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c = {}.hasOwnProperty;

			function o(t, n, r, c) {
				if (o.__super__.constructor.call(this, t), null == r) throw new Error("Missing DTD entity name. " + this.debugInfo(r));
				if (null == c) throw new Error("Missing DTD entity value. " + this.debugInfo(r));
				if (this.pe = !!n, this.name = this.stringify.name(r), this.type = e.EntityDeclaration, a(c)) {
					if (!c.pubID && !c.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(r));
					if (c.pubID && !c.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(r));
					if (this.internal = !1, null != c.pubID && (this.pubID = this.stringify.dtdPubID(c.pubID)), null != c.sysID && (this.sysID = this.stringify.dtdSysID(c.sysID)), null != c.nData && (this.nData = this.stringify.dtdNData(c.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(r))
				} else this.value = this.stringify.dtdEntityValue(c), this.internal = !0
			}
			a = n(7).isObject, r = n(4), e = n(1), t.exports = (function (t, e) {
				for (var n in e) c.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(o, r), Object.defineProperty(o.prototype, "publicId", {
				get: function () {
					return this.pubID
				}
			}), Object.defineProperty(o.prototype, "systemId", {
				get: function () {
					return this.sysID
				}
			}), Object.defineProperty(o.prototype, "notationName", {
				get: function () {
					return this.nData || null
				}
			}), Object.defineProperty(o.prototype, "inputEncoding", {
				get: function () {
					return null
				}
			}), Object.defineProperty(o.prototype, "xmlEncoding", {
				get: function () {
					return null
				}
			}), Object.defineProperty(o.prototype, "xmlVersion", {
				get: function () {
					return null
				}
			}), o.prototype.toString = function (t) {
				return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(t))
			}, o)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n, r) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing DTD element name. " + this.debugInfo());
				r = r || "(#PCDATA)", Array.isArray(r) && (r = "(" + r.join(",") + ")"), this.name = this.stringify.name(n), this.type = e.ElementDeclaration, this.value = this.stringify.dtdElementValue(r)
			}
			r = n(4), e = n(1), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.toString = function (t) {
				return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t))
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n, r) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing DTD notation name. " + this.debugInfo(n));
				if (!r.pubID && !r.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(n));
				this.name = this.stringify.name(n), this.type = e.NotationDeclaration, null != r.pubID && (this.pubID = this.stringify.dtdPubID(r.pubID)), null != r.sysID && (this.sysID = this.stringify.dtdSysID(r.sysID))
			}
			r = n(4), e = n(1), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), Object.defineProperty(c.prototype, "publicId", {
				get: function () {
					return this.pubID
				}
			}), Object.defineProperty(c.prototype, "systemId", {
				get: function () {
					return this.sysID
				}
			}), c.prototype.toString = function (t) {
				return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(t))
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing raw text. " + this.debugInfo());
				this.type = e.Raw, this.value = this.stringify.raw(n)
			}
			e = n(1), r = n(4), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.clone = function () {
				return Object.create(this)
			}, c.prototype.toString = function (t) {
				return this.options.writer.raw(this, this.options.writer.filterOptions(t))
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing element text. " + this.debugInfo());
				this.name = "#text", this.type = e.Text, this.value = this.stringify.text(n)
			}
			e = n(1), r = n(20), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), Object.defineProperty(c.prototype, "isElementContentWhitespace", {
				get: function () {
					throw new Error("This DOM method is not implemented." + this.debugInfo())
				}
			}), Object.defineProperty(c.prototype, "wholeText", {
				get: function () {
					var t, e, n;
					for (n = "", e = this.previousSibling; e;) n = e.data + n, e = e.previousSibling;
					for (n += this.data, t = this.nextSibling; t;) n += t.data, t = t.nextSibling;
					return n
				}
			}), c.prototype.clone = function () {
				return Object.create(this)
			}, c.prototype.toString = function (t) {
				return this.options.writer.text(this, this.options.writer.filterOptions(t))
			}, c.prototype.splitText = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, c.prototype.replaceWholeText = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t, n, r) {
				if (c.__super__.constructor.call(this, t), null == n) throw new Error("Missing instruction target. " + this.debugInfo());
				this.type = e.ProcessingInstruction, this.target = this.stringify.insTarget(n), this.name = this.target, r && (this.value = this.stringify.insValue(r))
			}
			e = n(1), r = n(20), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.clone = function () {
				return Object.create(this)
			}, c.prototype.toString = function (t) {
				return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(t))
			}, c.prototype.isEqualNode = function (t) {
				return !!c.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.target === this.target
			}, c)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r = {}.hasOwnProperty;

			function a(t) {
				a.__super__.constructor.call(this, t)
			}
			e = n(59), t.exports = (function (t, e) {
				for (var n in e) r.call(e, n) && (t[n] = e[n]);

				function a() {
					this.constructor = t
				}
				a.prototype = e.prototype, t.prototype = new a, t.__super__ = e.prototype
			}(a, e), a.prototype.document = function (t, e) {
				var n, r, a, c, o;
				for (e = this.filterOptions(e), c = "", r = 0, a = (o = t.children).length; r < a; r++) n = o[r], c += this.writeChildNode(n, e, 0);
				return e.pretty && c.slice(-e.newline.length) === e.newline && (c = c.slice(0, -e.newline.length)), c
			}, a)
		}).call(this)
	}, function (t, e, n) {
		(((e = t.exports = n(61)).Stream = e).Readable = e).Writable = n(45), e.Duplex = n(10), e.Transform = n(65), e.PassThrough = n(126)
	}, function (t, e, n) {
		var r = n(13),
			a = r.Buffer;

		function c(t, e) {
			for (var n in t) e[n] = t[n]
		}

		function o(t, e, n) {
			return a(t, e, n)
		}
		a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? t.exports = r : (c(r, e), e.Buffer = o), c(a, o), o.from = function (t, e, n) {
			if ("number" == typeof t) throw new TypeError("Argument must not be a number");
			return a(t, e, n)
		}, o.alloc = function (t, e, n) {
			if ("number" != typeof t) throw new TypeError("Argument must be a number");
			var r = a(t);
			return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
		}, o.allocUnsafe = function (t) {
			if ("number" != typeof t) throw new TypeError("Argument must be a number");
			return a(t)
		}, o.allocUnsafeSlow = function (t) {
			if ("number" != typeof t) throw new TypeError("Argument must be a number");
			return r.SlowBuffer(t)
		}
	}, function (t, e, n) {
		"use strict";
		(function (e, r, a) {
			var c = n(23);

			function o(t) {
				var e = this;
				this.next = null, this.entry = null, this.finish = function () {
					! function (t, e, n) {
						var r = t.entry;
						for (t.entry = null; r;) {
							var a = r.callback;
							e.pendingcb--, a(void 0), r = r.next
						}
						e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
					}(e, t)
				}
			}
			t.exports = b;
			var i, u = !e.browser && -1 < ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) ? r : c.nextTick;
			b.WritableState = m;
			var s = n(19);
			s.inherits = n(14);
			var l, g = {
					deprecate: n(124)
				},
				f = n(62),
				p = n(44).Buffer,
				d = a.Uint8Array || function () {},
				h = n(63);

			function y() {}

			function m(t, e) {
				i = i || n(10), t = t || {};
				var r = e instanceof i;
				this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
				var a = t.highWaterMark,
					s = t.writableHighWaterMark,
					l = this.objectMode ? 16 : 16384;
				this.highWaterMark = a || 0 === a ? a : r && (s || 0 === s) ? s : l, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
				var g = (this.destroyed = !1) === t.decodeStrings;
				this.decodeStrings = !g, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
					! function (t, e) {
						var n = t._writableState,
							r = n.sync,
							a = n.writecb;
						if (function (t) {
								t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
							}(n), e) ! function (t, e, n, r, a) {
							--e.pendingcb, n ? (c.nextTick(a, r), c.nextTick(S, t, e), t._writableState.errorEmitted = !0, t.emit("error", r)) : (a(r), t._writableState.errorEmitted = !0, t.emit("error", r), S(t, e))
						}(t, n, r, e, a);
						else {
							var o = E(n);
							o || n.corked || n.bufferProcessing || !n.bufferedRequest || O(t, n), r ? u(w, t, n, o, a) : w(t, n, o, a)
						}
					}(e, t)
				}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
			}

			function b(t) {
				if (i = i || n(10), !(l.call(b, this) || this instanceof i)) return new b(t);
				this._writableState = new m(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), f.call(this)
			}

			function v(t, e, n, r, a, c, o) {
				e.writelen = r, e.writecb = o, e.writing = !0, e.sync = !0, n ? t._writev(a, e.onwrite) : t._write(a, c, e.onwrite), e.sync = !1
			}

			function w(t, e, n, r) {
				n || function (t, e) {
					0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
				}(t, e), e.pendingcb--, r(), S(t, e)
			}

			function O(t, e) {
				e.bufferProcessing = !0;
				var n = e.bufferedRequest;
				if (t._writev && n && n.next) {
					var r = e.bufferedRequestCount,
						a = new Array(r),
						c = e.corkedRequestsFree;
					c.entry = n;
					for (var i = 0, u = !0; n;)(a[i] = n).isBuf || (u = !1), n = n.next, i += 1;
					a.allBuffers = u, v(t, e, !0, e.length, a, "", c.finish), e.pendingcb++, e.lastBufferedRequest = null, c.next ? (e.corkedRequestsFree = c.next, c.next = null) : e.corkedRequestsFree = new o(e), e.bufferedRequestCount = 0
				} else {
					for (; n;) {
						var s = n.chunk,
							l = n.encoding,
							g = n.callback;
						if (v(t, e, !1, e.objectMode ? 1 : s.length, s, l, g), n = n.next, e.bufferedRequestCount--, e.writing) break
					}
					null === n && (e.lastBufferedRequest = null)
				}
				e.bufferedRequest = n, e.bufferProcessing = !1
			}

			function E(t) {
				return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
			}

			function T(t, e) {
				t._final((function (n) {
					e.pendingcb--, n && t.emit("error", n), e.prefinished = !0, t.emit("prefinish"), S(t, e)
				}))
			}

			function S(t, e) {
				var n = E(e);
				return n && (function (t, e) {
					e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, c.nextTick(T, t, e)) : (e.prefinished = !0, t.emit("prefinish")))
				}(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), n
			}
			s.inherits(b, f), m.prototype.getBuffer = function () {
					for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
					return e
				},
				function () {
					try {
						Object.defineProperty(m.prototype, "buffer", {
							get: g.deprecate((function () {
								return this.getBuffer()
							}), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
						})
					} catch (t) {}
				}(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance], Object.defineProperty(b, Symbol.hasInstance, {
					value: function (t) {
						return !!l.call(this, t) || this === b && t && t._writableState instanceof m
					}
				})) : l = function (t) {
					return t instanceof this
				}, b.prototype.pipe = function () {
					this.emit("error", new Error("Cannot pipe, not readable"))
				}, b.prototype.write = function (t, e, n) {
					var r = this._writableState,
						a = !1,
						o = !r.objectMode && function (t) {
							return p.isBuffer(t) || t instanceof d
						}(t);
					return o && !p.isBuffer(t) && (t = function (t) {
						return p.from(t)
					}(t)), "function" == typeof e && (n = e, e = null), e = o ? "buffer" : e || r.defaultEncoding, "function" != typeof n && (n = y), r.ended ? function (t, e) {
						var n = new Error("write after end");
						t.emit("error", n), c.nextTick(e, n)
					}(this, n) : (o || function (t, e, n, r) {
						var a = !0,
							o = !1;
						return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (t.emit("error", o), c.nextTick(r, o), a = !1), a
					}(this, r, t, n)) && (r.pendingcb++, a = function (t, e, n, r, a, c) {
						if (!n) {
							var o = function (t, e, n) {
								return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = p.from(e, n)), e
							}(e, r, a);
							r !== o && (n = !0, a = "buffer", r = o)
						}
						var i = e.objectMode ? 1 : r.length;
						e.length += i;
						var u = e.length < e.highWaterMark;
						if (u || (e.needDrain = !0), e.writing || e.corked) {
							var s = e.lastBufferedRequest;
							e.lastBufferedRequest = {
								chunk: r,
								encoding: a,
								isBuf: n,
								callback: c,
								next: null
							}, s ? s.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
						} else v(t, e, !1, i, r, a, c);
						return u
					}(this, r, o, t, e, n)), a
				}, b.prototype.cork = function () {
					this._writableState.corked++
				}, b.prototype.uncork = function () {
					var t = this._writableState;
					t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || O(this, t))
				}, b.prototype.setDefaultEncoding = function (t) {
					if ("string" == typeof t && (t = t.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + t);
					return this._writableState.defaultEncoding = t, this
				}, Object.defineProperty(b.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function () {
						return this._writableState.highWaterMark
					}
				}), b.prototype._write = function (t, e, n) {
					n(new Error("_write() is not implemented"))
				}, b.prototype._writev = null, b.prototype.end = function (t, e, n) {
					var r = this._writableState;
					"function" == typeof t ? (n = t, e = t = null) : "function" == typeof e && (n = e, e = null), null != t && this.write(t, e), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function (t, e, n) {
						e.ending = !0, S(t, e), n && (e.finished ? c.nextTick(n) : t.once("finish", n)), e.ended = !0, t.writable = !1
					}(this, r, n)
				}, Object.defineProperty(b.prototype, "destroyed", {
					get: function () {
						return void 0 !== this._writableState && this._writableState.destroyed
					},
					set: function (t) {
						this._writableState && (this._writableState.destroyed = t)
					}
				}), b.prototype.destroy = h.destroy, b.prototype._undestroy = h.undestroy, b.prototype._destroy = function (t, e) {
					this.end(), e(t)
				}
		}).call(this, n(12), n(64).setImmediate, n(9))
	}, function (t, e, n) {
		"use strict";

		function r(t, e, n, r) {
			e in t && (! function (t) {
				return "function" == typeof t && "[object Function]" === i.call(t)
			}(r) || !r()) || (l ? s(t, e, {
				configurable: !0,
				enumerable: !1,
				value: n,
				writable: !0
			}) : t[e] = n)
		}

		function a(t, e) {
			var n = 2 < arguments.length ? arguments[2] : {},
				a = c(e);
			o && (a = u.call(a, Object.getOwnPropertySymbols(e)));
			for (var i = 0; i < a.length; i += 1) r(t, a[i], e[a[i]], n[a[i]])
		}
		var c = n(67),
			o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
			i = Object.prototype.toString,
			u = Array.prototype.concat,
			s = Object.defineProperty,
			l = s && function () {
				var t = {};
				try {
					for (var e in s(t, "x", {
							enumerable: !1,
							value: t
						}), t) return !1;
					return t.x === t
				} catch (t) {
					return !1
				}
			}();
		a.supportsDescriptors = !!l, t.exports = a
	}, function (t, e, n) {
		(function (t) {
			var r = Object.getOwnPropertyDescriptors || function (t) {
					for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
					return n
				},
				a = /%[sdj%]/g;
			e.format = function (t) {
				if (!m(t)) {
					for (var e = [], n = 0; n < arguments.length; n++) e.push(i(arguments[n]));
					return e.join(" ")
				}
				n = 1;
				for (var r = arguments, c = r.length, o = String(t).replace(a, (function (t) {
						if ("%%" === t) return "%";
						if (c <= n) return t;
						switch (t) {
							case "%s":
								return String(r[n++]);
							case "%d":
								return Number(r[n++]);
							case "%j":
								try {
									return JSON.stringify(r[n++])
								} catch (t) {
									return "[Circular]"
								}
							default:
								return t
						}
					})), u = r[n]; n < c; u = r[++n]) h(u) || !w(u) ? o += " " + u : o += " " + i(u);
				return o
			}, e.deprecate = function (n, r) {
				if (void 0 !== t && !0 === t.noDeprecation) return n;
				if (void 0 === t) return function () {
					return e.deprecate(n, r).apply(this, arguments)
				};
				var a = !1;
				return function () {
					if (!a) {
						if (t.throwDeprecation) throw new Error(r);
						t.traceDeprecation ? console.trace(r) : console.error(r), a = !0
					}
					return n.apply(this, arguments)
				}
			};
			var c, o = {};

			function i(t, n) {
				var r = {
					seen: [],
					stylize: s
				};
				return 3 <= arguments.length && (r.depth = arguments[2]), 4 <= arguments.length && (r.colors = arguments[3]), d(n) ? r.showHidden = n : n && e._extend(r, n), b(r.showHidden) && (r.showHidden = !1), b(r.depth) && (r.depth = 2), b(r.colors) && (r.colors = !1), b(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), l(r, t, r.depth)
			}

			function u(t, e) {
				var n = i.styles[e];
				return n ? "[" + i.colors[n][0] + "m" + t + "[" + i.colors[n][1] + "m" : t
			}

			function s(t, e) {
				return t
			}

			function l(t, n, r) {
				if (t.customInspect && n && T(n.inspect) && n.inspect !== e.inspect && (!n.constructor || n.constructor.prototype !== n)) {
					var a = n.inspect(r, t);
					return m(a) || (a = l(t, a, r)), a
				}
				var c = function (t, e) {
					if (b(e)) return t.stylize("undefined", "undefined");
					if (m(e)) {
						var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
						return t.stylize(n, "string")
					}
					return y(e) ? t.stylize("" + e, "number") : d(e) ? t.stylize("" + e, "boolean") : h(e) ? t.stylize("null", "null") : void 0
				}(t, n);
				if (c) return c;
				var o = Object.keys(n),
					i = function (t) {
						var e = {};
						return t.forEach((function (t, n) {
							e[t] = !0
						})), e
					}(o);
				if (t.showHidden && (o = Object.getOwnPropertyNames(n)), E(n) && (0 <= o.indexOf("message") || 0 <= o.indexOf("description"))) return g(n);
				if (0 === o.length) {
					if (T(n)) {
						var u = n.name ? ": " + n.name : "";
						return t.stylize("[Function" + u + "]", "special")
					}
					if (v(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
					if (O(n)) return t.stylize(Date.prototype.toString.call(n), "date");
					if (E(n)) return g(n)
				}
				var s, w = "",
					S = !1,
					C = ["{", "}"];
				return p(n) && (S = !0, C = ["[", "]"]), T(n) && (w = " [Function" + (n.name ? ": " + n.name : "") + "]"), v(n) && (w = " " + RegExp.prototype.toString.call(n)), O(n) && (w = " " + Date.prototype.toUTCString.call(n)), E(n) && (w = " " + g(n)), 0 !== o.length || S && 0 != n.length ? r < 0 ? v(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(n), s = S ? function (t, e, n, r, a) {
					for (var c = [], o = 0, i = e.length; o < i; ++o) N(e, String(o)) ? c.push(f(t, e, n, r, String(o), !0)) : c.push("");
					return a.forEach((function (a) {
						a.match(/^\d+$/) || c.push(f(t, e, n, r, a, !0))
					})), c
				}(t, n, r, i, o) : o.map((function (e) {
					return f(t, n, r, i, e, S)
				})), t.seen.pop(), function (t, e, n) {
					return 60 < t.reduce((function (t, e) {
						return e.indexOf("\n"), t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
					}), 0) ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
				}(s, w, C)) : C[0] + w + C[1]
			}

			function g(t) {
				return "[" + Error.prototype.toString.call(t) + "]"
			}

			function f(t, e, n, r, a, c) {
				var o, i, u;
				if ((u = Object.getOwnPropertyDescriptor(e, a) || {
						value: e[a]
					}).get ? i = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : u.set && (i = t.stylize("[Setter]", "special")), N(r, a) || (o = "[" + a + "]"), i || (t.seen.indexOf(u.value) < 0 ? -1 < (i = h(n) ? l(t, u.value, null) : l(t, u.value, n - 1)).indexOf("\n") && (i = c ? i.split("\n").map((function (t) {
						return "  " + t
					})).join("\n").substr(2) : "\n" + i.split("\n").map((function (t) {
						return "   " + t
					})).join("\n")) : i = t.stylize("[Circular]", "special")), b(o)) {
					if (c && a.match(/^\d+$/)) return i;
					o = (o = JSON.stringify("" + a)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), t.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), t.stylize(o, "string"))
				}
				return o + ": " + i
			}

			function p(t) {
				return Array.isArray(t)
			}

			function d(t) {
				return "boolean" == typeof t
			}

			function h(t) {
				return null === t
			}

			function y(t) {
				return "number" == typeof t
			}

			function m(t) {
				return "string" == typeof t
			}

			function b(t) {
				return void 0 === t
			}

			function v(t) {
				return w(t) && "[object RegExp]" === S(t)
			}

			function w(t) {
				return "object" == typeof t && null !== t
			}

			function O(t) {
				return w(t) && "[object Date]" === S(t)
			}

			function E(t) {
				return w(t) && ("[object Error]" === S(t) || t instanceof Error)
			}

			function T(t) {
				return "function" == typeof t
			}

			function S(t) {
				return Object.prototype.toString.call(t)
			}

			function C(t) {
				return t < 10 ? "0" + t.toString(10) : t.toString(10)
			}
			e.debuglog = function (n) {
				if (b(c) && (c = t.env.NODE_DEBUG || ""), n = n.toUpperCase(), !o[n])
					if (new RegExp("\\b" + n + "\\b", "i").test(c)) {
						var r = t.pid;
						o[n] = function () {
							var t = e.format.apply(e, arguments);
							console.error("%s %d: %s", n, r, t)
						}
					} else o[n] = function () {};
				return o[n]
			}, (e.inspect = i).colors = {
				bold: [1, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				white: [37, 39],
				grey: [90, 39],
				black: [30, 39],
				blue: [34, 39],
				cyan: [36, 39],
				green: [32, 39],
				magenta: [35, 39],
				red: [31, 39],
				yellow: [33, 39]
			}, i.styles = {
				special: "cyan",
				number: "yellow",
				boolean: "yellow",
				undefined: "grey",
				null: "bold",
				string: "green",
				date: "magenta",
				regexp: "red"
			}, e.isArray = p, e.isBoolean = d, e.isNull = h, e.isNullOrUndefined = function (t) {
				return null == t
			}, e.isNumber = y, e.isString = m, e.isSymbol = function (t) {
				return "symbol" == typeof t
			}, e.isUndefined = b, e.isRegExp = v, e.isObject = w, e.isDate = O, e.isError = E, e.isFunction = T, e.isPrimitive = function (t) {
				return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
			}, e.isBuffer = n(134);
			var x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

			function N(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}
			e.log = function () {
				console.log("%s - %s", function () {
					var t = new Date,
						e = [C(t.getHours()), C(t.getMinutes()), C(t.getSeconds())].join(":");
					return [t.getDate(), x[t.getMonth()], e].join(" ")
				}(), e.format.apply(e, arguments))
			}, e.inherits = n(135), e._extend = function (t, e) {
				if (!e || !w(e)) return t;
				for (var n = Object.keys(e), r = n.length; r--;) t[n[r]] = e[n[r]];
				return t
			};
			var P = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

			function _(t, e) {
				if (!t) {
					var n = new Error("Promise was rejected with a falsy value");
					n.reason = t, t = n
				}
				return e(t)
			}
			e.promisify = function (t) {
				if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
				if (P && t[P]) {
					var e;
					if ("function" != typeof (e = t[P])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
					return Object.defineProperty(e, P, {
						value: e,
						enumerable: !1,
						writable: !1,
						configurable: !0
					}), e
				}

				function e() {
					for (var e, n, r = new Promise((function (t, r) {
							e = t, n = r
						})), a = [], c = 0; c < arguments.length; c++) a.push(arguments[c]);
					a.push((function (t, r) {
						t ? n(t) : e(r)
					}));
					try {
						t.apply(this, a)
					} catch (r) {
						n(r)
					}
					return r
				}
				return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), P && Object.defineProperty(e, P, {
					value: e,
					enumerable: !1,
					writable: !1,
					configurable: !0
				}), Object.defineProperties(e, r(t))
			}, e.promisify.custom = P, e.callbackify = function (e) {
				if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');

				function n() {
					for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
					var a = n.pop();
					if ("function" != typeof a) throw new TypeError("The last argument must be of type Function");

					function c() {
						return a.apply(o, arguments)
					}
					var o = this;
					e.apply(this, n).then((function (e) {
						t.nextTick(c, null, e)
					}), (function (e) {
						t.nextTick(_, e, c)
					}))
				}
				return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, r(e)), n
			}
		}).call(this, n(12))
	}, function (t, e, n) {
		"use strict";
		var r = n(140);
		t.exports = Function.prototype.bind || r
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			try {
				var e = a.call(t);
				return c.test(e)
			} catch (t) {
				return !1
			}
		}
		var a = Function.prototype.toString,
			c = /^\s*class\b/,
			o = Object.prototype.toString,
			i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
		t.exports = function (t) {
			if (!t) return !1;
			if ("function" != typeof t && "object" != typeof t) return !1;
			if ("function" == typeof t && !t.prototype) return !0;
			if (i) return function (t) {
				try {
					return !r(t) && (a.call(t), !0)
				} catch (t) {
					return !1
				}
			}(t);
			if (r(t)) return !1;
			var e = o.call(t);
			return "[object Function]" === e || "[object GeneratorFunction]" === e
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CHAR_WIDTH = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" != typeof t && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = y(n(87)),
			c = y(n(17)),
			o = n(88),
			i = y(n(89)),
			u = y(n(11)),
			s = y(n(193)),
			l = y(n(194)),
			g = y(n(195)),
			f = y(n(196)),
			p = y(n(197)),
			d = y(n(199)),
			h = y(n(200));

		function y(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function m(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function b(t) {
			return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function v() {
			return (v = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function w(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function O(t) {
			return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function E(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function T(t, e) {
			return (T = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function S(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var C = e.CHAR_WIDTH = 7.801,
			x = function () {
				function t() {
					var e, n;
					! function (t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
					return n = function (t, e) {
						return !e || "object" !== b(e) && "function" != typeof e ? E(t) : e
					}(this, (e = O(t)).call.apply(e, [this].concat(a))), S(E(n), "state", {
						seqLength: 0,
						lineHeight: 0,
						annotationsInRows: [],
						primersInRows: [],
						inlinedLabels: [],
						outerLabels: []
					}), S(E(n), "shouldComponentUpdate", (function (t) {
						return !(0, c.default)(t, n.props)
					})), S(E(n), "getRotation", (function (t) {
						var e = n.props.center,
							r = n.state.seqLength,
							a = n.context.circular;
						return "rotate(".concat((t - a) / r * 360 || 0, ", ").concat(e.x, ", ").concat(e.y, ")")
					})), S(E(n), "findCoor", (function (t, e) {
						var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
							a = n.props.center,
							c = n.state.seqLength,
							o = ((r ? t - n.context.circular : t) / c - .25) * Math.PI * 2,
							i = Math.cos(o) * e,
							u = Math.sin(o) * e;
						return {
							x: a.x + i,
							y: a.y + u
						}
					})), S(E(n), "rotateCoor", (function (t, e) {
						var r = n.props.center,
							a = e * (Math.PI / 180),
							c = Math.cos(a),
							o = Math.sin(a),
							i = t.x - r.x,
							u = t.y - r.y,
							s = c * i - o * u,
							l = o * i + c * u;
						return {
							x: r.x + s,
							y: r.y + l
						}
					})), S(E(n), "generateArc", (function (t) {
						var e = t.innerRadius,
							r = t.outerRadius,
							a = t.length,
							c = t.largeArc,
							o = t.sweepFWD,
							i = void 0 !== o && o,
							u = t.arrowFWD,
							s = void 0 !== u && u,
							l = t.arrowREV,
							g = void 0 !== l && l,
							f = t.offset,
							p = void 0 === f ? 0 : f,
							d = n.props.radius,
							h = n.state,
							y = h.seqLength,
							m = h.lineHeight,
							b = n.findCoor(p, e),
							v = n.findCoor(p, r),
							w = n.findCoor(a + p, e),
							O = n.findCoor(a + p, r),
							E = "",
							T = "";
						if (g || s) {
							var S = m / 4 / d,
								C = 360 * Math.min(S / 2, a / y);
							if (g) {
								b = n.rotateCoor(b, C), v = n.rotateCoor(v, C);
								var x = n.findCoor(0, (e + r) / 2);
								E = "L ".concat(x.x, " ").concat(x.y)
							} else {
								w = n.rotateCoor(w, -C), O = n.rotateCoor(O, -C);
								var N = n.findCoor(a, (e + r) / 2);
								T = "L ".concat(N.x, " ").concat(N.y)
							}
						}
						var P = c ? 1 : 0,
							_ = i ? 1 : 0,
							A = i ? 0 : 1;
						return "M ".concat(w.x, " ").concat(w.y, "\n      A ").concat(e, " ").concat(e, ", 0, ").concat(P, ", ").concat(A, ", ").concat(b.x, " ").concat(b.y, "\n      L ").concat(b.x, " ").concat(b.y, "\n      ").concat(E, "\n      L ").concat(v.x, " ").concat(v.y, "\n      A ").concat(r, " ").concat(r, ", 0, ").concat(P, ", ").concat(_, ", ").concat(O.x, " ").concat(O.y, "\n      ").concat(T, "\n      Z")
					})), n
				}
				return function (t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), e && T(t, e)
					}(t, r.Component),
					function (t, e, n) {
						e && w(t.prototype, e)
					}(t, [{
						key: "render",
						value: function () {
							var t = this.props,
								e = t.showPrimers,
								n = t.showIndex,
								a = t.name,
								c = t.inputRef,
								o = t.mouseEvent,
								i = t.onUnmount,
								u = t.center,
								y = t.radius,
								m = t.yDiff,
								b = t.size,
								w = t.seq,
								O = t.compSeq,
								E = t.cutSites,
								T = t.search,
								S = this.state,
								C = S.seqLength,
								x = S.lineHeight,
								N = S.annotationsInRows,
								P = S.primersInRows,
								_ = S.inlinedLabels,
								A = S.outerLabels,
								k = this.getRotation,
								I = this.generateArc,
								j = {
									radius: y,
									center: u,
									lineHeight: x,
									seqLength: C,
									findCoor: this.findCoor,
									getRotation: k,
									generateArc: I,
									rotateCoor: this.rotateCoor,
									inputRef: c
								},
								D = N.length + 1,
								M = 4 + N.length;
							e && (M += P.length);
							var R = "la-vz-".concat(a, "-viewer-circular");
							return b.height ? r.createElement("svg", v({
								id: R,
								className: "la-vz-circular-viewer",
								onMouseDown: o,
								onMouseUp: o,
								onMouseMove: o,
								ref: c(R, {
									type: "SEQ"
								})
							}, b), r.createElement("g", {
								className: "la-vz-circular-root",
								transform: "translate(0, ".concat(m, ")")
							}, r.createElement(h.default, v({}, j, {
								onUnmount: i,
								totalRows: M,
								seq: w
							})), r.createElement(s.default, v({}, j, {
								annotations: N,
								size: b,
								rowsToSkip: 0,
								inlinedAnnotations: _
							})), r.createElement(g.default, v({}, j, {
								search: T
							})), r.createElement(d.default, v({}, j, {
								primers: P,
								showPrimers: e,
								size: b,
								rowsToSkip: D
							})), r.createElement(l.default, v({}, j, {
								selectionRows: 4,
								cutSites: E
							})), r.createElement(f.default, v({}, j, {
								name: a,
								size: b,
								yDiff: m,
								seq: w,
								compSeq: O,
								totalRows: M,
								showIndex: n
							})), r.createElement(p.default, v({}, j, {
								labels: A,
								size: b,
								yDiff: m
							})))) : null
						}
					}]), t
			}();
		S(x, "contextType", u.default), S(x, "getDerivedStateFromProps", (function (t) {
			var e = (0, o.stackElements)(t.annotations.filter((function (t) {
					return "insert" !== t.type
				})), t.seq.length),
				n = (0, a.default)(t.primers, t.seq),
				r = (0, o.stackElements)(n, t.seq.length),
				c = t.seq.length,
				i = t.cutSites,
				u = t.radius - 42,
				s = [],
				l = [];
			return e.forEach((function (t) {
				var e = u * Math.PI;
				t.forEach((function (t) {
					var n = (t.name.length + 2) * C,
						r = t.end - t.start;
					if (t.start >= t.end && (r += c), n < 2 * e * (r / c)) s.push(t.id);
					else {
						var a = t.id,
							o = t.name,
							i = t.start,
							u = t.end;
						l.push({
							id: a,
							name: o,
							start: i,
							end: u,
							type: "annotation"
						})
					}
				})), u -= 14
			})), i.forEach((function (t) {
				return l.push(function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? m(Object(n), !0).forEach((function (e) {
							S(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}({}, t, {
					start: t.fcut,
					type: "enzyme"
				}))
			})), l.sort((function (t, e) {
				return Math.min(t.start, t.end) - Math.min(e.start, e.end)
			})), {
				seqLength: t.seq.length,
				lineHeight: 14,
				annotationsInRows: e,
				primersInRows: r,
				inlinedLabels: s,
				outerLabels: l
			}
		})), e.default = (0, i.default)(x)
	}, function (t, e, n) {
		"use strict";
		(function t() {
			if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
			} catch (t) {
				console.error(t)
			}
		})(), t.exports = n(93)
	}, function (t, e, n) {
		t.exports = n(99)()
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = d(n(103)),
			a = n(8),
			c = n(2),
			o = d(n(104)),
			i = d(n(105)),
			u = d(n(162)),
			s = d(n(163)),
			l = d(n(164)),
			g = d(n(165)),
			f = d(n(168)),
			p = d(n(170));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function h(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function y(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? h(Object(n), !0).forEach((function (e) {
					m(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function m(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.default = function (t) {
			var e, n, r = arguments;
			return regeneratorRuntime.async((function (c) {
				for (;;) switch (c.prev = c.next) {
					case 0:
						return e = 1 < r.length && void 0 !== r[1] ? r[1] : {
							fileName: "",
							colors: a.COLORS,
							backbone: ""
						}, c.prev = 1, c.next = 4, regeneratorRuntime.awrap(new Promise((function (n, r) {
							var a = e.fileName,
								c = void 0 === a ? "" : a,
								o = e.colors,
								i = void 0 === o ? [] : o,
								u = e.backbone,
								s = void 0 === u ? "" : u;
							if ("string" != typeof t) {
								Array.isArray(t) || (t = [t]);
								var l = [];
								t.forEach((function (t) {
									"application/zip" === t.type ? r(new Error("zip files are not supported by SeqViz")) : "string" == typeof t ? l.push(b(t, e)) : l.push(new Promise((function (n) {
										var r = new FileReader;
										r.onload = function (t) {
											n(b(t.target.result, a))
										};
										var a = t.name ? y({}, e, {
											fileName: t.name
										}) : e;
										a.fileName.endsWith(".dna") ? r.readAsArrayBuffer(t) : r.readAsText(t)
									})))
								})), n(Promise.all(l))
							} else n(b(t, {
								fileName: c,
								colors: i,
								backbone: s
							}))
						})));
					case 4:
						return n = c.sent, c.abrupt("return", n.reduce((function (t, e) {
							return t.concat(e)
						}), []));
					case 8:
						throw c.prev = 8, c.t0 = c.catch(1), c.t0;
					case 11:
					case "end":
						return c.stop()
				}
			}), null, null, [
				[1, 8]
			])
		};
		var b = function (t) {
			var e, n, a, d, h, m, b, v, w, O, E, T, S, C, x, N, P, _ = arguments;
			return regeneratorRuntime.async((function (A) {
				for (;;) switch (A.prev = A.next) {
					case 0:
						if (n = (e = 1 < _.length && void 0 !== _[1] ? _[1] : {
								fileName: "",
								colors: [],
								backbone: ""
							}).fileName, a = void 0 === n ? "" : n, d = e.colors, h = void 0 === d ? [] : d, m = e.backbone, b = void 0 === m ? "" : m, t) {
							A.next = 4;
							break
						}
						throw Error("cannot parse null or empty string");
					case 4:
						v = t.search ? t.substring(0, t.search("\n")) : "", w = v.replace(/[^atcgATCG]/, "").length, O = .8 < w / v.length, E = a.split(r.default.sep).pop(), T = a && E ? E.substring(0, E.search("\\.")) : "Untitled", C = !(S = {
							name: E,
							file: t
						});
						try {
							x = JSON.parse(t), N = Object.keys(x), ["bases", "annotations", "primers"].every((function (t) {
								return N.includes(t)
							})) && (C = !0)
						} catch (A) {}
						A.prev = 12, A.t0 = !0, A.next = A.t0 === a.endsWith(".dna") ? 16 : A.t0 === t.startsWith(">") ? 20 : A.t0 === t.startsWith(";") ? 20 : A.t0 === a.endsWith(".seq") ? 20 : A.t0 === a.endsWith(".fa") ? 20 : A.t0 === a.endsWith(".fas") ? 20 : A.t0 === a.endsWith(".fasta") ? 20 : A.t0 === (t.includes("LOCUS") && t.includes("ORIGIN")) ? 24 : A.t0 === a.endsWith(".gb") ? 24 : A.t0 === a.endsWith(".gbk") ? 24 : A.t0 === a.endsWith(".genbank") ? 24 : A.t0 === a.endsWith(".ape") ? 24 : A.t0 === t.includes("Written by SeqBuilder") ? 28 : A.t0 === a.endsWith(".sbd") ? 28 : A.t0 === t.includes("Parts from the iGEM") ? 32 : A.t0 === t.includes("<part_list>") ? 32 : A.t0 === C ? 36 : A.t0 === t.includes("RDF") ? 40 : A.t0 === t.includes(':seq="http://jbei.org/sequence"') ? 44 : A.t0 === t.startsWith("<seq:seq") ? 44 : A.t0 === O ? 48 : 50;
						break;
					case 16:
						return A.next = 18, regeneratorRuntime.awrap((0, f.default)(t, {
							fileName: a,
							colors: h
						}));
					case 18:
						return P = A.sent, A.abrupt("break", 51);
					case 20:
						return A.next = 22, regeneratorRuntime.awrap((0, u.default)(t, a).then((function (t) {
							return t.map((function (t) {
								return y({}, (0, c.partFactory)(), {}, (0, c.dnaComplement)(t.seq), {}, t)
							}))
						})));
					case 22:
						return P = A.sent, A.abrupt("break", 51);
					case 24:
						return A.next = 26, regeneratorRuntime.awrap((0, s.default)(t, a, h));
					case 26:
						return P = A.sent, A.abrupt("break", 51);
					case 28:
						return A.next = 30, regeneratorRuntime.awrap((0, p.default)(t, a, h));
					case 30:
						return P = A.sent, A.abrupt("break", 51);
					case 32:
						return A.next = 34, regeneratorRuntime.awrap((0, i.default)(t, {
							colors: h,
							backbone: b
						}));
					case 34:
						return P = A.sent, A.abrupt("break", 51);
					case 36:
						return A.next = 38, regeneratorRuntime.awrap((0, o.default)(t));
					case 38:
						return P = A.sent, A.abrupt("break", 51);
					case 40:
						return A.next = 42, regeneratorRuntime.awrap((0, g.default)(t, a, h));
					case 42:
						return P = A.sent, A.abrupt("break", 51);
					case 44:
						return A.next = 46, regeneratorRuntime.awrap((0, l.default)(t, h));
					case 46:
						return P = A.sent, A.abrupt("break", 51);
					case 48:
						return P = [y({}, (0, c.partFactory)(), {}, (0, c.dnaComplement)(t), {
							name: T
						})], A.abrupt("break", 51);
					case 50:
						throw Error("".concat(a, " File type not recognized: ").concat(t));
					case 51:
						A.next = 57;
						break;
					case 53:
						return A.prev = 53, A.t1 = A.catch(12), console.error(A.t1), A.abrupt("return", null);
					case 57:
						if (P) return A.abrupt("return", P.map((function (t) {
							return y({}, t, {
								source: S
							})
						})));
						A.next = 59;
						break;
					case 59:
						throw Error("unparsable file");
					case 60:
					case "end":
						return A.stop()
				}
			}), null, null, [
				[12, 53]
			])
		}
	}, function (t, e) {
		(function () {
			function e() {}
			t.exports = (e.prototype.hasFeature = function (t, e) {
				return !0
			}, e.prototype.createDocumentType = function (t, e, n) {
				throw new Error("This DOM method is not implemented.")
			}, e.prototype.createDocument = function (t, e, n) {
				throw new Error("This DOM method is not implemented.")
			}, e.prototype.createHTMLDocument = function (t) {
				throw new Error("This DOM method is not implemented.")
			}, e.prototype.getFeature = function (t, e) {
				throw new Error("This DOM method is not implemented.")
			}, e)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c, o, i, u, s = {}.hasOwnProperty;

			function l(t) {
				l.__super__.constructor.call(this, null), this.name = "#document", this.type = e.Document, this.documentURI = null, this.domConfig = new r, (t = t || {}).writer || (t.writer = new o), this.options = t, this.stringify = new i(t)
			}
			u = n(7).isPlainObject, a = n(54), r = n(108), c = n(4), e = n(1), i = n(58), o = n(42), t.exports = (function (t, e) {
				for (var n in e) s.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(l, c), Object.defineProperty(l.prototype, "implementation", {
				value: new a
			}), Object.defineProperty(l.prototype, "doctype", {
				get: function () {
					var t, n, r, a;
					for (n = 0, r = (a = this.children).length; n < r; n++)
						if ((t = a[n]).type === e.DocType) return t;
					return null
				}
			}), Object.defineProperty(l.prototype, "documentElement", {
				get: function () {
					return this.rootObject || null
				}
			}), Object.defineProperty(l.prototype, "inputEncoding", {
				get: function () {
					return null
				}
			}), Object.defineProperty(l.prototype, "strictErrorChecking", {
				get: function () {
					return !1
				}
			}), Object.defineProperty(l.prototype, "xmlEncoding", {
				get: function () {
					return 0 !== this.children.length && this.children[0].type === e.Declaration ? this.children[0].encoding : null
				}
			}), Object.defineProperty(l.prototype, "xmlStandalone", {
				get: function () {
					return 0 !== this.children.length && this.children[0].type === e.Declaration && "yes" === this.children[0].standalone
				}
			}), Object.defineProperty(l.prototype, "xmlVersion", {
				get: function () {
					return 0 !== this.children.length && this.children[0].type === e.Declaration ? this.children[0].version : "1.0"
				}
			}), Object.defineProperty(l.prototype, "URL", {
				get: function () {
					return this.documentURI
				}
			}), Object.defineProperty(l.prototype, "origin", {
				get: function () {
					return null
				}
			}), Object.defineProperty(l.prototype, "compatMode", {
				get: function () {
					return null
				}
			}), Object.defineProperty(l.prototype, "characterSet", {
				get: function () {
					return null
				}
			}), Object.defineProperty(l.prototype, "contentType", {
				get: function () {
					return null
				}
			}), l.prototype.end = function (t) {
				var e;
				return e = {}, t ? u(t) && (e = t, t = this.options.writer) : t = this.options.writer, t.document(this, t.filterOptions(e))
			}, l.prototype.toString = function (t) {
				return this.options.writer.document(this, this.options.writer.filterOptions(t))
			}, l.prototype.createElement = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createDocumentFragment = function () {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createTextNode = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createComment = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createCDATASection = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createProcessingInstruction = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createAttribute = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createEntityReference = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.getElementsByTagName = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.importNode = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createElementNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createAttributeNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.getElementsByTagNameNS = function (t, e) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.getElementById = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.adoptNode = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.normalizeDocument = function () {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.renameNode = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.getElementsByClassName = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createEvent = function (t) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createRange = function () {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createNodeIterator = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l.prototype.createTreeWalker = function (t, e, n) {
				throw new Error("This DOM method is not implemented." + this.debugInfo())
			}, l)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e;

			function r(t, n, r) {
				if (this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), null == n) throw new Error("Missing attribute name. " + this.debugInfo(n));
				this.name = this.stringify.name(n), this.value = this.stringify.attValue(r), this.type = e.Attribute, this.isId = !1, this.schemaTypeInfo = null
			}
			e = n(1), n(4), t.exports = (Object.defineProperty(r.prototype, "nodeType", {
				get: function () {
					return this.type
				}
			}), Object.defineProperty(r.prototype, "ownerElement", {
				get: function () {
					return this.parent
				}
			}), Object.defineProperty(r.prototype, "textContent", {
				get: function () {
					return this.value
				},
				set: function (t) {
					return this.value = t || ""
				}
			}), Object.defineProperty(r.prototype, "namespaceURI", {
				get: function () {
					return ""
				}
			}), Object.defineProperty(r.prototype, "prefix", {
				get: function () {
					return ""
				}
			}), Object.defineProperty(r.prototype, "localName", {
				get: function () {
					return this.name
				}
			}), Object.defineProperty(r.prototype, "specified", {
				get: function () {
					return !0
				}
			}), r.prototype.clone = function () {
				return Object.create(this)
			}, r.prototype.toString = function (t) {
				return this.options.writer.attribute(this, this.options.writer.filterOptions(t))
			}, r.prototype.debugInfo = function (t) {
				return null == (t = t || this.name) ? "parent: <" + this.parent.name + ">" : "attribute: {" + t + "}, parent: <" + this.parent.name + ">"
			}, r.prototype.isEqualNode = function (t) {
				return t.namespaceURI === this.namespaceURI && t.prefix === this.prefix && t.localName === this.localName && t.value === this.value
			}, r)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a = {}.hasOwnProperty;

			function c(t) {
				c.__super__.constructor.call(this, t), this.type = e.Dummy
			}
			r = n(4), e = n(1), t.exports = (function (t, e) {
				for (var n in e) a.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(c, r), c.prototype.clone = function () {
				return Object.create(this)
			}, c.prototype.toString = function (t) {
				return ""
			}, c)
		}).call(this)
	}, function (t, e) {
		(function () {
			function e(t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			}
			var n = {}.hasOwnProperty;

			function r(t) {
				var r, a, c;
				for (r in this.assertLegalName = e(this.assertLegalName, this), this.assertLegalChar = e(this.assertLegalChar, this), t = t || {}, this.options = t, this.options.version || (this.options.version = "1.0"), a = t.stringify || {}) n.call(a, r) && (c = a[r], this[r] = c)
			}
			t.exports = (r.prototype.name = function (t) {
				return this.options.noValidation ? t : this.assertLegalName("" + t || "")
			}, r.prototype.text = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar(this.textEscape("" + t || ""))
			}, r.prototype.cdata = function (t) {
				return this.options.noValidation ? t : (t = (t = "" + t || "").replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(t))
			}, r.prototype.comment = function (t) {
				if (this.options.noValidation) return t;
				if ((t = "" + t || "").match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + t);
				return this.assertLegalChar(t)
			}, r.prototype.raw = function (t) {
				return this.options.noValidation ? t : "" + t || ""
			}, r.prototype.attValue = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar(this.attEscape(t = "" + t || ""))
			}, r.prototype.insTarget = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.insValue = function (t) {
				if (this.options.noValidation) return t;
				if ((t = "" + t || "").match(/\?>/)) throw new Error("Invalid processing instruction value: " + t);
				return this.assertLegalChar(t)
			}, r.prototype.xmlVersion = function (t) {
				if (this.options.noValidation) return t;
				if (!(t = "" + t || "").match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + t);
				return t
			}, r.prototype.xmlEncoding = function (t) {
				if (this.options.noValidation) return t;
				if (!(t = "" + t || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + t);
				return this.assertLegalChar(t)
			}, r.prototype.xmlStandalone = function (t) {
				return this.options.noValidation ? t : t ? "yes" : "no"
			}, r.prototype.dtdPubID = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.dtdSysID = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.dtdElementValue = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.dtdAttType = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.dtdAttDefault = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.dtdEntityValue = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.dtdNData = function (t) {
				return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
			}, r.prototype.convertAttKey = "@", r.prototype.convertPIKey = "?", r.prototype.convertTextKey = "#text", r.prototype.convertCDataKey = "#cdata", r.prototype.convertCommentKey = "#comment", r.prototype.convertRawKey = "#raw", r.prototype.assertLegalChar = function (t) {
				var e, n;
				if (this.options.noValidation) return t;
				if (e = "", "1.0" === this.options.version) {
					if (e = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n = t.match(e)) throw new Error("Invalid character in string: " + t + " at index " + n.index)
				} else if ("1.1" === this.options.version && (e = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n = t.match(e))) throw new Error("Invalid character in string: " + t + " at index " + n.index);
				return t
			}, r.prototype.assertLegalName = function (t) {
				var e;
				if (this.options.noValidation) return t;
				if (this.assertLegalChar(t), e = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !t.match(e)) throw new Error("Invalid character in name");
				return t
			}, r.prototype.textEscape = function (t) {
				var e;
				return this.options.noValidation ? t : (e = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;"))
			}, r.prototype.attEscape = function (t) {
				var e;
				return this.options.noValidation ? t : (e = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, t.replace(e, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;"))
			}, r)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c = {}.hasOwnProperty;

			function o(t) {
				var e, n, r;
				for (e in t = t || {}, n = (this.options = t).writer || {}) c.call(n, e) && (r = n[e], this["_" + e] = this[e], this[e] = r)
			}
			a = n(7).assign, e = n(1), n(33), n(34), n(31), n(32), n(29), n(39), n(40), n(41), n(57), n(35), n(37), n(36), n(38), r = n(21), t.exports = (o.prototype.filterOptions = function (t) {
				var e, n, c, o, i, u, s, l;
				return t = t || {}, t = a({}, this.options, t), (e = {
					writer: this
				}).pretty = t.pretty || !1, e.allowEmpty = t.allowEmpty || !1, e.indent = null != (n = t.indent) ? n : "  ", e.newline = null != (c = t.newline) ? c : "\n", e.offset = null != (o = t.offset) ? o : 0, e.dontPrettyTextNodes = null != (i = null != (u = t.dontPrettyTextNodes) ? u : t.dontprettytextnodes) ? i : 0, e.spaceBeforeSlash = null != (s = null != (l = t.spaceBeforeSlash) ? l : t.spacebeforeslash) ? s : "", !0 === e.spaceBeforeSlash && (e.spaceBeforeSlash = " "), e.suppressPrettyCount = 0, e.user = {}, e.state = r.None, e
			}, o.prototype.indent = function (t, e, n) {
				var r;
				return !e.pretty || e.suppressPrettyCount ? "" : e.pretty && 0 < (r = (n || 0) + e.offset + 1) ? new Array(r).join(e.indent) : ""
			}, o.prototype.endline = function (t, e, n) {
				return !e.pretty || e.suppressPrettyCount ? "" : e.newline
			}, o.prototype.attribute = function (t, e, n) {
				var r;
				return this.openAttribute(t, e, n), r = " " + t.name + '="' + t.value + '"', this.closeAttribute(t, e, n), r
			}, o.prototype.cdata = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<![CDATA[", e.state = r.InsideTag, a += t.value, e.state = r.CloseTag, a += "]]>" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.comment = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "\x3c!-- ", e.state = r.InsideTag, a += t.value, e.state = r.CloseTag, a += " --\x3e" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.declaration = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<?xml", e.state = r.InsideTag, a += ' version="' + t.version + '"', null != t.encoding && (a += ' encoding="' + t.encoding + '"'), null != t.standalone && (a += ' standalone="' + t.standalone + '"'), e.state = r.CloseTag, a += e.spaceBeforeSlash + "?>", a += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.docType = function (t, e, n) {
				var a, c, o, i, u;
				if (n = n || 0, this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n), i += "<!DOCTYPE " + t.root().name, t.pubID && t.sysID ? i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'), 0 < t.children.length) {
					for (i += " [", i += this.endline(t, e, n), e.state = r.InsideTag, c = 0, o = (u = t.children).length; c < o; c++) a = u[c], i += this.writeChildNode(a, e, n + 1);
					e.state = r.CloseTag, i += "]"
				}
				return e.state = r.CloseTag, i += e.spaceBeforeSlash + ">", i += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
			}, o.prototype.element = function (t, n, a) {
				var o, i, u, s, l, g, f, p, d, h, y, m, b, v;
				for (d in a = a || 0, h = !1, y = "", this.openNode(t, n, a), n.state = r.OpenTag, y += this.indent(t, n, a) + "<" + t.name, m = t.attribs) c.call(m, d) && (o = m[d], y += this.attribute(o, n, a));
				if (s = 0 === (u = t.children.length) ? null : t.children[0], 0 === u || t.children.every((function (t) {
						return (t.type === e.Text || t.type === e.Raw) && "" === t.value
					}))) n.allowEmpty ? (y += ">", n.state = r.CloseTag, y += "</" + t.name + ">" + this.endline(t, n, a)) : (n.state = r.CloseTag, y += n.spaceBeforeSlash + "/>" + this.endline(t, n, a));
				else if (!n.pretty || 1 !== u || s.type !== e.Text && s.type !== e.Raw || null == s.value) {
					if (n.dontPrettyTextNodes)
						for (l = 0, f = (b = t.children).length; l < f; l++)
							if (((i = b[l]).type === e.Text || i.type === e.Raw) && null != i.value) {
								n.suppressPrettyCount++, h = !0;
								break
							}
					for (y += ">" + this.endline(t, n, a), n.state = r.InsideTag, g = 0, p = (v = t.children).length; g < p; g++) i = v[g], y += this.writeChildNode(i, n, a + 1);
					n.state = r.CloseTag, y += this.indent(t, n, a) + "</" + t.name + ">", h && n.suppressPrettyCount--, y += this.endline(t, n, a), n.state = r.None
				} else y += ">", n.state = r.InsideTag, n.suppressPrettyCount++, h = !0, y += this.writeChildNode(s, n, a + 1), n.suppressPrettyCount--, h = !1, n.state = r.CloseTag, y += "</" + t.name + ">" + this.endline(t, n, a);
				return this.closeNode(t, n, a), y
			}, o.prototype.writeChildNode = function (t, n, r) {
				switch (t.type) {
					case e.CData:
						return this.cdata(t, n, r);
					case e.Comment:
						return this.comment(t, n, r);
					case e.Element:
						return this.element(t, n, r);
					case e.Raw:
						return this.raw(t, n, r);
					case e.Text:
						return this.text(t, n, r);
					case e.ProcessingInstruction:
						return this.processingInstruction(t, n, r);
					case e.Dummy:
						return "";
					case e.Declaration:
						return this.declaration(t, n, r);
					case e.DocType:
						return this.docType(t, n, r);
					case e.AttributeDeclaration:
						return this.dtdAttList(t, n, r);
					case e.ElementDeclaration:
						return this.dtdElement(t, n, r);
					case e.EntityDeclaration:
						return this.dtdEntity(t, n, r);
					case e.NotationDeclaration:
						return this.dtdNotation(t, n, r);
					default:
						throw new Error("Unknown XML node type: " + t.constructor.name)
				}
			}, o.prototype.processingInstruction = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<?", e.state = r.InsideTag, a += t.target, t.value && (a += " " + t.value), e.state = r.CloseTag, a += e.spaceBeforeSlash + "?>", a += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.raw = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n), e.state = r.InsideTag, a += t.value, e.state = r.CloseTag, a += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.text = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n), e.state = r.InsideTag, a += t.value, e.state = r.CloseTag, a += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.dtdAttList = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<!ATTLIST", e.state = r.InsideTag, a += " " + t.elementName + " " + t.attributeName + " " + t.attributeType, "#DEFAULT" !== t.defaultValueType && (a += " " + t.defaultValueType), t.defaultValue && (a += ' "' + t.defaultValue + '"'), e.state = r.CloseTag, a += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.dtdElement = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<!ELEMENT", e.state = r.InsideTag, a += " " + t.name + " " + t.value, e.state = r.CloseTag, a += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.dtdEntity = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<!ENTITY", e.state = r.InsideTag, t.pe && (a += " %"), a += " " + t.name, t.value ? a += ' "' + t.value + '"' : (t.pubID && t.sysID ? a += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (a += ' SYSTEM "' + t.sysID + '"'), t.nData && (a += " NDATA " + t.nData)), e.state = r.CloseTag, a += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.dtdNotation = function (t, e, n) {
				var a;
				return this.openNode(t, e, n), e.state = r.OpenTag, a = this.indent(t, e, n) + "<!NOTATION", e.state = r.InsideTag, a += " " + t.name, t.pubID && t.sysID ? a += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.pubID ? a += ' PUBLIC "' + t.pubID + '"' : t.sysID && (a += ' SYSTEM "' + t.sysID + '"'), e.state = r.CloseTag, a += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), a
			}, o.prototype.openNode = function (t, e, n) {}, o.prototype.closeNode = function (t, e, n) {}, o.prototype.openAttribute = function (t, e, n) {}, o.prototype.closeAttribute = function (t, e, n) {}, o)
		}).call(this)
	}, function (t, e) {
		var n = {}.toString;
		t.exports = Array.isArray || function (t) {
			return "[object Array]" == n.call(t)
		}
	}, function (t, e, n) {
		"use strict";
		(function (e, r) {
			var a = n(23);
			t.exports = v;
			var c, o = n(60);

			function i(t, e) {
				return t.listeners(e).length
			}
			v.ReadableState = b, n(22).EventEmitter;
			var u = n(62),
				s = n(44).Buffer,
				l = e.Uint8Array || function () {},
				g = n(19);
			g.inherits = n(14);
			var f = n(120),
				p = void 0;
			p = f && f.debuglog ? f.debuglog("stream") : function () {};
			var d, h = n(121),
				y = n(63);
			g.inherits(v, u);
			var m = ["error", "close", "destroy", "pause", "resume"];

			function b(t, e) {
				t = t || {};
				var r = e instanceof(c = c || n(10));
				this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
				var a = t.highWaterMark,
					o = t.readableHighWaterMark,
					i = this.objectMode ? 16 : 16384;
				this.highWaterMark = a || 0 === a ? a : r && (o || 0 === o) ? o : i, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new h, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d = d || n(24).StringDecoder, this.decoder = new d(t.encoding), this.encoding = t.encoding)
			}

			function v(t) {
				if (c = c || n(10), !(this instanceof v)) return new v(t);
				this._readableState = new b(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), u.call(this)
			}

			function w(t, e, n, r, a) {
				var c, o = t._readableState;
				return null === e ? (o.reading = !1, function (t, e) {
						if (!e.ended) {
							if (e.decoder) {
								var n = e.decoder.end();
								n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length)
							}
							e.ended = !0, S(t)
						}
					}(t, o)) : (a || (c = function (t, e) {
						var n;
						return function (t) {
							return s.isBuffer(t) || t instanceof l
						}(e) || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
					}(o, e)), c ? t.emit("error", c) : o.objectMode || e && 0 < e.length ? ("string" == typeof e || o.objectMode || Object.getPrototypeOf(e) === s.prototype || (e = function (t) {
						return s.from(t)
					}(e)), r ? o.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : O(t, o, e, !0) : o.ended ? t.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !n ? (e = o.decoder.write(e), o.objectMode || 0 !== e.length ? O(t, o, e, !1) : x(t, o)) : O(t, o, e, !1))) : r || (o.reading = !1)),
					function (t) {
						return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
					}(o)
			}

			function O(t, e, n, r) {
				e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && S(t)), x(t, e)
			}
			Object.defineProperty(v.prototype, "destroyed", {
				get: function () {
					return void 0 !== this._readableState && this._readableState.destroyed
				},
				set: function (t) {
					this._readableState && (this._readableState.destroyed = t)
				}
			}), v.prototype.destroy = y.destroy, v.prototype._undestroy = y.undestroy, v.prototype._destroy = function (t, e) {
				this.push(null), e(t)
			}, v.prototype.push = function (t, e) {
				var n, r = this._readableState;
				return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = s.from(t, e), e = ""), n = !0), w(this, t, e, !1, n)
			}, v.prototype.unshift = function (t) {
				return w(this, t, null, !0, !1)
			}, v.prototype.isPaused = function () {
				return !1 === this._readableState.flowing
			}, v.prototype.setEncoding = function (t) {
				return d = d || n(24).StringDecoder, this._readableState.decoder = new d(t), this._readableState.encoding = t, this
			};
			var E = 8388608;

			function T(t, e) {
				return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function (t) {
					return E <= t ? t = E : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
				}(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
			}

			function S(t) {
				var e = t._readableState;
				e.needReadable = !1, e.emittedReadable || (p("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? a.nextTick(C, t) : C(t))
			}

			function C(t) {
				p("emit readable"), t.emit("readable"), A(t)
			}

			function x(t, e) {
				e.readingMore || (e.readingMore = !0, a.nextTick(N, t, e))
			}

			function N(t, e) {
				for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), n !== e.length);) n = e.length;
				e.readingMore = !1
			}

			function P(t) {
				p("readable nexttick read 0"), t.read(0)
			}

			function _(t, e) {
				e.reading || (p("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), A(t), e.flowing && !e.reading && t.read(0)
			}

			function A(t) {
				var e = t._readableState;
				for (p("flow", e.flowing); e.flowing && null !== t.read(););
			}

			function k(t, e) {
				return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : n = function (t, e, n) {
					var r;
					return t < e.head.data.length ? (r = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function (t, e) {
						var n = e.head,
							r = 1,
							a = n.data;
						for (t -= a.length; n = n.next;) {
							var c = n.data,
								o = t > c.length ? c.length : t;
							if (o === c.length ? a += c : a += c.slice(0, t), 0 == (t -= o)) {
								o === c.length ? (++r, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n).data = c.slice(o);
								break
							}++r
						}
						return e.length -= r, a
					}(t, e) : function (t, e) {
						var n = s.allocUnsafe(t),
							r = e.head,
							a = 1;
						for (r.data.copy(n), t -= r.data.length; r = r.next;) {
							var c = r.data,
								o = t > c.length ? c.length : t;
							if (c.copy(n, n.length - t, 0, o), 0 == (t -= o)) {
								o === c.length ? (++a, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r).data = c.slice(o);
								break
							}++a
						}
						return e.length -= a, n
					}(t, e), r
				}(t, e.buffer, e.decoder), n);
				var n
			}

			function I(t) {
				var e = t._readableState;
				if (0 < e.length) throw new Error('"endReadable()" called on non-empty stream');
				e.endEmitted || (e.ended = !0, a.nextTick(j, e, t))
			}

			function j(t, e) {
				t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
			}

			function D(t, e) {
				for (var n = 0, r = t.length; n < r; n++)
					if (t[n] === e) return n;
				return -1
			}
			v.prototype.read = function (t) {
				p("read", t), t = parseInt(t, 10);
				var e = this._readableState,
					n = t;
				if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return p("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? I(this) : S(this), null;
				if (0 === (t = T(t, e)) && e.ended) return 0 === e.length && I(this), null;
				var r, a = e.needReadable;
				return p("need readable", a), (0 === e.length || e.length - t < e.highWaterMark) && p("length less than watermark", a = !0), e.ended || e.reading ? p("reading or ended", a = !1) : a && (p("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = T(n, e))), null === (r = 0 < t ? k(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), n !== t && e.ended && I(this)), null !== r && this.emit("data", r), r
			}, v.prototype._read = function (t) {
				this.emit("error", new Error("_read() is not implemented"))
			}, v.prototype.pipe = function (t, e) {
				var n = this,
					c = this._readableState;
				switch (c.pipesCount) {
					case 0:
						c.pipes = t;
						break;
					case 1:
						c.pipes = [c.pipes, t];
						break;
					default:
						c.pipes.push(t)
				}
				c.pipesCount += 1, p("pipe count=%d opts=%j", c.pipesCount, e);
				var u = e && !1 === e.end || t === r.stdout || t === r.stderr ? b : s;

				function s() {
					p("onend"), t.end()
				}
				c.endEmitted ? a.nextTick(u) : n.once("end", u), t.on("unpipe", (function e(r, a) {
					p("onunpipe"), r === n && a && !1 === a.hasUnpiped && (a.hasUnpiped = !0, p("cleanup"), t.removeListener("close", y), t.removeListener("finish", m), t.removeListener("drain", l), t.removeListener("error", h), t.removeListener("unpipe", e), n.removeListener("end", s), n.removeListener("end", b), n.removeListener("data", d), g = !0, !c.awaitDrain || t._writableState && !t._writableState.needDrain || l())
				}));
				var l = function (t) {
					return function () {
						var e = t._readableState;
						p("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && i(t, "data") && (e.flowing = !0, A(t))
					}
				}(n);
				t.on("drain", l);
				var g = !1,
					f = !1;

				function d(e) {
					p("ondata"), (f = !1) !== t.write(e) || f || ((1 === c.pipesCount && c.pipes === t || 1 < c.pipesCount && -1 !== D(c.pipes, t)) && !g && (p("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, f = !0), n.pause())
				}

				function h(e) {
					p("onerror", e), b(), t.removeListener("error", h), 0 === i(t, "error") && t.emit("error", e)
				}

				function y() {
					t.removeListener("finish", m), b()
				}

				function m() {
					p("onfinish"), t.removeListener("close", y), b()
				}

				function b() {
					p("unpipe"), n.unpipe(t)
				}
				return n.on("data", d),
					function (t, e, n) {
						if ("function" == typeof t.prependListener) return t.prependListener(e, n);
						t._events && t._events[e] ? o(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
					}(t, "error", h), t.once("close", y), t.once("finish", m), t.emit("pipe", n), c.flowing || (p("pipe resume"), n.resume()), t
			}, v.prototype.unpipe = function (t) {
				var e = this._readableState,
					n = {
						hasUnpiped: !1
					};
				if (0 === e.pipesCount) return this;
				if (1 === e.pipesCount) return t && t !== e.pipes || (t = t || e.pipes, e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, n)), this;
				if (!t) {
					var r = e.pipes,
						a = e.pipesCount;
					e.pipes = null, e.pipesCount = 0, e.flowing = !1;
					for (var c = 0; c < a; c++) r[c].emit("unpipe", this, n);
					return this
				}
				var o = D(e.pipes, t);
				return -1 === o || (e.pipes.splice(o, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, n)), this
			}, v.prototype.addListener = v.prototype.on = function (t, e) {
				var n = u.prototype.on.call(this, t, e);
				if ("data" === t) !1 !== this._readableState.flowing && this.resume();
				else if ("readable" === t) {
					var r = this._readableState;
					r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && S(this) : a.nextTick(P, this))
				}
				return n
			}, v.prototype.resume = function () {
				var t = this._readableState;
				return t.flowing || (p("resume"), t.flowing = !0, function (t, e) {
					e.resumeScheduled || (e.resumeScheduled = !0, a.nextTick(_, t, e))
				}(this, t)), this
			}, v.prototype.pause = function () {
				return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this
			}, v.prototype.wrap = function (t) {
				var e = this,
					n = this._readableState,
					r = !1;
				for (var a in t.on("end", (function () {
						if (p("wrapped end"), n.decoder && !n.ended) {
							var t = n.decoder.end();
							t && t.length && e.push(t)
						}
						e.push(null)
					})), t.on("data", (function (a) {
						p("wrapped data"), n.decoder && (a = n.decoder.write(a)), n.objectMode && null == a || (n.objectMode || a && a.length) && (e.push(a) || (r = !0, t.pause()))
					})), t) void 0 === this[a] && "function" == typeof t[a] && (this[a] = function (e) {
					return function () {
						return t[e].apply(t, arguments)
					}
				}(a));
				for (var c = 0; c < m.length; c++) t.on(m[c], this.emit.bind(this, m[c]));
				return this._read = function (e) {
					p("wrapped _read", e), r && (r = !1, t.resume())
				}, this
			}, Object.defineProperty(v.prototype, "readableHighWaterMark", {
				enumerable: !1,
				get: function () {
					return this._readableState.highWaterMark
				}
			}), v._fromList = k
		}).call(this, n(9), n(12))
	}, function (t, e, n) {
		t.exports = n(22).EventEmitter
	}, function (t, e, n) {
		"use strict";
		var r = n(23);

		function a(t, e) {
			t.emit("error", e)
		}
		t.exports = {
			destroy: function (t, e) {
				var n = this,
					c = this._readableState && this._readableState.destroyed,
					o = this._writableState && this._writableState.destroyed;
				return c || o ? e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(a, this, t) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (function (t) {
					!e && t ? (r.nextTick(a, n, t), n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t)
				}))), this
			},
			undestroy: function () {
				this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
			}
		}
	}, function (t, e, n) {
		(function (t) {
			var r = void 0 !== t && t || "undefined" != typeof self && self || window,
				a = Function.prototype.apply;

			function c(t, e) {
				this._id = t, this._clearFn = e
			}
			e.setTimeout = function () {
				return new c(a.call(setTimeout, r, arguments), clearTimeout)
			}, e.setInterval = function () {
				return new c(a.call(setInterval, r, arguments), clearInterval)
			}, e.clearTimeout = e.clearInterval = function (t) {
				t && t.close()
			}, c.prototype.unref = c.prototype.ref = function () {}, c.prototype.close = function () {
				this._clearFn.call(r, this._id)
			}, e.enroll = function (t, e) {
				clearTimeout(t._idleTimeoutId), t._idleTimeout = e
			}, e.unenroll = function (t) {
				clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
			}, e._unrefActive = e.active = function (t) {
				clearTimeout(t._idleTimeoutId);
				var e = t._idleTimeout;
				0 <= e && (t._idleTimeoutId = setTimeout((function () {
					t._onTimeout && t._onTimeout()
				}), e))
			}, n(123), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
		}).call(this, n(9))
	}, function (t, e, n) {
		"use strict";
		t.exports = c;
		var r = n(10),
			a = n(19);

		function c(t) {
			if (!(this instanceof c)) return new c(t);
			r.call(this, t), this._transformState = {
				afterTransform: function (t, e) {
					var n = this._transformState;
					n.transforming = !1;
					var r = n.writecb;
					if (!r) return this.emit("error", new Error("write callback called multiple times"));
					n.writechunk = null, (n.writecb = null) != e && this.push(e), r(t);
					var a = this._readableState;
					a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
				}.bind(this),
				needTransform: !1,
				transforming: !1,
				writecb: null,
				writechunk: null,
				writeencoding: null
			}, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", o)
		}

		function o() {
			var t = this;
			"function" == typeof this._flush ? this._flush((function (e, n) {
				i(t, e, n)
			})) : i(this, null, null)
		}

		function i(t, e, n) {
			if (e) return t.emit("error", e);
			if (null != n && t.push(n), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
			if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
			return t.push(null)
		}
		a.inherits = n(14), a.inherits(c, r), c.prototype.push = function (t, e) {
			return this._transformState.needTransform = !1, r.prototype.push.call(this, t, e)
		}, c.prototype._transform = function (t, e, n) {
			throw new Error("_transform() is not implemented")
		}, c.prototype._write = function (t, e, n) {
			var r = this._transformState;
			if (r.writecb = n, r.writechunk = t, r.writeencoding = e, !r.transforming) {
				var a = this._readableState;
				(r.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
			}
		}, c.prototype._read = function (t) {
			var e = this._transformState;
			null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
		}, c.prototype._destroy = function (t, e) {
			var n = this;
			r.prototype._destroy.call(this, t, (function (t) {
				e(t), n.emit("close")
			}))
		}
	}, function (t, e) {
		(function () {
			"use strict";
			var t;
			t = new RegExp(/(?!xmlns)^.*:/), e.normalize = function (t) {
				return t.toLowerCase()
			}, e.firstCharLowerCase = function (t) {
				return t.charAt(0).toLowerCase() + t.slice(1)
			}, e.stripPrefix = function (e) {
				return e.replace(t, "")
			}, e.parseNumbers = function (t) {
				return isNaN(t) || (t = t % 1 == 0 ? parseInt(t, 10) : parseFloat(t)), t
			}, e.parseBooleans = function (t) {
				return /^(?:true|false)$/i.test(t) && (t = "true" === t.toLowerCase()), t
			}
		}).call(this)
	}, function (t, e, n) {
		"use strict";
		var r = Array.prototype.slice,
			a = n(68),
			c = Object.keys,
			o = c ? function (t) {
				return c(t)
			} : n(133),
			i = Object.keys;
		o.shim = function () {
			return Object.keys ? function () {
				var t = Object.keys(arguments);
				return t && t.length === arguments.length
			}(1, 2) || (Object.keys = function (t) {
				return a(t) ? i(r.call(t)) : i(t)
			}) : Object.keys = o, Object.keys || o
		}, t.exports = o
	}, function (t, e, n) {
		"use strict";
		var r = Object.prototype.toString;
		t.exports = function (t) {
			var e = r.call(t),
				n = "[object Arguments]" === e;
			return n || "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && 0 <= t.length && "[object Function]" === r.call(t.callee)
		}
	}, function (t, e, n) {
		"use strict";
		if ("function" != typeof Object.defineProperty || "function" != typeof Object.defineProperties || "function" != typeof Object.getPrototypeOf || "function" != typeof Object.setPrototypeOf) throw new TypeError("util.promisify requires a true ES5 environment");
		var r = n(136);
		if ("function" != typeof Promise) throw new TypeError("`Promise` must be globally available for util.promisify to work.");
		var a = Function.call.bind(Array.prototype.slice),
			c = Function.call.bind(Array.prototype.concat),
			o = Function.call.bind(Array.prototype.forEach),
			i = "function" == typeof Symbol && "symbol" == typeof Symbol(""),
			u = i ? Symbol("util.promisify.custom") : null,
			s = i ? Symbol("customPromisifyArgs") : null;
		t.exports = function (t) {
			if ("function" != typeof t) {
				var e = new TypeError('The "original" argument must be of type function');
				throw e.name = "TypeError [ERR_INVALID_ARG_TYPE]", e.code = "ERR_INVALID_ARG_TYPE", e
			}
			if (i && t[u]) {
				var n = t[u];
				if ("function" != typeof n) throw new TypeError("The [util.promisify.custom] property must be a function");
				return Object.defineProperty(n, u, {
					configurable: !0,
					enumerable: !1,
					value: n,
					writable: !1
				}), n
			}

			function l() {
				var e = a(arguments),
					n = this;
				return new Promise((function (r, i) {
					t.apply(n, c(e, (function (t) {
						var e = 1 < arguments.length ? a(arguments, 1) : [];
						if (t) i(t);
						else if (void 0 !== g && 1 < e.length) {
							var n = {};
							o(g, (function (t, r) {
								n[t] = e[r]
							})), r(n)
						} else r(e[0])
					})))
				}))
			}
			var g = t[s];
			return Object.setPrototypeOf(l, Object.getPrototypeOf(t)), Object.defineProperty(l, u, {
				configurable: !0,
				enumerable: !1,
				value: l,
				writable: !1
			}), Object.defineProperties(l, r(t))
		}, t.exports.custom = u, t.exports.customPromisifyArgs = s
	}, function (t, e, n) {
		"use strict";
		var r = n(137),
			a = Object.defineProperty,
			c = Object.getOwnPropertyDescriptor,
			o = Object.getOwnPropertyNames,
			i = Object.getOwnPropertySymbols,
			u = Function.call.bind(Array.prototype.concat),
			s = Function.call.bind(Array.prototype.reduce),
			l = i ? function (t) {
				return u(o(t), i(t))
			} : o,
			g = r.IsCallable(c) && r.IsCallable(o);
		t.exports = function (t) {
			if (r.RequireObjectCoercible(t), !g) throw new TypeError("getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor");
			var e = r.ToObject(t);
			return s(l(e), (function (t, n) {
				var r = c(e, n);
				return void 0 !== r && function (t, e, n) {
					a && e in t ? a(t, e, {
						configurable: !0,
						enumerable: !0,
						value: n,
						writable: !0
					}) : t[e] = n
				}(t, n, r), t
			}), {})
		}
	}, function (t, e) {
		t.exports = function (t) {
			return null === t || "function" != typeof t && "object" != typeof t
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = r("%TypeError%"),
			c = r("%SyntaxError%"),
			o = n(15),
			i = {
				"Property Descriptor": function (t, e) {
					if ("Object" !== t.Type(e)) return !1;
					var n = {
						"[[Configurable]]": !0,
						"[[Enumerable]]": !0,
						"[[Get]]": !0,
						"[[Set]]": !0,
						"[[Value]]": !0,
						"[[Writable]]": !0
					};
					for (var r in e)
						if (o(e, r) && !n[r]) return !1;
					var c = o(e, "[[Value]]"),
						i = o(e, "[[Get]]") || o(e, "[[Set]]");
					if (c && i) throw new a("Property Descriptors may not be both accessor and data descriptors");
					return !0
				}
			};
		t.exports = function (t, e, n, r) {
			var o = i[e];
			if ("function" != typeof o) throw new c("unknown record type: " + e);
			if (!o(t, r)) throw new a(n + " must be a " + e)
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = Number.isNaN || function (t) {
			return t != t
		}
	}, function (t, e, n) {
		"use strict";
		var r = Number.isNaN || function (t) {
			return t != t
		};
		t.exports = Number.isFinite || function (t) {
			return "number" == typeof t && !r(t) && t !== 1 / 0 && t !== -1 / 0
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = n(15),
			c = r("%Object%").assign;
		t.exports = function (t, e) {
			if (c) return c(t, e);
			for (var n in e) a(e, n) && (t[n] = e[n]);
			return t
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			return 0 <= t ? 1 : -1
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t, e) {
			var n = t % e;
			return Math.floor(0 <= n ? n : n + e)
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t, e) {
			for (var n = 0; n < t.length; n += 1)
				if (!e(t[n], n, t)) return !1;
			return !0
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = n(15),
			c = r("%TypeError%");
		t.exports = function (t, e) {
			if ("Object" !== t.Type(e)) return !1;
			var n = {
				"[[Configurable]]": !0,
				"[[Enumerable]]": !0,
				"[[Get]]": !0,
				"[[Set]]": !0,
				"[[Value]]": !0,
				"[[Writable]]": !0
			};
			for (var r in e)
				if (a(e, r) && !n[r]) return !1;
			if (t.IsDataDescriptor(e) && t.IsAccessorDescriptor(e)) throw new c("Property Descriptors may not be both accessor and data descriptors");
			return !0
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(48),
			a = n(3)("%Function%"),
			c = a.apply,
			o = a.call;
		t.exports = function () {
			return r.apply(o, arguments)
		}, t.exports.apply = function () {
			return r.apply(c, arguments)
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(25)(),
			a = n(3),
			c = n(16),
			o = a("%Symbol.iterator%", !0),
			i = c("Array.prototype.slice"),
			u = c("Array.prototype.join");
		t.exports = function (t, e) {
			var n;
			return r ? n = t.GetMethod(e, o) : t.IsArray(e) ? n = function () {
				var t = -1,
					e = this;
				return {
					next: function () {
						return {
							done: (t += 1) >= e.length,
							value: e[t]
						}
					}
				}
			} : "String" === t.Type(e) && (n = function () {
				var n = 0;
				return {
					next: function () {
						var r = t.AdvanceStringIndex(e, n, !0),
							a = u(i(e, n, r), "");
						return {
							done: (n = r) > e.length,
							value: a
						}
					}
				}
			}), n
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = r("%Object.setPrototypeOf%", !0),
			c = r("%Array.prototype%");
		t.exports = a || ([].__proto__ !== c ? null : function (t, e) {
			return t.__proto__ = e, t
		})
	}, function (t, e, n) {
		"use strict";
		var r = n(70);
		t.exports = function () {
			return "function" == typeof Object.getOwnPropertyDescriptors ? Object.getOwnPropertyDescriptors : r
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(47),
			a = n(69);
		t.exports = function () {
			return "function" == typeof r.promisify ? r.promisify : a
		}
	}, function (t, e, n) {
		"use strict";
		(t.exports = {}).forEach = function (t, e) {
			for (var n = 0; n < t.length; n++) {
				var r = e(t[n]);
				if (r) return r
			}
		}
	}, function (t, e, n) {
		"use strict";
		var r = t.exports = {};
		r.isIE = function (t) {
			return !(-1 === (e = navigator.userAgent.toLowerCase()).indexOf("msie") && -1 === e.indexOf("trident") && -1 === e.indexOf(" edge/") || t && t !== function () {
				for (var t = 3, e = document.createElement("div"), n = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e", n[0];);
				return 4 < t ? t : void 0
			}());
			var e
		}, r.isLegacyOpera = function () {
			return !!window.opera
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(2),
			a = n(5);

		function c(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function o(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? c(Object(n), !0).forEach((function (e) {
					i(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function i(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function u(t, e) {
			var n = t,
				r = (0, a.returnRanges)((0, a.getMismatchIndices)(t, e));
			if (0 < r.length) {
				for (var c = 0; c < r.length;) {
					var o = r.slice(0, r.length - c);
					if (o.length < 2) break;
					if (.25 < o.reduce((function (t, e) {
							return t + (e[1] + 1 - e[0])
						}), 0) / t.slice(0, o[o.length - 1][1] + 1).length) {
						r = r.slice(r.length - c, r.length).concat([
							[0, r[r.length - 1 - c][1]]
						]), n = t.slice(r[r.length - 1][1] + 1);
						break
					}
					c += 1
				}
				n = t.slice(r[r.length - 1][1] + 1)
			}
			return {
				mismatches: r = r.map((function (t) {
					return {
						start: t[0],
						end: t[1] + 1
					}
				})),
				annealSequence: n
			}
		}
		e.default = function (t, e) {
			var n = (0, r.dnaComplement)(e),
				a = n.seq,
				c = n.compSeq;
			return s(t, a, 1).concat(s(t, c, -1))
		};
		var s = function (t, e, n) {
			var r = 1 < arguments.length ? e : void 0,
				c = 2 < arguments.length ? n : void 0,
				i = [],
				s = 1 === c;
			return (0 < arguments.length && void 0 !== t ? t : []).forEach((function (t) {
				var e = t.overhang,
					n = void 0 === e ? "" : e,
					l = t.seq,
					g = t.strict;
				if (g = g || !1, "" !== l) {
					var f = (l = l.toLowerCase()).length,
						p = r.toLowerCase(),
						d = p.length,
						h = p + p.substring(0, f),
						y = l,
						m = [],
						b = m.mismatches,
						v = m.matchSeq;
					v = f < 10 ? l : l.substring(f - 10, f), v = s ? v : (0, a.reverse)(v);
					for (var w = new RegExp(v, "gi"), O = w.exec(h), E = (n || "").concat(l); O;) {
						if (O.index < d) {
							var T = s ? O.index + v.length - f < 0 : O.index + f > d,
								S = s ? d - (O.index + v.length) < 0 : O.index + v.length > d,
								C = T || S,
								x = s ? O.index - f + v.length : O.index,
								N = x + f,
								P = p.substring(x, N);
							C && (s && (x = T ? d - (f - O.index - v.length) : O.index - f + v.length), N = f - (d - x), P = p.substring(x, d) + p.substring(0, N)), P = s ? P : (0, a.reverse)(P);
							var _ = (0, a.calcTm)(l, P);
							(_ >= t.tm || 40 < _) && (s && N < d || x < d) && O.index < d && function () {
								if (n) {
									s && (x -= n.length) < 0 && (x = d + x), s || (N += n.length, d < N && (N -= d));
									var e = u(E, "X".repeat(n.length).concat(P)),
										r = e.mismatches;
									b = void 0 === r ? [] : r;
									var a = e.annealSequence;
									y = void 0 === a ? "" : a, b[0] && b[0].start - n.length == 0 ? b[0].start = 0 : b.push({
										start: 0,
										end: n.length
									})
								} else {
									var f = u(l, P),
										p = f.mismatches;
									b = void 0 === p ? [] : p;
									var h = f.annealSequence;
									y = void 0 === h ? "" : h
								}
								var m = {};
								b = b.sort((function (t, e) {
									return t.start < e.start
								})).map((function (t) {
									return {
										id: "".concat(t.start, "-").concat(t.end),
										start: t.start,
										end: t.end
									}
								})).filter((function (t) {
									return !m[t.id] && (m[t.id] = !0)
								})).map((function (t) {
									return {
										start: t.start,
										end: t.end
									}
								})), (g && b.length < 1 || !g) && i.push(o({}, t, {
									id: "".concat(t.id, "-").concat(x),
									seq: E,
									start: x,
									end: N,
									direction: c,
									mismatches: b,
									annealSequence: y,
									strict: g
								}))
							}()
						}
						O = w.exec(h)
					}
				}
			})), i
		}
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return function (t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
					return n
				}
			}(t) || function (t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
			}(t) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}

		function a(t) {
			return t[t.length - 1]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.stackElements = function (t, e) {
			var n = r(t);
			return n.sort((function (t, e) {
				return "insert" === t.type && t.start === e.start ? -1 : "insert" === e.type && t.start === e.start ? 1 : t.start - e.start
			})), n.reduce((function (t, n) {
				var c = t.findIndex((function (t) {
						return n.end !== n.start && (a(t).end <= a(t).start ? a(t).end + e <= n.start : n.end > n.start ? a(t).end <= n.start : a(t).end < n.start && n.end < function (t) {
							return t[0]
						}(t).start)
					})),
					o = r(t);
				return -1 < c ? o[c].push(n) : o.push([n]), o
			}), [])
		}, e.createMultiRows = function (t, e, n) {
			for (var r = new Array(n), a = 0; a < n; a += 1) {
				r[a] = [];
				for (var c = 0; c < t.length; c += 1) r[a][c] = []
			}
			for (var o = 0; o < t.length; o += 1)
				for (var i = 0; i < t[o].length; i += 1)
					if (t[o][i].start < t[o][i].end)
						for (var u = Math.max(0, Math.floor(t[o][i].start / e)), s = Math.floor((t[o][i].end - 1) / e); u <= s && u < n;) r[u][o].push(t[o][i]), u += 1;
					else if (t[o][i].end < t[o][i].start) {
				var l = Math.floor(t[o][i].end / e);
				for (0 === t[o][i].end && (l = -1); 0 <= l && l < r.length;) r[l][o].push(t[o][i]), l -= 1;
				for (var g = Math.floor(t[o][i].start / e); g < n;) r[g][o].push(t[o][i]), g += 1
			} else if (t[o][i].end === t[o][i].start) {
				for (var f = 0; f < r.length; f += 1) r[f][o].push(t[o][i]);
				if (0 === t[o][i].end) continue;
				r[Math.floor(t[o][i].start / e)][o].push(t[o][i])
			}
			for (var p = 0; p < n; p += 1) r[p] = r[p].filter((function (t) {
				return t[0]
			}));
			return r
		}, e.createSingleRows = function (t, e, n, r) {
			for (var a = !(3 < arguments.length && void 0 !== r) || r, c = new Array(n), o = 0; o < n; o += 1) c[o] = [];
			for (var i = function (r) {
					var o = t[r],
						i = o.start,
						u = o.end;
					if (void 0 !== t[r].fcut) {
						var s = t[r],
							l = s.fcut,
							g = s.rcut;
						i = u < l || l < i ? l : i, u = u < g || g < i ? g : u
					}
					if (i < u)
						for (var f = Math.floor(i / e), p = Math.floor(u / e); f <= p && f < n;) c[f].push(t[r]), f += 1;
					else {
						for (var d = Math.floor(u / e); 0 <= d;) c[d].push(t[r]), d -= 1;
						for (var h = Math.floor(i / e); h < n;)(a || c[h].every((function (e) {
							return e.id !== t[r].id
						}))) && c[h].push(t[r]), h += 1
					}
				}, u = 0; u < t.length; u += 1) i(u);
			return c
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = c(n(191)),
			a = c(n(26));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = function (t) {
			return (0, a.default)((0, r.default)(t))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Viewer = e.pUC = e.SeqViz = void 0;
		var r = n(91);
		Object.defineProperty(e, "pUC", {
			enumerable: !0,
			get: function () {
				return u(r).default
			}
		});
		var a = u(n(0)),
			c = u(n(51)),
			o = u(n(96)),
			i = u(n(98));

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function s(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function l(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.SeqViz = i.default, e.Viewer = function (t, e) {
			var n = 0 < arguments.length && void 0 !== t ? t : "root",
				r = 1 < arguments.length ? e : void 0,
				u = !1,
				g = n.constructor.name.startsWith("HTML") && n.constructor.name.endsWith("Element") ? n : document.getElementById(n),
				f = a.default.createElement(i.default, r, null);
			return {
				render: function () {
					return u = !0, c.default.render(f, g), f
				},
				renderToString: function () {
					return o.default.renderToString(f)
				},
				setState: function (t) {
					return Object.keys(t).forEach((function (t) {
						Object.keys(r).includes(t) || console.error("Invalid viewer setting: ".concat(t))
					})), r = function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {};
							e % 2 ? s(Object(n), !0).forEach((function (e) {
								l(t, e, n[e])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
							}))
						}
						return t
					}({}, r, {}, t), f = a.default.createElement(i.default, r, null), u && c.default.render(f, g), f
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			name: "L09136",
			seq: "tcgcgcgtttcggtgatgacggtgaaaacctctgacacatgcagctcccggagacggttgtctgtaagcggatgccgggagcagacaagcccgtcagggcagcgggtgttggcgggtgtcggggctggcttaactatgcggcatcagagcagattgtactgagagtgcaccatatgcggtgtgaaataccgcacagatgcgtaaggagaaaataccgcatcaggcgccattcgccattcaggctgcgcaactgttgggaagggcgatcggtgcgggcctcttcgctattacgccagctggcgaaagggggatgtgctgcaaggcgattaagttgggtaacgccagggttttcccagtcacgacgttgtaaaacgacggccagtgccaagcttgcatgcctgcaggtcgactctagaggatccccgggtaccgagctcgaattcgtaatcatggtcatagctgtttcctgtgtgaaattgttatccgctcacaattccacacaacatacgagccggaagcataaagtgtaaagcctggggtgcctaatgagtgagctaactcacattaattgcgttgcgctcactgcccgctttccagtcgggaaacctgtcgtgccagctgcattaatgaatcggccaacgcgcggggagaggcggtttgcgtattgggcgctcttccgcttcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcaggggataacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccataggctccgcccccctgacgagcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctcctgttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggtgtaggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggtaagacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaactacggctacactagaaggacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccaccgctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgctcagtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaatctaaagtatatatgagtaaacttggtctgacagttaccaatgcttaatcagtgaggcacctatctcagcgatctgtctatttcgttcatccatagttgcctgactccccgtcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgcaatgataccgcgagacccacgctcaccggctccagatttatcagcaataaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatccgcctccatccagtctattaattgttgccgggaagctagagtaagtagttcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtggtgtcacgctcgtcgtttggtatggcttcattcagctccggttcccaacgatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctccttcggtcctccgatcgttgtcagaagtaagttggccgcagtgttatcactcatggttatggcagcactgcataattctcttactgtcatgccatccgtaagatgcttttctgtgactggtgagtactcaaccaagtcattctgagaatagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataataccgcgccacatagcagaactttaaaagtgctcatcattggaaaacgttcttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgatgtaacccactcgtgcacccaactgatcttcagcatcttttactttcaccagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaagggaataagggcgacacggaaatgttgaatactcatactcttcctttttcaatattattgaagcatttatcagggttattgtctcatgagcggatacatatttgaatgtatttagaaaaataaacaaataggggttccgcgcacatttccccgaaaagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggccctttcgtc",
			compSeq: "agcgcgcaaagccactactgccacttttggagactgtgtacgtcgagggcctctgccaacagacattcgcctacggccctcgtctgttcgggcagtcccgtcgcccacaaccgcccacagccccgaccgaattgatacgccgtagtctcgtctaacatgactctcacgtggtatacgccacactttatggcgtgtctacgcattcctcttttatggcgtagtccgcggtaagcggtaagtccgacgcgttgacaacccttcccgctagccacgcccggagaagcgataatgcggtcgaccgctttccccctacacgacgttccgctaattcaacccattgcggtcccaaaagggtcagtgctgcaacattttgctgccggtcacggttcgaacgtacggacgtccagctgagatctcctaggggcccatggctcgagcttaagcattagtaccagtatcgacaaaggacacactttaacaataggcgagtgttaaggtgtgttgtatgctcggccttcgtatttcacatttcggaccccacggattactcactcgattgagtgtaattaacgcaacgcgagtgacgggcgaaaggtcagccctttggacagcacggtcgacgtaattacttagccggttgcgcgcccctctccgccaaacgcataacccgcgagaaggcgaaggagcgagtgactgagcgacgcgagccagcaagccgacgccgctcgccatagtcgagtgagtttccgccattatgccaataggtgtcttagtcccctattgcgtcctttcttgtacactcgttttccggtcgttttccggtccttggcatttttccggcgcaacgaccgcaaaaaggtatccgaggcggggggactgctcgtagtgtttttagctgcgagttcagtctccaccgctttgggctgtcctgatatttctatggtccgcaaagggggaccttcgagggagcacgcgagaggacaaggctgggacggcgaatggcctatggacaggcggaaagagggaagcccttcgcaccgcgaaagagtatcgagtgcgacatccatagagtcaagccacatccagcaagcgaggttcgacccgacacacgtgcttggggggcaagtcgggctggcgacgcggaataggccattgatagcagaactcaggttgggccattctgtgctgaatagcggtgaccgtcgtcggtgaccattgtcctaatcgtctcgctccatacatccgccacgatgtctcaagaacttcaccaccggattgatgccgatgtgatcttcctgtcataaaccatagacgcgagacgacttcggtcaatggaagcctttttctcaaccatcgagaactaggccgtttgtttggtggcgaccatcgccaccaaaaaaacaaacgttcgtcgtctaatgcgcgtctttttttcctagagttcttctaggaaactagaaaagatgccccagactgcgagtcaccttgcttttgagtgcaattccctaaaaccagtactctaatagtttttcctagaagtggatctaggaaaatttaatttttacttcaaaatttagttagatttcatatatactcatttgaaccagactgtcaatggttacgaattagtcactccgtggatagagtcgctagacagataaagcaagtaggtatcaacggactgaggggcagcacatctattgatgctatgccctcccgaatggtagaccggggtcacgacgttactatggcgctctgggtgcgagtggccgaggtctaaatagtcgttatttggtcggtcggccttcccggctcgcgtcttcaccaggacgttgaaataggcggaggtaggtcagataattaacaacggcccttcgatctcattcatcaagcggtcaattatcaaacgcgttgcaacaacggtaacgatgtccgtagcaccacagtgcgagcagcaaaccataccgaagtaagtcgaggccaagggttgctagttccgctcaatgtactagggggtacaacacgttttttcgccaatcgaggaagccaggaggctagcaacagtcttcattcaaccggcgtcacaatagtgagtaccaataccgtcgtgacgtattaagagaatgacagtacggtaggcattctacgaaaagacactgaccactcatgagttggttcagtaagactcttatcacatacgccgctggctcaacgagaacgggccgcagttatgccctattatggcgcggtgtatcgtcttgaaattttcacgagtagtaaccttttgcaagaagccccgcttttgagagttcctagaatggcgacaactctaggtcaagctacattgggtgagcacgtgggttgactagaagtcgtagaaaatgaaagtggtcgcaaagacccactcgtttttgtccttccgttttacggcgttttttcccttattcccgctgtgcctttacaacttatgagtatgagaaggaaaaagttataataacttcgtaaatagtcccaataacagagtactcgcctatgtataaacttacataaatctttttatttgtttatccccaaggcgcgtgtaaaggggcttttcacggtggactgcagattctttggtaataatagtactgtaattggatatttttatccgcatagtgctccgggaaagcag",
			annotations: [{
				id: "lxcC1L3M4z",
				start: 133,
				end: 457,
				direction: -1,
				name: "lacZ fragment",
				color: "#8FDE8C",
				type: "CDS"
			}, {
				id: "8DkP5cHpaE",
				start: 386,
				end: 443,
				direction: 1,
				name: "MCS",
				color: "#CFF283",
				type: "misc_feature"
			}, {
				id: "3fdyiQcona",
				start: 476,
				end: 493,
				direction: 1,
				name: "lac operator",
				color: "#9DEAED",
				type: "protein_bind"
			}, {
				id: "lsd_X-s5yM",
				start: 500,
				end: 531,
				direction: -1,
				name: "lac promoter",
				color: "#9DEAED",
				type: "promoter"
			}, {
				id: "mnaEqs-lfH",
				start: 854,
				end: 1443,
				direction: -1,
				name: "ori",
				color: "#CFF283",
				type: "rep_origin"
			}, {
				id: "7GHnMGoV2j",
				start: 1613,
				end: 2474,
				direction: -1,
				name: "bla",
				color: "#8FDE8C",
				type: "CDS"
			}, {
				id: "fPLcYWJU1f",
				start: 2474,
				end: 2579,
				direction: -1,
				name: "bla",
				color: "#6B81FF",
				type: "promoter"
			}]
		}
	}, function (t, e, n) {
		"use strict";
		/** @license React v16.12.0
		 * react.production.min.js
		 *
		 * Copyright (c) Facebook, Inc. and its affiliates.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */
		var r = n(27),
			a = "function" == typeof Symbol && Symbol.for,
			c = a ? Symbol.for("react.element") : 60103,
			o = a ? Symbol.for("react.portal") : 60106,
			i = a ? Symbol.for("react.fragment") : 60107,
			u = a ? Symbol.for("react.strict_mode") : 60108,
			s = a ? Symbol.for("react.profiler") : 60114,
			l = a ? Symbol.for("react.provider") : 60109,
			g = a ? Symbol.for("react.context") : 60110,
			f = a ? Symbol.for("react.forward_ref") : 60112,
			p = a ? Symbol.for("react.suspense") : 60113;
		a && Symbol.for("react.suspense_list");
		var d = a ? Symbol.for("react.memo") : 60115,
			h = a ? Symbol.for("react.lazy") : 60116;
		a && Symbol.for("react.fundamental"), a && Symbol.for("react.responder"), a && Symbol.for("react.scope");
		var y = "function" == typeof Symbol && Symbol.iterator;

		function m(t) {
			for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		var b = {
				isMounted: function () {
					return !1
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {}
			},
			v = {};

		function w(t, e, n) {
			this.props = t, this.context = e, this.refs = v, this.updater = n || b
		}

		function O() {}

		function E(t, e, n) {
			this.props = t, this.context = e, this.refs = v, this.updater = n || b
		}
		w.prototype.isReactComponent = {}, w.prototype.setState = function (t, e) {
			if ("object" != typeof t && "function" != typeof t && null != t) throw Error(m(85));
			this.updater.enqueueSetState(this, t, e, "setState")
		}, w.prototype.forceUpdate = function (t) {
			this.updater.enqueueForceUpdate(this, t, "forceUpdate")
		}, O.prototype = w.prototype;
		var T = E.prototype = new O;
		T.constructor = E, r(T, w.prototype), T.isPureReactComponent = !0;
		var S = {
				current: null
			},
			C = {
				current: null
			},
			x = Object.prototype.hasOwnProperty,
			N = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function P(t, e, n) {
			var r, a = {},
				o = null,
				i = null;
			if (null != e)
				for (r in void 0 !== e.ref && (i = e.ref), void 0 !== e.key && (o = "" + e.key), e) x.call(e, r) && !N.hasOwnProperty(r) && (a[r] = e[r]);
			var u = arguments.length - 2;
			if (1 === u) a.children = n;
			else if (1 < u) {
				for (var s = Array(u), l = 0; l < u; l++) s[l] = arguments[l + 2];
				a.children = s
			}
			if (t && t.defaultProps)
				for (r in u = t.defaultProps) void 0 === a[r] && (a[r] = u[r]);
			return {
				$$typeof: c,
				type: t,
				key: o,
				ref: i,
				props: a,
				_owner: C.current
			}
		}

		function _(t) {
			return "object" == typeof t && null !== t && t.$$typeof === c
		}
		var A = /\/+/g,
			k = [];

		function I(t, e, n, r) {
			if (k.length) {
				var a = k.pop();
				return a.result = t, a.keyPrefix = e, a.func = n, a.context = r, a.count = 0, a
			}
			return {
				result: t,
				keyPrefix: e,
				func: n,
				context: r,
				count: 0
			}
		}

		function j(t) {
			t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, k.length < 10 && k.push(t)
		}

		function D(t, e, n) {
			return null == t ? 0 : function t(e, n, r, a) {
				var i = typeof e;
				"undefined" !== i && "boolean" !== i || (e = null);
				var u = !1;
				if (null === e) u = !0;
				else switch (i) {
					case "string":
					case "number":
						u = !0;
						break;
					case "object":
						switch (e.$$typeof) {
							case c:
							case o:
								u = !0
						}
				}
				if (u) return r(a, e, "" === n ? "." + M(e, 0) : n), 1;
				if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
					for (var s = 0; s < e.length; s++) {
						var l = n + M(i = e[s], s);
						u += t(i, l, r, a)
					} else if ("function" == typeof (l = null === e || "object" != typeof e ? null : "function" == typeof (l = y && e[y] || e["@@iterator"]) ? l : null))
						for (e = l.call(e), s = 0; !(i = e.next()).done;) u += t(i = i.value, l = n + M(i, s++), r, a);
					else if ("object" === i) throw r = "" + e, Error(m(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""));
				return u
			}(t, "", e, n)
		}

		function M(t, e) {
			return "object" == typeof t && null !== t && null != t.key ? function (t) {
				var e = {
					"=": "=0",
					":": "=2"
				};
				return "$" + ("" + t).replace(/[=:]/g, (function (t) {
					return e[t]
				}))
			}(t.key) : e.toString(36)
		}

		function R(t, e) {
			t.func.call(t.context, e, t.count++)
		}

		function L(t, e, n) {
			var r = t.result,
				a = t.keyPrefix;
			t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? q(t, r, n, (function (t) {
				return t
			})) : null != t && (_(t) && (t = function (t, e) {
				return {
					$$typeof: c,
					type: t.type,
					key: e,
					ref: t.ref,
					props: t.props,
					_owner: t._owner
				}
			}(t, a + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(A, "$&/") + "/") + n)), r.push(t))
		}

		function q(t, e, n, r, a) {
			var c = "";
			null != n && (c = ("" + n).replace(A, "$&/") + "/"), D(t, L, e = I(e, c, r, a)), j(e)
		}

		function F() {
			var t = S.current;
			if (null === t) throw Error(m(321));
			return t
		}
		var G = {
			Children: {
				map: function (t, e, n) {
					if (null == t) return t;
					var r = [];
					return q(t, r, null, e, n), r
				},
				forEach: function (t, e, n) {
					if (null == t) return t;
					D(t, R, e = I(null, null, e, n)), j(e)
				},
				count: function (t) {
					return D(t, (function () {
						return null
					}), null)
				},
				toArray: function (t) {
					var e = [];
					return q(t, e, null, (function (t) {
						return t
					})), e
				},
				only: function (t) {
					if (!_(t)) throw Error(m(143));
					return t
				}
			},
			createRef: function () {
				return {
					current: null
				}
			},
			Component: w,
			PureComponent: E,
			createContext: function (t, e) {
				return void 0 === e && (e = null), (t = {
					$$typeof: g,
					_calculateChangedBits: e,
					_currentValue: t,
					_currentValue2: t,
					_threadCount: 0,
					Provider: null,
					Consumer: null
				}).Provider = {
					$$typeof: l,
					_context: t
				}, t.Consumer = t
			},
			forwardRef: function (t) {
				return {
					$$typeof: f,
					render: t
				}
			},
			lazy: function (t) {
				return {
					$$typeof: h,
					_ctor: t,
					_status: -1,
					_result: null
				}
			},
			memo: function (t, e) {
				return {
					$$typeof: d,
					type: t,
					compare: void 0 === e ? null : e
				}
			},
			useCallback: function (t, e) {
				return F().useCallback(t, e)
			},
			useContext: function (t, e) {
				return F().useContext(t, e)
			},
			useEffect: function (t, e) {
				return F().useEffect(t, e)
			},
			useImperativeHandle: function (t, e, n) {
				return F().useImperativeHandle(t, e, n)
			},
			useDebugValue: function () {},
			useLayoutEffect: function (t, e) {
				return F().useLayoutEffect(t, e)
			},
			useMemo: function (t, e) {
				return F().useMemo(t, e)
			},
			useReducer: function (t, e, n) {
				return F().useReducer(t, e, n)
			},
			useRef: function (t) {
				return F().useRef(t)
			},
			useState: function (t) {
				return F().useState(t)
			},
			Fragment: i,
			Profiler: s,
			StrictMode: u,
			Suspense: p,
			createElement: P,
			cloneElement: function (t, e, n) {
				if (null == t) throw Error(m(267, t));
				var a = r({}, t.props),
					o = t.key,
					i = t.ref,
					u = t._owner;
				if (null != e) {
					if (void 0 !== e.ref && (i = e.ref, u = C.current), void 0 !== e.key && (o = "" + e.key), t.type && t.type.defaultProps) var s = t.type.defaultProps;
					for (l in e) x.call(e, l) && !N.hasOwnProperty(l) && (a[l] = void 0 === e[l] && void 0 !== s ? s[l] : e[l])
				}
				var l = arguments.length - 2;
				if (1 === l) a.children = n;
				else if (1 < l) {
					s = Array(l);
					for (var g = 0; g < l; g++) s[g] = arguments[g + 2];
					a.children = s
				}
				return {
					$$typeof: c,
					type: t.type,
					key: o,
					ref: i,
					props: a,
					_owner: u
				}
			},
			createFactory: function (t) {
				var e = P.bind(null, t);
				return e.type = t, e
			},
			isValidElement: _,
			version: "16.12.0",
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
				ReactCurrentDispatcher: S,
				ReactCurrentBatchConfig: {
					suspense: null
				},
				ReactCurrentOwner: C,
				IsSomeRendererActing: {
					current: !1
				},
				assign: r
			}
		};
		t.exports = G.default || G
	}, function (t, e, n) {
		"use strict";
		/** @license React v16.12.0
		 * react-dom.production.min.js
		 *
		 * Copyright (c) Facebook, Inc. and its affiliates.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */
		var r = n(0),
			a = n(27),
			c = n(94);

		function o(t) {
			for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		if (!r) throw Error(o(227));
		var i = null,
			u = {};

		function s() {
			if (i)
				for (var t in u) {
					var e = u[t],
						n = i.indexOf(t);
					if (!(-1 < n)) throw Error(o(96, t));
					if (!g[n]) {
						if (!e.extractEvents) throw Error(o(97, t));
						for (var r in n = (g[n] = e).eventTypes) {
							var a = void 0,
								c = n[r],
								s = e,
								p = r;
							if (f.hasOwnProperty(p)) throw Error(o(99, p));
							var d = (f[p] = c).phasedRegistrationNames;
							if (d) {
								for (a in d) d.hasOwnProperty(a) && l(d[a], s, p);
								a = !0
							} else a = !!c.registrationName && (l(c.registrationName, s, p), !0);
							if (!a) throw Error(o(98, r, t))
						}
					}
				}
		}

		function l(t, e, n) {
			if (p[t]) throw Error(o(100, t));
			p[t] = e, d[t] = e.eventTypes[n].dependencies
		}
		var g = [],
			f = {},
			p = {},
			d = {},
			h = !1,
			y = null,
			m = !1,
			b = null,
			v = {
				onError: function (t) {
					h = !0, y = t
				}
			};

		function w(t, e, n, r, a, c, o, i, u) {
			h = !1, y = null,
				function (t, e, n, r, a, c, o, i, u) {
					var s = Array.prototype.slice.call(arguments, 3);
					try {
						e.apply(n, s)
					} catch (t) {
						this.onError(t)
					}
				}.apply(v, arguments)
		}
		var O = null,
			E = null,
			T = null;

		function S(t, e, n) {
			var r = t.type || "unknown-event";
			t.currentTarget = T(n),
				function (t, e, n, r, a, c, i, u, s) {
					if (w.apply(this, arguments), h) {
						if (!h) throw Error(o(198));
						var l = y;
						h = !1, y = null, m || (m = !0, b = l)
					}
				}(r, e, void 0, t), t.currentTarget = null
		}

		function C(t, e) {
			if (null == e) throw Error(o(30));
			return null == t ? e : Array.isArray(t) ? (Array.isArray(e) ? t.push.apply(t, e) : t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
		}

		function x(t, e, n) {
			Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
		}
		var N = null;

		function P(t) {
			if (t) {
				var e = t._dispatchListeners,
					n = t._dispatchInstances;
				if (Array.isArray(e))
					for (var r = 0; r < e.length && !t.isPropagationStopped(); r++) S(t, e[r], n[r]);
				else e && S(t, e, n);
				t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
			}
		}

		function _(t) {
			if (null !== t && (N = C(N, t)), t = N, N = null, t) {
				if (x(t, P), N) throw Error(o(95));
				if (m) throw t = b, m = !1, b = null, t
			}
		}
		var A = {
			injectEventPluginOrder: function (t) {
				if (i) throw Error(o(101));
				i = Array.prototype.slice.call(t), s()
			},
			injectEventPluginsByName: function (t) {
				var e, n = !1;
				for (e in t)
					if (t.hasOwnProperty(e)) {
						var r = t[e];
						if (!u.hasOwnProperty(e) || u[e] !== r) {
							if (u[e]) throw Error(o(102, e));
							u[e] = r, n = !0
						}
					}
				n && s()
			}
		};

		function k(t, e) {
			var n = t.stateNode;
			if (!n) return null;
			var r = O(n);
			if (!r) return null;
			n = r[e];
			t: switch (e) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
					(r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r;
					break t;
				default:
					t = !1
			}
			if (t) return null;
			if (n && "function" != typeof n) throw Error(o(231, e, typeof n));
			return n
		}
		var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		I.hasOwnProperty("ReactCurrentDispatcher") || (I.ReactCurrentDispatcher = {
			current: null
		}), I.hasOwnProperty("ReactCurrentBatchConfig") || (I.ReactCurrentBatchConfig = {
			suspense: null
		});
		var j = /^(.*)[\\\/]/,
			D = "function" == typeof Symbol && Symbol.for,
			M = D ? Symbol.for("react.element") : 60103,
			R = D ? Symbol.for("react.portal") : 60106,
			L = D ? Symbol.for("react.fragment") : 60107,
			q = D ? Symbol.for("react.strict_mode") : 60108,
			F = D ? Symbol.for("react.profiler") : 60114,
			G = D ? Symbol.for("react.provider") : 60109,
			B = D ? Symbol.for("react.context") : 60110,
			z = D ? Symbol.for("react.concurrent_mode") : 60111,
			U = D ? Symbol.for("react.forward_ref") : 60112,
			W = D ? Symbol.for("react.suspense") : 60113,
			H = D ? Symbol.for("react.suspense_list") : 60120,
			V = D ? Symbol.for("react.memo") : 60115,
			$ = D ? Symbol.for("react.lazy") : 60116;
		D && Symbol.for("react.fundamental"), D && Symbol.for("react.responder"), D && Symbol.for("react.scope");
		var Y = "function" == typeof Symbol && Symbol.iterator;

		function K(t) {
			return null === t || "object" != typeof t ? null : "function" == typeof (t = Y && t[Y] || t["@@iterator"]) ? t : null
		}

		function X(t) {
			if (null == t) return null;
			if ("function" == typeof t) return t.displayName || t.name || null;
			if ("string" == typeof t) return t;
			switch (t) {
				case L:
					return "Fragment";
				case R:
					return "Portal";
				case F:
					return "Profiler";
				case q:
					return "StrictMode";
				case W:
					return "Suspense";
				case H:
					return "SuspenseList"
			}
			if ("object" == typeof t) switch (t.$$typeof) {
				case B:
					return "Context.Consumer";
				case G:
					return "Context.Provider";
				case U:
					var e = t.render;
					return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
				case V:
					return X(t.type);
				case $:
					if (t = 1 === t._status ? t._result : null) return X(t)
			}
			return null
		}

		function Q(t) {
			var e = "";
			do {
				t: switch (t.tag) {
					case 3:
					case 4:
					case 6:
					case 7:
					case 10:
					case 9:
						var n = "";
						break t;
					default:
						var r = t._debugOwner,
							a = t._debugSource,
							c = X(t.type);
						n = null, r && (n = X(r.type)), r = c, c = "", a ? c = " (at " + a.fileName.replace(j, "") + ":" + a.lineNumber + ")" : n && (c = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + c
				}
				e += n,
				t = t.return
			} while (t);
			return e
		}
		var Z = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
			J = null,
			tt = null,
			et = null;

		function nt(t) {
			if (t = E(t)) {
				if ("function" != typeof J) throw Error(o(280));
				var e = O(t.stateNode);
				J(t.stateNode, t.type, e)
			}
		}

		function rt(t) {
			tt ? et ? et.push(t) : et = [t] : tt = t
		}

		function at() {
			if (tt) {
				var t = tt,
					e = et;
				if (et = tt = null, nt(t), e)
					for (t = 0; t < e.length; t++) nt(e[t])
			}
		}

		function ct(t, e) {
			return t(e)
		}

		function ot(t, e, n, r) {
			return t(e, n, r)
		}

		function it() {}
		var ut = ct,
			st = !1,
			lt = !1;

		function gt() {
			null === tt && null === et || (it(), at())
		}
		new Map;
		var ft = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
			pt = Object.prototype.hasOwnProperty,
			dt = {},
			ht = {};

		function yt(t, e, n, r, a, c) {
			this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = c
		}
		var mt = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (t) {
			mt[t] = new yt(t, 0, !1, t, null, !1)
		})), [
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach((function (t) {
			var e = t[0];
			mt[e] = new yt(e, 1, !1, t[1], null, !1)
		})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (t) {
			mt[t] = new yt(t, 2, !1, t.toLowerCase(), null, !1)
		})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (t) {
			mt[t] = new yt(t, 2, !1, t, null, !1)
		})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (t) {
			mt[t] = new yt(t, 3, !1, t.toLowerCase(), null, !1)
		})), ["checked", "multiple", "muted", "selected"].forEach((function (t) {
			mt[t] = new yt(t, 3, !0, t, null, !1)
		})), ["capture", "download"].forEach((function (t) {
			mt[t] = new yt(t, 4, !1, t, null, !1)
		})), ["cols", "rows", "size", "span"].forEach((function (t) {
			mt[t] = new yt(t, 6, !1, t, null, !1)
		})), ["rowSpan", "start"].forEach((function (t) {
			mt[t] = new yt(t, 5, !1, t.toLowerCase(), null, !1)
		}));
		var bt = /[\-:]([a-z])/g;

		function vt(t) {
			return t[1].toUpperCase()
		}

		function wt(t) {
			switch (typeof t) {
				case "boolean":
				case "number":
				case "object":
				case "string":
				case "undefined":
					return t;
				default:
					return ""
			}
		}

		function Ot(t, e, n, r) {
			var a = mt.hasOwnProperty(e) ? mt[e] : null;
			(null !== a ? 0 !== a.type : r || !(2 < e.length) || "o" !== e[0] && "O" !== e[0] || "n" !== e[1] && "N" !== e[1]) && (function (t, e, n, r) {
				if (null == e || function (t, e, n, r) {
						if (null !== n && 0 === n.type) return !1;
						switch (typeof e) {
							case "function":
							case "symbol":
								return !0;
							case "boolean":
								return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
							default:
								return !1
						}
					}(t, e, n, r)) return !0;
				if (r) return !1;
				if (null !== n) switch (n.type) {
					case 3:
						return !e;
					case 4:
						return !1 === e;
					case 5:
						return isNaN(e);
					case 6:
						return isNaN(e) || e < 1
				}
				return !1
			}(e, n, a, r) && (n = null), r || null === a ? function (t) {
				return !!pt.call(ht, t) || !pt.call(dt, t) && (ft.test(t) ? ht[t] = !0 : !(dt[t] = !0))
			}(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : a.mustUseProperty ? t[a.propertyName] = null === n ? 3 !== a.type && "" : n : (e = a.attributeName, r = a.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
		}

		function Et(t) {
			var e = t.type;
			return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
		}

		function Tt(t) {
			t._valueTracker || (t._valueTracker = function (t) {
				var e = Et(t) ? "checked" : "value",
					n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
					r = "" + t[e];
				if (!t.hasOwnProperty(e) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
					var a = n.get,
						c = n.set;
					return Object.defineProperty(t, e, {
						configurable: !0,
						get: function () {
							return a.call(this)
						},
						set: function (t) {
							r = "" + t, c.call(this, t)
						}
					}), Object.defineProperty(t, e, {
						enumerable: n.enumerable
					}), {
						getValue: function () {
							return r
						},
						setValue: function (t) {
							r = "" + t
						},
						stopTracking: function () {
							t._valueTracker = null, delete t[e]
						}
					}
				}
			}(t))
		}

		function St(t) {
			if (!t) return !1;
			var e = t._valueTracker;
			if (!e) return !0;
			var n = e.getValue(),
				r = "";
			return t && (r = Et(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
		}

		function Ct(t, e) {
			var n = e.checked;
			return a({}, e, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: null != n ? n : t._wrapperState.initialChecked
			})
		}

		function xt(t, e) {
			var n = null == e.defaultValue ? "" : e.defaultValue,
				r = null != e.checked ? e.checked : e.defaultChecked;
			n = wt(null != e.value ? e.value : n), t._wrapperState = {
				initialChecked: r,
				initialValue: n,
				controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
			}
		}

		function Nt(t, e) {
			null != (e = e.checked) && Ot(t, "checked", e, !1)
		}

		function Pt(t, e) {
			Nt(t, e);
			var n = wt(e.value),
				r = e.type;
			if (null != n) "number" === r ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
			else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
			e.hasOwnProperty("value") ? At(t, e.type, n) : e.hasOwnProperty("defaultValue") && At(t, e.type, wt(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
		}

		function _t(t, e, n) {
			if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
				var r = e.type;
				if (!("submit" !== r && "reset" !== r || void 0 !== e.value && null !== e.value)) return;
				e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
			}
			"" !== (n = t.name) && (t.name = ""), t.defaultChecked = !t.defaultChecked, t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
		}

		function At(t, e, n) {
			"number" === e && t.ownerDocument.activeElement === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
		}

		function kt(t, e) {
			return t = a({
				children: void 0
			}, e), (e = function (t) {
				var e = "";
				return r.Children.forEach(t, (function (t) {
					null != t && (e += t)
				})), e
			}(e.children)) && (t.children = e), t
		}

		function It(t, e, n, r) {
			if (t = t.options, e) {
				e = {};
				for (var a = 0; a < n.length; a++) e["$" + n[a]] = !0;
				for (n = 0; n < t.length; n++) a = e.hasOwnProperty("$" + t[n].value), t[n].selected !== a && (t[n].selected = a), a && r && (t[n].defaultSelected = !0)
			} else {
				for (n = "" + wt(n), e = null, a = 0; a < t.length; a++) {
					if (t[a].value === n) return t[a].selected = !0, void(r && (t[a].defaultSelected = !0));
					null !== e || t[a].disabled || (e = t[a])
				}
				null !== e && (e.selected = !0)
			}
		}

		function jt(t, e) {
			if (null != e.dangerouslySetInnerHTML) throw Error(o(91));
			return a({}, e, {
				value: void 0,
				defaultValue: void 0,
				children: "" + t._wrapperState.initialValue
			})
		}

		function Dt(t, e) {
			var n = e.value;
			if (null == n) {
				if (n = e.defaultValue, null != (e = e.children)) {
					if (null != n) throw Error(o(92));
					if (Array.isArray(e)) {
						if (!(e.length <= 1)) throw Error(o(93));
						e = e[0]
					}
					n = e
				}
				null == n && (n = "")
			}
			t._wrapperState = {
				initialValue: wt(n)
			}
		}

		function Mt(t, e) {
			var n = wt(e.value),
				r = wt(e.defaultValue);
			null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != r && (t.defaultValue = "" + r)
		}

		function Rt(t) {
			var e = t.textContent;
			e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e)
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (t) {
			var e = t.replace(bt, vt);
			mt[e] = new yt(e, 1, !1, t, null, !1)
		})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (t) {
			var e = t.replace(bt, vt);
			mt[e] = new yt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
		})), ["xml:base", "xml:lang", "xml:space"].forEach((function (t) {
			var e = t.replace(bt, vt);
			mt[e] = new yt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
		})), ["tabIndex", "crossOrigin"].forEach((function (t) {
			mt[t] = new yt(t, 1, !1, t.toLowerCase(), null, !1)
		})), mt.xlinkHref = new yt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (t) {
			mt[t] = new yt(t, 1, !1, t.toLowerCase(), null, !0)
		}));
		var Lt = {
			html: "http://www.w3.org/1999/xhtml",
			mathml: "http://www.w3.org/1998/Math/MathML",
			svg: "http://www.w3.org/2000/svg"
		};

		function qt(t) {
			switch (t) {
				case "svg":
					return "http://www.w3.org/2000/svg";
				case "math":
					return "http://www.w3.org/1998/Math/MathML";
				default:
					return "http://www.w3.org/1999/xhtml"
			}
		}

		function Ft(t, e) {
			return null == t || "http://www.w3.org/1999/xhtml" === t ? qt(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
		}
		var Gt, Bt, zt = (Bt = function (t, e) {
			if (t.namespaceURI !== Lt.svg || "innerHTML" in t) t.innerHTML = e;
			else {
				for ((Gt = Gt || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Gt.firstChild; t.firstChild;) t.removeChild(t.firstChild);
				for (; e.firstChild;) t.appendChild(e.firstChild)
			}
		}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, e, n, r) {
			MSApp.execUnsafeLocalFunction((function () {
				return Bt(t, e)
			}))
		} : Bt);

		function Ut(t, e) {
			if (e) {
				var n = t.firstChild;
				if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
			}
			t.textContent = e
		}

		function Wt(t, e) {
			var n = {};
			return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
		}
		var Ht = {
				animationend: Wt("Animation", "AnimationEnd"),
				animationiteration: Wt("Animation", "AnimationIteration"),
				animationstart: Wt("Animation", "AnimationStart"),
				transitionend: Wt("Transition", "TransitionEnd")
			},
			Vt = {},
			$t = {};

		function Yt(t) {
			if (Vt[t]) return Vt[t];
			if (!Ht[t]) return t;
			var e, n = Ht[t];
			for (e in n)
				if (n.hasOwnProperty(e) && e in $t) return Vt[t] = n[e];
			return t
		}
		Z && ($t = document.createElement("div").style, "AnimationEvent" in window || (delete Ht.animationend.animation, delete Ht.animationiteration.animation, delete Ht.animationstart.animation), "TransitionEvent" in window || delete Ht.transitionend.transition);
		var Kt = Yt("animationend"),
			Xt = Yt("animationiteration"),
			Qt = Yt("animationstart"),
			Zt = Yt("transitionend"),
			Jt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");

		function te(t) {
			var e = t,
				n = t;
			if (t.alternate)
				for (; e.return;) e = e.return;
			else
				for (t = e; 0 != (1026 & (e = t).effectTag) && (n = e.return), t = e.return;);
			return 3 === e.tag ? n : null
		}

		function ee(t) {
			if (13 === t.tag) {
				var e = t.memoizedState;
				if (null === e && null !== (t = t.alternate) && (e = t.memoizedState), null !== e) return e.dehydrated
			}
			return null
		}

		function ne(t) {
			if (te(t) !== t) throw Error(o(188))
		}

		function re(t) {
			if (!(t = function (t) {
					var e = t.alternate;
					if (!e) {
						if (null === (e = te(t))) throw Error(o(188));
						return e !== t ? null : t
					}
					for (var n = t, r = e;;) {
						var a = n.return;
						if (null === a) break;
						var c = a.alternate;
						if (null !== c) {
							if (a.child === c.child) {
								for (c = a.child; c;) {
									if (c === n) return ne(a), t;
									if (c === r) return ne(a), e;
									c = c.sibling
								}
								throw Error(o(188))
							}
							if (n.return !== r.return) n = a, r = c;
							else {
								for (var i = !1, u = a.child; u;) {
									if (u === n) {
										i = !0, n = a, r = c;
										break
									}
									if (u === r) {
										i = !0, r = a, n = c;
										break
									}
									u = u.sibling
								}
								if (!i) {
									for (u = c.child; u;) {
										if (u === n) {
											i = !0, n = c, r = a;
											break
										}
										if (u === r) {
											i = !0, r = c, n = a;
											break
										}
										u = u.sibling
									}
									if (!i) throw Error(o(189))
								}
							}
							if (n.alternate !== r) throw Error(o(190))
						} else {
							if (null === (r = a.return)) break;
							n = r
						}
					}
					if (3 !== n.tag) throw Error(o(188));
					return n.stateNode.current === n ? t : e
				}(t))) return null;
			for (var e = t;;) {
				if (5 === e.tag || 6 === e.tag) return e;
				if (e.child) e = (e.child.return = e).child;
				else {
					if (e === t) break;
					for (; !e.sibling;) {
						if (!e.return || e.return === t) return null;
						e = e.return
					}
					e.sibling.return = e.return, e = e.sibling
				}
			}
			return null
		}
		var ae, ce, oe, ie = !1,
			ue = [],
			se = null,
			le = null,
			ge = null,
			fe = new Map,
			pe = new Map,
			de = [],
			he = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
			ye = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

		function me(t, e, n, r) {
			return {
				blockedOn: t,
				topLevelType: e,
				eventSystemFlags: 32 | n,
				nativeEvent: r
			}
		}

		function be(t, e) {
			switch (t) {
				case "focus":
				case "blur":
					se = null;
					break;
				case "dragenter":
				case "dragleave":
					le = null;
					break;
				case "mouseover":
				case "mouseout":
					ge = null;
					break;
				case "pointerover":
				case "pointerout":
					fe.delete(e.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture":
					pe.delete(e.pointerId)
			}
		}

		function ve(t, e, n, r, a) {
			return null === t || t.nativeEvent !== a ? (t = me(e, n, r, a), null === e || null !== (e = gr(e)) && ce(e)) : t.eventSystemFlags |= r, t
		}

		function we(t) {
			var e = lr(t.target);
			if (null !== e) {
				var n = te(e);
				if (null !== n)
					if (13 === (e = n.tag)) {
						if (null !== (e = ee(n))) return t.blockedOn = e, void c.unstable_runWithPriority(t.priority, (function () {
							oe(n)
						}))
					} else if (3 === e && n.stateNode.hydrate) return void(t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
			}
			t.blockedOn = null
		}

		function Oe(t) {
			if (null !== t.blockedOn) return !1;
			var e = _n(t.topLevelType, t.eventSystemFlags, t.nativeEvent);
			if (null === e) return !0;
			var n = gr(e);
			return null !== n && ce(n), t.blockedOn = e, !1
		}

		function Ee(t, e, n) {
			Oe(t) && n.delete(e)
		}

		function Te() {
			for (ie = !1; 0 < ue.length;) {
				var t = ue[0];
				if (null !== t.blockedOn) {
					null !== (t = gr(t.blockedOn)) && ae(t);
					break
				}
				var e = _n(t.topLevelType, t.eventSystemFlags, t.nativeEvent);
				null !== e ? t.blockedOn = e : ue.shift()
			}
			null !== se && Oe(se) && (se = null), null !== le && Oe(le) && (le = null), null !== ge && Oe(ge) && (ge = null), fe.forEach(Ee), pe.forEach(Ee)
		}

		function Se(t, e) {
			t.blockedOn === e && (t.blockedOn = null, ie || (ie = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Te)))
		}

		function Ce(t) {
			function e(e) {
				return Se(e, t)
			}
			if (0 < ue.length) {
				Se(ue[0], t);
				for (var n = 1; n < ue.length; n++) {
					var r = ue[n];
					r.blockedOn === t && (r.blockedOn = null)
				}
			}
			for (null !== se && Se(se, t), null !== le && Se(le, t), null !== ge && Se(ge, t), fe.forEach(e), pe.forEach(e), n = 0; n < de.length; n++)(r = de[n]).blockedOn === t && (r.blockedOn = null);
			for (; 0 < de.length && null === (n = de[0]).blockedOn;) we(n), null === n.blockedOn && de.shift()
		}

		function xe(t) {
			return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
		}

		function Ne(t) {
			for (;
				(t = t.return) && 5 !== t.tag;);
			return t || null
		}

		function Pe(t, e, n) {
			(e = k(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = C(n._dispatchListeners, e), n._dispatchInstances = C(n._dispatchInstances, t))
		}

		function _e(t) {
			if (t && t.dispatchConfig.phasedRegistrationNames) {
				for (var e = t._targetInst, n = []; e;) n.push(e), e = Ne(e);
				for (e = n.length; 0 < e--;) Pe(n[e], "captured", t);
				for (e = 0; e < n.length; e++) Pe(n[e], "bubbled", t)
			}
		}

		function Ae(t, e, n) {
			t && n && n.dispatchConfig.registrationName && (e = k(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = C(n._dispatchListeners, e), n._dispatchInstances = C(n._dispatchInstances, t))
		}

		function ke(t) {
			t && t.dispatchConfig.registrationName && Ae(t._targetInst, null, t)
		}

		function Ie(t) {
			x(t, _e)
		}

		function je() {
			return !0
		}

		function De() {
			return !1
		}

		function Me(t, e, n, r) {
			for (var a in this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface) t.hasOwnProperty(a) && ((e = t[a]) ? this[a] = e(n) : "target" === a ? this.target = r : this[a] = n[a]);
			return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? je : De, this.isPropagationStopped = De, this
		}

		function Re(t, e, n, r) {
			if (this.eventPool.length) {
				var a = this.eventPool.pop();
				return this.call(a, t, e, n, r), a
			}
			return new this(t, e, n, r)
		}

		function Le(t) {
			if (!(t instanceof this)) throw Error(o(279));
			t.destructor(), this.eventPool.length < 10 && this.eventPool.push(t)
		}

		function qe(t) {
			t.eventPool = [], t.getPooled = Re, t.release = Le
		}
		a(Me.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var t = this.nativeEvent;
				t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = je)
			},
			stopPropagation: function () {
				var t = this.nativeEvent;
				t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = je)
			},
			persist: function () {
				this.isPersistent = je
			},
			isPersistent: De,
			destructor: function () {
				var t, e = this.constructor.Interface;
				for (t in e) this[t] = null;
				this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = De, this._dispatchInstances = this._dispatchListeners = null
			}
		}), Me.Interface = {
			type: null,
			target: null,
			currentTarget: function () {
				return null
			},
			eventPhase: null,
			bubbles: null,
			cancelable: null,
			timeStamp: function (t) {
				return t.timeStamp || Date.now()
			},
			defaultPrevented: null,
			isTrusted: null
		}, Me.extend = function (t) {
			function e() {}

			function n() {
				return r.apply(this, arguments)
			}
			var r = this;
			e.prototype = r.prototype;
			var c = new e;
			return a(c, n.prototype), ((n.prototype = c).constructor = n).Interface = a({}, r.Interface, t), n.extend = r.extend, qe(n), n
		}, qe(Me);
		var Fe = Me.extend({
				animationName: null,
				elapsedTime: null,
				pseudoElement: null
			}),
			Ge = Me.extend({
				clipboardData: function (t) {
					return "clipboardData" in t ? t.clipboardData : window.clipboardData
				}
			}),
			Be = Me.extend({
				view: null,
				detail: null
			}),
			ze = Be.extend({
				relatedTarget: null
			});

		function Ue(t) {
			var e = t.keyCode;
			return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
		}
		var We = {
				Esc: "Escape",
				Spacebar: " ",
				Left: "ArrowLeft",
				Up: "ArrowUp",
				Right: "ArrowRight",
				Down: "ArrowDown",
				Del: "Delete",
				Win: "OS",
				Menu: "ContextMenu",
				Apps: "ContextMenu",
				Scroll: "ScrollLock",
				MozPrintableKey: "Unidentified"
			},
			He = {
				8: "Backspace",
				9: "Tab",
				12: "Clear",
				13: "Enter",
				16: "Shift",
				17: "Control",
				18: "Alt",
				19: "Pause",
				20: "CapsLock",
				27: "Escape",
				32: " ",
				33: "PageUp",
				34: "PageDown",
				35: "End",
				36: "Home",
				37: "ArrowLeft",
				38: "ArrowUp",
				39: "ArrowRight",
				40: "ArrowDown",
				45: "Insert",
				46: "Delete",
				112: "F1",
				113: "F2",
				114: "F3",
				115: "F4",
				116: "F5",
				117: "F6",
				118: "F7",
				119: "F8",
				120: "F9",
				121: "F10",
				122: "F11",
				123: "F12",
				144: "NumLock",
				145: "ScrollLock",
				224: "Meta"
			},
			Ve = {
				Alt: "altKey",
				Control: "ctrlKey",
				Meta: "metaKey",
				Shift: "shiftKey"
			};

		function $e(t) {
			var e = this.nativeEvent;
			return e.getModifierState ? e.getModifierState(t) : !!(t = Ve[t]) && !!e[t]
		}

		function Ye() {
			return $e
		}
		for (var Ke = Be.extend({
				key: function (t) {
					if (t.key) {
						var e = We[t.key] || t.key;
						if ("Unidentified" !== e) return e
					}
					return "keypress" === t.type ? 13 === (t = Ue(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? He[t.keyCode] || "Unidentified" : ""
				},
				location: null,
				ctrlKey: null,
				shiftKey: null,
				altKey: null,
				metaKey: null,
				repeat: null,
				locale: null,
				getModifierState: Ye,
				charCode: function (t) {
					return "keypress" === t.type ? Ue(t) : 0
				},
				keyCode: function (t) {
					return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
				},
				which: function (t) {
					return "keypress" === t.type ? Ue(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
				}
			}), Xe = 0, Qe = 0, Ze = !1, Je = !1, tn = Be.extend({
				screenX: null,
				screenY: null,
				clientX: null,
				clientY: null,
				pageX: null,
				pageY: null,
				ctrlKey: null,
				shiftKey: null,
				altKey: null,
				metaKey: null,
				getModifierState: Ye,
				button: null,
				buttons: null,
				relatedTarget: function (t) {
					return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
				},
				movementX: function (t) {
					if ("movementX" in t) return t.movementX;
					var e = Xe;
					return Xe = t.screenX, Ze ? "mousemove" === t.type ? t.screenX - e : 0 : (Ze = !0, 0)
				},
				movementY: function (t) {
					if ("movementY" in t) return t.movementY;
					var e = Qe;
					return Qe = t.screenY, Je ? "mousemove" === t.type ? t.screenY - e : 0 : (Je = !0, 0)
				}
			}), en = tn.extend({
				pointerId: null,
				width: null,
				height: null,
				pressure: null,
				tangentialPressure: null,
				tiltX: null,
				tiltY: null,
				twist: null,
				pointerType: null,
				isPrimary: null
			}), nn = tn.extend({
				dataTransfer: null
			}), rn = Be.extend({
				touches: null,
				targetTouches: null,
				changedTouches: null,
				altKey: null,
				metaKey: null,
				ctrlKey: null,
				shiftKey: null,
				getModifierState: Ye
			}), an = Me.extend({
				propertyName: null,
				elapsedTime: null,
				pseudoElement: null
			}), cn = tn.extend({
				deltaX: function (t) {
					return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
				},
				deltaY: function (t) {
					return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
				},
				deltaZ: null,
				deltaMode: null
			}), on = [
				["blur", "blur", 0],
				["cancel", "cancel", 0],
				["click", "click", 0],
				["close", "close", 0],
				["contextmenu", "contextMenu", 0],
				["copy", "copy", 0],
				["cut", "cut", 0],
				["auxclick", "auxClick", 0],
				["dblclick", "doubleClick", 0],
				["dragend", "dragEnd", 0],
				["dragstart", "dragStart", 0],
				["drop", "drop", 0],
				["focus", "focus", 0],
				["input", "input", 0],
				["invalid", "invalid", 0],
				["keydown", "keyDown", 0],
				["keypress", "keyPress", 0],
				["keyup", "keyUp", 0],
				["mousedown", "mouseDown", 0],
				["mouseup", "mouseUp", 0],
				["paste", "paste", 0],
				["pause", "pause", 0],
				["play", "play", 0],
				["pointercancel", "pointerCancel", 0],
				["pointerdown", "pointerDown", 0],
				["pointerup", "pointerUp", 0],
				["ratechange", "rateChange", 0],
				["reset", "reset", 0],
				["seeked", "seeked", 0],
				["submit", "submit", 0],
				["touchcancel", "touchCancel", 0],
				["touchend", "touchEnd", 0],
				["touchstart", "touchStart", 0],
				["volumechange", "volumeChange", 0],
				["drag", "drag", 1],
				["dragenter", "dragEnter", 1],
				["dragexit", "dragExit", 1],
				["dragleave", "dragLeave", 1],
				["dragover", "dragOver", 1],
				["mousemove", "mouseMove", 1],
				["mouseout", "mouseOut", 1],
				["mouseover", "mouseOver", 1],
				["pointermove", "pointerMove", 1],
				["pointerout", "pointerOut", 1],
				["pointerover", "pointerOver", 1],
				["scroll", "scroll", 1],
				["toggle", "toggle", 1],
				["touchmove", "touchMove", 1],
				["wheel", "wheel", 1],
				["abort", "abort", 2],
				[Kt, "animationEnd", 2],
				[Xt, "animationIteration", 2],
				[Qt, "animationStart", 2],
				["canplay", "canPlay", 2],
				["canplaythrough", "canPlayThrough", 2],
				["durationchange", "durationChange", 2],
				["emptied", "emptied", 2],
				["encrypted", "encrypted", 2],
				["ended", "ended", 2],
				["error", "error", 2],
				["gotpointercapture", "gotPointerCapture", 2],
				["load", "load", 2],
				["loadeddata", "loadedData", 2],
				["loadedmetadata", "loadedMetadata", 2],
				["loadstart", "loadStart", 2],
				["lostpointercapture", "lostPointerCapture", 2],
				["playing", "playing", 2],
				["progress", "progress", 2],
				["seeking", "seeking", 2],
				["stalled", "stalled", 2],
				["suspend", "suspend", 2],
				["timeupdate", "timeUpdate", 2],
				[Zt, "transitionEnd", 2],
				["waiting", "waiting", 2]
			], un = {}, sn = {}, ln = 0; ln < on.length; ln++) {
			var gn = on[ln],
				fn = gn[0],
				pn = gn[1],
				dn = gn[2],
				hn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
				yn = {
					phasedRegistrationNames: {
						bubbled: hn,
						captured: hn + "Capture"
					},
					dependencies: [fn],
					eventPriority: dn
				};
			un[pn] = yn, sn[fn] = yn
		}
		var mn = {
				eventTypes: un,
				getEventPriority: function (t) {
					return void 0 !== (t = sn[t]) ? t.eventPriority : 2
				},
				extractEvents: function (t, e, n, r) {
					var a = sn[t];
					if (!a) return null;
					switch (t) {
						case "keypress":
							if (0 === Ue(n)) return null;
						case "keydown":
						case "keyup":
							t = Ke;
							break;
						case "blur":
						case "focus":
							t = ze;
							break;
						case "click":
							if (2 === n.button) return null;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							t = tn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							t = nn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							t = rn;
							break;
						case Kt:
						case Xt:
						case Qt:
							t = Fe;
							break;
						case Zt:
							t = an;
							break;
						case "scroll":
							t = Be;
							break;
						case "wheel":
							t = cn;
							break;
						case "copy":
						case "cut":
						case "paste":
							t = Ge;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							t = en;
							break;
						default:
							t = Me
					}
					return Ie(e = t.getPooled(a, e, n, r)), e
				}
			},
			bn = c.unstable_UserBlockingPriority,
			vn = c.unstable_runWithPriority,
			wn = mn.getEventPriority,
			On = 10,
			En = [];

		function Tn(t) {
			var e = t.targetInst,
				n = e;
			do {
				if (!n) {
					t.ancestors.push(n);
					break
				}
				var r = n;
				if (3 === r.tag) r = r.stateNode.containerInfo;
				else {
					for (; r.return;) r = r.return;
					r = 3 !== r.tag ? null : r.stateNode.containerInfo
				}
				if (!r) break;
				5 !== (e = n.tag) && 6 !== e || t.ancestors.push(n), n = lr(r)
			} while (n);
			for (n = 0; n < t.ancestors.length; n++) {
				e = t.ancestors[n];
				var a = xe(t.nativeEvent);
				r = t.topLevelType;
				for (var c = t.nativeEvent, o = t.eventSystemFlags, i = null, u = 0; u < g.length; u++) {
					var s = g[u];
					(s = s && s.extractEvents(r, e, c, a, o)) && (i = C(i, s))
				}
				_(i)
			}
		}
		var Sn = !0;

		function Cn(t, e) {
			xn(e, t, !1)
		}

		function xn(t, e, n) {
			switch (wn(e)) {
				case 0:
					var r = function (t, e, n) {
						st || it();
						var r = Pn,
							a = st;
						st = !0;
						try {
							ot(r, t, e, n)
						} finally {
							(st = a) || gt()
						}
					}.bind(null, e, 1);
					break;
				case 1:
					r = function (t, e, n) {
						vn(bn, Pn.bind(null, t, e, n))
					}.bind(null, e, 1);
					break;
				default:
					r = Pn.bind(null, e, 1)
			}
			n ? t.addEventListener(e, r, !0) : t.addEventListener(e, r, !1)
		}

		function Nn(t, e, n, r) {
			if (En.length) {
				var a = En.pop();
				a.topLevelType = t, a.eventSystemFlags = e, a.nativeEvent = n, a.targetInst = r, t = a
			} else t = {
				topLevelType: t,
				eventSystemFlags: e,
				nativeEvent: n,
				targetInst: r,
				ancestors: []
			};
			try {
				if (e = Tn, n = t, lt) e(n, void 0);
				else {
					lt = !0;
					try {
						ut(e, n, void 0)
					} finally {
						lt = !1, gt()
					}
				}
			} finally {
				t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, En.length < On && En.push(t)
			}
		}

		function Pn(t, e, n) {
			if (Sn)
				if (0 < ue.length && -1 < he.indexOf(t)) t = me(null, t, e, n), ue.push(t);
				else {
					var r = _n(t, e, n);
					null === r ? be(t, n) : -1 < he.indexOf(t) ? (t = me(r, t, e, n), ue.push(t)) : function (t, e, n, r) {
						switch (e) {
							case "focus":
								return se = ve(se, t, e, n, r), !0;
							case "dragenter":
								return le = ve(le, t, e, n, r), !0;
							case "mouseover":
								return ge = ve(ge, t, e, n, r), !0;
							case "pointerover":
								var a = r.pointerId;
								return fe.set(a, ve(fe.get(a) || null, t, e, n, r)), !0;
							case "gotpointercapture":
								return a = r.pointerId, pe.set(a, ve(pe.get(a) || null, t, e, n, r)), !0
						}
						return !1
					}(r, t, e, n) || (be(t, n), Nn(t, e, n, null))
				}
		}

		function _n(t, e, n) {
			var r = xe(n);
			if (null !== (r = lr(r))) {
				var a = te(r);
				if (null === a) r = null;
				else {
					var c = a.tag;
					if (13 === c) {
						if (null !== (r = ee(a))) return r;
						r = null
					} else if (3 === c) {
						if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
						r = null
					} else a !== r && (r = null)
				}
			}
			return Nn(t, e, n, r), null
		}

		function An(t) {
			if (!Z) return !1;
			var e = (t = "on" + t) in document;
			return e || ((e = document.createElement("div")).setAttribute(t, "return;"), e = "function" == typeof e[t]), e
		}
		var kn = new("function" == typeof WeakMap ? WeakMap : Map);

		function In(t) {
			var e = kn.get(t);
			return void 0 === e && (e = new Set, kn.set(t, e)), e
		}

		function jn(t, e, n) {
			if (!n.has(t)) {
				switch (t) {
					case "scroll":
						xn(e, "scroll", !0);
						break;
					case "focus":
					case "blur":
						xn(e, "focus", !0), xn(e, "blur", !0), n.add("blur"), n.add("focus");
						break;
					case "cancel":
					case "close":
						An(t) && xn(e, t, !0);
						break;
					case "invalid":
					case "submit":
					case "reset":
						break;
					default:
						-1 === Jt.indexOf(t) && Cn(t, e)
				}
				n.add(t)
			}
		}
		var Dn = {
				animationIterationCount: !0,
				borderImageOutset: !0,
				borderImageSlice: !0,
				borderImageWidth: !0,
				boxFlex: !0,
				boxFlexGroup: !0,
				boxOrdinalGroup: !0,
				columnCount: !0,
				columns: !0,
				flex: !0,
				flexGrow: !0,
				flexPositive: !0,
				flexShrink: !0,
				flexNegative: !0,
				flexOrder: !0,
				gridArea: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowSpan: !0,
				gridRowStart: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnSpan: !0,
				gridColumnStart: !0,
				fontWeight: !0,
				lineClamp: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				tabSize: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
				fillOpacity: !0,
				floodOpacity: !0,
				stopOpacity: !0,
				strokeDasharray: !0,
				strokeDashoffset: !0,
				strokeMiterlimit: !0,
				strokeOpacity: !0,
				strokeWidth: !0
			},
			Mn = ["Webkit", "ms", "Moz", "O"];

		function Rn(t, e, n) {
			return null == e || "boolean" == typeof e || "" === e ? "" : n || "number" != typeof e || 0 === e || Dn.hasOwnProperty(t) && Dn[t] ? ("" + e).trim() : e + "px"
		}

		function Ln(t, e) {
			for (var n in t = t.style, e)
				if (e.hasOwnProperty(n)) {
					var r = 0 === n.indexOf("--"),
						a = Rn(n, e[n], r);
					"float" === n && (n = "cssFloat"), r ? t.setProperty(n, a) : t[n] = a
				}
		}
		Object.keys(Dn).forEach((function (t) {
			Mn.forEach((function (e) {
				e = e + t.charAt(0).toUpperCase() + t.substring(1), Dn[e] = Dn[t]
			}))
		}));
		var qn = a({
			menuitem: !0
		}, {
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0
		});

		function Fn(t, e) {
			if (e) {
				if (qn[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(o(137, t, ""));
				if (null != e.dangerouslySetInnerHTML) {
					if (null != e.children) throw Error(o(60));
					if (!("object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML)) throw Error(o(61))
				}
				if (null != e.style && "object" != typeof e.style) throw Error(o(62, ""))
			}
		}

		function Gn(t, e) {
			if (-1 === t.indexOf("-")) return "string" == typeof e.is;
			switch (t) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					return !1;
				default:
					return !0
			}
		}

		function Bn(t, e) {
			var n = In(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
			e = d[e];
			for (var r = 0; r < e.length; r++) jn(e[r], t, n)
		}

		function zn() {}

		function Un(t) {
			if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
			try {
				return t.activeElement || t.body
			} catch (e) {
				return t.body
			}
		}

		function Wn(t) {
			for (; t && t.firstChild;) t = t.firstChild;
			return t
		}

		function Hn(t, e) {
			var n, r = Wn(t);
			for (t = 0; r;) {
				if (3 === r.nodeType) {
					if (n = t + r.textContent.length, t <= e && e <= n) return {
						node: r,
						offset: e - t
					};
					t = n
				}
				t: {
					for (; r;) {
						if (r.nextSibling) {
							r = r.nextSibling;
							break t
						}
						r = r.parentNode
					}
					r = void 0
				}
				r = Wn(r)
			}
		}

		function Vn() {
			for (var t = window, e = Un(); e instanceof t.HTMLIFrameElement;) {
				try {
					var n = "string" == typeof e.contentWindow.location.href
				} catch (t) {
					n = !1
				}
				if (!n) break;
				e = Un((t = e.contentWindow).document)
			}
			return e
		}

		function $n(t) {
			var e = t && t.nodeName && t.nodeName.toLowerCase();
			return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
		}
		var Yn = "$",
			Kn = "/$",
			Xn = "$?",
			Qn = "$!",
			Zn = null,
			Jn = null;

		function tr(t, e) {
			switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					return !!e.autoFocus
			}
			return !1
		}

		function er(t, e) {
			return "textarea" === t || "option" === t || "noscript" === t || "string" == typeof e.children || "number" == typeof e.children || "object" == typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
		}
		var nr = "function" == typeof setTimeout ? setTimeout : void 0,
			rr = "function" == typeof clearTimeout ? clearTimeout : void 0;

		function ar(t) {
			for (; null != t; t = t.nextSibling) {
				var e = t.nodeType;
				if (1 === e || 3 === e) break
			}
			return t
		}

		function cr(t) {
			t = t.previousSibling;
			for (var e = 0; t;) {
				if (8 === t.nodeType) {
					var n = t.data;
					if (n === Yn || n === Qn || n === Xn) {
						if (0 === e) return t;
						e--
					} else n === Kn && e++
				}
				t = t.previousSibling
			}
			return null
		}
		var or = Math.random().toString(36).slice(2),
			ir = "__reactInternalInstance$" + or,
			ur = "__reactEventHandlers$" + or,
			sr = "__reactContainere$" + or;

		function lr(t) {
			var e = t[ir];
			if (e) return e;
			for (var n = t.parentNode; n;) {
				if (e = n[sr] || n[ir]) {
					if (n = e.alternate, null !== e.child || null !== n && null !== n.child)
						for (t = cr(t); null !== t;) {
							if (n = t[ir]) return n;
							t = cr(t)
						}
					return e
				}
				n = (t = n).parentNode
			}
			return null
		}

		function gr(t) {
			return !(t = t[ir] || t[sr]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
		}

		function fr(t) {
			if (5 === t.tag || 6 === t.tag) return t.stateNode;
			throw Error(o(33))
		}

		function pr(t) {
			return t[ur] || null
		}
		var dr = null,
			hr = null,
			yr = null;

		function mr() {
			if (yr) return yr;
			var t, e, n = hr,
				r = n.length,
				a = "value" in dr ? dr.value : dr.textContent,
				c = a.length;
			for (t = 0; t < r && n[t] === a[t]; t++);
			var o = r - t;
			for (e = 1; e <= o && n[r - e] === a[c - e]; e++);
			return yr = a.slice(t, 1 < e ? 1 - e : void 0)
		}
		var br = Me.extend({
				data: null
			}),
			vr = Me.extend({
				data: null
			}),
			wr = [9, 13, 27, 32],
			Or = Z && "CompositionEvent" in window,
			Er = null;
		Z && "documentMode" in document && (Er = document.documentMode);
		var Tr = Z && "TextEvent" in window && !Er,
			Sr = Z && (!Or || Er && 8 < Er && Er <= 11),
			Cr = String.fromCharCode(32),
			xr = {
				beforeInput: {
					phasedRegistrationNames: {
						bubbled: "onBeforeInput",
						captured: "onBeforeInputCapture"
					},
					dependencies: ["compositionend", "keypress", "textInput", "paste"]
				},
				compositionEnd: {
					phasedRegistrationNames: {
						bubbled: "onCompositionEnd",
						captured: "onCompositionEndCapture"
					},
					dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
				},
				compositionStart: {
					phasedRegistrationNames: {
						bubbled: "onCompositionStart",
						captured: "onCompositionStartCapture"
					},
					dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
				},
				compositionUpdate: {
					phasedRegistrationNames: {
						bubbled: "onCompositionUpdate",
						captured: "onCompositionUpdateCapture"
					},
					dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
				}
			},
			Nr = !1;

		function Pr(t, e) {
			switch (t) {
				case "keyup":
					return -1 !== wr.indexOf(e.keyCode);
				case "keydown":
					return 229 !== e.keyCode;
				case "keypress":
				case "mousedown":
				case "blur":
					return !0;
				default:
					return !1
			}
		}

		function _r(t) {
			return "object" == typeof (t = t.detail) && "data" in t ? t.data : null
		}
		var Ar = !1,
			kr = {
				eventTypes: xr,
				extractEvents: function (t, e, n, r) {
					var a;
					if (Or) t: {
						switch (t) {
							case "compositionstart":
								var c = xr.compositionStart;
								break t;
							case "compositionend":
								c = xr.compositionEnd;
								break t;
							case "compositionupdate":
								c = xr.compositionUpdate;
								break t
						}
						c = void 0
					}
					else Ar ? Pr(t, n) && (c = xr.compositionEnd) : "keydown" === t && 229 === n.keyCode && (c = xr.compositionStart);
					return a = c ? (Sr && "ko" !== n.locale && (Ar || c !== xr.compositionStart ? c === xr.compositionEnd && Ar && (a = mr()) : (hr = "value" in (dr = r) ? dr.value : dr.textContent, Ar = !0)), c = br.getPooled(c, e, n, r), a ? c.data = a : null !== (a = _r(n)) && (c.data = a), Ie(c), c) : null, (t = Tr ? function (t, e) {
						switch (t) {
							case "compositionend":
								return _r(e);
							case "keypress":
								return 32 !== e.which ? null : (Nr = !0, Cr);
							case "textInput":
								return (t = e.data) === Cr && Nr ? null : t;
							default:
								return null
						}
					}(t, n) : function (t, e) {
						if (Ar) return "compositionend" === t || !Or && Pr(t, e) ? (t = mr(), yr = hr = dr = null, Ar = !1, t) : null;
						switch (t) {
							case "paste":
								return null;
							case "keypress":
								if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
									if (e.char && 1 < e.char.length) return e.char;
									if (e.which) return String.fromCharCode(e.which)
								}
								return null;
							case "compositionend":
								return Sr && "ko" !== e.locale ? null : e.data;
							default:
								return null
						}
					}(t, n)) ? ((e = vr.getPooled(xr.beforeInput, e, n, r)).data = t, Ie(e)) : e = null, null === a ? e : null === e ? a : [a, e]
				}
			},
			Ir = {
				color: !0,
				date: !0,
				datetime: !0,
				"datetime-local": !0,
				email: !0,
				month: !0,
				number: !0,
				password: !0,
				range: !0,
				search: !0,
				tel: !0,
				text: !0,
				time: !0,
				url: !0,
				week: !0
			};

		function jr(t) {
			var e = t && t.nodeName && t.nodeName.toLowerCase();
			return "input" === e ? !!Ir[t.type] : "textarea" === e
		}
		var Dr = {
			change: {
				phasedRegistrationNames: {
					bubbled: "onChange",
					captured: "onChangeCapture"
				},
				dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
			}
		};

		function Mr(t, e, n) {
			return (t = Me.getPooled(Dr.change, t, e, n)).type = "change", rt(n), Ie(t), t
		}
		var Rr = null,
			Lr = null;

		function qr(t) {
			_(t)
		}

		function Fr(t) {
			if (St(fr(t))) return t
		}

		function Gr(t, e) {
			if ("change" === t) return e
		}
		var Br = !1;

		function zr() {
			Rr && (Rr.detachEvent("onpropertychange", Ur), Lr = Rr = null)
		}

		function Ur(t) {
			if ("value" === t.propertyName && Fr(Lr))
				if (t = Mr(Lr, t, xe(t)), st) _(t);
				else {
					st = !0;
					try {
						ct(qr, t)
					} finally {
						st = !1, gt()
					}
				}
		}

		function Wr(t, e, n) {
			"focus" === t ? (zr(), Lr = n, (Rr = e).attachEvent("onpropertychange", Ur)) : "blur" === t && zr()
		}

		function Hr(t) {
			if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Fr(Lr)
		}

		function Vr(t, e) {
			if ("click" === t) return Fr(e)
		}

		function $r(t, e) {
			if ("input" === t || "change" === t) return Fr(e)
		}
		Z && (Br = An("input") && (!document.documentMode || 9 < document.documentMode));
		var Yr, Kr = {
				eventTypes: Dr,
				_isInputEventSupported: Br,
				extractEvents: function (t, e, n, r) {
					var a = e ? fr(e) : window,
						c = a.nodeName && a.nodeName.toLowerCase();
					if ("select" === c || "input" === c && "file" === a.type) var o = Gr;
					else if (jr(a))
						if (Br) o = $r;
						else {
							o = Hr;
							var i = Wr
						}
					else !(c = a.nodeName) || "input" !== c.toLowerCase() || "checkbox" !== a.type && "radio" !== a.type || (o = Vr);
					if (o = o && o(t, e)) return Mr(o, n, r);
					i && i(t, a, e), "blur" === t && (t = a._wrapperState) && t.controlled && "number" === a.type && At(a, "number", a.value)
				}
			},
			Xr = {
				mouseEnter: {
					registrationName: "onMouseEnter",
					dependencies: ["mouseout", "mouseover"]
				},
				mouseLeave: {
					registrationName: "onMouseLeave",
					dependencies: ["mouseout", "mouseover"]
				},
				pointerEnter: {
					registrationName: "onPointerEnter",
					dependencies: ["pointerout", "pointerover"]
				},
				pointerLeave: {
					registrationName: "onPointerLeave",
					dependencies: ["pointerout", "pointerover"]
				}
			},
			Qr = {
				eventTypes: Xr,
				extractEvents: function (t, e, n, r, a) {
					var c = "mouseover" === t || "pointerover" === t,
						o = "mouseout" === t || "pointerout" === t;
					if (c && 0 == (32 & a) && (n.relatedTarget || n.fromElement) || !o && !c) return null;
					if (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, o ? (o = e, null !== (e = (e = n.relatedTarget || n.toElement) ? lr(e) : null) && (e !== (c = te(e)) || 5 !== e.tag && 6 !== e.tag) && (e = null)) : o = null, o === e) return null;
					if ("mouseout" === t || "mouseover" === t) var i = tn,
						u = Xr.mouseLeave,
						s = Xr.mouseEnter,
						l = "mouse";
					else "pointerout" !== t && "pointerover" !== t || (i = en, u = Xr.pointerLeave, s = Xr.pointerEnter, l = "pointer");
					if (t = null == o ? a : fr(o), a = null == e ? a : fr(e), (u = i.getPooled(u, o, n, r)).type = l + "leave", u.target = t, u.relatedTarget = a, (r = i.getPooled(s, e, n, r)).type = l + "enter", r.target = a, r.relatedTarget = t, l = e, (i = o) && l) t: {
						for (t = l, o = 0, e = s = i; e; e = Ne(e)) o++;
						for (e = 0, a = t; a; a = Ne(a)) e++;
						for (; 0 < o - e;) s = Ne(s),
						o--;
						for (; 0 < e - o;) t = Ne(t),
						e--;
						for (; o--;) {
							if (s === t || s === t.alternate) break t;
							s = Ne(s), t = Ne(t)
						}
						s = null
					}
					else s = null;
					for (t = s, s = []; i && i !== t && (null === (o = i.alternate) || o !== t);) s.push(i), i = Ne(i);
					for (i = []; l && l !== t && (null === (o = l.alternate) || o !== t);) i.push(l), l = Ne(l);
					for (l = 0; l < s.length; l++) Ae(s[l], "bubbled", u);
					for (l = i.length; 0 < l--;) Ae(i[l], "captured", r);
					return n === Yr ? (Yr = null, [u]) : (Yr = n, [u, r])
				}
			},
			Zr = "function" == typeof Object.is ? Object.is : function (t, e) {
				return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
			},
			Jr = Object.prototype.hasOwnProperty;

		function ta(t, e) {
			if (Zr(t, e)) return !0;
			if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
			var n = Object.keys(t),
				r = Object.keys(e);
			if (n.length !== r.length) return !1;
			for (r = 0; r < n.length; r++)
				if (!Jr.call(e, n[r]) || !Zr(t[n[r]], e[n[r]])) return !1;
			return !0
		}
		var ea = Z && "documentMode" in document && document.documentMode <= 11,
			na = {
				select: {
					phasedRegistrationNames: {
						bubbled: "onSelect",
						captured: "onSelectCapture"
					},
					dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
				}
			},
			ra = null,
			aa = null,
			ca = null,
			oa = !1;

		function ia(t, e) {
			var n = e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
			return oa || null == ra || ra !== Un(n) ? null : (n = "selectionStart" in (n = ra) && $n(n) ? {
				start: n.selectionStart,
				end: n.selectionEnd
			} : {
				anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
				anchorOffset: n.anchorOffset,
				focusNode: n.focusNode,
				focusOffset: n.focusOffset
			}, ca && ta(ca, n) ? null : (ca = n, (t = Me.getPooled(na.select, aa, t, e)).type = "select", t.target = ra, Ie(t), t))
		}
		var ua = {
			eventTypes: na,
			extractEvents: function (t, e, n, r) {
				var a, c = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
				if (!(a = !c)) {
					t: {
						c = In(c),
						a = d.onSelect;
						for (var o = 0; o < a.length; o++)
							if (!c.has(a[o])) {
								c = !1;
								break t
							}
						c = !0
					}
					a = !c
				}
				if (a) return null;
				switch (c = e ? fr(e) : window, t) {
					case "focus":
						!jr(c) && "true" !== c.contentEditable || (ra = c, aa = e, ca = null);
						break;
					case "blur":
						ca = aa = ra = null;
						break;
					case "mousedown":
						oa = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						return oa = !1, ia(n, r);
					case "selectionchange":
						if (ea) break;
					case "keydown":
					case "keyup":
						return ia(n, r)
				}
				return null
			}
		};
		A.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), O = pr, E = gr, T = fr, A.injectEventPluginsByName({
			SimpleEventPlugin: mn,
			EnterLeaveEventPlugin: Qr,
			ChangeEventPlugin: Kr,
			SelectEventPlugin: ua,
			BeforeInputEventPlugin: kr
		}), new Set;
		var sa = [],
			la = -1;

		function ga(t) {
			la < 0 || (t.current = sa[la], sa[la] = null, la--)
		}

		function fa(t, e) {
			sa[++la] = t.current, t.current = e
		}
		var pa = {},
			da = {
				current: pa
			},
			ha = {
				current: !1
			},
			ya = pa;

		function ma(t, e) {
			var n = t.type.contextTypes;
			if (!n) return pa;
			var r = t.stateNode;
			if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
			var a, c = {};
			for (a in n) c[a] = e[a];
			return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = c), c
		}

		function ba(t) {
			return null != t.childContextTypes
		}

		function va() {
			ga(ha), ga(da)
		}

		function wa() {
			ga(ha), ga(da)
		}

		function Oa(t, e, n) {
			if (da.current !== pa) throw Error(o(168));
			fa(da, e), fa(ha, n)
		}

		function Ea(t, e, n) {
			var r = t.stateNode;
			if (t = e.childContextTypes, "function" != typeof r.getChildContext) return n;
			for (var c in r = r.getChildContext())
				if (!(c in t)) throw Error(o(108, X(e) || "Unknown", c));
			return a({}, n, {}, r)
		}

		function Ta(t) {
			var e = t.stateNode;
			return e = e && e.__reactInternalMemoizedMergedChildContext || pa, ya = da.current, fa(da, e), fa(ha, ha.current), !0
		}

		function Sa(t, e, n) {
			var r = t.stateNode;
			if (!r) throw Error(o(169));
			n ? (e = Ea(t, e, ya), r.__reactInternalMemoizedMergedChildContext = e, ga(ha), ga(da), fa(da, e)) : ga(ha), fa(ha, n)
		}
		var Ca = c.unstable_runWithPriority,
			xa = c.unstable_scheduleCallback,
			Na = c.unstable_cancelCallback,
			Pa = c.unstable_shouldYield,
			_a = c.unstable_requestPaint,
			Aa = c.unstable_now,
			ka = c.unstable_getCurrentPriorityLevel,
			Ia = c.unstable_ImmediatePriority,
			ja = c.unstable_UserBlockingPriority,
			Da = c.unstable_NormalPriority,
			Ma = c.unstable_LowPriority,
			Ra = c.unstable_IdlePriority,
			La = {},
			qa = void 0 !== _a ? _a : function () {},
			Fa = null,
			Ga = null,
			Ba = !1,
			za = Aa(),
			Ua = za < 1e4 ? Aa : function () {
				return Aa() - za
			};

		function Wa() {
			switch (ka()) {
				case Ia:
					return 99;
				case ja:
					return 98;
				case Da:
					return 97;
				case Ma:
					return 96;
				case Ra:
					return 95;
				default:
					throw Error(o(332))
			}
		}

		function Ha(t) {
			switch (t) {
				case 99:
					return Ia;
				case 98:
					return ja;
				case 97:
					return Da;
				case 96:
					return Ma;
				case 95:
					return Ra;
				default:
					throw Error(o(332))
			}
		}

		function Va(t, e) {
			return t = Ha(t), Ca(t, e)
		}

		function $a(t, e, n) {
			return t = Ha(t), xa(t, e, n)
		}

		function Ya(t) {
			return null === Fa ? (Fa = [t], Ga = xa(Ia, Xa)) : Fa.push(t), La
		}

		function Ka() {
			if (null !== Ga) {
				var t = Ga;
				Ga = null, Na(t)
			}
			Xa()
		}

		function Xa() {
			if (!Ba && null !== Fa) {
				Ba = !0;
				var t = 0;
				try {
					var e = Fa;
					Va(99, (function () {
						for (; t < e.length; t++)
							for (var n = e[t]; null !== (n = n(!0)););
					})), Fa = null
				} catch (e) {
					throw null !== Fa && (Fa = Fa.slice(t + 1)), xa(Ia, Ka), e
				} finally {
					Ba = !1
				}
			}
		}
		var Qa = 3;

		function Za(t, e, n) {
			return 1073741821 - (1 + ((1073741821 - t + e / 10) / (n /= 10) | 0)) * n
		}

		function Ja(t, e) {
			if (t && t.defaultProps)
				for (var n in e = a({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
			return e
		}
		var tc = {
				current: null
			},
			ec = null,
			nc = null,
			rc = null;

		function ac() {
			rc = nc = ec = null
		}

		function cc(t, e) {
			var n = t.type._context;
			fa(tc, n._currentValue), n._currentValue = e
		}

		function oc(t) {
			var e = tc.current;
			ga(tc), t.type._context._currentValue = e
		}

		function ic(t, e) {
			for (; null !== t;) {
				var n = t.alternate;
				if (t.childExpirationTime < e) t.childExpirationTime = e, null !== n && n.childExpirationTime < e && (n.childExpirationTime = e);
				else {
					if (!(null !== n && n.childExpirationTime < e)) break;
					n.childExpirationTime = e
				}
				t = t.return
			}
		}

		function uc(t, e) {
			rc = nc = null, null !== (t = (ec = t).dependencies) && null !== t.firstContext && (t.expirationTime >= e && (Uo = !0), t.firstContext = null)
		}

		function sc(t, e) {
			if (rc !== t && !1 !== e && 0 !== e)
				if ("number" == typeof e && 1073741823 !== e || (rc = t, e = 1073741823), e = {
						context: t,
						observedBits: e,
						next: null
					}, null === nc) {
					if (null === ec) throw Error(o(308));
					nc = e, ec.dependencies = {
						expirationTime: 0,
						firstContext: e,
						responders: null
					}
				} else nc = nc.next = e;
			return t._currentValue
		}
		var lc = !1;

		function gc(t) {
			return {
				baseState: t,
				firstUpdate: null,
				lastUpdate: null,
				firstCapturedUpdate: null,
				lastCapturedUpdate: null,
				firstEffect: null,
				lastEffect: null,
				firstCapturedEffect: null,
				lastCapturedEffect: null
			}
		}

		function fc(t) {
			return {
				baseState: t.baseState,
				firstUpdate: t.firstUpdate,
				lastUpdate: t.lastUpdate,
				firstCapturedUpdate: null,
				lastCapturedUpdate: null,
				firstEffect: null,
				lastEffect: null,
				firstCapturedEffect: null,
				lastCapturedEffect: null
			}
		}

		function pc(t, e) {
			return {
				expirationTime: t,
				suspenseConfig: e,
				tag: 0,
				payload: null,
				callback: null,
				next: null,
				nextEffect: null
			}
		}

		function dc(t, e) {
			null === t.lastUpdate ? t.firstUpdate = t.lastUpdate = e : (t.lastUpdate.next = e, t.lastUpdate = e)
		}

		function hc(t, e) {
			var n = t.alternate;
			if (null === n) {
				var r = t.updateQueue,
					a = null;
				null === r && (r = t.updateQueue = gc(t.memoizedState))
			} else r = t.updateQueue, a = n.updateQueue, null === r ? null === a ? (r = t.updateQueue = gc(t.memoizedState), a = n.updateQueue = gc(n.memoizedState)) : r = t.updateQueue = fc(a) : null === a && (a = n.updateQueue = fc(r));
			null === a || r === a ? dc(r, e) : null === r.lastUpdate || null === a.lastUpdate ? (dc(r, e), dc(a, e)) : (dc(r, e), a.lastUpdate = e)
		}

		function yc(t, e) {
			var n = t.updateQueue;
			null === (n = null === n ? t.updateQueue = gc(t.memoizedState) : mc(t, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = e : (n.lastCapturedUpdate.next = e, n.lastCapturedUpdate = e)
		}

		function mc(t, e) {
			var n = t.alternate;
			return null !== n && e === n.updateQueue && (e = t.updateQueue = fc(e)), e
		}

		function bc(t, e, n, r, c, o) {
			switch (n.tag) {
				case 1:
					return "function" == typeof (t = n.payload) ? t.call(o, r, c) : t;
				case 3:
					t.effectTag = -4097 & t.effectTag | 64;
				case 0:
					if (null == (c = "function" == typeof (t = n.payload) ? t.call(o, r, c) : t)) break;
					return a({}, r, c);
				case 2:
					lc = !0
			}
			return r
		}

		function vc(t, e, n, r, a) {
			lc = !1;
			for (var c = (e = mc(t, e)).baseState, o = null, i = 0, u = e.firstUpdate, s = c; null !== u;) {
				var l = u.expirationTime;
				l < a ? (null === o && (o = u, c = s), i < l && (i = l)) : (Tu(l, u.suspenseConfig), s = bc(t, 0, u, s, n, r), null !== u.callback && (t.effectTag |= 32, (u.nextEffect = null) === e.lastEffect ? e.firstEffect = e.lastEffect = u : (e.lastEffect.nextEffect = u, e.lastEffect = u))), u = u.next
			}
			for (l = null, u = e.firstCapturedUpdate; null !== u;) {
				var g = u.expirationTime;
				g < a ? (null === l && (l = u, null === o && (c = s)), i < g && (i = g)) : (s = bc(t, 0, u, s, n, r), null !== u.callback && (t.effectTag |= 32, (u.nextEffect = null) === e.lastCapturedEffect ? e.firstCapturedEffect = e.lastCapturedEffect = u : (e.lastCapturedEffect.nextEffect = u, e.lastCapturedEffect = u))), u = u.next
			}
			null === o && (e.lastUpdate = null), null === l ? e.lastCapturedUpdate = null : t.effectTag |= 32, null === o && null === l && (c = s), e.baseState = c, e.firstUpdate = o, e.firstCapturedUpdate = l, Su(i), t.expirationTime = i, t.memoizedState = s
		}

		function wc(t, e, n) {
			null !== e.firstCapturedUpdate && (null !== e.lastUpdate && (e.lastUpdate.next = e.firstCapturedUpdate, e.lastUpdate = e.lastCapturedUpdate), e.firstCapturedUpdate = e.lastCapturedUpdate = null), Oc(e.firstEffect, n), e.firstEffect = e.lastEffect = null, Oc(e.firstCapturedEffect, n), e.firstCapturedEffect = e.lastCapturedEffect = null
		}

		function Oc(t, e) {
			for (; null !== t;) {
				var n = t.callback;
				if (null !== n) {
					t.callback = null;
					var r = e;
					if ("function" != typeof n) throw Error(o(191, n));
					n.call(r)
				}
				t = t.nextEffect
			}
		}
		var Ec = I.ReactCurrentBatchConfig,
			Tc = (new r.Component).refs;

		function Sc(t, e, n, r) {
			n = null == (n = n(r, e = t.memoizedState)) ? e : a({}, e, n), t.memoizedState = n, null !== (r = t.updateQueue) && 0 === t.expirationTime && (r.baseState = n)
		}
		var Cc = {
			isMounted: function (t) {
				return !!(t = t._reactInternalFiber) && te(t) === t
			},
			enqueueSetState: function (t, e, n) {
				t = t._reactInternalFiber;
				var r = fu(),
					a = Ec.suspense;
				(a = pc(r = pu(r, t, a), a)).payload = e, null != n && (a.callback = n), hc(t, a), du(t, r)
			},
			enqueueReplaceState: function (t, e, n) {
				t = t._reactInternalFiber;
				var r = fu(),
					a = Ec.suspense;
				(a = pc(r = pu(r, t, a), a)).tag = 1, a.payload = e, null != n && (a.callback = n), hc(t, a), du(t, r)
			},
			enqueueForceUpdate: function (t, e) {
				t = t._reactInternalFiber;
				var n = fu(),
					r = Ec.suspense;
				(r = pc(n = pu(n, t, r), r)).tag = 2, null != e && (r.callback = e), hc(t, r), du(t, n)
			}
		};

		function xc(t, e, n, r, a, c, o) {
			return "function" == typeof (t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, c, o) : !(e.prototype && e.prototype.isPureReactComponent && ta(n, r) && ta(a, c))
		}

		function Nc(t, e, n) {
			var r = !1,
				a = pa,
				c = e.contextType;
			return e = new e(n, c = "object" == typeof c && null !== c ? sc(c) : (a = ba(e) ? ya : da.current, (r = null != (r = e.contextTypes)) ? ma(t, a) : pa)), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = Cc, (t.stateNode = e)._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, t.__reactInternalMemoizedMaskedChildContext = c), e
		}

		function Pc(t, e, n, r) {
			t = e.state, "function" == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" == typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && Cc.enqueueReplaceState(e, e.state, null)
		}

		function _c(t, e, n, r) {
			var a = t.stateNode;
			a.props = n, a.state = t.memoizedState, a.refs = Tc;
			var c = e.contextType;
			"object" == typeof c && null !== c ? a.context = sc(c) : (c = ba(e) ? ya : da.current, a.context = ma(t, c)), null !== (c = t.updateQueue) && (vc(t, c, n, a, r), a.state = t.memoizedState), "function" == typeof (c = e.getDerivedStateFromProps) && (Sc(t, e, c, n), a.state = t.memoizedState), "function" == typeof e.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (e = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), e !== a.state && Cc.enqueueReplaceState(a, a.state, null), null !== (c = t.updateQueue) && (vc(t, c, n, a, r), a.state = t.memoizedState)), "function" == typeof a.componentDidMount && (t.effectTag |= 4)
		}
		var Ac = Array.isArray;

		function kc(t, e, n) {
			if (null !== (t = n.ref) && "function" != typeof t && "object" != typeof t) {
				if (n._owner) {
					if (n = n._owner) {
						if (1 !== n.tag) throw Error(o(309));
						var r = n.stateNode
					}
					if (!r) throw Error(o(147, t));
					var a = "" + t;
					return null !== e && null !== e.ref && "function" == typeof e.ref && e.ref._stringRef === a ? e.ref : ((e = function (t) {
						var e = r.refs;
						e === Tc && (e = r.refs = {}), null === t ? delete e[a] : e[a] = t
					})._stringRef = a, e)
				}
				if ("string" != typeof t) throw Error(o(284));
				if (!n._owner) throw Error(o(290, t))
			}
			return t
		}

		function Ic(t, e) {
			if ("textarea" !== t.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, ""))
		}

		function jc(t) {
			function e(e, n) {
				if (t) {
					var r = e.lastEffect;
					null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
				}
			}

			function n(n, r) {
				if (!t) return null;
				for (; null !== r;) e(n, r), r = r.sibling;
				return null
			}

			function r(t, e) {
				for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
				return t
			}

			function a(t, e) {
				return (t = zu(t, e)).index = 0, t.sibling = null, t
			}

			function c(e, n, r) {
				return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.effectTag = 2, n) : r : (e.effectTag = 2, n) : n
			}

			function i(e) {
				return t && null === e.alternate && (e.effectTag = 2), e
			}

			function u(t, e, n, r) {
				return null === e || 6 !== e.tag ? (e = Hu(n, t.mode, r)).return = t : (e = a(e, n)).return = t, e
			}

			function s(t, e, n, r) {
				return null !== e && e.elementType === n.type ? (r = a(e, n.props)).ref = kc(t, e, n) : (r = Uu(n.type, n.key, n.props, null, t.mode, r)).ref = kc(t, e, n), r.return = t, r
			}

			function l(t, e, n, r) {
				return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? (e = Vu(n, t.mode, r)).return = t : (e = a(e, n.children || [])).return = t, e
			}

			function g(t, e, n, r, c) {
				return null === e || 7 !== e.tag ? (e = Wu(n, t.mode, r, c)).return = t : (e = a(e, n)).return = t, e
			}

			function f(t, e, n) {
				if ("string" == typeof e || "number" == typeof e) return (e = Hu("" + e, t.mode, n)).return = t, e;
				if ("object" == typeof e && null !== e) {
					switch (e.$$typeof) {
						case M:
							return (n = Uu(e.type, e.key, e.props, null, t.mode, n)).ref = kc(t, null, e), n.return = t, n;
						case R:
							return (e = Vu(e, t.mode, n)).return = t, e
					}
					if (Ac(e) || K(e)) return (e = Wu(e, t.mode, n, null)).return = t, e;
					Ic(t, e)
				}
				return null
			}

			function p(t, e, n, r) {
				var a = null !== e ? e.key : null;
				if ("string" == typeof n || "number" == typeof n) return null !== a ? null : u(t, e, "" + n, r);
				if ("object" == typeof n && null !== n) {
					switch (n.$$typeof) {
						case M:
							return n.key === a ? n.type === L ? g(t, e, n.props.children, r, a) : s(t, e, n, r) : null;
						case R:
							return n.key === a ? l(t, e, n, r) : null
					}
					if (Ac(n) || K(n)) return null !== a ? null : g(t, e, n, r, null);
					Ic(t, n)
				}
				return null
			}

			function d(t, e, n, r, a) {
				if ("string" == typeof r || "number" == typeof r) return u(e, t = t.get(n) || null, "" + r, a);
				if ("object" == typeof r && null !== r) {
					switch (r.$$typeof) {
						case M:
							return t = t.get(null === r.key ? n : r.key) || null, r.type === L ? g(e, t, r.props.children, a, r.key) : s(e, t, r, a);
						case R:
							return l(e, t = t.get(null === r.key ? n : r.key) || null, r, a)
					}
					if (Ac(r) || K(r)) return g(e, t = t.get(n) || null, r, a, null);
					Ic(e, r)
				}
				return null
			}
			return function (u, s, l, g) {
				var h = "object" == typeof l && null !== l && l.type === L && null === l.key;
				h && (l = l.props.children);
				var y = "object" == typeof l && null !== l;
				if (y) switch (l.$$typeof) {
					case M:
						t: {
							for (y = l.key, h = s; null !== h;) {
								if (h.key === y) {
									if (7 === h.tag ? l.type === L : h.elementType === l.type) {
										n(u, h.sibling), (s = a(h, l.type === L ? l.props.children : l.props)).ref = kc(u, h, l), s.return = u, u = s;
										break t
									}
									n(u, h);
									break
								}
								e(u, h), h = h.sibling
							}
							u = l.type === L ? ((s = Wu(l.props.children, u.mode, g, l.key)).return = u, s) : ((g = Uu(l.type, l.key, l.props, null, u.mode, g)).ref = kc(u, s, l), g.return = u, g)
						}
						return i(u);
					case R:
						t: {
							for (h = l.key; null !== s;) {
								if (s.key === h) {
									if (4 === s.tag && s.stateNode.containerInfo === l.containerInfo && s.stateNode.implementation === l.implementation) {
										n(u, s.sibling), (s = a(s, l.children || [])).return = u, u = s;
										break t
									}
									n(u, s);
									break
								}
								e(u, s), s = s.sibling
							}(s = Vu(l, u.mode, g)).return = u,
							u = s
						}
						return i(u)
				}
				if ("string" == typeof l || "number" == typeof l) return l = "" + l, i(((s = null !== s && 6 === s.tag ? (n(u, s.sibling), a(s, l)) : (n(u, s), Hu(l, u.mode, g))).return = u, u = s));
				if (Ac(l)) return function (a, o, i, u) {
					for (var s = null, l = null, g = o, h = o = 0, y = null; null !== g && h < i.length; h++) {
						g.index > h ? (y = g, g = null) : y = g.sibling;
						var m = p(a, g, i[h], u);
						if (null === m) {
							null === g && (g = y);
							break
						}
						t && g && null === m.alternate && e(a, g), o = c(m, o, h), null === l ? s = m : l.sibling = m, l = m, g = y
					}
					if (h === i.length) return n(a, g), s;
					if (null === g) {
						for (; h < i.length; h++) null !== (g = f(a, i[h], u)) && (o = c(g, o, h), null === l ? s = g : l.sibling = g, l = g);
						return s
					}
					for (g = r(a, g); h < i.length; h++) null !== (y = d(g, a, h, i[h], u)) && (t && null !== y.alternate && g.delete(null === y.key ? h : y.key), o = c(y, o, h), null === l ? s = y : l.sibling = y, l = y);
					return t && g.forEach((function (t) {
						return e(a, t)
					})), s
				}(u, s, l, g);
				if (K(l)) return function (a, i, u, s) {
					var l = K(u);
					if ("function" != typeof l) throw Error(o(150));
					if (null == (u = l.call(u))) throw Error(o(151));
					for (var g = l = null, h = i, y = i = 0, m = null, b = u.next(); null !== h && !b.done; y++, b = u.next()) {
						h.index > y ? (m = h, h = null) : m = h.sibling;
						var v = p(a, h, b.value, s);
						if (null === v) {
							null === h && (h = m);
							break
						}
						t && h && null === v.alternate && e(a, h), i = c(v, i, y), null === g ? l = v : g.sibling = v, g = v, h = m
					}
					if (b.done) return n(a, h), l;
					if (null === h) {
						for (; !b.done; y++, b = u.next()) null !== (b = f(a, b.value, s)) && (i = c(b, i, y), null === g ? l = b : g.sibling = b, g = b);
						return l
					}
					for (h = r(a, h); !b.done; y++, b = u.next()) null !== (b = d(h, a, y, b.value, s)) && (t && null !== b.alternate && h.delete(null === b.key ? y : b.key), i = c(b, i, y), null === g ? l = b : g.sibling = b, g = b);
					return t && h.forEach((function (t) {
						return e(a, t)
					})), l
				}(u, s, l, g);
				if (y && Ic(u, l), void 0 === l && !h) switch (u.tag) {
					case 1:
					case 0:
						throw u = u.type, Error(o(152, u.displayName || u.name || "Component"))
				}
				return n(u, s)
			}
		}
		var Dc = jc(!0),
			Mc = jc(!1),
			Rc = {},
			Lc = {
				current: Rc
			},
			qc = {
				current: Rc
			},
			Fc = {
				current: Rc
			};

		function Gc(t) {
			if (t === Rc) throw Error(o(174));
			return t
		}

		function Bc(t, e) {
			fa(Fc, e), fa(qc, t), fa(Lc, Rc);
			var n = e.nodeType;
			switch (n) {
				case 9:
				case 11:
					e = (e = e.documentElement) ? e.namespaceURI : Ft(null, "");
					break;
				default:
					e = Ft(e = (n = 8 === n ? e.parentNode : e).namespaceURI || null, n = n.tagName)
			}
			ga(Lc), fa(Lc, e)
		}

		function zc() {
			ga(Lc), ga(qc), ga(Fc)
		}

		function Uc(t) {
			Gc(Fc.current);
			var e = Gc(Lc.current),
				n = Ft(e, t.type);
			e !== n && (fa(qc, t), fa(Lc, n))
		}

		function Wc(t) {
			qc.current === t && (ga(Lc), ga(qc))
		}
		var Hc = {
			current: 0
		};

		function Vc(t) {
			for (var e = t; null !== e;) {
				if (13 === e.tag) {
					var n = e.memoizedState;
					if (null !== n && (null === (n = n.dehydrated) || n.data === Xn || n.data === Qn)) return e
				} else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
					if (0 != (64 & e.effectTag)) return e
				} else if (null !== e.child) {
					e = (e.child.return = e).child;
					continue
				}
				if (e === t) break;
				for (; null === e.sibling;) {
					if (null === e.return || e.return === t) return null;
					e = e.return
				}
				e.sibling.return = e.return, e = e.sibling
			}
			return null
		}

		function $c(t, e) {
			return {
				responder: t,
				props: e
			}
		}
		var Yc = I.ReactCurrentDispatcher,
			Kc = I.ReactCurrentBatchConfig,
			Xc = 0,
			Qc = null,
			Zc = null,
			Jc = null,
			to = null,
			eo = null,
			no = null,
			ro = 0,
			ao = null,
			co = 0,
			oo = !1,
			io = null,
			uo = 0;

		function so() {
			throw Error(o(321))
		}

		function lo(t, e) {
			if (null === e) return !1;
			for (var n = 0; n < e.length && n < t.length; n++)
				if (!Zr(t[n], e[n])) return !1;
			return !0
		}

		function go(t, e, n, r, a, c) {
			if (Xc = c, Qc = e, Jc = null !== t ? t.memoizedState : null, Yc.current = null === Jc ? ko : Io, e = n(r, a), oo) {
				for (; oo = !1, uo += 1, Jc = null !== t ? t.memoizedState : null, no = to, ao = eo = Zc = null, Yc.current = Io, e = n(r, a), oo;);
				io = null, uo = 0
			}
			if (Yc.current = Ao, (t = Qc).memoizedState = to, t.expirationTime = ro, t.updateQueue = ao, t.effectTag |= co, t = null !== Zc && null !== Zc.next, no = eo = to = Jc = Zc = Qc = null, ao = null, co = ro = Xc = 0, t) throw Error(o(300));
			return e
		}

		function fo() {
			Yc.current = Ao, no = eo = to = Jc = Zc = Qc = null, oo = !1, io = ao = null, uo = co = ro = Xc = 0
		}

		function po() {
			var t = {
				memoizedState: null,
				baseState: null,
				queue: null,
				baseUpdate: null,
				next: null
			};
			return null === eo ? to = eo = t : eo = eo.next = t, eo
		}

		function ho() {
			if (null !== no) no = (eo = no).next, Jc = null !== (Zc = Jc) ? Zc.next : null;
			else {
				if (null === Jc) throw Error(o(310));
				var t = {
					memoizedState: (Zc = Jc).memoizedState,
					baseState: Zc.baseState,
					queue: Zc.queue,
					baseUpdate: Zc.baseUpdate,
					next: null
				};
				eo = null === eo ? to = t : eo.next = t, Jc = Zc.next
			}
			return eo
		}

		function yo(t, e) {
			return "function" == typeof e ? e(t) : e
		}

		function mo(t) {
			var e = ho(),
				n = e.queue;
			if (null === n) throw Error(o(311));
			if (n.lastRenderedReducer = t, 0 < uo) {
				var r = n.dispatch;
				if (null !== io) {
					var a = io.get(n);
					if (void 0 !== a) {
						io.delete(n);
						for (var c = e.memoizedState; c = t(c, a.action), null !== (a = a.next););
						return Zr(c, e.memoizedState) || (Uo = !0), e.memoizedState = c, e.baseUpdate === n.last && (e.baseState = c), [n.lastRenderedState = c, r]
					}
				}
				return [e.memoizedState, r]
			}
			r = n.last;
			var i = e.baseUpdate;
			if (c = e.baseState, null !== (r = null !== i ? (null !== r && (r.next = null), i.next) : null !== r ? r.next : null)) {
				var u = a = null,
					s = r,
					l = !1;
				do {
					var g = s.expirationTime;
					g < Xc ? (l || (l = !0, u = i, a = c), ro < g && Su(ro = g)) : (Tu(g, s.suspenseConfig), c = s.eagerReducer === t ? s.eagerState : t(c, s.action)), s = (i = s).next
				} while (null !== s && s !== r);
				l || (u = i, a = c), Zr(c, e.memoizedState) || (Uo = !0), e.memoizedState = c, e.baseUpdate = u, e.baseState = a, n.lastRenderedState = c
			}
			return [e.memoizedState, n.dispatch]
		}

		function bo(t) {
			var e = po();
			return "function" == typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
				last: null,
				dispatch: null,
				lastRenderedReducer: yo,
				lastRenderedState: t
			}).dispatch = _o.bind(null, Qc, t), [e.memoizedState, t]
		}

		function vo(t) {
			return mo(yo)
		}

		function wo(t, e, n, r) {
			return t = {
				tag: t,
				create: e,
				destroy: n,
				deps: r,
				next: null
			}, null === ao ? (ao = {
				lastEffect: null
			}).lastEffect = t.next = t : null === (e = ao.lastEffect) ? ao.lastEffect = t.next = t : (n = e.next, (e.next = t).next = n, ao.lastEffect = t), t
		}

		function Oo(t, e, n, r) {
			var a = po();
			co |= t, a.memoizedState = wo(e, n, void 0, void 0 === r ? null : r)
		}

		function Eo(t, e, n, r) {
			var a = ho();
			r = void 0 === r ? null : r;
			var c = void 0;
			if (null !== Zc) {
				var o = Zc.memoizedState;
				if (c = o.destroy, null !== r && lo(r, o.deps)) return void wo(0, n, c, r)
			}
			co |= t, a.memoizedState = wo(e, n, c, r)
		}

		function To(t, e) {
			return Oo(516, 192, t, e)
		}

		function So(t, e) {
			return Eo(516, 192, t, e)
		}

		function Co(t, e) {
			return "function" == typeof e ? (t = t(), e(t), function () {
				e(null)
			}) : null != e ? (t = t(), e.current = t, function () {
				e.current = null
			}) : void 0
		}

		function xo() {}

		function No(t, e) {
			return po().memoizedState = [t, void 0 === e ? null : e], t
		}

		function Po(t, e) {
			var n = ho();
			e = void 0 === e ? null : e;
			var r = n.memoizedState;
			return null !== r && null !== e && lo(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
		}

		function _o(t, e, n) {
			if (!(uo < 25)) throw Error(o(301));
			var r = t.alternate;
			if (t === Qc || null !== r && r === Qc)
				if (oo = !0, t = {
						expirationTime: Xc,
						suspenseConfig: null,
						action: n,
						eagerReducer: null,
						eagerState: null,
						next: null
					}, null === io && (io = new Map), void 0 === (n = io.get(e))) io.set(e, t);
				else {
					for (e = n; null !== e.next;) e = e.next;
					e.next = t
				}
			else {
				var a = fu(),
					c = Ec.suspense;
				c = {
					expirationTime: a = pu(a, t, c),
					suspenseConfig: c,
					action: n,
					eagerReducer: null,
					eagerState: null,
					next: null
				};
				var i = e.last;
				if (null === i) c.next = c;
				else {
					var u = i.next;
					null !== u && (c.next = u), i.next = c
				}
				if (e.last = c, 0 === t.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = e.lastRenderedReducer)) try {
					var s = e.lastRenderedState,
						l = r(s, n);
					if (c.eagerReducer = r, c.eagerState = l, Zr(l, s)) return
				} catch (t) {}
				du(t, a)
			}
		}
		var Ao = {
				readContext: sc,
				useCallback: so,
				useContext: so,
				useEffect: so,
				useImperativeHandle: so,
				useLayoutEffect: so,
				useMemo: so,
				useReducer: so,
				useRef: so,
				useState: so,
				useDebugValue: so,
				useResponder: so,
				useDeferredValue: so,
				useTransition: so
			},
			ko = {
				readContext: sc,
				useCallback: No,
				useContext: sc,
				useEffect: To,
				useImperativeHandle: function (t, e, n) {
					return n = null != n ? n.concat([t]) : null, Oo(4, 36, Co.bind(null, e, t), n)
				},
				useLayoutEffect: function (t, e) {
					return Oo(4, 36, t, e)
				},
				useMemo: function (t, e) {
					var n = po();
					return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
				},
				useReducer: function (t, e, n) {
					var r = po();
					return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = {
						last: null,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: e
					}).dispatch = _o.bind(null, Qc, t), [r.memoizedState, t]
				},
				useRef: function (t) {
					return t = {
						current: t
					}, po().memoizedState = t
				},
				useState: bo,
				useDebugValue: xo,
				useResponder: $c,
				useDeferredValue: function (t, e) {
					var n = bo(t),
						r = n[0],
						a = n[1];
					return To((function () {
						c.unstable_next((function () {
							var n = Kc.suspense;
							Kc.suspense = void 0 === e ? null : e;
							try {
								a(t)
							} finally {
								Kc.suspense = n
							}
						}))
					}), [t, e]), r
				},
				useTransition: function (t) {
					var e = bo(!1),
						n = e[0],
						r = e[1];
					return [No((function (e) {
						r(!0), c.unstable_next((function () {
							var n = Kc.suspense;
							Kc.suspense = void 0 === t ? null : t;
							try {
								r(!1), e()
							} finally {
								Kc.suspense = n
							}
						}))
					}), [t, n]), n]
				}
			},
			Io = {
				readContext: sc,
				useCallback: Po,
				useContext: sc,
				useEffect: So,
				useImperativeHandle: function (t, e, n) {
					return n = null != n ? n.concat([t]) : null, Eo(4, 36, Co.bind(null, e, t), n)
				},
				useLayoutEffect: function (t, e) {
					return Eo(4, 36, t, e)
				},
				useMemo: function (t, e) {
					var n = ho();
					e = void 0 === e ? null : e;
					var r = n.memoizedState;
					return null !== r && null !== e && lo(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
				},
				useReducer: mo,
				useRef: function () {
					return ho().memoizedState
				},
				useState: vo,
				useDebugValue: xo,
				useResponder: $c,
				useDeferredValue: function (t, e) {
					var n = vo(),
						r = n[0],
						a = n[1];
					return So((function () {
						c.unstable_next((function () {
							var n = Kc.suspense;
							Kc.suspense = void 0 === e ? null : e;
							try {
								a(t)
							} finally {
								Kc.suspense = n
							}
						}))
					}), [t, e]), r
				},
				useTransition: function (t) {
					var e = vo(),
						n = e[0],
						r = e[1];
					return [Po((function (e) {
						r(!0), c.unstable_next((function () {
							var n = Kc.suspense;
							Kc.suspense = void 0 === t ? null : t;
							try {
								r(!1), e()
							} finally {
								Kc.suspense = n
							}
						}))
					}), [t, n]), n]
				}
			},
			jo = null,
			Do = null,
			Mo = !1;

		function Ro(t, e) {
			var n = Gu(5, null, null, 0);
			n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
		}

		function Lo(t, e) {
			switch (t.tag) {
				case 5:
					var n = t.type;
					return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
				case 6:
					return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
				case 13:
				default:
					return !1
			}
		}

		function qo(t) {
			if (Mo) {
				var e = Do;
				if (e) {
					var n = e;
					if (!Lo(t, e)) {
						if (!(e = ar(n.nextSibling)) || !Lo(t, e)) return t.effectTag = -1025 & t.effectTag | 2, Mo = !1, void(jo = t);
						Ro(jo, n)
					}
					jo = t, Do = ar(e.firstChild)
				} else t.effectTag = -1025 & t.effectTag | 2, Mo = !1, jo = t
			}
		}

		function Fo(t) {
			for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
			jo = t
		}

		function Go(t) {
			if (t !== jo) return !1;
			if (!Mo) return Fo(t), !(Mo = !0);
			var e = t.type;
			if (5 !== t.tag || "head" !== e && "body" !== e && !er(e, t.memoizedProps))
				for (e = Do; e;) Ro(t, e), e = ar(e.nextSibling);
			if (Fo(t), 13 === t.tag) {
				if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(o(317));
				t: {
					for (t = t.nextSibling, e = 0; t;) {
						if (8 === t.nodeType) {
							var n = t.data;
							if (n === Kn) {
								if (0 === e) {
									Do = ar(t.nextSibling);
									break t
								}
								e--
							} else n !== Yn && n !== Qn && n !== Xn || e++
						}
						t = t.nextSibling
					}
					Do = null
				}
			} else Do = jo ? ar(t.stateNode.nextSibling) : null;
			return !0
		}

		function Bo() {
			Do = jo = null, Mo = !1
		}
		var zo = I.ReactCurrentOwner,
			Uo = !1;

		function Wo(t, e, n, r) {
			e.child = null === t ? Mc(e, null, n, r) : Dc(e, t.child, n, r)
		}

		function Ho(t, e, n, r, a) {
			n = n.render;
			var c = e.ref;
			return uc(e, a), r = go(t, e, n, r, c, a), null === t || Uo ? (e.effectTag |= 1, Wo(t, e, r, a), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= a && (t.expirationTime = 0), ui(t, e, a))
		}

		function Vo(t, e, n, r, a, c) {
			if (null !== t) return o = t.child, a < c && (a = o.memoizedProps, (n = null !== (n = n.compare) ? n : ta)(a, r) && t.ref === e.ref) ? ui(t, e, c) : (e.effectTag |= 1, (t = zu(o, r)).ref = e.ref, (t.return = e).child = t);
			var o = n.type;
			return "function" != typeof o || Bu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Uu(n.type, null, r, null, e.mode, c)).ref = e.ref, (t.return = e).child = t) : (e.tag = 15, e.type = o, $o(t, e, o, r, a, c))
		}

		function $o(t, e, n, r, a, c) {
			return null !== t && ta(t.memoizedProps, r) && t.ref === e.ref && (Uo = !1, a < c) ? ui(t, e, c) : Ko(t, e, n, r, c)
		}

		function Yo(t, e) {
			var n = e.ref;
			(null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
		}

		function Ko(t, e, n, r, a) {
			var c = ba(n) ? ya : da.current;
			return c = ma(e, c), uc(e, a), n = go(t, e, n, r, c, a), null === t || Uo ? (e.effectTag |= 1, Wo(t, e, n, a), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= a && (t.expirationTime = 0), ui(t, e, a))
		}

		function Xo(t, e, n, r, a) {
			if (ba(n)) {
				var c = !0;
				Ta(e)
			} else c = !1;
			if (uc(e, a), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), Nc(e, n, r), _c(e, n, r, a), r = !0;
			else if (null === t) {
				var o = e.stateNode,
					i = e.memoizedProps;
				o.props = i;
				var u = o.context,
					s = n.contextType;
				s = "object" == typeof s && null !== s ? sc(s) : ma(e, s = ba(n) ? ya : da.current);
				var l = n.getDerivedStateFromProps,
					g = "function" == typeof l || "function" == typeof o.getSnapshotBeforeUpdate;
				g || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || i === r && u === s || Pc(e, o, r, s), lc = !1;
				var f = e.memoizedState;
				u = o.state = f;
				var p = e.updateQueue;
				null !== p && (vc(e, p, r, o, a), u = e.memoizedState), r = i !== r || f !== u || ha.current || lc ? ("function" == typeof l && (Sc(e, n, l, r), u = e.memoizedState), (i = lc || xc(e, n, i, r, f, u, s)) ? (g || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (e.effectTag |= 4)) : ("function" == typeof o.componentDidMount && (e.effectTag |= 4), e.memoizedProps = r, e.memoizedState = u), o.props = r, o.state = u, o.context = s, i) : ("function" == typeof o.componentDidMount && (e.effectTag |= 4), !1)
			} else o = e.stateNode, i = e.memoizedProps, o.props = e.type === e.elementType ? i : Ja(e.type, i), u = o.context, s = "object" == typeof (s = n.contextType) && null !== s ? sc(s) : ma(e, s = ba(n) ? ya : da.current), (g = "function" == typeof (l = n.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || i === r && u === s || Pc(e, o, r, s), lc = !1, u = e.memoizedState, f = o.state = u, null !== (p = e.updateQueue) && (vc(e, p, r, o, a), f = e.memoizedState), r = i !== r || u !== f || ha.current || lc ? ("function" == typeof l && (Sc(e, n, l, r), f = e.memoizedState), (l = lc || xc(e, n, i, r, u, f, s)) ? (g || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, f, s), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, f, s)), "function" == typeof o.componentDidUpdate && (e.effectTag |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" != typeof o.componentDidUpdate || i === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = r, e.memoizedState = f), o.props = r, o.state = f, o.context = s, l) : ("function" != typeof o.componentDidUpdate || i === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === t.memoizedProps && u === t.memoizedState || (e.effectTag |= 256), !1);
			return Qo(t, e, n, r, c, a)
		}

		function Qo(t, e, n, r, a, c) {
			Yo(t, e);
			var o = 0 != (64 & e.effectTag);
			if (!r && !o) return a && Sa(e, n, !1), ui(t, e, c);
			r = e.stateNode, zo.current = e;
			var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
			return e.effectTag |= 1, null !== t && o ? (e.child = Dc(e, t.child, null, c), e.child = Dc(e, null, i, c)) : Wo(t, e, i, c), e.memoizedState = r.state, a && Sa(e, n, !0), e.child
		}

		function Zo(t) {
			var e = t.stateNode;
			e.pendingContext ? Oa(0, e.pendingContext, e.pendingContext !== e.context) : e.context && Oa(0, e.context, !1), Bc(t, e.containerInfo)
		}
		var Jo, ti, ei, ni, ri = {
			dehydrated: null,
			retryTime: 0
		};

		function ai(t, e, n) {
			var r, a = e.mode,
				c = e.pendingProps,
				o = Hc.current,
				i = !1;
			if ((r = 0 != (64 & e.effectTag)) || (r = 0 != (2 & o) && (null === t || null !== t.memoizedState)), r ? (i = !0, e.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === c.fallback || !0 === c.unstable_avoidThisFallback || (o |= 1), fa(Hc, 1 & o), null === t) {
				if (void 0 !== c.fallback && qo(e), i) {
					if (i = c.fallback, 0 == (2 & ((c = Wu(null, a, 0, null)).return = e).mode))
						for (t = null !== e.memoizedState ? e.child.child : e.child, c.child = t; null !== t;) t.return = c, t = t.sibling;
					return (n = Wu(i, a, n, null)).return = e, c.sibling = n, e.memoizedState = ri, e.child = c, n
				}
				return a = c.children, e.memoizedState = null, e.child = Mc(e, null, a, n)
			}
			if (null !== t.memoizedState) {
				if (a = (t = t.child).sibling, i) {
					if (c = c.fallback, 0 == (2 & ((n = zu(t, t.pendingProps)).return = e).mode) && (i = null !== e.memoizedState ? e.child.child : e.child) !== t.child)
						for (n.child = i; null !== i;) i.return = n, i = i.sibling;
					return (a = zu(a, c, a.expirationTime)).return = e, n.sibling = a, n.childExpirationTime = 0, e.memoizedState = ri, e.child = n, a
				}
				return n = Dc(e, t.child, c.children, n), e.memoizedState = null, e.child = n
			}
			if (t = t.child, i) {
				if (i = c.fallback, (c = Wu(null, a, 0, null)).return = e, null !== (c.child = t) && (t.return = c), 0 == (2 & e.mode))
					for (t = null !== e.memoizedState ? e.child.child : e.child, c.child = t; null !== t;) t.return = c, t = t.sibling;
				return (n = Wu(i, a, n, null)).return = e, (c.sibling = n).effectTag |= 2, c.childExpirationTime = 0, e.memoizedState = ri, e.child = c, n
			}
			return e.memoizedState = null, e.child = Dc(e, t, c.children, n)
		}

		function ci(t, e) {
			t.expirationTime < e && (t.expirationTime = e);
			var n = t.alternate;
			null !== n && n.expirationTime < e && (n.expirationTime = e), ic(t.return, e)
		}

		function oi(t, e, n, r, a, c) {
			var o = t.memoizedState;
			null === o ? t.memoizedState = {
				isBackwards: e,
				rendering: null,
				last: r,
				tail: n,
				tailExpiration: 0,
				tailMode: a,
				lastEffect: c
			} : (o.isBackwards = e, o.rendering = null, o.last = r, o.tail = n, o.tailExpiration = 0, o.tailMode = a, o.lastEffect = c)
		}

		function ii(t, e, n) {
			var r = e.pendingProps,
				a = r.revealOrder,
				c = r.tail;
			if (Wo(t, e, r.children, n), 0 != (2 & (r = Hc.current))) r = 1 & r | 2, e.effectTag |= 64;
			else {
				if (null !== t && 0 != (64 & t.effectTag)) t: for (t = e.child; null !== t;) {
					if (13 === t.tag) null !== t.memoizedState && ci(t, n);
					else if (19 === t.tag) ci(t, n);
					else if (null !== t.child) {
						t = (t.child.return = t).child;
						continue
					}
					if (t === e) break t;
					for (; null === t.sibling;) {
						if (null === t.return || t.return === e) break t;
						t = t.return
					}
					t.sibling.return = t.return, t = t.sibling
				}
				r &= 1
			}
			if (fa(Hc, r), 0 == (2 & e.mode)) e.memoizedState = null;
			else switch (a) {
				case "forwards":
					for (n = e.child, a = null; null !== n;) null !== (t = n.alternate) && null === Vc(t) && (a = n), n = n.sibling;
					null === (n = a) ? (a = e.child, e.child = null) : (a = n.sibling, n.sibling = null), oi(e, !1, a, n, c, e.lastEffect);
					break;
				case "backwards":
					for (n = null, a = e.child, e.child = null; null !== a;) {
						if (null !== (t = a.alternate) && null === Vc(t)) {
							e.child = a;
							break
						}
						t = a.sibling, a.sibling = n, n = a, a = t
					}
					oi(e, !0, n, null, c, e.lastEffect);
					break;
				case "together":
					oi(e, !1, null, null, void 0, e.lastEffect);
					break;
				default:
					e.memoizedState = null
			}
			return e.child
		}

		function ui(t, e, n) {
			null !== t && (e.dependencies = t.dependencies);
			var r = e.expirationTime;
			if (0 !== r && Su(r), e.childExpirationTime < n) return null;
			if (null !== t && e.child !== t.child) throw Error(o(153));
			if (null !== e.child) {
				for (n = zu(t = e.child, t.pendingProps, t.expirationTime), (e.child = n).return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = zu(t, t.pendingProps, t.expirationTime)).return = e;
				n.sibling = null
			}
			return e.child
		}

		function si(t) {
			t.effectTag |= 4
		}

		function li(t, e) {
			switch (t.tailMode) {
				case "hidden":
					e = t.tail;
					for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
					null === n ? t.tail = null : n.sibling = null;
					break;
				case "collapsed":
					n = t.tail;
					for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
					null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null
			}
		}

		function gi(t) {
			switch (t.tag) {
				case 1:
					ba(t.type) && va();
					var e = t.effectTag;
					return 4096 & e ? (t.effectTag = -4097 & e | 64, t) : null;
				case 3:
					if (zc(), wa(), 0 != (64 & (e = t.effectTag))) throw Error(o(285));
					return t.effectTag = -4097 & e | 64, t;
				case 5:
					return Wc(t), null;
				case 13:
					return ga(Hc), 4096 & (e = t.effectTag) ? (t.effectTag = -4097 & e | 64, t) : null;
				case 19:
					return ga(Hc), null;
				case 4:
					return zc(), null;
				case 10:
					return oc(t), null;
				default:
					return null
			}
		}

		function fi(t, e) {
			return {
				value: t,
				source: e,
				stack: Q(e)
			}
		}
		Jo = function (t, e) {
			for (var n = e.child; null !== n;) {
				if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
				else if (4 !== n.tag && null !== n.child) {
					n = (n.child.return = n).child;
					continue
				}
				if (n === e) break;
				for (; null === n.sibling;) {
					if (null === n.return || n.return === e) return;
					n = n.return
				}
				n.sibling.return = n.return, n = n.sibling
			}
		}, ti = function () {}, ei = function (t, e, n, r, c) {
			var o = t.memoizedProps;
			if (o !== r) {
				var i, u, s = e.stateNode;
				switch (Gc(Lc.current), t = null, n) {
					case "input":
						o = Ct(s, o), r = Ct(s, r), t = [];
						break;
					case "option":
						o = kt(s, o), r = kt(s, r), t = [];
						break;
					case "select":
						o = a({}, o, {
							value: void 0
						}), r = a({}, r, {
							value: void 0
						}), t = [];
						break;
					case "textarea":
						o = jt(s, o), r = jt(s, r), t = [];
						break;
					default:
						"function" != typeof o.onClick && "function" == typeof r.onClick && (s.onclick = zn)
				}
				for (i in Fn(n, r), n = null, o)
					if (!r.hasOwnProperty(i) && o.hasOwnProperty(i) && null != o[i])
						if ("style" === i)
							for (u in s = o[i]) s.hasOwnProperty(u) && ((n = n || {})[u] = "");
						else "dangerouslySetInnerHTML" !== i && "children" !== i && "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (p.hasOwnProperty(i) ? t = t || [] : (t = t || []).push(i, null));
				for (i in r) {
					var l = r[i];
					if (s = null != o ? o[i] : void 0, r.hasOwnProperty(i) && l !== s && (null != l || null != s))
						if ("style" === i)
							if (s) {
								for (u in s) !s.hasOwnProperty(u) || l && l.hasOwnProperty(u) || ((n = n || {})[u] = "");
								for (u in l) l.hasOwnProperty(u) && s[u] !== l[u] && ((n = n || {})[u] = l[u])
							} else n || (t = t || []).push(i, n), n = l;
					else "dangerouslySetInnerHTML" === i ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, null != l && s !== l && (t = t || []).push(i, "" + l)) : "children" === i ? s === l || "string" != typeof l && "number" != typeof l || (t = t || []).push(i, "" + l) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && (p.hasOwnProperty(i) ? (null != l && Bn(c, i), t || s === l || (t = [])) : (t = t || []).push(i, l))
				}
				n && (t = t || []).push("style", n), c = t, (e.updateQueue = c) && si(e)
			}
		}, ni = function (t, e, n, r) {
			n !== r && si(e)
		};
		var pi = "function" == typeof WeakSet ? WeakSet : Set;

		function di(t, e) {
			var n = e.source,
				r = e.stack;
			null === r && null !== n && (r = Q(n)), null !== n && X(n.type), e = e.value, null !== t && 1 === t.tag && X(t.type);
			try {
				console.error(e)
			} catch (t) {
				setTimeout((function () {
					throw t
				}))
			}
		}

		function hi(t) {
			var e = t.ref;
			if (null !== e)
				if ("function" == typeof e) try {
					e(null)
				} catch (e) {
					Mu(t, e)
				} else e.current = null
		}

		function yi(t, e) {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					mi(2, 0, e);
					break;
				case 1:
					if (256 & e.effectTag && null !== t) {
						var n = t.memoizedProps,
							r = t.memoizedState;
						e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : Ja(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e
					}
					break;
				case 3:
				case 5:
				case 6:
				case 4:
				case 17:
					break;
				default:
					throw Error(o(163))
			}
		}

		function mi(t, e, n) {
			if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
				var r = n = n.next;
				do {
					if (0 != (r.tag & t)) {
						var a = r.destroy;
						(r.destroy = void 0) !== a && a()
					}
					0 != (r.tag & e) && (a = r.create, r.destroy = a()), r = r.next
				} while (r !== n)
			}
		}

		function bi(t, e, n) {
			switch ("function" == typeof qu && qu(e), e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
						var r = t.next;
						Va(97 < n ? 97 : n, (function () {
							var t = r;
							do {
								var n = t.destroy;
								if (void 0 !== n) {
									var a = e;
									try {
										n()
									} catch (t) {
										Mu(a, t)
									}
								}
								t = t.next
							} while (t !== r)
						}))
					}
					break;
				case 1:
					hi(e), "function" == typeof (n = e.stateNode).componentWillUnmount && function (t, e) {
						try {
							e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
						} catch (e) {
							Mu(t, e)
						}
					}(e, n);
					break;
				case 5:
					hi(e);
					break;
				case 4:
					Ei(t, e, n)
			}
		}

		function vi(t) {
			var e = t.alternate;
			t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, (t.memoizedProps = null) !== e && vi(e)
		}

		function wi(t) {
			return 5 === t.tag || 3 === t.tag || 4 === t.tag
		}

		function Oi(t) {
			t: {
				for (var e = t.return; null !== e;) {
					if (wi(e)) {
						var n = e;
						break t
					}
					e = e.return
				}
				throw Error(o(160))
			}
			switch (e = n.stateNode, n.tag) {
				case 5:
					var r = !1;
					break;
				case 3:
				case 4:
					e = e.containerInfo, r = !0;
					break;
				default:
					throw Error(o(161))
			}
			16 & n.effectTag && (Ut(e, ""), n.effectTag &= -17);t: e: for (n = t;;) {
				for (; null === n.sibling;) {
					if (null === n.return || wi(n.return)) {
						n = null;
						break t
					}
					n = n.return
				}
				for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
					if (2 & n.effectTag) continue e;
					if (null === n.child || 4 === n.tag) continue e;
					n = (n.child.return = n).child
				}
				if (!(2 & n.effectTag)) {
					n = n.stateNode;
					break t
				}
			}
			for (var a = t;;) {
				var c = 5 === a.tag || 6 === a.tag;
				if (c) {
					var i = c ? a.stateNode : a.stateNode.instance;
					if (n)
						if (r) {
							var u = i;
							i = n, 8 === (c = e).nodeType ? c.parentNode.insertBefore(u, i) : c.insertBefore(u, i)
						} else e.insertBefore(i, n);
					else r ? (8 === (u = e).nodeType ? (c = u.parentNode).insertBefore(i, u) : (c = u).appendChild(i), null != (u = u._reactRootContainer) || null !== c.onclick || (c.onclick = zn)) : e.appendChild(i)
				} else if (4 !== a.tag && null !== a.child) {
					a = (a.child.return = a).child;
					continue
				}
				if (a === t) break;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === t) return;
					a = a.return
				}
				a.sibling.return = a.return, a = a.sibling
			}
		}

		function Ei(t, e, n) {
			for (var r, a, c = e, i = !1;;) {
				if (!i) {
					i = c.return;
					t: for (;;) {
						if (null === i) throw Error(o(160));
						switch (r = i.stateNode, i.tag) {
							case 5:
								a = !1;
								break t;
							case 3:
							case 4:
								r = r.containerInfo, a = !0;
								break t
						}
						i = i.return
					}
					i = !0
				}
				if (5 === c.tag || 6 === c.tag) {
					t: for (var u = t, s = c, l = n, g = s;;)
						if (bi(u, g, l), null !== g.child && 4 !== g.tag) g.child.return = g, g = g.child;
						else {
							if (g === s) break;
							for (; null === g.sibling;) {
								if (null === g.return || g.return === s) break t;
								g = g.return
							}
							g.sibling.return = g.return, g = g.sibling
						}a ? (u = r, s = c.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s)) : r.removeChild(c.stateNode)
				}
				else if (4 === c.tag) {
					if (null !== c.child) {
						r = c.stateNode.containerInfo, a = !0, c = (c.child.return = c).child;
						continue
					}
				} else if (bi(t, c, n), null !== c.child) {
					c = (c.child.return = c).child;
					continue
				}
				if (c === e) break;
				for (; null === c.sibling;) {
					if (null === c.return || c.return === e) return;
					4 === (c = c.return).tag && (i = !1)
				}
				c.sibling.return = c.return, c = c.sibling
			}
		}

		function Ti(t, e) {
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					mi(4, 8, e);
					break;
				case 1:
					break;
				case 5:
					var n = e.stateNode;
					if (null != n) {
						var r = e.memoizedProps,
							a = null !== t ? t.memoizedProps : r;
						t = e.type;
						var c = e.updateQueue;
						if ((e.updateQueue = null) !== c) {
							for (n[ur] = r, "input" === t && "radio" === r.type && null != r.name && Nt(n, r), Gn(t, a), e = Gn(t, r), a = 0; a < c.length; a += 2) {
								var i = c[a],
									u = c[a + 1];
								"style" === i ? Ln(n, u) : "dangerouslySetInnerHTML" === i ? zt(n, u) : "children" === i ? Ut(n, u) : Ot(n, i, u, e)
							}
							switch (t) {
								case "input":
									Pt(n, r);
									break;
								case "textarea":
									Mt(n, r);
									break;
								case "select":
									e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (t = r.value) ? It(n, !!r.multiple, t, !1) : e !== !!r.multiple && (null != r.defaultValue ? It(n, !!r.multiple, r.defaultValue, !0) : It(n, !!r.multiple, r.multiple ? [] : "", !1))
							}
						}
					}
					break;
				case 6:
					if (null === e.stateNode) throw Error(o(162));
					e.stateNode.nodeValue = e.memoizedProps;
					break;
				case 3:
					(e = e.stateNode).hydrate && (e.hydrate = !1, Ce(e.containerInfo));
					break;
				case 12:
					break;
				case 13:
					if (null === (n = e).memoizedState ? r = !1 : (r = !0, n = e.child, Ji = Ua()), null !== n) t: for (t = n;;) {
						if (5 === t.tag) c = t.stateNode, r ? "function" == typeof (c = c.style).setProperty ? c.setProperty("display", "none", "important") : c.display = "none" : (c = t.stateNode, a = null != (a = t.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null, c.style.display = Rn("display", a));
						else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
						else {
							if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
								(c = t.child.sibling).return = t, t = c;
								continue
							}
							if (null !== t.child) {
								t = (t.child.return = t).child;
								continue
							}
						}
						if (t === n) break t;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === n) break t;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					Si(e);
					break;
				case 19:
					Si(e);
					break;
				case 17:
				case 20:
				case 21:
					break;
				default:
					throw Error(o(163))
			}
		}

		function Si(t) {
			var e = t.updateQueue;
			if (null !== e) {
				t.updateQueue = null;
				var n = t.stateNode;
				null === n && (n = t.stateNode = new pi), e.forEach((function (e) {
					var r = function (t, e) {
						var n = t.stateNode;
						null !== n && n.delete(e), (e = 0) === e && (e = pu(e = fu(), t, null)), null !== (t = hu(t, e)) && mu(t)
					}.bind(null, t, e);
					n.has(e) || (n.add(e), e.then(r, r))
				}))
			}
		}
		var Ci = "function" == typeof WeakMap ? WeakMap : Map;

		function xi(t, e, n) {
			(n = pc(n, null)).tag = 3, n.payload = {
				element: null
			};
			var r = e.value;
			return n.callback = function () {
				nu || (nu = !0, ru = r), di(t, e)
			}, n
		}

		function Ni(t, e, n) {
			(n = pc(n, null)).tag = 3;
			var r = t.type.getDerivedStateFromError;
			if ("function" == typeof r) {
				var a = e.value;
				n.payload = function () {
					return di(t, e), r(a)
				}
			}
			var c = t.stateNode;
			return null !== c && "function" == typeof c.componentDidCatch && (n.callback = function () {
				"function" != typeof r && (null === au ? au = new Set([this]) : au.add(this), di(t, e));
				var n = e.stack;
				this.componentDidCatch(e.value, {
					componentStack: null !== n ? n : ""
				})
			}), n
		}
		var Pi, _i = Math.ceil,
			Ai = I.ReactCurrentDispatcher,
			ki = I.ReactCurrentOwner,
			Ii = 0,
			ji = 8,
			Di = 16,
			Mi = 32,
			Ri = 0,
			Li = 1,
			qi = 2,
			Fi = 3,
			Gi = 4,
			Bi = 5,
			zi = Ii,
			Ui = null,
			Wi = null,
			Hi = 0,
			Vi = Ri,
			$i = null,
			Yi = 1073741823,
			Ki = 1073741823,
			Xi = null,
			Qi = 0,
			Zi = !1,
			Ji = 0,
			tu = 500,
			eu = null,
			nu = !1,
			ru = null,
			au = null,
			cu = !1,
			ou = null,
			iu = 90,
			uu = null,
			su = 0,
			lu = null,
			gu = 0;

		function fu() {
			return (zi & (Di | Mi)) !== Ii ? 1073741821 - (Ua() / 10 | 0) : 0 !== gu ? gu : gu = 1073741821 - (Ua() / 10 | 0)
		}

		function pu(t, e, n) {
			if (0 == (2 & (e = e.mode))) return 1073741823;
			var r = Wa();
			if (0 == (4 & e)) return 99 === r ? 1073741823 : 1073741822;
			if ((zi & Di) !== Ii) return Hi;
			if (null !== n) t = Za(t, 0 | n.timeoutMs || 5e3, 250);
			else switch (r) {
				case 99:
					t = 1073741823;
					break;
				case 98:
					t = Za(t, 150, 100);
					break;
				case 97:
				case 96:
					t = Za(t, 5e3, 250);
					break;
				case 95:
					t = 2;
					break;
				default:
					throw Error(o(326))
			}
			return null !== Ui && t === Hi && --t, t
		}

		function du(t, e) {
			if (50 < su) throw su = 0, lu = null, Error(o(185));
			if (null !== (t = hu(t, e))) {
				var n = Wa();
				1073741823 === e ? (zi & ji) !== Ii && (zi & (Di | Mi)) === Ii ? bu(t) : (mu(t), zi === Ii && Ka()) : mu(t), (4 & zi) === Ii || 98 !== n && 99 !== n || (null === uu ? uu = new Map([
					[t, e]
				]) : (void 0 === (n = uu.get(t)) || e < n) && uu.set(t, e))
			}
		}

		function hu(t, e) {
			t.expirationTime < e && (t.expirationTime = e);
			var n = t.alternate;
			null !== n && n.expirationTime < e && (n.expirationTime = e);
			var r = t.return,
				a = null;
			if (null === r && 3 === t.tag) a = t.stateNode;
			else
				for (; null !== r;) {
					if (n = r.alternate, r.childExpirationTime < e && (r.childExpirationTime = e), null !== n && n.childExpirationTime < e && (n.childExpirationTime = e), null === r.return && 3 === r.tag) {
						a = r.stateNode;
						break
					}
					r = r.return
				}
			return null !== a && (Ui === a && (Su(e), Vi === Gi && Ku(a, Hi)), Xu(a, e)), a
		}

		function yu(t) {
			var e = t.lastExpiredTime;
			return 0 !== e ? e : Yu(t, e = t.firstPendingTime) ? (e = t.lastPingedTime, (t = t.nextKnownPendingLevel) < e ? e : t) : e
		}

		function mu(t) {
			if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = Ya(bu.bind(null, t));
			else {
				var e = yu(t),
					n = t.callbackNode;
				if (0 === e) null !== n && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
				else {
					var r = fu();
					if (r = 1073741823 === e ? 99 : 1 === e || 2 === e ? 95 : (r = 10 * (1073741821 - e) - 10 * (1073741821 - r)) <= 0 ? 99 : r <= 250 ? 98 : r <= 5250 ? 97 : 95, null !== n) {
						var a = t.callbackPriority;
						if (t.callbackExpirationTime === e && r <= a) return;
						n !== La && Na(n)
					}
					t.callbackExpirationTime = e, t.callbackPriority = r, e = 1073741823 === e ? Ya(bu.bind(null, t)) : $a(r, function t(e, n) {
						if (gu = 0, n) return Qu(e, n = fu()), mu(e), null;
						var r = yu(e);
						if (0 !== r) {
							if (n = e.callbackNode, (zi & (Di | Mi)) !== Ii) throw Error(o(327));
							if (Iu(), e === Ui && r === Hi || wu(e, r), null !== Wi) {
								var a = zi;
								zi |= Di;
								for (var c = Eu();;) try {
									xu();
									break
								} catch (t) {
									Ou(e, t)
								}
								if (ac(), zi = a, Ai.current = c, Vi === Li) throw n = $i, wu(e, r), Ku(e, r), mu(e), n;
								if (null === Wi) switch (c = e.finishedWork = e.current.alternate, e.finishedExpirationTime = r, a = Vi, Ui = null, a) {
									case Ri:
									case Li:
										throw Error(o(345));
									case qi:
										Qu(e, 2 < r ? 2 : r);
										break;
									case Fi:
										if (Ku(e, r), r === (a = e.lastSuspendedTime) && (e.nextKnownPendingLevel = _u(c)), 1073741823 === Yi && 10 < (c = Ji + tu - Ua())) {
											if (Zi) {
												var i = e.lastPingedTime;
												if (0 === i || r <= i) {
													e.lastPingedTime = r, wu(e, r);
													break
												}
											}
											if (0 !== (i = yu(e)) && i !== r) break;
											if (0 !== a && a !== r) {
												e.lastPingedTime = a;
												break
											}
											e.timeoutHandle = nr(Au.bind(null, e), c);
											break
										}
										Au(e);
										break;
									case Gi:
										if (Ku(e, r), r === (a = e.lastSuspendedTime) && (e.nextKnownPendingLevel = _u(c)), Zi && (0 === (c = e.lastPingedTime) || r <= c)) {
											e.lastPingedTime = r, wu(e, r);
											break
										}
										if (0 !== (c = yu(e)) && c !== r) break;
										if (0 !== a && a !== r) {
											e.lastPingedTime = a;
											break
										}
										if (1073741823 !== Ki ? a = 10 * (1073741821 - Ki) - Ua() : 1073741823 === Yi ? a = 0 : (a = 10 * (1073741821 - Yi) - 5e3, (a = (c = Ua()) - a) < 0 && (a = 0), (r = 10 * (1073741821 - r) - c) < (a = (a < 120 ? 120 : a < 480 ? 480 : a < 1080 ? 1080 : a < 1920 ? 1920 : a < 3e3 ? 3e3 : a < 4320 ? 4320 : 1960 * _i(a / 1960)) - a) && (a = r)), 10 < a) {
											e.timeoutHandle = nr(Au.bind(null, e), a);
											break
										}
										Au(e);
										break;
									case Bi:
										if (1073741823 !== Yi && null !== Xi) {
											i = Yi;
											var u = Xi;
											if (10 < (a = (a = 0 | u.busyMinDurationMs) <= 0 ? 0 : (c = 0 | u.busyDelayMs, (i = Ua() - (10 * (1073741821 - i) - (0 | u.timeoutMs || 5e3))) <= c ? 0 : c + a - i))) {
												Ku(e, r), e.timeoutHandle = nr(Au.bind(null, e), a);
												break
											}
										}
										Au(e);
										break;
									default:
										throw Error(o(329))
								}
								if (mu(e), e.callbackNode === n) return t.bind(null, e)
							}
						}
						return null
					}.bind(null, t), {
						timeout: 10 * (1073741821 - e) - Ua()
					}), t.callbackNode = e
				}
			}
		}

		function bu(t) {
			var e = t.lastExpiredTime;
			if (e = 0 !== e ? e : 1073741823, t.finishedExpirationTime === e) Au(t);
			else {
				if ((zi & (Di | Mi)) !== Ii) throw Error(o(327));
				if (Iu(), t === Ui && e === Hi || wu(t, e), null !== Wi) {
					var n = zi;
					zi |= Di;
					for (var r = Eu();;) try {
						Cu();
						break
					} catch (e) {
						Ou(t, e)
					}
					if (ac(), zi = n, Ai.current = r, Vi === Li) throw n = $i, wu(t, e), Ku(t, e), mu(t), n;
					if (null !== Wi) throw Error(o(261));
					t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, Ui = null, Au(t), mu(t)
				}
			}
			return null
		}

		function vu(t, e) {
			var n = zi;
			zi &= -2, zi |= ji;
			try {
				return t(e)
			} finally {
				(zi = n) === Ii && Ka()
			}
		}

		function wu(t, e) {
			t.finishedWork = null, t.finishedExpirationTime = 0;
			var n = t.timeoutHandle;
			if (-1 !== n && (t.timeoutHandle = -1, rr(n)), null !== Wi)
				for (n = Wi.return; null !== n;) {
					var r = n;
					switch (r.tag) {
						case 1:
							null != r.type.childContextTypes && va();
							break;
						case 3:
							zc(), wa();
							break;
						case 5:
							Wc(r);
							break;
						case 4:
							zc();
							break;
						case 13:
						case 19:
							ga(Hc);
							break;
						case 10:
							oc(r)
					}
					n = n.return
				}
			Wi = zu((Ui = t).current, null), Hi = e, Vi = Ri, Ki = Yi = 1073741823, Xi = $i = null, Qi = 0, Zi = !1
		}

		function Ou(t, e) {
			for (;;) {
				try {
					if (ac(), fo(), null === Wi || null === Wi.return) return Vi = Li, $i = e, null;
					t: {
						var n = t,
							r = Wi.return,
							a = Wi,
							c = e;
						if (e = Hi, a.effectTag |= 2048, a.firstEffect = a.lastEffect = null, null !== c && "object" == typeof c && "function" == typeof c.then) {
							var o = c,
								i = 0 != (1 & Hc.current),
								u = r;
							do {
								var s;
								if (s = 13 === u.tag) {
									var l = u.memoizedState;
									if (null !== l) s = null !== l.dehydrated;
									else {
										var g = u.memoizedProps;
										s = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !i)
									}
								}
								if (s) {
									var f = u.updateQueue;
									if (null === f) {
										var p = new Set;
										p.add(o), u.updateQueue = p
									} else f.add(o);
									if (0 == (2 & u.mode)) {
										if (u.effectTag |= 64, a.effectTag &= -2981, 1 === a.tag)
											if (null === a.alternate) a.tag = 17;
											else {
												var d = pc(1073741823, null);
												d.tag = 2, hc(a, d)
											}
										a.expirationTime = 1073741823;
										break t
									}
									c = void 0, a = e;
									var h = n.pingCache;
									if (null === h ? (h = n.pingCache = new Ci, c = new Set, h.set(o, c)) : void 0 === (c = h.get(o)) && (c = new Set, h.set(o, c)), !c.has(a)) {
										c.add(a);
										var y = Ru.bind(null, n, o, a);
										o.then(y, y)
									}
									u.effectTag |= 4096, u.expirationTime = e;
									break t
								}
								u = u.return
							} while (null !== u);
							c = Error((X(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Q(a))
						}
						Vi !== Bi && (Vi = qi),
						c = fi(c, a),
						u = r;do {
							switch (u.tag) {
								case 3:
									o = c, u.effectTag |= 4096, u.expirationTime = e, yc(u, xi(u, o, e));
									break t;
								case 1:
									o = c;
									var m = u.type,
										b = u.stateNode;
									if (0 == (64 & u.effectTag) && ("function" == typeof m.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === au || !au.has(b)))) {
										u.effectTag |= 4096, u.expirationTime = e, yc(u, Ni(u, o, e));
										break t
									}
							}
							u = u.return
						} while (null !== u)
					}
					Wi = Pu(Wi)
				} catch (t) {
					e = t;
					continue
				}
				break
			}
		}

		function Eu() {
			var t = Ai.current;
			return Ai.current = Ao, null === t ? Ao : t
		}

		function Tu(t, e) {
			t < Yi && 2 < t && (Yi = t), null !== e && t < Ki && 2 < t && (Ki = t, Xi = e)
		}

		function Su(t) {
			Qi < t && (Qi = t)
		}

		function Cu() {
			for (; null !== Wi;) Wi = Nu(Wi)
		}

		function xu() {
			for (; null !== Wi && !Pa();) Wi = Nu(Wi)
		}

		function Nu(t) {
			var e = Pi(t.alternate, t, Hi);
			return t.memoizedProps = t.pendingProps, null === e && (e = Pu(t)), ki.current = null, e
		}

		function Pu(t) {
			Wi = t;
			do {
				var e = Wi.alternate;
				if (t = Wi.return, 0 == (2048 & Wi.effectTag)) {
					t: {
						var n = e,
							r = Hi,
							c = (e = Wi).pendingProps;
						switch (e.tag) {
							case 2:
							case 16:
								break;
							case 15:
							case 0:
								break;
							case 1:
								ba(e.type) && va();
								break;
							case 3:
								zc(), wa(), (c = e.stateNode).pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== n && null !== n.child || !Go(e) || si(e), ti(e);
								break;
							case 5:
								Wc(e), r = Gc(Fc.current);
								var i = e.type;
								if (null !== n && null != e.stateNode) ei(n, e, i, c, r), n.ref !== e.ref && (e.effectTag |= 128);
								else if (c) {
									var u = Gc(Lc.current);
									if (Go(e)) {
										var s = (c = e).stateNode;
										n = c.type;
										var l = c.memoizedProps,
											g = r;
										switch (s[ir] = c, s[ur] = l, i = void 0, r = s, n) {
											case "iframe":
											case "object":
											case "embed":
												Cn("load", r);
												break;
											case "video":
											case "audio":
												for (s = 0; s < Jt.length; s++) Cn(Jt[s], r);
												break;
											case "source":
												Cn("error", r);
												break;
											case "img":
											case "image":
											case "link":
												Cn("error", r), Cn("load", r);
												break;
											case "form":
												Cn("reset", r), Cn("submit", r);
												break;
											case "details":
												Cn("toggle", r);
												break;
											case "input":
												xt(r, l), Cn("invalid", r), Bn(g, "onChange");
												break;
											case "select":
												r._wrapperState = {
													wasMultiple: !!l.multiple
												}, Cn("invalid", r), Bn(g, "onChange");
												break;
											case "textarea":
												Dt(r, l), Cn("invalid", r), Bn(g, "onChange")
										}
										for (i in Fn(n, l), s = null, l) l.hasOwnProperty(i) && (u = l[i], "children" === i ? "string" == typeof u ? r.textContent !== u && (s = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (s = ["children", "" + u]) : p.hasOwnProperty(i) && null != u && Bn(g, i));
										switch (n) {
											case "input":
												Tt(r), _t(r, l, !0);
												break;
											case "textarea":
												Tt(r), Rt(r);
												break;
											case "select":
											case "option":
												break;
											default:
												"function" == typeof l.onClick && (r.onclick = zn)
										}
										i = s, c.updateQueue = i, (c = null !== i) && si(e)
									} else {
										n = e, g = i, l = c, s = 9 === r.nodeType ? r : r.ownerDocument, u === Lt.html && (u = qt(g)), u === Lt.html ? "script" === g ? ((l = s.createElement("div")).innerHTML = "<script><\/script>", s = l.removeChild(l.firstChild)) : "string" == typeof l.is ? s = s.createElement(g, {
											is: l.is
										}) : (s = s.createElement(g), "select" === g && (g = s, l.multiple ? g.multiple = !0 : l.size && (g.size = l.size))) : s = s.createElementNS(u, g), (l = s)[ir] = n, l[ur] = c, Jo(l, e, !1, !1), e.stateNode = l;
										var f = r,
											d = Gn(g = i, n = c);
										switch (g) {
											case "iframe":
											case "object":
											case "embed":
												Cn("load", l), r = n;
												break;
											case "video":
											case "audio":
												for (r = 0; r < Jt.length; r++) Cn(Jt[r], l);
												r = n;
												break;
											case "source":
												Cn("error", l), r = n;
												break;
											case "img":
											case "image":
											case "link":
												Cn("error", l), Cn("load", l), r = n;
												break;
											case "form":
												Cn("reset", l), Cn("submit", l), r = n;
												break;
											case "details":
												Cn("toggle", l), r = n;
												break;
											case "input":
												xt(l, n), r = Ct(l, n), Cn("invalid", l), Bn(f, "onChange");
												break;
											case "option":
												r = kt(l, n);
												break;
											case "select":
												l._wrapperState = {
													wasMultiple: !!n.multiple
												}, r = a({}, n, {
													value: void 0
												}), Cn("invalid", l), Bn(f, "onChange");
												break;
											case "textarea":
												Dt(l, n), r = jt(l, n), Cn("invalid", l), Bn(f, "onChange");
												break;
											default:
												r = n
										}
										Fn(g, r), s = void 0, u = g;
										var h = l,
											y = r;
										for (s in y)
											if (y.hasOwnProperty(s)) {
												var m = y[s];
												"style" === s ? Ln(h, m) : "dangerouslySetInnerHTML" === s ? null != (m = m ? m.__html : void 0) && zt(h, m) : "children" === s ? "string" == typeof m ? "textarea" === u && "" === m || Ut(h, m) : "number" == typeof m && Ut(h, "" + m) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (p.hasOwnProperty(s) ? null != m && Bn(f, s) : null != m && Ot(h, s, m, d))
											}
										switch (g) {
											case "input":
												Tt(l), _t(l, n, !1);
												break;
											case "textarea":
												Tt(l), Rt(l);
												break;
											case "option":
												null != n.value && l.setAttribute("value", "" + wt(n.value));
												break;
											case "select":
												(r = l).multiple = !!n.multiple, null != (l = n.value) ? It(r, !!n.multiple, l, !1) : null != n.defaultValue && It(r, !!n.multiple, n.defaultValue, !0);
												break;
											default:
												"function" == typeof r.onClick && (l.onclick = zn)
										}(c = tr(i, c)) && si(e)
									}
									null !== e.ref && (e.effectTag |= 128)
								} else if (null === e.stateNode) throw Error(o(166));
								break;
							case 6:
								if (n && null != e.stateNode) ni(n, e, n.memoizedProps, c);
								else {
									if ("string" != typeof c && null === e.stateNode) throw Error(o(166));
									r = Gc(Fc.current), Gc(Lc.current), Go(e) ? (i = (c = e).stateNode, r = c.memoizedProps, i[ir] = c, (c = i.nodeValue !== r) && si(e)) : (i = e, (c = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(c))[ir] = i, e.stateNode = c)
								}
								break;
							case 11:
								break;
							case 13:
								if (ga(Hc), c = e.memoizedState, 0 != (64 & e.effectTag)) {
									e.expirationTime = r;
									break t
								}
								c = null !== c, i = !1, null === n ? void 0 !== e.memoizedProps.fallback && Go(e) : (i = null !== (r = n.memoizedState), c || null === r || null !== (r = n.child.sibling) && (null !== (l = e.firstEffect) ? (e.firstEffect = r).nextEffect = l : (e.firstEffect = e.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), c && !i && 0 != (2 & e.mode) && (null === n && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Hc.current) ? Vi === Ri && (Vi = Fi) : (Vi !== Ri && Vi !== Fi || (Vi = Gi), 0 !== Qi && null !== Ui && (Ku(Ui, Hi), Xu(Ui, Qi)))), (c || i) && (e.effectTag |= 4);
								break;
							case 7:
							case 8:
							case 12:
								break;
							case 4:
								zc(), ti(e);
								break;
							case 10:
								oc(e);
								break;
							case 9:
							case 14:
								break;
							case 17:
								ba(e.type) && va();
								break;
							case 19:
								if (ga(Hc), null === (c = e.memoizedState)) break;
								if (i = 0 != (64 & e.effectTag), null === (l = c.rendering)) {
									if (i) li(c, !1);
									else if (Vi !== Ri || null !== n && 0 != (64 & n.effectTag))
										for (n = e.child; null !== n;) {
											if (null !== (l = Vc(n))) {
												for (e.effectTag |= 64, li(c, !1), null !== (i = l.updateQueue) && (e.updateQueue = i, e.effectTag |= 4), null === c.lastEffect && (e.firstEffect = null), e.lastEffect = c.lastEffect, c = r, i = e.child; null !== i;) n = c, (r = i).effectTag &= 2, r.nextEffect = null, r.firstEffect = null, (r.lastEffect = null) === (l = r.alternate) ? (r.childExpirationTime = 0, r.expirationTime = n, r.child = null, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null) : (r.childExpirationTime = l.childExpirationTime, r.expirationTime = l.expirationTime, r.child = l.child, r.memoizedProps = l.memoizedProps, r.memoizedState = l.memoizedState, r.updateQueue = l.updateQueue, n = l.dependencies, r.dependencies = null === n ? null : {
													expirationTime: n.expirationTime,
													firstContext: n.firstContext,
													responders: n.responders
												}), i = i.sibling;
												fa(Hc, 1 & Hc.current | 2), e = e.child;
												break t
											}
											n = n.sibling
										}
								} else {
									if (!i)
										if (null !== (n = Vc(l))) {
											if (e.effectTag |= 64, i = !0, null !== (r = n.updateQueue) && (e.updateQueue = r, e.effectTag |= 4), li(c, !0), null === c.tail && "hidden" === c.tailMode && !l.alternate) {
												null !== (e = e.lastEffect = c.lastEffect) && (e.nextEffect = null);
												break
											}
										} else Ua() > c.tailExpiration && 1 < r && (e.effectTag |= 64, li(c, !(i = !0)), e.expirationTime = e.childExpirationTime = r - 1);
									c.isBackwards ? (l.sibling = e.child, e.child = l) : (null !== (r = c.last) ? r.sibling = l : e.child = l, c.last = l)
								}
								if (null === c.tail) break;
								0 === c.tailExpiration && (c.tailExpiration = Ua() + 500), r = c.tail, c.rendering = r, c.tail = r.sibling, c.lastEffect = e.lastEffect, r.sibling = null, c = Hc.current, fa(Hc, c = i ? 1 & c | 2 : 1 & c), e = r;
								break t;
							case 20:
							case 21:
								break;
							default:
								throw Error(o(156, e.tag))
						}
						e = null
					}
					if (c = Wi, 1 === Hi || 1 !== c.childExpirationTime) {
						for (i = 0, r = c.child; null !== r;) i < (n = r.expirationTime) && (i = n), i < (l = r.childExpirationTime) && (i = l), r = r.sibling;
						c.childExpirationTime = i
					}
					if (null !== e) return e;null !== t && 0 == (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = Wi.firstEffect), null !== Wi.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = Wi.firstEffect), t.lastEffect = Wi.lastEffect), 1 < Wi.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = Wi : t.firstEffect = Wi, t.lastEffect = Wi))
				}
				else {
					if (null !== (e = gi(Wi))) return e.effectTag &= 2047, e;
					null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
				}
				if (null !== (e = Wi.sibling)) return e;
				Wi = t
			} while (null !== Wi);
			return Vi === Ri && (Vi = Bi), null
		}

		function _u(t) {
			var e = t.expirationTime;
			return (t = t.childExpirationTime) < e ? e : t
		}

		function Au(t) {
			var e = Wa();
			return Va(99, function (t, e) {
				for (; Iu(), null !== ou;);
				if ((zi & (Di | Mi)) !== Ii) throw Error(o(327));
				var n = t.finishedWork,
					r = t.finishedExpirationTime;
				if (null === n) return null;
				if (t.finishedWork = null, t.finishedExpirationTime = 0, n === t.current) throw Error(o(177));
				t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
				var a = _u(n);
				if (t.firstPendingTime = a, r <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === Ui && (Wi = Ui = null, Hi = 0), null !== (a = 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, n.firstEffect) : n : n.firstEffect)) {
					var c = zi;
					zi |= Mi, ki.current = null, Zn = Sn;
					var i = Vn();
					if ($n(i)) {
						if ("selectionStart" in i) var u = {
							start: i.selectionStart,
							end: i.selectionEnd
						};
						else t: {
							var s = (u = (u = i.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
							if (s && 0 !== s.rangeCount) {
								u = s.anchorNode;
								var l = s.anchorOffset,
									g = s.focusNode;
								s = s.focusOffset;
								try {
									u.nodeType, g.nodeType
								} catch (t) {
									u = null;
									break t
								}
								var f = 0,
									p = -1,
									d = -1,
									h = 0,
									y = 0,
									m = i,
									b = null;
								e: for (;;) {
									for (var v; m !== u || 0 !== l && 3 !== m.nodeType || (p = f + l), m !== g || 0 !== s && 3 !== m.nodeType || (d = f + s), 3 === m.nodeType && (f += m.nodeValue.length), null !== (v = m.firstChild);) b = m, m = v;
									for (;;) {
										if (m === i) break e;
										if (b === u && ++h === l && (p = f), b === g && ++y === s && (d = f), null !== (v = m.nextSibling)) break;
										b = (m = b).parentNode
									}
									m = v
								}
								u = -1 === p || -1 === d ? null : {
									start: p,
									end: d
								}
							} else u = null
						}
						u = u || {
							start: 0,
							end: 0
						}
					} else u = null;
					Sn = !(Jn = {
						focusedElem: i,
						selectionRange: u
					}), eu = a;
					do {
						try {
							ku()
						} catch (t) {
							if (null === eu) throw Error(o(330));
							Mu(eu, t), eu = eu.nextEffect
						}
					} while (null !== eu);
					eu = a;
					do {
						try {
							for (i = t, u = e; null !== eu;) {
								var w = eu.effectTag;
								if (16 & w && Ut(eu.stateNode, ""), 128 & w) {
									var O = eu.alternate;
									if (null !== O) {
										var E = O.ref;
										null !== E && ("function" == typeof E ? E(null) : E.current = null)
									}
								}
								switch (1038 & w) {
									case 2:
										Oi(eu), eu.effectTag &= -3;
										break;
									case 6:
										Oi(eu), eu.effectTag &= -3, Ti(eu.alternate, eu);
										break;
									case 1024:
										eu.effectTag &= -1025;
										break;
									case 1028:
										eu.effectTag &= -1025, Ti(eu.alternate, eu);
										break;
									case 4:
										Ti(eu.alternate, eu);
										break;
									case 8:
										Ei(i, l = eu, u), vi(l)
								}
								eu = eu.nextEffect
							}
						} catch (t) {
							if (null === eu) throw Error(o(330));
							Mu(eu, t), eu = eu.nextEffect
						}
					} while (null !== eu);
					if (E = Jn, O = Vn(), w = E.focusedElem, u = E.selectionRange, O !== w && w && w.ownerDocument && function t(e, n) {
							return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? t(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
						}(w.ownerDocument.documentElement, w)) {
						null !== u && $n(w) && (O = u.start, void 0 === (E = u.end) && (E = O), "selectionStart" in w ? (w.selectionStart = O, w.selectionEnd = Math.min(E, w.value.length)) : (E = (O = w.ownerDocument || document) && O.defaultView || window).getSelection && (E = E.getSelection(), l = w.textContent.length, i = Math.min(u.start, l), u = void 0 === u.end ? i : Math.min(u.end, l), !E.extend && u < i && (l = u, u = i, i = l), l = Hn(w, i), g = Hn(w, u), l && g && (1 !== E.rangeCount || E.anchorNode !== l.node || E.anchorOffset !== l.offset || E.focusNode !== g.node || E.focusOffset !== g.offset) && ((O = O.createRange()).setStart(l.node, l.offset), E.removeAllRanges(), u < i ? (E.addRange(O), E.extend(g.node, g.offset)) : (O.setEnd(g.node, g.offset), E.addRange(O))))), O = [];
						for (E = w; E = E.parentNode;) 1 === E.nodeType && O.push({
							element: E,
							left: E.scrollLeft,
							top: E.scrollTop
						});
						for ("function" == typeof w.focus && w.focus(), w = 0; w < O.length; w++)(E = O[w]).element.scrollLeft = E.left, E.element.scrollTop = E.top
					}
					Sn = !!Zn, Zn = Jn = null, t.current = n, eu = a;
					do {
						try {
							for (w = r; null !== eu;) {
								var T = eu.effectTag;
								if (36 & T) {
									var S = eu.alternate;
									switch (E = w, (O = eu).tag) {
										case 0:
										case 11:
										case 15:
											mi(16, 32, O);
											break;
										case 1:
											var C = O.stateNode;
											if (4 & O.effectTag)
												if (null === S) C.componentDidMount();
												else {
													var x = O.elementType === O.type ? S.memoizedProps : Ja(O.type, S.memoizedProps);
													C.componentDidUpdate(x, S.memoizedState, C.__reactInternalSnapshotBeforeUpdate)
												}
											var N = O.updateQueue;
											null !== N && wc(0, N, C);
											break;
										case 3:
											var P = O.updateQueue;
											if (null !== P) {
												if ((i = null) !== O.child) switch (O.child.tag) {
													case 5:
														i = O.child.stateNode;
														break;
													case 1:
														i = O.child.stateNode
												}
												wc(0, P, i)
											}
											break;
										case 5:
											var _ = O.stateNode;
											null === S && 4 & O.effectTag && tr(O.type, O.memoizedProps) && _.focus();
											break;
										case 6:
										case 4:
										case 12:
											break;
										case 13:
											if (null === O.memoizedState) {
												var A = O.alternate;
												if (null !== A) {
													var k = A.memoizedState;
													if (null !== k) {
														var I = k.dehydrated;
														null !== I && Ce(I)
													}
												}
											}
											break;
										case 19:
										case 17:
										case 20:
										case 21:
											break;
										default:
											throw Error(o(163))
									}
								}
								if (128 & T) {
									O = void 0;
									var j = eu.ref;
									if (null !== j) {
										var D = eu.stateNode;
										switch (eu.tag) {
											case 5:
												O = D;
												break;
											default:
												O = D
										}
										"function" == typeof j ? j(O) : j.current = O
									}
								}
								eu = eu.nextEffect
							}
						} catch (t) {
							if (null === eu) throw Error(o(330));
							Mu(eu, t), eu = eu.nextEffect
						}
					} while (null !== eu);
					eu = null, qa(), zi = c
				} else t.current = n;
				if (cu) cu = !1, ou = t, iu = e;
				else
					for (eu = a; null !== eu;) e = eu.nextEffect, eu.nextEffect = null, eu = e;
				if (0 === (e = t.firstPendingTime) && (au = null), 1073741823 === e ? t === lu ? su++ : (su = 0, lu = t) : su = 0, "function" == typeof Lu && Lu(n.stateNode, r), mu(t), nu) throw nu = !1, t = ru, ru = null, t;
				return (zi & ji) !== Ii || Ka(), null
			}.bind(null, t, e)), null
		}

		function ku() {
			for (; null !== eu;) {
				var t = eu.effectTag;
				0 != (256 & t) && yi(eu.alternate, eu), 0 == (512 & t) || cu || (cu = !0, $a(97, (function () {
					return Iu(), null
				}))), eu = eu.nextEffect
			}
		}

		function Iu() {
			if (90 !== iu) {
				var t = 97 < iu ? 97 : iu;
				return iu = 90, Va(t, ju)
			}
		}

		function ju() {
			if (null === ou) return !1;
			var t = ou;
			if (ou = null, (zi & (Di | Mi)) !== Ii) throw Error(o(331));
			var e = zi;
			for (zi |= Mi, t = t.current.firstEffect; null !== t;) {
				try {
					var n = t;
					if (0 != (512 & n.effectTag)) switch (n.tag) {
						case 0:
						case 11:
						case 15:
							mi(128, 0, n), mi(0, 64, n)
					}
				} catch (e) {
					if (null === t) throw Error(o(330));
					Mu(t, e)
				}
				n = t.nextEffect, t.nextEffect = null, t = n
			}
			return zi = e, Ka(), !0
		}

		function Du(t, e, n) {
			hc(t, e = xi(t, e = fi(n, e), 1073741823)), null !== (t = hu(t, 1073741823)) && mu(t)
		}

		function Mu(t, e) {
			if (3 === t.tag) Du(t, t, e);
			else
				for (var n = t.return; null !== n;) {
					if (3 === n.tag) {
						Du(n, t, e);
						break
					}
					if (1 === n.tag) {
						var r = n.stateNode;
						if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === au || !au.has(r))) {
							hc(n, t = Ni(n, t = fi(e, t), 1073741823)), null !== (n = hu(n, 1073741823)) && mu(n);
							break
						}
					}
					n = n.return
				}
		}

		function Ru(t, e, n) {
			var r = t.pingCache;
			null !== r && r.delete(e), Ui === t && Hi === n ? Vi === Gi || Vi === Fi && 1073741823 === Yi && Ua() - Ji < tu ? wu(t, Hi) : Zi = !0 : Yu(t, n) && (0 !== (e = t.lastPingedTime) && e < n || (t.lastPingedTime = n, t.finishedExpirationTime === n && (t.finishedExpirationTime = 0, t.finishedWork = null), mu(t)))
		}
		Pi = function (t, e, n) {
			var r = e.expirationTime;
			if (null !== t) {
				var a = e.pendingProps;
				if (t.memoizedProps !== a || ha.current) Uo = !0;
				else {
					if (r < n) {
						switch (Uo = !1, e.tag) {
							case 3:
								Zo(e), Bo();
								break;
							case 5:
								if (Uc(e), 4 & e.mode && 1 !== n && a.hidden) return e.expirationTime = e.childExpirationTime = 1, null;
								break;
							case 1:
								ba(e.type) && Ta(e);
								break;
							case 4:
								Bc(e, e.stateNode.containerInfo);
								break;
							case 10:
								cc(e, e.memoizedProps.value);
								break;
							case 13:
								if (null !== e.memoizedState) return 0 !== (r = e.child.childExpirationTime) && n <= r ? ai(t, e, n) : (fa(Hc, 1 & Hc.current), null !== (e = ui(t, e, n)) ? e.sibling : null);
								fa(Hc, 1 & Hc.current);
								break;
							case 19:
								if (r = e.childExpirationTime >= n, 0 != (64 & t.effectTag)) {
									if (r) return ii(t, e, n);
									e.effectTag |= 64
								}
								if (null !== (a = e.memoizedState) && (a.rendering = null, a.tail = null), fa(Hc, Hc.current), !r) return null
						}
						return ui(t, e, n)
					}
					Uo = !1
				}
			} else Uo = !1;
			switch (e.expirationTime = 0, e.tag) {
				case 2:
					if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, a = ma(e, da.current), uc(e, n), a = go(null, e, r, t, a, n), e.effectTag |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
						if (e.tag = 1, fo(), ba(r)) {
							var c = !0;
							Ta(e)
						} else c = !1;
						e.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
						var i = r.getDerivedStateFromProps;
						"function" == typeof i && Sc(e, r, i, t), a.updater = Cc, _c((e.stateNode = a)._reactInternalFiber = e, r, t, n), e = Qo(null, e, r, !0, c, n)
					} else e.tag = 0, Wo(null, e, a, n), e = e.child;
					return e;
				case 16:
					if (a = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, function (t) {
							if (-1 === t._status) {
								t._status = 0;
								var e = t._ctor;
								e = e(), (t._result = e).then((function (e) {
									0 === t._status && (e = e.default, t._status = 1, t._result = e)
								}), (function (e) {
									0 === t._status && (t._status = 2, t._result = e)
								}))
							}
						}(a), 1 !== a._status) throw a._result;
					switch (a = a._result, e.type = a, c = e.tag = function (t) {
						if ("function" == typeof t) return Bu(t) ? 1 : 0;
						if (null != t) {
							if ((t = t.$$typeof) === U) return 11;
							if (t === V) return 14
						}
						return 2
					}(a), t = Ja(a, t), c) {
						case 0:
							e = Ko(null, e, a, t, n);
							break;
						case 1:
							e = Xo(null, e, a, t, n);
							break;
						case 11:
							e = Ho(null, e, a, t, n);
							break;
						case 14:
							e = Vo(null, e, a, Ja(a.type, t), r, n);
							break;
						default:
							throw Error(o(306, a, ""))
					}
					return e;
				case 0:
					return r = e.type, a = e.pendingProps, Ko(t, e, r, a = e.elementType === r ? a : Ja(r, a), n);
				case 1:
					return r = e.type, a = e.pendingProps, Xo(t, e, r, a = e.elementType === r ? a : Ja(r, a), n);
				case 3:
					if (Zo(e), null === (r = e.updateQueue)) throw Error(o(282));
					if (a = null !== (a = e.memoizedState) ? a.element : null, vc(e, r, e.pendingProps, null, n), (r = e.memoizedState.element) === a) Bo(), e = ui(t, e, n);
					else {
						if ((a = e.stateNode.hydrate) && (Do = ar(e.stateNode.containerInfo.firstChild), jo = e, a = Mo = !0), a)
							for (n = Mc(e, null, r, n), e.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
						else Wo(t, e, r, n), Bo();
						e = e.child
					}
					return e;
				case 5:
					return Uc(e), null === t && qo(e), r = e.type, a = e.pendingProps, c = null !== t ? t.memoizedProps : null, i = a.children, er(r, a) ? i = null : null !== c && er(r, c) && (e.effectTag |= 16), Yo(t, e), 4 & e.mode && 1 !== n && a.hidden ? (e.expirationTime = e.childExpirationTime = 1, null) : (Wo(t, e, i, n), e.child);
				case 6:
					return null === t && qo(e), null;
				case 13:
					return ai(t, e, n);
				case 4:
					return Bc(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = Dc(e, null, r, n) : Wo(t, e, r, n), e.child;
				case 11:
					return r = e.type, a = e.pendingProps, Ho(t, e, r, a = e.elementType === r ? a : Ja(r, a), n);
				case 7:
					return Wo(t, e, e.pendingProps, n), e.child;
				case 8:
				case 12:
					return Wo(t, e, e.pendingProps.children, n), e.child;
				case 10:
					t: {
						if (r = e.type._context, a = e.pendingProps, i = e.memoizedProps, cc(e, c = a.value), null !== i) {
							var u = i.value;
							if (0 == (c = Zr(u, c) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, c) : 1073741823))) {
								if (i.children === a.children && !ha.current) {
									e = ui(t, e, n);
									break t
								}
							} else
								for (null !== (u = e.child) && (u.return = e); null !== u;) {
									var s = u.dependencies;
									if (null !== s) {
										i = u.child;
										for (var l = s.firstContext; null !== l;) {
											if (l.context === r && 0 != (l.observedBits & c)) {
												1 === u.tag && ((l = pc(n, null)).tag = 2, hc(u, l)), u.expirationTime < n && (u.expirationTime = n), null !== (l = u.alternate) && l.expirationTime < n && (l.expirationTime = n), ic(u.return, n), s.expirationTime < n && (s.expirationTime = n);
												break
											}
											l = l.next
										}
									} else i = 10 === u.tag && u.type === e.type ? null : u.child;
									if (null !== i) i.return = u;
									else
										for (i = u; null !== i;) {
											if (i === e) {
												i = null;
												break
											}
											if (null !== (u = i.sibling)) {
												u.return = i.return, i = u;
												break
											}
											i = i.return
										}
									u = i
								}
						}
						Wo(t, e, a.children, n),
						e = e.child
					}
					return e;
				case 9:
					return a = e.type, r = (c = e.pendingProps).children, uc(e, n), r = r(a = sc(a, c.unstable_observedBits)), e.effectTag |= 1, Wo(t, e, r, n), e.child;
				case 14:
					return c = Ja(a = e.type, e.pendingProps), Vo(t, e, a, c = Ja(a.type, c), r, n);
				case 15:
					return $o(t, e, e.type, e.pendingProps, r, n);
				case 17:
					return r = e.type, a = e.pendingProps, a = e.elementType === r ? a : Ja(r, a), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, ba(r) ? (t = !0, Ta(e)) : t = !1, uc(e, n), Nc(e, r, a), _c(e, r, a, n), Qo(null, e, r, !0, t, n);
				case 19:
					return ii(t, e, n)
			}
			throw Error(o(156, e.tag))
		};
		var Lu = null,
			qu = null;

		function Fu(t, e, n, r) {
			this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
		}

		function Gu(t, e, n, r) {
			return new Fu(t, e, n, r)
		}

		function Bu(t) {
			return !(!(t = t.prototype) || !t.isReactComponent)
		}

		function zu(t, e) {
			var n = t.alternate;
			return null === n ? ((n = Gu(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, (n.alternate = t).alternate = n) : (n.pendingProps = e, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = t.childExpirationTime, n.expirationTime = t.expirationTime, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
				expirationTime: e.expirationTime,
				firstContext: e.firstContext,
				responders: e.responders
			}, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
		}

		function Uu(t, e, n, r, a, c) {
			var i = 2;
			if ("function" == typeof (r = t)) Bu(t) && (i = 1);
			else if ("string" == typeof t) i = 5;
			else t: switch (t) {
				case L:
					return Wu(n.children, a, c, e);
				case z:
					i = 8, a |= 7;
					break;
				case q:
					i = 8, a |= 1;
					break;
				case F:
					return (t = Gu(12, n, e, 8 | a)).elementType = F, t.type = F, t.expirationTime = c, t;
				case W:
					return (t = Gu(13, n, e, a)).type = W, t.elementType = W, t.expirationTime = c, t;
				case H:
					return (t = Gu(19, n, e, a)).elementType = H, t.expirationTime = c, t;
				default:
					if ("object" == typeof t && null !== t) switch (t.$$typeof) {
						case G:
							i = 10;
							break t;
						case B:
							i = 9;
							break t;
						case U:
							i = 11;
							break t;
						case V:
							i = 14;
							break t;
						case $:
							i = 16, r = null;
							break t
					}
					throw Error(o(130, null == t ? t : typeof t, ""))
			}
			return (e = Gu(i, n, e, a)).elementType = t, e.type = r, e.expirationTime = c, e
		}

		function Wu(t, e, n, r) {
			return (t = Gu(7, t, r, e)).expirationTime = n, t
		}

		function Hu(t, e, n) {
			return (t = Gu(6, t, null, e)).expirationTime = n, t
		}

		function Vu(t, e, n) {
			return (e = Gu(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = n, e.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation
			}, e
		}

		function $u(t, e, n) {
			this.tag = e, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
		}

		function Yu(t, e) {
			var n = t.firstSuspendedTime;
			return t = t.lastSuspendedTime, 0 !== n && e <= n && t <= e
		}

		function Ku(t, e) {
			var n = t.firstSuspendedTime,
				r = t.lastSuspendedTime;
			n < e && (t.firstSuspendedTime = e), (e < r || 0 === n) && (t.lastSuspendedTime = e), e <= t.lastPingedTime && (t.lastPingedTime = 0), e <= t.lastExpiredTime && (t.lastExpiredTime = 0)
		}

		function Xu(t, e) {
			e > t.firstPendingTime && (t.firstPendingTime = e);
			var n = t.firstSuspendedTime;
			0 !== n && (n <= e ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : e >= t.lastSuspendedTime && (t.lastSuspendedTime = e + 1), e > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = e))
		}

		function Qu(t, e) {
			var n = t.lastExpiredTime;
			(0 === n || e < n) && (t.lastExpiredTime = e)
		}

		function Zu(t, e, n, r) {
			var a = e.current,
				c = fu(),
				i = Ec.suspense;
			c = pu(c, a, i);
			t: if (n) {
				e: {
					if (te(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(o(170));
					var u = n;do {
						switch (u.tag) {
							case 3:
								u = u.stateNode.context;
								break e;
							case 1:
								if (ba(u.type)) {
									u = u.stateNode.__reactInternalMemoizedMergedChildContext;
									break e
								}
						}
						u = u.return
					} while (null !== u);
					throw Error(o(171))
				}
				if (1 === n.tag) {
					var s = n.type;
					if (ba(s)) {
						n = Ea(n, s, u);
						break t
					}
				}
				n = u
			}
			else n = pa;
			return null === e.context ? e.context = n : e.pendingContext = n, (e = pc(c, i)).payload = {
				element: t
			}, null !== (r = void 0 === r ? null : r) && (e.callback = r), hc(a, e), du(a, c), c
		}

		function Ju(t) {
			if (!(t = t.current).child) return null;
			switch (t.child.tag) {
				case 5:
				default:
					return t.child.stateNode
			}
		}

		function ts(t, e) {
			null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < e && (t.retryTime = e)
		}

		function es(t, e) {
			ts(t, e), (t = t.alternate) && ts(t, e)
		}

		function ns(t, e, n) {
			var r = new $u(t, e, n = null != n && !0 === n.hydrate),
				a = Gu(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0);
			(r.current = a).stateNode = r, t[sr] = r.current, n && 0 !== e && function (t) {
				var e = In(t);
				he.forEach((function (n) {
					jn(n, t, e)
				})), ye.forEach((function (n) {
					jn(n, t, e)
				}))
			}(9 === t.nodeType ? t : t.ownerDocument), this._internalRoot = r
		}

		function rs(t) {
			return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
		}

		function as(t, e, n, r, a) {
			var c = n._reactRootContainer;
			if (c) {
				var o = c._internalRoot;
				if ("function" == typeof a) {
					var i = a;
					a = function () {
						var t = Ju(o);
						i.call(t)
					}
				}
				Zu(e, o, t, a)
			} else {
				if (c = n._reactRootContainer = function (t, e) {
						if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
							for (var n; n = t.lastChild;) t.removeChild(n);
						return new ns(t, 0, e ? {
							hydrate: !0
						} : void 0)
					}(n, r), o = c._internalRoot, "function" == typeof a) {
					var u = a;
					a = function () {
						var t = Ju(o);
						u.call(t)
					}
				}
				vu((function () {
					Zu(e, o, t, a)
				}))
			}
			return Ju(o)
		}

		function cs(t, e) {
			var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!rs(e)) throw Error(o(200));
			return function (t, e, n, r) {
				var a = 3 < arguments.length && void 0 !== r ? r : null;
				return {
					$$typeof: R,
					key: null == a ? null : "" + a,
					children: t,
					containerInfo: e,
					implementation: n
				}
			}(t, e, null, n)
		}
		ns.prototype.render = function (t, e) {
			Zu(t, this._internalRoot, null, void 0 === e ? null : e)
		}, ns.prototype.unmount = function (t) {
			var e = this._internalRoot,
				n = void 0 === t ? null : t,
				r = e.containerInfo;
			Zu(null, e, null, (function () {
				(r[sr] = null) !== n && n()
			}))
		}, ae = function (t) {
			if (13 === t.tag) {
				var e = Za(fu(), 150, 100);
				du(t, e), es(t, e)
			}
		}, ce = function (t) {
			if (13 === t.tag) {
				fu();
				var e = Qa++;
				du(t, e), es(t, e)
			}
		}, oe = function (t) {
			if (13 === t.tag) {
				var e = fu();
				du(t, e = pu(e, t, null)), es(t, e)
			}
		}, J = function (t, e, n) {
			switch (e) {
				case "input":
					if (Pt(t, n), e = n.name, "radio" === n.type && null != e) {
						for (n = t; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
							var r = n[e];
							if (r !== t && r.form === t.form) {
								var a = pr(r);
								if (!a) throw Error(o(90));
								St(r), Pt(r, a)
							}
						}
					}
					break;
				case "textarea":
					Mt(t, n);
					break;
				case "select":
					null != (e = n.value) && It(t, !!n.multiple, e, !1)
			}
		}, ot = function (t, e, n, r) {
			var a = zi;
			zi |= 4;
			try {
				return Va(98, t.bind(null, e, n, r))
			} finally {
				(zi = a) === Ii && Ka()
			}
		}, it = function () {
			(zi & (1 | Di | Mi)) === Ii && (function () {
				if (null !== uu) {
					var t = uu;
					uu = null, t.forEach((function (t, e) {
						Qu(e, t), mu(e)
					})), Ka()
				}
			}(), Iu())
		};
		var os, is, us = {
			createPortal: cs,
			findDOMNode: function (t) {
				if (null == t) return null;
				if (1 === t.nodeType) return t;
				var e = t._reactInternalFiber;
				if (void 0 !== e) return null === (t = re(e)) ? null : t.stateNode;
				if ("function" == typeof t.render) throw Error(o(188));
				throw Error(o(268, Object.keys(t)))
			},
			hydrate: function (t, e, n) {
				if (!rs(e)) throw Error(o(200));
				return as(null, t, e, !0, n)
			},
			render: function (t, e, n) {
				if (!rs(e)) throw Error(o(200));
				return as(null, t, e, !1, n)
			},
			unstable_renderSubtreeIntoContainer: function (t, e, n, r) {
				if (!rs(n)) throw Error(o(200));
				if (null == t || void 0 === t._reactInternalFiber) throw Error(o(38));
				return as(t, e, n, !1, r)
			},
			unmountComponentAtNode: function (t) {
				if (!rs(t)) throw Error(o(40));
				return !!t._reactRootContainer && (vu((function () {
					as(null, null, t, !1, (function () {
						t._reactRootContainer = null, t[sr] = null
					}))
				})), !0)
			},
			unstable_createPortal: function () {
				return cs.apply(void 0, arguments)
			},
			unstable_batchedUpdates: ct = function (t, e) {
				var n = zi;
				zi |= 1;
				try {
					return t(e)
				} finally {
					(zi = n) === Ii && Ka()
				}
			},
			flushSync: function (t, e) {
				if ((zi & (Di | Mi)) !== Ii) throw Error(o(187));
				var n = zi;
				zi |= 1;
				try {
					return Va(99, t.bind(null, e))
				} finally {
					zi = n, Ka()
				}
			},
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
				Events: [gr, fr, pr, A.injectEventPluginsByName, f, Ie, function (t) {
					x(t, ke)
				}, rt, at, Pn, _, Iu, {
					current: !(ut = function (t, e) {
						var n = zi;
						zi |= 2;
						try {
							return t(e)
						} finally {
							(zi = n) === Ii && Ka()
						}
					})
				}]
			}
		};
		is = (os = {
				findFiberByHostInstance: lr,
				bundleType: 0,
				version: "16.12.0",
				rendererPackageName: "react-dom"
			}).findFiberByHostInstance,
			function (t) {
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!e.isDisabled && e.supportsFiber) try {
						var n = e.inject(t);
						Lu = function (t) {
							try {
								e.onCommitFiberRoot(n, t, void 0, 64 == (64 & t.current.effectTag))
							} catch (t) {}
						}, qu = function (t) {
							try {
								e.onCommitFiberUnmount(n, t)
							} catch (t) {}
						}
					} catch (t) {}
				}
			}(a({}, os, {
				overrideHookState: null,
				overrideProps: null,
				setSuspenseHandler: null,
				scheduleUpdate: null,
				currentDispatcherRef: I.ReactCurrentDispatcher,
				findHostInstanceByFiber: function (t) {
					return null === (t = re(t)) ? null : t.stateNode
				},
				findFiberByHostInstance: function (t) {
					return is ? is(t) : null
				},
				findHostInstancesForRefresh: null,
				scheduleRefresh: null,
				scheduleRoot: null,
				setRefreshHandler: null,
				getCurrentFiber: null
			}));
		var ss = us;
		t.exports = ss.default || ss
	}, function (t, e, n) {
		"use strict";
		t.exports = n(95)
	}, function (t, e, n) {
		"use strict";
		/** @license React v0.18.0
		 * scheduler.production.min.js
		 *
		 * Copyright (c) Facebook, Inc. and its affiliates.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */
		var r, a, c, o, i;
		if (Object.defineProperty(e, "__esModule", {
				value: !0
			}), "undefined" == typeof window || "function" != typeof MessageChannel) {
			var u = null,
				s = null,
				l = function () {
					if (null !== u) try {
						var t = e.unstable_now();
						u(!0, t), u = null
					} catch (t) {
						throw setTimeout(l, 0), t
					}
				},
				g = Date.now();
			e.unstable_now = function () {
				return Date.now() - g
			}, r = function (t) {
				null !== u ? setTimeout(r, 0, t) : (u = t, setTimeout(l, 0))
			}, a = function (t, e) {
				s = setTimeout(t, e)
			}, c = function () {
				clearTimeout(s)
			}, o = function () {
				return !1
			}, i = e.unstable_forceFrameRate = function () {}
		} else {
			var f = window.performance,
				p = window.Date,
				d = window.setTimeout,
				h = window.clearTimeout;
			if ("undefined" != typeof console) {
				var y = window.cancelAnimationFrame;
				"function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
			}
			if ("object" == typeof f && "function" == typeof f.now) e.unstable_now = function () {
				return f.now()
			};
			else {
				var m = p.now();
				e.unstable_now = function () {
					return p.now() - m
				}
			}
			var b = !1,
				v = null,
				w = -1,
				O = 5,
				E = 0;
			o = function () {
				return e.unstable_now() >= E
			}, i = function () {}, e.unstable_forceFrameRate = function (t) {
				t < 0 || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : O = 0 < t ? Math.floor(1e3 / t) : 5
			};
			var T = new MessageChannel,
				S = T.port2;
			T.port1.onmessage = function () {
				if (null !== v) {
					var t = e.unstable_now();
					E = t + O;
					try {
						v(!0, t) ? S.postMessage(null) : (b = !1, v = null)
					} catch (t) {
						throw S.postMessage(null), t
					}
				} else b = !1
			}, r = function (t) {
				v = t, b || (b = !0, S.postMessage(null))
			}, a = function (t, n) {
				w = d((function () {
					t(e.unstable_now())
				}), n)
			}, c = function () {
				h(w), w = -1
			}
		}

		function C(t, e) {
			var n = t.length;
			t.push(e);
			t: for (;;) {
				var r = Math.floor((n - 1) / 2),
					a = t[r];
				if (!(void 0 !== a && 0 < P(a, e))) break t;
				t[r] = e, t[n] = a, n = r
			}
		}

		function x(t) {
			return void 0 === (t = t[0]) ? null : t
		}

		function N(t) {
			var e = t[0];
			if (void 0 === e) return null;
			var n = t.pop();
			if (n !== e) {
				t[0] = n;
				t: for (var r = 0, a = t.length; r < a;) {
					var c = 2 * (r + 1) - 1,
						o = t[c],
						i = 1 + c,
						u = t[i];
					if (void 0 !== o && P(o, n) < 0) r = void 0 !== u && P(u, o) < 0 ? (t[r] = u, t[i] = n, i) : (t[r] = o, t[c] = n, c);
					else {
						if (!(void 0 !== u && P(u, n) < 0)) break t;
						t[r] = u, t[i] = n, r = i
					}
				}
			}
			return e
		}

		function P(t, e) {
			var n = t.sortIndex - e.sortIndex;
			return 0 != n ? n : t.id - e.id
		}
		var _ = [],
			A = [],
			k = 1,
			I = null,
			j = 3,
			D = !1,
			M = !1,
			R = !1;

		function L(t) {
			for (var e = x(A); null !== e;) {
				if (null === e.callback) N(A);
				else {
					if (!(e.startTime <= t)) break;
					N(A), e.sortIndex = e.expirationTime, C(_, e)
				}
				e = x(A)
			}
		}

		function q(t) {
			if (R = !1, L(t), !M)
				if (null !== x(_)) M = !0, r(F);
				else {
					var e = x(A);
					null !== e && a(q, e.startTime - t)
				}
		}

		function F(t, n) {
			M = !1, R && (R = !1, c()), D = !0;
			var r = j;
			try {
				for (L(n), I = x(_); null !== I && (!(I.expirationTime > n) || t && !o());) {
					var i = I.callback;
					if (null !== i) {
						I.callback = null, j = I.priorityLevel;
						var u = i(I.expirationTime <= n);
						n = e.unstable_now(), "function" == typeof u ? I.callback = u : I === x(_) && N(_), L(n)
					} else N(_);
					I = x(_)
				}
				if (null !== I) var s = !0;
				else {
					var l = x(A);
					null !== l && a(q, l.startTime - n), s = !1
				}
				return s
			} finally {
				I = null, j = r, D = !1
			}
		}

		function G(t) {
			switch (t) {
				case 1:
					return -1;
				case 2:
					return 250;
				case 5:
					return 1073741823;
				case 4:
					return 1e4;
				default:
					return 5e3
			}
		}
		var B = i;
		e.unstable_ImmediatePriority = 1, e.unstable_UserBlockingPriority = 2, e.unstable_NormalPriority = 3, e.unstable_IdlePriority = 5, e.unstable_LowPriority = 4, e.unstable_runWithPriority = function (t, e) {
			switch (t) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					t = 3
			}
			var n = j;
			j = t;
			try {
				return e()
			} finally {
				j = n
			}
		}, e.unstable_next = function (t) {
			switch (j) {
				case 1:
				case 2:
				case 3:
					var e = 3;
					break;
				default:
					e = j
			}
			var n = j;
			j = e;
			try {
				return t()
			} finally {
				j = n
			}
		}, e.unstable_scheduleCallback = function (t, n, o) {
			var i = e.unstable_now();
			if ("object" == typeof o && null !== o) {
				var u = o.delay;
				u = "number" == typeof u && 0 < u ? i + u : i, o = "number" == typeof o.timeout ? o.timeout : G(t)
			} else o = G(t), u = i;
			return t = {
				id: k++,
				callback: n,
				priorityLevel: t,
				startTime: u,
				expirationTime: o = u + o,
				sortIndex: -1
			}, i < u ? (t.sortIndex = u, C(A, t), null === x(_) && t === x(A) && (R ? c() : R = !0, a(q, u - i))) : (t.sortIndex = o, C(_, t), M || D || (M = !0, r(F))), t
		}, e.unstable_cancelCallback = function (t) {
			t.callback = null
		}, e.unstable_wrapCallback = function (t) {
			var e = j;
			return function () {
				var n = j;
				j = e;
				try {
					return t.apply(this, arguments)
				} finally {
					j = n
				}
			}
		}, e.unstable_getCurrentPriorityLevel = function () {
			return j
		}, e.unstable_shouldYield = function () {
			var t = e.unstable_now();
			L(t);
			var n = x(_);
			return n !== I && null !== I && null !== n && null !== n.callback && n.startTime <= t && n.expirationTime < I.expirationTime || o()
		}, e.unstable_requestPaint = B, e.unstable_continueExecution = function () {
			M || D || (M = !0, r(F))
		}, e.unstable_pauseExecution = function () {}, e.unstable_getFirstCallbackNode = function () {
			return x(_)
		}, e.unstable_Profiling = null
	}, function (t, e, n) {
		"use strict";
		t.exports = n(97)
	}, function (t, e, n) {
		"use strict";
		/** @license React v16.12.0
		 * react-dom-server.browser.production.min.js
		 *
		 * Copyright (c) Facebook, Inc. and its affiliates.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */
		var r = n(27),
			a = n(0);

		function c(t) {
			for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		var o = "function" == typeof Symbol && Symbol.for,
			i = o ? Symbol.for("react.portal") : 60106,
			u = o ? Symbol.for("react.fragment") : 60107,
			s = o ? Symbol.for("react.strict_mode") : 60108,
			l = o ? Symbol.for("react.profiler") : 60114,
			g = o ? Symbol.for("react.provider") : 60109,
			f = o ? Symbol.for("react.context") : 60110,
			p = o ? Symbol.for("react.concurrent_mode") : 60111,
			d = o ? Symbol.for("react.forward_ref") : 60112,
			h = o ? Symbol.for("react.suspense") : 60113,
			y = o ? Symbol.for("react.suspense_list") : 60120,
			m = o ? Symbol.for("react.memo") : 60115,
			b = o ? Symbol.for("react.lazy") : 60116,
			v = o ? Symbol.for("react.fundamental") : 60117,
			w = o ? Symbol.for("react.scope") : 60119,
			O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

		function E(t) {
			if (null == t) return null;
			if ("function" == typeof t) return t.displayName || t.name || null;
			if ("string" == typeof t) return t;
			switch (t) {
				case u:
					return "Fragment";
				case i:
					return "Portal";
				case l:
					return "Profiler";
				case s:
					return "StrictMode";
				case h:
					return "Suspense";
				case y:
					return "SuspenseList"
			}
			if ("object" == typeof t) switch (t.$$typeof) {
				case f:
					return "Context.Consumer";
				case g:
					return "Context.Provider";
				case d:
					var e = t.render;
					return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
				case m:
					return E(t.type);
				case b:
					if (t = 1 === t._status ? t._result : null) return E(t)
			}
			return null
		}
		O.hasOwnProperty("ReactCurrentDispatcher") || (O.ReactCurrentDispatcher = {
			current: null
		}), O.hasOwnProperty("ReactCurrentBatchConfig") || (O.ReactCurrentBatchConfig = {
			suspense: null
		});
		var T = {};

		function S(t, e) {
			for (var n = 0 | t._threadCount; n <= e; n++) t[n] = t._currentValue2, t._threadCount = n + 1
		}
		for (var C = new Uint16Array(16), x = 0; x < 15; x++) C[x] = x + 1;
		C[15] = 0;
		var N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
			P = Object.prototype.hasOwnProperty,
			_ = {},
			A = {};

		function k(t) {
			return !!P.call(A, t) || !P.call(_, t) && (N.test(t) ? A[t] = !0 : !(_[t] = !0))
		}

		function I(t, e, n, r) {
			if (null == e || function (t, e, n, r) {
					if (null !== n && 0 === n.type) return !1;
					switch (typeof e) {
						case "function":
						case "symbol":
							return !0;
						case "boolean":
							return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
						default:
							return !1
					}
				}(t, e, n, r)) return !0;
			if (r) return !1;
			if (null !== n) switch (n.type) {
				case 3:
					return !e;
				case 4:
					return !1 === e;
				case 5:
					return isNaN(e);
				case 6:
					return isNaN(e) || e < 1
			}
			return !1
		}

		function j(t, e, n, r, a, c) {
			this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = c
		}
		var D = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (t) {
			D[t] = new j(t, 0, !1, t, null, !1)
		})), [
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach((function (t) {
			var e = t[0];
			D[e] = new j(e, 1, !1, t[1], null, !1)
		})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (t) {
			D[t] = new j(t, 2, !1, t.toLowerCase(), null, !1)
		})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (t) {
			D[t] = new j(t, 2, !1, t, null, !1)
		})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (t) {
			D[t] = new j(t, 3, !1, t.toLowerCase(), null, !1)
		})), ["checked", "multiple", "muted", "selected"].forEach((function (t) {
			D[t] = new j(t, 3, !0, t, null, !1)
		})), ["capture", "download"].forEach((function (t) {
			D[t] = new j(t, 4, !1, t, null, !1)
		})), ["cols", "rows", "size", "span"].forEach((function (t) {
			D[t] = new j(t, 6, !1, t, null, !1)
		})), ["rowSpan", "start"].forEach((function (t) {
			D[t] = new j(t, 5, !1, t.toLowerCase(), null, !1)
		}));
		var M = /[\-:]([a-z])/g;

		function R(t) {
			return t[1].toUpperCase()
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (t) {
			var e = t.replace(M, R);
			D[e] = new j(e, 1, !1, t, null, !1)
		})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (t) {
			var e = t.replace(M, R);
			D[e] = new j(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
		})), ["xml:base", "xml:lang", "xml:space"].forEach((function (t) {
			var e = t.replace(M, R);
			D[e] = new j(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
		})), ["tabIndex", "crossOrigin"].forEach((function (t) {
			D[t] = new j(t, 1, !1, t.toLowerCase(), null, !1)
		})), D.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function (t) {
			D[t] = new j(t, 1, !1, t.toLowerCase(), null, !0)
		}));
		var L = /["'&<>]/;

		function q(t) {
			if ("boolean" == typeof t || "number" == typeof t) return "" + t;
			t = "" + t;
			var e = L.exec(t);
			if (e) {
				var n, r = "",
					a = 0;
				for (n = e.index; n < t.length; n++) {
					switch (t.charCodeAt(n)) {
						case 34:
							e = "&quot;";
							break;
						case 38:
							e = "&amp;";
							break;
						case 39:
							e = "&#x27;";
							break;
						case 60:
							e = "&lt;";
							break;
						case 62:
							e = "&gt;";
							break;
						default:
							continue
					}
					a !== n && (r += t.substring(a, n)), a = n + 1, r += e
				}
				t = a !== n ? r + t.substring(a, n) : r
			}
			return t
		}
		var F = "function" == typeof Object.is ? Object.is : function (t, e) {
				return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
			},
			G = null,
			B = null,
			z = null,
			U = !1,
			W = !1,
			H = null,
			V = 0;

		function $() {
			if (null === G) throw Error(c(321));
			return G
		}

		function Y() {
			if (0 < V) throw Error(c(312));
			return {
				memoizedState: null,
				queue: null,
				next: null
			}
		}

		function K() {
			return null === z ? null === B ? (U = !1, B = z = Y()) : (U = !0, z = B) : z = null === z.next ? (U = !1, z.next = Y()) : (U = !0, z.next), z
		}

		function X(t, e, n, r) {
			for (; W;) W = !1, V += 1, z = null, n = t(e, r);
			return B = G = null, V = 0, z = H = null, n
		}

		function Q(t, e) {
			return "function" == typeof e ? e(t) : e
		}

		function Z(t, e, n) {
			if (G = $(), z = K(), U) {
				var r = z.queue;
				if (e = r.dispatch, null === H || void 0 === (n = H.get(r))) return [z.memoizedState, e];
				for (H.delete(r), r = z.memoizedState; r = t(r, n.action), null !== (n = n.next););
				return [z.memoizedState = r, e]
			}
			return t = t === Q ? "function" == typeof e ? e() : e : void 0 !== n ? n(e) : e, z.memoizedState = t, t = (t = z.queue = {
				last: null,
				dispatch: null
			}).dispatch = function (t, e, n) {
				if (!(V < 25)) throw Error(c(301));
				if (t === G)
					if (W = !0, t = {
							action: n,
							next: null
						}, null === H && (H = new Map), void 0 === (n = H.get(e))) H.set(e, t);
					else {
						for (e = n; null !== e.next;) e = e.next;
						e.next = t
					}
			}.bind(null, G, t), [z.memoizedState, t]
		}

		function J() {}
		var tt = 0,
			et = {
				readContext: function (t) {
					var e = tt;
					return S(t, e), t[e]
				},
				useContext: function (t) {
					$();
					var e = tt;
					return S(t, e), t[e]
				},
				useMemo: function (t, e) {
					if (G = $(), e = void 0 === e ? null : e, null !== (z = K())) {
						var n = z.memoizedState;
						if (null !== n && null !== e) {
							t: {
								var r = n[1];
								if (null === r) r = !1;
								else {
									for (var a = 0; a < r.length && a < e.length; a++)
										if (!F(e[a], r[a])) {
											r = !1;
											break t
										}
									r = !0
								}
							}
							if (r) return n[0]
						}
					}
					return t = t(), z.memoizedState = [t, e], t
				},
				useReducer: Z,
				useRef: function (t) {
					G = $();
					var e = (z = K()).memoizedState;
					return null === e ? (t = {
						current: t
					}, z.memoizedState = t) : e
				},
				useState: function (t) {
					return Z(Q, t)
				},
				useLayoutEffect: function () {},
				useCallback: function (t) {
					return t
				},
				useImperativeHandle: J,
				useEffect: J,
				useDebugValue: J,
				useResponder: function (t, e) {
					return {
						props: e,
						responder: t
					}
				},
				useDeferredValue: function (t) {
					return $(), t
				},
				useTransition: function () {
					return $(), [function (t) {
						t()
					}, !1]
				}
			},
			nt = "http://www.w3.org/1999/xhtml";

		function rt(t) {
			switch (t) {
				case "svg":
					return "http://www.w3.org/2000/svg";
				case "math":
					return "http://www.w3.org/1998/Math/MathML";
				default:
					return "http://www.w3.org/1999/xhtml"
			}
		}
		var at = {
				area: !0,
				base: !0,
				br: !0,
				col: !0,
				embed: !0,
				hr: !0,
				img: !0,
				input: !0,
				keygen: !0,
				link: !0,
				meta: !0,
				param: !0,
				source: !0,
				track: !0,
				wbr: !0
			},
			ct = r({
				menuitem: !0
			}, at),
			ot = {
				animationIterationCount: !0,
				borderImageOutset: !0,
				borderImageSlice: !0,
				borderImageWidth: !0,
				boxFlex: !0,
				boxFlexGroup: !0,
				boxOrdinalGroup: !0,
				columnCount: !0,
				columns: !0,
				flex: !0,
				flexGrow: !0,
				flexPositive: !0,
				flexShrink: !0,
				flexNegative: !0,
				flexOrder: !0,
				gridArea: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowSpan: !0,
				gridRowStart: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnSpan: !0,
				gridColumnStart: !0,
				fontWeight: !0,
				lineClamp: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				tabSize: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0,
				fillOpacity: !0,
				floodOpacity: !0,
				stopOpacity: !0,
				strokeDasharray: !0,
				strokeDashoffset: !0,
				strokeMiterlimit: !0,
				strokeOpacity: !0,
				strokeWidth: !0
			},
			it = ["Webkit", "ms", "Moz", "O"];
		Object.keys(ot).forEach((function (t) {
			it.forEach((function (e) {
				e = e + t.charAt(0).toUpperCase() + t.substring(1), ot[e] = ot[t]
			}))
		}));
		var ut = /([A-Z])/g,
			st = /^ms-/,
			lt = a.Children.toArray,
			gt = O.ReactCurrentDispatcher,
			ft = {
				listing: !0,
				pre: !0,
				textarea: !0
			},
			pt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
			dt = {},
			ht = {},
			yt = Object.prototype.hasOwnProperty,
			mt = {
				children: null,
				dangerouslySetInnerHTML: null,
				suppressContentEditableWarning: null,
				suppressHydrationWarning: null
			};

		function bt(t, e) {
			if (void 0 === t) throw Error(c(152, E(e) || "Component"))
		}
		var vt, wt = ((vt = Et.prototype).destroy = function () {
				if (!this.exhausted) {
					this.exhausted = !0, this.clearProviders();
					var t = this.threadID;
					C[t] = C[0], C[0] = t
				}
			}, vt.pushProvider = function (t) {
				var e = ++this.contextIndex,
					n = t.type._context,
					r = this.threadID;
				S(n, r);
				var a = n[r];
				this.contextStack[e] = n, this.contextValueStack[e] = a, n[r] = t.props.value
			}, vt.popProvider = function () {
				var t = this.contextIndex,
					e = this.contextStack[t],
					n = this.contextValueStack[t];
				this.contextStack[t] = null, this.contextValueStack[t] = null, this.contextIndex--, e[this.threadID] = n
			}, vt.clearProviders = function () {
				for (var t = this.contextIndex; 0 <= t; t--) this.contextStack[t][this.threadID] = this.contextValueStack[t]
			}, vt.read = function (t) {
				if (this.exhausted) return null;
				var e = tt;
				tt = this.threadID;
				var n = gt.current;
				gt.current = et;
				try {
					for (var r = [""], a = !1; r[0].length < t;) {
						if (0 === this.stack.length) {
							this.exhausted = !0;
							var o = this.threadID;
							C[o] = C[0], C[0] = o;
							break
						}
						var i = this.stack[this.stack.length - 1];
						if (a || i.childIndex >= i.children.length) {
							var u = i.footer;
							if ("" !== u && (this.previousWasTextNode = !1), this.stack.pop(), "select" === i.type) this.currentSelectValue = null;
							else if (null != i.type && null != i.type.type && i.type.type.$$typeof === g) this.popProvider(i.type);
							else if (i.type === h) {
								this.suspenseDepth--;
								var s = r.pop();
								if (a) {
									a = !1;
									var l = i.fallbackFrame;
									if (!l) throw Error(c(303));
									this.stack.push(l), r[this.suspenseDepth] += "\x3c!--$!--\x3e";
									continue
								}
								r[this.suspenseDepth] += s
							}
							r[this.suspenseDepth] += u
						} else {
							var f = i.children[i.childIndex++],
								p = "";
							try {
								p += this.render(f, i.context, i.domNamespace)
							} catch (t) {
								if (null != t && "function" == typeof t.then) throw Error(c(294));
								throw t
							}
							r.length <= this.suspenseDepth && r.push(""), r[this.suspenseDepth] += p
						}
					}
					return r[0]
				} finally {
					gt.current = n, tt = e
				}
			}, vt.render = function (t, e, n) {
				if ("string" == typeof t || "number" == typeof t) return (n = "" + t) ? this.makeStaticMarkup ? q(n) : this.previousWasTextNode ? "\x3c!-- --\x3e" + q(n) : (this.previousWasTextNode = !0, q(n)) : "";
				if (t = (e = function (t, e, n) {
						function o(a, o) {
							var i = o.prototype && o.prototype.isReactComponent,
								u = function (t, e, n, r) {
									if (r && "object" == typeof (r = t.contextType) && null !== r) return S(r, n), r[n];
									if (t = t.contextTypes) {
										for (var a in n = {}, t) n[a] = e[a];
										e = n
									} else e = T;
									return e
								}(o, e, n, i),
								s = [],
								l = !1,
								g = {
									isMounted: function () {
										return !1
									},
									enqueueForceUpdate: function () {
										if (null === s) return null
									},
									enqueueReplaceState: function (t, e) {
										l = !0, s = [e]
									},
									enqueueSetState: function (t, e) {
										if (null === s) return null;
										s.push(e)
									}
								};
							if (i) {
								if (i = new o(a.props, u, g), "function" == typeof o.getDerivedStateFromProps) {
									var f = o.getDerivedStateFromProps.call(null, a.props, i.state);
									null != f && (i.state = r({}, i.state, f))
								}
							} else if (G = {}, i = o(a.props, u, g), null == (i = X(o, a.props, i, u)) || null == i.render) return void bt(t = i, o);
							if (i.props = a.props, i.context = u, i.updater = g, void 0 === (g = i.state) && (i.state = g = null), "function" == typeof i.UNSAFE_componentWillMount || "function" == typeof i.componentWillMount)
								if ("function" == typeof i.componentWillMount && "function" != typeof o.getDerivedStateFromProps && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && "function" != typeof o.getDerivedStateFromProps && i.UNSAFE_componentWillMount(), s.length) {
									g = s;
									var p = l;
									if (s = null, l = !1, p && 1 === g.length) i.state = g[0];
									else {
										f = p ? g[0] : i.state;
										var d = !0;
										for (p = p ? 1 : 0; p < g.length; p++) {
											var h = g[p];
											null != (h = "function" == typeof h ? h.call(i, f, a.props, u) : h) && (d ? (d = !1, f = r({}, f, h)) : r(f, h))
										}
										i.state = f
									}
								} else s = null;
							if (bt(t = i.render(), o), "function" == typeof i.getChildContext && "object" == typeof (a = o.childContextTypes)) {
								var y = i.getChildContext();
								for (var m in y)
									if (!(m in a)) throw Error(c(108, E(o) || "Unknown", m))
							}
							y && (e = r({}, e, y))
						}
						for (; a.isValidElement(t);) {
							var i = t,
								u = i.type;
							if ("function" != typeof u) break;
							o(i, u)
						}
						return {
							child: t,
							context: e
						}
					}(t, e, this.threadID)).child, e = e.context, null === t || !1 === t) return "";
				if (!a.isValidElement(t)) {
					if (null == t || null == t.$$typeof) return t = lt(t), this.stack.push({
						type: null,
						domNamespace: n,
						children: t,
						childIndex: 0,
						context: e,
						footer: ""
					}), "";
					if ((n = t.$$typeof) === i) throw Error(c(257));
					throw Error(c(258, n.toString()))
				}
				var o = t.type;
				if ("string" == typeof o) return this.renderDOM(t, e, n);
				switch (o) {
					case s:
					case p:
					case l:
					case y:
					case u:
						return t = lt(t.props.children), this.stack.push({
							type: null,
							domNamespace: n,
							children: t,
							childIndex: 0,
							context: e,
							footer: ""
						}), "";
					case h:
						throw Error(c(294))
				}
				if ("object" == typeof o && null !== o) switch (o.$$typeof) {
					case d:
						G = {};
						var O = o.render(t.props, t.ref);
						return O = X(o.render, t.props, O, t.ref), O = lt(O), this.stack.push({
							type: null,
							domNamespace: n,
							children: O,
							childIndex: 0,
							context: e,
							footer: ""
						}), "";
					case m:
						return t = [a.createElement(o.type, r({
							ref: t.ref
						}, t.props))], this.stack.push({
							type: null,
							domNamespace: n,
							children: t,
							childIndex: 0,
							context: e,
							footer: ""
						}), "";
					case g:
						return n = {
							type: t,
							domNamespace: n,
							children: o = lt(t.props.children),
							childIndex: 0,
							context: e,
							footer: ""
						}, this.pushProvider(t), this.stack.push(n), "";
					case f:
						o = t.type, O = t.props;
						var C = this.threadID;
						return S(o, C), o = lt(O.children(o[C])), this.stack.push({
							type: t,
							domNamespace: n,
							children: o,
							childIndex: 0,
							context: e,
							footer: ""
						}), "";
					case v:
						throw Error(c(338));
					case b:
						switch (function (t) {
							if (-1 === t._status) {
								t._status = 0;
								var e = t._ctor;
								e = e(), (t._result = e).then((function (e) {
									0 === t._status && (e = e.default, t._status = 1, t._result = e)
								}), (function (e) {
									0 === t._status && (t._status = 2, t._result = e)
								}))
							}
						}(o = t.type), o._status) {
							case 1:
								return t = [a.createElement(o._result, r({
									ref: t.ref
								}, t.props))], this.stack.push({
									type: null,
									domNamespace: n,
									children: t,
									childIndex: 0,
									context: e,
									footer: ""
								}), "";
							case 2:
								throw o._result;
							default:
								throw Error(c(295))
						}
					case w:
						throw Error(c(343))
				}
				throw Error(c(130, null == o ? o : typeof o, ""))
			}, vt.renderDOM = function (t, e, n) {
				var o = t.type.toLowerCase();
				if (n === nt && rt(o), !dt.hasOwnProperty(o)) {
					if (!pt.test(o)) throw Error(c(65, o));
					dt[o] = !0
				}
				var i, u, s, l, g = t.props;
				if ("input" === o) g = r({
					type: void 0
				}, g, {
					defaultChecked: void 0,
					defaultValue: void 0,
					value: null != g.value ? g.value : g.defaultValue,
					checked: null != g.checked ? g.checked : g.defaultChecked
				});
				else if ("textarea" === o) {
					var f = g.value;
					if (null == f) {
						f = g.defaultValue;
						var p = g.children;
						if (null != p) {
							if (null != f) throw Error(c(92));
							if (Array.isArray(p)) {
								if (!(p.length <= 1)) throw Error(c(93));
								p = p[0]
							}
							f = "" + p
						}
						null == f && (f = "")
					}
					g = r({}, g, {
						value: void 0,
						children: "" + f
					})
				} else if ("select" === o) this.currentSelectValue = null != g.value ? g.value : g.defaultValue, g = r({}, g, {
					value: void 0
				});
				else if ("option" === o) {
					p = this.currentSelectValue;
					var d = function (t) {
						if (null == t) return t;
						var e = "";
						return a.Children.forEach(t, (function (t) {
							null != t && (e += t)
						})), e
					}(g.children);
					if (null != p) {
						var h = null != g.value ? g.value + "" : d;
						if (f = !1, Array.isArray(p)) {
							for (var y = 0; y < p.length; y++)
								if ("" + p[y] === h) {
									f = !0;
									break
								}
						} else f = "" + p === h;
						g = r({
							selected: void 0,
							children: void 0
						}, g, {
							selected: f,
							children: d
						})
					}
				}
				if (f = g) {
					if (ct[o] && (null != f.children || null != f.dangerouslySetInnerHTML)) throw Error(c(137, o, ""));
					if (null != f.dangerouslySetInnerHTML) {
						if (null != f.children) throw Error(c(60));
						if (!("object" == typeof f.dangerouslySetInnerHTML && "__html" in f.dangerouslySetInnerHTML)) throw Error(c(61))
					}
					if (null != f.style && "object" != typeof f.style) throw Error(c(62, ""))
				}
				for (S in f = g, p = this.makeStaticMarkup, d = 1 === this.stack.length, h = "<" + t.type, f)
					if (yt.call(f, S)) {
						var m = f[S];
						if (null != m) {
							if ("style" === S) {
								y = void 0;
								var b = "",
									v = "";
								for (y in m)
									if (m.hasOwnProperty(y)) {
										var w = 0 === y.indexOf("--"),
											O = m[y];
										if (null != O) {
											if (w) var E = y;
											else if (E = y, ht.hasOwnProperty(E)) E = ht[E];
											else {
												var T = E.replace(ut, "-$1").toLowerCase().replace(st, "-ms-");
												E = ht[E] = T
											}
											b += v + E + ":", v = y, b += w = null == O || "boolean" == typeof O || "" === O ? "" : w || "number" != typeof O || 0 === O || ot.hasOwnProperty(v) && ot[v] ? ("" + O).trim() : O + "px", v = ";"
										}
									}
								m = b || null
							}
							y = null;
							t: if (w = o, O = f, -1 === w.indexOf("-")) w = "string" == typeof O.is;
								else switch (w) {
									case "annotation-xml":
									case "color-profile":
									case "font-face":
									case "font-face-src":
									case "font-face-uri":
									case "font-face-format":
									case "font-face-name":
									case "missing-glyph":
										w = !1;
										break t;
									default:
										w = !0
								}
							w ? mt.hasOwnProperty(S) || (y = k(y = S) && null != m ? y + '="' + q(m) + '"' : "") : (i = S, u = m, s = void 0, l = D.hasOwnProperty(i) ? D[i] : null, (s = "style" !== i) && (s = null !== l ? 0 === l.type : 2 < i.length && ("o" === i[0] || "O" === i[0]) && ("n" === i[1] || "N" === i[1])), y = s || I(i, u, l, !1) ? "" : null !== l ? (i = l.attributeName, 3 === (s = l.type) || 4 === s && !0 === u ? i + '=""' : (l.sanitizeURL && (u = "" + u), i + '="' + q(u) + '"')) : k(i) ? i + '="' + q(u) + '"' : ""), y && (h += " " + y)
						}
					}
				p || d && (h += ' data-reactroot=""');
				var S = h;
				f = "", at.hasOwnProperty(o) ? S += "/>" : (S += ">", f = "</" + t.type + ">");
				t: {
					if (null != (p = g.dangerouslySetInnerHTML)) {
						if (null != p.__html) {
							p = p.__html;
							break t
						}
					} else if ("string" == typeof (p = g.children) || "number" == typeof p) {
						p = q(p);
						break t
					}
					p = null
				}
				return null != p ? (g = [], ft[o] && "\n" === p.charAt(0) && (S += "\n"), S += p) : g = lt(g.children), t = t.type, n = null == n || "http://www.w3.org/1999/xhtml" === n ? rt(t) : "http://www.w3.org/2000/svg" === n && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : n, this.stack.push({
					domNamespace: n,
					type: o,
					children: g,
					childIndex: 0,
					context: e,
					footer: f
				}), this.previousWasTextNode = !1, S
			}, Et),
			Ot = {
				renderToString: function (t) {
					t = new wt(t, !1);
					try {
						return t.read(1 / 0)
					} finally {
						t.destroy()
					}
				},
				renderToStaticMarkup: function (t) {
					t = new wt(t, !0);
					try {
						return t.read(1 / 0)
					} finally {
						t.destroy()
					}
				},
				renderToNodeStream: function () {
					throw Error(c(207))
				},
				renderToStaticNodeStream: function () {
					throw Error(c(208))
				},
				version: "16.12.0"
			};

		function Et(t, e) {
			t = a.isValidElement(t) ? t.type !== u ? [t] : (t = t.props.children, a.isValidElement(t) ? [t] : lt(t)) : lt(t), t = {
				type: null,
				domNamespace: nt,
				children: t,
				childIndex: 0,
				context: T,
				footer: ""
			};
			var n = C[0];
			if (0 === n) {
				var r = C,
					o = 2 * (n = r.length);
				if (!(o <= 65536)) throw Error(c(304));
				var i = new Uint16Array(o);
				for (i.set(r), (C = i)[0] = n + 1, r = n; r < o - 1; r++) C[r] = r + 1;
				C[o - 1] = 0
			} else C[0] = C[n];
			this.threadID = n, this.stack = [t], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = e, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = []
		}
		t.exports = Ot.default || Ot
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== y(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = h(n(52)),
			c = h(n(101)),
			o = h(n(53)),
			i = n(172),
			u = h(n(17)),
			s = n(2),
			l = h(n(174)),
			g = n(5),
			f = h(n(11)),
			p = n(26),
			d = h(n(175));

		function h(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function y(t) {
			return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function m() {
			return (m = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function b(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function v(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? b(Object(n), !0).forEach((function (e) {
					S(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function w(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function O(t) {
			return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function E(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function T(t, e) {
			return (T = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function S(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		n(211);
		var C = function () {
			function t(e) {
				var n;
				return function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), n = function (t, e) {
					return !e || "object" !== y(e) && "function" != typeof e ? E(t) : e
				}(this, O(t).call(this, e)), S(E(n), "componentDidMount", (function () {
					return regeneratorRuntime.async((function (t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.next = 2, regeneratorRuntime.awrap(n.setPart());
							case 2:
							case "end":
								return t.stop()
						}
					}))
				})), S(E(n), "componentDidUpdate", (function (t, e) {
					var r, a, c, o, i, s;
					return regeneratorRuntime.async((function (l) {
						for (;;) switch (l.prev = l.next) {
							case 0:
								if (r = t.accession, a = t.backbone, c = t.enzymes, o = t.file, i = t.search, s = e.part, r !== n.props.accession || a !== n.props.backbone || o !== n.props.file) return l.next = 5, regeneratorRuntime.awrap(n.setPart());
								l.next = 7;
								break;
							case 5:
								l.next = 8;
								break;
							case 7:
								i.query !== n.props.search.query || i.mismatch !== n.props.search.mismatch ? n.search(s) : (0, u.default)(c, n.props.enzymes) || n.cut(s);
							case 8:
							case "end":
								return l.stop()
						}
					}))
				})), S(E(n), "setPart", (function () {
					var t, e, r, a, i;
					return regeneratorRuntime.async((function (u) {
						for (;;) switch (u.prev = u.next) {
							case 0:
								if (t = n.props, e = t.accession, r = t.file, u.prev = 1, e) return u.next = 5, regeneratorRuntime.awrap((0, c.default)(e, n.props));
								u.next = 11;
								break;
							case 5:
								a = u.sent, n.setState({
									part: v({}, a, {
										annotations: n.parseAnnotations(a.annotations, a.seq)
									})
								}), n.search(a), n.cut(a), u.next = 18;
								break;
							case 11:
								if (r) return u.next = 14, regeneratorRuntime.awrap((0, o.default)([r], n.props));
								u.next = 18;
								break;
							case 14:
								i = u.sent, n.setState({
									part: v({}, i[0], {
										annotations: n.parseAnnotations(i[0].annotations, i[0].seq)
									})
								}), n.search(i[0]), n.cut(i[0]);
							case 18:
								u.next = 23;
								break;
							case 20:
								u.prev = 20, u.t0 = u.catch(1), console.error(u.t0);
							case 23:
							case "end":
								return u.stop()
						}
					}), null, null, [
						[1, 20]
					])
				})), S(E(n), "search", (function () {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
						e = n.props,
						r = e.onSearch,
						a = e.search,
						c = a.query,
						o = a.mismatch,
						i = e.seq;
					if (i || t && t.seq) {
						var s = (0, l.default)(c, o, i || t.seq);
						(0, u.default)(s, n.state.search) || (n.setState({
							search: s
						}), r(s))
					}
				})), S(E(n), "cut", (function () {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
						e = n.props,
						r = e.enzymes,
						a = e.seq,
						c = r.length ? (0, i.cutSitesInRows)(a || t && t.seq || "", r) : [];
					n.setState({
						cutSites: c
					})
				})), S(E(n), "parseAnnotations", (function (t, e) {
					return (t || []).map((function (t, n) {
						return v({}, (0, g.annotationFactory)(t.name, n), {}, t, {
							direction: (0, s.directionality)(t.direction),
							start: t.start % (e.length + 1),
							end: t.end % (e.length + 1)
						})
					}))
				})), S(E(n), "setCentralIndex", (function (t, e) {
					if ("linear" !== t && "circular" !== t) throw new Error("Unknown central index type: ".concat(t));
					n.state.centralIndex[t] !== e && n.setState({
						centralIndex: v({}, n.state.centralIndex, S({}, t, e))
					})
				})), S(E(n), "setSelection", (function (t) {
					var e = n.props.onSelection;
					n.setState({
						selection: t
					}), e(t)
				})), n.state = {
					accession: "",
					centralIndex: {
						circular: 0,
						linear: 0,
						setCentralIndex: n.setCentralIndex
					},
					cutSites: [],
					selection: v({}, p.defaultSelection),
					search: [],
					annotations: n.parseAnnotations(e.annotations, e.seq),
					part: {}
				}, n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && T(t, e)
				}(t, r.Component),
				function (t, e, n) {
					e && w(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.style,
							n = t.viewer,
							a = this.props,
							c = a.annotations,
							o = a.compSeq,
							i = a.name,
							u = a.seq,
							l = this.state,
							g = l.centralIndex,
							h = l.cutSites,
							y = l.part,
							b = l.search,
							v = l.selection;
						if (u = u || y.seq || "", o = o || y.compSeq || (0, s.dnaComplement)(u).compSeq, i = i || y.name, c = c && c.length ? c : y.annotations || [], !u.length) return r.createElement("div", {
							className: "la-vz-seqviz"
						});
						var w = ("linear" === n || n.includes("both")) && r.createElement(d.default, m({
								key: "linear"
							}, this.props, {
								search: b,
								selection: v,
								setSelection: this.setSelection,
								annotations: c,
								compSeq: o,
								name: i,
								seq: u,
								cutSites: h,
								Circular: !1
							})),
							O = ("circular" === n || n.includes("both")) && r.createElement(d.default, m({
								key: "circular"
							}, this.props, {
								search: b,
								selection: v,
								setSelection: this.setSelection,
								annotations: c,
								compSeq: o,
								name: i,
								seq: u,
								cutSites: h,
								Circular: !0
							})),
							E = "both_flip" === n ? [w, O] : [O, w];
						return r.createElement("div", {
							className: "la-vz-seqviz",
							style: e
						}, r.createElement(f.default.Provider, {
							value: g
						}, r.createElement(p.SelectionContext.Provider, {
							value: v
						}, E.filter((function (t) {
							return t
						})).map((function (t) {
							return t
						})))))
					}
				}]), t
		}();
		S(C, "propTypes", {
			accession: a.default.string,
			annotations: a.default.arrayOf(a.default.shape({
				start: a.default.number.isRequired,
				end: a.default.number.isRequired,
				name: a.default.string.isRequired,
				direction: a.default.oneOf([1, 0, -1, "REVERSE", "NONE", "FORWARD"]),
				color: a.default.string,
				type: a.default.string
			})),
			backbone: a.default.string.isRequired,
			bpColors: a.default.object.isRequired,
			colors: a.default.arrayOf(a.default.string).isRequired,
			compSeq: a.default.string,
			copyEvent: a.default.func.isRequired,
			enzymes: a.default.arrayOf(a.default.string).isRequired,
			file: a.default.oneOfType([a.default.object, a.default.string]),
			name: a.default.string,
			onSearch: a.default.func.isRequired,
			onSelection: a.default.func.isRequired,
			search: a.default.shape({
				query: a.default.string,
				mismatch: a.default.number
			}).isRequired,
			seq: a.default.string,
			showComplement: a.default.bool.isRequired,
			showIndex: a.default.bool.isRequired,
			showPrimers: a.default.bool.isRequired,
			style: a.default.object.isRequired,
			translations: a.default.arrayOf(a.default.shape({
				start: a.default.number.isRequired,
				end: a.default.number.isRequired,
				direction: a.default.oneOf([1, -1, "FORWARD", "REVERSE"]).isRequired
			})).isRequired,
			viewer: a.default.oneOf(["linear", "circular", "both", "both_flip"]).isRequired,
			zoom: a.default.shape({
				circular: a.default.number,
				linear: a.default.number
			}).isRequired
		}), S(C, "defaultProps", {
			accession: "",
			annotations: [],
			backbone: "",
			bpColors: {},
			colors: [],
			compSeq: "",
			copyEvent: function () {
				return !1
			},
			enzymes: [],
			file: null,
			name: "",
			onSearch: function (t) {
				return t
			},
			onSelection: function (t) {
				return t
			},
			search: {
				query: "",
				mismatch: 0
			},
			seq: "",
			showComplement: !0,
			showIndex: !0,
			showPrimers: !0,
			style: {},
			translations: [],
			viewer: "both",
			zoom: {
				circular: 0,
				linear: 50
			}
		}), e.default = C
	}, function (t, e, n) {
		"use strict";
		var r = n(100);

		function a() {}

		function c() {}
		c.resetWarningCache = a, t.exports = function () {
			function t(t, e, n, a, c, o) {
				if (o !== r) {
					var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw i.name = "Invariant Violation", i
				}
			}

			function e() {
				return t
			}
			var n = {
				array: t.isRequired = t,
				bool: t,
				func: t,
				number: t,
				object: t,
				string: t,
				symbol: t,
				any: t,
				arrayOf: e,
				element: t,
				elementType: t,
				instanceOf: e,
				node: t,
				objectOf: e,
				oneOf: e,
				oneOfType: e,
				shape: e,
				exact: e,
				checkPropTypes: c,
				resetWarningCache: a
			};
			return n.PropTypes = n
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(102),
			a = i(r),
			c = i(n(53)),
			o = n(171);

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = function (t) {
			var e, n, i, u, s, l, g, f, p, d, h, y, m = arguments;
			return regeneratorRuntime.async((function (b) {
				for (;;) switch (b.prev = b.next) {
					case 0:
						if (n = !1, i = t + (e = 1 < m.length && void 0 !== m[1] ? m[1] : {
								backbone: "",
								colors: []
							}).backbone || "", t && i && localStorage.getItem(i)) return b.abrupt("return", JSON.parse(localStorage.getItem(i)));
						b.next = 5;
						break;
					case 5:
						return u = e.colors, s = void 0 === u ? [] : u, l = e.backbone, g = void 0 === l ? "" : l, f = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=".concat(t.trim(), "&rettype=gbwithparts&retmode=text"), t.startsWith("BB") ? (n = !0, f = "https://cors-anywhere.herokuapp.com/http://parts.igem.org/xml/part.".concat(t.trim())) : g.length && console.error("backbone specified without a BioBrick"), b.next = 10, regeneratorRuntime.awrap((0, a.default)(new r.Request(f, {
							headers: {
								"X-Requested-With": "XMLHttpRequest"
							}
						})).then((function (t) {
							return t.text()
						})).catch(console.error));
					case 10:
						if (p = b.sent) {
							b.next = 13;
							break
						}
						throw new Error("Failed to retrieve a seq with accession ".concat(t, " from ").concat(f));
					case 13:
						return d = n && g.length ? {
							name: g,
							backbone: (0, o.fetchBBB)(g)
						} : "", n && "" === d && console.error("iGEM BioBrick ID used, but no backbone ID specified."), b.next = 17, regeneratorRuntime.awrap((0, c.default)(p, {
							colors: s,
							backbone: d
						}));
					case 17:
						if (!(h = b.sent) || !h.length) {
							b.next = 23;
							break
						}
						if (y = h[0], i && y && y.seq) return localStorage.setItem(i, JSON.stringify(y)), b.abrupt("return", y);
						b.next = 23;
						break;
					case 23:
						throw new Error("Failed to retrieve a seq with accession ".concat(t, " from ").concat(f));
					case 24:
					case "end":
						return b.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		var r = function () {
			if ("undefined" != typeof self) return self;
			if ("undefined" != typeof window) return window;
			if (void 0 !== r) return r;
			throw new Error("unable to locate global object")
		}();
		t.exports = e = r.fetch, e.default = r.fetch.bind(r), e.Headers = r.Headers, e.Request = r.Request, e.Response = r.Response
	}, function (t, e, n) {
		(function (t) {
			function n(t, e) {
				for (var n = 0, r = t.length - 1; 0 <= r; r--) {
					var a = t[r];
					"." === a ? t.splice(r, 1) : ".." === a ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
				}
				if (e)
					for (; n--;) t.unshift("..");
				return t
			}

			function r(t, e) {
				if (t.filter) return t.filter(e);
				for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
				return n
			}
			e.resolve = function () {
				for (var e = "", a = !1, c = arguments.length - 1; - 1 <= c && !a; c--) {
					var o = 0 <= c ? arguments[c] : t.cwd();
					if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
					o && (e = o + "/" + e, a = "/" === o.charAt(0))
				}
				return (a ? "/" : "") + (e = n(r(e.split("/"), (function (t) {
					return !!t
				})), !a).join("/")) || "."
			}, e.normalize = function (t) {
				var c = e.isAbsolute(t),
					o = "/" === a(t, -1);
				return (t = n(r(t.split("/"), (function (t) {
					return !!t
				})), !c).join("/")) || c || (t = "."), t && o && (t += "/"), (c ? "/" : "") + t
			}, e.isAbsolute = function (t) {
				return "/" === t.charAt(0)
			}, e.join = function () {
				var t = Array.prototype.slice.call(arguments, 0);
				return e.normalize(r(t, (function (t, e) {
					if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
					return t
				})).join("/"))
			}, e.relative = function (t, n) {
				function r(t) {
					for (var e = 0; e < t.length && "" === t[e]; e++);
					for (var n = t.length - 1; 0 <= n && "" === t[n]; n--);
					return n < e ? [] : t.slice(e, n - e + 1)
				}
				t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
				for (var a = r(t.split("/")), c = r(n.split("/")), o = Math.min(a.length, c.length), i = o, u = 0; u < o; u++)
					if (a[u] !== c[u]) {
						i = u;
						break
					}
				var s = [];
				for (u = i; u < a.length; u++) s.push("..");
				return (s = s.concat(c.slice(i))).join("/")
			}, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
				if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
				for (var e = t.charCodeAt(0), n = 47 === e, r = -1, a = !0, c = t.length - 1; 1 <= c; --c)
					if (47 === (e = t.charCodeAt(c))) {
						if (!a) {
							r = c;
							break
						}
					} else a = !1;
				return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : t.slice(0, r)
			}, e.basename = function (t, e) {
				var n = function (t) {
					"string" != typeof t && (t += "");
					var e, n = 0,
						r = -1,
						a = !0;
					for (e = t.length - 1; 0 <= e; --e)
						if (47 === t.charCodeAt(e)) {
							if (!a) {
								n = e + 1;
								break
							}
						} else -1 === r && (a = !1, r = e + 1);
					return -1 === r ? "" : t.slice(n, r)
				}(t);
				return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
			}, e.extname = function (t) {
				"string" != typeof t && (t += "");
				for (var e = -1, n = 0, r = -1, a = !0, c = 0, o = t.length - 1; 0 <= o; --o) {
					var i = t.charCodeAt(o);
					if (47 === i) {
						if (a) continue;
						n = o + 1;
						break
					} - 1 === r && (a = !1, r = o + 1), 46 === i ? -1 === e ? e = o : 1 !== c && (c = 1) : -1 !== e && (c = -1)
				}
				return -1 === e || -1 === r || 0 === c || 1 === c && e === r - 1 && e === n + 1 ? "" : t.slice(e, r)
			};
			var a = "b" === "ab".substr(-1) ? function (t, e, n) {
				return t.substr(e, n)
			} : function (t, e, n) {
				return e < 0 && (e = t.length + e), t.substr(e, n)
			}
		}).call(this, n(12))
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r, a = n(2),
			c = (r = n(6)) && r.__esModule ? r : {
				default: r
			};

		function o(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? o(Object(n), !0).forEach((function (e) {
					u(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function u(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.default = function (t) {
			var e, n, r, o, u;
			return regeneratorRuntime.async((function (s) {
				for (;;) switch (s.prev = s.next) {
					case 0:
						if (e = JSON.parse(t), n = (0, a.dnaComplement)(e.bases), r = n.seq, o = n.compSeq, r.length < 1) return s.abrupt("return", Promise.reject(new Error("Empty part sequence... invalid")));
						s.next = 4;
						break;
					case 4:
						return u = i({}, (0, a.partFactory)(), {
							name: e.name || e._id,
							date: new Date(e.modifiedAt).getTime(),
							seq: r,
							compSeq: o,
							annotations: e.annotations.map((function (t) {
								return i({}, t, {
									id: (0, c.default)(),
									direction: 0 === t.strand ? 1 : 1 === t.strand ? -1 : "NONE"
								})
							}))
						}), s.abrupt("return", [u]);
					case 6:
					case "end":
						return s.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r, a = (r = n(18)) && r.__esModule ? r : {
				default: r
			},
			c = n(2),
			o = n(5);

		function i(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function u(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? i(Object(n), !0).forEach((function (e) {
					s(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function s(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.default = function (t, e) {
			return regeneratorRuntime.async((function (n) {
				for (;;) switch (n.prev = n.next) {
					case 0:
						return n.abrupt("return", new Promise((function (n, r) {
							function i(t) {
								return r(new Error("Failed on BioBrick because ".concat(t)))
							}
							var s = e.backbone,
								l = void 0 === s ? "" : s;
							a.default.parseString(t, {}, (function (t, e) {
								t && i("XML to JSON: ".concat(t));
								var r = (0, c.firstElement)(e.rsbpml.part_list);
								r && r.part || i("getting first part"), (r = (0, c.firstElement)(r.part)) || i("getting first part");
								var a = r,
									s = a.sequences,
									g = a.part_name,
									f = a.features,
									p = (0, c.firstElement)(s);
								p && p.seq_data || i("getting seq_data");
								var d = (0, c.firstElement)(f);
								d = d && "feature" in d ? d.feature : [];
								var h = (0, c.firstElement)(p.seq_data);
								l.backbone && (h += l.backbone);
								var y = l.name && l.name.length < 20 ? l.name : "",
									m = "".concat((0, c.firstElement)(g), "-").concat(y);
								h && m || i("seq || name || featureArray");
								var b = d.map((function (t, e) {
									if (!t) return null;
									var n = t.direction,
										r = t.startpos,
										a = t.endpos,
										c = t.type,
										i = t.title;
									return u({}, (0, o.annotationFactory)(i[0] || "".concat(n[0], "-").concat(r[0]), e), {
										direction: "forward" === n[0] ? 1 : -1,
										start: +r[0] || 0,
										end: +a[0] || 0,
										name: i[0] || "Untitled",
										type: c[0] || "N/A"
									})
								})).filter((function (t) {
									return t
								}));
								b.push(u({}, (0, o.annotationFactory)(l.name, b.length), {
									start: (0, c.firstElement)(p.seq_data).length,
									end: 0
								}));
								var v = u({}, (0, c.partFactory)(), {}, (0, c.dnaComplement)(h), {
									name: m,
									annotations: b
								});
								n([v])
							}))
						})));
					case 1:
					case "end":
						return n.stop()
				}
			}))
		}
	}, function (t, e, n) {
		(function () {
			"use strict";
			var t, r, a, c, o, i = {}.hasOwnProperty;

			function u(t) {
				var e, n, a;
				for (e in this.options = {}, n = r[.2]) i.call(n, e) && (a = n[e], this.options[e] = a);
				for (e in t) i.call(t, e) && (a = t[e], this.options[e] = a)
			}
			t = n(107), r = n(28).defaults, c = function (t) {
				return "string" == typeof t && (0 <= t.indexOf("&") || 0 <= t.indexOf(">") || 0 <= t.indexOf("<"))
			}, o = function (t) {
				return "<![CDATA[" + a(t) + "]]>"
			}, a = function (t) {
				return t.replace("]]>", "]]]]><![CDATA[>")
			}, e.Builder = (u.prototype.buildObject = function (e) {
				var n, a, u, s, l, g;
				return n = this.options.attrkey, a = this.options.charkey, 1 === Object.keys(e).length && this.options.rootName === r[.2].rootName ? e = e[l = Object.keys(e)[0]] : l = this.options.rootName, g = this, u = function (t, e) {
					var r, s, l, f, p, d;
					if ("object" != typeof e) g.options.cdata && c(e) ? t.raw(o(e)) : t.txt(e);
					else if (Array.isArray(e)) {
						for (f in e)
							if (i.call(e, f))
								for (p in s = e[f]) l = s[p], t = u(t.ele(p), l).up()
					} else
						for (p in e)
							if (i.call(e, p))
								if (s = e[p], p === n) {
									if ("object" == typeof s)
										for (r in s) d = s[r], t = t.att(r, d)
								} else if (p === a) t = g.options.cdata && c(s) ? t.raw(o(s)) : t.txt(s);
					else if (Array.isArray(s))
						for (f in s) i.call(s, f) && (t = "string" == typeof (l = s[f]) ? g.options.cdata && c(l) ? t.ele(p).raw(o(l)).up() : t.ele(p, l).up() : u(t.ele(p), l).up());
					else t = "object" == typeof s ? u(t.ele(p), s).up() : "string" == typeof s && g.options.cdata && c(s) ? t.ele(p).raw(o(s)).up() : (null == s && (s = ""), t.ele(p, s.toString()).up());
					return t
				}, s = t.create(l, this.options.xmldec, this.options.doctype, {
					headless: this.options.headless,
					allowSurrogateChars: this.options.allowSurrogateChars
				}), u(s, e).end(this.options.renderOpts)
			}, u)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c, o, i, u, s, l, g;
			g = n(7), s = g.assign, l = g.isFunction, a = n(54), c = n(55), o = n(113), u = n(42), i = n(114), e = n(1), r = n(21), t.exports.create = function (t, e, n, r) {
				var a, o;
				if (null == t) throw new Error("Root element needs a name.");
				return r = s({}, e, n, r), o = (a = new c(r)).element(t), r.headless || (a.declaration(r), null == r.pubID && null == r.sysID || a.dtd(r)), o
			}, t.exports.begin = function (t, e, n) {
				var r;
				return l(t) && (e = (r = [t, e])[0], n = r[1], t = {}), e ? new o(t, e, n) : new c(t)
			}, t.exports.stringWriter = function (t) {
				return new u(t)
			}, t.exports.streamWriter = function (t, e) {
				return new i(t, e)
			}, t.exports.implementation = new a, t.exports.nodeType = e, t.exports.writerState = r
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r;

			function a() {
				this.defaultParams = {
					"canonical-form": !1,
					"cdata-sections": !1,
					comments: !1,
					"datatype-normalization": !1,
					"element-content-whitespace": !0,
					entities: !0,
					"error-handler": new e,
					infoset: !0,
					"validate-if-schema": !1,
					namespaces: !0,
					"namespace-declarations": !0,
					"normalize-characters": !1,
					"schema-location": "",
					"schema-type": "",
					"split-cdata-sections": !0,
					validate: !1,
					"well-formed": !0
				}, this.params = Object.create(this.defaultParams)
			}
			e = n(109), r = n(110), t.exports = (Object.defineProperty(a.prototype, "parameterNames", {
				get: function () {
					return new r(Object.keys(this.defaultParams))
				}
			}), a.prototype.getParameter = function (t) {
				return this.params.hasOwnProperty(t) ? this.params[t] : null
			}, a.prototype.canSetParameter = function (t, e) {
				return !0
			}, a.prototype.setParameter = function (t, e) {
				return null != e ? this.params[t] = e : delete this.params[t]
			}, a)
		}).call(this)
	}, function (t, e) {
		(function () {
			function e() {}
			t.exports = (e.prototype.handleError = function (t) {
				throw new Error(t)
			}, e)
		}).call(this)
	}, function (t, e) {
		(function () {
			function e(t) {
				this.arr = t || []
			}
			t.exports = (Object.defineProperty(e.prototype, "length", {
				get: function () {
					return this.arr.length
				}
			}), e.prototype.item = function (t) {
				return this.arr[t] || null
			}, e.prototype.contains = function (t) {
				return -1 !== this.arr.indexOf(t)
			}, e)
		}).call(this)
	}, function (t, e) {
		(function () {
			function e(t) {
				this.nodes = t
			}
			t.exports = (Object.defineProperty(e.prototype, "length", {
				get: function () {
					return this.nodes.length || 0
				}
			}), e.prototype.clone = function () {
				return this.nodes = null
			}, e.prototype.item = function (t) {
				return this.nodes[t] || null
			}, e)
		}).call(this)
	}, function (t, e) {
		(function () {
			t.exports = {
				Disconnected: 1,
				Preceding: 2,
				Following: 4,
				Contains: 8,
				ContainedBy: 16,
				ImplementationSpecific: 32
			}
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c, o, i, u, s, l, g, f, p, d, h, y, m, b, v, w, O, E, T, S, C = {}.hasOwnProperty;

			function x(t, n, r) {
				var a;
				this.name = "?xml", this.type = e.Document, a = {}, (t = t || {}).writer ? T(t.writer) && (a = t.writer, t.writer = new m) : t.writer = new m, this.options = t, this.writer = t.writer, this.writerOptions = this.writer.filterOptions(a), this.stringify = new b(t), this.onDataCallback = n || function () {}, this.onEndCallback = r || function () {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null
			}
			S = n(7), E = S.isObject, O = S.isFunction, T = S.isPlainObject, w = S.getValue, e = n(1), p = n(55), d = n(29), c = n(31), o = n(32), y = n(39), v = n(40), h = n(41), g = n(33), f = n(34), i = n(35), s = n(36), u = n(37), l = n(38), a = n(56), b = n(58), m = n(42), r = n(21), t.exports = (x.prototype.createChildNode = function (t) {
				var n, r, a, c, o, i, u, s;
				switch (t.type) {
					case e.CData:
						this.cdata(t.value);
						break;
					case e.Comment:
						this.comment(t.value);
						break;
					case e.Element:
						for (r in a = {}, u = t.attribs) C.call(u, r) && (n = u[r], a[r] = n.value);
						this.node(t.name, a);
						break;
					case e.Dummy:
						this.dummy();
						break;
					case e.Raw:
						this.raw(t.value);
						break;
					case e.Text:
						this.text(t.value);
						break;
					case e.ProcessingInstruction:
						this.instruction(t.target, t.value);
						break;
					default:
						throw new Error("This XML node type is not supported in a JS object: " + t.constructor.name)
				}
				for (o = 0, i = (s = t.children).length; o < i; o++) c = s[o], this.createChildNode(c), c.type === e.Element && this.up();
				return this
			}, x.prototype.dummy = function () {
				return this
			}, x.prototype.node = function (t, e, n) {
				var r;
				if (null == t) throw new Error("Missing node name.");
				if (this.root && -1 === this.currentLevel) throw new Error("Document can only have one root node. " + this.debugInfo(t));
				return this.openCurrent(), t = w(t), null == e && (e = {}), e = w(e), E(e) || (n = (r = [e, n])[0], e = r[1]), this.currentNode = new d(this, t, e), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, null != n && this.text(n), this
			}, x.prototype.element = function (t, n, r) {
				var a, c, o, i, u, s;
				if (this.currentNode && this.currentNode.type === e.DocType) this.dtdElement.apply(this, arguments);
				else if (Array.isArray(t) || E(t) || O(t))
					for (i = this.options.noValidation, this.options.noValidation = !0, (s = new p(this.options).element("TEMP_ROOT")).element(t), this.options.noValidation = i, c = 0, o = (u = s.children).length; c < o; c++) a = u[c], this.createChildNode(a), a.type === e.Element && this.up();
				else this.node(t, n, r);
				return this
			}, x.prototype.attribute = function (t, e) {
				var n, r;
				if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(t));
				if (null != t && (t = w(t)), E(t))
					for (n in t) C.call(t, n) && (r = t[n], this.attribute(n, r));
				else O(e) && (e = e.apply()), this.options.keepNullAttributes && null == e ? this.currentNode.attribs[t] = new a(this, t, "") : null != e && (this.currentNode.attribs[t] = new a(this, t, e));
				return this
			}, x.prototype.text = function (t) {
				var e;
				return this.openCurrent(), e = new v(this, t), this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.cdata = function (t) {
				var e;
				return this.openCurrent(), e = new c(this, t), this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.comment = function (t) {
				var e;
				return this.openCurrent(), e = new o(this, t), this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.raw = function (t) {
				var e;
				return this.openCurrent(), e = new y(this, t), this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.instruction = function (t, e) {
				var n, r, a, c, o;
				if (this.openCurrent(), null != t && (t = w(t)), null != e && (e = w(e)), Array.isArray(t))
					for (n = 0, c = t.length; n < c; n++) r = t[n], this.instruction(r);
				else if (E(t))
					for (r in t) C.call(t, r) && (a = t[r], this.instruction(r, a));
				else O(e) && (e = e.apply()), o = new h(this, t, e), this.onData(this.writer.processingInstruction(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this
			}, x.prototype.declaration = function (t, e, n) {
				var r;
				if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node.");
				return r = new g(this, t, e, n), this.onData(this.writer.declaration(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.doctype = function (t, e, n) {
				if (this.openCurrent(), null == t) throw new Error("Missing root node name.");
				if (this.root) throw new Error("dtd() must come before the root node.");
				return this.currentNode = new f(this, e, n), this.currentNode.rootNodeName = t, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this
			}, x.prototype.dtdElement = function (t, e) {
				var n;
				return this.openCurrent(), n = new u(this, t, e), this.onData(this.writer.dtdElement(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.attList = function (t, e, n, r, a) {
				var c;
				return this.openCurrent(), c = new i(this, t, e, n, r, a), this.onData(this.writer.dtdAttList(c, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.entity = function (t, e) {
				var n;
				return this.openCurrent(), n = new s(this, !1, t, e), this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.pEntity = function (t, e) {
				var n;
				return this.openCurrent(), n = new s(this, !0, t, e), this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.notation = function (t, e) {
				var n;
				return this.openCurrent(), n = new l(this, t, e), this.onData(this.writer.dtdNotation(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
			}, x.prototype.up = function () {
				if (this.currentLevel < 0) throw new Error("The document node has no parent.");
				return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this
			}, x.prototype.end = function () {
				for (; 0 <= this.currentLevel;) this.up();
				return this.onEnd()
			}, x.prototype.openCurrent = function () {
				if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode)
			}, x.prototype.openNode = function (t) {
				var n, a, c, o;
				if (!t.isOpen) {
					if (this.root || 0 !== this.currentLevel || t.type !== e.Element || (this.root = t), a = "", t.type === e.Element) {
						for (c in this.writerOptions.state = r.OpenTag, a = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<" + t.name, o = t.attribs) C.call(o, c) && (n = o[c], a += this.writer.attribute(n, this.writerOptions, this.currentLevel));
						a += (t.children ? ">" : "/>") + this.writer.endline(t, this.writerOptions, this.currentLevel), this.writerOptions.state = r.InsideTag
					} else this.writerOptions.state = r.OpenTag, a = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + t.rootNodeName, t.pubID && t.sysID ? a += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (a += ' SYSTEM "' + t.sysID + '"'), t.children ? (a += " [", this.writerOptions.state = r.InsideTag) : (this.writerOptions.state = r.CloseTag, a += ">"), a += this.writer.endline(t, this.writerOptions, this.currentLevel);
					return this.onData(a, this.currentLevel), t.isOpen = !0
				}
			}, x.prototype.closeNode = function (t) {
				var n;
				if (!t.isClosed) return "", this.writerOptions.state = r.CloseTag, n = t.type === e.Element ? this.writer.indent(t, this.writerOptions, this.currentLevel) + "</" + t.name + ">" + this.writer.endline(t, this.writerOptions, this.currentLevel) : this.writer.indent(t, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(t, this.writerOptions, this.currentLevel), this.writerOptions.state = r.None, this.onData(n, this.currentLevel), t.isClosed = !0
			}, x.prototype.onData = function (t, e) {
				return this.documentStarted = !0, this.onDataCallback(t, e + 1)
			}, x.prototype.onEnd = function () {
				return this.documentCompleted = !0, this.onEndCallback()
			}, x.prototype.debugInfo = function (t) {
				return null == t ? "" : "node: <" + t + ">"
			}, x.prototype.ele = function () {
				return this.element.apply(this, arguments)
			}, x.prototype.nod = function (t, e, n) {
				return this.node(t, e, n)
			}, x.prototype.txt = function (t) {
				return this.text(t)
			}, x.prototype.dat = function (t) {
				return this.cdata(t)
			}, x.prototype.com = function (t) {
				return this.comment(t)
			}, x.prototype.ins = function (t, e) {
				return this.instruction(t, e)
			}, x.prototype.dec = function (t, e, n) {
				return this.declaration(t, e, n)
			}, x.prototype.dtd = function (t, e, n) {
				return this.doctype(t, e, n)
			}, x.prototype.e = function (t, e, n) {
				return this.element(t, e, n)
			}, x.prototype.n = function (t, e, n) {
				return this.node(t, e, n)
			}, x.prototype.t = function (t) {
				return this.text(t)
			}, x.prototype.d = function (t) {
				return this.cdata(t)
			}, x.prototype.c = function (t) {
				return this.comment(t)
			}, x.prototype.r = function (t) {
				return this.raw(t)
			}, x.prototype.i = function (t, e) {
				return this.instruction(t, e)
			}, x.prototype.att = function () {
				return this.currentNode && this.currentNode.type === e.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments)
			}, x.prototype.a = function () {
				return this.currentNode && this.currentNode.type === e.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments)
			}, x.prototype.ent = function (t, e) {
				return this.entity(t, e)
			}, x.prototype.pent = function (t, e) {
				return this.pEntity(t, e)
			}, x.prototype.not = function (t, e) {
				return this.notation(t, e)
			}, x)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			var e, r, a, c = {}.hasOwnProperty;

			function o(t, e) {
				this.stream = t, o.__super__.constructor.call(this, e)
			}
			e = n(1), a = n(59), r = n(21), t.exports = (function (t, e) {
				for (var n in e) c.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(o, a), o.prototype.endline = function (t, e, n) {
				return t.isLastRootNode && e.state === r.CloseTag ? "" : o.__super__.endline.call(this, t, e, n)
			}, o.prototype.document = function (t, e) {
				var n, r, a, c, o, i, u, s, l;
				for (r = a = 0, o = (u = t.children).length; a < o; r = ++a)(n = u[r]).isLastRootNode = r === t.children.length - 1;
				for (e = this.filterOptions(e), l = [], c = 0, i = (s = t.children).length; c < i; c++) n = s[c], l.push(this.writeChildNode(n, e, 0));
				return l
			}, o.prototype.attribute = function (t, e, n) {
				return this.stream.write(o.__super__.attribute.call(this, t, e, n))
			}, o.prototype.cdata = function (t, e, n) {
				return this.stream.write(o.__super__.cdata.call(this, t, e, n))
			}, o.prototype.comment = function (t, e, n) {
				return this.stream.write(o.__super__.comment.call(this, t, e, n))
			}, o.prototype.declaration = function (t, e, n) {
				return this.stream.write(o.__super__.declaration.call(this, t, e, n))
			}, o.prototype.docType = function (t, e, n) {
				var a, c, o, i;
				if (n = n || 0, this.openNode(t, e, n), e.state = r.OpenTag, this.stream.write(this.indent(t, e, n)), this.stream.write("<!DOCTYPE " + t.root().name), t.pubID && t.sysID ? this.stream.write(' PUBLIC "' + t.pubID + '" "' + t.sysID + '"') : t.sysID && this.stream.write(' SYSTEM "' + t.sysID + '"'), 0 < t.children.length) {
					for (this.stream.write(" ["), this.stream.write(this.endline(t, e, n)), e.state = r.InsideTag, c = 0, o = (i = t.children).length; c < o; c++) a = i[c], this.writeChildNode(a, e, n + 1);
					e.state = r.CloseTag, this.stream.write("]")
				}
				return e.state = r.CloseTag, this.stream.write(e.spaceBeforeSlash + ">"), this.stream.write(this.endline(t, e, n)), e.state = r.None, this.closeNode(t, e, n)
			}, o.prototype.element = function (t, n, a) {
				var o, i, u, s, l, g, f, p, d;
				for (f in a = a || 0, this.openNode(t, n, a), n.state = r.OpenTag, this.stream.write(this.indent(t, n, a) + "<" + t.name), p = t.attribs) c.call(p, f) && (o = p[f], this.attribute(o, n, a));
				if (s = 0 === (u = t.children.length) ? null : t.children[0], 0 === u || t.children.every((function (t) {
						return (t.type === e.Text || t.type === e.Raw) && "" === t.value
					}))) n.allowEmpty ? (this.stream.write(">"), n.state = r.CloseTag, this.stream.write("</" + t.name + ">")) : (n.state = r.CloseTag, this.stream.write(n.spaceBeforeSlash + "/>"));
				else if (!n.pretty || 1 !== u || s.type !== e.Text && s.type !== e.Raw || null == s.value) {
					for (this.stream.write(">" + this.endline(t, n, a)), n.state = r.InsideTag, l = 0, g = (d = t.children).length; l < g; l++) i = d[l], this.writeChildNode(i, n, a + 1);
					n.state = r.CloseTag, this.stream.write(this.indent(t, n, a) + "</" + t.name + ">")
				} else this.stream.write(">"), n.state = r.InsideTag, n.suppressPrettyCount++, this.writeChildNode(s, n, a + 1), n.suppressPrettyCount--, n.state = r.CloseTag, this.stream.write("</" + t.name + ">");
				return this.stream.write(this.endline(t, n, a)), n.state = r.None, this.closeNode(t, n, a)
			}, o.prototype.processingInstruction = function (t, e, n) {
				return this.stream.write(o.__super__.processingInstruction.call(this, t, e, n))
			}, o.prototype.raw = function (t, e, n) {
				return this.stream.write(o.__super__.raw.call(this, t, e, n))
			}, o.prototype.text = function (t, e, n) {
				return this.stream.write(o.__super__.text.call(this, t, e, n))
			}, o.prototype.dtdAttList = function (t, e, n) {
				return this.stream.write(o.__super__.dtdAttList.call(this, t, e, n))
			}, o.prototype.dtdElement = function (t, e, n) {
				return this.stream.write(o.__super__.dtdElement.call(this, t, e, n))
			}, o.prototype.dtdEntity = function (t, e, n) {
				return this.stream.write(o.__super__.dtdEntity.call(this, t, e, n))
			}, o.prototype.dtdNotation = function (t, e, n) {
				return this.stream.write(o.__super__.dtdNotation.call(this, t, e, n))
			}, o)
		}).call(this)
	}, function (t, e, n) {
		(function () {
			"use strict";

			function t(t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			}
			var r, a, c, o, i, u, s, l, g, f = {}.hasOwnProperty;

			function p(n) {
				var r, c, o;
				if (this.parseStringPromise = t(this.parseStringPromise, this), this.parseString = t(this.parseString, this), this.reset = t(this.reset, this), this.assignOrPush = t(this.assignOrPush, this), this.processAsync = t(this.processAsync, this), !(this instanceof e.Parser)) return new e.Parser(n);
				for (r in this.options = {}, c = a[.2]) f.call(c, r) && (o = c[r], this.options[r] = o);
				for (r in n) f.call(n, r) && (o = n[r], this.options[r] = o);
				this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(u.normalize)), this.reset()
			}
			l = n(116), c = n(22), r = n(131), u = n(66), g = n(64).setImmediate, a = n(28).defaults, s = n(132), o = function (t) {
				return "object" == typeof t && null != t && 0 === Object.keys(t).length
			}, i = function (t, e, n) {
				var r, a;
				for (r = 0, a = t.length; r < a; r++) e = (0, t[r])(e, n);
				return e
			}, e.Parser = (function (t, e) {
				for (var n in e) f.call(e, n) && (t[n] = e[n]);

				function r() {
					this.constructor = t
				}
				r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
			}(p, c), p.prototype.processAsync = function () {
				var t, e;
				try {
					return this.remaining.length <= this.options.chunkSize ? (t = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(t), this.saxParser.close()) : (t = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(t), g(this.processAsync))
				} catch (t) {
					if (e = t, !this.saxParser.errThrown) return this.saxParser.errThrown = !0, this.emit(e)
				}
			}, p.prototype.assignOrPush = function (t, e, n) {
				return e in t ? (t[e] instanceof Array || (t[e] = [t[e]]), t[e].push(n)) : this.options.explicitArray ? t[e] = [n] : t[e] = n
			}, p.prototype.reset = function () {
				var t, e, n, r, a, c, u, s, g;
				return this.removeAllListeners(), this.saxParser = l.parser(this.options.strict, {
					trim: !1,
					normalize: !1,
					xmlns: this.options.xmlns
				}), this.saxParser.errThrown = !1, this.saxParser.onerror = (a = this, function (t) {
					if (a.saxParser.resume(), !a.saxParser.errThrown) return a.saxParser.errThrown = !0, a.emit("error", t)
				}), this.saxParser.onend = (c = this, function () {
					if (!c.saxParser.ended) return c.saxParser.ended = !0, c.emit("end", c.resultObject)
				}), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, r = [], t = this.options.attrkey, e = this.options.charkey, this.saxParser.onopentag = (u = this, function (n) {
					var a, c, o, s, l;
					if ((o = {})[e] = "", !u.options.ignoreAttrs)
						for (a in l = n.attributes) f.call(l, a) && (t in o || u.options.mergeAttrs || (o[t] = {}), c = u.options.attrValueProcessors ? i(u.options.attrValueProcessors, n.attributes[a], a) : n.attributes[a], s = u.options.attrNameProcessors ? i(u.options.attrNameProcessors, a) : a, u.options.mergeAttrs ? u.assignOrPush(o, s, c) : o[t][s] = c);
					return o["#name"] = u.options.tagNameProcessors ? i(u.options.tagNameProcessors, n.name) : n.name, u.options.xmlns && (o[u.options.xmlnskey] = {
						uri: n.uri,
						local: n.local
					}), r.push(o)
				}), this.saxParser.onclosetag = (s = this, function () {
					var t, n, a, c, u, l, g, p, d, h;
					if (l = r.pop(), u = l["#name"], s.options.explicitChildren && s.options.preserveChildrenOrder || delete l["#name"], !0 === l.cdata && (t = l.cdata, delete l.cdata), d = r[r.length - 1], l[e].match(/^\s*$/) && !t ? (n = l[e], delete l[e]) : (s.options.trim && (l[e] = l[e].trim()), s.options.normalize && (l[e] = l[e].replace(/\s{2,}/g, " ").trim()), l[e] = s.options.valueProcessors ? i(s.options.valueProcessors, l[e], u) : l[e], 1 === Object.keys(l).length && e in l && !s.EXPLICIT_CHARKEY && (l = l[e])), o(l) && (l = "" !== s.options.emptyTag ? s.options.emptyTag : n), null != s.options.validator && (h = "/" + function () {
							var t, e, n;
							for (n = [], t = 0, e = r.length; t < e; t++) c = r[t], n.push(c["#name"]);
							return n
						}().concat(u).join("/"), function () {
							var t;
							try {
								l = s.options.validator(h, d && d[u], l)
							} catch (e) {
								return t = e, s.emit("error", t)
							}
						}()), s.options.explicitChildren && !s.options.mergeAttrs && "object" == typeof l)
						if (s.options.preserveChildrenOrder) {
							if (d) {
								for (a in d[s.options.childkey] = d[s.options.childkey] || [], g = {}, l) f.call(l, a) && (g[a] = l[a]);
								d[s.options.childkey].push(g), delete l["#name"], 1 === Object.keys(l).length && e in l && !s.EXPLICIT_CHARKEY && (l = l[e])
							}
						} else c = {}, s.options.attrkey in l && (c[s.options.attrkey] = l[s.options.attrkey], delete l[s.options.attrkey]), !s.options.charsAsChildren && s.options.charkey in l && (c[s.options.charkey] = l[s.options.charkey], delete l[s.options.charkey]), 0 < Object.getOwnPropertyNames(l).length && (c[s.options.childkey] = l), l = c;
					return 0 < r.length ? s.assignOrPush(d, u, l) : (s.options.explicitRoot && (p = l, (l = {})[u] = p), s.resultObject = l, s.saxParser.ended = !0, s.emit("end", s.resultObject))
				}), n = function (t) {
					var n, a;
					if (a = r[r.length - 1]) return a[e] += t, g.options.explicitChildren && g.options.preserveChildrenOrder && g.options.charsAsChildren && (g.options.includeWhiteChars || "" !== t.replace(/\\n/g, "").trim()) && (a[g.options.childkey] = a[g.options.childkey] || [], (n = {
						"#name": "__text__"
					})[e] = t, g.options.normalize && (n[e] = n[e].replace(/\s{2,}/g, " ").trim()), a[g.options.childkey].push(n)), a
				}, (g = this).saxParser.ontext = n, this.saxParser.oncdata = function (t) {
					var e;
					if (e = n(t)) return e.cdata = !0
				}
			}, p.prototype.parseString = function (t, e) {
				var n;
				null != e && "function" == typeof e && (this.on("end", (function (t) {
					return this.reset(), e(null, t)
				})), this.on("error", (function (t) {
					return this.reset(), e(t)
				})));
				try {
					return "" === (t = t.toString()).trim() ? (this.emit("end", null), !0) : (t = r.stripBOM(t), this.options.async ? (this.remaining = t, g(this.processAsync), this.saxParser) : this.saxParser.write(t).close())
				} catch (t) {
					if (n = t, !this.saxParser.errThrown && !this.saxParser.ended) return this.emit("error", n), this.saxParser.errThrown = !0;
					if (this.saxParser.ended) throw n
				}
			}, p.prototype.parseStringPromise = function (t) {
				return s(this.parseString)(t)
			}, p), e.parseString = function (t, n, r) {
				var a, c;
				return null != r ? ("function" == typeof r && (a = r), "object" == typeof n && (c = n)) : ("function" == typeof n && (a = n), c = {}), new e.Parser(c).parseString(t, a)
			}, e.parseStringPromise = function (t, n) {
				var r;
				return "object" == typeof n && (r = n), new e.Parser(r).parseStringPromise(t)
			}
		}).call(this)
	}, function (t, e, n) {
		(function (t) {
			! function (e) {
				e.parser = function (t, e) {
					return new c(t, e)
				}, e.SAXParser = c, e.SAXStream = i, e.createStream = function (t, e) {
					return new i(t, e)
				}, e.MAX_BUFFER_LENGTH = 65536;
				var r, a = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

				function c(t, n) {
					if (!(this instanceof c)) return new c(t, n);
					var r = this;
					! function (t) {
						for (var e = 0, n = a.length; e < n; e++) t[a[e]] = ""
					}(r), r.q = r.c = "", r.bufferCheckPosition = e.MAX_BUFFER_LENGTH, r.opt = n || {}, r.opt.lowercase = r.opt.lowercase || r.opt.lowercasetags, r.looseCase = r.opt.lowercase ? "toLowerCase" : "toUpperCase", r.tags = [], r.closed = r.closedRoot = r.sawRoot = !1, r.tag = r.error = null, r.strict = !!t, r.noscript = !(!t && !r.opt.noscript), r.state = E.BEGIN, r.strictEntities = r.opt.strictEntities, r.ENTITIES = r.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), r.attribList = [], r.opt.xmlns && (r.ns = Object.create(f)), r.trackPosition = !1 !== r.opt.position, r.trackPosition && (r.position = r.line = r.column = 0), S(r, "onready")
				}
				e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function (t) {
					function e() {}
					return e.prototype = t, new e
				}), Object.keys || (Object.keys = function (t) {
					var e = [];
					for (var n in t) t.hasOwnProperty(n) && e.push(n);
					return e
				}), c.prototype = {
					end: function () {
						_(this)
					},
					write: function (t) {
							var n = this;
							if (this.error) throw this.error;
							if (n.closed) return P(n, "Cannot write after close. Assign an onready handler.");
							if (null === t) return _(n);
							"object" == typeof t && (t = t.toString());
							for (var r, c = 0, o = ""; o = q(t, c++), n.c = o;) switch (n.trackPosition && (n.position++, "\n" === o ? (n.line++, n.column = 0) : n.column++), n.state) {
								case E.BEGIN:
									if (n.state = E.BEGIN_WHITESPACE, "\ufeff" === o) continue;
									L(n, o);
									continue;
								case E.BEGIN_WHITESPACE:
									L(n, o);
									continue;
								case E.TEXT:
									if (n.sawRoot && !n.closedRoot) {
										for (var i = c - 1; o && "<" !== o && "&" !== o;)(o = q(t, c++)) && n.trackPosition && (n.position++, "\n" === o ? (n.line++, n.column = 0) : n.column++);
										n.textNode += t.substring(i, c - 1)
									}
									"<" !== o || n.sawRoot && n.closedRoot && !n.strict ? (m(o) || n.sawRoot && !n.closedRoot || A(n, "Text data outside of root node."), "&" === o ? n.state = E.TEXT_ENTITY : n.textNode += o) : (n.state = E.OPEN_WAKA, n.startTagPosition = n.position);
									continue;
								case E.SCRIPT:
									"<" === o ? n.state = E.SCRIPT_ENDING : n.script += o;
									continue;
								case E.SCRIPT_ENDING:
									"/" === o ? n.state = E.CLOSE_TAG : (n.script += "<" + o, n.state = E.SCRIPT);
									continue;
								case E.OPEN_WAKA:
									if ("!" === o) n.state = E.SGML_DECL, n.sgmlDecl = "";
									else if (!m(o))
										if (v(p, o)) n.state = E.OPEN_TAG, n.tagName = o;
										else if ("/" === o) n.state = E.CLOSE_TAG, n.tagName = "";
									else if ("?" === o) n.state = E.PROC_INST, n.procInstName = n.procInstBody = "";
									else {
										if (A(n, "Unencoded <"), n.startTagPosition + 1 < n.position) {
											var l = n.position - n.startTagPosition;
											o = new Array(l).join(" ") + o
										}
										n.textNode += "<" + o, n.state = E.TEXT
									}
									continue;
								case E.SGML_DECL:
									(n.sgmlDecl + o).toUpperCase() === u ? (C(n, "onopencdata"), n.state = E.CDATA, n.sgmlDecl = "", n.cdata = "") : n.sgmlDecl + o === "--" ? (n.state = E.COMMENT, n.comment = "", n.sgmlDecl = "") : (n.sgmlDecl + o).toUpperCase() === s ? (n.state = E.DOCTYPE, (n.doctype || n.sawRoot) && A(n, "Inappropriately located doctype declaration"), n.doctype = "", n.sgmlDecl = "") : ">" === o ? (C(n, "onsgmldeclaration", n.sgmlDecl), n.sgmlDecl = "", n.state = E.TEXT) : (b(o) && (n.state = E.SGML_DECL_QUOTED), n.sgmlDecl += o);
									continue;
								case E.SGML_DECL_QUOTED:
									o === n.q && (n.state = E.SGML_DECL, n.q = ""), n.sgmlDecl += o;
									continue;
								case E.DOCTYPE:
									">" === o ? (n.state = E.TEXT, C(n, "ondoctype", n.doctype), n.doctype = !0) : (n.doctype += o, "[" === o ? n.state = E.DOCTYPE_DTD : b(o) && (n.state = E.DOCTYPE_QUOTED, n.q = o));
									continue;
								case E.DOCTYPE_QUOTED:
									n.doctype += o, o === n.q && (n.q = "", n.state = E.DOCTYPE);
									continue;
								case E.DOCTYPE_DTD:
									n.doctype += o, "]" === o ? n.state = E.DOCTYPE : b(o) && (n.state = E.DOCTYPE_DTD_QUOTED, n.q = o);
									continue;
								case E.DOCTYPE_DTD_QUOTED:
									n.doctype += o, o === n.q && (n.state = E.DOCTYPE_DTD, n.q = "");
									continue;
								case E.COMMENT:
									"-" === o ? n.state = E.COMMENT_ENDING : n.comment += o;
									continue;
								case E.COMMENT_ENDING:
									"-" === o ? (n.state = E.COMMENT_ENDED, n.comment = N(n.opt, n.comment), n.comment && C(n, "oncomment", n.comment), n.comment = "") : (n.comment += "-" + o, n.state = E.COMMENT);
									continue;
								case E.COMMENT_ENDED:
									">" !== o ? (A(n, "Malformed comment"), n.comment += "--" + o, n.state = E.COMMENT) : n.state = E.TEXT;
									continue;
								case E.CDATA:
									"]" === o ? n.state = E.CDATA_ENDING : n.cdata += o;
									continue;
								case E.CDATA_ENDING:
									"]" === o ? n.state = E.CDATA_ENDING_2 : (n.cdata += "]" + o, n.state = E.CDATA);
									continue;
								case E.CDATA_ENDING_2:
									">" === o ? (n.cdata && C(n, "oncdata", n.cdata), C(n, "onclosecdata"), n.cdata = "", n.state = E.TEXT) : "]" === o ? n.cdata += "]" : (n.cdata += "]]" + o, n.state = E.CDATA);
									continue;
								case E.PROC_INST:
									"?" === o ? n.state = E.PROC_INST_ENDING : m(o) ? n.state = E.PROC_INST_BODY : n.procInstName += o;
									continue;
								case E.PROC_INST_BODY:
									if (!n.procInstBody && m(o)) continue;
									"?" === o ? n.state = E.PROC_INST_ENDING : n.procInstBody += o;
									continue;
								case E.PROC_INST_ENDING:
									">" === o ? (C(n, "onprocessinginstruction", {
										name: n.procInstName,
										body: n.procInstBody
									}), n.procInstName = n.procInstBody = "", n.state = E.TEXT) : (n.procInstBody += "?" + o, n.state = E.PROC_INST_BODY);
									continue;
								case E.OPEN_TAG:
									v(d, o) ? n.tagName += o : (k(n), ">" === o ? D(n) : "/" === o ? n.state = E.OPEN_TAG_SLASH : (m(o) || A(n, "Invalid character in tag name"), n.state = E.ATTRIB));
									continue;
								case E.OPEN_TAG_SLASH:
									">" === o ? (D(n, !0), M(n)) : (A(n, "Forward-slash in opening tag not followed by >"), n.state = E.ATTRIB);
									continue;
								case E.ATTRIB:
									if (m(o)) continue;
									">" === o ? D(n) : "/" === o ? n.state = E.OPEN_TAG_SLASH : v(p, o) ? (n.attribName = o, n.attribValue = "", n.state = E.ATTRIB_NAME) : A(n, "Invalid attribute name");
									continue;
								case E.ATTRIB_NAME:
									"=" === o ? n.state = E.ATTRIB_VALUE : ">" === o ? (A(n, "Attribute without value"), n.attribValue = n.attribName, j(n), D(n)) : m(o) ? n.state = E.ATTRIB_NAME_SAW_WHITE : v(d, o) ? n.attribName += o : A(n, "Invalid attribute name");
									continue;
								case E.ATTRIB_NAME_SAW_WHITE:
									if ("=" === o) n.state = E.ATTRIB_VALUE;
									else {
										if (m(o)) continue;
										A(n, "Attribute without value"), n.tag.attributes[n.attribName] = "", n.attribValue = "", C(n, "onattribute", {
											name: n.attribName,
											value: ""
										}), n.attribName = "", ">" === o ? D(n) : v(p, o) ? (n.attribName = o, n.state = E.ATTRIB_NAME) : (A(n, "Invalid attribute name"), n.state = E.ATTRIB)
									}
									continue;
								case E.ATTRIB_VALUE:
									if (m(o)) continue;
									b(o) ? (n.q = o, n.state = E.ATTRIB_VALUE_QUOTED) : (A(n, "Unquoted attribute value"), n.state = E.ATTRIB_VALUE_UNQUOTED, n.attribValue = o);
									continue;
								case E.ATTRIB_VALUE_QUOTED:
									if (o !== n.q) {
										"&" === o ? n.state = E.ATTRIB_VALUE_ENTITY_Q : n.attribValue += o;
										continue
									}
									j(n), n.q = "", n.state = E.ATTRIB_VALUE_CLOSED;
									continue;
								case E.ATTRIB_VALUE_CLOSED:
									m(o) ? n.state = E.ATTRIB : ">" === o ? D(n) : "/" === o ? n.state = E.OPEN_TAG_SLASH : v(p, o) ? (A(n, "No whitespace between attributes"), n.attribName = o, n.attribValue = "", n.state = E.ATTRIB_NAME) : A(n, "Invalid attribute name");
									continue;
								case E.ATTRIB_VALUE_UNQUOTED:
									if (">" !== (r = o) && !m(r)) {
										"&" === o ? n.state = E.ATTRIB_VALUE_ENTITY_U : n.attribValue += o;
										continue
									}
									j(n), ">" === o ? D(n) : n.state = E.ATTRIB;
									continue;
								case E.CLOSE_TAG:
									if (n.tagName) ">" === o ? M(n) : v(d, o) ? n.tagName += o : n.script ? (n.script += "</" + n.tagName, n.tagName = "", n.state = E.SCRIPT) : (m(o) || A(n, "Invalid tagname in closing tag"), n.state = E.CLOSE_TAG_SAW_WHITE);
									else {
										if (m(o)) continue;
										v(p, o) ? n.tagName = o : n.script ? (n.script += "</" + o, n.state = E.SCRIPT) : A(n, "Invalid tagname in closing tag.")
									}
									continue;
								case E.CLOSE_TAG_SAW_WHITE:
									if (m(o)) continue;
									">" === o ? M(n) : A(n, "Invalid characters in closing tag");
									continue;
								case E.TEXT_ENTITY:
								case E.ATTRIB_VALUE_ENTITY_Q:
								case E.ATTRIB_VALUE_ENTITY_U:
									var g, f;
									switch (n.state) {
										case E.TEXT_ENTITY:
											g = E.TEXT, f = "textNode";
											break;
										case E.ATTRIB_VALUE_ENTITY_Q:
											g = E.ATTRIB_VALUE_QUOTED, f = "attribValue";
											break;
										case E.ATTRIB_VALUE_ENTITY_U:
											g = E.ATTRIB_VALUE_UNQUOTED, f = "attribValue"
									}
									";" === o ? (n[f] += R(n), n.entity = "", n.state = g) : v(n.entity.length ? y : h, o) ? n.entity += o : (A(n, "Invalid character in entity name"), n[f] += "&" + n.entity + o, n.entity = "", n.state = g);
									continue;
								default:
									throw new Error(n, "Unknown state: " + n.state)
							}
							return n.position >= n.bufferCheckPosition && function (t) {
								for (var n = Math.max(e.MAX_BUFFER_LENGTH, 10), r = 0, c = 0, o = a.length; c < o; c++) {
									var i = t[a[c]].length;
									if (n < i) switch (a[c]) {
										case "textNode":
											x(t);
											break;
										case "cdata":
											C(t, "oncdata", t.cdata), t.cdata = "";
											break;
										case "script":
											C(t, "onscript", t.script), t.script = "";
											break;
										default:
											P(t, "Max buffer length exceeded: " + a[c])
									}
									r = Math.max(r, i)
								}
								var u = e.MAX_BUFFER_LENGTH - r;
								t.bufferCheckPosition = u + t.position
							}(n), n
						}
						/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
						,
					resume: function () {
						return this.error = null, this
					},
					close: function () {
						return this.write(null)
					},
					flush: function () {
						! function (t) {
							x(t), "" !== t.cdata && (C(t, "oncdata", t.cdata), t.cdata = ""), "" !== t.script && (C(t, "onscript", t.script), t.script = "")
						}(this)
					}
				};
				try {
					r = n(119).Stream
				} catch (T) {
					r = function () {}
				}
				var o = e.EVENTS.filter((function (t) {
					return "error" !== t && "end" !== t
				}));

				function i(t, e) {
					if (!(this instanceof i)) return new i(t, e);
					r.apply(this), this._parser = new c(t, e), this.writable = !0, this.readable = !0;
					var n = this;
					this._parser.onend = function () {
						n.emit("end")
					}, this._parser.onerror = function (t) {
						n.emit("error", t), n._parser.error = null
					}, this._decoder = null, o.forEach((function (t) {
						Object.defineProperty(n, "on" + t, {
							get: function () {
								return n._parser["on" + t]
							},
							set: function (e) {
								if (!e) return n.removeAllListeners(t), n._parser["on" + t] = e;
								n.on(t, e)
							},
							enumerable: !0,
							configurable: !1
						})
					}))
				}(i.prototype = Object.create(r.prototype, {
					constructor: {
						value: i
					}
				})).write = function (e) {
					if ("function" == typeof t && "function" == typeof t.isBuffer && t.isBuffer(e)) {
						if (!this._decoder) {
							var r = n(24).StringDecoder;
							this._decoder = new r("utf8")
						}
						e = this._decoder.write(e)
					}
					return this._parser.write(e.toString()), this.emit("data", e), !0
				}, i.prototype.end = function (t) {
					return t && t.length && this.write(t), this._parser.end(), !0
				}, i.prototype.on = function (t, e) {
					var n = this;
					return n._parser["on" + t] || -1 === o.indexOf(t) || (n._parser["on" + t] = function () {
						var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
						e.splice(0, 0, t), n.emit.apply(n, e)
					}), r.prototype.on.call(n, t, e)
				};
				var u = "[CDATA[",
					s = "DOCTYPE",
					l = "http://www.w3.org/XML/1998/namespace",
					g = "http://www.w3.org/2000/xmlns/",
					f = {
						xml: l,
						xmlns: g
					},
					p = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
					d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
					h = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
					y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

				function m(t) {
					return " " === t || "\n" === t || "\r" === t || "\t" === t
				}

				function b(t) {
					return '"' === t || "'" === t
				}

				function v(t, e) {
					return t.test(e)
				}
				var w, O, E = 0;
				for (var T in e.STATE = {
						BEGIN: E++,
						BEGIN_WHITESPACE: E++,
						TEXT: E++,
						TEXT_ENTITY: E++,
						OPEN_WAKA: E++,
						SGML_DECL: E++,
						SGML_DECL_QUOTED: E++,
						DOCTYPE: E++,
						DOCTYPE_QUOTED: E++,
						DOCTYPE_DTD: E++,
						DOCTYPE_DTD_QUOTED: E++,
						COMMENT_STARTING: E++,
						COMMENT: E++,
						COMMENT_ENDING: E++,
						COMMENT_ENDED: E++,
						CDATA: E++,
						CDATA_ENDING: E++,
						CDATA_ENDING_2: E++,
						PROC_INST: E++,
						PROC_INST_BODY: E++,
						PROC_INST_ENDING: E++,
						OPEN_TAG: E++,
						OPEN_TAG_SLASH: E++,
						ATTRIB: E++,
						ATTRIB_NAME: E++,
						ATTRIB_NAME_SAW_WHITE: E++,
						ATTRIB_VALUE: E++,
						ATTRIB_VALUE_QUOTED: E++,
						ATTRIB_VALUE_CLOSED: E++,
						ATTRIB_VALUE_UNQUOTED: E++,
						ATTRIB_VALUE_ENTITY_Q: E++,
						ATTRIB_VALUE_ENTITY_U: E++,
						CLOSE_TAG: E++,
						CLOSE_TAG_SAW_WHITE: E++,
						SCRIPT: E++,
						SCRIPT_ENDING: E++
					}, e.XML_ENTITIES = {
						amp: "&",
						gt: ">",
						lt: "<",
						quot: '"',
						apos: "'"
					}, e.ENTITIES = {
						amp: "&",
						gt: ">",
						lt: "<",
						quot: '"',
						apos: "'",
						AElig: 198,
						Aacute: 193,
						Acirc: 194,
						Agrave: 192,
						Aring: 197,
						Atilde: 195,
						Auml: 196,
						Ccedil: 199,
						ETH: 208,
						Eacute: 201,
						Ecirc: 202,
						Egrave: 200,
						Euml: 203,
						Iacute: 205,
						Icirc: 206,
						Igrave: 204,
						Iuml: 207,
						Ntilde: 209,
						Oacute: 211,
						Ocirc: 212,
						Ograve: 210,
						Oslash: 216,
						Otilde: 213,
						Ouml: 214,
						THORN: 222,
						Uacute: 218,
						Ucirc: 219,
						Ugrave: 217,
						Uuml: 220,
						Yacute: 221,
						aacute: 225,
						acirc: 226,
						aelig: 230,
						agrave: 224,
						aring: 229,
						atilde: 227,
						auml: 228,
						ccedil: 231,
						eacute: 233,
						ecirc: 234,
						egrave: 232,
						eth: 240,
						euml: 235,
						iacute: 237,
						icirc: 238,
						igrave: 236,
						iuml: 239,
						ntilde: 241,
						oacute: 243,
						ocirc: 244,
						ograve: 242,
						oslash: 248,
						otilde: 245,
						ouml: 246,
						szlig: 223,
						thorn: 254,
						uacute: 250,
						ucirc: 251,
						ugrave: 249,
						uuml: 252,
						yacute: 253,
						yuml: 255,
						copy: 169,
						reg: 174,
						nbsp: 160,
						iexcl: 161,
						cent: 162,
						pound: 163,
						curren: 164,
						yen: 165,
						brvbar: 166,
						sect: 167,
						uml: 168,
						ordf: 170,
						laquo: 171,
						not: 172,
						shy: 173,
						macr: 175,
						deg: 176,
						plusmn: 177,
						sup1: 185,
						sup2: 178,
						sup3: 179,
						acute: 180,
						micro: 181,
						para: 182,
						middot: 183,
						cedil: 184,
						ordm: 186,
						raquo: 187,
						frac14: 188,
						frac12: 189,
						frac34: 190,
						iquest: 191,
						times: 215,
						divide: 247,
						OElig: 338,
						oelig: 339,
						Scaron: 352,
						scaron: 353,
						Yuml: 376,
						fnof: 402,
						circ: 710,
						tilde: 732,
						Alpha: 913,
						Beta: 914,
						Gamma: 915,
						Delta: 916,
						Epsilon: 917,
						Zeta: 918,
						Eta: 919,
						Theta: 920,
						Iota: 921,
						Kappa: 922,
						Lambda: 923,
						Mu: 924,
						Nu: 925,
						Xi: 926,
						Omicron: 927,
						Pi: 928,
						Rho: 929,
						Sigma: 931,
						Tau: 932,
						Upsilon: 933,
						Phi: 934,
						Chi: 935,
						Psi: 936,
						Omega: 937,
						alpha: 945,
						beta: 946,
						gamma: 947,
						delta: 948,
						epsilon: 949,
						zeta: 950,
						eta: 951,
						theta: 952,
						iota: 953,
						kappa: 954,
						lambda: 955,
						mu: 956,
						nu: 957,
						xi: 958,
						omicron: 959,
						pi: 960,
						rho: 961,
						sigmaf: 962,
						sigma: 963,
						tau: 964,
						upsilon: 965,
						phi: 966,
						chi: 967,
						psi: 968,
						omega: 969,
						thetasym: 977,
						upsih: 978,
						piv: 982,
						ensp: 8194,
						emsp: 8195,
						thinsp: 8201,
						zwnj: 8204,
						zwj: 8205,
						lrm: 8206,
						rlm: 8207,
						ndash: 8211,
						mdash: 8212,
						lsquo: 8216,
						rsquo: 8217,
						sbquo: 8218,
						ldquo: 8220,
						rdquo: 8221,
						bdquo: 8222,
						dagger: 8224,
						Dagger: 8225,
						bull: 8226,
						hellip: 8230,
						permil: 8240,
						prime: 8242,
						Prime: 8243,
						lsaquo: 8249,
						rsaquo: 8250,
						oline: 8254,
						frasl: 8260,
						euro: 8364,
						image: 8465,
						weierp: 8472,
						real: 8476,
						trade: 8482,
						alefsym: 8501,
						larr: 8592,
						uarr: 8593,
						rarr: 8594,
						darr: 8595,
						harr: 8596,
						crarr: 8629,
						lArr: 8656,
						uArr: 8657,
						rArr: 8658,
						dArr: 8659,
						hArr: 8660,
						forall: 8704,
						part: 8706,
						exist: 8707,
						empty: 8709,
						nabla: 8711,
						isin: 8712,
						notin: 8713,
						ni: 8715,
						prod: 8719,
						sum: 8721,
						minus: 8722,
						lowast: 8727,
						radic: 8730,
						prop: 8733,
						infin: 8734,
						ang: 8736,
						and: 8743,
						or: 8744,
						cap: 8745,
						cup: 8746,
						int: 8747,
						there4: 8756,
						sim: 8764,
						cong: 8773,
						asymp: 8776,
						ne: 8800,
						equiv: 8801,
						le: 8804,
						ge: 8805,
						sub: 8834,
						sup: 8835,
						nsub: 8836,
						sube: 8838,
						supe: 8839,
						oplus: 8853,
						otimes: 8855,
						perp: 8869,
						sdot: 8901,
						lceil: 8968,
						rceil: 8969,
						lfloor: 8970,
						rfloor: 8971,
						lang: 9001,
						rang: 9002,
						loz: 9674,
						spades: 9824,
						clubs: 9827,
						hearts: 9829,
						diams: 9830
					}, Object.keys(e.ENTITIES).forEach((function (t) {
						var n = e.ENTITIES[t],
							r = "number" == typeof n ? String.fromCharCode(n) : n;
						e.ENTITIES[t] = r
					})), e.STATE) e.STATE[e.STATE[T]] = T;

				function S(t, e, n) {
					t[e] && t[e](n)
				}

				function C(t, e, n) {
					t.textNode && x(t), S(t, e, n)
				}

				function x(t) {
					t.textNode = N(t.opt, t.textNode), t.textNode && S(t, "ontext", t.textNode), t.textNode = ""
				}

				function N(t, e) {
					return t.trim && (e = e.trim()), t.normalize && (e = e.replace(/\s+/g, " ")), e
				}

				function P(t, e) {
					return x(t), t.trackPosition && (e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c), e = new Error(e), t.error = e, S(t, "onerror", e), t
				}

				function _(t) {
					return t.sawRoot && !t.closedRoot && A(t, "Unclosed root tag"), t.state !== E.BEGIN && t.state !== E.BEGIN_WHITESPACE && t.state !== E.TEXT && P(t, "Unexpected end"), x(t), t.c = "", t.closed = !0, S(t, "onend"), c.call(t, t.strict, t.opt), t
				}

				function A(t, e) {
					if ("object" != typeof t || !(t instanceof c)) throw new Error("bad call to strictFail");
					t.strict && P(t, e)
				}

				function k(t) {
					t.strict || (t.tagName = t.tagName[t.looseCase]());
					var e = t.tags[t.tags.length - 1] || t,
						n = t.tag = {
							name: t.tagName,
							attributes: {}
						};
					t.opt.xmlns && (n.ns = e.ns), t.attribList.length = 0, C(t, "onopentagstart", n)
				}

				function I(t, e) {
					var n = t.indexOf(":") < 0 ? ["", t] : t.split(":"),
						r = n[0],
						a = n[1];
					return e && "xmlns" === t && (r = "xmlns", a = ""), {
						prefix: r,
						local: a
					}
				}

				function j(t) {
					if (t.strict || (t.attribName = t.attribName[t.looseCase]()), -1 !== t.attribList.indexOf(t.attribName) || t.tag.attributes.hasOwnProperty(t.attribName)) t.attribName = t.attribValue = "";
					else {
						if (t.opt.xmlns) {
							var e = I(t.attribName, !0),
								n = e.prefix,
								r = e.local;
							if ("xmlns" === n)
								if ("xml" === r && t.attribValue !== l) A(t, "xml: prefix must be bound to " + l + "\nActual: " + t.attribValue);
								else if ("xmlns" === r && t.attribValue !== g) A(t, "xmlns: prefix must be bound to " + g + "\nActual: " + t.attribValue);
							else {
								var a = t.tag,
									c = t.tags[t.tags.length - 1] || t;
								a.ns === c.ns && (a.ns = Object.create(c.ns)), a.ns[r] = t.attribValue
							}
							t.attribList.push([t.attribName, t.attribValue])
						} else t.tag.attributes[t.attribName] = t.attribValue, C(t, "onattribute", {
							name: t.attribName,
							value: t.attribValue
						});
						t.attribName = t.attribValue = ""
					}
				}

				function D(t, e) {
					if (t.opt.xmlns) {
						var n = t.tag,
							r = I(t.tagName);
						n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (A(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), n.uri = r.prefix);
						var a = t.tags[t.tags.length - 1] || t;
						n.ns && a.ns !== n.ns && Object.keys(n.ns).forEach((function (e) {
							C(t, "onopennamespace", {
								prefix: e,
								uri: n.ns[e]
							})
						}));
						for (var c = 0, o = t.attribList.length; c < o; c++) {
							var i = t.attribList[c],
								u = i[0],
								s = i[1],
								l = I(u, !0),
								g = l.prefix,
								f = l.local,
								p = "" === g ? "" : n.ns[g] || "",
								d = {
									name: u,
									value: s,
									prefix: g,
									local: f,
									uri: p
								};
							g && "xmlns" !== g && !p && (A(t, "Unbound namespace prefix: " + JSON.stringify(g)), d.uri = g), t.tag.attributes[u] = d, C(t, "onattribute", d)
						}
						t.attribList.length = 0
					}
					t.tag.isSelfClosing = !!e, t.sawRoot = !0, t.tags.push(t.tag), C(t, "onopentag", t.tag), e || (t.noscript || "script" !== t.tagName.toLowerCase() ? t.state = E.TEXT : t.state = E.SCRIPT, t.tag = null, t.tagName = ""), t.attribName = t.attribValue = "", t.attribList.length = 0
				}

				function M(t) {
					if (!t.tagName) return A(t, "Weird empty close tag."), t.textNode += "</>", void(t.state = E.TEXT);
					if (t.script) {
						if ("script" !== t.tagName) return t.script += "</" + t.tagName + ">", t.tagName = "", void(t.state = E.SCRIPT);
						C(t, "onscript", t.script), t.script = ""
					}
					var e = t.tags.length,
						n = t.tagName;
					t.strict || (n = n[t.looseCase]());
					for (var r = n; e-- && t.tags[e].name !== r;) A(t, "Unexpected close tag");
					if (e < 0) return A(t, "Unmatched closing tag: " + t.tagName), t.textNode += "</" + t.tagName + ">", void(t.state = E.TEXT);
					t.tagName = n;
					for (var a = t.tags.length; a-- > e;) {
						var c = t.tag = t.tags.pop();
						t.tagName = t.tag.name, C(t, "onclosetag", t.tagName);
						var o = {};
						for (var i in c.ns) o[i] = c.ns[i];
						var u = t.tags[t.tags.length - 1] || t;
						t.opt.xmlns && c.ns !== u.ns && Object.keys(c.ns).forEach((function (e) {
							var n = c.ns[e];
							C(t, "onclosenamespace", {
								prefix: e,
								uri: n
							})
						}))
					}
					0 === e && (t.closedRoot = !0), t.tagName = t.attribValue = t.attribName = "", t.attribList.length = 0, t.state = E.TEXT
				}

				function R(t) {
					var e, n = t.entity,
						r = n.toLowerCase(),
						a = "";
					return t.ENTITIES[n] ? t.ENTITIES[n] : t.ENTITIES[r] ? t.ENTITIES[r] : ("#" === (n = r).charAt(0) && (a = "x" === n.charAt(1) ? (n = n.slice(2), (e = parseInt(n, 16)).toString(16)) : (n = n.slice(1), (e = parseInt(n, 10)).toString(10))), n = n.replace(/^0+/, ""), isNaN(e) || a.toLowerCase() !== n ? (A(t, "Invalid character entity"), "&" + t.entity + ";") : String.fromCodePoint(e))
				}

				function L(t, e) {
					"<" === e ? (t.state = E.OPEN_WAKA, t.startTagPosition = t.position) : m(e) || (A(t, "Non-whitespace before first tag."), t.textNode = e, t.state = E.TEXT)
				}

				function q(t, e) {
					var n = "";
					return e < t.length && (n = t.charAt(e)), n
				}

				function F() {
					var t, e, n = [],
						r = -1,
						a = arguments.length;
					if (!a) return "";
					for (var c = ""; ++r < a;) {
						var o = Number(arguments[r]);
						if (!isFinite(o) || o < 0 || 1114111 < o || O(o) !== o) throw RangeError("Invalid code point: " + o);
						o <= 65535 ? n.push(o) : (t = 55296 + ((o -= 65536) >> 10), e = o % 1024 + 56320, n.push(t, e)), (r + 1 === a || 16384 < n.length) && (c += w.apply(null, n), n.length = 0)
					}
					return c
				}
				E = e.STATE, String.fromCodePoint || (w = String.fromCharCode, O = Math.floor, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
					value: F,
					configurable: !0,
					writable: !0
				}) : String.fromCodePoint = F)
			}(e)
		}).call(this, n(13).Buffer)
	}, function (t, e, n) {
		"use strict";
		e.byteLength = function (t) {
			var e = s(t),
				n = e[0],
				r = e[1];
			return 3 * (n + r) / 4 - r
		}, e.toByteArray = function (t) {
			var e, n, r = s(t),
				o = r[0],
				i = r[1],
				u = new c(function (t, e, n) {
					return 3 * (e + n) / 4 - n
				}(0, o, i)),
				l = 0,
				g = 0 < i ? o - 4 : o;
			for (n = 0; n < g; n += 4) e = a[t.charCodeAt(n)] << 18 | a[t.charCodeAt(n + 1)] << 12 | a[t.charCodeAt(n + 2)] << 6 | a[t.charCodeAt(n + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
			return 2 === i && (e = a[t.charCodeAt(n)] << 2 | a[t.charCodeAt(n + 1)] >> 4, u[l++] = 255 & e), 1 === i && (e = a[t.charCodeAt(n)] << 10 | a[t.charCodeAt(n + 1)] << 4 | a[t.charCodeAt(n + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e), u
		}, e.fromByteArray = function (t) {
			for (var e, n = t.length, a = n % 3, c = [], o = 0, i = n - a; o < i; o += 16383) c.push(l(t, o, i < o + 16383 ? i : o + 16383));
			return 1 == a ? (e = t[n - 1], c.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 == a && (e = (t[n - 2] << 8) + t[n - 1], c.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), c.join("")
		};
		for (var r = [], a = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, u = o.length; i < u; ++i) r[i] = o[i], a[o.charCodeAt(i)] = i;

		function s(t) {
			var e = t.length;
			if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
			var n = t.indexOf("=");
			return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
		}

		function l(t, e, n) {
			for (var a, c, o = [], i = e; i < n; i += 3) a = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(r[(c = a) >> 18 & 63] + r[c >> 12 & 63] + r[c >> 6 & 63] + r[63 & c]);
			return o.join("")
		}
		a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63
	}, function (t, e) {
		e.read = function (t, e, n, r, a) {
			var c, o, i = 8 * a - r - 1,
				u = (1 << i) - 1,
				s = u >> 1,
				l = -7,
				g = n ? a - 1 : 0,
				f = n ? -1 : 1,
				p = t[e + g];
			for (g += f, c = p & (1 << -l) - 1, p >>= -l, l += i; 0 < l; c = 256 * c + t[e + g], g += f, l -= 8);
			for (o = c & (1 << -l) - 1, c >>= -l, l += r; 0 < l; o = 256 * o + t[e + g], g += f, l -= 8);
			if (0 === c) c = 1 - s;
			else {
				if (c === u) return o ? NaN : 1 / 0 * (p ? -1 : 1);
				o += Math.pow(2, r), c -= s
			}
			return (p ? -1 : 1) * o * Math.pow(2, c - r)
		}, e.write = function (t, e, n, r, a, c) {
			var o, i, u, s = 8 * c - a - 1,
				l = (1 << s) - 1,
				g = l >> 1,
				f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				p = r ? 0 : c - 1,
				d = r ? 1 : -1,
				h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
			for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (i = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), 2 <= (e += 1 <= o + g ? f / u : f * Math.pow(2, 1 - g)) * u && (o++, u /= 2), l <= o + g ? (i = 0, o = l) : 1 <= o + g ? (i = (e * u - 1) * Math.pow(2, a), o += g) : (i = e * Math.pow(2, g - 1) * Math.pow(2, a), o = 0)); 8 <= a; t[n + p] = 255 & i, p += d, i /= 256, a -= 8);
			for (o = o << a | i, s += a; 0 < s; t[n + p] = 255 & o, p += d, o /= 256, s -= 8);
			t[n + p - d] |= 128 * h
		}
	}, function (t, e, n) {
		t.exports = a;
		var r = n(22).EventEmitter;

		function a() {
			r.call(this)
		}
		n(14)(a, r), a.Readable = n(43), a.Writable = n(127), a.Duplex = n(128), a.Transform = n(129), a.PassThrough = n(130), (a.Stream = a).prototype.pipe = function (t, e) {
			var n = this;

			function a(e) {
				t.writable && !1 === t.write(e) && n.pause && n.pause()
			}

			function c() {
				n.readable && n.resume && n.resume()
			}
			n.on("data", a), t.on("drain", c), t._isStdio || e && !1 === e.end || (n.on("end", i), n.on("close", u));
			var o = !1;

			function i() {
				o || (o = !0, t.end())
			}

			function u() {
				o || (o = !0, "function" == typeof t.destroy && t.destroy())
			}

			function s(t) {
				if (l(), 0 === r.listenerCount(this, "error")) throw t
			}

			function l() {
				n.removeListener("data", a), t.removeListener("drain", c), n.removeListener("end", i), n.removeListener("close", u), n.removeListener("error", s), t.removeListener("error", s), n.removeListener("end", l), n.removeListener("close", l), t.removeListener("close", l)
			}
			return n.on("error", s), t.on("error", s), n.on("end", l), n.on("close", l), t.on("close", l), t.emit("pipe", n), t
		}
	}, function (t, e) {}, function (t, e, n) {
		"use strict";
		var r = n(44).Buffer,
			a = n(122);

		function c() {
			! function (t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), this.head = null, this.tail = null, this.length = 0
		}
		t.exports = (c.prototype.push = function (t) {
			var e = {
				data: t,
				next: null
			};
			0 < this.length ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
		}, c.prototype.unshift = function (t) {
			var e = {
				data: t,
				next: this.head
			};
			0 === this.length && (this.tail = e), this.head = e, ++this.length
		}, c.prototype.shift = function () {
			if (0 !== this.length) {
				var t = this.head.data;
				return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
			}
		}, c.prototype.clear = function () {
			this.head = this.tail = null, this.length = 0
		}, c.prototype.join = function (t) {
			if (0 === this.length) return "";
			for (var e = this.head, n = "" + e.data; e = e.next;) n += t + e.data;
			return n
		}, c.prototype.concat = function (t) {
			if (0 === this.length) return r.alloc(0);
			if (1 === this.length) return this.head.data;
			for (var e, n, a = r.allocUnsafe(t >>> 0), c = this.head, o = 0; c;) e = a, n = o, c.data.copy(e, n), o += c.data.length, c = c.next;
			return a
		}, c), a && a.inspect && a.inspect.custom && (t.exports.prototype[a.inspect.custom] = function () {
			var t = a.inspect({
				length: this.length
			});
			return this.constructor.name + " " + t
		})
	}, function (t, e) {}, function (t, e, n) {
		(function (t, e) {
			! function (t, n) {
				"use strict";
				if (!t.setImmediate) {
					var r, a, c, o, i = 1,
						u = {},
						s = !1,
						l = t.document,
						g = Object.getPrototypeOf && Object.getPrototypeOf(t);
					g = g && g.setTimeout ? g : t, r = "[object process]" === {}.toString.call(t.process) ? function (t) {
						e.nextTick((function () {
							p(t)
						}))
					} : function () {
						if (t.postMessage && !t.importScripts) {
							var e = !0,
								n = t.onmessage;
							return t.onmessage = function () {
								e = !1
							}, t.postMessage("", "*"), t.onmessage = n, e
						}
					}() ? (o = "setImmediate$" + Math.random() + "$", t.addEventListener ? t.addEventListener("message", d, !1) : t.attachEvent("onmessage", d), function (e) {
						t.postMessage(o + e, "*")
					}) : t.MessageChannel ? ((c = new MessageChannel).port1.onmessage = function (t) {
						p(t.data)
					}, function (t) {
						c.port2.postMessage(t)
					}) : l && "onreadystatechange" in l.createElement("script") ? (a = l.documentElement, function (t) {
						var e = l.createElement("script");
						e.onreadystatechange = function () {
							p(t), e.onreadystatechange = null, a.removeChild(e), e = null
						}, a.appendChild(e)
					}) : function (t) {
						setTimeout(p, 0, t)
					}, g.setImmediate = function (t) {
						"function" != typeof t && (t = new Function("" + t));
						for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
						var a = {
							callback: t,
							args: e
						};
						return u[i] = a, r(i), i++
					}, g.clearImmediate = f
				}

				function f(t) {
					delete u[t]
				}

				function p(t) {
					if (s) setTimeout(p, 0, t);
					else {
						var e = u[t];
						if (e) {
							s = !0;
							try {
								! function (t) {
									var e = t.callback,
										r = t.args;
									switch (r.length) {
										case 0:
											e();
											break;
										case 1:
											e(r[0]);
											break;
										case 2:
											e(r[0], r[1]);
											break;
										case 3:
											e(r[0], r[1], r[2]);
											break;
										default:
											e.apply(n, r)
									}
								}(e)
							} finally {
								f(t), s = !1
							}
						}
					}
				}

				function d(e) {
					e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(o) && p(+e.data.slice(o.length))
				}
			}("undefined" == typeof self ? void 0 === t ? this : t : self)
		}).call(this, n(9), n(12))
	}, function (t, e, n) {
		(function (e) {
			function n(t) {
				try {
					if (!e.localStorage) return !1
				} catch (t) {
					return !1
				}
				var n = e.localStorage[t];
				return null != n && "true" === String(n).toLowerCase()
			}
			t.exports = function (t, e) {
				if (n("noDeprecation")) return t;
				var r = !1;
				return function () {
					if (!r) {
						if (n("throwDeprecation")) throw new Error(e);
						n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0
					}
					return t.apply(this, arguments)
				}
			}
		}).call(this, n(9))
	}, function (t, e, n) {
		var r = n(13),
			a = r.Buffer;

		function c(t, e) {
			for (var n in t) e[n] = t[n]
		}

		function o(t, e, n) {
			return a(t, e, n)
		}
		a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? t.exports = r : (c(r, e), e.Buffer = o), o.prototype = Object.create(a.prototype), c(a, o), o.from = function (t, e, n) {
			if ("number" == typeof t) throw new TypeError("Argument must not be a number");
			return a(t, e, n)
		}, o.alloc = function (t, e, n) {
			if ("number" != typeof t) throw new TypeError("Argument must be a number");
			var r = a(t);
			return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
		}, o.allocUnsafe = function (t) {
			if ("number" != typeof t) throw new TypeError("Argument must be a number");
			return a(t)
		}, o.allocUnsafeSlow = function (t) {
			if ("number" != typeof t) throw new TypeError("Argument must be a number");
			return r.SlowBuffer(t)
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = c;
		var r = n(65),
			a = n(19);

		function c(t) {
			if (!(this instanceof c)) return new c(t);
			r.call(this, t)
		}
		a.inherits = n(14), a.inherits(c, r), c.prototype._transform = function (t, e, n) {
			n(null, t)
		}
	}, function (t, e, n) {
		t.exports = n(45)
	}, function (t, e, n) {
		t.exports = n(10)
	}, function (t, e, n) {
		t.exports = n(43).Transform
	}, function (t, e, n) {
		t.exports = n(43).PassThrough
	}, function (t, e) {
		(function () {
			"use strict";
			e.stripBOM = function (t) {
				return "\ufeff" === t[0] ? t.substring(1) : t
			}
		}).call(this)
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return u.apply(c, arguments)
		}
		var a = n(46),
			c = n(47),
			o = n(69),
			i = n(84),
			u = i(),
			s = n(161);
		a(r, {
			custom: u.custom,
			customPromisifyArgs: u.customPromisifyArgs,
			getPolyfill: i,
			implementation: o,
			shim: s
		}), t.exports = r
	}, function (t, e, n) {
		"use strict";
		var r;
		if (!Object.keys) {
			var a = Object.prototype.hasOwnProperty,
				c = Object.prototype.toString,
				o = n(68),
				i = Object.prototype.propertyIsEnumerable,
				u = !i.call({
					toString: null
				}, "toString"),
				s = i.call((function () {}), "prototype"),
				l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
				g = function (t) {
					var e = t.constructor;
					return e && e.prototype === t
				},
				f = {
					$applicationCache: !0,
					$console: !0,
					$external: !0,
					$frame: !0,
					$frameElement: !0,
					$frames: !0,
					$innerHeight: !0,
					$innerWidth: !0,
					$onmozfullscreenchange: !0,
					$onmozfullscreenerror: !0,
					$outerHeight: !0,
					$outerWidth: !0,
					$pageXOffset: !0,
					$pageYOffset: !0,
					$parent: !0,
					$scrollLeft: !0,
					$scrollTop: !0,
					$scrollX: !0,
					$scrollY: !0,
					$self: !0,
					$webkitIndexedDB: !0,
					$webkitStorageInfo: !0,
					$window: !0
				},
				p = function () {
					if ("undefined" == typeof window) return !1;
					for (var t in window) try {
						if (!f["$" + t] && a.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
							g(window[t])
						} catch (t) {
							return !0
						}
					} catch (t) {
						return !0
					}
					return !1
				}();
			r = function (t) {
				var e = null !== t && "object" == typeof t,
					n = "[object Function]" === c.call(t),
					r = o(t),
					i = e && "[object String]" === c.call(t),
					f = [];
				if (!e && !n && !r) throw new TypeError("Object.keys called on a non-object");
				var d = s && n;
				if (i && 0 < t.length && !a.call(t, 0))
					for (var h = 0; h < t.length; ++h) f.push(String(h));
				if (r && 0 < t.length)
					for (var y = 0; y < t.length; ++y) f.push(String(y));
				else
					for (var m in t) d && "prototype" === m || !a.call(t, m) || f.push(String(m));
				if (u)
					for (var b = function (t) {
							if ("undefined" == typeof window || !p) return g(t);
							try {
								return g(t)
							} catch (t) {
								return !1
							}
						}(t), v = 0; v < l.length; ++v) b && "constructor" === l[v] || !a.call(t, l[v]) || f.push(l[v]);
				return f
			}
		}
		t.exports = r
	}, function (t, e) {
		t.exports = function (t) {
			return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
		}
	}, function (t, e) {
		"function" == typeof Object.create ? t.exports = function (t, e) {
			t.super_ = e, t.prototype = Object.create(e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			})
		} : t.exports = function (t, e) {
			function n() {}
			t.super_ = e, n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(46),
			a = n(70);
		r(a, {
			getPolyfill: n(83),
			implementation: a,
			shim: n(160)
		}), t.exports = a
	}, function (t, e, n) {
		"use strict";
		t.exports = n(138)
	}, function (t, e, n) {
		"use strict";
		var r = n(139),
			a = n(3),
			c = n(75),
			o = n(82),
			i = n(16),
			u = n(81),
			s = a("%TypeError%"),
			l = i("Array.prototype.push"),
			g = n(159),
			f = c(c({}, r), {
				SameValueNonNumber: function (t, e) {
					if ("number" == typeof t || typeof t != typeof e) throw new TypeError("SameValueNonNumber requires two non-number values of the same type.");
					return this.SameValue(t, e)
				},
				IterableToArrayLike: function (t) {
					var e = u(this, t);
					if (void 0 === e) return this.ToObject(t);
					for (var n = this.GetIterator(t, e), r = [], a = !0; a;)
						if (a = this.IteratorStep(n)) {
							var c = this.IteratorValue(a);
							l(r, c)
						}
					return r
				},
				OrdinaryGetPrototypeOf: function (t) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: O must be an Object");
					if (!g) throw new s("This environment does not support fetching prototypes.");
					return g(t)
				},
				OrdinarySetPrototypeOf: function (t, e) {
					if ("Object" !== this.Type(e) && "Null" !== this.Type(e)) throw new s("Assertion failed: V must be Object or Null");
					try {
						o(t, e)
					} catch (t) {
						return !1
					}
					return this.OrdinaryGetPrototypeOf(t) === e
				}
			});
		t.exports = f
	}, function (t, e, n) {
		"use strict";

		function r(t, e, n, r) {
			if (pt) return pt(e, n, t.FromPropertyDescriptor(r)), !0;
			if (!t.IsDataDescriptor(r)) return !1;
			if (!r["[[Configurable]]"] || !r["[[Writable]]"]) return !1;
			if (n in e && J(e, n) !== !!r["[[Enumerable]]"]) return !1;
			var a = r["[[Value]]"];
			return e[n] = a, t.SameValue(e[n], a)
		}
		var a = n(15),
			c = n(141),
			o = n(67),
			i = n(146),
			u = n(3),
			s = u("%TypeError%"),
			l = u("%RangeError%"),
			g = u("%SyntaxError%"),
			f = u("%Array%"),
			p = f.prototype,
			d = u("%String%"),
			h = u("%Object%"),
			y = u("%Number%"),
			m = u("%Symbol%", !0),
			b = u("%RegExp%"),
			v = u("%Date%"),
			w = u("%Function%"),
			O = h.preventExtensions,
			E = n(25)(),
			T = n(72),
			S = n(73),
			C = n(74),
			x = Math.pow(2, 32) - 1,
			N = n(148),
			P = n(75),
			_ = n(76),
			A = n(77),
			k = n(149),
			I = n(150),
			j = n(78),
			D = n(151),
			M = n(79),
			R = parseInt,
			L = n(16),
			q = n(152),
			F = n(81),
			G = n(153),
			B = L("Promise.prototype.then", !0),
			z = L("Array.prototype.slice"),
			U = L("String.prototype.slice"),
			W = L("Array.prototype.indexOf"),
			H = L("Array.prototype.push"),
			V = q(/^0b[01]+$/i),
			$ = q(/^0o[0-7]+$/i),
			Y = q(/^[0-9]$/),
			K = L("RegExp.prototype.exec"),
			X = q(new b("[" + ["", "​", "￾"].join("") + "]", "g")),
			Q = q(/^[-+]0x[0-9a-f]+$/i),
			Z = L("String.prototype.charCodeAt"),
			J = L("Object.prototype.propertyIsEnumerable"),
			tt = L("Object.prototype.toString"),
			et = L("Number.prototype.valueOf"),
			nt = L("Boolean.prototype.valueOf"),
			rt = L("String.prototype.valueOf"),
			at = L("Date.prototype.valueOf"),
			ct = L("Symbol.prototype.toString", !0),
			ot = Math.floor,
			it = Math.abs,
			ut = h.create,
			st = h.getOwnPropertyDescriptor,
			lt = h.getOwnPropertyNames,
			gt = h.getOwnPropertySymbols,
			ft = h.isExtensible,
			pt = h.defineProperty,
			dt = n(82),
			ht = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
			yt = new RegExp("(^[" + ht + "]+)|([" + ht + "]+$)", "g"),
			mt = L("String.prototype.replace"),
			bt = n(155),
			vt = n(158),
			wt = P(P({}, bt), {
				Call: function (t, e, n) {
					var r = 2 < arguments.length ? n : [];
					if (!this.IsCallable(t)) throw new s(i(t) + " is not a function");
					return t.apply(e, r)
				},
				ToPrimitive: c,
				ToNumber: function (t) {
					var e = k(t) ? t : c(t, y);
					if ("symbol" == typeof e) throw new s("Cannot convert a Symbol value to a number");
					if ("string" == typeof e) {
						if (V(e)) return this.ToNumber(R(U(e, 2), 2));
						if ($(e)) return this.ToNumber(R(U(e, 2), 8));
						if (X(e) || Q(e)) return NaN;
						var n = function (t) {
							return mt(t, yt, "")
						}(e);
						if (n !== e) return this.ToNumber(n)
					}
					return y(e)
				},
				ToInt16: function (t) {
					var e = this.ToUint16(t);
					return 32768 <= e ? e - 65536 : e
				},
				ToInt8: function (t) {
					var e = this.ToUint8(t);
					return 128 <= e ? e - 256 : e
				},
				ToUint8: function (t) {
					var e = this.ToNumber(t);
					if (S(e) || 0 === e || !C(e)) return 0;
					var n = _(e) * ot(it(e));
					return A(n, 256)
				},
				ToUint8Clamp: function (t) {
					var e = this.ToNumber(t);
					if (S(e) || e <= 0) return 0;
					if (255 <= e) return 255;
					var n = ot(t);
					return n + .5 < e ? n + 1 : e < n + .5 ? n : n % 2 != 0 ? n + 1 : n
				},
				ToString: function (t) {
					if ("symbol" == typeof t) throw new s("Cannot convert a Symbol value to a string");
					return d(t)
				},
				ToObject: function (t) {
					return this.RequireObjectCoercible(t), h(t)
				},
				ToPropertyKey: function (t) {
					var e = this.ToPrimitive(t, d);
					return "symbol" == typeof e ? e : this.ToString(e)
				},
				ToLength: function (t) {
					var e = this.ToInteger(t);
					return e <= 0 ? 0 : N < e ? N : e
				},
				CanonicalNumericIndexString: function (t) {
					if ("[object String]" !== tt(t)) throw new s("must be a string");
					if ("-0" === t) return -0;
					var e = this.ToNumber(t);
					return this.SameValue(this.ToString(e), t) ? e : void 0
				},
				RequireObjectCoercible: bt.CheckObjectCoercible,
				IsArray: f.isArray || function (t) {
					return "[object Array]" === tt(t)
				},
				IsConstructor: function (t) {
					return "function" == typeof t && !!t.prototype
				},
				IsExtensible: O ? function (t) {
					return !k(t) && ft(t)
				} : function () {
					return !0
				},
				IsInteger: function (t) {
					if ("number" != typeof t || S(t) || !C(t)) return !1;
					var e = it(t);
					return ot(e) === e
				},
				IsPropertyKey: function (t) {
					return "string" == typeof t || "symbol" == typeof t
				},
				IsRegExp: function (t) {
					if (!t || "object" != typeof t) return !1;
					if (E) {
						var e = t[m.match];
						if (void 0 !== e) return bt.ToBoolean(e)
					}
					return vt(t)
				},
				SameValueZero: function (t, e) {
					return t === e || S(t) && S(e)
				},
				GetV: function (t, e) {
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					return this.ToObject(t)[e]
				},
				GetMethod: function (t, e) {
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					var n = this.GetV(t, e);
					if (null != n) {
						if (!this.IsCallable(n)) throw new s(e + "is not a function");
						return n
					}
				},
				Get: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true, got " + i(e));
					return t[e]
				},
				Type: function (t) {
					return "symbol" == typeof t ? "Symbol" : bt.Type(t)
				},
				SpeciesConstructor: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					var n = t.constructor;
					if (void 0 === n) return e;
					if ("Object" !== this.Type(n)) throw new s("O.constructor is not an Object");
					var r = E && m.species ? n[m.species] : void 0;
					if (null == r) return e;
					if (this.IsConstructor(r)) return r;
					throw new s("no constructor found")
				},
				FromPropertyDescriptor: function (t) {
					if (void 0 === t) return t;
					T(this, "Property Descriptor", "Desc", t);
					var e = {};
					return "[[Value]]" in t && (e.value = t["[[Value]]"]), "[[Writable]]" in t && (e.writable = t["[[Writable]]"]), "[[Get]]" in t && (e.get = t["[[Get]]"]), "[[Set]]" in t && (e.set = t["[[Set]]"]), "[[Enumerable]]" in t && (e.enumerable = t["[[Enumerable]]"]), "[[Configurable]]" in t && (e.configurable = t["[[Configurable]]"]), e
				},
				CompletePropertyDescriptor: function (t) {
					return T(this, "Property Descriptor", "Desc", t), this.IsGenericDescriptor(t) || this.IsDataDescriptor(t) ? (a(t, "[[Value]]") || (t["[[Value]]"] = void 0), a(t, "[[Writable]]") || (t["[[Writable]]"] = !1)) : (a(t, "[[Get]]") || (t["[[Get]]"] = void 0), a(t, "[[Set]]") || (t["[[Set]]"] = void 0)), a(t, "[[Enumerable]]") || (t["[[Enumerable]]"] = !1), a(t, "[[Configurable]]") || (t["[[Configurable]]"] = !1), t
				},
				Set: function (t, e, n, r) {
					if ("Object" !== this.Type(t)) throw new s("O must be an Object");
					if (!this.IsPropertyKey(e)) throw new s("P must be a Property Key");
					if ("Boolean" !== this.Type(r)) throw new s("Throw must be a Boolean");
					if (r) return t[e] = n, !0;
					try {
						t[e] = n
					} catch (t) {
						return !1
					}
				},
				HasOwnProperty: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("O must be an Object");
					if (!this.IsPropertyKey(e)) throw new s("P must be a Property Key");
					return a(t, e)
				},
				HasProperty: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("O must be an Object");
					if (!this.IsPropertyKey(e)) throw new s("P must be a Property Key");
					return e in t
				},
				IsConcatSpreadable: function (t) {
					if ("Object" !== this.Type(t)) return !1;
					if (E && "symbol" == typeof m.isConcatSpreadable) {
						var e = this.Get(t, Symbol.isConcatSpreadable);
						if (void 0 !== e) return this.ToBoolean(e)
					}
					return this.IsArray(t)
				},
				Invoke: function (t, e) {
					if (!this.IsPropertyKey(e)) throw new s("P must be a Property Key");
					var n = z(arguments, 2),
						r = this.GetV(t, e);
					return this.Call(r, t, n)
				},
				GetIterator: function (t, e) {
					var n = e;
					arguments.length < 2 && (n = F(this, t));
					var r = this.Call(n, t);
					if ("Object" !== this.Type(r)) throw new s("iterator must return an object");
					return r
				},
				IteratorNext: function (t, e) {
					var n = this.Invoke(t, "next", arguments.length < 2 ? [] : [e]);
					if ("Object" !== this.Type(n)) throw new s("iterator next must return an object");
					return n
				},
				IteratorComplete: function (t) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(iterResult) is not Object");
					return this.ToBoolean(this.Get(t, "done"))
				},
				IteratorValue: function (t) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(iterResult) is not Object");
					return this.Get(t, "value")
				},
				IteratorStep: function (t) {
					var e = this.IteratorNext(t);
					return !0 !== this.IteratorComplete(e) && e
				},
				IteratorClose: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(iterator) is not Object");
					if (!this.IsCallable(e)) throw new s("Assertion failed: completion is not a thunk for a Completion Record");
					var n, r = e,
						a = this.GetMethod(t, "return");
					if (void 0 === a) return r();
					try {
						var c = this.Call(a, t, [])
					} catch (t) {
						throw n = r(), r = null, t
					}
					if (n = r(), r = null, "Object" !== this.Type(c)) throw new s("iterator .return must return an object");
					return n
				},
				CreateIterResultObject: function (t, e) {
					if ("Boolean" !== this.Type(e)) throw new s("Assertion failed: Type(done) is not Boolean");
					return {
						value: t,
						done: e
					}
				},
				RegExpExec: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("R must be an Object");
					if ("String" !== this.Type(e)) throw new s("S must be a String");
					var n = this.Get(t, "exec");
					if (this.IsCallable(n)) {
						var r = this.Call(n, t, [e]);
						if (null === r || "Object" === this.Type(r)) return r;
						throw new s('"exec" method must return `null` or an Object')
					}
					return K(t, e)
				},
				ArraySpeciesCreate: function (t, e) {
					if (!this.IsInteger(e) || e < 0) throw new s("Assertion failed: length must be an integer >= 0");
					var n, r = 0 === e ? 0 : e;
					if (this.IsArray(t) && (n = this.Get(t, "constructor"), "Object" === this.Type(n) && E && m.species && null === (n = this.Get(n, m.species)) && (n = void 0)), void 0 === n) return f(r);
					if (!this.IsConstructor(n)) throw new s("C must be a constructor");
					return new n(r)
				},
				CreateDataProperty: function (t, e, n) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					var a = st(t, e),
						c = a || this.IsExtensible(t);
					return !(a && (!a.writable || !a.configurable) || !c) && r(this, t, e, {
						"[[Configurable]]": !0,
						"[[Enumerable]]": !0,
						"[[Value]]": n,
						"[[Writable]]": !0
					})
				},
				CreateDataPropertyOrThrow: function (t, e, n) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					var r = this.CreateDataProperty(t, e, n);
					if (!r) throw new s("unable to create data property");
					return r
				},
				ObjectCreate: function (t, e) {
					if (null !== t && "Object" !== this.Type(t)) throw new s("Assertion failed: proto must be null or an object");
					if (0 < (arguments.length < 2 ? [] : e).length) throw new g("es-abstract does not yet support internal slots");
					if (null === t && !ut) throw new g("native Object.create support is required to create null objects");
					return ut(t)
				},
				AdvanceStringIndex: function (t, e, n) {
					if ("String" !== this.Type(t)) throw new s("S must be a String");
					if (!this.IsInteger(e) || e < 0 || N < e) throw new s("Assertion failed: length must be an integer >= 0 and <= 2**53");
					if ("Boolean" !== this.Type(n)) throw new s("Assertion failed: unicode must be a Boolean");
					if (!n) return e + 1;
					if (t.length <= e + 1) return e + 1;
					var r = Z(t, e);
					if (r < 55296 || 56319 < r) return e + 1;
					var a = Z(t, e + 1);
					return a < 56320 || 57343 < a ? e + 1 : e + 2
				},
				CreateMethodProperty: function (t, e, n) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					return r(this, t, e, {
						"[[Configurable]]": !0,
						"[[Enumerable]]": !1,
						"[[Value]]": n,
						"[[Writable]]": !0
					})
				},
				DefinePropertyOrThrow: function (t, e, n) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					var a = M(this, n) ? n : this.ToPropertyDescriptor(n);
					if (!M(this, a)) throw new s("Assertion failed: Desc is not a valid Property Descriptor");
					return r(this, t, e, a)
				},
				DeletePropertyOrThrow: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: IsPropertyKey(P) is not true");
					var n = delete t[e];
					if (!n) throw new TypeError("Attempt to delete property failed.");
					return n
				},
				EnumerableOwnNames: function (t) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					return o(t)
				},
				thisNumberValue: function (t) {
					return "Number" === this.Type(t) ? t : et(t)
				},
				thisBooleanValue: function (t) {
					return "Boolean" === this.Type(t) ? t : nt(t)
				},
				thisStringValue: function (t) {
					return "String" === this.Type(t) ? t : rt(t)
				},
				thisTimeValue: function (t) {
					return at(t)
				},
				SetIntegrityLevel: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if ("sealed" !== e && "frozen" !== e) throw new s('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
					if (!O) throw new g("SetIntegrityLevel requires native `Object.preventExtensions` support");
					if (!O(t)) return !1;
					if (!lt) throw new g("SetIntegrityLevel requires native `Object.getOwnPropertyNames` support");
					var n = lt(t),
						r = this;
					return "sealed" === e ? I(n, (function (e) {
						r.DefinePropertyOrThrow(t, e, {
							configurable: !1
						})
					})) : "frozen" === e && I(n, (function (e) {
						var n, a = st(t, e);
						void 0 !== a && (n = r.IsAccessorDescriptor(r.ToPropertyDescriptor(a)) ? {
							configurable: !1
						} : {
							configurable: !1,
							writable: !1
						}, r.DefinePropertyOrThrow(t, e, n))
					})), !0
				},
				TestIntegrityLevel: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if ("sealed" !== e && "frozen" !== e) throw new s('Assertion failed: `level` must be `"sealed"` or `"frozen"`');
					if (this.IsExtensible(t)) return !1;
					var n = lt(t),
						r = this;
					return 0 === n.length || j(n, (function (n) {
						var a = st(t, n);
						if (void 0 !== a) {
							if (a.configurable) return !1;
							if ("frozen" === e && r.IsDataDescriptor(r.ToPropertyDescriptor(a)) && a.writable) return !1
						}
						return !0
					}))
				},
				OrdinaryHasInstance: function (t, e) {
					if (!1 === this.IsCallable(t)) return !1;
					if ("Object" !== this.Type(e)) return !1;
					var n = this.Get(t, "prototype");
					if ("Object" !== this.Type(n)) throw new s("OrdinaryHasInstance called on an object with an invalid prototype property.");
					return e instanceof t
				},
				OrdinaryHasProperty: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: P must be a Property Key");
					return e in t
				},
				InstanceofOperator: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					var n = E && m.hasInstance ? this.GetMethod(e, m.hasInstance) : void 0;
					if (void 0 !== n) return this.ToBoolean(this.Call(n, e, [t]));
					if (!this.IsCallable(e)) throw new s("`C` is not Callable");
					return this.OrdinaryHasInstance(e, t)
				},
				IsPromise: function (t) {
					if ("Object" !== this.Type(t)) return !1;
					if (!B) return !1;
					try {
						B(t)
					} catch (t) {
						return !1
					}
					return !0
				},
				"Abstract Equality Comparison": function (t, e) {
					var n = this.Type(t),
						r = this.Type(e);
					return n === r ? t === e : null == t && null == e || ("Number" === n && "String" === r ? this["Abstract Equality Comparison"](t, this.ToNumber(e)) : "String" === n && "Number" === r ? this["Abstract Equality Comparison"](this.ToNumber(t), e) : "Boolean" === n ? this["Abstract Equality Comparison"](this.ToNumber(t), e) : "Boolean" === r ? this["Abstract Equality Comparison"](t, this.ToNumber(e)) : "String" !== n && "Number" !== n && "Symbol" !== n || "Object" !== r ? "Object" === n && ("String" === r || "Number" === r || "Symbol" === r) && this["Abstract Equality Comparison"](this.ToPrimitive(t), e) : this["Abstract Equality Comparison"](t, this.ToPrimitive(e)))
				},
				ValidateAndApplyPropertyDescriptor: function (t, e, n, a, c) {
					var o = this.Type(t);
					if ("Undefined" !== o && "Object" !== o) throw new s("Assertion failed: O must be undefined or an Object");
					if ("Boolean" !== this.Type(n)) throw new s("Assertion failed: extensible must be a Boolean");
					if (!M(this, a)) throw new s("Assertion failed: Desc must be a Property Descriptor");
					if ("Undefined" !== this.Type(c) && !M(this, c)) throw new s("Assertion failed: current must be a Property Descriptor, or undefined");
					if ("Undefined" !== o && !this.IsPropertyKey(e)) throw new s("Assertion failed: if O is not undefined, P must be a Property Key");
					if ("Undefined" === this.Type(c)) {
						if (!n) return !1;
						if (this.IsGenericDescriptor(a) || this.IsDataDescriptor(a)) "Undefined" !== o && r(this, t, e, {
							"[[Configurable]]": a["[[Configurable]]"],
							"[[Enumerable]]": a["[[Enumerable]]"],
							"[[Value]]": a["[[Value]]"],
							"[[Writable]]": a["[[Writable]]"]
						});
						else {
							if (!this.IsAccessorDescriptor(a)) throw new s("Assertion failed: Desc is not an accessor descriptor");
							if ("Undefined" !== o) return r(this, t, e, a)
						}
						return !0
					}
					if (this.IsGenericDescriptor(a) && !("[[Configurable]]" in a) && !("[[Enumerable]]" in a)) return !0;
					if (D(this, a, c)) return !0;
					if (!c["[[Configurable]]"]) {
						if (a["[[Configurable]]"]) return !1;
						if ("[[Enumerable]]" in a && !a["[[Enumerable]]"] == !!c["[[Enumerable]]"]) return !1
					}
					if (!this.IsGenericDescriptor(a))
						if (this.IsDataDescriptor(c) !== this.IsDataDescriptor(a)) {
							if (!c["[[Configurable]]"]) return !1;
							this.IsDataDescriptor(c) ? "Undefined" !== o && r(this, t, e, {
								"[[Configurable]]": c["[[Configurable]]"],
								"[[Enumerable]]": c["[[Enumerable]]"],
								"[[Get]]": void 0
							}) : "Undefined" !== o && r(this, t, e, {
								"[[Configurable]]": c["[[Configurable]]"],
								"[[Enumerable]]": c["[[Enumerable]]"],
								"[[Value]]": void 0
							})
						} else if (this.IsDataDescriptor(c) && this.IsDataDescriptor(a)) {
						if (!c["[[Configurable]]"] && !c["[[Writable]]"]) return !("[[Writable]]" in a && a["[[Writable]]"] || "[[Value]]" in a && !this.SameValue(a["[[Value]]"], c["[[Value]]"]))
					} else {
						if (!this.IsAccessorDescriptor(c) || !this.IsAccessorDescriptor(a)) throw new s("Assertion failed: current and Desc are not both data, both accessors, or one accessor and one data.");
						if (!c["[[Configurable]]"]) return !("[[Set]]" in a && !this.SameValue(a["[[Set]]"], c["[[Set]]"]) || "[[Get]]" in a && !this.SameValue(a["[[Get]]"], c["[[Get]]"]))
					}
					return "Undefined" === o || r(this, t, e, a)
				},
				OrdinaryDefineOwnProperty: function (t, e, n) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: O must be an Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: P must be a Property Key");
					if (!M(this, n)) throw new s("Assertion failed: Desc must be a Property Descriptor");
					var r = st(t, e),
						a = r && this.ToPropertyDescriptor(r),
						c = this.IsExtensible(t);
					return this.ValidateAndApplyPropertyDescriptor(t, e, c, n, a)
				},
				OrdinaryGetOwnProperty: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: O must be an Object");
					if (!this.IsPropertyKey(e)) throw new s("Assertion failed: P must be a Property Key");
					if (a(t, e)) {
						if (st) return this.ToPropertyDescriptor(st(t, e));
						var n = this.IsArray(t) && "length" === e,
							r = this.IsRegExp(t) && "lastIndex" === e;
						return {
							"[[Configurable]]": !(n || r),
							"[[Enumerable]]": J(t, e),
							"[[Value]]": t[e],
							"[[Writable]]": !0
						}
					}
				},
				ArrayCreate: function (t, e) {
					if (!this.IsInteger(t) || t < 0) throw new s("Assertion failed: `length` must be an integer Number >= 0");
					if (x < t) throw new l("length is greater than (2**32 - 1)");
					var n = 1 < arguments.length ? e : p,
						r = [];
					if (n !== p) {
						if (!dt) throw new g("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
						dt(r, n)
					}
					return 0 !== t && (r.length = t), r
				},
				ArraySetLength: function (t, e) {
					if (!this.IsArray(t)) throw new s("Assertion failed: A must be an Array");
					if (!M(this, e)) throw new s("Assertion failed: Desc must be a Property Descriptor");
					if (!("[[Value]]" in e)) return this.OrdinaryDefineOwnProperty(t, "length", e);
					var n = P({}, e),
						r = this.ToUint32(e["[[Value]]"]);
					if (r !== this.ToNumber(e["[[Value]]"])) throw new l("Invalid array length");
					n["[[Value]]"] = r;
					var a = this.OrdinaryGetOwnProperty(t, "length");
					if (!this.IsDataDescriptor(a)) throw new s("Assertion failed: an array had a non-data descriptor on `length`");
					var c, o = a["[[Value]]"];
					if (o <= r) return this.OrdinaryDefineOwnProperty(t, "length", n);
					if (!a["[[Writable]]"]) return !1;
					if ("[[Writable]]" in n && !n["[[Writable]]"] ? (c = !1, n["[[Writable]]"] = !0) : c = !0, !this.OrdinaryDefineOwnProperty(t, "length", n)) return !1;
					for (; r < o;)
						if (o -= 1, !delete t[this.ToString(o)] && (n["[[Value]]"] = o + 1, !c)) return n["[[Writable]]"] = !1, this.OrdinaryDefineOwnProperty(t, "length", n), !1;
					return !!c || this.OrdinaryDefineOwnProperty(t, "length", {
						"[[Writable]]": !1
					})
				},
				CreateHTML: function (t, e, n, r) {
					if ("String" !== this.Type(e) || "String" !== this.Type(n)) throw new s("Assertion failed: `tag` and `attribute` must be strings");
					var a = this.RequireObjectCoercible(t),
						c = this.ToString(a),
						o = "<" + e;
					if ("" !== n) {
						var i = this.ToString(r);
						o += " " + n + '="' + mt(i, /\x22/g, "&quot;") + '"'
					}
					return o + ">" + c + "</" + e + ">"
				},
				GetOwnPropertyKeys: function (t, e) {
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: Type(O) is not Object");
					if ("Symbol" === e) return E && gt ? gt(t) : [];
					if ("String" === e) return lt ? lt(t) : o(t);
					throw new s('Assertion failed: `Type` must be `"String"` or `"Symbol"`')
				},
				SymbolDescriptiveString: function (t) {
					if ("Symbol" !== this.Type(t)) throw new s("Assertion failed: `sym` must be a Symbol");
					return ct(t)
				},
				GetSubstitution: function (t, e, n, r, a) {
					if ("String" !== this.Type(t)) throw new s("Assertion failed: `matched` must be a String");
					var c = t.length;
					if ("String" !== this.Type(e)) throw new s("Assertion failed: `str` must be a String");
					var o = e.length;
					if (!this.IsInteger(n) || n < 0 || o < n) throw new s("Assertion failed: `position` must be a nonnegative integer, and less than or equal to the length of `string`, got " + i(n));
					var u = this;
					if (!this.IsArray(r) || !j(r, (function (t, e, n) {
							return "String" === u.Type(t) || !(e in n)
						}))) throw new s("Assertion failed: `captures` must be a List of Strings, got " + i(r));
					if ("String" !== this.Type(a)) throw new s("Assertion failed: `replacement` must be a String");
					for (var l = n + c, g = r.length, f = "", p = 0; p < a.length; p += 1) {
						var d = a[p],
							h = p + 1 >= a.length,
							y = p + 2 >= a.length;
						if ("$" !== d || h) f += a[p];
						else {
							var m = a[p + 1];
							if ("$" === m) f += "$", p += 1;
							else if ("&" === m) f += t, p += 1;
							else if ("`" === m) f += 0 === n ? "" : U(e, 0, n - 1), p += 1;
							else if ("'" === m) f += o <= l ? "" : U(e, l), p += 1;
							else {
								var b = y ? null : a[p + 2];
								if (!Y(m) || "0" === m || !y && Y(b))
									if (Y(m) && (y || Y(b))) {
										var v = m + b,
											w = R(v, 10) - 1;
										f += v <= g && "Undefined" === this.Type(r[w]) ? "" : r[w], p += 2
									} else f += "$";
								else {
									var O = R(m, 10);
									f += O <= g && "Undefined" === this.Type(r[O - 1]) ? "" : r[O - 1], p += 1
								}
							}
						}
					}
					return f
				},
				ToDateString: function (t) {
					if ("Number" !== this.Type(t)) throw new s("Assertion failed: `tv` must be a Number");
					return S(t) ? "Invalid Date" : v(t)
				},
				CreateListFromArrayLike: function (t, e) {
					var n = 1 < arguments.length ? e : ["Undefined", "Null", "Boolean", "String", "Symbol", "Number", "Object"];
					if ("Object" !== this.Type(t)) throw new s("Assertion failed: `obj` must be an Object");
					if (!this.IsArray(n)) throw new s("Assertion failed: `elementTypes`, if provided, must be an array");
					for (var r = this.ToLength(this.Get(t, "length")), a = [], c = 0; c < r;) {
						var o = this.ToString(c),
							i = this.Get(t, o),
							u = this.Type(i);
						if (W(n, u) < 0) throw new s("item type " + u + " is not a valid elementType");
						H(a, i), c += 1
					}
					return a
				},
				GetPrototypeFromConstructor: function (t, e) {
					var n = u(e);
					if (!this.IsConstructor(t)) throw new s("Assertion failed: `constructor` must be a constructor");
					var r = this.Get(t, "prototype");
					if ("Object" !== this.Type(r)) {
						if (!(t instanceof w)) throw new s("cross-realm constructors not currently supported");
						r = n
					}
					return r
				},
				SetFunctionName: function (t, e, n) {
					if ("function" != typeof t) throw new s("Assertion failed: `F` must be a function");
					if (!this.IsExtensible(t) || a(t, "name")) throw new s("Assertion failed: `F` must be extensible, and must not have a `name` own property");
					var r = this.Type(e);
					if ("Symbol" !== r && "String" !== r) throw new s("Assertion failed: `name` must be a Symbol or a String");
					if ("Symbol" === r) {
						var c = G(e);
						e = void 0 === c ? "" : "[" + c + "]"
					}
					return 2 < arguments.length && (e = n + " " + e), this.DefinePropertyOrThrow(t, "name", {
						"[[Value]]": e,
						"[[Writable]]": !1,
						"[[Enumerable]]": !1,
						"[[Configurable]]": !0
					})
				}
			});
		delete wt.CheckObjectCoercible, t.exports = wt
	}, function (t, e, n) {
		"use strict";
		var r = Array.prototype.slice,
			a = Object.prototype.toString;
		t.exports = function (t) {
			var e = this;
			if ("function" != typeof e || "[object Function]" !== a.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
			for (var n, c = r.call(arguments, 1), o = Math.max(0, e.length - c.length), i = [], u = 0; u < o; u++) i.push("$" + u);
			if (n = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")((function () {
					if (this instanceof n) {
						var a = e.apply(this, c.concat(r.call(arguments)));
						return Object(a) === a ? a : this
					}
					return e.apply(t, c.concat(r.call(arguments)))
				})), e.prototype) {
				var s = function () {};
				s.prototype = e.prototype, n.prototype = new s, s.prototype = null
			}
			return n
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = n(142)
	}, function (t, e, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
			a = n(71),
			c = n(49),
			o = n(143),
			i = n(144);
		t.exports = function (t, e) {
			if (a(t)) return t;
			var n, u = "default";
			if (1 < arguments.length && (e === String ? u = "string" : e === Number && (u = "number")), r && (Symbol.toPrimitive ? n = function (t, e) {
					var n = t[e];
					if (null != n) {
						if (!c(n)) throw new TypeError(n + " returned for property " + e + " of object " + t + " is not a function");
						return n
					}
				}(t, Symbol.toPrimitive) : i(t) && (n = Symbol.prototype.valueOf)), void 0 === n) return "default" === u && (o(t) || i(t)) && (u = "string"),
				function (t, e) {
					if (null == t) throw new TypeError("Cannot call method on " + t);
					if ("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
					var n, r, o, i = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
					for (o = 0; o < i.length; ++o)
						if (n = t[i[o]], c(n) && (r = n.call(t), a(r))) return r;
					throw new TypeError("No default value")
				}(t, "default" === u ? "number" : u);
			var s = n.call(t, u);
			if (a(s)) return s;
			throw new TypeError("unable to convert exotic object to primitive")
		}
	}, function (t, e, n) {
		"use strict";
		var r = Date.prototype.getDay,
			a = Object.prototype.toString,
			c = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
		t.exports = function (t) {
			return "object" == typeof t && null !== t && (c ? function (t) {
				try {
					return r.call(t), !0
				} catch (t) {
					return !1
				}
			}(t) : "[object Date]" === a.call(t))
		}
	}, function (t, e, n) {
		"use strict";
		var r = Object.prototype.toString;
		if (n(25)()) {
			var a = Symbol.prototype.toString,
				c = /^Symbol\(.*\)$/;
			t.exports = function (t) {
				if ("symbol" == typeof t) return !0;
				if ("[object Symbol]" !== r.call(t)) return !1;
				try {
					return function (t) {
						return "symbol" == typeof t.valueOf() && c.test(a.call(t))
					}(t)
				} catch (t) {
					return !1
				}
			}
		} else t.exports = function () {
			return !1
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function () {
			if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
			if ("symbol" == typeof Symbol.iterator) return !0;
			var t = {},
				e = Symbol("test"),
				n = Object(e);
			if ("string" == typeof e) return !1;
			if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
			if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
			for (e in t[e] = 42, t) return !1;
			if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
			if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
			var r = Object.getOwnPropertySymbols(t);
			if (1 !== r.length || r[0] !== e) return !1;
			if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
			if ("function" == typeof Object.getOwnPropertyDescriptor) {
				var a = Object.getOwnPropertyDescriptor(t, e);
				if (42 !== a.value || !0 !== a.enumerable) return !1
			}
			return !0
		}
	}, function (t, e, n) {
		var r = "function" == typeof Map && Map.prototype,
			a = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
			c = r && a && "function" == typeof a.get ? a.get : null,
			o = r && Map.prototype.forEach,
			i = "function" == typeof Set && Set.prototype,
			u = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
			s = i && u && "function" == typeof u.get ? u.get : null,
			l = i && Set.prototype.forEach,
			g = Boolean.prototype.valueOf,
			f = Object.prototype.toString,
			p = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
			d = n(147).custom,
			h = d && b(d) ? d : null;

		function y(t, e, n) {
			var r = "double" === (n.quoteStyle || e) ? '"' : "'";
			return r + t + r
		}

		function m(t) {
			return "[object Array]" === O(t)
		}

		function b(t) {
			return "[object Symbol]" === O(t)
		}
		t.exports = function t(e, n, r, a) {
			if (w(n = n || {}, "quoteStyle") && "single" !== n.quoteStyle && "double" !== n.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
			if (void 0 === e) return "undefined";
			if (null === e) return "null";
			if ("boolean" == typeof e) return e ? "true" : "false";
			if ("string" == typeof e) return function (t, e) {
				return y(t.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, E), "single", e)
			}(e, n);
			if ("number" == typeof e) return 0 === e ? 0 < 1 / 0 / e ? "0" : "-0" : String(e);
			if ("bigint" == typeof e) return String(e) + "n";
			var i, u = void 0 === n.depth ? 5 : n.depth;
			if (void 0 === r && (r = 0), u <= r && 0 < u && "object" == typeof e) return "[Object]";
			if (void 0 === a) a = [];
			else if (0 <= function (t, e) {
					if (t.indexOf) return t.indexOf(e);
					for (var n = 0, r = t.length; n < r; n++)
						if (t[n] === e) return n;
					return -1
				}(a, e)) return "[Circular]";

			function f(e, c) {
				return c && (a = a.slice()).push(c), t(e, n, r + 1, a)
			}
			if ("function" == typeof e) {
				var d = function (t) {
					if (t.name) return t.name;
					var e = String(t).match(/^function\s*([\w$]+)/);
					return e ? e[1] : void 0
				}(e);
				return "[Function" + (d ? ": " + d : "") + "]"
			}
			if (b(e)) {
				var v = Symbol.prototype.toString.call(e);
				return "object" == typeof e ? T(v) : v
			}
			if (function (t) {
					return !(!t || "object" != typeof t) && ("undefined" != typeof HTMLElement && t instanceof HTMLElement || "string" == typeof t.nodeName && "function" == typeof t.getAttribute)
				}(e)) {
				for (var x = "<" + String(e.nodeName).toLowerCase(), N = e.attributes || [], P = 0; P < N.length; P++) x += " " + N[P].name + "=" + y((i = N[P].value, String(i).replace(/"/g, "&quot;")), "double", n);
				return x += ">", e.childNodes && e.childNodes.length && (x += "..."), x + "</" + String(e.nodeName).toLowerCase() + ">"
			}
			if (m(e)) return 0 === e.length ? "[]" : "[ " + C(e, f).join(", ") + " ]";
			if (function (t) {
					return "[object Error]" === O(t)
				}(e)) return 0 === (_ = C(e, f)).length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + _.join(", ") + " }";
			if ("object" == typeof e) {
				if (h && "function" == typeof e[h]) return e[h]();
				if ("function" == typeof e.inspect) return e.inspect()
			}
			if (function (t) {
					if (!c) return !1;
					try {
						c.call(t);
						try {
							s.call(t)
						} catch (t) {
							return !0
						}
						return t instanceof Map
					} catch (t) {}
					return !1
				}(e)) {
				var _ = [];
				return o.call(e, (function (t, n) {
					_.push(f(n, e) + " => " + f(t, e))
				})), S("Map", c.call(e), _)
			}
			if (function (t) {
					if (!s) return !1;
					try {
						s.call(t);
						try {
							c.call(t)
						} catch (t) {
							return !0
						}
						return t instanceof Set
					} catch (t) {}
					return !1
				}(e)) return _ = [], l.call(e, (function (t) {
				_.push(f(t, e))
			})), S("Set", s.call(e), _);
			if (function (t) {
					return "[object Number]" === O(t)
				}(e)) return T(f(Number(e)));
			if (function (t) {
					return "[object BigInt]" === O(t)
				}(e)) return T(f(p.call(e)));
			if (function (t) {
					return "[object Boolean]" === O(t)
				}(e)) return T(g.call(e));
			if (function (t) {
					return "[object String]" === O(t)
				}(e)) return T(f(String(e)));
			if (function (t) {
					return "[object Date]" === O(t)
				}(e) || function (t) {
					return "[object RegExp]" === O(t)
				}(e)) return String(e);
			var A = C(e, f);
			return 0 === A.length ? "{}" : "{ " + A.join(", ") + " }"
		};
		var v = Object.prototype.hasOwnProperty || function (t) {
			return t in this
		};

		function w(t, e) {
			return v.call(t, e)
		}

		function O(t) {
			return f.call(t)
		}

		function E(t) {
			var e = t.charCodeAt(0),
				n = {
					8: "b",
					9: "t",
					10: "n",
					12: "f",
					13: "r"
				}[e];
			return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + e.toString(16)
		}

		function T(t) {
			return "Object(" + t + ")"
		}

		function S(t, e, n) {
			return t + " (" + e + ") {" + n.join(", ") + "}"
		}

		function C(t, e) {
			var n = m(t),
				r = [];
			if (n) {
				r.length = t.length;
				for (var a = 0; a < t.length; a++) r[a] = w(t, a) ? e(t[a], t) : ""
			}
			for (var c in t) w(t, c) && (n && String(Number(c)) === c && c < t.length || (/[^\w$]/.test(c) ? r.push(e(c, t) + ": " + e(t[c], t)) : r.push(c + ": " + e(t[c], t))));
			return r
		}
	}, function (t, e) {}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = r("%Math%"),
			c = r("%Number%");
		t.exports = c.MAX_SAFE_INTEGER || a.pow(2, 53) - 1
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			return null === t || "function" != typeof t && "object" != typeof t
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t, e) {
			for (var n = 0; n < t.length; n += 1) e(t[n], n, t)
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(78);
		t.exports = function (t, e, n) {
			return r(["[[Configurable]]", "[[Enumerable]]", "[[Get]]", "[[Set]]", "[[Value]]", "[[Writable]]"], (function (r) {
				return r in e == r in n && t.SameValue(e[r], n[r])
			}))
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3)("RegExp.prototype.test"),
			a = n(80);
		t.exports = function (t) {
			return a(r, t)
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = n(16),
			c = r("%SyntaxError%"),
			o = a("Symbol.prototype.toString", !0),
			i = n(154);
		t.exports = function (t) {
			if (!o) throw new c("Symbols are not supported in this environment");
			var e = o(t);
			if (i) {
				var n = i(t);
				if ("" === n) return;
				return n.slice(1, -1)
			}
			var r = e.slice(7, -1);
			if (r) return r
		}
	}, function (t, e, n) {
		"use strict";
		var r;
		try {
			r = Function("s", "return { [s]() {} }[s].name;")
		} catch (t) {}
		t.exports = r && "inferred" === function () {}.name ? r : null
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = r("%Object%"),
			c = r("%EvalError%"),
			o = r("%TypeError%"),
			i = r("%String%"),
			u = r("%Date%"),
			s = r("%Number%"),
			l = r("%Math.floor%"),
			g = r("%Date.UTC%"),
			f = r("%Math.abs%"),
			p = n(72),
			d = n(79),
			h = n(73),
			y = n(74),
			m = n(76),
			b = n(77),
			v = n(156),
			w = n(16),
			O = n(49),
			E = n(157),
			T = n(15),
			S = w("Date.prototype.getUTCFullYear"),
			C = {
				ToPrimitive: E,
				ToBoolean: function (t) {
					return !!t
				},
				ToNumber: function (t) {
					return +t
				},
				ToInteger: function (t) {
					var e = this.ToNumber(t);
					return h(e) ? 0 : 0 !== e && y(e) ? m(e) * Math.floor(Math.abs(e)) : e
				},
				ToInt32: function (t) {
					return this.ToNumber(t) >> 0
				},
				ToUint32: function (t) {
					return this.ToNumber(t) >>> 0
				},
				ToUint16: function (t) {
					var e = this.ToNumber(t);
					if (h(e) || 0 === e || !y(e)) return 0;
					var n = m(e) * Math.floor(Math.abs(e));
					return b(n, 65536)
				},
				ToString: function (t) {
					return i(t)
				},
				ToObject: function (t) {
					return this.CheckObjectCoercible(t), a(t)
				},
				CheckObjectCoercible: function (t, e) {
					if (null == t) throw new o(e || "Cannot call method on " + t);
					return t
				},
				IsCallable: O,
				SameValue: function (t, e) {
					return t === e ? 0 !== t || 1 / t == 1 / e : h(t) && h(e)
				},
				Type: function (t) {
					return null === t ? "Null" : void 0 === t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
				},
				IsPropertyDescriptor: function (t) {
					return d(this, t)
				},
				IsAccessorDescriptor: function (t) {
					return void 0 !== t && (p(this, "Property Descriptor", "Desc", t), !(!T(t, "[[Get]]") && !T(t, "[[Set]]")))
				},
				IsDataDescriptor: function (t) {
					return void 0 !== t && (p(this, "Property Descriptor", "Desc", t), !(!T(t, "[[Value]]") && !T(t, "[[Writable]]")))
				},
				IsGenericDescriptor: function (t) {
					return void 0 !== t && (p(this, "Property Descriptor", "Desc", t), !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t))
				},
				FromPropertyDescriptor: function (t) {
					if (void 0 === t) return t;
					if (p(this, "Property Descriptor", "Desc", t), this.IsDataDescriptor(t)) return {
						value: t["[[Value]]"],
						writable: !!t["[[Writable]]"],
						enumerable: !!t["[[Enumerable]]"],
						configurable: !!t["[[Configurable]]"]
					};
					if (this.IsAccessorDescriptor(t)) return {
						get: t["[[Get]]"],
						set: t["[[Set]]"],
						enumerable: !!t["[[Enumerable]]"],
						configurable: !!t["[[Configurable]]"]
					};
					throw new o("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
				},
				ToPropertyDescriptor: function (t) {
					if ("Object" !== this.Type(t)) throw new o("ToPropertyDescriptor requires an object");
					var e = {};
					if (T(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), T(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), T(t, "value") && (e["[[Value]]"] = t.value), T(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), T(t, "get")) {
						var n = t.get;
						if (void 0 !== n && !this.IsCallable(n)) throw new TypeError("getter must be a function");
						e["[[Get]]"] = n
					}
					if (T(t, "set")) {
						var r = t.set;
						if (void 0 !== r && !this.IsCallable(r)) throw new o("setter must be a function");
						e["[[Set]]"] = r
					}
					if ((T(e, "[[Get]]") || T(e, "[[Set]]")) && (T(e, "[[Value]]") || T(e, "[[Writable]]"))) throw new o("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
					return e
				},
				"Abstract Equality Comparison": function (t, e) {
					var n = this.Type(t),
						r = this.Type(e);
					return n === r ? t === e : null == t && null == e || ("Number" === n && "String" === r ? this["Abstract Equality Comparison"](t, this.ToNumber(e)) : "String" === n && "Number" === r ? this["Abstract Equality Comparison"](this.ToNumber(t), e) : "Boolean" === n ? this["Abstract Equality Comparison"](this.ToNumber(t), e) : "Boolean" === r ? this["Abstract Equality Comparison"](t, this.ToNumber(e)) : "String" !== n && "Number" !== n || "Object" !== r ? "Object" === n && ("String" === r || "Number" === r) && this["Abstract Equality Comparison"](this.ToPrimitive(t), e) : this["Abstract Equality Comparison"](t, this.ToPrimitive(e)))
				},
				"Strict Equality Comparison": function (t, e) {
					var n = this.Type(t);
					return n === this.Type(e) && ("Undefined" === n || "Null" === n || t === e)
				},
				"Abstract Relational Comparison": function (t, e, n) {
					if ("Boolean" !== this.Type(n)) throw new o("Assertion failed: LeftFirst argument must be a Boolean");
					var r, a;
					if (n ? (r = this.ToPrimitive(t, s), a = this.ToPrimitive(e, s)) : (a = this.ToPrimitive(e, s), r = this.ToPrimitive(t, s)), "String" === this.Type(r) && "String" === this.Type(a)) return !v(a, r) && (!!v(r, a) || r < a);
					var c = this.ToNumber(r),
						i = this.ToNumber(a);
					return h(c) || h(i) ? void 0 : !(y(c) && y(i) && c === i || 0 === c && 0 === i || c === 1 / 0 || !(i === 1 / 0 || i !== -1 / 0 && (c === -1 / 0 || c < i)))
				},
				msFromTime: function (t) {
					return b(t, 1e3)
				},
				SecFromTime: function (t) {
					return b(l(t / 1e3), 60)
				},
				MinFromTime: function (t) {
					return b(l(t / 6e4), 60)
				},
				HourFromTime: function (t) {
					return b(l(t / 36e5), 24)
				},
				Day: function (t) {
					return l(t / 864e5)
				},
				TimeWithinDay: function (t) {
					return b(t, 864e5)
				},
				DayFromYear: function (t) {
					return 365 * (t - 1970) + l((t - 1969) / 4) - l((t - 1901) / 100) + l((t - 1601) / 400)
				},
				TimeFromYear: function (t) {
					return 864e5 * this.DayFromYear(t)
				},
				YearFromTime: function (t) {
					return S(new u(t))
				},
				WeekDay: function (t) {
					return b(this.Day(t) + 4, 7)
				},
				DaysInYear: function (t) {
					return 0 !== b(t, 4) ? 365 : 0 !== b(t, 100) ? 366 : 0 !== b(t, 400) ? 365 : 366
				},
				InLeapYear: function (t) {
					var e = this.DaysInYear(this.YearFromTime(t));
					if (365 === e) return 0;
					if (366 === e) return 1;
					throw new c("Assertion failed: there are not 365 or 366 days in a year, got: " + e)
				},
				DayWithinYear: function (t) {
					return this.Day(t) - this.DayFromYear(this.YearFromTime(t))
				},
				MonthFromTime: function (t) {
					var e = this.DayWithinYear(t);
					if (0 <= e && e < 31) return 0;
					var n = this.InLeapYear(t);
					return 31 <= e && e < 59 + n ? 1 : 59 + n <= e && e < 90 + n ? 2 : 90 + n <= e && e < 120 + n ? 3 : 120 + n <= e && e < 151 + n ? 4 : 151 + n <= e && e < 181 + n ? 5 : 181 + n <= e && e < 212 + n ? 6 : 212 + n <= e && e < 243 + n ? 7 : 243 + n <= e && e < 273 + n ? 8 : 273 + n <= e && e < 304 + n ? 9 : 304 + n <= e && e < 334 + n ? 10 : 334 + n <= e && e < 365 + n ? 11 : void 0
				},
				DateFromTime: function (t) {
					var e = this.MonthFromTime(t),
						n = this.DayWithinYear(t);
					if (0 === e) return n + 1;
					if (1 === e) return n - 30;
					var r = this.InLeapYear(t);
					if (2 === e) return n - 58 - r;
					if (3 === e) return n - 89 - r;
					if (4 === e) return n - 119 - r;
					if (5 === e) return n - 150 - r;
					if (6 === e) return n - 180 - r;
					if (7 === e) return n - 211 - r;
					if (8 === e) return n - 242 - r;
					if (9 === e) return n - 272 - r;
					if (10 === e) return n - 303 - r;
					if (11 === e) return n - 333 - r;
					throw new c("Assertion failed: MonthFromTime returned an impossible value: " + e)
				},
				MakeDay: function (t, e, n) {
					if (!y(t) || !y(e) || !y(n)) return NaN;
					var r = this.ToInteger(t),
						a = this.ToInteger(e),
						c = this.ToInteger(n),
						o = r + l(a / 12),
						i = b(a, 12),
						u = g(o, i, 1);
					return this.YearFromTime(u) !== o || this.MonthFromTime(u) !== i || 1 !== this.DateFromTime(u) ? NaN : this.Day(u) + c - 1
				},
				MakeDate: function (t, e) {
					return y(t) && y(e) ? 864e5 * t + e : NaN
				},
				MakeTime: function (t, e, n, r) {
					return y(t) && y(e) && y(n) && y(r) ? 36e5 * this.ToInteger(t) + 6e4 * this.ToInteger(e) + 1e3 * this.ToInteger(n) + this.ToInteger(r) : NaN
				},
				TimeClip: function (t) {
					return !y(t) || 864e13 < f(t) ? NaN : s(new u(this.ToNumber(t)))
				},
				modulo: function (t, e) {
					return b(t, e)
				}
			};
		t.exports = C
	}, function (t, e, n) {
		"use strict";
		var r = n(16)("String.prototype.slice");
		t.exports = function (t, e) {
			return t === e || !(t.length > e.length) && r(e, 0, t.length) === t
		}
	}, function (t, e, n) {
		"use strict";
		var r = Object.prototype.toString,
			a = n(71),
			c = n(49),
			o = function (t) {
				var e;
				if ((e = 1 < arguments.length ? arguments[1] : "[object Date]" === r.call(t) ? String : Number) !== String && e !== Number) throw new TypeError("invalid [[DefaultValue]] hint supplied");
				var n, o, i = e === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
				for (o = 0; o < i.length; ++o)
					if (c(t[i[o]]) && (n = t[i[o]](), a(n))) return n;
				throw new TypeError("No default value")
			};
		t.exports = function (t, e) {
			return a(t) ? t : 1 < arguments.length ? o(t, e) : o(t)
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(15),
			a = RegExp.prototype.exec,
			c = Object.getOwnPropertyDescriptor,
			o = Object.prototype.toString,
			i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
		t.exports = function (t) {
			if (!t || "object" != typeof t) return !1;
			if (!i) return "[object RegExp]" === o.call(t);
			var e = c(t, "lastIndex");
			return !(!e || !r(e, "value")) && function (t) {
				try {
					var e = t.lastIndex;
					return t.lastIndex = 0, a.call(t), !0
				} catch (t) {
					return !1
				} finally {
					t.lastIndex = e
				}
			}(t)
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(3),
			a = r("%Object.getPrototypeOf%", !0),
			c = r("%Array.prototype%");
		t.exports = a || ([].__proto__ === c ? function (t) {
			return t.__proto__
		} : null)
	}, function (t, e, n) {
		"use strict";
		var r = n(83),
			a = n(46);
		t.exports = function () {
			var t = r();
			return a(Object, {
				getOwnPropertyDescriptors: t
			}, {
				getOwnPropertyDescriptors: function () {
					return Object.getOwnPropertyDescriptors !== t
				}
			}), t
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(47),
			a = n(84);
		t.exports = function () {
			var t = a();
			return t !== r.promisify && (r.promisify = t, Object.defineProperty(r, "promisify", {
				value: t
			})), t
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = function (t, e) {
			var n, r, a, c, o, i;
			return regeneratorRuntime.async((function (u) {
				for (;;) switch (u.prev = u.next) {
					case 0:
						if (t.trim().startsWith(">")) return u.abrupt("return", t.split(">").map((function (t) {
							var e = t.substr(t.indexOf("\n"), t.length).replace(/\s/g, "");
							return {
								name: t.substring(0, t.search(/\n|\|/)).replace(/\//g, ""),
								seq: e
							}
						})).filter((function (t) {
							return t.name && t.seq
						})));
						u.next = 2;
						break;
					case 2:
						if (t.trim().startsWith(";")) return n = t.substring(0, t.search(/\n|\|/)).replace(/\//g, ""), r = t.indexOf("\n", t.lastIndexOf(";")), a = t.substring(r, t.length), u.abrupt("return", [{
							name: n,
							seq: a
						}]);
						u.next = 7;
						break;
					case 7:
						return c = e.lastIndexOf(".") || e.length, o = e.substring(0, c) || "Untitled", i = t, u.abrupt("return", [{
							name: o,
							seq: i
						}]);
					case 11:
					case "end":
						return u.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(2),
			a = n(5);

		function c(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function o(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? c(Object(n), !0).forEach((function (e) {
					i(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function i(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function u(t, e) {
			return g(t) || function (t, e) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
					var n = [],
						r = !0,
						a = !1,
						c = void 0;
					try {
						for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (t) {
						a = !0, c = t
					} finally {
						try {
							r || null == i.return || i.return()
						} finally {
							if (a) throw c
						}
					}
					return n
				}
			}(t, e) || l()
		}

		function s(t) {
			return g(t) || function (t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
			}(t) || l()
		}

		function l() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}

		function g(t) {
			if (Array.isArray(t)) return t
		}
		var f = ["gene", "product", "note", "db_xref", "protein_id", "label", "lab_host"],
			p = ["ApEinfo_fwdcolor", "ApEinfo_revcolor", "loom_color"];
		e.default = function (t, e) {
			var n = arguments;
			return regeneratorRuntime.async((function (c) {
				for (;;) switch (c.prev = c.next) {
					case 0:
						return 2 < n.length && void 0 !== n[2] && n[2], c.abrupt("return", t.split(/\/\/\s/g).filter((function (t) {
							return 5 < t.length
						})).map((function (t) {
							var n = t.substring(t.indexOf("LOCUS"), t.search(/\\n|\n/)),
								c = s(n.split(/\s{2,}/g).filter((function (t) {
									return t
								}))),
								i = c[1],
								l = c.slice(2),
								g = i;
							if ("Exported" === g && t.includes("SnapGene") || Number.parseInt(g, 10)) {
								var d = !1;
								if (t.includes("ACCESSION")) {
									var h = t.substring(t.indexOf("ACCESSION"), t.indexOf("\n", t.indexOf("ACCESSION"))).replace(".", "").split(/\s{2,}/).filter((function (t) {
										return "ACCESSION" !== t
									})).pop();
									h && (g = h, d = !0)
								}!d && e ? g = e.substring(0, Math.max(e.search(/\n|\||\./), e.lastIndexOf("."))).replace(/\/\s/g, "") : d || (g = "Unnamed")
							}
							var y = (0, r.extractDate)(l),
								m = t.substring(t.lastIndexOf("ORIGIN") + "ORIGIN".length, t.length).replace(/[^gatc]/gi, ""),
								b = "",
								v = (0, r.dnaComplement)(m);
							m = v.seq, b = v.compSeq;
							var w = [],
								O = [];
							if (t.indexOf("FEATURES")) {
								var E = t.indexOf("FEATURES"),
									T = t.indexOf("\n", E),
									S = t.lastIndexOf("ORIGIN");
								t.includes("CONTIG") && (S = Math.min(S, t.indexOf("CONTIG")));
								var C = t.substring(T, S).split(/\n/).filter((function (t) {
										return t
									})),
									x = !1;
								C.forEach((function (t, e) {
									var n = t.split(/\s{2,}/g).filter((function (t) {
										return t
									}));
									if (1 < n.length) {
										var c = u(n, 2),
											i = c[0],
											s = c[1],
											l = /\d+/g,
											g = t.includes("complement") ? -1 : 1,
											d = 0,
											h = 0,
											y = l.exec(s);
										if (y) {
											d = y[0] - 1 % m.length;
											var v = l.exec(s);
											v && (h = +v[0] % m.length)
										}
										if ("primer_bind" === i) {
											x = !0;
											var E = 1 == g;
											O.push(o({}, (0, a.primerFactory)(), {
												gc: E ? (0, a.calcGC)(m.slice(d, h)) : (0, a.calcGC)(b.slice(d, h)),
												tm: E ? (0, a.calcTm)(m.slice(d, h)) : (0, a.calcTm)(b.slice(d, h)),
												vector: m,
												seq: E ? m.slice(d, h).trim() : (0, a.reverse)(b.slice(d, h)).trim()
											}))
										} else "source" !== i && (x = !1, w.push(o({}, (0, a.annotationFactory)("".concat(i, "-").concat(d), e), {
											type: i,
											start: d,
											end: h,
											direction: g
										})))
									} else if (1 === n.length) {
										var T = u(n, 1)[0],
											S = u((T = T.replace(/[/"]/g, "")).split(/=/), 2),
											C = S[0],
											N = S[1],
											P = w.length - 1;
										f.includes(C) ? -1 < P && "Untitled" === w[w.length - 1].name && !x ? w[w.length - 1].name = (0, r.trimCarriageReturn)(N) : x && "" === O[O.length - 1].name && (O[O.length - 1].name = (0, r.trimCarriageReturn)(N)) : p.includes(C) ? -1 < P && (w[w.length - 1].color = N) : "loom_primer_sequence" === C && x && (O[O.length - 1].sequence = N)
									}
								}))
							}
							var N = !1;
							return (w.find((function (t) {
								return !(0 === t.end && t.start) && t.start > t.end
							})) || n.includes("circular")) && (N = !0), g = (0, r.trimCarriageReturn)(g), o({}, (0, r.partFactory)(), {
								name: g || e,
								date: y,
								seq: m,
								compSeq: b,
								annotations: w,
								primers: O,
								circular: N
							})
						})));
					case 2:
					case "end":
						return c.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(18),
			a = u(r),
			c = n(8),
			o = n(2),
			i = u(n(6));

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function s(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function l(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? s(Object(n), !0).forEach((function (e) {
					g(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function g(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.default = function (t) {
			var e = arguments;
			return regeneratorRuntime.async((function (n) {
				for (;;) switch (n.prev = n.next) {
					case 0:
						return 1 < e.length && void 0 !== e[1] && e[1], n.abrupt("return", new Promise((function (e, n) {
							var u = t.replace(/“|”/g, '"');
							a.default.parseString(u, {
								xmlns: !0,
								attrkey: "xml_tag",
								tagNameProcessors: [r.processors.stripPrefix]
							}, (function (t, r) {
								t && function (t) {
									n(new Error("Failed on JBEI file; ".concat(t)))
								}(t);
								var a = r.seq,
									s = a.name,
									g = a.sequence,
									f = a.features,
									p = a.circular,
									d = "Unnamed";
								s && s[0] && s[0]._ && (d = s[0]._);
								var h = "";
								g && g[0] && g[0]._ && (h = g[0]._);
								var y = (0, o.dnaComplement)(h),
									m = y.seq,
									b = y.compSeq;
								if (!m) return null;
								var v = 2e3 < m.length;
								p && p[0] && p[0]._ && (v = "true" === p[0]._);
								var w = [];
								f && f[0] && f[0].feature && f[0].feature.forEach((function (t, e) {
									if (t) {
										var n = t.label,
											r = void 0 === n ? [{}] : n,
											a = t.type,
											o = void 0 === a ? [{}] : a,
											u = t.complement,
											s = void 0 === u ? [{}] : u,
											l = t.location,
											g = void 0 === l ? [] : l;
										g && g[0] && g[0].genbankStart && g[0].end && w.push({
											id: (0, i.default)(),
											color: (0, c.colorByIndex)(e),
											start: g[0].genbankStart[0]._ - 1 || 0,
											end: +g[0].end[0]._ || 0,
											direction: "true" === s[0]._ ? -1 : 1,
											type: o[0]._ || "N/A",
											name: r[0]._ || "Untitled"
										})
									}
								})), e([l({}, (0, o.partFactory)(), {
									seq: m,
									compSeq: b,
									name: d,
									annotations: w,
									circular: v,
									source: u
								})])
							}))
						})));
					case 2:
					case "end":
						return n.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = c(n(166)),
			a = c(n(167));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = function (t, e) {
			var n, c = arguments;
			return regeneratorRuntime.async((function (o) {
				for (;;) switch (o.prev = o.next) {
					case 0:
						return n = 2 < c.length && void 0 !== c[2] ? c[2] : [], o.abrupt("return", t.includes("sbols.org/v1#") ? (0, r.default)(t, n) : (0, a.default)(t, e, n));
					case 2:
					case "end":
						return o.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(18),
			a = u(r),
			c = n(8),
			o = n(2),
			i = u(n(6));

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function s(t) {
			return function (t) {
				if (Array.isArray(t)) {
					for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
					return n
				}
			}(t) || function (t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
			}(t) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance")
			}()
		}

		function l(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function g(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? l(Object(n), !0).forEach((function (e) {
					f(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function f(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function p(t, e) {
			var n = e.strict,
				r = void 0 !== n && n,
				a = e.file,
				u = t.name,
				s = t.displayId,
				l = t.dnaSequence,
				f = t.annotation,
				p = "Unnamed";
			if (u && u[0] && u[0]._) p = u[0]._;
			else if (s && s[0] && s[0]._) p = s[0]._;
			else if (r) return null;
			var d = "";
			if (l && l[0] && l[0].DnaSequence) {
				var h = l[0].DnaSequence;
				h[0] && h[0].nucleotides && h[0].nucleotides[0] && h[0].nucleotides[0]._ && (d = h[0].nucleotides[0]._)
			}
			var y = (0, o.dnaComplement)(d),
				m = y.seq,
				b = y.compSeq;
			if (!m) return null;
			var v = [];
			f && f.forEach((function (t, e) {
				var n = t.SequenceAnnotation;
				if (n && n[0]) {
					var r = n[0],
						a = r.bioStart,
						o = void 0 === a ? [{}] : a,
						u = r.bioEnd,
						s = void 0 === u ? [{}] : u,
						l = r.strand,
						g = r.subComponent;
					if (g && g[0] && g[0].DnaComponent && g[0].DnaComponent[0]) {
						var f = g[0].DnaComponent[0],
							p = f.type,
							d = void 0 === p ? [{}] : p,
							h = f.displayId,
							y = void 0 === h ? [{}] : h,
							m = f.name,
							b = void 0 === m ? [{}] : m;
						v.push({
							id: (0, i.default)(),
							color: (0, c.colorByIndex)(e),
							start: o[0]._ - 1 || 0,
							end: s[0]._ || 0,
							direction: "+" === l[0]._ ? 1 : -1,
							type: d[0]._ || "N/A",
							name: b[0]._ || y[0]._ || "Untitled"
						})
					}
				}
			}));
			var w = 0 < a.search(/plasmid/i);
			return g({}, (0, o.partFactory)(), {
				seq: m,
				compSeq: b,
				name: p,
				annotations: v,
				circular: w
			})
		}

		function d(t, e) {
			Object.keys(e).forEach((function (n) {
				"DnaComponent" === n && e[n].length && t.push.apply(t, s(e[n])), Array.isArray(e[n]) && e[n].forEach((function (e) {
					d(t, e)
				}))
			}))
		}

		function h(t, e) {
			Object.keys(e).forEach((function (n) {
				"Sequence" === n && e[n].length && t.push.apply(t, s(e[n])), Array.isArray(e[n]) && e[n].forEach((function (e) {
					h(t, e)
				}))
			}))
		}
		e.default = function (t) {
			var e, n = arguments;
			return regeneratorRuntime.async((function (c) {
				for (;;) switch (c.prev = c.next) {
					case 0:
						return e = 1 < n.length && void 0 !== n[1] ? n[1] : [], c.abrupt("return", new Promise((function (n, c) {
							setTimeout((function () {
								c(new Error("Took to long to parse SBOL"))
							}), 2e3);
							var i = t.replace(/“|”/g, '"');
							a.default.parseString(i, {
								xmlns: !0,
								attrkey: "xml_tag",
								tagNameProcessors: [r.processors.stripPrefix]
							}, (function (r, a) {
								r && function (t) {
									c(new Error("Failed on SBOL file; ".concat(t)))
								}(r);
								var i = null;
								a.RDF && (i = a.RDF), i || c(new Error("No root RDF document"));
								var u = i,
									s = u.Collection,
									l = u.DnaComponent;
								if (s && s.length) {
									var f = [];
									s.forEach((function (n) {
										var r = n.component;
										r && r.length && r.forEach((function (n) {
											var r = n.DnaComponent;
											f.push(p(r[0], {
												strict: !1,
												file: t,
												colors: e
											}))
										}))
									})), f.length && n(f)
								} else if (l && l.length) {
									var y = p(l[0], {
										strict: !1,
										file: t,
										colors: e
									});
									y && n([y])
								}
								var m = [];
								d(m, i);
								var b = m.map((function (n) {
									return p(n, {
										strict: !0,
										file: t,
										colors: e
									})
								})).filter((function (t) {
									return t
								}));
								b.length && n(b);
								var v = [];
								h(v, i);
								var w = v.map((function (e) {
									return r = t, a = (n = e).displayId[0] && n.displayId[0]._ || n.title[0] && n.title[0]._ || "Unnamed", c = n.elements[0] && n.elements[0]._ || "", u = (i = (0, o.dnaComplement)(c)).seq, s = i.compSeq, l = 0 < r.search(/plasmid/i), g({}, (0, o.partFactory)(), {
										name: a,
										seq: u,
										compSeq: s,
										circular: l
									});
									var n, r, a, c, i, u, s, l
								})).filter((function (t) {
									return t
								}));
								w.length && n(w), c(new Error("no valid DnaComponent or Collection"))
							}))
						})));
					case 2:
					case "end":
						return c.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r, a = n(2),
			c = n(5),
			o = n(18),
			i = (r = o) && r.__esModule ? r : {
				default: r
			};

		function u(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function s(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? u(Object(n), !0).forEach((function (e) {
					l(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function l(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function g(t) {
			return t && t[0] && t[0]._ ? t[0]._ : null
		}
		e.default = function (t, e) {
			var n = arguments;
			return regeneratorRuntime.async((function (r) {
				for (;;) switch (r.prev = r.next) {
					case 0:
						return 2 < n.length && void 0 !== n[2] && n[2], r.abrupt("return", new Promise((function (n, r) {
							var u = t.replace(/“|”/g, '"');
							i.default.parseString(u, {
								xmlns: !0,
								attrkey: "xml_tag",
								tagNameProcessors: [o.processors.stripPrefix]
							}, (function (t, o) {
								t && function (t) {
									r(new Error("Failed on SBOLv2 file: ".concat(t)))
								}(t);
								var i = null;
								o.RDF && (i = o.RDF), i || r(new Error("No root RDF document"));
								var u = i,
									l = u.ComponentDefinition,
									f = u.Sequence;
								l && l.length && f || n([]);
								var p = [];
								l.forEach((function (t, n) {
									if (t.sequence && t.sequence.length) {
										var r = t.displayId,
											o = t.description,
											i = t.sequence,
											u = t.sequenceAnnotation,
											l = g(r) || "".concat(e, "_").concat(n + 1),
											d = g(o) || "",
											h = [];
										(u || []).forEach((function (t) {
											var e = t.SequenceAnnotation[0],
												n = g(e.displayId),
												r = e.location[0].Range[0];
											h.push(s({}, (0, c.annotationFactory)(n), {
												name: n,
												start: g(r.start) - 1,
												end: g(r.end) - 1
											}))
										}));
										var y = i[0].xml_tag["rdf:resource"].value,
											m = f.find((function (t) {
												return t.persistentIdentity && t.persistentIdentity.length && t.persistentIdentity[0].xml_tag["rdf:resource"].value === y || t.xml_tag["rdf:about"].value === y
											}));
										if (m && m.elements) {
											var b = g(m.elements) || "",
												v = (0, a.dnaComplement)(b),
												w = v.seq,
												O = v.compSeq;
											p.push(s({}, (0, a.partFactory)(), {
												name: l,
												note: d,
												seq: w,
												compSeq: O,
												annotations: h
											}))
										}
									}
								})), p.length && n(p), n([])
							}))
						})));
					case 2:
					case "end":
						return r.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(24),
				a = u(n(169)),
				c = u(n(18)),
				o = n(2),
				i = n(5);

			function u(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}

			function s(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function l(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? s(Object(n), !0).forEach((function (e) {
						g(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function g(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function f(t, e) {
				return function (t) {
					if (Array.isArray(t)) return t
				}(t) || function (t, e) {
					if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
						var n = [],
							r = !0,
							a = !1,
							c = void 0;
						try {
							for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
						} catch (t) {
							a = !0, c = t
						} finally {
							try {
								r || null == i.return || i.return()
							} finally {
								if (a) throw c
							}
						}
						return n
					}
				}(t, e) || function () {
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			e.default = function (e, n) {
				var c, u, s, g, m, b, v, w, O, E, T, S, C, x, N, P;
				return regeneratorRuntime.async((function (_) {
					for (;;) switch (_.prev = _.next) {
						case 0:
							return c = n.fileName, u = void 0 === c ? "" : c, s = 0, m = function (t, e) {
								var n, r;
								return regeneratorRuntime.async((function (c) {
									for (;;) switch (c.prev = c.next) {
										case 0:
											return n = g(t), c.next = 3, regeneratorRuntime.awrap(a.default.unpack(">".concat(e), n));
										case 3:
											if (void 0 === (r = c.sent)) return c.abrupt("return", void 0);
											c.next = 6;
											break;
										case 6:
											return c.abrupt("return", r[0]);
										case 7:
										case "end":
											return c.stop()
									}
								}))
							}, (g = function (n, a) {
								var c = t.from(e.slice(s, n + s));
								return s += n, a ? new r.StringDecoder(a).write(c) : c
							})(1), _.next = 7, regeneratorRuntime.awrap(m(4, "I"));
						case 7:
							if (b = _.sent, v = g(8, "ascii"), 14 !== b || "SnapGene" !== v) throw new Error("wrong format for a SnapGene file");
							_.next = 11;
							break;
						case 11:
							return w = {}, _.next = 14, regeneratorRuntime.awrap(m(2, "H"));
						case 14:
							return w.isDNA = _.sent, _.next = 17, regeneratorRuntime.awrap(m(2, "H"));
						case 17:
							return w.exportVersion = _.sent, _.next = 20, regeneratorRuntime.awrap(m(2, "H"));
						case 20:
							w.importVersion = _.sent;
						case 21:
							if (s <= e.byteLength) return O = g(1), _.next = 25, regeneratorRuntime.awrap(m(4, "I"));
							_.next = 56;
							break;
						case 25:
							if (E = _.sent, 0 === (T = p(O))) return _.next = 30, regeneratorRuntime.awrap(m(1, "b"));
							_.next = 40;
							break;
						case 30:
							if (S = _.sent, C = d(S), w.circular = h(C), (x = E - 1) < 0) throw new Error("error parsing sequence data");
							_.next = 36;
							break;
						case 36:
							w.seq = g(x, "ascii"), w.compSeq = (0, o.dnaComplement)(w.seq).compSeq, _.next = 54;
							break;
						case 40:
							if (6 === T) return N = g(E, "utf8"), _.next = 44, regeneratorRuntime.awrap(y(N));
							_.next = 48;
							break;
						case 44:
							P = _.sent, w.notes = P ? P.description : "", _.next = 54;
							break;
						case 48:
							if (10 === T) return _.next = 51, regeneratorRuntime.awrap(function () {
								var t, e, n, r, a, c;
								return regeneratorRuntime.async((function (o) {
									for (;;) switch (o.prev = o.next) {
										case 0:
											return t = {
												undefined: "NONE",
												0: "NONE",
												1: 1,
												2: -1,
												3: "BIDIRECTIONAL"
											}, e = g(E, "utf8"), o.next = 4, regeneratorRuntime.awrap(y(e));
										case 4:
											n = o.sent, r = n.Features, a = (r = void 0 === r ? {} : r).Feature, c = void 0 === a ? [] : a, w.annotations = [], c.forEach((function (e) {
												var n = e.$,
													r = e.Segment,
													a = void 0 === r ? [] : r,
													c = 0,
													o = 0;
												a && a.forEach((function (t) {
													var e = t.$;
													if (!e) throw new Error("Invalid feature definition");
													var n = f(e.range.split("-"), 2),
														r = n[0],
														a = n[1];
													c = 0 === c ? r : Math.min(c, r), o = Math.max(o, a)
												}));
												var u = n.directionality;
												w.annotations.push(l({}, (0, i.annotationFactory)(n.name), {
													name: n.name,
													type: n.type,
													direction: t[u],
													start: c - 1,
													end: o - 1
												}))
											}));
										case 10:
										case "end":
											return o.stop()
									}
								}))
							}());
							_.next = 53;
							break;
						case 51:
							_.next = 54;
							break;
						case 53:
							g(E);
						case 54:
							_.next = 21;
							break;
						case 56:
							return _.abrupt("return", [l({}, (0, o.partFactory)(), {}, w, {
								name: u.replace(".dna", "")
							})]);
						case 57:
						case "end":
							return _.stop()
					}
				}))
			};
			var p = function (t) {
					return t.toString().charCodeAt(0)
				},
				d = function (t) {
					return (t >>> 0).toString(2)
				},
				h = function (t) {
					return 1 === Number(t.toString().split("").pop())
				},
				y = function (t) {
					return new Promise((function (e, n) {
						c.default.parseString(t, (function (t, r) {
							t && n(t), e(r)
						}))
					}))
				}
		}).call(this, n(13).Buffer)
	}, function (t, e, n) {
		(function (e) {
			t.exports = new
			/*!
			 *  Copyright 2008 Fair Oaks Labs, Inc.
			 *  All rights reserved.
			 */
			function () {
				var t, n = !1,
					r = this;
				r._DeArray = function (t, e, n) {
					return [t.slice(e, e + n)]
				}, r._EnArray = function (t, e, n, r) {
					for (var a = 0; a < n; t[e + a] = r[a] ? r[a] : 0, a++);
				}, r._DeChar = function (t, e) {
					return String.fromCharCode(t[e])
				}, r._EnChar = function (t, e, n) {
					t[e] = n.charCodeAt(0)
				}, r._DeInt = function (e, r) {
					var a, c, o, i = n ? t.len - 1 : 0,
						u = n ? -1 : 1,
						s = i + u * t.len;
					for (a = 0, c = i, o = 1; c != s; a += e[r + c] * o, c += u, o *= 256);
					return t.bSigned && a & Math.pow(2, 8 * t.len - 1) && (a -= Math.pow(2, 8 * t.len)), a
				}, r._EnInt = function (e, r, a) {
					var c, o = n ? t.len - 1 : 0,
						i = n ? -1 : 1,
						u = o + i * t.len;
					for (a = a < t.min ? t.min : a > t.max ? t.max : a, c = o; c != u; e[r + c] = 255 & a, c += i, a >>= 8);
				}, r._DeString = function (t, e, n) {
					for (var r = new Array(n), a = 0; a < n; r[a] = String.fromCharCode(t[e + a]), a++);
					return r.join("")
				}, r._EnString = function (t, e, n, r) {
					for (var a, c = 0; c < n; t[e + c] = (a = r.charCodeAt(c)) ? a : 0, c++);
				}, r._DeNullString = function (t, e, n, a) {
					var c = r._DeString(t, e, n, a);
					return c.substring(0, c.length - 1)
				}, r._De754 = function (e, r) {
					var a, c, o, i, u, s, l, g, f, p;
					for (l = t.mLen, f = (p = (1 << (g = 8 * t.len - t.mLen - 1)) - 1) >> 1, i = n ? 0 : t.len - 1, u = n ? 1 : -1, a = e[r + i], i += u, c = a & (1 << -(s = -7)) - 1, a >>= -s, s += g; 0 < s; c = 256 * c + e[r + i], i += u, s -= 8);
					for (o = c & (1 << -s) - 1, c >>= -s, s += l; 0 < s; o = 256 * o + e[r + i], i += u, s -= 8);
					switch (c) {
						case 0:
							c = 1 - f;
							break;
						case p:
							return o ? NaN : 1 / 0 * (a ? -1 : 1);
						default:
							o += Math.pow(2, l), c -= f
					}
					return (a ? -1 : 1) * o * Math.pow(2, c - l)
				}, r._En754 = function (e, r, a) {
					var c, o, i, u, s, l, g, f, p, d;
					for (g = t.mLen, p = (d = (1 << (f = 8 * t.len - t.mLen - 1)) - 1) >> 1, c = a < 0 ? 1 : 0, a = Math.abs(a), isNaN(a) || a == 1 / 0 ? (i = isNaN(a) ? 1 : 0, o = d) : (o = Math.floor(Math.log(a) / Math.LN2), a * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), 2 <= (a += 1 <= o + p ? t.rt / l : t.rt * Math.pow(2, 1 - p)) * l && (o++, l /= 2), d <= o + p ? (i = 0, o = d) : 1 <= o + p ? (i = (a * l - 1) * Math.pow(2, g), o += p) : (i = a * Math.pow(2, p - 1) * Math.pow(2, g), o = 0)), u = n ? t.len - 1 : 0, s = n ? -1 : 1; 8 <= g; e[r + u] = 255 & i, u += s, i /= 256, g -= 8);
					for (o = o << g | i, f += g; 0 < f; e[r + u] = 255 & o, u += s, o /= 256, f -= 8);
					e[r + u - s] |= 128 * c
				}, r._sPattern = "(\\d+)?([AxcbBhHsSfdiIlL])(\\(([a-zA-Z0-9]+)\\))?", r._lenLut = {
					A: 1,
					x: 1,
					c: 1,
					b: 1,
					B: 1,
					h: 2,
					H: 2,
					s: 1,
					S: 1,
					f: 4,
					d: 8,
					i: 4,
					I: 4,
					l: 4,
					L: 4
				}, r._elLut = {
					A: {
						en: r._EnArray,
						de: r._DeArray
					},
					s: {
						en: r._EnString,
						de: r._DeString
					},
					S: {
						en: r._EnString,
						de: r._DeNullString
					},
					c: {
						en: r._EnChar,
						de: r._DeChar
					},
					b: {
						en: r._EnInt,
						de: r._DeInt,
						len: 1,
						bSigned: !0,
						min: -Math.pow(2, 7),
						max: Math.pow(2, 7) - 1
					},
					B: {
						en: r._EnInt,
						de: r._DeInt,
						len: 1,
						bSigned: !1,
						min: 0,
						max: Math.pow(2, 8) - 1
					},
					h: {
						en: r._EnInt,
						de: r._DeInt,
						len: 2,
						bSigned: !0,
						min: -Math.pow(2, 15),
						max: Math.pow(2, 15) - 1
					},
					H: {
						en: r._EnInt,
						de: r._DeInt,
						len: 2,
						bSigned: !1,
						min: 0,
						max: Math.pow(2, 16) - 1
					},
					i: {
						en: r._EnInt,
						de: r._DeInt,
						len: 4,
						bSigned: !0,
						min: -Math.pow(2, 31),
						max: Math.pow(2, 31) - 1
					},
					I: {
						en: r._EnInt,
						de: r._DeInt,
						len: 4,
						bSigned: !1,
						min: 0,
						max: Math.pow(2, 32) - 1
					},
					l: {
						en: r._EnInt,
						de: r._DeInt,
						len: 4,
						bSigned: !0,
						min: -Math.pow(2, 31),
						max: Math.pow(2, 31) - 1
					},
					L: {
						en: r._EnInt,
						de: r._DeInt,
						len: 4,
						bSigned: !1,
						min: 0,
						max: Math.pow(2, 32) - 1
					},
					f: {
						en: r._En754,
						de: r._De754,
						len: 4,
						mLen: 23,
						rt: Math.pow(2, -24) - Math.pow(2, -77)
					},
					d: {
						en: r._En754,
						de: r._De754,
						len: 8,
						mLen: 52,
						rt: 0
					}
				}, r._UnpackSeries = function (e, n, r, a) {
					for (var c = t.de, o = [], i = 0; i < e; o.push(c(r, a + i * n)), i++);
					return o
				}, r._PackSeries = function (e, n, r, a, c, o) {
					for (var i = t.en, u = 0; u < e; i(r, a + u * n, c[o + u]), u++);
				}, r._zip = function (t, e) {
					for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = e[r];
					return n
				}, r.unpack = function (e, r, a) {
					n = "<" != e.charAt(0), a = a || 0;
					for (var c, o, i, u = new RegExp(this._sPattern, "g"), s = [], l = []; c = u.exec(e);) {
						if (o = null == c[1] || "" == c[1] ? 1 : parseInt(c[1]), "S" === c[2]) {
							for (o = 0; 0 !== r[a + o];) o++;
							o++
						}
						if (a + o * (i = this._lenLut[c[2]]) > r.length) return;
						switch (c[2]) {
							case "A":
							case "s":
							case "S":
								l.push(this._elLut[c[2]].de(r, a, o));
								break;
							case "c":
							case "b":
							case "B":
							case "h":
							case "H":
							case "i":
							case "I":
							case "l":
							case "L":
							case "f":
							case "d":
								t = this._elLut[c[2]], l.push(this._UnpackSeries(o, i, r, a))
						}
						s.push(c[4]), a += o * i
					}
					return l = Array.prototype.concat.apply([], l), -1 !== s.indexOf(void 0) ? l : this._zip(s, l)
				}, r.packTo = function (e, r, a, c) {
					n = "<" != e.charAt(0);
					for (var o, i, u, s, l = new RegExp(this._sPattern, "g"), g = 0; o = l.exec(e);) {
						if (i = null == o[1] || "" == o[1] ? 1 : parseInt(o[1]), "S" === o[2] && (i = c[g].length + 1), a + i * (u = this._lenLut[o[2]]) > r.length) return !1;
						switch (o[2]) {
							case "A":
							case "s":
							case "S":
								if (g + 1 > c.length) return !1;
								this._elLut[o[2]].en(r, a, i, c[g]), g += 1;
								break;
							case "c":
							case "b":
							case "B":
							case "h":
							case "H":
							case "i":
							case "I":
							case "l":
							case "L":
							case "f":
							case "d":
								if (t = this._elLut[o[2]], g + i > c.length) return !1;
								this._PackSeries(i, u, r, a, c, g), g += i;
								break;
							case "x":
								for (s = 0; s < i; s++) r[a + s] = 0
						}
						a += i * u
					}
					return r
				}, r.pack = function (t, n) {
					return this.packTo(t, new e(this.calcLength(t, n)), 0, n)
				}, r.calcLength = function (t, e) {
					for (var n, r = new RegExp(this._sPattern, "g"), a = 0, c = 0; n = r.exec(t);) {
						var o = (null == n[1] || "" == n[1] ? 1 : parseInt(n[1])) * this._lenLut[n[2]];
						"S" === n[2] && (o = e[c].length + 1), a += o, c++
					}
					return a
				}
			}
		}).call(this, n(13).Buffer)
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(2),
			a = n(5);

		function c(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function o(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? c(Object(n), !0).forEach((function (e) {
					i(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function i(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function u(t, e) {
			return g(t) || function (t, e) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
					var n = [],
						r = !0,
						a = !1,
						c = void 0;
					try {
						for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (t) {
						a = !0, c = t
					} finally {
						try {
							r || null == i.return || i.return()
						} finally {
							if (a) throw c
						}
					}
					return n
				}
			}(t, e) || l()
		}

		function s(t) {
			return g(t) || function (t) {
				if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
			}(t) || l()
		}

		function l() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}

		function g(t) {
			if (Array.isArray(t)) return t
		}
		var f = ["gene", "product", "note", "db_xref", "protein_id", "label", "lab_host"],
			p = ["ApEinfo_fwdcolor", "ApEinfo_revcolor", "loom_color"];
		e.default = function (t, e) {
			var n = arguments;
			return regeneratorRuntime.async((function (c) {
				for (;;) switch (c.prev = c.next) {
					case 0:
						return 2 < n.length && void 0 !== n[2] && n[2], c.abrupt("return", t.split(/\/\/\s/g).map((function (t) {
							var n, c = t.substring(t.search(/.*?written by seqbuilder .*?[0-9.]+[^actg]+/i) + t.match(/.*?written by seqbuilder .*?[0-9.]+[^actg]+/i)[0].length, t.length).match(/[actgyrwskmdvhbxn]+/gim)[0],
								i = (0, r.dnaComplement)(c);
							c = i.seq, n = i.compSeq;
							var l = 0 < e.length ? e : "Unnamed",
								g = Date.now(),
								d = !1;
							if (5e5 < c.length) throw new Error("Import of sequence length ".concat(c.length, "bp failed. Please keep sequences under 500000bp."), c.length);
							if (~t.indexOf("LOCUS")) {
								var h = t.substring(t.indexOf("LOCUS"), t.search(/\\n|\n/));
								if (h && h.split(/\s{2,}/g)) {
									var y = s(h.split(/\s{2,}/g).filter((function (t) {
											return t
										}))),
										m = y[1],
										b = y.slice(2);
									l = m, g = (0, r.extractDate)(b), h.includes("circular") && (d = !0)
								}
							}
							if ("Exported" === l && t.includes("SnapGene") || Number.parseInt(l, 10)) {
								var v = !1;
								if (t.includes("ACCESSION")) {
									var w = t.substring(t.indexOf("ACCESSION"), t.indexOf("\n", t.indexOf("ACCESSION"))).replace(".", "").split(/\s{2,}/).filter((function (t) {
										return "ACCESSION" !== t
									})).pop();
									w && (l = w, v = !0)
								}!v && e ? l = e.substring(0, Math.max(e.search(/\n|\||\./), e.lastIndexOf("."))).replace(/\/\s/g, "") : v || (l = "Unnamed")
							}
							var O = [];
							if (t.indexOf("FEATURES")) {
								var E = t.indexOf("FEATURES"),
									T = t.indexOf("\n", E),
									S = t.lastIndexOf("ORIGIN");
								t.includes("CONTIG") && (S = Math.min(S, t.indexOf("CONTIG"))), t.substring(T, S).split(/\n/).filter((function (t) {
									return t
								})).forEach((function (t) {
									var e = t.split(/\s{2,}/g).filter((function (t) {
										return t
									}));
									if (1 < e.length) {
										var n = u(e, 2),
											i = n[0],
											s = n[1],
											l = /\d+/g,
											g = t.includes("complement") ? -1 : 1,
											d = 0,
											h = 0,
											y = l.exec(s);
										if (y) {
											d = y[0] - 1 % c.length;
											var m = l.exec(s);
											m && (h = +m[0] % c.length)
										}
										"source" !== i && O.push(o({}, (0, a.annotationFactory)("".concat(i, "-").concat(d)), {
											type: i,
											start: d,
											end: h,
											direction: g
										}))
									} else if (1 === e.length) {
										var b = u(e, 1)[0],
											v = u((b = b.replace(/[/"]/g, "")).split(/=/), 2),
											w = v[0],
											E = v[1],
											T = O.length - 1;
										f.includes(w) ? -1 < T && "Untitled" === O[O.length - 1].name && (O[O.length - 1].name = (0, r.trimCarriageReturn)(E)) : p.includes(w) && -1 < T && (O[O.length - 1].color = E)
									}
								}))
							}
							return O.find((function (t) {
								return !(0 === t.end && t.start) && t.start > t.end
							})) && (d = !0), l = (0, r.trimCarriageReturn)(l), o({}, (0, r.partFactory)(), {
								name: l || e,
								date: g,
								seq: c,
								compSeq: n,
								annotations: O,
								circular: d
							})
						})));
					case 2:
					case "end":
						return c.stop()
				}
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.fetchBBB = function (t) {
			var e = t.toUpperCase();
			return r[e] || (console.warn("Your backbone input ".concat(t, " did not match the name of any iGEM Backbone packaged with this library.\n      Please check if the backbone you are using is listed at https://parts.igem.org/Plasmid_backbones/Assembly.\n      If you are using a custom backbone please be aware that this library does not check for the validity of your prefix and suffix.\n      You can read more about prefixes and suffixes here: http://parts.igem.org/Help:Prefix-Suffix.")), t)
		};
		var r = e.igemBackbones = {
			PSB1A3: "tactagtagcggccgctgcagtccggcaaaaaagggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcaggct\ntcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcaggggata\nacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccacaggctccgcccccctgacga\ngcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctcct\ngttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggtgt\naggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggtaag\nacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaactac\nggctacactagaagaacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccaccg\nctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgctca\ngtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaatc\ntaaagtatatatgagtaaacttggtctgacagttaccaatgcttaatcagtgaggcacctatctcagcgatctgtctatttcgttcatccatagttgcct\ngactccccgtcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgcaatgataccgcgagacccacgctcaccggctccagattt\natcagcaataaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatccgcctccatccagtctattaattgttgccgggaagctaga\ngtaagtagttcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtggtgtcacgctcgtcgtttggtatggcttcattcagctccg\ngttcccaacgatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctccttcggtcctccgatcgttgtcagaagtaagttggccgc\nagtgttatcactcatggttatggcagcactgcataattctcttactgtcatgccatccgtaagatgcttttctgtgactggtgagtactcaaccaagtca\nttctgagaatagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataataccgcgccacatagcagaactttaaaagtgctcatcattg\ngaaaacgttcttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgatataacccactcgtgcacccaactgatcttcagcatcttt\ntactttcaccagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaagggaataagggcgacacggaaatgttgaatactcatactcttc\nctttttcaatattattgaagcatttatcagggttattgtctcatgagcggatacatatttgaatgtatttagaaaaataaacaaataggggttccgcgca\ncatttccccgaaaagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggcagaatttcagataaaa\naaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttctagag",
			PSB1C3: "tactagtagcggccgctgcagtccggcaaaaaagggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcaggct\ntcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcaggggata\nacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccacaggctccgcccccctgacga\ngcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctcct\ngttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggtgt\naggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggtaag\nacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaactac\nggctacactagaagaacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccaccg\nctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgctca\ngtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaatc\ntaaagtatatatgagtaaacttggtctgacagctcgaggcttggattctcaccaataaaaaacgcccggcggcaaccgagcgttctgaacaaatccagat\nggagttctgaggtcattactggatctatcaacaggagtccaagcgagctcgatatcaaattacgccccgccctgccactcatcgcagtactgttgtaatt\ncattaagcattctgccgacatggaagccatcacaaacggcatgatgaacctgaatcgccagcggcatcagcaccttgtcgccttgcgtataatatttgcc\ncatggtgaaaacgggggcgaagaagttgtccatattggccacgtttaaatcaaaactggtgaaactcacccagggattggctgagacgaaaaacatattc\ntcaataaaccctttagggaaataggccaggttttcaccgtaacacgccacatcttgcgaatatatgtgtagaaactgccggaaatcgtcgtggtattcac\ntccagagcgatgaaaacgtttcagtttgctcatggaaaacggtgtaacaagggtgaacactatcccatatcaccagctcaccgtctttcattgccatacg\naaattccggatgagcattcatcaggcgggcaagaatgtgaataaaggccggataaaacttgtgcttatttttctttacggtctttaaaaaggccgtaata\ntccagctgaacggtctggttataggtacattgagcaactgactgaaatgcctcaaaatgttctttacgatgccattgggatatatcaacggtggtatatc\ncagtgatttttttctccattttagcttccttagctcctgaaaatctcgataactcaaaaaatacgcccggtagtgatcttatttcattatggtgaaagtt\nggaacctcttacgtgcccgatcaactcgagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggca\ngaatttcagataaaaaaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttctagag",
			PSB1K3: "tactagtagcggccgctgcagtccggcaaaaaagggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcaggct\ntcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcaggggata\nacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccacaggctccgcccccctgacga\ngcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctcct\ngttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggtgt\naggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggtaag\nacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaactac\nggctacactagaagaacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccaccg\nctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgctca\ngtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaatc\ntaaagtatatatgagtaaacttggtctgacagctcgagtcccgtcaagtcagcgtaatgctctgccagtgttacaaccaattaaccaattctgattagaa\naaactcatcgagcatcaaatgaaactgcaatttattcatatcaggattatcaataccatatttttgaaaaagccgtttctgtaatgaaggagaaaactca\nccgaggcagttccataggatggcaagatcctggtatcggtctgcgattccgactcgtccaacatcaatacaacctattaatttcccctcgtcaaaaataa\nggttatcaagtgagaaatcaccatgagtgacgactgaatccggtgagaatggcaaaagcttatgcatttctttccagacttgttcaacaggccagccatt\nacgctcgtcatcaaaatcactcgcatcaaccaaaccgttattcattcgtgattgcgcctgagcgagacgaaatacgcgatcgctgttaaaaggacaatta\ncaaacaggaatcgaatgcaaccggcgcaggaacactgccagcgcatcaacaatattttcacctgaatcaggatattcttctaatacctggaatgctgttt\ntcccggggatcgcagtggtgagtaaccatgcatcatcaggagtacggataaaatgcttgatggtcggaagaggcataaattccgtcagccagtttagtct\ngaccatctcatctgtaacatcattggcaacgctacctttgccatgtttcagaaacaactctggcgcatcgggcttcccatacaatcgatagattgtcgca\ncctgattgcccgacattatcgcgagcccatttatacccatataaatcagcatccatgttggaatttaatcgcggcctggagcaagacgtttcccgttgaa\ntatggctcataacaccccttgtattactgtttatgtaagcagacagttttattgttcatgatgatatatttttatcttgtgcaatgtaacatcagagatt\nttgagacacaacgtggctttgttgaataaatcgaacttttgctgagttgaaggatcagctcgagtgccacctgacgtctaagaaaccattattatcatga\ncattaacctataaaaataggcgtatcacgaggcagaatttcagataaaaaaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttct\nagag",
			PSB1T3: "tactagtagcggccgctgcagtccggcaaaaaagggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcaggct\ntcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcaggggata\nacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccacaggctccgcccccctgacga\ngcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctcct\ngttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggtgt\naggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggtaag\nacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaactac\nggctacactagaagaacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccaccg\nctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgctca\ngtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaatc\ntaaagtatatatgagtaaacttggtctgacagctcgagattctcatgtttgacagcttatcatcgataagctttaatgcggtagtttatcacagttaaat\ntgctaacgcagtcaggcaccgtgtatgaaatctaacaatgcgctcatcgtcatcctcggcaccgtcaccctggatgctgtaggcataggcttggttatgc\ncggtactgccgggcctcttgcgggatatcgtccattccgacagcatcgccagtcactatggcgtgctgctagcgctatatgcgttgatgcaatttctatg\ncgcacccgttctcggagcactgtccgaccgctttggccgccgcccagtcctgctcgcttcgctacttggagccactatcgactacgcgatcatggcgacc\nacacccgtcctgtggatcctctacgccggacgcatcgtggccggcatcaccggcgccacaggtgcggttgctggcgcctatatcgccgacatcaccgatg\ngggaagatcgggctcgccacttcgggctcatgagcgcttgtttcggcgtgggtatggtggcaggccccgtggccgggggactgttgggcgccatctcctt\ngcatgcaccattccttgcggcggcggtgctcaacggcctcaacctactactgggctgcttcctaatgcaggagtcgcataagggagagcgtcgaccgatg\ncccttgagagccttcaacccagtcagctccttccggtgggcgcggggcatgactatcgtcgccgcacttatgactgtcttctttatcatgcaactcgtag\ngacaggtgccggcagcgctctgggtcattttcggcgaggaccgctttcgctggagcgcgacgatgatcggcctgtcgcttgcggtattcggaatcttgca\ncgccctcgctcaagccttcgtcactggtcccgccaccaaacgtttcggcgagaagcaggccattatcgccggcatggcggccgacgcgctgggctacgtc\nttgctggcgttcgcgacgcgaggctggatggccttccccattatgattcttctcgcttccggcggcatcgggatgcccgcgttgcaggccatgctgtcca\nggcaggtagatgacgaccatcagggacagcttcaaggatcgctcgcggctcttaccagcctaacttcgatcactggaccgctgatcgtcacggcgattta\ntgccgcctcggcgagcacatggaacgggttggcatggattgtaggcgccgccctataccttgtctgcctccccgcgttgcgtcgcggtgcatggagccgg\ngccacctcgacctaactcgagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggcagaatttcag\nataaaaaaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttctagag",
			PSB1A7: "actagtagcggccgctgcaggcttataaacgcagaaaggcccacccgaaggtgagccagtgtgactctagtagagagcgttcaccgacaaacaacagata\naaacgaaaggcccagtctttcgactgagcctttcgttttatttgatgcctgggtgcagtccggcaaaaaaacgggcaaggtgtcaccaccctgccctttt\ntctttaaaaccgaaaagattacttcgcgttatgcaggcttcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcact\ncaaaggcggtaatacggttatccacagaatcaggggataacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgc\ngttgctggcgtttttccataggctccgcccccctgacgagcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagatac\ncaggcgtttccccctggaagctccctcgtgcgctctcctgttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgc\ntttctcatagctcacgctgtaggtatctcagttcggtgtaggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgc\ncttatccggtaactatcgtcttgagtccaacccggtaagacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgta\nggcggtgctacagagttcttgaagtggtggcctaactacggctacactagaaggacagtatttggtatctgcgctctgctgaagccagttaccttcggaa\naaagagttggtagctcttgatccggcaaacaaaccaccgctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctca\nagaagatcctttgatcttttctacggggtctgacgctcagtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacc\ntagatccttttaaattaaaaatgaagttttaaatcaatctaaagtatatatgagtaaacttggtctgacagttaccaatgcttaatcagtgaggcaccta\ntctcagcgatctgtctatttcgttcatccatagttgcctgactccccgtcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgc\naatgataccgcgagacccacgctcaccggctccagatttatcagcaataaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatcc\ngcctccatccagtctattaattgttgccgggaagctagagtaagtagttcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtgg\ntgtcacgctcgtcgtttggtatggcttcattcagctccggttcccaacgatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctc\ncttcggtcctccgatcgttgtcagaagtaagttggccgcagtgttatcactcatggttatggcagcactgcataattctcttactgtcatgccatccgta\nagatgcttttctgtgactggtgagtactcaaccaagtcattctgagaatagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataata\nccgcgccacatagcagaactttaaaagtgctcatcattggaaaacgttcttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgat\ngtaacccactcgtgcacccaactgatcttcagcatcttttactttcaccagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaaggga\nataagggcgacacggaaatgttgaatactcatactcttcctttttcaatattattgaagcatttatcagggttattgtctcatgagcggatacatatttg\naatgtatttagaaaaataaacaaataggggttccgcgcacatttccccgaaaagtgccacctgacgtctaagaaaccattattatcatgacattaaccta\ntaaaaataggcgtatcacgaggcagaatttcagataaaaaaaatccttagctttcgctaaggatgatttctggaattgccaggcatcaaataaaacgaaa\nggctcagtcgaaagactgggcctttcgttttatctgttgtttgtcggtgaacgctctctactagagtcacactggctcaccttcgggtgggcctttctgc\ngtttatagcagaattcgcggccgcttctaga",
			PSB1AC3: "tactagtagcggccgctgcagtccggcaaaaaaacgggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcagg\ncttcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcagggga\ntaacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccataggctccgcccccctgac\ngagcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctc\nctgttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggt\ngtaggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggta\nagacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaact\nacggctacactagaaggacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccac\ncgctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgct\ncagtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaa\ntctaaagtatatatgagtaaacttggtctgacagctcgaggcttggattctcaccaataaaaaacgcccggcggcaaccgagcgttctgaacaaatccag\natggagttctgaggtcattactggatctatcaacaggagtccaagcgagctcgatatcaaattacgccccgccctgccactcatcgcagtactgttgtaa\nttcattaagcattctgccgacatggaagccatcacaaacggcatgatgaacctgaatcgccagcggcatcagcaccttgtcgccttgcgtataatatttg\ncccatggtgaaaacgggggcgaagaagttgtccatattggccacgtttaaatcaaaactggtgaaactcacccagggattggctgagacgaaaaacatat\ntctcaataaaccctttagggaaataggccaggttttcaccgtaacacgccacatcttgcgaatatatgtgtagaaactgccggaaatcgtcgtggtattc\nactccagagcgatgaaaacgtttcagtttgctcatggaaaacggtgtaacaagggtgaacactatcccatatcaccagctcaccgtctttcattgccata\ncgaaattccggatgagcattcatcaggcgggcaagaatgtgaataaaggccggataaaacttgtgcttatttttctttacggtctttaaaaaggccgtaa\ntatccagctgaacggtctggttataggtacattgagcaactgactgaaatgcctcaaaatgttctttacgatgccattgggatatatcaacggtggtata\ntccagtgatttttttctccattttagcttccttagctcctgaaaatctcgataactcaaaaaatacgcccggtagtgatcttatttcattatggtgaaag\nttggaacctcttacgtgcccgatcaactcgagttaccaatgcttaatcagtgaggcacctatctcagcgatctgtctatttcgttcatccatagttgcct\ngactccccgtcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgcaatgataccgcgagacccacgctcaccggctccagattt\natcagcaataaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatccgcctccatccagtctattaattgttgccgggaagctaga\ngtaagtagttcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtggtgtcacgctcgtcgtttggtatggcttcattcagctccg\ngttcccaacgatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctccttcggtcctccgatcgttgtcagaagtaagttggccgc\nagtgttatcactcatggttatggcagcactgcataattctcttactgtcatgccatccgtaagatgcttttctgtgactggtgagtactcaaccaagtca\nttctgagaatagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataataccgcgccacatagcagaactttaaaagtgctcatcattg\ngaaaacgttcttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgatgtaacccactcgtgcacccaactgatcttcagcatcttt\ntactttcaccagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaagggaataagggcgacacggaaatgttgaatactcatactcttc\nctttttcaatattattgaagcatttatcagggttattgtctcatgagcggatacatatttgaatgtatttagaaaaataaacaaataggggttccgcgca\ncatttccccgaaaagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggcagaatttcagataaaa\naaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttctagag",
			PSB1AK3: "tactagtagcggccgctgcagtccggcaaaaaaacgggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcagg\ncttcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcagggga\ntaacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccataggctccgcccccctgac\ngagcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctc\nctgttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggt\ngtaggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggta\nagacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaact\nacggctacactagaaggacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccac\ncgctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgct\ncagtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaa\ntctaaagtatatatgagtaaacttggtctgacagctcgagtcccgtcaagtcagcgtaatgctctgccagtgttacaaccaattaaccaattctgattag\naaaaactcatcgagcatcaaatgaaactgcaatttattcatatcaggattatcaataccatatttttgaaaaagccgtttctgtaatgaaggagaaaact\ncaccgaggcagttccataggatggcaagatcctggtatcggtctgcgattccgactcgtccaacatcaatacaacctattaatttcccctcgtcaaaaat\naaggttatcaagtgagaaatcaccatgagtgacgactgaatccggtgagaatggcaaaagcttatgcatttctttccagacttgttcaacaggccagcca\nttacgctcgtcatcaaaatcactcgcatcaaccaaaccgttattcattcgtgattgcgcctgagcgagacgaaatacgcgatcgctgttaaaaggacaat\ntacaaacaggaatcgaatgcaaccggcgcaggaacactgccagcgcatcaacaatattttcacctgaatcaggatattcttctaatacctggaatgctgt\ntttcccggggatcgcagtggtgagtaaccatgcatcatcaggagtacggataaaatgcttgatggtcggaagaggcataaattccgtcagccagtttagt\nctgaccatctcatctgtaacatcattggcaacgctacctttgccatgtttcagaaacaactctggcgcatcgggcttcccatacaatcgatagattgtcg\ncacctgattgcccgacattatcgcgagcccatttatacccatataaatcagcatccatgttggaatttaatcgcggcctggagcaagacgtttcccgttg\naatatggctcataacaccccttgtattactgtttatgtaagcagacagttttattgttcatgatgatatatttttatcttgtgcaatgtaacatcagaga\nttttgagacacaacgtggctttgttgaataaatcgaacttttgctgagttgaaggatcagctcgagttaccaatgcttaatcagtgaggcacctatctca\ngcgatctgtctatttcgttcatccatagttgcctgactccccgtcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgcaatga\ntaccgcgagacccacgctcaccggctccagatttatcagcaataaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatccgcctc\ncatccagtctattaattgttgccgggaagctagagtaagtagttcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtggtgtca\ncgctcgtcgtttggtatggcttcattcagctccggttcccaacgatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctccttcg\ngtcctccgatcgttgtcagaagtaagttggccgcagtgttatcactcatggttatggcagcactgcataattctcttactgtcatgccatccgtaagatg\ncttttctgtgactggtgagtactcaaccaagtcattctgagaatagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataataccgcg\nccacatagcagaactttaaaagtgctcatcattggaaaacgttcttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgatgtaac\nccactcgtgcacccaactgatcttcagcatcttttactttcaccagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaagggaataag\nggcgacacggaaatgttgaatactcatactcttcctttttcaatattattgaagcatttatcagggttattgtctcatgagcggatacatatttgaatgt\natttagaaaaataaacaaataggggttccgcgcacatttccccgaaaagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaa\nataggcgtatcacgaggcagaatttcagataaaaaaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttctagag",
			PSB1AT3: "tactagtagcggccgctgcagtccggcaaaaaaacgggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcagg\ncttcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcagggga\ntaacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccataggctccgcccccctgac\ngagcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctc\nctgttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggt\ngtaggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggta\nagacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaact\nacggctacactagaaggacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccac\ncgctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgct\ncagtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaa\ntctaaagtatatatgagtaaacttggtctgacagctcgagattctcatgtttgacagcttatcatcgataagctttaatgcggtagtttatcacagttaa\nattgctaacgcagtcaggcaccgtgtatgaaatctaacaatgcgctcatcgtcatcctcggcaccgtcaccctggatgctgtaggcataggcttggttat\ngccggtactgccgggcctcttgcgggatatcgtccattccgacagcatcgccagtcactatggcgtgctgctagcgctatatgcgttgatgcaatttcta\ntgcgcacccgttctcggagcactgtccgaccgctttggccgccgcccagtcctgctcgcttcgctacttggagccactatcgactacgcgatcatggcga\nccacacccgtcctgtggatcctctacgccggacgcatcgtggccggcatcaccggcgccacaggtgcggttgctggcgcctatatcgccgacatcaccga\ntggggaagatcgggctcgccacttcgggctcatgagcgcttgtttcggcgtgggtatggtggcaggccccgtggccgggggactgttgggcgccatctcc\nttgcatgcaccattccttgcggcggcggtgctcaacggcctcaacctactactgggctgcttcctaatgcaggagtcgcataagggagagcgtcgaccga\ntgcccttgagagccttcaacccagtcagctccttccggtgggcgcggggcatgactatcgtcgccgcacttatgactgtcttctttatcatgcaactcgt\naggacaggtgccggcagcgctctgggtcattttcggcgaggaccgctttcgctggagcgcgacgatgatcggcctgtcgcttgcggtattcggaatcttg\ncacgccctcgctcaagccttcgtcactggtcccgccaccaaacgtttcggcgagaagcaggccattatcgccggcatggcggccgacgcgctgggctacg\ntcttgctggcgttcgcgacgcgaggctggatggccttccccattatgattcttctcgcttccggcggcatcgggatgcccgcgttgcaggccatgctgtc\ncaggcaggtagatgacgaccatcagggacagcttcaaggatcgctcgcggctcttaccagcctaacttcgatcactggaccgctgatcgtcacggcgatt\ntatgccgcctcggcgagcacatggaacgggttggcatggattgtaggcgccgccctataccttgtctgcctccccgcgttgcgtcgcggtgcatggagcc\ngggccacctcgacctaactcgagttaccaatgcttaatcagtgaggcacctatctcagcgatctgtctatttcgttcatccatagttgcctgactccccg\ntcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgcaatgataccgcgagacccacgctcaccggctccagatttatcagcaat\naaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatccgcctccatccagtctattaattgttgccgggaagctagagtaagtagt\ntcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtggtgtcacgctcgtcgtttggtatggcttcattcagctccggttcccaac\ngatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctccttcggtcctccgatcgttgtcagaagtaagttggccgcagtgttatc\nactcatggttatggcagcactgcataattctcttactgtcatgccatccgtaagatgcttttctgtgactggtgagtactcaaccaagtcattctgagaa\ntagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataataccgcgccacatagcagaactttaaaagtgctcatcattggaaaacgtt\ncttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgatgtaacccactcgtgcacccaactgatcttcagcatcttttactttcac\ncagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaagggaataagggcgacacggaaatgttgaatactcatactcttcctttttcaa\ntattattgaagcatttatcagggttattgtctcatgagcggatacatatttgaatgtatttagaaaaataaacaaataggggttccgcgcacatttcccc\ngaaaagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggcagaatttcagataaaaaaaatcctt\nagctttcgctaaggatgatttctggaattcgcggccgcttctagag",
			BBA_K1362091: "tactagtagcggccgctgcagtccggcaaaaaagggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgttatgcaggct\ntcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaatcaggggata\nacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccacaggctccgcccccctgacga\ngcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtgcgctctcct\ngttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctcagttcggtgt\naggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaacccggtaag\nacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtggcctaactac\nggctacactagaagaacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaacaaaccaccg\nctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtctgacgctca\ngtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagttttaaatcaatc\ntaaagtatatatgagtaaacttggtctgacagttaccaatgcttaatcagtgaggcacctatctcagcgatctgtctatttcgttcatccatagttgcct\ngactccccgtcgtgtagataactacgatacgggagggcttaccatctggccccagtgctgcaatgataccgcgagacccacgctcaccggctccagattt\natcagcaataaaccagccagccggaagggccgagcgcagaagtggtcctgcaactttatccgcctccatccagtctattaattgttgccgggaagctaga\ngtaagtagttcgccagttaatagtttgcgcaacgttgttgccattgctacaggcatcgtggtgtcacgctcgtcgtttggtatggcttcattcagctccg\ngttcccaacgatcaaggcgagttacatgatcccccatgttgtgcaaaaaagcggttagctccttcggtcctccgatcgttgtcagaagtaagttggccgc\nagtgttatcactcatggttatggcagcactgcataattctcttactgtcatgccatccgtaagatgcttttctgtgactggtgagtactcaaccaagtca\nttctgagaatagtgtatgcggcgaccgagttgctcttgcccggcgtcaatacgggataataccgcgccacatagcagaactttaaaagtgctcatcattg\ngaaaacgttcttcggggcgaaaactctcaaggatcttaccgctgttgagatccagttcgatataacccactcgtgcacccaactgatcttcagcatcttt\ntactttcaccagcgtttctgggtgagcaaaaacaggaaggcaaaatgccgcaaaaaagggaataagggcgacacggaaatgttgaatactcatactcttc\nctttttcaatattattgaagcatttatcagggttattgtctcatgagcggatacatatttgaatgtatttagaaaaataaacaaataggggttccgcgca\ncatttccccgaaaagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtatcacgaggcagaatttcagataaaa\naaaatccttagctttcgctaaggatgatttctggaatttaatacgactcactataggggaattgtgagcggataacaattccccgaattcgcggccgctt\nctagag",
			BBA_K823055: "accggttaatactagtagcggccgctgcagtccggcaaaaaagggcaaggtgtcaccaccctgccctttttctttaaaaccgaaaagattacttcgcgtt\natgcaggcttcctcgctcactgactcgctgcgctcggtcgttcggctgcggcgagcggtatcagctcactcaaaggcggtaatacggttatccacagaat\ncaggggataacgcaggaaagaacatgtgagcaaaaggccagcaaaaggccaggaaccgtaaaaaggccgcgttgctggcgtttttccacaggctccgccc\nccctgacgagcatcacaaaaatcgacgctcaagtcagaggtggcgaaacccgacaggactataaagataccaggcgtttccccctggaagctccctcgtg\ncgctctcctgttccgaccctgccgcttaccggatacctgtccgcctttctcccttcgggaagcgtggcgctttctcatagctcacgctgtaggtatctca\ngttcggtgtaggtcgttcgctccaagctgggctgtgtgcacgaaccccccgttcagcccgaccgctgcgccttatccggtaactatcgtcttgagtccaa\ncccggtaagacacgacttatcgccactggcagcagccactggtaacaggattagcagagcgaggtatgtaggcggtgctacagagttcttgaagtggtgg\ncctaactacggctacactagaagaacagtatttggtatctgcgctctgctgaagccagttaccttcggaaaaagagttggtagctcttgatccggcaaac\naaaccaccgctggtagcggtggtttttttgtttgcaagcagcagattacgcgcagaaaaaaaggatctcaagaagatcctttgatcttttctacggggtc\ntgacgctcagtggaacgaaaactcacgttaagggattttggtcatgagattatcaaaaaggatcttcacctagatccttttaaattaaaaatgaagtttt\naaatcaatctaaagtatatatgagtaaacttggtctgacagctcgaggcttggattctcaccaataaaaaacgcccggcggcaaccgagcgttctgaaca\naatccagatggagttctgaggtcattactggatctatcaacaggagtccaagcgagctcgatatcaaattacgccccgccctgccactcatcgcagtact\ngttgtaattcattaagcattctgccgacatggaagccatcacaaacggcatgatgaacctgaatcgccagcggcatcagcaccttgtcgccttgcgtata\natatttgcccatggtgaaaacgggggcgaagaagttgtccatattggccacgtttaaatcaaaactggtgaaactcacccagggattggctgagacgaaa\naacatattctcaataaaccctttagggaaataggccaggttttcaccgtaacacgccacatcttgcgaatatatgtgtagaaactgccggaaatcgtcgt\nggtattcactccagagcgatgaaaacgtttcagtttgctcatggaaaacggtgtaacaagggtgaacactatcccatatcaccagctcaccgtctttcat\ntgccatacgaaattccggatgagcattcatcaggcgggcaagaatgtgaataaaggccggataaaacttgtgcttatttttctttacggtctttaaaaag\ngccgtaatatccagctgaacggtctggttataggtacattgagcaactgactgaaatgcctcaaaatgttctttacgatgccattgggatatatcaacgg\ntggtatatccagtgatttttttctccattttagcttccttagctcctgaaaatctcgataactcaaaaaatacgcccggtagtgatcttatttcattatg\ngtgaaagttggaacctcttacgtgcccgatcaactcgagtgccacctgacgtctaagaaaccattattatcatgacattaacctataaaaataggcgtat\ncacgaggcagaatttcagataaaaaaaatccttagctttcgctaaggatgatttctggaattcgcggccgcttctagataaggaggaactactatggccg\ngc"
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.digest = e.cutSitesInRows = void 0;
		var r = u(n(173)),
			a = u(n(17)),
			c = n(2),
			o = u(n(6)),
			i = n(5);

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function s(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function l(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? s(Object(n), !0).forEach((function (e) {
					g(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function g(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		e.cutSitesInRows = function (t, e) {
			var n = (t + t).toUpperCase();
			return e.filter((function (t) {
				return !!r.default[t]
			})).reduce((function (e, a) {
				var c = f(r.default[a], n, t.length).filter((function (t) {
					return !(0 === t.fcut && 0 === t.rcut)
				})).map((function (e) {
					return {
						id: (0, o.default)(),
						name: a,
						start: e.start,
						end: e.end % t.length,
						fcut: e.fcut < t.length ? e.fcut : e.fcut - t.length,
						rcut: e.rcut < t.length ? e.rcut : e.rcut - t.length,
						recogStrand: e.recogStrand,
						recogStart: e.recogStart,
						recogEnd: e.recogEnd % t.length
					}
				}));
				return e.concat(c)
			}), [])
		};
		var f = function (t, e, n, a) {
			var o = 3 < arguments.length && void 0 !== a ? a : null,
				u = t.fcut,
				s = t.rcut,
				f = t.rseq;
			if (!f) {
				var p = r.default[t];
				u = p.fcut, s = p.rcut, f = p.rseq
			}
			for (var d = f.toUpperCase(), h = 0, y = d.length;
				"N" === d[h];) h += 1;
			for (;
				"N" === d[y - 1];) y -= 1;
			var m = f.length,
				b = new RegExp(/[^ATGC]/, "gi");
			b.test(f) && (f = (0, i.translateWildNucleotides)(f));
			for (var v = new RegExp(f, "gi"), w = [], O = 0, E = v.exec(e), T = E ? E.index : -1; - 1 < T && T < n;) w.push({
				cutEnzymes: o ? {
					start: [o],
					end: [o]
				} : null,
				fcut: T + u,
				rcut: T + s,
				start: T,
				end: T + m,
				recogStrand: 1,
				recogStart: T + h,
				recogEnd: T + y
			}), O = T + 1, T = e.indexOf(f, O);
			var S = f.split("").reverse().join(""),
				C = (0, c.dnaComplement)(S).compSeq;
			b.test(C) && (C = (0, i.translateWildNucleotides)(C));
			var x = m - u,
				N = m - s;
			for (O = 0, T = (E = v.exec(e)) ? E.index : -1; - 1 < T && T < n;) w.push({
				cutEnzymes: o ? {
					start: [o],
					end: [o]
				} : null,
				fcut: T + m - x,
				rcut: T + m - N,
				start: T,
				end: T + m,
				recogStrand: -1,
				recogStart: T + h,
				recogEnd: T + y
			}), O = T + 1, T = e.indexOf(C, O);
			var P = Object.values(w.reduce((function (t, e) {
				return l(g({}, e.fcut, e), t)
			}), {}));
			return P.sort((function (t, e) {
				return t.fcut - e.fcut
			})), P
		};
		e.digest = function (t, e) {
			var n = e.circular,
				c = void 0 === n || n,
				i = t.filter((function (t) {
					return !!r.default[t]
				}));
			if (!i.length) return [e];
			var u = l({}, e, {
				annotations: function (t) {
					return t.map((function (t) {
						return l({}, t, {
							start: +t.start,
							end: +t.end
						})
					}))
				}(e.annotations || [])
			});
			return i.reduce((function (t, e) {
				var n = c && (0, a.default)(t[0], u);
				return t.reduce((function (t, a) {
					return t.concat(function (t, e, n) {
						var a = e.seq,
							c = e.compSeq,
							o = e.annotations,
							i = a.toUpperCase(),
							u = a.length;
						n && (a += a, c += c, i += i, o = o.map((function (t) {
							return l({}, t, {
								end: t.end < t.start ? t.end + u : t.end
							})
						})).reduce((function (t, e) {
							return t.concat(e, l({}, e, {
								start: e.start + u,
								end: e.end + u
							}))
						}), []));
						var s = f(r.default[t], i, u);
						if (s.length < 1) return e;

						function g(t, e, n, r) {
							var i = a.substring(t, e),
								u = c.substring(n, r),
								s = Math.abs(t - n);
							t < n ? u = u.padStart(u.length + s, "*") : n < t && (i = i.padStart(i.length + s, "*"));
							var g = Math.abs(e - r);
							r < e ? u = u.padEnd(u.length + g, "*") : e < r && (i = i.padEnd(i.length + g, "*"));
							var f = e - t,
								d = o.map((function (e) {
									return l({}, e, {
										start: e.start - t,
										end: e.end - t
									})
								})).filter((function (t) {
									return 0 <= t.start && t.start < f || 0 < t.end && t.end <= f || t.start < 0 && t.end > f
								})).map((function (t) {
									return l({}, t, {
										start: Math.max(t.start, 0),
										end: Math.min(t.end, f + g)
									})
								}));
							i.startsWith("*") && u.startsWith("*") || p.push({
								seq: i,
								compSeq: u,
								annotations: d
							})
						}
						var p = [],
							d = 1 === s.length;
						return s.forEach((function (t, e) {
							var r = t.fcut,
								a = t.rcut;
							s[e + 1] ? g(r, s[e + 1].fcut, a, s[e + 1].rcut) : n ? g(r, d ? r + u : s[0].fcut + u, a, d ? a + u : s[0].rcut + u) : (d && g(0, r, 0, a), g(r, u, a, u))
						})), p
					}(e, a, n))
				}), [])
			}), [u]).map((function (t, n) {
				return l({}, t, {
					_id: (0, o.default)(),
					name: "".concat(e.name, "_").concat(n),
					date: new Date,
					source: [e._id]
				})
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = {
			"PI-SceI": {
				rseq: "ATCTATGTCGGGTGCGGAGAAAGAGGTAATGAAATGG",
				rcut: 11,
				fcut: 15
			},
			"PI-PspI": {
				rseq: "TGGCAAACAGCTATTATGGGTATTATGGGT",
				rcut: 13,
				fcut: 17
			},
			"I-CeuI": {
				rseq: "TAACTATAACGGTCCTAAGGTAGCGAA",
				rcut: 14,
				fcut: 18
			},
			"I-SceI": {
				rseq: "TAGGGATAACAGGGTAAT",
				rcut: 5,
				fcut: 9
			},
			AscI: {
				rseq: "GGCGCGCC",
				rcut: 6,
				fcut: 2
			},
			AsiSI: {
				rseq: "GCGATCGC",
				rcut: 3,
				fcut: 5
			},
			FseI: {
				rseq: "GGCCGGCC",
				rcut: 2,
				fcut: 6
			},
			NotI: {
				rseq: "GCGGCCGC",
				rcut: 6,
				fcut: 2
			},
			PacI: {
				rseq: "TTAATTAA",
				rcut: 3,
				fcut: 5
			},
			PmeI: {
				rseq: "GTTTAAAC",
				rcut: 4,
				fcut: 4
			},
			PspXI: {
				rseq: "VCTCGAGB",
				rcut: 6,
				fcut: 2
			},
			SbfI: {
				rseq: "CCTGCAGG",
				rcut: 2,
				fcut: 6
			},
			SfiI: {
				rseq: "GGCCNNNNNGGCC",
				rcut: 5,
				fcut: 8
			},
			SgrAI: {
				rseq: "CRCCGGYG",
				rcut: 6,
				fcut: 2
			},
			SrfI: {
				rseq: "GCCCGGGC",
				rcut: 4,
				fcut: 4
			},
			SwaI: {
				rseq: "ATTTAAAT",
				rcut: 4,
				fcut: 4
			},
			BaeI: {
				rseq: "NNNNNNNNNNNNNNNACNNNNGTAYCNNNNNNNNNNNN",
				rcut: 33,
				fcut: 38
			},
			BbvCI: {
				rseq: "CCTCAGC",
				rcut: 5,
				fcut: 2
			},
			BspQI: {
				rseq: "GCTCTTCNNNN",
				rcut: 11,
				fcut: 8
			},
			CspCI: {
				rseq: "NNNNNNNNNNNNNCAANNNNNGTGGNNNNNNNNNNNN",
				rcut: 35,
				fcut: 37
			},
			PpuMI: {
				rseq: "RGGWCCY",
				rcut: 5,
				fcut: 2
			},
			RsrII: {
				rseq: "CGGWCCG",
				rcut: 5,
				fcut: 2
			},
			SapI: {
				rseq: "GCTCTTCNNNN",
				rcut: 11,
				fcut: 8
			},
			SexAI: {
				rseq: "ACCWGGT",
				rcut: 6,
				fcut: 1
			},
			AatII: {
				rseq: "GACGTC",
				rcut: 1,
				fcut: 5
			},
			Acc65I: {
				rseq: "GGTACC",
				rcut: 5,
				fcut: 1
			},
			AccI: {
				rseq: "GTMKAC",
				rcut: 4,
				fcut: 2
			},
			AclI: {
				rseq: "AACGTT",
				rcut: 4,
				fcut: 2
			},
			AcuI: {
				rseq: "CTGAAGNNNNNNNNNNNNNNNN",
				rcut: 20,
				fcut: 22
			},
			AfeI: {
				rseq: "AGCGCT",
				rcut: 3,
				fcut: 3
			},
			AflII: {
				rseq: "CTTAAG",
				rcut: 5,
				fcut: 1
			},
			AflIII: {
				rseq: "ACRYGT",
				rcut: 5,
				fcut: 1
			},
			AgeI: {
				rseq: "ACCGGT",
				rcut: 5,
				fcut: 1
			},
			AhdI: {
				rseq: "GACNNNNNGTC",
				rcut: 5,
				fcut: 6
			},
			AleI: {
				rseq: "CACNNNNGTG",
				rcut: 5,
				fcut: 5
			},
			AlwNI: {
				rseq: "CAGNNNCTG",
				rcut: 3,
				fcut: 6
			},
			ApaI: {
				rseq: "GGGCCC",
				rcut: 1,
				fcut: 5
			},
			ApaLI: {
				rseq: "GTGCAC",
				rcut: 5,
				fcut: 1
			},
			ApoI: {
				rseq: "RAATTY",
				rcut: 5,
				fcut: 1
			},
			AseI: {
				rseq: "ATTAAT",
				rcut: 4,
				fcut: 2
			},
			AvaI: {
				rseq: "CYCGRG",
				rcut: 5,
				fcut: 1
			},
			AvrII: {
				rseq: "CCTAGG",
				rcut: 5,
				fcut: 1
			},
			BaeGI: {
				rseq: "GKGCMC",
				rcut: 1,
				fcut: 5
			},
			BamHI: {
				rseq: "GGATCC",
				rcut: 5,
				fcut: 1
			},
			BanI: {
				rseq: "GGYRCC",
				rcut: 5,
				fcut: 1
			},
			BanII: {
				rseq: "GRGCYC",
				rcut: 1,
				fcut: 5
			},
			BbsI: {
				rseq: "GAAGACNNNNNN",
				rcut: 12,
				fcut: 8
			},
			BcgI: {
				rseq: "NNNNNNNNNNNNCGANNNNNNTGCNNNNNNNNNNNN",
				rcut: 34,
				fcut: 36
			},
			BciVI: {
				rseq: "GTATCCNNNNNN",
				rcut: 11,
				fcut: 12
			},
			BclI: {
				rseq: "TGATCA",
				rcut: 5,
				fcut: 1
			},
			BfuAI: {
				rseq: "ACCTGCNNNNNNNN",
				rcut: 14,
				fcut: 10
			},
			BglI: {
				rseq: "GCCNNNNNGGC",
				rcut: 4,
				fcut: 7
			},
			BglII: {
				rseq: "AGATCT",
				rcut: 5,
				fcut: 1
			},
			BlpI: {
				rseq: "GCTNAGC",
				rcut: 5,
				fcut: 2
			},
			BmgBI: {
				rseq: "CACGTC",
				rcut: 3,
				fcut: 3
			},
			BmrI: {
				rseq: "ACTGGGNNNNN",
				rcut: 10,
				fcut: 11
			},
			BmtI: {
				rseq: "GCTAGC",
				rcut: 1,
				fcut: 5
			},
			BpmI: {
				rseq: "CTGGAGNNNNNNNNNNNNNNNN",
				rcut: 20,
				fcut: 22
			},
			Bpu10I: {
				rseq: "CCTNAGC",
				rcut: 5,
				fcut: 2
			},
			BpuEI: {
				rseq: "CTTGAGNNNNNNNNNNNNNNNN",
				rcut: 20,
				fcut: 22
			},
			BsaAI: {
				rseq: "YACGTR",
				rcut: 3,
				fcut: 3
			},
			BsaBI: {
				rseq: "GATNNNNATC",
				rcut: 5,
				fcut: 5
			},
			BsaHI: {
				rseq: "GRCGYC",
				rcut: 4,
				fcut: 2
			},
			BsaI: {
				rseq: "GGTCTCNNNNN",
				rcut: 11,
				fcut: 7
			},
			BsaWI: {
				rseq: "WCCGGW",
				rcut: 5,
				fcut: 1
			},
			BsaXI: {
				rseq: "NNNNNNNNNNNNACNNNNNCTCCNNNNNNNNNN",
				rcut: 30,
				fcut: 33
			},
			BseRI: {
				rseq: "GAGGAGNNNNNNNNNN",
				rcut: 14,
				fcut: 16
			},
			BseYI: {
				rseq: "CCCAGC",
				rcut: 5,
				fcut: 1
			},
			BsgI: {
				rseq: "GTGCAGNNNNNNNNNNNNNNNN",
				rcut: 20,
				fcut: 22
			},
			BsiEI: {
				rseq: "CGRYCG",
				rcut: 2,
				fcut: 4
			},
			BsiHKAI: {
				rseq: "GWGCWC",
				rcut: 1,
				fcut: 5
			},
			BsiWI: {
				rseq: "CGTACG",
				rcut: 5,
				fcut: 1
			},
			BsmBI: {
				rseq: "CGTCTCNNNNN",
				rcut: 11,
				fcut: 7
			},
			BsmI: {
				rseq: "GAATGCN",
				rcut: 5,
				fcut: 7
			},
			BsoBI: {
				rseq: "CYCGRG",
				rcut: 5,
				fcut: 1
			},
			Bsp1286I: {
				rseq: "GDGCHC",
				rcut: 1,
				fcut: 5
			},
			BspDI: {
				rseq: "ATCGAT",
				rcut: 4,
				fcut: 2
			},
			BspEI: {
				rseq: "TCCGGA",
				rcut: 5,
				fcut: 1
			},
			BspHI: {
				rseq: "TCATGA",
				rcut: 5,
				fcut: 1
			},
			BspMI: {
				rseq: "ACCTGCNNNNNNNN",
				rcut: 14,
				fcut: 10
			},
			BsrBI: {
				rseq: "CCGCTC",
				rcut: 3,
				fcut: 3
			},
			BsrDI: {
				rseq: "GCAATGNN",
				rcut: 6,
				fcut: 8
			},
			BsrFI: {
				rseq: "RCCGGY",
				rcut: 5,
				fcut: 1
			},
			BsrGI: {
				rseq: "TGTACA",
				rcut: 5,
				fcut: 1
			},
			BssHII: {
				rseq: "GCGCGC",
				rcut: 5,
				fcut: 1
			},
			BssSI: {
				rseq: "CACGAG",
				rcut: 5,
				fcut: 1
			},
			BstAPI: {
				rseq: "GCANNNNNTGC",
				rcut: 4,
				fcut: 7
			},
			BstBI: {
				rseq: "TTCGAA",
				rcut: 4,
				fcut: 2
			},
			BstEII: {
				rseq: "GGTNACC",
				rcut: 6,
				fcut: 1
			},
			BstXI: {
				rseq: "CCANNNNNNTGG",
				rcut: 4,
				fcut: 8
			},
			BstYI: {
				rseq: "RGATCY",
				rcut: 5,
				fcut: 1
			},
			BstZ17I: {
				rseq: "GTATAC",
				rcut: 3,
				fcut: 3
			},
			Bsu36I: {
				rseq: "CCTNAGG",
				rcut: 5,
				fcut: 2
			},
			BtgI: {
				rseq: "CCRYGG",
				rcut: 5,
				fcut: 1
			},
			BtgZI: {
				rseq: "GCGATGNNNNNNNNNNNNNN",
				rcut: 20,
				fcut: 16
			},
			BtsI: {
				rseq: "GCAGTGNN",
				rcut: 6,
				fcut: 8
			},
			ClaI: {
				rseq: "ATCGAT",
				rcut: 4,
				fcut: 2
			},
			DraI: {
				rseq: "TTTAAA",
				rcut: 3,
				fcut: 3
			},
			DraIII: {
				rseq: "CACNNNGTG",
				rcut: 3,
				fcut: 6
			},
			DrdI: {
				rseq: "GACNNNNNNGTC",
				rcut: 5,
				fcut: 7
			},
			EaeI: {
				rseq: "YGGCCR",
				rcut: 5,
				fcut: 1
			},
			EagI: {
				rseq: "CGGCCG",
				rcut: 5,
				fcut: 1
			},
			EarI: {
				rseq: "CTCTTCNNNN",
				rcut: 10,
				fcut: 7
			},
			EciI: {
				rseq: "GGCGGANNNNNNNNNNN",
				rcut: 15,
				fcut: 17
			},
			Eco53kI: {
				rseq: "GAGCTC",
				rcut: 3,
				fcut: 3
			},
			EcoNI: {
				rseq: "CCTNNNNNAGG",
				rcut: 6,
				fcut: 5
			},
			EcoO109I: {
				rseq: "RGGNCCY",
				rcut: 5,
				fcut: 2
			},
			EcoRI: {
				rseq: "GAATTC",
				rcut: 5,
				fcut: 1
			},
			EcoRV: {
				rseq: "GATATC",
				rcut: 3,
				fcut: 3
			},
			Esp3I: {
				rseq: "CGTCTCNNNNN",
				rcut: 11,
				fcut: 7
			},
			FspI: {
				rseq: "TGCGCA",
				rcut: 3,
				fcut: 3
			},
			HaeII: {
				rseq: "RGCGCY",
				rcut: 1,
				fcut: 5
			},
			HincII: {
				rseq: "GTYRAC",
				rcut: 3,
				fcut: 3
			},
			HindIII: {
				rseq: "AAGCTT",
				rcut: 5,
				fcut: 1
			},
			HpaI: {
				rseq: "GTTAAC",
				rcut: 3,
				fcut: 3
			},
			KasI: {
				rseq: "GGCGCC",
				rcut: 5,
				fcut: 1
			},
			KpnI: {
				rseq: "GGTACC",
				rcut: 1,
				fcut: 5
			},
			MfeI: {
				rseq: "CAATTG",
				rcut: 5,
				fcut: 1
			},
			MluI: {
				rseq: "ACGCGT",
				rcut: 5,
				fcut: 1
			},
			MmeI: {
				rseq: "TCCRACNNNNNNNNNNNNNNNNNNNN",
				rcut: 24,
				fcut: 26
			},
			MscI: {
				rseq: "TGGCCA",
				rcut: 3,
				fcut: 3
			},
			MslI: {
				rseq: "CAYNNNNRTG",
				rcut: 5,
				fcut: 5
			},
			MspA1I: {
				rseq: "CMGCKG",
				rcut: 3,
				fcut: 3
			},
			NaeI: {
				rseq: "GCCGGC",
				rcut: 3,
				fcut: 3
			},
			NarI: {
				rseq: "GGCGCC",
				rcut: 4,
				fcut: 2
			},
			NcoI: {
				rseq: "CCATGG",
				rcut: 5,
				fcut: 1
			},
			NdeI: {
				rseq: "CATATG",
				rcut: 4,
				fcut: 2
			},
			NgoMIV: {
				rseq: "GCCGGC",
				rcut: 5,
				fcut: 1
			},
			NheI: {
				rseq: "GCTAGC",
				rcut: 5,
				fcut: 1
			},
			NmeAIII: {
				rseq: "GCCGAGNNNNNNNNNNNNNNNNNNNN",
				rcut: 25,
				fcut: 26
			},
			NruI: {
				rseq: "TCGCGA",
				rcut: 3,
				fcut: 3
			},
			NsiI: {
				rseq: "ATGCAT",
				rcut: 1,
				fcut: 5
			},
			NspI: {
				rseq: "RCATGY",
				rcut: 1,
				fcut: 5
			},
			PaeR7I: {
				rseq: "CTCGAG",
				rcut: 5,
				fcut: 1
			},
			PciI: {
				rseq: "ACATGT",
				rcut: 5,
				fcut: 1
			},
			PflFI: {
				rseq: "GACNNNGTC",
				rcut: 5,
				fcut: 4
			},
			PflMI: {
				rseq: "CCANNNNNTGG",
				rcut: 4,
				fcut: 7
			},
			PluTI: {
				rseq: "GGCGCC",
				rcut: 1,
				fcut: 5
			},
			PmlI: {
				rseq: "CACGTG",
				rcut: 3,
				fcut: 3
			},
			PshAI: {
				rseq: "GACNNNNGTC",
				rcut: 5,
				fcut: 5
			},
			PsiI: {
				rseq: "TTATAA",
				rcut: 3,
				fcut: 3
			},
			PspOMI: {
				rseq: "GGGCCC",
				rcut: 5,
				fcut: 1
			},
			PstI: {
				rseq: "CTGCAG",
				rcut: 1,
				fcut: 5
			},
			PvuI: {
				rseq: "CGATCG",
				rcut: 2,
				fcut: 4
			},
			PvuII: {
				rseq: "CAGCTG",
				rcut: 3,
				fcut: 3
			},
			SacI: {
				rseq: "GAGCTC",
				rcut: 1,
				fcut: 5
			},
			SacII: {
				rseq: "CCGCGG",
				rcut: 2,
				fcut: 4
			},
			SalI: {
				rseq: "GTCGAC",
				rcut: 5,
				fcut: 1
			},
			ScaI: {
				rseq: "AGTACT",
				rcut: 3,
				fcut: 3
			},
			SfcI: {
				rseq: "CTRYAG",
				rcut: 5,
				fcut: 1
			},
			SfoI: {
				rseq: "GGCGCC",
				rcut: 3,
				fcut: 3
			},
			SmaI: {
				rseq: "CCCGGG",
				rcut: 3,
				fcut: 3
			},
			SmlI: {
				rseq: "CTYRAG",
				rcut: 5,
				fcut: 1
			},
			SnaBI: {
				rseq: "TACGTA",
				rcut: 3,
				fcut: 3
			},
			SpeI: {
				rseq: "ACTAGT",
				rcut: 5,
				fcut: 1
			},
			SphI: {
				rseq: "GCATGC",
				rcut: 1,
				fcut: 5
			},
			SspI: {
				rseq: "AATATT",
				rcut: 3,
				fcut: 3
			},
			StuI: {
				rseq: "AGGCCT",
				rcut: 3,
				fcut: 3
			},
			StyI: {
				rseq: "CCWWGG",
				rcut: 5,
				fcut: 1
			},
			TspMI: {
				rseq: "CCCGGG",
				rcut: 5,
				fcut: 1
			},
			Tth111I: {
				rseq: "GACNNNGTC",
				rcut: 5,
				fcut: 4
			},
			XbaI: {
				rseq: "TCTAGA",
				rcut: 5,
				fcut: 1
			},
			XcmI: {
				rseq: "CCANNNNNNNNNTGG",
				rcut: 7,
				fcut: 8
			},
			XhoI: {
				rseq: "CTCGAG",
				rcut: 5,
				fcut: 1
			},
			XmaI: {
				rseq: "CCCGGG",
				rcut: 5,
				fcut: 1
			},
			XmnI: {
				rseq: "GAANNNNTTC",
				rcut: 5,
				fcut: 5
			},
			ZraI: {
				rseq: "GACGTC",
				rcut: 3,
				fcut: 3
			},
			AlwI: {
				rseq: "GGATCNNNNN",
				rcut: 10,
				fcut: 9
			},
			ApeKI: {
				rseq: "GCWGC",
				rcut: 4,
				fcut: 1
			},
			AvaII: {
				rseq: "GGWCC",
				rcut: 4,
				fcut: 1
			},
			BbvI: {
				rseq: "GCAGCNNNNNNNNNNNN",
				rcut: 17,
				fcut: 13
			},
			BccI: {
				rseq: "CCATCNNNNN",
				rcut: 10,
				fcut: 9
			},
			BceAI: {
				rseq: "ACGGCNNNNNNNNNNNNNN",
				rcut: 19,
				fcut: 17
			},
			BcoDI: {
				rseq: "GTCTCNNNNN",
				rcut: 10,
				fcut: 6
			},
			BsmAI: {
				rseq: "GTCTCNNNNN",
				rcut: 10,
				fcut: 6
			},
			BsmFI: {
				rseq: "GGGACNNNNNNNNNNNNNN",
				rcut: 19,
				fcut: 15
			},
			BspCNI: {
				rseq: "CTCAGNNNNNNNNN",
				rcut: 12,
				fcut: 14
			},
			BsrI: {
				rseq: "ACTGGN",
				rcut: 4,
				fcut: 6
			},
			BstNI: {
				rseq: "CCWGG",
				rcut: 3,
				fcut: 2
			},
			BtsCI: {
				rseq: "GGATGNN",
				rcut: 5,
				fcut: 7
			},
			BtsIMutI: {
				rseq: "CAGTGNN",
				rcut: 5,
				fcut: 7
			},
			DpnI: {
				rseq: "GmATC",
				rcut: 3,
				fcut: 3
			},
			FauI: {
				rseq: "CCCGCNNNNNN",
				rcut: 11,
				fcut: 9
			},
			FokI: {
				rseq: "GGATGNNNNNNNNNNNNN",
				rcut: 18,
				fcut: 14
			},
			HgaI: {
				rseq: "GACGCNNNNNNNNNN",
				rcut: 15,
				fcut: 10
			},
			HphI: {
				rseq: "GGTGANNNNNNNN",
				rcut: 12,
				fcut: 13
			},
			Hpy99I: {
				rseq: "CGWCG",
				rcut: 0,
				fcut: 5
			},
			HpyAV: {
				rseq: "CCTTCNNNNNN",
				rcut: 10,
				fcut: 11
			},
			LpnPI: {
				rseq: "CmCDGNNNNNNNNNNNNNN",
				rcut: 19,
				fcut: 15
			},
			MboII: {
				rseq: "GAAGANNNNNNNN",
				rcut: 12,
				fcut: 13
			},
			MlyI: {
				rseq: "GAGTCNNNNN",
				rcut: 10,
				fcut: 10
			},
			NciI: {
				rseq: "CCSGG",
				rcut: 3,
				fcut: 2
			},
			PleI: {
				rseq: "GAGTCNNNNN",
				rcut: 10,
				fcut: 9
			},
			PspGI: {
				rseq: "CCWGG",
				rcut: 5,
				fcut: 0
			},
			SfaNI: {
				rseq: "GCATCNNNNNNNNN",
				rcut: 14,
				fcut: 10
			},
			TfiI: {
				rseq: "GAWTC",
				rcut: 4,
				fcut: 1
			},
			TseI: {
				rseq: "GCWGC",
				rcut: 4,
				fcut: 1
			},
			Tsp45I: {
				rseq: "GTSAC",
				rcut: 5,
				fcut: 0
			},
			TspRI: {
				rseq: "NNCASTGNN",
				rcut: 0,
				fcut: 9
			},
			AciI: {
				rseq: "CCGC",
				rcut: 3,
				fcut: 1
			},
			AluI: {
				rseq: "AGCT",
				rcut: 2,
				fcut: 2
			},
			BfaI: {
				rseq: "CTAG",
				rcut: 3,
				fcut: 1
			},
			BsaJI: {
				rseq: "CCNNGG",
				rcut: 5,
				fcut: 1
			},
			BslI: {
				rseq: "CCNNNNNNNGG",
				rcut: 4,
				fcut: 7
			},
			BstUI: {
				rseq: "CGCG",
				rcut: 2,
				fcut: 2
			},
			Cac8I: {
				rseq: "GCNNGC",
				rcut: 3,
				fcut: 3
			},
			CviAII: {
				rseq: "CATG",
				rcut: 3,
				fcut: 1
			},
			"CviKI-1": {
				rseq: "RGCY",
				rcut: 2,
				fcut: 2
			},
			CviQI: {
				rseq: "GTAC",
				rcut: 3,
				fcut: 1
			},
			DdeI: {
				rseq: "CTNAG",
				rcut: 4,
				fcut: 1
			},
			DpnII: {
				rseq: "GATC",
				rcut: 4,
				fcut: 0
			},
			FatI: {
				rseq: "CATG",
				rcut: 4,
				fcut: 0
			},
			Fnu4HI: {
				rseq: "GCNGC",
				rcut: 3,
				fcut: 2
			},
			HaeIII: {
				rseq: "GGCC",
				rcut: 2,
				fcut: 2
			},
			HhaI: {
				rseq: "GCGC",
				rcut: 1,
				fcut: 3
			},
			HinP1I: {
				rseq: "GCGC",
				rcut: 3,
				fcut: 1
			},
			HinfI: {
				rseq: "GANTC",
				rcut: 4,
				fcut: 1
			},
			HpaII: {
				rseq: "CCGG",
				rcut: 3,
				fcut: 1
			},
			Hpy166II: {
				rseq: "GTNNAC",
				rcut: 3,
				fcut: 3
			},
			Hpy188I: {
				rseq: "TCNGA",
				rcut: 2,
				fcut: 3
			},
			Hpy188III: {
				rseq: "TCNNGA",
				rcut: 4,
				fcut: 2
			},
			HpyCH4III: {
				rseq: "ACNGT",
				rcut: 2,
				fcut: 3
			},
			HpyCH4IV: {
				seq: "ACGT",
				rcut: 3,
				fcut: 1
			},
			HpyCH4V: {
				rseq: "TGCA",
				rcut: 2,
				fcut: 2
			},
			MboI: {
				rseq: "GATC",
				rcut: 4,
				fcut: 0
			},
			MluCI: {
				rseq: "AATT",
				rcut: 4,
				fcut: 0
			},
			MnlI: {
				rseq: "CCTCNNNNNNN",
				rcut: 10,
				fcut: 11
			},
			MseI: {
				rseq: "TTAA",
				rcut: 3,
				fcut: 1
			},
			MspI: {
				rseq: "CCGG",
				rcut: 3,
				fcut: 1
			},
			MwoI: {
				rseq: "GCNNNNNNNGC",
				rcut: 4,
				fcut: 7
			},
			NlaIII: {
				rseq: "CATG",
				rcut: 0,
				fcut: 4
			},
			NlaIV: {
				rseq: "GGNNCC",
				rcut: 3,
				fcut: 3
			},
			RsaI: {
				rseq: "GTAC",
				rcut: 2,
				fcut: 2
			},
			Sau3AI: {
				rseq: "GATC",
				rcut: 4,
				fcut: 0
			},
			Sau96I: {
				rseq: "GGNCC",
				rcut: 4,
				fcut: 1
			},
			ScrFI: {
				rseq: "CCNGG",
				rcut: 3,
				fcut: 2
			},
			StyD4I: {
				rseq: "CCNGG",
				rcut: 5,
				fcut: 0
			},
			TaqI: {
				rseq: "TCGA",
				rcut: 3,
				fcut: 1
			},
			AbaSI: {
				rseq: "hmCNNNNNNNNNNN",
				rcut: 12,
				fcut: 14
			},
			FspEI: {
				rseq: "CmCNNNNNNNNNNNNNNNN",
				rcut: 19,
				fcut: 15
			},
			MspJI: {
				rseq: "mCNNRNNNNNNNNNNNNN",
				rcut: 18,
				fcut: 14
			}
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(2),
			a = n(5);
		e.default = function (t, e, n) {
			if (!(t && t.length && n && n.length)) return [];
			if (t.length - e < 3) return console.error("search too broad, please narrow parameters."), [];
			var o = (0, r.dnaComplement)(n).compSeq,
				i = c(t, n, e, !0),
				u = c((0, a.reverse)(t), o, e, !1);
			return 4e3 < i.length || 4e3 < u.length ? (console.error("Search too broad, ".concat(i.length + u.length, " matches. Please narrow parameters.")), []) : i.concat(u).sort((function (t, e) {
				return t.start - e.start
			}))
		};
		var c = function (t, e, n, r) {
				if (0 < n) return o(t, e, n, r);
				for (var c = e.length, i = (0, a.translateWildNucleotides)(t).trim(), u = new RegExp(i, "gi"), s = u.exec(e), l = []; s;) {
					var g = s.index % c,
						f = (g + t.length) % c || c;
					l.push({
						start: g,
						end: f,
						direction: r ? 1 : -1
					}), s = u.exec(e)
				}
				return l
			},
			o = function (t, e, n, r) {
				for (var c = [], o = 0; o < e.length - t.length; o += 1) {
					for (var i = 0, u = 0; u < t.length; u += 1) {
						var s = e[o + u],
							l = t[u];
						if (a.nucleotides[l] ? s !== l && (i += 1) : a.nucleotideWildCards[l] && (a.nucleotideWildCards[l][s] || (i += 1)), n < i) break
					}
					if (i <= n) {
						var g = (o + t.length) % e.length || e.length;
						c.push({
							start: o,
							end: g,
							direction: r ? 1 : -1
						})
					}
				}
				return c
			}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== l(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = s(n(176)),
			c = s(n(17)),
			o = s(n(50)),
			i = s(n(201)),
			u = s(n(11));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function l(t) {
			return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function g() {
			return (g = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function f(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function p(t) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function d(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function h(t, e) {
			return (h = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function y(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var m = function () {
			function t(e) {
				var n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), n = function (t, e) {
					return !e || "object" !== l(e) && "function" != typeof e ? d(t) : e
				}(this, p(t).call(this, e)), y(d(n), "shouldComponentUpdate", (function (t, e) {
					return !(0, c.default)(t, n.props) || !(0, c.default)(e, n.state)
				})), y(d(n), "linearProps", (function () {
					var t = n.props,
						e = t.seq,
						r = t.size,
						a = n.props.zoom.linear || 0;
					a = Math.max(a, 0), a = Math.min(a, 100);
					var c = Math.min(Math.round(.1 * a + 9.5), 18),
						o = Math.round(r.width / c * 1.4) || 1;
					return a <= 5 ? o *= 3 : a <= 10 ? o *= 2 : 70 < a && (o = Math.round(o * (70 / a))), o < e.length && (r.width -= 28), {
						seqFontSize: c,
						lineHeight: 1.4 * c,
						elementHeight: 16,
						bpsPerBlock: o,
						charWidth: r.width / o,
						size: r,
						zoom: {
							linear: a
						},
						Linear: !0
					}
				})), y(d(n), "circularProps", (function () {
					var t = n.props,
						e = t.size,
						r = t.seq.length,
						a = n.props.zoom.circular || 0;
					a = Math.max(a, 0), a = Math.min(a, 100);
					var c = {
							x: e.width / 2,
							y: e.height / 2
						},
						o = Math.min(e.height, e.width),
						i = r * Math.exp(Math.log(50 / r) / -Math.pow(100, .83)),
						u = .34 * o;
					return {
						radius: u = 0 == (u = u * Math.PI / r * i / (Math.PI * (i / r))) ? 1 : u,
						yDiff: 0,
						Linear: !1,
						size: e,
						zoom: {
							circular: a
						},
						bpsOnArc: i,
						center: c
					}
				}));
				var r = e.size;
				return r.height && r.width || console.error("SeqViz viewer rendered in an element without a height or width.\nGenerally, SeqViz expands to fill the height/width of its parent element.\n\nThe two solutions are to:\n  1. render SeqViz within a container element with a defined height + width\n  2. pass an options.style object to SeqViz with a height + width\n\nSee: https://github.com/Lattice-Automation/seqviz#optionsstyle-"), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && h(t, e)
				}(t, r.Component),
				function (t, e, n) {
					e && f(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this,
							e = this.props,
							n = e.Circular,
							a = e.seq,
							c = e.cutSites;
						return r.createElement("div", {
							className: "la-vz-viewer-container"
						}, n ? r.createElement(u.default.Consumer, null, (function (e) {
							var n = e.circular,
								a = e.setCentralIndex;
							return r.createElement(o.default, g({}, t.props, t.state, t.circularProps(), {
								centralIndex: n,
								setCentralIndex: a,
								cutSites: c
							}))
						})) : r.createElement(i.default, g({}, this.props, this.state, this.linearProps(), {
							seqLength: a.length,
							cutSites: c
						})))
					}
				}]), t
		}();
		e.default = (0, a.default)({
			monitorHeight: !0
		})(m)
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && "object" == typeof t && "default" in t ? t.default : t
		}
		var a = r(n(177)),
			c = n(0),
			o = r(c),
			i = r(n(52)),
			u = r(n(51)),
			s = r(n(188)),
			l = n(189),
			g = r(n(190)),
			f = {},
			p = function (t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			},
			d = function (t, e, n) {
				return e && h(t.prototype, e), n && h(t, n), t
			};

		function h(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function y(t, e) {
			var n = {};
			for (var r in t) 0 <= e.indexOf(r) || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
			return n
		}
		var m = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			b = function (t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			},
			v = function (t, e) {
				if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !e || "object" != typeof e && "function" != typeof e ? t : e
			},
			w = "react-sizeme: an error occurred whilst stopping to listen to node size changes",
			O = {
				monitorWidth: !0,
				monitorHeight: !1,
				monitorPosition: !1,
				refreshRate: 16,
				refreshMode: "throttle",
				noPlaceholder: !1,
				resizeDetectorStrategy: "scroll"
			};

		function E(t) {
			return t.displayName || t.name || "Component"
		}
		var T, S = (T = c.Component, b(C, T), d(C, [{
			key: "render",
			value: function () {
				return c.Children.only(this.props.children)
			}
		}]), C);

		function C() {
			return p(this, C), v(this, (C.__proto__ || Object.getPrototypeOf(C)).apply(this, arguments))
		}

		function x(t) {
			var e = t.className,
				n = t.style,
				r = {};
			return e || n ? (e && (r.className = e), n && (r.style = n)) : r.style = {
				width: "100%",
				height: "100%"
			}, o.createElement("div", r)
		}
		S.displayName = "SizeMeReferenceWrapper", S.propTypes = {
			children: i.element.isRequired
		}, x.displayName = "SizeMePlaceholder", x.propTypes = {
			className: i.string,
			style: i.object
		};
		var N = function (t) {
			function e(e) {
				var n = e.explicitRef,
					r = e.className,
					a = e.style,
					c = e.size,
					i = e.disablePlaceholder,
					u = (e.onSize, y(e, ["explicitRef", "className", "style", "size", "disablePlaceholder", "onSize"])),
					s = (null == c || null == c.width && null == c.height && null == c.position) && !i,
					l = {
						className: r,
						style: a
					};
				null != c && (l.size = c);
				var g = s ? o.createElement(x, {
					className: r,
					style: a
				}) : o.createElement(t, m({}, l, u));
				return o.createElement(S, {
					ref: n
				}, g)
			}
			return e.displayName = "SizeMeRenderer(" + E(t) + ")", e.propTypes = {
				explicitRef: i.func.isRequired,
				className: i.string,
				style: i.object,
				size: i.shape({
					width: i.number,
					height: i.number,
					position: i.object
				}),
				disablePlaceholder: i.bool,
				onSize: i.func
			}, e
		};

		function P() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : O,
				e = t.monitorWidth,
				n = void 0 === e ? O.monitorWidth : e,
				r = t.monitorHeight,
				c = void 0 === r ? O.monitorHeight : r,
				g = t.monitorPosition,
				h = void 0 === g ? O.monitorPosition : g,
				y = t.refreshRate,
				T = void 0 === y ? O.refreshRate : y,
				S = t.refreshMode,
				C = void 0 === S ? O.refreshMode : S,
				x = t.noPlaceholder,
				_ = void 0 === x ? O.noPlaceholder : x,
				A = t.resizeDetectorStrategy,
				k = void 0 === A ? O.resizeDetectorStrategy : A;
			s(n || c || h, 'You have to monitor at least one of the width, height, or position when using "sizeMe"'), s(16 <= T, "It is highly recommended that you don't put your refreshRate lower than 16 as this may cause layout thrashing."), s("throttle" === C || "debounce" === C, 'The refreshMode should have a value of "throttle" or "debounce"');
			var I = "throttle" === C ? l.throttle : l.debounce;
			return function (t) {
				var e, r = N(t),
					s = (e = o.Component, b(l, e), d(l, [{
						key: "componentDidMount",
						value: function () {
							this.detector = function (t) {
								var e = 0 < arguments.length && void 0 !== t ? t : "scroll";
								return f[e] || (f[e] = a({
									strategy: e
								})), f[e]
							}(k), this.determineStrategy(this.props), this.handleDOMNode()
						}
					}, {
						key: "componentDidUpdate",
						value: function () {
							this.determineStrategy(this.props), this.handleDOMNode()
						}
					}, {
						key: "componentWillUnmount",
						value: function () {
							this.hasSizeChanged = function () {}, this.checkIfSizeChanged = function () {}, this.uninstall()
						}
					}, {
						key: "handleDOMNode",
						value: function () {
							var t = this.element && u.findDOMNode(this.element);
							t ? this.domEl ? (this.domEl.isSameNode && !this.domEl.isSameNode(t) || this.domEl !== t) && (this.uninstall(), this.domEl = t, this.detector.listenTo(this.domEl, this.checkIfSizeChanged)) : (this.domEl = t, this.detector.listenTo(this.domEl, this.checkIfSizeChanged)) : this.uninstall()
						}
					}, {
						key: "render",
						value: function () {
							var t = P.enableSSRBehaviour || P.noPlaceholders || _ || "callback" === this.strategy,
								e = m({}, this.state);
							return o.createElement(r, m({
								explicitRef: this.refCallback,
								size: "callback" === this.strategy ? null : e,
								disablePlaceholder: t
							}, this.props))
						}
					}]), l);

				function l() {
					var t, e, r;
					p(this, l);
					for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
					return (e = r = v(this, (t = l.__proto__ || Object.getPrototypeOf(l)).call.apply(t, [this].concat(o)))).domEl = null, r.state = {
						width: void 0,
						height: void 0,
						position: void 0
					}, r.uninstall = function () {
						if (r.domEl) {
							try {
								r.detector.uninstall(r.domEl)
							} catch (t) {
								console.warn(w)
							}
							r.domEl = null
						}
					}, r.determineStrategy = function (t) {
						t.onSize ? (r.callbackState || (r.callbackState = m({}, r.state)), r.strategy = "callback") : r.strategy = "render"
					}, r.strategisedSetState = function (t) {
						"callback" === r.strategy && (r.callbackState = t, r.props.onSize(t)), r.setState(t)
					}, r.strategisedGetState = function () {
						return "callback" === r.strategy ? r.callbackState : r.state
					}, r.refCallback = function (t) {
						r.element = t
					}, r.hasSizeChanged = function (t, e) {
						var r = t,
							a = e,
							o = r.position || {},
							i = a.position || {};
						return n && r.width !== a.width || c && r.height !== a.height || h && (o.top !== i.top || o.left !== i.left || o.bottom !== i.bottom || o.right !== i.right)
					}, r.checkIfSizeChanged = I(T, (function (t) {
						var e = t.getBoundingClientRect(),
							a = e.width,
							o = e.height,
							i = e.right,
							u = e.left,
							s = e.top,
							l = e.bottom,
							g = {
								width: n ? a : null,
								height: c ? o : null,
								position: h ? {
									right: i,
									left: u,
									top: s,
									bottom: l
								} : null
							};
						r.hasSizeChanged(r.strategisedGetState(), g) && r.strategisedSetState(g)
					})), v(r, e)
				}
				return s.displayName = "SizeMe(" + E(t) + ")", s.propTypes = {
					onSize: i.func
				}, s.WrappedComponent = t, s
			}
		}
		P.enableSSRBehaviour = !1, P.noPlaceholders = !1;
		var _, A = (_ = c.Component, b(k, _), d(k, [{
			key: "componentDidUpdate",
			value: function (t) {
				var e = this.props,
					n = (e.children, e.render, y(e, ["children", "render"])),
					r = (t.children, t.render, y(t, ["children", "render"]));
				g(n, r) || this.createComponent(n)
			}
		}, {
			key: "render",
			value: function () {
				var t = this.SizeAware,
					e = this.props.children || this.props.render;
				return o.createElement(t, {
					onSize: this.onSize
				}, e({
					size: this.state.size
				}))
			}
		}]), k);

		function k(t) {
			p(this, k);
			var e = v(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this, t));
			I.call(e), t.children, t.render;
			var n = y(t, ["children", "render"]);
			return e.createComponent(n), e.state = {
				size: {
					width: void 0,
					height: void 0
				}
			}, e
		}
		A.propTypes = {
			children: i.func,
			render: i.func
		}, A.defaultProps = {
			children: void 0,
			render: void 0
		};
		var I = function () {
			var t = this;
			this.createComponent = function (e) {
				t.SizeAware = P(e)((function (t) {
					return t.children
				}))
			}, this.onSize = function (e) {
				return t.setState({
					size: e
				})
			}
		};
		P.SizeMe = A, P.withSize = P, t.exports = P
	}, function (t, e, n) {
		"use strict";
		var r = n(85).forEach,
			a = n(178),
			c = n(179),
			o = n(180),
			i = n(181),
			u = n(182),
			s = n(86),
			l = n(183),
			g = n(185),
			f = n(186),
			p = n(187);

		function d(t) {
			return Array.isArray(t) || void 0 !== t.length
		}

		function h(t) {
			if (Array.isArray(t)) return t;
			var e = [];
			return r(t, (function (t) {
				e.push(t)
			})), e
		}

		function y(t) {
			return t && 1 === t.nodeType
		}

		function m(t, e, n) {
			var r = t[e];
			return null == r && void 0 !== n ? n : r
		}
		t.exports = function (t) {
			var e;
			if ((t = t || {}).idHandler) e = {
				get: function (e) {
					return t.idHandler.get(e, !0)
				},
				set: t.idHandler.set
			};
			else {
				var n = o(),
					b = i({
						idGenerator: n,
						stateHandler: g
					});
				e = b
			}
			var v = t.reporter;
			v = v || u(!1 === v);
			var w = m(t, "batchProcessor", l({
					reporter: v
				})),
				O = {};
			O.callOnAdd = !!m(t, "callOnAdd", !0), O.debug = !!m(t, "debug", !1);
			var E, T = c(e),
				S = a({
					stateHandler: g
				}),
				C = m(t, "strategy", "object"),
				x = {
					reporter: v,
					batchProcessor: w,
					stateHandler: g,
					idHandler: e
				};
			if ("scroll" === C && (s.isLegacyOpera() ? (v.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), C = "object") : s.isIE(9) && (v.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), C = "object")), "scroll" === C) E = p(x);
			else {
				if ("object" !== C) throw new Error("Invalid strategy name: " + C);
				E = f(x)
			}
			var N = {};
			return {
				listenTo: function (t, n, a) {
					function c(t) {
						var e = T.get(t);
						r(e, (function (e) {
							e(t)
						}))
					}

					function o(t, e, n) {
						T.add(e, n), t && n(e)
					}
					if (a || (a = n, n = t, t = {}), !n) throw new Error("At least one element required.");
					if (!a) throw new Error("Listener required.");
					if (y(n)) n = [n];
					else {
						if (!d(n)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
						n = h(n)
					}
					var i = 0,
						u = m(t, "callOnAdd", O.callOnAdd),
						s = m(t, "onReady", (function () {})),
						l = m(t, "debug", O.debug);
					r(n, (function (t) {
						g.getState(t) || (g.initState(t), e.set(t));
						var f = e.get(t);
						if (l && v.log("Attaching listener to element", f, t), !S.isDetectable(t)) return l && v.log(f, "Not detectable."), S.isBusy(t) ? (l && v.log(f, "System busy making it detectable"), o(u, t, a), N[f] = N[f] || [], void N[f].push((function () {
							++i === n.length && s()
						}))) : (l && v.log(f, "Making detectable..."), S.markBusy(t, !0), E.makeDetectable({
							debug: l
						}, t, (function (t) {
							if (l && v.log(f, "onElementDetectable"), g.getState(t)) {
								S.markAsDetectable(t), S.markBusy(t, !1), E.addListener(t, c), o(u, t, a);
								var e = g.getState(t);
								if (e && e.startSize) {
									var p = t.offsetWidth,
										d = t.offsetHeight;
									e.startSize.width === p && e.startSize.height === d || c(t)
								}
								N[f] && r(N[f], (function (t) {
									t()
								}))
							} else l && v.log(f, "Element uninstalled before being detectable.");
							delete N[f], ++i === n.length && s()
						})));
						l && v.log(f, "Already detecable, adding listener."), o(u, t, a), i++
					})), i === n.length && s()
				},
				removeListener: T.removeListener,
				removeAllListeners: T.removeAllListeners,
				uninstall: function (t) {
					if (!t) return v.error("At least one element is required.");
					if (y(t)) t = [t];
					else {
						if (!d(t)) return v.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
						t = h(t)
					}
					r(t, (function (t) {
						T.removeAllListeners(t), E.uninstall(t), g.cleanState(t)
					}))
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			var e = t.stateHandler.getState;
			return {
				isDetectable: function (t) {
					var n = e(t);
					return n && !!n.isDetectable
				},
				markAsDetectable: function (t) {
					e(t).isDetectable = !0
				},
				isBusy: function (t) {
					return !!e(t).busy
				},
				markBusy: function (t, n) {
					e(t).busy = !!n
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			var e = {};

			function n(n) {
				var r = t.get(n);
				return void 0 === r ? [] : e[r] || []
			}
			return {
				get: n,
				add: function (n, r) {
					var a = t.get(n);
					e[a] || (e[a] = []), e[a].push(r)
				},
				removeListener: function (t, e) {
					for (var r = n(t), a = 0, c = r.length; a < c; ++a)
						if (r[a] === e) {
							r.splice(a, 1);
							break
						}
				},
				removeAllListeners: function (t) {
					var e = n(t);
					e && (e.length = 0)
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function () {
			var t = 1;
			return {
				generate: function () {
					return t++
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			var e = t.idGenerator,
				n = t.stateHandler.getState;
			return {
				get: function (t) {
					var e = n(t);
					return e && void 0 !== e.id ? e.id : null
				},
				set: function (t) {
					var r = n(t);
					if (!r) throw new Error("setId required the element to have a resize detection state.");
					var a = e.generate();
					return r.id = a
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			function e() {}
			var n = {
				log: e,
				warn: e,
				error: e
			};
			if (!t && window.console) {
				var r = function (t, e) {
					t[e] = function () {
						var t = console[e];
						if (t.apply) t.apply(console, arguments);
						else
							for (var n = 0; n < arguments.length; n++) t(arguments[n])
					}
				};
				r(n, "log"), r(n, "warn"), r(n, "error")
			}
			return n
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(184);

		function a() {
			var t = {},
				e = 0,
				n = 0,
				r = 0;
			return {
				add: function (a, c) {
					c || (c = a, a = 0), n < a ? n = a : a < r && (r = a), t[a] || (t[a] = []), t[a].push(c), e++
				},
				process: function () {
					for (var e = r; e <= n; e++)
						for (var a = t[e], c = 0; c < a.length; c++)(0, a[c])()
				},
				size: function () {
					return e
				}
			}
		}
		t.exports = function (t) {
			var e = (t = t || {}).reporter,
				n = r.getOption(t, "async", !0),
				c = r.getOption(t, "auto", !0);
			c && !n && (e && e.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
			var o, i = a(),
				u = !1;

			function s() {
				for (u = !0; i.size();) {
					var t = i;
					i = a(), t.process()
				}
				u = !1
			}

			function l() {
				o = function (t) {
					return setTimeout(t, 0)
				}(s)
			}
			return {
				add: function (t, e) {
					!u && c && n && 0 === i.size() && l(), i.add(t, e)
				},
				force: function (t) {
					u || (void 0 === t && (t = n), o && (function (t) {
						clearTimeout(t)
					}(o), o = null), t ? l() : s())
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		(t.exports = {}).getOption = function (t, e, n) {
			var r = t[e];
			return null != r || void 0 === n ? r : n
		}
	}, function (t, e, n) {
		"use strict";
		var r = "_erd";

		function a(t) {
			return t[r]
		}
		t.exports = {
			initState: function (t) {
				return t[r] = {}, a(t)
			},
			getState: a,
			cleanState: function (t) {
				delete t[r]
			}
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(86);
		t.exports = function (t) {
			var e = (t = t || {}).reporter,
				n = t.batchProcessor,
				a = t.stateHandler.getState;
			if (!e) throw new Error("Missing required dependency: reporter.");

			function c(t) {
				return a(t).object
			}
			return {
				makeDetectable: function (t, c, o) {
					var i, u, s, l, g, f;

					function p() {
						function t() {
							if ("static" === l.position) {
								i.style.position = "relative";
								var t = function (t, e, n, r) {
									var a = n[r];
									"auto" !== a && "0" !== a.replace(/[^-\d\.]/g, "") && (t.warn("An element that is positioned static has style." + r + "=" + a + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", e), e.style[r] = 0)
								};
								t(e, i, l, "top"), t(e, i, l, "right"), t(e, i, l, "bottom"), t(e, i, l, "left")
							}
						}
						"" !== l.position && (t(), s = !0);
						var n = document.createElement("object");
						n.style.cssText = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;", n.tabIndex = -1, n.type = "text/html", n.setAttribute("aria-hidden", "true"), n.onload = function () {
							s || t(),
								function t(e, n) {
									e.contentDocument ? n(e.contentDocument) : setTimeout((function () {
										t(e, n)
									}), 100)
								}(this, (function () {
									u(i)
								}))
						}, r.isIE() || (n.data = "about:blank"), i.appendChild(n), a(i).object = n, r.isIE() && (n.data = "about:blank")
					}
					o || (o = c, c = t, t = null), t = t || {}, r.isIE(8) ? o(c) : (i = c, u = o, s = !1, l = window.getComputedStyle(i), g = i.offsetWidth, f = i.offsetHeight, a(i).startSize = {
						width: g,
						height: f
					}, n ? n.add(p) : p())
				},
				addListener: function (t, e) {
					if (!c(t)) throw new Error("Element is not detectable by this strategy.");

					function n() {
						e(t)
					}
					r.isIE(8) ? (a(t).object = {
						proxy: n
					}, t.attachEvent("onresize", n)) : c(t).contentDocument.defaultView.addEventListener("resize", n)
				},
				uninstall: function (t) {
					r.isIE(8) ? t.detachEvent("onresize", a(t).object.proxy) : t.removeChild(c(t)), delete a(t).object
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		var r = n(85).forEach;
		t.exports = function (t) {
			var e = (t = t || {}).reporter,
				n = t.batchProcessor,
				a = t.stateHandler.getState,
				c = (t.stateHandler.hasState, t.idHandler);
			if (!n) throw new Error("Missing required dependency: batchProcessor");
			if (!e) throw new Error("Missing required dependency: reporter.");
			var o = function () {
					var t = document.createElement("div");
					t.style.cssText = "position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";
					var e = document.createElement("div");
					e.style.cssText = "position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;", e.appendChild(t), document.body.insertBefore(e, document.body.firstChild);
					var n = 500 - e.clientWidth,
						r = 500 - e.clientHeight;
					return document.body.removeChild(e), {
						width: n,
						height: r
					}
				}(),
				i = "erd_scroll_detection_container";

			function u(t, n, r) {
				if (t.addEventListener) t.addEventListener(n, r);
				else {
					if (!t.attachEvent) return e.error("[scroll] Don't know how to add event listeners.");
					t.attachEvent("on" + n, r)
				}
			}

			function s(t, n, r) {
				if (t.removeEventListener) t.removeEventListener(n, r);
				else {
					if (!t.detachEvent) return e.error("[scroll] Don't know how to remove event listeners.");
					t.detachEvent("on" + n, r)
				}
			}

			function l(t) {
				return a(t).container.childNodes[0].childNodes[0].childNodes[0]
			}

			function g(t) {
				return a(t).container.childNodes[0].childNodes[0].childNodes[1]
			}
			return function (t, e) {
				if (!document.getElementById(t)) {
					var n = e + "_animation",
						r = "/* Created by the element-resize-detector library. */\n";
					r += "." + e + " > div::-webkit-scrollbar { display: none; }\n\n", r += "." + e + "_animation_active { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + n + "; animation-name: " + n + "; }\n", r += "@-webkit-keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",
						function (e, n) {
							n = n || function (t) {
								document.head.appendChild(t)
							};
							var r = document.createElement("style");
							r.innerHTML = e, r.id = t, n(r)
						}(r += "@keyframes " + n + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")
				}
			}("erd_scroll_detection_scrollbar_style", i), {
				makeDetectable: function (t, s, f) {
					function p() {
						if (t.debug) {
							var n = Array.prototype.slice.call(arguments);
							if (n.unshift(c.get(s), "Scroll: "), e.log.apply) e.log.apply(null, n);
							else
								for (var r = 0; r < n.length; r++) e.log(n[r])
						}
					}

					function d(t) {
						var e = a(t).container.childNodes[0],
							n = window.getComputedStyle(e);
						return !n.width || -1 === n.width.indexOf("px")
					}

					function h() {
						var t = window.getComputedStyle(s),
							e = {};
						return e.position = t.position, e.width = s.offsetWidth, e.height = s.offsetHeight, e.top = t.top, e.right = t.right, e.bottom = t.bottom, e.left = t.left, e.widthCSS = t.width, e.heightCSS = t.height, e
					}

					function y() {
						if (p("storeStyle invoked."), a(s)) {
							var t = h();
							a(s).style = t
						} else p("Aborting because element has been uninstalled")
					}

					function m(t, e, n) {
						a(t).lastWidth = e, a(t).lastHeight = n
					}

					function b() {
						return 2 * o.width + 1
					}

					function v() {
						return 2 * o.height + 1
					}

					function w(t) {
						return t + 10 + b()
					}

					function O(t) {
						return t + 10 + v()
					}

					function E(t, e, n) {
						var r = l(t),
							a = g(t),
							c = w(e),
							o = O(n),
							i = function (t) {
								return 2 * t + b()
							}(e),
							u = function (t) {
								return 2 * t + v()
							}(n);
						r.scrollLeft = c, r.scrollTop = o, a.scrollLeft = i, a.scrollTop = u
					}

					function T() {
						var t = a(s).container;
						if (!t) {
							(t = document.createElement("div")).className = i, t.style.cssText = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",
								function (t) {
									t.className += " " + i + "_animation_active"
								}(a(s).container = t), s.appendChild(t);
							var e = function () {
								a(s).onRendered && a(s).onRendered()
							};
							u(t, "animationstart", e), a(s).onAnimationStart = e
						}
						return t
					}

					function S() {
						if (p("Injecting elements"), a(s)) {
							! function () {
								var t = a(s).style;
								if ("static" === t.position) {
									s.style.position = "relative";
									var n = function (t, e, n, r) {
										var a = n[r];
										"auto" !== a && "0" !== a.replace(/[^-\d\.]/g, "") && (t.warn("An element that is positioned static has style." + r + "=" + a + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + r + " will be set to 0. Element: ", e), e.style[r] = 0)
									};
									n(e, s, t, "top"), n(e, s, t, "right"), n(e, s, t, "bottom"), n(e, s, t, "left")
								}
							}();
							var t = a(s).container;
							t = t || T();
							var n, r, c, l, g = o.width,
								f = o.height,
								d = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; left: " + (n = (n = -(1 + g)) ? n + "px" : "0") + "; top: " + (r = (r = -(1 + f)) ? r + "px" : "0") + "; right: " + (l = (l = -g) ? l + "px" : "0") + "; bottom: " + (c = (c = -f) ? c + "px" : "0") + ";",
								h = document.createElement("div"),
								y = document.createElement("div"),
								m = document.createElement("div"),
								b = document.createElement("div"),
								v = document.createElement("div"),
								w = document.createElement("div");
							h.dir = "ltr", h.style.cssText = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;", h.className = i, y.className = i, y.style.cssText = d, m.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", b.style.cssText = "position: absolute; left: 0; top: 0;", v.style.cssText = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;", w.style.cssText = "position: absolute; width: 200%; height: 200%;", m.appendChild(b), v.appendChild(w), y.appendChild(m), y.appendChild(v), h.appendChild(y), t.appendChild(h), u(m, "scroll", O), u(v, "scroll", E), a(s).onExpandScroll = O, a(s).onShrinkScroll = E
						} else p("Aborting because element has been uninstalled");

						function O() {
							a(s).onExpand && a(s).onExpand()
						}

						function E() {
							a(s).onShrink && a(s).onShrink()
						}
					}

					function C() {
						function o(t, e, n) {
							var r = function (t) {
									return l(t).childNodes[0]
								}(t),
								a = w(e),
								c = O(n);
							r.style.width = a + "px", r.style.height = c + "px"
						}

						function i(r) {
							var i = s.offsetWidth,
								l = s.offsetHeight;
							p("Storing current size", i, l), m(s, i, l), n.add(0, (function () {
								if (a(s))
									if (u()) {
										if (t.debug) {
											var n = s.offsetWidth,
												r = s.offsetHeight;
											n === i && r === l || e.warn(c.get(s), "Scroll: Size changed before updating detector elements.")
										}
										o(s, i, l)
									} else p("Aborting because element container has not been initialized");
								else p("Aborting because element has been uninstalled")
							})), n.add(1, (function () {
								a(s) ? u() ? E(s, i, l) : p("Aborting because element container has not been initialized") : p("Aborting because element has been uninstalled")
							})), r && n.add(2, (function () {
								a(s) ? u() ? r() : p("Aborting because element container has not been initialized") : p("Aborting because element has been uninstalled")
							}))
						}

						function u() {
							return !!a(s).container
						}

						function f() {
							p("notifyListenersIfNeeded invoked");
							var t = a(s);
							return void 0 === a(s).lastNotifiedWidth && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height ? p("Not notifying: Size is the same as the start size, and there has been no notification yet.") : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight ? p("Not notifying: Size already notified") : (p("Current size not notified, notifying..."), t.lastNotifiedWidth = t.lastWidth, t.lastNotifiedHeight = t.lastHeight, void r(a(s).listeners, (function (t) {
								t(s)
							})))
						}

						function h() {
							if (p("Scroll detected."), d(s)) p("Scroll event fired while unrendered. Ignoring...");
							else {
								var t = s.offsetWidth,
									e = s.offsetHeight;
								t !== a(s).lastWidth || e !== a(s).lastHeight ? (p("Element size changed."), i(f)) : p("Element size has not changed (" + t + "x" + e + ").")
							}
						}
						if (p("registerListenersAndPositionElements invoked."), a(s)) {
							a(s).onRendered = function () {
								if (p("startanimation triggered."), d(s)) p("Ignoring since element is still unrendered...");
								else {
									p("Element rendered.");
									var t = l(s),
										e = g(s);
									0 !== t.scrollLeft && 0 !== t.scrollTop && 0 !== e.scrollLeft && 0 !== e.scrollTop || (p("Scrollbars out of sync. Updating detector elements..."), i(f))
								}
							}, a(s).onExpand = h, a(s).onShrink = h;
							var y = a(s).style;
							o(s, y.width, y.height)
						} else p("Aborting because element has been uninstalled")
					}

					function x() {
						if (p("finalizeDomMutation invoked."), a(s)) {
							var t = a(s).style;
							m(s, t.width, t.height), E(s, t.width, t.height)
						} else p("Aborting because element has been uninstalled")
					}

					function N() {
						f(s)
					}

					function P() {
						p("Installing..."), a(s).listeners = [],
							function () {
								var t = h();
								a(s).startSize = {
									width: t.width,
									height: t.height
								}, p("Element start size", a(s).startSize)
							}(), n.add(0, y), n.add(1, S), n.add(2, C), n.add(3, x), n.add(4, N)
					}
					var _, A;
					f || (f = s, s = t, t = null), t = t || {}, p("Making detectable..."), (A = _ = s) !== A.ownerDocument.body && !A.ownerDocument.body.contains(A) || null === window.getComputedStyle(_) ? (p("Element is detached"), T(), p("Waiting until element is attached..."), a(s).onRendered = function () {
						p("Element is now attached"), P()
					}) : P()
				},
				addListener: function (t, e) {
					if (!a(t).listeners.push) throw new Error("Cannot add listener to an element that is not detectable.");
					a(t).listeners.push(e)
				},
				uninstall: function (t) {
					var e = a(t);
					e && (e.onExpandScroll && s(l(t), "scroll", e.onExpandScroll), e.onShrinkScroll && s(g(t), "scroll", e.onShrinkScroll), e.onAnimationStart && s(e.container, "animationstart", e.onAnimationStart), e.container && t.removeChild(e.container))
				}
			}
		}
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t, e, n, r, a, c, o, i) {
			if (!t) {
				var u;
				if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var s = [n, r, a, c, o, i],
						l = 0;
					(u = new Error(e.replace(/%s/g, (function () {
						return s[l++]
					})))).name = "Invariant Violation"
				}
				throw u.framesToPop = 1, u
			}
		}
	}, function (t, e, n) {
		"use strict";

		function r(t, e, n, r) {
			var a, c = !1,
				o = 0;

			function i() {
				a && clearTimeout(a)
			}

			function u() {
				var u = this,
					s = Date.now() - o,
					l = arguments;

				function g() {
					o = Date.now(), n.apply(u, l)
				}
				c || (r && !a && g(), i(), void 0 === r && t < s ? g() : !0 !== e && (a = setTimeout(r ? function () {
					a = void 0
				} : g, void 0 === r ? t - s : t)))
			}
			return "boolean" != typeof e && (r = n, n = e, e = void 0), u.cancel = function () {
				i(), c = !0
			}, u
		}

		function a(t, e, n) {
			return void 0 === n ? r(t, e, !1) : r(t, n, !1 !== e)
		}
		n.r(e), n.d(e, "throttle", (function () {
			return r
		})), n.d(e, "debounce", (function () {
			return a
		}))
	}, function (t, e) {
		t.exports = function (t, e, n, r) {
			var a = n ? n.call(r, t, e) : void 0;
			if (void 0 !== a) return !!a;
			if (t === e) return !0;
			if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
			var c = Object.keys(t),
				o = Object.keys(e);
			if (c.length !== o.length) return !1;
			for (var i = Object.prototype.hasOwnProperty.bind(e), u = 0; u < c.length; u++) {
				var s = c[u];
				if (!i(s)) return !1;
				var l = t[s],
					g = e[s];
				if (!1 === (a = n ? n.call(r, l, g, s) : void 0) || void 0 === a && l !== g) return !1
			}
			return !0
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== i(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = o(n(192)),
			c = o(n(11));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u() {
			return (u = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function s(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function l(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function g(t) {
			return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function f(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function p(t, e) {
			return (p = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function d(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function h(t) {
			var e, n;
			return n = e = function () {
				function e() {
					var t, n;
					! function (t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o];
					return n = function (t, e) {
						return !e || "object" !== i(e) && "function" != typeof e ? f(t) : e
					}(this, (t = g(e)).call.apply(t, [this].concat(c))), d(f(n), "clickedOnce", null), d(f(n), "clickedTwice", null), d(f(n), "componentDidMount", (function () {
						window.addEventListener("keydown", n.handleKeyPress)
					})), d(f(n), "componentWillUnmount", (function () {
						window.removeEventListener("keydown", n.handleKeyPress)
					})), d(f(n), "setEventRouter", (function (t) {
						n.eventRouter = t
					})), d(f(n), "handleKeyPress", (function (t) {
						var e = n.keypressMap(t);
						e && n.handleSeqInteraction(e)
					})), d(f(n), "keypressMap", (function (t) {
						if ((0, n.props.copyEvent)(t)) return "Copy";
						var e = t.key,
							r = t.shiftKey;
						switch (e) {
							case "ArrowLeft":
							case "ArrowRight":
							case "ArrowUp":
							case "ArrowDown":
								return r ? "Shift".concat(e) : e;
							default:
								return null
						}
					})), d(f(n), "handleSeqInteraction", (function (t) {
						var e, r, a, c, o, i, u, s, l, g, f, p, d, h;
						return regeneratorRuntime.async((function (y) {
							for (;;) switch (y.prev = y.next) {
								case 0:
									e = n.props, r = e.seq, a = e.Linear, c = r.length, o = n.props.bpsPerBlock, i = void 0 === o ? Math.max(Math.floor(c / 20), 1) : o, y.t0 = t, y.next = "SelectAll" === y.t0 ? 6 : "Copy" === y.t0 ? 8 : "ArrowUp" === y.t0 ? 10 : "ArrowRight" === y.t0 ? 10 : "ArrowDown" === y.t0 ? 10 : "ArrowLeft" === y.t0 ? 10 : "ShiftArrowUp" === y.t0 ? 10 : "ShiftArrowRight" === y.t0 ? 10 : "ShiftArrowDown" === y.t0 ? 10 : "ShiftArrowLeft" === y.t0 ? 10 : 23;
									break;
								case 6:
									return n.selectAllHotkey(), y.abrupt("break", 24);
								case 8:
									return n.handleCopy(), y.abrupt("break", 24);
								case 10:
									if (u = n.props, s = u.selection, l = u.setSelection, g = s.start, f = s.end, a) return p = s.clockwise, d = f, "ArrowUp" === t || "ShiftArrowUp" === t ? d -= 1 < c / i ? i : 1 : "ArrowRight" === t || "ShiftArrowRight" === t ? d += 1 : "ArrowDown" === t || "ShiftArrowDown" === t ? d += 1 < c / i ? i : 1 : "ArrowLeft" !== t && "ShiftArrowLeft" !== t || (d -= 1), d <= -1 && (d = c + d), c + 1 <= d && (d -= c), h = Math.abs(g - f), p = 0 === h ? "ArrowRight" === t || "ShiftArrowRight" === t || "ArrowDown" === t || "ShiftArrowDown" === t : p, d === g || t.startsWith("Shift") ? t.startsWith("Shift") && l({
										start: g,
										end: d,
										clockwise: p,
										ref: ""
									}) : l({
										start: d,
										end: d,
										clockwise: !0,
										ref: ""
									}), y.abrupt("break", 24);
									y.next = 22;
									break;
								case 22:
								case 23:
									return y.abrupt("break", 24);
								case 24:
								case "end":
									return y.stop()
							}
						}))
					})), d(f(n), "handleCopy", (function () {
						var t = n.props,
							e = t.seq,
							r = t.selection,
							a = r.start,
							c = r.end,
							o = r.ref,
							i = document.activeElement,
							u = document.createElement("textarea");
						u.innerText = "ALL" === o ? e : e.substring(a, c), document.body && document.body.appendChild(u), u.select(), document.execCommand("copy"), u.remove(), i && i.focus()
					})), d(f(n), "selectAllHotkey", (function () {
						var t = n.props,
							e = t.setSelection,
							r = t.selection,
							a = t.selection.start;
						e(function (t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {};
								e % 2 ? s(Object(n), !0).forEach((function (e) {
									d(t, e, n[e])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
								}))
							}
							return t
						}({}, r, {
							start: a,
							end: a,
							clockwise: !0,
							ref: "ALL"
						}))
					})), d(f(n), "handleTripleClick", (function () {
						n.selectAllHotkey()
					})), d(f(n), "resetClicked", (0, a.default)((function () {
						n.clickedOnce = null, n.clickedTwice = null
					}), 250)), d(f(n), "handleMouseEvent", (function (t) {
						var e = n.props.mouseEvent;
						"mouseup" === t.type && (n.resetClicked(), n.clickedOnce === t.target && n.clickedTwice === t.target ? n.handleTripleClick() : n.clickedOnce === t.target && null === n.clickedTwice ? (n.clickedOnce = t.target, n.clickedTwice = t.target) : n.clickedOnce = t.target, n.resetClicked());
						var r = t.type,
							a = t.button,
							c = t.ctrlKey,
							o = "mousedown" === r && 0 === a && c;
						0 !== t.button || o || e(t)
					})), d(f(n), "handleScrollEvent", (function (t) {
						var e = n.props,
							r = e.Linear,
							a = e.seq;
						if (!r) {
							var c = a.length * (t.deltaY / 5e3);
							0 === (c = Math.floor(c)) && (c = 0 < t.deltaY ? 1 : -1);
							var o = n.context.circular + c;
							o = (o + a.length) % a.length, n.context.setCentralIndex("circular", o)
						}
					})), d(f(n), "eventRouter", void 0), n
				}
				return function (t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), e && p(t, e)
					}(e, r.PureComponent),
					function (t, e, n) {
						e && l(t.prototype, e)
					}(e, [{
						key: "render",
						value: function () {
							var e = this,
								n = this.props,
								a = n.mouseEvent,
								c = (n.selection, n.setSelection, n.centralIndex, n.setCentralIndex, function (t, e) {
									if (null == t) return {};
									var n, r, a = function (t, e) {
										if (null == t) return {};
										var n, r, a = {},
											c = Object.keys(t);
										for (r = 0; r < c.length; r++) n = c[r], 0 <= e.indexOf(n) || (a[n] = t[n]);
										return a
									}(t, e);
									if (Object.getOwnPropertySymbols) {
										var c = Object.getOwnPropertySymbols(t);
										for (r = 0; r < c.length; r++) n = c[r], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
									}
									return a
								}(n, ["mouseEvent", "selection", "setSelection", "centralIndex", "setCentralIndex"])),
								o = this.props,
								i = o.Circular,
								s = o.name,
								l = "la-vz-".concat(i ? "circular" : "linear", "-").concat(s.replace(/\s/g, ""), "-event-router");
							return r.createElement("div", {
								id: l,
								className: "la-vz-viewer-event-router",
								onKeyDown: this.handleKeyPress,
								onMouseMove: a,
								onWheel: this.handleScrollEvent,
								role: "presentation",
								ref: function (t) {
									e.eventRouter = t
								}
							}, r.createElement(t, u({}, c, {
								mouseEvent: this.handleMouseEvent
							})))
						}
					}]), e
			}(), d(e, "displayName", "EventRouter"), d(e, "contextType", c.default), n
		}
		e.default = function (t) {
			return h(t)
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = function (t, e) {
			var n, r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
			return function () {
				var a = this,
					c = arguments,
					o = r && !n;
				clearTimeout(n), n = setTimeout((function () {
					n = null, r || t.apply(a, c)
				}), e), o && t.apply(a, c)
			}
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r, a = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== i(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			c = (r = n(11)) && r.__esModule ? r : {
				default: r
			},
			o = n(8);

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u() {
			return (u = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function s(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function l(t) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function g(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function f(t, e) {
			return (f = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var p = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
				return n = function (t, e) {
						return !e || "object" !== i(e) && "function" != typeof e ? g(t) : e
					}(this, (e = l(t)).call.apply(e, [this].concat(a))),
					function (t, e, n) {
						e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					}(g(n), "hoverAnnotation", (function (t, e) {
						for (var n = document.getElementsByClassName(t), r = 0; r < n.length; r += 1) n[r].style.fillOpacity = e
					})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && f(t, e)
				}(t, a.PureComponent),
				function (t, e, n) {
					e && s(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this,
							e = this.props,
							n = e.radius,
							r = e.rowsToSkip,
							i = e.lineHeight,
							s = e.annotations,
							l = n - 3 * i - i * r,
							g = l - i,
							f = {
								strokeWidth: .5,
								shapeRendering: "geometricPrecision",
								cursor: "pointer",
								fillOpacity: .7,
								strokeLinejoin: "round"
							},
							p = {
								stroke: "transparent",
								fill: "transparent"
							},
							h = {
								cursor: "pointer"
							};
						return a.createElement(c.default.Consumer, null, (function (e) {
							var n = e.circular;
							return a.createElement("g", {
								className: "la-vz-circular-annotations"
							}, s.reduce((function (e, r, c) {
								return c && (l -= i + 3, g -= i + 3), e.concat(r.map((function (e) {
									return a.createElement(d, u({}, t.props, {
										key: "la-vz-".concat(e.id, "-annotation-circular-row"),
										id: "la-vz-".concat(e.id, "-annotation-circular-row"),
										annotation: e,
										currBRadius: l,
										currTRadius: g,
										transparentPath: p,
										labelStyle: h,
										annStyle: f,
										hoverAnnotation: t.hoverAnnotation,
										calcBorderColor: o.darkerColor,
										centralIndex: n
									}))
								})))
							}), []))
						}))
					}
				}]), t
		}();
		e.default = p;
		var d = function (t) {
			var e = t.annotation,
				n = t.seqLength,
				r = t.getRotation,
				c = t.generateArc,
				i = t.currBRadius,
				s = t.currTRadius,
				l = t.centralIndex,
				g = t.lineHeight,
				f = t.transparentPath,
				p = t.inputRef,
				d = t.calcBorderColor,
				h = t.hoverAnnotation,
				y = t.annStyle,
				m = t.inlinedAnnotations,
				b = t.labelStyle,
				v = e.end >= e.start ? e.end - e.start : n - e.start + e.end;
			v = 0 === v ? n - .1 : v;
			var w = r(e.start);
			if (i < 0 || s < 0) return null;
			var O = (v / 2 + e.start + n - l) % n,
				E = .25 * n < O && O < .75 * n,
				T = c({
					innerRadius: i,
					outerRadius: s,
					length: v,
					largeArc: n / 2 < v,
					sweepFWD: !0,
					arrowFWD: 1 === e.direction,
					arrowREV: -1 === e.direction
				}),
				S = c({
					innerRadius: E ? i : s,
					outerRadius: E ? i : s,
					length: v,
					largeArc: n / 2 < v,
					sweepFWD: !0,
					arrowFWD: !1,
					arrowREV: !1
				}),
				C = "la-vz-".concat(e.id, "-circular");
			return a.createElement("g", {
				id: "la-vz-".concat(e.id, "-annotation-circular"),
				transform: w
			}, a.createElement("path", u({
				id: C,
				d: S
			}, f)), a.createElement("path", u({
				d: T,
				id: e.id,
				className: e.id,
				ref: p(e.id, {
					ref: e.id,
					start: e.start,
					end: e.end,
					type: "ANNOTATION",
					direction: e.direction
				}),
				fill: e.color,
				stroke: o.COLOR_BORDER_MAP[e.color] || d(e.color),
				onMouseOver: function () {
					return h(e.id, 1)
				},
				onMouseOut: function () {
					return h(e.id, .7)
				},
				onFocus: function () {},
				onBlur: function () {}
			}, y)), m.includes(e.id) && a.createElement("text", {
				id: e.id,
				dy: -.4 * g,
				onMouseOver: function () {
					return h(e.id, 1)
				},
				onMouseOut: function () {
					return h(e.id, .7)
				},
				onFocus: function () {},
				onBlur: function () {}
			}, a.createElement("textPath", u({
				id: e.id,
				textAnchor: "middle",
				startOffset: E ? "25%" : "75%",
				dominantBaseline: "middle",
				xlinkHref: "#".concat(C)
			}, b), e.name)))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
			if (t && t.__esModule) return t;
			if (null === t || "object" !== a(t) && "function" != typeof t) return {
				default: t
			};
			var e = function () {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap;
				return function () {
					return t
				}, t
			}();
			if (e && e.has(t)) return e.get(t);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var c in t)
				if (Object.prototype.hasOwnProperty.call(t, c)) {
					var o = r ? Object.getOwnPropertyDescriptor(t, c) : null;
					o && (o.get || o.set) ? Object.defineProperty(n, c, o) : n[c] = t[c]
				}
			return n.default = t, e && e.set(t, n), n
		}(n(0));

		function a(t) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function c() {
			return (c = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function o(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function i(t) {
			return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function u(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function s(t, e) {
			return (s = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function l(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var g = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var o = arguments.length, s = new Array(o), g = 0; g < o; g++) s[g] = arguments[g];
				return n = function (t, e) {
					return !e || "object" !== a(e) && "function" != typeof e ? u(t) : e
				}(this, (e = i(t)).call.apply(e, [this].concat(s))), l(u(n), "calculateLinePath", (function (t, e, r) {
					var a = n.props.findCoor,
						c = a(t, e),
						o = a(t, r);
					return "M ".concat(o.x, " ").concat(o.y, "\n            L ").concat(c.x, " ").concat(c.y)
				})), l(u(n), "displayCutSite", (function (t) {
					var e = n.props,
						a = e.radius,
						o = e.lineHeight,
						i = e.seqLength,
						u = e.getRotation,
						s = e.inputRef,
						l = e.generateArc,
						g = t.id,
						f = t.start,
						p = t.fcut,
						d = t.rcut,
						h = t.end;
					h + d < f + p && (h = h < f ? h + i : h, d < p ? d += i : p += i);
					var y = Math.abs(h - f),
						m = a + o;
					i < 200 && (m += 2 * o);
					var b = l({
							innerRadius: a,
							outerRadius: m,
							length: y,
							largeArc: i / 2 < y,
							sweepFWD: !0
						}),
						v = n.calculateLinePath(p - f, a + 2 * o, a + 1.5 * o),
						w = l({
							innerRadius: a + 1.5 * o,
							outerRadius: a + 1.5 * o,
							length: Math.abs(p - d),
							largeArc: Math.abs(p - d) > i / 2,
							sweepFWD: !0,
							offset: Math.min(p, d) - f
						}),
						O = n.calculateLinePath(d - f, a + 1.5 * o, a + o / 1.2),
						E = {
							fill: "transparent",
							stroke: "black",
							strokeWidth: 1,
							shapeRendering: "auto"
						};
					return r.createElement("g", {
						id: "la-vz-circular-cutsite-".concat(g),
						key: g,
						transform: u(f)
					}, r.createElement("path", c({
						d: v
					}, E)), r.createElement("path", c({
						d: w
					}, E)), r.createElement("path", c({
						d: O
					}, E)), r.createElement("path", c({}, {
						stroke: "black",
						strokeWidth: 1,
						fill: "rgba(255, 165, 0, 0.2)",
						shapeRendering: "auto",
						cursor: "pointer",
						fillOpacity: 0
					}, {
						d: b,
						className: g,
						ref: s(g, {
							ref: g,
							start: f,
							end: h,
							type: "ENZYME"
						})
					})))
				})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && s(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && o(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props.cutSites;
						return t.length ? r.createElement("g", {
							className: "la-vz-circular-cutsites"
						}, t.map(this.displayCutSite)) : null
					}
				}]), t
		}();
		e.default = g
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
			if (t && t.__esModule) return t;
			if (null === t || "object" !== a(t) && "function" != typeof t) return {
				default: t
			};
			var e = function () {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap;
				return function () {
					return t
				}, t
			}();
			if (e && e.has(t)) return e.get(t);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var c in t)
				if (Object.prototype.hasOwnProperty.call(t, c)) {
					var o = r ? Object.getOwnPropertyDescriptor(t, c) : null;
					o && (o.get || o.set) ? Object.defineProperty(n, c, o) : n[c] = t[c]
				}
			return n.default = t, e && e.set(t, n), n
		}(n(0));

		function a(t) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function c() {
			return (c = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function o(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function i(t) {
			return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function u(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function s(t, e) {
			return (s = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var l = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
				return n = function (t, e) {
						return !e || "object" !== a(e) && "function" != typeof e ? u(t) : e
					}(this, (e = i(t)).call.apply(e, [this].concat(s))),
					function (t, e, n) {
						e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					}(u(n), "createHighlight", (function (t) {
						var e = n.props,
							a = e.radius,
							o = e.lineHeight,
							i = e.seqLength,
							u = e.getRotation,
							s = e.generateArc,
							l = e.inputRef,
							g = t.start,
							f = t.end;
						f < g && (f += i);
						var p = Math.abs(f - g),
							d = s({
								innerRadius: a - o / 2,
								outerRadius: a + o / 2,
								length: p,
								largeArc: i / 2 < p,
								sweepFWD: !0
							}),
							h = "".concat(g).concat(f).concat(t.direction).concat(t.start);
						return r.createElement("path", c({
							key: h,
							id: h,
							d: d,
							transform: u(t.start),
							ref: l(h, {
								ref: h,
								start: t.start,
								end: t.end,
								type: "FIND"
							})
						}, {
							stroke: "rgba(0, 0, 0, 0.5)",
							strokeWidth: 1,
							fill: "rgba(255, 251, 7, 0.5)",
							shapeRendering: "auto",
							cursor: "pointer"
						}))
					})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && s(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && o(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.seqLength,
							n = t.search,
							a = !(200 <= e) || n.length / e <= .02;
						return n.length ? a && r.createElement("g", {
							className: "la-vz-circular-search-results"
						}, n.map(this.createHighlight)) : null
					}
				}]), t
		}();
		e.default = l
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r, a = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== o(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			c = (r = n(11)) && r.__esModule ? r : {
				default: r
			};

		function o(t) {
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function i() {
			return (i = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function u(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function s(t) {
			return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function l(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function g(t, e) {
			return (g = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function f(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var p = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var r = arguments.length, c = new Array(r), u = 0; u < r; u++) c[u] = arguments[u];
				return n = function (t, e) {
					return !e || "object" !== o(e) && "function" != typeof e ? l(t) : e
				}(this, (e = s(t)).call.apply(e, [this].concat(c))), f(l(n), "state", {
					ticks: [],
					indexInc: 10
				}), f(l(n), "renderBasepairs", (function () {
					var t = n.props,
						e = t.seq,
						r = t.compSeq,
						c = t.seqLength,
						o = t.lineHeight,
						u = t.radius,
						s = t.findCoor,
						l = t.getRotation,
						g = n.state.indexInc,
						f = n.context.circular,
						p = e + e,
						d = r + r,
						h = f - 5 * g,
						y = f + 5 * g;
					f < c / 2 && (h += c, y += c);
					for (var m = [], b = h; b <= y; b += 1) m.push(a.createElement("text", i({
						key: "la-vz-base_".concat(b)
					}, s(0, u + 2 * o), {
						transform: l(b + .25)
					}), p.charAt(b)), a.createElement("text", i({
						key: "la-vz-base_comp_".concat(b)
					}, s(0, u + o), {
						transform: l(b + .25)
					}), d.charAt(b)));
					return m
				})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && g(t, e)
				}(t, a.PureComponent),
				function (t, e, n) {
					e && u(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.seq,
							n = t.name,
							r = t.radius,
							c = t.center,
							o = t.size,
							u = t.yDiff,
							s = t.seqLength,
							l = t.lineHeight,
							g = t.getRotation,
							f = t.generateArc,
							p = t.findCoor,
							d = t.totalRows,
							h = t.showIndex,
							y = this.state.ticks;
						if (!h) return null;
						for (var m = r - d * l, b = [], v = 0; v < n.length;) b.push(n.substring(v, v + 30).trim()), v += 30;
						var w = 14 + 20 * b.length,
							O = m < b[0].length / 2 * 12 ? {
								x: c.x,
								y: o.height - w - u
							} : {
								x: c.x,
								y: c.y - (b.length - 1) / 2 * 25
							},
							E = p(0, r),
							T = p(0, r - 10),
							S = {
								fill: "transparent",
								stroke: "#73777D",
								strokeWidth: 3
							},
							C = {
								fill: "transparent",
								stroke: "black",
								strokeWidth: 1,
								shapeRendering: "geometricPrecision"
							},
							x = {
								textAnchor: "middle",
								fontWeight: 300
							},
							N = f({
								innerRadius: r,
								outerRadius: r,
								length: s / 2,
								largeArc: !0
							});
						return a.createElement("g", {
							className: "la-vz-circular-index"
						}, a.createElement("text", {
							fontSize: 20,
							textAnchor: "middle",
							fontWeight: 500
						}, b.map((function (t, e) {
							return a.createElement("tspan", {
								key: t,
								x: O.x,
								y: O.y + 25 * e
							}, t)
						}))), a.createElement("text", i({
							x: O.x,
							y: O.y + 14 + 25 * (b.length - 1)
						}, {
							fontSize: 14,
							textAnchor: "middle",
							fill: "gray"
						}), "".concat(s, " bp")), e.length < 200 ? a.createElement("g", {
							className: "la-vz-circular-bps"
						}, this.renderBasepairs()) : null, y.map((function (t) {
							return a.createElement("g", {
								key: "la-vz-".concat(t, "_tick"),
								transform: g(t - .5)
							}, a.createElement("path", i({
								d: "M ".concat(E.x, " ").concat(E.y, "\n                L ").concat(T.x, " ").concat(T.y)
							}, C)), a.createElement("text", i({
								x: T.x,
								y: T.y + l
							}, x), t))
						})), a.createElement("g", null, a.createElement("path", i({
							d: N,
							transform: g(.75 * s)
						}, S)), a.createElement("path", i({
							d: N,
							transform: g(.25 * s)
						}, S))))
					}
				}]), t
		}();
		f(p, "contextType", c.default), f(p, "getDerivedStateFromProps", (function (t) {
			var e = t.seqLength,
				n = 0;
			p.context && (n = p.context.circular);
			for (var r = Math.floor(e / 6), a = Math.max(+r.toPrecision(2), 10); a % 10 != 0;) a += 1;
			for (var c = [], o = 0; o <= e - a / 2; o += a) c.push(0 === o ? 1 : o);
			var i = 6 * a;
			return {
				ticks: c = c.filter((function (t) {
					return Math.abs(n - t) < i || Math.abs(n + e - t) < i || Math.abs(n - e - t) < i
				})),
				indexInc: a
			}
		})), e.default = p
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r, a = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== s(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			c = n(50),
			o = (r = n(198)) && r.__esModule ? r : {
				default: r
			};

		function i(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function u(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? i(Object(n), !0).forEach((function (e) {
					h(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function s(t) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function l() {
			return (l = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function g(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function f(t) {
			return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function p(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function d(t, e) {
			return (d = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function h(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var y = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
				return n = function (t, e) {
					return !e || "object" !== s(e) && "function" != typeof e ? p(t) : e
				}(this, (e = f(t)).call.apply(e, [this].concat(a))), h(p(n), "state", {
					labelGroups: [],
					hoveredGroup: ""
				}), h(p(n), "setHoveredGroup", (function (t) {
					t !== n.state.hoveredGroup && n.setState({
						hoveredGroup: t
					})
				})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && d(t, e)
				}(t, a.Component),
				function (t, e, n) {
					e && g(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this,
							e = this.state,
							n = e.labelGroups,
							r = e.hoveredGroup,
							c = this.props,
							i = c.size,
							u = c.lineHeight,
							s = n.find((function (t) {
								return t.labels[0].id === r
							}));
						return a.createElement("g", {
							className: "la-vz-circular-labels",
							onMouseLeave: function () {
								return t.setHoveredGroup("")
							}
						}, n.map((function (e) {
							var n = function (t, e) {
									return function (t) {
										if (Array.isArray(t)) return t
									}(t) || function (t, e) {
										if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
											var n = [],
												r = !0,
												a = !1,
												c = void 0;
											try {
												for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
											} catch (t) {
												a = !0, c = t
											} finally {
												try {
													r || null == i.return || i.return()
												} finally {
													if (a) throw c
												}
											}
											return n
										}
									}(t, e) || function () {
										throw new TypeError("Invalid attempt to destructure non-iterable instance")
									}()
								}(e.labels, 1)[0],
								c = e.forkCoor || e.textCoor,
								o = a.createElement(a.Fragment, null, a.createElement("path", {
									d: "M".concat(e.lineCoor.x, " ").concat(e.lineCoor.y, " L").concat(c.x, " ").concat(c.y),
									className: "la-vz-label-line"
								}), e.forkCoor && a.createElement("path", {
									d: "M".concat(c.x, " ").concat(c.y, " L").concat(e.textCoor.x, " ").concat(e.textCoor.y),
									className: "la-vz-label-line"
								}));
							return e.grouped ? n.id === r ? null : a.createElement("g", {
								key: "".concat(n.id, "_listener"),
								id: "".concat(n.id, "-label")
							}, o, a.createElement("text", l({
								id: n.id,
								className: "la-vz-circular-label",
								textAnchor: e.textAnchor,
								onMouseEnter: function () {
									return t.setHoveredGroup(n.id)
								},
								dominantBaseline: "middle"
							}, e.textCoor), e.name)) : a.createElement("g", {
								key: n.id
							}, o, a.createElement("text", l({
								id: n.id,
								className: "la-vz-circular-label"
							}, e.textCoor, {
								textAnchor: e.textAnchor,
								dominantBaseline: "middle"
							}), e.name))
						})), s && a.createElement(o.default, {
							group: s,
							size: i,
							setHoveredGroup: this.setHoveredGroup,
							lineHeight: u
						}))
					}
				}]), t
		}();
		h(y, "getDerivedStateFromProps", (function (t, e) {
			return {
				labelGroups: y.groupOverlappingLabels(t),
				hoveredGroup: e.hoveredGroup
			}
		})), h(y, "groupOverlappingLabels", (function (t) {
			function e(t, e) {
				var n = (t.name.length + 4) * c.CHAR_WIDTH,
					r = !1,
					a = e.y + g;
				return a < 0 || a > l.height ? r = !0 : (e.x - n < 0 || e.x + n > l.width) && (r = !0), r
			}
			var n = t.radius,
				r = t.labels,
				a = t.center,
				o = t.seqLength,
				i = t.findCoor,
				s = t.lineHeight,
				l = t.size,
				g = t.yDiff,
				f = n + (200 < o ? 2 * s : 3.5 * s),
				p = r.reduce((function (t, e) {
					return t.concat(e)
				}), []).map((function (t) {
					var e;
					e = "enzyme" === t.type ? t.start : t.end > t.start ? (t.end + t.start) / 2 : (t.start - o + t.end) / 2;
					var r = i(e, n, !0),
						c = i(e, f, !0);
					return {
						label: t,
						lineCoor: r,
						textCoor: c,
						textAnchor: c.x <= a.x ? "end" : "start"
					}
				})).reduce((function (t, n) {
					var r = t.findIndex((function (t) {
						return t.textAnchor === n.textAnchor && Math.abs(t.textCoor.y - n.textCoor.y) < 15
					}));
					if (-1 < r) return t[r].labels.push(n.label), t[r].grouped = !0, t;
					var a = e(n.label, n.textCoor);
					return t.concat({
						textAnchor: n.textAnchor,
						textCoor: n.textCoor,
						lineCoor: n.lineCoor,
						labels: [n.label],
						grouped: a,
						overflow: a
					})
				}), []);
			return (p = (p = p.reduce((function (t, n, r) {
				if (!n.grouped || n.overflow || 4 < n.labels.length) return t.concat(n);
				var o = t[t.length - 1],
					i = p[r + 1];
				o && o.textAnchor !== n.textAnchor && (o = void 0), i && i.textAnchor !== n.textAnchor && (i = void 0);
				var s = n.labels.map((function (t, r) {
					var o = r * (3 * c.CHAR_WIDTH);
					"end" === n.textAnchor && (o = -o);
					var i = -15 * (n.labels.length - r);
					n.textCoor.y > a.y && (i = 15 * (n.labels.length - r));
					var s = {
							x: n.textCoor.x + o,
							y: n.textCoor.y + i
						},
						l = e(t, s);
					return u({}, n, {
						textCoor: s,
						grouped: l,
						overflow: l,
						labels: [t],
						forkCoor: n.textCoor
					})
				}));
				return s.some((function (t) {
					return [o, i].some((function (e) {
						return e && Math.abs(e.textCoor.y - t.textCoor.y) < 15
					}))
				})) ? t.concat(n) : t.concat.apply(t, function (t) {
					return function (t) {
						if (Array.isArray(t)) {
							for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
							return n
						}
					}(t) || function (t) {
						if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
					}(t) || function () {
						throw new TypeError("Invalid attempt to spread non-iterable instance")
					}()
				}(s))
			}), [])).map((function (t) {
				var e = t.labels[0].name,
					n = t.labels.length - 1;
				return t.overflow ? u({}, t, {
					name: "+".concat(1 + n)
				}) : t.grouped ? u({}, t, {
					name: "".concat(e, ",+").concat(n)
				}) : u({}, t, {
					name: e
				})
			}))).map((function (t) {
				var e = t.textCoor,
					n = e.x,
					r = e.y;
				return n = Math.max(c.CHAR_WIDTH * (t.name.length + 1), n), n = Math.min(l.width - (t.name.length + 1) * c.CHAR_WIDTH, n), r = Math.max(c.CHAR_WIDTH, r), u({}, t, {
					textCoor: {
						x: n,
						y: r = Math.min(l.height - c.CHAR_WIDTH - 13, r)
					}
				})
			}))
		})), e.default = y
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== c(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = n(50);

		function c(t) {
			return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function o() {
			return (o = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function i(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function u(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function s(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function l(t) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function g(t, e) {
			return (g = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var f = function () {
			function t() {
				return function (t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function (t, e) {
						return !e || "object" !== c(e) && "function" != typeof e ? function (t) {
							if (void 0 !== t) return t;
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
						}(t) : e
					}(this, l(t).apply(this, arguments))
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && g(t, e)
				}(t, r.Component),
				function (t, e, n) {
					e && s(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						function t(t) {
							return t.reduce((function (t, e) {
								return t + (e.name.length + 1) * a.CHAR_WIDTH
							}), 0)
						}

						function e(t) {
							return t[t.length - 1]
						}
						var n = this.props,
							c = n.group,
							s = n.setHoveredGroup,
							l = n.lineHeight,
							g = n.size,
							f = g.height,
							p = g.width,
							d = c.labels.reduce((function (n, r) {
								var c = r.name.length * a.CHAR_WIDTH;
								if (p < c) {
									var o = Math.floor(.75 * p / a.CHAR_WIDTH),
										s = new RegExp(".{1,".concat(o, "}"), "g"),
										l = r.name.match(s);
									if (l.length) return l.forEach((function (t) {
										n.push([function (t) {
											for (var e = 1; e < arguments.length; e++) {
												var n = null != arguments[e] ? arguments[e] : {};
												e % 2 ? i(Object(n), !0).forEach((function (e) {
													u(t, e, n[e])
												})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
													Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
												}))
											}
											return t
										}({}, r, {
											name: t.trim()
										})])
									})), n
								}
								return e(n) && t(e(n)) + c <= 200 ? (n[n.length - 1].push(r), n) : (n.push([r]), n)
							}), []),
							h = d.length * l,
							y = d.reduce((function (e, n, r) {
								return Math.max(e, t(n) - (r === d.length - 1 ? a.CHAR_WIDTH : 0))
							}), 0),
							m = function (t, e) {
								return function (t) {
									if (Array.isArray(t)) return t
								}(t) || function (t, e) {
									if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
										var n = [],
											r = !0,
											a = !1,
											c = void 0;
										try {
											for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
										} catch (t) {
											a = !0, c = t
										} finally {
											try {
												r || null == i.return || i.return()
											} finally {
												if (a) throw c
											}
										}
										return n
									}
								}(t, e) || function () {
									throw new TypeError("Invalid attempt to destructure non-iterable instance")
								}()
							}([h, y].map((function (t) {
								return t + 2 * a.CHAR_WIDTH
							})), 2),
							b = m[0],
							v = m[1],
							w = c.forkCoor || c.textCoor,
							O = c.forkCoor ? "M".concat(c.textCoor.x, " ").concat(c.textCoor.y, " L").concat(w.x, " ").concat(w.y) : "M".concat(c.lineCoor.x, " ").concat(c.lineCoor.y, " L").concat(w.x, " ").concat(w.y),
							E = c.textCoor,
							T = E.x,
							S = E.y;
						T = "end" === c.textAnchor ? T - (c.labels[0].name.length + 3) * a.CHAR_WIDTH : T, S -= a.CHAR_WIDTH, T = Math.max(T, 2 * a.CHAR_WIDTH), T = Math.min(T, p - 2 * a.CHAR_WIDTH - y), S = Math.max(S, 2 * a.CHAR_WIDTH);
						var C = {
								x: T,
								y: S = Math.min(S, f - 2 * a.CHAR_WIDTH - h)
							},
							x = {
								x: T - a.CHAR_WIDTH,
								y: S - a.CHAR_WIDTH - 2
							},
							N = "".concat(c.labels[0].id, "_overlay");
						return r.createElement("g", {
							key: N,
							onMouseLeave: function () {
								return s("")
							}
						}, r.createElement("path", {
							d: O,
							className: "la-vz-label-line"
						}), r.createElement("rect", o({
							fill: "white",
							stroke: "none",
							height: b,
							width: v
						}, x)), r.createElement("text", C, d.map((function (t, e) {
							return r.createElement("tspan", {
								key: "".concat(N, "_").concat(e),
								y: C.y + (e + .5) * l,
								x: C.x,
								dominantBaseline: "middle"
							}, t.map((function (n, a) {
								return r.createElement(r.Fragment, {
									key: n.id
								}, r.createElement("tspan", {
									id: n.id,
									className: "la-vz-circular-label",
									y: C.y + (e + .5) * l,
									dominantBaseline: "middle",
									tabIndex: -1
								}, n.name), a < t.length - 1 || e !== d.length - 1 ? "," : "")
							})))
						}))), r.createElement("rect", o({
							fill: "none",
							stroke: "black",
							strokeWidth: 1.5,
							height: b,
							width: v
						}, x)))
					}
				}]), t
		}();
		e.default = f
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
			if (t && t.__esModule) return t;
			if (null === t || "object" !== a(t) && "function" != typeof t) return {
				default: t
			};
			var e = function () {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap;
				return function () {
					return t
				}, t
			}();
			if (e && e.has(t)) return e.get(t);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var c in t)
				if (Object.prototype.hasOwnProperty.call(t, c)) {
					var o = r ? Object.getOwnPropertyDescriptor(t, c) : null;
					o && (o.get || o.set) ? Object.defineProperty(n, c, o) : n[c] = t[c]
				}
			return n.default = t, e && e.set(t, n), n
		}(n(0));

		function a(t) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function c() {
			return (c = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function o(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function i(t) {
			return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function u(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function s(t, e) {
			return (s = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var l = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o];
				return n = function (t, e) {
						return !e || "object" !== a(e) && "function" != typeof e ? u(t) : e
					}(this, (e = i(t)).call.apply(e, [this].concat(c))),
					function (t, e, n) {
						e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					}(u(n), "hoverPrimer", (function (t, e) {
						for (var n = document.getElementsByClassName(t), r = 0; r < n.length; r += 1) n[r].style.fillOpacity = e
					})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && s(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && o(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this,
							e = this.props,
							n = e.radius,
							a = e.rowsToSkip,
							o = e.Zoom,
							i = e.lineHeight,
							u = e.primers,
							s = e.showPrimers,
							l = n - 3 * i - i * a,
							f = l - i;
						return u.length && s ? r.createElement("g", {
							className: "la-vz-circular-primers"
						}, u.reduce((function (e, n, a) {
							return a && (l -= i + 3, f -= i + 3), e.concat(n.map((function (e) {
								return r.createElement(g, c({}, t.props, {
									key: "".concat(e.id, "-").concat(e.start),
									id: e.id,
									primer: e,
									currBRadius: l,
									currTRadius: f,
									Zoom: o,
									hoverPrimer: t.hoverPrimer
								}))
							})))
						}), [])) : null
					}
				}]), t
		}();
		e.default = l;
		var g = function (t) {
			var e = t.primer,
				n = t.seqLength,
				a = t.getRotation,
				o = t.generateArc,
				i = t.currBRadius,
				u = t.currTRadius,
				s = t.inputRef,
				l = t.hoverPrimer,
				g = {
					strokeWidth: 30 < t.Zoom ? 1 : .5,
					shapeRendering: "geometricPrecision",
					cursor: "pointer",
					fillOpacity: .2,
					strokeLinejoin: "round",
					fill: "#1b1d21",
					stroke: "#1b1d21"
				};
			if (!e.end || !e.start) return null;
			var f = e.end >= e.start ? e.end - e.start : n - e.start + e.end;
			f = 0 === f ? n - .1 : f;
			var p = a(e.start);
			if (i < 0 || u < 0) return null;
			var d = o({
				innerRadius: i,
				outerRadius: u,
				length: f,
				largeArc: n / 2 < f,
				sweepFWD: !0,
				arrowFWD: 1 === e.direction,
				arrowREV: -1 === e.direction,
				isInsert: "insert" === e.type
			});
			return r.createElement("g", {
				id: e.id,
				transform: p
			}, r.createElement("path", c({
				d: d,
				id: e.id,
				className: e.id,
				ref: s(e.id, {
					ref: e.id,
					start: e.start,
					end: e.end,
					type: "PRIMER",
					element: null
				}),
				onMouseOver: function () {
					return l(e.id, .3)
				},
				onMouseOut: function () {
					return l(e.id, .2)
				},
				onFocus: function () {},
				onBlur: function () {}
			}, g)))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== c(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var o = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = n(26);

		function c(t) {
			return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function o() {
			return (o = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function i(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function u(t) {
			return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function s(t, e) {
			return (s = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var l, g, f, p = function () {
			function t() {
				return function (t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function (t, e) {
						return !e || "object" !== c(e) && "function" != typeof e ? function (t) {
							if (void 0 !== t) return t;
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
						}(t) : e
					}(this, u(t).apply(this, arguments))
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && s(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && i(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.seq,
							n = t.radius,
							a = t.lineHeight,
							c = t.seqLength,
							i = t.getRotation,
							u = t.findCoor,
							s = t.generateArc,
							l = t.totalRows,
							g = this.context,
							f = g.ref,
							p = g.start,
							d = g.end,
							h = g.clockwise,
							y = 0;
						p === d && "ALL" === f ? y = c : d < p ? y = !1 !== h ? Math.abs(d - p + c) : -Math.abs(p - d) : p < d && (y = !1 !== h ? Math.abs(d - p) : -Math.abs(p - d + c)), Math.abs(y) === c && (y += 0 < y ? -.1 : .1);
						var m = n + a;
						e.length < 200 && (m += 2 * a);
						var b = n - a * l;
						(b < 0 || m < 0) && (b = 0, m = n);
						var v = u(0, m),
							w = u(0, b),
							O = "M ".concat(w.x, " ").concat(w.y, "\n\t\t\tL ").concat(v.x, " ").concat(v.y),
							E = !1 !== h || "ALL" === f ? 1 : 0,
							T = !1;
						!1 !== h && c / 2 < y ? T = !0 : !1 === h && Math.abs(y) > c / 2 && (T = !0);
						var S = s({
								innerRadius: b,
								outerRadius: m,
								length: y,
								largeArc: T,
								sweepFWD: E
							}),
							C = 2;
						p === d && (C = 1);
						var x = {
							fill: "transparent",
							stroke: "black",
							strokeWidth: C,
							shapeRendering: "auto"
						};
						return r.createElement("g", {
							className: "la-vz-circular-selection"
						}, y && r.createElement("path", o({
							d: S,
							transform: i(p)
						}, {
							stroke: "none",
							fill: "#DEF6FF",
							shapeRendering: "auto"
						})), r.createElement("path", o({
							d: O,
							transform: i(p)
						}, x)), y && r.createElement("path", o({
							d: O,
							transform: i(d)
						}, x)))
					}
				}]), t
		}();
		l = p, g = "contextType", f = a.SelectionContext, g in l ? Object.defineProperty(l, g, {
			value: f,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : l[g] = f, e.default = p
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== f(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = g(n(87)),
			c = g(n(17)),
			o = n(5),
			i = n(88),
			u = g(n(89)),
			s = g(n(202)),
			l = g(n(203));

		function g(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function f(t) {
			return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function p() {
			return (p = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function d(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function h(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2 ? d(Object(n), !0).forEach((function (e) {
					w(t, e, n[e])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}))
			}
			return t
		}

		function y(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function m(t) {
			return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function b(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function v(t, e) {
			return (v = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function w(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var O = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
				return n = function (t, e) {
					return !e || "object" !== f(e) && "function" != typeof e ? b(t) : e
				}(this, (e = m(t)).call.apply(e, [this].concat(a))), w(b(n), "shouldComponentUpdate", (function (t) {
					return !(0, c.default)(t, n.props)
				})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && v(t, e)
				}(t, r.Component),
				function (t, e, n) {
					e && y(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.seq,
							n = t.compSeq,
							c = t.zoom,
							u = t.showIndex,
							g = t.showComplement,
							f = t.showPrimers,
							d = t.cutSites,
							y = t.annotations,
							m = t.translations,
							b = t.lineHeight,
							v = t.elementHeight,
							w = t.bpsPerBlock,
							O = t.size,
							E = t.onUnmount,
							T = t.search,
							S = this.props.primers,
							C = (S = (0, a.default)(S, e)).filter((function (t) {
								return 1 === t.direction
							})),
							x = S.filter((function (t) {
								return -1 === t.direction
							})),
							N = 10 < c.linear,
							P = e.length,
							_ = Math.round(Math.ceil(P / w));
						_ === Number.POSITIVE_INFINITY && (_ = 1);
						for (var A, k = new Array(_), I = new Array(_), j = new Array(_), D = new Array(_), M = d.length ? (0, i.createSingleRows)(d, w, _) : new Array(_).fill([]), R = (0, i.createMultiRows)((0, i.stackElements)(((A = y).forEach((function (t) {
								0 === t.end && t.start > t.end && (t.end = P), t.start === P && t.end < t.start && (t.start = 0)
							})), A), e.length), w, _), L = f ? (0, i.createMultiRows)((0, i.stackElements)(C, e.length), w, _) : new Array(_).fill([]), q = f ? (0, i.createMultiRows)((0, i.stackElements)(x, e.length), w, _) : new Array(_).fill([]), F = T && T.length ? (0, i.createSingleRows)(T, w, _) : new Array(_).fill([]), G = m.length ? (0, i.createSingleRows)((0, o.createLinearTranslations)(m, e), w, _) : new Array(_).fill([]), B = 0; B < _; B += 1) {
							var z = B * w,
								U = z + w;
							I[B] = e.substring(z, U), j[B] = n.substring(z, U), k[B] = I[B] + String(B);
							var W = .25 * v,
								H = 1.1 * b;
							N && (H += b, H += g ? b : 0), u && (H += 25), R[B].length && (H += R[B].length * v + W), M[B].length && (H += b + W), f && L[B].length && (H += 3 * v * L[B].length), f && q[B].length && (H += 3 * v * q[B].length), G[B].length && (H += G[B].length * v + W), D[B] = H
						}
						for (var V = [], $ = 0, Y = 0; Y < _; Y += 1) {
							var K = Y * w;
							V.push(r.createElement(l.default, p({}, this.props, {
								key: k[Y],
								id: k[Y],
								y: $,
								seq: I[Y],
								compSeq: j[Y],
								blockHeight: D[Y],
								annotationRows: R[Y],
								forwardPrimerRows: L[Y],
								reversePrimerRows: q[Y],
								cutSiteRows: M[Y],
								searchRows: F[Y],
								translations: G[Y],
								firstBase: K,
								onUnmount: E,
								fullSeq: e,
								size: h({}, O),
								zoomed: N
							}))), $ += D[Y]
						}
						return V.length && r.createElement(s.default, p({}, this.props, {
							seqBlocks: V,
							blockHeights: D,
							totalHeight: D.reduce((function (t, e) {
								return t + e
							}), 0),
							size: O,
							bpsPerBlock: w
						}))
					}
				}]), t
		}();
		e.default = (0, u.default)(O)
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== i(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = o(n(11)),
			c = o(n(17));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function s(t) {
			return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function l(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function g(t, e) {
			return (g = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function f(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var p = function () {
			function t(e) {
				var n;
				return function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t), n = function (t, e) {
					return !e || "object" !== i(e) && "function" != typeof e ? l(t) : e
				}(this, s(t).call(this, e)), f(l(n), "scroller", void 0), f(l(n), "insideDOM", void 0), f(l(n), "timeoutID", void 0), f(l(n), "componentDidMount", (function () {
					n.handleScrollOrResize(), window.addEventListener("resize", n.handleScrollOrResize)
				})), f(l(n), "componentDidUpdate", (function (t, e, r) {
					if (n.scroller) {
						var a = n.props,
							o = a.seqBlocks,
							i = a.size,
							u = n.state,
							s = u.centralIndex,
							l = u.visibleBlocks;
						n.context && s !== n.context.linear ? n.scrollToCentralIndex() : (0, c.default)(t.size, i) && o.length === t.seqBlocks.length ? (0, c.default)(e.visibleBlocks, l) && n.restoreSnapshot(r) : n.handleScrollOrResize()
					}
				})), f(l(n), "componentWillUnmount", (function () {
					window.removeEventListener("resize", n.handleScrollOrResize)
				})), f(l(n), "getSnapshotBeforeUpdate", (function (t) {
					for (var e = n.scroller ? n.scroller.current.scrollTop : 0, r = t.blockHeights, a = 0, c = 0;
						(c += r[a]) + r[a += 1] < e && a < r.length;);
					return {
						blockY: e - c,
						blockIndex: a
					}
				})), f(l(n), "scrollToCentralIndex", (function () {
					var t = n.props,
						e = t.seqBlocks,
						r = t.blockHeights,
						a = t.bpsPerBlock,
						o = t.totalHeight,
						i = t.size.height,
						u = n.state.visibleBlocks,
						s = n.scroller.current,
						l = s.clientHeight,
						g = s.scrollHeight,
						f = n.context.linear,
						p = e.findIndex((function (t) {
							return t.props.firstBase <= f && t.props.firstBase + a >= f
						})),
						d = [];
					if (g <= l) d = u;
					else if (-1 < p) {
						var h = e[p],
							y = 0 < p ? r[p - 1] : 0,
							m = h.props.y - y,
							b = m + i;
						o < b && (m = (b = o) - i), r.reduce((function (t, e, n) {
							return m <= t && t <= b && d.push(n), t + e
						}), 0), n.scroller.current.scrollTop = h.props.y - r[0] / 2
					}(0, c.default)(d, u) || n.setState({
						visibleBlocks: d,
						centralIndex: f
					})
				})), f(l(n), "restoreSnapshot", (function (t) {
					var e = n.props.blockHeights,
						r = t.blockIndex,
						a = t.blockY,
						c = e.slice(0, r).reduce((function (t, e) {
							return t + e
						}), 0) + a;
					n.scroller.current.scrollTop = c
				})), f(l(n), "handleScrollOrResize", (function () {
					var t = n.props,
						e = t.blockHeights,
						r = t.size.height,
						a = t.totalHeight,
						o = n.state.visibleBlocks,
						i = [],
						u = 0;
					if (n.scroller && n.insideDOM) {
						var s = n.scroller.current.getBoundingClientRect().top,
							l = n.insideDOM.current.getBoundingClientRect().top;
						u = l - s
					}
					u = 35 - u, u = Math.max(0, u);
					var g = (u = Math.min(a - r, u)) + r;
					u -= 2 * e[0], e.reduce((function (t, e, n) {
						return u <= t && t <= g && i.push(n), t + e
					}), 0), (0, c.default)(i, o) || n.setState({
						visibleBlocks: i
					})
				})), f(l(n), "incrementScroller", (function (t) {
					n.stopIncrementingScroller(), n.timeoutID = setTimeout((function () {
						n.scroller.current.scrollTop += t, n.incrementScroller(t)
					}), 5)
				})), f(l(n), "stopIncrementingScroller", (function () {
					n.timeoutID && (clearTimeout(n.timeoutID), n.timeoutID = null)
				})), f(l(n), "handleMouseOver", (function (t) {
					if (1 === t.buttons) {
						var e = n.scroller.current.getBoundingClientRect(),
							r = (t.clientY - e.top) / e.height;
						if (.9 < r) {
							var a = (r = Math.min(1, r)) - .9,
								c = 15 * (a *= 10);
							n.incrementScroller(c)
						} else if (r < .1) {
							var o = 10 * (r = .1 - Math.max(0, r)) * -15;
							n.incrementScroller(o)
						} else n.stopIncrementingScroller()
					} else n.timeoutID && n.stopIncrementingScroller()
				})), n.state = {
					visibleBlocks: new Array(Math.min(5, e.seqBlocks.length)).fill(null).map((function (t, e) {
						return e
					})),
					centralIndex: 0
				}, n.scroller = r.createRef(), n.insideDOM = r.createRef(), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && g(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && u(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.seqBlocks,
							n = t.blockHeights,
							a = t.totalHeight,
							c = t.size.width,
							o = this.state.visibleBlocks,
							i = function (t, e) {
								return function (t) {
									if (Array.isArray(t)) return t
								}(t) || function (t, e) {
									if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
										var n = [],
											r = !0,
											a = !1,
											c = void 0;
										try {
											for (var o, i = t[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
										} catch (t) {
											a = !0, c = t
										} finally {
											try {
												r || null == i.return || i.return()
											} finally {
												if (a) throw c
											}
										}
										return n
									}
								}(t, e) || function () {
									throw new TypeError("Invalid attempt to destructure non-iterable instance")
								}()
							}(o, 1)[0],
							u = n.slice(0, i).reduce((function (t, e) {
								return t + e
							}), 0);
						return r.createElement("div", {
							className: "la-vz-linear-scroller",
							ref: this.scroller,
							onScroll: this.handleScrollOrResize,
							onMouseOver: this.handleMouseOver,
							onFocus: function () {}
						}, r.createElement("div", {
							className: "la-vz-seqblock-container",
							style: {
								height: a
							},
							ref: this.insideDOM
						}, r.createElement("div", {
							style: {
								width: c || 0,
								height: u
							}
						}), o.map((function (t) {
							return e[t]
						}))))
					}
				}]), t
		}();
		f(p, "contextType", a.default), e.default = p
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== f(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = g(n(204)),
			c = g(n(205)),
			o = g(n(206)),
			i = g(n(207)),
			u = g(n(208)),
			s = g(n(209)),
			l = g(n(210));

		function g(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function f(t) {
			return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function p() {
			return (p = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function d(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function h(t) {
			return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function y(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function m(t, e) {
			return (m = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}

		function b(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var v = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o];
				return n = function (t, e) {
					return !e || "object" !== f(e) && "function" != typeof e ? y(t) : e
				}(this, (e = h(t)).call.apply(e, [this].concat(c))), b(y(n), "componentWillUnmount", (function () {
					var t = n.props;
					(0, t.onUnmount)(t.id)
				})), b(y(n), "findXAndWidth", (function () {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
						e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
						r = n.props,
						a = r.fullSeq.length,
						c = r.firstBase,
						o = r.size,
						i = r.bpsPerBlock,
						u = Math.min(c + i, a),
						s = i <= a,
						l = 0;
					c <= t && (l = (t - c) / i * o.width, l = Math.max(l, 0) || 0);
					var g = o.width;
					if (t === e) g = 0;
					else if (c <= t || e < u) {
						var f = Math.max(t, c),
							p = Math.min(e, u);
						g = o.width * ((p - f) / i), g = Math.abs(g) || 0
					} else a < c + i && s && (g = o.width * (a % i / i));
					return {
						x: l,
						width: g
					}
				})), b(y(n), "seqTextSpan", (function (t, e) {
					var a = n.props,
						c = a.id,
						o = a.charWidth,
						i = n.bpColorLookup(t);
					return i ? r.createElement("tspan", {
						key: e + t + c,
						fill: i,
						x: o * e
					}, t) : r.createElement("tspan", {
						key: e + t + c,
						x: o * e
					}, t)
				})), b(y(n), "bpColorLookup", (function (t) {
					var e = n.props.bpColors;
					return e[t] || e[t.toUpperCase()] || e[t.toLowerCase()] || null
				})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && m(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && d(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this,
							e = this.props,
							n = e.seq,
							g = e.compSeq,
							f = e.fullSeq,
							d = e.annotationRows,
							h = e.forwardPrimerRows,
							y = e.reversePrimerRows,
							m = e.cutSiteRows,
							b = e.searchRows,
							v = e.translations,
							w = e.blockHeight,
							O = e.showIndex,
							E = e.showComplement,
							T = e.showPrimers,
							S = e.selection,
							C = e.seqFontSize,
							x = e.firstBase,
							N = e.size,
							P = e.lineHeight,
							_ = e.elementHeight,
							A = e.mouseEvent,
							k = e.inputRef,
							I = e.id,
							j = e.onUnmount,
							D = e.charWidth,
							M = e.zoomed;
						if (!N.width || !N.height) return null;
						var R = {
								display: "block",
								height: w,
								width: N.width
							},
							L = {
								dominantBaseline: "middle",
								fontSize: C,
								lengthAdjust: "spacing",
								textAnchor: "start",
								textLength: N.width,
								textRendering: "optimizeLegibility"
							},
							q = x + n.length,
							F = {
								ref: I,
								start: x,
								end: q,
								type: "SEQ",
								element: this
							},
							G = T && h.length ? 3 * _ * h.length : 0,
							B = M && m.length ? _ / 2 + G : G,
							z = M && m.length ? _ : 0,
							U = B + z,
							W = M ? P : 0,
							H = U + W,
							V = M && E ? P : 0,
							$ = H + V,
							Y = T && y.length ? 3 * _ * y.length : 0,
							K = $ + Y,
							X = _ * v.length;
						v.length && (K += .25 * _);
						var Q = K + X,
							Z = _ * d.length,
							J = G + W + V + X + Z + z + B + Y,
							tt = O ? J + 13 : J;
						v.length && (J += .25 * _), !M && J <= _ && (J += P, tt += P);
						var et = Q + Z;
						d.length && (et += .5 * _, J += .5 * _, tt += .25 * _);
						var nt = E ? b : b.filter((function (t) {
							return 1 === t.direction
						}));
						return r.createElement("svg", p({}, R, {
							className: "la-vz-seqblock",
							id: I,
							ref: k(I, F),
							onMouseDown: A,
							onMouseUp: A,
							onMouseMove: A,
							cursor: "text"
						}), r.createElement("g", {
							transform: "translate(0, 10)"
						}, r.createElement(s.default.Block, {
							selection: S,
							selectHeight: J,
							findXAndWidth: this.findXAndWidth,
							inputRef: k,
							onUnmount: j,
							firstBase: x,
							lastBase: q,
							fullSeq: f
						}), r.createElement(s.default.Edges, {
							lastBase: q,
							findXAndWidth: this.findXAndWidth,
							firstBase: x,
							fullSeq: f,
							inputRef: k,
							onUnmount: j,
							selection: S,
							selectEdgeHeight: tt
						}), r.createElement(i.default, p({}, this.props, {
							filteredRows: nt,
							findXAndWidth: this.findXAndWidth,
							indexYDiff: U,
							compYDiff: H,
							seqBlockRef: this,
							lastBase: q
						})), r.createElement(a.default, p({}, this.props, {
							findXAndWidth: this.findXAndWidth,
							lastBase: q,
							yDiff: Q,
							seqBlockRef: this,
							fullSeq: f
						})), T && r.createElement(u.default, p({}, this.props, {
							findXAndWidth: this.findXAndWidth,
							firstBase: x,
							lastBase: q,
							yDiff: 0,
							direction: 1,
							seqBlockRef: this,
							fullSeq: f,
							charWidth: D,
							fontSize: C,
							zoomed: M
						})), T && r.createElement(u.default, p({}, this.props, {
							findXAndWidth: this.findXAndWidth,
							firstBase: x,
							lastBase: q,
							yDiff: $,
							direction: -1,
							seqBlockRef: this,
							fullSeq: f,
							charWidth: D,
							fontSize: C,
							zoomed: M
						})), O && r.createElement(o.default, p({}, this.props, {
							firstBase: x,
							lastBase: q,
							transform: "translate(0, ".concat(et, ")"),
							findXAndWidth: this.findXAndWidth
						})), M ? r.createElement(c.default, p({}, this.props, {
							findXAndWidth: this.findXAndWidth,
							lastBase: q,
							yDiff: B
						})) : null, M ? r.createElement("text", p({}, L, {
							y: U,
							id: I
						}), n.split("").map((function (e, n) {
							return t.seqTextSpan(e, n)
						}))) : null, g && M && E ? r.createElement("text", p({}, L, {
							y: H,
							id: I
						}), g.split("").map((function (e, n) {
							return t.seqTextSpan(e, n)
						}))) : null, r.createElement(l.default, p({}, this.props, {
							yDiff: K,
							seqBlockRef: this,
							firstBase: x,
							lastBase: q,
							findXAndWidth: this.findXAndWidth
						})), r.createElement(i.default, p({}, this.props, {
							filteredRows: nt,
							findXAndWidth: this.findXAndWidth,
							indexYDiff: U,
							compYDiff: H,
							seqBlockRef: this,
							lastBase: q,
							listenerOnly: !0
						}))))
					}
				}]), t
		}();
		b(v, "defaultProps", {}), e.default = v
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== i(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			a = n(8);

		function c() {
			return (c = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function o(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function s(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function l(t, e, n) {
			return e && s(t.prototype, e), n && s(t, n), t
		}

		function g(t, e) {
			return !e || "object" !== i(e) && "function" != typeof e ? f(t) : e
		}

		function f(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function p(t) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function d(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && function (t, e) {
				(Object.setPrototypeOf || function (t, e) {
					return t.__proto__ = e, t
				})(t, e)
			}(t, e)
		}
		var h = function () {
			function t() {
				return u(this, t), g(this, p(t).apply(this, arguments))
			}
			return d(t, r.PureComponent), l(t, [{
				key: "render",
				value: function () {
					var t = this.props,
						e = t.annotationRows,
						n = t.yDiff,
						a = t.findXAndWidth,
						c = t.inputRef,
						o = t.seqBlockRef,
						i = t.onUnmount,
						u = t.firstBase,
						s = t.lastBase,
						l = t.fullSeq,
						g = t.elementHeight;
					return r.createElement("g", {
						className: "la-vz-linear-annotations"
					}, e.map((function (t, e) {
						var f = n + g * e;
						return r.createElement(y, {
							key: "ann-row-".concat(f).concat(u).concat(s),
							annotations: t,
							y: f,
							height: g,
							inputRef: c,
							seqBlockRef: o,
							onUnmount: i,
							findXAndWidth: a,
							firstBase: u,
							lastBase: s,
							fullSeq: l
						})
					})))
				}
			}]), t
		}();
		e.default = h;
		var y = function () {
			function t() {
				var e, n;
				u(this, t);
				for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
				return o(f(n = g(this, (e = p(t)).call.apply(e, [this].concat(s)))), "hoverOtherAnnotationRows", (function (t, e) {
					for (var n = document.getElementsByClassName(t), r = 0; r < n.length; r += 1) n[r].style.fillOpacity = e
				})), o(f(n), "renderAnnotation", (function (t, e) {
					var o = n.props,
						i = o.inputRef,
						u = o.seqBlockRef,
						s = o.findXAndWidth,
						l = o.firstBase,
						g = o.lastBase,
						f = o.annotations,
						p = o.fullSeq,
						d = o.bpsPerBlock,
						h = t.color,
						y = t.name,
						m = t.direction,
						b = t.start,
						v = t.end,
						w = 1 === m,
						O = -1 === m,
						E = s(b, v),
						T = E.x,
						S = E.width,
						C = v < b && v < l,
						x = w && l < v && v <= g,
						N = O && l <= b && b <= g,
						P = b < l,
						_ = g < v || b === v && p.length > d;
					if (1 < f.reduce((function (e, n) {
							return n.id === t.id ? e + 1 : e
						}), 0))
						if (f.findIndex((function (e) {
								return e.id === t.id
							})) === e) {
							var A = s(l, v);
							T = A.x, S = A.width, _ = !(P = !0)
						} else {
							var k = s(b, g);
							T = k.x, S = k.width, _ = !(P = !1)
						}
					else if (v < b) {
						var I = s(g < b ? l : Math.max(l, b), v < l ? g : Math.min(g, v));
						T = I.x, S = I.width, l < b && (P = !0, _ = g < v), v < l && (P = b < l, _ = !0)
					} else if (b === v) {
						var j = s(b, v + p.length);
						T = j.x, S = j.width
					}
					var D, M, R = .8 * n.props.height,
						L = {
							dominantBaseline: "middle",
							cursor: "pointer",
							textAnchor: "middle",
							textRendering: "optimizeLegibility",
							x: S / 2,
							y: R / 2 + 1.4,
							style: {
								color: "black",
								fontWeight: 400
							}
						},
						q = R / 4,
						F = T,
						G = S,
						B = N ? "M ".concat(8, " 0") : "M 0 0",
						z = "L ".concat(x ? S - 8 : S, " 0");
					if ("insert" === t.type) D = "".concat(B, " ").concat(z);
					else {
						var U = "L ".concat(S, " ").concat(R);
						_ && 8 < S || C ? U = "\n\t\t\t\tL ".concat(S - 4, " ").concat(q, "\n\t\t\t\tL ").concat(S, " ").concat(2 * q, "\n\t\t\t\tL ").concat(S - 4, " ").concat(3 * q, "\n        L ").concat(S, " ").concat(4 * q) : x && (U = "\n\t\t\t\tL ".concat(S, " ").concat(R / 2, "\n\t\t\t\tL ").concat(S - Math.min(8, G), " ").concat(R));
						var W = "L 0 ".concat(R, " L 0 0");
						P && 8 < S ? W = "\n\t\t\t\tL 0 ".concat(R, "\n\t\t\t\tL ").concat(4, " ").concat(3 * q, "\n\t\t\t\tL 0 ").concat(2 * q, "\n\t\t\t\tL ").concat(4, " ").concat(q, "\n\t\t\t\tL 0 0") : N && (W = "\n\t\t\t\tL ".concat(Math.min(8, G), " ").concat(R, "\n\t\t\t\tL 0 ").concat(R / 2, "\n\t\t\t\tL ").concat(Math.min(8, G), " 0")), D = "".concat(B, " ").concat(z, " ").concat(U, " ").concat(W)
					}
					w && _ || w && C ? 14 < g - b && (D += "\n      M ".concat(S - 12, " ").concat(q, "\n      L ").concat(S - 8, " ").concat(2 * q, "\n      L ").concat(S - 12, " ").concat(3 * q, "\n      M ").concat(S - 16, " ").concat(q, "\n      L ").concat(S - 12, " ").concat(2 * q, "\n      L ").concat(S - 16, " ").concat(3 * q)) : (O && P || O && C) && 14 < v - l && (D += "\n      M ".concat(12, " ").concat(3 * q, "\n      L ").concat(8, " ").concat(2 * q, "\n      L ").concat(12, " ").concat(q, "\n      M ").concat(16, " ").concat(3 * q, "\n      L ").concat(12, " ").concat(2 * q, "\n      L ").concat(16, " ").concat(q)), M = "insert" === t.type ? h : a.COLOR_BORDER_MAP[h] || (0, a.darkerColor)(h);
					var H = r.createElement("path", c({
							id: t.id,
							ref: i(t.id, {
								ref: t.id,
								start: b,
								end: v,
								type: "ANNOTATION",
								element: u
							}),
							className: t.id,
							style: {
								fillOpacity: .7,
								cursor: "pointer",
								fill: h,
								stroke: M,
								strokeWidth: "insert" === t.type ? 2.4 : .5
							}
						}, {
							shapeRendering: "geometricPrecision"
						}, {
							d: D,
							onMouseOver: function () {
								return n.hoverOtherAnnotationRows(t.id, 1)
							},
							onMouseOut: function () {
								return n.hoverOtherAnnotationRows(t.id, .7)
							},
							onFocus: function () {
								return 0
							},
							onBlur: function () {
								return 0
							}
						})),
						V = 6.75 * y.length < S - 15;
					return r.createElement("g", {
						key: "".concat(t.id, "-").concat(l),
						id: t.id,
						transform: "translate(".concat(F, ", 0)")
					}, H, ",", V ? r.createElement("text", c({
						fontSize: 11
					}, L, {
						id: t.id,
						onMouseOver: function () {
							return n.hoverOtherAnnotationRows(t.id, 1)
						},
						onMouseOut: function () {
							return n.hoverOtherAnnotationRows(t.id, .7)
						},
						onFocus: function () {},
						onBlur: function () {}
					}), y) : null)
				})), n
			}
			return d(t, r.PureComponent), l(t, [{
				key: "render",
				value: function () {
					var t = this.props,
						e = t.annotations,
						n = t.width,
						a = t.y,
						o = {
							width: n,
							height: .8 * this.props.height
						},
						i = "translate(0, ".concat(a - 5, ")");
					return r.createElement("g", c({}, o, {
						transform: i,
						className: "la-vz-linear-annotation-row"
					}), e.map(this.renderAnnotation))
				}
			}]), t
		}()
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function (t) {
			if (t && t.__esModule) return t;
			if (null === t || "object" !== r(t) && "function" != typeof t) return {
				default: t
			};
			var e = function () {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap;
				return function () {
					return t
				}, t
			}();
			if (e && e.has(t)) return e.get(t);
			var n = {},
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var c in t)
				if (Object.prototype.hasOwnProperty.call(t, c)) {
					var o = a ? Object.getOwnPropertyDescriptor(t, c) : null;
					o && (o.get || o.set) ? Object.defineProperty(n, c, o) : n[c] = t[c]
				}
			return n.default = t, e && e.set(t, n), n
		}(n(0));

		function c() {
			return (c = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function o(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(t);
				e && (r = r.filter((function (e) {
					return Object.getOwnPropertyDescriptor(t, e).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function u(t, e) {
			for (var n = 1 < arguments.length && void 0 !== e && e, r = document.getElementsByClassName("".concat(t, "-name")), a = 0; a < r.length; a += 1) r[a].style.fillOpacity = n ? 1 : .8;
			r = document.getElementsByClassName(t);
			for (var c = 0; c < r.length; c += 1) r[c].style.fillOpacity = n ? .5 : 0
		}
		e.default = function (t) {
			var e = t.zoom.linear,
				n = t.cutSiteRows,
				r = t.findXAndWidth,
				s = t.lineHeight,
				l = t.enzymes,
				g = t.firstBase,
				f = t.lastBase,
				p = t.inputRef,
				d = t.yDiff;
			if (l.length < 1) return null;
			var h = n.map((function (t) {
				var e = r(t.fcut, t.fcut).x,
					n = r(t.rcut, t.rcut).x,
					a = r(t.recogStart, t.recogEnd),
					c = a.x,
					u = a.width;
				if (function (t, e, n, r) {
						return t < n && e < n || r < t && r < e || (t <= e ? e < r && n < t : t < r && n < e)
					}(t.recogStart, t.recogEnd, g, f))
					if (t.recogStart > t.recogEnd) {
						var s = r(t.recogEnd < g ? f : Math.min(f, t.recogEnd), t.recogStart > f ? g : Math.max(g, t.recogStart));
						c = s.x, u = s.width
					} else if (t.recogEnd > t.recogStart) {
					var l = r(t.recogStart < g ? f : Math.min(f, t.recogStart), t.recogEnd > f ? g : Math.max(g, t.recogEnd));
					c = l.x, u = l.width
				}
				return function (t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? o(Object(n), !0).forEach((function (e) {
							i(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}({}, t, {
					cutX: e,
					hangX: n,
					highlightX: c,
					highlightWidth: u
				})
			}));
			if (!h.length) return null;
			var y = {
				dominantBaseline: "inherit",
				textAnchor: "start",
				y: d
			};
			return a.createElement("g", {
				className: "la-vz-cut-sites"
			}, h.map((function (t) {
				var n = t.fcut >= g && t.fcut < f,
					o = t.rcut >= g && t.rcut < f,
					i = n || o,
					l = function (t, e, n) {
						return e && n ? {
							x: Math.min(t.cutX, t.hangX),
							width: Math.abs(t.hangX - t.cutX)
						} : e ? t.start + t.cutX > t.end + t.hangX ? r(g, t.fcut) : t.fcut > t.rcut ? r(g, t.fcut) : r(t.fcut, f) : n ? t.start + t.cutX > t.end + t.hangX ? r(t.rcut, f) : t.fcut > t.rcut ? r(t.rcut, f) : r(g, t.rcut) : {
							x: 0,
							width: 0
						}
					}(t, n, o),
					h = l.x,
					m = l.width;
				return a.createElement(a.Fragment, {
					key: "la-vz-".concat(t.id, "-first-base")
				}, n ? a.createElement("text", c({}, y, {
					id: t.id,
					className: "la-vz-cut-site-text ".concat(t.id, "-name"),
					x: t.cutX,
					style: {
						cursor: "pointer",
						fill: "rgb(51, 51, 51)",
						fillOpacity: .8
					},
					onMouseOver: function () {
						return u(t.id, !0)
					},
					onMouseOut: function () {
						return u(t.id, !1)
					},
					onFocus: function () {
						return 0
					},
					onBlur: function () {
						return 0
					}
				}), t.name) : null, 10 < e && a.createElement("rect", {
					width: t.highlightWidth,
					height: 2 * s,
					x: t.highlightX,
					y: d + 6,
					strokeDasharray: "4,5",
					style: {
						stroke: "rgb(150,150,150)",
						strokeWidth: 1,
						fill: "rgb(255, 165, 0, 0.3)",
						fillOpacity: 0
					},
					className: t.id,
					ref: p(t.id, {
						id: t.id,
						start: t.start,
						end: t.end,
						type: "ENZYME",
						element: null
					})
				}), n ? a.createElement("rect", {
					width: "1px",
					height: s,
					x: t.cutX - .5,
					y: s / 4 + d
				}) : null, i && 10 < e ? a.createElement("rect", {
					width: m,
					height: "1px",
					x: h - .5,
					y: 1.25 * s + d
				}) : null, o && 10 < e ? a.createElement("rect", {
					width: "1px",
					height: s + 1.5,
					x: t.hangX - .5,
					y: 1.25 * s + d
				}) : null)
			})))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r = function (t) {
			if (t && t.__esModule) return t;
			if (null === t || "object" !== a(t) && "function" != typeof t) return {
				default: t
			};
			var e = function () {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap;
				return function () {
					return t
				}, t
			}();
			if (e && e.has(t)) return e.get(t);
			var n = {},
				r = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var c in t)
				if (Object.prototype.hasOwnProperty.call(t, c)) {
					var o = r ? Object.getOwnPropertyDescriptor(t, c) : null;
					o && (o.get || o.set) ? Object.defineProperty(n, c, o) : n[c] = t[c]
				}
			return n.default = t, e && e.set(t, n), n
		}(n(0));

		function a(t) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function c(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function o(t) {
			return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function i(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function u(t, e) {
			return (u = Object.setPrototypeOf || function (t, e) {
				return t.__proto__ = e, t
			})(t, e)
		}
		var s = function () {
			function t() {
				var e, n;
				! function (t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t);
				for (var c = arguments.length, u = new Array(c), s = 0; s < c; s++) u[s] = arguments[s];
				return n = function (t, e) {
						return !e || "object" !== a(e) && "function" != typeof e ? i(t) : e
					}(this, (e = o(t)).call.apply(e, [this].concat(u))),
					function (t, e, n) {
						e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					}(i(n), "genTicks", (function () {
						var t = n.props,
							e = t.seq,
							a = t.zoom,
							c = t.firstBase,
							o = t.lineHeight,
							i = t.size,
							u = t.findXAndWidth,
							s = e.length,
							l = 0;
						switch (!0) {
							case 85 < a.linear:
								l = 5;
								break;
							case 40 < a.linear:
								l = 10;
								break;
							case 10 < a.linear:
								l = 20;
								break;
							case 0 <= a.linear:
								l = 50;
								break;
							default:
								l = 10
						}
						var g = [];
						0 === c && g.push(1);
						for (var f = 0;
							(f + c) % l != 0;) f += 1;
						for (; f < s;) f + c !== 0 && g.push(f + c), f += l;
						var p = {
								width: 1,
								height: 8
							},
							d = {
								fontSize: 11,
								textRendering: "optimizeLegibility"
							};
						return g.map((function (t) {
							var e = u(t - .5, t - .5).x,
								n = e,
								a = e,
								c = Math.ceil(Math.log10(t + 1)),
								s = 10 * c;
							c -= 1, a -= 10 * (c /= 2), a = Math.max(0, a), a = Math.min(i.width - s / 2, a);
							var l = "translate(".concat(n, ", -").concat(.3 * o - 1, ")"),
								g = "translate(".concat(a, ", ").concat(-.3 * o + 22, ")");
							return r.createElement(r.Fragment, {
								key: t
							}, r.createElement("rect", {
								style: p,
								fill: "#A3A3A3",
								transform: l
							}), r.createElement("text", {
								style: d,
								transform: g
							}, t))
						}))
					})), n
			}
			return function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), e && u(t, e)
				}(t, r.PureComponent),
				function (t, e, n) {
					e && c(t.prototype, e)
				}(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.lineHeight,
							n = t.transform,
							a = t.showIndex,
							c = (0, t.findXAndWidth)(t.firstBase, t.lastBase).width;
						if (!a) return null;
						var o = {
							width: c,
							height: 1,
							shapeRendering: "crispEdges"
						};
						return r.createElement("g", {
							className: "la-vz-linear-index",
							transform: n
						}, r.createElement("rect", {
							style: o,
							fill: "#B0B9C2",
							transform: "translate(0, -".concat(.3 * e, ")")
						}), this.genTicks())
					}
				}]), t
		}();
		e.default = s
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, c = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== r(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var c in t)
					if (Object.prototype.hasOwnProperty.call(t, c)) {
						var o = a ? Object.getOwnPropertyDescriptor(t, c) : null;
						o && (o.get || o.set) ? Object.defineProperty(n, c, o) : n[c] = t[c]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			o = (a = n(6)) && a.__esModule ? a : {
				default: a
			};

		function i() {
			return (i = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}
		e.default = function (t) {
			var e = t.filteredRows,
				n = t.findXAndWidth,
				r = t.indexYDiff,
				a = t.compYDiff,
				u = t.seqBlockRef,
				s = t.inputRef,
				l = t.firstBase,
				g = t.lastBase,
				f = t.listenerOnly,
				p = void 0 !== f && f;
			if (!e.length) return null;
			var d = {
				height: 18,
				stroke: p ? "none" : "rgba(0, 0, 0, 0.5)",
				cursor: "pointer",
				strokeWidth: 1,
				style: {
					fill: p ? "transparent" : "rgba(255, 251, 7, 0.5)"
				}
			};
			return e.map((function (t) {
				var e = n(t.start, t.end),
					f = e.x,
					p = e.width;
				if (t.start > t.end) {
					var h = n(t.start > g ? l : Math.max(l, t.start), t.end < l ? g : Math.min(g, t.end));
					f = h.x, p = h.width
				}
				var y = (0, o.default)(),
					m = {
						id: y,
						start: t.start,
						end: t.end,
						type: "FIND",
						element: u
					},
					b = r - d.height / 2;
				return t.direction < 0 && (b = a - d.height / 2), c.createElement("rect", i({
					key: y,
					id: y,
					x: f - 1,
					y: b,
					width: p,
					ref: s(y, m)
				}, d))
			}))
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r, a = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== i(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			c = (r = n(6)) && r.__esModule ? r : {
				default: r
			},
			o = n(5);

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u() {
			return (u = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function s(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function l(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function g(t, e, n) {
			return e && l(t.prototype, e), n && l(t, n), t
		}

		function f(t, e) {
			return !e || "object" !== i(e) && "function" != typeof e ? d(t) : e
		}

		function p(t) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function d(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function h(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && function (t, e) {
				(Object.setPrototypeOf || function (t, e) {
					return t.__proto__ = e, t
				})(t, e)
			}(t, e)
		}
		var y = function () {
				function t() {
					var e, n;
					s(this, t);
					for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
					return function (t, e, n) {
						e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					}(d(n = f(this, (e = p(t)).call.apply(e, [this].concat(i)))), "renderPrimer", (function (t) {
						function e() {
							return !k && I ? "TOP" : k && !I ? "BOTTOM" : k && I ? "MIDDLE" : "WHOLE"
						}
						var r = n.props,
							i = r.inputRef,
							s = r.seqBlockRef,
							l = r.findXAndWidth,
							g = r.firstBase,
							f = r.lastBase,
							p = r.fullSeq,
							d = r.charWidth,
							h = r.fontSize,
							y = r.zoomed,
							m = (0, c.default)(),
							b = t.direction,
							v = t.start,
							w = void 0 === v ? 0 : v,
							O = t.end,
							E = void 0 === O ? 0 : O,
							T = t.sequence,
							S = t.id,
							C = E < w ? p.length - w + E : E - w,
							x = l(w, E),
							N = x.x,
							P = x.width,
							_ = 1 === b && g < E && E <= f,
							A = -1 === b && g < w && w <= f,
							k = w < g,
							I = f < E || w === E,
							j = E < w,
							D = j && w < f,
							M = j && f < w;
						if (j) {
							var R = l(f < w ? g : Math.max(g, w), E < g ? f : Math.min(f, E));
							N = R.x, P = R.width, M && (k = !0, I = f < E), D && (k = w < g, I = !0)
						} else if (w === E) {
							var L = l(w, E + p.length);
							N = L.x, P = L.width
						}
						var q = n.props.height,
							F = {
								dominantBaseline: "middle",
								cursor: "pointer",
								lengthAdjust: "spacing",
								textRendering: "optimizeLegibility",
								style: {
									color: "black",
									fontWeight: 150
								}
							},
							G = (q *= .4) / 4,
							B = N,
							z = P,
							U = t.mismatches,
							W = [],
							H = 1 === b,
							V = H ? T : (0, o.reverse)(T);
						U && 0 < U.length && U.forEach((function (t) {
							var e = t.start,
								n = t.end - e;
							V = H ? V.substring(0, t.start) + " ".repeat(n) + V.substring(t.end) : (0, o.reverse)((0, o.reverse)(V).substring(0, t.start) + " ".repeat(n) + (0, o.reverse)(V).substring(t.end))
						}));
						var $ = _ ? "L ".concat(z - 8, " 0\n      l -10 -10\n      l 8 0\n      l 10 10") : "L ".concat(P, " 0"),
							Y = "L ".concat(z, " ").concat(q);
						I && 40 < z ? Y = "\n\t\t\t\tL ".concat(z - 4, " ").concat(G, "\n\t\t\t\tL ").concat(z, " ").concat(2 * G, "\n\t\t\t\tL ").concat(z - 4, " ").concat(3 * G, "\n\t\t\t\tL ").concat(z, " ").concat(4 * G) : _ && (Y = "\n        L ".concat(z, " ").concat(q));
						var K = "L 0 ".concat(q, " L 0 0");

						function X(t) {
							return t.end - t.start
						}

						function Q(t) {
							return M ? H ? t.end - (p.length - w) > g && t.start - (p.length - w) < g : E - t.start - X(t) < g && E - t.end + X(t) > g : H ? w + t.end > g && w + t.start < g : w + (C - t.end) < g && w + (C - t.start) > g
						}

						function Z(t) {
							return M ? H ? t.end - (p.length - w) > f && t.start - (p.length - w) < f : E - t.start - X(t) < f && E - t.end + X(t) > f : H ? w + t.end > f && w + t.start < f : w + (C - t.end) < f && w + (C - t.start) > f
						}

						function J(t) {
							return Q(t) ? "LEFT" : Z(t) ? "RIGHT" : "NONE"
						}

						function tt(t) {
							return t * d
						}

						function et(t) {
							return t.map((function (t) {
								var n = t,
									r = function (t) {
										var n = t.start,
											r = t.end,
											a = "",
											c = "";
										if (H) {
											var i = w + n,
												u = w + r;
											M && (i = n - (p.length - w), u = r - (p.length - w));
											var s = g - i,
												l = f - u;
											switch (J(t)) {
												case "LEFT":
													a = T.substring(n + s, r);
													break;
												case "RIGHT":
													a = T.substring(n, r + l);
													break;
												default:
													a = T.substring(n, r)
											}
											var d = a.length,
												h = X(t) - d;
											switch (J(t)) {
												case "LEFT":
													c = "M 0 0\n            m ".concat(tt(g - i - h), " 0\n            l 0 ").concat(0 - q, "\n            l ").concat(tt(d), " 0\n            l 0 ").concat(q);
													break;
												default:
													c = "TOP" === e() ? "M 0 0\n              m ".concat(tt(n), " 0\n              l 0 ").concat(0 - q, "\n              l ").concat(tt(d), " 0\n              l 0 ").concat(q) : "M 0 0\n              m ".concat(tt(i - g), " 0\n              l 0 ").concat(0 - q, "\n              l ").concat(tt(d), " 0\n              l 0 ").concat(q)
											}
										} else if (!H) {
											var y = E - n,
												m = E - r;
											D && (y = w + (C - n), m = w + (C - r));
											var b = g - m,
												v = f - y;
											switch (J(t)) {
												case "LEFT":
													a = (0, o.reverse)(T.substring(r - b, n));
													break;
												case "RIGHT":
													a = (0, o.reverse)(T.substring(r, n - v));
													break;
												default:
													a = (0, o.reverse)(T.substring(r, n))
											}
											var O = a.length,
												S = X(t) - O;
											switch (J(t)) {
												case "RIGHT":
													c = "M 0 ".concat(q, "\n            m ").concat(P - tt(y - f - S), " 0\n            l 0 ").concat(q, "\n            l ").concat(0 - tt(O), " 0\n            l 0 ").concat(0 - q);
													break;
												default:
													c = "BOTTOM" === e() ? "M 0 ".concat(q, "\n              m ").concat(tt(V.length - n), " 0\n              l 0 ").concat(q, "\n              l ").concat(0 - tt(O), " 0\n              l 0 ").concat(0 - q) : "M 0 ".concat(q, "\n              m ").concat(P - tt(f - y), " 0\n              l 0 ").concat(q, "\n              l ").concat(0 - tt(O), " 0\n              l 0 ").concat(0 - q)
											}
										}
										return {
											mismatchName: a,
											mismatchPath: c
										}
									}(t),
									a = r.mismatchName,
									c = r.mismatchPath;
								return W.push(c), n.name = a, n
							}))
						}
						k && 40 < z ? K = "\n\t\t\t\tL 0 ".concat(q, "\n\t\t\t\tL ").concat(4, " ").concat(3 * G, "\n\t\t\t\tL 0 ").concat(2 * G, "\n\t\t\t\tL ").concat(4, " ").concat(G, "\n\t\t\t\tL 0 0") : A && (K = "\n        L ".concat(z, " ").concat(q, "\n        l ").concat(8 - z, " 0\n        l 10 10\n        l -8 0\n        l -10 -10\n        l 0 ").concat(0 - q, "\n        ")), "TOP" === e() ? D ? (V = V.substring(0, f - w), U && 0 < U.length && (U = et(U = H ? U.filter((function (t) {
							return t.start - (p.length - w) < f
						})) : U.filter((function (t) {
							return C - t.end - (p.length - w) < f
						}))))) : (V = V.substring(0, f - w), U && 0 < U.length && (U = et(U = H ? U.filter((function (t) {
							return w + t.start < f
						})) : U.filter((function (t) {
							return w + (C - t.end) < f
						}))))) : U = "MIDDLE" === e() ? (M ? (V = V.substring(p.length - w + g, p.length - w + g + (f - g)), U && 0 < U.length && (U = H ? U.filter((function (t) {
							return t.end - (p.length - w) > g && t.start - (p.length - w) < f
						})) : U.filter((function (t) {
							return C - t.start - (p.length - w) > g && C - t.end - (p.length - w) < f
						})))) : (V = V.substring(g - w, g - w + f - g), U && 0 < U.length && (U = H ? U.filter((function (t) {
							return w + t.end > g && w + t.start < f
						})) : U.filter((function (t) {
							return w + (C - t.start) > g && w + (C - t.end) < f
						})))), et(U)) : "BOTTOM" === e() ? (M ? (V = V.substring(p.length - w + g), U && 0 < U.length && (U = H ? U.filter((function (t) {
							return t.end - (p.length - w) > g
						})) : U.filter((function (t) {
							return C - t.start - (p.length - w) > g
						})))) : (V = V.substring(g - w), U && 0 < U.length && (U = H ? U.filter((function (t) {
							return w + t.end > g
						})) : U.filter((function (t) {
							return w + (C - t.start) > g
						})))), et(U)) : U && 0 < U.length ? U.map((function (t) {
							var e = t;
							return e.name = T.substring(t.start, t.end), H ? W.push("M 0 0\n              m ".concat(tt(t.start), " 0\n              l 0 ").concat(0 - q, "\n              l ").concat(tt(X(t)), " 0\n              l 0 ").concat(q)) : H || (e.name = (0, o.reverse)(T.substring(t.end, t.start)), W.push("M 0 ".concat(q, "\n              m ").concat(tt(V.length - t.start), " 0\n              l 0 ").concat(q, "\n              l ").concat(tt(0 - X(t)), " 0\n              l 0 ").concat(0 - q))), e
						})) : [];
						var nt = W.join(" "),
							rt = "".concat("M 0 0", " ").concat($, " ").concat(Y, " ").concat(K, " ").concat(nt),
							at = a.createElement("path", u({
								id: S,
								ref: i("".concat(S), {
									ref: "".concat(S),
									start: w,
									end: E,
									type: "PRIMER",
									element: s
								}),
								className: S,
								style: {
									fillOpacity: .1,
									cursor: "pointer",
									stroke: "#1b1d21",
									strokeWidth: .5
								}
							}, {
								shapeRendering: "geometricPrecision"
							}, {
								d: rt,
								onMouseOver: function () {
									return n.hoverOtherPrimerRows("".concat(S), .2)
								},
								onMouseOut: function () {
									return n.hoverOtherPrimerRows("".concat(S), .1)
								},
								onFocus: function () {
									return 0
								},
								onBlur: function () {
									return 0
								}
							}));
						return a.createElement("g", {
							key: "".concat(S, "_").concat(m, "-primer"),
							id: S,
							transform: "translate(".concat(B, ", 0)")
						}, a.createElement("text", u({
							key: "".concat(S, "_").concat(m, "-primer"),
							fontSize: h,
							x: P / 2,
							y: q / 2 + 1.4,
							textAnchor: "middle"
						}, F, {
							textLength: P,
							id: S,
							onMouseOver: function () {
								return n.hoverOtherPrimerRows(S, .2)
							},
							onMouseOut: function () {
								return n.hoverOtherPrimerRows(S, .1)
							},
							onFocus: function () {},
							onBlur: function () {}
						}), y ? "".concat(V) : ""), ",", U && U.map((function (t) {
							return a.createElement("text", u({
								key: "mismatch_text_".concat(S, "_").concat(m),
								fontSize: h,
								x: function (t) {
									var n = Q(t),
										r = Z(t);
									return H ? "BOTTOM" === e() || "MIDDLE" === e() ? M && H ? n ? 0 : tt(t.start - (p.length - w) - g) : tt(n ? t.start - g + w + (X(t) - t.name.length) : t.start - g + w) : tt(t.start) : "TOP" === e() || "MIDDLE" === e() ? M ? n ? 0 : r ? P - tt(t.end + f - E) : H ? tt(t.start - (p.length - w) - g) : P - tt(t.end + f - E - (X(t) - t.name.length)) : D ? n ? P - tt(f - (w + (C - t.start)) + t.name.length) : P - tt(f - (w + (C - t.start)) + X(t)) : r ? P - tt(t.end + f - E) : P - tt(t.end + f - E - (X(t) - t.name.length)) : P - tt(t.end - (X(t) - t.name.length))
								}(t),
								y: H ? 0 - q / 2 : 3 * q / 2 + 1.4,
								textAnchor: "left"
							}, F, {
								textLength: tt(t.name.length),
								id: S
							}), y ? "".concat(t.name) : "")
						})), ",", at)
					})), n
				}
				return h(t, a.PureComponent), g(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.y,
							n = t.primers,
							r = "translate(0, ".concat(e - 5, ")");
						return a.createElement("g", {
							transform: r,
							className: "linear-primer-row"
						}, n.map(this.renderPrimer))
					}
				}]), t
			}(),
			m = function () {
				function t() {
					return s(this, t), f(this, p(t).apply(this, arguments))
				}
				return h(t, a.PureComponent), g(t, [{
					key: "render",
					value: function () {
						var t = this.props,
							e = t.showPrimers,
							n = t.forwardPrimerRows,
							r = t.reversePrimerRows,
							o = t.direction,
							i = t.yDiff,
							u = t.findXAndWidth,
							s = t.inputRef,
							l = t.seqBlockRef,
							g = t.onUnmount,
							f = t.firstBase,
							p = t.lastBase,
							d = t.fullSeq,
							h = t.charWidth,
							m = t.zoomed,
							b = t.fontSize,
							v = this.props.elementHeight;
						if (v *= 3, !e) return null;
						var w = 1 === o ? n : r;
						return a.createElement("g", {
							className: "la-vs-linear-primers"
						}, w.map((function (t, e) {
							var n = (0, c.default)(),
								r = i + e * v;
							return 1 === o && (r += .35 * v), a.createElement(y, {
								id: n,
								primers: t,
								y: r,
								height: v,
								key: "".concat(n, "-primer-linear-row"),
								inputRef: s,
								seqBlockRef: l,
								onUnmount: g,
								findXAndWidth: u,
								firstBase: f,
								lastBase: p,
								fullSeq: d,
								direction: o,
								charWidth: h,
								fontSize: b,
								zoomed: m
							})
						})))
					}
				}]), t
			}();
		e.default = m
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Block = e.Edges = void 0;
		var r, a = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== i(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			c = n(26),
			o = (r = n(6)) && r.__esModule ? r : {
				default: r
			};

		function i(t) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function u() {
			return (u = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function s(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function l(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function g(t, e, n) {
			return e && l(t.prototype, e), n && l(t, n), t
		}

		function f(t, e) {
			return !e || "object" !== i(e) && "function" != typeof e ? d(t) : e
		}

		function p(t) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function d(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function h(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && function (t, e) {
				(Object.setPrototypeOf || function (t, e) {
					return t.__proto__ = e, t
				})(t, e)
			}(t, e)
		}

		function y(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		var m = e.Edges = (h(b, a.PureComponent), g(b, [{
			key: "render",
			value: function () {
				var t = this.props,
					e = t.findXAndWidth,
					n = t.selectEdgeHeight,
					r = t.firstBase,
					c = t.lastBase,
					o = t.fullSeq,
					i = this.context,
					s = i.ref,
					l = i.start,
					g = i.end,
					f = i.clockwise,
					p = null,
					d = null;
				if (f ? (r <= l && l < c && (p = l), r < g && g <= c && (d = g)) : (r < l && l <= c && (p = l), r <= g && g < c && (d = g)), ("ALL" === s || 0 === l && g === o.length - 1) && (d = p = null), null === p && null === d) return null;
				null === p && (p = d, d = null);
				var h = e(p, d),
					y = h.x,
					m = h.width;
				if (!1 === f && null !== p && null !== d) {
					var b = e(d, p);
					y = b.x, m = b.width
				}
				var v = y + m;
				if (null !== p && null !== d && (g < l && !0 === f || l < g && !1 === f) && (v = y - m), l === g && l === c) return null;
				var w = {
					y: "-10",
					style: {
						fill: "black",
						width: l === g ? 1 : 2
					},
					shapeRendering: "crispEdges"
				};
				return a.createElement("g", {
					className: "la-vz-linear-sel-edges"
				}, null !== p && a.createElement("rect", u({}, w, {
					x: l === g ? y - 1 : y - 2,
					height: n
				})), null !== d && a.createElement("rect", u({}, w, {
					x: l === g ? v - 1 : v - 2,
					height: n
				})))
			}
		}]), b);

		function b() {
			var t, e;
			s(this, b);
			for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return y(d(e = f(this, (t = p(b)).call.apply(t, [this].concat(r)))), "id", (0, o.default)()), e
		}
		y(m, "contextType", c.SelectionContext);
		var v = e.Block = (h(w, a.PureComponent), g(w, [{
			key: "render",
			value: function () {
				var t, e, n = this.props,
					r = n.findXAndWidth,
					c = n.selectHeight,
					o = n.firstBase,
					i = n.lastBase,
					u = n.fullSeq,
					s = this.context,
					l = s.clockwise,
					g = s.ref,
					f = this.context,
					p = f.start,
					d = f.end;
				if (p === d && "ALL" !== g) return null;
				("ALL" === g || 0 === p && d === u.length) && (d = p = 0);
				var h = null;
				if (l && p < d) {
					if (p <= i && o < d) {
						var y = r(Math.max(o, p), Math.min(i, d));
						t = y.x, e = y.width
					}
				} else if (l && d < p) {
					if (!(i < p && d < o))
						if (p < i && o < d) {
							var m = r(p, i),
								b = m.x,
								v = m.width;
							h = a.createElement("rect", {
								x: b,
								y: -10,
								height: c + 5,
								width: v,
								className: "la-vz-linear-sel-block"
							});
							var w = r(o, d);
							t = w.x, e = w.width
						} else {
							var O = r(i < p ? o : Math.max(o, p), d < o ? i : Math.min(i, d));
							t = O.x, e = O.width
						}
				} else if (!l && d < p) {
					if (d <= i && o <= p) {
						var E = r(Math.max(o, d), Math.min(i, p));
						t = E.x, e = E.width
					}
				} else if (!l && p < d && (o < p || d < i))
					if (o < p && p < i && o < d) {
						var T = r(d, i),
							S = T.x,
							C = T.width;
						h = a.createElement("rect", {
							x: S,
							y: -10,
							height: c + 5,
							width: C,
							className: "la-vz-linear-sel-block",
							shapeRendering: "auto"
						});
						var x = r(o, p);
						t = x.x, e = x.width
					} else {
						var N = r(p < o ? d : o, i < d ? p : i);
						t = N.x, e = N.width
					}
				if ("ALL" === g || p === d) {
					var P = r(Math.max(o, 0), Math.min(i, u.length + 1));
					t = P.x, e = P.width
				}
				return t || e ? a.createElement(a.Fragment, null, a.createElement("rect", {
					className: "la-vz-linear-sel-block",
					x: t,
					y: -10,
					height: c + 5,
					width: e,
					shapeRendering: "auto"
				}), h) : null
			}
		}]), w);

		function w() {
			var t, e;
			s(this, w);
			for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return y(d(e = f(this, (t = p(w)).call.apply(t, [this].concat(r)))), "id", (0, o.default)()), e
		}
		y(v, "contextType", c.SelectionContext), e.default = {
			Edges: m,
			Block: v
		}
	}, function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var r, a = function (t) {
				if (t && t.__esModule) return t;
				if (null === t || "object" !== s(t) && "function" != typeof t) return {
					default: t
				};
				var e = function () {
					if ("function" != typeof WeakMap) return null;
					var t = new WeakMap;
					return function () {
						return t
					}, t
				}();
				if (e && e.has(t)) return e.get(t);
				var n = {},
					r = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						var c = r ? Object.getOwnPropertyDescriptor(t, a) : null;
						c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a]
					}
				return n.default = t, e && e.set(t, n), n
			}(n(0)),
			c = n(8),
			o = (r = n(6)) && r.__esModule ? r : {
				default: r
			};

		function i() {
			return (i = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			}).apply(this, arguments)
		}

		function u(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}

		function s(t) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}

		function l(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function g(t, e) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
			}
		}

		function f(t, e, n) {
			return e && g(t.prototype, e), n && g(t, n), t
		}

		function p(t, e) {
			return !e || "object" !== s(e) && "function" != typeof e ? d(t) : e
		}

		function d(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}

		function h(t) {
			return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			})(t)
		}

		function y(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && function (t, e) {
				(Object.setPrototypeOf || function (t, e) {
					return t.__proto__ = e, t
				})(t, e)
			}(t, e)
		}
		var m = function () {
			function t() {
				return l(this, t), p(this, h(t).apply(this, arguments))
			}
			return y(t, a.PureComponent), f(t, [{
				key: "render",
				value: function () {
					var t = this.props,
						e = t.translations,
						n = t.yDiff,
						r = t.inputRef,
						c = t.seqBlockRef,
						o = t.onUnmount,
						i = t.fullSeq,
						u = t.firstBase,
						s = t.lastBase,
						l = t.bpsPerBlock,
						g = t.charWidth,
						f = t.findXAndWidth,
						p = t.elementHeight;
					return a.createElement("g", {
						className: "la-vz-linear-translations"
					}, e.map((function (t, e) {
						return a.createElement(b, {
							translation: t,
							y: n + p * e - 10,
							height: p,
							key: "".concat(t.id, "-").concat(u),
							id: t.id,
							inputRef: r,
							seqBlockRef: c,
							onUnmount: o,
							fullSeq: i,
							firstBase: u,
							lastBase: s,
							charWidth: g,
							bpsPerBlock: l,
							findXAndWidth: f
						})
					})))
				}
			}]), t
		}();
		e.default = m;
		var b = function () {
			function t() {
				var e, n;
				l(this, t);
				for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
				return u(d(n = p(this, (e = h(t)).call.apply(e, [this].concat(a)))), "AAs", []), u(d(n), "componentWillUnmount", (function () {
					var t = n.props.onUnmount;
					n.AAs.forEach((function (e) {
						t(e)
					}))
				})), u(d(n), "genPath", (function (t, e) {
					var r = n.props,
						a = r.height,
						c = t * r.charWidth,
						o = 3 * e;
					return "M 0 0\n\t\t\tL ".concat(c, " 0\n\t\t\tL ").concat(c + o, " ").concat(a / 2, "\n\t\t\tL ").concat(c, " ").concat(a, "\n\t\t\tL 0 ").concat(a, "\n\t\t\tL ").concat(o, " ").concat(a / 2, "\n\t\t\tZ")
				})), n
			}
			return y(t, a.Component), f(t, [{
				key: "render",
				value: function () {
					var e = this,
						n = this.props,
						r = n.inputRef,
						u = n.seqBlockRef,
						s = n.firstBase,
						l = n.lastBase,
						g = n.translation,
						f = n.fullSeq,
						p = n.findXAndWidth,
						d = n.height,
						h = n.y,
						y = n.charWidth,
						m = n.bpsPerBlock,
						b = g.id,
						v = g.start,
						w = g.end,
						O = g.AAseq,
						E = g.direction,
						T = {
							start: v,
							end: w,
							type: "TRANSLATION",
							element: u
						},
						S = O.split("");
					return a.createElement("g", {
						transform: "translate(0, ".concat(h, ")"),
						ref: r(b, T),
						id: b
					}, S.map((function (n, u) {
						var g = (0, o.default)();
						e.AAs.push(g);
						var h = (v + 3 * u) % f.length,
							b = (v + 3 * u + 3) % f.length;
						if (b < h && m <= s ? b += f.length : b < h && s < m ? h -= f.length : 0 === h && m <= s && (h += f.length, b += f.length), l < h || b < s) return null;
						var w = !0,
							O = 3;
						h < s ? (O = Math.min(3, b - s)) < 2 && (w = !1) : l < b && (O = Math.min(3, l - h)) < 2 && (w = !1);
						var S = p(Math.max(h, s)).x,
							C = e.genPath(O, 1 === E ? 1 : -1);
						return a.createElement("g", {
							key: g,
							id: g,
							transform: "translate(".concat(S, ", 0)"),
							ref: r(g, T)
						}, a.createElement("path", i({
							id: g,
							d: C
						}, t.aaProps, {
							fill: (0, c.colorByIndex)(n.charCodeAt(0)),
							stroke: (0, c.borderColorByIndex)(n.charCodeAt(0))
						})), w && a.createElement("text", i({
							id: g,
							x: 1.5 * y,
							y: "".concat(d / 2 + 1.5)
						}, t.textProps), n))
					})))
				}
			}]), t
		}();
		u(b, "textProps", {
			dominantBaseline: "middle",
			cursor: "pointer",
			textAnchor: "middle",
			style: {
				color: "black",
				fontSize: 13,
				fontWeight: 400
			}
		}), u(b, "aaProps", {
			shapeRendering: "geometricPrecision",
			style: {
				cursor: "pointer",
				strokeWidth: .8,
				opacity: .7
			}
		})
	}, function (t, e, n) {
		var r = n(212);
		"string" == typeof r && (r = [
			[t.i, r, ""]
		]);
		n(214)(r, {
			insert: "head",
			singleton: !1
		}), r.locals && (t.exports = r.locals)
	}, function (t, e, n) {
		(e = t.exports = n(213)(!1)).push([t.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500&display=swap);", ""]), e.push([t.i, '/* outer level viewer container */\n.la-vz-seqviz {\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n}\n\n.la-vz-seqviz svg {\n  overflow: visible;\n}\n\n.la-vz-seqviz svg text {\n  user-select: none;\n  fill: #2a2a2a;\n  font-family: Roboto Mono, Monaco, monospace;\n}\n\n.la-vz-seqviz svg text:selection {\n  background: none;\n}\n\n.la-vz-viewer-container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.la-vz-viewer-event-router {\n  position: absolute;\n  outline: none;\n  height: 100%;\n  width: inherit;\n}\n\n/* circular viewer */\n.la-vz-circular-viewer {\n  margin: auto;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.la-vz-circular-bps {\n  cursor: text;\n}\n\n.la-vz-circular-label {\n  cursor: pointer;\n}\n\n.la-vz-circular-label:hover {\n  text-decoration: underline;\n}\n\n.la-vz-label-line {\n  stroke: #9eaab8;\n  stroke-width: 1;\n  fill: none;\n}\n\n/* linear viewer */\n.la-vz-linear-scroller {\n  height: 100%;\n\n  outline: none !important;\n  position: relative;\n  font-weight: 300;\n  padding: 10px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  cursor: text;\n}\n\n.la-vz-seqblock-container {\n  width: 100%;\n}\n\n.la-vz-seqblock {\n  width: 100%;\n  padding: 0;\n  overflow: visible;\n}\n\n.la-vz-cut-site-text {\n  font-family: "Roboto", sans-serif !important;\n  font-size: 14px;\n}\n\n.la-vz-linear-sel-block {\n  fill: #def6ff;\n}\n\n.la-vz-scroll::-webkit-scrollbar {\n  width: 7px;\n}\n\n.la-vz-scroll::-webkit-scrollbar-thumb {\n  background-clip: padding-box;\n  border-radius: 7px;\n  background-color: #a6a6a6;\n}\n\n.la-vz-scroll::-webkit-scrollbar-track {\n  border-radius: 20px;\n}\n\n.la-vz-scroll::-webkit-scrollbar-track-piece {\n  background-clip: padding-box;\n  border-radius: 7px;\n  background-color: #ececec;\n}\n', ""])
	}, function (t, e, n) {
		"use strict";
		t.exports = function (t) {
			var e = [];
			return e.toString = function () {
				return this.map((function (e) {
					var n = function (t, e) {
						var n = t[1] || "",
							r = t[3];
						if (!r) return n;
						if (e && "function" == typeof btoa) {
							var a = function (t) {
									var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
										n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
									return "/*# ".concat(n, " */")
								}(r),
								c = r.sources.map((function (t) {
									return "/*# sourceURL=".concat(r.sourceRoot).concat(t, " */")
								}));
							return [n].concat(c).concat([a]).join("\n")
						}
						return [n].join("\n")
					}(e, t);
					return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n
				})).join("")
			}, e.i = function (t, n) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var r = {}, a = 0; a < this.length; a++) {
					var c = this[a][0];
					null != c && (r[c] = !0)
				}
				for (var o = 0; o < t.length; o++) {
					var i = t[o];
					null != i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(".concat(i[2], ") and (").concat(n, ")")), e.push(i))
				}
			}, e
		}
	}, function (t, e, n) {
		"use strict";
		var r, a, c = {},
			o = (a = {}, function (t) {
				if (void 0 === a[t]) {
					var e = document.querySelector(t);
					if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
						e = e.contentDocument.head
					} catch (t) {
						e = null
					}
					a[t] = e
				}
				return a[t]
			});

		function i(t, e) {
			for (var n = [], r = {}, a = 0; a < t.length; a++) {
				var c = t[a],
					o = e.base ? c[0] + e.base : c[0],
					i = {
						css: c[1],
						media: c[2],
						sourceMap: c[3]
					};
				r[o] ? r[o].parts.push(i) : n.push(r[o] = {
					id: o,
					parts: [i]
				})
			}
			return n
		}

		function u(t, e) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n],
					a = c[r.id],
					o = 0;
				if (a) {
					for (a.refs++; o < a.parts.length; o++) a.parts[o](r.parts[o]);
					for (; o < r.parts.length; o++) a.parts.push(h(r.parts[o], e))
				} else {
					for (var i = []; o < r.parts.length; o++) i.push(h(r.parts[o], e));
					c[r.id] = {
						id: r.id,
						refs: 1,
						parts: i
					}
				}
			}
		}

		function s(t) {
			var e = document.createElement("style");
			if (void 0 === t.attributes.nonce) {
				var r = n.nc;
				r && (t.attributes.nonce = r)
			}
			if (Object.keys(t.attributes).forEach((function (n) {
					e.setAttribute(n, t.attributes[n])
				})), "function" == typeof t.insert) t.insert(e);
			else {
				var a = o(t.insert || "head");
				if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				a.appendChild(e)
			}
			return e
		}
		var l, g = (l = [], function (t, e) {
			return l[t] = e, l.filter(Boolean).join("\n")
		});

		function f(t, e, n, r) {
			var a = n ? "" : r.css;
			if (t.styleSheet) t.styleSheet.cssText = g(e, a);
			else {
				var c = document.createTextNode(a),
					o = t.childNodes;
				o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(c, o[e]) : t.appendChild(c)
			}
		}
		var p = null,
			d = 0;

		function h(t, e) {
			var n, r, a;
			if (e.singleton) {
				var c = d++;
				n = p = p || s(e), r = f.bind(null, n, c, !1), a = f.bind(null, n, c, !0)
			} else n = s(e), r = function (t, e, n) {
				var r = n.css,
					a = n.media,
					c = n.sourceMap;
				if (a && t.setAttribute("media", a), c && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c)))), " */")), t.styleSheet) t.styleSheet.cssText = r;
				else {
					for (; t.firstChild;) t.removeChild(t.firstChild);
					t.appendChild(document.createTextNode(r))
				}
			}.bind(null, n, e), a = function () {
				! function (t) {
					null !== t.parentNode && t.parentNode.removeChild(t)
				}(n)
			};
			return r(t),
				function (e) {
					if (e) {
						if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
						r(t = e)
					} else a()
				}
		}
		t.exports = function (t, e) {
			(e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
			var n = i(t, e);
			return u(n, e),
				function (t) {
					for (var r = [], a = 0; a < n.length; a++) {
						var o = n[a],
							s = c[o.id];
						s && (s.refs--, r.push(s))
					}
					t && u(i(t, e), e);
					for (var l = 0; l < r.length; l++) {
						var g = r[l];
						if (0 === g.refs) {
							for (var f = 0; f < g.parts.length; f++) g.parts[f]();
							delete c[g.id]
						}
					}
				}
		}
	}], t.c = n, t.d = function (e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: r
		})
	}, t.r = function (t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, t.t = function (e, n) {
		if (1 & n && (e = t(e)), 8 & n) return e;
		if (4 & n && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (t.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & n && "string" != typeof e)
			for (var a in e) t.d(r, a, function (t) {
				return e[t]
			}.bind(null, a));
		return r
	}, t.n = function (e) {
		var n = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, t.p = "/dist/", t(t.s = 90);

	function t(r) {
		if (n[r]) return n[r].exports;
		var a = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
	}
	var e, n
}));