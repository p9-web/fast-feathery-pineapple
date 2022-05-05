import { createApp } from 'vue'
import { pinia } from './store/store.pinia'
import router from './routes'
import { Quasar } from 'quasar'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)
  .use(Quasar, {
    plugins: {}
  })
  .use(pinia)
  .use(router)
  .mount('#app')
