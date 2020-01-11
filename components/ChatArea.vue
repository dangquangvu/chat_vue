<template>
  <v-container class="p-0">
    <v-row style="" class="header_form_chat" flat outlined>
      <v-card v-if="!user_click.id"></v-card>
      <v-card
        v-if="user_click.id"
        class="d-inline-flex"
        sm="12"
        pa-0
        height="100%"
        width="100%"
      >
        <v-col v-if="user_click" sm="2">
          <img
            src="@/assets/user1.png"
            alt="user img"
            style="width:50px ;border-radius: 50%;position:relative"
            id="nav_img_user"
          />
          <font-awesome-icon
            :icon="['fas', 'circle']"
            style="color:#02fd02; font-size:8px"
            class="mt-2"
            id="nav_dot_active"
          />
        </v-col>
        <v-col sm="5" style="margin-left:-70px">
          <h5 class="pt-1" style="color: red">{{ user_click.name }}</h5>
          <h6 class="p-0" style="color: #9b9b9b">
            {{ user_click.description }}
          </h6>
        </v-col>
      </v-card>
    </v-row>
    <v-row style="" class="form_chat">
      <v-card sm="12" pa-0 v-if="user_click.name" style="width:100%">
        <div v-for="(item, index) in message"
          :key="index">
          <OtherChat

          :chat ="item.msg"
        />
        </div>
      </v-card>
    </v-row>
    <v-row style="" class="footer_chat">
      <v-card sm="12" pa-0 height="100%" width="100%"> </v-card>
    </v-row>
  </v-container>
</template>

<style scope>
.header_form_chat {
  margin-right: 0px;
  margin-left: 0px;
  background: #ffffff;
  height: 100px;
  box-shadow: black;
}
.form_chat {
  margin-right: 0px;
  margin-left: 0px;
  background: #e5e5fe;
  height: 500px;
  overflow-y: auto;
}
.footer_chat {
  margin-right: 0px;
  margin-left: 0px;
  background: #ffffff;
  height: 100px;
  box-shadow: black;
}
#nav_dot_active {
  top: 11px;
  left: -19px;
  position: relative;
}
</style>

<script>
let list = [
  {
    name: "user1",
    m: [
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" },
      { msg: "1" }
    ]
  },
  {
    name: "user2",
    m: [{ msg: "2" }, { msg: "2" }, { msg: "2" }, { msg: "2" }]
  },
  {
    name: "user3",
    m: [{ msg: "3" }, { msg: "3" }, { msg: "3" }, { msg: "3" }]
  }
];
import OtherChat from "~/components/chat/orther_message.vue";
export default {
  name: "chat-area",
  props: ["user_click"],
  data: function() {
    return {
      message: []
    };
  },
  methods: {},
  watch: {
    user_click(val) {
      if (val.name) {
        var messages = list.filter(user => val.name == user.name);
        this.message = messages[0].m;
        console.log(messages, messages[0].m);
      }
    }
  },
  components: {
    OtherChat
  }
};
</script>
