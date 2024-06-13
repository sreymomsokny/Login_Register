import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import ValidateService from './service/validate.service';



const app = createApp(App);
// register base card as global component
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.config.globalProperties.$service = new ValidateService();


app.mount('#app')
