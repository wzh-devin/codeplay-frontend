/**
 * 2025/3/30 1:45
 * @author <a href="https://github.com/wzh-devin">devin</a>
 * @description 用户信息
 * @version 1.0
 * @since 1.0
 */
import { defineStore } from 'pinia'

interface IUserState {
  loginUser: {
    username: string
    password: string
    role: string
  }
}

const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    loginUser: {
      username: '未登录',
      password: '',
      role: 'admin'
    }
  }),
  actions: {}
})

export default useUserStore
