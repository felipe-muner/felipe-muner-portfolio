<template>
  <div>
    <h2 class="mb-4 text-center">Group by Continent</h2>
    <template>
      <v-expansion-panels>
        <v-expansion-panel v-for="continent in getContinents" :key="continent.code">
          <v-expansion-panel-header>{{continent.name}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-for="country in continent.countries" :key="country.code">
              <span>{{country.emoji}}</span>
              <span class="ml-4">{{country.name}}</span>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getContinents"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>