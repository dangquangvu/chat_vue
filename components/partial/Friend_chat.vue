<template>
  <v-container
    class="p-0 m-0"
    v-if="this.friend.email != this.$store.state.user.email"
  >
    <v-row class=" d-flex justify-center m-0">
      <v-col sm="1" class="p-0"> </v-col>
      <v-col sm="2" class="p-1 " height="50%" v-if="online">
        <img
          src="@/assets/user1.png"
          alt="user img"
          style="width:50px ;border-radius: 50%;position:relative"
          id="nav_img_user"
        />
        <font-awesome-icon
          :icon="['fas', 'circle']"
          class="mt-2 "
          v-bind:class="{ active_user }"
          id="nav_dot_active"
        />
      </v-col>
      <v-col sm="2" class="p-1 " height="50%" v-if="!online">
        <img
          src="@/assets/user1.png"
          alt="user img"
          style="width:50px ;border-radius: 50%;position:relative"
          id="nav_img_user"
        />
        <font-awesome-icon
          :icon="['fas', 'circle']"
          class="mt-2 "
          v-bind:class="{ disactive_user }"
          id="nav_dot_active"
        />
      </v-col>
      <v-col sm="6" class="p-0 mt-2 ">
        <span class="">
          <h5 style="color:white" class="ml-3">{{ friend.fullname }}</h5>
          <!-- <h6
            style="font-size:12px;margin-top:8px;font-style: italic; margin-left:15px;color: rgb(155, 155, 155);"
          >
            {{ time_online }}
          </h6> -->
        </span>
        <h6 style="color: rgb(155, 155, 155);margin-top:-7px" class="ml-3">
          {{ friend.email }}
        </h6>
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
.active_user {
  color: #02fd02;
  font-size: 8px;
}
.disactive_user {
  color: #dd691c;
  font-size: 8px;
}
</style>
<script>
export default {
  props: ["friend"],
  data() {
    return {
      online: false,
      active_user: {
        color: "#02fd02",
        fontSize: "8px"
      },
      disactive_user: {
        color: "#dd691c",
        fontSize: "8px"
      }
    };
  },
  watch: {
    online(){
      return this.online;
    }
  }
};
</script>
