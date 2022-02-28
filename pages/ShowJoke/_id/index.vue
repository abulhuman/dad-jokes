<template>
  <div>
    <v-btn @click="$router.push('/')"
      ><v-icon fab>mdi-chevron-left</v-icon>Go Back</v-btn
    >
    <JokeItem :id="$route.params.id" :joke="$route.params.joke" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      default: '',
      type: String,
    },
  },
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
}
</script>

<style></style>
