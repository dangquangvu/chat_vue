<template>
  <v-container class="p-0">
    <v-row class=" d-flex justify-center p-0 ">
      <v-col sm="1" class="p-0">
      </v-col>
      <v-col sm="2" class="p-1">
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
      <v-col sm="6" class="p-0">
          <span class="d-flex ">
            <h5>{{name}}</h5> <v-spacer/> <h6>{{time_online}}</h6>
          </span>
          <h6>{{msg}}</h6>
      </v-col>
      <v-col sm="3" class="p-0">

      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
#nav_dot_active {
  top: 11px;
  left: -19px;
  position: relative;
}
</style>
<script>
export default {
   data () {
     return {
       name : "user1",
       msg : "aaaaaaa",
       time_online : '5phut'
     }
   }
};
</script>
