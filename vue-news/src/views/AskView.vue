<template>
  <div>
    <!-- <div
      v-for="item in fetchedAsk"
      :key="item.id"
    >
      {{ item.title }}
    </div> -->

    <list-item />


    <!-- <ul class="news-list">
      <li
        v-for="item in fetchedAsk"
        :key="item.id"
        class="post"
      >
        <div class="points">
          {{ item.points }}  
        </div>

        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
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
    </ul> -->
  </div>
</template>

<script>

// import { mapState, mapGetters } from 'vuex';
//import { mapGetters } from 'vuex';

import ListItem from '../components/ListItem.vue'

export default {

  components: {
    ListItem
  }
  // computed: {

  //   // #4
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])

  //   // #3
  //   // ...mapGetters({
  //   //   fetchedAsk: 'fetchedAsk'
  //   // }),


  //   // #2
  //   // ...mapState({
  //   //   ask: state => state.ask
  //   // })

  //   // #1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
}
</script>

<style>

</style>