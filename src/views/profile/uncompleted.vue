<template>
  <div class="p-2 text-start">
    <div>
   <router-link to="/">
        <v-btn class="m-1" fab dark small color="#775be5">
          <v-icon dark> mdi-arrow-left </v-icon>
        </v-btn>
      </router-link> 
    </div>
    <p class="fs-1 urbuddy-color fw-bold">Uncompleted task</p>
    <!-- header of feedback -->
    <div class="p-2">
      <v-row>
        <v-col>
          <v-card>
            <v-alert outlined color="#775be5">
              <v-card-title> Company tour </v-card-title>

              <p class="text-dark">
                Lorem ipsum dolor sit amet consectetur. Aenean faucibus ornare
                sed consectetur in. Donec dignissim ut mauris pretium. Sit
                mollis tristique risus aliquam nunc et tellus.
              </p>
              <v-row>
                <v-col cols="6"> </v-col>
                <v-col cols="6">
                  <div class="p-2">
                    <router-link to="/taskinfo">
                      <button type="button" class="btn urbuddy-bgcolor col-12">
                        Do the task
                      </button>
                    </router-link>
                  </div>
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
              <v-card-title> Company tour </v-card-title>

              <p class="text-dark">
                Lorem ipsum dolor sit amet consectetur. Aenean faucibus ornare
                sed consectetur in. Donec dignissim ut mauris pretium. Sit
                mollis tristique risus aliquam nunc et tellus.
              </p>
              <v-row>
                <v-col cols="6"> </v-col>
                <v-col cols="6">
                  <div class="p-2">
                    <router-link to="/taskinfo">
                      <button type="button" class="btn urbuddy-bgcolor col-12">
                        Do the task
                      </button>
                    </router-link>
                  </div>
                </v-col>
              </v-row>
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
</style>
