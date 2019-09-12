<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <topUsers v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
import topUsers from "./../components/topUsers";

const dummyData = {
  users: [
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
      isAdmin: false,
      image: "https://i.imgur.com/OezkRwO.jpg",
      createdAt: "2019-07-30T16:24:55.422Z",
      updatedAt: "2019-08-07T06:16:40.100Z",
      Followers: [
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
          Followship: {
            followerId: 2,
            followingId: 3,
            createdAt: "2019-08-01T10:27:49.094Z",
            updatedAt: "2019-08-01T10:27:49.094Z"
          }
        },
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
          Followship: {
            followerId: 1,
            followingId: 3,
            createdAt: "2019-09-10T14:02:14.715Z",
            updatedAt: "2019-09-10T14:02:14.715Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 1,
      name: "root test",
      email: "root@example.com",
      password: "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
      isAdmin: true,
      image: "https://i.imgur.com/58ImzMM.png",
      createdAt: "2019-07-30T16:24:54.983Z",
      updatedAt: "2019-08-07T04:09:56.622Z",
      Followers: [
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
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: "2019-08-01T10:27:45.616Z",
            updatedAt: "2019-08-01T10:27:45.616Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: false
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
      isAdmin: false,
      image: "https://i.imgur.com/Q14p2le.jpg",
      createdAt: "2019-07-30T16:24:55.204Z",
      updatedAt: "2019-09-09T05:34:35.986Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2019-09-10T14:00:30.183Z",
            updatedAt: "2019-09-10T14:00:30.183Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 4,
      name: "123",
      email: "123@gmail.com",
      password: "$2a$10$3DgQkLtWS7ud3ewuWdmRuOiFhRsgcE1SzOYAzo4/wV.rOWP3rNcRC",
      isAdmin: null,
      image: null,
      createdAt: "2019-08-13T05:00:15.406Z",
      updatedAt: "2019-08-13T05:00:15.406Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 5,
      name: "123",
      email: "123+v1@gmail.com",
      password: "$2a$10$aFObNZTWYpkh86oGEz647OCCg27GkIEqOBZUzBHttZavLtw2PosJO",
      isAdmin: null,
      image: null,
      createdAt: "2019-08-13T05:01:17.528Z",
      updatedAt: "2019-08-13T05:01:17.528Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 6,
      name: "cjl19670@aklqo.com",
      email: "cjl19670@aklqo.com",
      password: "$2a$10$mlS72JE7IffnhMTp7HGyfORzvpVrl.0zUNWxveHWo8/OiA.Stl8Ne",
      isAdmin: null,
      image: null,
      createdAt: "2019-08-15T09:10:17.401Z",
      updatedAt: "2019-08-15T09:10:17.401Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 7,
      name: "買東西",
      email: "sun@gmail.com",
      password: "$2a$10$PyLZbH.VtrtJbxiteKbKbORiUyI83QF0sqdNCD3ntQh5dq1Nt6N/m",
      isAdmin: null,
      image: null,
      createdAt: "2019-09-08T05:52:45.681Z",
      updatedAt: "2019-09-08T05:52:45.681Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 8,
      name: "mark",
      email: "mark@gmail.com",
      password: "$2a$10$uegR/2XVI7S6UIQLlZxg6uQh4rdHZrTINyH7dmjApFueGg6A0LVZO",
      isAdmin: null,
      image: null,
      createdAt: "2019-09-08T05:54:22.376Z",
      updatedAt: "2019-09-08T05:54:22.376Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
};

export default {
  components: {
    NavTabs,
    topUsers
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    }
  }
};
</script>