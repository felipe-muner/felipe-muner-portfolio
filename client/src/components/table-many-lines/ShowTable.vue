<template>
  <div>
    <v-container>
      <v-row class="pt-0">
        <v-col class="pt-0">
          <div class="text-left">
            <ExternalDataTable />
          </div>
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
            >
              <template slot="items" slot-scope="props">
                <tr>
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.calories }}</td>
                  <td class="text-xs-right">{{ props.item.fat }}</td>
                  <td class="text-xs-right">{{ props.item.carbs }}</td>
                  <td class="text-xs-right">{{ props.item.protein }}</td>
                  <td class="text-xs-right">{{ props.item.iron }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ExternalDataTable from "./ExternalDataTable";
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
          value: "title"
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
  },
  components: {
    ExternalDataTable
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>