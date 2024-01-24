<template>
    <div class="flex align-center">
        <div>
            <Icon v-if="valid" name="lets-icons:check-fill" color="green" class="mr-2" />
            <Icon v-else name="lets-icons:cancel-fill" color="#d33" class="mr-2" />
        </div>
        <div class="flex flex-col justify-center">
            <div>
                <span>{{ name }}</span>
                <span class="font-bold">: {{ changes || (valid ? "valid" : "invalid") }}</span>
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
    changes: {
      type: String,
      required: false
    },
  }
};
</script>