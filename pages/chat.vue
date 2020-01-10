<template id="chat_router" color="primary">
  <v-container class="grey lighten-5 p-0" >
    <v-row class="mb-6" no-gutters>
      <v-col md="4" >
        <v-card class="pa-2" style="height:700px" outlined tile id="nav_chat">
          <NavChat />
        </v-card>
      </v-col>
      <v-col md="8">
        <v-card class="pa-2" style="height:700px" outlined tile>
          <ChatArea />
          <div>
            <p>Icons</p>
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            <font-awesome-icon :icon="['fab', 'github']" />
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style >
.v-content >>> .v-content__wrap{
    background: #271C45
}
#nav_chat{
  background: #5F479F;
  font-family: 'Josefin Sans', sans-serif !important;
}
</style>
<script>
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import ChatArea from "~/components/ChatArea.vue";
import NavChat from "~/components/NavChat.vue";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { mdbCard, mdbBtn, mdbIcon } from "mdbvue";
export default {
  components: {
    VuetifyLogo,
    ChatArea,
    NavChat,
    mdbCard,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {};
  },
  methods: {
    updateScore(newMsg) {
      //this.msg = newMsg;
      //:msg="msg" @updateScore="updateScore"
    },
    reRender() {
      this.$forceUpdate();
    }
  }
};
</script>
