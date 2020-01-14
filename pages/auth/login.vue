<template>
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
                  <v-flex sm5 class="text-end d-flex flex-row-reverse">
                    <v-btn type="submit">Log In</v-btn>
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
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
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
