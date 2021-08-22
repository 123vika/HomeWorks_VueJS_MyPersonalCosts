import Vue from "vue";
import Vuex from "vuex";
import {
  data
} from "../data";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categories: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = [...state.paymentsList, ...payload];
    },
    addDataToPaymentList(state, payload) {
      state.paymentsList.push(payload);
    },
    setCategoriesListData(state, payload) {
      state.categories = payload;
    },
    addDataFromForm(state, data) {
      state.paymentsList.push(data);
    },
    addNewCategoryToList(state, payload) {
      state.categories.push(payload);
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
    },
    getCategories: state => state.categories,
    getDataFromForm: ({
      paymentsList
    }) => paymentsList.dataFromForm,
  },
  actions: {
    fetchData({
      commit
    }, pageNumber) {
      if (this.state.paymentsList.length === (3 * pageNumber)) {
        return;
      } else {
        return new Promise((resolve) => {
          setTimeout(() => {
            // console.log(data[`page${pageNumber}`]);
            resolve(data[`page${pageNumber}`]);
          }, 500);
        }).then(res => commit('setPaymentListData', res));
      }
    },

    fetchCategoryList({
      commit
    }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const categories = ['Sport', 'Food', 'Education', 'Internet', 'Other'];
          resolve(categories);
        }, 500);
      }).then(res => commit('setCategoriesListData', res));
    },

    addFromForm({
      commit
    }, data) {
      const newData = {
        ...data
      };
      commit("addDataFromForm", newData);
      // console.log(commit, newData, "I'm here");
    },
  

    // For Test
    addData({commit}, payload){
      console.log(commit, payload);
      // commit('addDataToPaymentList');
    }
  },
});