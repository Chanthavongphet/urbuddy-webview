<template>
  <div class="p-2 mt-4 text-start">
    <p class="fs-1 urbuddy-color fw-bold">What to wear to work</p>
    <p>
      Lorem ipsum dolor sit amet consectetur. Urna vulputate ipsum enim
      consequat.
    </p>
    <div class="p-2">
      <p class="fs-3">Your day</p>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" outlined dense></v-select>
      </v-col>
    </div>
    <div class="p-3 margin-top">
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#775be5"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Note
        </v-btn>
      </template>
      <v-card>
         <div class="p-2 text-center">
            <div>
            <img src="../../../assets/profile/Next steps-bro 1.png">
            <p class="fs-1 urbuddy-color fw-bold">Added Task</p>
            <p>You’ll do this task on your Day 6</p>
        </div>
          <v-card-actions>
          <v-spacer></v-spacer>
         <div>
          <router-link to="/uncompleted">
          <v-btn
            color="#775be5"
            outlined
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
          </router-link>
         </div>
        </v-card-actions>
         </div>
      </v-card>
    </v-dialog>
  </v-row>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
         items: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12,",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",]
      };
    },
  }
</script>
<style>
.urbuddy-color {
  color: #775be5;
}
.urbuddy-bgcolor {
  background-color: #775be5;
  color: #fff;
}
.margin-top {
  margin-top: 25rem;
}
</style>
