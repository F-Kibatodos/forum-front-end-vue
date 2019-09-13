<template>
  <div class="container py-5">
    <NavTabs />
    <TopRestaurants
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import TopRestaurants from "./../components/TopRestaurants";

const dummyData = {
  restaurants: [
    {
      id: 19,
      name: "Dustin Lynch",
      tel: "1-382-742-2344 x941",
      address: "102 Johnson Camp",
      opening_hours: "08:00",
      description: "Veritatis quae ad id amet. Similique est suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.604747512748677",
      viewCounts: 2,
      createdAt: "2019-07-30T16:24:55.436Z",
      updatedAt: "2019-09-07T16:22:46.020Z",
      CategoryId: 5,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 19,
            createdAt: "2019-08-18T08:35:02.371Z",
            updatedAt: "2019-08-18T08:35:02.371Z"
          }
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 19,
            createdAt: "2019-08-05T09:07:28.598Z",
            updatedAt: "2019-08-05T09:07:28.598Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 2
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
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 22,
            createdAt: "2019-09-10T15:22:15.837Z",
            updatedAt: "2019-09-10T15:22:15.837Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 7,
      name: "Melvin Flatley Sr.",
      tel: "1-255-894-3279 x2314",
      address: "138 Quinn Street",
      opening_hours: "08:00",
      description: "quos dolore tenetur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.25768589113377",
      viewCounts: 11,
      createdAt: "2019-07-30T16:24:55.434Z",
      updatedAt: "2019-08-06T23:47:08.130Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 7,
            createdAt: "2019-08-18T05:50:25.235Z",
            updatedAt: "2019-08-18T05:50:25.235Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
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
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 46,
            createdAt: "2019-09-13T02:56:44.396Z",
            updatedAt: "2019-09-13T02:56:44.396Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
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
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 40,
            createdAt: "2019-09-13T02:49:22.201Z",
            updatedAt: "2019-09-13T02:49:22.201Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
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
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 42,
            createdAt: "2019-09-13T02:49:16.478Z",
            updatedAt: "2019-09-13T02:49:16.478Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 32,
      name: "Eriberto Zboncak V",
      tel: "(626) 794-3858 x2457",
      address: "372 Reinger Shores",
      opening_hours: "08:00",
      description: "Veritatis non ratione temporibus impedit et id ess",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094",
      viewCounts: 21,
      createdAt: "2019-07-30T16:24:55.440Z",
      updatedAt: "2019-09-09T15:36:12.862Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z",
          Favorite: {
            UserId: 2,
            RestaurantId: 32,
            createdAt: "2019-08-05T09:07:29.998Z",
            updatedAt: "2019-08-05T09:07:29.998Z"
          }
        }
      ],
      isFavorited: false,
      FavoriteCount: 1
    },
    {
      id: 24,
      name: "Al Von",
      tel: "038-326-5052",
      address: "5559 VonRueden Courts",
      opening_hours: "08:00",
      description: "Aliquid numquam hic. Minima perferendis quia cum t",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
      viewCounts: 33,
      createdAt: "2019-07-30T16:24:55.438Z",
      updatedAt: "2019-08-27T11:50:44.476Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 24,
            createdAt: "2019-08-27T03:57:54.794Z",
            updatedAt: "2019-08-27T03:57:54.794Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 26,
      name: "Zoe Connelly",
      tel: "724-565-0111",
      address: "8718 Nolan Roads",
      opening_hours: "08:00",
      description: "Ipsum aspernatur quis est voluptates maiores quam ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864",
      viewCounts: 27,
      createdAt: "2019-07-30T16:24:55.438Z",
      updatedAt: "2019-08-26T10:07:25.048Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 21,
      name: "Clovis Mayert",
      tel: "1-292-930-4113 x0577",
      address: "3255 Streich Inlet",
      opening_hours: "08:00",
      description: "Nihil occaecati consectetur explicabo sint nobis b",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313",
      viewCounts: 6,
      createdAt: "2019-07-30T16:24:55.436Z",
      updatedAt: "2019-08-04T17:14:28.400Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
};

export default {
  components: {
    NavTabs,
    TopRestaurants
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
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    }
  }
};
</script>