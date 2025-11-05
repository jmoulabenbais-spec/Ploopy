const app = Vue.createApp({
  data() {
    return {
      siteTitle: "lessons Patform",
    //   message: "Welcome ! Choose from the list to begin learning ",
    }
  }
});

app.mount("#main-header");

const ap = Vue.createApp({
  data() {
    return {
     
     message: "Welcome ! Choose from the list to start learning 🎓 ",
    }
  }
});

ap.mount("#introduction");

   const butt = Vue.createApp({
  data() {
    return {
        startMessage: "Click the button below to start learning!",
      lessons: [],
      showLessons: false
    };
  },
  methods: {
    async goToLessons() {
      const response = await fetch('vuejson.json');
      const data = await response.json();
      this.lessons = data;
      this.showLessons = true;
    }
  }
});

    butt.mount("#butt");

