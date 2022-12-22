"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] = (typeof self !== 'undefined' ? self : this)["webpackChunkBuilderCv"] || []).push([[242],{

/***/ 9853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapeDynamiqueSection; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeDynamiqueSection.vue?vue&type=template&id=41e62f44&
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
            "to": _vm.previewStep
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
        return [_vm._v(" " + _vm._s(_vm.headerBlock.title) + " ")];
      },
      proxy: true
    }])
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.headerBlock.text)
    }
  })]), _vm._l(_vm.buildFields(), function (render, k) {
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
var loadField = __webpack_require__(3520);
// EXTERNAL MODULE: ./src/request.js
var request = __webpack_require__(4269);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeDynamiqueSection.vue?vue&type=script&lang=js&





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
      layout_paragraphs: state => state.layout_paragraphs,
      user: state => state.user
    }),
    ...(0,vuex_esm/* mapGetters */.Se)(["etapes", "modelDynamique"]),
    nextStep() {
      const idEtape = parseInt(this.idEtape) + 1;
      const length = this.etapes.length;
      if (idEtape < length) {
        if (length) {
          return "/layouts-sections/" + this.etapes[idEtape] + "/" + idEtape;
        } else return "/login";
      } else {
        if (this.user && this.user.uid) return "/save-cv";else return "/login";
      }
    },
    previewStep() {
      const idEtape = parseInt(this.idEtape) - 1;
      if (idEtape >= 0) {
        return "/layouts-sections/" + this.etapes[idEtape] + "/" + idEtape;
      } else return "/formation";
    },
    form() {
      if (this.keySections) {
        const fr = this.layout_paragraphs[this.keySections].form;
        return fr;
      } else return {};
    },
    form_sort() {
      if (this.keySections) {
        const fr = this.layout_paragraphs[this.keySections].form_sort;
        return fr;
      } else return {};
    },
    model() {
      if (this.keySections && this.layout_paragraphs[this.keySections] && this.layout_paragraphs[this.keySections].model) {
        const md = this.layout_paragraphs[this.keySections].model;
        return md;
      } else return {};
    },
    headerBlock() {
      const datas = {
        title: "",
        text: ""
      };
      switch (this.keySections) {
        case "competences_et_langues_cv_":
          datas.title = "Compétences et langues";
          datas.text = "<p> Les compétences que vous ajoutez devraient correspondre aux prérequis du poste auquel vous postulez. </p> <p>Vous pouvez remplir la section langue si vous parlez plus d'une langue.</p> ";
          break;
        case "loisir_cv_":
          datas.title = "Centres d'intérêt ou Loisirs";
          datas.text = "<p> Demandez-vous si l’activité que vous pratiquez vous donne une bonne image, si ce hobby peut vous distinguer des autres candidats et si c’est une passion dont vous pourrez parler avec enthousiasme lors de l’entretien. Evitez les platitudes, les clichés et les lieux communs. </p>";
          break;
        default:
          break;
      }
      return datas;
    }
  },
  mounted() {
    //
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
    },
    addNewValue(value, render) {
      //console.log("addNewValue : ", render, "\n", value);
      const vals = this.layout_paragraphs[this.keySections].model[render.field.name];
      // Specifiquement à cette environnement, on ne peut pas mettre à jour le computed, this.model
      // On met à jour directement, la donnée present dans le layout.
      vals.push(value);
      this.$store.dispatch("storeForm/setValue", {
        value: vals,
        fieldName: render.field.name
      });
    },
    removeField(index, render) {
      this.model[render.field.name].splice(index, 1);
    },
    array_move(evt, render) {
      console.log(" Evt : ", evt, "\n Render : ", render);
      //if (evt.oldIndex == null || evt.newIndex == null) return;
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

/***/ })

}]);
//# sourceMappingURL=BuilderCv.umd.242.js.map