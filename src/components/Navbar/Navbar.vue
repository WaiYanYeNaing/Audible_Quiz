<template>
  <div class="grid grid-cols-3">
    <div class="flex">
      <svg
        class="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </div>
    <div class="flex justify-center item-center">
      <div class="text-2xl font-semibold text-white mt-4 hidden md:flex">
        audible
      </div>
      <img
        class="w-12 h-12"
        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-audible-a-seller-and-producer-of-spoken-audio-entertainment-a-company-by-amazon-logo-color-tal-revivo.png"
      />
    </div>
    <div class="flex justify-end item-center cursor-pointer" @click="Reload()">
      <img
        class="w-7 h-7 text-white mr-3 hover:scale-110 ease-in duration-100 transition"
        src="https://img.icons8.com/ultraviolet/240/000000/restart--v1.png"
      />
      <div class="text-sm font-semibold text-white hidden md:flex">
        Restart quiz
      </div>
    </div>
  </div>
</template>

<script setup>
const Reload = () => {
  window.location.reload()
}
</script>
