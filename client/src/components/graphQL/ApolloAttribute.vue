<template>
  <div class="hello">
    <h2 class="text-center">Countries</h2>
    <ApolloQuery :query="require('../../graphql/countries.gql')">
      <template v-slot="{result: {loading, error, data}}">
        <div v-if="loading">
          <div>loading</div>
        </div>
        <div v-if="error">error</div>
        <div v-if="data">
          <div v-for="c in data.countries" :key="c.id" class="pl-4">- {{c.name}}</div>
        </div>
      </template>
    </ApolloQuery>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>