<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1
    };
  },
  created() {
    const { page, categoryId } = this.$route.query;
    this.fetchRestaurants({
      page,
      categoryId
    });
  },
  beforeRouteUpdate(to, from, next) {
    const { page, categoryId } = to.query;
    this.fetchRestaurants({ page, categoryId });
    next();
  },

  methods: {
    // 並且可以帶入參數 page 與 categoryId
    // 呼叫 API 後取得 response
    async fetchRestaurants({ page = 1, categoryId = "" }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        // console.log("response", response);
        const { data, statusText } = response;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.categories = data.categories;
        this.categoryId = data.categoryId;
        this.currentPage = data.page;
        this.restaurants = data.restaurants;
        this.totalPage = data.totalPage.length;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>