import Vue from 'vue'
import router from './router';
import VueI18n from 'vue-i18n';
import BootstrapVue from 'bootstrap-vue';
import DelibirdCommonWebComponent from 'delibird-common-web-component'
import Cookies from 'js-cookie';
import langData from './language/lang';

import App from './App.vue'

Vue.config.productionTip = false

// bootstrap vue 초기화
Vue.use(BootstrapVue);


// 언어 설정
Vue.use(VueI18n);
let lang = 'en';
if(typeof Cookies.get('lang') === 'undefined') {
  lang = navigator.language.substring(0, 2);
  if (lang === 'ko') Cookies.set('lang', lang);
} else {
  lang = Cookies.get('lang');
}

langData.en.message = Object.assign(langData.en.message, DelibirdCommonWebComponent.lang.en.message);
langData.ko.message = Object.assign(langData.ko.message, DelibirdCommonWebComponent.lang.ko.message);
const i18n = new VueI18n({
  locale: lang,
  messages: langData
});
// 언어 설정


// common-component 초기화
// common-component 라이브러이에 있는 common-language 컴포넌트를 사용합니다.
Vue.use(DelibirdCommonWebComponent, {env: 'development'});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
