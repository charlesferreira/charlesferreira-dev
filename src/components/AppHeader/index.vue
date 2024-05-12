<template>
  <v-app-bar
    class="AppHeader"
    height="170"
    flat
  >
    <v-container class="AppHeader fill-height pa-0 gc-16  border-b border-grey border-opacity-100">
      <AppLogo/>
      <v-spacer/>
      <nav id="main-nav" class="d-flex gc-16">
        <AppLink to="/">Home</AppLink>
        <AppLink to="/blog">Blog</AppLink>
      </nav>
      <nav id="media-nav" class="d-flex gc-8">
        <AppMediaLink icon="mdi-instagram" to="https://instagram.com/charlesferreira.dev">Instagram</AppMediaLink>
        <AppMediaLink icon="mdi-linkedin" to="https://linkedin.com/in/charlesferreiradev">LinkedIn</AppMediaLink>
        <AppMediaLink icon="mdi-github" to="https://github.com/charlesferreira">GitHub</AppMediaLink>
      </nav>
    </v-container>
  </v-app-bar>
</template>
