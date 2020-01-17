<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs3 sm3 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="fullName"
                        label="Full Name"
                        id="fullName"
                        v-model="fullName"
                        type="text"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Mail"
                        id="email"
                        v-model="email"
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
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-alert ref="alert" v-if="alert">{{ alert }}</v-alert>
                  <v-layout row>
                    <v-flex sm5 class="text-end d-flex flex-row-reverse">
                      <v-btn type="submit" @click.prevent="onSignup"
                        >Sign up</v-btn
                      >
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex sm5 class="text-end d-flex ">
                      <v-btn :to="login.to">
                        login
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
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      fullName: "",
      login: {
        icon: "mdi-apps",
        title: "login In",
        to: "/auth/login"
      },
      alert: ""
    };
  },
  computed: {},

  methods: {
    onSignup() {
      let param = {
        email: this.email,
        password: this.password,
        fullname: this.fullName
      };
      try {
        axios
          .post("http://localhost:3335/admin/signIn", param)
          .then(data => {
            let token = data.data.accessToken;
            let user = data.data.user;
            this.alert = data.status;
            this.$router.push("/auth/login");
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
  }
};
</script>
