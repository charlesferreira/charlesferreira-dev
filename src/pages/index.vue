<template>
  <div v-for="item in typography" :key="item.name">
    <component :is="item.tag" :class="`text-${item.name}`" class="text-left my-8">
      {{ item.name }}:
      {{ lipsum(item.words) }}
    </component>
    <v-divider/>
  </div>
</template>

<script setup lang="ts">
const typography = [
  {name: 'bg', tag: 'div', words: 2},
  {name: 'h1', tag: 'h1', words: 5},
  {name: 'h2', tag: 'h2', words: 10},
  {name: 'h2-mono', tag: 'h2', words: 10},
  {name: 'button', tag: 'button', words: 2},
  {name: 'article', tag: 'article', words: 20},
  {name: 'body', tag: 'p', words: 20},
  {name: 'body-mono', tag: 'p', words: 20},
  {name: 'label', tag: 'div', words: 20},
  {name: 'label-bold', tag: 'div', words: 20},
  {name: 'number', tag: 'div', words: 20},
  {name: 'logo', tag: 'div', words: 20},
  {name: 'menu', tag: 'div', words: 20},
  {name: 'media', tag: 'div', words: 20},
  {name: 'code', tag: 'code', words: 20},
]

const sentence = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias culpa deserunt doloremque ea expedita, facere illum labore laboriosam laudantium minus officia, provident quibusdam quod repellendus sit vero?'
const lipsum = (words: number) => sentence.split(' ').slice(0, words).join(' ');
</script>
