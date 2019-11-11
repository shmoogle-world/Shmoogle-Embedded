const Vue = require('vue');
import App from './components/App.vue';
import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } });

new Vue({
    render: h => h(App),
 }).$mount('#app')

