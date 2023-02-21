"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[674],{

/***/ 2674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapeDynamiqueSection; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeDynamiqueSection.vue?vue&type=template&id=2a438ef0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('ContainerPage', {
    scopedSlots: _vm._u([{
      key: "app-footer",
      fn: function () {
        return [_c('div', {
          staticClass: "w-100 d-flex justify-content-between"
        }, [_c('router-link', {
          attrs: {
            "to": _vm.previewStep
          }
        }, [_c('hbk-button', {
          staticClass: "mr-4 text-muted",
          attrs: {
            "icon": "arrow-left",
            "variant": "outline-light",
            "icon-variant": ""
          }
        }, [_vm._v(" " + _vm._s(_vm.string_actions.buttons_previews) + " ")])], 1), _c('router-link', {
          attrs: {
            "to": _vm.nextStep
          }
        }, [_c('hbk-button', {
          attrs: {
            "icon": "save",
            "variant": "outline-info",
            "icon-variant": ""
          }
        }, [_vm._v(" " + _vm._s(_vm.string_actions.buttons_next) + " ")])], 1)], 1)];
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
        return [_vm._v(" '' ")];
      },
      proxy: true
    }])
  }, [_c('div')]), _vm._l(_vm.fields, function (container, i) {
    return _c(container.template, {
      key: i,
      tag: "component",
      attrs: {
        "entity": container.entity,
        "class-entity": ['pt-1']
      }
    }, _vm._l(container.fields, function (render, k) {
      return _c(render.template, {
        key: k,
        tag: "component",
        attrs: {
          "field": render.field,
          "model": render.model,
          "entities": render.entities,
          "class-css": ['mb-5'],
          "parent-name": '0.entities.layout_paragraphs.' + i + '.entity.',
          "parent-child-name": '0.entities.layout_paragraphs.' + i + '.entities.',
          "namespace-store": "storeForm"
        }
      });
    }), 1);
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

// EXTERNAL MODULE: ./src/formulaires/modalForm.vue + 3 modules
var modalForm = __webpack_require__(2604);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5340);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/js/FormUttilities.js
var FormUttilities = __webpack_require__(7657);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeDynamiqueSection.vue?vue&type=script&lang=js&


// import loadField from "components_h_vuejs/src/components/fieldsDrupal/loadField";
// import request from "../request";

/* harmony default export */ var EtapeDynamiqueSectionvue_type_script_lang_js_ = ({
  name: "EtapeDynamiqueSection",
  components: {
    modalForm: modalForm/* default */.Z
  },
  props: {
    keySections: {
      type: String,
      default: ""
    },
    idEtape: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      titleModal: "",
      manageModal: false
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)("storeForm", {
      building_fields: state => state.building_fields,
      EntitiesForm: state => state.EntitiesForm,
      fields() {
        var fields = [];
        if (this.keySections && this.EntitiesForm && this.EntitiesForm[0] && this.EntitiesForm[0].entities && this.EntitiesForm[0].entities.layout_paragraphs) {
          //
          console.log(" EntitiesForm : ", this.EntitiesForm);
          var keySections = 0;
          if (this.$router.history.current.params && this.$router.history.current.params.keySections) {
            keySections = this.$router.history.current.params.keySections;
          }
          FormUttilities/* default.generateFields */.Z.generateFields([this.EntitiesForm[0].entities.layout_paragraphs[keySections]], fields, "");
        }
        return fields;
      },
      user: state => state.user
    }),
    ...(0,vuex_esm/* mapGetters */.Se)(["etapes", "string_actions"]),
    nextStep() {
      const idEtape = parseInt(this.idEtape) + 1;
      const length = this.etapes.length;
      if (idEtape < length) {
        if (length) {
          console.log("NEXT Dynamique build computed");
          return "/layouts-sections/" + this.etapes[idEtape] + "/" + idEtape;
        } else return "/login";
      } else {
        if (this.user && this.user.uid) return "/save-cv";else return "/login";
      }
    },
    previewStep() {
      const idEtape = parseInt(this.idEtape) - 1;
      if (idEtape >= 0) {
        console.log("PREVIEW Dynamique build computed");
        return "/layouts-sections/" + this.etapes[idEtape] + "/" + idEtape;
      } else return "/formation";
    }
  },
  methods: {
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
;// CONCATENATED MODULE: ./src/formulaires/EtapeDynamiqueSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_EtapeDynamiqueSectionvue_type_script_lang_js_ = (EtapeDynamiqueSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/EtapeDynamiqueSection.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_EtapeDynamiqueSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EtapeDynamiqueSection = (component.exports);

/***/ }),

/***/ 2604:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modalForm; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/modalForm.vue?vue&type=template&id=463900df&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    attrs: {
      "id": "b-modal-manage-project",
      "title": "BootstrapVue",
      "size": "lg",
      "footer-bg-variant": "light",
      "header-bg-variant": "light",
      "hide-footer": false,
      "no-close-on-backdrop": false
    },
    on: {
      "ok": _vm.handleOk
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function () {
        return [_vm._t("header")];
      },
      proxy: true
    }, {
      key: "default",
      fn: function () {
        return [_vm._t("default", function () {
          return [_c('h4', [_vm._v(_vm._s(_vm.string_modal.title_button_modal))]), _c('div', {
            domProps: {
              "innerHTML": _vm._s(_vm.string_modal.desc_modal.value)
            }
          })];
        })];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function ({
        cancel
      }) {
        return [_c('b-button', {
          attrs: {
            "size": "md",
            "variant": "success"
          },
          on: {
            "click": _vm.handleOk
          }
        }, [_vm._v(" " + _vm._s(_vm.string_modal.button) + " ")]), _c('b-button', {
          staticClass: "d-none",
          attrs: {
            "size": "md",
            "variant": "outline-warning"
          },
          on: {
            "click": function ($event) {
              return cancel();
            }
          }
        }, [_vm._v(" Cancel ")])];
      }
    }], null, true),
    model: {
      value: _vm.openModel,
      callback: function ($$v) {
        _vm.openModel = $$v;
      },
      expression: "openModel"
    }
  });
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5340);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/modalForm.vue?vue&type=script&lang=js&

/* harmony default export */ var modalFormvue_type_script_lang_js_ = ({
  props: {
    manageModal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    openModel: {
      get() {
        if (this.manageModal) return true;
        return false;
      },
      set(value) {
        this.$emit("closeModal", value);
      }
    },
    ...(0,vuex_esm/* mapGetters */.Se)(["string_modal"])
  },
  methods: {
    handleOk() {
      this.$bvModal.hide("b-modal-manage-project");
    }
  }
});
;// CONCATENATED MODULE: ./src/formulaires/modalForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_modalFormvue_type_script_lang_js_ = (modalFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/modalForm.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_modalFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modalForm = (component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.674.js.map