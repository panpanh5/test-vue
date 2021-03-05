import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import axios from "axios";
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://192.168.0.108:8080"
//设置全局的
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = axios;
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");