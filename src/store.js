import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import UserService from '@/services/UserService';
import api from '@/services/RestService';
Vue.use(Vuex)

const team = {
  namespaced: true,
  state: {
    teams: [],
    activeTeam: []
  },
  mutations: {
    "SET_TEAM": (state, data) => {
      Vue.set(state, "activeTeam", data);
    },
    "SET_ACTIVE_TEAM": (state, data) => {
      
    }
  },
  getters: {
    teams: (state) => {
      return state.teams;
    },
    activeTeam: (state) => {
      return state.activeTeam;
    }
  },
  actions: {
    getAllTeams: ({commit}, userId) => {

    },
    getTeam: async ({commit}, id) => {
      const res = await api.get("/api/user/get-team/" + id)
      commit("SET_TEAM", res.data);
    }
  },
}

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
          dispatch('getProfile');
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
        axios.post("/api/users/auth/facebook", credentials)
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
        axios.post('/users/auth/meta', {
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

        axios.post('/users/auth/facebook/token', {
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

        axios.post('/api/users/auth/twitch', {
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
          axios.post('/api/users/logout')
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
    async getProfile({commit, state, dispatch}) {
      console.log("getting profile");
      let res = await UserService.getProfile(state.token)
      dispatch("team/getTeam", res.data._id);
      commit("SET_PROFILE", res.data);
    }
  },
  modules: {
    team: team
  }
})
