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

    <ul class="news-list">
      <li
        v-for="item in this.$store.state.news"
        :key="item.id"
        class="post"
      >
        <div class="points">
          {{ item.points }}  
        </div>

        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>

          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link
              class="link-text"
              :to="`/user/${item.user}`"
            >{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>

    <!-- <p
      v-for="item in this.$store.state.news"
      :key="item.id"
    >
      <a :href="item.url"> {{ item.title }}</a>
      <small>
        {{ item.time_ago }} by 
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282
}
</style>