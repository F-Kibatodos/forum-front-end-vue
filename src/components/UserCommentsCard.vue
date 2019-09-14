<template>
  <div class="card">
    <div class="card-header">
      <strong>{{user.commentedRestaurants}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment in comments"
        :key="comment.id"
        :to="{name: 'restaurant', params: { id: comment.Restaurant.id }}"
        class="mr-1"
      >
        <img :src="comment.Restaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
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