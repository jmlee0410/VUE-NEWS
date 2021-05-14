<template>
  <div>
    <div
      v-for="user in users"
      :key="user.id"
    >
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>