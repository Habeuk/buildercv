"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[204],{

/***/ 9204:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OptionsEntities; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=template&id=70654e40&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-form-group', {
    attrs: {
      "label": _vm.field.label
    }
  }, [_vm.field.type == 'options_select' ? _c('b-form-select', {
    attrs: {
      "options": _vm.options,
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
  }) : _c('b-form-radio-group', {
    attrs: {
      "options": _vm.options,
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
// EXTERNAL MODULE: ../drupal-vuejs/src/App/jsonApi/itemsEntity.js
var itemsEntity = __webpack_require__(1139);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 125 modules
var loadField = __webpack_require__(6074);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&



/* harmony default export */ var OptionsEntitiesvue_type_script_lang_js_ = ({
  name: "OptionsEntities",
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
  mounted() {
    this.loadTerms();
    this.selected = this.getValue();
  },
  methods: {
    loadTerms() {
      let entity_type_id = this.getFistVocab();
      if (entity_type_id && loadField/* default.config */.Z.config) {
        const terms = new itemsEntity/* default */.Z(entity_type_id, entity_type_id, loadField/* default.config */.Z.config);
        terms.get().then(() => {
          this.options = terms.getOptions();
        });
      }
    },
    /**
     * --
     */
    getFistVocab() {
      if (this.field.definition_settings.handler_settings.target_bundles) {
        const keys = Object.keys(this.field.definition_settings.handler_settings.target_bundles);
        return this.field.definition_settings.handler_settings.target_bundles[keys[0]];
      } else if (this.field.definition_settings.target_type) {
        return this.field.definition_settings.target_type;
      } else return null;
    },
    /**
     *
     * @param {*} val
     */
    input(val) {
      const vals = [];
      vals.push({
        target_id: val
      });
      this.$emit("setValue", vals);
    },
    /**
     * --
     */
    getValue() {
      if (this.model[this.field.name] && this.model[this.field.name][0]) {
        if (this.model[this.field.name][0].value) return this.model[this.field.name][0].value;else return this.model[this.field.name][0].target_id;
      } else return null;
    }
  }
});
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ressouces_OptionsEntitiesvue_type_script_lang_js_ = (OptionsEntitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ../components_bootstrapvuejs/src/components/Ressouces/OptionsEntities.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Ressouces_OptionsEntitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsEntities = (component.exports);

/***/ }),

/***/ 1139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5251);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4229);
/* harmony import */ var _Confs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6375);
/* harmony import */ var _buildFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5735);




class itemsEntity {
  constructor(entity_type_id, bundle = null, config = null) {
    this.entity_type_id = entity_type_id;
    //
    if (!bundle) {
      bundle = entity_type_id;
    }
    this.url = _Confs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].baseURl */ .Z.baseURl + "/" + this.entity_type_id + "/" + bundle;
    this.items = [];
    this.newConfig = config;
    // En function de l'environement on doit ajouter les paramettres de bases.( notament baseUrl, TestDomain, les methodes surchargées ).
    if (config) {
      // à ce state la surcharge total pose probleme, donc on doit surcharger par necessite.
      // utilities = {
      //   ...utilities,
      //   ...config,
      // };
      if (config.TestDomain) _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].TestDomain */ .Z.TestDomain = config.TestDomain;
    }
  }
  /**
   * Recupere les items en passant par le token.
   * ( ce cas de figure correspond à une application qui est sur le meme domaine ).
   */
  get() {
    return new Promise(resolv => {
      _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dGet */ .Z.dGet(this.url, _Confs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].headers */ .Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Recupere les items
   */
  getSearch(search) {
    const filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
    filter.addFilter("name", "CONTAINS", search);
    return new Promise(resolv => {
      _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dGet */ .Z.dGet(this.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].headers */ .Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValue(term) {
    const filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
    filter.addFilter("name", "=", term);
    return new Promise(resolv => {
      _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dGet */ .Z.dGet(this.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].headers */ .Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   *
   * @returns *
   */
  getValueByTid(id) {
    const filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
    filter.addFilter("tid", "=", id);
    return new Promise((resolv, reject) => {
      _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].dGet */ .Z.dGet(this.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].headers */ .Z.headers).then(resp => {
        this.items = resp.data;
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
    const filter = new _buildFilter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z();
    let fieldId = "id";
    switch (this.entity_type_id) {
      case "user":
        fieldId = "uid";
        break;
      case "domain":
        fieldId = "drupal_internal__id";
        break;
    }
    filter.addFilter(fieldId, "=", id);
    return new Promise(resolv => {
      _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(this.url + "?" + filter.query, _Confs_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].headers */ .Z.headers).then(resp => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Retourne les termes sous formes de liste d'otpions.
   */
  getOptions() {
    const options = [];
    for (const i in this.items.data) {
      const term = this.items.data[i];
      if (this.entity_type_id == "user") {
        options.push({
          text: term.attributes.name,
          value: term.attributes.drupal_internal__uid
        });
      } else if (term.attributes.name) {
        options.push({
          text: term.attributes.name,
          value: term.attributes.drupal_internal__id
        });
      } else if (term.attributes.label) {
        options.push({
          text: term.attributes.label,
          value: term.attributes.drupal_internal__id
        });
      }
    }
    return options;
  }
  /**
   * On a deux cas interne et externe au domaine, et en function de l'environnement
   * on doit utiliser token ou basic authentification.
   * ( On ajoute cette variable en attendant la validation des autres modules de plus
   * il faudra que dans "config" la methode dGet existe, ce qui n'est pas le cas pour certains environnement.
   * gestion-projet-v2 => OK (en mode serve)
   * edit-entity => ??
   * Creation-cv => ??
   * Creation de site web => ??
   * ).
   */
  remplaceConfig() {
    _utilities_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z = this.newConfig;
  }
}
/* harmony default export */ __webpack_exports__["Z"] = (itemsEntity);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.204.js.map