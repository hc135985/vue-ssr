import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);
export default () => {
  return new vueRouter({
    mode:"history",
    routes:[
      {
        path: "/",
        component: () => import('../views/index'),
        name: "Index"
      }
    ]
  })
}
