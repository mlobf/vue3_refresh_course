const app = Vue.createApp({
  data() {
    return {
      //auth: false,
      auth: true,
      product: "sunglass",
      quantity: 18,
      sale: false,
    };
  },
  methods: {
    methodOne() {},
    methodTwo() {},
  },
});

const mountedApp = app.mount("#app");
