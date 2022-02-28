<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <!-- <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    /> -->
    <div class="mix-w-6sm mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-amber overflow-hidden shadow sm:rounded-lg p-6">
        <SearchJoke />
        <nuxt-link
          v-for="joke in jokeList"
          :key="joke.id"
          :to="`showjoke/${joke.id}/`"
        >
          <JokeItem :id="joke.id" :joke="joke.joke" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'BodySection',
  computed: {
    jokeList() {
      return this.$store.state.jokeStore.jokes
    },
  },
}
</script>

<style>
.lucida-header {
  font-family: 'Cascadia Mono', 'Lucida Sans', 'Lucida Sans Regular';
  font-weight: 700;
  font-size: 80px;
}

.emphasis {
  color: cornflowerblue;
}
</style>
