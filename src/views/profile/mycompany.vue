<template>
  <div>
    <div class="urbuddy-bgcolor p-2">
     <router-link to="/">
      <v-btn class="m-1" fab dark small color="#D6CEF7">
        <v-icon dark> mdi-arrow-left </v-icon>
      </v-btn>
      </router-link> 
      <div class="text-center">
        <div>
          <img src="../../assets/profile/Sample 1 (1).png" />
        </div>
        <p class="fs-1 fw-bold">YZ - Tech</p>
      </div>
    </div>
    <div>
      <v-card>
        <v-tabs v-model="tab" background-color="#775BE5" dark>
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#subscribe"> Company info </v-tab>

          <v-tab href="#contact"> Employee list </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="subscribe">
            <div class="p-2">
              <p>
                Lorem ipsum dolor sit amet consectetur. Congue aliquam pulvinar
                potenti vitae ultricies id ac. Eu ut non mattis leo. Nunc
                ridiculus nulla pulvinar metus. Purus arcu nisl turpis mi
                pulvinar etiam rhoncus. Iaculis velit sit tincidunt nunc
                porttitor scelerisque sit pellentesque. Nisi velit aliquam
                gravida turpis id. Senectus velit hendrerit auctor pellentesque
                ac. Dignissim vel vel fringilla commodo integer at posuere duis.
                Mattis vestibulum sit amet ut ultricies. Non consectetur tortor
                tincidunt egestas donec a. Morbi donec lectus sed congue magna
                venenatis aenean cursus gravida. Vestibulum metus in ornare leo
                ac et. Eget laoreet bibendum eget placerat mattis ut velit
                tellus mi. Duis ac feugiat diam sit morbi luctus. At interdum
                nulla eu elementum urna est vel ornare sed. Pretium tristique
                euismod nulla vitae ornare id arcu dolor volutpat. At non sit
                elementum ultrices ipsum eget vitae velit amet. Ullamcorper non
                risus nunc massa interdum.
              </p>
            </div>
          </v-tab-item>
          <v-tab-item value="contact">
            <div class="p-2 mt-4">
              <v-row>
                <v-card>
                  <v-alert outlined color="#775be5">
                    <v-row>
                      <v-col cols="4">
                        <div class="mt-6">
                            <v-avatar size="64px">
                          <img src="../../assets/profile/Ellipse 72.png" />
                        </v-avatar>
                        </div>
                      </v-col>
                      <v-col cols="8">
                       <div>
                         <v-card-title> Jay </v-card-title>

                        <p>UX UI Designer</p>
                       </div>
                      </v-col>
                    </v-row>
                  </v-alert>
                </v-card>
              </v-row>
               <v-row>
                <v-card>
                  <v-alert outlined color="#775be5">
                    <v-row>
                      <v-col cols="4">
                        <div class="mt-6">
                            <v-avatar size="64px">
                          <img src="../../assets/profile/Ellipse 72.png" />
                        </v-avatar>
                        </div>
                      </v-col>
                      <v-col cols="8">
                       <div>
                         <v-card-title> Jay </v-card-title>

                        <p>UX UI Designer</p>
                       </div>
                      </v-col>
                    </v-row>
                  </v-alert>
                </v-card>
              </v-row>
               <v-row>
                <v-card>
                  <v-alert outlined color="#775be5">
                    <v-row>
                      <v-col cols="4">
                        <div class="mt-6">
                            <v-avatar size="64px">
                          <img src="../../assets/profile/Ellipse 72.png" />
                        </v-avatar>
                        </div>
                      </v-col>
                      <v-col cols="8">
                       <div>
                         <v-card-title> Jay </v-card-title>

                        <p>UX UI Designer</p>
                       </div>
                      </v-col>
                    </v-row>
                  </v-alert>
                </v-card>
              </v-row>
               <v-row>
                <v-card>
                  <v-alert outlined color="#775be5">
                    <v-row>
                      <v-col cols="4">
                        <div class="mt-6">
                            <v-avatar size="64px">
                          <img src="../../assets/profile/Ellipse 72.png" />
                        </v-avatar>
                        </div>
                      </v-col>
                      <v-col cols="8">
                       <div>
                         <v-card-title> Jay </v-card-title>

                        <p>UX UI Designer</p>
                       </div>
                      </v-col>
                    </v-row>
                  </v-alert>
                </v-card>
              </v-row>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "UrbuddywebviewMycompany",

  data() {
    return {
      tab: null,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
