"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[187],{

/***/ 2187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapeLogin; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeLogin.vue?vue&type=template&id=0229cdca&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('ContainerPage', {
    attrs: {
      "show-header": false
    }
  }, [_c('div', {
    staticClass: "d-flex justify-content-center mt-5"
  }, [_c('HCardIcon', {
    attrs: {
      "icon": "exclamation-lg"
    },
    scopedSlots: _vm._u([{
      key: "titre",
      fn: function () {
        return [_vm._v(" Connexion / inscription ")];
      },
      proxy: true
    }])
  }, [_c('div', [_vm._v("veillez ...")])])], 1), _c('loginRegister', {
    attrs: {
      "action_after_login": "emit_even",
      "model_register_form": "generate_password"
    },
    scopedSlots: _vm._u([{
      key: "condition_utilisation",
      fn: function () {
        return [_c('p', {
          staticClass: "text-secondary"
        }, [_vm._v(" En vous inscrivant, vous acceptez nos "), _c('a', {
          attrs: {
            "href": "#"
          }
        }, [_vm._v(" Conditions d'utilisation ")]), _vm._v(", de recevoir des emails et des MAJ de "), _c('strong', [_vm._v("WB-HORISON")]), _vm._v(" et vous reconnaissez avoir lu notre "), _c('a', {
          attrs: {
            "href": "#"
          }
        }, [_vm._v(" Politique de confidentialité")])])];
      },
      proxy: true
    }])
  })], 1)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5340);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeLogin.vue?vue&type=script&lang=js&


/* harmony default export */ var EtapeLoginvue_type_script_lang_js_ = ({
  name: "EtapeLogin",
  components: {
    loginRegister: () => {
      __webpack_require__.e(/* import() */ 298).then(__webpack_require__.bind(__webpack_require__, 5298));
    }
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)("storeForm", {
      user: state => state.user
    })
  },
  mounted() {
    this.check_if_user_connected();
    if (!this.user.uid) {
      console.log("user login : ", this.user);
      this.$store.dispatch("storeForm/checkStatusUser");
    } else {
      this.nextStep();
    }
  },
  methods: {
    ev_logingoogle(user) {
      console.log(user);
    },
    check_if_user_connected() {
      document.addEventListener("login_rx_vuejs__user_is_login", () => {
        console.log("user login");
        this.nextStep();
      }, false);
    },
    nextStep() {
      this.$router.push({
        path: `/save-cv`
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/formulaires/EtapeLogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_EtapeLoginvue_type_script_lang_js_ = (EtapeLoginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/EtapeLogin.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_EtapeLoginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EtapeLogin = (component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.187.js.map