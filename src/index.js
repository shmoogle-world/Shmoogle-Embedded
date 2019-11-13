const Vue = require('vue');
import App from './components/App.vue';
import VModal from 'vue-js-modal';
import VTooltip from 'v-tooltip';

Vue.use(VTooltip);
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } });

new Vue({
    render: h => h(App),
 }).$mount('#shw-search')

/**
 * This file is supposed to generate a functional webpack containing components written in vue.
 */