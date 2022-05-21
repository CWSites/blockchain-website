function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire6082"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire6082"] = parcelRequire;
}
parcelRequire.register("4ZTtH", function(module, exports) {

$parcel$export(module.exports, "App", () => $32884355e4a63ef6$export$86fbec116b87613f);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");
const $32884355e4a63ef6$export$86fbec116b87613f = ()=>{
    const [signal, setSignal] = $d4J5n.useState(false);
    const activateSignal = ()=>{
        setSignal(!signal);
    };
    return /*#__PURE__*/ $228IU.jsxs("main", {
        className: signal ? "bat-signal" : "",
        children: [
            /*#__PURE__*/ $228IU.jsx("h1", {
                children: "Welcome to the Batcave"
            }),
            /*#__PURE__*/ $228IU.jsx("h2", {
                onClick: activateSignal,
                children: "I am Batman"
            }),
            /*#__PURE__*/ $228IU.jsx("img", {
                src: "./assets/batcave.jpg",
                alt: "batcave"
            }),
            /*#__PURE__*/ $228IU.jsx("p", {
                children: "Discovered and used long before by Bruce Wayne's ancestors as a storehouse as well as a means of transporting escaped slaves during the Civil War era, Wayne himself rediscovered them when he fell through a dilapidated well on his estate. Much like Superman's Fortress of Solitude, the Batcave serves as a place of privacy and tranquility where Batman can be himself."
            })
        ]
    });
};

});
parcelRequire.register("228IU", function(module, exports) {
'use strict';

module.exports = (parcelRequire("4WnG3"));

});
parcelRequire.register("4WnG3", function(module, exports) {

$parcel$export(module.exports, "Fragment", () => $398ef20bfcd6b165$export$ffb0004e005737fa, (v) => $398ef20bfcd6b165$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "jsx", () => $398ef20bfcd6b165$export$34b9dba7ce09269b, (v) => $398ef20bfcd6b165$export$34b9dba7ce09269b = v);
$parcel$export(module.exports, "jsxs", () => $398ef20bfcd6b165$export$25062201e9e25d76, (v) => $398ef20bfcd6b165$export$25062201e9e25d76 = v);
var $398ef20bfcd6b165$export$ffb0004e005737fa;
var $398ef20bfcd6b165$export$34b9dba7ce09269b;
var $398ef20bfcd6b165$export$25062201e9e25d76;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';

var $d4J5n = parcelRequire("d4J5n");
var $398ef20bfcd6b165$var$k = Symbol.for("react.element"), $398ef20bfcd6b165$var$l = Symbol.for("react.fragment"), $398ef20bfcd6b165$var$m = Object.prototype.hasOwnProperty, $398ef20bfcd6b165$var$n = $d4J5n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $398ef20bfcd6b165$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $398ef20bfcd6b165$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$398ef20bfcd6b165$var$m.call(a, b) && !$398ef20bfcd6b165$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $398ef20bfcd6b165$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $398ef20bfcd6b165$var$n.current
    };
}
$398ef20bfcd6b165$export$ffb0004e005737fa = $398ef20bfcd6b165$var$l;
$398ef20bfcd6b165$export$34b9dba7ce09269b = $398ef20bfcd6b165$var$q;
$398ef20bfcd6b165$export$25062201e9e25d76 = $398ef20bfcd6b165$var$q;

});
parcelRequire.register("d4J5n", function(module, exports) {
'use strict';

module.exports = (parcelRequire("7uDWo"));

});
parcelRequire.register("7uDWo", function(module, exports) {

$parcel$export(module.exports, "Children", () => $574a51285872e9b8$export$dca3b0875bd9a954, (v) => $574a51285872e9b8$export$dca3b0875bd9a954 = v);
$parcel$export(module.exports, "Component", () => $574a51285872e9b8$export$16fa2f45be04daa8, (v) => $574a51285872e9b8$export$16fa2f45be04daa8 = v);
$parcel$export(module.exports, "Fragment", () => $574a51285872e9b8$export$ffb0004e005737fa, (v) => $574a51285872e9b8$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Profiler", () => $574a51285872e9b8$export$e2c29f18771995cb, (v) => $574a51285872e9b8$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "PureComponent", () => $574a51285872e9b8$export$221d75b3f55bb0bd, (v) => $574a51285872e9b8$export$221d75b3f55bb0bd = v);
$parcel$export(module.exports, "StrictMode", () => $574a51285872e9b8$export$5f8d39834fd61797, (v) => $574a51285872e9b8$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $574a51285872e9b8$export$74bf444e3cd11ea5, (v) => $574a51285872e9b8$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => $574a51285872e9b8$export$ae55be85d98224ed, (v) => $574a51285872e9b8$export$ae55be85d98224ed = v);
$parcel$export(module.exports, "cloneElement", () => $574a51285872e9b8$export$e530037191fcd5d7, (v) => $574a51285872e9b8$export$e530037191fcd5d7 = v);
$parcel$export(module.exports, "createContext", () => $574a51285872e9b8$export$fd42f52fd3ae1109, (v) => $574a51285872e9b8$export$fd42f52fd3ae1109 = v);
$parcel$export(module.exports, "createElement", () => $574a51285872e9b8$export$c8a8987d4410bf2d, (v) => $574a51285872e9b8$export$c8a8987d4410bf2d = v);
$parcel$export(module.exports, "createFactory", () => $574a51285872e9b8$export$d38cd72104c1f0e9, (v) => $574a51285872e9b8$export$d38cd72104c1f0e9 = v);
$parcel$export(module.exports, "createRef", () => $574a51285872e9b8$export$7d1e3a5e95ceca43, (v) => $574a51285872e9b8$export$7d1e3a5e95ceca43 = v);
$parcel$export(module.exports, "forwardRef", () => $574a51285872e9b8$export$257a8862b851cb5b, (v) => $574a51285872e9b8$export$257a8862b851cb5b = v);
$parcel$export(module.exports, "isValidElement", () => $574a51285872e9b8$export$a8257692ac88316c, (v) => $574a51285872e9b8$export$a8257692ac88316c = v);
$parcel$export(module.exports, "lazy", () => $574a51285872e9b8$export$488013bae63b21da, (v) => $574a51285872e9b8$export$488013bae63b21da = v);
$parcel$export(module.exports, "memo", () => $574a51285872e9b8$export$7c73462e0d25e514, (v) => $574a51285872e9b8$export$7c73462e0d25e514 = v);
$parcel$export(module.exports, "startTransition", () => $574a51285872e9b8$export$7568632d0d33d16d, (v) => $574a51285872e9b8$export$7568632d0d33d16d = v);
$parcel$export(module.exports, "unstable_act", () => $574a51285872e9b8$export$88948ce120ea2619, (v) => $574a51285872e9b8$export$88948ce120ea2619 = v);
$parcel$export(module.exports, "useCallback", () => $574a51285872e9b8$export$35808ee640e87ca7, (v) => $574a51285872e9b8$export$35808ee640e87ca7 = v);
$parcel$export(module.exports, "useContext", () => $574a51285872e9b8$export$fae74005e78b1a27, (v) => $574a51285872e9b8$export$fae74005e78b1a27 = v);
$parcel$export(module.exports, "useDebugValue", () => $574a51285872e9b8$export$dc8fbce3eb94dc1e, (v) => $574a51285872e9b8$export$dc8fbce3eb94dc1e = v);
$parcel$export(module.exports, "useDeferredValue", () => $574a51285872e9b8$export$6a7bc4e911dc01cf, (v) => $574a51285872e9b8$export$6a7bc4e911dc01cf = v);
$parcel$export(module.exports, "useEffect", () => $574a51285872e9b8$export$6d9c69b0de29b591, (v) => $574a51285872e9b8$export$6d9c69b0de29b591 = v);
$parcel$export(module.exports, "useId", () => $574a51285872e9b8$export$f680877a34711e37, (v) => $574a51285872e9b8$export$f680877a34711e37 = v);
$parcel$export(module.exports, "useImperativeHandle", () => $574a51285872e9b8$export$d5a552a76deda3c2, (v) => $574a51285872e9b8$export$d5a552a76deda3c2 = v);
$parcel$export(module.exports, "useInsertionEffect", () => $574a51285872e9b8$export$aaabe4eda9ed9969, (v) => $574a51285872e9b8$export$aaabe4eda9ed9969 = v);
$parcel$export(module.exports, "useLayoutEffect", () => $574a51285872e9b8$export$e5c5a5f917a5871c, (v) => $574a51285872e9b8$export$e5c5a5f917a5871c = v);
$parcel$export(module.exports, "useMemo", () => $574a51285872e9b8$export$1538c33de8887b59, (v) => $574a51285872e9b8$export$1538c33de8887b59 = v);
$parcel$export(module.exports, "useReducer", () => $574a51285872e9b8$export$13e3392192263954, (v) => $574a51285872e9b8$export$13e3392192263954 = v);
$parcel$export(module.exports, "useRef", () => $574a51285872e9b8$export$b8f5890fc79d6aca, (v) => $574a51285872e9b8$export$b8f5890fc79d6aca = v);
$parcel$export(module.exports, "useState", () => $574a51285872e9b8$export$60241385465d0a34, (v) => $574a51285872e9b8$export$60241385465d0a34 = v);
$parcel$export(module.exports, "useSyncExternalStore", () => $574a51285872e9b8$export$306c0aa65ff9ec16, (v) => $574a51285872e9b8$export$306c0aa65ff9ec16 = v);
$parcel$export(module.exports, "useTransition", () => $574a51285872e9b8$export$7b286972b8d8ccbf, (v) => $574a51285872e9b8$export$7b286972b8d8ccbf = v);
$parcel$export(module.exports, "version", () => $574a51285872e9b8$export$83d89fbfd8236492, (v) => $574a51285872e9b8$export$83d89fbfd8236492 = v);
var $574a51285872e9b8$export$dca3b0875bd9a954;
var $574a51285872e9b8$export$16fa2f45be04daa8;
var $574a51285872e9b8$export$ffb0004e005737fa;
var $574a51285872e9b8$export$e2c29f18771995cb;
var $574a51285872e9b8$export$221d75b3f55bb0bd;
var $574a51285872e9b8$export$5f8d39834fd61797;
var $574a51285872e9b8$export$74bf444e3cd11ea5;
var $574a51285872e9b8$export$ae55be85d98224ed;
var $574a51285872e9b8$export$e530037191fcd5d7;
var $574a51285872e9b8$export$fd42f52fd3ae1109;
var $574a51285872e9b8$export$c8a8987d4410bf2d;
var $574a51285872e9b8$export$d38cd72104c1f0e9;
var $574a51285872e9b8$export$7d1e3a5e95ceca43;
var $574a51285872e9b8$export$257a8862b851cb5b;
var $574a51285872e9b8$export$a8257692ac88316c;
var $574a51285872e9b8$export$488013bae63b21da;
var $574a51285872e9b8$export$7c73462e0d25e514;
var $574a51285872e9b8$export$7568632d0d33d16d;
var $574a51285872e9b8$export$88948ce120ea2619;
var $574a51285872e9b8$export$35808ee640e87ca7;
var $574a51285872e9b8$export$fae74005e78b1a27;
var $574a51285872e9b8$export$dc8fbce3eb94dc1e;
var $574a51285872e9b8$export$6a7bc4e911dc01cf;
var $574a51285872e9b8$export$6d9c69b0de29b591;
var $574a51285872e9b8$export$f680877a34711e37;
var $574a51285872e9b8$export$d5a552a76deda3c2;
var $574a51285872e9b8$export$aaabe4eda9ed9969;
var $574a51285872e9b8$export$e5c5a5f917a5871c;
var $574a51285872e9b8$export$1538c33de8887b59;
var $574a51285872e9b8$export$13e3392192263954;
var $574a51285872e9b8$export$b8f5890fc79d6aca;
var $574a51285872e9b8$export$60241385465d0a34;
var $574a51285872e9b8$export$306c0aa65ff9ec16;
var $574a51285872e9b8$export$7b286972b8d8ccbf;
var $574a51285872e9b8$export$83d89fbfd8236492;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var $574a51285872e9b8$var$l = Symbol.for("react.element"), $574a51285872e9b8$var$n = Symbol.for("react.portal"), $574a51285872e9b8$var$p = Symbol.for("react.fragment"), $574a51285872e9b8$var$q = Symbol.for("react.strict_mode"), $574a51285872e9b8$var$r = Symbol.for("react.profiler"), $574a51285872e9b8$var$t = Symbol.for("react.provider"), $574a51285872e9b8$var$u = Symbol.for("react.context"), $574a51285872e9b8$var$v = Symbol.for("react.forward_ref"), $574a51285872e9b8$var$w = Symbol.for("react.suspense"), $574a51285872e9b8$var$x = Symbol.for("react.memo"), $574a51285872e9b8$var$y = Symbol.for("react.lazy"), $574a51285872e9b8$var$z = Symbol.iterator;
function $574a51285872e9b8$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $574a51285872e9b8$var$z && a[$574a51285872e9b8$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $574a51285872e9b8$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $574a51285872e9b8$var$C = Object.assign, $574a51285872e9b8$var$D = {};
function $574a51285872e9b8$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $574a51285872e9b8$var$D;
    this.updater = e || $574a51285872e9b8$var$B;
}
$574a51285872e9b8$var$E.prototype.isReactComponent = {};
$574a51285872e9b8$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$574a51285872e9b8$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $574a51285872e9b8$var$F() {}
$574a51285872e9b8$var$F.prototype = $574a51285872e9b8$var$E.prototype;
function $574a51285872e9b8$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $574a51285872e9b8$var$D;
    this.updater = e || $574a51285872e9b8$var$B;
}
var $574a51285872e9b8$var$H = $574a51285872e9b8$var$G.prototype = new $574a51285872e9b8$var$F;
$574a51285872e9b8$var$H.constructor = $574a51285872e9b8$var$G;
$574a51285872e9b8$var$C($574a51285872e9b8$var$H, $574a51285872e9b8$var$E.prototype);
$574a51285872e9b8$var$H.isPureReactComponent = !0;
var $574a51285872e9b8$var$I = Array.isArray, $574a51285872e9b8$var$J = Object.prototype.hasOwnProperty, $574a51285872e9b8$var$K = {
    current: null
}, $574a51285872e9b8$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $574a51285872e9b8$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$574a51285872e9b8$var$J.call(b, d) && !$574a51285872e9b8$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $574a51285872e9b8$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $574a51285872e9b8$var$K.current
    };
}
function $574a51285872e9b8$var$N(a, b) {
    return {
        $$typeof: $574a51285872e9b8$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $574a51285872e9b8$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $574a51285872e9b8$var$l;
}
function $574a51285872e9b8$var$escape(a1) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a1.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $574a51285872e9b8$var$P = /\/+/g;
function $574a51285872e9b8$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $574a51285872e9b8$var$escape("" + a.key) : b.toString(36);
}
function $574a51285872e9b8$var$R(a2, b, e, d, c) {
    var k = typeof a2;
    if ("undefined" === k || "boolean" === k) a2 = null;
    var h = !1;
    if (null === a2) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a2.$$typeof){
                case $574a51285872e9b8$var$l:
                case $574a51285872e9b8$var$n:
                    h = !0;
            }
    }
    if (h) return h = a2, c = c(h), a2 = "" === d ? "." + $574a51285872e9b8$var$Q(h, 0) : d, $574a51285872e9b8$var$I(c) ? (e = "", null != a2 && (e = a2.replace($574a51285872e9b8$var$P, "$&/") + "/"), $574a51285872e9b8$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($574a51285872e9b8$var$O(c) && (c = $574a51285872e9b8$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($574a51285872e9b8$var$P, "$&/") + "/") + a2)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($574a51285872e9b8$var$I(a2)) for(var g = 0; g < a2.length; g++){
        k = a2[g];
        var f = d + $574a51285872e9b8$var$Q(k, g);
        h += $574a51285872e9b8$var$R(k, b, e, f, c);
    }
    else if (f = $574a51285872e9b8$var$A(a2), "function" === typeof f) for(a2 = f.call(a2), g = 0; !(k = a2.next()).done;)k = k.value, f = d + $574a51285872e9b8$var$Q(k, g++), h += $574a51285872e9b8$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $574a51285872e9b8$var$S(a3, b, e) {
    if (null == a3) return a3;
    var d = [], c = 0;
    $574a51285872e9b8$var$R(a3, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $574a51285872e9b8$var$T(a) {
    if (-1 === a._status) {
        var b1 = a._result;
        b1 = b1();
        b1.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b1);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $574a51285872e9b8$var$U = {
    current: null
}, $574a51285872e9b8$var$V = {
    transition: null
}, $574a51285872e9b8$var$W = {
    ReactCurrentDispatcher: $574a51285872e9b8$var$U,
    ReactCurrentBatchConfig: $574a51285872e9b8$var$V,
    ReactCurrentOwner: $574a51285872e9b8$var$K
};
$574a51285872e9b8$export$dca3b0875bd9a954 = {
    map: $574a51285872e9b8$var$S,
    forEach: function(a, b, e) {
        $574a51285872e9b8$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $574a51285872e9b8$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a4) {
        return $574a51285872e9b8$var$S(a4, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$574a51285872e9b8$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$574a51285872e9b8$export$16fa2f45be04daa8 = $574a51285872e9b8$var$E;
$574a51285872e9b8$export$ffb0004e005737fa = $574a51285872e9b8$var$p;
$574a51285872e9b8$export$e2c29f18771995cb = $574a51285872e9b8$var$r;
$574a51285872e9b8$export$221d75b3f55bb0bd = $574a51285872e9b8$var$G;
$574a51285872e9b8$export$5f8d39834fd61797 = $574a51285872e9b8$var$q;
$574a51285872e9b8$export$74bf444e3cd11ea5 = $574a51285872e9b8$var$w;
$574a51285872e9b8$export$ae55be85d98224ed = $574a51285872e9b8$var$W;
$574a51285872e9b8$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $574a51285872e9b8$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $574a51285872e9b8$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$574a51285872e9b8$var$J.call(b, f) && !$574a51285872e9b8$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $574a51285872e9b8$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$574a51285872e9b8$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $574a51285872e9b8$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $574a51285872e9b8$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$574a51285872e9b8$export$c8a8987d4410bf2d = $574a51285872e9b8$var$M;
$574a51285872e9b8$export$d38cd72104c1f0e9 = function(a) {
    var b = $574a51285872e9b8$var$M.bind(null, a);
    b.type = a;
    return b;
};
$574a51285872e9b8$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$574a51285872e9b8$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $574a51285872e9b8$var$v,
        render: a
    };
};
$574a51285872e9b8$export$a8257692ac88316c = $574a51285872e9b8$var$O;
$574a51285872e9b8$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $574a51285872e9b8$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $574a51285872e9b8$var$T
    };
};
$574a51285872e9b8$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $574a51285872e9b8$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$574a51285872e9b8$export$7568632d0d33d16d = function(a) {
    var b = $574a51285872e9b8$var$V.transition;
    $574a51285872e9b8$var$V.transition = {};
    try {
        a();
    } finally{
        $574a51285872e9b8$var$V.transition = b;
    }
};
$574a51285872e9b8$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$574a51285872e9b8$export$35808ee640e87ca7 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useCallback(a, b);
};
$574a51285872e9b8$export$fae74005e78b1a27 = function(a) {
    return $574a51285872e9b8$var$U.current.useContext(a);
};
$574a51285872e9b8$export$dc8fbce3eb94dc1e = function() {};
$574a51285872e9b8$export$6a7bc4e911dc01cf = function(a) {
    return $574a51285872e9b8$var$U.current.useDeferredValue(a);
};
$574a51285872e9b8$export$6d9c69b0de29b591 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useEffect(a, b);
};
$574a51285872e9b8$export$f680877a34711e37 = function() {
    return $574a51285872e9b8$var$U.current.useId();
};
$574a51285872e9b8$export$d5a552a76deda3c2 = function(a, b, e) {
    return $574a51285872e9b8$var$U.current.useImperativeHandle(a, b, e);
};
$574a51285872e9b8$export$aaabe4eda9ed9969 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useInsertionEffect(a, b);
};
$574a51285872e9b8$export$e5c5a5f917a5871c = function(a, b) {
    return $574a51285872e9b8$var$U.current.useLayoutEffect(a, b);
};
$574a51285872e9b8$export$1538c33de8887b59 = function(a, b) {
    return $574a51285872e9b8$var$U.current.useMemo(a, b);
};
$574a51285872e9b8$export$13e3392192263954 = function(a, b, e) {
    return $574a51285872e9b8$var$U.current.useReducer(a, b, e);
};
$574a51285872e9b8$export$b8f5890fc79d6aca = function(a) {
    return $574a51285872e9b8$var$U.current.useRef(a);
};
$574a51285872e9b8$export$60241385465d0a34 = function(a) {
    return $574a51285872e9b8$var$U.current.useState(a);
};
$574a51285872e9b8$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $574a51285872e9b8$var$U.current.useSyncExternalStore(a, b, e);
};
$574a51285872e9b8$export$7b286972b8d8ccbf = function() {
    return $574a51285872e9b8$var$U.current.useTransition();
};
$574a51285872e9b8$export$83d89fbfd8236492 = "18.1.0";

});






parcelRequire("4ZTtH");

//# sourceMappingURL=index.ea59f077.js.map
