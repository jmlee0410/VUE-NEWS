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
        v-for="item in listItems"
        :key="item.id"
        class="post"
      >
        <div class="points">
          {{ item.points || 0 }}  
        </div>

        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>

          <small class="link-text">
            {{ item.time_ago }} by 

            
            <router-link
              v-if="item.user"
              class="link-text"
              :to="`/user/${item.user}`"
            >{{ item.user }}</router-link>

            <a
              v-else
              :href="item.url"
            >
              {{ item.domain }}
            </a>

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
  computed: {
      listItems() {
          const name = this.$route.name;
          if (name === 'news') {
              return this.$store.state.news;
          } else if (name === 'ask') {
              return this.$store.state.ask;
          } else if (name === 'jobs') {
              return this.$store.state.jobs;
          } else {
            return null;
          }
      }
  },
  created() {

      const name = this.$route.name;
      if (name === 'news') {
          this.$store.dispatch('FETCH_NEWS');
      } else if (name === 'ask') {
          this.$store.dispatch('FETCH_ASK');
      } else if (name === 'jobs') {
          this.$store.dispatch('FETCH_JOBS');
      } else {
          return null;
      }

    
    
    // // 1.
    // fetchNewsList()
    // .then(response => {
    //   // 2.
    //   this.users = response.data;
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    
  }

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