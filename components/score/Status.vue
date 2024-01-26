<script setup lang="ts">
interface Props {
  valid: boolean;
  name: string;
  major?: string;
  minor?: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-[min-content_1fr] items-center m-0.5 hover:bg-stone-100 rounded-lg">
    <div>
      <Icon v-if="valid" name="lets-icons:check-fill" color="green" class="mr-2" />
      <Icon v-else name="lets-icons:cancel-fill" color="#d33" class="mr-2" />
    </div>
    <div>
      <span>{{ name }}</span>
      <span v-if="major" class="font-bold">: {{ major }}</span>
      <span v-else>: no major change</span>
    </div>
    <template v-if="minor">
      <template
        v-for="item in minor"
        :key="item"
      >
        <div><!-- ghost item --></div>
        <div class="text-stone-600">
          + [minor] {{ item }}
        </div>
      </template>
    </template>
  </div>
</template>