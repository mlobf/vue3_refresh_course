const app = Vue.createApp({
  data() {
    return {
      users: ["Marcos", "Jane", "Bruce", "Flask", "Django"],
    };
  },
  methods: {
    methodOne() {},
    methodTwo() {},
  },
});

const mountedApp = app.mount("#app");
