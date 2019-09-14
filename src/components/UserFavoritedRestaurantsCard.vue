<template>
  <div class="card">
    <div class="card-header">
      <strong>{{user.favoritedRestaurants}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a v-for="favorited in favoriteds" :key="favorited.id" href="/restaurants/7" class="mr-1">
        <img :src="favorited.image" width="60" height="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favoriteds: {
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