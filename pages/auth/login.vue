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
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    }
  },
  watch: {
    alert() {
      return alert;
    }
  },
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
            console.log(data.data.accessToken);
            console.log(this.$refs.alert)
            // this.$refs.alert.
            this.alert = data.status;
            // redirects()
          })
          .catch(err => {
            if(err.response.data.message){
              this.alert = err.response.data.message;
              //  this.$refs.alert.
            }else {
              this.alert ='error!'
            }
          });
      } catch (error) {
        console.log(error);
      }

      // if(!user)
    }
  }
  //   user () {
  //     return this.$store.getters.user
  //   }
  // },
  // watch: {
  //   user (value) {
  //     if (value !== null && value !== undefined) {
  //       this.$router.push('/')
  //     }
  //   }
};
</script>

<style scoped>
.alert_danger {
  color: red;
}
</style>
