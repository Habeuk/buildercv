"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[605],{

/***/ 3605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsAllowedValues; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=template&id=390650b6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-form-group', {
    attrs: {
      "label": _vm.field.label
    }
  }, [_vm.field.type == 'options_select' ? _c('b-form-select', {
    attrs: {
      "options": _vm.options_allowed_values
    },
    on: {
      "change": _vm.input
    },
    model: {
      value: _vm.selected,
      callback: function ($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }) : _c('b-form-radio-group', {
    attrs: {
      "options": _vm.options_allowed_values,
      "name": _vm.field.name
    },
    on: {
      "change": _vm.input
    },
    model: {
      value: _vm.selected,
      callback: function ($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ../components_bootstrapvuejs/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(6352);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=script&lang=js&

/* harmony default export */ var OptionsAllowedValuesvue_type_script_lang_js_ = ({
  name: "OptionsAllowedValues",
  components: {},
  props: {
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
      options: [],
      selected: null
    };
  },
  computed: {
    options_allowed_values() {
      const options = [];
      if (this.field.definition_settings.allowed_values) {
        for (const i in this.field.definition_settings.allowed_values) {
          options.push({
            value: i,
            text: this.field.definition_settings.allowed_values[i]
          });
        }
      }
      return options;
    }
  },
  methods: {
    getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        const keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else return null;
    },
    input(val) {
      const vals = [];
      vals.push({
        value: val
      });
      this.$emit("setValue", vals);
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsAllowedValuesvue_type_script_lang_js_ = (OptionsAllowedValuesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsAllowedValues.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsAllowedValuesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsAllowedValues = (component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.605.js.map