<template>
  <v-container>
    <v-row class="d-flex mb-0">
      <UserChat v:bind:me />
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

export default {
  props: {},
  data() {
    return {
      me: {
        name: "Dang Quang Vu",
        description: "description"
      },
      friends: [
        {
          id: 1,
          name: "user1",
          description: "description"
        },
        {
          id: 2,
          name: "user2",
          description: "description"
        },
        {
          id: 3,
          name: "user3",
          description: "description"
        }
      ]
    };
  },
  computed: {},
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
