<template>
  <v-container id="user">
    <v-row class="d-flex" no-gutters>
      <v-col sm="3">
        <img
          src="@/assets/user2.png"
          alt="user img"
          style="width:50px ;border-radius: 50%"
        />
      </v-col>
      <v-col sm="7">
        <h5 class="mb-0">{{ name }}</h5>
        <h6>{{ description }}</h6>
      </v-col>
      <v-col sm="2"  class="d-flex justify-center">
         <font-awesome-icon :icon="['fas', 'bell']" style="color: green; font-size:25px" class="mt-2"/>
        <!--<mdb-icon far icon="bell-slash" size="30px"/> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <v-text-field
          label="Search"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdbCard, mdbBtn, mdbIcon } from "mdbvue";
import '@mdi/font/css/materialdesignicons.css'
export default {
  data() {
    return {
      name: "Dang Quang Vu",
      description: "description"
    };
  },
  icons: {
    iconfont: 'mdi', // default
    values: {
      product: 'mdi-dropbox',
      support: 'mdi-lifebuoy',
  }},
  components: {
    mdbCard,
    mdbBtn,
    mdbIcon
  }
};
</script>

<style lang="stylus"></style>
