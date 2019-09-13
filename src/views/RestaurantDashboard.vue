<template>
  <div class="container py-5">
    <h1>{{restaurant.name}}</h1>
    <p>[{{restaurant.categoryName}}]</p>
    <hr />
    <ul>
      <li>有{{restaurant.commentsLength}}筆評論</li>
      <li>有{{restaurant.favoritedUsersLength}}人收藏這家餐廳</li>
    </ul>
    <a href="#" @click="$router.back()">回上一頁</a>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
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
    viewCounts: 18,
    createdAt: "2019-07-30T16:24:55.432Z",
    updatedAt: "2019-09-13T02:18:05.374Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z"
    },
    Comments: [
      {
        id: 1,
        text: "Sed dolores labore.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.451Z",
        updatedAt: "2019-07-30T16:24:55.451Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z"
        }
      },
      {
        id: 51,
        text: "Quas accusamus sint blanditiis enim eveniet aliquam vel.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.452Z",
        updatedAt: "2019-07-30T16:24:55.452Z",
        User: {
          id: 1,
          name: "root test",
          email: "root@example.com",
          password:
            "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
          isAdmin: true,
          image: "https://i.imgur.com/58ImzMM.png",
          createdAt: "2019-07-30T16:24:54.983Z",
          updatedAt: "2019-08-07T04:09:56.622Z"
        }
      },
      {
        id: 101,
        text: "Ipsa vitae voluptas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-07-30T16:24:55.453Z",
        updatedAt: "2019-07-30T16:24:55.453Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
          isAdmin: false,
          image: "https://i.imgur.com/Q14p2le.jpg",
          createdAt: "2019-07-30T16:24:55.204Z",
          updatedAt: "2019-09-09T05:34:35.986Z"
        }
      }
    ]
  }
};
export default {
  components: {
    NavTabs
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        favoritedUsersLength: 0
      }
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        commentsLength: dummyData.restaurant.Comments.length,
        favoritedUsersLength: dummyData.restaurant.favoritedUsersLength || 0
      };
    }
  }
};
</script>>