<template>
  <div id="app">
    <div :class="[$style.links]">
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      
      <router-link to="/food">Food</router-link> /
      <router-link to="/entertainment">Entertainment</router-link> /
      <router-link to="/transport">Transport</router-link> /

      <button @click="goToPage(404)">404</button>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
// import PageDashboard from "./pages/PageDashboard.vue";
// import PageAbout from "./pages/PageAbout.vue";
// import Page404 from "./pages/Page404.vue";

export default {
  name: "App",
  data() {
    return {
      pageName: ''
      // page: 'dashboard'
    };
  },

  methods: {
    goToPage(pageName) {
       this.$router.push({
         name: pageName
       });
    }
  //   // setPage() {
  //   //   this.page = location.pathname.slice(1);
  //   //   // this.page = location.hash.slice(1);
  //   // }
  },
  // computed: {

  // },
  // created() {
  
  // },
  // mounted() {

  //   // const links = document.querySelectorAll('a');
  //   // console.log(links);
  //   // links.forEach(link => {
  //   //   link.addEventListener('click', event => {
  //   //     event.preventDefault();
  //   //     history.pushState({}, '', link.href);
  //   //     this.setPage();
  //   //     console.log(link.href);
  //   //   });
  //   //   window.addEventListener('popstate', this.setPage);
  //   // });

  //   // this.setPage();
  //   // window.addEventListener('hashchange', () => {
  //   //   this.setPage();
  //   // });
  // },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// .links,
// .pages {
//   margin: 20px;
// }
</style>
 