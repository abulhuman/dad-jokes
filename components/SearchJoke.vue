<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row>
      <v-col>
        <v-text-field
          v-model="searchTerm"
          label="Search Joke"
          outlined
        ></v-text-field>
      </v-col> </v-row
  ></v-form>
</template>

<script>
export default {
  name: 'SearchJoke',
  props: {
    id: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    searchTerm: undefined,
  }),
  head() {
    return {
      title: 'Dad Jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes',
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('jokeStore/fetchAFewRandomJokes', this.searchTerm)
    },
  },
}
</script>

<style></style>
