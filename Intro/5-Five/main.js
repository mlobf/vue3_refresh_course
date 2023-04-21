const app = Vue.createApp({
  data() {
    return {
      myObj: {
        users: [
          {
            id: 0,
            name: "Marcos",
            profession: "Developer",
          },
          {
            id: 1,
            name: "Jane",
            profession: "UI/UX",
          },
          {
            id: 2,
            name: "Bruce",
            profession: "UI/UX",
          },
          {
            id: 3,
            name: "Albert",
            profession: "Doctor",
          },
          {
            id: 4,
            name: "Alvaro",
            profession: "Lawer",
          },
        ],
      },
    };
  },
  methods: {
    methodOne() {},
    methodTwo() {},
  },
});

const mountedApp = app.mount("#app");
