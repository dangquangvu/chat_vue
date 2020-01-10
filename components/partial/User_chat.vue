<template>
  <v-container id="user">
    <v-row
        class="d-flex"
        no-gutters
      >
      <v-col sm="2" >
        <img
        src="@/assets/user2.png"
        alt="user img"
        style="width:30px ;border-radius: 50%"
      />
      </v-col>
      <v-col sm='8' >
        <h4>{{name}}</h4>
        <v-icon>fas fa-lock</v-icon>
      </v-col>
      <v-col sm='3' >
        <mdb-icon far icon="bell" />
        <mdb-icon far icon="bell-slash" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data (){
    return {
      name : "Dang Quang Vu"
    }
  }
};
</script>

<style lang="stylus">

</style>
