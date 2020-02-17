import Vue from "vue";
import VueRouter from "vue-router";
import GraphQl from "../views/GraphQLExample.vue";
import DataTableBigData from "../views/DataTableBigData.vue";
import CRUD from "../views/CRUD.vue";
import SelectAutoComplete from "../views/SelectAutoComplete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/graphql-example",
    name: "GraphQLExample",
    component: () => import(/* webpackChunkName: "about" */ GraphQl)
  },
  {
    path: "/data-table-example",
    name: "DataTableExample",
    component: () => import(/* webpackChunkName: "about" */ DataTableBigData)
  },
  {
    path: "/crud",
    name: "CRUD",
    component: () => import(/* webpackChunkName: "about" */ CRUD)
  },
  {
    path: "/select-auto-complete",
    name: "SelectAutoComplete",
    component: () => import(/* webpackChunkName: "about" */ SelectAutoComplete)
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
