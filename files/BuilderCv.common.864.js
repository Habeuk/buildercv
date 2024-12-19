"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_cv_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_cv_drupal"] || []).push([[864],{

/***/ 9506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var tryToString = __webpack_require__(9505);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 6446:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(5276);
var toObject = __webpack_require__(4633);
var lengthOfArrayLike = __webpack_require__(9327);
var setArrayLength = __webpack_require__(9208);
var deletePropertyOrThrow = __webpack_require__(9506);
var doesNotExceedSafeInteger = __webpack_require__(9770);

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_RESULT || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


/***/ }),

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ LoginRegister; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=template&id=77b94591&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ValidationObserver', {
    ref: "formValidate",
    attrs: {
      "tag": "form"
    }
  }, [_c('div', {
    staticClass: "login-page",
    attrs: {
      "facebook_app_is_define": _vm.facebook_app_is_define
    }
  }, [_vm.alertDisplay ? _c('div', {
    staticClass: "alert w-100",
    class: _vm.alertType,
    attrs: {
      "role": "alert"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.alertText)
    }
  }) : _vm._e(), _vm.isBusy ? _c('div', {
    staticClass: "spinner-grow text-primary",
    staticStyle: {
      "width": "3rem",
      "height": "3rem"
    },
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Chargement ...")])]) : _vm._e(), _c('transition', {
    attrs: {
      "name": "customslide"
    }
  }, [_c('div', {
    staticClass: "block-center"
  }, [_c(_vm.stepe, {
    tag: "component",
    attrs: {
      "urlLogo": _vm.urlLogo,
      "formValidate": _vm.formValidate,
      "action-after-login": _vm.actionAfterLogin,
      "model-register-form": _vm.modelRegisterForm,
      "show-password": _vm.showPassword,
      "action-after-register": _vm.actionAfterRegister,
      "show-modal-success": _vm.showModalSuccess,
      "configs_login_rx_vuejs": _vm.configs_login_rx_vuejs
    },
    on: {
      "select-stepe": _vm.selectStepe
    }
  })], 1)])], 1), _c('div', {
    staticClass: "politik-secur mx-auto text-center"
  }, [_vm._t("condition_utilisation", function () {
    return [_vm.configs_login_rx_vuejs && _vm.configs_login_rx_vuejs.texts && _vm.configs_login_rx_vuejs.texts.condition_utilisation ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(_vm.configs_login_rx_vuejs.texts.condition_utilisation.value)
      }
    }) : _vm._e()];
  })], 2)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(5251);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(3797);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
// EXTERNAL MODULE: ../wbuutilities/index.js + 71 modules
var wbuutilities = __webpack_require__(4484);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config_for_all.js
// Contient les methodes et attributs utilisé par toutes les sous modules.
/* harmony default export */ var config_for_all = ({
  /**
   *
   * @param {String} action
   * @param {Object} resp
   */
  AfterRedirect(action = "reload", url_redirect = null, resp = null) {
    console.log("AfterRedirect action .", action);
    var stepe = null;
    /**
     * Pour forcer la rediction.
     */
    if (action == "redirect" && url_redirect) {
      //
    } else if (action == "home") {
      window.location.assign("/");
    }
    // Reload current page.
    else if (action == "reload") {
      window.location.reload();
    }
    // Emit event when is finnish.
    else if (action == "emit_even") {
      var event = new CustomEvent("login_rx_vuejs__user_is_login");
      document.dispatchEvent(event);
    }
    // emits an event after creating an account
    else if (action == "emit_even_register") {
      var event = new CustomEvent("login_rx_vuejs__user_is_register");
      document.dispatchEvent(event);
    }
    // Comportement par defaut.
    else if (action == "default") {
      // --; Si l'utilisateur est redirigé vers une autre url.
      if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
        window.location.assign(resp.reponse.request.responseURL);
      }
      // On demande la creation d'un utilisateur.
      else if (resp.data && resp.data.createuser) {
        stepe = "final-gl-register";
      }
      // On recharge la meme page.
      else if (resp.data) {
        window.location.reload();
      }
    }
    return stepe;
  }
});
// EXTERNAL MODULE: ../drupal-vuejs/src/App/utilities.js + 1 modules
var utilities = __webpack_require__(6131);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/config.js





const vm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())();
/* harmony default export */ var config = ({
  ...config_for_all,
  messages: {
    log_email: "Email ou Nom d'utilisateur",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
      final: "terminée"
    },
    devis_create_user: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
  },
  modalSuccess(body, conf) {
    return wbuutilities/* AjaxToastBootStrap.modalSuccess */.Ht.modalSuccess(body, conf);
  },
  /**
   *
   * @param {Array} text
   * @returns
   */
  msgCreate(texts) {
    var h = vm.$createElement;
    const text = [];
    for (const i in texts) {
      text.push(h("p", {
        domProps: {
          innerHTML: texts[i]
        },
        style: {
          lineHeight: "25px",
          fontSize: "17px",
          padding: "15px 15px 0px",
          margin: 0
        }
      }, []));
    }
    return h("div", {}, [text]);
  },
  /**
   * Essaie de connecter l'utilisateur
   * @param {*} form
   */
  connexionUser(form, actionAfterLogin) {
    return new Promise((resolv, reject) => {
      let url = "/login-rx-vuejs/user-connexion";
      utilities/* default.post */.Z.post(url, form).then(resp => {
        this.AfterRedirect(actionAfterLogin, null, resp);
        resolv(resp);
      }).catch(er => {
        reject(er);
      });
    });
  }
});
// EXTERNAL MODULE: ../drupal-vuejs/src/config.js
var src_config = __webpack_require__(236);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/facebook.js
//const FB = window.Fb;
/* harmony default export */ var facebook = ({
  user: {},
  FB: null,
  appId: "",
  scope: "public_profile, email",
  version: "v11.0",
  /**
   * Ouverture de la boite de dislogue, facebook.
   */
  openPopup() {
    var self = this;
    window.FB.login(resp => {
      this.statusChangeCallback(resp, true);
    }, {
      scope: self.scope,
      return_scopes: true
    });
  },
  logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },
  /**
   * Permet de definir les informations de base et emet un evenement
   * $event 'wbu-fb-status-change'
   * @param {*} r
   */
  statusChangeCallback(r, getInfoUser = false) {
    this.user = r;
    if (getInfoUser) {
      var event = new CustomEvent("wbu-fb-status-change");
      document.dispatchEvent(event);
    }
    console.log("status", this.user);
  },
  getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement() {
    var self = this;
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    head.appendChild(js);
    js.id = "facebook-jssdk-021";
    // js.addEventListener("load", () => {
    //   console.log("Chargement du JS FACEBOOK END;");
    // });
    //
    js.onload = function () {
      function checkFB() {
        if (window.FB) {
          self.FB = window.FB;
          self.FB.init({
            appId: self.appId,
            cookie: true,
            xfbml: true,
            version: self.version,
            statue: false
          });
          console.log("Chargement du JS facebook");
          self.getUserStatus();
        } else {
          console.log("facebook not load");
          setTimeout(() => {
            checkFB();
          }, 900);
        }
      }
      checkFB();
    };
    js.src = "https://connect.facebook.net/en_US/sdk.js";
  }
});

/*
window.fbAsyncInit = function () {
  FB.init({
    appId: "344690973822888",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });
  FB.AppEvents.logPageView();
  Facebook.getUserStatus();
};
// Etape1 : chargement.
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/**/
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=template&id=0d56cd7c&
var CheckStatusvue_type_template_id_0d56cd7c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _c('h4', {
    staticClass: "title"
  }, [_vm._v("Connectez vous avec")]), _c('div', {
    staticClass: "content-center__btn-column"
  }, [_c('logingoogle', {
    attrs: {
      "idHtml": "default",
      "action-after-login": _vm.actionAfterLogin
    }
  }), _c('div', {
    staticClass: "btn-login btn-login--facebook",
    on: {
      "click": _vm.loginFacebook
    }
  }, [_c('span', {
    staticClass: "btn-login__icon icon-facebook"
  }), _c('i', {
    staticClass: "btn-login__text"
  }, [_vm._v(" Facebook ")]), _vm.waiting === 'facebook' ? _c('svgWaiting') : _vm._e()], 1)], 1), _c('strong', {
    staticClass: "d-block"
  }, [_vm._v(" Ou ")]), _c('hr', {
    staticClass: "diviseur"
  }), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.log_email))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": "name",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.name[0].value,
            expression: "form.name[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "text",
            "name": "name"
          },
          domProps: {
            "value": _vm.form.name[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.name[0], "value", $event.target.value);
            }
          }
        }), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }])
  })], 1), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.checkUserStatus
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.first) + " ")]), _vm.waiting === 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]);
};
var CheckStatusvue_type_template_id_0d56cd7c_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=template&id=2d6edafd&
var LoginGooglevue_type_template_id_2d6edafd_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "buttton-google-aouth",
    class: _vm.classRender,
    attrs: {
      "id": _vm.idHtmlrender,
      "client_google_is_define": _vm.client_google_is_define
    }
  });
};
var LoginGooglevue_type_template_id_2d6edafd_staticRenderFns = [];

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ var google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
// EXTERNAL MODULE: ../drupal-vuejs/node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(6446);
;// CONCATENATED MODULE: ../drupal-vuejs/node_modules/vuex/dist/vuex.esm.js


/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);
  if (version >= 2) {
    Vue.mixin({
      beforeCreate: vuexInit
    });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
var target = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }
  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });
  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, {
    prepend: true
  });
  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, {
    prepend: true
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache) {
  if (cache === void 0) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
  }
  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });
  return copy;
}

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
function isPromise(val) {
  return val && typeof val.then === 'function';
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}
function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};
var prototypeAccessors = {
  namespaced: {
    configurable: true
  }
};
prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors);
var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;
  if (false) {}
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    if (false) {}
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update(path, targetModule, newModule) {
  if (false) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {}
        return;
      }
      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}
var functionAssert = {
  assert: function (value) {
    return typeof value === 'function';
  },
  expected: 'function'
};
var objectAssert = {
  assert: function (value) {
    return typeof value === 'function' || typeof value === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};
function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }
    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}
function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}
var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  if (false) {}
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;
  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {
    return plugin(this$1);
  });
  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};
var prototypeAccessors$1 = {
  state: {
    configurable: true
  }
};
prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};
prototypeAccessors$1.state.set = function (v) {
  if (false) {}
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;
  var mutation = {
    type: type,
    payload: payload
  };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {}
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {
    return sub(mutation, this$1.state);
  });
  if (false) {}
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = {
    type: type,
    payload: payload
  };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {}
    return;
  }
  try {
    this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {
      return sub.before;
    }).forEach(function (sub) {
      return sub.before(action, this$1.state);
    });
  } catch (e) {
    if (false) {}
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.after;
        }).forEach(function (sub) {
          return sub.after(action, this$1.state);
        });
      } catch (e) {
        if (false) {}
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.filter(function (sub) {
          return sub.error;
        }).forEach(function (sub) {
          return sub.error(action, this$1.state, error);
        });
      } catch (e) {
        if (false) {}
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? {
    before: fn
  } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;
  if (false) {}
  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};
Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;
  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};
  if (typeof path === 'string') {
    path = [path];
  }
  if (false) {}
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;
  if (typeof path === 'string') {
    path = [path];
  }
  if (false) {}
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {
    path = [path];
  }
  if (false) {}
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors$1);
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}
function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () {
        return store._vm[key];
      },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }
  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}
function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "production" !== 'production') {}
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (false) {}
      Vue.set(parentState, moduleName, module.state);
    });
  }
  var local = module.context = makeLocalContext(store, namespace, path);
  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });
  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });
  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });
  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';
  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }
      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }
      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function () {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () {
          return store.getters[type];
        },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store._makeLocalGettersCache[namespace];
}
function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}
function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {}
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state,
    // local state
    local.getters,
    // local getters
    store.state,
    // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    if (false) {}
  }, {
    deep: true,
    sync: true
  });
}
function getNestedState(state, path) {
  return path.reduce(function (state, key) {
    return state[key];
  }, state);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  if (false) {}
  return {
    type: type,
    payload: payload,
    options: options
  };
}
function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {}
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (false) {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (false) {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedMutation() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (false) {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if (false) {}
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (false) {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedAction() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module;
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger(ref) {
  if (ref === void 0) ref = {};
  var collapsed = ref.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter = ref.filter;
  if (filter === void 0) filter = function (mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref.transformer;
  if (transformer === void 0) transformer = function (state) {
    return state;
  };
  var mutationTransformer = ref.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function (mut) {
    return mut;
  };
  var actionFilter = ref.actionFilter;
  if (actionFilter === void 0) actionFilter = function (action, state) {
    return true;
  };
  var actionTransformer = ref.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function (act) {
    return act;
  };
  var logMutations = ref.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref.logActions;
  if (logActions === void 0) logActions = true;
  var logger = ref.logger;
  if (logger === void 0) logger = console;
  return function (store) {
    var prevState = deepCopy(store.state);
    if (typeof logger === 'undefined') {
      return;
    }
    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);
        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }
        prevState = nextState;
      });
    }
    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + action.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  };
}
function startMessage(logger, message, collapsed) {
  var startMessage = collapsed ? logger.groupCollapsed : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}
function endMessage(logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}
function getFormattedTime() {
  var time = new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}
var index = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};
/* harmony default export */ var vuex_esm = ((/* unused pure expression or super */ null && (index)));

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=script&lang=js&
function loadScript(src) {
  return new Promise(resolv => {
    var s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}




/* harmony default export */ var LoginGooglevue_type_script_lang_js_ = ({
  name: "LoginGoogle",
  props: {
    idHtml: {
      type: String,
      required: true
    },
    returnUidInfo: {
      type: Boolean,
      default: false
    },
    classRender: {
      type: Array,
      default: function () {
        return ["mx-auto"];
      }
    },
    actionAfterLogin: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(["configs_login_rx_vuejs"]),
    idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    },
    client_google_is_define() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.client_google_id) {
        this.initGoogle();
        return true;
      } else return "";
    }
  },
  methods: {
    initGoogle() {
      if (!window.google) {
        loadScript("https://accounts.google.com/gsi/client").then(() => {
          this.getUserInfoFromFrame();
        });
      } else {
        this.getUserInfoFromFrame();
      }
    },
    getUserInfoFromFrame() {
      var self = this;
      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        google.userAccess = {
          ...response,
          client_id: response.clientId
        };
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }
      console.log(" window.onload ! ", window.onload);
      const goo = () => {
        window.google.accounts.id.initialize({
          client_id: this.configs_login_rx_vuejs.client_google_id,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), {
          theme: "outline",
          size: "large"
        } // customization attributes
        );

        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };

      goo();
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle() {
      // this.IsBusy();
      // this.getFields();
      return new Promise((resolv, reject) => {
        utilities/* default.post */.Z.post("/login-rx-vuejs/google-check", google.userAccess).then(resp => {
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-success";
          this.alertText = "Connexion réussie";
          this.$emit("ev_logingoogle", resp.data);
          // Si on souhaite juste obtenir les infos concernant l'utilisateur.
          if (this.returnUidInfo) {
            resolv(resp);
            return;
          }
          config_for_all.AfterRedirect(this.actionAfterLogin, null, resp);
          resolv(resp);
        }).catch(errors => {
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-danger";
          this.alertText = "Google : Erreur de connexion";
          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            this.alertText = errors.error.statusText;
          }
          console.log(" Error ajax ", errors.error);
          console.log(" Error ajax ", errors.code);
          console.log(" Error ajax ", errors.stack);
          reject(errors);
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginGooglevue_type_script_lang_js_ = (LoginGooglevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=style&index=0&id=2d6edafd&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginGoogle.vue?vue&type=style&index=0&id=2d6edafd&prod&lang=scss&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginGoogle.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_LoginGooglevue_type_script_lang_js_,
  LoginGooglevue_type_template_id_2d6edafd_render,
  LoginGooglevue_type_template_id_2d6edafd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoginGoogle = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=script&lang=js&





/* harmony default export */ var CheckStatusvue_type_script_lang_js_ = ({
  name: "CheckStatus",
  components: {
    svgWaiting: () => __webpack_require__.e(/* import() */ 330).then(__webpack_require__.bind(__webpack_require__, 1330)),
    logingoogle: LoginGoogle
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    actionAfterLogin: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      messages: config.messages,
      waiting: ""
    };
  },
  computed: {
    ...mapState(["form"])
  },
  methods: {
    loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook() {
      facebook.logOut();
    },
    /**
     * Verifie si l'utilisateur existe deja.
     */
    async checkUserStatus() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/check-user-status";
      const test = await this.formValidate.validate();
      if (test) utilities/* default.post */.Z.post(url, this.form).then(resp => {
        this.waiting = "";
        if (resp.data) this.$emit("select-stepe", "setPassword");else {
          this.$emit("select-stepe", "register");
        }
      });else this.waiting = "";
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/CheckStatus.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckStatusvue_type_script_lang_js_ = (CheckStatusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/CheckStatus.vue





/* normalize component */
;
var CheckStatus_component = (0,componentNormalizer/* default */.Z)(
  components_CheckStatusvue_type_script_lang_js_,
  CheckStatusvue_type_template_id_0d56cd7c_render,
  CheckStatusvue_type_template_id_0d56cd7c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckStatus = (CheckStatus_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/SetPassword.vue?vue&type=template&id=ab2c4b2c&
var SetPasswordvue_type_template_id_ab2c4b2c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.pass))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('ValidationProvider', {
    ref: "refPass",
    attrs: {
      "name": "pass",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_vm.form.pass ? _c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.pass[0].value,
            expression: "form.pass[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "password",
            "name": "pass"
          },
          domProps: {
            "value": _vm.form.pass[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.pass[0], "value", $event.target.value);
            }
          }
        }) : _vm._e(), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }])
  })], 1), _c('a', {
    staticClass: "content-center__forgot-pass",
    attrs: {
      "href": "/user/password"
    }
  }, [_vm._v(" Mot de passe oublié ? ")]), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.Login
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.connect) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr'), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" Retour ")])]);
};
var SetPasswordvue_type_template_id_ab2c4b2c_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/SetPassword.vue?vue&type=script&lang=js&


/* harmony default export */ var SetPasswordvue_type_script_lang_js_ = ({
  name: "SetPassword",
  components: {
    svgWaiting: () => __webpack_require__.e(/* import() */ 330).then(__webpack_require__.bind(__webpack_require__, 1330))
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    actionAfterLogin: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      messages: config.messages,
      waiting: ""
    };
  },
  computed: {
    ...mapState(["form"])
  },
  mounted() {
    if (this.form.pass === undefined) {
      this.$set(this.form, "pass", [{
        value: ""
      }]);
    }
  },
  methods: {
    async Login() {
      this.waiting = "wait";
      const test = await this.formValidate.validate();
      setTimeout(() => {
        if (test) config.connexionUser(this.form, this.actionAfterLogin).then(() => {
          this.waiting = "";
        }).catch(e => {
          console.log("Login : ", e);
          this.$refs.refPass.setErrors([e.error.statusText]);
          this.waiting = "error";
        });else this.waiting = "";
      }, 3000);
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/SetPassword.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetPasswordvue_type_script_lang_js_ = (SetPasswordvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/SetPassword.vue





/* normalize component */
;
var SetPassword_component = (0,componentNormalizer/* default */.Z)(
  components_SetPasswordvue_type_script_lang_js_,
  SetPasswordvue_type_template_id_ab2c4b2c_render,
  SetPasswordvue_type_template_id_ab2c4b2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SetPassword = (SetPassword_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/RegisTer.vue?vue&type=template&id=f644ecb2&
var RegisTervue_type_template_id_f644ecb2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-center"
  }, [_c('a', {
    staticClass: "content-center__img",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.urlLogo,
      "alt": ""
    }
  })]), _vm.modelRegisterFormResult === 'default' ? _c('div', [_c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.login))]), _c('div', {
    staticClass: "form-group content-center__input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name[0].value,
      expression: "form.name[0].value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": "true",
      "name": "name"
    },
    domProps: {
      "value": _vm.form.name[0].value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.name[0], "value", $event.target.value);
      }
    }
  })]), _vm.showPassword ? _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(" " + _vm._s(_vm.messages.pass) + " ")]) : _vm._e(), _vm.showPassword ? _c('div', {
    staticClass: "form-group content-center__input"
  }, [_vm.form.pass ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.pass[0].value,
      expression: "form.pass[0].value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "pass"
    },
    domProps: {
      "value": _vm.form.pass[0].value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.pass[0], "value", $event.target.value);
      }
    }
  }) : _vm._e()]) : _vm._e(), _c('h3', {
    staticClass: "content-center__title"
  }, [_vm._v(_vm._s(_vm.messages.mail))]), _c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('div', {
          staticClass: "form-group content-center__input"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.mail[0].value,
            expression: "form.mail[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "mail",
            "name": "mail"
          },
          domProps: {
            "value": _vm.form.mail[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.mail[0], "value", $event.target.value);
            }
          }
        })]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 3187930093)
  }), _vm._l(_vm.templates, function (temp, i) {
    return _c('ValidationProvider', {
      key: i,
      ref: temp.ref,
      refInFor: true,
      staticClass: "d-block w-100",
      scopedSlots: _vm._u([{
        key: "default",
        fn: function (v) {
          return [_c(temp, {
            tag: "component"
          }), _c('div', {
            staticClass: "text-danger text-small"
          }, _vm._l(v.errors, function (error, ii) {
            return _c('small', {
              key: ii,
              staticClass: "d-block"
            }, [_vm._v(" " + _vm._s(error) + " ")]);
          }), 0)];
        }
      }], null, true)
    });
  }), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.RegisterDefault
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)]), _c('hr')], 2) : _vm._e(), _vm.modelRegisterFormResult === 'generate_password' ? _c('div', [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Creation automatique du compte")]), _c('p', {
    staticClass: "mb-4"
  }, [_vm._v(" Vos informations de connexion seront transferés à cette adresse. ")]), _vm.validEmail(_vm.form.name[0].value) ? _c('div', {
    staticClass: "mb-5"
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.form.name[0].value) + " ")]), _vm._v(" " + _vm._s(_vm.set_email()) + " ")]) : _vm._e(), !_vm.validEmail(_vm.form.name[0].value) ? _c('div', [_c('ValidationProvider', {
    ref: "mail",
    staticClass: "d-block w-100",
    attrs: {
      "name": "mail",
      "rules": "required"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('div', {
          staticClass: "form-group content-center__input"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.form.mail[0].value,
            expression: "form.mail[0].value"
          }],
          staticClass: "form-control",
          attrs: {
            "type": "mail",
            "name": "mail"
          },
          domProps: {
            "value": _vm.form.mail[0].value
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.form.mail[0], "value", $event.target.value);
            }
          }
        })]), _c('div', {
          staticClass: "text-danger text-small"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)];
      }
    }], null, false, 3187930093)
  })], 1) : _vm._e(), _c('div', {
    staticClass: "content-center__btn"
  }, [_c('div', {
    staticClass: "btn-login btn-login--connexion",
    on: {
      "click": _vm.generatePassword
    }
  }, [_c('span', {
    staticClass: "btn-login__text"
  }, [_vm._v(" " + _vm._s(_vm.messages.submit.register) + " ")]), _vm.waiting == 'wait' ? _c('svgWaiting') : _vm._e()], 1)])]) : _vm._e(), _c('b-alert', {
    attrs: {
      "dismissible": "",
      "variant": "danger",
      "fade": "",
      "show": _vm.error.message ? true : false
    },
    on: {
      "dismissed": function ($event) {
        _vm.error.message = false;
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.error.message) + " ")]), _c('a', {
    staticClass: "text-center d-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('select-stepe', 'checkstatus');
      }
    }
  }, [_vm._v(" Retour ")])], 1);
};
var RegisTervue_type_template_id_f644ecb2_staticRenderFns = [];

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/InputBootstrap.js

/* harmony default export */ var InputBootstrap = ({
  modelsFields: {},
  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string(h, field, defaultValue = []) {
    if (defaultValue.length === 0) {
      defaultValue.push({
        value: ""
      });
    }
    const inputs = [];
    // Ajout du label
    inputs.push(h("label", {
      class: ["d-block", "content-center__title"]
    }, [field.label_value]));
    defaultValue.forEach(el => {
      inputs.push(h("input", {
        props: {
          type: "text",
          value: el.value,
          b_input: {
            type: Object,
            required: true
          }
        },
        on: {
          input: function (e) {
            if (e.target && e.target.value) el.value = e.target.value;
          }
        },
        class: ["form-control"]
      }));
    });
    // ajout de la description
    inputs.push(h("small", {
      class: ["text-muted"]
    }, [field.description]));
    const formG = h("div", {
      props: {},
      class: ["form-group", "content-center__input"]
    }, inputs);
    return formG;
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/formatFields/formatFieldsBootstrap.js



/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */
class formatField {
  constructor(entity, bundle) {
    this.entity = entity;
    this.bundle = bundle;
    // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */
  async format() {
    var fields = await this.getFields();
    return new Promise((resolv, reject) => {
      if (fields.data && fields.data.fields) {
        InputBootstrap.modelsFields = this.buildModel(fields.data.fields);
        const formatFields = [];
        for (const i in fields.data.fields) {
          formatFields.push({
            ref: i,
            props: {
              name: {
                type: String,
                default: fields.data.fields[i].name
              }
            },
            render(createElement) {
              var renderField = [];
              switch (fields.data.fields[i].type) {
                case "string":
                  renderField.push(InputBootstrap.string(createElement, fields.data.fields[i], InputBootstrap.modelsFields[i]));
                  break;
              }
              return createElement("div", renderField);
            }
          });
        }
        resolv({
          templates: formatFields,
          models: InputBootstrap.modelsFields
        });
      } else {
        reject("Aucune donnée disponible");
      }
    });
  }

  /**
   * Get fileds in drupal.
   * @returns
   */
  getFields() {
    var url = "/api/form-node/generate-form";
    if (this.entity === "user") {
      url = "/api/form-node/generate-user";
    }
    url += "/" + this.bundle;
    return utilities/* default.get */.Z.get(url);
  }
  /**
   * - Cet object permet de rendre les elements de l'object ecoutable.
   *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs.
   *   De cette facon vuejs peut ecouter les MAJ de champs.
   */
  buildModel(fields) {
    const models = {};
    for (const i in fields) {
      if (fields[i].type) models[i] = [];
    }
    return models;
  }
}
/* harmony default export */ var formatFieldsBootstrap = (formatField);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/RegisTer.vue?vue&type=script&lang=js&




/* harmony default export */ var RegisTervue_type_script_lang_js_ = ({
  name: "RegisTer",
  components: {
    svgWaiting: () => __webpack_require__.e(/* import() */ 330).then(__webpack_require__.bind(__webpack_require__, 1330))
  },
  props: {
    urlLogo: {
      type: String,
      required: true
    },
    formValidate: {
      type: Object,
      required: true
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    actionAfterRegister: {
      type: String,
      required: true
    },
    modelRegisterForm: {
      type: [String, Boolean],
      required: true
    },
    showModalSuccess: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      messages: config.messages,
      waiting: "",
      templates: [],
      /**
       * Drupal >9.5 renvoit l'erreur dans {message}
       */
      error: {
        message: false
      }
    };
  },
  computed: {
    ...mapState(["form", "configs_login_rx_vuejs"]),
    /**
     * Resultat entre la config endur et celle en BD.
     */
    modelRegisterFormResult() {
      if (this.modelRegisterForm) {
        return this.modelRegisterForms;
      } else if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.generate_user) {
        return "generate_password";
      } else {
        return "default";
      }
    }
  },
  mounted() {
    if (this.showPassword) {
      if (this.form.pass === undefined) {
        this.$set(this.form, "pass", [{
          value: ""
        }]);
      }
    } else if (this.form.pass) {
      delete this.form.pass;
    }
    this.getFields();
  },
  methods: {
    async generatePassword() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/genrate-password";
      const test = await this.formValidate.validate();
      if (test) {
        utilities/* default.post */.Z.post(url, this.form).then(resp => {
          console.log("resp : ", resp);
          this.waiting = "";
          config.AfterRedirect(this.actionAfterRegister, null, resp);
        }).catch(() => {
          this.waiting = "";
        });
      } else {
        this.waiting = "";
        console.log("echec de validation de mail");
      }
    },
    /**
     * --
     */
    async RegisterDefault() {
      this.waiting = "wait";
      var url = "/user/register?_format=json";
      const test = await this.formValidate.validate();
      if (test) utilities/* default.post */.Z.post(url, this.form).then(resp => {
        this.waiting = "";
        if (this.showModalSuccess) config.modalSuccess(config.msgCreate([this.messages.devis_create_user]), {
          title: "Votre compte a été crré",
          footerClass: "d-none",
          headerBgVariant: "success",
          headerTextVariant: "light"
        }).then(() => {
          config.AfterRedirect(this.actionAfterRegister, null, resp);
        });else config.AfterRedirect(this.actionAfterRegister, null, resp);
      }).catch(e => {
        this.waiting = "";
        console.log("catch : ", e);
        if (e.error.data && e.error.data.message) {
          this.error.message = e.error.data.message;
        }
        if (e.error && e.error.data && e.error.data.errors) {
          const errors = e.error.data.errors;
          // console.log(" this.$refs : ", this.$refs);
          errors.forEach(error => {
            const field = error.split(":");
            // console.log(" field : ", field);
            if (this.$refs[field[0]]) {
              if (this.$refs[field[0]][0]) {
                this.$refs[field[0]][0].setErrors([field[1]]);
              } else this.$refs[field[0]].setErrors([field[1]]);
            }
          });
        }
      });else this.waiting = "";
    },
    /**
     * --
     */
    getFields() {
      const fds = new formatFieldsBootstrap("user", "user");
      fds.format().then(resp => {
        this.templates = resp.templates;
        for (const fieldName in resp.models) {
          this.$set(this.form, fieldName, resp.models[fieldName]);
        }
        console.log("resp : ", resp);
      });
    },
    validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    set_email() {
      this.form.mail = this.form.name;
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/RegisTer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RegisTervue_type_script_lang_js_ = (RegisTervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/RegisTer.vue





/* normalize component */
;
var RegisTer_component = (0,componentNormalizer/* default */.Z)(
  components_RegisTervue_type_script_lang_js_,
  RegisTervue_type_template_id_f644ecb2_render,
  RegisTervue_type_template_id_f644ecb2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RegisTer = (RegisTer_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=script&lang=js&




//import { ValidationObserver } from "vee-validate";






/* harmony default export */ var LoginRegistervue_type_script_lang_js_ = ({
  name: "LoginRegister",
  props: {
    // see config_for_all.AfterRedirect for more informations.
    actionAfterLogin: {
      type: String,
      default: "default"
    },
    // see config_for_all.AfterRedirect for more informations.
    actionAfterRegister: {
      type: String,
      default: "default"
    },
    modelRegisterForm: {
      type: [String, Boolean],
      default: false
    },
    showPassword: {
      type: Boolean,
      default: true
    },
    showModalSuccess: {
      type: Boolean,
      default: true
    }
  },
  /**
   * --
   */
  data() {
    return {
      messages: config.messages,
      waiting: "",
      stepe: CheckStatus,
      models: {},
      baseURl: src_config/* default.baseURl */.Z.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {}
    };
  },
  computed: {
    ...mapState(["configs_login_rx_vuejs"]),
    facebook_app_is_define() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.facebook_app_id) {
        this.initFacebook();
        return true;
      } else return "";
    }
  },
  /**
   * --
   */
  mounted() {
    this.formValidate = this.$refs.formValidate;
    this.getConfigs();
  },
  methods: {
    initFacebook() {
      facebook.appId = this.configs_login_rx_vuejs.facebook_app_id; //889256191665205;
      this.TryToLoginWithFacebook();
      facebook.chargement();
    },
    selectStepe(step) {
      switch (step) {
        case "checkstatus":
          this.stepe = CheckStatus;
          break;
        case "setPassword":
          this.stepe = SetPassword;
          break;
        case "register":
          this.stepe = RegisTer;
          break;
      }
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook() {
      document.addEventListener("wbu-fb-status-change", () => {
        this.isBusy = true;
        this.getFields();
        utilities/* default.post */.Z.post("/login-rx-vuejs/facebook-check", facebook.user).then(resp => {
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-success";
          this.alertText = " Connexion réussie  ";
          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          }
          // il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            this.stepe = "final-fb-register";
          } else {
            window.location.assign(window.location.origin);
          }
        }).catch(errors => {
          this.isBusy = false;
          this.isBusy = false;
          this.alertDisplay = true;
          this.alertType = "alert-danger";
          this.alertText = "Facebook : Erreur de connexion ";
          if (errors.error) {
            this.alertText = errors.error.statusText;
          }
        });
      }, false);
    },
    IsBusy() {
      this.isBusy = true;
      console.log("this.isbusy", this.isBusy);
    },
    /**
     * --
     */
    async finalRegister() {
      this.waiting = "wait";
      var params = {};
      var url = "";
      if (this.stepe === "final-gl-register") {
        url = "/login-rx-vuejs/google-login";
        params = {
          fields: this.models,
          google: []
        };
      } else if (this.stepe === "final-fb-register") {
        url = "/login-rx-vuejs/facebook-login";
        params = {
          fields: this.models,
          facebook: facebook.user
        };
      }
      const test = await this.$refs.formValidate.validate();
      if (test) utilities/* default.post */.Z.post(url, params).then(resp => {
        console.log(resp);
        this.waiting = "";
        if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
          window.location.assign(resp.reponse.request.responseURL);
        }
      });
    },
    /**
     * Helper to login user.
     * ( This function is used by modules that create accounts and then need to login the user. )
     * @param {*} form
     */
    connexionUser(form) {
      return config.connexionUser(form, this.actionAfterLogin);
    },
    getConfigs() {
      var url = "/login-rx-vuejs/get-configs";
      utilities/* default.post */.Z.post(url, this.form).then(resp => {
        this.$store.state.configs_login_rx_vuejs = resp.data;
      }).catch(e => {
        console.log(e);
      });
    }
  }
});
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginRegistervue_type_script_lang_js_ = (LoginRegistervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=style&index=0&id=77b94591&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginRegister.vue?vue&type=style&index=0&id=77b94591&prod&lang=scss&

;// CONCATENATED MODULE: ../drupal-vuejs/src/App/components/LoginRegister.vue



;


/* normalize component */

var LoginRegister_component = (0,componentNormalizer/* default */.Z)(
  components_LoginRegistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LoginRegister = (LoginRegister_component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.common.864.js.map