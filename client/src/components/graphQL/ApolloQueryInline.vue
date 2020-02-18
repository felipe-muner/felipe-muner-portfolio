<template>
  <div class="hello">
    <h2 class="mb-5 text-center">Filter by continent</h2>
    <div v-for="continent in getContinents" :key="continent.code" class="ml-3 mb-3">
      <v-btn @click="submitToFilter({code: continent.code})" color="primary">{{continent.name}}</v-btn>
    </div>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>{{filterByContinent.name}}</v-card-title>
            <v-card-text class="black--text">
              <div
                class="mt-3"
                v-for="country in filterByContinent.countries"
                :key="country.code"
              >{{country.emoji}} {{country.name}}</div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["getContinents", "filterByContinent"])
  },
  methods: {
    ...mapActions(["filterContinent"]),
    submitToFilter(code) {
      this.filterContinent(code);
      this.dialog = true;
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>