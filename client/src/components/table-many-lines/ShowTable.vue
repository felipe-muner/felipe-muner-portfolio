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
        <v-col>
          <v-card>
            <v-card-title>
              Albums
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="getPhotos"
              :search="search"
              item-key="id"
              show-select
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      selected: [],
      headers: [
        {
          text: "ID",
          align: "left",
          value: "id"
        },
        {
          text: "Title",
          align: "left",
          value: "title"
        },
        {
          text: "URL",
          align: "left",
          value: "url"
        },
        {
          text: "albumId",
          align: "left",
          value: "albumId"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPhotos"])
  },
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