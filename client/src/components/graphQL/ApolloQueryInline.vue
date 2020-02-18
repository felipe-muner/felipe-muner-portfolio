<template>
  <div class="hello">
    {{filterByContinent}}
    <h2 class="mb-5 text-center">Filter by continent</h2>
    <template>
      <div class="text-center">
        <p
          @click="submitToFilter({code:continent.code})"
          class="text-left ml-4"
          v-for="continent in getContinents"
          :key="continent.code"
        >{{continent.name}}</p>
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
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>