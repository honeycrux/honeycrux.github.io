<script setup lang="ts">
import { ref } from "vue";

const expanded = ref(false);

interface Props {
    title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-center text-xl font-bold my-4 cursor-pointer" @click="expanded = !(expanded)">
    <div>
      {{ title }}
    </div>
    <div>
      <Icon v-if="expanded" name="material-symbols:arrow-drop-up-rounded" />
      <Icon v-else name="material-symbols:arrow-drop-down-rounded" />
    </div>
  </div>
  <div v-if="expanded">
    <slot />
  </div>
</template>