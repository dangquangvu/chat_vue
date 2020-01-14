<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-text-field
          placeholder="Placeholder"
          outlined
          @keyup.enter="onSubmit"
          v-model.trim="message"
        ></v-text-field>
      </v-col>
      <v-col sm="1">
        <v-btn class="mt-2" icon text text-center @click="onSubmit">
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
export default {
  props:['nameFriend'],
  data() {
    return {
      name : this.nameFriend,
      message: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.message != "") {
        let object = {
          name : this.nameFriend,
          message : this.message
        }
        console.log(object);
        this.updateMessage(object)
        this.message = "";
      }
    },
    updateMessage(message) {
      this.$emit('updateMessage',message)
    }
  }
};
</script>
