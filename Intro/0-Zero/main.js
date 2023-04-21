const app = Vue.createApp({
  data() {
    return {
      message: "Hello World!",
      num: 5,
      img: "https://cdn.pixabay.com/photo/2016/11/29/03/36/beautiful-1867093_1280.jpg",
      link: "https://vuejs.org",
      myString: "Marcos Leme de Oliveira Borba Filho",
    };
  },
});

const mountedApp = app.mount("#app");
