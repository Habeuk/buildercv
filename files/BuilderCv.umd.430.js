"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[430],{

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

/***/ }),

/***/ 7997:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ loadField; }
});

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__(6112);
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue?vue&type=template&id=22dda04a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "field-item-value"
        }, [_c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name,
            "debounce": "500"
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value,
            callback: function ($$v) {
              _vm.input_value = $$v;
            },
            expression: "input_value"
          }
        })], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(6352);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__(4670);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/vee-validation-rules.js


// No message specified.
(0,vee_validate_esm/* extend */.l7)("email", rules/* email */.Do);
// Override the default message.
(0,vee_validate_esm/* extend */.l7)("required", {
  ...rules/* required */.C1,
  message: "Ce champs est requis"
});
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* alpha */.Fq);
(0,vee_validate_esm/* extend */.l7)("alpha", rules/* numeric */.uR);
//export default extend;
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue?vue&type=script&lang=js&




/* harmony default export */ var drupal_stringvue_type_script_lang_js_ = ({
  name: "DrupalString",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      input_value: null
    };
  },
  watch: {
    /**
     * Lorsque le champs est constrit via les boucle dynamique,
     * le template n'est pas reconstruit ducoup la valeur du precedent champs est concerservé.
     * On applique ce watch et on verra les resultats.
     * Cela ne s'execute que dans le cadre d'un watch et permet de ressoudre le probleme.
     */
    field() {
      this.input_value = this.getValue();
    }
  },
  mounted() {
    //On recupere la valeur par defaut pour chaque construction:
    this.input_value = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    input(v) {
      const vals = [];
      vals.push({
        value: v
      });
      this.setValue(vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_stringvue_type_script_lang_js_ = (drupal_stringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-string.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_stringvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_string = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue?vue&type=template&id=e9f68b24&
var drupal_linkvue_type_template_id_e9f68b24_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "field-item-value"
        }, [_c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name + 'title'
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value.title,
            callback: function ($$v) {
              _vm.$set(_vm.input_value, "title", $$v);
            },
            expression: "input_value.title"
          }
        }), _c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name + 'url'
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value.uri,
            callback: function ($$v) {
              _vm.$set(_vm.input_value, "uri", $$v);
            },
            expression: "input_value.uri"
          }
        })], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])];
      }
    }])
  })], 1);
};
var drupal_linkvue_type_template_id_e9f68b24_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue?vue&type=script&lang=js&




/* harmony default export */ var drupal_linkvue_type_script_lang_js_ = ({
  name: "drupal-link",
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  data() {
    return {
      input_value: {
        title: "",
        uri: "#"
      },
      timer: null
    };
  },
  mounted() {
    this.input_value = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        var url = this.model[this.field.name][0];
        if (url.uri) {
          return {
            uri: url.uri.replace("internal:", ""),
            title: url.title,
            attributes: url.attributes,
            options: url.options
          };
        }
        return url;
      }
    },
    input() {
      const vals = [];
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const value = {
          uri: "internal:" + this.input_value.uri,
          title: this.input_value.title,
          attributes: [],
          options: []
        };
        vals.push(value);
        this.setValue(vals);
      }, 500);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_linkvue_type_script_lang_js_ = (drupal_linkvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-link.vue





/* normalize component */
;
var drupal_link_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_linkvue_type_script_lang_js_,
  drupal_linkvue_type_template_id_e9f68b24_render,
  drupal_linkvue_type_template_id_e9f68b24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_link = (drupal_link_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue?vue&type=template&id=382a3246&
var drupal_colorvue_type_template_id_382a3246_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('b-form-group', {
    attrs: {
      "label": _vm.field.label,
      "description": _vm.field.description
    }
  }, _vm._l(_vm.model[_vm.field.name], function (val, k) {
    return _c('div', {
      key: k,
      staticClass: "field-item-value"
    }, [_c('b-form-input', {
      attrs: {
        "placeholder": _vm.field.placeholder,
        "type": "color"
      },
      model: {
        value: val.color,
        callback: function ($$v) {
          _vm.$set(val, "color", $$v);
        },
        expression: "val.color"
      }
    })], 1);
  }), 0)], 1);
};
var drupal_colorvue_type_template_id_382a3246_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue?vue&type=script&lang=js&
/* harmony default export */ var drupal_colorvue_type_script_lang_js_ = ({
  name: "DrupalString",
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_colorvue_type_script_lang_js_ = (drupal_colorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-color.vue





/* normalize component */
;
var drupal_color_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_colorvue_type_script_lang_js_,
  drupal_colorvue_type_template_id_382a3246_render,
  drupal_colorvue_type_template_id_382a3246_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_color = (drupal_color_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=template&id=23b6caee&scoped=true&
var drupal_booleanvue_type_template_id_23b6caee_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css,
    attrs: {
      "field": "drupal_boolean"
    }
  }, [_c('div', {
    staticClass: "field-item-value js-form-type-radio",
    attrs: {
      "format_val": _vm.format_val
    }
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "name": _vm.field.name
          }
        }, [_c('div', {
          staticClass: "fieldset-wrapper"
        }, [_vm.field.settings && _vm.field.settings.list_options ? _c('div', {
          staticClass: "radio"
        }, _vm._l(_vm.field.settings.list_options, function (option, o) {
          return _c('b-form-radio', {
            key: o,
            staticClass: "form-check",
            attrs: {
              "name": _vm.field.name,
              "value": option.value,
              "state": _vm.getValidationState(v)
            },
            model: {
              value: _vm.selected,
              callback: function ($$v) {
                _vm.selected = $$v;
              },
              expression: "selected"
            }
          }, [_c('transition', {
            attrs: {
              "name": "fade",
              "mode": "out-in"
            }
          }, [_c('div', [option.image_url ? _c('b-img', {
            attrs: {
              "thumbnail": "",
              "fluid": "",
              "src": option.image_url,
              "alt": "Image 1"
            }
          }) : _vm._e(), !option.image_url ? _c('svgLoader') : _vm._e()], 1)]), _c('div', {
            staticClass: "mt-5"
          }, [_vm._v(_vm._s(option.label))]), option.description.value && option.description.value !== '' ? _c('div', {
            staticClass: "mt-5 text-hover",
            domProps: {
              "innerHTML": _vm._s(option.description.value)
            }
          }) : _vm._e()], 1);
        }), 1) : _vm._e(), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])])];
      }
    }])
  })], 1)]);
};
var drupal_booleanvue_type_template_id_23b6caee_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue?vue&type=template&id=d69890ba&scoped=true&
var svg_preloadervue_type_template_id_d69890ba_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-svg"
  }, [_c('svg', {
    attrs: {
      "version": "1.1",
      "viewBox": "0 0 100 100",
      "preserveAspectRatio": "xMidYMid",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('g', [_c('defs', [_c('clipPath', {
    attrs: {
      "id": "clip"
    }
  }, [_c('path', {
    attrs: {
      "d": "M 50 50 L 35 0 L 65 0 z"
    }
  })]), _c('ellipse', {
    staticStyle: {
      "fill": "none",
      "stroke": "#aaa"
    },
    attrs: {
      "id": "MyEllipse",
      "clip-path": "url(#clip)",
      "cx": "50",
      "cy": "50",
      "rx": "40",
      "ry": "40",
      "stroke-width": "10"
    }
  })]), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(40 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(80 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(120 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(160 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(200 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(240 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(280 50 50)"
    }
  }), _c('use', {
    attrs: {
      "xlink:href": "#MyEllipse",
      "transform": "rotate(320 50 50)"
    }
  }), _c('ellipse', {
    staticStyle: {
      "fill": "none",
      "stroke": "black"
    },
    attrs: {
      "clip-path": "url(#clip)",
      "cx": "50",
      "cy": "50",
      "rx": "40",
      "ry": "40",
      "stroke-width": "12"
    }
  }, [_c('animateTransform', {
    attrs: {
      "attributeName": "transform",
      "attributeType": "XML",
      "type": "rotate",
      "values": "0 50 50; 40 50 50; 80 50 50; 120 50 50;\n        160 50 50; 200 50 50; 240 50 50; 280 50 50; 320 50 50; 360 50 50",
      "dur": "2s",
      "repeatCount": "indefinite",
      "additive": "replace",
      "calcMode": "linear",
      "fill": "freeze"
    }
  })], 1)])])]);
};
var svg_preloadervue_type_template_id_d69890ba_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue?vue&type=style&index=0&id=d69890ba&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue?vue&type=style&index=0&id=d69890ba&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/svg-preloader.vue

var script = {}
;


/* normalize component */

var svg_preloader_component = (0,componentNormalizer/* default */.Z)(
  script,
  svg_preloadervue_type_template_id_d69890ba_scoped_true_render,
  svg_preloadervue_type_template_id_d69890ba_scoped_true_staticRenderFns,
  false,
  null,
  "d69890ba",
  null
  
)

/* harmony default export */ var svg_preloader = (svg_preloader_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=script&lang=js&





/* harmony default export */ var drupal_booleanvue_type_script_lang_js_ = ({
  name: "DrupalBoolean",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    svgLoader: svg_preloader
  },
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: this.model[this.field.name] && this.model[this.field.name][0] ? this.model[this.field.name][0].value : null
    };
  },
  computed: {
    format_val() {
      const vals = [];
      if (this.selected !== null) {
        vals.push({
          value: this.selected
        });
      }
      this.setValue(vals);
      return vals;
    },
    fieldName() {
      return this.field.name;
    }
  },
  watch: {
    /**
     * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
     * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
     */
    fieldName() {
      this.getImage();
    }
  },
  mounted() {
    this.getImage();
    console.log("load image boolean");
  },
  methods: {
    getImage() {
      if (this.field.settings && this.field.settings.list_options) this.field.settings.list_options.forEach(option => {
        if (!option.image_url) this.$set(option, "image_url", "");
        if (option.image[0] && option.image_url == "") {
          loadField.getImageUrl(option.image[0]).then(resp => {
            option.image_url = resp.data;
          });
        }
      });
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_booleanvue_type_script_lang_js_ = (drupal_booleanvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=style&index=0&id=23b6caee&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue?vue&type=style&index=0&id=23b6caee&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-boolean.vue



;


/* normalize component */

var drupal_boolean_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_booleanvue_type_script_lang_js_,
  drupal_booleanvue_type_template_id_23b6caee_scoped_true_render,
  drupal_booleanvue_type_template_id_23b6caee_scoped_true_staticRenderFns,
  false,
  null,
  "23b6caee",
  null
  
)

/* harmony default export */ var drupal_boolean = (drupal_boolean_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=template&id=2fae780a&scoped=true&
var drupal_list_stringvue_type_template_id_2fae780a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css
  }, [_c('div', {
    staticClass: "field-item-value js-form-type-checkbox"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label
          }
        }, [_c('div', {
          staticClass: "fieldset-wrapper"
        }, [_c('div', {
          staticClass: "checkbox"
        }, [_c('b-form-checkbox-group', {
          on: {
            "input": _vm.setValue
          },
          model: {
            value: _vm.selected,
            callback: function ($$v) {
              _vm.selected = $$v;
            },
            expression: "selected"
          }
        }, _vm._l(_vm.field.settings.list_options, function (option, o) {
          return _c('b-form-checkbox', {
            key: o,
            staticClass: "form-check",
            attrs: {
              "value": option.value
            }
          }, [_c('transition', {
            attrs: {
              "name": "fade",
              "mode": "out-in"
            }
          }, [_c('div', [option.image_url ? _c('b-img', {
            attrs: {
              "thumbnail": "",
              "fluid": "",
              "src": option.image_url,
              "alt": "Image 1"
            }
          }) : _vm._e(), !option.image_url ? _c('svgLoader') : _vm._e()], 1)]), _c('div', {
            staticClass: "mt-5"
          }, [_vm._v(_vm._s(option.label))]), option.description.value && option.description.value !== '' ? _c('div', {
            staticClass: "mt-5 text-hover",
            domProps: {
              "innerHTML": _vm._s(option.description.value)
            }
          }) : _vm._e()], 1);
        }), 1)], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])])];
      }
    }])
  })], 1)]);
};
var drupal_list_stringvue_type_template_id_2fae780a_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=script&lang=js&





/* harmony default export */ var drupal_list_stringvue_type_script_lang_js_ = ({
  name: "DrupalListString",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    svgLoader: svg_preloader
  },
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: []
    };
  },
  mounted() {
    this.getValue();
    // Lorsque le composant s'initialise on charge les images.
    this.getImage();
  },
  // watch: {
  //   /**
  //    * Lorsque le composant est chargé plusieurs durant le processus, on est obligé de forcer la MAJ des images si le nom change.
  //    * ( Idealement on devrait charger des instances du champs pour un espace bien donnée ).
  //    */
  //   fieldName() {
  //     this.getImage();
  //   },
  // },

  methods: {
    /**
     * --
     */
    getImage() {
      this.field.settings.list_options.forEach(option => {
        if (!option.image_url) this.$set(option, "image_url", "");
        if (option.image && option.image[0] && option.image_url == "") {
          loadField.getImageUrl(option.image[0]).then(resp => {
            option.image_url = resp.data;
          });
        }
      });
    },
    /**
     *
     * @param {--} vals
     */
    setValue(e) {
      const vals = [];
      e.forEach(item => {
        vals.push({
          value: item
        });
      });
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    /**
     * --
     */
    getRules() {
      return loadField.getRules(this.field);
    },
    /**
     * --
     */
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name].length) {
        this.model[this.field.name].forEach(item => {
          this.selected.push(item.value);
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_list_stringvue_type_script_lang_js_ = (drupal_list_stringvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=style&index=0&id=2fae780a&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue?vue&type=style&index=0&id=2fae780a&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-list-string.vue



;


/* normalize component */

var drupal_list_string_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_list_stringvue_type_script_lang_js_,
  drupal_list_stringvue_type_template_id_2fae780a_scoped_true_render,
  drupal_list_stringvue_type_template_id_2fae780a_scoped_true_staticRenderFns,
  false,
  null,
  "2fae780a",
  null
  
)

/* harmony default export */ var drupal_list_string = (drupal_list_string_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue?vue&type=template&id=2fa21850&
var textarea_ckeditorvue_type_template_id_2fa21850_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-4",
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    staticClass: "form-group",
    attrs: {
      "name": _vm.field.label,
      "rules": {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('legend', {
          domProps: {
            "innerHTML": _vm._s(_vm.field.label)
          }
        }), _c('ckeditor', {
          attrs: {
            "config": _vm.editorConfig
          },
          on: {
            "input": _vm.input,
            "namespaceloaded": _vm.onNamespaceLoaded
          },
          model: {
            value: _vm.editorData,
            callback: function ($$v) {
              _vm.editorData = $$v;
            },
            expression: "editorData"
          }
        }), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()];
      }
    }])
  })], 1);
};
var textarea_ckeditorvue_type_template_id_2fa21850_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue?vue&type=script&lang=js&





/* harmony default export */ var textarea_ckeditorvue_type_script_lang_js_ = ({
  name: "TextareaCkeditor",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    ckeditor: (ckeditor_default()).component
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editorData: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        toolbar: [{
          name: "document",
          items: ["Bold", "Italic", "-", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }],
        contentsCss: "@import '" + loadField.config.getBaseUrl() + "/themes/contrib/wb_universe/node_modules/%40fortawesome/fontawesome-free/css/all.min.css'; @import 'http://wb-horizon.com/themes/custom/wb_horizon_com/css/vendor-style.css';",
        on: {
          instanceReady: function (ev) {
            ev.sender.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            ev.sender.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      }
    };
  },
  computed: {
    editorConfig() {
      var extraPlugins = "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      return {
        extraPlugins: extraPlugins,
        ...this.preEditorConfig
      };
    }
  },
  mounted() {
    this.editorData = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      }
    },
    input(v) {
      const vals = [];
      vals.push({
        value: v,
        format: "full_html"
      });
      this.setValue(vals);
    },
    onNamespaceLoaded(CKEDITOR) {
      CKEDITOR.config.allowedContent = true;
      // CKEDITOR.config.contentsCss =
      //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      // CKEDITOR.config.entities_processNumerical = 'force';
      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_textarea_ckeditorvue_type_script_lang_js_ = (textarea_ckeditorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/textarea-ckeditor.vue





/* normalize component */
;
var textarea_ckeditor_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_textarea_ckeditorvue_type_script_lang_js_,
  textarea_ckeditorvue_type_template_id_2fa21850_render,
  textarea_ckeditorvue_type_template_id_2fa21850_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var textarea_ckeditor = (textarea_ckeditor_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue?vue&type=template&id=0cdc6caa&
var html_rendervue_type_template_id_0cdc6caa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.class_css
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.field.content)
    }
  })]);
};
var html_rendervue_type_template_id_0cdc6caa_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue?vue&type=script&lang=js&
/* harmony default export */ var html_rendervue_type_script_lang_js_ = ({
  props: {
    class_css: {
      type: [Array]
    },
    field: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_html_rendervue_type_script_lang_js_ = (html_rendervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/html-render.vue





/* normalize component */
;
var html_render_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_html_rendervue_type_script_lang_js_,
  html_rendervue_type_template_id_0cdc6caa_render,
  html_rendervue_type_template_id_0cdc6caa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var html_render = (html_render_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue?vue&type=template&id=2ad767c6&
var drupal_filevue_type_template_id_2ad767c6_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vuejs-uploader",
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('b-form-file', {
          attrs: {
            "placeholder": "Ajouter un fichier ...",
            "drop-placeholder": "Drop file here...",
            "multiple": _vm.cardinality,
            "accept": ".jpg, .png, .gif, webp",
            "size": "sm",
            "state": _vm.getValidationState(v)
          },
          on: {
            "input": _vm.previewImage
          },
          model: {
            value: _vm.files,
            callback: function ($$v) {
              _vm.files = $$v;
            },
            expression: "files"
          }
        })], 1)];
      }
    }])
  }), _c('div', {
    staticClass: "previews"
  }, _vm._l(_vm.toUplode, function (fil, i) {
    return _c('div', {
      key: i
    }, [_c('b-img', {
      staticClass: "img-preview",
      attrs: {
        "src": fil.url,
        "fluid": "",
        "alt": "Fluid image",
        "thumbnail": ""
      }
    })], 1);
  }), 0)], 1);
};
var drupal_filevue_type_template_id_2ad767c6_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue?vue&type=script&lang=js&





/* harmony default export */ var drupal_filevue_type_script_lang_js_ = ({
  name: "UploaderFile",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // Fichiers provenant de l'action utilisateur.
      files: [],
      // Fichiers pour la preview.
      urls: [],
      // Fichiers qui doivent etre uploader
      toUplode: []
    };
  },
  computed: {
    cardinality() {
      if (this.field.cardinality === -1) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getValue();
  },
  methods: {
    /**
     *
     * @param {*} param0
     */
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    /**
     *
     */
    getRules() {
      return loadField.getRules(this.field);
    },
    /**
     *
     * @param {*} files
     */
    previewImage(files) {
      // preview
      var reader = new FileReader();
      if (this.cardinality) {
        for (const i in files) {
          const file = files[i];
          // Send images.
          loadField.config.postFile("/filesmanager/post", file).then(resp => {
            reader.onload = read => {
              this.toUplode.push({
                file: file,
                status: resp,
                error: 0,
                url: read.target.result
              });
            };
            reader.readAsDataURL(file);
          });
        }
      } else {
        const vals = [];
        this.toUplode = [];
        loadField.config.postFile("/filesmanager/post", files).then(resp => {
          if (this.namespaceStore) this.$store.commit(this.namespaceStore + "/ACTIVE_RUNNING");else this.$store.commit("ACTIVE_RUNNING");
          reader.onload = read => {
            this.toUplode.push({
              file: files,
              status: resp,
              error: 0,
              url: read.target.result
            });
            setTimeout(() => {
              if (this.namespaceStore) this.$store.commit(this.namespaceStore + "/DISABLE_RUNNING");else this.$store.commit("DISABLE_RUNNING");
            }, 300);
          };
          reader.readAsDataURL(files);
          vals.push({
            target_id: resp.id
          });
          this.setValue(vals);
        });
      }
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name].length) {
        this.toUplode = [];
        this.model[this.field.name].forEach(item => {
          if (loadField.config) loadField.getImageUrl(item.target_id).then(resp => {
            this.toUplode.push({
              url: resp.data
            });
          });
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_drupal_filevue_type_script_lang_js_ = (drupal_filevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/drupal-file.vue





/* normalize component */
;
var drupal_file_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_drupal_filevue_type_script_lang_js_,
  drupal_filevue_type_template_id_2ad767c6_render,
  drupal_filevue_type_template_id_2ad767c6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var drupal_file = (drupal_file_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=template&id=c1f93628&scoped=true&
var ExperienceTypevue_type_template_id_c1f93628_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "complexe_field",
    class: _vm.classCss
  }, [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }]
  }, [_vm._v(_vm._s(_vm.field.label))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "pb-3 field-mutiple",
    attrs: {
      "id": _vm.idHtml
    }
  }, _vm._l(_vm.model[_vm.field.name], function (val, k) {
    return _c('div', {
      key: k,
      staticClass: "field-item-value mb-4 item"
    }, [_c('div', {
      staticClass: "bg-light p-4 px-5"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c('div', {
      staticClass: "text"
    }, [_c('div', {
      staticClass: "font-weight-bold"
    }, [_vm._v(_vm._s(val.value))]), _c('div', {
      staticClass: "d-flex"
    }, [_c('span', [_vm._v(_vm._s(val.company))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(val.date_debut))])])]), _c('div', {
      staticClass: "icon-buttons"
    }, [_c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-5",
      attrs: {
        "variant": "light",
        "title": "Editer"
      },
      on: {
        "click": function ($event) {
          return _vm.Edit(val);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "pencil-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action btn-drag-drop mr-5",
      attrs: {
        "variant": "light",
        "title": "Glisser-déposer"
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "arrows-move",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-4",
      attrs: {
        "variant": "light",
        "title": "Supprimer"
      },
      on: {
        "click": function ($event) {
          return _vm.removeField(k);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "trash-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1)])])])]);
  }), 0), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "add-new-card",
    on: {
      "click": _vm.add
    }
  }, [_c('div', {
    staticClass: "anc-content d-flex align-items-center"
  }, [_c('b-icon', {
    staticClass: "text-info",
    attrs: {
      "icon": "plus-circle-fill",
      "font-scale": "1.5"
    }
  }), _c('h4', {
    staticClass: "anc-titre"
  }, [_vm._v(_vm._s(_vm.addButtonTitle))])], 1)]), _vm.showFormEdit ? _c('EditExperienceType', {
    attrs: {
      "f-value": _vm.currentEditValue,
      "field": _vm.field
    },
    on: {
      "closeEditForm": _vm.closeEditForm
    }
  }) : _vm._e()], 1);
};
var ExperienceTypevue_type_template_id_c1f93628_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue?vue&type=template&id=33acc6d0&
var EditExperienceTypevue_type_template_id_33acc6d0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "p-3 py-5",
    on: {
      "click": function ($event) {
        return _vm.$emit('closeEditForm');
      }
    }
  }, [_c('span', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        "hover": true
      }
    }],
    staticClass: "btn-action btn-back",
    attrs: {
      "variant": "light",
      "title": "Back"
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "arrow-left",
      "variant": "secondary",
      "font-scale": "1"
    }
  }), _vm._v(" Retour ")], 1)]), _c('div', {
    staticClass: "add-item-form"
  }, [_c('b-form', [_c('b-row', {
    staticClass: ""
  }, [_c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-titre"
    }
  }, [_vm._v(_vm._s(_vm.settings.label_value))]), _c('b-form-input', {
    attrs: {
      "id": "input-titre",
      "type": "text",
      "placeholder": "Titre",
      "required": ""
    },
    model: {
      value: _vm.form.value,
      callback: function ($$v) {
        _vm.$set(_vm.form, "value", $$v);
      },
      expression: "form.value"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Vendeur de cercueil ")])], 1)]), _c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-compaign"
    }
  }, [_vm._v(_vm._s(_vm.settings.label_company))]), _c('b-form-input', {
    attrs: {
      "id": "input-compaign",
      "type": "text",
      "placeholder": "la compagnie",
      "required": ""
    },
    model: {
      value: _vm.form.company,
      callback: function ($$v) {
        _vm.$set(_vm.form, "company", $$v);
      },
      expression: "form.company"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Luis Vuitton")])], 1)]), _c('b-col', {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-location"
    }
  }, [_vm._v(_vm._s(_vm.settings.label_address))]), _c('b-form-input', {
    attrs: {
      "id": "input-location",
      "type": "text",
      "placeholder": "Tokyo, Lagos",
      "required": ""
    },
    model: {
      value: _vm.form.address,
      callback: function ($$v) {
        _vm.$set(_vm.form, "address", $$v);
      },
      expression: "form.address"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Lagos ")])], 1)])], 1), _c('b-row', {
    staticClass: ""
  }, [_c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-date-debut"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_date_debut) + " ")]), _c('b-form-datepicker', {
    attrs: {
      "id": "input-date-debut",
      "type": "text",
      "placeholder": "Date de début",
      "required": "",
      "locale": "fr",
      "date-format-options": {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }
    },
    model: {
      value: _vm.date_debut,
      callback: function ($$v) {
        _vm.date_debut = $$v;
      },
      expression: "date_debut"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. 22 Juin")])], 1)]), _c('b-col', {
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "fi-input"
  }, [_c('label', {
    attrs: {
      "for": "input-date-fin"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_date_fin) + " ")]), _c('b-form-datepicker', {
    attrs: {
      "id": "input-date-fin",
      "type": "text",
      "placeholder": "Date de fin",
      "required": "",
      "locale": "fr",
      "date-format-options": {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }
    },
    model: {
      value: _vm.date_fin,
      callback: function ($$v) {
        _vm.date_fin = $$v;
      },
      expression: "date_fin"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. 22 Dec ")]), _c('b-form-checkbox', {
    staticClass: "mt-3 ml-2",
    attrs: {
      "required": ""
    },
    model: {
      value: _vm.form.en_poste,
      callback: function ($$v) {
        _vm.$set(_vm.form, "en_poste", $$v);
      },
      expression: "form.en_poste"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_en_poste) + " ")])], 1)])], 1), _c('b-row', {
    staticClass: ""
  }, [_c('b-col', [_c('div', {
    staticClass: "fi-input fi-input--textarea"
  }, [_c('label', {
    staticClass: "label-respon",
    attrs: {
      "for": "input-textarea-role"
    }
  }, [_vm._v(" " + _vm._s(_vm.settings.label_description) + " ")]), _c('ckeditor', {
    attrs: {
      "config": _vm.editorConfig
    },
    on: {
      "input": _vm.input,
      "namespaceloaded": _vm.onNamespaceLoaded
    },
    model: {
      value: _vm.form.description,
      callback: function ($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  }), _c('b-form-text', [_vm._v(" p.ex. Organisation d'événements VIP et prise en charge de clients exclusifs. ")])], 1)])], 1)], 1)], 1)]);
};
var EditExperienceTypevue_type_template_id_33acc6d0_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue?vue&type=script&lang=js&

class CreateInstance {
  constructor(value) {
    this.name = value;
  }
  getValue() {
    return this.name;
  }
}
/* harmony default export */ var EditExperienceTypevue_type_script_lang_js_ = ({
  name: "FormInput",
  components: {},
  props: {
    fValue: {
      type: Object,
      require: true,
      default: function () {
        return {};
      }
    },
    field: {
      type: Object,
      require: true,
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {
      form: {},
      editorData: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        toolbar: [{
          name: "document",
          items: ["Bold", "Italic", "-", "Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
        }],
        contentsCss: "@import '" + loadField.config.getBaseUrl() + "/themes/contrib/wb_universe/node_modules/%40fortawesome/fontawesome-free/css/all.min.css'; @import 'http://wb-horizon.com/themes/custom/wb_horizon_com/css/vendor-style.css';",
        on: {
          instanceReady: function (ev) {
            ev.sender.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            ev.sender.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      }
    };
  },
  computed: {
    settings() {
      if (this.field.entity_form) return this.field.entity_form.settings;else return {};
    },
    editorConfig() {
      //,ckawesome, ckeditorfa
      var extraPlugins = "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      return {
        extraPlugins: extraPlugins,
        ...this.preEditorConfig
      };
    },
    date_debut: {
      get() {
        if (this.form.date_debut) {
          const date = new Date(this.form.date_debut * 1000);
          let month = parseInt(date.getMonth()) + 1;
          return date.getFullYear() + "-" + month + "-" + date.getDate();
        } else return "";
      },
      set(val) {
        if (val) {
          const date = new Date(val);
          this.form.date_debut = Math.floor(date.getTime() / 1000);
        }
      }
    },
    date_fin: {
      get() {
        if (this.form.date_fin) {
          const date = new Date(this.form.date_fin * 1000);
          let month = parseInt(date.getMonth()) + 1;
          return date.getFullYear() + "-" + month + "-" + date.getDate();
        } else return "";
      },
      set(val) {
        console.log(" date_fin : ", val);
        if (val) {
          const date = new Date(val);
          this.form.date_fin = Math.floor(date.getTime() / 1000);
        }
      }
    }
  },
  mounted() {
    const v = new CreateInstance(this.fValue);
    this.form = v.getValue();
  },
  methods: {
    input(v) {
      // const vals = [];
      // vals.push({ value: v, format: "full_html" });
      // this.setValue(vals);
      this.form.description = v;
    },
    onNamespaceLoaded(CKEDITOR) {
      CKEDITOR.config.allowedContent = true;
      // CKEDITOR.config.contentsCss =
      //   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      // CKEDITOR.config.entities_processNumerical = 'force';
      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_EditExperienceTypevue_type_script_lang_js_ = (EditExperienceTypevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditExperienceType.vue





/* normalize component */
;
var EditExperienceType_component = (0,componentNormalizer/* default */.Z)(
  Ressouces_EditExperienceTypevue_type_script_lang_js_,
  EditExperienceTypevue_type_template_id_33acc6d0_render,
  EditExperienceTypevue_type_template_id_33acc6d0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditExperienceType = (EditExperienceType_component.exports);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/js/drap-drop-html5.js

/**
 * https://plnkr.co/edit/zYSBv9zIaLpa3rQr?p=preview&preview
 * https://javascript.info/mouse-drag-and-drop
 * https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
 */

class DragAndDrop {
  constructor(items, options = {}) {
    this.items = items;
    this.options = this.mergeOptions(options);
    this.dragSrcEl = null;
    this.oldIndex = null;
    this.newIndex = null;
  }
  sortable() {
    const items = this.items;
    var self = this;
    const custom_class = ["border", "border-success", "shadow"];
    function emit_data() {
      if (self.oldIndex !== null && self.newIndex !== null) {
        const event = new CustomEvent(self.options.event_name, {
          detail: {
            oldIndex: self.oldIndex,
            newIndex: self.newIndex
          }
        });
        document.dispatchEvent(event);
      }
    }
    const move = (arr, old_index, new_index) => {
      while (old_index < 0) {
        old_index += arr.length;
      }
      while (new_index < 0) {
        new_index += arr.length;
      }
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    };
    function getDomIndex(target) {
      return [].slice.call(target.parentNode.children).indexOf(target);
    }
    function handleDragStart(e) {
      // à chaque nouveau deplacement on remet les indices à null.
      self.oldIndex = null;
      self.newIndex = null;
      //
      self.oldIndex = getDomIndex(this);
      this.style.opacity = "0.5";
      self.dragSrcEl = this;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", this.innerHTML);
    }
    function handleDragEnd(e) {
      this.style.opacity = "1";
      for (const item of items.children) {
        item.classList.remove(...custom_class);
      }
    }
    function handleDragOver(e) {
      e.preventDefault();
      this.classList.add(...custom_class);
      return false;
    }
    function handleDragEnter(e) {
      //this.classList.add(...custom_class);
    }
    function handleDragLeave(e) {
      this.classList.remove(...custom_class);
    }
    function handleDrop(e) {
      e.stopPropagation(); // stops the browser from redirecting.
      if (self.dragSrcEl !== this) {
        self.newIndex = getDomIndex(this);
        if (self.options.moveHtml) {
          self.dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData("text/html");
        }
        emit_data();
      }
      return false;
    }
    for (const item of items.children) {
      item.addEventListener("dragstart", handleDragStart);
      item.addEventListener("dragover", handleDragOver);
      item.addEventListener("dragenter", handleDragEnter);
      item.addEventListener("dragleave", handleDragLeave);
      item.addEventListener("dragend", handleDragEnd);
      item.addEventListener("drop", handleDrop);
      item.setAttribute("draggable", true);
    }
  }
  destroyed() {
    const items = this.items;
    function handleDragStart() {
      //
    }
    function handleDragOver() {
      //
    }
    function handleDragEnter() {
      //
    }
    function handleDragLeave() {
      //
    }
    function handleDragEnd() {
      //
    }
    function handleDrop() {
      //
    }
    for (const item of items.children) {
      item.removeEventListener("dragstart", handleDragStart);
      item.removeEventListener("dragover", handleDragOver);
      item.removeEventListener("dragenter", handleDragEnter);
      item.removeEventListener("dragleave", handleDragLeave);
      item.removeEventListener("dragend", handleDragEnd);
      item.removeEventListener("drop", handleDrop);
      item.setAttribute("draggable", false);
    }
  }
  defaultOptions() {
    return {
      event_name: "drap-drop-html5" // à utiliser si on a plus d'une liste, car chaque evenement doit emettre son propre evenement.
    };
  }

  mergeOptions(OverridesOptions) {
    const options = this.defaultOptions();
    for (const i in options) {
      if (OverridesOptions[i]) {
        options[i] = OverridesOptions[i];
      }
    }
    return options;
  }
}

//
/* harmony default export */ var drap_drop_html5 = (DragAndDrop);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=script&lang=js&



const defaultValue = () => {
  return {
    value: "Developpeur web",
    company: "Nutibe",
    address: "",
    date_debut: "",
    date_fin: "",
    description: "s",
    format: null
  };
};
/* harmony default export */ var ExperienceTypevue_type_script_lang_js_ = ({
  name: "ExperienceType",
  components: {
    EditExperienceType: EditExperienceType
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    addButtonTitle: {
      type: String,
      default: "Ajouter"
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      idHtml: "sort-" + Math.random().toString(36),
      currentEditValue: {},
      showFormEdit: false,
      sortable: null
    };
  },
  computed: {
    event_name() {
      return "drap-drop-html5" + this.idHtml;
    }
  },
  watch: {
    model: {
      handler: function () {
        this.destroyedSortable();
        setTimeout(() => {
          this.initSortable();
        }, 500);
      },
      deep: true
    }
  },
  mounted() {
    this.initSortable();
    this.drap_drop_event();
  },
  methods: {
    input(v) {
      const vals = [];
      vals.push({
        value: v
      });
      // this.setValue(vals);
    },

    //
    add() {
      this.$emit("addNewValue", defaultValue());
      this.destroyedSortable();
    },
    //
    removeField(index) {
      console.log("removeField in fields : ", index);
      this.$emit("removeField", index);
    },
    Edit(value) {
      this.currentEditValue = value;
      this.showFormEdit = true;
    },
    closeEditForm() {
      this.showFormEdit = false;
    },
    drap_drop_event() {
      document.addEventListener(this.event_name, even => {
        if (even.detail) {
          this.$emit("array_move", even.detail);
        }
      }, false);
    },
    destroyedSortable() {
      if (this.sortable) {
        this.sortable.destroyed();
        this.sortable = null;
      }
    },
    initSortable() {
      if (!this.sortable) {
        this.sortable = new drap_drop_html5(document.getElementById(this.idHtml), {
          event_name: this.event_name
        });
        this.sortable.sortable();
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_ExperienceTypevue_type_script_lang_js_ = (ExperienceTypevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=style&index=0&id=c1f93628&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue?vue&type=style&index=0&id=c1f93628&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ExperienceType.vue



;


/* normalize component */

var ExperienceType_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_ExperienceTypevue_type_script_lang_js_,
  ExperienceTypevue_type_template_id_c1f93628_scoped_true_render,
  ExperienceTypevue_type_template_id_c1f93628_scoped_true_staticRenderFns,
  false,
  null,
  "c1f93628",
  null
  
)

/* harmony default export */ var ExperienceType = (ExperienceType_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue?vue&type=template&id=d3c83bfa&
var MultiSelectvue_type_template_id_d3c83bfa_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "autocomplete"
        }, [_c('multiselect', {
          attrs: {
            "options": _vm.options,
            "custom-label": _vm.nameWithLang,
            "placeholder": "",
            "label": "text",
            "track-by": "text",
            "show-no-results": false,
            "showLabels": false,
            "loading": _vm.isLoading
          },
          on: {
            "search-change": _vm.asyncFind,
            "select": _vm.selectUser
          },
          model: {
            value: _vm.model.value,
            callback: function ($$v) {
              _vm.$set(_vm.model, "value", $$v);
            },
            expression: "model.value"
          }
        }, [_c('template', {
          slot: "noResult"
        }, [_c('span', {
          staticClass: "option__titl d-none"
        }, [_vm._v(" Aucun contenu ")])]), _c('template', {
          slot: "placeholder"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Le terme n'existe pas ")])]), _c('template', {
          slot: "noOptions"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Saisir un terme ")])])], 2), _c('div', {
          staticClass: "text-danger"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)], 1)])];
      }
    }])
  })], 1);
};
var MultiSelectvue_type_template_id_d3c83bfa_staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__(92);
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var modules_es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ../drupal-vuejs/src/App/utilities.js + 1 modules
var utilities = __webpack_require__(4229);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/Confs.js
/* harmony default export */ var Confs = ({
  baseURl: "/jsonapi",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  }
});
// EXTERNAL MODULE: ../drupal-vuejs/src/config.js
var config = __webpack_require__(1269);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/buildFilter.js

class filters {
  constructor(query = "") {
    this.query = query;
    //
  }

  addFilter(fieldName, operator, value) {
    var key = "fil-" + config/* default.getRandomIntInclusive */.Z.getRandomIntInclusive();
    this.addParam(key, "path", fieldName);
    this.addParam(key, "operator", operator);
    this.addParam(key, "value", value);
    return this.query;
  }
  addParam(key, action, value) {
    if (this.query && this.query !== "") {
      this.query += "&";
    }
    this.query += `filter[${key}][condition][${action}]=${value}`;
  }
}
/* harmony default export */ var buildFilter = (filters);
;// CONCATENATED MODULE: ../drupal-vuejs/src/App/jsonApi/termsTaxo.js




class termsTaxo {
  constructor(vid) {
    this.vid = vid;
    //
    this.url = Confs.baseURl + "/taxonomy_term/" + this.vid;
    this.terms = [];
  }
  /**
   * Recupere les terms
   */
  get() {
    return new Promise(resolv => {
      utilities/* default.get */.Z.get(this.url, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Recupere les terms
   */
  getSearch(search) {
    const filter = new buildFilter();
    filter.addFilter("name", "CONTAINS", search);
    return new Promise(resolv => {
      utilities/* default.get */.Z.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValue(term) {
    const filter = new buildFilter();
    filter.addFilter("name", "=", term);
    return new Promise(resolv => {
      utilities/* default.get */.Z.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValueByTid(id) {
    const filter = new buildFilter();
    filter.addFilter("tid", "=", id);
    return new Promise((resolv, reject) => {
      utilities/* default.get */.Z.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      }).catch(er => {
        reject(er);
      });
    });
  }

  /**
   *
   * @returns *
   */
  getValueById(id) {
    const filter = new buildFilter();
    filter.addFilter("id", "=", id);
    return new Promise(resolv => {
      utilities/* default.get */.Z.get(this.url + "?" + filter.query, Confs.headers).then(resp => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Retourne les termes sous formes de liste d'otpions.
   */
  getOptions() {
    const options = [];
    for (const i in this.terms.data) {
      const term = this.terms.data[i];
      options.push({
        text: term.attributes.name,
        value: term.attributes.drupal_internal__tid
      });
    }
    return options;
  }
}
/* harmony default export */ var jsonApi_termsTaxo = (termsTaxo);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue?vue&type=script&lang=js&





/* harmony default export */ var MultiSelectvue_type_script_lang_js_ = ({
  name: "MultiSelect",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    Multiselect: (vue_multiselect_min_default())
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      options: []
    };
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      console.log("set value : ", vals);
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    nameWithLang({
      text
    }) {
      return `${text}`;
    },
    asyncFind(search) {
      if (search.length >= 2) {
        // Doit etre dynamique.
        let vocabulary = "domaine_Compétence";
        const terms = new jsonApi_termsTaxo(vocabulary);
        this.isLoading = true;
        terms.getSearch(search).then(() => {
          this.options = terms.getOptions();
          this.isLoading = false;
        });
        // loadField
      }
    },

    selectUser(input) {
      const vals = [];
      vals.push({
        target_id: input.value
      });
      this.setValue(vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_MultiSelectvue_type_script_lang_js_ = (MultiSelectvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/MultiSelect.vue



;


/* normalize component */

var MultiSelect_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_MultiSelectvue_type_script_lang_js_,
  MultiSelectvue_type_template_id_d3c83bfa_render,
  MultiSelectvue_type_template_id_d3c83bfa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiSelect = (MultiSelect_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=template&id=7a50ba2e&scoped=true&
var ValueNiveauvue_type_template_id_7a50ba2e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "complexe_field",
    class: _vm.classCss
  }, [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }]
  }, [_vm._v(_vm._s(_vm.field.label))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "pb-3 field-mutiple",
    attrs: {
      "id": _vm.idHtml
    }
  }, _vm._l(_vm.model[_vm.field.name], function (val, k) {
    return _c('div', {
      key: k,
      staticClass: "field-item-value mb-4"
    }, [_c('div', {
      staticClass: "bg-light p-4 px-5"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [val ? _c('div', {
      staticClass: "text"
    }, [val && val.target_id && _vm.terms['tid-' + val.target_id] ? _c('div', {
      staticClass: "font-weight-bold"
    }, [_vm._v(" " + _vm._s(_vm.terms["tid-" + val.target_id].name) + " ")]) : _vm._e(), !_vm.terms['tid-' + val.target_id] ? _c('i', {
      staticClass: "text-muted font-weight-bold"
    }, [_vm._v(" Compétence ... ")]) : _vm._e(), _c('div', {
      staticClass: "d-flex"
    }, [_c('span', [_vm._v(" " + _vm._s(_vm.field.settings.niveau_options[val.niveau]) + " ")])])]) : _vm._e(), _c('div', {
      staticClass: "icon-buttons"
    }, [_c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-5",
      attrs: {
        "variant": "light",
        "title": "Editer"
      },
      on: {
        "click": function ($event) {
          return _vm.Edit(val);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "pencil-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action btn-drag-drop mr-5",
      attrs: {
        "variant": "light",
        "title": "Glisser-déposer"
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "arrows-move",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1), _c('span', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover",
        modifiers: {
          "hover": true
        }
      }],
      staticClass: "btn-action mr-4",
      attrs: {
        "variant": "light",
        "title": "Supprimer"
      },
      on: {
        "click": function ($event) {
          return _vm.removeField(k);
        }
      }
    }, [_c('b-icon', {
      attrs: {
        "icon": "trash-fill",
        "variant": "secondary",
        "font-scale": "1"
      }
    })], 1)])])])]);
  }), 0), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showFormEdit,
      expression: "!showFormEdit"
    }],
    staticClass: "add-new-card",
    on: {
      "click": _vm.add
    }
  }, [_c('div', {
    staticClass: "anc-content d-flex align-items-center"
  }, [_c('b-icon', {
    staticClass: "text-info",
    attrs: {
      "icon": "plus-circle-fill",
      "font-scale": "1.5"
    }
  }), _c('h4', {
    staticClass: "anc-titre"
  }, [_vm._v(_vm._s(_vm.addButtonTitle))])], 1)]), _vm.showFormEdit ? _c('EditValueNiveau', {
    attrs: {
      "f-value": _vm.currentEditValue,
      "field": _vm.field,
      "terms": _vm.terms
    },
    on: {
      "closeEditForm": _vm.closeEditForm,
      "setValue": _vm.setValue,
      "addTermsInCache": _vm.addTermsInCache
    }
  }) : _vm._e()], 1);
};
var ValueNiveauvue_type_template_id_7a50ba2e_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue?vue&type=template&id=36b8aa6e&
var EditValueNiveauvue_type_template_id_36b8aa6e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('div', {
    staticClass: "p-3 py-5",
    on: {
      "click": function ($event) {
        return _vm.$emit('closeEditForm');
      }
    }
  }, [_c('span', {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover",
      modifiers: {
        "hover": true
      }
    }],
    staticClass: "btn-action btn-back",
    attrs: {
      "variant": "light",
      "title": "Back"
    }
  }, [_c('b-icon', {
    attrs: {
      "icon": "arrow-left",
      "variant": "secondary",
      "font-scale": "1"
    }
  }), _vm._v(" Retour ")], 1)]), _c('div', {
    staticClass: "add-item-form"
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.settings.label_target_id
          }
        }, [_c('div', {
          staticClass: "autocomplete"
        }, [_c('multiselect', {
          attrs: {
            "options": _vm.options,
            "custom-label": _vm.nameWithLang,
            "placeholder": "",
            "label": "text",
            "track-by": "text",
            "show-no-results": false,
            "showLabels": false,
            "loading": _vm.isLoading
          },
          on: {
            "search-change": _vm.asyncFind,
            "select": _vm.selectUser
          },
          model: {
            value: _vm.value_select,
            callback: function ($$v) {
              _vm.value_select = $$v;
            },
            expression: "value_select"
          }
        }, [_c('template', {
          slot: "noResult"
        }, [_c('span', {
          staticClass: "option__titl d-none"
        }, [_vm._v(" Aucun contenu ")])]), _c('template', {
          slot: "placeholder"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Le terme n'existe pas ")])]), _c('template', {
          slot: "noOptions"
        }, [_c('span', {
          staticClass: "option__title"
        }, [_vm._v(" Saisir un terme ")])])], 2), _c('div', {
          staticClass: "text-danger"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0)], 1)]), _c('div', {
          staticClass: "fi-input"
        }, [_c('label', {
          attrs: {
            "for": "input-niveau"
          }
        }, [_vm._v(_vm._s(_vm.settings.label_niveau))]), _c('b-form-select', {
          attrs: {
            "id": "input-niveau",
            "type": "text",
            "placeholder": "Titre",
            "required": "",
            "options": _vm.optionsNiveau
          },
          on: {
            "change": _vm.selectNiveau
          },
          model: {
            value: _vm.form.niveau,
            callback: function ($$v) {
              _vm.$set(_vm.form, "niveau", $$v);
            },
            expression: "form.niveau"
          }
        }), _c('b-form-text', [_vm._v(" p.ex. Moyen ")])], 1)];
      }
    }])
  })], 1)]);
};
var EditValueNiveauvue_type_template_id_36b8aa6e_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue?vue&type=script&lang=js&





class EditValueNiveauvue_type_script_lang_js_CreateInstance {
  constructor(value) {
    this.name = value;
  }
  getValue() {
    return this.name;
  }
}
/* harmony default export */ var EditValueNiveauvue_type_script_lang_js_ = ({
  name: "MultiSelect",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_,
    Multiselect: (vue_multiselect_min_default())
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    fValue: {
      type: Object,
      require: true,
      default: function () {
        return {};
      }
    },
    terms: {
      type: [Object],
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {
      isLoading: false,
      options: [],
      form: {},
      value_select: null
    };
  },
  computed: {
    settings() {
      if (this.field.settings) {
        return this.field.settings;
      } else return {};
    },
    optionsNiveau() {
      if (this.field.settings && this.field.settings.niveau_options) {
        const options = [];
        for (const i in this.field.settings.niveau_options) {
          options.push({
            text: this.field.settings.niveau_options[i],
            value: i
          });
        }
        return options;
      } else return [];
    }
  },
  mounted() {
    const v = new EditValueNiveauvue_type_script_lang_js_CreateInstance(this.fValue);
    this.form = v.getValue();
    this.buildDefaultOptions();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    nameWithLang({
      text
    }) {
      return `${text}`;
    },
    asyncFind(search) {
      if (search.length >= 2) {
        // Doit etre dynamique.
        let vocabulary = "domaine_Compétence";
        const terms = new jsonApi_termsTaxo(vocabulary);
        this.isLoading = true;
        terms.getSearch(search).then(() => {
          this.options = terms.getOptions();
          this.isLoading = false;
          this.$emit("addTermsInCache", terms.terms.data);
        });
        //
      }
    },

    selectUser(input) {
      console.log("update input Term : ", input.value);
      this.form.target_id = input.value;
      this.$emit("setValue", input);
    },
    selectNiveau() {
      console.log("update input Niveau");
      this.$emit("setValue");
    },
    buildDefaultOptions() {
      for (const i in this.terms) {
        const option = {
          text: this.terms[i].name,
          value: this.terms[i].drupal_internal__tid
        };
        this.options.push(option);
        if (this.terms[i].drupal_internal__tid == this.form.target_id) {
          this.value_select = option;
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_EditValueNiveauvue_type_script_lang_js_ = (EditValueNiveauvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/EditValueNiveau.vue



;


/* normalize component */

var EditValueNiveau_component = (0,componentNormalizer/* default */.Z)(
  Ressouces_EditValueNiveauvue_type_script_lang_js_,
  EditValueNiveauvue_type_template_id_36b8aa6e_render,
  EditValueNiveauvue_type_template_id_36b8aa6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EditValueNiveau = (EditValueNiveau_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=script&lang=js&




const ValueNiveauvue_type_script_lang_js_defaultValue = () => {
  return {
    target_id: null,
    niveau: 1
  };
};
/* harmony default export */ var ValueNiveauvue_type_script_lang_js_ = ({
  name: "MultiSelect",
  components: {
    EditValueNiveau: EditValueNiveau
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    },
    addButtonTitle: {
      type: String,
      default: "Ajouter"
    }
  },
  data() {
    return {
      idHtml: "sort-" + Math.random().toString(36),
      currentEditValue: {},
      showFormEdit: false,
      /**
       * Contient les termes recuperés.
       * ( Evite d'effectuer pluiseurs requetes pour un meme terme )
       */
      terms: {},
      sortable: null
    };
  },
  computed: {
    event_name() {
      return "drap-drop-html5" + this.idHtml;
    }
  },
  watch: {
    model: {
      handler: function () {
        this.destroyedSortable();
        setTimeout(() => {
          this.initSortable();
        }, 500);
      },
      deep: true
    }
  },
  mounted() {
    this.initSortable();
    this.drap_drop_event();
    this.loadDefaults();
  },
  methods: {
    add() {
      this.$emit("addNewValue", ValueNiveauvue_type_script_lang_js_defaultValue());
      this.destroyedSortable();
    },
    //
    removeField(index) {
      this.$emit("removeField", index);
    },
    Edit(value) {
      this.currentEditValue = value;
      this.showFormEdit = true;
    },
    closeEditForm() {
      this.showFormEdit = false;
    },
    getTermByTid(tid) {
      if (!this.terms["tid-" + tid]) {
        // Doit etre dynamique.
        let vocabulary = "domaine_Compétence";
        const terms = new jsonApi_termsTaxo(vocabulary);
        terms.getValueByTid(tid).then(resp => {
          if (resp.data[0] && resp.data[0].attributes) this.$set(this.terms, "tid-" + tid, resp.data[0].attributes);else this.$set(this.terms, "tid-" + tid, {});
        });
      }
    },
    addTermsInCache(vals) {
      vals.forEach(term => {
        if (!this.terms["tid-" + term.attributes.drupal_internal__tid]) {
          this.$set(this.terms, "tid-" + term.attributes.drupal_internal__tid, term.attributes);
        }
      });
    },
    loadDefaults() {
      this.model[this.field.name].forEach(item => {
        this.getTermByTid(item.target_id);
      });
    },
    /**
     * On passe les données valides au champs.
     */
    setValue() {
      const vals = [];
      // suppression des donnée non valide.
      this.model[this.field.name].forEach(item => {
        if (item.target_id) {
          vals.push(item);
        }
      });
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    drap_drop_event() {
      document.addEventListener(this.event_name, even => {
        if (even.detail) {
          this.$emit("array_move", even.detail);
        }
      }, false);
    },
    destroyedSortable() {
      if (this.sortable) {
        this.sortable.destroyed();
        this.sortable = null;
      }
    },
    initSortable() {
      if (!this.sortable) {
        this.sortable = new drap_drop_html5(document.getElementById(this.idHtml), {
          event_name: this.event_name
        });
        this.sortable.sortable();
      }
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_ValueNiveauvue_type_script_lang_js_ = (ValueNiveauvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=style&index=0&id=7a50ba2e&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue?vue&type=style&index=0&id=7a50ba2e&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/ValueNiveau.vue



;


/* normalize component */

var ValueNiveau_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_ValueNiveauvue_type_script_lang_js_,
  ValueNiveauvue_type_template_id_7a50ba2e_scoped_true_render,
  ValueNiveauvue_type_template_id_7a50ba2e_scoped_true_staticRenderFns,
  false,
  null,
  "7a50ba2e",
  null
  
)

/* harmony default export */ var ValueNiveau = (ValueNiveau_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/DrupalEmail.vue?vue&type=template&id=caa4114e&
var DrupalEmailvue_type_template_id_caa4114e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classCss
  }, [_c('ValidationProvider', {
    attrs: {
      "name": _vm.field.name,
      "rules": _vm.getRules()
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (v) {
        return [_c('b-form-group', {
          attrs: {
            "label": _vm.field.label,
            "description": _vm.field.description
          }
        }, [_c('div', {
          staticClass: "field-item-value"
        }, [_c('b-form-input', {
          attrs: {
            "placeholder": _vm.field.placeholder,
            "state": _vm.getValidationState(v),
            "name": _vm.field.name,
            "debounce": "500",
            "type": "email"
          },
          on: {
            "input": _vm.input
          },
          model: {
            value: _vm.input_value,
            callback: function ($$v) {
              _vm.input_value = $$v;
            },
            expression: "input_value"
          }
        })], 1), v.errors ? _c('div', {
          staticClass: "text-danger my-2"
        }, _vm._l(v.errors, function (error, ii) {
          return _c('small', {
            key: ii,
            staticClass: "d-block"
          }, [_vm._v(" " + _vm._s(error) + " ")]);
        }), 0) : _vm._e()])];
      }
    }])
  })], 1);
};
var DrupalEmailvue_type_template_id_caa4114e_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/fieldsDrupal/DrupalEmail.vue?vue&type=script&lang=js&




/* harmony default export */ var DrupalEmailvue_type_script_lang_js_ = ({
  name: "DrupalEmail",
  components: {
    ValidationProvider: vee_validate_esm/* ValidationProvider */.d_
  },
  props: {
    classCss: {
      type: [Array],
      default: function () {
        return [];
      }
    },
    field: {
      type: Object,
      required: true
    },
    model: {
      type: [Object, Array],
      required: true
    },
    namespaceStore: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      input_value: null
    };
  },
  watch: {
    /**
     * Lorsque le champs est constrit via les boucle dynamique,
     * le template n'est pas reconstruit ducoup la valeur du precedent champs est concerservé.
     * On applique ce watch et on verra les resultats.
     * Cela ne s'execute que dans le cadre d'un watch et permet de ressoudre le probleme.
     */
    field() {
      this.input_value = this.getValue();
    }
  },
  mounted() {
    //On recupere la valeur par defaut pour chaque construction:
    this.input_value = this.getValue();
  },
  methods: {
    getValidationState({
      dirty,
      validated,
      valid = null
    }) {
      return (dirty || validated) && !valid ? valid : null;
    },
    getRules() {
      return loadField.getRules(this.field);
    },
    setValue(vals) {
      if (this.namespaceStore) {
        this.$store.dispatch(this.namespaceStore + "/setValue", {
          value: vals,
          fieldName: this.field.name
        });
      } else this.$store.dispatch("setValue", {
        value: vals,
        fieldName: this.field.name
      });
    },
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        return this.model[this.field.name][0].value;
      } else return null;
    },
    input(v) {
      const vals = [];
      vals.push({
        value: v
      });
      this.setValue(vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/DrupalEmail.vue?vue&type=script&lang=js&
 /* harmony default export */ var fieldsDrupal_DrupalEmailvue_type_script_lang_js_ = (DrupalEmailvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/DrupalEmail.vue





/* normalize component */
;
var DrupalEmail_component = (0,componentNormalizer/* default */.Z)(
  fieldsDrupal_DrupalEmailvue_type_script_lang_js_,
  DrupalEmailvue_type_template_id_caa4114e_render,
  DrupalEmailvue_type_template_id_caa4114e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DrupalEmail = (DrupalEmail_component.exports);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js
//import de ckeditor, ne fonctionne pas lorsqu'on est sur nm run serve.

external_commonjs_vue_commonjs2_vue_root_Vue_default().use((ckeditor_default()));













/* harmony default export */ var loadField = ({
  debug: false,
  /**
   * Contient les methodes de wbu-utilities provenant du parent.
   */
  config: {},
  getField(field) {
    var key = field.type;
    if (key == "list_string" && field.cardinality == 1) key = "boolean";
    var template;
    if (this.debug) console.log(" key : ", key);
    switch (key) {
      case "string":
      case "string_textfield":
        template = drupal_string;
        break;
      case "email":
      case "email_default":
        template = DrupalEmail;
        break;
      case "link":
        template = drupal_link;
        break;
      case "color_theme_field_type":
        template = drupal_color;
        break;
      case "boolean":
        template = drupal_boolean;
        break;
      case "list_string":
        template = drupal_list_string;
        break;
      case "render_html":
        template = html_render;
        break;
      case "text_long":
      case "text_textarea":
        template = textarea_ckeditor;
        break;
      case "image":
      case "image_image":
        template = drupal_file;
        break;
      case "experience_type":
      case "experience_widget_type":
        template = ExperienceType;
        break;
      case "entity_reference":
      case "entity_reference_autocomplete":
        // à ce state, on pourra distinguer plusieurs cas.
        if (field.definition_settings.target_type == "taxonomy_term") {
          template = MultiSelect;
        } else console.log("Champs sans rendu :", key, "\n field : ", field);
        break;
      case "value_niveau_type":
      case "value_niveau_widget_type":
        template = ValueNiveau;
        break;
      default:
        console.log("Champs sans rendu :", key, "\n field : ", field);
        break;
    }
    return template;
  },
  getImageUrl(fid, style = "medium") {
    return this.config.get("/vuejs-entity/image/" + fid + "/" + style);
  },
  getRules(field) {
    const rules = {};
    if (field.constraints) {
      for (const i in field.constraints) {
        if (i == "NotNull") {
          rules["required"] = true;
        }
      }
    }
    return rules;
  },
  getConfig(config) {
    this.config = config;
  }
});

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.430.js.map