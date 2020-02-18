// import gql from "graphql-tag";
import axios from "axios";

export default {
  namespace: true,
  state: {
    continents: [],
    filteredContinent: []
  },
  getters: {
    getContinents: state => state.continents,
    filterByContinent: state => state.filteredContinent
  },
  mutations: {
    SETCONTINENTS(state, continents) {
      state.continents = continents;
    },
    FILTERCONTINENT(state, payload) {
      state.filteredContinent = state.continents.filter(
        cont => cont.code === payload.code
      )[0];
    }
  },
  actions: {
    filterContinent({ commit }, payload) {
      commit("FILTERCONTINENT", payload);
    },

    async loadContinents({ commit }) {
      const response = await axios({
        url: "https://countries.trevorblades.com/",
        method: "POST",
        data: {
          query: `
            query countries {
              continents {
                code
                name
                countries{
                  code
                  name
                  emoji
                }
              }
            }
          `
        }
      });

      commit("SETCONTINENTS", response.data.data.continents);
    }
  }
};
