<template id="chat_router" color="primary">
  <v-app color="primary">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      id="app_header"
      style="height: 64px;padding-left: 0px;"
    >
      <!-- <v-container>
        <v-row> -->
      <v-col sm2 class="pl-0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <img src="@/assets/a.png" style="width:30px ;border-radius: 50%" />
      </v-col>
      <v-spacer></v-spacer>
      <v-col sm1 class="" style="text-align: end;">
        <nuxt-link :to="login.to"
          ><font-awesome-icon
            :icon="['fas', 'sign-in-alt']"
            style="color:red; font-size:30px; "
            class=" mb-5"
            id="nav_dot_active"
        /></nuxt-link>
      </v-col>
      <!-- </v-row>
      </v-container> -->
    </v-app-bar>
    <v-content>
      <v-container class="p-0" style="max-width:900px">
        <v-row class="mb-6">
          <v-col md="4" class="px-0">
            <v-card
              class="pa-2"
              style="height:700px"
              outlined
              tile
              id="nav_chat"
            >
              <NavChat @userClick="userClick" />
            </v-card>
          </v-col>
          <v-col md="8" class="px-0" style="">
            <v-card class="p-0" style="height:700px" outlined>
              <ChatArea :user_click="friend_click" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
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
      friend_click: {},
      clipped: false,
      drawer: false,
      fixed: false,
      login: {
        icon: "mdi-apps",
        title: "Sign In",
        to: "/auth/register"
      },
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/chat"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
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
