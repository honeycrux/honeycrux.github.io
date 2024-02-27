<script setup lang="ts">
import { ref } from "vue";

const rotate = ref(0);
const rotateClass = ["rotate-0", "rotate-90", "rotate-180", "-rotate-90"];

const slide = ref(0);
const slideCount = 2;
</script>

<template>
  <div class="page-index">
    <div class="bg-neutral-700 fixed h-screen w-screen top-0 left-0 flex justify-center items-center">
      <div>
        <div class="w-fit mb-2 translate ease-in-out duration-500 max-h-screen" :class="rotateClass[rotate]">
          <NuxtImg v-if="slide === 0" class="max-w-[100vw] max-h-[90vh]" src="/performance-info.jpg" alt="performance info" placeholder />
          <NuxtImg v-if="slide === 1" class="max-w-[100vw] max-h-[90vh]" src="/concert-info.jpeg" alt="concert info" placeholder />
        </div>
        <div class="flex justify-between gap-4">
          <ActionButton @click="rotate = (rotate + 1) % rotateClass.length">
            <Icon name="flowbite:rotate-solid" color="black" class="w-4" />
            <span class="hidden md:inline font-bold pr-1">
              Rotate
            </span>
          </ActionButton>
          <ActionButton @click="slide = (slide + 1) % slideCount; rotate = 0">
            <Icon name="bxs:right-arrow" color="black" class="w-4" />
          </ActionButton>
        </div>
      </div>
    </div>
  </div>
</template>