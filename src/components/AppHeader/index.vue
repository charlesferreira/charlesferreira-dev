<template>
  <v-app-bar
    class="AppHeader"
    height="170"
    flat
  >
    <v-container class="fill-height border-b border-grey border-opacity-100">
      <AppLogo/>
      <v-spacer/>
      <v-spacer/>
      <nav id="main-nav" class="d-flex gc-16">
        <AppLink to="/">Home</AppLink>
        <AppLink to="/blog">Blog</AppLink>
      </nav>
      <v-spacer/>
      <nav id="media-nav" class="d-flex gc-8">
        <AppMediaLink icon="mdi-instagram" to="https://instagram.com/charlesferreira.dev">Instagram</AppMediaLink>
        <AppMediaLink icon="mdi-linkedin" to="https://linkedin.com/in/charlesferreiradev">LinkedIn</AppMediaLink>
        <AppMediaLink icon="mdi-github" to="https://github.com/charlesferreira">GitHub</AppMediaLink>
      </nav>
    </v-container>
  </v-app-bar>
</template>
