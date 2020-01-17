<template>
  <v-container>
    <v-layout row>
      <v-flex xs4 sm4 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model.trim="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model.trim="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-alert ref="alert" v-if="alert">{{ alert }}</v-alert>
                <v-layout row>
                  <v-flex sm5 class="text-end d-flex flex-row-reverse">
                    <v-btn type="submit" @click.prevent="onSignup"
                      >Submit</v-btn
                    >
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex sm5 class="text-end d-flex ">
                    <v-btn :to="register.to">
                      register
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import { nextTick } from "q";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      alert: "",
      register: {
        icon: "mdi-apps",
        title: "Sign In",
        to: "/auth/register"
      }
    };
  },
  watch: {
    alert() {
      return alert;
    }
  },
  middleware: "notAuthenticated",
  methods: {
    async onSignup() {
      console.log(this.email, this.password);
      let param = {
        email: this.email,
        password: this.password
      };
      try {
        axios
          .post("http://localhost:3335/admin/", param)
          .then(data => {
            let token = data.data.accessToken;
            let user = data.data.user;
            this.alert = data.status;
            // console.log(data.data.accessToken, data.data,user._id);
            this.$store.commit("setToken", data.data.accessToken);
            // console.log("actions", this.$store.state.token);
            this.$store.dispatch("login", { token, user });
            this.$router.push("/chat");
          })
          .catch(err => {
            if (err) {
              if (err.response.data.message) {
                this.alert = err.response.data.message;
              } else {
                this.alert = "error!";
              }
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
.alert_danger {
  color: red;
}
</style>
