<template>
  <div>
    <!--<div
      v-for="user in users"
      :key="user.id"
    > -->
    <!-- <div
      v-for="user in this.$store.state.news"
      :key="user.id"
    >
      {{ user.title }}
    </div> -->



    <p
      v-for="item in this.$store.state.news"
      :key="item.id"
    >
      <a :href="item.url"> {{ item.title }}</a>
      <small>
        {{ item.time_ago }} by 
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>

 

export default {

  data() {
    return {
      
    }
  },
  created() {

    this.$store.dispatch('FETCH_NEWS');
    
    // // 1.
    // fetchNewsList()
    // .then(response => {
    //   // 2.
    //   this.users = response.data;
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    
  },

}
</script>

<style>

</style>