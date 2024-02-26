import { createApp } from 'vue'

// import './style.css'
import App from './VueRouter单组件开发/App.vue'
import router from './VueRouter单组件开发/index.js'

var app = createApp(App)

app.use(router)
app.mount('#app')

