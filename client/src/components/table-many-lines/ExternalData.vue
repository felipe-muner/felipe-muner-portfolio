<template>
  <div>external data</div>
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
<style>
</style>