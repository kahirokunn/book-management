import { Upload } from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/upload.css'
import Vue from 'vue'

locale.use(lang)

Vue.use(Upload)
