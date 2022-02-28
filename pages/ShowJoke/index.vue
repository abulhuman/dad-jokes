<template>
  <div>
    <p class="flex justify-center pt-8 sm:pt-0 lucida-header">
      Dad<span class="emphasis">J</span>okes🤣
    </p>
    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <h2 class="text-2xl leading-7 font-semibold">
        Welcome to the best corny Dad Jokes App on the Web
      </h2>
    </div>
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
  computed: {
    showJoke() {
      return this.joke()
    },
  },
}
</script>

<style></style>
