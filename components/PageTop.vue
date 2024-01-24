<template>
    <div class="bg-sky-950 min-h-24 px-6 py-8 mb-4 flex flex-col-reverse">
        <div class="mx-auto w-9/12 text-stone-100 text-2xl font-bold">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
  }
};
</script>