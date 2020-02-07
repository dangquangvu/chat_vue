<template>
  <v-container>
    <v-row class="d-flex mb-0">
      <UserChat v:bind:i />
    </v-row>
    <v-row sm12 style="max-height:450px;overflow-y: auto;">
      <FriendChat
        :friend="friend"
        class="friend_chat 100vh"
        v-on:click.native="$emit('userClick', friend)"
        height="30px"
        v-for="friend in friends"
        :key="friend._id"
        :bind="ticked"
        :class="{ friend_clicked: friend._id == ticked }"
      />
      <!-- :class="{ 'friend_clicked':  true }" -->
      <!-- <div>{{conversationId}}</div> -->
      <!-- <FriendChat
          v-if="conversationId != this.$store.state.ticked"
          :friend="friend"
          class="friend_chat"
          v-on:click.native="$emit('userClick', friend)"
          width="30px"
        /> -->
    </v-row>
  </v-container>
</template>
<style scoped>
.friend_chat:hover {
  background: #21193f;
  cursor: pointer;
}
.friend_clicked {
  background: #21193f;
  cursor: no-drop;
}
</style>
<script>
import UserChat from "~/components/partial/User_chat.vue";
import FriendChat from "~/components/partial/Friend_chat.vue";
import axios from "axios";

export default {
  props: ["conversationId"],
  data() {
    return {
      me: null,
      friends: [],
      friend_chat: {
        background: "#21193f",
        cursor: "pointer"
      }
    };
  },
  async created() {
    let me = this.$store.state.user;
    let friends = [];
    await axios.get("http://localhost:3335/message/friends").then(data => {
      this.friends = data.data.data;
      console.log(this.friends, "friend");
      return;
    });
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    ticked() {
      return this.$store.state.ticked;
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
