<template>
  <div class="container py-5">
    <NavTabs />
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{restaurant.name}}</h5>
            <span class="badge badge-secondary">收藏數: {{restaurant.FavoriteCount}}</span>
            <p class="card-text">{{restaurant.description}}</p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: {id: restaurant.id}, path: 'dashboard'}"
            >Show</router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >移除最愛</button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import restaurantsTopAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  components: {
    NavTabs
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const {
          statusText,
          data
        } = await restaurantsTopAPI.getTopRestaurants();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得最受歡迎餐廳，請稍後再試"
        });
        console.log(error);
      }
    },
    async addFavorite(restaurantId) {
      try {
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫 API，並取得回傳內容
        const { data, statusText } = await usersAPI.addFavorite({
          restaurantId
        });

        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurants = this.restaurants
          .map(restaurant => {
            if (restaurant.id !== restaurantId) {
              return restaurant;
            }

            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true
            };
          })
          .sort((a, b) => b.FavoriteCount - a.FavoriteCount);
      } catch (error) {
        // STEP 6: 請求失敗的話則跳出錯誤提示
        Toast.fire({
          type: "error",
          title: "無法將餐廳加入最愛，請稍後再試"
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data, statusText } = await usersAPI.deleteFavorite({
          restaurantId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.restaurants = this.restaurants
          .map(restaurant => {
            if (restaurant.id !== restaurantId) {
              return restaurant;
            }

            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false
            };
          })
          .sort((a, b) => b.FavoriteCount - a.FavoriteCount);
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取消最愛，請稍後再試"
        });
        console.log(error);
      }
    }
  }
};
</script>