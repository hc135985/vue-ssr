import Vue from "vue";
import createRouter from "./router";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/_app.css';
Vue.use(ElementUI);


export default (context) => {
  const router = createRouter();
  const app = new Vue({
    router,
    components: { App },
    template: '<App/>'
  });
  return {
    app,
    router
  }
}
