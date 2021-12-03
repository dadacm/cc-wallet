import { createStore } from 'vuex';
import releaseModule from './modules/releases';

const store = createStore({
    modules: { releaseModule }
});

export default store;