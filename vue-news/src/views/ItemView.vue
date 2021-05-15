<template>
  <div>
    <section class="header-container">
      <!-- 사용자 정보 -->

      <user-profile :info="fetchedItem">
        <router-link
          slot="username"
          :to="`/user/${fetchedItem.user}`"
        >
          {{ fetchedItem.user }} 
        </router-link>

        <template slot="time">
          {{ 'posted ' + fetchedItem.time_ago }}
        </template>
      </user-profile>
      <!-- <div class="user-container"> 
        <div>
          <i class="fas fa-user" />
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }} 
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content" />
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // }
   
    ...mapGetters(['fetchedItem']),
    
  },
  created() {
    const itemId = this.$route.params.id; 
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>