<template>
    <div class="flex items-center m-0.5 hover:bg-stone-100 rounded-lg">
        <div>
            <Icon v-if="valid" name="lets-icons:check-fill" color="green" class="mr-2" />
            <Icon v-else name="lets-icons:cancel-fill" color="#d33" class="mr-2" />
        </div>
        <div>
            <div>
                <span>{{ name }}</span>
                <span v-if="major" class="font-bold">: {{ major }}</span>
                <span v-else>: no major change</span>
            </div>
            <div v-if="minor" class="text-stone-600 text-base">
              minor change(s): {{ minor }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    valid: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    major: {
      type: String,
      required: false
    },
    minor: {
      type: String,
      required: false
    },
  }
};
</script>