import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'


Vue.prototype.$axios = axios;
Vue.config.productionTip = false

//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})


Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == "wide") {
      el.style.maxWidth = '1260px';
    }else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }

    if (binding.arg = 'column') {
      el.style.background = '#6677cc';
      el.style.padding = '20px';
    }
  }
})


//自定义一个过滤器
// Vue.filter("to-uppercase",function(value) {
//   return value.toUpperCase();
// })

//正常时将内容变少；
Vue.filter("snippet",function(value){
  return value.slice(0,100) + "..."
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
