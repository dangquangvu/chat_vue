<template>
  <v-container class="p-0 m-0">
    <v-row class=" d-flex justify-center m-0">
      <v-col sm="1" class="p-0"> </v-col>
      <v-col sm="2" class="p-1 " height="50%">
        <img
          src="@/assets/user1.png"
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
      <v-col sm="6" class="p-0 mt-2 ">
        <span class="">
          <h5 style="color:white" class="ml-3">{{ friend.name }}</h5>
          <!-- <h6
            style="font-size:12px;margin-top:8px;font-style: italic; margin-left:15px;color: rgb(155, 155, 155);"
          >
            {{ time_online }}
          </h6> -->
        </span>
        <h6 style="color: rgb(155, 155, 155);margin-top:-7px" class="ml-3">{{ friend.description }}</h6>
      </v-col>
      <v-col sm="3" class="p-0"> </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
#nav_dot_active {
  top: -24px;
  left: 32px;
  position: relative;
}
</style>
<script>
export default {
  props: ["friend"],
  data() {
    return {
      name: "user1",
      msg: "aaaaaaa",
      time_online: "5phut"
    };
  }
};
</script>
