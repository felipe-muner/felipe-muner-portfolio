<template>
  <div class="hello">
    <h2 class="mb-5 text-center">Filter by continent</h2>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <div
              v-for="continent in getContinents"
              :key="continent.code"
              class="text-left mb-3 ml-3"
            >
              <v-btn
                @click="filterByContinent(continent.code)"
                color="primary"
                dark
                v-on="on"
              >{{continent.name}}</v-btn>
            </div>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    filterByContinent() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>