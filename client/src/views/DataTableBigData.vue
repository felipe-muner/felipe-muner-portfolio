<template>
  <div class="home">
    <h1 class="ml-3 text-center">Data Table</h1>
    <h3 class="text-center">Working with 5000 lines, local and remote way</h3>
    <v-container class="pt-0">
      <v-row>
        <v-flex xs12>
          <v-card-text class="pt-0">
            <ShowTable />
          </v-card-text>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ShowTable from "../components/table-many-lines/ShowTable";

export default {
  name: "graphQL",
  components: {
    ShowTable
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
* {
  color: black;
}
</style>