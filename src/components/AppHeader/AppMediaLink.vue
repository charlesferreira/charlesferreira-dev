<template>
  <a
    class="AppMediaLink text-media py-4"
    :href="to"
    target="_blank"
    rel="noreferrer"
  >
    <v-icon
      class="AppMediaLink__icon text-primary mr-2"
      size="20"
      :icon
    />
    <slot/>
  </a>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.AppMediaLink {
  color: rgb(var(--v-theme-text-white));
  text-decoration: none;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}
</style>
