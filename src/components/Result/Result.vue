<template>
  <div>
    {{ resultStore.Result(19) }}
  </div>
</template>

<script setup>
import { useResultStore } from '../../stores/ResultStore'

const resultStore = useResultStore()
</script>
