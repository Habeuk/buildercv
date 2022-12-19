"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_cv_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_cv_drupal"] || []).push([[638],{

/***/ 2382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapePresentation; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapePresentation.vue?vue&type=template&id=0e46c1d5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "SubDomain": _vm.SubDomain
    }
  }, [_c('ContainerPage', {
    scopedSlots: _vm._u([{
      key: "entete",
      fn: function () {
        return [_c('hbk-button', {
          on: {
            "click": _vm.openModal
          }
        }, [_vm._v(" Conseils ")])];
      },
      proxy: true
    }, {
      key: "app-footer",
      fn: function () {
        return [_c('div', [_c('router-link', {
          attrs: {
            "to": "/experience"
          }
        }, [_c('hbk-button', {
          attrs: {
            "icon": "save",
            "variant": "outline-info",
            "icon-variant": ""
          },
          on: {
            "click": function ($event) {
              return _vm.$store.dispatch('storeForm/updateLocalStorage');
            }
          }
        }, [_vm._v(" Etape suivante ")])], 1)], 1)];
      },
      proxy: true
    }])
  }, [_c('HCardIcon', {
    attrs: {
      "icon": "exclamation-lg"
    },
    scopedSlots: _vm._u([{
      key: "titre",
      fn: function () {
        return [_vm._v("Dites-nous en plus sur vous ")];
      },
      proxy: true
    }])
  }, [_c('div', [_vm._v(" Dites-nous qui vous êtes, comment les employeurs peuvent vous contacter et quelle est votre profession ")])]), _c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("Coordonnées")]), _vm._l(_vm.buildFields(), function (render, k) {
    return _c(render.template, {
      key: k,
      tag: "component",
      attrs: {
        "field": render.field,
        "model": render.model,
        "class-css": ['mb-5'],
        "namespace-store": "storeForm"
      }
    });
  })], 2), _c('modalForm', {
    attrs: {
      "title-modal": _vm.titleModal,
      "manage-modal": _vm.manageModal
    },
    on: {
      "closeModal": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c('HCardIcon', {
          attrs: {
            "with-mb": false
          }
        })];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./src/formulaires/modalForm.vue + 3 modules
var modalForm = __webpack_require__(2236);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(408);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 65 modules
var loadField = __webpack_require__(126);
// EXTERNAL MODULE: ./src/request.js
var request = __webpack_require__(1564);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapePresentation.vue?vue&type=script&lang=js&





/* harmony default export */ var EtapePresentationvue_type_script_lang_js_ = ({
  name: "EtapePresentation",
  components: {
    modalForm: modalForm/* default */.Z
  },
  data() {
    return {
      titleModal: "",
      manageModal: false
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)("storeForm", {
      form: state => state.presentaton.form,
      model: state => state.presentaton.model
    }),
    // ...mapGetters({
    //   testGet: "storeForm/testGet",
    //   SubDomain: "storeForm/SubDomain",
    // }),
    // ...mapGetters("storeForm", ["testGet", "SubDomain"]),
    // ...mapGetters("storeForm", {
    //   testGet: "testGet",
    //   SubDomain: "SubDomain",
    // }),
    ...(0,vuex_esm/* mapGetters */.Se)(["SubDomain"])
  },
  methods: {
    buildFields() {
      const fields = [];
      loadField/* default.getConfig */.Z.getConfig(request/* default */.Z);
      for (const i in this.form) {
        fields.push({
          template: loadField/* default.getField */.Z.getField(this.form[i]),
          field: this.form[i],
          model: this.model
        });
      }
      return fields;
    },
    /**
     * --//
     */
    openModal() {
      if (this.manageModal) this.manageModal = false;else this.manageModal = true;
    },
    closeModal() {
      this.manageModal = false;
    }
  }
});
;// CONCATENATED MODULE: ./src/formulaires/EtapePresentation.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_EtapePresentationvue_type_script_lang_js_ = (EtapePresentationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/EtapePresentation.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_EtapePresentationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EtapePresentation = (component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.common.638.js.map