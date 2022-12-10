<template>
  <div class="p-2 text-start">
    <div>
      <router-link to="/readfeedback">
       <v-btn class="m-1" fab dark small color="#775be5">
            <v-icon dark> mdi-arrow-left </v-icon>
          </v-btn>
       </router-link>
    </div>
    <p class="fs-1 urbuddy-color fw-bold">Feedback</p>
    <p>
      Lorem ipsum dolor sit amet consectetur.<br />
      Urna vulputate ipsum enim consequat.
    </p>
    <!-- header of feedback -->
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label fw-bold"
          >Title</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label fw-bold"
          >Title</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Title"
          rows="14"
        ></textarea>
      </div>
    </div>
    <!-- text comment area for urbuddy-->
    <div class="p-3">
      <button type="button" class="btn urbuddy-bgcolor btn-lg col-12">Submit</button>
    </div>
    <!-- button for submit -->
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
