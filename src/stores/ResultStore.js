import { defineStore } from 'pinia'

export const useResultStore = defineStore('storeId', {
  // state
  state: () => {
    return {
      // result: 8,
    }
  },

  // actions

  // getters
  getters: {
    Result: (state) => {
      return (num) => 'The result is ' + num
    },
  },
})
