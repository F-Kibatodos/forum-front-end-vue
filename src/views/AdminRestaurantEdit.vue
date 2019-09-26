<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
// STEP 1: 載入 adminAPI 和 Toast
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

const dummyData = {
  restaurant: {
    id: 1,
    name: "Laurence Reynolds",
    tel: "1-657-067-3756 x9782",
    address: "187 Kirlin Squares",
    opening_hours: "08:00",
    description: "sit est mollitia",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
    viewCounts: 1,
    createdAt: "2019-07-30T16:24:55.432Z",
    updatedAt: "2019-07-30T17:26:43.260Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    }
  }
};

export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: ""
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const {
          data: { restaurant },
          statusText
        } = await adminAPI.restaurants.getDetail({ restaurantId });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data, statusText } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "error",
          title: "無法建立餐廳，請稍後再試"
        });
      }
    }
  }
};
</script>
