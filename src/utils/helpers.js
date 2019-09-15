import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://forum-express-api.herokuapp.com/api'

export const apiHelper = axios.create({
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

export default {
  // 帶入需要的參數
  signIn({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}
