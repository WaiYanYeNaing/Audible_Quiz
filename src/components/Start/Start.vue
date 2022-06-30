<template>
  <div class="h-screen flex flex-col items-center justify-between pb-10">
    <div class="flex flex-col items-center justify-center space-y-9 mt-[23vh]">
      <div class="text-white text-5xl font-semibold leading-snug text-center">
        Welcome to the really awesome <br />
        Audible quiz experience
      </div>
      <div class="text-white text-center">
        Just answer a few questions and we'll provide you with not one, <br />
        but two recommendation for your listening pleasure.
      </div>
    </div>
    <div class="relative flex items-center justify-center">
      <div
        class="absolute bg-gradient-to-r from-darkgray to-gray animate-pulse w-28 h-28 rounded-full"
      ></div>
      <div
        class="absolute bg-gradient-to-r from-darkgray to-darkgray w-16 h-16 flex items-center justify-center rounded-full hover:scale-105 ease-in duration-100 transition cursor-pointer"
      >
        <img
          class="w-9 h-9 bg-yellow shadow-lg rounded-full pt-[8px] pb-[8px] px-2"
          src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-1.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>
