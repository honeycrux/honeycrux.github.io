<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="bg-sky-950 min-h-24 py-8 mb-4 flex flex-col-reverse">
    <div class="mx-auto w-9/12 px-2 text-stone-100 text-2xl font-bold">
      {{ title }}
    </div>
  </div>
</template>