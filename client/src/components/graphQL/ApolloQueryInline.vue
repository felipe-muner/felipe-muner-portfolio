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
                @click="submitToFilter(continent.code)"
                color="primary"
                dark
                v-on="on"
              >{{continent.name}}</v-btn>
            </div>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>continent name</v-card-title>
            <v-card-text>lista paises</v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["getContinents"])
  },
  methods: {
    // ...mapActions(["filterContinent"]),
    submitToFilter(code) {
      alert(code);
      // this.filterContinent(code);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>