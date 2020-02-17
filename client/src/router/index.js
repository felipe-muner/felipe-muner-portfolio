import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/graphql-example",
    name: "GraphQLExample",
    component: () => import("../views/GraphQLExample.vue")
  },
  {
    path: "/data-table-example",
    name: "DataTableExample",
    component: () => import("../views/DataTableBigData.vue")
  },
  {
    path: "/crud",
    name: "CRUD",
    component: () => import("../views/CRUD.vue")
  },
  {
    path: "/select-auto-complete",
    name: "SelectAutoComplete",
    component: () => import("../views/SelectAutoComplete.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
