<template>
  <div>
    {{ resultStore.Result }}
  </div>
</template>

<script setup>
import { useResultStore } from '../../stores/ResultStore'

const resultStore = useResultStore()
</script>
