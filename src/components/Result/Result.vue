<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="text-[2rem] font-bold text-white">The Result is</div>
    <div class="text-[7rem] text-white">
      {{ resultStore.Result }}
    </div>
  </div>
</template>

<script setup>
import { useResultStore } from '../../stores/ResultStore'

const resultStore = useResultStore()
</script>
