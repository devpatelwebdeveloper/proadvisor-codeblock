// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");
var tableData = {
  activeType: "elite",
  headingData: {
    silver: {
      id: "silver",
      name: "Silver",
      points: "1‑199"
    },
    gold: {
      id: "gold",
      name: "Gold",
      points: "200‑799"
    },
    platinum: {
      id: "platinum",
      name: "Platinum",
      points: "800-1,599"
    },
    elite: {
      id: "elite",
      name: "Elite",
      points: "1,600+"
    }
  },
  marketingTools: [{
    subtitle: "Marketing tools"
  }, {
    head: "Data in the Find-a-ProAdvisor directory",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Digital ProAdvisor badges",
    silver: "no",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "QuickBooks ProAdvisor Marketing Fund",
    silver: "no",
    gold: "yes",
    platinum: "yes",
    elite: "yes",
    url: "https://quickbooks.intuit.com/ca/accountants/marketing-fund/"
  }, {
    head: "Mailchimp | Marketing Automation & Email (BETA)",
    silver: "no",
    gold: "15%",
    platinum: "15%",
    elite: "15%"
  }, {
    head: "ProAdvisor Program marketing toolkit",
    silver: "no",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }],
  productSupport: [{
    subtitle: "Product support"
  }, {
    head: "Free QuickBooks Online Accountant support",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Specialist to help you move your data into QuickBooks Online",
    sup: "4",
    silver: "no",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Priority support for QuickBooks Online Accountant",
    silver: "no",
    gold: "no",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Book a call with a QuickBooks product specialist",
    sup: "5",
    silver: "no",
    gold: "no",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Dedicated Account Manager",
    silver: "no",
    gold: "no",
    platinum: "yes",
    elite: "yes"
  }],
  enhanceYourKnowledge: [{
    subtitle: "Enhance your knowledge"
  }, {
    head: "Getting started with QuickBooks Online Accountant webinar",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Training and certification",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Events and Webinars",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Professional QuickBooks Online client training material",
    silver: "no",
    gold: "no",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Free access to exclusive content resources",
    silver: "no",
    gold: "no",
    platinum: "yes",
    elite: "yes"
  }],
  softwareAndServices: [{
    subtitle: "Software and services"
  }, {
    head: "QuickBooks Online for your firm",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Payroll for your firm",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Quickbooks Time tracking for your firm",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Discounts on QuickBooks subscriptions for your clients",
    sup: "7",
    silver: "yes",
    gold: "yes",
    platinum: "yes",
    elite: "yes"
  }, {
    head: "Discounts on DocuSign eSignature, plus special client offer",
    silver: "20%",
    gold: "25%",
    platinum: "30%",
    elite: "40%"
  }]
};
function showIcon(data) {
  if (data === "yes") {
    return "<span class=\"checkmark\"></span>";
  } else if (data === "no") {
    return "";
  } else {
    return data;
  }
}
function tableContent(data) {
  if (data.subtitle) {
    return "<div class=\"tr thead\">\n  <div class=\"th head\">".concat(data.subtitle, "</div>\n              <div class=\"td ").concat(tableData.activeType === "silver" && "active", "\"></div>\n              <div class=\"td ").concat(tableData.activeType === "gold" && "active", "\"></div>\n              <div class=\"td ").concat(tableData.activeType === "platinum" && "active", "\"></div>\n              <div class=\"td ").concat(tableData.activeType === "elite" && "active", "\"></div>\n            </div>");
  }
  return "<div class=\"tr\">\n            ".concat(data.url ? "<div class=\"th\"><a href=\"".concat(data.url, "\" target=\"_blank\">").concat(data.head, "</div></a>") : "<div class=\"th\">".concat(data.head, "</div>"), "\n            <div class=\"td ").concat(tableData.activeType === "silver" && "active", "\">").concat(showIcon(data.silver), "</div>\n            <div class=\"td ").concat(tableData.activeType === "gold" && "active", "\">").concat(showIcon(data.gold), "</div>\n            <div class=\"td ").concat(tableData.activeType === "platinum" && "active", "\">").concat(showIcon(data.platinum), "</div>\n            <div class=\"td ").concat(tableData.activeType === "elite" && "active", "\">").concat(showIcon(data.elite), "</div>\n          </div>");
}
function headingContent(data) {
  return "\n  <div class=\"tr\">\n    <div class=\"th\">Points</div>\n    <div class=\"td ".concat(tableData.activeType === "silver" && "active", "\">\n      <div class=\"package-type silver\">").concat(data.silver.name, "</div>\n      <div class=\"points\">").concat(data.silver.points, "</div>\n    </div>\n    <div class=\"td ").concat(tableData.activeType === "gold" && "active", "\">\n      <div class=\"package-type gold\">").concat(data.gold.name, "</div>\n      <div class=\"points\">").concat(data.gold.points, "</div>\n    </div>\n    <div class=\"td ").concat(tableData.activeType === "platinum" && "active", "\">\n      <div class=\"package-type platinum\">").concat(data.platinum.name, "</div>\n      <div class=\"points\">").concat(data.platinum.points, "</div>\n    </div>\n    <div class=\"td ").concat(tableData.activeType === "elite" && "active", "\">\n      <div class=\"package-type elite\">").concat(data.elite.name, "</div>\n      <div class=\"points\">").concat(data.elite.points, "</div>\n    </div>\n    </div>\n  ");
}
document.getElementById("tableHeading").innerHTML = "".concat(headingContent(tableData.headingData));
document.getElementById("marketingTools").innerHTML = "".concat(tableData.marketingTools.map(tableContent).join(""));
document.getElementById("productSupport").innerHTML = "".concat(tableData.productSupport.map(tableContent).join(""));
document.getElementById("enhanceYourKnowledge").innerHTML = "".concat(tableData.enhanceYourKnowledge.map(tableContent).join(""));
document.getElementById("softwareAndServices").innerHTML = "".concat(tableData.softwareAndServices.map(tableContent).join(""));
},{"./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45475" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map