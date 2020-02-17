// import gql from "graphql-tag";
import axios from "axios";

export default {
  namespace: true,
  state: {
    continents: "loading...",
    filteredContinent: ""
  },
  getters: {
    getContinents: state => state.continents,
    filterByContinent: state => state.filteredContinent
  },
  mutations: {
    SETCONTINENTS(state, continents) {
      state.continents = continents;
    },
    FILTERCONTINENT(state) {
      console.log("vou filtrar");
      // console.log(continent);
      console.log("vou filtrar");

      state.filteredContinent = "qwe";
    }
  },
  actions: {
    filterContinent({ commit }) {
      // console.log(dt);
      console.log("action payload acima");

      commit("FILTERCONTINENT");
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
