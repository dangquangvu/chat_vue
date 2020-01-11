<template id="chat_router" color="primary">
  <v-container class="p-0" style="max-width:900px">
    <v-row class="mb-6">
      <v-col md="4" class="px-0">
        <v-card class="pa-2" style="height:700px" outlined tile id="nav_chat">
          <NavChat @userClick='userClick'/>
        </v-card>
      </v-col>
      <v-col md="8" class="px-0" style="">
        <v-card class="p-0" style="height:700px" outlined>
          <ChatArea :user_click="friend_click" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.v-content >>> .v-content__wrap {
  background: #271c45;
}
#nav_chat {
  background: #5f479f;
  font-family: "Josefin Sans", sans-serif !important;
}
</style>
<script>
import ChatArea from "~/components/ChatArea.vue";
import NavChat from "~/components/NavChat.vue";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { mdbCard, mdbBtn, mdbIcon } from "mdbvue";
export default {
  components: {
    ChatArea,
    NavChat,
    mdbCard,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {
      friend_click: {}
    };
  },
  methods: {
    updateScore(newMsg) {
      //this.msg = newMsg;
      //:msg="msg" @updateScore="updateScore"
    },
    reRender() {
      this.$forceUpdate();
    },
    userClick(friend) {
      this.friend_click = friend;
    }
  }
};
</script>
