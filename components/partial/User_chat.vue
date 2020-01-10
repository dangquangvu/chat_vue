<template>
  <v-container id="user">
    <v-row class="d-flex" no-gutters>
      <v-col sm="3">
        <img
          src="@/assets/user2.png"
          alt="user img"
          style="width:50px ;border-radius: 50%;position:relative"
          id="nav_img_user"
        />
        <font-awesome-icon
          :icon="['fas', 'circle']"
          style="color:#02fd02; font-size:8px"
          class="mt-2"
          id="nav_dot_active"
        />
      </v-col>
      <v-col sm="7" style="margin-left:-25px">
        <h5 class="pt-1" style="color: white">{{ name }}</h5>
        <h6 class="p-0" style="color: #9b9b9b">{{ description }}</h6>
      </v-col>
      <v-col sm="2" class="d-flex justify-center">
        <v-btn icon>
          <font-awesome-icon
            :icon="['fas', 'bell']"
            style="color:  #9b9b9b; font-size:20px"
            class="mt-2"
          />
        </v-btn>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center" style="margin-top:-20px;">
      <v-col sm="10">
        <v-row>
          <v-col sm="3">
            <v-btn icon text>
              <font-awesome-icon
                :icon="['fas', 'comment-dots']"
                style="color: white; font-size:25px"
              />
            </v-btn>
          </v-col>
          <v-col sm="3">
            <v-btn icon text>
              <font-awesome-icon
                :icon="['fas', 'user-friends']"
                style="color:  #9b9b9b; font-size:25px"
              />
            </v-btn>
          </v-col>
          <v-col sm="3">
            <v-btn icon text>
              <font-awesome-icon
                :icon="['fas', 'mobile']"
                style="color:  #9b9b9b; font-size:25px"
              />
            </v-btn>
          </v-col>
          <v-col sm="3">
            <v-btn icon text>
              <font-awesome-icon
                :icon="['fas', 'cog']"
                style="color:  #9b9b9b; font-size:25px"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-center" style="margin-top:-30px; margin-bottom:-20px">
      <v-col sm="10">
        <v-row>
          <v-col sm="12" class="py-0 px-0">
            <v-text-field label="Search"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* #nav_img_user{
  top: 10px;
  left: 100px;
  position: relative;

} */
#nav_dot_active {
  top: 11px;
  left: -19px;
  position: relative;
}
</style>

<script>
import { mdbCard, mdbBtn, mdbIcon } from "mdbvue";
import "@mdi/font/css/materialdesignicons.css";
export default {
  data() {
    return {
      name: "Dang Quang Vu",
      description: "description"
    };
  },
  icons: {
    iconfont: "mdi", // default
    values: {
      product: "mdi-dropbox",
      support: "mdi-lifebuoy"
    }
  },
  components: {
    mdbCard,
    mdbBtn,
    mdbIcon
  }
};
</script>

<style lang="stylus"></style>
