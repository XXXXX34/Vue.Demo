import Vue from 'vue';
import router from './router'
import App from './App.vue';
import store from './store'
// 导入 table 和 分页组件
import { VTable, VPagination } from 'vue-easytable'

//vue-js-modal
import VModal from 'vue-js-modal'

//vuejs-dialog
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

//vue-js-modal
Vue.use(VModal, { dynamic: true, injectModalsContainer: true, dynamicDefaults: { clickToClose: true } });

//vuejs-dialog  Tell Vue to install the plugin.
Vue.use(VuejsDialog);
console.log(VuejsDialogMixin);

Vue.config.productionTip = true;

Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});


new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');