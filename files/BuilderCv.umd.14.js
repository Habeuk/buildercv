"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[14],{

/***/ 8312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapeFormation; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeFormation.vue?vue&type=template&id=46cd50e4&
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
            "to": "/experience"
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
            "to": _vm.nextStep
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
        return [_vm._v(" Vos diplomes / formations ")];
      },
      proxy: true
    }])
  }, [_c('div', [_vm._v(" Commencez par vos études les plus récentes et remontez dans le passé. Si vous avez suivi de nombreuses études, n'ajoutez que les plus récentes et pertinentes. ")])]), _vm._l(_vm.buildFields(), function (render, k) {
    return _c(render.template, {
      key: k,
      tag: "component",
      attrs: {
        "field": render.field,
        "model": render.model,
        "class-css": ['mb-5'],
        "namespace-store": "storeForm"
      },
      on: {
        "addNewValue": function ($event) {
          return _vm.addNewValue($event, render);
        },
        "removeField": function ($event) {
          return _vm.removeField($event, render);
        },
        "array_move": function ($event) {
          return _vm.array_move($event, render);
        }
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
var modalForm = __webpack_require__(5499);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5340);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 73 modules
var loadField = __webpack_require__(8214);
// EXTERNAL MODULE: ./src/request.js
var request = __webpack_require__(4269);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeFormation.vue?vue&type=script&lang=js&





/* harmony default export */ var EtapeFormationvue_type_script_lang_js_ = ({
  name: "EtapeFormation",
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
      form: state => state.formation.form,
      model: state => state.formation.model,
      form_sort: state => state.formation.form_sort,
      user: state => state.user,
      layout_paragraphs: state => state.layout_paragraphs
    }),
    ...(0,vuex_esm/* mapGetters */.Se)(["etapes"]),
    nextStep() {
      // if (this.user && this.user.uid) return "/save-cv";
      // else return "/login";
      if (this.etapes.length) {
        return "/layouts-sections/" + this.etapes[0] + "/0";
      } else return "/login";
    }
  },
  methods: {
    buildFields() {
      const fields = [];
      loadField/* default.getConfig */.Z.getConfig(request/* default */.Z);
      if (this.form_sort) this.form_sort.forEach(field => {
        fields.push({
          template: loadField/* default.getField */.Z.getField(field),
          field: field,
          model: this.model
        });
      });
      return fields;
    },
    buildFieldsOld() {
      loadField/* default.getConfig */.Z.getConfig(request/* default */.Z);
      const fields = [];
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
    },
    addNewValue(value, render) {
      this.model[render.field.name].push(value);
    },
    removeField(index, render) {
      this.model[render.field.name].splice(0, index);
    },
    array_move(evt, render) {
      const moveItem = (arr, fromIndex, toIndex) => {
        let itemRemoved = arr.splice(fromIndex, 1); // assign the removed item as an array
        arr.splice(toIndex, 0, itemRemoved[0]); // insert itemRemoved into the target index
        return arr;
      };
      const vals = moveItem(this.model[render.field.name], evt.oldIndex, evt.newIndex);
      this.$store.dispatch("storeForm/setValue", {
        value: vals,
        fieldName: render.field.name
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/formulaires/EtapeFormation.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_EtapeFormationvue_type_script_lang_js_ = (EtapeFormationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/EtapeFormation.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_EtapeFormationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EtapeFormation = (component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.14.js.map