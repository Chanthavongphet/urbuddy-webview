<template>
  <div class="text-start p-2">
    <p class="fs-4 urbuddy-color mb-1">Hello!</p>
    <v-row>
      <v-col cols="9">
        <p class="fs-1 urbuddy-color fw-bold mb-1">Biew</p>
      </v-col>
      <v-col cols="3">
        <img src="../../assets/profile/Sample 1.png" />
      </v-col>
    </v-row>
    <p class="fs-3 or-color fw-bold mb-1">30-60-90 Day Plan</p>
    <div>
      <v-row>
        <v-col cols="9">
          <p class="fs-5">Your Probation day at YZ Tech</p>
        </v-col>
        <v-col cols="3">
          <p class="fs-5">03 days</p>
        </v-col>
      </v-row>
      <!--profile-->
      <div class="progress">
        <div
          class="progress-bar urbuddy-bgcolor"
          role="progressbar"
          aria-label="Success example"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <!-- progress bar-->
    </div>
    <div class="row mt-4 p-2">
      <div class="col-4">
        <div class="ml-3">
         <router-link to="/mycompany"> <img src="../../assets/profile/Frame 57.png"></router-link>
        </div>
        <p class="fs-6">My company</p>
      </div>
      <div class="col-4">
        <div class="ml-3">
          <router-link to="/history">
          <img src="../../assets/profile/Frame 57 (1).png" alt="">
          </router-link>
        </div>
        <p class="fs-6">My Previous task</p>
      </div>
      <div class="col-4">
        <div class="ml-4">
         <router-link to="/uncompleted">
          <img src="../../assets/profile/Frame 57 (2).png" alt="">
         </router-link>
        </div>
        <p class="fs-6">Undone task</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UrbuddywebviewMyprofile",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.or-color {
  color: #fe8d00;
}
</style>
