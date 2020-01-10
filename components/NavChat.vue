<template>
  <v-container>
    <v-row class="d-flex mb-0">
      <UserChat />
      <FriendChat />
      <FriendChat />
     </v-row>
  </v-container>
</template>

<script>
import UserChat from "~/components/partial/User_chat.vue";
import FriendChat from "~/components/partial/Friend_chat.vue";

export default {
  props: ["todo"],
  phone: "aaaaa",
  computed: {},
  components: {
    UserChat,
    FriendChat
  }
};
</script>
