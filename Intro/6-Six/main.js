const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    getRandomComputed() {
      return Math.random();
    },
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    reversedFullName() {
      let fullName = `${this.firstName} ${this.lastName}`;
      return fullName.split("").reverse().join("");
    },
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});

const mountedApp = app.mount("#app");
