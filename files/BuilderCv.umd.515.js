"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[515],{

/***/ 2515:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapeExperience; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeExperience.vue?vue&type=template&id=e89840ae&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('ContainerPage', {
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
        return [_c('div', {
          staticClass: "w-100 d-flex justify-content-between"
        }, [_c('router-link', {
          attrs: {
            "to": "/presentation"
          }
        }, [_c('hbk-button', {
          staticClass: "mr-4 text-muted",
          attrs: {
            "icon": "arrow-left",
            "variant": "outline-light",
            "icon-variant": ""
          }
        }, [_vm._v(" Etape precedente ")])], 1), _c('router-link', {
          attrs: {
            "to": "/formation"
          }
        }, [_c('hbk-button', {
          attrs: {
            "icon": "save",
            "variant": "outline-info",
            "icon-variant": ""
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
        return [_vm._v(" Expérience professionnelle ")];
      },
      proxy: true
    }])
  }, [_c('div', [_vm._v(" Commencez par votre poste actuel et remontez dans le passé. Si vous avez beaucoup d'expérience, n'ajoutez que les postes les plus récents et pertinents. ")])]), _vm._l(_vm.fields, function (container, i) {
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
          "parent-name": '0.entities.experience.' + i + '.entity.',
          "parent-child-name": '0.entities.experience.' + i + '.entities.',
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
var modalForm = __webpack_require__(5499);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5340);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/js/FormUttilities.js
var FormUttilities = __webpack_require__(7657);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeExperience.vue?vue&type=script&lang=js&



/* harmony default export */ var EtapeExperiencevue_type_script_lang_js_ = ({
  name: "EtapeExperience",
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
      building_fields: state => state.building_fields,
      EntitiesForm: state => state.EntitiesForm,
      fields() {
        var fields = [];
        if (this.EntitiesForm && this.EntitiesForm[0] && this.EntitiesForm[0].entities && this.EntitiesForm[0].entities.experience) {
          FormUttilities/* default.generateFields */.Z.generateFields(this.EntitiesForm[0].entities.experience, fields, "");
        }
        return fields;
      }
    }),
    currentRoute() {
      return this.$router.history.current.path;
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
;// CONCATENATED MODULE: ./src/formulaires/EtapeExperience.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_EtapeExperiencevue_type_script_lang_js_ = (EtapeExperiencevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/EtapeExperience.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_EtapeExperiencevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EtapeExperience = (component.exports);

/***/ }),

/***/ 5499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modalForm; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/modalForm.vue?vue&type=template&id=72d01d3f&
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
          return [_c('h4', [_vm._v("Conseils")]), _c('ul', {
            staticClass: "puce-check"
          }, [_c('li', {
            staticClass: "sc-1qcv85o-2 gEfbim",
            attrs: {
              "data-qa": "contact-information-tips-1"
            }
          }, [_c('p', {
            staticClass: "sc-2wh0z1-0 eQnuyS tips-text"
          }, [_vm._v(" Gardez à l'esprit que votre adresse e-mail et votre site Web devraient être professionnels car ils seront vus et utilisés par des employeurs potentiels. ")])]), _c('li', {
            staticClass: "sc-1qcv85o-2 gEfbim",
            attrs: {
              "data-qa": "contact-information-tips-2"
            }
          }, [_c('p', {
            staticClass: "sc-2wh0z1-0 eQnuyS tips-text"
          }, [_vm._v(" Le format d'adresse e-mail utilisé de manière standard par la majorité des candidats est prénom.nomdefamille@email.com ")])]), _c('li', {
            staticClass: "sc-1qcv85o-2 gEfbim",
            attrs: {
              "data-qa": "contact-information-tips-3"
            }
          }, [_c('p', {
            staticClass: "sc-2wh0z1-0 eQnuyS tips-text"
          }, [_vm._v(" Votre profil LinkedIn devrait être à jour et correspondre le plus possible aux informations figurant dans votre CV. ")])]), _c('li', {
            staticClass: "sc-1qcv85o-2 gEfbim",
            attrs: {
              "data-qa": "contact-information-tips-4"
            }
          }, [_c('p', {
            staticClass: "sc-2wh0z1-0 eQnuyS tips-text"
          }, [_vm._v(" Si vous postulez à un emploi en Europe, il est pratiquement obligatoire d'ajouter une photo professionnelle à votre CV. ")])]), _c('li', {
            staticClass: "sc-1qcv85o-2 gEfbim",
            attrs: {
              "data-qa": "contact-information-tips-5"
            }
          }, [_c('p', {
            staticClass: "sc-2wh0z1-0 eQnuyS tips-text"
          }, [_vm._v(" Votre photo devrait ressembler à celle d'un passeport, ne montrant que la tête et les épaules et non le reste de votre corps, avec un bon éclairage et une apparence professionnelle. ")])]), _c('li', {
            staticClass: "sc-1qcv85o-2 gEfbim",
            attrs: {
              "data-qa": "contact-information-tips-6"
            }
          }, [_c('p', {
            staticClass: "sc-2wh0z1-0 eQnuyS tips-text"
          }, [_vm._v(" N'oubliez pas que c'est la première impression que vous ferez à un employeur potentiel - assurez-vous qu'elle soit bonne ! ")])])])];
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
        }, [_vm._v(" J'ai compris ")]), _c('b-button', {
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
        }, [_vm._v(" Annuler ")])];
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
    }
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
//# sourceMappingURL=BuilderCv.umd.515.js.map