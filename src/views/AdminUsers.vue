<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td v-if="user.isAdmin">Admin</td>
          <td v-else>user</td>
          <td v-if="currentUser.id !== user.id">
            <button
              type="button"
              class="btn btn-link"
              v-show="user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >set as user</button>
            <button
              type="button"
              class="btn btn-link"
              v-show="!user.isAdmin"
              @click.stop.prevent="toggleUserRole(user.id)"
            >set as Admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
const dummyData = {
  Users: [
    {
      id: 1,
      email: "root@example.com",
      isAdmin: true
    },
    {
      id: 2,
      email: "user1@example.com",
      isAdmin: false
    },
    {
      id: 3,
      email: "user2@example.com",
      isAdmin: false
    }
  ]
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

export default {
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      currentUser: {}
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers(userId) {
      this.users = dummyData.Users;
      this.currentUser = dummyUser.currentUser;
    },
    toggleUserRole(userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) return user;
        return {
          ...user,
          isAdmin: !user.isAdmin
        };
      });
    }
  }
};
</script>