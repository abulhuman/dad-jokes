<template>
  <v-container>
    <v-card rounded="true" color="#6495ed">
      <v-card-title
        ><v-img
          :src="`https://icanhazdadjoke.com/j/${id}.png`"
          :alt="joke"
        ></v-img
      ></v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'JokeItem',
  props: {
    id: {
      default: '',
      type: String,
    },
    joke: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
