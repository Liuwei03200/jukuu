// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// main.ts
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// element-plus
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//router
import router from './router/index.js'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(ElementPlus)
app.use(router)
app.mount('#app')
