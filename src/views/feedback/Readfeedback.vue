<template>
  <div>
    <div class="p-2 text-start">
      <v-row>
        <v-col cols="6">
          <p class="fs-1 urbuddy-color fw-bold">Feedback</p>
        </v-col>
        <v-col cols="6" class="align-end">
          <router-link to="/writefeedback">
          <v-btn class="mx-2" fab dark small color="#775be5">
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </div>
    <!-- header of feedback -->
    <div class="p-2">
      <v-row>
        <v-col>
          <v-card>
            <v-alert outlined color="#775be5">
              <v-card-title> Need new Chair? </v-card-title>

              <p class="text-dark">
                Lorem ipsum dolor sit amet consectetur. Aenean faucibus ornare
                sed consectetur in. Donec dignissim ut mauris pretium. Sit
                mollis tristique risus aliquam nunc et tellus.
              </p>
              <v-row>
                <v-col cols="9" class="align-end">
                  <v-btn icon color="#775be5">
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>
                  22
                </v-col>

                <v-col cols="3">
                  <v-btn icon>
                    <v-icon>mdi-thumb-down</v-icon>
                  </v-btn>
                  4
                </v-col>
              </v-row>
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-alert outlined color="#775be5">
              <v-card-title> Need new Chair? </v-card-title>

              <p class="text-dark">
                Lorem ipsum dolor sit amet consectetur. Aenean faucibus ornare
                sed consectetur in. Donec dignissim ut mauris pretium. Sit
                mollis tristique risus aliquam nunc et tellus.
              </p>
              <v-row>
                <v-col cols="9" class="align-end">
                  <v-btn icon color="#775be5">
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>
                  22
                </v-col>

                <v-col cols="3">
                  <v-btn icon>
                    <v-icon>mdi-thumb-down</v-icon>
                  </v-btn>
                  4
                </v-col>
              </v-row>
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- feedback review -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.urbuddy-color {
  color: #775be5;
}
.urbuddy-bgcolor {
  background-color: #775be5;
  color: #fff;
}
.align-end {
  text-align: end;
}
</style>
