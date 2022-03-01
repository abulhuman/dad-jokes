<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Body />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Welcome to Dad Jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes',
        },
      ],
    }
  },
  async created() {
    try {
      await this.$store.dispatch('jokeStore/fetchAFewRandomJokes')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
}
</script>
