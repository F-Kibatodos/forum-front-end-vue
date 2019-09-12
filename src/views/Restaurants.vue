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

const dummyData = {
  restaurants: [
    {
      id: 46,
      name: "Jasper Mueller",
      tel: "254-159-2190",
      address: "44890 Dominique Wall",
      opening_hours: "08:00",
      description: "dolorem ratione et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154",
      viewCounts: 23,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-09-09T15:32:20.621Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: true,
      isLiked: false
    },
    {
      id: 42,
      name: "Melody Koepp",
      tel: "(774) 342-2533",
      address: "3318 Feeney Hollow",
      opening_hours: "08:00",
      description: "beatae iste alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.34426799459621",
      viewCounts: 11,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-09-09T15:36:44.625Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 40,
      name: "Robyn Schroeder",
      tel: "406.132.4400",
      address: "647 Yundt Mountains",
      opening_hours: "08:00",
      description: "Incidunt rerum perspiciatis ut iste ipsum labore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.902129223636363",
      viewCounts: 11,
      createdAt: "2019-07-30T16:24:55.441Z",
      updatedAt: "2019-09-09T14:58:25.141Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 28,
      name: "Ramon Lesch",
      tel: "215.041.8762 x87299",
      address: "055 Gerhold Summit",
      opening_hours: "08:00",
      description: "Blanditiis blanditiis error dolores deleniti volup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.121398549821542",
      viewCounts: 8,
      createdAt: "2019-07-30T16:24:55.439Z",
      updatedAt: "2019-09-09T15:17:31.856Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 36,
      name: "Josephine Schulist",
      tel: "226-490-5291",
      address: "88970 Mayer Street",
      opening_hours: "08:00",
      description: "Voluptatem aliquid ut suscipit ut expedita quis et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.52785244639493",
      viewCounts: 2,
      createdAt: "2019-07-30T16:24:55.441Z",
      updatedAt: "2019-09-09T14:18:16.947Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: true
    },
    {
      id: 39,
      name: "Johnpaul Keeling",
      tel: "(237) 706-1277",
      address: "9844 McCullough Village",
      opening_hours: "08:00",
      description: "Ut id numquam numquam ut qui sed qui consequatur. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.32881737000879",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.441Z",
      updatedAt: "2019-07-30T16:24:55.441Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: true
    },
    {
      id: 34,
      name: "Mr. Stephan Hermiston",
      tel: "(973) 940-7729",
      address: "9097 Maggio Fall",
      opening_hours: "08:00",
      description: "cum fugiat exercitationem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.2910546090258",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.440Z",
      updatedAt: "2019-07-30T16:24:55.440Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: true
    },
    {
      id: 22,
      name: "Mr. Lavonne Grimes",
      tel: "841.933.1636",
      address: "298 Albin Road",
      opening_hours: "08:00",
      description: "Quia eum eum sapiente sint distinctio eveniet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.93265026937894",
      viewCounts: 3,
      createdAt: "2019-07-30T16:24:55.437Z",
      updatedAt: "2019-09-09T14:18:52.056Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: true,
      isLiked: false
    },
    {
      id: 4,
      name: "Odessa Larkin",
      tel: "516-154-3810 x11365",
      address: "1044 Dayana Gardens",
      opening_hours: "08:00",
      description: "Similique eum laborum molestiae. Temporibus natus ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.38474595344819",
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.433Z",
      updatedAt: "2019-09-09T14:18:42.390Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 3,
      name: "Obie Wintheiser",
      tel: "098-527-0731",
      address: "7516 Gretchen Place",
      opening_hours: "08:00",
      description: "sed sed eligendi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.07176343116274",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.433Z",
      updatedAt: "2019-08-13T03:42:27.158Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-09-08T08:51:28.715Z"
    },
    {
      id: 26,
      name: "新疆料理",
      createdAt: "2019-09-11T05:44:17.445Z",
      updatedAt: "2019-09-11T05:44:17.445Z"
    }
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
};

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
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.categories = dummyData.categories;
      this.categoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.restaurants = dummyData.restaurants;
      this.totalPage = dummyData.totalPage.length;
    }
  }
};
</script>