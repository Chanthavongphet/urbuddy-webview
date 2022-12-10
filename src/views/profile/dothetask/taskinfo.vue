<template>
  <div class="p-2 text-start">
    <div>
     <router-link to="/uncompleted">
       <v-btn class="m-1" fab dark small color="#775be5">
            <v-icon dark> mdi-arrow-left </v-icon>
          </v-btn>
       </router-link> 
    </div>
    <p class="fs-1 urbuddy-color fw-bold">What to wear to work</p>
    <p>Lorem ipsum dolor sit amet consectetur. Congue aliquam pulvinar potenti vitae ultricies id ac. Eu ut non mattis leo. Nunc ridiculus nulla pulvinar metus. Purus arcu nisl turpis mi pulvinar etiam rhoncus.
</p>
<div class="p-2">
    <img src="../../../assets/profile/44f420707fd24961e3ad761fa63e0d6c 1.png" alt="">
</div>
    <div class="p-3 mt-6">
        <router-link to="/schedule">
              <button type="button" class="btn urbuddy-bgcolor btn-lg col-12">Schedule</button>
        </router-link>
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
