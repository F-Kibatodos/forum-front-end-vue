<template>
  <div class="card">
    <div class="card-header">
      <strong>{{user.followings}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        :to="{name: 'user', params: { id: following.id }}"
        v-for="following in followings"
        :key="following.id"
        class="mr-1"
      >
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
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