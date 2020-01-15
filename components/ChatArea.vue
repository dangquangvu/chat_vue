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
        <v-col sm="5" style="margin-left:-50px">
          <h5 class="pt-1" style="color: red">{{ user_click.name }}</h5>
          <h6 class="p-0" style="color: #9b9b9b">
            {{ user_click.description }}
          </h6>
        </v-col>
      </v-card>
    </v-row>
    <v-row style=""  class="form_chat "  id="scroll-target">
      <v-card
        sm="12"
        pa-0
        v-if="user_click.name"
        style="width:100%"

      >
        <div v-for="(item, index) in message" :key="index">
          <Mymess v-if="index % 2 == 0" :chat="item.msg" />
          <OtherChat v-if="index % 2 != 0" :chat="item.msg" />
        </div>
      </v-card>
    </v-row>
    <v-row style="" class="footer_chat">
      <v-card
        sm="12"
        pa-0
        height="100%"
        width="100%"
        style="background:#e5e5fe"
      >
        <FooterChat
          :nameFriend="user_click.name"
          @updateMessage="updateMessage($event)"
        />
      </v-card>
    </v-row>
  </v-container>
</template>

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
import Mymess from "~/components/chat/my_message.vue";
import FooterChat from "~/components/chat/footer_chat.vue";
export default {
  name: "chat-area",
  components: {
    OtherChat,
    FooterChat,
    Mymess
  },
  props: ["user_click"],
  data: function() {
    return {
      message: [],
      offsetTop: 0
    };
  },
  mounted: function() {
    console.log("xxx");
  },
  watch: {
    user_click(val) {
      if (val.name) {
        var messages = list.filter(user => val.name == user.name);
        this.message = messages[0].m;
        this.scrollToEnd()
      }
    }
  },
   updated() {
        // whenever data changes and the component re-renders, this is called.
        this.$nextTick(() => this.scrollToEnd());
    },
  methods: {
    updateMessage(obj) {
      let user = list.filter(user => obj.name == user.name);
      let msg = { msg: obj.message };
      user[0].m.push(msg);
      this.scrollToEnd();
    },
    scrollToEnd: function() {
      var container = this.$el.querySelector("#scroll-target");
      let y = container.scrollHeight;
      container.scrollTop =  container.scrollHeight ;
      console.log(container.scrollHeight, container.scrollTop)
      console.log(this.$root)
    },
  }
};
</script>

<style scoped>
.header_form_chat {
  margin-right: 0px;
  margin-left: 0px;
  background: #e5e5fe;
  height: 100px;
  box-shadow: black;
}
.form_chat {
  margin-right: 0px;
  margin-left: 0px;
  background: #ffffff;
  height: 500px;
  overflow-y: auto;
}
.footer_chat {
  margin-right: 0px;
  margin-left: 0px;
  background: #e5e5fe;
  height: 100px;
  box-shadow: black;
}
#nav_dot_active {
  top: 11px;
  left: -19px;
  position: relative;
}
</style>
