<template>
  <v-container>
    <v-row class="d-flex mb-0">
      <UserChat v:bind:i />
    </v-row>
    <v-row sm12 style="max-height:450px;overflow-y: auto;">
      <FriendChat
        v-for="friend in friends"
        v-bind:key="friend.id"
        v-bind:friend="friend"
        class="friend_chat"
        v-on:click.native="$emit('userClick', friend)"
        width="30px"
      />
    </v-row>
  </v-container>
</template>
<style scoped>
.friend_chat:hover {
  background: #21193f;
  cursor: pointer;
}
</style>
<script>
import UserChat from "~/components/partial/User_chat.vue";
import FriendChat from "~/components/partial/Friend_chat.vue";
import axios from "axios";

export default {
  data() {
    return {
      me: null,
      friends: []
    };
  },
  async created() {
    let me = this.$store.state.user;
    let friends = [];
    await axios.get("http://localhost:3335/admin/friends").then(data => {
      this.friends = data.data.data;
      console.log(this.friends,'friend');
      return;
    });
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },

  components: {
    UserChat,
    FriendChat
  },
  methods: {
    showMe(value) {
      console.log(value);
    },
    userClick(value) {
      return value;
    }
  }
};
</script>
