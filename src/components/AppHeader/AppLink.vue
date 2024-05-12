<template>
  <RouterLink
    class="AppLink text-menu py-4"
    active-class="text-primary"
    :to
  >
    <slot/>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.AppLink {
  color: rgb(var(--v-theme-text-white));
  text-decoration: none;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}
</style>
