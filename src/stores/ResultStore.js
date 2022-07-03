import { defineStore } from 'pinia'

export const useResultStore = defineStore('storeId', {
  // state
  state: () => {
    return {
      result: 0,
    }
  },

  // actions

  // getters
  getters: {
    Result: (state) => state.result,
  },
})
