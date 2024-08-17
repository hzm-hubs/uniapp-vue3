import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore',{
    state: () => {
      return {
        name: 1,
        count: 0
      }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})