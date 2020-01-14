<template>
  <v-container>
    <v-row>
      <v-col cols="10" >
        <v-text-field placeholder="Placeholder" outlined></v-text-field>
      </v-col>
      <v-col sm="1">
        <v-btn class="mt-2" icon text text-center  >
          <font-awesome-icon
            :icon="['fas', 'paper-plane']"
            style="color:  #5f479f; font-size:25px; "
          />
        </v-btn>
      </v-col>
      <v-col sm="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
