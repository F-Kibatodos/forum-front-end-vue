<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input type="text" class="form-control" placeholder="新增餐廳類別..." v-model="newCategoryName" />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
            :disabled="isProcessing"
          >新增</button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">{{ category.name }}</div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span v-show="category.isEditing" class="cancel" @click="handleCancel(category.id)">✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >Edit</button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="updateCategory({categoryId: category.id, name: category.name})"
            >Save</button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav"; // @代表src路徑 也可以寫成'../components/AdminNav'
import adminAPI from "../apis/admin"; // 這不知道為何不能用@
import { Toast } from "./../utils/helpers";
//  2. 定義暫時使用的資料

export default {
  components: {
    AdminNav
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      newCategoryName: "",
      categories: [],
      isProcessing: false
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories() {
      try {
        // const { data, statusText, status } = await adminAPI.categories.get();
        const { data, statusText } = await adminAPI.categories.get();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.categories = data.categories.map(category => ({
          ...category,
          isEditing: false
        }));
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得分類，請稍後再試"
        });
      }
    },
    async createCategory() {
      try {
        this.isProcessing = true;
        const { data, statusText } = await adminAPI.categories.create({
          name: this.newCategoryName
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.categories.push({
          ...data.category,
          name: this.newCategoryName,
          isEditing: false
        });

        this.newCategoryName = "";
        this.isProcessing = false;
        // this.$router.push({ path: "/admin/categories" });
      } catch (error) {
        this.isProcessing = false;

        Toast.fire({
          type: "error",
          title: "無法新增分類，請稍後再試"
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        this.isLoading = false;
        const { data, statusText } = await adminAPI.categories.delete({
          categoryId
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.categories = this.categories.filter(
          category => category.id !== categoryId
        );
        Toast.fire({
          type: "success",
          title: "刪除分類成功"
        });
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法刪除分類，請稍後再試"
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) return category;
        // 如果迴圈中的 category.id 是欲修改的 categoryId 則改變 isEditing 的值
        return {
          ...category,
          nameCached: category.name,
          isEditing: !category.isEditing
        };
      });
    },
    /*updateCategory({ categoryId }) {
      // TODO: 透過 API 去向伺服器更新餐廳類別名稱
      this.toggleIsEditing(categoryId);
    },*/
    async updateCategory({ categoryId, name }) {
      try {
        const { data, statusText } = await adminAPI.categories.update({
          categoryId,
          name
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        // TODO: 透過 API 去向伺服器更新餐廳類別名稱
        this.toggleIsEditing(categoryId);
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法更改類別名稱，請稍後再試"
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id !== categoryId) {
          return category;
        }

        // 將原本的類別名稱還回去
        return {
          ...category,
          name: category.nameCached
        };
      });
      this.toggleIsEditing(categoryId);
    }
  }
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
