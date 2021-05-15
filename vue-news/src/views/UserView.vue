<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">
        {{ userInfo.id }}
      </div>
      <span slot="time">
        {{ 'joined ' + userInfo.created }}, 
      </span>
      <span slot="karma">
        {{ userInfo.karma }}
      </span>
    </user-profile>

    <!-- <user-profile :info="userInfo" /> -->

    <!-- <p>name : {{ this.$store.state.user.id }}</p>
    <p>karma : {{ this.$store.state.user.karma }}</p>
    <p>created : {{ this.$store.state.user.created }}</p> -->

    <!-- <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id; 
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>