const app = Vue.createApp({
  data() {
    return {
      myString: "Marcos Leme de Oliveira Borba Filho",
      counter: 0,
      boxCounter: 0,
    };
  },
  methods: {
    IncrementCouter() {
      this.counter++;
      console.log(this.counter);
      if (this.counter >= 10) {
        alert("Counter is 10");
        console.log(this.counter);
      }
    },
    overTheBox() {
      this.boxCounter++;
      console.log("You Cross The Line");
      console.log(this.boxCounter);
    },
  },
});

const mountedApp = app.mount("#app");
