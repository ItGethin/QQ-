import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    data:''
}


const mutations = {
    getData(state,data) {
        state.data = data;
    }
}

export default new Vuex.Store({
    state,
    mutations
})