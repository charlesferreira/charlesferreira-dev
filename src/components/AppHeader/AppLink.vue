<template>
  <RouterLink
    class="AppLink text-menu py-4 px-6 mx-2"
    active-class="text-primary"
    :to="$attrs.to"
  >
    <slot/>
  </RouterLink>
</template>

<style scoped lang="scss">
.AppLink {
  color: rgb(var(--v-theme-text-white));
  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}
</style>
