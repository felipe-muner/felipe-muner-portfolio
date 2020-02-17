// import gql from "graphql-tag";
import axios from "axios";

export default {
  namespace: true,
  state: {
    continents: []
  },
  getters: {
    getContinents: state => state.continents
  },
  mutations: {
    SETCONTINENTS(state, continents) {
      state.continents = continents;
    }
  },
  actions: {
    async loadContinents({ commit }) {
      const response = await axios({
        url: "https://countries.trevorblades.com/",
        method: "POST",
        data: {
          query: `
            query countries {
              continents {
                name
                countries{
                  name
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
