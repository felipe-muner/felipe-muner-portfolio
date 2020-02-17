import Vue from "vue";
import Vuex from "vuex";

import crud from "./crud";
import dataTableBigData from "./dataTableBigData";
import graphQLExample from "./graphQLExample";
import selectAutoComplete from "./selectAutoComplete";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    crud,
    dataTableBigData,
    graphQLExample,
    selectAutoComplete
  }
});
