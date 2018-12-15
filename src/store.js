import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import UserService from '@/services/UserService';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    user: null
  },
  getters: {
    loggedIn(state) {
      return (state.token != null);
    },
    getUserId(state) {
      console.log(state.user);
      return state.user ? state.user._id : null
    },
    getUserData(state) {
      return state.user;
    },
    // getUserAdditionalData(state) {
    //   return UserService.getAdditionalData(state.user.id);
    // }
  },
  mutations: {
    retriveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    'SET_PROFILE'(state, data) {
      state.user = data;
    }
  },
  actions: {
    retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        UserService.login(credentials)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
     })
    },
    retriveTokenSocial(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost:3000/api/users/auth/facebook", credentials)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
     })
    },    
    retriveTokenMeta(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/auth/meta', {
          address: credentials.address
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },    
    retriveTokenFB(context, credentials) {
      return new Promise((resolve, reject) => {

        axios.post('http://localhost:3000/users/auth/facebook/token', {
          email: credentials.email,
          name: credentials.name,
          id: credentials.id,
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },    
    retriveTokenTwitch(context, credentials) {
      return new Promise((resolve, reject) => {

        axios.post('http://localhost:3000/api/users/auth/twitch', {
          name: credentials.name,
          email: credentials.email,
          id: credentials.id
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = context.state.token;
      if (context.getters.loggedIn) {
        return new Promise((resove, reject) => {
          axios.post('http://localhost:3000/api/users/logout')
          .then(response => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            resove(response)
          })
          .catch( error => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            reject(error);
          })
        })
      }
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        UserService.register(data)
          .then(response => {
            const token = response.data.token;

            localStorage.setItem('token', token);
            context.commit('retriveToken', token);
            resolve(response);
            // console.log(response);
          })
          .catch(error => {
            console.log("error");
            reject(error);
          })
     })
    },
    async getProfile({commit, state}) {
      console.log("getting profile");
      let res = await UserService.getProfile(state.token)
      commit("SET_PROFILE", res.data);
    }
  }
})
