<template>
  <button
    :class="`
      flex
      justify-center
      text-sm
      font-medium
      border-2 border-white
      w-60
      hover:bg-white
      hover:text-black
      cursor-pointer
      py-2
      px-4
      rounded-full 
       ${
         selected_ans != ''
           ? selected_ans == correct_ans
             ? id == correct_ans
               ? 'bg-green-200 text-black'
               : 'text-white'
             : id == selected_ans
             ? 'bg-red-300 text-black'
             : 'text-white'
           : ' bg-[#2D363E] text-white'
       }`"
  >
    {{ name }}
  </button>
</template>
<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  selected_ans: {
    type: Number,
    required: true,
  },
  correct_ans: {
    type: Number,
    required: true,
  },
});
</script>
