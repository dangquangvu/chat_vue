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
import moment from 'moment'
export default {
  props:['friendClick'],
  data() {
    return {
      friend : this.friendClick,
      message: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.message != "") {
        let object =  {
          conversationId: this.$store.state.conversationIdTicked,
          body: this.message,
          author: this.$store.state.user._id,
          nameAuthor: this.$store.state.user.fullname,
          createdAt :moment.utc().format(),
          updatedAt : moment.utc().format()
        };
        //moment.utc(date).local().format();
        // console.log(object );
        this.updateMessage(object)
        this.message = "";
      }
    },
    updateMessage(message) {
      this.$emit('updateMessage',message)
      // console.log(message)
    }
  }
};
</script>
