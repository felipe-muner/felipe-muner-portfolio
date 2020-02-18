<template>
  <div class="home">
    <h1 class="ml-3 text-center">Data Table Big Data</h1>
    <h3 class="text-center">Working with 5000 lines, local and remote</h3>
    <v-container>
      <v-row>
        <v-flex xs6>
          <v-card>
            <v-card-text class="px-0">
              <LocalData />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-text class="px-0">
              <ExternalData />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LocalData from "../components/table-many-lines/LocalData";
import ExternalData from "../components/table-many-lines/ExternalData";

import { mapActions } from "vuex";

export default {
  name: "graphQL",
  components: {
    LocalData,
    ExternalData
  },
  methods: {
    ...mapActions(["loadContinents"])
  },
  created() {
    this.loadContinents();
  }
};
</script>

<style scoped>
* {
  color: black;
}
</style>