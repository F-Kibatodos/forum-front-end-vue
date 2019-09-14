<template>
  <div class="card">
    <div class="card-header">
      <strong>{{user.followers}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        :to="{name: 'user', params: { id: follower.id }}"
        v-for="follower in followers"
        :key="follower.id"
        class="mr-1"
      >
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followers: {
      type: Array,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
};
</script>