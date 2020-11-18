//这是工程的入口文件
import Vue from 'vue';
import App from './view/app/app.vue';

import './assets/styles/test.css';
import './assets/images/长期有耐心.gif'

const root = document.createElement('div')
document.body.appendChild(root)

//mount就是讲我们的App挂载到root这样一个根节点中去
new Vue({
  render: (h) => h(App)
}).$mount(root)