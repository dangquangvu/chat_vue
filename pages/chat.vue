<template>
  <v-container class="grey lighten-5">
      <v-row
        class="mb-6"
        no-gutters
      >
        <v-col md="4">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <NavChat/>
          </v-card>
        </v-col>
        <v-col
          md="8"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <ChatArea/>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import ChatArea from "~/components/ChatArea.vue";
import NavChat from "~/components/NavChat.vue";

export default {
  components: {
    VuetifyLogo,
    ChatArea,
    NavChat
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
