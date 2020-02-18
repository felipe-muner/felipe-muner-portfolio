<template>
  <div>
    <v-container>
      <v-row class="pt-0">
        <v-col class="pt-0">
          <v-btn small color="secondary" @click="getData({way:'local'})">Local Data</v-btn>
          <v-btn
            small
            color="secondary"
            @click="getData({way:'remote'})"
            class="ml-5"
          >External Server</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>qwe</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    getData(way) {
      alert(JSON.stringify(way));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>