import Vue from 'vue';
import { Upload } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ja';
import locale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-chalk/upload.css';


locale.use(lang);

Vue.use(Upload);
