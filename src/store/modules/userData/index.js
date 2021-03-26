import Vue from 'vue'
import Vuex from 'vuex'
// import { getAPI } from '../../../utils/api'
import getAPI from '../../../utils/api'

Vue.use(Vuex)

export default ({
state: {
    user_data: []
},


mutations: {
    'SET_DATA'(state, user_data){
    state.user_data = user_data
    }
},


actions: {
    getUserData ({commit}, username){
    return new Promise((resolve, reject) => {
        getAPI.get(`${username.username}`)
        .then(response => response.data)
        .then(user_data => {
            console.log(user_data);
            commit('SET_DATA', user_data)
            resolve()
        })
        .catch(err => {
            reject(err)
        })
    })
    }
},

getters:{
    user_data: state => {
    return state.user_data;
    }
},


modules: {
}
})
