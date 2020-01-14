<template>
  <v-content>
    <v-container>
      <v-layout row>
        <v-flex xs3 sm3 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignup">
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
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm Password"
                        id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex sm5 class="text-end d-flex flex-row-reverse">
                      <v-btn type="submit">Sign up</v-btn>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex sm5  class="text-end d-flex ">
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
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      login: {
        icon: "mdi-apps",
        title: "login In",
        to: "/auth/login"
      }
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
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
    // },
    // methods: {
    //   onSignup () {
    //     this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    //   }
  }
};
</script>
