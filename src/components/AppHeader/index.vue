<template>
  <v-app-bar
    class="AppHeader"
    height="170"
    flat
  >
    <v-container class="AppHeader fill-height pa-0 border-b border-grey border-opacity-100">
      <AppLogo/>
      <v-spacer/>
      <AppLink to="/">Home</AppLink>
      <AppLink to="/blog">Blog</AppLink>
    </v-container>
  </v-app-bar>
</template>
