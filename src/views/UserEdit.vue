<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleAfterSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
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
  data() {
    return {
      user: {
        name: "",
        image: ""
      }
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      this.user = {
        name: dummyUser.currentUser.name,
        image: dummyUser.currentUser.image
      };
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (!files.length) return; // 如果沒有檔案則離開此函式，沒有的話是0，有的話會>=1
      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0]); // window.URL.createObjectURL()為暫存圖片網址，引數放files[0]來獲取剛上傳的單一檔案
      this.user.image = imageURL;
    },
    handleAfterSubmit(e) {
      const form = e.target; // <form></form>
      const formData = new FormData(form);
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>