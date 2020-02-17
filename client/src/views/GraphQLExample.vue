<template>
  <div class="home">
    <h1 class="ml-3 text-center">GraphQL</h1>
    <h3
      class="text-center"
    >The system gets data from a remote GraphQL server and show it in 3 differents ways, each component has your own logic</h3>
    <v-container class>
      <v-container class>
        <v-row>
          <v-flex xs4>
            <v-card>
              <v-card-text class="px-0">
                <ApolloAttribute />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text class="px-0">
                <ApolloQueryInline />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text class="px-0">
                <QueryFile />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import ApolloAttribute from "../components/graphQL/ApolloAttribute";
import ApolloQueryInline from "../components/graphQL/ApolloQueryInline";
import QueryFile from "../components/graphQL/QueryFile";
import { mapActions } from "vuex";

export default {
  name: "graphQL",
  components: {
    ApolloAttribute,
    ApolloQueryInline,
    QueryFile
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