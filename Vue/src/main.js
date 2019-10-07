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

//vue-progressbar
import VueProgressBar from 'vue-progressbar'


// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

//vue-js-modal
Vue.use(VModal, { dynamic: true, injectModalsContainer: true, dynamicDefaults: { clickToClose: true } });

//vuejs-dialog  Tell Vue to install the plugin.
Vue.use(VuejsDialog);
console.log(VuejsDialogMixin);

//vue-progressbar
const options = {
    //color: '#bffaf3',
    //failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
Vue.use(VueProgressBar, options);

Vue.config.productionTip = true;

Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});


var app = new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');

export default app;