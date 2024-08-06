<template>
  <div>
    <TheHeader :title="title" />
    <div class="container">
      <base-card>
        <base-button @click="switchTab('login')" :mode="setLoginActiveTab">Login</base-button>
        <base-button @click="switchTab('register')" :mode="setRegisterActiveTab">Register</base-button>
      </base-card>
      <keep-alive>
        <component :is="selectedTab"></component>
      </keep-alive>
      <!-- Now Lets have them switch component -->
    </div>
  </div>
  <h1>hello</h1>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";

import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

export default {
  name: "App",
  components: {
    TheHeader,
    Login,
    Register
  },
  data() {
    return {
      title: "Authentication component in VUE JS",
      selectedTab: "login"
    };
  },
  methods: {
    switchTab(tab) {
      this.selectedTab = tab;
    }
  },
  computed: {
    setLoginActiveTab(){
      return this.selectedTab === 'login' ? '' : 'default';
    },
    setRegisterActiveTab() {
      return this.selectedTab === 'register' ? '' : 'default';
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
* {
  margin: 0;
  box-sizing: border-box;
}
body,
html {
  font-family: "Open Sans", sans-serif;
}
.container {
  width: 90%;
  margin: 0 auto;
}
</style>
