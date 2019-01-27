import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';
import Toast from 'muse-ui-toast'
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';

Vue.use(Message);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(MuseUI);
