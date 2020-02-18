<template>
  <v-dialog v-model="dialog" width="75%">
    <template v-slot:activator="{ on }">
      <v-btn @click="getData({way:'remote'})" small color="secondary" dark v-on="on">External Server</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>
      <v-card-text>{{ola}}</v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      ola: 10
    };
  }
};
</script>